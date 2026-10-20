/* Comparison views and integrated research gaps, layered onto the topic pages. */
const baseRender10=render;
const baseSelectedChart10=drawSelectedChart8;
const originalWork10=structuredClone(TOPIC_CHARTS.work);
const source10=id=>SELECTED_EVIDENCE[id].sources.find(s=>s.id===TOPIC_CHARTS[id]?.source);
const topicLabels10={capability:'Technical-task benchmarks',adoption:'Workplace-use surveys',handover:'Provider interaction data',work:'US payroll data',share:'Global labour-income estimates',skills:'Learning experiments',culture:'Platform reports and creative tasks',institutions:'Public-sector records',influence:'Surveys and proxies for control'};
const comparisonFor10={capability:'work',work:'work',adoption:'skills',skills:'skills',culture:'culture'};
const monthlyYear10=date=>ym(Number(date.slice(0,4)),Number(date.slice(5,7)));
const calendarDate10=calendarDate7;
Object.assign(COMPARISON_DATA.work,{
  measure:'Employment in the most AI-exposed occupations. Six age groups; ages 22-25 highlighted.',
  credit:'The September 2026 Stanford / ADP release provides 60 months of data for six age groups. This comparison uses the fifth of occupations with the greatest potential for AI assistance. Each age group\'s November 2022 employment is set to 100. The groups are kept separate and the monthly values are unchanged.',
  takeaway:'From November 2022 to August 2026, employment fell 12.8% for ages 22-25 in occupations whose tasks have the greatest potential for AI assistance. Older groups ranged from a 3.8% fall to a 9.4% rise. The contribution of AI to these changes remains uncertain.',
  caveat:'The data cover selected US employers using ADP payroll. Workers move between age groups as they age. The exposure rating describes potential AI assistance; actual use by these employers is unknown. Differences in occupations and other economic changes could help explain the pattern. Confidence intervals are unavailable.',
  selection:'Shows actual employment by age within the same exposure group. Every published age group is retained, rather than selecting the most dramatic older comparison.',
  aria:'Stanford ADP employment in the highest-exposure quintile. Six age groups, September 2021 to August 2026, November 2022 equals 100. Ages 22-25 end at 87.23; older group endpoints range from 96.19 to 109.4.'
});
Object.assign(COMPARISON_DATA.exposure,{
  measure:'For computer and maths occupations, Anthropic\'s weighted measure of tasks AI could assist with reaches 94%. Its measure based on observed Claude use reaches 33%.',
  caveat:'The two measures are calculated differently and cover one occupational category and one AI provider. Neither percentage tells us how many jobs have been automated. The theoretical rating dates to 2023; the March 2026 report analyses earlier Claude samples.',
  credit:'One rounded pair explicitly published alongside Figure 2: Computer & Math, 94% theoretical and 33% observed. No other category values inferred from the radar chart.'
});
const pairDefs10=[
  {id:'work',n:'01',title:'AI capability and young-worker employment',tag:'Two different measures',left:'capability',right:'work',reading:'To understand AI\'s role, we need to connect employers\' actual use of AI with changes in hiring, training and opportunities for young workers.',need:'Link actual employer AI adoption to junior hiring, training and career progression.'},
  {id:'skills',n:'02',title:'AI use is rising. How does it affect learning?',tag:'Survey and classroom trial',left:'adoption',right:'skills',reading:'How does regular use of different AI tools affect what people can do on their own? Answering this will require studies that follow the same people over time.',need:'Follow the same people over time, testing both assisted performance and what they can do without AI.'},
  {id:'culture',n:'03',title:'AI music is growing in supply. How much reaches listeners?',tag:'One streaming service',left:'uploads',right:'streams',reading:'The difference between upload share and stream share shows why we need to track what audiences actually read, watch or hear, alongside the income reaching human creators.',need:'Measure genuine audience attention and creator income, alongside AI content supply, across platforms.'}
];

