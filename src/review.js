/* Priority sources drive the summaries and review checklist from the same records. */
Object.entries(SELECTED_EVIDENCE).forEach(([id,p])=>{
  COPY.home.card.what[id]=p.summary;
  COPY.evidence.rows[id].line=p.summary;
  COPY.links[id].h1=p.h1;
  COPY.links[id].sentence=p.summary;
  SIGNALS.links[id]={signal:p.signal,basis:p.selection};
});
COPY.home.snapshot.items[0].text='Benchmarks track AI capability; repeated surveys track how many people use it.';
COPY.home.snapshot.items[1].text='Some studies find changes in jobs and creative work. Government records show adoption, but not who retains decision power.';
COPY.home.snapshot.items[2].text='We need repeated tests of unaided ability and direct measures of whether people retain meaningful choices.';
linkById('capability').level=3;
linkById('capability').levelWhy='Direct benchmark results, but limited task coverage; one industry-linked benchmark and one discontinued tracker.';
COPY.futures.caveat='To be verified. Forecast extractions, historical chart points and scenario assumptions have not been checked in this source review. Do not cite them as established findings.';
const sourceLink6=(s,label)=>`<a class="source-link6" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(label||s.citation)} <span aria-hidden="true">↗</span></a>`;
const sourceCard6=s=>`<article class="source6" id="source-${esc(s.id)}">
  <div class="source6-head"><span class="source-kind6">${esc(s.type)}</span><span class="note5">${esc(s.date)}</span></div>
  <h3>${esc(s.label)}</h3><p class="source6-cite">${sourceLink6(s)}</p>
  <p class="source6-finding">${esc(s.finding)}</p>
  ${s.metrics?`<dl class="source6-metrics">${s.metrics.map(([n,t])=>`<div><dt>${esc(t)}</dt><dd>${esc(n)}</dd></div>`).join('')}</dl>`:''}
  <dl class="source6-notes"><div><dt>Why chosen</dt><dd>${esc(s.why)}</dd></div><div><dt>Key limit</dt><dd>${esc(s.limit)}</dd></div></dl>
  <details class="source6-detail"><summary>Paper title and where to check</summary><p>${esc(s.title)}</p><p>${esc(s.locate)}</p>${s.doi?`<p><a href="https://doi.org/${esc(s.doi)}" target="_blank" rel="noopener">DOI: ${esc(s.doi)} ↗</a></p>`:''}${s.paper?`<p><a href="${esc(s.paper)}" target="_blank" rel="noopener">Supporting paper or data ↗</a></p>`:''}</details></article>`;
const sourceMini6=(s,topic)=>`<article class="source-mini6">
  <div><span class="source-kind6">${esc(s.type)}</span></div>
  <h3>${esc(s.label)}</h3>
  <p class="source-mini6-cite">${sourceLink6(s)}</p>
  ${s.metrics?`<dl>${s.metrics.slice(0,2).map(([n,t])=>`<div><dt>${esc(t)}</dt><dd>${esc(n)}</dd></div>`).join('')}</dl>`:''}
  <a class="go" href="#${esc(topic)}/${esc(s.id)}">Why this source →</a></article>`;
function unchartedSources6(id){
  const chartIds=new Set(priorityIndicators5(id).map(d=>d.id));
  return SELECTED_EVIDENCE[id].sources.filter(s=>!(s.legacy||[]).some(x=>chartIds.has(x)));
}

