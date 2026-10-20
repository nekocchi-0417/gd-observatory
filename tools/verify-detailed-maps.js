const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {buildLibraryView,loadInputs}=require('./build-library-view.js');
const {loadDetailedMaps,buildDetailedMaps,validateMap}=require('./build-detailed-maps.js');
const {canonicalURL}=require('./build-evidence-library.js');
const root=path.resolve(__dirname,'..');
const maps=loadDetailedMaps(root),base=buildLibraryView(loadInputs());
const config=JSON.parse(fs.readFileSync(path.join(root,'research/library-map-config.json'),'utf8'));
const inputs=JSON.stringify({maps,base,config});
const {library,mapConfig}=buildDetailedMaps(base,config,maps);
assert.equal(JSON.stringify({maps,base,config}),inputs,'Inputs remain unchanged');
assert.equal(mapConfig.areas.length,config.areas.length+maps.length);
assert.equal(new Set(library.records.map(r=>r.id)).size,library.records.length);
assert.equal(new Set(library.records.map(r=>r.url)).size,library.records.length);
assert.deepEqual(library,buildDetailedMaps(base,config,maps).library,'Deterministic compilation');
for(const old of base.records) {
  const row=library.records.find(r=>r.id===old.id);
  assert.deepEqual(row.landscape,old.landscape,'Existing cognition labels unchanged');
  for(const key of ['title','citation','url','year','kind']) assert.equal(row[key],old[key],'Existing bibliography unchanged');
  assert.deepEqual(row.provenance.slice(0,old.provenance.length),old.provenance);
}
let pairs=0;
for(const map of maps) {
  validateMap(map);
  for(const source of map.sources) {
    const row=library.records.find(r=>r.url===canonicalURL(source.url));
    assert(row && row.topics.includes(map.topic));
    const coding=row.mapCodings.find(c=>c.area===map.id && c.sourceId===source.id);
    assert.equal(coding.observations.length,source.observations.length,'No invented pairings');
    assert.equal(coding.reviewStatus,'AI-assisted; awaiting human review');
    pairs+=coding.observations.length;
    assert(row.provenance.some(p=>p.collection==='research/maps/'+map.id+'.json' && p.sourceId===source.id));
    for(const pair of coding.observations) {
      assert(canonicalURL(pair.sourceUrl) && pair.basis && pair.locator);
      assert.deepEqual(pair,{...source.observations.find(o=>o.facet===pair.facet && o.measure===pair.measure),sourceUrl:new URL(pair.sourceUrl).href});
    }
  }
  const invalid=modify=>{const copy=structuredClone(map);modify(copy);assert.throws(()=>validateMap(copy));};
  invalid(m=>m.sources.push(m.sources[0]));
  invalid(m=>m.sources[0].observations.push(m.sources[0].observations[0]));
  invalid(m=>m.sources[0].observations[0].facet='nonexistent');
  invalid(m=>m.sources[0].observations[0].measure='nonexistent');
  invalid(m=>m.sources[0].observations[0].sourceUrl='javascript:alert(1)');
  invalid(m=>m.sources[0].observations[0].basis='');
  invalid(m=>m.sources[0].reviewStatus='verified');
  invalid(m=>m.sources[0].url='https://futuresearch.ai/example');
  invalid(m=>m.sources[0].design='unknown');
  invalid(m=>m.sources[0].year=2030);
}
assert.equal(library.stats.detailedMapReferences,library.records.filter(r=>r.mapCodings?.length).length);
console.log(JSON.stringify({maps:maps.map(m=>({id:m.id,sources:m.sources.length,facets:m.facets.length,methods:m.columns.length})),codedPairs:pairs,addedReferences:library.stats.addedReferences,totalReferences:library.records.length},null,2));
