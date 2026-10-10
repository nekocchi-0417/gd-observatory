/* ======================================================================================
   components.js: interactive pieces shared by the pages.
   Loaded after app.js. Uses globals from charts.js (esc, ym, fmtDate, C, Charts),
   data1-3.js (LINKS, TAGS, END, linkById, GAPS, RUBRIC, DEFS), signals.js (SIGNALS),
   copy.js (COPY) and app.js ($, $$, LEVELWORD, lv, ORDER, nameOf, strokeFor).
   Each mount function renders into `el` and returns it:
     mountMap5(el,{onStop})    -> chain map, legend, phone list, "why this line?" drawer, guided tour
     evidenceRows(el)          -> Evidence overview: one row per link and Human influence
     indicatorCards(el,linkId) -> indicator cards (trend shape and word) that open each chart
     insightCards(el,linkId)   -> "What a sceptic would say" / "What nobody measures" / "What to watch"
     gapMatrix(el,{onPick})    -> the gap page's matrix of stops
     caveatChip(type)          -> caveat signpost; initCaveats5() wires the tooltips once
     wipTag5(short), futuresCard5(el,{title,note,draw})
   ====================================================================================== */

/* ---------- vocabulary and data access ---------- */
const SIG5=()=>(typeof SIGNALS!=='undefined'&&SIGNALS)||{links:{},indicators:{},matrix:{}};
const SIGWORD5={4:'Changing fast',3:'Clearly changing',2:'Early or mixed signs',1:'No clear change yet','?':"Can't tell"};
const LINEWORD5=['No direct measure','One-offs','Not tied to AI','With limits','Well measured'];
const WHY5=['why so faint?','why dotted?','why a hollow line?','why a thinner line?','why a solid line?'];
const WHYBTN5=['Why faint?','Why dotted?','Why hollow?','Why thinner?','Why solid?'];
const HUMAN5=['skills','influence'];
const sigOf5=id=>{const s=SIG5().links[id];return s&&s.signal!=null?s.signal:'?'};
/* Draft one-liners (no numbers, 12 words or fewer). SIGNALS.links[id].short wins when the researcher supplies it. */
const ONE5={capability:'AI finishes ever longer tasks on its own',adoption:'About half of US workers now use AI at work',
 handover:'Hand-over rose, then eased; one company’s logs',work:'Fewer first jobs for the young; the wider market is flat',
 share:'Record low, but most of the fall predates AI',skills:'Use is surveyed often; unaided ability is rarely re-tested',
 culture:'AI fills the supply; little of it is read or heard',institutions:'Paperwork is counted; decisions are not',influence:'No direct measure'};
const oneLiner5=id=>((COPY.evidence.rows||{})[id]||{}).line||ONE5[id]||'';
/* plain card label for an indicator: the copy deck's label wins */
const linkOfInd5=d=>LINKS.find(L=>L.inds.includes(d));
const indCopy5=d=>{const L=linkOfInd5(d);return (L&&COPY.links[L.id]&&COPY.links[L.id].inds&&COPY.links[L.id].inds[d.id])||{}};
const indLabel5=d=>indCopy5(d).label||d.recName||d.tab[0];
const segPath5=s=>'M'+s.p.map(p=>p.join(' ')).join(' L');

/* small glyphs */
const sigDot5=s=>s==='?'?`<i class="sgd5 q" aria-hidden="true">?</i>`:`<i class="sgd5" style="--c:var(--sg${s})" aria-hidden="true"></i>`;
const lineGlyph5=(l,w=48,h=12)=>`<svg class="lg5" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true">${strokeFor(l,`M4 ${h/2} L${w-4} ${h/2}`,{w4:7,w3:4.5,bg:'var(--glyph-bg,var(--paper))',k:.72})}</svg>`;
/* filled / partly / not: shared by the drawer rubric and the coverage grid */
const cov5=(v,sz=16)=>{const r=sz/2-1.5,c=sz/2;
  if(v===2)return `<svg class="cv5 y" width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" aria-hidden="true"><circle cx="${c}" cy="${c}" r="${r}" fill="var(--ink)"/></svg>`;
  if(v===1)return `<svg class="cv5 p" width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" aria-hidden="true"><circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="var(--ink)" stroke-width="1.5"/><path d="M${c} ${c-r} A${r} ${r} 0 0 0 ${c} ${c+r} Z" fill="var(--ink)"/></svg>`;
  return `<svg class="cv5 n" width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" aria-hidden="true"><circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="var(--ink-3)" stroke-width="1.5" stroke-dasharray="2.2 2.2"/></svg>`};
const COVWORD5=['No','Partly','Yes'];
const towardIcon5=t=>{const lab={toward:'Points toward the concern',away:'Points away from the concern',unclear:'Direction unclear'}[t]||'Direction unclear';
  const body=t==='toward'?`<circle cx="6" cy="6" r="4.6" fill="var(--ink)"/>`:t==='away'?`<circle cx="6" cy="6" r="4.6" fill="none" stroke="var(--ink)" stroke-width="1.5"/>`
   :`<circle cx="6" cy="6" r="4.6" fill="none" stroke="var(--ink)" stroke-width="1.5"/><path d="M6 1.4 A4.6 4.6 0 0 0 6 10.6 Z" fill="var(--ink)"/>`;
  return `<svg class="tw5" width="12" height="12" viewBox="0 0 12 12" role="img" aria-label="${lab}"><title>${lab}</title>${body}</svg>`};
