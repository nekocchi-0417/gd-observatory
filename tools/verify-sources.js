const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const path=require('path');
const topics=require('../src/priority.json');
const PAGE=process.env.BASE_URL||'file://'+path.resolve(__dirname,'../docs/index.html');
(async()=>{
 const browser=await chromium.launch(),errors=[];
 try{
  for(const width of [1440,390,340])for(const colorScheme of ['light','dark']){
   const context=await browser.newContext({viewport:{width,height:950},colorScheme});
   const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
   for(const id of Object.keys(topics)){
    await page.goto(PAGE+'#'+id);
    if(id==='capability'){
     assert.equal(await page.locator('.evidence-chart7 svg').count(),2);
     assert.equal(await page.locator('.publisher7 a:visible').count(),2);
     assert.match(await page.locator('.review-state7').innerText(),/awaiting human review/);
     assert.match(await page.locator('#rli-chart7 .axis-note').innerText(),/X-axis Projects meeting the standard/);
     assert.match(await page.locator('#metr-chart7 .axis-note').innerText(),/Y-axis Estimated human task time/);
     const csvs=await page.locator('a[download]').evaluateAll(links=>links.map(a=>decodeURIComponent(a.href.split(',')[1])));
     assert.match(csvs[0],/"Opus 5.5","21.25"/);
     assert.match(csvs[1],/"50","718.80683","316.685725","3633.786163"/);
     assert.match(csvs[1],/"80","69.874587","27.026521","170.437873"/);
     assert.equal(await page.locator('.related7 li').count(),3);
     for(const summary of await page.locator('.chart-context7 summary').all())await summary.click();
     for(const summary of await page.locator('.evidence-chart7 .tbl summary').all())await summary.click();
    }else{
     assert.equal(await page.locator('.source-mini6').count(),2);
     assert.equal(await page.locator('.source-mini6-cite a:visible').count(),2);
     assert.match(await page.locator('.verify5').innerText(),/Awaiting human review/);
    }
    assert.equal(await page.locator('h1').innerText(),topics[id].h1);
    assert.equal(await page.locator('a[href="#method/selection"]').count(),1);
    const size=await page.evaluate(()=>({w:innerWidth,scroll:document.documentElement.scrollWidth}));
    assert.ok(size.scroll<=size.w,`${id}: overflow at ${width}`);
    await page.locator(`a[href="#details/${id}"]`).first().click();
    assert.equal(await page.locator('.source6').count(),2);
    await page.locator('.source6-detail summary').first().click();
    assert.ok(await page.locator('.source6-detail[open]').count());
   }
   await page.goto(PAGE+'#skills');
   assert.match(await page.locator('.verify5').innerText(),/Awaiting human review/);
   assert.equal(await page.locator('a[href^="#review"]').count(),0);
   await page.goto(PAGE+'#library/skills');
   assert.equal(await page.locator('.chart').count(),0);
   assert.match(await page.locator('.verify5').innerText(),/Awaiting human review/);
   await page.goto(PAGE+'#skills/literacy');assert.equal(await page.locator('.library6 h1').innerText(),'Working evidence library');
   await page.goto(PAGE+'#skills/bastani');assert.equal(await page.locator('#source-bastani').count(),1);
   await page.goto(PAGE+'#review/skills');await page.waitForTimeout(500);assert.equal(await page.locator('[data-review]').count(),0);
   await page.goto(PAGE+'#method');assert.equal(await page.locator('[href="pdf-source-crosswalk.html"]').count(),1);
   await page.goto(PAGE+'#capability');await page.locator('a[href="#method/selection"]').click();
   assert.match(await page.locator('#m-selection').innerText(),/Added value/);
   await context.close();console.log(`Passed ${width}px ${colorScheme}`);
  }
  assert.deepEqual(errors,[]);
  console.log('Priority pages, responsive layouts, parked routes and source links passed.');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
