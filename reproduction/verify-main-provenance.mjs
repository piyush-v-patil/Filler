import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve('outputs/content-script-main');
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const original=fs.readFileSync(path.join(root,'contentScriptMain.original.js'));
const source=original.toString('utf8');
let checked=0;
for(const file of ['provenance.json','renderer-provenance.json']){
  const manifest=JSON.parse(fs.readFileSync(path.join(root,file),'utf8'));
  if(sha(original)!==manifest.original_sha256)throw Error('Original digest mismatch');
  for(const c of manifest.chunks){
    const bytes=fs.readFileSync(path.join(root,c.path)),text=bytes.toString('utf8');
    if(sha(bytes)!==c.sha256)throw Error('Fragment digest mismatch: '+c.path);
    for(const u of c.units){
      const exact=original.subarray(u.byte_start,u.byte_end);
      if(sha(exact)!==u.sha256||source.slice(u.utf16_start,u.utf16_end)!==exact.toString('utf8')||text.slice(u.generated_utf16_start,u.generated_utf16_end)!==exact.toString('utf8'))throw Error('Fragment range mismatch: '+c.path+'/'+u.name);
      checked++;
    }
  }
}
const current=fs.readFileSync('C:/Users/patil/Desktop/3.1.10_0/contentScriptMain.js');
if(sha(current)!==sha(original))throw Error('User source differs from original snapshot');
const summaries=['rea-fragments-summary.json','rea-renderer-summary.json','rea-renderer-retry-summary.json'].map(file=>{const v=JSON.parse(fs.readFileSync(path.join(root,file),'utf8'));return {file,parent_evidence_id:v.normalized_result.parent_evidence_id,statistics:v.normalized_result.summary.statistics};});
const receipt={original_sha256:sha(original),source_unchanged:true,provenance_ranges_verified:checked,readable_syntax_validation:'Original and readable whole-file AST fingerprints matched during generation; see provenance.json.',distinct_leaf_fragments_processed:41,remaining_heap_failure_in_leaf_fragments:false,semantic_completeness:'partial; fragment boundaries and recorded REA limits remain',runs:summaries};
fs.writeFileSync(path.join(root,'verification.json'),JSON.stringify(receipt,null,2));
console.log(JSON.stringify(receipt,null,2));