const chev5=`<svg class="chev5" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M5 3l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* ======================================================================================
   1. THE CHAIN MAP
   ====================================================================================== */
const GEO5={W:1200,H:430,EDGE:1028,ZX:446,CX:1066,TY:216,J:[470,216],
 S:{capability:[92,216],adoption:[236,216],handover:[380,216],work:[748,66],share:[934,66],skills:[934,166],culture:[934,266],institutions:[934,366],influence:[1124,216]}};
const SEGS5=(()=>{const {J,S,TY,CX}=GEO5,jx=J[0];
  return [{to:'capability',p:[[24,TY],S.capability]},{to:'adoption',p:[S.capability,S.adoption]},{to:'handover',p:[S.adoption,S.handover]},
   {to:'handover',stub:1,p:[S.handover,J]},
   {to:'work',p:[J,[jx,S.work[1]+40],[jx+40,S.work[1]],S.work]},{to:'share',p:[S.work,S.share]},
   {to:'skills',p:[J,[jx+50,S.skills[1]],S.skills]},{to:'culture',p:[J,[jx+50,S.culture[1]],S.culture]},
   {to:'institutions',p:[J,[jx,S.institutions[1]-40],[jx+40,S.institutions[1]],S.institutions]},
   ...['share','skills','culture','institutions'].map(f=>({to:'influence',from:f,p:[S[f],[1000,S[f][1]],[CX,TY]]})),
   {to:'influence',from:'_',p:[[CX,TY],[S.influence[0]-23,TY]]}]})();
/* where the "i" badge sits for under-measured links (level 2 or below) */
const badgeAt5=id=>{const {S}=GEO5;if(id==='influence')return [S.influence[0]+28,S.influence[1]+28];
  const s=SEGS5.find(x=>x.to===id&&!x.stub&&!x.from),a=s.p[s.p.length-2],b=s.p[s.p.length-1];return [(a[0]+b[0])/2,(a[1]+b[1])/2]};

function mapSVG5(){
  const {W,H,EDGE,ZX,CX,TY,S}=GEO5;let g='';
  g+=`<defs><pattern id="hatch5" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="var(--ink)" stroke-opacity=".2" stroke-width="1"/></pattern></defs>`;
  g+=`<g class="zone5" aria-hidden="true"><rect x="${ZX}" y="0" width="${EDGE-ZX}" height="${H}" fill="var(--ink)" opacity=".028"/><rect x="${EDGE}" y="0" width="${W-EDGE}" height="${H}" fill="url(#hatch5)"/>
   <line x1="${EDGE}" x2="${EDGE}" y1="0" y2="${H}" stroke="var(--rule)"/>
   <text class="zl5" x="24" y="28">USE</text><text class="zl5" x="${ZX+18}" y="28">CONSEQUENCES</text><text class="zl5 halo5" x="${(EDGE+W)/2}" y="28" text-anchor="middle">OUTCOME</text></g>`;
  /* the human side: a soft highlighter under the skills line, ending around Human influence */
  const hb=`M548 ${S.skills[1]} L1000 ${S.skills[1]} L${CX} ${TY} L${S.influence[0]} ${TY}`;
  g+=`<g class="hs5band" aria-hidden="true"><path d="${hb}" fill="none" stroke="var(--hs-line)" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/><path d="${hb}" fill="none" stroke="var(--hs-soft)" stroke-width="46" stroke-linecap="round" stroke-linejoin="round"/>
   <text class="hs5lab" x="536" y="${S.skills[1]-31}">HUMAN SIDE</text></g>`;
  /* lines: style is the only encoding */
  SEGS5.forEach(s=>{const l=s.from?0:lv(s.to);g+=`<g class="seg5" data-to="${s.to}">${strokeFor(l,segPath5(s),{w4:9,w3:5,bg:'var(--map-bg)'})}</g>`});
  g+=`<circle class="jn5" cx="${GEO5.J[0]}" cy="${GEO5.J[1]}" r="5.5" fill="var(--ev3)"/>`;
  /* one focusable handle per link: wide invisible hit path(s) + badge if under-measured */
  ORDER.forEach(id=>{const l=lv(id),segs=SEGS5.filter(s=>s.to===id&&!s.stub);
    const hits=segs.map(s=>`<path class="hit5" d="${segPath5(s)}"/>`).join('');
    const b=l<=2?(()=>{const [x,y]=badgeAt5(id);return `<g class="badge5" transform="translate(${x} ${y})"><circle r="9.5"/><text y="4.2" text-anchor="middle">i</text></g>`})():'';
    g+=`<g class="sh5" data-why="${id}" tabindex="0" role="button" aria-expanded="false" aria-controls="mdrawer5" aria-label="${esc(nameOf(id))}: ${LEVELWORD[l].toLowerCase()}. Show why.">${hits}${b}</g>`});
  /* stops: names only */
  ORDER.forEach(id=>{const [x,y]=S[id],l=lv(id),end=id==='influence',nm=nameOf(id),ny=end?y-33:y-19;
    g+=`<g class="st5${HUMAN5.includes(id)?' hs':''}" data-id="${id}" tabindex="0" role="link" aria-label="${esc(nm)}. ${LEVELWORD[l]}. Open its evidence.">
      <rect class="hit" x="${x-58}" y="${ny-17}" width="116" height="${y+13-(ny-17)}" fill="transparent"/>
      <text class="nm5${end?' halo5':''}" x="${x}" y="${ny}" text-anchor="middle">${esc(nm)}</text>
      ${end?`<circle class="ring5" cx="${x}" cy="${y}" r="22" fill="var(--hs-soft)" stroke="var(--ink-2)" stroke-width="1.8" stroke-dasharray="3 4"/><text class="q5" x="${x}" y="${y+7.5}" text-anchor="middle">?</text>`
        :`<circle class="ring5" cx="${x}" cy="${y}" r="9" fill="${HUMAN5.includes(id)?'var(--hs-soft)':'var(--map-bg)'}" stroke="var(--ev${Math.max(1,l)})" stroke-width="4"/><circle class="core5" cx="${x}" cy="${y}" r="3.4"/>`}</g>`});
  return `<svg viewBox="0 0 ${W} ${H}" role="group" aria-label="The chain from AI capability to human influence, in three zones: use, consequences, outcome. Line style shows how well each stop is measured. Skills and judgement and Human influence form the human side.">${g}</svg>`;
}

/* phone: vertical list with the same line styles */
function mapList5(){
  const row=id=>{const l=lv(id),hs=HUMAN5.includes(id);
    return `<li class="ml5${hs?' hs':''}" data-id="${id}" data-l="${l}"><span class="ml5-line" aria-hidden="true"></span>
      <span class="ml5-main"><a class="ml5-name" href="#${id}">${esc(nameOf(id))}</a>${hs?'<span class="hs5tag">Human side</span>':''}</span>
      ${l<=2?`<button class="ml5-why" data-why="${id}" aria-expanded="false" aria-controls="mdrawer5"><i class="ib5" aria-hidden="true">i</i>${WHYBTN5[l]}</button>`:'<span></span>'}</li>`};
  return `<ol class="mlist5">${['capability','adoption','handover'].map(row).join('')}<li class="ml5-fork">Then four lines, side by side</li>${['work','share','skills','culture','institutions'].map(row).join('')}<li class="ml5-fork">All four lead to the outcome</li>${row('influence')}</ol>`;
}

/* the record strip: one lane per indicator, one tick per dated reading (same rules as app.js recordData) */
const REC5={};
function recordLanes5(id){
  if(REC5[id])return REC5[id];
  const X0=2021,X1=2026.8,box=document.createElement('div');
  const lane=d=>{const raw=d.obs||Charts.capture(()=>d.render(box));
    const xs=[...new Set(raw.filter(x=>x>=X0&&x<=X1).map(x=>+x.toFixed(3)))].sort((a,b)=>a-b);
    let gap=0;for(let i=1;i<xs.length;i++)gap=Math.max(gap,xs[i]-xs[i-1]);
    return {id:d.id,name:d.recName||d.tab[0],label:indLabel5(d),kind:d.rec,xs,bar:xs.length>=10&&gap<=0.18}};
  const inds=id==='influence'?LINKS.flatMap(L=>L.inds.filter(d=>d.recRow==='influence')):linkById(id).inds.filter(d=>d.rec&&!d.recRow);
  return REC5[id]=inds.map(lane).filter(l=>l.xs.length);
}
function recordStrip5(id,W){
  const lanes=recordLanes5(id),direct=lanes.filter(l=>l.kind==='d'),X0=2021,X1=2026.8,LW=W>=420?Math.min(220,Math.round(W*.36)):0,P={l:2+LW,r:6,t:4,b:18},lh=17,th=9;
  const n=Math.max(lanes.length+(direct.length?0:1),1),H=P.t+n*lh+P.b,sx=x=>P.l+(x-X0)/(X1-X0)*(W-P.l-P.r);
  let g='',y=P.t;
  for(let yr=2021;yr<=2026;yr++)g+=`<line x1="${sx(yr)}" x2="${sx(yr)}" y1="${P.t}" y2="${H-P.b+3}" stroke="var(--grid)"/><text x="${sx(yr)+3}" y="${H-4}">${yr}</text>`;
  if(!direct.length){g+=`<rect x="${P.l}" y="${y+3}" width="${W-P.l-P.r}" height="${lh-6}" fill="url(#rhatch5)" stroke="var(--rule)" stroke-width=".8"/><text x="${P.l+(W-P.l-P.r)/2}" y="${y+lh-5}" text-anchor="middle" class="nd5">NO DIRECT READING</text>`;y+=lh}
  lanes.forEach(l=>{const col=l.kind==='d'?'var(--s1)':'var(--ctx)',cy=y+lh/2,
     t=`${l.name} · ${l.xs.length===1?'1 reading, '+fmtDate(l.xs[0]):l.xs.length+' readings, '+fmtDate(l.xs[0])+' to '+fmtDate(l.xs[l.xs.length-1])}`;
    g+=`<g><title>${esc(t)}</title>${LW?`<text class="ln5" x="0" y="${cy+3.5}">${esc(l.label.length>34?l.label.slice(0,33)+'…':l.label)}</text>`:''}<line x1="${P.l}" x2="${W-P.r}" y1="${cy}" y2="${cy}" stroke="var(--grid)"/>`+
      (l.bar?`<rect x="${sx(l.xs[0]).toFixed(1)}" y="${cy-1.75}" width="${(sx(l.xs[l.xs.length-1])-sx(l.xs[0])).toFixed(1)}" height="3.5" rx="1.75" fill="${col}"/>`
        :l.xs.map(x=>`<rect x="${(sx(x)-1.3).toFixed(1)}" y="${cy-th/2}" width="2.6" height="${th}" rx=".6" fill="${col}"/>`).join(''))+
      `<rect x="0" y="${y}" width="${W}" height="${lh}" fill="transparent"/></g>`;y+=lh});
  return `<svg class="rs5" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(nameOf(id))}: ${lanes.length} indicators, ${lanes.reduce((a,l)=>a+l.xs.length,0)} dated readings since 2021.">
    <defs><pattern id="rhatch5" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="var(--ink)" stroke-opacity=".28"/></pattern></defs>${g}</svg>`;
}
function rubric5(id){
  const r=RUBRIC[id]||['no','no','no','no'];
  return `<ul class="rb5">${['Repeated','Direct','Independent','Tied to AI'].map((lab,i)=>{const v=String(r[i]),st=v==='yes'?2:/^no/.test(v)?0:1,
     q=v.includes(':')?v.split(':').slice(1).join(':').trim():(st===1?v:'');
    return `<li>${cov5(st,14)}<span class="rb5-l">${lab}<span class="sr5"> ${COVWORD5[st].toLowerCase()}</span>${q?`<small>${esc(q)}</small>`:''}</span></li>`}).join('')}</ul>`;
}
function drawerHTML5(id,W){
  const l=lv(id),L=id==='influence'?null:linkById(id);
  const why=(COPY.record.drawer.stopSentence||{})[id]||(L?L.levelWhy:'');
  return `<div class="md5-in"><div class="md5-pad"><div class="md5-head"><h3 tabindex="-1"><span>${esc(nameOf(id))}:</span> ${WHY5[l]} <small class="md5-lv">${esc(LEVELWORD[l])}</small></h3><button class="md5-x" type="button" aria-label="Close">${'<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'}</button></div>
    <div class="md5-grid"><div class="md5-strip"><div class="md5-cap">Each mark is one dated reading since 2021. Blue: the thing itself. Grey: something nearby.</div>${recordStrip5(id,W)}</div>${rubric5(id)}</div>
    <p class="md5-note">${esc(why.replace(/\.$/,''))}. <a class="go" href="#record">See the full record →</a></p></div></div>`;
}

function mountMap5(el,opts={}){
  const onStop=opts.onStop||(id=>{try{location.hash=id}catch(e){}});
  el.classList.add('mapcard5');
  el.innerHTML=`<div class="map5">${mapSVG5()}</div>${mapList5()}
   <div class="mkey5"><span class="mk5-t">How well measured</span>${[4,3,2,1,0].map(l=>`<span class="mk5-i">${lineGlyph5(l,34,10)}${LINEWORD5[l]}</span>`).join('')}
    <span class="mk5-hint"><i class="ib5" aria-hidden="true">i</i>Select a line to see why</span></div>
   <p class="mcav5">Lines show how well each stop is measured, not that one causes the next.</p>
   <div class="md5" id="mdrawer5" role="region" aria-live="polite" aria-label="Why this line style"></div>`;
  const map=$('.map5',el),drawer=$('#mdrawer5',el),home=drawer.parentNode,nextHome=drawer.nextSibling;let openId=null,opener=null;
  const mark=id=>{map.classList.toggle('has-sel',!!id);$$('.seg5,.sh5,.st5',map).forEach(g=>g.classList.toggle('sel',!!id&&(g.dataset.to||g.dataset.why||g.dataset.id)===id));
    $$('[data-why]',el).forEach(b=>b.setAttribute('aria-expanded',String(b.dataset.why===id)))};
  drawer.inert=true;
  const close=()=>{drawer.classList.remove('open');drawer.inert=true;openId=null;mark(null);if(drawer.parentNode!==home)home.insertBefore(drawer,nextHome);if(opener)try{opener.focus()}catch(e){}};
  const open=(id,src)=>{
    if(map.dataset.tour){const x=$('.tour5 [data-t="exit"]',map);if(x)x.click()}
    if(openId===id){close();return}
    opener=src;openId=id;const phone=src&&src.closest('.mlist5');
    if(phone){src.closest('li').appendChild(drawer)}else if(drawer.parentNode!==home)home.insertBefore(drawer,nextHome);
    const w=Math.max(220,Math.floor((drawer.parentNode.clientWidth||600)*(phone?1:.6))-(phone?28:40));
    drawer.innerHTML=drawerHTML5(id,w);drawer.inert=false;mark(id);requestAnimationFrame(()=>drawer.classList.add('open'));
    const rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;setTimeout(()=>{try{drawer.scrollIntoView({block:'nearest',behavior:rm?'auto':'smooth'})}catch(e){}},220);
    $('.md5-x',drawer).addEventListener('click',close);if(src&&src.matches&&src.matches('.sh5,.ml5-why'))setTimeout(()=>{try{$('.md5-head h3',drawer).focus({preventScroll:true})}catch(e){}},230)};
  el.addEventListener('click',e=>{const w=e.target.closest('[data-why]');if(w){e.preventDefault();open(w.dataset.why,w);return}
    const s=e.target.closest('.st5');if(s){onStop(s.dataset.id)}});
  el.addEventListener('keydown',e=>{const t=e.target;
    if((e.key==='Enter'||e.key===' ')&&t.matches&&t.matches('.sh5')){e.preventDefault();open(t.dataset.why,t)}
    else if((e.key==='Enter'||e.key===' ')&&t.matches&&t.matches('.st5')){e.preventDefault();onStop(t.dataset.id)}
    else if(e.key==='Escape'&&openId){close()}});
  /* hover: preview the line under the pointer */
  $$('.sh5',map).forEach(h=>{h.addEventListener('pointerenter',()=>{if(!openId&&!map.dataset.tour){map.classList.add('has-sel');$$(`.seg5[data-to="${h.dataset.why}"]`,map).forEach(s=>s.classList.add('sel'))}});
    h.addEventListener('pointerleave',()=>{if(!openId&&!map.dataset.tour)mark(null)})});
  /* the tour: nine stops, one at a time, lighting the path that leads there */
  const T=COPY.home.tour,box=document.createElement('div');box.className='tour5';map.appendChild(box);
  const idle=`<div class="tour5-start"><button type="button" class="btn play" data-t="start"><svg width="10" height="12" viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0l10 6-10 6z" fill="currentColor"/></svg>${esc(T.button)}</button><span>${esc(T.sub)}</span></div>`;
  box.innerHTML=idle;
  const trunk=['capability','adoption','handover'];
  const pathTo=id=>{if(id==='influence')return ORDER.slice();const t=trunk.indexOf(id);if(t>=0)return trunk.slice(0,t+1);return [...trunk,...(id==='share'?['work','share']:[id])]};
  let ti=0,playing=false;
  const light=id=>{const on=pathTo(id);map.classList.add('has-sel');
    $$('.seg5',map).forEach(g=>{const to=g.dataset.to;g.classList.toggle('sel',to==='influence'?id==='influence':on.includes(to))});
    $$('.st5',map).forEach(g=>g.classList.toggle('sel',on.includes(g.dataset.id)));
    $$('.st5',map).forEach(g=>g.classList.toggle('here',g.dataset.id===id))};
  const stopT=()=>{clearInterval(tourTimer);tourTimer=null;playing=false};
  const show=()=>{const id=ORDER[ti],L=id==='influence'?END:linkById(id);light(id);
    box.classList.add('on');
    box.innerHTML=`<div class="tourtop"><span class="lab">${esc(T.stepLabel.replace('{i}',ti+1).replace('{measurementWord}',LEVELWORD[lv(id)]))}</span><span class="dots" aria-hidden="true">${ORDER.map((_,k)=>`<i class="${k===ti?'on':k<ti?'done':''}"></i>`).join('')}</span></div>
      <div class="tourname">${esc(L.name)}</div><p>${esc(L.tour)}</p>
      <div class="ctl"><button type="button" class="btn ghost" data-t="prev" ${ti===0?'disabled':''}>${esc(T.back)}</button><button type="button" class="btn ghost" data-t="play">${playing?esc(T.pause):esc(T.resume)}</button><button type="button" class="btn ghost" data-t="next" ${ti===ORDER.length-1?'disabled':''}>${esc(T.next)}</button><button type="button" class="btn" data-t="open">${esc(id==='influence'?'Open the end of the chain':T.open)}</button><button type="button" class="btn ghost x" data-t="exit" aria-label="${esc(T.exit)}">${esc(T.exit.replace(' tour',''))}</button></div>`};
  const run=()=>{clearInterval(tourTimer);playing=true;if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches){playing=false;return}
    tourTimer=setInterval(()=>{if(ti<ORDER.length-1){ti++;show()}else{stopT();show()}},5200)};
  const end=()=>{stopT();delete map.dataset.tour;mark(null);$$('.st5.here',map).forEach(g=>g.classList.remove('here'));box.classList.remove('on');box.innerHTML=idle};
  box.addEventListener('click',e=>{const b=e.target.closest('[data-t]');if(!b)return;e.stopPropagation();const t=b.dataset.t;
    if(t==='start'){if(openId)close();map.dataset.tour='1';ti=0;run();show();const f=$('[data-t="next"]',box);if(f)f.focus({preventScroll:true})}
    else if(t==='prev'){stopT();ti=Math.max(0,ti-1);show()}
    else if(t==='next'){stopT();ti=Math.min(ORDER.length-1,ti+1);show()}
    else if(t==='play'){if(playing)stopT();else run();show()}
    else if(t==='exit'){end();const s=$('[data-t="start"]',box);if(s)s.focus({preventScroll:true})}
    else if(t==='open'){const id=ORDER[ti];end();onStop(id)}});
  box.addEventListener('keydown',e=>{if(e.key==='Escape'&&map.dataset.tour){end()}});
  return el;
}

