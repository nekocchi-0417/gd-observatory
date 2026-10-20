// AI-assisted reference metadata, not verified findings or a count of unique studies.
// Run: node tools/build-library-view.js [--check]
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const {
  COLLECTIONS, canonicalURL, effectiveRecord, readCuration, serialize
} = require('./build-evidence-library.js');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = 'src/library-view-data.json';
const LANDSCAPE = COLLECTIONS.skills;
const TOPICS = Object.keys(COLLECTIONS);
const KINDS = new Set(['indicator', 'study', 'forecast', 'framework', 'report', 'dataset', 'benchmark']);
const SOURCE_ID = /^[A-Za-z0-9][A-Za-z0-9._:-]*$/;
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const text = value => typeof value === 'string' && value.trim().length > 0;
const year = value => Number.isInteger(value) && value > 0 && value <= 9999;
const digest = url => crypto.createHash('sha256').update(url).digest('hex').slice(0, 16);

function referenceId(url) {
  const canonical = canonicalURL(url);
  assert.ok(canonical, 'Reference ID requires a safe HTTP(S) URL');
  return 'ref:' + digest(canonical);
}

function isFutureSearchReference(row) {
  const branded = value => typeof value === 'string' &&
    /futuresearch/i.test(value.normalize('NFKC').replace(/[\s_.-]+/g, ''));
  if (['title', 'citation', 'cite', 'sourceId', 'id'].some(key => branded(row[key]))) return true;
  return ['url', 'link'].some(key => {
    const url = canonicalURL(row[key]);
    return url !== null && branded(new URL(url).hostname);
  });
}

function validateCuration(curation) {
  assert.ok(object(curation) && Array.isArray(curation.records), 'Expected curation records');
  const selectors = new Set();
  for (const item of curation.records) {
    assert.ok(object(item), 'Invalid curation record');
    assert.ok(Object.values(COLLECTIONS).includes(item.collection), 'Unknown curation collection');
    assert.ok(typeof item.sourceId === 'string' && SOURCE_ID.test(item.sourceId), 'Invalid curation sourceId');
    const key = JSON.stringify([item.collection, item.sourceId]);
    assert.ok(!selectors.has(key), 'Duplicate curation selector: ' + key);
    selectors.add(key);
    assert.ok(['hold', 'repair'].includes(item.action), 'Unknown curation action');
    assert.ok(item.fields === undefined || object(item.fields), 'Invalid curation fields');
    for (const [key, value] of Object.entries(item.fields || {})) {
      assert.ok(['title', 'cite', 'year', 'link', 'kind'].includes(key), 'Non-bibliography curation field: ' + key);
      if (key === 'kind') assert.ok(KINDS.has(value), 'Invalid curated kind');
      else if (key === 'year') assert.ok(year(value), 'Invalid curated year');
      else if (key === 'link') assert.ok(canonicalURL(value), 'Unsafe curated URL');
      else assert.ok(text(value), 'Invalid curated text');
    }
  }
}

function landscapeMetadata(row) {
  // Missing tags are empty lists, missing scalars are null. Preserve raw unknown labels.
  const tags = key => {
    if (row[key] == null) return [];
    assert.ok(Array.isArray(row[key]) && row[key].every(value => typeof value === 'string'), 'Invalid landscape ' + key);
    return [...row[key]];
  };
  const scalar = key => {
    const value = row[key] ?? null;
    assert.ok(value === null || typeof value === 'string', 'Invalid landscape ' + key);
    return value;
  };
  const genai = row.genai ?? null;
  assert.ok(genai === null || typeof genai === 'boolean', 'Invalid landscape genai');
  return {
    sourceId: row.id,
    constructs: tags('constructs'),
    measures: tags('measures'),
    design: scalar('design'),
    level: scalar('level'),
    side: scalar('side'),
    genai,
    timespan: scalar('timespan'),
    domain: scalar('domain')
  };
}

function loadInputs(root = ROOT) {
  return {
    catalog: JSON.parse(fs.readFileSync(path.join(root, 'src/evidence-library.json'), 'utf8')),
    landscape: JSON.parse(fs.readFileSync(path.join(root, LANDSCAPE), 'utf8')),
    curation: readCuration(root)
  };
}