function comparisonCard10(key,uid,home=false){
  const W=COMPARISON_DATA.work;
  const cards={
    capability:{lane:'AI capability',type:'Tests over time',title:'Models are completing longer tasks',measure:'Technical-task length at 80% predicted success, measured in human-expert time.',publisher:'METR',url:CAPABILITY7.metr.url,period:'Mar 2023 - Apr 2026 / Archived TH1.1',take:'In METR\'s archived series, estimated task length rose from <strong>under a minute for GPT-4 in March 2023</strong> to <strong>about three hours for Mythos Preview (early) in April 2026</strong>, at the same success threshold.'},
    work:{lane:'Employment',type:'Monthly payroll records',title:'Employment is falling among young workers',measure:'US workers aged 22-25, in occupations with the greatest potential for AI assistance.',publisher:'Stanford / ADP',url:W.sourceURL,period:'Sep 2021 - Aug 2026',take:'In these occupations, employment among <strong>22-25-year-olds fell 12.8%</strong> between November 2022 and August 2026. Older age groups saw smaller falls or increases.'},
    adoption:{lane:'AI adoption',type:'Repeated survey',title:'More employees use AI regularly at work',measure:'How often US employees report using AI in their role.',publisher:'Gallup',url:ADOPTION7.url,period:'May 2023 - Aug 2026',take:'Regular workplace AI use rose from <strong>11% in May 2023 to 32% in August 2026</strong>. Daily use grew from <strong>4% to 16%</strong> of US employees.'},
    skills:{lane:'Learning',type:'One experiment',title:'Students scored lower after practising with unrestricted AI',measure:'Maths exam results after AI-assisted practice at one Turkish high school.',publisher:'Bastani et al. / PNAS',url:source10('skills').url,period:'2023 trial / Published 2025',take:'After practising with unrestricted GPT, students\' adjusted unaided exam scores were <strong>5.4 points lower on a rescaled 0-100 scale</strong> than the no-AI group. The guided tutor group showed no clear difference.'},
    uploads:{lane:'AI music uploads',type:'Five company reports',title:'AI music accounts for a growing share of new uploads',measure:'Fully AI-generated tracks uploaded to Deezer each day.',publisher:'Deezer',url:COMPARISON_DATA.music.sourceURL,period:'Jan 2025 - Apr 2026 reports',take:'AI-generated music rose from <strong>about 10% of Deezer\'s daily uploads in January 2025</strong> to <strong>about 44% in April 2026</strong>.'},
    streams:{lane:'Music played',type:'One reported range',title:'AI music receives a small share of plays',measure:'Fully AI-generated tracks as a share of all recorded plays on Deezer.',publisher:'Deezer',url:COMPARISON_DATA.music.sourceURL,period:'Apr 2026 report',take:'In April 2026, Deezer reported that fully AI-generated tracks received <strong>1-3% of recorded plays</strong>, despite making up about 44% of new daily uploads.'}
  };
  const c=cards[key],human=['work','skills','streams'].includes(key);
  if(home&&key==='capability')Object.assign(c,{
    title:'Models are completing longer tasks',measure:'Software, machine-learning and cybersecurity tasks tested by METR.',
    take:'METR estimates that the best model it tested in 2026 could handle technical tasks taking a human expert <strong>about three hours</strong>, up from <strong>under a minute in 2023</strong>.',
    note:1,noteTitle:'How task length is measured',hint:'Task length is measured by the time a human expert would need. METR estimates it at an 80% success rate.'
  });
  if(home&&key==='work')Object.assign(c,{
    lane:'Employment',title:'Employment is falling among young workers',
    measure:'US workers aged 22-25, in occupations with the greatest potential for AI assistance.',
    take:'In these occupations, employment among <strong>22-25-year-olds fell 12.8%</strong> between November 2022 and August 2026. Older age groups saw smaller falls or increases.',
    note:2,noteTitle:'Which workers are included',hint:'Selected US employers using ADP payroll. Occupations are grouped by how much AI could assist with their tasks.'
  });
  const chartNote={capability:'Dots show tested models; the line joins record highs. Latest estimate: 3.1 hours (95% interval: 1.6-6.6). Mainly software, ML and cybersecurity tasks.',work:'100 = employment in November 2022; 90 = 10% fewer people employed.',adoption:'Any use: a few times a year or more. Regular: a few times a week or more. Daily users are included in both broader groups.',skills:'Adjusted score differences, rescaled to 0-100. One short-term trial; lasting skill changes were not tested.',uploads:'Five company reports: about 10%, over 18%, over 28%, about 39% and about 44%. The detector may change over time.',streams:'Recorded plays include fraud; Deezer also excludes AI music from recommendations.'}[key];
  const ref=home?`<sup><button type="button" class="note-ref12" data-home-note="${key}" aria-controls="home-note-${key}" aria-expanded="false" aria-label="Note ${c.note}: ${esc(c.noteTitle)}" title="${esc(c.hint)}">${c.note}</button></sup>`:'';
  return `<figure class="compare-figure10${human?' human10':''}" aria-labelledby="${uid}-title"><figcaption><div class="figure-meta10"><span class="lane10">${esc(c.lane)}</span>${home?'':`<span>${esc(c.type)}</span>`}</div><h3 id="${uid}-title">${esc(c.title)}${ref}</h3><p class="measure10">${esc(c.measure)}</p><div class="source10">${ext7(c.url,'Source: '+c.publisher)}<span>${esc(c.period)}</span></div></figcaption><div class="chart" id="${uid}" data-comparison-chart="${key}"></div><p class="chart-note10">${chartNote}</p><p class="figure-take10">${c.take}</p></figure>`;
}