/* ======================================================================================
   2. EVIDENCE OVERVIEW ROWS
   ====================================================================================== */
function evidenceRows(el){
  const legend=`<div class="elg5" role="list" aria-label="What the data show"><span class="elg5-t">What the data show</span>${[4,3,2,1,'?'].map(s=>`<span class="elg5-i" role="listitem">${sigDot5(s)}${SIGWORD5[s]}</span>`).join('')}</div>`;
  const EORDER=['capability','adoption','handover','work','share','culture','institutions','skills','influence'];
  const rows=EORDER.map(id=>{const L=id==='influence'?END:linkById(id),s=sigOf5(id),l=lv(id),hs=HUMAN5.includes(id);
    return `<a class="er5${hs?' hs':''}${s==='?'?' q':''}" href="#${id}" style="--band:${s==='?'?'var(--sg0)':`var(--sg${s})`}" aria-label="${esc(L.name)}. What the data show: ${SIGWORD5[s]}. ${LEVELWORD[l]}. ${esc(oneLiner5(id))}">
      <span class="er5-nm">${esc(L.name)}${hs?'<span class="hs5tag">Human side</span>':''}</span>
      <span class="er5-sg">${sigDot5(s)}<span>${SIGWORD5[s]}</span></span>
      <span class="er5-one">${esc(oneLiner5(id))}</span>${chev5}</a>`}).join('');
  el.innerHTML=legend+`<div class="er5-list">${rows}</div>`;return el;
}

