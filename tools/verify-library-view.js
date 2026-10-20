// Read-only checks of the generated view, source coverage, and synthetic edge cases.
// Run: node tools/verify-library-view.js
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const {
  buildLibraryView, loadInputs, isFutureSearchReference, referenceId, serialize
} = require('./build-library-view.js');
const {
  COLLECTIONS, canonicalURL, buildCatalog, readCollection, effectiveRecord
} = require('./build-evidence-library.js');

const ROOT = path.resolve(__dirname, '..');
const LANDSCAPE = COLLECTIONS.skills;
const TOPICS = Object.keys(COLLECTIONS);
const key = source => JSON.stringify([source.collection, source.sourceId, source.record]);
const sorted = values => [...values].sort();
const keys = (row, expected) => assert.deepEqual(sorted(Object.keys(row)), sorted(expected));
let tests = 0;
function test(name, run) {
  try { run(); tests++; }
  catch (error) { error.message = name + ': ' + error.message; throw error; }
}

const inputs = loadInputs();
const before = structuredClone(inputs);
const view = buildLibraryView(inputs);
const source = buildCatalog();
const collections = new Map(Object.values(COLLECTIONS).map(collection => [collection, readCollection(ROOT, collection)]));
const original = provenance => {
  const record = collections.get(provenance.collection).find(row => row.record === provenance.record);
  assert.ok(record, 'Original source record exists');
  assert.equal(record.row.id, provenance.sourceId, 'Original source ID agrees');
  return record.row;
};
const groups = new Map();
for (const [topic, entries] of Object.entries(inputs.catalog)) {
  for (const entry of entries) {
    const url = canonicalURL(entry.url);
    if (!groups.has(url)) groups.set(url, []);
    groups.get(url).push({topic, entry});
  }
}
const excluded = new Set([...groups].filter(([, entries]) => entries.some(({entry}) =>
  isFutureSearchReference(entry) || entry.provenance.some(p =>
    isFutureSearchReference(p) || isFutureSearchReference(original(p)) ||
    isFutureSearchReference(effectiveRecord(original(p), p.collection, inputs.curation).row)
  ))).map(([url]) => url));
const byURL = new Map(view.records.map(row => [row.url, row]));

test('current catalog and generated file', () => {
  assert.equal(serialize(inputs.catalog), serialize(source.catalog), 'Source catalog must reflect effective curation');
  assert.equal(fs.readFileSync(path.join(ROOT, 'src/library-view-data.json'), 'utf8'), serialize(view));
});

test('determinism and no input mutation', () => {
  assert.deepEqual(inputs, before);
  assert.equal(serialize(view), serialize(buildLibraryView(inputs)));
  const reordered = structuredClone(inputs);
  reordered.catalog = Object.fromEntries(Object.entries(reordered.catalog).reverse().map(([topic, entries]) =>
    [topic, entries.reverse().map(entry => ({...entry, provenance: entry.provenance.reverse()}))]));
  reordered.curation.records.reverse();
  assert.equal(serialize(view), serialize(buildLibraryView(reordered)));
});

