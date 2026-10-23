> Follow-up: the main bundle now has a readable copy and fragment analysis. See [the detailed follow-up report](content-script-main/report.md). This document records the earlier whole-extension pass.

# Simplify Copilot 3.1.10 — static analysis

REA 6.7.0 analyzed the copied extension at `C:\Users\patil\Desktop\3.1.10_0`. The report is **partial**: the main content bundle exceeded the analyzer's memory limit. A separate retry of that bundle with a 2 GB heap also exhausted memory. Exit code 0 means REA returned a report; it does not mean every source was analyzed.

## REA results

- Parsed JavaScript files: 7.
- Skipped JavaScript files: 1.
- JavaScript module graph nodes: 70.
- Endpoint graph nodes: 273. These are static observations, not proof that the extension contacted those endpoints.
- Graph coverage: partial.
- Input digest: `486a18f4f2db8d81739731e6d6e0b20976c800b527e004211685a01fb17940cf`.
- Evidence ID: `ev_a68f273171f00653bc95401cc39b5de2e30814f991dfc509440d61c1281633f8`.

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