function pairMarkup10(pair,home=false){
  const left=pair.id==='culture'?'culture':pair.left,right=pair.id==='culture'?'culture':pair.right;
  return `<section class="comparison10" id="compare-${pair.id}" ${home?'aria-label="AI capability and employment comparison"':`aria-labelledby="pair-${pair.id}"`}>${home?'<p class="snapshot-note12">Selected trends in AI capability and employment.</p>':`<header class="pair-head10"><span class="pair-no10">${pair.n}</span><h2 id="pair-${pair.id}">${esc(pair.title)}</h2><span class="pair-tag10">${esc(pair.tag)}</span></header>`}<div class="pair-grid10">${comparisonCard10(pair.left,`${pair.id}-left10`,home)}${comparisonCard10(pair.right,`${pair.id}-right10`,home)}</div>${home?homeNotes12():`<p class="pair-reading10"><b>What needs further research:</b> ${esc(pair.reading)}</p><div class="pair-footer10"><details class="pair-notes10"><summary>Sources, caveats &amp; more evidence</summary>${pairNotes10(pair)}</details><div class="pair-links10"><a href="#${left}">${esc(nameOf(left))}: research gaps &#8594;</a>${right===left?'':`<a href="#${right}">${esc(nameOf(right))}: research gaps &#8594;</a>`}</div></div>`}</section>`;
}

function homeNotes12(){
  return `<div class="home-notes12"><details id="home-note-capability"><summary>1. How task length is measured</summary><p>METR estimates the task length at which an AI model succeeds 80% of the time. Length is measured by the time a human expert would need. The tests cover software engineering, machine learning and cybersecurity.</p><p>The comparison runs from GPT-4 in March 2023 (53 seconds) to Claude Mythos Preview (early) in April 2026 (3.1 hours): about 209 times the task length. The latest estimate has a wide 95% uncertainty interval of 1.6-6.6 hours.</p><p>The line joins record-high estimates among 23 tested models. This archived benchmark covers well-defined tasks; how far the results carry over to complete jobs remains uncertain.</p><p>${ext7(CAPABILITY7.metr.url,'METR methods')} / <a href="#capability/source">Model results and data</a></p><button class="note-return13" type="button" data-home-return="capability">Back to capability chart &#8593;</button></details>
    <details id="home-note-work"><summary>2. Which workers are included</summary><p>Stanford and ADP track employment at a selected group of US employers using ADP payroll. This chart includes occupations in the highest fifth of estimated AI exposure: those whose tasks AI could potentially assist with most.</p><p>The six lines compare age groups, each with its own November 2022 baseline of 100. From that baseline to August 2026, employment fell 12.8% among ages 22-25. Changes among older groups ranged from a 3.8% fall to a 9.4% rise.</p><p>Actual AI use by these employers is unknown, and other economic changes could help explain the pattern. Comparing these trends alone cannot establish the effect of AI on employment.</p><p>${ext7(COMPARISON_DATA.work.sourceURL,'Stanford / ADP study')} / <a href="#work/source">Employment data and further evidence</a></p><button class="note-return13" type="button" data-home-return="work">Back to employment chart &#8593;</button></details></div>`;
}

