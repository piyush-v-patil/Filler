import fs from 'node:fs';
import path from 'node:path';
const outputRoot = path.resolve('outputs');
const reportPath = path.join(outputRoot, 'simplify-3.1.10-rea-analysis.json');
const raw = fs.readFileSync(reportPath);
const encoding = raw[0] === 255 && raw[1] === 254 ? 'utf16le' : 'utf8';
const evidence = JSON.parse(raw.toString(encoding).replace(/^\uFEFF/, ''));
const result = evidence.normalized_result;
const counts = {};
for (const node of result.graph.nodes) counts[node.kind] = (counts[node.kind] ?? 0) + 1;
const summary = `# Simplify Copilot 3.1.10 — static analysis

REA 6.7.0 analyzed the copied extension at \`C:\\Users\\patil\\Desktop\\3.1.10_0\`. The report is **partial**: the main content bundle exceeded the analyzer's memory limit. A separate retry of that bundle with a 2 GB heap also exhausted memory. Exit code 0 means REA returned a report; it does not mean every source was analyzed.

## REA results

- Parsed JavaScript files: ${result.statistics.parsed_javascript_files}.
- Skipped JavaScript files: ${result.statistics.skipped_javascript_files}.
- JavaScript module graph nodes: ${counts['javascript-module'] ?? 0}.
- Endpoint graph nodes: ${counts.endpoint ?? 0}. These are static observations, not proof that the extension contacted those endpoints.
- Graph coverage: ${result.graph.coverage.status}.
- Input digest: \`${evidence.subject.digest.sha256}\`.
- Evidence ID: \`${evidence.evidence_id}\`.

The JSON report preserves the complete returned Evidence. Static findings do not establish runtime reachability, authorization enforcement, or behavior on a particular job application site. Electron-specific summary fields do not describe Chrome extension messaging comprehensively.

## File and manifest inspection

These observations come from ordinary file inspection, separately from REA's graph:

| File | Role established by manifest or source inspection |
| --- | --- |
| background.js | Manifest V3 background service worker |
| content-scripts/content.js | Content script; runs at document end in all frames and dynamically imports contentScriptMain.js |
| contentScriptMain.js | Main imported content bundle; REA analysis remains incomplete |
| content-scripts/panel-restore.js | Content script; runs at document start in the top frame |
| pageScript.js | Declared web accessible; injection flow not traced |
| offscreen.html | Loads chunks/offscreen-Cu-p8G9n.js |
| chunks/webpack-D0-QTQ5z.js | Supporting JavaScript bundle |
| assets/pdf.worker-qd7jk0t8.js | PDF worker bundle |

The copy contains eight JavaScript files totaling 7,233,895 bytes. No .map or .wasm files were found. An embedded worker refers to a missing source map; this does not provide original source recovery. No action.default_popup is declared in the manifest.

## Execution and remaining work

The initial @latest command could not resolve npm's registry from the execution environment. The analysis therefore used the already installed REA 6.7.0 launcher. A temporary-file permission problem was resolved by directing TEMP and TMP to the workspace for that process. No browser interaction or extension code execution was performed; the copied extension files were left unchanged.

This produces an analysis report, not a recovered original source repository. The principal remaining task is targeted analysis of contentScriptMain.js, which may require splitting the bundle with preserved provenance or a lower-memory analysis approach. Full autofill behavior has not yet been traced.
`;
fs.writeFileSync(path.join(outputRoot, 'simplify-3.1.10-summary.md'), summary, 'utf8');
console.log(JSON.stringify({statistics: result.statistics, reportBytes: raw.length, summaryPath:path.join(outputRoot, 'simplify-3.1.10-summary.md')}, null, 2));
