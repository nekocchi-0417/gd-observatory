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
  credit:'All 60 months and six age groups from Stanford / ADP, September 2026 release. Highest-exposure quintile only; each age group\'s November 2022 employment = 100. No pooling or smoothing.',
  takeaway:'From November 2022 to August 2026, employment fell 12.8% for ages 22-25 in the most AI-exposed occupations. Older groups ranged from a 3.8% fall to a 9.4% rise. This does not establish how much of the change AI caused.',
  caveat:'Selected US ADP firms, not the whole labour market. Age groups are not fixed cohorts; exposure is not actual AI adoption. Occupational mix and other economic changes can explain differences. No confidence intervals are supplied.',
  selection:'Shows actual employment by age within the same exposure group. Every published age group is retained, rather than selecting the most dramatic older comparison.',
  aria:'Stanford ADP employment in the highest-exposure quintile. Six age groups, September 2021 to August 2026, November 2022 equals 100. Ages 22-25 end at 87.23; older group endpoints range from 96.19 to 109.4.'
});
Object.assign(COMPARISON_DATA.exposure,{
  measure:'Computer & Math occupations: 94% theoretical exposure versus 33% observed exposure, using Anthropic\'s weighted task-coverage measures.',
  caveat:'One category and one provider. These are differently constructed exposure measures, not shares of jobs automated. The theoretical rubric dates to 2023; the March 2026 report uses earlier Claude samples.',
  credit:'One rounded pair explicitly published alongside Figure 2: Computer & Math, 94% theoretical and 33% observed. No other category values inferred from the radar chart.'
});
const pairDefs10=[
  {id:'work',n:'01',title:'AI can do more. Are people losing opportunities?',tag:'Early employment signal',left:'capability',right:'work',reading:'Technical-task capability has advanced sharply. Younger workers are falling behind older workers in the most AI-exposed occupations in this US sample. The charts do not establish that one caused the other.',need:'Link actual employer AI adoption to junior hiring, training and career progression.'},
  {id:'skills',n:'02',title:'More AI use. What happens to unaided skills?',tag:'One experiment, not a population trend',left:'adoption',right:'skills',reading:'A classroom trial found lower unaided scores after unrestricted GPT practice. We do not yet have a comparable long-term skills trend to set against rising workplace use.',need:'Follow the same people over time, testing both assisted performance and what they can do without AI.'},
  {id:'culture',n:'03',title:'More AI content does not mean more attention.',tag:'A counterpoint',left:'uploads',right:'streams',reading:'AI music grew rapidly as a share of new uploads on Deezer, but remained a small share of recorded streams. More supply alone does not show that human creators are losing audiences or income.',need:'Measure genuine audience attention and creator income, alongside AI content supply, across platforms.'}
];

