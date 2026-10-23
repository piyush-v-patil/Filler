import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('outputs/content-script-main');
const url=p=>path.join(root,p).replaceAll('\\','/');
const link=(label,file,line)=>`[${label}](${url(file)}${line?':'+line:''})`;
const code=(label,line)=>link(label,'contentScriptMain.readable.js',line);
for(const [source,dest] of [['autofill-findings.md','autofill-details.md'],['bootstrap-findings.md','bootstrap-details.md']]){
  let text=fs.readFileSync(path.join('work',source),'utf8');
  text=text.replaceAll('`outputs/content-script-main/contentScriptMain.readable.js`',link('the readable bundle','contentScriptMain.readable.js'));
  text=text.replaceAll('`work/main-bundle-units.json`',link('the provenance manifest','provenance.json'));
  fs.writeFileSync(path.join(root,dest),text);
}
const report=`# contentScriptMain.js — analysis and readable source

The memory blocker was worked around by extracting smaller, traceable inspection fragments. **All 41 final fragments were processed across three REA runs.** The full readable file retains the original minified names; it is formatted JavaScript, not recovered original TypeScript or a recreated source repository.

Start with ${link('the readable JavaScript','contentScriptMain.readable.js')} or the function links below. The copied extension on your Desktop was not modified, and its code was not executed.

## What the source shows

The main autofill dependency chain is:

**Normalize profile → discover form fields → resolve answers → schedule filling → dispatch field/control handler.**

This chain is coordinated through shared state and React hooks/effects, rather than a single synchronous function call.

| Stage | Source entry | Observed role |
| --- | --- | --- |
| Startup | ${code('Hhe',162025)} and ${code('runtime listener',162283)} | Starts the UI/controller tree; handles run and triggerFill messages; avoids triggering a second fill while filling. |
| Configuration | ${code('Cu',14329)} | Requests remote configuration through background messaging, then tries session cache and packaged remoteConfig.json. |
| Profile | ${code('XT',55021)} | Prepares names, files, dates, geography, employment/education, skills, and other candidate data for filling. |
| Field discovery | ${code('tj',52387)} | Combines configured ATS selectors and tracked selectors, inspects labels/options, and reacts to DOM changes. |
| Answer resolution | ${code('lN',55798)} | Combines local/profile answers with configured background answer requests; applies settings and eligibility gates. |
| Scheduling | ${code('ZC',48629)} | Coordinates selected field paths, progress, pending answers, timing, and cancellation. |
| Dispatch | ${code('JC',48253)} | Routes ordinary fields to jw, tracked fields to _S, and repeated field groups to group handling. |
| Tracked field filling | ${code('_S',45764)} | Resolves values/options, checks exclusions and compatibility, and selects configured, ATS, or default handlers. |
| Control handlers | ${code('jw',43844)} and ${code('xx',42640)} | Native inputs, selects, checkboxes, framework controls, date controls, file uploads, and the page-script bridge. |

Some answer operations cross into background.js using names such as requestGPTValue and requestCopilotAnswerForTrackedInputs. Those names do not reveal the backend model, prompt, implementation, or prove that every field uses AI. The page-world bridge sends __simplify__fillInput and waits for a matching __simplify__updateFilledInput response; the implementation in pageScript.js is a separate target.

Detailed source-backed notes: ${link('autofill flow','autofill-details.md')} and ${link('startup, configuration, and messaging','bootstrap-details.md')}.

## What REA completed

| Run | Result | Parent Evidence |
| --- | --- | --- |
| Main bundle split into 35 fragments | 34 processed; the large qb React renderer fragment exceeded 768 MiB | ev_23fc1ff77a8e53790918fec846386a1d945045f64d8b38be2a8006c783587982 |
| Renderer split into 7 smaller fragments | 6 processed; renderer-04 exceeded 512 MiB | ev_8c58628127fed7c6d606880b587b960b1b1d0d993f644271f86647929034d062 |
| renderer-04 only, at 1024 MiB | Processed, zero skipped JavaScript files | ev_9c5ee2d9f48cbbda108e4ce0206717968a24b66c4abde8f10affe4c4567cea0d |

The resulting distinct fragment count is **34 + 7 = 41**, replacing the original failed renderer fragment. These are artificial inspection fragments, not recovered original modules. REA analyzed those derived files; its results must not be described as a complete graph of the unchanged original bundle.

${link('Full exported REA evidence','rea-evidence-bundle.json')} contains six records, including the three analyses and their summary views (about 120 MB). The earlier failures remain recorded rather than overwritten with a claim of complete coverage. Compact receipts are ${link('main-fragment summary','rea-fragments-summary.json')}, ${link('renderer summary','rea-renderer-summary.json')}, and ${link('successful renderer retry','rea-renderer-retry-summary.json')}.

## Validation and limits

- The complete original bundle parsed, and the readable copy produced the same AST fingerprint after ignoring source positions, comments, and raw-format metadata. Only whitespace formatting was added.
- Verified 5,183 recorded source-range mappings across the first extraction and nested renderer extraction. Each maps exact original bytes to the generated fragment. Source and fragment SHA-256 digests were checked.
- The original Desktop file still matches the saved snapshot: aaedc039ee48f3c9a0093bd089048063996d63f0e5038c3dbaf6cba75544a542.
- Whole-program semantic coverage remains **partial**. Splitting removes shared lexical scope, and configured REA limits omitted some semantic records. Cross-fragment calls, closures, initialization order, and dynamic behavior require checking against the full source.
- The findings above are ordinary static source observations, separate from REA's fragment Evidence. No browser behavior, autofill success, target network request, or backend behavior was observed.
- No original source maps were available. Original TypeScript, original source-file organization, and lost names/comments remain unrecovered.

Verification files: ${link('verification receipt','verification.json')}, ${link('main extraction provenance','provenance.json')}, and ${link('renderer extraction provenance','renderer-provenance.json')}.

The useful next targets for a deeper reconstruction are the background answer-message handlers, pageScript.js control handlers, and specific ATS entries in remoteConfig.json. Those implementations were not traced in this pass.
`;
fs.writeFileSync(path.join(root,'report.md'),report);
const firstPassPath=path.resolve('outputs/simplify-3.1.10-summary.md');
const firstPass=fs.readFileSync(firstPassPath,'utf8');
const followup=`> Follow-up: the main bundle now has a readable copy and fragment analysis. See ${link('the detailed follow-up report','report.md')}. This document records the earlier whole-extension pass.\n\n`;
if(!firstPass.startsWith('> Follow-up:'))fs.writeFileSync(firstPassPath,followup+firstPass);
console.log(JSON.stringify({report:path.join(root,'report.md'),bytes:Buffer.byteLength(report)}));