/* ======================================================================================
   3. INDICATOR ICON CARDS
   ====================================================================================== */
/* Pull the main plotted series out of an indicator's own render() by intercepting the chart call once. */
function sparkSeries5(d){
  const keep={line:Charts.line,cols:Charts.cols,bars:Charts.bars};let got=null;
  Charts.line=(e,c)=>{if(!got)got={k:'line',c}};Charts.cols=(e,c)=>{if(!got)got={k:'cols',c}};Charts.bars=(e,c)=>{if(!got)got={k:'bars',c}};
  try{d.render(document.createElement('div'))}catch(e){}finally{Object.assign(Charts,keep)}
  if(!got||got.k==='bars')return null;
  const c=got.c;let pts;
  if(got.k==='line'){const ser=c.series.filter(s=>!s.dots&&s.pts.length>1);if(!ser.length)return null;
    const main=ser.slice().sort((a,b)=>((b.w||2)-(a.w||2))||((b.color===C.s1)-(a.color===C.s1))||(b.pts.length-a.pts.length))[0];
    pts=main.pts.filter(p=>p[1]!=null).map(p=>[p[0],p[1]])}
  else{pts=(c.sets?c.sets[0].pts:c.pts).filter(p=>p[1]!=null).map(p=>[p[0],p[1]])}
  if(pts.length<2)return null;
  const yt=c.y&&c.y.ticks,log=c.y&&c.y.log,f=v=>log?Math.log10(v):v;
  const lo=c.y&&(c.y.min??(yt&&yt[0])),hi=c.y&&(c.y.max??(yt&&yt[yt.length-1]));
  return {pts:pts.map(p=>[p[0],f(p[1])]),y0:lo!=null?f(got.k==='cols'?0:lo):null,y1:hi!=null?f(hi):null};
}
const SCHEM5={'Rising fast':'M4 22 C34 21 54 16 76 5','Rising':'M4 20 L76 8','Flat':'M4 14 L76 14','Falling':'M4 8 L76 20','Mixed':'M4 18 L28 9 L52 19 L76 11'};
function sparkSVG5(d,trend,w=80,h=28){
  const box=(inner,cls='')=>`<svg class="sp5 ${cls}" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true">${inner}</svg>`;
  if(trend==='One-off')return box(`<line x1="4" x2="${w-4}" y1="${h-5}" y2="${h-5}" stroke="var(--rule)" stroke-width="1.2" stroke-dasharray="2 3"/><circle cx="${w/2}" cy="${h/2}" r="4.5" fill="var(--s1)"/>`,'one');
  const s=sparkSeries5(d);
  if(!s){const p=SCHEM5[trend]||SCHEM5.Flat;return box(`<path d="${p}" fill="none" stroke="var(--ink-3)" stroke-width="1.6" stroke-dasharray="2.5 3" stroke-linecap="round"/>`,'schem')}
  const xs=s.pts.map(p=>p[0]),ys=s.pts.map(p=>p[1]),x0=Math.min(...xs),x1=Math.max(...xs);
  let y0=s.y0??Math.min(...ys),y1=s.y1??Math.max(...ys);if(y1-y0<1e-9){y0-=1;y1+=1}
  const P=4,sx=x=>P+(x-x0)/((x1-x0)||1)*(w-2*P-3),sy=y=>h-P-(y-y0)/(y1-y0)*(h-2*P);
  const dpath=s.pts.map((p,i)=>(i?'L':'M')+sx(p[0]).toFixed(1)+' '+sy(p[1]).toFixed(1)).join(' '),e=s.pts[s.pts.length-1];
  return box(`<path d="${dpath}" fill="none" stroke="var(--s1)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="${sx(e[0]).toFixed(1)}" cy="${sy(e[1]).toFixed(1)}" r="3" fill="var(--s1)" stroke="var(--glyph-bg,var(--paper))" stroke-width="1.5"/>`);
}
const FLAGCAV5=[['one-off','oneoff'],['cause','cause'],['vendor','company'],['definition','defs'],['break','defs'],['weak-source','unverified']];
function indicatorCards(el,linkId,opts={}){
  const L=linkId==='influence'?null:linkById(linkId),inds=opts.inds||L.inds,SI=SIG5().indicators,uid='ic5-'+linkId;
  el.classList.add('ic5wrap');
  const TW={toward:'toward the concern',away:'away from the concern',unclear:'direction unclear'};
  el.innerHTML=`${opts.single?'':`<div class="ic5-head"><p class="ic5-ins">${esc(COPY.linkUI.instruction)}</p></div>`}
   <div class="ic5-grid${inds.length<3?' few':''}" role="tablist" aria-label="Indicators: ${esc(nameOf(linkId))}">${inds.map((d,i)=>{const t=SI[d.id]||{},tr=t.trend||'Not rated';
     return `<button class="ic5" type="button" role="tab" id="${uid}-${d.id}" data-i="${i}" aria-selected="false" aria-controls="${uid}-panel" tabindex="${i?-1:0}">
      <span class="ic5-top">${sparkSVG5(d,tr)}</span>
      <span class="ic5-lab">${esc(indLabel5(d))}</span><span class="ic5-tr">${esc(tr)}${t.toward&&tr!=='One-off'?` · ${TW[t.toward]}`:''}</span>${chev5}</button>`}).join('')}</div>`;
  const grid=$('.ic5-grid',el),cards=$$('.ic5',grid),panel=document.createElement('div');
  panel.className='ic5-panel';panel.id=uid+'-panel';panel.setAttribute('role','tabpanel');panel.tabIndex=-1;
  let cur=-1;
  const cols=()=>getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length||1;
  const place=()=>{if(cur<0){panel.remove();return}if(opts.single){grid.after(panel);return}const c=cols(),end=Math.min(cards.length-1,Math.floor(cur/c)*c+c-1);cards[end].after(panel);
    const b=cards[cur].getBoundingClientRect(),g=grid.getBoundingClientRect();panel.style.setProperty('--nx',(b.left-g.left+b.width/2)+'px')};
  const roles=()=>{const phone=cols()===1;grid.setAttribute('role',phone?'list':'tablist');
    cards.forEach((b,i)=>{if(phone){b.removeAttribute('role');b.removeAttribute('aria-selected');b.setAttribute('aria-expanded',String(i===cur));b.tabIndex=0}
      else{b.setAttribute('role','tab');b.removeAttribute('aria-expanded');b.setAttribute('aria-selected',String(i===cur));b.tabIndex=(i===Math.max(cur,0))?0:-1}});
    panel.setAttribute('role',phone?'region':'tabpanel')};
  const draw=i=>{const d=inds[i],t=SI[d.id]||{},fl=(t.flags||[]);
    const cav=(FLAGCAV5.find(([f,c])=>fl.includes(f)&&!(c==='company'&&d.tag==='company'))||[])[1];
    const ic=indCopy5(d);
    panel.setAttribute('aria-labelledby',cards[i].id);
    panel.innerHTML=`<div class="ic5-ph"><h3>${esc(d.title)}</h3><div class="ic5-chips"><span class="chip">${esc(TAGS[d.tag])}</span>${cav?caveatChip(cav):''}</div></div>
      ${d.sub?`<p class="ic5-sub">${esc(d.sub)}</p>`:''}<div class="ic5-body"></div>
      <details class="ic5-more"><summary>${esc(COPY.linkUI.readingIt)} and sources</summary><p class="ic5-read">${esc(d.read)}</p>
      <p class="ic5-src">${d.src.map(s=>`<a href="${esc(s[1])}" target="_blank" rel="noopener">${esc(s[0])}</a>`).join(' · ')}</p></details>`;
    d.render($('.ic5-body',panel))};
  const select=(i,toggle,user)=>{if(toggle&&cols()===1&&i===cur){cur=-1;cards.forEach(b=>b.classList.remove('on'));roles();place();return}
    cur=i;cards.forEach((b,k)=>b.classList.toggle('on',k===i));roles();place();draw(i);if(user&&opts.onSelect)opts.onSelect(inds[i])};
  cards.forEach((b,i)=>b.addEventListener('click',()=>select(i,true,true)));
  grid.addEventListener('keydown',e=>{if(cols()===1)return;const i=cards.indexOf(document.activeElement);if(i<0)return;
    let j=null;if(e.key==='ArrowRight'||e.key==='ArrowDown')j=(i+1)%cards.length;else if(e.key==='ArrowLeft'||e.key==='ArrowUp')j=(i-1+cards.length)%cards.length;else if(e.key==='Home')j=0;else if(e.key==='End')j=cards.length-1;
    if(j!=null){e.preventDefault();cards.forEach((b,k)=>b.tabIndex=k===j?0:-1);cards[j].focus()}});
  let rt;const onR=()=>{if(!el.isConnected){window.removeEventListener('resize',onR);return}clearTimeout(rt);rt=setTimeout(()=>{roles();place()},150)};window.addEventListener('resize',onR);
  const s0=opts.sel?Math.max(0,inds.findIndex(d=>d.id===opts.sel)):0;
  select(s0);if(opts.single){grid.hidden=true;el.classList.add('single')}return el;
}

