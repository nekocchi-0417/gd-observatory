const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const path=require('path');
const topics=require('../src/priority.json');
const selected=require('../src/selected-topics.json');
const work=require('../src/work-series.json');
const PAGE=process.env.BASE_URL||'file://'+path.resolve(__dirname,'../docs/index.html');
(async()=>{
 const browser=await chromium.launch(),errors=[];
 try{
  for(const width of (process.env.WIDTHS?process.env.WIDTHS.split(',').map(Number):[1440,760,720,390,340]))for(const colorScheme of ['light','dark']){
   const context=await browser.newContext({viewport:{width,height:950},colorScheme});
   const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
   for(const id of Object.keys(topics)){
    await page.goto(PAGE+'#'+id);
    await page.evaluate(()=>document.fonts.ready);
    const support=page.locator('.evidence-grid7');
    assert.equal(await support.count(),1,`${id}: shared supporting layout`);
    assert.equal(await support.locator(':scope>.supporting7').count(),0);
    assert.equal(await support.locator(':scope>.disclosure7').count(),2);
    assert.equal(await support.locator('details[open]').count(),0);
    const boxes=await support.locator(':scope>*').evaluateAll(nodes=>nodes.map(n=>{const b=n.getBoundingClientRect();return {x:b.x,y:b.y,width:b.width,bottom:b.bottom,right:b.right}}));
    if(width>720){
     assert.ok(Math.abs(boxes[0].y-boxes[1].y)<1,`${id}: disclosures align`);
     assert.ok(boxes[1].x>boxes[0].right);
    }else{
     assert.ok(boxes.every(b=>Math.abs(b.x-boxes[0].x)<1),`${id}: one column on mobile`);
     assert.ok(boxes.slice(1).every((b,i)=>b.y>=boxes[i].bottom-1),`${id}: mobile sections never overlap`);
    }
    assert.deepEqual(await support.locator('summary').allTextContents(),['Sources, data & caveats','More evidence']);
    assert.equal(await page.locator(`#${id}-watch:visible`).count(),1,`${id}: measurement priority stays visible`);
    assert.equal(await page.locator(`#${id}-watch h2`).innerText(),'Next measurement needed');
    assert.equal(await page.locator(`#${id}-watch a[href="#gaps/${id}"]:visible`).count(),1);
    if(id!=='capability')assert.ok((await page.locator(`#${id}-watch`).innerText()).includes(topics[id].gap));
    assert.equal(await page.locator('.related7 li:visible').count(),0,'Additional sources start collapsed');
    const headers=await support.locator('summary').evaluateAll(nodes=>nodes.map(n=>{const b=n.getBoundingClientRect();return {y:b.y,height:b.height,width:b.width}}));
    assert.ok(Math.abs(headers[0].height-headers[1].height)<1,`${id}: matched disclosure headers`);
    assert.ok(Math.abs(headers[0].width-headers[1].width)<1,`${id}: matched disclosure widths`);
    if(width>720)assert.ok(Math.abs(headers[0].y-headers[1].y)<1,`${id}: matched disclosure baseline`);
    assert.match(await page.locator(`#${id}-related`).textContent(),/Working selection, not exhaustive/);
    if(id==='capability'||id==='adoption'){
     const chart=id==='capability'?'#metr-chart7':'#gallup-chart7';
     assert.equal(await page.locator('.evidence-chart7 svg').count(),1);
     assert.equal(await page.locator('.publisher7 a:visible').count(),1);
     assert.equal(await page.locator('.claim5 .lead5, .review-state7, .pilot7 .draft5').count(),0);
     assert.equal(await page.locator('.disclosure7').count(),2);
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
     const takeawayLinks=await page.locator('.takeaway7 a, .benchmark-facts7 a').evaluateAll(a=>a.map(x=>x.href));
     const relatedLinks=await page.locator('.related7 a').evaluateAll(a=>a.map(x=>x.href));
     assert.equal(new Set(takeawayLinks).size,id==='capability'?2:0);
     assert.ok(takeawayLinks.every(href=>!relatedLinks.includes(href)),'Related evidence adds sources, not repeated citations');
     if(id==='capability'){
      assert.equal(await page.locator('.benchmark-facts7:visible').count(),0,'Supporting benchmarks are collapsed');
      assert.match(await page.locator('#capability-watch').innerText(),/whole workflows.*human checking.*total cost/);
      assert.match(await page.locator('.takeaway7').innerText(),/technical test tasks, not whole jobs/);
     }
     for(const summary of await page.locator('.disclosure7>summary').all()){
      await summary.focus();await page.keyboard.press('Enter');
     }
     assert.equal(await page.locator('.disclosure7[open]').count(),2);
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
      assert.match(await sourceNotes.innerText(),/not a review of all capability research/);
      assert.equal(await page.locator('#capability-related .benchmark-facts7').count(),1,'Benchmarks and related sources merged');
     }else{
      for(const [date,value] of [['2023-05',11],['2024-05',12],['2025-05',19],['2025-08',23],['2025-11',26],['2026-02',28],['2026-05',30],['2026-08',32]]){
       assert.ok(csvs[0].includes(`"${date}","${value}",`),`Correct Gallup value for ${date}`);
      }
      assert.match(await page.locator('.takeaway7').innerText(),/21-percentage-point increase/);
      assert.match(await page.locator('#adoption-source').innerText(),/Confidence intervals are not supplied/);
      assert.match(await page.locator('#adoption-source').innerText(),/not a field-wide review/);
      assert.match(await page.locator('#adoption-related').innerText(),/Survey changes in 2025, including in the Netherlands/);
     }
     assert.equal(await page.locator('.data7 tbody tr').count(),id==='capability'?23:8);
     assert.equal(await page.locator('.related7 li').count(),id==='capability'?4:3);
    }else{
     const t=selected[id];
     assert.equal(await page.locator('.evidence-chart7').count(),1);
     assert.equal(await page.locator('.publisher7 a:visible').count(),1);
     assert.equal(await page.locator('.verify5').count(),0);
     assert.ok((await page.locator('.pilot7').innerText()).split(/\s+/).length<310,`${id}: concise default view`);
     assert.equal(await page.locator('.takeaway7 b').innerText(),t.takeawayLabel+':');
     assert.ok((await page.locator('.takeaway7').innerText()).includes(t.takeaway));
     const clipped=await page.locator('.evidence-chart7 svg').evaluateAll(svgs=>svgs.flatMap(svg=>[...svg.querySelectorAll('text')].filter(t=>{const b=t.getBBox();return b.x<-.5||b.x+b.width>svg.viewBox.baseVal.width+.5||b.y<-.5||b.y+b.height>svg.viewBox.baseVal.height+.5}).map(t=>t.textContent)));
     assert.deepEqual(clipped,[],`${id}: chart labels fit at ${width}`);
     if(id==='culture'){
      assert.equal(await page.locator('.waffle8-grid i').count(),100);
      assert.equal(await page.locator('.waffle8-grid .filled').count(),1);
      assert.equal(await page.locator('.waffle8-grid .possible').count(),2);
     }else assert.equal(await page.locator('.evidence-chart7 svg').count(),1);
     for(const summary of await support.locator('summary').all()){
      await summary.focus();await page.keyboard.press('Enter');
     }
     assert.equal(await support.locator('details[open]').count(),2);
     assert.ok((await page.locator(`#${id}-source .context7`).innerText()).split(/\s+/).length<=130,`${id}: compact caveats`);
     const rows=id==='work'?work:t.data;
     assert.equal(await page.locator('.data7 tbody tr').count(),rows.length);
     assert.equal(await page.locator('.related7 li').count(),t.related.length+t.support.length);
     assert.equal(await page.locator('a[download]').count(),1);
     const csv=await page.locator('a[download]').evaluate(a=>decodeURIComponent(a.href.split(',')[1]));
     assert.equal(csv.split('\r\n').length,rows.length+1);
     assert.ok((await page.locator(`#${id}-source`).innerText()).includes('AI-assisted summary; not independently verified'));
     const rlinks=await page.locator('.related7 a').evaluateAll(a=>a.map(x=>x.href));
     assert.equal(new Set(rlinks).size,rlinks.length,`${id}: merged sources not duplicated`);
     for(const source of [...t.support,...t.related])assert.ok(rlinks.includes(source.url),`${id}: retains source ${source.url}`);
     if(id==='work')assert.match(await page.locator('.takeaway7:visible').innerText(),/In Denmark.*no extra decline.*through 2024/);
    }
    await page.locator(`#${id}-source>summary`).click();
    assert.equal(await page.locator(`#${id}-source[open]`).count(),0);
    assert.equal(await page.locator(`#${id}-related[open]`).count(),1,`${id}: disclosures open independently`);
    assert.equal(await page.locator('h1').innerText(),topics[id].h1);
    await page.evaluate(()=>document.fonts.ready);
    const crumb=await page.locator('.crumbs [aria-current]').boundingBox(),crumbnav=await page.locator('.crumbs').boundingBox();
    assert.ok(crumb.x>=crumbnav.x-1&&crumb.x+crumb.width<=crumbnav.x+crumbnav.width+1,`${id}: current step fully visible`);
    assert.equal(await page.locator('a[href="#method/selection"]').count(),1);
    const size=await page.evaluate(()=>({w:innerWidth,scroll:document.documentElement.scrollWidth}));
    assert.ok(size.scroll<=size.w,`${id}: overflow at ${width}`);
    await page.locator(`a[href="#details/${id}"]`).first().click();
    assert.equal(await page.locator('.source6').count(),2);
    await page.locator('.source6-detail summary').first().click();
    assert.ok(await page.locator('.source6-detail[open]').count());
    if(selected[id])for(const priority of selected[id].watch)assert.ok((await page.locator('.priority6-gap').innerText()).includes(priority),`${id}: detailed priorities preserved`);
   }
   await page.goto(PAGE+'#skills');
   assert.equal(await page.locator('.verify5').count(),0);
   assert.equal(await page.locator('a[href^="#review"]').count(),0);
   await page.goto(PAGE+'#library/skills');
   assert.equal(await page.locator('.library6').count(),0);
   assert.equal(await page.locator('h1').innerText(),topics.skills.h1);
   assert.equal(await page.locator('.verify5').count(),0);
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
