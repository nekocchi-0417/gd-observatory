// Checks every page at desktop and phone widths, in light and dark: no script errors,
// no sideways scrolling, and the main interactions (map drawer, tour, cards, matrix, tooltips) work.
// Usage: npm install && npx playwright install chromium && sh build.sh && node tools/verify.js
const { chromium } = require('playwright');
const path=require('path');
const PAGE='file://'+path.resolve(__dirname,'..','docs','index.html');
const ROUTES=['map','evidence','capability','adoption','handover','work','share','skills','culture','institutions','influence','record','gaps','futures','futures/more','method','contribute','contribute/funding','why','method/more','gaps/influence','work/cohort','skills/literacy','institutions/control'];
(async()=>{const b=await chromium.launch(process.env.PW_EXE?{executablePath:process.env.PW_EXE}:{});const errs=[];const words={};
 for(const w of [1280,400,340]){for(const scheme of (w===1280?['light','dark']:['light'])){
  const ctx=await b.newContext({viewport:{width:w,height:900},colorScheme:scheme});const p=await ctx.newPage();
  p.on('pageerror',e=>errs.push(w+' PAGEERR '+e.message));p.on('console',m=>{if(m.type()==='error'&&!/Failed to load|ERR_/.test(m.text()))errs.push(w+' CONSOLE '+m.text())});
  for(const h of ROUTES){
   await p.goto(PAGE+'#'+h);await p.waitForTimeout(300);
   const o=await p.evaluate(()=>({sw:document.documentElement.scrollWidth,iw:window.innerWidth,txt:document.querySelector('#view').innerText,h:document.documentElement.scrollHeight}));
   if(o.sw>o.iw)console.log('OVERFLOW',w,scheme,h,o.sw);
   if(w===1280&&scheme==='light'){words[h]=[o.txt.split(/\s+/).length,o.h];
     const bad=(o.txt.match(/[^.\n]*\b(never|nobody|no one)\b[^.\n]*/gi)||[]);if(bad.length)console.log('ABSOLUTES',h,bad.map(x=>x.trim().slice(0,110)));}
   if(/^(capability|adoption|handover|work|share|skills|culture|institutions)$/.test(h)){
     const all=await p.$('.ic5-all');if(all)await all.click();
     const cards=await p.$$('.ic5');for(const c of cards){await c.click();await p.waitForTimeout(80)}
     const rows=await p.$$('.br5 summary');for(const r of rows){await r.click()}
     const o2=await p.evaluate(()=>document.documentElement.scrollWidth);if(o2>w)console.log('OVERFLOW after open',w,h,o2);}
  }
  if(w===1280&&scheme==='light'){
   await p.goto(PAGE+'#map');await p.waitForTimeout(300);
   for(const id of ['capability','share','skills','institutions','influence']){await p.click(`.st5[data-id="${id}"]`);await p.waitForTimeout(150);
     console.log('card',id,await p.$eval('.map5 .card5 .card5-name',e=>e.textContent).catch(()=>'NONE'),'| hash',await p.evaluate(()=>location.hash))}
   await p.click('.map5 .card5 [data-t="next"]');await p.waitForTimeout(150);console.log('next wraps to',await p.$eval('.map5 .card5 .card5-name',e=>e.textContent));
   await p.click('.map5 .card5 [data-t="open"]');await p.waitForTimeout(250);console.log('open evidence',await p.evaluate(()=>location.hash));
   await p.goto(PAGE+'#skills/literacy');await p.waitForTimeout(300);console.log('deep link card',await p.$eval('.ic5.on .ic5-lab',e=>e.textContent));
   await p.goto(PAGE+'#capability');await p.waitForTimeout(300);console.log('confidence basis',await p.$eval('.conf5 dd.w',e=>e.textContent.slice(0,60)).catch(()=>'MISSING'));
   await p.click('.cav5.draft5');await p.waitForTimeout(250);console.log('draft tip open',await p.$eval('.cav5w.open .cav5tip',e=>e.textContent.slice(0,60)).catch(()=>'NOT OPEN'));
   await p.goto(PAGE+'#gaps');await p.waitForTimeout(300);await p.click('#gg-matrix summary');await p.waitForTimeout(400);await p.click('.gm5-dot[data-id="institutions"]');await p.waitForTimeout(600);
   console.log('matrix pick opens item',await p.$$eval('.gap5-i[data-link="institutions"] .acc5-b[aria-expanded="true"]',x=>x.length),'matrix width',await p.$eval('#gm svg',e=>Math.round(e.getBoundingClientRect().width)));
   await p.click('#expAll');console.log('expand all',await p.$$eval('.acc5-b[aria-expanded="true"]',x=>x.length),await p.$eval('details.more5',d=>d.open));
   await p.goto(PAGE+'#evidence');await p.waitForTimeout(300);await p.click('#record summary');await p.waitForTimeout(500);console.log('record chart width',await p.$eval('#rec svg',e=>Math.round(e.getBoundingClientRect().width)).catch(()=>'NONE'));
   await p.goto(PAGE+'#institutions');await p.waitForTimeout(300);console.log('folded cards visible',await p.$$eval('.ic5:not([hidden])',x=>x.length),'of',await p.$$eval('.ic5',x=>x.length));
   await p.goto(PAGE+'#institutions/lobby');await p.waitForTimeout(300);console.log('deep link unfolds',await p.$$eval('.ic5:not([hidden])',x=>x.length),await p.$eval('.ic5.on .ic5-lab',e=>e.textContent));
   await p.goto(PAGE+'#futures');await p.waitForTimeout(300);await p.click('[data-route="E"]');console.log('route E',await p.$eval('#routebody h3',e=>e.textContent));
   await p.goto(PAGE+'#map');await p.waitForTimeout(300);await p.click('.gaps5-t[href="#gaps/skills"]');await p.waitForTimeout(400);console.log('gap link scrolls',await p.evaluate(()=>location.hash+' y='+Math.round(scrollY)));
   await p.goto(PAGE+'#map');await p.waitForTimeout(300);await p.click('.cta5-links a[href="#contribute/add"]');await p.waitForTimeout(400);console.log('cta scrolls',await p.evaluate(()=>location.hash+' y='+Math.round(scrollY)),await p.$eval('.nav a[aria-current]',e=>e.textContent));
   await p.goto(PAGE+'#map');await p.waitForTimeout(300);await p.click('.path5[href="#gaps"]');await p.waitForTimeout(400);console.log('funders path',await p.evaluate(()=>location.hash));
   await p.goto(PAGE+'#contribute/authors');await p.waitForTimeout(400);await p.click('#w-authors .btn[href="#method/more"]');await p.waitForTimeout(400);console.log('method/more opens details',await p.evaluate(()=>location.hash+' open='+document.querySelector('#m-more details').open+' y='+Math.round(scrollY)));
   console.log('contribute ext links',await p.$$eval('.why5 a[target=_blank]',a=>a.map(x=>x.href).filter(h=>!/^https:\/\//.test(h)).length),'non-https');
  }
  if(w===400){await p.goto(PAGE+'#map');await p.waitForTimeout(300);console.log('phone open rows',await p.$$eval('.ml5.open',x=>x.length));
   await p.click('.ml5[data-id="skills"] .ml5-btn');await p.waitForTimeout(200);console.log('phone card',await p.$eval('.ml5.open .card5-what',e=>e.textContent.slice(0,40)).catch(()=>'NONE'));
   console.log('header height',await p.$eval('.bar',e=>Math.round(e.getBoundingClientRect().height)));}
  await ctx.close();}}
 console.log('words/height',JSON.stringify(words));console.log('errors',errs);await b.close();})();
