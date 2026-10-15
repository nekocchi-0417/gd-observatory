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
linkById('capability').levelWhy='Direct technical-task benchmark results, with limited task coverage and a discontinued tracker.';
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
  if(id==='capability'){viewCapabilityPilot(v);return}
  if(id==='adoption'){viewAdoptionPilot(v);return}
  if(TOPIC_CHARTS[id]){viewSelectedTopic(v,id);return}
  const p=SELECTED_EVIDENCE[id],i=ORDER.indexOf(id),prev=ORDER[i-1],next=ORDER[i+1];
  const charts=priorityIndicators5(id),uncharted=unchartedSources6(id);
  v.innerHTML=`<div class="view5 wrap priority6">${crumbs5(id)}
    <div class="claim5">${eye5([esc(nameOf(id)),`${i+1} of ${ORDER.length}`])}<h1 class="h1-5 c">${esc(p.h1)}</h1><p class="lead5">${esc(p.summary)}</p></div>
    ${verify5()}
    ${charts.length?`<section class="sec5 priority6-charts"><div class="h2row5"><h2 class="h2-5 sm">Charts to review</h2><a class="go" href="#details/${id}">Source details →</a></div><p class="sub5">Charts linked to the selected indicators. Values still need human checking before citation.</p><div id="priority-charts-${esc(id)}" class="s1"></div>${uncharted.length?`<p class="note5 chart-gap6">Not charted here yet: ${uncharted.map(s=>esc(s.label)).join('; ')}.</p>`:''}</section>`:''}
    <div class="disclosures7 evidence-grid7 topic-support7">
      <section class="supporting7" aria-labelledby="${id}-supporting-title"><h2 id="${id}-supporting-title">Selected indicators</h2>
        <div class="source-minis6">${p.sources.map(s=>sourceMini6(s,id)).join('')}</div></section>
      <details class="disclosure7" id="${id}-source"><summary>Sources and caveats</summary><div class="disclosure7-body">
        <p>${esc(p.selection)}</p><dl class="context7">${p.sources.map(s=>`<div><dt>${esc(s.label)}</dt><dd>${esc(s.limit)}</dd></div>`).join('')}</dl>
        <p class="source-actions7"><a href="#details/${id}">Full source notes</a><a href="#method/selection">How we select indicators</a></p>
      </div></details>
      <details class="disclosure7" id="${id}-related"><summary>Related evidence</summary><div class="disclosure7-body">
        <p>Findings from the selected studies and indicators.</p><ul class="related7">${p.sources.map(s=>`<li><h3>${sourceLink6(s,s.label)}</h3><p>${esc(s.finding)}</p></li>`).join('')}</ul>
      </div></details>
      <details class="disclosure7" id="${id}-watch"><summary>What to watch next</summary><div class="disclosure7-body">
        <p>${esc(p.gap)}</p><p><a href="#gaps/${id}">Research questions →</a></p>
      </div></details>
    </div>
    ${pn5(prev?[prev,nameOf(prev)]:['evidence','All steps','Back to'],next?[next,nameOf(next)]:['evidence','All steps','Next'])}</div>`;
  if(charts.length)indicatorCards($(`#priority-charts-${id}`,v),id,{inds:charts,single:charts.length===1,sel:picked[id],onSelect:d=>{picked[id]=d.id;current=id+'/'+d.id;try{history.replaceState(null,'','#'+current)}catch(e){}}});
  crumbScroll5(v);
}

function viewEvidenceDetails(v,id){
  id=ORDER.includes(id)?id:'capability';
  const p=SELECTED_EVIDENCE[id];
  const main=TOPIC_CHARTS[id]?.source||(id==='capability'?'metr':'gallup');
  const sources=[...p.sources].sort((a,b)=>Number(b.id===main)-Number(a.id===main));
  v.innerHTML=`<div class="view5 wrap priority6 detail6">${crumbs5(id)}
    ${eye5(['Source details',esc(nameOf(id))])}<h1 class="h1-5">Why these indicators</h1><p class="lead5">${esc(p.selection)}</p>
    <p class="review-links"><a class="go" href="#${id}">Back to ${esc(nameOf(id))} →</a><a class="go" href="#method/selection">How indicators are selected →</a></p>
    <section class="sec5"><h2 class="h2-5 sm">Selected source and supporting evidence</h2><div class="sources6">${sources.map(sourceCard6).join('')}</div></section>
    <section class="sec5 priority6-gap"><h2 class="h2-5 sm">What remains unmeasured</h2><p class="lead5 sm">${esc(p.gap)}</p><p class="note5">AI-assisted source notes. Selection and interpretation still need independent review.</p></section></div>`;
  crumbScroll5(v);
}