function buildLibraryView({catalog, landscape, curation = {records: []}}) {
  assert.ok(object(catalog), 'Expected a topic catalog');
  assert.ok(Array.isArray(landscape) && landscape.every(object), 'Expected landscape records');
  validateCuration(curation);
  for (const topic of Object.keys(catalog)) {
    assert.ok(TOPICS.includes(topic), 'Unknown topic: ' + topic);
    assert.ok(Array.isArray(catalog[topic]), 'Expected topic entries: ' + topic);
  }
  const groups = new Map(), sourceSlots = new Set();
  let topicEntries = 0;
  // Existing step order chooses display metadata when references disagree across topics.
  // Explicit curation kinds take precedence; no inference from raw type or design.
  for (const topic of TOPICS) {
    const topicURLs = new Set();
    for (const entry of catalog[topic] || []) {
      topicEntries++;
      assert.ok(object(entry), 'Invalid catalog entry');
      const url = canonicalURL(entry.url);
      assert.ok(url, 'Unsafe catalog URL');
      assert.equal(entry.id, topic + ':' + digest(url), 'Catalog identifier does not match topic/URL');
      assert.ok(!topicURLs.has(url), 'Duplicate canonical URL within topic: ' + topic);
      topicURLs.add(url);
      assert.ok(text(entry.title) && text(entry.citation), 'Missing bibliography text');
      assert.ok(year(entry.year), 'Invalid bibliography year');
      assert.ok(KINDS.has(entry.kind), 'Invalid bibliography kind');
      assert.ok(Array.isArray(entry.provenance) && entry.provenance.length, 'Missing provenance');
      if (!groups.has(url)) groups.set(url, {
        entry, topics: [], sources: [], kinds: new Set(), excluded: false
      });
      const group = groups.get(url);
      group.topics.push(topic);
      group.excluded ||= isFutureSearchReference(entry);
      for (const source of entry.provenance) {
        assert.ok(object(source), 'Invalid provenance');
        assert.equal(source.collection, COLLECTIONS[topic], 'Provenance collection does not match topic');
        assert.ok(typeof source.sourceId === 'string' && SOURCE_ID.test(source.sourceId), 'Invalid provenance sourceId');
        assert.ok(Number.isSafeInteger(source.record) && source.record > 0, 'Invalid provenance record');
        const slot = JSON.stringify([source.collection, source.record]);
        assert.ok(!sourceSlots.has(slot), 'Repeated provenance record: ' + slot);
        sourceSlots.add(slot);
        const original = source.collection === LANDSCAPE ? landscape[source.record - 1] : {id: source.sourceId};
        assert.ok(original && original.id === source.sourceId, 'Landscape record/sourceId mismatch');
        const effective = effectiveRecord(original, source.collection, curation);
        assert.notEqual(effective.correction?.action, 'hold', 'Held provenance in catalog; rebuild evidence-library first');
        if (source.collection === LANDSCAPE || effective.correction?.fields?.link !== undefined) {
          assert.equal(canonicalURL(effective.row.link), url, 'Provenance effective URL mismatch (no fuzzy joins)');
        }
        if (effective.correction?.fields?.kind) group.kinds.add(effective.correction.fields.kind);
        group.excluded ||= isFutureSearchReference(source) ||
          isFutureSearchReference(original) || isFutureSearchReference(effective.row);
        group.sources.push({
          provenance: {collection: source.collection, sourceId: source.sourceId, record: source.record},
          raw: source.collection === LANDSCAPE ? original : null
        });
      }
    }
  }
  const records = [];
  let excludedReferences = 0;
  for (const [url, group] of groups) {
    // Exclude the entire URL identity if any topic alias or matched source is branded.
    if (group.excluded) { excludedReferences++; continue; }
    assert.ok(group.kinds.size <= 1, 'Conflicting curated kinds for ' + url);
    group.sources.sort((a, b) => compare(a.provenance.collection, b.provenance.collection) ||
      a.provenance.record - b.provenance.record || compare(a.provenance.sourceId, b.provenance.sourceId));
    const entry = group.entry;
    records.push({
      id: referenceId(url), title: entry.title, citation: entry.citation, url,
      year: entry.year, kind: [...group.kinds][0] || entry.kind,
      topics: group.topics,
      provenance: group.sources.map(source => source.provenance),
      landscape: group.sources.filter(source => source.raw).map(source => landscapeMetadata(source.raw))
    });
  }
  records.sort((a, b) => b.year - a.year || compare(a.title, b.title) || compare(a.url, b.url));
  assert.equal(new Set(records.map(row => row.id)).size, records.length, 'Reference ID collision');
  return {
    updated: '2026-10-19', records,
    stats: {
      topicEntries,
      includedReferences: records.length,
      // These two counts are URL references, not raw records or unique studies.
      landscapeReferences: records.filter(row => row.landscape.length > 0).length,
      excludedReferences,
      // Curation holds are raw records, already absent from the source catalog.
      heldRecords: curation.records.filter(row => row.action === 'hold').length
    },
    schemaVersion: 1
  };
}

if (require.main === module) {
  const args = process.argv.slice(2);
  assert.ok(args.length === 0 || (args.length === 1 && args[0] === '--check'),
    'Usage: node tools/build-library-view.js [--check]');
  const view = buildLibraryView(loadInputs());
  const content = serialize(view), output = path.join(ROOT, OUTPUT);
  if (args[0] === '--check') {
    assert.ok(fs.existsSync(output) && fs.readFileSync(output, 'utf8') === content, OUTPUT + ' needs regeneration');
  } else fs.writeFileSync(output, content);
  console.log(JSON.stringify({action: args[0] === '--check' ? 'checked' : 'generated', output: OUTPUT, ...view.stats}, null, 2));
}

module.exports = {buildLibraryView, loadInputs, isFutureSearchReference, referenceId, serialize};