/* ======================================================================================
   4. INSIGHT CARDS
   ====================================================================================== */
const INSICON5={
 sceptic:`<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 4.5h13v8.5h-7l-3.5 3v-3h-2.5z"/><path d="M8.2 7.4a1.9 1.9 0 1 1 2.6 1.8c-.5.2-.8.6-.8 1.1"/><circle cx="10" cy="11.6" r=".4" fill="currentColor"/></svg>`,
 unmeasured:`<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2.5 14.5h15"/><path d="M4.5 14.5v-3M8 14.5v-2M11.5 14.5v-3M15 14.5v-2" /><circle cx="10" cy="6" r="2.6" stroke-dasharray="1.6 1.8"/></svg>`,
 watch:`<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1.8 10s3-5.2 8.2-5.2 8.2 5.2 8.2 5.2-3 5.2-8.2 5.2S1.8 10 1.8 10z"/><circle cx="10" cy="10" r="2.4"/></svg>`};
function insightCards(el,linkId){
  const CL=COPY.links[linkId];if(!CL){el.innerHTML='';return el}
  const uid='in5-'+linkId,T=COPY.linkUI.cards;
  const kinds=[['sceptic',T.sceptic,CL.sceptic||[]],['unmeasured',T.unmeasured,CL.unmeasured||[]],['watch',T.watch,CL.watch||[]]];
  el.classList.add('in5wrap');
  const hedge=k=>k==='unmeasured'&&COPY.linkUI.unmeasuredTip?`<span class="cav5w"><button type="button" class="cav5 why5" aria-describedby="${uid}-tip">?</button><span class="cav5tip" role="tooltip" id="${uid}-tip">${esc(COPY.linkUI.unmeasuredTip)}</span></span>`:'';
  el.innerHTML=kinds.map(([k,t,items])=>`<section class="in5 in5-${k}" aria-labelledby="${uid}-${k}"><header>${INSICON5[k]}<h3 id="${uid}-${k}">${esc(t)}</h3>${hedge(k)}</header>
    <ul>${items.map((it,i)=>`<li><button type="button" class="in5-row" aria-expanded="false" aria-controls="${uid}-${k}-${i}"><span>${esc(it.label)}</span><i aria-hidden="true"></i></button><div class="in5-s" id="${uid}-${k}-${i}" role="region" hidden><p>${esc(it.text)}</p></div></li>`).join('')}</ul>
    </section>`).join('');
  el.addEventListener('click',e=>{const b=e.target.closest('.in5-row');if(!b)return;const open=b.getAttribute('aria-expanded')!=='true';
    b.setAttribute('aria-expanded',String(open));document.getElementById(b.getAttribute('aria-controls')).hidden=!open});
  return el;
}