function comparisonCard10(key,uid){
  const W=COMPARISON_DATA.work;
  const cards={
    capability:{lane:'AI capability',type:'Benchmark trend',title:'Longer tasks, at the same success rate',measure:'Human-expert time for technical tasks AI completes with 80% success.',publisher:'METR',url:CAPABILITY7.metr.url,period:'Mar 2023 - Apr 2026',take:'<strong>About 209 times longer:</strong> from 53 seconds to 3.1 hours. These are technical test tasks, not whole jobs.'},
    work:{lane:'Human outcomes',type:'Employment trend',title:'Young workers are falling behind',measure:W.measure,publisher:'Stanford / ADP',url:W.sourceURL,period:'US payroll sample / Sep 2021 - Aug 2026',take:'Employment among ages 22-25 fell 12.8% from November 2022. Older groups ranged from a 3.8% fall to a 9.4% rise. AI causation is not established.'},
    adoption:{lane:'AI adoption',type:'Survey trend',title:'Regular AI use is becoming common',measure:'US employees using AI at work a few times a week or more.',publisher:'Gallup',url:ADOPTION7.url,period:'May 2023 - Aug 2026',take:'<strong>11% to 32%</strong> of US employees report regular use. This counts people using AI, not work automated.'},
    skills:{lane:'Human outcomes',type:'One experiment / not a trend',title:'What happens after AI-assisted practice?',measure:'Unaided maths exam scores after practice, compared with students who had no AI.',publisher:'Bastani et al. / PNAS',url:source10('skills').url,period:'One Turkish school / 2023 trial',take:'Unrestricted GPT practice was followed by lower unaided scores. <strong>The guided tutor showed no clear difference</strong> from the no-AI group.'},
    uploads:{lane:'AI-generated supply',type:'Reported trend',title:'AI music is taking up more of the supply',measure:'Fully AI-generated tracks as a share of new daily uploads on Deezer.',publisher:'Deezer',url:COMPARISON_DATA.music.sourceURL,period:'Jan 2025 - Apr 2026 reports',take:'<strong>About 10% to 44%</strong> of daily uploads, across five company reports. Later peak-day figures are excluded from this comparison.'},
    streams:{lane:'Audience attention proxy',type:'Reported range / not a trend',title:'But it is a small share of recorded streams',measure:'Fully AI-generated tracks as a share of all recorded streams on Deezer.',publisher:'Deezer',url:COMPARISON_DATA.music.sourceURL,period:'Apr 2026 report',take:'<strong>Streams are not the same as human listening.</strong> The figure includes fraudulent activity; Deezer also excludes AI music from recommendations.'}
  };
  const c=cards[key],human=['work','skills','streams'].includes(key);
  const chartNote=key==='capability'?'Line: record-high estimates. Dots: all tested models.':key==='uploads'?'Line connects rounded reports; not continuous observations.':'';
  return `<figure class="compare-figure10${human?' human10':''}" aria-labelledby="${uid}-title"><figcaption><div class="figure-meta10"><span class="lane10">${esc(c.lane)}</span><span>${esc(c.type)}</span></div><h3 id="${uid}-title">${esc(c.title)}</h3><p class="measure10">${esc(c.measure)}</p><div class="source10">${ext7(c.url,c.publisher)}<span>${esc(c.period)}</span></div></figcaption><div class="chart" id="${uid}" data-comparison-chart="${key}"></div><p class="chart-note10">${chartNote}</p><p class="figure-take10">${key==='work'?esc(c.take):c.take}</p></figure>`;
}

function pairMarkup10(pair,home=false){
  const left=pair.id==='culture'?'culture':pair.left,right=pair.id==='culture'?'culture':pair.right;
  return `<section class="comparison10" id="compare-${pair.id}" ${home?'aria-label="AI capability and employment comparison"':`aria-labelledby="pair-${pair.id}"`}>${home?'':`<header class="pair-head10"><span class="pair-no10">${pair.n}</span><h2 id="pair-${pair.id}">${esc(pair.title)}</h2><span class="pair-tag10">${esc(pair.tag)}</span></header>`}<div class="pair-grid10">${comparisonCard10(pair.left,`${pair.id}-left10`)}${comparisonCard10(pair.right,`${pair.id}-right10`)}</div><p class="pair-reading10"><b>Our reading:</b> ${esc(pair.reading)}</p>${home?'':`<div class="pair-footer10"><details class="pair-notes10"><summary>Sources, caveats &amp; more evidence</summary>${pairNotes10(pair)}</details><div class="pair-links10"><a href="#${left}">${esc(nameOf(left))}: research gaps &#8594;</a>${right===left?'':`<a href="#${right}">${esc(nameOf(right))}: research gaps &#8594;</a>`}</div></div>`}</section>`;
}

