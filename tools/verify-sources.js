const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const path=require('path');
const fs=require('fs');
const topics=require('../src/priority.json');
const PAGE='file://'+path.resolve(__dirname,'../docs/index.html');
(async()=>{
 const browser=await chromium.launch(),errors=[];
 try{
  for(const width of [1440,390,340])for(const colorScheme of ['light','dark']){
   const context=await browser.newContext({viewport:{width,height:950},colorScheme});
   const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
   for(const id of Object.keys(topics)){
    await page.goto(PAGE+'#'+id);
    assert.equal(await page.locator('.source6').count(),2);
    assert.equal(await page.locator('.source6-cite a:visible').count(),2);
    assert.equal(await page.locator('h1').innerText(),topics[id].h1);
    assert.match(await page.locator('.verify5').innerText(),/Awaiting human review/);
    const size=await page.evaluate(()=>({w:innerWidth,scroll:document.documentElement.scrollWidth}));
    assert.ok(size.scroll<=size.w,`${id}: overflow at ${width}`);
    await page.locator('.source6-detail summary').first().click();
    assert.ok(await page.locator('.source6-detail[open]').count());
   }
   await page.goto(PAGE+'#review');
   await page.evaluate(()=>document.fonts.ready);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Review overflow at ${width}`);
   assert.equal(await page.locator('[data-review]').count(),18);
   await page.selectOption('[data-review="bastani"]','checked');
   await page.selectOption('[data-review="vaccaro"]','parked');
   await page.locator('.review6-item').filter({has:page.locator('[data-review="bastani"]')}).locator('summary').click();
   await page.fill('[data-note="bastani"]','Check the exam comparator.');
   await page.reload();
   assert.equal(await page.locator('#review-count').innerText(),'1 of 18 checked');
   assert.match(await page.locator('#review-parked').innerText(),/1 parked; 16 not checked/);
   assert.equal(await page.locator('[data-note="bastani"]').inputValue(),'Check the exam comparator.');
   const downloadPromise=page.waitForEvent('download');await page.click('#review-export');
   const download=await downloadPromise;
   const exported=fs.readFileSync(await download.path(),'utf8');
   assert.match(exported,/Check the exam comparator/);assert.match(exported,/Status: parked/);
   await page.goto(PAGE+'#skills');
   assert.match(await page.locator('.verify5').innerText(),/Awaiting human review/);
   await page.goto(PAGE+'#library/skills');
   assert.equal(await page.locator('.chart').count(),0);
   assert.match(await page.locator('.verify5').innerText(),/To be verified/);
   await page.goto(PAGE+'#skills/literacy');assert.equal(await page.locator('.library6 h1').innerText(),'Awaiting review');
   await page.goto(PAGE+'#skills/bastani');assert.equal(await page.locator('#source-bastani').count(),1);
   await page.goto(PAGE+'#review/skills');await page.waitForTimeout(500);assert.ok(await page.evaluate(()=>scrollY>0));
   await page.goto(PAGE+'#method');assert.equal(await page.locator('[href="pdf-source-crosswalk.html"]').count(),1);
   await context.close();console.log(`Passed ${width}px ${colorScheme}`);
  }
  assert.deepEqual(errors,[]);
  console.log('18-source pages, responsive layouts, review persistence/export, parked routes and source links passed.');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
