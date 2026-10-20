const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {buildCatalog,serialize,readCollection,readCuration,effectiveRecord}=require('./build-evidence-library');
const canonical=require('../src/library-url');
const root=path.resolve(__dirname,'..');
const browser=vm.createContext({URL,module:undefined});
vm.runInContext(fs.readFileSync(path.join(root,'src/library-url.js'),'utf8'),browser);
const cases=[
  ['https://arxiv.org/pdf/2405.06087v2.pdf','https://arxiv.org/abs/2405.06087'],
  ['https://arxiv.org/html/2405.06087v2#table1','https://arxiv.org/abs/2405.06087'],
  ['https://doi.org/10.48550/arXiv.2405.06087','https://arxiv.org/abs/2405.06087'],
  ['https://www.pnas.org/doi/full/10.1073/pnas.2422633122','https://doi.org/10.1073/pnas.2422633122'],
  ['https://example.org/paper?id=2&utm_source=test#results','https://example.org/paper?id=2'],
  ['https://example.org/report%20one.pdf','https://example.org/report%20one.pdf'],
  ['https://example.org/paper?b=2&a=1','https://example.org/paper?a=1&b=2'],
  ['javascript:alert(1)',null],['data:text/html,test',null],['file:///tmp/paper',null],
  ['https://user:pass@example.org/paper',null],['https://example.org/%00bad',null],
  ['/relative/path',null],['not a URL',null],[undefined,null]
];
for(const[input,expected]of cases){
  assert.equal(canonical(input),expected);
  browser.input=input;assert.equal(vm.runInContext('libraryURL14(input)',browser),expected);
}
const {catalog,report}=buildCatalog();
const curation=readCuration();
assert.equal(serialize(catalog),serialize(buildCatalog().catalog),'Deterministic generation');
assert.equal(fs.readFileSync(path.join(root,'src/evidence-library.json'),'utf8'),serialize(catalog),'Committed catalog is current');
const collections=new Map();let traced=0;
for(const entries of Object.values(catalog)){
  assert.equal(new Set(entries.map(e=>e.url)).size,entries.length,'Unique URL identities within each topic');
  for(const entry of entries){
    assert.deepEqual(Object.keys(entry),['id','title','citation','url','year','kind','provenance'],'Bibliography only; no legacy findings or verification badges');
    assert.equal(canonical(entry.url),entry.url);
    for(const source of entry.provenance){
      if(!collections.has(source.collection))collections.set(source.collection,readCollection(root,source.collection));
      const record=collections.get(source.collection).find(r=>r.record===source.record).row;
      const effective=effectiveRecord(record,source.collection,curation);
      assert.notEqual(effective.correction?.action,'hold');
      assert.equal(record.id,source.sourceId);assert.equal(canonical(effective.row.link),entry.url);traced++;
    }
  }
}
assert.equal(traced+report.skipped.length,report.totals.input,'Every input record is included or explicitly skipped');
assert.equal(report.ambiguities.filter(item=>item.fields.includes('year')).length,0,'Known year conflicts are repaired or held');
assert.equal(catalog.skills.find(entry=>entry.provenance.some(p=>p.sourceId==='macnamara2024')).kind,'framework');
assert.equal(catalog.skills.find(entry=>entry.provenance.some(p=>p.sourceId==='crootof2023')).kind,'framework');
assert.equal(report.curated.length,curation.records.length);
assert.ok(!serialize({title:'</script><script>bad()</script>'}).includes('<'),'Safe inside the built inline script');
console.log(JSON.stringify({urlCases:cases.length,browserParity:true,deterministic:true,...report.totals,traced},null,2));
