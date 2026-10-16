const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const out=path.join(root,'dist/verification');
fs.mkdirSync(out,{recursive:true});
const url=process.env.VERIFY_URL||'file://'+path.join(root,'docs/index.html');
const routes=['home','emerging','emerging/work','emerging/skills','emerging/culture','gaps','pathways','capability','adoption','handover','work','share','skills','culture','institutions','influence','method','contribute','contribute/about','contribute/funding','gaps/adoption','gaps/influence','details/work','details/capability','details/adoption','details/handover','details/share','details/skills','details/culture','details/institutions','details/influence','work/canaries','adoption/source','adoption/more','evidence','map','review','library/skills','library/capability','library/influence','skills/literacy','why','futures','futures/more','unknown'];
(async()=>{
  const browser=await chromium.launch(),errors=[],overflows=[],badSvg=[],brokenLabels=[];
  for(const width of [1440,1000,760,390,340]){
    for(const theme of ['light','dark']){
      const context=await browser.newContext({viewport:{width,height:950},colorScheme:theme});
      const page=await context.newPage();
      page.on('pageerror',e=>errors.push(`${width}/${theme}: ${e.message}`));
      for(const route of routes){
        await page.goto(url+'#'+route);
        await page.waitForTimeout(90);
        assert.ok(await page.locator('#view h1').count(),`${route}: missing heading`);
        assert.ok(!(await page.title()).includes('Local prototype'),`${route}: unpublished title`);
        assert.equal(await page.locator('.prototype-note10').count(),0);
        assert.equal(await page.locator('.nav a[href="#pathways"]').count(),0,'Single Research gaps navigation destination');
        assert.ok(await page.evaluate(()=>[...document.querySelectorAll('.nav a')].every(a=>{const r=a.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth+1})),`${width}/${route}: clipped navigation`);
        const check=await page.evaluate(()=>({
          overflow:document.documentElement.scrollWidth>innerWidth+1,
          labels:[...document.querySelectorAll('[aria-labelledby]')].flatMap(e=>e.getAttribute('aria-labelledby').split(' ').filter(id=>!document.getElementById(id))),
          svg:[...document.querySelectorAll('#view svg')].filter(e=>e.getBoundingClientRect().width&&/NaN|undefined/.test(e.outerHTML)).map(e=>e.getAttribute('aria-label')),
          badCopy:/\b(undefined|NaN)\b/.test(document.querySelector('#view').innerText)
        }));
        if(check.overflow)overflows.push(`${width}/${theme}/${route}`);
        if(check.labels.length)brokenLabels.push([width,theme,route,check.labels]);
        if(check.svg.length)badSvg.push([width,theme,route,check.svg]);
        assert.ok(!check.badCopy,`${route}: undefined text`);
        if(width>700&&['home','emerging'].includes(route)){
          assert.ok(await page.evaluate(()=>[...document.querySelectorAll('.pair-grid10')].every(pair=>['.figure-meta10','h3','.measure10','.source10','.chart'].every(selector=>{const rows=pair.querySelectorAll(selector);return rows.length===2&&Math.abs(rows[0].getBoundingClientRect().top-rows[1].getBoundingClientRect().top)<2}))),`${width}/${route}: paired headers, sources and visuals must align`);
        }
        if(['capability','adoption','handover','work','share','skills','culture','institutions','influence'].includes(route)){
          assert.equal(await page.locator('.measurement11').count(),1,`${route}: missing measurement summary`);
          assert.equal(await page.locator('.gaps-lane11').count(),1,`${route}: missing measurement gaps`);
          const counts=await page.evaluate(id=>[MEASUREMENT11[id].measured.length,MEASUREMENT11[id].gaps.length],route);
          assert.equal(await page.locator('.indicator-card11').count(),counts[0]);
          assert.equal(await page.locator('.gap-card11').count(),counts[1]);
          assert.equal(await page.locator('.evidence-chart7:visible, .chart:visible').count(),0,`${route}: no large charts visible by default on step pages`);
          assert.equal(await page.locator('.next-measure9').count(),0,`${route}: duplicate gap block`);
          assert.equal(await page.locator('.measurement-intro11>p,.lane-sub11,.measurement-contribute11').count(),0,'No repeated explanatory copy or destination links');
          assert.equal(await page.locator('.research-back10 a').count(),1,'One back link per step');
          assert.ok(await page.locator('.indicator-card11').evaluateAll(cards=>cards.every(c=>c.querySelectorAll('a').length===1)),'One source link per indicator');
          assert.equal(await page.locator('.evidence-library14').evaluate(d=>d.open),false,'Evidence library starts collapsed');
          const libraryCheck=await page.evaluate(id=>{const rows=libraryEntries14(id),represented=new Set(rows.flatMap(r=>r.sourceURLs));return EVIDENCE_LIBRARY14[id].every(r=>represented.has(r.url))&&new Set(rows.map(r=>r.key)).size===rows.length&&rows.every(r=>/^https?:/.test(r.url))},route);
          assert.ok(libraryCheck,`${route}: complete, deduplicated HTTP(S) bibliography`);
          await page.evaluate(()=>document.querySelectorAll('#view details').forEach(d=>d.open=true));
          await page.waitForTimeout(70);
          if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))overflows.push(`${width}/${theme}/${route}/expanded`);
          assert.equal(await page.locator('.nav [aria-current="page"]').innerText(),'Research gaps');
          await page.evaluate(()=>document.querySelectorAll('#view details').forEach(d=>d.open=false));
        }
        if(['gaps','pathways','map','evidence'].includes(route)){
          assert.equal(await page.locator('.measurement-row11').count(),9);
          assert.equal(await page.locator('#research-map11 .st5').count(),9);
          assert.equal(await page.locator('.nav [aria-current="page"]').innerText(),'Research gaps');
          assert.equal(await page.locator('#research-pathways11').evaluate(d=>d.open),width>=980);
          if(width>=980)assert.ok(await page.evaluate(()=>{const svg=document.querySelector('#research-map11 .map5>svg'),box=svg.getBoundingClientRect();return [...svg.querySelectorAll('text')].every(t=>{const r=t.getBoundingClientRect();return r.left>=box.left-1&&r.right<=box.right+1})}),`${width}/${route}: pathway labels stay inside the diagram`);
        }
        if(route==='method'||route==='contribute'||route.startsWith('details/')){
          await page.evaluate(()=>document.querySelectorAll('#view details').forEach(d=>d.open=true));
          if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))overflows.push(`${width}/${theme}/${route}/expanded`);
          await page.evaluate(()=>document.querySelectorAll('#view details').forEach(d=>d.open=false));
        }
        if(width===1440&&theme==='light'&&['home','emerging','gaps','work','adoption','capability','skills','handover','share','culture','institutions','influence','method','contribute','futures','pathways'].includes(route))await page.screenshot({path:path.join(out,`${route}-desktop.png`),fullPage:true});
        if(width===390&&theme==='light'&&['home','emerging','gaps','adoption','skills','share','method','contribute'].includes(route))await page.screenshot({path:path.join(out,`${route}-mobile.png`),fullPage:true});
        if(width===1440&&theme==='dark'&&['emerging','skills','gaps'].includes(route))await page.screenshot({path:path.join(out,`${route}-dark.png`),fullPage:true});
      }
      await context.close();
    }
  }
  const p=await browser.newPage({viewport:{width:1440,height:950}});
  await p.goto(url+'#home');
  assert.equal(await p.locator('.snapshot-note12').innerText(),'Selected trends in AI capability and employment.');
  assert.match(await p.locator('#home-note-work').textContent(),/cannot establish the effect of AI on employment/);
  assert.equal(await p.locator('.home-intro10 p,.home-intro10 a,.home-intro10 .eyebrow10,.home-doors10,.home-next10').count(),0,'Home begins with evidence, without the long preamble');
  assert.ok(await p.locator('#work-left10').evaluate(el=>el.getBoundingClientRect().top<500),'Home chart starts within the first 500 desktop pixels');
  assert.match(await p.locator('#work-left10-title').innerText(),/Models are completing longer tasks/);
  assert.match(await p.locator('#work-right10-title').innerText(),/Employment is falling among young workers/);
  assert.match(await p.locator('.human10 .measure10').innerText(),/US workers aged 22-25/);
  assert.ok(!(await p.locator('.home10').innerText()).includes('209 times'),'Technical ratio stays in collapsed note');
  assert.ok(!/, not\b/.test(await p.locator('.home10').innerText()),'Avoid compressed x, not y phrasing on the home page');
  for(const key of ['capability','work']){
    const button=p.locator(`[data-home-note="${key}"]`),note=p.locator(`#home-note-${key}`);
    assert.equal(await note.evaluate(d=>d.open),false);
    assert.ok(await button.getAttribute('title'),'Definition available on hover');
    await button.focus();await p.keyboard.press('Enter');
    await p.waitForTimeout(80);
    assert.equal(await note.evaluate(d=>d.open),true);
    assert.equal(await button.getAttribute('aria-expanded'),'true');
    assert.equal(await p.evaluate(()=>document.activeElement.parentElement.id),'home-note-'+key);
    await note.locator(`[data-home-return="${key}"]`).click();
    assert.equal(await p.evaluate(()=>document.activeElement.dataset.homeNote),key,'Return link restores focus to chart note reference');
    await note.locator('summary').click();await p.waitForTimeout(80);
    assert.equal(await button.getAttribute('aria-expanded'),'false');
  }
  for(const width of [1440,760,390,340]){
    await p.setViewportSize({width,height:950});
    await p.evaluate(()=>document.querySelectorAll('.home-notes12 details').forEach(d=>d.open=true));
    assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Expanded home notes fit '+width);
    const sizes=await p.evaluate(()=>({caveat:parseFloat(getComputedStyle(document.querySelector('.snapshot-note12')).fontSize),body:parseFloat(getComputedStyle(document.querySelector('.figure-take10')).fontSize)}));
    assert.ok(sizes.caveat<sizes.body,'Caveats are visually secondary');
  }
  await p.setViewportSize({width:1440,height:950});await p.goto(url+'#home');
  await p.evaluate(()=>document.querySelectorAll('.home-notes12 details').forEach(d=>d.open=false));
  assert.equal(await p.locator('#work-left10 path[fill="none"]').count(),1,'Capability has a record-high line');
  assert.equal(await p.locator('#work-left10 circle').count(),23,'Every evaluated model remains visible');
  const frontier=await p.evaluate(()=>capabilityRecords7().map(r=>[r.date,r.estimate]));
  assert.ok(frontier.every((r,i)=>!i||r[0]>frontier[i-1][0]&&r[1]>frontier[i-1][1]),'Record-high line rises through observed records');
  await p.getByRole('link',{name:'Explore emerging evidence',exact:false}).click();
  assert.ok(p.url().endsWith('#emerging'));
  assert.equal(await p.locator('.home-notes12').count(),0,'Numbered Home notes remain local to Home');
  assert.match(await p.locator('#work-left10-title').innerText(),/Models are completing longer tasks/);
  assert.equal(await p.locator('#culture-left10 path[fill="none"]').count(),1,'Upload share has a line');
  assert.equal(await p.locator('#culture-left10 circle').count(),5,'Exactly five source reports');
  assert.equal(await p.locator('#culture-right10 svg, #skills-right10 svg').count(),0,'Snapshots are numbers, not pseudo-trends');
  assert.match(await p.locator('#skills-right10').innerText(),/5\.4\s+points lower/);
  assert.match(await p.locator('#culture-right10').innerText(),/1-3%/);
  const music=await p.evaluate(()=>COMPARISON_DATA.music);
  assert.deepEqual(music.uploads.map(r=>[r.value,r.qualifier]),[[10,'about'],[18,'over'],[28,'over'],[39,'about'],[44,'about']]);
  assert.equal(music.uploads.at(-1).date,music.streams.reported,'Same release for latest paired values');
  await p.locator('#culture-left10 svg').focus();await p.keyboard.press('ArrowRight');await p.keyboard.press('ArrowRight');
  assert.match(await p.locator('#culture-left10 .tip').innerText(),/over 18%/);await p.keyboard.press('Escape');
  await p.locator('#compare-culture summary').click();
  const csv=await p.locator('#compare-culture a[download]').getAttribute('href');
  assert.match(decodeURIComponent(csv),/2025-04-16.*18.*over/,'CSV retains source bounds');
  await p.getByRole('link',{name:'02 Use & skills',exact:true}).click();
  assert.ok(p.url().endsWith('#emerging/skills'));
  await p.getByRole('link',{name:'AI adoption: research gaps',exact:false}).click();
  assert.ok(p.url().endsWith('#adoption'));
  await p.locator('#adoption-related>summary').click();
  assert.ok((await p.locator('#adoption-related').innerText()).includes('94%'));
  assert.equal(await p.locator('#adoption-related svg').count(),0);
  await p.goto(url+'#gaps/adoption');
  assert.ok(p.url().endsWith('#gaps/adoption'));
  assert.ok(await p.locator('#research-adoption').isVisible());
  await p.goBack();
  assert.ok(p.url().endsWith('#adoption'));
  await p.goto(url+'#emerging');
  const data=await p.evaluate(()=>({rows:TOPIC_CHARTS.work.data.length,groups:COMPARISON_DATA.work.series.length,baseline:COMPARISON_DATA.work.data.find(r=>r[0]==='2022-11-01'),exposure:COMPARISON_DATA.exposure.data,cols:TOPIC_CHARTS.work.columns,paths:document.querySelectorAll('#work-right10 path[fill="none"]').length}));
  assert.equal(data.rows,60);assert.equal(data.groups,6);assert.ok(data.baseline.slice(1).every(n=>n===100));assert.deepEqual(data.exposure,[['Computer & Math',94,33]]);assert.equal(data.paths,6);
  await p.locator('#work-right10 svg').focus();await p.keyboard.press('ArrowLeft');assert.ok(await p.locator('#work-right10 .tip').isVisible());assert.equal(await p.locator('#work-right10 .tip .d').textContent(),'Aug 2026');await p.keyboard.press('Escape');
  const dates=await p.evaluate(()=>({monthly:[...COMPARISON_DATA.work.data.map(r=>r[0]),...ADOPTION7.rows.map(r=>r.date)].every(date=>fmtDate(Number(monthlyYear10(date).toFixed(4)))===MON[Number(date.slice(5,7))-1]+' '+date.slice(0,4)),models:CAPABILITY7.metr.rows.every(r=>calendarDate10(Number(decimalYear7(r.date).toFixed(4)))===new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(Date.parse(r.date)))}));
  assert.ok(dates.monthly,'Monthly tooltip date labels');assert.ok(dates.models,'Model release tooltip labels');
  await p.goto(url+'#pathways');await p.locator('.st5[data-id="skills"]').hover();
  assert.ok((await p.locator('.map5 .card5').innerText()).includes('Currently measured'));
  assert.ok((await p.locator('.map5 .card5').innerText()).includes('Measurement gaps'));
  for(const id of ['capability','adoption','handover','work','share','skills','culture','institutions','influence']){
    await p.locator(`.st5[data-id="${id}"]`).hover();
    assert.ok(await p.evaluate(()=>{const card=document.querySelector('.map5 .card5').getBoundingClientRect(),diagram=document.querySelector('.map5>svg').getBoundingClientRect();return card.top>=diagram.bottom}),`${id}: preview must not cover pathway nodes`);
  }
  await p.locator('.st5[data-id="skills"]').click();assert.ok(p.url().endsWith('#skills'));assert.equal(await p.locator('.gaps-lane11').count(),1);
  assert.match(await p.locator('.indicator-card11[data-source="bastani"]').innerText(),/no-AI group/);
  assert.match(await p.locator('.indicator-card11[data-source="bastani"]').innerText(),/5\.4 points lower/);
  await p.goto(url+'#skills/bastani');assert.ok((await p.locator('h1').innerText()).includes('Why these sources were selected'));
  await p.goto(url+'#capability/source');assert.ok(await p.locator('#capability-source').evaluate(d=>d.open));assert.equal(await p.locator('#capability-source tbody tr').count(),23);
  await p.goto(url+'#work/source');const workCsv=await p.locator('#work-source a[download]').getAttribute('href');assert.match(decodeURIComponent(workCsv),/Ages 50\+/);assert.equal(await p.locator('#work-source tbody tr').count(),60);
  await p.goto(url+'#handover');assert.equal(await p.locator('.indicator-card11').count(),1,'Unresolved denominator not promoted to measured card');
  await p.goto(url+'#culture/source');assert.match(await p.locator('.comparison-data11').innerText(),/separate daily-upload comparison/);
  const schema=await p.evaluate(()=>ORDER.every(id=>MEASUREMENT11[id].measured.every(c=>SELECTED_EVIDENCE[id].sources.some(s=>s.id===c.source))&&MEASUREMENT11[id].gaps.every(c=>Object.hasOwn(GAP_STATUS11,c.status))));assert.ok(schema,'All indicator sources and gap labels resolve');
  for(const id of ['capability','adoption','handover','work','share','skills','culture','institutions','influence']){
    await p.goto(url+'#library/'+id);
    const library=p.locator('.evidence-library14');assert.ok(await library.evaluate(d=>d.open),'Library deep link opens '+id);
    assert.match(await library.innerText(),/AI-assisted reading list/);
    const search=library.locator('input'),total=await library.locator('.library-list14 li').count();assert.ok(total>10,id+': includes the broader collection');
    const title=await library.locator('.library-list14 li h3').first().innerText();await search.fill(title.replace(/\s*↗\s*$/,''));assert.ok(await library.locator('.library-list14 li:visible').count()>0);
    await search.fill('zz-no-matching-reference-zz');assert.equal(await library.locator('.library-list14 li:visible').count(),0);assert.ok(await library.locator('.library-empty14').isVisible());
    await search.fill('');assert.equal(await library.locator('.library-list14 li:not([hidden])').count(),total,'Clearing search restores all references');
  }
  await p.goto(url+'#contribute/about');assert.match(await p.locator('#w-about').innerText(),/Gradual disempowerment is the risk/);assert.equal(await p.locator('#w-about a[href="https://gradual-disempowerment.ai/"]').count(),1);
  await p.setViewportSize({width:390,height:900});await p.goto(url+'#gaps');await p.locator('#research-pathways11>summary').click();await p.locator('.ml5[data-id="adoption"] .ml5-btn').click();await p.locator('.ml5[data-id="adoption"] [data-t="open"]').click();assert.ok(p.url().endsWith('#adoption'));await p.setViewportSize({width:1440,height:950});
  await p.goto(url);await p.getByRole('link',{name:'Explore emerging evidence',exact:false}).click();await p.goBack();
  assert.equal(await p.locator('.nav [aria-current="page"]').innerText(),'Home','Back to hashless URL returns home');
  const summary={viewports:[1440,1000,760,390,340],themes:['light','dark'],routeChecks:routes.length*10,errors,overflows,badSvg,brokenLabels,data,dates,frontier,music,schema,interactions:'merged research routes, desktop and phone pathways, indicator cards, source rationale, gap labels, data tables and CSV, chart preservation, keyboard chart tooltip, back navigation'};
  fs.writeFileSync(path.join(out,'verification.json'),JSON.stringify(summary,null,2));
  console.log(JSON.stringify(summary,null,2));
  await browser.close();
  assert.equal(errors.length,0,'Page errors');assert.equal(overflows.length,0,'Horizontal overflow');assert.equal(badSvg.length,0,'Invalid chart geometry');assert.equal(brokenLabels.length,0,'Broken accessible labels');
})().catch(e=>{console.error(e);process.exit(1)});
