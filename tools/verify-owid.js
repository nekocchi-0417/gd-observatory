const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {createHash}=require('node:crypto');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..');
const readConstant=(file,name)=>vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8')+';JSON.stringify('+name+')');
const adoption=JSON.parse(readConstant('src/adoption.js','ADOPTION7'));
const robotaxi=JSON.parse(readConstant('src/robotaxi-data.js','ROBOTAXI15'));
const expected=[
  ['2023-05-01',4,11,21],['2024-05-01',4,12,27],['2025-05-01',8,19,40],['2025-08-01',10,23,45],
  ['2025-11-01',12,26,46],['2026-02-01',13,28,50],['2026-05-01',15,30,52],['2026-08-01',16,32,53]
];
assert.deepEqual(adoption.rows.map(r=>[r.date,r.daily,r.value,r.total]),expected);
assert.ok(adoption.rows.every(r=>0<=r.daily&&r.daily<=r.value&&r.value<=r.total&&r.total<=100));
const displayed=robotaxi.rows.filter(r=>r.date>=robotaxi.displayStart);
assert.equal(robotaxi.rows.length,52);
assert.equal(displayed.length,32);
assert.equal(displayed[0].date,'2023-11-01');
assert.equal(displayed[0].value,316579.22);
assert.equal(displayed.at(-1).date,'2026-06-01');
assert.equal(displayed.at(-1).value,12946270);
robotaxi.rows.forEach((r,i)=>{
  assert.ok(Number.isFinite(r.value)&&r.value>=0);
  if(i){const month=s=>Number(s.slice(0,4))*12+Number(s.slice(5,7));assert.equal(month(r.date)-month(robotaxi.rows[i-1].date),1)}
});
const url=process.env.VERIFY_URL||'file://'+path.join(root,'docs/index.html');
(async()=>{
  const browser=await chromium.launch(),errors=[];
  try{
    for(const width of [1440,1000,760,390,340])for(const colorScheme of ['light','dark']){
      const page=await browser.newPage({viewport:{width,height:950},colorScheme});
      page.on('pageerror',e=>errors.push(e.message));
      await page.goto(url+'#emerging/skills');
      const chart=page.locator('#skills-left10');
      assert.equal(await chart.locator('path[fill="none"]').count(),3);
      assert.equal(await chart.locator('circle').count(),24);
      assert.deepEqual(await chart.locator('text.end').allTextContents(),['Any use 53%','Regular 32%','Daily 16%']);
      assert.equal(await chart.locator('path[fill="none"]').evaluateAll(paths=>new Set(paths.map(p=>getComputedStyle(p).stroke)).size),3);
      await chart.locator('svg').focus();await page.keyboard.press('ArrowLeft');
      assert.match(await chart.locator('.tip').innerText(),/Aug 2026/i);
      for(const value of ['53%','32%','16%'])assert.ok((await chart.locator('.tip').innerText()).includes(value));
      await page.keyboard.press('Escape');
      assert.ok(await chart.locator('svg').evaluate(svg=>{const box=svg.getBoundingClientRect();return [...svg.querySelectorAll('text')].every(t=>{const r=t.getBoundingClientRect();return r.left>=box.left-1&&r.right<=box.right+1})}),'Adoption SVG labels fit '+width);
      await page.goto(url+'#adoption/source');
      const table=page.locator('#adoption-source table');
      assert.equal(await table.locator('tbody tr').count(),8);
      assert.equal(await table.locator('thead th').count(),4);
      const csv=decodeURIComponent(await page.locator('#adoption-source a[download]').getAttribute('href'));
      assert.match(csv,/"2026-08","53","32","16"/);
      await page.goto(url+'#handover');
      const disclosure=page.locator('#handover-robotaxis');
      assert.equal(await disclosure.evaluate(d=>d.open),false);
      assert.equal(await page.locator('#robotaxi-chart15 svg').count(),0);
      await disclosure.locator('>summary').click();
      await page.locator('#robotaxi-chart15 svg').waitFor();
      assert.equal(await page.locator('#robotaxi-chart15 circle').count(),32);
      assert.equal(await page.locator('#robotaxi-chart15 path[fill="none"]').count(),1);
      await page.locator('#robotaxi-chart15 svg').focus();await page.keyboard.press('ArrowRight');
      assert.match(await page.locator('#robotaxi-chart15 .tip').innerText(),/316,579\.22 passenger-km/);
      await page.keyboard.press('Escape');
      await disclosure.locator('.measurement-data11>summary').click();
      assert.equal(await disclosure.locator('tbody tr').count(),32);
      assert.match(decodeURIComponent(await disclosure.locator('a[download]').getAttribute('href')),/"2026-06","12946270"/);
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Expanded robotaxi fits '+width);
      await page.goto(url+'#handover/robotaxis');
      await page.locator('#robotaxi-chart15 svg').waitFor();
      assert.equal(await page.locator('#handover-robotaxis').evaluate(d=>d.open),true);
      await page.close();
    }
    const p=await browser.newPage();
    await p.goto(url+'#library/capability');
    const entry=p.locator('.library-list14 li').filter({has:p.locator('a[href="https://ourworldindata.org/grapher/ai-frontiermath-over-time"]')});
    assert.equal(await entry.count(),1);assert.match(await entry.innerText(),/same corrected version/);
    await p.goto(url+'#home');
    assert.equal(await p.locator('.compare-figure10').count(),2);
    assert.equal(await p.locator('#work-left10 circle').count(),23);
    assert.equal(await p.locator('#work-right10 path[fill="none"]').count(),6);
    if(process.argv.includes('--sources')){
      await p.goto(adoption.url,{waitUntil:'domcontentloaded'});
      const rows=await p.locator('noscript').evaluateAll(nodes=>{
        const tables=nodes.flatMap(n=>[...new DOMParser().parseFromString(n.textContent,'text/html').querySelectorAll('table')]);
        const table=tables.find(t=>/Frequent AI users/.test(t.textContent)&&/Daily AI users/.test(t.textContent));
        if(!table)throw Error('Gallup usage table not found');
        return [...table.rows].map(r=>[...r.cells].map(c=>c.textContent.trim())).filter(r=>/^\d+\/\d+\/\d+$/.test(r[0])).map(r=>{const [m,d,y]=r[0].split('/');return [`20${y}-${m.padStart(2,'0')}-${d.padStart(2,'0')}`,...r.slice(1,4).map(Number)]});
      });
      assert.deepEqual(rows,expected,'All 24 values match the current primary-source table');
      const response=await fetch(robotaxi.dataURL);assert.ok(response.ok);
      const hash=createHash('sha256').update(Buffer.from(await response.arrayBuffer())).digest('hex');
      assert.equal(hash,robotaxi.source.csvSHA256,'OWID source snapshot has not changed');
    }
    assert.deepEqual(errors,[]);
    console.log(JSON.stringify({gallupValues:24,robotaxiOriginalMonths:52,robotaxiDisplayedMonths:32,viewports:5,themes:2,primaryGallupCheck:process.argv.includes('--sources'),errors}));
  }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
