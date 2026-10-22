const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),{parseHTML}=require('linkedom');
const html=fs.readFileSync(process.argv[2]||'dist/reorganized-dashboard/index.html','utf8');
const scripts=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]);

function harness(reduce=false,compact=false){
 const {document,Element,Event}=parseHTML(html),frames=new Map(),events={},resizers=[],visibility=[];
 let now=0,frameId=0,width=compact?0:1000,scrolls=0;
 const motionEvents=new Set();
 const motion={matches:reduce,addEventListener:(_,fn)=>motionEvents.add(fn),removeEventListener:(_,fn)=>motionEvents.delete(fn)};
 const window={
  ResizeObserver:class{constructor(fn){this.fn=fn;resizers.push(this);}observe(){}disconnect(){this.disconnected=true;}},
  IntersectionObserver:class{constructor(fn){this.fn=fn;visibility.push(this);}observe(){}disconnect(){this.disconnected=true;}},
  matchMedia:()=>motion,
  requestAnimationFrame(fn){frames.set(++frameId,fn);return frameId;},cancelAnimationFrame:id=>frames.delete(id),
  addEventListener:(name,fn)=>(events[name]||=new Set()).add(fn),removeEventListener:(name,fn)=>events[name]?.delete(fn),
  scrollTo(){scrolls++;}
 };
 Element.prototype.getBoundingClientRect=function(){return {width:this.id==='story-visual30'?width:1000,height:330,top:0};};
 const context=vm.createContext({window,document,location:{hash:'#home'},console,Date,Intl,sessionStorage:{getItem(){return null;},setItem(){}},requestAnimationFrame:window.requestAnimationFrame});
 const run=script=>vm.runInContext(script,context);
 scripts.forEach(run);
 const click=id=>document.getElementById(id).dispatchEvent(new Event('click',{bubbles:true}));
 function advance(ms){now+=ms;for(const [id,fn]of [...frames]){frames.delete(id);fn(now);}}
 function seek(ms){const slider=document.getElementById('story-seek31');slider.value=String(ms);slider.dispatchEvent(new Event('input',{bubbles:true}));}
 return {document,Event,run,click,advance,seek,frames,events,resizers,visibility,motion,motionEvents,
  resize(value){width=value;resizers.filter(o=>!o.disconnected).forEach(o=>o.fn());},
  get scrolls(){return scrolls;}
 };
}
for(const [reduce,compact]of [[false,false],[false,true],[true,false]]){
 const h=harness(reduce,compact),get=id=>h.document.getElementById(id),root=h.document.querySelector('.home-story30');
 const nodes=[...h.document.querySelectorAll('[data-story-node]')],initialScrolls=h.scrolls;
 const scene=()=>Number(get('gd-story30').dataset.beat);
 const position=()=>Number(get('story-seek31').value);
 const activeStatic=()=>[...h.document.querySelectorAll('.story-static30>section')].filter(section=>section.dataset.active==='true');
 const paused=()=>get('story-play31').getAttribute('aria-pressed')==='false';
 assert.equal(nodes.length,9);assert.equal(root.dataset.storyMode,'player');assert.equal(get('story-toolbar31').hidden,false);
 assert(paused());assert.equal(h.frames.size,0,'Never autoplay on arrival');assert.equal(scene(),0);assert(get('story-prev31').disabled);
 const ids=[...h.document.querySelectorAll('[id]')].map(el=>el.id);assert.equal(ids.length,new Set(ids).size);

 h.click('story-play31');h.advance(0);h.advance(8000);assert(!paused());assert.equal(scene(),0);assert.equal(position(),8000);
 h.click('story-play31');const held=position();h.advance(20000);assert.equal(position(),held);assert.equal(h.frames.size,0);
 h.click('story-play31');h.advance(0);h.advance(9000);assert.equal(scene(),1,'Resume from the paused time');
 h.click('story-play31');

 for(let i=2;i<=4;i++){
  h.click('story-next31');assert.equal(scene(),i);assert(paused());assert.equal(activeStatic().length,1);
  assert.equal(Number(activeStatic()[0].dataset.beat),i);assert(nodes.every(n=>h.document.contains(n)));
  assert.equal(get('story-entry30').hidden,i!==4);
  if(!compact)for(const path of h.document.querySelectorAll('#story-lines30 path'))assert(!/NaN|undefined/.test(path.getAttribute('d')||''));
 }
 assert(get('story-next31').disabled);
 h.click('story-prev31');assert.equal(scene(),3);assert.equal(get('story-lenses30').getAttribute('aria-hidden'),'false');
 const heldBeforeResize=position();h.resize(800);assert.equal(position(),heldBeforeResize);assert.equal(scene(),3);

 for(const [beat,activeNodes,activeEdges]of [[1,['handover','work','share','skills','influence'],5],[2,['handover','culture','institutions','influence'],4],[0,[],0]]){
  h.seek(beat*17000);assert.equal(scene(),beat);assert(paused());
  assert.deepEqual([...h.document.querySelectorAll('[data-focus="active"]')].map(n=>n.dataset.storyNode).sort(),activeNodes.sort());
  assert.equal(h.document.querySelectorAll('#story-causal30 .is-focused30').length,activeEdges);
  const interactions=[...h.document.querySelectorAll('#story-interactions30 path')];
  assert.equal(interactions.filter(path=>Number(path.style.opacity)>0).length,beat===0?0:1);
  if(beat===1)assert(interactions[0].hasAttribute('marker-end'));
 }
 if(reduce){h.seek(50500);assert.equal(scene(),3);assert.equal(h.document.querySelector('[data-story-node="capability"]').style.left,'64px','Reduced motion jumps directly to the chapter layout');}
 h.seek(84000);assert(paused());assert.equal(get('story-play31').textContent.trim(),'Replay');assert.equal(scene(),4);
 h.click('story-play31');assert.equal(scene(),0);h.advance(0);
 for(let i=1;i<=4;i++){h.advance(17000);assert.equal(scene(),i);}
 h.advance(16000);assert.equal(position(),84000);assert(paused());assert.equal(h.frames.size,0,'Playback stops at the end');

 h.seek(34000);h.click('story-play31');h.advance(0);h.click('story-mode31');
 assert.equal(root.dataset.storyMode,'read');assert(paused());assert(h.document.querySelector('.story-transport31').hidden);
 assert.equal(h.document.querySelectorAll('.story-static30>section').length,5,'Read all retains every chapter');
 h.click('story-mode31');assert.equal(root.dataset.storyMode,'player');assert.equal(scene(),2);assert(paused());
 assert.equal(h.document.querySelector('.story-transport31').hidden,false);

 h.click('story-play31');h.advance(0);Object.defineProperty(h.document,'hidden',{configurable:true,value:true});
 h.document.dispatchEvent(new h.Event('visibilitychange'));assert(paused());assert.equal(h.frames.size,0);
 Object.defineProperty(h.document,'hidden',{configurable:true,value:false});h.document.dispatchEvent(new h.Event('visibilitychange'));assert(paused(),'Returning to the tab never resumes without consent');
 h.click('story-play31');h.visibility[0].fn([{isIntersecting:false}]);assert(paused(),'Leaving the player viewport pauses playback');
 h.click('story-play31');h.motion.matches=!reduce;h.motionEvents.forEach(fn=>fn());assert(paused(),'A motion preference change pauses playback');
 h.click('story-play31');const escape=new h.Event('keydown',{bubbles:true,cancelable:true});escape.key='Escape';get('story-play31').dispatchEvent(escape);assert(paused());
 h.click('story-play31');h.events.beforeprint.forEach(fn=>fn());assert(paused());
 assert.equal(h.scrolls,initialScrolls,'Playback, seeking and mode changes must not move the page');

 h.click('story-play31');h.run("location.hash='#method';render28()");
 assert.equal(h.frames.size,0);assert(h.resizers.every(o=>o.disconnected));assert(h.visibility.every(o=>o.disconnected));
 assert.equal(h.events.beforeprint.size,0);assert.equal(h.motionEvents.size,0);
 h.visibility[0].fn([{isIntersecting:false}]);
 h.advance(90000);assert(h.document.querySelector('.method22'),'A disposed player must not change another page');
}
console.log('PASS: play/pause/resume/replay, previous/next, scrubbing, five scenes, read-all mode, compact and reduced-motion views, resize continuity, tab/viewport pauses and cleanup. No forced scrolling. DOM/timing checks only.');
