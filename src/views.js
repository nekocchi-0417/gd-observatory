/* ======================================================================================
   views.js: the pages. One message per page; detail one click deeper.
   Map (home) · Evidence (with the measurement record) · link pages · Human influence · The gap · Futures · Method
   ====================================================================================== */
const draftChip5=()=>`<span class="cav5w"><button type="button" class="cav5 draft5" aria-describedby="drtip">${esc(COPY.draftChip.label)}</button><span class="cav5tip" role="tooltip" id="drtip">${esc(COPY.draftChip.tooltip)} <a href="#method">Method</a></span></span>`;
const eye5=(parts,extra='')=>`<div class="eye5">${parts.map(p=>`<span>${p}</span>`).join('<i aria-hidden="true">·</i>')}${extra}${draftChip5()}</div>`;
const stripArrow5=t=>String(t).replace(/\s*→\s*$/,'');
const lab5=(parts)=>`<div class="lab5">${parts.map(p=>`<span>${esc(p)}</span>`).join('<i aria-hidden="true">·</i>')}</div>`;
const verify5=()=>`<div class="verify5"><b>Draft source status</b><span>Check sources before citing. Headline figures are being verified for v1.0.</span><a class="go" href="https://github.com/nekocchi-0417/gd-observatory/blob/main/research/checklist/handcheck.csv" target="_blank" rel="noopener">Verification checklist ↗</a></div>`;
/* the confidence block: the two ratings, each with its one-line reason */
const conf5=id=>{const s=sigOf5(id),l=lv(id),S=SIGNALS.links[id]||{},B=COPY.linkUI.brief,why=id==='influence'?END.headline:linkById(id).levelWhy;
  return `<section class="conf5" aria-label="${esc(B.confidence)}">${lab5([B.confidence])}<dl class="conf5-g">
    <div><dt>${esc(COPY.linkUI.pillSignal)}</dt><dd class="r">${sigDot5(s)}<b>${SIGWORD5[s]}</b></dd>${S.basis?`<dd class="w">${esc(S.basis)}</dd>`:''}</div>
    <div><dt>${esc(COPY.linkUI.pillMeasure)}</dt><dd class="r">${lineGlyph5(l,40,12)}<b>${LEVELWORD[l]}</b></dd>${why?`<dd class="w">${esc(why)}</dd>`:''}</div></dl></section>`};
/* the chain as horizontal tabs along the top of each evidence page; the bar under each name repeats its line style */
const crumbs5=id=>`<nav class="crumbs" aria-label="Links in the chain">${LINKS.map(l=>`<a href="#${l.id}" data-l="${l.level}" ${l.id===id?'aria-current="page"':''}><span class="ln"></span>${l.n} ${esc(l.name)}</a>`).join('')}<a href="#influence" data-l="0" ${id==='influence'?'aria-current="page"':''}><span class="ln"></span>${esc(END.name)}</a></nav>`;
const crumbScroll5=v=>{const c=$('.crumbs [aria-current]',v);if(c)try{c.parentNode.scrollLeft=c.offsetLeft-40}catch(e){}};
const pn5=(prev,next)=>`<nav class="pn5" aria-label="Previous and next">${prev?`<a href="#${prev[0]}"><span class="lab">← ${esc(prev[2]||'Previous link')}</span><b>${esc(prev[1])}</b></a>`:'<span></span>'}${next?`<a class="nx" href="#${next[0]}"><span class="lab">${esc(next[2]||'Next link')} →</span><b>${esc(next[1])}</b></a>`:''}</nav>`;
const wireAcc5=root=>{root.addEventListener('click',e=>{const b=e.target.closest('.acc5-b');if(!b||!root.contains(b))return;const o=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(o));document.getElementById(b.getAttribute('aria-controls')).hidden=!o})};

