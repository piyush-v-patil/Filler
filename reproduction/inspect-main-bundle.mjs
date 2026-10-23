import fs from 'node:fs';
import { parse } from 'file:///C:/Users/patil/AppData/Local/npm-cache/_npx/af752b90495482d7/node_modules/@babel/parser/lib/index.js';
const source = fs.readFileSync('C:/Users/patil/Desktop/3.1.10_0/contentScriptMain.js', 'utf8');
const ast = parse(source, {sourceType:'unambiguous', attachComment:false, tokens:false});
const first = ast.program.body[0];
const init = first.declarations?.[0]?.init;
const fun = init?.callee ?? init;
const body = fun?.body?.body;
if (!body) throw new Error('Unexpected outer bundle structure: ' + init?.type);
const units = body.flatMap(statement => statement.type === 'VariableDeclaration'
  ? statement.declarations.map(d => ({type:'declarator',kind:statement.kind,name:d.id.name ?? '[pattern]',start:d.start,end:d.end}))
  : [{type:statement.type,name:statement.id?.name ?? '',start:statement.start,end:statement.end}]);
const sizes = units.map(u => ({...u,chars:u.end-u.start,preview:source.slice(u.start,u.start+100)}));
const signals = units.filter(u => /autofill|autoFill|fillForm|fieldMapping|jobApplication/i.test(source.slice(u.start,u.end))).map(u => ({...u,chars:u.end-u.start}));
fs.writeFileSync('work/main-bundle-units.json', JSON.stringify({sourceBytes:Buffer.byteLength(source),sourceChars:source.length,outerType:init?.type,bodyStart:fun.body.start,bodyEnd:fun.body.end,units},null,2));
console.log(JSON.stringify({outerType:init?.type,statements:body.length,units:units.length,largest:sizes.sort((a,b)=>b.chars-a.chars).slice(0,15),signalUnits:signals.slice(0,35)},null,2));
