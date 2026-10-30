const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),{parseHTML}=require('linkedom');
const html=fs.readFileSync(process.argv[2]||'dist/reorganized-dashboard/index.html','utf8');
const scripts=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
for(const [viewportWidth,viewportHeight] of [[1440,800],[1440,900],[1920,1254],[1920,1600],[1280,720],[390,844],[320,568],[760,800],[761,800],[980,494],[844,390]]){
 const reduce=false;
 const compact=()=>window.innerWidth<=760;
 const offset=()=>window.innerWidth<=760||window.innerHeight<=600?8:82;
 const {document,Element,Event}=parseHTML(html),callbacks=[],events={};
 Element.prototype.scrollIntoView=function(){this.scrolled=true;};
 const trackHeight=()=>parseFloat(document.querySelector('#gd-story30')?.style.height)||1640;
 const maxScroll=()=>Math.max(0,350+trackHeight()+83-window.innerHeight);
 const window={innerWidth:viewportWidth,innerHeight:viewportHeight,scrollY:0,ResizeObserver:class{observe(){}disconnect(){this.disconnected=true;}},matchMedia:query=>({get matches(){return reduce;},addEventListener(){},removeEventListener(){}}),requestAnimationFrame:f=>{callbacks.push(f);return callbacks.length;},cancelAnimationFrame(){},addEventListener:(n,f)=>(events[n]||=new Set()).add(f),removeEventListener:(n,f)=>events[n]?.delete(f),scrollTo(x,y){this.scrollY=Math.max(0,Math.min(maxScroll(),typeof x==='object'?x.top:y));events.scroll?.forEach(f=>f());}};
 Element.prototype.getBoundingClientRect=function(){if(this.id==='gd-story30')return {top:350-window.scrollY,width:1000,height:trackHeight()};if(this.id==='story-visual30')return {left:24,top:200,width:window.innerWidth-48,height:330};if(this.hasAttribute('data-story-lens')){const i=Number(this.dataset.storyLens);return {left:24+(window.innerWidth-48)*.56,top:200+i*(compact()?82.5:70),height:compact()?82.5:70,width:150};}if(this.classList.contains('bar'))return {height:70};return {height:600,width:1000,top:0};};
 const context=vm.createContext({window,document,location:{hash:'#home'},console,Date,Intl,sessionStorage:{getItem(){return null;},setItem(){}},requestAnimationFrame:f=>callbacks.push(f)});
 const run=s=>vm.runInContext(s,context),flush=()=>{let n=0;while(callbacks.length){assert(++n<100,'Render loop');callbacks.shift()();}};
 scripts.forEach(run);flush();const nodes=[...document.querySelectorAll('[data-story-node]')];assert.equal(nodes.length,9);
 assert.equal(document.querySelector('#story-next30'),null,'Homepage navigation is scroll-only');
 // Browsers clamp scrolling at the document bottom; an unconstrained mock hid this regression.
 const assertEnding=()=>{
  window.scrollTo({top:maxScroll()});flush();
  assert.equal(document.querySelector('#gd-story30').dataset.beat,'4',`Final chapter is reachable at ${window.innerHeight}px viewport height`);
  assert.equal(document.querySelector('#story-entry30').hidden,false);
  assert.equal(Number(document.querySelector('#story-center30').style.opacity),1,'The network transition finishes before the page ends');
 };
 assertEnding();
 window.scrollTo({top:350-offset()+760*2.6});flush();
 assert.equal(document.querySelector('#gd-story30').dataset.beat,'2','The complete scene stays still through most of each scroll step');
 assert.equal(document.querySelector('.story-flow30'),null,'Narrative and diagram share one pinned stage');
 for(let i=1;i<=4;i++){window.scrollTo({top:350-offset()+760*i});flush();assert.equal(document.querySelector('#gd-story30').dataset.beat,String(i));assert(nodes.every(n=>document.contains(n)),'Node elements must persist across chapters');assert.equal(document.querySelector('#story-entry30').hidden,i!==4);for(const p of document.querySelectorAll('#story-lines30 path'))assert(!/NaN|undefined/.test(p.getAttribute('d')||''));if(i===3)assert.equal(document.querySelector('#story-lenses30').getAttribute('aria-hidden'),'false');}
 // Desktop stays horizontal even in short laptop/preview windows.
 window.scrollTo({top:350-offset()});flush();
 if(!compact()){
  const positions=['capability','adoption','handover','influence'].map(id=>document.querySelector(`[data-story-node="${id}"]`).style);
  assert.equal(new Set(positions.map(p=>p.top)).size,1,'Desktop pathway keeps its left-to-right baseline');
  assert(positions.every((p,i)=>!i||parseFloat(p.left)>parseFloat(positions[i-1].left)));
 }
 // Actual label bounds, not desktop-only percentages, determine every connector endpoint.
 window.scrollTo({top:350-offset()+760*3});flush();
 assert.equal(document.querySelector('#gd-story30').dataset.compact,String(compact()));
 if(!compact())assert(new Set(nodes.map(e=>e.style.left)).size>1,'Desktop measurement nodes retain the horizontal grid');
 assert.equal(document.querySelectorAll('#story-lenses30 button,#story-lenses30 [tabindex],#story-lenses30 [aria-pressed]').length,0,'The discipline explanation requires no clicks');
 const allLinks=[...document.querySelectorAll('#story-measures30 path')];
 assert.equal(allLinks.filter(e=>Number(e.style.opacity)>.3).length,11,'All four disciplines and all eleven connections appear together');
 for(const [lens,expected]of [[0,['work','share','adoption']],[1,['skills','influence']],[2,['capability','handover','skills']],[3,['culture','institutions','influence']]]){
  const row=document.querySelector(`#story-lenses30 [data-story-lens="${lens}"]`),links=allLinks.filter(e=>e.dataset.lens===String(lens));
  assert.deepEqual(links.map(e=>e.dataset.node).sort(),expected.sort());
  const bounds=row.getBoundingClientRect(),view=document.querySelector('#story-visual30').getBoundingClientRect();
  for(const e of links){
   const coords=e.getAttribute('d').match(/-?\d+(?:\.\d+)?/g).map(Number);
   assert(Math.abs(coords.at(-2)-(bounds.left-view.left))<.001,'Link ends at its discipline label');
   assert(Math.abs(coords.at(-1)-(bounds.top-view.top+bounds.height/2))<.001,'Link follows the current row height');
  }
 }
 // Each focused chapter must emphasize only its intended branches; scrolling back restores context.
 for(const [beat,activeNodes,activeEdges]of [[1,['handover','work','share','skills','influence'],5],[2,['handover','culture','institutions','influence'],4],[0,[],0]]){
  window.scrollTo({top:350-offset()+760*beat});flush();
  assert.deepEqual([...document.querySelectorAll('[data-focus="active"]')].map(n=>n.dataset.storyNode).sort(),activeNodes.sort());
  assert.equal(document.querySelectorAll('#story-causal30 .is-focused30').length,activeEdges);
  const interactionPaths=[...document.querySelectorAll('#story-interactions30 path')];
  assert.equal(interactionPaths.filter(p=>Number(p.style.opacity)>0).length,beat===0?0:1);
  if(beat===1)assert(interactionPaths[0].hasAttribute('marker-end'),'Skills-to-jobs feedback must have a direction');
 }
 window.innerHeight=viewportHeight+500;window.innerWidth=1440;events.resize?.forEach(f=>f());flush();assertEnding();
 assert.equal(events.scroll.size,1);assert.equal(events.resize.size,1);run("location.hash='#method';render28()");flush();assert.equal(events.scroll.size,0,'Leaving home removes the scroll listener');assert.equal(events.resize.size,0,'Leaving home removes the resize listener');
}
console.log('Homepage continuity: five beats, clamped end-of-page scrolling at eleven screen sizes, orientation/layout changes, persistent nodes, entry timing, all discipline connections and connector anchors, finite geometry and cleanup passed.');