/* ----- home ----- */
function viewMap(v){
  const H=COPY.home,P=H.purpose,S=H.snapshot,G=H.gaps3,C=H.cta;
  v.innerHTML=`<div class="home5">
   <section class="wrap hero5"><div class="hero5-g top5"><div>${eye5([esc(H.eyebrow)])}
    <h1 class="h1-5 xl purpose5-h">${esc(P.h1)}</h1></div>
    <p class="lead5 purpose5">${esc(P.sub)} <a class="go" href="${esc(H.paper.url)}" target="_blank" rel="noopener" aria-label="Read more: the original Gradual Disempowerment paper (opens in a new tab)">${esc(H.paper.label)} ↗</a></p></div></section>
   <section class="wrap sec2h5"><div class="snapshot5"><div><h2 class="h1-5">${esc(S.h2)}</h2><p class="sub5 big">${esc(S.sub)}</p></div>
    <ol class="snapshot5-l">${S.items.map(x=>`<li><span>${esc(x.k)}</span><b>${esc(x.t)}</b><p>${esc(x.text)}</p></li>`).join('')}</ol></div></section>
   <div id="homeMap"></div>
   <section class="wrap gaps5"><div class="h2row5"><div><h2 class="h2-5">${esc(G.h2)}</h2><p class="sub5">${esc(G.sub)}</p></div><a class="go" href="#gaps">${esc(G.all.replace('{n}',GAPS.length))} →</a></div>
    <ol class="gaps5-l">${G.items.map((g,i)=>`<li><span class="gaps5-n">${i+1}</span><div><a class="gaps5-t" href="#gaps/${g.id}">${esc(g.t)}</a><p>${esc(g.text)}</p>${g.note?`<p class="gaps5-note">${esc(g.note)}</p>`:''}</div></li>`).join('')}</ol></section>
   <section class="wrap cta5"><h2 class="h2-5">${esc(C.h2)}</h2><p class="sub5">Add a better indicator, fund a missing measure, or challenge a rating before this becomes a v1.0 public resource.</p>
    <p class="cta5-links">${C.buttons.map(b=>`<a class="go" href="#${esc(b.to)}">${esc(b.t)} →</a>`).join('')}<a class="go" href="#contribute">${esc(C.why)} →</a></p></section>
  </div>`;
  mountMap5($('#homeMap',v),{onStop:id=>go(id)});
}

/* ----- why this project ----- */
function viewWhy(v){
  const W=COPY.why,ext=(t,u)=>`<a class="btn" href="${esc(u)}" target="_blank" rel="noopener">${esc(t)} ↗</a>`;
  v.innerHTML=`<div class="view5 wrap why5">${eye5([esc(W.nav)])}
   <h1 class="h1-5">${esc(W.h1)}</h1><p class="lead5">${esc(W.lead)}</p>
   <section class="sec5" id="w-plan"><h2 class="h2-5 sm">${esc(W.plan.h2)}</h2>
    <ol class="plan5">${W.plan.steps.map((s,i)=>`<li><span class="plan5-n">${i+1}</span><div><b>${s.to?`<a href="#${s.to}">${esc(s.t)}</a>`:esc(s.t)}</b><span>${esc(s.text)}${s.links?' '+s.links.map(l=>`<a href="${esc(l[1])}" target="_blank" rel="noopener">${esc(l[0])}</a>`).join(' and ')+'.':''}</span></div></li>`).join('')}</ol>
    <p class="aim5">${esc(W.plan.aim)}</p></section>
   <section class="sec5 act5" id="w-add"><h2 class="h2-5 sm">${esc(W.contribute.h2)}</h2><p class="sub5">${esc(W.contribute.text)}</p>
    <div class="btns5">${W.contribute.buttons.map(b=>ext(b[0],b[1])).join('')}</div><p class="note5">${esc(W.contribute.note)}</p></section>
   <section class="sec5 act5" id="w-funding"><h2 class="h2-5 sm">${esc(W.funding.h2)}</h2><p class="sub5">${esc(W.funding.text)}</p>
    <ul class="grants5">${W.funding.grants.map(g=>`<li><div class="grants5-h"><a href="${esc(g.url)}" target="_blank" rel="noopener">${esc(g.name)} ↗</a><span class="acc5-c${/^Closes/.test(g.status)?' due5':''}">${esc(g.status)}</span></div><span>${esc(g.fit)}</span></li>`).join('')}</ul>
    <p class="note5">${esc(W.funding.note)} <a class="go" href="#gaps">${esc(W.funding.gapsLink)} →</a></p></section>
   <section class="sec5 act5" id="w-authors"><h2 class="h2-5 sm">${esc(W.authors.h2)}</h2><p class="sub5">${esc(W.authors.text)}</p>
    <div class="btns5">${W.authors.buttons.map(b=>b[1].startsWith('#')?`<a class="btn" href="${esc(b[1])}">${esc(b[0])} →</a>`:ext(b[0],b[1])).join('')}</div></section>
  </div>`;
}