function pairNotes10(p){
  if(p.id==='work')return `<div class="more10"><div><h4>AI capability</h4><p>METR estimates the task length at which a model succeeds 80% of the time, using the time a human expert would need. The chart includes 23 models released from 2023 onward, and connects record-high estimates. It does not use a fitted trend or project future progress.</p><p>The latest estimate is 3.1 hours, with a wide 95% uncertainty interval of 1.6-6.6 hours. METR's TH1.1 series is archived. Results on these technical tasks may transfer unevenly to complete jobs.</p><p>${ext7(CAPABILITY7.metr.url,'METR methods')} / ${ext7(CAPABILITY7.metr.data,'Original data')}</p></div><div><h4>Employment</h4><p>${esc(COMPARISON_DATA.work.caveat)}</p><p>${ext7(COMPARISON_DATA.work.sourceURL,'Stanford study')} / ${ext7(COMPARISON_DATA.work.dataURL,'Original data')}</p><p>A different finding: a Danish study found no extra decline in young workers' share of workplace employment where chatbot use was encouraged through 2024. ${ext7(originalWork10.support[0].url,'Humlum & Vestergaard')}</p></div></div><p class="source-actions7"><a href="#capability/source">Capability data and uncertainty</a><a href="#work/source">Employment data and caveats</a></p>`;
  if(p.id==='skills')return `<div class="more10"><div><h4>AI use</h4><p>Gallup asks US employees how often they use AI. Daily users are also included in regular and any use; the percentages must not be added. The survey leaves working time and tasks automated unresolved.</p><p>${ext7(ADOPTION7.url,'Gallup table and methods')} / ${ext7(ADOPTION7.referenceURL,'OWID visual reference')}</p><p>Redrawn from all three Gallup columns across eight survey waves. Our World in Data inspired the presentation; Gallup's table supplies the newer August 2026 values.</p></div><div><h4>Exam performance without AI</h4><p>Adjusted differences from the no-AI group, rescaled from 0-1 to 0-100: unrestricted GPT, -5.4 points (approximate 95% interval: -9.7 to -1.1); guided tutor, -0.4 (-2.9 to +2.1). Intervals are calculated as coefficient +/- 1.96 times the reported clustered standard error, then multiplied by 100.</p><p>${ext7(TOPIC_CHARTS.skills.dataUrl,'Bastani et al., Table 1, column 2')}</p><p>One Turkish high school, with immediate unaided exams. Both tools improved practice scores. The tutor estimate permits a small benefit or harm; this comparison does not test whether the two AI groups differ. Longer-term learning remains unresolved.</p></div></div><p class="source-actions7"><a href="#adoption/source">Survey data and caveats</a><a href="#skills/source">Trial data and caveats</a></p>`;
  return musicNotes10()+`<p>${ext7(TOPIC_CHARTS.culture.related[0].url,'Related experiment: creativity and diversity')}</p><p class="source-actions7"><a href="#culture/source">Source notes and research gaps</a></p>`;
}

function drawComparison10(el,key){
  if(key==='capability')drawCapabilityTrend7(el,270,{yLabel:'Human-expert time (80% success)'});
  else if(key==='work')drawWork10(el,{yLabel:'Number employed (Nov 2022 = 100)',endLabel:'Ages 22-25: down 12.8%'});
  else if(key==='adoption')drawAdoption15(el);
  else if(key==='skills')drawSkillsStat10(el);
  else if(key==='uploads')drawMusicTrend10(el);
  else drawStreamsStat10(el);
}

function drawWork10(el,labels={}){
  const W=COMPARISON_DATA.work;
  const rows=W.data;
  Charts.line(el,{h:270,table:false,legend:false,axisPlacement:'edges',aria:W.aria||W.measure,
    x:{min:2021.65,max:2026.9,ticks:[2022,2023,2024,2025,2026],ticksNarrow:[2022,2024,2026],fmt:String,tip:fmtDate,label:'Observation year'},
    y:{min:75,max:125,ticks:[80,90,100,110,120],fmt:String,tip:n=>n.toFixed(1),label:labels.yLabel||'Employment index / Nov 2022 = 100'},zero:100,
    series:[...W.series.slice(1),W.series[0]].map(s=>({name:s.label,color:s.columnIndex===1?'var(--human10, var(--s1))':'var(--ink-3)',w:s.columnIndex===1?2.8:1.4,op:s.columnIndex===1?1:.65,dash:s.columnIndex===1||s.columnIndex===2,end:false,markers:'none',pts:rows.map(r=>[monthlyYear10(r[0]),r[s.columnIndex]])})),
    ann:[{x:monthlyYear10(rows.at(-1)[0]),y:rows.at(-1)[1],text:labels.endLabel||'Ages 22-25 / 87.2',anchor:'end',dx:-5,dy:22,strong:true},{x:monthlyYear10(rows.at(-1)[0]),y:rows.at(-1)[5],text:'Other age groups',anchor:'end',dx:-5,dy:-18}]});
}

