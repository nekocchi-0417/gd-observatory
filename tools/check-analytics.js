const fs = require('node:fs'), vm = require('node:vm'), assert = require('node:assert/strict');
const {parseHTML} = require('linkedom');
const source = fs.readFileSync('prototypes/reorganized/analytics.js','utf8');
const config = {enabled:true,endpoint:'https://test-account.goatcounter.com/count',siteOrigin:'https://nekocchi-0417.github.io',basePath:'/gd-observatory/'};
function harness({url='https://nekocchi-0417.github.io/gd-observatory/#home',enabled=true,navigator={}}={}) {
  const {document,Element,Event}=parseHTML('<html><head></head><body><section id="gd-story30" data-beat="0"><div id="story-visual30"></div></section><a class="story-open30" href="skills.html">Explorer</a><a class="source" href="https://example.org/private?secret=do-not-send">Private title</a><button data-paper="private-id">Private paper</button><textarea>Private notes</textarea></body></html>');
  const location = new URL(url), listeners = {}, frames = [], intervals = [], sent = [];
  let now=0;
  document.hidden=false;
  Object.defineProperty(document.documentElement,'scrollHeight',{value:2000,configurable:true});
  Element.prototype.getClientRects=function(){return [{}];};
  Element.prototype.getBoundingClientRect=function(){return {top:100,bottom:400,height:300};};
  const window={navigator,innerHeight:800,scrollY:0,requestAnimationFrame:f=>(frames.push(f),frames.length),setInterval:f=>intervals.push(f),addEventListener:(n,f)=>(listeners[n]||=[]).push(f)};
  vm.runInNewContext(`(${source})(config)`,{config:{...config,enabled},window,document,location,URL,URLSearchParams,Date:{now:()=>now},Set});
  const flush=()=>{let i=0;while(frames.length){assert(++i<100);frames.shift()();}};
  const emit=name=>(listeners[name]||[]).forEach(f=>f());
  const load=()=>{window.goatcounter.count=p=>sent.push(JSON.parse(JSON.stringify(p)));document.querySelector('script').onload();};
  const tick=(ms=1000)=>{now+=ms;intervals.forEach(f=>f());};
  const click=selector=>document.querySelector(selector).dispatchEvent(new Event('click',{bubbles:true}));
  return {document,window,location,listeners,sent,flush,emit,load,tick,click};
}
for (const options of [{enabled:false},{url:'http://localhost:8765/#home'},{url:'https://nekocchi-0417.github.io/portfolio/'},{navigator:{doNotTrack:'1'}},{navigator:{doNotTrack:'yes'}},{navigator:{globalPrivacyControl:true}}]) {
 const h=harness(options);assert.equal(h.document.querySelectorAll('script').length,0,'Disabled/private/local visits must not load the provider');assert.equal(Object.keys(h.listeners).length,0);
}
const h=harness();h.flush();h.load();
assert.equal(h.sent.filter(e=>!e.event).length,1,'One initial view after delayed provider load');
assert.equal(h.sent[0].path,'/home');
h.emit('hashchange');h.flush();assert.equal(h.sent.filter(e=>!e.event).length,1);
h.location.hash='#main-content';h.emit('hashchange');h.flush();assert.equal(h.sent.filter(e=>!e.event).length,1,'Skip links are not page views');
h.location.hash='#gaps';h.emit('hashchange');h.flush();assert.equal(h.sent.at(-1).path,'/gaps');
h.location.hash='#gaps/method';h.emit('hashchange');h.flush();assert.equal(h.sent.at(-1).path,'/gaps/method');
h.location.hash='#method/selection';h.emit('hashchange');h.flush();assert.equal(h.sent.at(-1).path,'/gaps/method');assert.equal(h.sent.filter(e=>!e.event).length,3);
h.location.hash='#home';h.emit('hashchange');h.flush();
h.window.scrollY=600;h.emit('scroll');h.flush();h.emit('scroll');h.flush();
assert.equal(h.sent.filter(e=>e.path==='scroll_50:home').length,1);
assert.equal(h.sent.filter(e=>e.path==='scroll_75:home').length,0);
h.document.querySelector('#gd-story30').dataset.beat='4';h.emit('scroll');h.flush();
assert.equal(h.sent.filter(e=>e.path==='story_step_5:home').length,1);
h.click('.story-open30');h.click('.story-open30');assert.equal(h.sent.filter(e=>e.path==='story_explorer_open:home').length,1);
h.click('.source');h.click('[data-paper]');h.click('textarea');
assert(h.sent.some(e=>e.path==='source_open:home'));assert(h.sent.some(e=>e.path==='inspect_paper:home'));
assert(!JSON.stringify(h.sent).includes('Private'));assert(!JSON.stringify(h.sent).includes('secret'));assert(!JSON.stringify(h.sent).includes('private-id'));
assert(h.sent.every(e=>e.referrer===''));
for(let i=0;i<20;i++)h.tick();h.document.hidden=true;h.document.dispatchEvent(new (require('linkedom').Event)('visibilitychange'));for(let i=0;i<60;i++)h.tick();
assert(!h.sent.some(e=>e.path==='engaged_30_seconds:home'),'Background time does not count');
h.document.hidden=false;h.document.dispatchEvent(new (require('linkedom').Event)('visibilitychange'));for(let i=0;i<10;i++)h.tick();
assert.equal(h.sent.filter(e=>e.path==='engaged_30_seconds:home').length,1);
for(const [suffix,expected] of [['skills.html?q=private-query&paper=private-id','/explorer'],['topics/library.html?topic=handover&q=private-query','/library/handover'],['topics/index.html?topic=INVALID','/topic/skills'],['topics/evidence.html','/evidence']]){
 const page=harness({url:config.siteOrigin+config.basePath+suffix});page.flush();page.load();assert.equal(page.sent[0].path,expected);assert(!JSON.stringify(page.sent).includes('private'));
}
for(const route of ['explorer','evidence','gaps/skills','skills','library/skills']){
 const redirect=harness({url:config.siteOrigin+config.basePath+'#'+route});redirect.flush();redirect.load();assert.equal(redirect.sent.length,0,'Redirect routes count at the destination');
}
const blocked=harness();blocked.document.querySelector('script').onerror();blocked.emit('scroll');blocked.flush();assert.equal(blocked.sent.length,0);
for(const file of ['index.html','skills.html','topics/index.html','topics/library.html','topics/topics.html','topics/evidence.html']){
 const html=fs.readFileSync('docs/'+file,'utf8');assert.equal(parseHTML(html).document.querySelectorAll('script[data-gd-analytics]').length,1,file);
}
console.log('PASS: analytics production/privacy gates, delayed loading, routes, redirect deduplication, sanitized payloads, once-per-visit events, visible engagement time, blocked provider and six-page build integration. No network requests sent.');