/* ----- evidence overview ----- */
function viewIndex(v){
  const E=COPY.evidence;
  v.innerHTML=`<div class="view5 wrap">${eye5(['Evidence'])}
   <h1 class="h1-5">${esc(E.title)}</h1><p class="lead5">${esc(E.deck)}</p>
   ${verify5()}
   <div class="sec5 s1" id="erows"></div>
   <div class="foot5"><a class="go" href="#gaps">${esc(E.footer.toGap)}</a><span class="note5 inl5">${esc(E.coverage.cta)} <a class="go" href="${esc(COPY.linkUI.brief.proposeUrl)}" target="_blank" rel="noopener">${esc(E.coverage.ctaLink)} ↗</a></span></div>
   <section class="sec5"><details class="det5" id="record"><summary>${esc(E.coverage.title)}</summary><p class="sub5">${esc(COPY.record.intro)} ${esc(COPY.record.instruction)}</p>
    <div class="chart s1" id="rec"></div><p class="note5">Marks show how often a series is published, not how strong it is. The split into blue and grey is the observatory's judgement.</p></details></section>
   <details class="ctr5"><summary>${esc(stripArrow5(E.footer.counter))}</summary><p>${esc(E.counter.intro)}</p>
    <ol>${E.counter.items.map(c=>`<li><b>${esc(c.label)}</b><span>${esc(c.text)}</span></li>`).join('')}</ol></details></div>`;
  evidenceRows($('#erows',v));
  const rec=$('#record',v);let drawn=false;
  rec.addEventListener('toggle',()=>{if(rec.open&&!drawn){drawn=true;drawRecord($('#rec',v))}else if(rec.open)window.dispatchEvent(new Event('resize'))});
}

/* ----- one link ----- */
function viewLink(v,id){
  const L=linkById(id),CL=COPY.links[id],B=COPY.linkUI.brief,i=LINKS.indexOf(L),prev=LINKS[i-1],next=LINKS[i+1];
  v.innerHTML=`<div class="view5 wrap brief5">
   ${crumbs5(id)}
   <div class="claim5">${eye5([esc(B.bottom),`Link ${L.n} of ${LINKS.length}`,esc(L.name)])}<h1 class="h1-5 c">${esc(CL.h1)}</h1><p class="lead5">${esc(CL.sentence)}</p></div>
   ${verify5()}
   ${conf5(id)}
   <section class="sec5 ev5">${lab5([B.evidence,B.indicators.replace('{n}',L.inds.length)])}<p class="sub5">${esc(COPY.linkUI.instruction)}</p><div id="cards" class="s1"></div></section>
   <section class="sec5"><div id="ins"></div></section>
   ${pn5(prev?[prev.id,prev.name]:['evidence','All links','Back to'],next?[next.id,next.name]:['influence',END.name,'End of the chain'])}</div>`;
  indicatorCards($('#cards',v),id,{sel:picked[id],onSelect:d=>{picked[id]=d.id;current=id+'/'+d.id;try{history.replaceState(null,'','#'+current)}catch(e){}}});
  insightCards($('#ins',v),id);crumbScroll5(v);
}

/* ----- the end of the chain ----- */
function viewInfluence(v){
  const CL=COPY.links.influence,B=COPY.linkUI.brief,inds=LINKS.flatMap(L=>L.inds.filter(d=>d.recRow==='influence')),last=LINKS[LINKS.length-1];
  v.innerHTML=`<div class="view5 wrap brief5">
   ${crumbs5('influence')}
   <div class="claim5">${eye5([esc(B.bottom),'End of the chain',esc(END.name)])}<h1 class="h1-5 c">${esc(CL.h1)}</h1><p class="lead5">${esc(CL.sentence)}</p></div>
   ${verify5()}
   ${conf5('influence')}
   <section class="sec5 ev5">${lab5([B.evidence,inds.length===1?'Nearest measure':B.indicators.replace('{n}',inds.length)])}<div id="cards" class="s1"></div></section>
   <section class="sec5"><div id="ins"></div></section>
   ${pn5([last.id,last.name],['gaps','The measurement agenda','What is missing'])}</div>`;
  indicatorCards($('#cards',v),'influence',{inds,single:inds.length===1});
  insightCards($('#ins',v),'influence');crumbScroll5(v);
}

/* ----- the measurement record lives on the Evidence page ----- */
function viewRecord(v){viewIndex(v);const r=$('#record',v);if(r){r.open=true;setTimeout(()=>r.scrollIntoView({block:'start'}),60)}}

