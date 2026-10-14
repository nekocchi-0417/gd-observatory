/* ======================================================================================
   components.js: interactive pieces shared by the pages.
   Loaded after app.js. Uses globals from charts.js (esc, ym, fmtDate, C, Charts),
   data1-3.js (LINKS, TAGS, END, linkById, GAPS, RUBRIC, DEFS), signals.js (SIGNALS),
   copy.js (COPY) and app.js ($, $$, LEVELWORD, lv, ORDER, nameOf, strokeFor).
   Each mount function renders into `el` and returns it:
     mountMap5(el,{onStop})    -> chain map, step card, legend, phone list
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
const HUMAN5=[];
const sigOf5=id=>{const s=SIG5().links[id];return s&&s.signal!=null?s.signal:'?'};
/* Draft one-liners (no numbers, 12 words or fewer). SIGNALS.links[id].short wins when the researcher supplies it. */
const ONE5={capability:'AI completes more real paid projects',adoption:'About half of US workers now use AI at work',
 handover:'Chat hand-over flat; coding agents climbing',work:'Fewer first jobs for the young; the wider market is flat',
 share:'Record low, but most of the fall predates AI',skills:'Use is surveyed often; unaided ability is rarely re-tested',
 culture:'AI fills the supply; little of it is read or heard',institutions:'Paperwork is counted; decisions rarely are',influence:'No direct measure'};
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

/* Coverage has its own rubric: study findings and measurement coverage are different judgements. */
const coverageOf5=id=>COPY.coverage.steps[id];
const coverageBand5=id=>COPY.coverage.bands[coverageOf5(id).band];
const coverageGlyph5=(band,size=16)=>{
  const c=size/2,r=c-2,color=`var(--coverage-${band})`;
  return `<svg class="coverage-glyph5" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle cx="${c}" cy="${c}" r="${r}" fill="${band==='stronger'?color:'none'}" stroke="${color}" stroke-width="2"${band==='major'?' stroke-dasharray="2.5 2.5"':''}/>${band==='partial'?`<path d="M${c} ${c-r} A${r} ${r} 0 0 0 ${c} ${c+r} Z" fill="${color}"/>`:''}</svg>`;
};
const coverageBadge5=id=>`<span class="coverage-badge5" data-coverage="${coverageOf5(id).band}">${coverageGlyph5(coverageOf5(id).band)}${esc(coverageBand5(id).label)}</span>`;
const coverageLegend5=()=>`<div class="coverage-key5" aria-label="Measurement coverage">${['major','partial','stronger'].map(b=>`<span class="coverage-key5-item" data-coverage="${b}">${coverageGlyph5(b,20)}<span><b>${esc(COPY.coverage.bands[b].label)}</b><span>${esc(COPY.coverage.bands[b].description)}</span></span></span>`).join('')}</div>`;
const coverageNote5=()=>`<p class="coverage-note5">${esc(COPY.coverage.note)} <a href="#method/coverage">How assessed</a></p>`;

/* ======================================================================================
   1. THE CHAIN MAP
   ====================================================================================== */
const GEO5={W:1200,H:470,EDGE:1028,ZX:446,CX:1066,TY:216,J:[470,216],
 S:{capability:[92,216],adoption:[236,216],handover:[380,216],work:[748,66],share:[934,66],skills:[934,166],culture:[934,266],institutions:[934,366],influence:[1124,216]}};
const SEGS5=(()=>{const {J,S,TY,CX}=GEO5,jx=J[0];
  return [{to:'capability',p:[[24,TY],S.capability]},{to:'adoption',p:[S.capability,S.adoption]},{to:'handover',p:[S.adoption,S.handover]},
   {to:'handover',stub:1,p:[S.handover,J]},
   {to:'work',p:[J,[jx,S.work[1]+40],[jx+40,S.work[1]],S.work]},{to:'share',p:[S.work,S.share]},
   {to:'skills',p:[J,[jx+50,S.skills[1]],S.skills]},{to:'culture',p:[J,[jx+50,S.culture[1]],S.culture]},
   {to:'institutions',p:[J,[jx,S.institutions[1]-40],[jx+40,S.institutions[1]],S.institutions]},
   ...['share','skills','culture','institutions'].map(f=>({to:'influence',from:f,p:[S[f],[1000,S[f][1]],[CX,TY]]})),
   {to:'influence',from:'_',p:[[CX,TY],[S.influence[0]-23,TY]]}]})();