function viewSourceMethod(v){
  v.innerHTML=`<div class="view5 wrap">${eye5(['Method'])}<h1 class="h1-5">What these sources can tell us</h1><p class="lead5">A dashboard of selected evidence, not a systematic review or a test of the whole theory.</p>
    <section class="sec5" id="m-selection"><h2 class="h2-5 sm">How sources are chosen</h2><ul class="scale5 lim5">
      <li><b>Relevance.</b><span>Does the indicator measure the question at this step? Identify proxies and explain what they miss.</span></li>
      <li><b>Credibility and traceability.</b><span>Can we inspect the original methods and results? Consider study design, uncertainty, independence and repeated measurement. State commercial involvement and publication status.</span></li>
      <li><b>Clear coverage.</b><span>Which countries, people, occupations or tasks were studied? Keep those boundaries visible. A rigorous study can still have narrow coverage.</span></li>
      <li><b>Added value.</b><span>Does this source answer a different part of the question or test whether another finding transfers? Include null results, benefits and conflicting findings.</span></li></ul>
      <p class="sub5">These are editorial criteria, not a numerical score or an exhaustive ranking. We explain why each featured indicator was chosen and what it leaves unanswered. Selection does not depend on whether a finding supports disempowerment.</p></section>
    <section class="sec5" id="m-chart-sources"><h2 class="h2-5 sm">Where the charts come from</h2><p class="sub5">Each evidence page uses one source for its main visual. We do not join different populations, report vintages or definitions into one trend. The source, population and date appear beside every chart; the dropdown includes values and any transformations.</p>
      <details class="det5"><summary>Chart-by-chart construction</summary><ul class="lim5"><li>AI capability: all 23 METR TH1.1 models released from 2023 onward, at 80% success, with published uncertainty.</li><li>AI adoption: all eight Gallup frequent-use observations, May 2023–August 2026.</li><li>Delegation: Anthropic's May 2026 automation and augmentation bucket shares, among conversations assigned either mode. Not a historical trend.</li><li>Entry-level jobs: Stanford/ADP's September 2026 release, all 60 months and five exposure quintiles. Original November 2022 = 100 baseline; no averaging of quintiles.</li><li>Workers' income share: two ILO endpoints from the same March 2026 publication. No inferred annual path.</li><li>Skills: published adjusted exam effects and standard errors × 100. Approximate 95% intervals are calculated as estimate ± 1.96 × SE, not quoted from the paper.</li><li>Culture: Deezer's reported 1–3% stream-share range. No assumed midpoint; not a confidence interval or a fraud-adjusted listening share.</li><li>Government: counts of explicit CSV development-stage labels. Blank stages stay separate; the README discrepancy is disclosed.</li><li>Human influence: Pew's three published felt-control groups. Rounded values are not rescaled; nonresponse is noted.</li></ul></details>
      <p class="sub5">These visuals are redrawn by this project, not endorsed by the sources. “What changed” describes a dated comparison; “What this shows” describes a snapshot or experiment. Signals to watch are research priorities, not validated warning thresholds.</p></section>
    <section class="sec5" id="m-status"><h2 class="h2-5 sm">What has been checked</h2><p class="sub5">Selected figures, definitions and links were compared with primary sources using AI assistance on 14 October 2026. This is not an independent audit. Human sign-off is still needed on the extraction and interpretation, especially provider data and proxies for control. The forecast section remains a separate, unverified work in progress.</p></section>
    <section class="sec5" id="m-scales"><h2 class="h2-5 sm">Where the pathways come from</h2><p class="sub5">The pathways are adapted from the <a class="go" href="https://gradual-disempowerment.ai/" target="_blank" rel="noopener">Gradual Disempowerment paper ↗</a>.</p></section>
    <section class="sec5" id="m-coverage"><h2 class="h2-5 sm">How coverage is assessed</h2><p class="sub5">The colours are a provisional, AI-assisted assessment of measurement coverage based on the selected sources. They are not a rigorous review of the full research field or a measure of risk.</p>
      <p class="sub5">We consider three questions: does the evidence measure the outcome directly, is measurement repeated over time, and how many relevant settings does it cover? The bands below summarise that judgement; they are not calculated scores.</p>
      <ul class="scale5 coverage-rubric5 s1">${[['major','Closest sources leave a central outcome or repeated measure missing. Existing studies may still be useful and rigorous.'],['partial','Measures cover narrow settings, tasks or indirect signals. Coverage of the broader step is incomplete.'],['stronger','Repeated, direct measures of the named quantity exist. Population coverage and attribution to AI can still be limited.']].map(([b,d])=>`<li>${coverageGlyph5(b,20)}<div><b>${esc(COPY.coverage.bands[b].label)}</b><span>${esc(d)}</span></div></li>`).join('')}</ul>
      <p class="note5">These ratings have not been independently validated and may miss relevant research. A numerical score would require a defined search, consistent study-level coding and an independent check. We have not completed those steps, so the colours should be treated as a starting point for discussion.</p>
      <dl class="coverage-reasons5">${ORDER.map(id=>`<div><dt><a href="#${id}">${esc(nameOf(id))}</a>${coverageBadge5(id)}</dt><dd>${esc(coverageOf5(id).why)}</dd></div>`).join('')}</dl></section>
    <section class="sec5" id="m-more"><h2 class="h2-5 sm">Limits and sources</h2><p class="sub5">Coverage is uneven across countries and topics. No single indicator establishes gradual disempowerment. A dated finding is not necessarily the latest available value, and later versions may revise it.</p><details class="det5"><summary>Definitions at each step</summary><dl class="gloss">${ORDER.map(id=>`<div><dt>${esc(nameOf(id))}</dt><dd>${esc(DEFS[id][0])}<br><b>Still needed:</b> ${esc(SELECTED_EVIDENCE[id].gap)}</dd></div>`).join('')}</dl></details><details class="det5"><summary>All 18 priority sources</summary><div class="srcs">${ORDER.map(id=>`<div class="sg"><h4>${esc(nameOf(id))}</h4><ol>${SELECTED_EVIDENCE[id].sources.map(s=>`<li>${sourceLink6(s)}<br>${esc(s.title)}</li>`).join('')}</ol></div>`).join('')}</div></details><p class="review-links"><a class="go" href="https://gradual-disempowerment.ai/" target="_blank" rel="noopener">Original framework ↗</a></p></section></div>`;
}
