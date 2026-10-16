/* ---------- app: helpers, router, measurement record, shared charts ---------- */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const sig=l=>`<span class="sig" data-l="${l}" aria-hidden="true"><i></i><i></i><i></i><i></i></span>`;
const LEVELWORD=['No direct measure','One-offs or paperwork','Measured, not tied to AI','Measured, with limits','Well measured'];
const LEVELDEF=['No direct measure','One-off studies, or counts of paperwork','Repeated; cannot be tied to AI','Repeated; company data, or cause disputed','Repeated, direct, independent'];
const NIND=LINKS.reduce((a,l)=>a+l.inds.length,0);
const lv=id=>id==='influence'?0:linkById(id).level;
const ORDER=[...LINKS.map(l=>l.id),'influence'];
const nameOf=id=>id==='influence'?END.name:linkById(id).name;
const DRAFT='Draft v0.8',ASOF='14 October 2026';

/* ----- the chain map ----- */
const GEO={W:1200,H:700,EDGE:1030,J:[492,350],S:{capability:[95,350],adoption:[255,350],handover:[415,350],work:[770,140],share:[950,140],skills:[950,280],culture:[950,420],institutions:[950,560],influence:[1128,350]}};
const SEGS=[
 {to:'capability',p:[[22,350],[95,350]]},{to:'adoption',p:[[95,350],[255,350]]},{to:'handover',p:[[255,350],[415,350]]},
 {to:'skills',p:[[492,350],[562,280],[950,280]]},{to:'institutions',p:[[492,350],[492,520],[532,560],[950,560]]},
 {to:'culture',p:[[492,350],[562,420],[950,420]]},
 {to:'work',p:[[492,350],[492,180],[532,140],[770,140]]},{to:'share',p:[[770,140],[950,140]]},
 {to:'handover',stub:1,p:[[415,350],[492,350]]},
 {to:'influence',from:'share',p:[[950,140],[1030,140],[1072,350]]},{to:'influence',from:'skills',p:[[950,280],[1030,280],[1072,350]]},
 {to:'influence',from:'culture',p:[[950,420],[1030,420],[1072,350]]},{to:'influence',from:'institutions',p:[[950,560],[1030,560],[1072,350]]},
 {to:'influence',from:'_',p:[[1072,350],[1106,350]]}];
const segPath=s=>'M'+s.p.map(p=>p.join(' ')).join(' L');
function strokeFor(l,d,o={}){ // d = path data; returns one or two paths
  const a=`d="${d}" fill="none" stroke-linecap="round" stroke-linejoin="round"`,k=o.k||1;
  if(l===4)return `<path ${a} stroke="var(--ev4)" stroke-width="${o.w4||11}"/>`;
  if(l===3)return `<path ${a} stroke="var(--ev3)" stroke-width="${o.w3||6}"/>`;
  if(l===2)return `<path ${a} stroke="var(--ev2)" stroke-width="${o.w3||6}"/><path ${a} stroke="${o.bg||'var(--map-bg)'}" stroke-width="${(o.w3||6)-3.4*k}"/>`;
  if(l===1)return `<path ${a} stroke="var(--ev1)" stroke-width="${5*k}" stroke-dasharray="0.01 ${11*k}"/>`;
  return `<path ${a} stroke="var(--ev0)" stroke-width="${2.2*k}" stroke-dasharray="0.01 ${7.5*k}"/>`;
}
function miniMap(on){
  let g='';
  SEGS.forEach(s=>{const lit=s.from?(on.includes('influence')&&(s.from==='_'||on.includes(s.from))):on.includes(s.to);
    g+=`<path d="${segPath(s)}" fill="none" stroke="${lit?'var(--ink)':'var(--rule)'}" stroke-width="${lit?9:5}" stroke-linecap="round" stroke-linejoin="round" ${lit?'':'stroke-dasharray="0.01 14"'}/>`});
  ORDER.forEach((id,i)=>{const [x,y]=GEO.S[id],lit=on.includes(id);g+=`<circle cx="${x}" cy="${y}" r="26" fill="${lit?'var(--ink)':'var(--surface)'}" stroke="${lit?'var(--ink)':'var(--rule)'}" stroke-width="5"/><text x="${x}" y="${y+11}" text-anchor="middle" style="font-family:var(--f-mono);font-size:30px;font-weight:500;fill:${lit?'var(--paper)':'var(--ink-3)'}">${id==='influence'?'?':i+1}</text>`});
  return `<svg viewBox="0 90 ${GEO.W} 520" role="img" aria-label="Links this route runs through: ${on.map(nameOf).join(', ')}">${g}</svg>`;
}
/* open a deep-linked part of a page: any details around or inside it, its accordion row, then scroll to it */
const openAt5=t=>{const d=t.closest('details');if(d)d.open=true;const d2=t.querySelector('details');if(d2)d2.open=true;
  const b=t.querySelector('.acc5-b[aria-expanded="false"]');if(b){b.setAttribute('aria-expanded','true');const pnl=document.getElementById(b.getAttribute('aria-controls'));if(pnl)pnl.hidden=false}
  const rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;requestAnimationFrame(()=>t.scrollIntoView({behavior:rm?'auto':'smooth',block:'start'}))};
