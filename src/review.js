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
  <dl class="source6-notes"><div><dt>Why this source was selected</dt><dd>${esc(s.why)}</dd></div><div><dt>Limits of this evidence</dt><dd>${esc(s.limit)}</dd></div></dl>
  <details class="source6-detail"><summary>Source title and details for checking the figures</summary><p>${esc(s.title)}</p><p>${esc(s.locate)}</p>${s.doi?`<p><a href="https://doi.org/${esc(s.doi)}" target="_blank" rel="noopener">DOI: ${esc(s.doi)} ↗</a></p>`:''}${s.paper?`<p><a href="${esc(s.paper)}" target="_blank" rel="noopener">Supporting paper or data ↗</a></p>`:''}</details></article>`;
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
    ${eye5(['Source details',esc(nameOf(id))])}<h1 class="h1-5">Why these sources were selected</h1><p class="lead5">${esc(p.selection)}</p>
    <p class="review-links"><a class="go" href="#${id}">Back to ${esc(nameOf(id))} →</a><a class="go" href="#method/selection">How indicators are selected →</a></p>
    <section class="sec5"><h2 class="h2-5 sm">Selected sources and their limits</h2><div class="sources6">${sources.map(sourceCard6).join('')}</div></section>
    <section class="sec5 priority6-gap"><h2 class="h2-5 sm">What needs better measurement</h2><p class="lead5 sm">${esc(p.gap)}</p>${TOPIC_CHARTS[id]?.watch?`<ul class="watch7">${TOPIC_CHARTS[id].watch.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}<p class="note5">These priorities reflect the selected sources. A review of the wider field and independent checks of selection and interpretation are still needed. The suggestions do not establish warning thresholds.</p></section></div>`;
  crumbScroll5(v);
}

function viewSourceMethod(v){
  v.innerHTML=`<div class="view5 wrap">${eye5(['Method'])}<h1 class="h1-5">How we select and interpret the evidence</h1><p class="lead5">This dashboard brings together selected evidence on AI and human influence. It explains what each source measures, how far its findings apply, and which questions remain open.</p>
    <section class="sec5" id="m-selection"><h2 class="h2-5 sm">How sources are chosen</h2><ul class="scale5 lim5">
      <li><b>Relevance to the question</b><span>We consider how directly a measure addresses the question at each step. When it measures something related, such as perceived control, we explain what that indirect measure can and cannot establish.</span></li>
      <li><b>Methods that can be checked</b><span>We look for original methods and results that readers can inspect. We consider study design, uncertainty, independence and repeated measurement, alongside commercial involvement and publication status.</span></li>
      <li><b>Clear scope</b><span>We identify the countries, people, occupations or tasks covered by each source. A well-designed study may answer a narrow question, so its findings need to be read within those boundaries.</span></li>
      <li><b>A contribution to understanding</b><span>We consider whether a source answers another part of the question or tests whether a finding holds in a different setting. This includes benefits, conflicting findings and results showing no effect.</span></li></ul>
      <p class="note5">These editorial criteria allow findings that support, challenge or leave open disempowerment. Selection has not involved a systematic review, numerical scoring or an exhaustive ranking of sources.</p></section>
    <section class="sec5" id="m-chart-sources"><h2 class="h2-5 sm">How the charts use source data</h2><p class="sub5">Topic pages describe selected indicators and measurement gaps. Larger charts on Emerging evidence compare findings while keeping their sources, populations, periods and axes separate. A comparison can raise a research question; establishing cause and effect requires further evidence.</p>
      <details class="det5"><summary>How each source is represented</summary><ul class="lim5"><li>AI capability: the chart includes all 23 METR TH1.1 models released from 2023 onward, at 80% success, with published uncertainty.</li><li>AI adoption: the chart includes all eight Gallup frequent-use observations from May 2023–August 2026.</li><li>Delegation: Anthropic's May 2026 shares describe automation and augmentation among conversations assigned to either category. They provide a snapshot of these conversations.</li><li>Entry-level jobs: Stanford/ADP's September 2026 release includes all 60 months and five exposure quintiles. Each quintile retains the original November 2022 = 100 baseline, and the quintiles are kept separate.</li><li>Workers' income share: the two ILO endpoints come from the same March 2026 publication. Values for the intervening years have not been inferred.</li><li>Skills: published adjusted exam effects and standard errors are multiplied by 100. This dashboard calculates approximate 95% intervals as estimate ± 1.96 × SE; the paper does not quote these intervals.</li><li>Culture: Deezer reports a 1–3% share of streams. The range is shown without an assumed midpoint. It does not represent a confidence interval or a listening share adjusted for fraud.</li><li>Government: counts follow the development-stage labels explicitly recorded in the CSV file. Entries with blank stages remain separate, and the discrepancy with the README is disclosed.</li><li>Human influence: the chart uses Pew's three published groups for perceived control. Rounded values are retained without rescaling, and nonresponse is noted.</li></ul></details>
      <p class="note5">Charts are redrawn from the linked data without source endorsement. The summaries distinguish changes over time from one-off findings. Proposed research priorities still need review before they could serve as warning thresholds.</p></section>
    <section class="sec5" id="m-status"><h2 class="h2-5 sm">What has been checked</h2><p class="note5">Selected figures, definitions and links were compared with primary sources using AI assistance on 14 October 2026. Independent human review of extraction and interpretation is still needed, especially for provider data and indirect measures of control. Futures remains unverified.</p><p class="note5">Each step's evidence library also includes references from earlier AI-assisted research collections. Older entries are listed without their numerical claims. Bibliographic details still need human checking; the library is not a systematic review and does not determine the coverage labels.</p></section>
    <section class="sec5" id="m-scales"><h2 class="h2-5 sm">Where the pathways come from</h2><p class="sub5">The pathways are adapted from the <a class="go" href="https://gradual-disempowerment.ai/" target="_blank" rel="noopener">Gradual Disempowerment paper ↗</a>.</p></section>
    <section class="sec5" id="m-card-labels"><h2 class="h2-5 sm">What the indicator labels mean</h2><ul class="scale5 lim5"><li><b>Currently measured</b><span>A selected indicator measures part of the question. Its scope may be limited to one task, country or point in time.</span></li><li><b>Limited evidence</b><span>Relevant studies exist. Evidence from more settings or longer follow-up is needed to address the broader question.</span></li><li><b>Indirect measures</b><span>The available evidence measures something related to the question. More direct evidence is needed to establish the outcome itself.</span></li><li><b>Not tracked here</b><span>The selected sources do not provide this measure. Relevant research may exist outside this selection.</span></li></ul><p class="note5">These provisional labels were developed with AI assistance and still need independent review. They have no validated numerical score behind them. A study's quality and the breadth of its coverage are assessed separately.</p></section>
    <section class="sec5" id="m-coverage"><h2 class="h2-5 sm">How measurement coverage is described</h2><p class="sub5">Coverage describes how much of a question the selected evidence can answer. The colours and labels summarise a provisional judgement made with AI assistance.</p>
      <p class="sub5">We consider whether a measure addresses the outcome directly, whether it is repeated over time, and how many relevant settings it covers. The three bands summarise these considerations qualitatively. They do not quantify risk or establish whether AI caused a change.</p>
      <ul class="scale5 coverage-rubric5 s1">${[['major','The selected sources leave a central outcome or repeated measurement missing. Individual studies may still provide strong evidence within their scope.'],['partial','Measures address part of the question through a limited set of settings, tasks or indirect indicators. Important aspects remain unmeasured.'],['stronger','Direct measures of the named quantity are repeated over time. Their population coverage may still be limited, and identifying AI\'s contribution may require further research.']].map(([b,d])=>`<li>${coverageGlyph5(b,20)}<div><b>${esc(COPY.coverage.bands[b].label)}</b><span>${esc(d)}</span></div></li>`).join('')}</ul>
      <p class="note5">Coverage judgements may omit relevant research and have not been independently validated. A numerical score would require a defined search, consistent assessment of each study and independent checking. Those steps remain incomplete.</p>
      <dl class="coverage-reasons5">${ORDER.map(id=>`<div><dt><a href="#${id}">${esc(nameOf(id))}</a>${coverageBadge5(id)}</dt><dd>${esc(coverageOf5(id).why)}</dd></div>`).join('')}</dl></section>
    <section class="sec5" id="m-more"><h2 class="h2-5 sm">Limits and sources</h2><p class="note5">Coverage varies across countries and topics, and no single indicator establishes gradual disempowerment. This selection does not test the theory as a whole. More recent values or revisions may be available from the original sources.</p><details class="det5"><summary>What each step measures</summary><dl class="gloss">${ORDER.map(id=>`<div><dt>${esc(nameOf(id))}</dt><dd>${esc(MEASUREMENT11[id].measuredSummary)}<br><b>Further measurement needed:</b> ${esc(MEASUREMENT11[id].gapSummary)}</dd></div>`).join('')}</dl></details><details class="det5"><summary>All 18 selected sources</summary><div class="srcs">${ORDER.map(id=>`<div class="sg"><h4>${esc(nameOf(id))}</h4><ol>${SELECTED_EVIDENCE[id].sources.map(s=>`<li>${sourceLink6(s)}<br>${esc(s.title)}</li>`).join('')}</ol></div>`).join('')}</div></details><p class="review-links"><a class="go" href="https://gradual-disempowerment.ai/" target="_blank" rel="noopener">Original framework ↗</a></p></section></div>`;
}