function drawSkillsStat10(el){
  el.classList.add('stat-chart10');
  const [base,tutor]=TOPIC_CHARTS.skills.chart.rows;
  el.innerHTML=`<div class="result-stat10"><p class="stat-label10">After practising with unrestricted GPT</p><p class="stat-value10">${Math.abs(base.value).toFixed(1)} <span>points lower</span></p><p class="stat-unit10">adjusted unaided exam score, rescaled to 0-100</p><div class="stat-context10"><span>With a guided AI tutor</span><b>${tutor.value.toFixed(1)} points</b><span>No clear difference from the no-AI group</span></div><p class="stat-note10">Both results compare students with a group that practised without AI.</p></div>`;
}

function drawStreamsStat10(el){
  el.classList.add('stat-chart10');
  const s=COMPARISON_DATA.music.streams;
  el.innerHTML=`<div class="result-stat10"><p class="stat-label10">AI-generated music receives</p><p class="stat-value10">${s.low}-${s.high}<span>%</span></p><p class="stat-unit10">of all recorded plays on Deezer</p><div class="stat-context10"><span>Reported in April 2026</span><b>One snapshot</b></div><p class="stat-note10">Upload share counts new tracks added; play share counts how often tracks are played.</p></div>`;
}

function drawMusicTrend10(el){
  const rows=COMPARISON_DATA.music.uploads;
  Charts.line(el,{h:270,legend:false,table:false,axisPlacement:'edges',aria:'Deezer reported share of daily uploads that are fully AI-generated. About 10 percent in January 2025, over 18 in April, over 28 in September, about 39 in January 2026 and about 44 in April. Line connects five rounded reports, not continuous observations.',
    x:{min:2024.95,max:2026.42,ticks:[ym(2025,1),ym(2025,7),ym(2026,1),ym(2026,4)],ticksNarrow:[ym(2025,1),ym(2025,7),ym(2026,4)],fmt:fmtDate,tip:fmtDate,label:'Report month'},
    y:{min:0,max:60,ticks:[0,20,40,60],fmt:n=>n+'%',tip:n=>n+'%',label:'AI-generated share of daily uploads'},
    series:[{name:'Reported upload share',color:'var(--ai10)',w:2.8,end:false,markers:'all',pts:rows.map(r=>[monthlyYear10(r.date),r.value,r.qualifier==='over'?`Published as over ${r.value}%; point marks the stated threshold.`:`Published as about ${r.value}%.`])}],
    ann:[{x:monthlyYear10(rows[0].date),y:10,text:'~10%',dx:7,dy:-16,strong:true},{x:monthlyYear10(rows.at(-1).date),y:44,text:'~44%',dx:-8,dy:-18,anchor:'end',strong:true}]});
}

function musicNotes10(){
  const m=COMPARISON_DATA.music;
  return `<p>The line connects five rounded figures published by Deezer. April and September 2025 are reported as "over" 18% and 28%. Later peak-day figures describe a different quantity and are excluded.</p><p>Deezer uses its own AI detector, whose coverage may change. Most reports do not specify the exact period measured. The 1-3% range for recorded plays comes from the April 2026 release and includes fraud. Deezer also excludes AI music from recommendations. This range cannot establish genuine audience attention or how much human-created music is being produced.</p><div class="data-scroll7"><table class="data7"><caption>Deezer daily upload reports</caption><thead><tr><th scope="col">Report</th><th scope="col">AI share</th><th scope="col">Source</th></tr></thead><tbody>${m.uploads.map(r=>`<tr><th scope="row">${esc(fmtDate(monthlyYear10(r.date)))}</th><td>${esc(r.qualifier)} ${r.value}%</td><td>${ext7(r.url,'Deezer')}</td></tr>`).join('')}</tbody></table></div><p class="source-actions7">${csvLink7('deezer-upload-share-reports.csv',[['report_date','percent','qualifier','source'],...m.uploads.map(r=>[r.date,r.value,r.qualifier,r.url])])}${ext7(m.sourceURL,'April 2026 streams and uploads')}</p>`;
}

function mountComparisons10(v){$$('[data-comparison-chart]',v).forEach(el=>drawComparison10(el,el.dataset.comparisonChart))}

