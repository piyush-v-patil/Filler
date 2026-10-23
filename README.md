# Simplify Copilot 3.1.10 — editor handoff

Start with [the main analysis report](analysis/content-script-main/report.md).

## Included

- `original-extension/3.1.10_0/`: complete copy of the installed extension, including manifest, background worker, page script, configuration, assets, and bundles.
- `analysis/content-script-main/contentScriptMain.readable.js`: whitespace-formatted main bundle, verified to retain the original parsed syntax.
- `analysis/content-script-main/report.md`: architecture, autofill flow, source navigation, coverage, and limitations.
- `analysis/content-script-main/autofill-details.md` and `bootstrap-details.md`: detailed static findings.
- `analysis/`: original whole-extension REA report, fragment reports, full exported Evidence, provenance, and verification receipts.
- `reproduction/`: analysis helper scripts and declaration indexes. These scripts contain paths for the original analysis machine; adjust paths and install their parser dependencies before use.
- `PACKAGE-MANIFEST.json`: archived file paths, sizes, and SHA-256 hashes. Markdown links were made relative for portability; source and archived hashes are recorded separately for those files.

## Current state

The complete main bundle was parsed and its readable formatting was checked against the original AST. REA processed 41 distinct final inspection fragments across multiple runs. Fragment boundaries remove shared scope, and semantic output limits leave some relationships unresolved. All fragments being processed does not establish complete whole-program behavior.

The traced autofill sequence is profile normalization, field discovery, answer resolution, fill scheduling, then site/control handler dispatch. This package contains static analysis and shipped JavaScript; original TypeScript, original module organization, names, and comments were not recovered.

The next targets are background.js answer handlers, pageScript.js control handlers, and relevant ATS configuration. Simplify's server-side implementation is not part of the installed extension. No target code or live autofill was executed during this analysis.

