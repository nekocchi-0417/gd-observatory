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
     assert.equal(await page.locator('.evidence-chart7 svg').count(),1);
     assert.equal(await page.locator('.publisher7 a:visible').count(),1);
     assert.equal(await page.locator('.claim5 .lead5, .review-state7, .capability7 .draft5').count(),0);
     assert.equal(await page.locator('.disclosure7').count(),3);
     assert.equal(await page.locator('.disclosure7[open]').count(),0);
     assert.equal(await page.locator('.related7 li:visible').count(),0);
     assert.ok((await page.locator('.capability7').innerText()).split(/\s+/).length<260,'Default view stays concise');
     assert.equal(await page.locator('#metr-chart7 circle').count(),23);
     assert.equal(await page.locator('#metr-chart7 .chart-x-label').innerText(),'Model release year');
     assert.match(await page.locator('#metr-chart7 .chart-y-label').innerText(),/human expert/);
     const clipped=await page.locator('#metr-chart7 svg').evaluate(svg=>[...svg.querySelectorAll('text')].filter(t=>{const b=t.getBBox();return b.x<0||b.x+b.width>svg.viewBox.baseVal.width||b.y<0||b.y+b.height>svg.viewBox.baseVal.height}).map(t=>t.textContent));
     assert.deepEqual(clipped,[],`Chart labels fit at ${width}`);
     const active=await page.locator('.crumbs [aria-current]').boundingBox(),nav=await page.locator('.crumbs').boundingBox();
     assert.ok(active.x>=nav.x-1&&active.x+active.width<=nav.x+nav.width+1,'Active step is visible');
     await page.locator('#metr-chart7 svg').focus();await page.keyboard.press('ArrowRight');
     assert.match(await page.locator('#metr-chart7 .tip').innerText(),/GPT-4/);
     await page.keyboard.press('Escape');assert.equal(await page.locator('#metr-chart7 .tip').isVisible(),false);
     for(const summary of await page.locator('.disclosure7>summary').all()){
      await summary.focus();await page.keyboard.press('Enter');
     }
     assert.equal(await page.locator('.disclosure7[open]').count(),3);
     const csvs=await page.locator('a[download]').evaluateAll(links=>links.map(a=>decodeURIComponent(a.href.split(',')[1])));
     assert.equal(csvs.length,1);assert.equal(csvs[0].split('\r\n').length,24);
     assert.match(csvs[0],/"GPT-4","2023-03-14","80","0.889561","0.342984","2.523746"/);
     assert.match(csvs[0],/"80","69.874587","27.026521","170.437873"/);
     assert.match(csvs[0],/"80","185.911829","97.30292","398.514614"/);
     assert.equal(await page.locator('.data7 tbody tr').count(),23);
     assert.equal(await page.locator('.related7 li').count(),4);
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
   assert.equal(await page.locator('.library6').count(),0);
   assert.equal(await page.locator('h1').innerText(),topics.skills.h1);
   assert.match(await page.locator('.verify5').innerText(),/Awaiting human review/);
   await page.goto(PAGE+'#skills/literacy');assert.equal(await page.locator('h1').innerText(),topics.skills.h1);
   await page.goto(PAGE+'#skills/bastani');assert.equal(await page.locator('#source-bastani').count(),1);
   await page.goto(PAGE+'#review/skills');await page.waitForTimeout(500);assert.equal(await page.locator('[data-review]').count(),0);
   await page.goto(PAGE+'#method');assert.equal(await page.locator('[href="pdf-source-crosswalk.html"]').count(),0);
   await page.goto(PAGE+'#capability');await page.locator('#capability-source>summary').click();await page.locator('a[href="#method/selection"]').click();
   assert.match(await page.locator('#m-selection').innerText(),/Added value/);
   await context.close();console.log(`Passed ${width}px ${colorScheme}`);
  }
  assert.deepEqual(errors,[]);
  console.log('Priority pages, responsive layouts, parked routes and source links passed.');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
