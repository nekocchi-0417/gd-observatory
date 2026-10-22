// Playback and manual stepping share the same five scenes and nine map nodes.
let disposeHomeStory30=()=>{};
const STORY_NODES30=[['capability','AI capability',.06,.46],['adoption','AI adoption',.22,.46],['handover','Delegation to AI',.38,.46],['work','Entry-level jobs',.57,.10],['share','Workers’ share of income',.76,.10],['skills','Skills and judgement',.76,.34],['culture','Culture and information',.76,.58],['institutions','AI in government',.76,.82],['influence','Human influence',.94,.46]];
const STORY_PATHS30=[['capability','adoption'],['adoption','handover'],['handover','work'],['work','share'],['handover','skills'],['handover','culture'],['handover','institutions'],['share','influence'],['skills','influence'],['culture','influence'],['institutions','influence']];
const STORY_INTERACTIONS30=[{a:'skills',b:'work',scene:1,directed:true},{a:'culture',b:'institutions',scene:2,directed:false}];
const STORY_FOCUS30={
 1:{nodes:['handover','work','share','skills','influence'],paths:[['handover','work'],['work','share'],['handover','skills'],['share','influence'],['skills','influence']]},
 2:{nodes:['handover','culture','institutions','influence'],paths:[['handover','culture'],['handover','institutions'],['culture','influence'],['institutions','influence']]}
};
const storyPathFocused30=(scene,a,b)=>!STORY_FOCUS30[scene]||STORY_FOCUS30[scene].paths.some(([from,to])=>from===a&&to===b);
const STORY_LENSES30=[
 {name:'Economics',measures:'Job entry · wages · bargaining power',nodes:['work','share','adoption']},
 {name:'Psychology & education',measures:'Unaided skills · learning · judgement',nodes:['skills','influence']},
 {name:'Human–computer interaction',measures:'Reliance · delegation · human control',nodes:['capability','handover','skills']},
 {name:'Governance & media studies',measures:'Accountability · information · collective action',nodes:['culture','institutions','influence']}
];
const STORY_COPY30=[
 {label:'1 / 3 · The pathway',title:'A gradual shift in who can act.',text:'As AI becomes more capable and widely used, more work and decisions may be delegated to it. The consequences can spread across the economy, culture and institutions.',caption:'A proposed pathway, adapted from the GD paper with an additional branch for skills and judgement.'},
 {label:'1 / 3 · How harms could interact',title:'Less job security. Less bargaining power.',text:'Automation could reduce entry-level opportunities and the practice through which people build skills. Weaker skill formation could, in turn, make it harder to find work and maintain bargaining power.',caption:'The dashed arrow shows a possible feedback from skill formation to job opportunities. This is a hypothesis, not an established causal effect.'},
 {label:'1 / 3 · How harms could interact',title:'Harder to understand. Harder to push back.',text:'Misinformation could make it harder to understand change and organise a response. Meanwhile, opaque AI decisions in government could narrow people’s options for challenging those changes.',caption:'Information problems and opaque governance could reinforce one another. The dashed link illustrates this hypothesis, not an established causal effect.'},
 {label:'2 / 3 · The measurement challenge',title:'One connected problem. Many ways to measure it.',text:'To track these interacting harms, we need indicators and studies from different disciplines—then ask which areas they cover and whether they follow change over time.',caption:'Illustrative research lenses, not exclusive categories or assessed coverage ratings. Some measures span several areas.'},
 {label:'3 / 3 · The connected literature',title:'Bring the literature into the same picture.',text:'Shared sources reveal where these research areas may meet. Explore the Skills and judgement pilot to inspect concepts, compare papers and identify questions worth investigating.',caption:'Lines now mean shared references in the draft collection, not causal effects. Skills and judgement is the first available pilot.'}
];
const STORY_RING30=['capability','adoption','handover','skills','influence','institutions','culture','share','work'];
const STORY_MEASURE30={capability:[.08,.14],adoption:[.25,.14],handover:[.42,.14],work:[.08,.46],share:[.25,.46],skills:[.42,.46],culture:[.08,.78],institutions:[.25,.78],influence:[.42,.78]};
const STORY_HOLD31=16000,STORY_TRANSITION31=1000;
const STORY_DURATION31=STORY_COPY30.length*STORY_HOLD31+(STORY_COPY30.length-1)*STORY_TRANSITION31;
const storyIcon31=name=>`<span class="story-control-icon31" aria-hidden="true">${STORY_ICONS31[name]}</span>`;
function storyToolbar31(){return `<div class="wrap story-toolbar31" id="story-toolbar31" hidden>
<div class="story-transport31" role="group" aria-label="Overview playback"><button type="button" id="story-play31" class="story-play31" aria-label="Play overview" aria-pressed="false" title="Play overview">${storyIcon31('play')}<span class="story-button-label31">Play</span></button><button type="button" id="story-prev31" aria-label="Previous section" title="Previous section" disabled>${storyIcon31('chevron-left')}<span class="story-control-tip31" aria-hidden="true">Previous section</span></button><button type="button" id="story-next31" aria-label="Next section" title="Next section">${storyIcon31('chevron-right')}<span class="story-control-tip31" aria-hidden="true">Next section</span></button></div>
<div class="story-progress31"><input id="story-seek31" type="range" min="0" max="${STORY_DURATION31}" step="100" value="0" aria-label="Overview progress"><span class="story-time31" id="story-time31" aria-hidden="true">0:00 / 1:24</span></div>
<button type="button" id="story-mode31" class="story-mode31" title="Read all five sections">${storyIcon31('book-open')}<span>Read all</span></button><span class="story-live30" id="story-live30" role="status" aria-atomic="true"></span></div>`;}
function storyLenses30(){return `<div class="lens-list30">${STORY_LENSES30.map(l=>`<div class="lens-row30"><h3>${esc(l.name)}</h3><p>${esc(l.measures)}</p></div>`).join('')}<div class="lens-challenges30"><span>Uneven coverage</span><span>Gaps over time</span></div></div>`;}
function homeStory30(){return `<div class="home5 home28 home-story30" data-story-mode="read"><section class="wrap story-intro30"><h1 id="main-content">How could people gradually lose influence?</h1><p>Gradual disempowerment is a possible future in which growing reliance on AI reduces people’s ability to shape the economy, culture and institutions. Harms in one area could make harms in another harder to resist.</p><a class="story-source30" href="https://gradual-disempowerment.ai/" target="_blank" rel="noopener noreferrer">Read the original proposal ↗</a></section><div id="story-player31">${storyToolbar31()}
<section class="wrap story-track30" id="gd-story30" aria-label="The pathway, the measurement challenge, and the connected literature" data-beat="0"><div class="story-stage30">
<div class="story-head30"><div><p class="story-label30" id="story-label30">${STORY_COPY30[0].label}</p><h2 id="story-title30">${STORY_COPY30[0].title}</h2><p class="story-copy30" id="story-copy30">${STORY_COPY30[0].text}</p></div></div>
<div class="story-visual30" id="story-visual30"><div class="story-map30" id="story-map30" role="img" aria-label="Proposed causal pathway from AI capability, adoption and delegation through work, skills, culture and government to human influence."><svg class="story-lines30" id="story-lines30" aria-hidden="true"><defs><marker id="story-arrow30" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0 0 L5 2.5 L0 5Z"/></marker></defs><g id="story-causal30"></g><g id="story-interactions30"></g><g id="story-measures30"></g><g id="story-network30"></g></svg>${STORY_NODES30.map(([id,label,x,y])=>`<div class="story-node30" data-story-node="${id}" style="left:${x*100}%;top:${y*330}px" aria-hidden="true"><span class="story-dot30"></span><span class="story-name30">${esc(label)}</span></div>`).join('')}<div class="story-center30" id="story-center30" aria-hidden="true"><span>Shared sources</span><small>across GD areas</small></div></div><div class="story-lenses30" id="story-lenses30" aria-hidden="true">${storyLenses30()}</div></div>
<p class="story-caption30" id="story-caption30">${STORY_COPY30[0].caption}</p><div class="story-entry30" id="story-entry30" hidden><a href="skills.html" class="story-open30">Explore Skills and judgement →</a><span>A working pilot. More topic reviews are available under Research gaps.</span></div></div></section>${homeStoryStatic30()}</div></div>`;}
function installHomeStory30(){
 const track=document.getElementById('gd-story30');if(!track||!window.requestAnimationFrame||!window.matchMedia)return;
 const get=id=>document.getElementById(id),visual=get('story-visual30'),map=get('story-map30'),svg=get('story-lines30'),reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const root=track.closest('.home-story30'),player=get('story-player31'),toolbar=get('story-toolbar31'),play=get('story-play31'),previous=get('story-prev31'),next=get('story-next31'),seek=get('story-seek31'),mode=get('story-mode31');
 const staticScenes=[...root.querySelectorAll('.story-static30>section')];
 const nodeEls=Object.fromEntries([...track.querySelectorAll('[data-story-node]')].map(e=>[e.dataset.storyNode,e]));
 const path=(group,cls)=>{const e=document.createElementNS('http://www.w3.org/2000/svg','path');e.setAttribute('class',cls);get(group).append(e);return e;};
 const causal=STORY_PATHS30.map(([a,b])=>{const e=path('story-causal30','story-path30');e.setAttribute('marker-end','url(#story-arrow30)');return {a,b,e};});
 const interactions=STORY_INTERACTIONS30.map(link=>{const e=path('story-interactions30','story-interaction30');if(link.directed)e.setAttribute('marker-end','url(#story-arrow30)');return {...link,e};});
 const measures=STORY_LENSES30.flatMap((l,i)=>l.nodes.map(a=>({a,i,e:path('story-measures30','story-measure30')})));
 const network=HOME_NETWORK30.pairs.map(p=>({...p,e:path('story-network30','story-link30')}));
 let width=0,height=0,progress=0,scene=-1,raf=0,disposed=false,elapsed=0,playing=false,lastFrame=null;
 const clamp=n=>Math.max(0,Math.min(1,n)),smooth=n=>{const t=clamp(n);return t*t*(3-2*t);};
 function paint(){
  if(!width)return;const p=reduced.matches?scene:progress,measureT=smooth(p-2),ringT=smooth(p-3),points={};
  for(const [id,,x,y]of STORY_NODES30){const start=[x*width,y*height],m=STORY_MEASURE30[id],a=-Math.PI/2+STORY_RING30.indexOf(id)*Math.PI*2/9,end=[width/2+Math.cos(a)*Math.min(width*.37,365),height*.44+Math.sin(a)*height*.37];const mx=start[0]+(m[0]*width-start[0])*measureT,my=start[1]+(m[1]*height-start[1])*measureT;points[id]=[mx+(end[0]-mx)*ringT,my+(end[1]-my)*ringT];nodeEls[id].style.left=points[id][0]+'px';nodeEls[id].style.top=points[id][1]+'px';}
  const curve=(a,b,loop=false)=>{const A=points[a],B=points[b],dx=B[0]-A[0],dy=B[1]-A[1],len=Math.hypot(dx,dy)||1,r=22,sx=A[0]+dx/len*r,sy=A[1]+dy/len*r,ex=B[0]-dx/len*r,ey=B[1]-dy/len*r;if(loop==='network'){const mx=(sx+ex)/2,my=(sy+ey)/2;return `M${sx} ${sy} Q${mx+(width/2-mx)*.12} ${my+(height*.44-my)*.12} ${ex} ${ey}`;}if(loop)return `M${sx} ${sy} Q${width*.52} ${(sy+ey)/2} ${ex} ${ey}`;return `M${sx} ${sy} C${sx+dx*.45} ${sy} ${ex-dx*.45} ${ey} ${ex} ${ey}`;};
  causal.forEach(({a,b,e})=>{e.setAttribute('d',curve(a,b));const focused=storyPathFocused30(scene,a,b);e.style.opacity=(1-measureT)*(focused?1:.12);e.classList.toggle('is-focused30',!!STORY_FOCUS30[scene]&&focused);});
  interactions.forEach(({a,b,scene:beat,directed,e})=>{e.setAttribute('d',curve(a,b,!directed));e.style.opacity=scene===beat?(1-measureT)*.85:0;});
  const lensOpacity=Math.min(smooth((p-2.35)/.65),1-smooth((p-3.15)/.7));
  measures.forEach(({a,i,e})=>{const A=points[a],y=(.10+i*.215)*height;e.setAttribute('d',`M${A[0]+20} ${A[1]} C${width*.46} ${A[1]} ${width*.48} ${y} ${width*.55} ${y}`);e.style.opacity=lensOpacity*.25;});
  get('story-lenses30').style.opacity=lensOpacity;get('story-lenses30').style.visibility=lensOpacity>.01?'visible':'hidden';
  network.forEach(({a,b,count,e})=>{e.setAttribute('d',curve(a,b,'network'));e.setAttribute('stroke-width',1+Math.min(2,Math.sqrt(count)*.65));e.style.opacity=ringT*([a,b].includes('skills')?.55:.15);});
  get('story-center30').style.opacity=smooth((p-3.85)/.15);
 }
 function setScene(index){
  if(index===scene)return;
  scene=index;track.dataset.beat=String(scene);
  const c=STORY_COPY30[scene];
  get('story-label30').textContent=c.label;get('story-title30').textContent=c.title;get('story-copy30').textContent=c.text;
  for(const [id,e]of Object.entries(nodeEls))e.dataset.focus=STORY_FOCUS30[scene]?(STORY_FOCUS30[scene].nodes.includes(id)?'active':'context'):'none';
  get('story-caption30').textContent=c.caption;get('story-entry30').hidden=scene!==4;
  get('story-lenses30').setAttribute('aria-hidden',String(scene!==3));
  staticScenes.forEach((section,i)=>section.dataset.active=String(i===scene));
  get('story-live30').textContent=`Section ${scene+1} of ${STORY_COPY30.length}: ${c.title}`;
  map.setAttribute('aria-label',scene===4?'The same nine GD areas in a network of shared draft references. Skills and judgement is highlighted.':scene===3?'The same nine GD areas connect to illustrative research lenses: economics, psychology and education, human–computer interaction, governance and media studies.':scene===2?'The proposed causal pathway highlights delegation to AI, culture and information, AI in government and human influence. A dashed link shows a possible interaction between information and governance.':scene===1?'The proposed causal pathway highlights delegation to AI, entry-level jobs, skills and judgement, workers’ share of income and human influence. A dashed arrow runs from skills back to jobs.':'Proposed causal pathway from AI capability, adoption and delegation through work, skills, culture and government to human influence.');
 }
 const clock=ms=>`${Math.floor(ms/60000)}:${String(Math.floor(ms/1000)%60).padStart(2,'0')}`;
 function syncControls(){
  const label=playing?'Pause':elapsed>=STORY_DURATION31?'Replay':'Play';
  if(play.dataset.state!==label){
   play.dataset.state=label;
   play.innerHTML=storyIcon31(playing?'pause':label==='Replay'?'rotate-ccw':'play')+`<span class="story-button-label31">${label}</span>`;
   play.setAttribute('aria-label',`${label} overview`);play.title=`${label} overview`;
  }
  play.setAttribute('aria-pressed',String(playing));
  root.dataset.playing=String(playing);
  previous.disabled=scene===0;next.disabled=scene===STORY_COPY30.length-1;
  seek.value=String(Math.round(elapsed/100)*100);
  seek.setAttribute('aria-valuetext',`Section ${scene+1} of ${STORY_COPY30.length}: ${STORY_COPY30[scene].title}`);
  get('story-time31').textContent=`${clock(elapsed)} / ${clock(STORY_DURATION31)}`;
 }
 function showPosition(){
  const previousProgress=progress;
  const span=STORY_HOLD31+STORY_TRANSITION31,index=Math.min(STORY_COPY30.length-1,Math.floor(elapsed/span));
  // Hold each finding long enough to read, then move the existing nodes together.
  progress=Math.min(STORY_COPY30.length-1,index+clamp((elapsed-index*span-STORY_HOLD31)/STORY_TRANSITION31));
  setScene(Math.min(STORY_COPY30.length-1,Math.floor(progress+.5)));
  if(previousProgress!==progress)paint();syncControls();
 }
 function pause(){
  if(disposed)return;
  playing=false;lastFrame=null;
  if(raf)window.cancelAnimationFrame(raf);
  raf=0;syncControls();
 }
 function tick(time){
  raf=0;if(disposed||!playing)return;
  if(lastFrame!==null)elapsed=Math.min(STORY_DURATION31,elapsed+Math.max(0,time-lastFrame));
  lastFrame=time;showPosition();
  if(elapsed>=STORY_DURATION31)pause();
  else raf=window.requestAnimationFrame(tick);
 }
 function togglePlayback(){
  if(playing){pause();return;}
  if(elapsed>=STORY_DURATION31)elapsed=0;
  playing=true;lastFrame=null;showPosition();raf=window.requestAnimationFrame(tick);
 }
 function selectScene(index){
  pause();elapsed=Math.max(0,Math.min(STORY_COPY30.length-1,index))*(STORY_HOLD31+STORY_TRANSITION31);showPosition();
 }
 function measure(){
  if(disposed)return;
  const r=visual.getBoundingClientRect();width=r.width;height=r.height;
  if(width&&height){svg.setAttribute('viewBox',`0 0 ${width} ${height}`);paint();}
 }
 const cleanups=[];
 function listen(target,event,handler){target.addEventListener(event,handler);cleanups.push(()=>target.removeEventListener(event,handler));}
 listen(play,'click',togglePlayback);
 listen(previous,'click',()=>selectScene(scene-1));listen(next,'click',()=>selectScene(scene+1));
 listen(seek,'pointerdown',pause);listen(seek,'keydown',pause);
 listen(seek,'input',()=>{const value=Number(seek.value);pause();elapsed=Number.isFinite(value)?Math.max(0,Math.min(STORY_DURATION31,value)):0;showPosition();});
 listen(mode,'click',()=>{
  pause();const reading=root.dataset.storyMode!=='read';root.dataset.storyMode=reading?'read':'player';
  toolbar.querySelector('.story-transport31').hidden=reading;toolbar.querySelector('.story-progress31').hidden=reading;
  mode.innerHTML=storyIcon31(reading?'play':'book-open')+`<span>${reading?'Back to overview':'Read all'}</span>`;
  mode.title=reading?'Back to overview':'Read all five sections';measure();
 });
 listen(document,'visibilitychange',()=>{if(document.hidden)pause();});
 listen(player,'keydown',event=>{if(event.key==='Escape'){pause();event.preventDefault();}});
 listen(window,'beforeprint',pause);
 listen(reduced,'change',()=>{pause();measure();});
 const observer=window.ResizeObserver?new window.ResizeObserver(measure):null;
 if(observer)observer.observe(visual);else listen(window,'resize',measure);
 const visibility=window.IntersectionObserver?new window.IntersectionObserver(entries=>{if(entries.some(entry=>!entry.isIntersecting))pause();}):null;
 if(visibility)visibility.observe(player);
 root.dataset.storyMode='player';toolbar.hidden=false;showPosition();measure();
 disposeHomeStory30=()=>{
  pause();disposed=true;observer?.disconnect();visibility?.disconnect();cleanups.forEach(cleanup=>cleanup());disposeHomeStory30=()=>{};
 };
}
function homeStoryStatic30(){
 function diagram(scene){const network=scene===4,measurement=scene===3,points={},causal={capability:[55,30],adoption:[200,30],handover:[345,30],work:[55,140],share:[55,255],skills:[200,140],culture:[345,255],institutions:[200,255],influence:[200,365]};
 for(const [id]of STORY_NODES30){const a=-Math.PI/2+STORY_RING30.indexOf(id)*Math.PI*2/9,m=STORY_MEASURE30[id];points[id]=network?[200+145*Math.cos(a),185+145*Math.sin(a)]:measurement?[40+(m[0]-.08)*940,m[1]*260+20]:causal[id];}
 const edges=network?HOME_NETWORK30.pairs.map(p=>[p.a,p.b]):measurement?[]:STORY_PATHS30;
 const paths=edges.map(([a,b])=>{const A=points[a],B=points[b];let d=`M${A[0]} ${A[1]} L${B[0]} ${B[1]}`;if(!network&&a==='skills'&&b==='influence')d=`M${A[0]} ${A[1]} C300 170 300 320 ${B[0]} ${B[1]}`;return `<path d="${d}" class="${network?'story-link30':'story-path30'+(STORY_FOCUS30[scene]&&storyPathFocused30(scene,a,b)?' is-focused30':'')}" ${network?'opacity=".25"':`opacity="${storyPathFocused30(scene,a,b)?1:.12}" marker-end="url(#static-arrow30-${scene})"`}/>`;}).join('');
 const cross=STORY_INTERACTIONS30.filter(link=>link.scene===scene).map(({a,b,directed})=>`<path d="M${points[a].join(' ')} Q${directed?'130 90':'300 200'} ${points[b].join(' ')}" class="story-interaction30" ${directed?`marker-end="url(#static-arrow30-${scene})"`:''}/>`).join('');
 const nodes=STORY_NODES30.map(([id,label])=>{const [x,y]=points[id],words=label.split(' '),cut=words.length>2?Math.ceil(words.length/2):0,lines=cut?[words.slice(0,cut).join(' '),words.slice(cut).join(' ')]:[label],muted=network?id!=='skills':STORY_FOCUS30[scene]?!STORY_FOCUS30[scene].nodes.includes(id):false;return `<g class="${muted?'static-context30':''}"><circle cx="${x}" cy="${y}" r="12" class="static-node30 ${muted?'muted':''}"/>${lines.map((line,i)=>`<text x="${x}" y="${y+24+i*14}" text-anchor="middle">${esc(line)}</text>`).join('')}</g>`;}).join('');
 return `<svg viewBox="0 0 400 ${network?390:measurement?280:420}" role="img" aria-label="${esc(STORY_COPY30[scene].caption)}"><defs><marker id="static-arrow30-${scene}" markerWidth="6" markerHeight="6" refX="18" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z"/></marker></defs>${paths}${cross}${nodes}</svg>`;
 }
 return `<div class="story-static30 wrap">${STORY_COPY30.map((c,i)=>`<section data-beat="${i}"><p class="story-label30">${c.label}</p><h2>${c.title}</h2><p class="story-copy30">${c.text}</p>${diagram(i)}${i===3?storyLenses30():''}<p class="story-caption30">${c.caption}</p>${i===4?'<div class="story-entry30"><a href="skills.html" class="story-open30">Explore Skills and judgement →</a><span>A working pilot. More topic reviews are available under Research gaps.</span></div>':''}</section>`).join('')}</div>`;
}
