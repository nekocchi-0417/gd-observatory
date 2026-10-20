// Bibliographic export only. Quote cells and neutralise spreadsheet formula prefixes.
function csvCell(value) {
  let text = String(value ?? '');
  if (/^[\s\uFEFF]*[=+@-]/.test(text) || /^[\t\r\n]/.test(text)) text = "'" + text;
  return '"' + text.replace(/"/g, '""') + '"';
}

function libraryCSV(data) {
  const rows = [['Reference ID','Title','Citation','Year','Type','Source URL','Pathway steps','Scan provenance','Review status']];
  for (const entry of data.records) rows.push([
    entry.id, entry.title, entry.citation, entry.year, entry.kind, entry.url,
    entry.topics.join('; '),
    entry.provenance.map(p => `${p.collection}#${p.record}:${p.sourceId}`).join('; '),
    'AI-assisted and not yet verified'
  ]);
  return rows.map(row => row.map(csvCell).join(',')).join('\n') + '\n';
}

module.exports = {libraryCSV, csvCell};