const activeSeg5=(id,s)=>s.to===id||id==='influence'&&s.to==='influence';

/* Legacy measurement glyphs remain on the detailed research agenda. */
const vis3=l=>l>=3?3:l===2?2:1;
const CARDWORD5=['Not measured directly','Barely measured','Partly measured','Measured, with limits','Well measured'];

function mapSVG5(){
  const {W,H,EDGE,ZX,CX,TY,S}=GEO5;let g='';
  g+=`<defs><pattern id="hatch5" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="var(--ink)" stroke-opacity=".2" stroke-width="1"/></pattern></defs>`;
  g+=`<g class="zone5" aria-hidden="true"><rect x="${ZX}" y="0" width="${EDGE-ZX}" height="${H}" fill="var(--ink)" opacity=".028"/><rect x="${EDGE}" y="0" width="${W-EDGE}" height="${H}" fill="url(#hatch5)"/>
   <line x1="${EDGE}" x2="${EDGE}" y1="0" y2="${H}" stroke="var(--rule)"/>
   <text class="zl5" x="24" y="28">USE</text><text class="zl5" x="${ZX+18}" y="28">CONSEQUENCES</text><text class="zl5 halo5" x="${(EDGE+W)/2}" y="28" text-anchor="middle">OUTCOME</text></g>`;
  SEGS5.forEach(s=>{g+=`<path class="seg5" data-to="${s.to}" d="${segPath5(s)}" fill="none" stroke="var(--map-path)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"${s.from?' stroke-dasharray="5 7"':''}/>`});
  g+=`<circle class="jn5" cx="${GEO5.J[0]}" cy="${GEO5.J[1]}" r="4.5" fill="var(--map-path)"/>`;
  ORDER.forEach((id,i)=>{const [x,y]=S[id],end=id==='influence',nm=nameOf(id),ny=end?y-33:y-19,c=coverageOf5(id),band=coverageBand5(id),color=`var(--coverage-${c.band})`,r=end?22:c.band==='major'?11:9,cy=y+(end?40:27);
    g+=`<g class="st5" data-id="${id}" data-coverage="${c.band}" tabindex="0" role="button" aria-pressed="false" aria-label="${esc(nm)}. ${esc(band.label)}. Research needed: ${esc(c.need)} Step ${i+1} of ${ORDER.length}.">
      <rect class="hit" x="${x-82}" y="${ny-17}" width="164" height="${cy+27-(ny-17)}" fill="transparent"/>
      <text class="nm5${end?' halo5':''}" x="${x}" y="${ny}" text-anchor="middle">${esc(nm)}</text>
      <circle class="ring5" cx="${x}" cy="${y}" r="${r}" fill="${c.band==='stronger'?color:'var(--map-bg)'}" stroke="${color}" stroke-width="3"${c.band==='major'?' stroke-dasharray="3 3"':''}/>
      ${c.band==='partial'?`<path d="M${x} ${y-r} A${r} ${r} 0 0 0 ${x} ${y+r} Z" fill="${color}"/>`:''}
      ${end?`<text class="q5" x="${x}" y="${y+7.5}" text-anchor="middle">?</text>`:''}
      <text class="coverage-label5 halo5" x="${x}" y="${cy}" text-anchor="middle">${esc(band.short)}</text>
      ${c.band==='major'?`<text class="research-prompt5 halo5" x="${x}" y="${cy+20}" text-anchor="middle">${esc(c.prompt)}</text>`:''}</g>`});
  return `<svg viewBox="0 0 ${W} ${H}" role="group" aria-label="Proposed pathways to gradual disempowerment. Red nodes have major measurement gaps, amber nodes have partial coverage, and green nodes have stronger coverage. Skills, government decisions and human influence have major gaps. Connections show proposed pathways. Select a step for its research need.">${g}</svg>`;
}