function pairNotes10(p){
  if(p.id==='work')return `<div class="more10"><div><h4>AI capability</h4><p>All 23 METR TH1.1 models released from 2023 onward, at 80% success. The line joins new record-high estimates; it is not METR's fitted trend or a forecast. Human-expert task time, not AI runtime. Latest estimate: 3.1 hours; 95% interval: 1.6-6.6 hours. The series is archived.</p><p>${ext7(CAPABILITY7.metr.url,'METR methods')} / ${ext7(CAPABILITY7.metr.data,'Original data')}</p></div><div><h4>Employment</h4><p>${esc(COMPARISON_DATA.work.caveat)}</p><p>${ext7(COMPARISON_DATA.work.sourceURL,'Stanford study')} / ${ext7(COMPARISON_DATA.work.dataURL,'Original data')}</p><p>Counterevidence: a Danish study found no extra decline in young workers' employment share at workplaces encouraging chatbot use through 2024. ${ext7(originalWork10.support[0].url,'Humlum & Vestergaard')}</p></div></div><p class="source-actions7"><a href="#capability/source">Capability data &amp; intervals</a><a href="#work/source">Employment data &amp; caveats</a></p>`;
  if(p.id==='skills')return `<div class="more10"><div><h4>AI use</h4><p>Eight self-reported Gallup survey waves. US employees, including daily users. This is not a measure of dependence.</p><p>${ext7(ADOPTION7.url,'Gallup table and methods')}</p><p>${ext7(COMPARISON_DATA.exposure.sourceURL,'Anthropic: potential exposure vs observed use')} provides occupational context, from Claude rather than all AI use.</p></div><div><h4>Unaided performance</h4><p>Adjusted exam effects on a 100-point scale: unrestricted GPT, -5.4 points (approximate 95% interval: -9.7 to -1.1); guided tutor, -0.4 (-2.9 to +2.1). This is one trial, not a trend in skills.</p><p>${ext7(TOPIC_CHARTS.skills.dataUrl,'Bastani et al., Table 1')}</p><p>Both tools improved assisted practice performance. A nonsignificant tutor effect does not prove equivalence or establish a difference between the two AI groups.</p></div></div><p class="source-actions7"><a href="#adoption/source">Survey data &amp; caveats</a><a href="#skills/source">Trial data &amp; caveats</a></p>`;
  return musicNotes10()+`<p>${ext7(TOPIC_CHARTS.culture.related[0].url,'Related experiment: creativity and diversity')}</p><p class="source-actions7"><a href="#culture/source">Source notes and research gaps</a></p>`;
}

function drawComparison10(el,key){
  if(key==='capability')drawCapabilityTrend7(el,270);
  else if(key==='work')drawWork10(el);
  else if(key==='adoption')Charts.line(el,{h:270,legend:false,table:false,axisPlacement:'edges',aria:'Gallup: US employees reporting frequent AI use, 11 percent in May 2023 to 32 percent in August 2026. Eight survey waves.',
    x:{min:2023,max:2026.9,ticks:[2023,2024,2025,2026],fmt:String,tip:fmtDate,label:'Survey year'},y:{min:0,max:40,ticks:[0,10,20,30,40],fmt:n=>n+'%',tip:n=>n+'%',label:'Share of US employees / frequent AI use'},
    series:[{name:'Frequent AI use',color:'var(--ai10)',w:2.8,end:false,markers:'all',pts:ADOPTION7.rows.map(r=>[monthlyYear10(r.date),r.value])}],ann:[{x:monthlyYear10(ADOPTION7.rows[0].date),y:11,text:'11%',dx:6,dy:-16,strong:true},{x:monthlyYear10(ADOPTION7.rows.at(-1).date),y:32,text:'32%',dx:-6,dy:-18,anchor:'end',strong:true}]});
  else if(key==='skills')drawSkillsStat10(el);
  else if(key==='uploads')drawMusicTrend10(el);
  else drawStreamsStat10(el);
}

function drawWork10(el){
  const W=COMPARISON_DATA.work;
  const rows=W.data;
  Charts.line(el,{h:270,table:false,legend:false,axisPlacement:'edges',aria:W.aria||W.measure,
    x:{min:2021.65,max:2026.9,ticks:[2022,2023,2024,2025,2026],ticksNarrow:[2022,2024,2026],fmt:String,tip:fmtDate,label:'Observation year'},
    y:{min:75,max:125,ticks:[80,90,100,110,120],fmt:String,tip:n=>n.toFixed(1),label:'Employment index / Nov 2022 = 100'},zero:100,
    series:[...W.series.slice(1),W.series[0]].map(s=>({name:s.label,color:s.columnIndex===1?'var(--human10)':'var(--ink-3)',w:s.columnIndex===1?2.8:1.4,op:s.columnIndex===1?1:.65,dash:s.columnIndex===2,end:false,markers:'none',pts:rows.map(r=>[monthlyYear10(r[0]),r[s.columnIndex]])})),
    ann:[{x:monthlyYear10(rows.at(-1)[0]),y:rows.at(-1)[1],text:'Ages 22-25 / 87.2',anchor:'end',dx:-5,dy:22,strong:true},{x:monthlyYear10(rows.at(-1)[0]),y:rows.at(-1)[5],text:'Other age groups',anchor:'end',dx:-5,dy:-18}]});
}

