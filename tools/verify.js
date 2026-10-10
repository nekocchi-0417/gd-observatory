// Checks every page at desktop and phone widths, in light and dark: no script errors,
// no sideways scrolling, and the main interactions (map drawer, tour, cards, matrix, tooltips) work.
// Usage: npm install && npx playwright install chromium && sh build.sh && node tools/verify.js
const { chromium } = require('playwright');
const path=require('path');
const PAGE='file://'+path.resolve(__dirname,'..','docs','index.html');
const ROUTES=['map','evidence','capability','adoption','handover','work','share','skills','culture','institutions','influence','record','gaps','futures','futures/more','method','work/cohort','skills/literacy','institutions/control'];
(async()=>{const b=await chromium.launch();const errs=[];const words={};
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
     const cards=await p.$$('.ic5');for(const c of cards){await c.click();await p.waitForTimeout(80)}
     const rows=await p.$$('.in5-row');for(const r of rows){await r.click()}
     const o2=await p.evaluate(()=>document.documentElement.scrollWidth);if(o2>w)console.log('OVERFLOW after open',w,h,o2);}
  }
  if(w===1280&&scheme==='light'){
   await p.goto(PAGE+'#map');await p.waitForTimeout(300);
   for(const id of ['capability','share','skills','institutions','influence']){await p.focus(`.sh5[data-why="${id}"]`);await p.keyboard.press('Enter');await p.waitForTimeout(260);
     console.log('drawer',id,await p.$eval('#mdrawer5 h3',e=>e.textContent.replace(/\s+/g,' ')).catch(()=>'NONE'));await p.keyboard.press('Escape');await p.waitForTimeout(220)}
   await p.click('.st5[data-id="skills"]');await p.waitForTimeout(250);console.log('stop nav',await p.evaluate(()=>location.hash));
   await p.goto(PAGE+'#skills/literacy');await p.waitForTimeout(300);console.log('deep link card',await p.$eval('.ic5.on .ic5-lab',e=>e.textContent));
   await p.goto(PAGE+'#capability');await p.waitForTimeout(300);await p.click('.cav5.why5');await p.waitForTimeout(250);
   console.log('why tip open',await p.$eval('.cav5w.open .cav5tip',e=>e.textContent.slice(0,60)).catch(()=>'NOT OPEN'));
   await p.click('.cav5.draft5');await p.waitForTimeout(250);console.log('draft tip open',await p.$eval('.cav5w.open .cav5tip',e=>e.textContent.slice(0,60)).catch(()=>'NOT OPEN'));
   await p.goto(PAGE+'#gaps');await p.waitForTimeout(300);await p.click('.gm5-dot[data-id="institutions"]');await p.waitForTimeout(500);
   console.log('matrix pick opens group',await p.$$eval('#gg-institutions .acc5-b[aria-expanded="true"]',x=>x.length));
   await p.click('#expAll');console.log('expand all',await p.$$eval('.acc5-b[aria-expanded="true"]',x=>x.length),await p.$eval('details.more5',d=>d.open));
   await p.goto(PAGE+'#futures');await p.waitForTimeout(300);await p.click('[data-route="E"]');console.log('route E',await p.$eval('#routebody h3',e=>e.textContent));
  }
  if(w===400){await p.goto(PAGE+'#map');await p.waitForTimeout(300);const wb=await p.$$('.ml5-why');console.log('phone why buttons',wb.length);await wb[0].click();await p.waitForTimeout(300);
   console.log('phone drawer',await p.$eval('.ml5 #mdrawer5 h3',e=>e.textContent.replace(/\s+/g,' ')).catch(()=>'NONE'));
   console.log('header height',await p.$eval('.bar',e=>Math.round(e.getBoundingClientRect().height)));}
  await ctx.close();}}
 console.log('words/height',JSON.stringify(words));console.log('errors',errs);await b.close();})();