function viewTopic(v,id){
  const p=SELECTED_EVIDENCE[id],i=ORDER.indexOf(id),prev=ORDER[i-1],next=ORDER[i+1];
  const charts=priorityIndicators5(id),uncharted=unchartedSources6(id);
  v.innerHTML=`<div class="view5 wrap priority6">${crumbs5(id)}
    <div class="claim5">${eye5([esc(nameOf(id)),`${i+1} of ${ORDER.length}`])}<h1 class="h1-5 c">${esc(p.h1)}</h1><p class="lead5">${esc(p.summary)}</p></div>
    ${verify5()}
    <section class="sec5 source-mini6-section"><div class="h2row5"><h2 class="h2-5 sm">Top indicators</h2><a class="go" href="#details/${id}">Why these sources →</a></div>
      <div class="source-minis6">${p.sources.map(s=>sourceMini6(s,id)).join('')}</div></section>
    ${charts.length?`<section class="sec5 priority6-charts"><div class="h2row5"><h2 class="h2-5 sm">Charts to review</h2><a class="go" href="#review/${id}">Check chart values →</a></div><p class="sub5">Charts linked to the top indicators. Values still need human checking before citation.</p><div id="priority-charts-${esc(id)}" class="s1"></div>${uncharted.length?`<p class="note5 chart-gap6">Not charted here yet: ${uncharted.map(s=>esc(s.label)).join('; ')}.</p>`:''}</section>`:''}
    <section class="sec5 priority6-gap"><h2 class="h2-5 sm">What is still missing</h2><p class="lead5 sm">${esc(p.gap)}</p><p class="review-links"><a class="go" href="#gaps/${id}">Research questions →</a><a class="go" href="#library/${id}">More sources: awaiting review →</a></p></section>
    ${pn5(prev?[prev,nameOf(prev)]:['evidence','All steps','Back to'],next?[next,nameOf(next)]:['review','Source review','Next'])}</div>`;
  if(charts.length)indicatorCards($(`#priority-charts-${id}`,v),id,{inds:charts,single:charts.length===1,sel:picked[id],onSelect:d=>{picked[id]=d.id;current=id+'/'+d.id;try{history.replaceState(null,'','#'+current)}catch(e){}}});
  crumbScroll5(v);
}

function viewEvidenceDetails(v,id){
  id=ORDER.includes(id)?id:'capability';
  const p=SELECTED_EVIDENCE[id];
  v.innerHTML=`<div class="view5 wrap priority6 detail6">${crumbs5(id)}
    ${eye5(['Source details',esc(nameOf(id))])}<h1 class="h1-5">Why these indicators</h1><p class="lead5">${esc(p.selection)}</p>
    ${verify5()}
    <p class="review-links"><a class="go" href="#${id}">Back to ${esc(nameOf(id))} →</a><a class="go" href="#review/${id}">Review checklist →</a><a class="go" href="#library/${id}">More sources awaiting review →</a></p>
    <section class="sec5"><h2 class="h2-5 sm">Priority sources</h2><div class="sources6">${p.sources.map(sourceCard6).join('')}</div></section>
    <section class="sec5 priority6-gap"><h2 class="h2-5 sm">What this pair still misses</h2><p class="lead5 sm">${esc(p.gap)}</p></section></div>`;
  crumbScroll5(v);
}

function viewLibrary(v,topic){
  const ids=ORDER.includes(topic)?[topic]:ORDER;
  v.innerHTML=`<div class="view5 wrap library6">${eye5(['Source library'])}<h1 class="h1-5">Awaiting review</h1><p class="lead5">Additional sources, not additional conclusions.</p>
    <div class="verify5"><b>To be verified</b><span>These earlier source collections have not passed the current claim-level review. Their charts and extracted figures are held back from the main pages. Inclusion is not an endorsement.</span></div>
    <p class="review-links"><a class="go" href="#evidence">Priority evidence →</a><a class="go" href="#review">Review checklist →</a></p>
    ${ids.map(id=>{const inds=LINKS.flatMap(l=>l.inds.filter(d=>id==='influence'?d.recRow==='influence':l.id===id&&!d.recRow));return `<section class="sec5"><h2 class="h2-5 sm"><a href="#${id}">${esc(nameOf(id))}</a></h2><p class="note5">Check the original publication, study design and relevance before promoting a source.</p>${inds.map(d=>`<details class="det5"><summary>${esc(indLabel5(d))}</summary><ul class="library6-sources">${d.src.map(([t,u])=>`<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)} ↗</a></li>`).join('')}</ul></details>`).join('')}</section>`}).join('')}
    <section class="sec5"><h2 class="h2-5 sm">Proposed measures are not findings</h2><p class="sub5">The landscape scan also proposes tests of skill recovery, appropriate reliance, calibration and decision power. These belong in the research agenda until their definitions and validation are checked.</p><p><a class="go" href="#gaps">See the research agenda →</a></p></section></div>`;
}