function drawSkillsStat10(el){
  el.classList.add('stat-chart10');
  const [base,tutor]=TOPIC_CHARTS.skills.chart.rows;
  el.innerHTML=`<div class="result-stat10"><p class="stat-label10">After unrestricted GPT practice</p><p class="stat-value10">${Math.abs(base.value).toFixed(1)} <span>points lower</span></p><p class="stat-unit10">on a 100-point unaided maths exam</p><div class="stat-context10"><span>With a guided AI tutor</span><b>${tutor.value.toFixed(1)} points</b><span>No clear difference from the no-AI group</span></div><p class="stat-note10">One trial, not evidence of a long-term decline.</p></div>`;
}

function drawStreamsStat10(el){
  el.classList.add('stat-chart10');
  const s=COMPARISON_DATA.music.streams;
  el.innerHTML=`<div class="result-stat10"><p class="stat-label10">AI-generated music</p><p class="stat-value10">${s.low}-${s.high}<span>%</span></p><p class="stat-unit10">of all recorded streams on Deezer</p><div class="stat-context10"><span>Reported in April 2026</span><b>A range, not a time trend</b></div><p class="stat-note10">New uploads and recorded streams have different denominators.</p></div>`;
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
  return `<p>Five company reports, not a continuous dataset. The line connects rounded figures; April and September 2025 are published as "over" 18% and 28%. Later peak-day figures are a different statistic and are excluded.</p><p>One platform and a proprietary detector whose coverage may change. Most sampling windows are unspecified. The 1-3% stream range is from the April 2026 release and includes fraud; recommendations also exclude AI music. It is not a confidence interval or a measure of human-created output.</p><div class="data-scroll7"><table class="data7"><caption>Deezer daily upload reports</caption><thead><tr><th scope="col">Report</th><th scope="col">AI share</th><th scope="col">Source</th></tr></thead><tbody>${m.uploads.map(r=>`<tr><th scope="row">${esc(fmtDate(monthlyYear10(r.date)))}</th><td>${esc(r.qualifier)} ${r.value}%</td><td>${ext7(r.url,'Deezer')}</td></tr>`).join('')}</tbody></table></div><p class="source-actions7">${csvLink7('deezer-upload-share-reports.csv',[['report_date','percent','qualifier','source'],...m.uploads.map(r=>[r.date,r.value,r.qualifier,r.url])])}${ext7(m.sourceURL,'April 2026 streams and uploads')}</p>`;
}

function mountComparisons10(v){$$('[data-comparison-chart]',v).forEach(el=>drawComparison10(el,el.dataset.comparisonChart))}

function viewEmerging10(v,anchor){
  v.innerHTML=`<div class="wrap page10"><header class="intro10"><div class="eyebrow10">Gradual Disempowerment Dashboard / Emerging evidence</div><h1>AI is advancing. What is happening to people?</h1><p>Growing capabilities, changing work and questions about human control. The evidence is uneven; the questions are consequential.</p></header><nav class="jump10" aria-label="Comparisons">${pairDefs10.map(p=>`<a href="#emerging/${p.id}">${p.n} ${p.id==='work'?'Work & opportunities':p.id==='skills'?'Use & skills':'Content & attention'}</a>`).join('')}</nav><p class="reading-note10">Each chart keeps its own units, population and dates. Side-by-side trends are not proof of cause and effect.</p>${pairDefs10.map(p=>pairMarkup10(p)).join('')}<section class="end10"><h2>Are people retaining the ability to act, decide and earn?</h2><div><p>These signals do not answer that larger question. The next step is to measure the missing links.</p><a class="main-link10" href="#gaps">Explore research gaps &#8594;</a></div></section></div>`;
  mountComparisons10(v);
  if(anchor)requestAnimationFrame(()=>document.getElementById('compare-'+anchor)?.scrollIntoView({block:'start',behavior:'instant'}));
}

