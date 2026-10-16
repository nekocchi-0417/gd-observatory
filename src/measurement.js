/* Compact measurement summaries. Source data and the larger comparison charts stay separate. */
const GAP_STATUS11={limited:'Limited evidence',indirect:'Indirect measures','not-tracked':'Not tracked here'};

function scrollTo11(el){
  if(!el)return;
  requestAnimationFrame(async()=>{await document.fonts.ready;if(el.isConnected)el.scrollIntoView({block:'start',behavior:'instant'})});
}

function viewResearch11(v){
  const wide=matchMedia('(min-width: 980px)').matches;
  v.innerHTML=`<div class="wrap page10 research11"><header class="intro10"><h1>What is measured, and what is missing?</h1><p>Explore the evidence and open research questions at each step.</p></header>
    <details class="pathway-disclosure11" id="research-pathways11"${wide?' open':''}><summary>The proposed pathways</summary><div id="research-map11"></div></details>
    <section class="measurement-index11" aria-labelledby="index-title11"><h2 id="index-title11">What we know at each step</h2><div class="measurement-index-head11" aria-hidden="true"><span>Step</span><span>Currently measured</span><span>Measurement gaps</span><span></span></div>
      <div class="measurement-index-rows11">${ORDER.map((id,i)=>{const m=MEASUREMENT11[id];return `<a class="measurement-row11" href="#${id}"><div class="index-step11"><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(nameOf(id))}</h3></div><p class="index-measured11"><b>Currently measured</b>${esc(m.measuredSummary)}</p><p class="index-gap11"><b>Measurement gaps</b>${esc(m.gapSummary)}</p><span class="index-arrow11" aria-hidden="true">&#8594;</span></a>`}).join('')}</div>
      <p class="scope-note11">These AI-assisted summaries cover the sources selected for this dashboard. A systematic review could identify further studies and change our assessment of the gaps.</p>
    </section></div>`;
  mountMap5($('#research-map11',v),{onStop:id=>go(id),compact:true,card:measurementMapCard11});
}

function measurementMapCard11(i){
  const id=ORDER[i],m=MEASUREMENT11[id];
  return `<div class="card5-meta"><span class="card5-n">Step ${i+1} of ${ORDER.length}</span>${coverageBadge5(id)}</div><div class="card5-name">${esc(nameOf(id))}</div><dl class="map-summary11"><div><dt>Currently measured</dt><dd>${esc(m.measuredSummary)}</dd></div><div><dt>Measurement gaps</dt><dd>${esc(m.gapSummary)}</dd></div></dl><div class="card5-ctl"><button type="button" class="btn pri" data-t="open"><span>Indicators &amp; gaps</span>${chev5}</button></div>`;
}

function indicatorCard11(card,id){
  const source=SELECTED_EVIDENCE[id].sources.find(s=>s.id===card.source);
  return `<article class="indicator-card11" data-source="${esc(source.id)}"><h3>${esc(card.title)}</h3><p class="indicator-scope11">${esc(card.scope)}</p><p class="indicator-finding11">${esc(card.finding)}</p><p class="indicator-limit11">${esc(INDICATOR_NOTES14[card.source]||card.limit)}</p><div class="indicator-links11">${ext7(source.url,source.citation)}</div></article>`;
}

function measurementGap11(card){
  return `<article class="gap-card11" data-status="${card.status}"><p class="gap-status11"><i aria-hidden="true"></i>${GAP_STATUS11[card.status]}</p><h3>${esc(card.title)}</h3><p>${esc(card.question)}</p></article>`;
}

function measurementData11(id){
  if(id==='capability')return {
    caption:'METR TH1.1: task length in human-expert minutes at 80% success',
    columns:['Tested model','Released','Estimate (min)','95% low (min)','95% high (min)'],
    rows:CAPABILITY7.metr.rows.map(r=>[r.name,r.date,r.estimate,r.low,r.high]),
    url:CAPABILITY7.metr.data,checked:'2026-10-14',note:'These results cover 23 models released from 2023 to April 2026. METR measures how long the tested technical tasks would take a human expert. Applying the results to complete jobs requires further evidence. This series is now archived.'
  };
  if(id==='adoption')return {
    caption:'Gallup: how often US employees use AI at work',
    columns:['Survey month','A few times a year or more (%)','A few times a week or more (%)','Every day (%)'],rows:ADOPTION7.rows.map(r=>[r.date.slice(0,7),r.total,r.value,r.daily]),
    url:ADOPTION7.url,checked:'2026-10-16',note:'Eight survey waves from Gallup\'s published table. The groups overlap: daily users are included in regular and any use. Values must not be added. Frequency is self-reported and leaves working time and tasks automated unmeasured.'
  };
  const t=TOPIC_CHARTS[id];
  return {caption:t.tableCaption||t.measure,columns:t.columns,rows:t.data,url:t.dataUrl||source10(id).url,checked:id==='work'?'2026-10-15':'2026-10-14',note:t.credit};
}

function measurementSources11(id){
  const p=SELECTED_EVIDENCE[id],d=measurementData11(id);
  const comparisonNotes=id==='culture'?`<section class="comparison-data11"><h3>Earlier figures used in Emerging evidence</h3><p>The card above uses October's release with August figures. The separate daily-upload comparison below covers January 2025-April 2026; its stream figure is also from April. The following notes apply only to that comparison.</p>${musicNotes10()}</section>`:'';
  const csv=[d.columns.concat(['source','checked']),...d.rows.map(r=>r.concat([d.url,d.checked]))];
  return `<details class="disclosure7" id="${id}-source"><summary>Sources &amp; methods</summary><div class="disclosure7-body"><p>${esc(p.selection)}</p><p class="source-actions7"><a href="#method/selection">How indicators are selected</a></p><dl class="context7">${p.sources.map(s=>`<div><dt>${ext7(s.url,s.label)}</dt><dd><p>${esc(s.why)}</p><p>${esc(s.limit)}</p></dd></div>`).join('')}</dl><p class="source-actions7"><a href="#details/${id}">Full source notes</a>${ext7(d.url,'Original data')}${csvLink7(id+'-selected-data.csv',csv,'Download data (CSV)')}${comparisonFor10[id]?`<a href="#emerging/${comparisonFor10[id]}">View charts</a>`:''}</p>
    <details class="measurement-data11"><summary>Data table</summary><p>${esc(d.note)}</p><div class="data-scroll7" role="region" aria-label="${esc(nameOf(id))} source data" tabindex="0"><table class="data7"><caption>${esc(d.caption)}</caption><thead><tr>${d.columns.map(c=>`<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${d.rows.map(r=>`<tr>${r.map((c,i)=>i?`<td>${esc(c)}</td>`:`<th scope="row">${esc(c)}</th>`).join('')}</tr>`).join('')}</tbody></table></div></details>${comparisonNotes}</div></details>`;
}

function relatedMeasurements11(id){
  const p=SELECTED_EVIDENCE[id],shown=new Set(MEASUREMENT11[id].measured.map(c=>c.source));
  const items=p.sources.filter(s=>!shown.has(s.id)).map(s=>({title:s.label,publisher:s.type,url:s.url,text:s.finding}));
  if(id==='capability')items.push(...CAPABILITY7.related,
    {title:'Answering maths and science questions',publisher:'OpenAI / 2025',url:'https://openai.com/index/introducing-gpt-5-for-developers/',text:'On OpenAI\'s tests, correct answers rose from 88.9% with o3 to 94.6% with GPT-5 on AIME 2025 maths problems, and from 83.3% to 85.7% on GPQA Diamond science questions. Both used high reasoning settings without tools. How these gains affect workplace performance remains uncertain.'},
    {title:'Producing professional work: GDPval',publisher:'OpenAI / 2025',url:'https://arxiv.org/html/2510.04374v1#A1.T2',text:'Experts preferred AI outputs to human-produced work in 35.2% of comparisons for o3 and 39.0% for GPT-5, with tools available. This test assesses work products. Small differences between models may reflect measurement uncertainty.'},
    {title:'The cost of reaching the same test score',publisher:'Epoch AI',url:'https://epoch.ai/data-insights/llm-inference-price-trends',text:'The price of processing text at a given level of benchmark performance has fallen. Total costs also depend on deployment, retries and human checking.'},
    {title:'Advanced maths performance: FrontierMath',publisher:'Epoch AI / Our World in Data, 2026',url:'https://ourworldindata.org/grapher/ai-frontiermath-over-time',text:'Scores on advanced maths problems in the corrected Tiers 1-3 v2 benchmark, with Python tools available. The June 2026 revision corrected problems; comparisons need to use the same corrected version. OpenAI funded the benchmark and has exclusive access to a subset.'});
  else if(id==='adoption')items.push(...ADOPTION7.related,{title:'Potential exposure versus observed use',publisher:'Anthropic / March 2026',url:COMPARISON_DATA.exposure.sourceURL,text:COMPARISON_DATA.exposure.measure+' '+COMPARISON_DATA.exposure.caveat},
    {title:'Workplace AI use: OWID visualisation',publisher:'Gallup / Our World in Data, 2026',url:ADOPTION7.referenceURL,text:'Another presentation of the same Gallup survey, showing daily, frequent and occasional use together. Our chart follows Gallup\'s table through August 2026.'});
  else {const t=TOPIC_CHARTS[id];items.push(...t.support.map(s=>({title:s.label,url:s.url,text:s.text})),...t.related)}
  if(id==='handover')items.push({title:'Driverless taxi use in California',publisher:'California Public Utilities Commission / Our World in Data, 2026',url:ROBOTAXI15.chartURL,text:'Monthly passenger travel in paid autonomous taxi services. A concrete example of real-world automation; its implications for human driver employment and remote assistance remain open.'});
  const usedURLs=new Set(p.sources.filter(s=>shown.has(s.id)).map(s=>s.url));
  return items.filter(s=>{if(usedURLs.has(s.url))return false;usedURLs.add(s.url);return true});
}

function viewMeasurement11(v,id,sub){
  const m=MEASUREMENT11[id],p=SELECTED_EVIDENCE[id],i=ORDER.indexOf(id),studies=COPY.gap.items.filter(x=>x.link===id);
  v.innerHTML=`<div class="wrap page10 measurement11"><nav class="research-back10" aria-label="Research navigation"><a href="#gaps">&#8592; Research gaps</a></nav>
    <header class="intro10 measurement-intro11"><div class="eyebrow10">${esc(nameOf(id))} / Step ${i+1} of ${ORDER.length}</div><h1>${esc(p.h1)}</h1></header>
    <div class="measurement-lanes11"><section class="measured-lane11" aria-labelledby="${id}-measured-title"><header class="lane-header11"><h2 id="${id}-measured-title">Currently measured</h2></header><div class="indicator-stack11">${m.measured.map(c=>indicatorCard11(c,id)).join('')}</div></section>
      <section class="gaps-lane11" id="research-${id}" aria-labelledby="${id}-gap-title"><header class="lane-header11"><h2 id="${id}-gap-title">Measurement gaps</h2></header><div class="indicator-stack11">${m.gaps.map(measurementGap11).join('')}</div>
        ${studies.length?`<details class="study-ideas11"><summary>Study ideas (${studies.length})</summary><ul>${studies.map(s=>`<li><h3>${esc(s.title)}</h3><p>${esc(s.what)}</p></li>`).join('')}</ul></details>`:''}</section></div>
    <p class="scope-note11">Gaps reflect the selected studies. "Not tracked here" leaves open what other research may measure.</p>
    <div class="measurement-support14">${id==='handover'?robotaxiExample15():''}${measurementSources11(id)}${evidenceLibrary14(id)}</div>
    ${pn5(i?[ORDER[i-1],nameOf(ORDER[i-1])]:['gaps','All steps','Back to'],i<ORDER.length-1?[ORDER[i+1],nameOf(ORDER[i+1])]:['gaps','All steps','Next'])}</div>`;
  bindEvidenceLibrary14(v,id);
  if(id==='handover')mountRobotaxi15(v);
  if(sub==='source'||sub==='more'){const d=$('#'+id+(sub==='source'?'-source':'-related'),v);d.open=true;scrollTo11(d)}
  if(id==='handover'&&sub==='robotaxis'){const d=$('#handover-robotaxis',v);d.open=true;scrollTo11(d)}
  if(sub==='gaps')scrollTo11($('#research-'+id,v));
}