/* ======================================================================================
   5. GAP MATRIX (prioritisation)
   ====================================================================================== */
/* closeness to the outcome = links between a stop and Human influence along the chain (computed, not placed) */
const EDGES5=[['capability','adoption'],['adoption','handover'],['handover','work'],['handover','skills'],['handover','culture'],['handover','institutions'],['work','share'],['share','influence'],['skills','influence'],['culture','influence'],['institutions','influence']];
const steps5=()=>{const d={influence:0},q=['influence'];while(q.length){const v=q.shift();EDGES5.forEach(([a,b])=>{if(b===v&&d[a]==null){d[a]=d[v]+1;q.push(a)}})}return d};
/* plain-language titles (17_ux_spec §3); GAPS title is the fallback */
const GAPTITLE5={'Unaided ability, tested twice':'No repeat tests of people working without AI','Take-back time':'How long skills take to recover when AI is withdrawn',
 'The override rate':'How often officials overrule AI advice is unpublished','Decisions made by AI':'No count of the decisions AI actually makes',
 'Attention-weighted AI share':'How much of what people read and watch is AI-made, by time','Who can decide':'Who holds decision power, and how much of it is AI',
 'A population measure of disempowerment':'No validated survey scale for disempowerment'};
const SHORT5={capability:'Capability',adoption:'Adoption',handover:'Hand-over',work:'Entry work',share:'Share',skills:'Skills',culture:'Culture',institutions:'Institutions',influence:'Influence'};
function gapMatrix(el,opts={}){
  const st=steps5();
  const pts=ORDER.map(id=>({id,x:lv(id),y:st[id],n:GAPS.filter(g=>g[0]===id).length}));pts.forEach(p=>p.flag=p.x<=1&&p.y<=1);
  el.classList.add('gm5wrap');
  el.innerHTML=`<div class="gm5-plot"></div>
   <div class="gm5-key"><span><svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><circle cx="13" cy="9" r="7" fill="var(--surface)" stroke="var(--ink-3)" stroke-width="2"/><text x="13" y="12.5" text-anchor="middle" class="gm5-n">2</text></svg>Number = missing measures</span>
    <span><svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><circle cx="13" cy="9" r="7.5" fill="none" stroke="var(--hs)" stroke-width="1.6"/></svg>${esc(COPY.gap.matrix.flag)}</span></div>
   <p class="gm5-cap">${esc(COPY.gap.matrix.caption)} ${esc(COPY.gap.matrix.disclosure)}</p>
   <div class="sr5"><table><caption>Stops by how well measured and closeness to the outcome</caption><thead><tr><th>Stop</th><th>How well measured</th><th>Links from Human influence</th><th>Missing measures</th></tr></thead><tbody>${pts.map(p=>`<tr><td>${esc(nameOf(p.id))}</td><td>${LEVELWORD[p.x]}</td><td>${p.y}</td><td>${p.n}</td></tr>`).join('')}</tbody></table></div>`;
  const plot=$('.gm5-plot',el);let sel=null;
  const draw=()=>{
    const W=Math.max(300,Math.floor(plot.clientWidth||900)),narrow=W<600;
    const P=narrow?{l:66,r:10,t:46,b:58}:{l:128,r:40,t:50,b:70},H=narrow?470:460,cw=(W-P.l-P.r)/5,ch=(H-P.t-P.b)/5;
    const cx=x=>P.l+(x+.5)*cw,cy=y=>P.t+(y+.5)*ch,R=narrow?10:12.5;
    let g=`<defs><pattern id="mh5" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="var(--ink)" stroke-opacity=".13" stroke-width="1.1"/></pattern></defs>`;
    /* priority corner first, so the grid sits on it */
    g+=`<rect x="${P.l}" y="${P.t}" width="${2*cw}" height="${2*ch}" fill="url(#mh5)"/><rect x="${P.l+.5}" y="${P.t+.5}" width="${2*cw-1}" height="${2*ch-1}" fill="none" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="4 3"/>`;
    g+=`<text class="gm5-pri" x="${P.l}" y="${P.t-14}">${esc(narrow?'Close to the outcome, barely measured':COPY.gap.matrix.quadrant)}</text>`;
    for(let i=0;i<=5;i++){g+=`<line x1="${P.l+i*cw}" x2="${P.l+i*cw}" y1="${P.t}" y2="${H-P.b}" stroke="var(--grid)"/><line x1="${P.l}" x2="${W-P.r}" y1="${P.t+i*ch}" y2="${P.t+i*ch}" stroke="var(--grid)"/>`}
    /* axes */
    const xl=narrow?['None','One-offs','Not tied','Limits','Well']:LINEWORD5,yl=narrow?['Outcome','1 link','2 links','3 links','4 links']:['The outcome','1 link away','2 links away','3 links away','4 links away'];
    for(let x=0;x<5;x++){const X=cx(x),Y=H-P.b+16;g+=`<g transform="translate(${X-(narrow?14:18)} ${Y-5})">${strokeFor(x,`M0 5 L${narrow?28:36} 5`,{w4:6,w3:4,bg:'var(--surface)',k:.62})}</g><text class="gm5-ax" x="${X}" y="${Y+19}" text-anchor="middle">${xl[x]}</text>`}
    g+=`<text class="gm5-at" x="${P.l+(W-P.l-P.r)/2}" y="${H-6}" text-anchor="middle">HOW WELL MEASURED TODAY →</text>`;
    for(let y=0;y<5;y++)g+=`<text class="gm5-ax" x="${P.l-10}" y="${cy(y)+4}" text-anchor="end">${yl[y]}</text>`;
    if(!narrow)g+=`<text class="gm5-at" transform="translate(16 ${P.t+(H-P.t-P.b)/2}) rotate(-90)" text-anchor="middle">LINKS FROM HUMAN INFLUENCE</text>`;
    /* dots: stops sharing a cell stack vertically */
    const cell={};pts.forEach(p=>{(cell[p.x+','+p.y]=cell[p.x+','+p.y]||[]).push(p)});
    Object.values(cell).forEach(arr=>arr.forEach((p,k)=>{p.px=cx(p.x);p.py=cy(p.y)+(arr.length>1?(k?1:-1)*ch*(narrow?.3:.3):0)}));
    pts.forEach(p=>{const l=p.x,end=p.id==='influence',on=sel===p.id;
      const ring=end?`stroke="var(--ink-2)" stroke-dasharray="3 3"`:`stroke="var(--ev${Math.max(1,l)})"`;
      const lab=narrow?`<text class="gm5-lb sm" x="${p.px}" y="${p.py+R+12}" text-anchor="middle">${SHORT5[p.id]}</text>`
        :`<text class="gm5-lb" x="${p.px+R+8}" y="${p.py+4.5}">${esc(nameOf(p.id))}</text>`;
      g+=`<g class="gm5-dot${on?' on':''}" data-id="${p.id}" tabindex="0" role="button" aria-pressed="${on}" aria-label="${esc(nameOf(p.id))}: ${LEVELWORD[l]}; ${p.y===0?'the outcome itself':p.y+(p.y===1?' link':' links')+' from Human influence'}; ${p.n} missing measures${p.flag?'; worth working on':''}.">
        ${p.flag?`<circle cx="${p.px}" cy="${p.py}" r="${R+5.5}" fill="none" stroke="var(--hs)" stroke-width="1.6"/>`:''}
        <circle class="gm5-c" cx="${p.px}" cy="${p.py}" r="${R}" fill="var(--surface)" ${ring} stroke-width="${end?1.8:3}"/>
        <text class="gm5-n" x="${p.px}" y="${p.py+4}" text-anchor="middle">${p.n}</text>${lab}
        <circle cx="${p.px}" cy="${p.py}" r="${R+12}" fill="transparent"/></g>`});
    plot.innerHTML=`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Prioritisation matrix. Across: how well each stop is measured today. Down: how close it is to Human influence. Human influence, Skills and judgement and Institutions sit in the corner that is close to the outcome and barely measured.">${g}</svg>`;
  };
  const show=id=>{sel=id;draw();if(opts.onPick)opts.onPick(id)};
  plot.addEventListener('click',e=>{const d=e.target.closest('.gm5-dot');if(d)show(d.dataset.id)});
  plot.addEventListener('keydown',e=>{const d=e.target.closest&&e.target.closest('.gm5-dot');if(d&&(e.key==='Enter'||e.key===' ')){e.preventDefault();show(d.dataset.id)}});
  draw();let rt;const onR=()=>{if(!el.isConnected){window.removeEventListener('resize',onR);return}clearTimeout(rt);rt=setTimeout(draw,150)};window.addEventListener('resize',onR);
  return el;
}