test('output contract and safe identifiers', () => {
  keys(view, ['updated', 'records', 'stats', 'schemaVersion']);
  assert.equal(view.updated, '2026-10-19');
  assert.equal(view.schemaVersion, 1);
  keys(view.stats, ['topicEntries', 'includedReferences', 'landscapeReferences', 'excludedReferences', 'heldRecords']);
  for (const value of Object.values(view.stats)) assert.ok(Number.isSafeInteger(value) && value >= 0);
  assert.equal(new Set(view.records.map(row => row.id)).size, view.records.length);
  assert.equal(byURL.size, view.records.length);
  for (const row of view.records) {
    keys(row, ['id', 'title', 'citation', 'url', 'year', 'kind', 'topics', 'provenance', 'landscape']);
    assert.match(row.id, /^ref:[a-f0-9]{16}$/);
    assert.equal(row.id, referenceId(row.url));
    assert.equal(canonicalURL(row.url), row.url);
    assert.ok(!isFutureSearchReference(row));
    assert.ok(typeof row.title === 'string' && row.title.trim());
    assert.ok(typeof row.citation === 'string' && row.citation.trim());
    assert.ok(Number.isInteger(row.year) && row.year > 0 && row.year <= 9999);
    assert.ok(['indicator', 'study', 'forecast', 'framework', 'report', 'dataset', 'benchmark'].includes(row.kind));
    assert.ok(Array.isArray(row.topics) && row.topics.length);
    assert.deepEqual(row.topics, TOPICS.filter(topic => row.topics.includes(topic)));
    assert.ok(Array.isArray(row.provenance) && row.provenance.length);
    assert.ok(Array.isArray(row.landscape));
    for (const p of row.provenance) {
      keys(p, ['collection', 'sourceId', 'record']);
      assert.ok(Object.values(COLLECTIONS).includes(p.collection));
      assert.match(p.sourceId, /^[A-Za-z0-9][A-Za-z0-9._:-]*$/);
      assert.ok(Number.isSafeInteger(p.record) && p.record > 0);
    }
    for (const metadata of row.landscape) {
      keys(metadata, ['sourceId', 'constructs', 'measures', 'design', 'level', 'side', 'genai', 'timespan', 'domain']);
      assert.match(metadata.sourceId, /^[A-Za-z0-9][A-Za-z0-9._:-]*$/);
      for (const field of ['constructs', 'measures']) {
        assert.ok(Array.isArray(metadata[field]) && metadata[field].every(value => typeof value === 'string'));
      }
      for (const field of ['design', 'level', 'side', 'timespan', 'domain']) {
        assert.ok(metadata[field] === null || typeof metadata[field] === 'string');
      }
      assert.ok(metadata.genai === null || typeof metadata.genai === 'boolean');
    }
  }
});

test('counts and every topic/provenance survive URL merges', () => {
  assert.deepEqual(view.stats, {
    topicEntries: Object.values(inputs.catalog).reduce((sum, entries) => sum + entries.length, 0),
    includedReferences: groups.size - excluded.size,
    landscapeReferences: [...groups].filter(([url, entries]) => !excluded.has(url) &&
      entries.some(({entry}) => entry.provenance.some(p => p.collection === LANDSCAPE))).length,
    excludedReferences: excluded.size,
    heldRecords: inputs.curation.records.filter(item => item.action === 'hold').length
  });
  for (const [url, entries] of groups) {
    if (excluded.has(url)) { assert.ok(!byURL.has(url)); continue; }
    const row = byURL.get(url);
    assert.ok(row, 'Every eligible canonical URL is included');
    assert.deepEqual(sorted(row.topics), sorted(entries.map(item => item.topic)));
    assert.deepEqual(sorted(row.provenance.map(key)), sorted(entries.flatMap(({entry}) => entry.provenance.map(key))));
    const donor = entries.find(item => item.topic === row.topics[0]).entry;
    for (const field of ['title', 'citation', 'year']) assert.equal(row[field], donor[field]);
  }
});

test('all original eligible mapped references and exact raw landscape joins', () => {
  const skipped = new Set(source.report.skipped.map(key));
  const expected = [];
  for (const [collection, records] of collections) {
    for (const {row, record} of records) {
      const p = {collection, sourceId: row.id, record};
      if (!skipped.has(key(p)) && !excluded.has(canonicalURL(effectiveRecord(row, collection, inputs.curation).row.link))) {
        expected.push(key(p));
      }
    }
  }
  const actual = view.records.flatMap(row => row.provenance.map(key));
  assert.equal(new Set(actual).size, actual.length);
  assert.deepEqual(sorted(actual), sorted(expected));
  for (const row of view.records) {
    const expectedLandscape = [];
    for (const p of row.provenance) {
      assert.ok(!skipped.has(key(p)));
      const raw = original(p);
      const effective = effectiveRecord(raw, p.collection, inputs.curation);
      assert.notEqual(effective.correction?.action, 'hold');
      assert.equal(canonicalURL(effective.row.link), row.url);
      if (effective.correction?.fields?.kind) assert.equal(row.kind, effective.correction.fields.kind);
      if (p.collection === LANDSCAPE) expectedLandscape.push({
        sourceId: raw.id, constructs: raw.constructs ?? [], measures: raw.measures ?? [],
        design: raw.design ?? null, level: raw.level ?? null, side: raw.side ?? null,
        genai: raw.genai ?? null, timespan: raw.timespan ?? null, domain: raw.domain ?? null
      });
    }
    assert.deepEqual(row.landscape, expectedLandscape, 'Raw tags only, in provenance order');
  }
  for (const sourceId of ['macnamara2024', 'crootof2023']) {
    assert.equal(view.records.find(row => row.provenance.some(p => p.collection === LANDSCAPE && p.sourceId === sourceId)).kind, 'framework');
  }
});

