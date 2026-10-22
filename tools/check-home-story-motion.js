const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),{parseHTML}=require('linkedom');
const html=fs.readFileSync(process.argv[2]||'dist/reorganized-dashboard/index.html','utf8');
const scripts=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
for(const reduce of [false,true]){
 const {document,Element,Event}=parseHTML(html),callbacks=[],events={};
 const window={scrollY:0,ResizeObserver:class{observe(){}disconnect(){this.disconnected=true;}},matchMedia:()=>({matches:reduce,addEventListener(){},removeEventListener(){}}),requestAnimationFrame:f=>{callbacks.push(f);return callbacks.length;},cancelAnimationFrame(){},addEventListener:(n,f)=>(events[n]||=new Set()).add(f),removeEventListener:(n,f)=>events[n]?.delete(f),scrollTo(x,y){this.scrollY=typeof x==='object'?x.top:y;events.scroll?.forEach(f=>f());}};
 Element.prototype.getBoundingClientRect=function(){if(this.id==='gd-story30')return {top:350-window.scrollY,width:1000,height:3200};if(this.id==='story-visual30')return {width:1000,height:330};if(this.classList.contains('bar'))return {height:70};return {height:600,width:1000,top:0};};
 const context=vm.createContext({window,document,location:{hash:'#home'},console,Date,Intl,localStorage:{getItem(){return null;},setItem(){}},requestAnimationFrame:f=>callbacks.push(f)});
 const run=s=>vm.runInContext(s,context),flush=()=>{let n=0;while(callbacks.length){assert(++n<100,'Render loop');callbacks.shift()();}};
 scripts.forEach(run);flush();const nodes=[...document.querySelectorAll('[data-story-node]')];assert.equal(nodes.length,9);
 for(let i=1;i<=4;i++){document.querySelector('#story-next30').dispatchEvent(new Event('click'));flush();assert.equal(document.querySelector('#gd-story30').dataset.beat,String(i));assert(nodes.every(n=>document.contains(n)),'Node elements must persist across chapters');assert.equal(document.querySelector('#story-entry30').hidden,i!==4);for(const p of document.querySelectorAll('#story-lines30 path'))assert(!/NaN|undefined/.test(p.getAttribute('d')||''));if(i===3)assert.equal(document.querySelector('#story-lenses30').getAttribute('aria-hidden'),'false');}
 assert.equal(events.scroll.size,1);run("location.hash='#method';render28()");flush();assert.equal(events.scroll.size,0,'Leaving home removes the scroll listener');
}
console.log('Homepage continuity: five narrative beats across three chapters, persistent nodes, entry timing, reduced motion, finite geometry and cleanup passed.');