/* ----- the gap ----- */
function viewGaps(v){
  const G=COPY.gap,st=steps5(),PR=G.priority,CT=G.cta;
  const items=G.items.slice().sort((a,b)=>st[a.link]-st[b.link]||lv(a.link)-lv(b.link));
  const seen={};
  const ctas=x=>{const k=GAPPRI[x.i]||'later',list=k==='now'?[CT.fund,CT.study]:k==='method'?[CT.study,CT.review]:[CT.ind];
    return list.map(c=>`<a class="go" href="${esc(c[1]+encodeURIComponent((x.old||x.title).slice(0,80)))}" target="_blank" rel="noopener">${esc(c[0])} ↗</a>`).join('')};
  const row=x=>{const first=!seen[x.link];seen[x.link]=1;
    return `<div class="acc5-i gap5-i" id="gi-${x.i}" data-link="${x.link}"${first?` data-sub="gaps/${x.link}"`:''}><button type="button" class="acc5-b" aria-expanded="false" aria-controls="gp${x.i}"><span class="acc5-t">${esc(x.title)}</span><span class="acc5-m"><span class="gap5-step">${lineGlyph5(lv(x.link),26,10)}${esc(nameOf(x.link))}</span></span><i aria-hidden="true"></i></button>
      <div class="acc5-p" id="gp${x.i}" hidden><dl><div><dt>${esc(G.list.heads.why)}</dt><dd>${esc(x.why)}</dd></div><div><dt>${esc(G.list.heads.what)}</dt><dd>${esc(x.what)}</dd></div><div><dt>${esc(G.list.heads.closest)}</dt><dd><span class="acc5-c">${esc(x.chip)}</span> ${esc(x.closest)}</dd></div></dl>
       <p class="gap5-cta">${ctas(x)}<a class="go" href="#${x.link}">${esc(G.list.open.replace('{link}',nameOf(x.link)))}</a></p></div></div>`};
  const group=k=>{const xs=items.filter(x=>(GAPPRI[x.i]||'later')===k);if(!xs.length)return '';
    const body=`<div class="accg5-h gap5-h"><span class="pri5 pri5-${k}">${esc(PR[k].t)}</span><span class="gap5-n">${xs.length}</span><span class="gap5-d">${esc(PR[k].d)}</span></div>${xs.map(row).join('')}`;
    return k==='later'?`<details class="more5 gap5-g" id="gg-${k}"><summary>${esc(PR[k].t)} · ${xs.length} measures, further from the outcome</summary>${body}</details>`:`<div class="accg5 gap5-g" id="gg-${k}">${body}</div>`};
  v.innerHTML=`<div class="view5 wrap">${eye5([esc(G.eyebrow)])}
   <h1 class="h1-5">${esc(G.h1)}</h1><p class="lead5">${esc(G.sentence)}</p>
   <section class="sec5"><div class="h2row5"><div><h2 class="h2-5">${esc(G.list.title)}</h2><p class="sub5">${esc(G.list.sub)} ${esc(COPY.ui.instructions.gaps)}</p></div><button type="button" class="btn ghost" id="expAll">${esc(G.list.expandAll)}</button></div>
    <div class="acc5" id="gacc">${['now','method','later'].map(group).join('')}</div></section>
   <section class="sec5"><details class="det5" id="gg-matrix"><summary>${esc(G.ranking.title)}</summary><p class="sub5">${esc(G.ranking.sub)}</p>
    <ol class="hops5" aria-label="Links from Human influence along the chain">${[[4,['capability']],[3,['adoption']],[2,['handover','work']],[1,['share','skills','culture','institutions']],[0,['influence']]].map(([k,ids])=>`<li><span class="hops5-n">${k}</span><span>${ids.map(x=>esc(nameOf(x))).join(', ')}</span></li>`).join('')}</ol>
    <div id="gm" class="s1"></div></details></section></div>`;
  gapMatrix($('#gm',v),{onPick:id=>{const t=$(`.gap5-i[data-link="${id}"]`,v);if(t)openAt5(t)}});
  $('#gg-matrix',v).addEventListener('toggle',()=>window.dispatchEvent(new Event('resize')));
  const acc=$('#gacc',v);wireAcc5(acc);
  $('#expAll',v).addEventListener('click',e=>{const b=e.currentTarget,open=b.dataset.open!=='1';b.dataset.open=open?'1':'';b.textContent=open?G.list.collapseAll:G.list.expandAll;
    if(open){const d=$('details.more5',acc);if(d)d.open=true}
    $$('.acc5-b',acc).forEach(x=>{x.setAttribute('aria-expanded',String(open));document.getElementById(x.getAttribute('aria-controls')).hidden=!open})});
}

