const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const path=require('path');
const topics=require('../src/priority.json');
const PAGE=process.env.BASE_URL||'file://'+path.resolve(__dirname,'../docs/index.html');
(async()=>{
 const browser=await chromium.launch(),errors=[];
 try{
  for(const width of [1440,760,720,390,340])for(const colorScheme of ['light','dark']){
   const context=await browser.newContext({viewport:{width,height:950},colorScheme});
   const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
   for(const id of Object.keys(topics)){
    await page.goto(PAGE+'#'+id);
    const support=page.locator('.evidence-grid7');
    assert.equal(await support.count(),1,`${id}: shared supporting layout`);
    assert.equal(await support.locator(':scope>.supporting7').count(),1);
    assert.equal(await support.locator(':scope>.disclosure7').count(),3);
    assert.equal(await support.locator('details[open]').count(),0);
    const boxes=await support.locator(':scope>*').evaluateAll(nodes=>nodes.map(n=>{const b=n.getBoundingClientRect();return {x:b.x,y:b.y,width:b.width,bottom:b.bottom,right:b.right}}));
    if(width>720){
     assert.ok(Math.abs(boxes[0].y-boxes[1].y)<1,`${id}: indicators and caveats align`);
     assert.ok(Math.abs(boxes[2].y-boxes[3].y)<1,`${id}: related evidence and watch align`);
     assert.ok(boxes[1].x>boxes[0].right&&boxes[3].x>boxes[2].right);
    }else{
     assert.ok(boxes.every(b=>Math.abs(b.x-boxes[0].x)<1),`${id}: one column on mobile`);
     assert.ok(boxes.slice(1).every((b,i)=>b.y>=boxes[i].bottom-1),`${id}: mobile sections never overlap`);
    }
    if(id==='capability'||id==='adoption'){
     const chart=id==='capability'?'#metr-chart7':'#gallup-chart7';
     assert.equal(await page.locator('.evidence-chart7 svg').count(),1);
     assert.equal(await page.locator('.publisher7 a:visible').count(),1);
     assert.equal(await page.locator('.claim5 .lead5, .review-state7, .pilot7 .draft5').count(),0);
     assert.equal(await page.locator('.disclosure7').count(),3);
     assert.equal(await page.locator('.disclosure7[open]').count(),0);
     assert.equal(await page.locator('.related7 li:visible').count(),0);
     assert.ok((await page.locator('.pilot7').innerText()).split(/\s+/).length<260,'Default view stays concise');
     assert.equal(await page.locator(chart+' circle').count(),id==='capability'?23:8);
     assert.equal(await page.locator(chart+' .chart-x-label').innerText(),id==='capability'?'Model release year':'Survey year');
     assert.match(await page.locator(chart+' .chart-y-label').innerText(),id==='capability'?/human expert/:/US employees/);
     const clipped=await page.locator(chart+' svg').evaluate(svg=>[...svg.querySelectorAll('text')].filter(t=>{const b=t.getBBox();return b.x<0||b.x+b.width>svg.viewBox.baseVal.width||b.y<0||b.y+b.height>svg.viewBox.baseVal.height}).map(t=>t.textContent));
     assert.deepEqual(clipped,[],`Chart labels fit at ${width}`);
     const active=await page.locator('.crumbs [aria-current]').boundingBox(),nav=await page.locator('.crumbs').boundingBox();
     assert.ok(active.x>=nav.x-1&&active.x+active.width<=nav.x+nav.width+1,'Active step is visible');
     await page.locator(chart+' svg').focus();await page.keyboard.press('ArrowRight');
     assert.match(await page.locator(chart+' .tip').innerText(),id==='capability'?/GPT-4/:/11%/);
     await page.keyboard.press('Escape');assert.equal(await page.locator(chart+' .tip').isVisible(),false);
     const takeawayLinks=await page.locator('.takeaway7 a, .supporting7 a').evaluateAll(a=>a.map(x=>x.href));
     const relatedLinks=await page.locator('.related7 a').evaluateAll(a=>a.map(x=>x.href));
     assert.equal(new Set(takeawayLinks).size,id==='capability'?2:1);
     assert.ok(takeawayLinks.every(href=>!relatedLinks.includes(href)),'Related evidence adds sources, not repeated citations');
     for(const summary of await page.locator('.disclosure7>summary').all()){
      await summary.focus();await page.keyboard.press('Enter');
     }
     assert.equal(await page.locator('.disclosure7[open]').count(),3);
     const sourceNotes=page.locator(`#${id}-source .context7`);
     assert.equal(await sourceNotes.locator('dt').count(),4,'Four short source notes');
     assert.ok((await sourceNotes.innerText()).split(/\s+/).length<=125,'Source notes stay compact');
     assert.equal(await page.locator(`#${id}-source .source-actions7 a`).filter({hasText:'Full methodology:'}).count(),1);
     assert.match(await page.locator(`#${id}-source`).innerText(),/AI-assisted summary; not independently verified/);
     const csvs=await page.locator('a[download]').evaluateAll(links=>links.map(a=>decodeURIComponent(a.href.split(',')[1])));
     assert.equal(csvs.length,1);assert.equal(csvs[0].split('\r\n').length,id==='capability'?24:9);
     if(id==='capability'){
      assert.match(csvs[0],/"GPT-4","2023-03-14","80","0.889561","0.342984","2.523746"/);
      assert.match(csvs[0],/"80","69.874587","27.026521","170.437873"/);
      assert.match(csvs[0],/"80","185.911829","97.30292","398.514614"/);
      const takeaway=await page.locator('.takeaway7').innerText();
      assert.match(takeaway,/209-fold/);
      assert.match(takeaway,/53 seconds for GPT-4 in March 2023/);
      assert.match(takeaway,/3.1 hours for Mythos Preview \(early\) in April 2026/);
      assert.match(takeaway,/human-expert time/);
      assert.equal(await page.locator('.benchmark-facts7>div').count(),3);
      assert.match(await page.locator('.supporting7-meta').innerText(),/o3 → GPT-5.*2025.*OpenAI-reported/);
      for(const [i,start,end,change] of [[0,88.9,94.6,5.7],[1,83.3,85.7,2.4],[2,35.2,39.0,3.8]]){
       const fact=await page.locator('.benchmark-facts7>div').nth(i).innerText();
       assert.ok(fact.includes(`${start.toFixed(1)}% → ${end.toFixed(1)}%`));
       assert.ok(fact.includes(`+${change.toFixed(1)} percentage points`));
       assert.equal(Number((end-start).toFixed(1)),change);
      }
      assert.match(await sourceNotes.innerText(),/185.91 ÷ 0.8896/);
     }else{
      for(const [date,value] of [['2023-05',11],['2024-05',12],['2025-05',19],['2025-08',23],['2025-11',26],['2026-02',28],['2026-05',30],['2026-08',32]]){
       assert.ok(csvs[0].includes(`"${date}","${value}",`),`Correct Gallup value for ${date}`);
      }
      assert.match(await page.locator('.takeaway7').innerText(),/21-percentage-point increase/);
      assert.match(await page.locator('#adoption-source').innerText(),/Confidence intervals are not supplied/);
     }
     assert.equal(await page.locator('.data7 tbody tr').count(),id==='capability'?23:8);
     assert.equal(await page.locator('.related7 li').count(),id==='capability'?4:2);
    }else{
     assert.equal(await page.locator('.source-mini6').count(),2);
     assert.equal(await page.locator('.source-mini6-cite a:visible').count(),2);
     assert.match(await page.locator('.verify5').innerText(),/Awaiting human review/);
     for(const summary of await support.locator('summary').all()){
      await summary.focus();await page.keyboard.press('Enter');
     }
     assert.equal(await support.locator('details[open]').count(),3);
     assert.equal(await page.locator(`#${id}-watch .disclosure7-body>p`).first().innerText(),topics[id].gap);
     for(const source of topics[id].sources){
      assert.ok((await page.locator(`#${id}-source`).innerText()).includes(source.limit));
      assert.ok((await page.locator(`#${id}-related`).innerText()).includes(source.finding));
     }
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
   for(const id of ['capability','adoption']){
    await page.goto(PAGE+'#'+id);await page.locator(`#${id}-source>summary`).click();await page.locator('a[href="#method/selection"]').click();
    assert.match(await page.locator('#m-selection').innerText(),/Added value/);
   }
   await context.close();console.log(`Passed ${width}px ${colorScheme}`);
  }
  assert.deepEqual(errors,[]);
  console.log('Priority pages, responsive layouts, parked routes and source links passed.');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
