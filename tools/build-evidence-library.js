// Generate bibliography metadata only. Legacy AI-assisted checks are not approval.
// Run: node tools/build-evidence-library.js [--check]
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const canonicalURL = require('../src/library-url.js');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = 'src/evidence-library.json';
// research/README.md maps the entire agency/skills landscape to the skills step.
const COLLECTIONS = {
  capability: 'research/scan4/capability.jsonl',
  adoption: 'research/scan4/adoption.jsonl',
  handover: 'research/scan4/handover.jsonl',
  work: 'research/scan4/work.jsonl',
  share: 'research/scan4/share.jsonl',
  skills: 'research/landscape/master.json',
  culture: 'research/scan4/culture.jsonl',
  institutions: 'research/scan4/institutions.jsonl',
  influence: 'research/scan4/influence.jsonl'
};
const SCAN_KINDS = new Set(['indicator', 'study', 'forecast', 'framework']);
const LANDSCAPE_KINDS = {
  'peer-reviewed': 'study',
  preprint: 'study',
  report: 'report',
  dataset: 'dataset',
  benchmark: 'benchmark'
};

const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const textField = value => typeof value === 'string' ? value.trim() : '';

function readCollection(root, collection) {
  const text = fs.readFileSync(path.join(root, collection), 'utf8');
  if (collection.endsWith('.jsonl')) {
    return text.split(/\r?\n/).flatMap((line, i) => line.trim() ? [{row: JSON.parse(line), record: i + 1}] : []);
  }
  const rows = JSON.parse(text);
  if (!Array.isArray(rows)) throw new Error(collection + ': expected an array');
  return rows.map((row, i) => ({row, record: i + 1}));
}

function buildCatalog(root = ROOT) {
  const catalog = {};
  const report = {topics: {}, skipped: [], merged: [], ambiguities: [], possibleDuplicates: []};
  for (const [topic, collection] of Object.entries(COLLECTIONS)) {
    const records = readCollection(root, collection);
    const entries = new Map();
    const isScan = collection.endsWith('.jsonl');
    let skipped = 0;
    for (const {row, record} of records) {
      if (isScan && row.stop !== topic) throw new Error(`${collection}:${record}: unexpected step ${row.stop}`);
      const provenance = {collection, sourceId: textField(row.id), record};
      const url = canonicalURL(row.link);
      const title = textField(row.title), citation = textField(row.cite);
      const kind = isScan ? row.kind : LANDSCAPE_KINDS[row.type];
      let reason;
      if (!url) reason = 'Missing, invalid or unsafe HTTP(S) URL';
      else if (!provenance.sourceId || !title || !citation || !Number.isInteger(row.year)) reason = 'Incomplete bibliography metadata';
      else if (!kind || (isScan && !SCAN_KINDS.has(kind))) reason = 'Unrecognised bibliography kind';
      if (reason) {
        report.skipped.push({topic, ...provenance, reason});
        skipped++;
        continue;
      }
      const entry = {
        id: topic + ':' + crypto.createHash('sha256').update(url).digest('hex').slice(0, 16),
        title, citation, url, year: row.year, kind, provenance: [provenance]
      };
      const existing = entries.get(url);
      if (existing) {
        // First source record supplies display metadata; every original record remains traceable.
        const fields = ['title', 'citation', 'year', 'kind'].filter(key => existing[key] !== entry[key]);
        const detail = {topic, url, kept: existing.provenance[0], merged: provenance};
        report.merged.push(detail);
        if (fields.length) report.ambiguities.push({...detail, fields});
        existing.provenance.push(provenance);
      } else {
        entries.set(url, entry);
      }
    }
    catalog[topic] = [...entries.values()].sort((a, b) => b.year - a.year || compare(a.title, b.title) || compare(a.url, b.url));
    const titles = new Map();
    for (const entry of catalog[topic]) {
      const key = entry.title.toLowerCase().replace(/\s+/g, ' ');
      if (!titles.has(key)) titles.set(key, []);
      titles.get(key).push(entry.url);
    }
    for (const [title, urls] of titles) {
      if (urls.length > 1) report.possibleDuplicates.push({topic, title, urls});
    }
    report.topics[topic] = {input: records.length, entries: entries.size, skipped, merged: records.length - skipped - entries.size};
  }
  const ids = Object.values(catalog).flat().map(entry => entry.id);
  if (new Set(ids).size !== ids.length) throw new Error('Generated bibliography ID collision');
  report.totals = Object.values(report.topics).reduce((total, row) => {
    for (const key of ['input', 'entries', 'skipped', 'merged']) total[key] += row[key];
    return total;
  }, {input: 0, entries: 0, skipped: 0, merged: 0});
  return {catalog, report};
}

function serialize(catalog) {
  return JSON.stringify(catalog, null, 2).replace(/</g, '\\u003c') + '\n';
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length > 1 || (args.length === 1 && args[0] !== '--check')) {
    throw new Error('Usage: node tools/build-evidence-library.js [--check]');
  }
  const {catalog, report} = buildCatalog();
  const output = path.join(ROOT, OUTPUT), content = serialize(catalog);
  if (args[0] === '--check') {
    if (!fs.existsSync(output) || fs.readFileSync(output, 'utf8') !== content) throw new Error(OUTPUT + ' needs regeneration');
  } else {
    fs.writeFileSync(output, content);
  }
  console.log(JSON.stringify({action: args[0] === '--check' ? 'checked' : 'generated', output: OUTPUT, ...report}, null, 2));
}

module.exports = {COLLECTIONS, canonicalURL, readCollection, buildCatalog, serialize};
