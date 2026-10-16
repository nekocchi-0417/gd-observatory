const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const out=path.join(root,'dist/verification');
fs.mkdirSync(out,{recursive:true});
const url=process.env.VERIFY_URL||'file://'+path.join(root,'docs/index.html');
const routes=['home','emerging','emerging/work','emerging/skills','emerging/culture','gaps','pathways','capability','adoption','handover','work','share','skills','culture','institutions','influence','method','contribute','gaps/adoption','gaps/influence','details/work','work/canaries','adoption/source','adoption/more','evidence','map','review','library/skills','skills/literacy','why','futures','futures/more','unknown'];
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
          assert.ok(await page.evaluate(()=>[...document.querySelectorAll('.pair-grid10')].every(pair=>{const charts=pair.querySelectorAll('.chart');return Math.abs(charts[0].getBoundingClientRect().top-charts[1].getBoundingClientRect().top)<2})),`${width}/${route}: paired visuals must align`);
        }
        if(['capability','adoption','handover','work','share','skills','culture','institutions','influence'].includes(route)){
          assert.equal(await page.locator('.topic-gaps10').count(),1,`${route}: missing integrated research gaps`);
          assert.equal(await page.locator('.next-measure9').count(),0,`${route}: duplicate gap block`);
          await page.evaluate(()=>document.querySelectorAll('#view details').forEach(d=>d.open=true));
          await page.waitForTimeout(70);
          if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))overflows.push(`${width}/${theme}/${route}/expanded`);
          assert.equal(await page.locator('.nav [aria-current="page"]').innerText(),'Research gaps');
        }
        if(width===1440&&theme==='light'&&['home','emerging','gaps','work','adoption','capability','pathways'].includes(route))await page.screenshot({path:path.join(out,`${route}-desktop.png`),fullPage:true});
        if(width===390&&theme==='light'&&['home','emerging','gaps','adoption','skills'].includes(route))await page.screenshot({path:path.join(out,`${route}-mobile.png`),fullPage:true});
        if(width===1440&&theme==='dark'&&route==='emerging')await page.screenshot({path:path.join(out,'emerging-dark.png'),fullPage:true});
      }
      await context.close();
    }
  }
  const p=await browser.newPage({viewport:{width:1440,height:950}});
  await p.goto(url+'#home');
  assert.equal(await p.locator('#work-left10 path[fill="none"]').count(),1,'Capability has a record-high line');
  assert.equal(await p.locator('#work-left10 circle').count(),23,'Every evaluated model remains visible');
  const frontier=await p.evaluate(()=>capabilityRecords7().map(r=>[r.date,r.estimate]));
  assert.ok(frontier.every((r,i)=>!i||r[0]>frontier[i-1][0]&&r[1]>frontier[i-1][1]),'Record-high line rises through observed records');
  await p.getByRole('link',{name:'Explore emerging evidence',exact:false}).click();
  assert.ok(p.url().endsWith('#emerging'));
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
  await p.getByText('More evidence',{exact:true}).click();
  assert.ok((await p.locator('#exposure-chart10').innerText()).includes('94%'));
  assert.equal(await p.locator('#exposure-chart10 svg').count(),1);
  await p.getByRole('link',{name:'Missing indicators',exact:false}).click();
  assert.ok(p.url().endsWith('#gaps/adoption'));
  assert.ok(await p.locator('#research-adoption').isVisible());
  await p.goBack();
  assert.ok(p.url().endsWith('#adoption'));
  await p.goto(url+'#work');
  const data=await p.evaluate(()=>({rows:TOPIC_CHARTS.work.data.length,groups:COMPARISON_DATA.work.series.length,baseline:COMPARISON_DATA.work.data.find(r=>r[0]==='2022-11-01'),exposure:COMPARISON_DATA.exposure.data,cols:TOPIC_CHARTS.work.columns,paths:document.querySelectorAll('#work-chart8 path[fill="none"]').length}));
  assert.equal(data.rows,60);assert.equal(data.groups,6);assert.ok(data.baseline.slice(1).every(n=>n===100));assert.deepEqual(data.exposure,[['Computer & Math',94,33]]);assert.equal(data.paths,6);
  await p.locator('#work-chart8 svg').focus();await p.keyboard.press('ArrowLeft');assert.ok(await p.locator('#work-chart8 .tip').isVisible());assert.equal(await p.locator('#work-chart8 .tip .d').textContent(),'Aug 2026');await p.keyboard.press('Escape');
  const dates=await p.evaluate(()=>({monthly:[...COMPARISON_DATA.work.data.map(r=>r[0]),...ADOPTION7.rows.map(r=>r.date)].every(date=>fmtDate(Number(monthlyYear10(date).toFixed(4)))===MON[Number(date.slice(5,7))-1]+' '+date.slice(0,4)),models:CAPABILITY7.metr.rows.every(r=>calendarDate10(Number(decimalYear7(r.date).toFixed(4)))===new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(Date.parse(r.date)))}));
  assert.ok(dates.monthly,'Monthly tooltip date labels');assert.ok(dates.models,'Model release tooltip labels');
  await p.goto(url+'#pathways');await p.locator('.st5[data-id="skills"]').click();assert.ok(p.url().endsWith('#skills'));assert.equal(await p.locator('.topic-gaps10').count(),1);
  await p.goto(url);await p.getByRole('link',{name:'Explore emerging evidence',exact:false}).click();await p.goBack();
  assert.equal(await p.locator('.nav [aria-current="page"]').innerText(),'Home','Back to hashless URL returns home');
  const summary={viewports:[1440,1000,760,390,340],themes:['light','dark'],routeChecks:routes.length*10,errors,overflows,badSvg,brokenLabels,data,dates,frontier,music,interactions:'navigation visibility, jump links, research links, back, pathway selection, disclosure chart, keyboard chart tooltip, source-bound CSV, numeric snapshots'};
  fs.writeFileSync(path.join(out,'verification.json'),JSON.stringify(summary,null,2));
  console.log(JSON.stringify(summary,null,2));
  await browser.close();
  assert.equal(errors.length,0,'Page errors');assert.equal(overflows.length,0,'Horizontal overflow');assert.equal(badSvg.length,0,'Invalid chart geometry');assert.equal(brokenLabels.length,0,'Broken accessible labels');
})().catch(e=>{console.error(e);process.exit(1)});
