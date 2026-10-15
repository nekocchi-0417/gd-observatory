const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const t=require('../src/selected-topics.json');
const p=require('../src/priority.json');
const w=require('../src/work-series.json');
const wr=require('../research/verified-2026-10/work.json');
const sk=require('../research/verified-2026-10/skills.json');
const gov=require('../research/verified-2026-10/institutions.json').indicators[0];
const pew=require('../research/verified-2026-10/influence.json').indicators[0];
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-8,`${a} != ${b}`);

for(const [id,c] of Object.entries(t)){
 assert.ok(p[id].sources.some(s=>s.id===c.source),`${id}: source resolves`);
 assert.ok(p[id].h1.endsWith('?'),`${id}: starts with a question`);
 assert.ok(c.notes.length===4,`${id}: four compact notes`);
 const temporal=['work','share'].includes(id);
 assert.equal(c.takeawayLabel,temporal?'What changed':'What this shows');
 for(const r of c.data)assert.equal(r.length,c.columns.length,`${id}: consistent data columns`);
 if(c.chart.kind==='bars')for(let i=0;i<c.data.length;i++)near(c.chart.rows[i].value,c.data[i][1]);
}
assert.equal(w.length,60);
assert.deepEqual(w,wr.alternative_chart.rows.map(r=>r.map(x=>typeof x==='number'?Number(x.toFixed(2)):x)));
assert.deepEqual(w.find(r=>r[0]==='2022-11-01').slice(1),[100,100,100,100,100]);
near(w.at(-1)[5]-100,-12.77);near(w.at(-1)[1]-100,8.1);
near(t.share.data[1][1]-t.share.data[0][1],-.4);
near(t.handover.data.reduce((n,r)=>n+r[1],0),100);
for(let i=0;i<2;i++){
 const source=sk.published_table_1.rows[i+1],row=t.skills.data[i];
 near(row[1],source.estimate*100);near(row[2],source.standard_error*100);
 near(row[3],row[1]-1.96*row[2]);near(row[4],row[1]+1.96*row[2]);
 near(t.skills.chart.rows[i].value,row[1]);
}
near(sk.interpretation.calculated_relative_percent,-.054/.321*100);
assert.deepEqual(t.culture.data[0].slice(1),[1,3]);
assert.equal(t.culture.chart.kind,'waffle');
const stages=Object.fromEntries(gov.chart.data.map(r=>[r.label,r.value]));
for(const [label,value] of t.institutions.data)assert.equal(value,stages[label]);
assert.equal(t.institutions.data.reduce((n,r)=>n+r[1],0),3611);
assert.equal(stages.Deployed+stages.Pilot,1480);assert.equal(stages['Stage not reported'],338);
assert.deepEqual(t.influence.data.map(r=>r[1]).sort((a,b)=>a-b),pew.chart.data.map(r=>r.value).sort((a,b)=>a-b));
// Syntax check the built script without evaluating browser APIs.
const html=fs.readFileSync('docs/index.html','utf8');
const script=html.match(/<script>([\s\S]*)<\/script>/)[1];
new vm.Script(script);
console.log('Source selection, chart data, dates, arithmetic, CSV columns and build syntax passed.');
