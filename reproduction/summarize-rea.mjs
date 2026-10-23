import fs from 'node:fs';
const path = process.argv[2];
const bytes = fs.readFileSync(path);
const encoding = bytes[0] === 255 && bytes[1] === 254 ? 'utf16le' : 'utf8';
const data = JSON.parse(bytes.toString(encoding).replace(/^\uFEFF/, ''));
const evidence = data.details?.partial_observation ?? data;
const result = evidence.normalized_result ?? {};
const graph = result.graph ?? {};
const counts = {};
for (const n of graph.nodes ?? []) counts[n.kind] = (counts[n.kind] ?? 0) + 1;
console.log(JSON.stringify({
  error: data.error, code: data.code, diagnostics: data.details?.diagnostics,
  evidence_id: evidence.evidence_id, subject: evidence.subject,
  result_keys: Object.keys(result), graph_keys: Object.keys(graph),
  coverage: graph.coverage, source_selection: result.source_selection,
  summary: result.summary, statistics: result.statistics, counts, limitations: evidence.limitations,
  result_limitations: result.limitations,
  unknowns: (graph.nodes ?? []).filter(n => n.kind === 'unknown').slice(0, 12).map(n => ({
    node_id: n.node_id, observations: n.observations?.map(o => ({label:o.label,
      analysis_status:o.properties?.analysis_status, path:o.properties?.path,
      limitation:o.properties?.limitation}))
  }))
}, null, 2));
