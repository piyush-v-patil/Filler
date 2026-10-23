import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {parse} from 'file:///C:/Users/patil/AppData/Local/npm-cache/_npx/af752b90495482d7/node_modules/@babel/parser/lib/index.js';
const originalPath='C:/Users/patil/Desktop/3.1.10_0/contentScriptMain.js';
const originalBytes=fs.readFileSync(originalPath),source=originalBytes.toString('utf8');
const ast=parse(source,{sourceType:'unambiguous',attachComment:false});
const body=ast.program.body[0].declarations[0].init.callee.body.body;
const qb=body.flatMap(s=>s.declarations??[]).find(d=>d.id.name==='qb');
const factory=qb.init.arguments[0];
if(!['ArrowFunctionExpression','FunctionExpression'].includes(factory.type)||factory.body.type!=='BlockStatement')throw Error('Unexpected factory shape');
const units=factory.body.body.flatMap(s=>s.type==='VariableDeclaration'?s.declarations.map(d=>({kind:s.kind,type:'declarator',name:d.id.name??'[pattern]',start:d.start,end:d.end})):[{type:s.type,name:s.id?.name??'',start:s.start,end:s.end}]);
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const output=path.resolve('outputs/content-script-main/renderer-fragments');
fs.mkdirSync(output,{recursive:false});
const groups=[];let current=[],size=0;
for(const u of units){if(current.length&&size+u.end-u.start>28000){groups.push(current);current=[];size=0;}current.push(u);size+=u.end-u.start;}
if(current.length)groups.push(current);
const params=factory.params.map(p=>source.slice(p.start,p.end)).join(',');
const manifest={original_path:originalPath,original_sha256:sha(originalBytes),parent_original_utf16_range:[qb.start,qb.end],parent_name:'qb',original_factory_parameters:params,range_semantics:'Half-open UTF-16 code units and UTF-8 byte offsets',limitations:['Derived inspection fragments, not independently runnable equivalents.','Shared factory scope and cross-fragment relationships require checking against original source.'],chunks:[]};
for(const [i,group] of groups.entries()){
  const name=`renderer-${String(i+1).padStart(2,'0')}.js`;let text=`// Inspection only. Original qb factory fragment. Do not execute.\nfunction __renderer_fragment__(${params}){\n`;const entries=[];
  for(const u of group){const piece=source.slice(u.start,u.end),prefix=u.type==='declarator'?u.kind+' ':'';const generatedStart=text.length+prefix.length;
    text+=prefix+piece+(u.type==='declarator'?';':'')+'\n';
    const byteStart=Buffer.byteLength(source.slice(0,u.start)),byteEnd=Buffer.byteLength(source.slice(0,u.end));
    if(originalBytes.subarray(byteStart,byteEnd).toString('utf8')!==piece)throw Error('Provenance mismatch');
    entries.push({name:u.name,type:u.type,utf16_start:u.start,utf16_end:u.end,byte_start:byteStart,byte_end:byteEnd,sha256:sha(piece),generated_utf16_start:generatedStart,generated_utf16_end:generatedStart+piece.length});
  }
  text+='}\n';parse(text,{sourceType:'script',attachComment:false});fs.writeFileSync(path.join(output,name),text);
  manifest.chunks.push({path:`renderer-fragments/${name}`,bytes:Buffer.byteLength(text),sha256:sha(text),units:entries});
}
fs.writeFileSync('outputs/content-script-main/renderer-provenance.json',JSON.stringify(manifest,null,2));
console.log(JSON.stringify({units:units.length,chunks:groups.length,largest:Math.max(...manifest.chunks.map(c=>c.bytes)),parameters:params}));