const URL_A = 'https://example.org/paper';
function entry(topic = 'skills', url = URL_A, sourceId = 'a', record = 1, fields = {}) {
  return {
    id: topic + ':' + referenceId(url).slice(4), title: 'Reference', citation: 'Author (2024)',
    url, year: 2024, kind: 'study',
    provenance: [{collection: COLLECTIONS[topic], sourceId, record}], ...fields
  };
}
function raw(id = 'a', link = URL_A, fields = {}) {
  return {
    id, link, title: 'Reference', cite: 'Author (2024)', type: 'peer-reviewed',
    constructs: ['beliefs/attitudes'], measures: ['self-report'], design: 'RCT',
    level: 'individual', side: 'human', genai: true, timespan: 'months', domain: 'general public',
    finding: 'Do not expose', limits: 'Do not expose', n: '123', sample: 'Do not expose', verified: true,
    ...fields
  };
}
function fixture() { return {catalog: {skills: [entry()]}, landscape: [raw()]}; }

test('canonical aliases merge across topics, not titles or studies', () => {
  const aliases = ['https://arxiv.org/pdf/2405.06087v2.pdf', 'https://doi.org/10.48550/arXiv.2405.06087'];
  const merged = buildLibraryView({catalog: {
    work: [entry('work', aliases[1], 'work', 1, {title: 'Different title', year: 2026})],
    capability: [entry('capability', aliases[0])]
  }, landscape: []});
  assert.equal(merged.records.length, 1);
  const row = merged.records[0];
  assert.equal(row.url, 'https://arxiv.org/abs/2405.06087');
  assert.equal(row.title, 'Reference');
  assert.equal(row.year, 2024);
  assert.equal(row.id, referenceId(aliases[1]));
  assert.deepEqual(row.topics, ['capability', 'work']);
  assert.equal(row.provenance.length, 2);
  const separate = buildLibraryView({catalog: {work: [entry('work'), entry('work', URL_A + '?version=2', 'b', 2)]}, landscape: []});
  assert.equal(separate.records.length, 2, 'Same title is not a join key');
  assert.equal(referenceId(URL_A), referenceId(URL_A + '?utm_source=test#part'));
});

test('missing and unknown metadata are explicit, without inference', () => {
  const input = fixture();
  input.landscape = [{id: 'a', link: URL_A, era: 'llm', type: 'peer-reviewed', n: 10}];
  assert.deepEqual(buildLibraryView(input).records[0].landscape, [{
    sourceId: 'a', constructs: [], measures: [], design: null, level: null,
    side: null, genai: null, timespan: null, domain: null
  }]);
  input.landscape = [raw('a', URL_A, {
    constructs: ['Memory', 'Memory', 'unknown'], measures: [' Self-report ', 'unclear'],
    design: 'unknown', level: 'unclear', side: null, genai: false, timespan: null, domain: 'unknown'
  })];
  const metadata = buildLibraryView(input).records[0].landscape[0];
  for (const field of ['constructs', 'measures', 'design', 'level', 'side', 'genai', 'timespan', 'domain']) {
    assert.deepEqual(metadata[field], input.landscape[0][field]);
  }
});