/* ----- futures (work in progress) ----- */
function viewFutures(v){
  const F=COPY.futures;
  v.innerHTML=`<div class="view5 wrap fut5p">${eye5(['Futures'])}
   <h1 class="h1-5">${esc(F.title)}</h1>
   <div class="wipban5"><span>${esc(F.caveat)}</span></div>
   <section class="sec5"><div id="fanc"></div></section>
   <section class="sec5"><h2 class="h2-5">Five routes the chain could take</h2><p class="sub5">${esc(F.blocks.routes)} ${esc(COPY.ui.instructions.routes)}</p>
    <div class="routes s1" role="group" aria-label="Route">${ROUTES.map(r=>`<button class="route" data-route="${r.id}" aria-pressed="${r.id===routeSel}"><span class="rn">ROUTE ${r.id}</span><span class="rt">${esc(r.name)}</span><span class="rd">${esc(F.routeDesc[r.id]||r.desc)}</span></button>`).join('')}</div>
    <div class="routebody" id="routebody"></div><p class="note5">${esc(F.routesNote)}</p></section>
   <section class="sec5"><h2 class="h2-5">How far to trust these forecasts</h2><p class="sub5">${esc(F.blocks.trust)}</p>
    <div class="acc5 plain s1" id="tacc">${TRACK.map((t,i)=>`<div class="acc5-i"><button type="button" class="acc5-b" aria-expanded="false" aria-controls="tr${i}"><span class="acc5-t">${esc(t[0])}</span><i aria-hidden="true"></i></button><div class="acc5-p" id="tr${i}" hidden><p>${esc(t[1])}</p></div></div>`).join('')}</div></section>
   <section class="sec5"><h2 class="h2-5">More forecasts</h2><p class="sub5">${esc(F.blocks.more)}</p>
    <div class="doors5 three s1">${F.moreCards.map(c=>`<a class="door5 wip" href="#futures/more"><b>${esc(c.title)}</b><span>${esc(c.line)}</span>${chev5}</a>`).join('')}</div></section>
   <p class="note5 sec5 s1"><a class="go" href="#gaps">${esc(F.toGap)}</a></p></div>`;
  futuresCard5($('#fanc',v),{title:"Workers' share of US business income: observed so far, and economists' forecasts",
    note:"Change in percentage points from each source's own baseline. Blue is observed; orange is forecast. Over the last four quarters the share averaged 0.9 points below 2025 (latest quarter −1.8); economists' moderate-progress forecast is −1.5 by 2030. Sources: BLS; Karger, Tetlock et al. (2026); LEAP; Anthropic (Sep 2026).",draw:el=>fanChart(el,false)});
  drawRoute(v);wireAcc5($('#tacc',v));
  $$('[data-route]',v).forEach(b=>b.addEventListener('click',()=>{routeSel=b.dataset.route;$$('[data-route]',v).forEach(x=>x.setAttribute('aria-pressed',x===b));drawRoute(v)}));
}
function viewFuturesMore(v){
  v.innerHTML=`<div class="view5 wrap fut5p">
   <nav class="crumb5" aria-label="Breadcrumb"><a href="#futures">Futures</a><span aria-hidden="true">›</span><span>More forecasts</span></nav>
   ${eye5(['Futures'])}<h1 class="h1-5">More forecasts</h1>
   <div class="wipban5"><span>${esc(COPY.futures.caveat)}</span></div>
   <section class="sec5"><h2 class="h2-5">Three AI-progress scenarios</h2><p class="sub5">Forecasters were asked how likely three descriptions of AI in 2030 are, and what the US economy looks like in each. Choose one.</p>
    <div class="worldbar s1"><div class="seg3" role="group" aria-label="AI progress scenario">${Object.entries(WORLDS).map(([k,w])=>`<button data-world="${k}" aria-pressed="${k===world}"><i style="background:${w.color}"></i>${esc(w.name)}</button>`).join('')}</div>
    <p class="worlddef" id="worlddef"></p></div><div class="mults" id="mults"></div>
    <p class="note5">Medians of 60 to 69 economists (Karger, Tetlock et al., NBER w35046). Most figures have no published uncertainty range.</p>
    <div class="fig5 wip"><div class="fig5-h"><h3>Forecasters give rapid AI progress by 2030 a 13 to 23% chance</h3><div class="fig5-c">${caveatChip('forecast')}</div></div><div class="chart" id="odds"></div></div></section>
   <section class="sec5"><h2 class="h2-5">Jobs and catastrophic-risk estimates</h2>
    <div class="split s1"><div class="fig5 wip"><div class="fig5-h"><h3>Survey forecasts of unemployment stay in single digits, except for graduates</h3></div><div class="chart" id="unemp"></div><p class="fig5-n">The AI-expert figure is an unverified extraction.</p></div>
     <div class="fig5 wip"><div class="fig5-h"><h3>Experts put the risk of catastrophic harm from AI-driven power centralisation by 2030 at 18%</h3></div><div class="chart" id="delphi"></div><p class="fig5-n">"Catastrophic" includes any loss above $100bn. Bands are 95% intervals. MIT AI Risk Initiative Delphi study.</p></div></div></section>
   <p class="note5 sec5 s1 srcline">Sources: ${FUT_SRC.map(s=>`<a href="${esc(s[1])}" target="_blank" rel="noopener">${esc(s[0])}</a>`).join('; ')}.</p></div>`;
  drawOdds(v);drawWorld(v);
  Charts.bars($('#unemp',v),{aria:'Unemployment: 4.2% now; economists forecast 5% for 2030 and 6% with rapid AI; AI experts 8% for 2050 with rapid AI; Amodei said 10 to 20%. Recent graduates: 5.6% now; Metaculus expects 10% by 2030.',min:0,max:22,ticks:[0,5,10,15,20],fmt:x=>x+'%',valLabel:'Unemployment rate',
    rows:[{head:'All workers'},{label:'Observed, September 2026',value:4.2,color:C.s1},{label:"Economists, 2030: central view",value:5.0,color:C.p2},{label:'Economists, 2030 and 2050: rapid AI progress',value:6.0,color:C.p3},{label:'AI experts, 2050: rapid AI progress (unverified)',value:8.0,color:C.p3,hollow:true,note:'Unverified extraction: check the paper before citing'},{label:'Dario Amodei, May 2025: "within one to five years"',from:10,value:20,vlabel:'10–20%',color:C.p3,hollow:true,note:'An individual claim, not a survey forecast'},
     {head:'Recent graduates only'},{label:'Observed, Q2 2026 (New York Fed, ages 22 to 27)',value:5.6,color:C.s1},{label:'Metaculus forecasters, 2030',value:10,color:C.p2}]});
  Charts.dumbbell($('#delphi',v),{aria:'MIT Delphi study: probability of catastrophic harm by risk, business as usual against with mitigations',min:0,max:30,ticks:[0,10,20,30],fmt:x=>x+'%',names:['Business as usual','With pragmatic mitigations'],short:['AS USUAL','MITIGATED'],colors:[C.p3,C.p1],band:C.p1,
    rows:[{label:'Dangerous capabilities',a:21.5,lo:16.9,hi:26.4,b:12},{label:'Weapons and cyberattacks',a:21.0,lo:15.1,hi:27.5,b:12},{label:'Power centralisation',a:18.0,lo:12.1,hi:24.8,b:11},{label:'Competitive dynamics',a:16.6,lo:12.0,hi:21.6,b:7},{label:'False information',a:12.8,lo:8.9,hi:18.1,b:null}]});
  $$('[data-world]',v).forEach(b=>b.addEventListener('click',()=>{world=b.dataset.world;$$('[data-world]',v).forEach(x=>x.setAttribute('aria-pressed',x===b));drawOdds(v);drawWorld(v)}));
}