/* ----- router ----- */
let current='map';const picked={};let tourTimer=null;
function go(id,push=true){
  if(push){try{history.pushState(null,'','#'+id)}catch(e){try{location.hash=id}catch(_){}}}
  render(id);
}
function render(id){
  clearInterval(tourTimer);tourTimer=null;
  const v=$('#view');current=id;const [base0,ind]=String(id).split('/'),base=base0==='why'?'contribute':base0==='home'?'map':base0;
  const source=ORDER.includes(base)?SELECTED_EVIDENCE[base].sources.find(s=>s.id===ind||(s.legacy||[]).includes(ind)):null;
  // Retired review pages and unselected indicator links lead back to public evidence.
  if(['library','review'].includes(base)||(ORDER.includes(base)&&ind&&!source)){
    const target=ORDER.includes(base)?base:ORDER.includes(ind)?ind:'evidence';
    try{history.replaceState(null,'','#'+target)}catch(e){}
    render(target);return;
  }
  if(linkById(base)||base==='influence'){if(ind&&source)viewEvidenceDetails(v,base);else viewTopic(v,base)}
  else if(base==='details')viewEvidenceDetails(v,ind);
  else if(base==='method')viewSourceMethod(v);
  else if(base==='futures'&&ind==='more')viewFuturesMore(v);
  else({map:viewMap,evidence:viewIndex,influence:viewInfluence,record:viewRecord,futures:viewFutures,gaps:viewGaps,method:viewMethod,contribute:viewWhy}[base]||viewMap)(v);
  const top=(linkById(base)||['influence','record','review','library','details'].includes(base))?'evidence':(['map','evidence','futures','gaps','method','contribute'].includes(base)?base:'map');
  document.title=(top==='map'?'':({evidence:'Evidence',futures:'Futures',gaps:'Gaps',method:'Method',contribute:'Contribute'}[top]+' · '))+'Gradual Disempowerment Dashboard';
  $$('.nav a').forEach(a=>a.getAttribute('href')==='#'+(top==='map'?'home':top)?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
  window.scrollTo(0,0);
  if(source){const t=document.getElementById('source-'+source.id);if(t)openAt5(t)}
  /* #gaps/<step> and #why/<section> open the page at that part */
  const anchor=base==='contribute'&&ind==='authors'?'add':ind;
  const sub=anchor&&{gaps:'gg-',contribute:'w-',method:'m-'}[base];if(sub){const t=document.getElementById(sub+anchor)||document.querySelector(`[data-sub="${base}/${anchor}"]`);if(t)openAt5(t)}
}
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]');if(g){e.preventDefault();go(g.dataset.go);return}
  const a=e.target.closest('a[href^="#"]');if(a&&a.getAttribute('href').length>1){e.preventDefault();go(a.getAttribute('href').slice(1))}
});
window.addEventListener('popstate',()=>render((location.hash||'#home').slice(1)));
window.addEventListener('hashchange',()=>{const h=(location.hash||'#home').slice(1);if(h!==current)render(h)});