function viewSourceMethod(v){
  v.innerHTML=`<div class="view5 wrap">${eye5(['Method'])}<h1 class="h1-5">What these sources can tell us</h1><p class="lead5">A selected evidence map, not a systematic review or a test of the whole theory.</p>
    ${verify5()}
    <section class="sec5" id="m-selection"><h2 class="h2-5 sm">How sources are chosen</h2><ul class="scale5 lim5">
      <li><b>Relevant to the step.</b><span>Prefer a measure of the outcome itself. If only a proxy exists, say what it misses.</span></li>
      <li><b>Traceable to the original.</b><span>Link to the paper, official dataset or original report. Prefer transparent methods, independent research and repeated observations.</span></li>
      <li><b>Strong enough for the claim.</b><span>Use experiments for narrow causal questions and official statistics for trends. A company disclosure can be useful without being independent; a preprint can be relevant without being established.</span></li>
      <li><b>Include counterevidence.</b><span>Keep null results and benefits alongside worrying findings. Two sources per page limit the first review; they are not an exhaustive ranking of the literature.</span></li></ul></section>
    <section class="sec5" id="m-status"><h2 class="h2-5 sm">What has been checked</h2><p class="sub5">The priority claims were compared with primary publications using AI assistance on 13 October 2026. A person still needs to check the extraction, interpretation and suitability for publication. Older charts and additional sources are parked separately; forecasts are provisional.</p><p class="review-links"><a class="go" href="#review">1-2 hour review checklist →</a><a class="go" href="#library">Awaiting review →</a></p></section>
    <section class="sec5" id="m-scales"><h2 class="h2-5 sm">How to read the pathways</h2><p class="sub5">The connections come from the gradual disempowerment argument. They show proposed pathways, not demonstrated causes. The skills branch adds questions about learning and judgement.</p></section>
    <section class="sec5" id="m-coverage"><h2 class="h2-5 sm">How coverage is assessed</h2><p class="sub5">Colour describes how well each step is measured as a whole. It does not score the level of risk or whether findings support the theory. A rigorous study of one task can sit within a step that still has major gaps.</p>
      <ul class="scale5 coverage-rubric5 s1">${[['major','Closest sources leave a central outcome or repeated measure missing. Existing studies may still be useful and rigorous.'],['partial','Measures cover narrow settings, tasks or indirect signals. Coverage of the broader step is incomplete.'],['stronger','Repeated, direct measures of the named quantity exist. Population coverage and attribution to AI can still be limited.']].map(([b,d])=>`<li>${coverageGlyph5(b,20)}<div><b>${esc(COPY.coverage.bands[b].label)}</b><span>${esc(d)}</span></div></li>`).join('')}</ul>
      <p class="note5">Provisional editorial ratings based on the selected evidence and its limits. This is not a systematic count of research or an independently validated score. Two priority sources alone cannot establish that a whole field is understudied.</p>
      <dl class="coverage-reasons5">${ORDER.map(id=>`<div><dt><a href="#${id}">${esc(nameOf(id))}</a>${coverageBadge5(id)}</dt><dd>${esc(coverageOf5(id).why)}</dd></div>`).join('')}</dl></section>
    <section class="sec5" id="m-more"><h2 class="h2-5 sm">Limits and sources</h2><p class="sub5">Coverage is uneven across countries and topics. No single indicator establishes gradual disempowerment. A dated finding is not necessarily the latest available value, and later versions may revise it.</p><details class="det5"><summary>Definitions at each step</summary><dl class="gloss">${ORDER.map(id=>`<div><dt>${esc(nameOf(id))}</dt><dd>${esc(DEFS[id][0])}<br><b>Still needed:</b> ${esc(SELECTED_EVIDENCE[id].gap)}</dd></div>`).join('')}</dl></details><details class="det5"><summary>All 18 priority sources</summary><div class="srcs">${ORDER.map(id=>`<div class="sg"><h4>${esc(nameOf(id))}</h4><ol>${SELECTED_EVIDENCE[id].sources.map(s=>`<li>${sourceLink6(s)}<br>${esc(s.title)}</li>`).join('')}</ol></div>`).join('')}</div></details><p class="review-links"><a class="go" href="https://gradual-disempowerment.ai/" target="_blank" rel="noopener">Original framework ↗</a><a class="go" href="pdf-source-crosswalk.html" target="_blank" rel="noopener">PDF reference crosswalk ↗</a></p></section></div>`;
}