function viewHome10(v){
  v.innerHTML=`<div class="wrap page10 home10"><header class="intro10 home-intro10"><div class="eyebrow10">Better Futures Project / Zhang Yue</div><h1>Tracking AI progress and human influence.</h1><p>Gradual disempowerment is the risk that people lose influence as AI takes on more work and decisions. What do the early signals show?</p><div class="intro-links10">${ext7('https://gradual-disempowerment.ai/','Original paper')}<a href="#pathways">The proposed pathways &#8594;</a></div></header>${pairMarkup10(pairDefs10[0],true)}<section class="home-next10"><div><h2>A first signal, not the whole picture.</h2><p>Explore changes in work, skills and culture, including evidence that complicates the story.</p></div><a class="main-link10" href="#emerging">Explore emerging evidence &#8594;</a></section><section class="home-doors10"><article><h2>What needs measuring?</h2><p>Find selected evidence, missing indicators and concrete research questions at each step.</p><a href="#gaps">Research gaps &#8594;</a></article><article><h2>How could influence be lost?</h2><p>Follow the proposed links from AI capability and use to work, culture and human control.</p><a href="#pathways">Explore the pathways &#8594;</a></article></section></div>`;
  mountComparisons10(v);
}

function viewResearch10(v){
  v.innerHTML=`<div class="wrap page10"><header class="intro10"><div class="eyebrow10">Research gaps</div><h1>What do we still need to measure?</h1><p>Selected evidence and practical research questions, organised by step in the gradual disempowerment pathways.</p><div class="intro-links10"><a href="#pathways">See the pathways &#8594;</a><a href="#method/selection">How indicators are selected &#8594;</a></div></header><div class="gap-index-head10" aria-hidden="true"><span></span><span>Step / selected evidence</span><span>Next measurement needed</span><span></span></div><div class="gap-index10">${ORDER.map((id,i)=>`<a href="#${id}"><span class="step10">${String(i+1).padStart(2,'0')}</span><div><h2>${esc(nameOf(id))}</h2><small>${esc(topicLabels10[id])}</small></div><p>${esc(SELECTED_EVIDENCE[id].gap)}</p><span class="row-arrow10" aria-hidden="true">&#8594;</span></a>`).join('')}</div><p class="gap-caution10">Proposed priorities based on selected sources, not a systematic review of all research. Contributions and contrary findings are welcome.</p></div>`;
}

function viewPathways10(v){
  v.innerHTML=`<div class="pathways10"><header class="wrap page10 intro10 path-intro10"><div class="eyebrow10">The proposed pathways</div><h1>How might AI weaken human influence?</h1><p>The pathways are adapted from the ${ext7('https://gradual-disempowerment.ai/','Gradual Disempowerment paper')}. Each step links to its evidence and research gaps.</p></header><div id="prototype-map10"></div><section class="wrap home-next10"><div><h2>From a pathway to a research question.</h2><p>Coverage colours are provisional, AI-assisted judgements, not measured risk scores.</p></div><a class="main-link10" href="#gaps">Research gaps &#8594;</a></section></div>`;
  mountMap5($('#prototype-map10',v),{onStop:id=>go(id)});
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
  const source=source10('work');source.url=w.sourceURL;source.finding=w.takeaway;source.locate=w.credit;source.limit=w.caveat;source.why=w.selection;
  source.metrics=[['-12.8%','Ages 22-25, most-exposed quintile, Nov 2022-Aug 2026'],['-3.8% to +9.4%','Range across the five older age groups, same period']];
  source.checks=['Check all six age groups within quintile 5, with separate November 2022 baselines of 100.','Do not substitute the paper\'s 19% high/low exposure shortfall for an age-group comparison.'];
  SELECTED_EVIDENCE.work.summary=w.takeaway;SELECTED_EVIDENCE.work.selection=w.selection;COPY.home.card.what.work=w.takeaway;COPY.evidence.rows.work.line=w.takeaway;
  drawSelectedChart8=function(el,t){if(t.chart.kind==='work-ages')drawWork10(el);else baseSelectedChart10(el,t)};
}

