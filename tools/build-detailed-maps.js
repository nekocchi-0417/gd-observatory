// Extend the original scan without modifying its records or treating its tags as verified.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {canonicalURL, COLLECTIONS} = require('./build-evidence-library.js');
const {referenceId, isFutureSearchReference} = require('./build-library-view.js');

const MAP_FILES = ['government', 'delegation', 'culture'];
const DESIGNS = ['RCT','lab experiment','field experiment','natural experiment','quasi-experiment','cross-sectional survey','panel survey','log analysis','qualitative','case study','benchmark','administrative dataset','audit','review','framework','meta-analysis','theory'];
const identifier = value => typeof value === 'string' && /^[a-z][a-z0-9_-]*$/.test(value);
const text = value => typeof value === 'string' && value.trim().length > 0;
const unique = (rows, label) => assert.equal(new Set(rows).size, rows.length, 'Duplicate ' + label);

function loadDetailedMaps(root) {
  return MAP_FILES.map(id => JSON.parse(fs.readFileSync(path.join(root, 'research/maps', id + '.json'), 'utf8')));
}

function validateMap(map) {
  assert.ok(identifier(map.id) && Object.hasOwn(COLLECTIONS,map.topic), 'Invalid map identity');
  for (const key of ['label','description','scope','displayScope','intro']) assert.ok(text(map[key]), 'Missing map ' + key);
  assert.ok(Array.isArray(map.questions) && map.questions.length === 3, 'Expected three research extensions');
  for(const q of map.questions) {
    for(const key of ['title','measured','next']) assert.ok(text(q[key]), 'Incomplete research question');
    assert.ok(Array.isArray(q.sources) && q.sources.length, 'Research question needs sources');
    for(const [label,url] of q.sources) assert.ok(text(label) && canonicalURL(url), 'Unsafe question source');
  }
  for (const dimension of ['facets','columns']) {
    assert.ok(Array.isArray(map[dimension]) && map[dimension].length, 'Missing ' + dimension);
    unique(map[dimension].map(item => item.id),dimension);
    for (const item of map[dimension]) assert.ok(identifier(item.id) && text(item.label) && text(item.description), 'Incomplete ' + dimension);
  }
  assert.ok(Array.isArray(map.sources) && map.sources.length, 'Empty detailed map');
  unique(map.sources.map(row => row.id), 'source ID');
  unique(map.sources.map(row => canonicalURL(row.url)), 'source URL');
  for (const row of map.sources) {
    assert.ok(identifier(row.id) && canonicalURL(row.url), 'Invalid source identity');
    assert.ok(!isFutureSearchReference(row), 'Excluded source in detailed map');
    for (const key of ['title','citation','domain','timespan','limits']) assert.ok(text(row[key]), 'Missing source ' + key + ': ' + row.id);
    assert.ok(Number.isInteger(row.year) && row.year >= 1900 && row.year <= 2026, 'Invalid publication year');
    assert.ok(['study','report','dataset','framework','indicator','benchmark'].includes(row.kind), 'Unknown source kind');
    assert.ok(DESIGNS.includes(row.design), 'Unknown design: ' + row.design);
    assert.ok(['human','model','both','institutional'].includes(row.side), 'Unknown study population');
    assert.equal(row.reviewStatus,'AI-assisted; awaiting human review');
    assert.ok(Array.isArray(row.observations) && row.observations.length, 'Missing measurement coding');
    unique(row.observations.map(o => o.facet + ':' + o.measure), 'facet-measure pair within source');
    for (const o of row.observations) {
      assert.ok(map.facets.some(f => f.id === o.facet), 'Unknown facet: ' + o.facet);
      assert.ok(map.columns.some(c => c.id === o.measure), 'Unknown measure: ' + o.measure);
      assert.ok(text(o.basis) && text(o.locator) && canonicalURL(o.sourceUrl), 'Measurement coding needs source text and location');
      assert.ok(!isFutureSearchReference({url:o.sourceUrl}), 'Excluded coding source');
    }
  }
}

function buildDetailedMaps(base, config, maps) {
  const library = structuredClone(base), mapConfig = structuredClone(config);
  unique(maps.map(map => map.id), 'map ID');
  unique(maps.map(map => map.topic), 'map topic');
  const byURL = new Map(library.records.map(row => [row.url,row]));
  for (const map of maps) {
    validateMap(map);
    assert.ok(!mapConfig.areas.some(area => area.id === map.id), 'Map already exists');
    mapConfig.areas.push({
      id:map.id, topic:map.topic, label:map.label, description:map.description, scope:map.scope,displayScope:map.displayScope,intro:map.intro,questions:map.questions,
      coding:'explicit-pairs',
      facets:map.facets.map(f => ({id:f.id,label:f.label,description:f.description,mapArea:map.id})),
      columns:map.columns.map(c => ({id:c.id,label:c.label,description:c.description})),
      bins:[0,1,3,6,Infinity].map(n => Number.isFinite(n) ? n : null),
      binLabels:['0','1','2-3','4-6','7+']
    });
    map.sources.forEach((source,index) => {
      const url=canonicalURL(source.url);
      let row=byURL.get(url);
      if(!row) {
        row={id:referenceId(url),title:source.title,citation:source.citation,url,year:source.year,kind:source.kind,topics:[],provenance:[],landscape:[]};
        library.records.push(row);byURL.set(url,row);
      }
      if(!row.topics.includes(map.topic)) row.topics.push(map.topic);
      row.topics=Object.keys(COLLECTIONS).filter(topic => row.topics.includes(topic));
      row.provenance.push({collection:'research/maps/'+map.id+'.json',sourceId:source.id,record:index+1});
      // Each observation names an explicit pair. Never multiply independent facet and method tags.
      (row.mapCodings ||= []).push({
        area:map.id,sourceId:source.id,kind:source.kind,design:source.design,side:source.side,
        domain:source.domain,timespan:source.timespan,limits:source.limits,reviewStatus:source.reviewStatus,
        observations:source.observations.map(o => ({facet:o.facet,measure:o.measure,basis:o.basis,locator:o.locator,sourceUrl:new URL(o.sourceUrl).href}))
      });
    });
  }
  library.records.sort((a,b) => b.year-a.year || (a.title < b.title ? -1 : a.title > b.title ? 1 : a.url.localeCompare(b.url)));
  library.stats.includedReferences=library.records.length;
  library.stats.topicEntries=library.records.reduce((n,row)=>n+row.topics.length,0);
  library.stats.detailedMapReferences=library.records.filter(row => row.mapCodings?.length).length;
  library.stats.mappedReferences=library.records.filter(row => row.landscape.length || row.mapCodings?.length).length;
  library.stats.addedReferences=library.records.length-base.records.length;
  library.schemaVersion=2;
  return {library,mapConfig};
}

module.exports={loadDetailedMaps,buildDetailedMaps,validateMap,MAP_FILES};