/* ======================================================================================
   7. CAVEAT SIGNPOSTS, WIP TAG, FUTURES TREATMENT
   ====================================================================================== */
const CAVICON5={
 oneoff:`<path d="M2 11h10" opacity=".45"/><circle cx="7" cy="6.5" r="2.3" fill="currentColor" stroke="none"/>`,
 cause:`<path d="M5.6 4.6H4.4a2.4 2.4 0 0 0 0 4.8h1.2"/><path d="M8.4 4.6h1.2a2.4 2.4 0 0 1 0 4.8H8.4"/><path d="M6.2 1.8l.5 1.3M7.8 12.2l-.5-1.3"/>`,
 company:`<path d="M2.2 2.2h4.6l5 5-4.6 4.6-5-5z"/><circle cx="4.9" cy="4.9" r=".95" fill="currentColor" stroke="none"/>`,
 defs:`<path d="M2 2.5v9" opacity=".45"/><path d="M4.5 5h7.5M4.5 9h4"/>`,
 unverified:`<path d="M1.5 11l3.4-3M9.4 4.2L12.5 2" opacity=".5"/><circle cx="7" cy="6" r="2.6"/>`,
 forecast:`<path d="M1.5 11.5l3.5-3 3 .6 4.5-5.6" stroke-dasharray="2 2"/>`};