function viewEmerging10(v,anchor){
  v.innerHTML=`<div class="wrap page10"><header class="intro10"><h1>AI is advancing. What is happening to people?</h1></header><nav class="jump10" aria-label="Comparisons">${pairDefs10.map(p=>`<a href="#emerging/${p.id}">${p.n} ${p.id==='work'?'Work & opportunities':p.id==='skills'?'Use & skills':'Content & attention'}</a>`).join('')}</nav><p class="reading-note10">Different populations and periods; these comparisons do not establish causation.</p>${pairDefs10.map(p=>pairMarkup10(p)).join('')}<div class="home-onward14"><a href="#gaps">Explore research gaps &#8594;</a></div></div>`;
  mountComparisons10(v);
  if(anchor)requestAnimationFrame(()=>document.getElementById('compare-'+anchor)?.scrollIntoView({block:'start',behavior:'instant'}));
}

function viewHome10(v){
  v.innerHTML=`<div class="wrap page10 home10"><header class="intro10 home-intro10"><h1>Tracking AI progress and human influence.</h1></header>${pairMarkup10(pairDefs10[0],true)}<div class="home-onward14"><a href="#emerging">Explore emerging evidence &#8594;</a></div></div>`;
  mountComparisons10(v);
  $$('[data-home-note]',v).forEach(button=>{
    const note=$('#home-note-'+button.dataset.homeNote,v);
    button.addEventListener('click',()=>{
      note.open=true;
      $('summary',note).focus({preventScroll:true});
      note.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    });
    note.addEventListener('toggle',()=>button.setAttribute('aria-expanded',String(note.open)));
    $('[data-home-return="'+button.dataset.homeNote+'"]',note).addEventListener('click',()=>{
      button.focus({preventScroll:true});
      button.closest('figure').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    });
  });
}

function viewResearch10(v){
  viewResearch11(v);
}

function viewPathways10(v){
  viewResearch11(v);
}

function gapQuestion10(x){
  return `<article class="gap-question10"><h3>${esc(x.title)}</h3><p>${esc(x.what)}</p><details><summary>Why this matters</summary><p>${esc(x.why)}</p></details></article>`;
}

function attachGaps10(v,id){
  const root=$('.pilot7',v);if(!root)return;
  $('.next-measure9',root)?.remove();
  const items=COPY.gap.items.filter(x=>x.link===id),first=items.slice(0,2),more=items.slice(2);
  const section=document.createElement('section');section.className='topic-gaps10';section.id='research-'+id;
  section.innerHTML=`<div class="gap-section-head10"><h2>What needs better measurement?</h2><p class="gap-summary10">${esc(SELECTED_EVIDENCE[id].gap)}</p></div><p class="gap-caution10">Proposed research directions, not a claim that no relevant studies exist. Based on the selected evidence; feasibility and wider coverage need review.</p>${first.map(gapQuestion10).join('')}${more.length?`<details class="gap-more10"><summary>${more.length} more research questions</summary>${more.map(gapQuestion10).join('')}</details>`:''}<div class="gap-links10"><a href="#contribute/add">Suggest evidence or a study &#8594;</a><a href="#gaps">All research gaps &#8594;</a></div>`;
  root.insertBefore(section,$('.pn5',root));
  const back=document.createElement('nav');back.className='research-back10';back.setAttribute('aria-label','Research navigation');
  back.innerHTML=`<a href="#gaps">&#8592; Research gaps</a><a href="#gaps/${id}">Missing indicators &#8595;</a>${comparisonFor10[id]?`<a href="#emerging/${comparisonFor10[id]}">See the comparison &#8594;</a>`:''}`;
  root.prepend(back);
  if(id==='adoption')appendExposure10(v);
  if(id==='work'){
    const download=$('#work-source a[download]',v);
    if(download)download.outerHTML=csvLink7('stanford-age-employment-2026-10-15.csv',[TOPIC_CHARTS.work.columns.concat(['source','checked']),...TOPIC_CHARTS.work.data.map(row=>row.concat([COMPARISON_DATA.work.dataURL,'2026-10-15']))]);
  }
  if(id==='capability'){
    const list=$('#capability-related .related7',v);
    list?.insertAdjacentHTML('beforeend',`<li><h3>${ext7('https://epoch.ai/data-insights/llm-inference-price-trends','The falling price of benchmark-level performance')} <span>Epoch AI</span></h3><p>Costs per token at fixed benchmark scores have fallen. This is not the total cost of a completed workflow, including checking and reruns.</p></li>`);
  }
  if(id==='culture'){
    const body=$('#culture-related .disclosure7-body',v);
    body?.insertAdjacentHTML('afterbegin','<figure class="exposure10"><figcaption><h3>AI music is growing as a share of uploads</h3><p>Deezer daily upload reports, January 2025 to April 2026.</p></figcaption><div class="chart" id="culture-uploads10"></div></figure>'+musicNotes10());
    $('#culture-related',v)?.addEventListener('toggle',e=>{if(e.target.open)drawMusicTrend10($('#culture-uploads10',v))});
  }
}