/* phone: vertical list, one expandable row per step */
function mapList5(){
  const row=id=>{const c=coverageOf5(id);
    return `<li class="ml5" data-id="${id}" data-coverage="${c.band}"><span class="ml5-line" aria-hidden="true">${coverageGlyph5(c.band,18)}</span>
      <button type="button" class="ml5-btn" aria-expanded="false" aria-controls="mlc5-${id}"><span class="ml5-labels"><span class="ml5-name">${esc(nameOf(id))}</span><span class="ml5-coverage">${esc(coverageBand5(id).label)}</span>${c.band==='major'?`<span class="ml5-prompt">${esc(c.prompt)}</span>`:''}</span>${chev5}</button>
      <div class="ml5-card" id="mlc5-${id}"></div></li>`};
  return `<ol class="mlist5">${['capability','adoption','handover'].map(row).join('')}<li class="ml5-fork">Then four lines, side by side</li>${['work','share','skills','culture','institutions'].map(row).join('')}<li class="ml5-fork">All four lead to the outcome</li>${row('influence')}</ol>`;
}

/* the step card: what the step is, how well it is measured, and the way to its evidence */
function stepCard5(i){
  const C=COPY.home.card,id=ORDER[i],nx=ORDER[i+1],last=i===ORDER.length-1,c=coverageOf5(id);
  const nextLabel=last?C.again:`${C.next}: ${C.nextLabels[nx]||nameOf(nx)}`;
  const nextFull=last?C.again:`${C.next}: ${nameOf(nx)}`;
  return `<div class="card5-meta"><span class="card5-n">Tour step ${i+1} of ${ORDER.length}</span>${coverageBadge5(id)}</div>
    <div class="card5-name">${esc(nameOf(id))}</div>
    <div class="card5-research"><b>Research needed</b><p class="card5-what">${esc(c.need)}</p></div>
    <div class="card5-ctl"><button type="button" class="btn pri" data-t="open"><span>${esc(id==='influence'?C.openEnd:C.open)}</span>${chev5}</button>
      <span class="card5-nav">${i>0?`<button type="button" class="btn ghost" data-t="prev" aria-label="Back to ${esc(nameOf(ORDER[i-1]))}" title="Back to ${esc(nameOf(ORDER[i-1]))}">${chev5}</button>`:''}<button type="button" class="btn ghost" data-t="next" aria-label="${esc(nextFull)}" title="${esc(nextFull)}"><span>${esc(nextLabel)}</span>${chev5}</button></span></div>`;
}

function mountMap5(el,opts={}){
  const onStop=opts.onStop||(id=>{try{location.hash=id}catch(e){}});
  el.classList.add('mapcard5');
  el.innerHTML=`<div class="coverage-header5 wrap"><h2 class="h2-5 sm">${esc(COPY.coverage.title)}</h2><p class="coverage-takeaway5">${esc(COPY.coverage.takeaway)}</p>${coverageLegend5()}${coverageNote5()}</div><div class="map5 spotlight-on">${mapSVG5()}<div class="card5" aria-live="polite"></div></div>${mapList5()}`;
  const map=$('.map5',el),card=$('.card5',map),list=$('.mlist5',el);
  let sel=0,phoneOpen=true;
  const rm=()=>window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  const select=(i,o={})=>{sel=(i+ORDER.length)%ORDER.length;const id=ORDER[sel];
    $$('.st5',map).forEach(g=>{const on=g.dataset.id===id;g.classList.toggle('here',on);g.setAttribute('aria-pressed',String(on))});
    $$('.seg5',map).forEach((p,i)=>p.classList.toggle('active',activeSeg5(id,SEGS5[i])));
    card.innerHTML=stepCard5(sel);
    $$('.ml5[data-id]',list).forEach(r=>{const on=phoneOpen&&r.dataset.id===id;r.classList.toggle('open',on);$('.ml5-btn',r).setAttribute('aria-expanded',String(on));$('.ml5-card',r).innerHTML=on?stepCard5(sel):''});
    if(o.scroll){const r=$(`.ml5[data-id="${id}"]`,list);if(r&&r.offsetParent)try{r.scrollIntoView({block:'start',behavior:rm()?'auto':'smooth'})}catch(e){}}};
  el.addEventListener('click',e=>{
    const t=e.target.closest('[data-t]');
    if(t){e.preventDefault();const a=t.dataset.t,phone=!!t.closest('.mlist5');
      if(a==='open'){onStop(ORDER[sel]);return}
      phoneOpen=true;select(a==='prev'?sel-1:sel+1,{scroll:phone});return}
    const s=e.target.closest('.st5');if(s){select(ORDER.indexOf(s.dataset.id));return}
    const b=e.target.closest('.ml5-btn');if(b){const i=ORDER.indexOf(b.closest('.ml5').dataset.id);
      if(i===sel&&phoneOpen){phoneOpen=false;select(i)}else{phoneOpen=true;select(i)}}});
  el.addEventListener('keydown',e=>{const t=e.target;
    if((e.key==='Enter'||e.key===' ')&&t.matches&&t.matches('.st5')){e.preventDefault();select(ORDER.indexOf(t.dataset.id))}
    else if((e.key==='ArrowRight'||e.key==='ArrowLeft')&&t.closest&&t.closest('.map5')){e.preventDefault();select(sel+(e.key==='ArrowRight'?1:-1));
      const g=$(`.st5[data-id="${ORDER[sel]}"]`,map);if(g&&t.matches('.st5'))g.focus()}});
  select(ORDER.indexOf('skills'));
  return el;
}