/* ----- method ----- */
function viewMethod(v){
  const M=COPY.method,rw=k=>(M.rewrites.find(r=>r.where.startsWith(k))||{}).new||'';
  const groups=LINKS.map(l=>[l.name,[...new Map(l.inds.flatMap(d=>d.src).map(s=>[s[1],s])).values()]]);groups.push(['Futures',FUT_SRC]);
  groups.push(['Framework and related work',[['Kulveit, Douglas, Ammann, Turan, Krueger & Duvenaud, Gradual Disempowerment (2025)','https://gradual-disempowerment.ai/'],['Chooi, Lee & Li, Measuring AI-Induced Disempowerment (EvalEval 2026)','https://aclanthology.org/2026.evaleval-1.36/'],['Drago & Laine, The Intelligence Curse (2025)','https://intelligence-curse.ai/']]]);
  const li=(b,t)=>`<li><b>${b}</b><span>${t}</span></li>`,liD=(b,t)=>`<li><div><b>${b}</b><span>${t}</span></div></li>`;
  const secs=[['status','Status'],['scales','Scales'],['ratings','Ratings'],['charts','Charts'],['limits','Limits'],['more','Terms and sources']];
  v.innerHTML=`<div class="view5 wrap">${eye5(['Method'])}
   <h1 class="h1-5">${esc(M.title)}</h1><p class="lead5">${esc(rw('Method deck'))}</p>
   <nav class="toc5" aria-label="On this page">${secs.map(s=>`<a href="#method" data-to="m-${s[0]}">${s[1]}</a>`).join('')}</nav>
   <section class="sec5" id="m-status"><div class="callout5"><b>${esc(M.headings.status)}</b><p>${esc(rw('Status of the figures'))}</p><p class="check5"><a class="go" href="https://github.com/nekocchi-0417/gd-observatory/blob/main/research/checklist/handcheck.csv" target="_blank" rel="noopener">Open the v1.0 verification checklist ↗</a></p></div></section>
   <section class="sec5" id="m-scales"><p class="sub5 fam5">${esc(M.headings.families)}</p><div class="two5">
    <div><h2 class="h2-5 sm">${esc(M.headings.measured)}</h2><p class="sub5">${esc(rw('How well a link is measured'))}</p>
     <ul class="scale5">${[[4,'Repeated, direct measurement by bodies independent of the AI developers, of something that is about AI by construction.'],[3,'Repeated and direct, but measured by the company whose product is involved, or with the cause in dispute.'],[2,'Measured repeatedly and directly, but the change cannot be tied to AI.'],[1,'Single studies, or counts of disclosures that mostly follow reporting rules.'],[0,'Nothing measures it directly.']].map(s=>`<li>${lineGlyph5(s[0],44,12)}<div><b>${LEVELWORD[s[0]]}</b><span>${s[1]}</span></div></li>`).join('')}</ul></div>
    <div><h2 class="h2-5 sm">${esc(M.headings.change)}</h2><p class="sub5">${esc(M.changeScale.intro)}</p>
     <ul class="scale5">${M.changeScale.levels.map(s=>`<li><span class="scale5-d">${sigDot5(s.key==='?'?'?':+s.key)}</span><div><b>${esc(s.word)}</b><span>${esc(s.def)}</span></div></li>`).join('')}</ul></div></div>
    <div class="pri5-sec"><h2 class="h2-5 sm">${esc(M.headings.priority)}</h2><p class="sub5">${esc(M.headings.priorityIntro)}</p>
     <ul class="scale5 pri5-l">${['now','method','later'].map(k=>`<li><span class="pri5 pri5-${k}">${esc(COPY.gap.priority[k].t)}</span><div><span>${esc(COPY.gap.priority[k].d)}</span></div></li>`).join('')}</ul></div></section>
   <section class="sec5" id="m-ratings"><h2 class="h2-5 sm">${esc(M.headings.ratings)}</h2><p class="sub5">Four questions about the best evidence for each link. One person's judgement; no second, independent rating yet. <a class="go" href="${esc(M.headings.challengeUrl)}" target="_blank" rel="noopener">${esc(M.headings.challenge)} ↗</a></p>
    <p class="sub5 crit5"><b>${esc(M.headings.criteria)}.</b> ${esc(M.headings.criteriaText)}</p>
    <div class="tsc s1"><table class="rt rub"><thead><tr><th>Link</th><th>Repeated?</th><th>Direct?</th><th>Independent of the firms involved?</th><th>Tied to AI?</th><th>Rating</th></tr></thead><tbody>${LINKS.map(l=>`<tr><td><a href="#${l.id}" style="color:inherit;font-weight:650">${esc(l.name)}</a></td>${RUBRIC[l.id].map((c,i)=>`<td data-h="${['Repeated?','Direct?','Independent?','Tied to AI?'][i]}" class="${c==='yes'?'y':'n'}">${esc(c)}</td>`).join('')}<td data-h="Rating" style="white-space:nowrap">${lineGlyph5(l.level,40,12)}</td></tr>`).join('')}<tr><td style="font-weight:650">${esc(END.name)}</td><td class="n" colspan="4">nothing measures it directly</td><td>${lineGlyph5(0,40,12)}</td></tr></tbody></table></div></section>
   <section class="sec5" id="m-charts"><div class="two5"><div><h2 class="h2-5 sm">${esc(M.headings.charts)}</h2>
     <ul class="scale5">${liD('<i class="sw" style="background:var(--s1)"></i>Blue and grey are observed.','Darkest for the series the chart is about. A hollow marker is a weaker point: a secondary source, a changed definition or an unverified figure.')}${liD('<i class="sw" style="background:var(--p2)"></i>Orange is forecast.','Forecasts and model scenarios are orange and dashed. Orange is never used for measured data.')}${liD('<i class="sw hat"></i>Hatching means unmeasured.','On the map and in the record, hatched areas have no direct reading.')}${liD('<i class="sw" style="background:var(--sg3)"></i>Teal is a judgement.','Teal shows what the data show, an observatory judgement. It appears only on the Evidence pages.')}</ul></div>
    <div><h2 class="h2-5 sm">${esc(M.headings.tags)}</h2><ul class="scale5">${Object.entries({direct:'Read at the publisher\'s own page or data file by the AI assistant that compiled this draft.',primary:'From the publisher\'s page or paper, read through an automated summary.',company:'Published by the company whose product is measured.',secondary:'From press coverage or another third party quoting the source.',derived:'Arithmetic by the observatory on published figures.'}).map(([k,t])=>`<li><div><span class="chip">${esc(TAGS[k])}</span><span>${esc(t)}</span></div></li>`).join('')}</ul>
     <p class="sub5" style="margin-top:18px">Caveat chips:</p><p class="chips5">${['oneoff','cause','company','defs','unverified','stale','policy','advocacy','forecast'].map(t=>caveatChip(t)).join('')}</p></div></div></section>
   <section class="sec5" id="m-limits"><h2 class="h2-5 sm">${esc(M.headings.limits)}</h2>
    <ul class="scale5 lim5">${li('Mostly American.',esc(rw('Known limits: Mostly American')))}${li('The map shows stops, not causes.','No indicator measures whether one link causes the next. The arrows, and the choice of links, come from the theory. The paper also expects the branches to reinforce each other; the map does not draw those links.')}${li('Skills and judgement is an addition.','It comes from the deskilling literature and the "erosion" layer in Chooi, Lee and Li (2026), not from the three systems in Kulveit and co-authors.')}${li('Leans on AI companies.',esc(rw('Known limits: Leans on AI companies')))}${li('Ratings and signposts are judgements.','The measurement ratings, the "what the data show" colours and the futures signposts are the observatory\'s reading, not a model\'s output.')}${li('Being checked.','AI tools helped find and summarise the sources. Headline figures are being checked against primary sources before v1.0. "Read at source (AI-assisted)" means the AI assistant read the publisher\'s page itself.')}</ul></section>
   <section class="sec5" id="m-more"><details class="det5"><summary>${esc(M.headings.stops)}</summary><p class="sub5">${esc(rw('What is counted at each stop'))}</p>
     <div class="tsc"><table class="rt defs"><thead><tr><th>Stop</th><th>What is counted</th><th>What the argument needs</th></tr></thead><tbody>${ORDER.map(id=>`<tr><td style="font-weight:650;white-space:nowrap"><a href="#${id}" style="color:inherit">${esc(nameOf(id))}</a></td><td data-h="What is counted">${esc(DEFS[id][0])}</td><td data-h="What the argument needs">${esc(DEFS[id][1])}</td></tr>`).join('')}</tbody></table></div></details>
    <details class="det5"><summary>${esc(M.headings.terms)}</summary><dl class="gloss">${GLOSSARY.map(g=>`<div><dt>${esc(g[0])}</dt><dd>${esc(g[1])}</dd></div>`).join('')}</dl></details>
    <details class="det5"><summary>${esc(M.headings.sources)}</summary><div class="srcs">${groups.map(([n,ss])=>`<div class="sg"><h4>${esc(n)}</h4><ol>${ss.map(s=>`<li><a href="${esc(s[1])}" target="_blank" rel="noopener">${esc(s[0])}</a></li>`).join('')}</ol></div>`).join('')}</div></details></section></div>`;
  $$('.toc5 a',v).forEach(a=>a.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const t=document.getElementById(a.dataset.to);if(t)t.scrollIntoView({behavior:'smooth',block:'start'})}));
}