/* ----- the measurement record: every dated observation behind the site ----- */
let RECORD=null;
function recordData(){
  if(RECORD)return RECORD;
  const X0=2021,X1=2026.8,box=document.createElement('div');
  const lane=d=>{const raw=d.obs||Charts.capture(()=>d.render(box));
    const xs=[...new Set(raw.filter(x=>x>=X0&&x<=X1).map(x=>+x.toFixed(3)))].sort((a,b)=>a-b);
    let gap=0;for(let i=1;i<xs.length;i++)gap=Math.max(gap,xs[i]-xs[i-1]);
    return {id:d.id,name:d.recName||d.tab[0],full:d.recName||d.tab[0],kind:d.rec,xs,bar:xs.length>=10&&gap<=0.18}};
  const rows=LINKS.map(L=>({id:L.id,name:L.name,level:L.level,word:LEVELWORD[L.level],lanes:L.inds.filter(d=>d.rec&&!d.recRow).map(d=>({...lane(d),go:L.id+'/'+d.id})).filter(l=>l.xs.length)}));
  rows.push({id:'influence',name:END.name,level:0,word:LEVELWORD[0],lanes:LINKS.flatMap(L=>L.inds.filter(d=>d.recRow==='influence').map(d=>({...lane(d),go:L.id+'/'+d.id})))});
  const all=rows.flatMap(r=>r.lanes);
  RECORD={rows,x:{min:X0,max:X1,ticks:[2021,2022,2023,2024,2025,2026]},n:all.reduce((a,l)=>a+l.xs.length,0),series:all.length,direct:all.filter(l=>l.kind==='d').length};
  return RECORD;
}
function drawRecord(el){
  const R=recordData();
  Charts.record(el,{rows:R.rows,x:R.x,vlines:[{x:ym(2022,11.97),label:'ChatGPT launch'}],names:['A reading of the quantity the link is named for','A reading of something nearby','Published every month or two','No direct reading'],
    aria:'One row for each link in the chain, with a mark for every dated reading shown on this site from 2021 to 2026. The first five links and culture have direct readings. Skills has a handful of single studies. Institutions and human influence have no direct readings.',
    onPick:(r,l)=>go(l.go)});
}

/* ----- shared: workers' share, observed against forecasts ----- */
function fanChart(el,compact){
  const k=52.8/93.446,base=(97.871+96.723+95.999+95.727)/4*k,B=2025.51,B2=2024.51;
  const hist=LS_PTS.filter(p=>p[0]>=2012).map(p=>[p[0],+(p[1]*k-base).toFixed(2)]),last=hist[hist.length-1];
  const sg=v=>(v>0?'+':v<0?'−':'')+Math.abs(v);
  const s=[{name:'Observed (BLS)',color:C.s1,w:2.5,markers:'end',pts:hist,endLabel:''},
   {name:'Economists: slow AI progress',color:C.p1,dash:true,markers:'all',pts:[[B,0,'baseline: 2025 average','n'],[2030,-0.48],[2050,-3.48]],endLabel:'Slow −3.5'},
   {name:'Economists: moderate',color:C.p2,dash:true,markers:'all',pts:[[B,0,'baseline: 2025 average','n'],[2030,-1.48],[2050,-5.48]],endLabel:'Moderate −5.5',endLabelNarrow:'Mod. −5.5'},
   {name:'Economists: rapid',color:C.p3,dash:true,markers:'all',pts:[[B,0,'baseline: 2025 average','n'],[2030,-3.48],[2050,-10.48]],endLabel:'Rapid −10.5'}];
  const ann=[{x:last[0],y:last[1],text:'Q2 2026: −1.8\nfour-quarter average: −0.9',dx:-12,dy:20,anchor:'end',lead:false,strong:true}];
  if(!compact){
    s.push({name:'AI experts: rapid (2050), unverified',color:C.p3,dots:true,r:5,pts:[[2050,-15.48,'AI-industry and policy experts, rapid scenario. Unverified extraction: check the paper before citing.','h']],endLabel:'AI experts −15.5',endLabelNarrow:'Experts −15.5'},
     {name:'LEAP expert panel, no scenario',color:C.p2,w:1.4,dash:true,markers:'all',end:false,narrowHide:true,pts:[[B2,0,'baseline: 2024','n'],[2030,-2.3],[2040,-7.3]]},
     {name:"Anthropic model, \"extreme\" scenario (2030)",color:C.p3,dots:true,r:5,end:false,narrowHide:true,pts:[[2030,-14.8,'a model output with no policy response, not a forecast','h']]});
    ann.push({x:2030,y:-14.8,text:'Anthropic model,\n"extreme": −14.8 by 2030',dx:12,dy:4,anchor:'start'},{x:2040,y:-7.3,text:'Expert panel (LEAP)\n−7.3 by 2040',dx:-12,dy:22,anchor:'end'});
  }
  Charts.line(el,{aria:"Workers' share of US income as percentage-point change from 2025. Observed: about 1.5 points higher in 2012, 1.8 points lower in the second quarter of 2026. Forecasts range from 3.5 to 10.5 points lower by 2050.",h:compact?320:440,legend:false,
    x:{min:2012,max:2051,minNarrow:2019,ticks:[2015,2020,2025,2030,2040,2050],ticksNarrow:[2020,2030,2040,2050],tip:x=>Math.abs(x-B)<.005||Math.abs(x-B2)<.005?'Baseline '+Math.floor(x):x<2026.4?fmtQ(x):String(Math.round(x)),label:'Year'},
    y:{min:compact?-12:-17,max:4.5,ticks:compact?[-10,-5,0]:[-15,-10,-5,0],fmt:sg,tip:v=>(v>0?'+':v<0?'−':'')+Math.abs(v).toFixed(1)+' pts'},zero:0,
    xbands:[{x0:2026.4,x1:2051,label:'Forecasts'}],series:s,ann,annNarrow:[{x:last[0],y:last[1],text:'Q2 2026\n−1.8',dx:-9,dy:18,anchor:'end',strong:true}]});
}