const CAV5={oneoff:['One-off study','From a single study or snapshot, so it cannot show change over time.'],
 cause:['Cause disputed','The data move, but whether AI is the cause is disputed.'],
 company:['Company’s own data','Published by the company whose product is measured; nobody independent has checked it.'],
 defs:['Definitions differ','Sources define or ask this differently, so compare changes, not levels.'],
 unverified:['Unverified figure','Not yet confirmed at its source. Check before citing.'],
 forecast:['Forecast, not data','A published forecast or scenario, not an observed reading.']};
(()=>{const m={oneoff:'oneOff',cause:'cause',company:'company',defs:'definition',unverified:'unverified',forecast:'forecast'};
  Object.keys(CAV5).forEach(k=>{const c=COPY.caveats&&COPY.caveats[m[k]];if(c)CAV5[k]=[c.label,c.tooltip]})})();
const cavIcon5=t=>`<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${CAVICON5[t]}</svg>`;
let CAVN5=0;
function caveatChip(type,label){const c=CAV5[type];if(!c)return '';const id='cv5t'+(++CAVN5);
  return `<span class="cav5w"><button type="button" class="cav5" aria-describedby="${id}" data-cav="${type}">${cavIcon5(type)}<span>${esc(label||c[0])}</span></button><span class="cav5tip" role="tooltip" id="${id}">${esc(c[1])} <a href="#method">Why this matters</a></span></span>`}
let CAVINIT5=false;
function initCaveats5(){ // delegated, once per page
  if(CAVINIT5)return;CAVINIT5=true;let t=null;
  const hideAll=ex=>$$('.cav5w.open').forEach(w=>{if(w!==ex)w.classList.remove('open')});
  const show=w=>{hideAll(w);w.classList.add('open');const tip=$('.cav5tip',w),r=tip.getBoundingClientRect();tip.style.setProperty('--dx',r.right>innerWidth-8?(innerWidth-8-r.right)+'px':r.left<8?(8-r.left)+'px':'0px')};
  document.addEventListener('pointerover',e=>{const w=e.target.closest&&e.target.closest('.cav5w');if(!w||e.pointerType==='touch')return;clearTimeout(t);t=setTimeout(()=>show(w),150)});
  document.addEventListener('pointerout',e=>{const w=e.target.closest&&e.target.closest('.cav5w');if(!w||w.contains(e.relatedTarget))return;clearTimeout(t);t=setTimeout(()=>w.classList.remove('open'),120)});
  document.addEventListener('focusin',e=>{const w=e.target.closest&&e.target.closest('.cav5w');if(w)show(w);else hideAll()});
  document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('.cav5');if(b){const w=b.parentNode;w.classList.contains('open')?w.classList.remove('open'):show(w);return}if(!(e.target.closest&&e.target.closest('.cav5tip')))hideAll()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')hideAll()});
}
const wipTag5=short=>`<span class="wip5" title="Work in progress">${short?'WIP':'Work in progress'}</span>`;
function futuresCard5(el,o){
  el.classList.add('fut5');
  el.innerHTML=`<div class="fig5 wip"><div class="fig5-h"><h3>${esc(o.title)}</h3><div class="fig5-c">${caveatChip('forecast')}</div></div><div class="chart"></div>${o.note?`<p class="fig5-n">${esc(o.note)}</p>`:''}</div>`;
  o.draw($('.chart',el));return el;
}