test('strict allowlists prevent legacy fields from leaking', () => {
  const input = fixture();
  const clean = serialize(buildLibraryView(input));
  const forbidden = {
    finding: 'secret finding', findings: ['secret'], limits: 'secret limit', n: 99,
    sample: 'secret sample', sample_size: 999, verified: true, human_verified: true,
    peer_reviewed: true, type: 'peer-reviewed', originalType: 'peer-reviewed'
  };
  Object.assign(input.catalog.skills[0], forbidden);
  Object.assign(input.catalog.skills[0].provenance[0], forbidden);
  Object.assign(input.landscape[0], forbidden);
  assert.equal(serialize(buildLibraryView(input)), clean);
  const forbiddenKeys = new Set(Object.keys(forbidden));
  function visit(value) {
    if (!value || typeof value !== 'object') return;
    for (const [key, child] of Object.entries(value)) {
      assert.ok(!forbiddenKeys.has(key), 'Forbidden field: ' + key);
      visit(child);
    }
  }
  visit(view);
  assert.ok(!serialize({title: '</script><script>bad()</script>'}).includes('<'));
});

test('only exact catalog provenance joins landscape, never ID/title/URL similarity', () => {
  for (const link of [null, URL_A]) {
    const result = buildLibraryView({catalog: {work: [entry('work')]}, landscape: [raw('a', link)]});
    assert.deepEqual(result.records[0].landscape, []);
    assert.equal(result.stats.landscapeReferences, 0);
  }
  const input = fixture();
  input.landscape = [raw('a', null, {constructs: ['wrong row']}), raw('a', URL_A)];
  input.catalog.skills[0].provenance[0].record = 2;
  assert.deepEqual(buildLibraryView(input).records[0].landscape[0].constructs, ['beliefs/attitudes']);
  input.catalog.skills[0].provenance[0].record = 1;
  assert.throws(() => buildLibraryView(input), /effective URL mismatch/);
  input.catalog.skills[0].provenance[0].record = 3;
  assert.throws(() => buildLibraryView(input), /record\/sourceId mismatch/);
  input.catalog.skills[0].provenance[0].record = 2;
  input.catalog.skills[0].provenance[0].sourceId = 'other';
  assert.throws(() => buildLibraryView(input), /record\/sourceId mismatch/);
});

test('multiple raw mappings on one URL stay separate', () => {
  const input = fixture();
  input.landscape.push(raw('b', URL_A, {constructs: ['memory'], genai: false}));
  input.catalog.skills[0].provenance.push({collection: LANDSCAPE, sourceId: 'b', record: 2});
  const result = buildLibraryView(input);
  assert.equal(result.stats.landscapeReferences, 1);
  assert.equal(result.records[0].provenance.length, 2);
  assert.deepEqual(result.records[0].landscape.map(row => row.constructs), [['beliefs/attitudes'], ['memory']]);
});

test('curation URL and framework correction survive cross-topic merge', () => {
  const input = fixture();
  input.landscape[0].link = 'https://example.org/old';
  input.catalog.capability = [entry('capability', URL_A, 'earlier-step')];
  input.curation = {records: [{collection: LANDSCAPE, sourceId: 'a', action: 'repair', fields: {link: URL_A, kind: 'framework'}}]};
  const row = buildLibraryView(input).records[0];
  assert.equal(row.kind, 'framework');
  assert.equal(row.landscape[0].design, 'RCT', 'Raw metadata is not rewritten to agree with kind');
  input.curation.records.push({collection: COLLECTIONS.capability, sourceId: 'earlier-step', action: 'repair', fields: {kind: 'report'}});
  assert.throws(() => buildLibraryView(input), /Conflicting curated kinds/);
});

test('FutureSearch host, branding, aliases and matched raw rows are excluded', () => {
  for (const branded of [
    {title: 'FutureSearch report'}, {citation: 'FUTURE SEARCH (2026)'},
    {url: 'https://research.futuresearch.ai/report'}, {url: 'https://futuresearch.com/report'},
    {sourceId: 'future-search-outlook'}
  ]) assert.ok(isFutureSearchReference(branded));
  assert.ok(!isFutureSearchReference({title: 'Priorities for future research', url: URL_A}));
  const input = {catalog: {
    capability: [entry('capability')],
    work: [entry('work', URL_A, 'work', 1, {citation: 'FutureSearch 2026'}), entry('work', URL_A + '/other', 'other', 2)]
  }, landscape: []};
  const result = buildLibraryView(input);
  assert.equal(result.stats.topicEntries, 3);
  assert.equal(result.stats.includedReferences, 1);
  assert.equal(result.stats.excludedReferences, 1);
  assert.equal(result.records[0].url, URL_A + '/other');
  for (const change of [
    input => { input.catalog.skills[0].title = 'FutureSearch report'; },
    input => { input.landscape[0].cite = 'FutureSearch'; },
    input => { input.landscape[0].title = 'Future Search report'; },
    input => {
      input.landscape[0].link = 'https://data.futuresearch.ai/report';
      input.catalog.skills[0] = entry('skills', input.landscape[0].link);
    },
    input => { input.curation = {records: [{collection: LANDSCAPE, sourceId: 'a', action: 'repair', fields: {cite: 'FutureSearch'}}]}; }
  ]) {
    const input = fixture(); change(input);
    const result = buildLibraryView(input);
    assert.equal(result.records.length, 0);
    assert.equal(result.stats.excludedReferences, 1);
  }
});