function appendExposure10(v){
  const e=COMPARISON_DATA.exposure,body=$('#adoption-related .disclosure7-body',v);
  if(!body)return;
  body.insertAdjacentHTML('afterbegin',`<figure class="exposure10"><figcaption><div class="publisher7">${ext7(e.sourceURL,'Source: Anthropic')}<span>${esc(e.vintage)}</span></div><h3>Potential exposure is not the same as observed use</h3><p>${esc(e.measure)}</p></figcaption><div class="chart" id="exposure-chart10"></div><p>${esc(e.caveat)}</p><p class="source-actions7">${ext7(e.sourceURL,'Full methods')}${e.dataURL?ext7(e.dataURL,'Original data'):''}${csvLink7('anthropic-exposure-comparison.csv',[e.columns,...e.data])}</p></figure>`);
  const draw=()=>{
    Charts.bars($('#exposure-chart10',v),{min:0,max:100,ticks:[0,25,50,75,100],fmt:n=>n+'%',table:false,rh:54,axisPlacement:'edges',catLabel:'Occupational category / weighted task coverage',valLabel:'Share (%)',aria:e.measure,rows:e.data.flatMap(r=>[{head:r[0]},{label:'Theoretical exposure',value:r[1],color:'var(--ink-3)'},{label:'Observed exposure (Claude)',value:r[2],color:'var(--ai10)'}])});
  };
  const details=$('#adoption-related',v);details.addEventListener('toggle',()=>{if(details.open)draw()});
}

function installWork10(){
  const w=COMPARISON_DATA.work,t=TOPIC_CHARTS.work;
  Object.assign(t,{scope:'US payroll sample / September 2026 release',title:w.title,measure:w.measure,credit:w.credit,takeaway:w.takeaway,dataUrl:w.dataURL,columns:['Month',...w.series.map(s=>s.label)],data:w.data.map(row=>row.map((value,i)=>i?Number(value.toFixed(2)):value)),chart:{kind:'work-ages'},notes:[['Coverage',w.population],['Chart data',w.credit],['Limit',w.caveat],['Selection',w.selection]]});
  const paper=t.related.find(item=>item.url==='https://digitaleconomy.stanford.edu/news/canariesaug26/');
  if(paper)paper.text='Explains the sample and alternative explanations. Its roughly 19% high-versus-low-exposure shortfall uses a different comparison. This chart follows six age groups within the most-exposed occupational quintile.';
  const source=source10('work');source.url=w.sourceURL;source.finding=w.takeaway;source.locate=w.credit;source.limit=w.caveat;source.why=w.selection;
  source.metrics=[['-12.8%','Ages 22-25, most-exposed quintile, Nov 2022-Aug 2026'],['-3.8% to +9.4%','Range across the five older age groups, same period']];
  source.checks=['Check all six age groups within quintile 5, with separate November 2022 baselines of 100.','Do not substitute the paper\'s 19% high/low exposure shortfall for an age-group comparison.'];
  SELECTED_EVIDENCE.work.summary=w.takeaway;SELECTED_EVIDENCE.work.selection=w.selection;COPY.home.card.what.work=w.takeaway;COPY.evidence.rows.work.line=w.takeaway;
  drawSelectedChart8=function(el,t){if(t.chart.kind==='work-ages')drawWork10(el);else baseSelectedChart10(el,t)};
}