/* ======================================================================================
   2. EVIDENCE OVERVIEW ROWS
   ====================================================================================== */
function priorityIndicatorIds5(id){
  const p=SELECTED_EVIDENCE&&SELECTED_EVIDENCE[id];if(!p)return [];
  return [...new Set(p.sources.flatMap(s=>s.legacy||[]))];
}
function priorityIndicators5(id){
  const ids=priorityIndicatorIds5(id);
  const pool=id==='influence'?LINKS.flatMap(l=>l.inds.filter(d=>d.recRow==='influence')):((linkById(id)||{}).inds||[]);
  return ids.map(x=>pool.find(d=>d.id===x)).filter(Boolean);
}
function evidenceRows(el){
  const rows=ORDER.map(id=>{const c=coverageOf5(id);
    const d=priorityIndicators5(id)[0],t=d&&(SIG5().indicators[d.id]||{}),spark=d?sparkSVG5(d,t.trend||'Not rated',96,34):'';
    return `<a class="er5" data-coverage="${c.band}" href="#${id}" style="--band:var(--coverage-${c.band})" aria-label="${esc(nameOf(id))}. ${esc(coverageBand5(id).label)}. ${esc(oneLiner5(id))}">
      <span class="er5-nm">${esc(nameOf(id))}</span>
      <span class="er5-coverage">${coverageBadge5(id)}</span>
      <span class="er5-chart" aria-hidden="true">${spark}</span>
      <span class="er5-one">${esc(oneLiner5(id))}</span>${chev5}</a>`}).join('');
  el.innerHTML=coverageLegend5()+coverageNote5()+`<div class="er5-head" aria-hidden="true"><span>Step</span><span>Measurement coverage</span><span>Chart</span><span>What the studies show</span></div><div class="er5-list">${rows}</div>`;return el;
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
const FLAGCAV5=[['one-off','oneoff'],['cause','cause'],['vendor','company'],['definition','defs'],['break','defs'],['weak-source','unverified'],['stale','stale'],['policy-driven','policy'],['advocacy-source','advocacy']];
function indicatorCards(el,linkId,opts={}){
  const L=linkId==='influence'?null:linkById(linkId),inds=opts.inds||L.inds,SI=SIG5().indicators,uid='ic5-'+linkId;
  el.classList.add('ic5wrap');
  const TW={toward:'Moving toward the concern',away:'Moving away from the concern',unclear:'Direction unclear'};
  const TOP=3,canFold=!opts.single&&inds.length>TOP+1;
  el.innerHTML=`<div class="ic5-grid${inds.length<3?' few':''}" role="tablist" aria-label="Indicators: ${esc(nameOf(linkId))}">${inds.map((d,i)=>{const t=SI[d.id]||{},tr=t.trend||'Not rated';
     return `<button class="ic5" type="button" role="tab" id="${uid}-${d.id}" data-i="${i}" aria-selected="false" aria-controls="${uid}-panel" tabindex="${i?-1:0}"${canFold&&i>=TOP?' hidden':''}>
      <span class="ic5-top">${sparkSVG5(d,tr)}</span>
      <span class="ic5-lab">${esc(indLabel5(d))}</span><span class="ic5-tr">${esc(tr)}</span>${chev5}</button>`}).join('')}</div>${canFold?`<button type="button" class="btn ghost ic5-all" aria-expanded="false">Show all ${inds.length} indicators</button>`:''}`;
  const grid=$('.ic5-grid',el),cards=$$('.ic5',grid),panel=document.createElement('div'),allBtn=$('.ic5-all',el);
  panel.className='ic5-panel';panel.id=uid+'-panel';panel.setAttribute('role','tabpanel');panel.tabIndex=-1;
  let cur=-1,folded=canFold;
  const vis=()=>cards.filter(b=>!b.hidden);
  const unfold=()=>{if(!folded)return;folded=false;cards.forEach(b=>b.hidden=false);if(allBtn){allBtn.hidden=true;allBtn.setAttribute('aria-expanded','true')}};
  const cols=()=>getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length||1;
  const place=()=>{if(cur<0){panel.remove();return}if(opts.single){grid.after(panel);return}const v=vis(),k=v.indexOf(cards[cur]),c=cols(),end=Math.min(v.length-1,Math.floor(k/c)*c+c-1);v[end].after(panel);
    const b=cards[cur].getBoundingClientRect(),g=grid.getBoundingClientRect();panel.style.setProperty('--nx',(b.left-g.left+b.width/2)+'px')};
  const roles=()=>{const phone=cols()===1;grid.setAttribute('role',phone?'list':'tablist');
    cards.forEach((b,i)=>{if(phone){b.removeAttribute('role');b.removeAttribute('aria-selected');b.setAttribute('aria-expanded',String(i===cur));b.tabIndex=0}
      else{b.setAttribute('role','tab');b.removeAttribute('aria-expanded');b.setAttribute('aria-selected',String(i===cur));b.tabIndex=(i===Math.max(cur,0))?0:-1}});
    panel.setAttribute('role',phone?'region':'tabpanel')};
  const draw=i=>{const d=inds[i],t=SI[d.id]||{},fl=(t.flags||[]);
    const cav=(FLAGCAV5.find(([f,c])=>fl.includes(f)&&!(c==='company'&&d.tag==='company'))||[])[1];
    const ic=indCopy5(d);
    const srcIntro=d.src.length>1?'Sources combined':'Source';
    const srcWhy=d.src.length>1?'This dashboard combines readings or context from multiple sources listed here. Compare levels only when the definitions match; point notes and the data table show source-specific caveats.':'This dashboard uses the source listed here. Check the original before citing the plotted value.';
    panel.setAttribute('aria-labelledby',cards[i].id);
    panel.innerHTML=`<div class="ic5-ph"><h3>${esc(d.title)}</h3><div class="ic5-chips">${t.toward&&t.trend!=='One-off'?`<span class="ic5-dir">${TW[t.toward]}</span>`:''}<span class="chip">${esc(TAGS[d.tag])}</span>${cav?caveatChip(cav):''}</div></div>
      ${d.sub?`<p class="ic5-sub">${esc(d.sub)}</p>`:''}
      <div class="ic5-sourcebar"><b>${esc(srcIntro)}</b><span>${esc(srcWhy)}</span><p>${d.src.map(s=>`<a href="${esc(s[1])}" target="_blank" rel="noopener">${esc(s[0])}</a>`).join(' · ')}</p></div>
      <div class="ic5-body"></div>
      <details class="ic5-more"><summary>${esc(COPY.linkUI.readingIt)}</summary><p class="ic5-read">${esc(d.read)}</p>
      <p class="ic5-src">${d.src.map(s=>`<a href="${esc(s[1])}" target="_blank" rel="noopener">${esc(s[0])}</a>`).join(' · ')}</p></details>`;
    d.render($('.ic5-body',panel))};
  const select=(i,toggle,user)=>{if(toggle&&cols()===1&&i===cur){cur=-1;cards.forEach(b=>b.classList.remove('on'));roles();place();return}
    if(cards[i].hidden)unfold();cur=i;cards.forEach((b,k)=>b.classList.toggle('on',k===i));roles();place();draw(i);if(user&&opts.onSelect)opts.onSelect(inds[i])};
  cards.forEach((b,i)=>b.addEventListener('click',()=>select(i,true,true)));
  if(allBtn)allBtn.addEventListener('click',()=>{unfold();roles();place()});
  grid.addEventListener('keydown',e=>{if(cols()===1)return;const v=vis(),i=v.indexOf(document.activeElement);if(i<0)return;
    let j=null;if(e.key==='ArrowRight'||e.key==='ArrowDown')j=(i+1)%v.length;else if(e.key==='ArrowLeft'||e.key==='ArrowUp')j=(i-1+v.length)%v.length;else if(e.key==='Home')j=0;else if(e.key==='End')j=v.length-1;
    if(j!=null){e.preventDefault();v.forEach((b,k)=>b.tabIndex=k===j?0:-1);v[j].focus()}});
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
  const T=COPY.linkUI.cards,B=COPY.linkUI.brief,tip=COPY.linkUI.unmeasuredTip;
  const kinds=[['sceptic',B.caveats,T.sceptic,CL.sceptic||[]],['unmeasured',B.blind,T.unmeasured,CL.unmeasured||[]],['watch',B.signals,T.watch,CL.watch||[]]];
  el.classList.add('br5wrap');
  el.innerHTML=kinds.filter(k=>k[3].length).map(([k,lab,t,items])=>`<details class="br5 br5-${k}"><summary><span class="lab5"><span>${esc(lab)}</span></span><span class="br5-t">${INSICON5[k]}${esc(t)}</span><span class="br5-n">${items.length}</span><i aria-hidden="true"></i></summary>
    <ul class="br5-l">${items.map(it=>`<li><b>${esc(it.label)}</b><p>${esc(it.text)}</p></li>`).join('')}</ul>
    ${k==='unmeasured'?`<p class="br5-f">${tip?esc(tip)+' ':''}<a class="go" href="${esc(B.proposeUrl)}" target="_blank" rel="noopener">${esc(B.propose)} ↗</a></p>`:''}</details>`).join('');
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
 forecast:`<path d="M1.5 11.5l3.5-3 3 .6 4.5-5.6" stroke-dasharray="2 2"/>`,
 stale:`<circle cx="7" cy="7" r="5.2"/><path d="M7 4.2V7l2.1 1.5"/>`,
 policy:`<path d="M2 12h10M3 10.3h8M7 1.8L2.2 4.6h9.6z"/><path d="M4.2 5.6v4.2M7 5.6v4.2M9.8 5.6v4.2"/>`,
 advocacy:`<path d="M2.4 5.6v2.8h2.1l4.6 2.8V2.8L4.5 5.6z"/><path d="M11 5.2a2.4 2.4 0 0 1 0 3.6"/>`};
const CAV5={oneoff:['One-off study','From a single study or snapshot, so it cannot show change over time.'],
 cause:['Cause disputed','The data move, but whether AI is the cause is disputed.'],
 company:['Company’s own data','Published by the company whose product is measured; nobody independent has checked it.'],
 defs:['Definitions differ','Sources define or ask this differently, so compare changes, not levels.'],
 unverified:['Unverified figure','Not yet confirmed at its source. Check before citing.'],
 forecast:['Forecast, not data','A published forecast or scenario, not an observed reading.'],
 stale:['Not updated','The source has stopped updating this series, or has published no new reading for some time.'],
 policy:['Policy-driven','The latest change follows a change in law or policy, not AI.'],
 advocacy:['Advocacy source','Compiled by an advocacy group from public records. Check its method before citing.']};
(()=>{const m={oneoff:'oneOff',cause:'cause',company:'company',defs:'definition',unverified:'unverified',forecast:'forecast',stale:'stale',policy:'policy',advocacy:'advocacy'};
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