test('holds are raw record counts and cannot re-enter via stale provenance', () => {
  const input = fixture();
  input.curation = {records: [{collection: LANDSCAPE, sourceId: 'held', action: 'hold'}]};
  assert.equal(buildLibraryView(input).stats.heldRecords, 1);
  input.curation.records[0].sourceId = 'a';
  assert.throws(() => buildLibraryView(input), /Held provenance/);
});

test('unsafe URLs are rejected', () => {
  for (const url of ['javascript:alert(1)', 'data:text/html,bad', 'file:///tmp/paper', '/relative',
    'https://user:pass@example.org/paper', 'https://example.org/%00bad', 'https://example.org/a b', null, 123]) {
    const input = fixture(); input.catalog.skills[0].url = url;
    assert.throws(() => buildLibraryView(input), /Unsafe catalog URL/);
    assert.throws(() => referenceId(url), /safe HTTP\(S\) URL/);
  }
});

test('malformed identifiers, types, provenance and curation fail closed', () => {
  const mutations = [
    input => { input.catalog.unknown = []; },
    input => { input.catalog.skills = {}; },
    input => { input.catalog.skills[0].id = 'skills:wrong'; },
    input => { input.catalog.skills[0].title = null; },
    input => { input.catalog.skills[0].citation = ''; },
    input => { input.catalog.skills[0].year = '2024'; },
    input => { input.catalog.skills[0].kind = 'verified-study'; },
    input => { input.catalog.skills[0].provenance = []; },
    input => { input.catalog.skills[0].provenance[0].collection = COLLECTIONS.work; },
    input => { input.catalog.skills[0].provenance[0].sourceId = '../bad'; },
    input => { input.catalog.skills[0].provenance[0].record = 0; },
    input => { input.catalog.skills[0].provenance[0].record = 1.5; },
    input => { input.catalog.skills[0].provenance.push({...input.catalog.skills[0].provenance[0]}); },
    input => { input.catalog.skills.push(structuredClone(input.catalog.skills[0])); },
    input => { input.landscape[0].constructs = 'memory'; },
    input => { input.landscape[0].measures = [123]; },
    input => { input.landscape[0].design = {}; },
    input => { input.landscape[0].genai = 'true'; },
    input => { input.curation = {records: [{collection: LANDSCAPE, sourceId: 'a', action: 'repair', fields: {verified: true}}]}; },
    input => { input.curation = {records: Array(2).fill({collection: LANDSCAPE, sourceId: 'a', action: 'repair'})}; }
  ];
  for (const mutate of mutations) {
    const input = fixture(); mutate(input);
    assert.throws(() => buildLibraryView(input));
  }
});

test('read-only CLI check works outside the repository directory', () => {
  const result = spawnSync(process.execPath, [path.join(__dirname, 'build-library-view.js'), '--check'], {cwd: path.dirname(ROOT), encoding: 'utf8'});
  assert.equal(result.status, 0, result.stderr);
  assert.equal(JSON.parse(result.stdout).action, 'checked');
});

console.log(JSON.stringify({
  tests, deterministic: true, provenanceRecords: view.records.reduce((sum, row) => sum + row.provenance.length, 0),
  mappedLandscapeRecords: view.records.reduce((sum, row) => sum + row.landscape.length, 0), ...view.stats
}, null, 2));
