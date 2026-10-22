'use strict';

const evidenceCopy = {
  capability:{topic:'AI capability',title:'Models are completing longer technical tasks',measure:'Task length at 80% predicted success, measured in human-expert time.',source:'METR',period:'Mar 2023 - Apr 2026 / archived TH1.1',reading:'The archived estimate rose from under a minute for GPT-4 to about three hours for the latest model in this series. The latter estimate has a wide 95% interval of 1.6-6.6 hours.',note:'All tested models are shown. The line connects record highs; it is not a forecast.'},
  work:{topic:'Entry-level jobs',title:'Employment fell for young workers in exposed jobs',measure:'US payroll employment in occupations with the greatest estimated AI exposure.',source:'Stanford / ADP',period:'Sep 2021 - Aug 2026 / September release',reading:'By August 2026, employment for ages 22-25 was 12.8% below its November 2022 level in these occupations. Older age groups saw smaller falls or increases.',note:'Red: ages 22-25. Grey: each of the five older age groups. 100 = November 2022 employment.'},
  adoption:{topic:'AI adoption',title:'More employees use AI regularly at work',measure:'US employees reporting AI use at each frequency. The groups overlap.',source:'Gallup',period:'May 2023 - Aug 2026 / eight survey waves',reading:'Regular use rose from 11% to 32% of US employees across these waves. Daily use rose from 4% to 16%.',note:'Any use: at least a few times a year. Regular: at least a few times a week. Daily is included in both.'},
  skills:{topic:'Skills and judgement',title:'Tool design changed what students learned',measure:'Maths exam scores without AI, after practising with an AI tool or without one.',source:'Bastani et al. / PNAS',period:'Turkish classroom trial / published 2025',reading:'Unrestricted GPT improved assisted practice but lowered subsequent unaided exam scores. The guided tutor group showed no clear difference from the no-AI group.',note:'Adjusted differences versus the no-AI control, on a rescaled 0-100 score. One short-term experiment.'},
  uploads:{topic:'Culture and information',title:'AI music is taking a larger share of new uploads',measure:'Tracks detected as fully AI-generated, as a share of Deezer\'s daily deliveries.',source:'Deezer',period:'Jan 2025 - Apr 2026 / six company reports',reading:'Deezer reported about 10% in January 2025 and about 44% in April 2026. These are qualified company figures with changing observation windows.',note:'Dots preserve reported values and thresholds. Dashed lines connect announcements; later peak-day figures are excluded.'},
  streams:{topic:'Culture and information',title:'Its share of plays remains much smaller',measure:'Fully AI-generated tracks as a share of all recorded streams on Deezer.',source:'Deezer',period:'April 2026 report / one snapshot',reading:'The same April release reported a 1-3% share of streams. Recorded plays include fraudulent activity, and Deezer excludes detected AI music from recommendations.',note:'A reported range with no specified sampling window. It is not a measured trend or a share of creator income.'}
};
const evidencePairs = [
  {id:'work',title:'AI can do more. Early-career opportunities are changing.',panels:['capability','work'],question:'Connecting these patterns requires evidence on employers\' actual AI use, hiring and training decisions.',topics:['capability','work']},
  {id:'skills',title:'As AI use spreads, the way people use it matters.',panels:['adoption','skills'],question:'A rise in use can include very different kinds of assistance. Learning effects need to be tracked separately for each tool and setting.',topics:['adoption','skills']},
  {id:'culture',title:'AI music grows in uploads while attracting few plays.',panels:['uploads','streams'],question:'Upload share and listening share describe different stages. Following creator income would help show how these changes affect livelihoods.',topics:['culture']}
];
const selectedPanel = id => GD_SELECTED_EVIDENCE.panels.find(panel => panel.id === id && panel.status === 'ready');
const evidenceDate = value => {
  const date = new Date(`${value}T00:00:00Z`), year = date.getUTCFullYear();
  return year + (date - Date.UTC(year,0,1)) / (Date.UTC(year+1,0,1)-Date.UTC(year,0,1));
};
const evidenceMonth = value => {
  const year = Math.floor(value), start = Date.UTC(year,0,1), days = Math.round((value-year)*(Date.UTC(year+1,0,1)-start)/86400000);
  return new Intl.DateTimeFormat('en-GB',{month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(start+days*86400000));
};

function evidenceDataTable(panel) {
  const {data,columns} = panel.chart;
  let headers = columns, rows = data;
  if (panel.id === 'capability') { headers=['Model release','Model','Estimate (minutes)','95% low (minutes)','95% high (minutes)']; rows=data.map(row => [row[0],row[5],row[1],row[2],row[3]]); }
  if (panel.id === 'work') headers=['Month',...panel.chart.series.map(series => series.name)];
  if (panel.id === 'adoption') headers=['Survey month','Daily (%)','Regular (%)','Any use (%)'];
  if (panel.id === 'uploads') { headers=['Report date','Reported share (%)','Qualifier']; rows=data.map(row => row.slice(0,3)); }
  if (panel.id === 'skills') headers=['Practice tool','Exam difference (points)','Clustered SE (points)','Control mean (points)','Statistical result'];
  if (panel.id === 'streams') headers=['Report date','Low (%)','High (%)','Range type'];
  return `<div class="data-scroll" tabindex="0" role="region" aria-label="${escapeHTML(panel.title)}: source data"><table><caption>${escapeHTML(panel.chart.units)}</caption><thead><tr>${headers.map(header => `<th scope="col">${escapeHTML(header)}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map((value,index) => `<${index === 0 ? 'th scope="row"' : 'td'}>${escapeHTML(typeof value === 'number' ? Number(value.toFixed(panel.id === 'capability' ? 4 : 2)) : value)}</${index === 0 ? 'th' : 'td'}>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function evidenceFigure(panel, tone) {
  const copy = evidenceCopy[panel.id];
  return `<figure class="evidence-figure" data-tone="${tone}" aria-labelledby="evidence-title-${panel.id}"><figcaption><p class="figure-topic">${escapeHTML(copy.topic)}</p><h3 id="evidence-title-${panel.id}">${escapeHTML(copy.title)}</h3><p class="figure-measure">${escapeHTML(copy.measure)}</p><div class="figure-source"><a href="${escapeHTML(panel.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(copy.source)} ${icon('external')}</a><span>${escapeHTML(copy.period)}</span></div></figcaption><div class="chart-visual"><div class="chart" id="evidence-chart-${panel.id}"></div><p class="chart-credit">Source: ${escapeHTML(copy.source)}. ${escapeHTML(copy.note)}</p></div><p class="figure-reading">${escapeHTML(copy.reading)}</p><details class="figure-notes"><summary>Source, caveats and data</summary><p>${panel.caveats.map(escapeHTML).join(' ')}</p><p><strong>How the chart was made:</strong> ${escapeHTML(panel.transformation)}</p><p><strong>Where to check:</strong> ${escapeHTML(panel.locator)}</p>${panel.id === 'work' ? '<p>The topic page also discusses a 19% relative shortfall from the paper. That analysis uses a different comparison and period from these age-group indices.</p>' : ''}<p><a href="${escapeHTML(panel.dataURL)}" target="_blank" rel="noopener noreferrer">Original data or source table ${icon('external')}</a> &middot; <a href="research/selected-evidence.json">Extraction and checks (JSON)</a></p>${evidenceDataTable(panel)}</details></figure>`;
}

function drawEvidenceChart(panel) {
  const el = document.getElementById(`evidence-chart-${panel.id}`);
  const rows = panel.chart.data;
  if (panel.chart.type === 'stat') {
    const value = panel.chart.displayPrimary;
    const unit = panel.id === 'skills' ? 'on the unaided exam after unrestricted GPT practice' : 'of all recorded Deezer streams';
    const context = panel.id === 'skills' ? 'Guided GPT Tutor: no clear difference from the no-AI group.' : 'Reported in April 2026. Uploads and streams have different denominators.';
    el.innerHTML = `<div class="figure-stat"><strong>${escapeHTML(value)}</strong><p class="stat-unit">${escapeHTML(unit)}</p><p class="stat-context">${escapeHTML(context)}</p></div>`;
    return;
  }
  const common = {h:270,legend:false,table:false,axisPlacement:'edges',aria:`${panel.title}. ${panel.measure} ${evidenceCopy[panel.id].reading}`};
  if (panel.id === 'capability') {
    const last=rows.at(-1), points=rows.map(row => [evidenceDate(row[0]),row[1],`${row[5]}; 95% interval ${fmtMin(row[2])} to ${fmtMin(row[3])}.`]);
    Charts.line(el,{...common,
      x:{min:2023,max:2026.55,ticks:[2023,2024,2025,2026],fmt:String,tip:evidenceMonth,label:'Model release year'},
      y:{min:0.1,max:480,ticks:[0.25,1,10,60,480],log:true,fmt:fmtMin,tip:fmtMin,label:'Human-expert task time / logarithmic scale'},
      series:[{name:'Record-high estimates',color:'var(--ai-line)',w:2.5,tip:false,rec:false,markers:'none',end:false,pts:rows.filter(row => row[6]).map(row => [evidenceDate(row[0]),row[1]])},{name:'Model estimate',color:'var(--ai-line)',dots:true,markers:'all',r:3,end:false,pts:points}],
      ranges:[{x:evidenceDate(last[0]),lo:last[2],hi:last[3],color:'var(--ai-line)'}],
      ann:[{x:evidenceDate(last[0]),y:last[1],text:'3.1 hours',anchor:'end',dx:-9,dy:-12,strong:true}]
    });
  } else if (panel.id === 'work') {
    Charts.line(el,{...common,
      x:{min:2021.65,max:2026.9,ticks:[2022,2023,2024,2025,2026],ticksNarrow:[2022,2024,2026],fmt:String,tip:evidenceMonth,label:'Observation year'},
      y:{min:80,max:115,ticks:[80,90,100,110],fmt:String,tip:value=>value.toFixed(1),label:'Employment index / Nov 2022 = 100'},zero:100,
      series:[...panel.chart.series.slice(1),panel.chart.series[0]].map(series=>({name:series.name,color:series.columnIndex===1?'var(--human-line)':'var(--quiet)',w:series.columnIndex===1?2.8:1.3,op:series.columnIndex===1?1:0.6,end:false,markers:'none',pts:rows.map(row=>[evidenceDate(row[0]),row[series.columnIndex]])})),
      ann:[{x:evidenceDate(rows.at(-1)[0]),y:rows.at(-1)[1],text:'Ages 22-25: down 12.8%',anchor:'end',dx:-3,dy:23,strong:true},{x:evidenceDate(rows.at(-1)[0]),y:109.4,text:'Older age groups',anchor:'end',dx:-3,dy:-14}]
    });
  } else if (panel.id === 'adoption') {
    const labels={3:'Any',2:'Regular',1:'Daily'},colors={3:'var(--quiet)',2:'var(--ai-line)',1:'var(--warm)'};
    Charts.line(el,{...common,
      x:{min:2023,max:2026.8,ticks:[2023,2024,2025,2026],fmt:String,tip:evidenceMonth,label:'Survey year'},
      y:{min:0,max:100,ticks:[0,20,40,60,80,100],fmt:value=>`${value}%`,label:'Share of US employees (%)'},
      series:panel.chart.series.map(series=>({name:series.name,color:colors[series.columnIndex],w:series.columnIndex===2?2.8:1.8,dash:series.columnIndex===3,markers:'all',r:3,endLabel:`${labels[series.columnIndex]} ${rows.at(-1)[series.columnIndex]}%`,pts:rows.map(row=>[evidenceDate(row[0]),row[series.columnIndex]])}))
    });
  } else if (panel.id === 'uploads') {
    Charts.line(el,{...common,
      x:{min:2024.95,max:2026.42,ticks:[evidenceDate('2025-01-01'),evidenceDate('2025-07-01'),evidenceDate('2026-01-01'),evidenceDate('2026-04-01')],ticksNarrow:[evidenceDate('2025-01-01'),evidenceDate('2025-07-01'),evidenceDate('2026-04-01')],fmt:evidenceMonth,tip:evidenceMonth,label:'Company report month'},
      y:{min:0,max:100,ticks:[0,20,40,60,80,100],fmt:value=>`${value}%`,label:'AI-generated share of daily uploads (%)'},
      series:[{name:'Reported upload share',color:'var(--ai-line)',w:2.4,dash:true,end:false,markers:'all',pts:rows.map((row,index)=>[evidenceDate(row[0]),row[1],panel.chart.pointLabels[index]])}],
      ann:[{x:evidenceDate(rows[0][0]),y:rows[0][1],text:'About 10%',dx:7,dy:-14,strong:true},{x:evidenceDate(rows.at(-1)[0]),y:rows.at(-1)[1],text:'About 44%',anchor:'end',dx:-5,dy:-14,strong:true}]
    });
  }
}

document.getElementById('selected-evidence-sections').innerHTML = evidencePairs.map((pair,index) => {
  const panels = pair.panels.map(selectedPanel).filter(Boolean);
  if (!panels.length) return '';
  return `<section class="evidence-pair" id="compare-${pair.id}" aria-labelledby="pair-title-${pair.id}"><h2 id="pair-title-${pair.id}"><span>${String(index+1).padStart(2,'0')}</span>${escapeHTML(pair.title)}</h2><div class="evidence-pair-grid">${panels.map((panel,index)=>evidenceFigure(panel,index===0?'ai':'human')).join('')}</div><p class="pair-question">${escapeHTML(pair.question)}</p><div class="pair-topic-links">${pair.topics.map(id=>`<a href="index.html?topic=${id}">${escapeHTML(GD_TOPIC_CONFIG[id].name)}: research and gaps &rarr;</a>`).join('')}</div></section>`;
}).join('');
GD_SELECTED_EVIDENCE.panels.filter(panel=>panel.status==='ready').forEach(drawEvidenceChart);
