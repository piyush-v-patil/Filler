import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { parse } from 'file:///C:/Users/patil/AppData/Local/npm-cache/_npx/af752b90495482d7/node_modules/@babel/parser/lib/index.js';
const originalPath = 'C:/Users/patil/Desktop/3.1.10_0/contentScriptMain.js';
const originalBytes = fs.readFileSync(originalPath);
const original = originalBytes.toString('utf8');
const units = JSON.parse(fs.readFileSync('work/main-bundle-units.json','utf8')).units;
const output = path.resolve('outputs/content-script-main');
const inputs = path.join(output, 'inspection-chunks');
if(fs.existsSync(output)) throw new Error('Refusing to overwrite existing output directory');
fs.mkdirSync(inputs,{recursive:true});
const sha = x => crypto.createHash('sha256').update(x).digest('hex');
const sourceSha = sha(originalBytes);
const byteOffsets = new Uint32Array(original.length+1);
for(let i=0,b=0;i<original.length;){
  byteOffsets[i]=b; const cp=original.codePointAt(i); const n=cp>65535?2:1;
  if(n===2) byteOffsets[i+1]=b;
  b+=Buffer.byteLength(String.fromCodePoint(cp)); i+=n; byteOffsets[i]=b;
}
const ast = parse(original,{sourceType:'unambiguous',attachComment:false,tokens:true});
const templates=[]; const todo=[ast.program];
while(todo.length){ const node=todo.pop(); if(!node||typeof node!=='object')continue;
  if(node.type==='TemplateLiteral'){ templates.push([node.start,node.end]);continue; }
  for(const [k,v] of Object.entries(node)) if(!['loc','tokens','comments','extra'].includes(k)){
    if(Array.isArray(v)) todo.push(...v.filter(x=>x&&typeof x==='object')); else if(v&&typeof v==='object')todo.push(v);
  }
}
templates.sort((a,b)=>a[0]-b[0]);
let range=0,indent=0,previous=0; const formatted=[];
for(const token of ast.tokens){
  const label=token.type?.label;
  while(range<templates.length&&templates[range][1]<=token.start)range++;
  if(range<templates.length&&templates[range][0]<=token.start&&token.end<=templates[range][1])continue;
  if(!['{','}',';',','].includes(label))continue;
  if(label==='}')indent=Math.max(0,indent-1);
  if(label==='}'&&token.start>previous){formatted.push(original.slice(previous,token.start),'\n','  '.repeat(Math.min(indent,40)));previous=token.start;}
  formatted.push(original.slice(previous,token.end)); previous=token.end;
  if(label==='{')indent++;
  formatted.push('\n','  '.repeat(Math.min(indent,40)));
}
formatted.push(original.slice(previous));
const readable=formatted.join('');
const astShape = tree => sha(JSON.stringify(tree,(key,value)=>['start','end','loc','tokens','comments','leadingComments','innerComments','trailingComments','extra','errors'].includes(key)?undefined:value));
const originalShape=astShape(ast.program);
const readableShape=astShape(parse(readable,{sourceType:'unambiguous',attachComment:false}).program);
if(originalShape!==readableShape)throw new Error('Readable formatting changed AST structure');
fs.writeFileSync(path.join(output,'contentScriptMain.readable.js'),readable);
fs.writeFileSync(path.join(output,'contentScriptMain.original.js'),originalBytes);
const batches=[]; let current=[],size=0;
for(const u of units){
  if(current.length&&size+(u.end-u.start)>65000){batches.push(current);current=[];size=0;}
  current.push(u);size+=u.end-u.start;
}
if(current.length)batches.push(current);
const manifest={original_path:originalPath,original_sha256:sourceSha,original_bytes:originalBytes.length,
  original_ast_sha256:originalShape,readable_ast_sha256:readableShape,
  range_semantics:'half-open; UTF-16 code-unit offsets and UTF-8 byte offsets',
  transformation:'Each chunk is an artificial function containing exact original top-level statements or exact declarator slices prefixed with their original var/let/const keyword. The outer bundle wrapper, declaration separators and whitespace are replaced. Original dependencies across chunks and runtime equivalence are not established. Inspection only; do not execute.',
  chunks:[]};
const allPieces=[];
for(const [index,batch] of batches.entries()){
  const name=`chunk-${String(index+1).padStart(3,'0')}.js`;
  let text='// Derived inspection fragment. Do not execute. See ../provenance.json.\nfunction __rea_inspection_fragment__(){\n';
  const entries=[];
  for(const u of batch){
    const piece=original.slice(u.start,u.end);
    const bytes=originalBytes.subarray(byteOffsets[u.start],byteOffsets[u.end]);
    if(bytes.toString('utf8')!==piece)throw new Error('Byte range mismatch');
    const prefix=u.type==='declarator'?`${u.kind} `:'';
    const generatedStart=text.length+prefix.length;
    text+=prefix+piece+(u.type==='declarator'?';':'')+'\n';
    entries.push({name:u.name,type:u.type,utf16_start:u.start,utf16_end:u.end,byte_start:byteOffsets[u.start],byte_end:byteOffsets[u.end],sha256:sha(bytes),generated_utf16_start:generatedStart,generated_utf16_end:generatedStart+piece.length});
    allPieces.push({path:name,name:u.name,start:u.start,end:u.end});
  }
  text+='}\n';
  parse(text,{sourceType:'script',attachComment:false});
  fs.writeFileSync(path.join(inputs,name),text);
  manifest.chunks.push({path:`inspection-chunks/${name}`,bytes:Buffer.byteLength(text),sha256:sha(text),units:entries});
}
fs.writeFileSync(path.join(output,'provenance.json'),JSON.stringify(manifest,null,2));
fs.writeFileSync('work/main-bundle-piece-index.json',JSON.stringify(allPieces));
console.log(JSON.stringify({chunks:batches.length,units:units.length,astVerified:true,originalSha:sourceSha,largestChunk:Math.max(...manifest.chunks.map(c=>c.bytes)),output},null,2));