/* ----- view: futures ----- */
let world='central',routeSel='A';
function drawOdds(v){
  const names=['Slow','Moderate','Rapid'],cols=[C.p1,C.p2,C.p3];
  const rows=[...ODDS.filter(o=>!o.tag).sort((a,b)=>b.v[2]-a.v[2]),...ODDS.filter(o=>o.tag)];
  Charts.stack($('#odds',v),{aria:'Probability of slow, moderate and rapid AI progress by 2030 according to four groups',sel:world==='slow'?0:world==='rapid'?2:null,
    rows:rows.map(o=>({label:o.label,tag:o.tag,parts:o.v.map((x,i)=>({v:x,name:names[i]+' progress',color:cols[i],on:`var(--on-p${i+1})`,label:(o.tag?String(x):x.toFixed(1))+'%'}))}))});
}
function drawWorld(v){
  const W=WORLDS[world],short={slow:'Slow',central:'Central',rapid:'Rapid'};
  $('#worlddef',v).innerHTML=`<b>${esc(W.name)}.</b> ${esc(W.def)} ${esc(W.odds||'')}`;
  const box=$('#mults',v);box.innerHTML=MINIS.map(m=>`<div class="mult"><h4>${esc(m.t)}</h4><div class="big">${esc(m.f(m.v[world][1]))}<small>by 2050 · ${esc(m.f(m.v[world][0]))} by 2030</small></div><div class="now base">${m.id==='unemp'?'Latest':'Baseline'}: ${esc(m.base[2])}</div><div class="chart" data-m="${m.id}" style="margin-top:6px"></div><div class="now" style="margin:2px 0 6px">${esc(m.rnote||((m.ranges&&m.ranges[world])?'':'No uncertainty range published.'))}</div></div>`).join('')+
   `<div class="mult take"><span class="lab">In the ${esc(W.name.toLowerCase())}${world==='central'?'':' scenario'}</span><p>${esc(W.take)}</p></div>`;
  MINIS.forEach(m=>{const el=$(`[data-m="${m.id}"]`,box);
    const ser=Object.keys(WORLDS).filter(k=>k!==world).map(k=>({name:WORLDS[k].name,color:WORLDS[k].color,w:1.3,op:.55,dash:true,markers:'none',endLabel:short[k],endMuted:true,pts:[[m.base[0],m.base[1]],[2030,m.v[k][0]],[2050,m.v[k][1]]]}));
    ser.push({name:W.name,color:W.color,dash:true,w:2.6,markers:'all',endLabel:short[world],pts:[[m.base[0],m.base[1],m.id==='unemp'?'latest reading':'forecast baseline'],[2030,m.v[world][0]],[2050,m.v[world][1]]]});
    Charts.line(el,{aria:m.t+' under the '+W.name+' scenario',h:190,table:false,legend:false,x:{min:2022,max:2051,ticks:[2030,2050],tip:x=>x<2029?(m.id==='unemp'?'Latest':'Baseline'):String(Math.round(x))},y:{min:m.y[0],max:m.y[1],ticks:m.ticks,fmt:m.f,tip:m.f},
      ranges:(m.ranges&&m.ranges[world]||[]).map(r=>({x:r[0],lo:r[1],hi:r[2],color:W.color})),series:ser})});
}
function drawRoute(v){
  const r=ROUTES.find(x=>x.id===routeSel);
  $('#routebody',v).innerHTML=`<div><div class="minimap">${miniMap(r.on)}</div>
    <div class="lab" style="margin-top:14px">Route ${r.id}</div><h3 class="h-m" style="margin-top:2px">${esc(r.name)}</h3>
    <p class="prose" style="margin-top:8px;color:var(--ink-2)">${esc(r.story)}</p>
    <p class="note" style="margin-top:12px;padding-top:12px;border-top:1px solid var(--rule)">${esc(r.anchor)}</p></div>
   <div><div class="lab">What you would expect to see</div><ul class="sp">${r.signs.map(s=>`<li><span class="st ${s[0]}"><i></i>${SPLAB[s[0]]}</span><div><div class="w">${esc(s[1])}</div><div class="y">${esc(s[2])}</div></div></li>`).join('')}</ul></div>`;
}