function updateMethod10(v){
  const list=$('#m-chart-sources details ul',v);
  if(list){const entry=[...list.children].find(li=>li.textContent.startsWith('Entry-level jobs:'));if(entry)entry.textContent='Entry-level jobs: '+COMPARISON_DATA.work.credit;
    const adoption=[...list.children].find(li=>li.textContent.startsWith('AI adoption:'));if(adoption)adoption.textContent='AI adoption: all 24 values in Gallup\'s eight survey waves, May 2023-August 2026. Three overlapping groups: daily, a few times a week or more, and a few times a year or more. Dates follow Gallup\'s table. Presentation draws on Our World in Data; all values come directly from Gallup.';
    list.insertAdjacentHTML('beforeend',`<li>Adoption related evidence: ${esc(COMPARISON_DATA.exposure.credit||COMPARISON_DATA.exposure.measure)}</li>`)}
  const para=$('#m-chart-sources > p',v);if(para)para.textContent='The step pages explain what each source measures and which questions remain open. Home and Emerging evidence show larger comparisons. Each chart keeps its own source, population, period and scale, with source data available below or on the linked step page.';
  $('#m-chart-sources h2',v).textContent='Indicators, charts and data';
  $('#m-chart-sources details summary',v).textContent='How the source data are used';
  list?.insertAdjacentHTML('beforeend','<li>Capability: every tested model remains visible as a point. The line joins estimates that set a new record at the time; it does not project future progress.</li><li>Culture comparison: the line connects five rounded Deezer reports of daily upload share from January 2025 to April 2026. Later peak-day figures are excluded. The 1-3% share of recorded plays comes from one April 2026 report.</li><li>Supporting robotaxi example: CPUC passenger-travel records processed by Our World in Data. The displayed series starts in November 2023, after Cruise stopped operating. All 32 monthly values through June 2026 are retained. The chart does not measure employment effects or remote assistance.</li>');
  const status=$('#m-status > p',v);if(status)status.textContent='The selected figures were checked with AI assistance on 14-15 October 2026. Gallup\'s three usage groups and the OWID supporting sources were checked on 16 October 2026. Independent human review of the figures and interpretations is still needed. The Futures section remains unverified.';
}

installWork10();
COPY.coverage.takeaway='The selected studies tell us less about how people\'s skills change over time and who keeps control of decisions.';
document.body.insertAdjacentHTML('afterbegin','<a class="skip10" href="#main-content">Skip to content</a>');
$('.skip10').addEventListener('click',e=>{e.preventDefault();e.stopPropagation();$('#view').focus();$('#view').scrollIntoView({block:'start'})});
$('.nav').innerHTML=[['home','Home'],['emerging','Emerging evidence'],['gaps','Research gaps'],['method','Method'],['contribute','Contribute']].map(([id,label])=>`<a href="#${id}">${label}</a>`).join('');
$('.ft .wrap').innerHTML='<span><b>Gradual Disempowerment Dashboard</b> / Better Futures Project / Zhang Yue</span><span><a href="#contribute/about">About</a> / <a href="#method">Method</a> / <a href="#futures">Futures</a></span>';
render=function(id){
  clearInterval(tourTimer);tourTimer=null;
  const [raw,sub]=String(id).split('/'),base=['evidence','record','map','pathways'].includes(raw)?'gaps':raw==='why'?'contribute':raw;
  if(base==='library'){render(ORDER.includes(sub)?sub+'/more':'gaps');return}
  if(base==='review'){render(ORDER.includes(sub)?sub:'gaps');return}
  const supporting=base==='handover'&&sub==='robotaxis';
  if(ORDER.includes(base)&&sub&&!['source','more'].includes(sub)&&!supporting&&!SELECTED_EVIDENCE[base].sources.some(s=>s.id===sub||(s.legacy||[]).includes(sub))){render(base);return}
  const v=$('#view');let active=base;
  window.scrollTo({top:0,behavior:'instant'});
  if(base==='home'||!base)viewHome10(v);
  else if(base==='emerging')viewEmerging10(v,sub);
  else if(base==='gaps'&&!ORDER.includes(sub))viewResearch10(v);
  else if(base==='gaps'&&ORDER.includes(sub))viewMeasurement11(v,sub,'gaps');
  else if(ORDER.includes(base)&&(!sub||['source','more'].includes(sub)||supporting)){active='gaps';viewMeasurement11(v,base,sub)}
  else{
    baseRender10(id);
    if(ORDER.includes(base))active='gaps';
    else if(base==='method')updateMethod10(v);
    else if(base==='details')active='gaps';
    else if(!['contribute','why','futures','method'].includes(base)){viewHome10(v);active='home'}
  }
  current=id;
  document.title=(ORDER.includes(base)?nameOf(base):base==='gaps'&&ORDER.includes(sub)?nameOf(sub):{home:'Home',emerging:'Emerging evidence',gaps:'Research gaps',method:'Method',contribute:'Contribute',futures:'Futures'}[active]||'Dashboard')+' / Gradual Disempowerment Dashboard';
  $$('.nav a').forEach(a=>a.getAttribute('href')==='#'+active?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
  $$('details',v).forEach(d=>d.addEventListener('toggle',()=>{if(d.open)Charts.redraw()}));
};