function updateMethod10(v){
  const list=$('#m-chart-sources details ul',v);
  if(list){const entry=[...list.children].find(li=>li.textContent.startsWith('Entry-level jobs:'));if(entry)entry.textContent='Entry-level jobs: '+COMPARISON_DATA.work.credit;
    list.insertAdjacentHTML('beforeend',`<li>Adoption supporting chart: ${esc(COMPARISON_DATA.exposure.credit||COMPARISON_DATA.exposure.measure)}</li>`)}
  const para=$('#m-chart-sources > p',v);if(para)para.textContent='Each chart uses a named source and an explicit definition. Comparisons keep datasets separate, with their own populations, periods and axes. Placing charts together does not establish that one trend caused the other.';
  list?.insertAdjacentHTML('beforeend','<li>Capability: the line connects record-high estimates among the tested models; all model points remain visible. It is not a fitted trend or forecast.</li><li>Culture comparison: five rounded Deezer upload-share reports, January 2025-April 2026; later peak-day figures are excluded. The 1-3% stream share is a separate snapshot, not a trend.</li>');
  const status=$('#m-status > p',v);if(status)status.textContent='The original selected sources were checked with AI assistance on 14 October 2026. Comparison additions were checked against primary sources on 15 October 2026. These checks are not independent review or human sign-off.';
}

installWork10();
COPY.coverage.takeaway='In this selection, direct measures of skills over time, government decisions and human influence remain limited.';
document.body.insertAdjacentHTML('afterbegin','<a class="skip10" href="#main-content">Skip to content</a>');
$('.skip10').addEventListener('click',e=>{e.preventDefault();e.stopPropagation();$('#view').focus();$('#view').scrollIntoView({block:'start'})});
$('.nav').innerHTML=[['home','Home'],['emerging','Emerging evidence'],['gaps','Research gaps'],['pathways','Pathways'],['method','Method'],['contribute','Contribute']].map(([id,label])=>`<a href="#${id}">${label}</a>`).join('');
$('.ft .wrap').innerHTML='<span><b>Gradual Disempowerment Dashboard</b> / Better Futures Project / Zhang Yue</span><span>AI-assisted source summaries / <a href="#method">Method</a> / <a href="#futures">Futures</a></span>';
render=function(id){
  clearInterval(tourTimer);tourTimer=null;
  const [raw,sub]=String(id).split('/'),base=raw==='evidence'||raw==='record'?'gaps':raw==='map'?'pathways':raw==='why'?'contribute':raw;
  if(['library','review'].includes(base)){render(ORDER.includes(sub)?sub:'gaps');return}
  if(ORDER.includes(base)&&sub&&!['source','more'].includes(sub)&&!SELECTED_EVIDENCE[base].sources.some(s=>s.id===sub||(s.legacy||[]).includes(sub))){render(base);return}
  const v=$('#view');let active=base;
  window.scrollTo({top:0,behavior:'instant'});
  if(base==='home'||!base)viewHome10(v);
  else if(base==='emerging')viewEmerging10(v,sub);
  else if(base==='pathways')viewPathways10(v);
  else if(base==='gaps'&&!ORDER.includes(sub))viewResearch10(v);
  else if(base==='gaps'&&ORDER.includes(sub)){baseRender10(sub);attachGaps10(v,sub);requestAnimationFrame(()=>document.getElementById('research-'+sub)?.scrollIntoView({block:'start',behavior:'instant'}))}
  else{
    const publicId=ORDER.includes(base)&&['source','more'].includes(sub)?base:id;
    baseRender10(publicId);
    if(ORDER.includes(base)){active='gaps';if(!sub||['source','more'].includes(sub)){attachGaps10(v,base);if(sub){const d=$('#'+base+(sub==='source'?'-source':'-related'),v);if(d){d.open=true;requestAnimationFrame(()=>d.scrollIntoView({block:'start',behavior:'instant'}))}}}}
    else if(base==='method')updateMethod10(v);
    else if(base==='details')active='gaps';
    else if(!['contribute','why','futures','method'].includes(base)){viewHome10(v);active='home'}
  }
  current=id;
  document.title=(ORDER.includes(base)?nameOf(base):{home:'Home',emerging:'Emerging evidence',gaps:'Research gaps',pathways:'Pathways',method:'Method',contribute:'Contribute',futures:'Futures'}[active]||'Dashboard')+' / Gradual Disempowerment Dashboard';
  $$('.nav a').forEach(a=>a.getAttribute('href')==='#'+active?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
  $$('details',v).forEach(d=>d.addEventListener('toggle',()=>{if(d.open)Charts.redraw()}));
};