const REVIEW_KEY6='gd-source-review-2026-10-v1';
const reviewItems6=()=>ORDER.flatMap(topic=>SELECTED_EVIDENCE[topic].sources.map(source=>({topic,source})));
function readReview6(){try{const x=JSON.parse(localStorage.getItem(REVIEW_KEY6)||'{}');return x&&typeof x==='object'&&!Array.isArray(x)?x:{}}catch(e){return {}}}
function viewReview(v){
  const state=readReview6();
  v.innerHTML=`<div class="view5 wrap review6">${eye5(['Source review'])}<h1 class="h1-5">An evidence check in 1-2 hours</h1>
    <p class="lead5">18 sources, two per topic. This is a publication check, not a full literature review.</p>
    <div class="review6-plan"><p><b>10 minutes</b> for the map and page headlines. <b>90 minutes</b> for sources, about five minutes each. <b>20 minutes</b> for corrections and decisions.</p><p>For every source: match the claim to the original, check the population and comparison, and keep the main limitation. If a check needs more time, park it.</p></div>
    <div class="review6-tools"><div><label for="review-progress"><b id="review-count"></b></label><progress id="review-progress" max="18" value="0"></progress><span class="note5" id="review-parked"></span></div><button class="btn ghost" type="button" id="review-export">Export review notes</button></div>
    <p class="note5" id="review-storage" role="status">Progress stays in this browser. Checking an item does not mark the public website as verified; export your decisions for the next update.</p>
    <nav class="toc5" aria-label="Review by topic">${ORDER.map(id=>`<a href="#review/${id}">${esc(nameOf(id))}</a>`).join('')}</nav>
    ${ORDER.map(id=>`<section class="sec5" id="review-${id}"><div class="h2row5"><h2 class="h2-5 sm">${esc(nameOf(id))}</h2><a class="go" href="#${id}" target="_blank" rel="noopener">Open page ↗</a></div>${SELECTED_EVIDENCE[id].sources.map(s=>{const x=state[s.id]||{};return `<article class="review6-item"><div class="review6-title"><h3>${esc(s.label)}</h3><label class="review6-status">Decision <select data-review="${esc(s.id)}" aria-label="Review status: ${esc(s.label)}">${[['pending','Not checked'],['checked','Checked'],['parked','Park for later']].map(([key,label])=>`<option value="${key}"${(x.status||'pending')===key?' selected':''}>${label}</option>`).join('')}</select></label></div><p>${sourceLink6(s)}</p><p class="note5">Look at: ${esc(s.locate)}</p><ul>${s.checks.map(t=>`<li>${esc(t)}</li>`).join('')}</ul><details class="source6-detail"><summary>Notes or correction</summary><label class="sr-only" for="note-${s.id}">Notes for ${esc(s.label)}</label><textarea id="note-${s.id}" data-note="${esc(s.id)}" rows="3">${esc(x.note||'')}</textarea></details></article>`}).join('')}</section>`).join('')}
    <section class="sec5"><h2 class="h2-5 sm">Stop after two hours</h2><p class="sub5">Keep unresolved items marked as awaiting review, or request their removal from the priority pages. The longer source library, forecast extractions and proposed measures are outside this first pass.</p><p><a class="go" href="#library">Open the parked source library →</a></p></section></div>`;
  const progress=()=>{const xs=reviewItems6().map(({source:s})=>state[s.id]||{}),n=xs.filter(x=>x.status==='checked').length,parked=xs.filter(x=>x.status==='parked').length;$('#review-count',v).textContent=`${n} of 18 checked`;$('#review-progress',v).value=n;$('#review-parked',v).textContent=`${parked} parked; ${18-n-parked} not checked`};
  const save=()=>{try{localStorage.setItem(REVIEW_KEY6,JSON.stringify(state))}catch(e){$('#review-storage',v).textContent='Browser storage is unavailable. Export your notes before leaving this page.'}progress()};
  $$('[data-review]',v).forEach(el=>el.addEventListener('change',()=>{const id=el.dataset.review;state[id]={...state[id],status:el.value};save()}));
  $$('[data-note]',v).forEach(el=>el.addEventListener('input',()=>{const id=el.dataset.note;state[id]={...state[id],note:el.value};save()}));
  $('#review-export',v).addEventListener('click',()=>{const text=['# Dashboard source review','', 'Local review decisions; not independent verification or a published status change.','',...reviewItems6().flatMap(({topic,source:s})=>{const x=state[s.id]||{};return [`## ${nameOf(topic)}: ${s.label}`,`Status: ${x.status||'pending'}`,`Source: ${s.url}`,`Checks: ${s.checks.join(' ')}`,`Notes: ${x.note||''}`,'']})].join('\n');const url=URL.createObjectURL(new Blob([text],{type:'text/markdown'})),a=document.createElement('a');a.href=url;a.download='dashboard-source-review.md';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)});
  progress();
}
