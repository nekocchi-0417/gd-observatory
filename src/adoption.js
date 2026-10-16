/* Gallup's three cumulative usage groups; dates follow its published table. */
const ADOPTION7={
  retrieved:'16 October 2026',
  url:'https://www.gallup.com/699797/indicator-artificial-intelligence.aspx',
  referenceURL:'https://ourworldindata.org/grapher/share-working-adults-united-states-ai-work',
  rows:[
    {date:'2023-05-01',value:11,daily:4,total:21},
    {date:'2024-05-01',value:12,daily:4,total:27},
    {date:'2025-05-01',value:19,daily:8,total:40},
    {date:'2025-08-01',value:23,daily:10,total:45},
    {date:'2025-11-01',value:26,daily:12,total:46},
    {date:'2026-02-01',value:28,daily:13,total:50},
    {date:'2026-05-01',value:30,daily:15,total:52},
    {date:'2026-08-01',value:32,daily:16,total:53}
  ],
  related:[
    {title:'How much working time involves AI?',publisher:'RPS · Bick, Blandin & Deming / FRED',url:'https://fred.stlouisfed.org/series/RPSGENAIASSISTWRKHRSALL',text:'Generative AI assisted an estimated 6.3% of US work hours in Q2 2026. Researchers calculate this from the time ranges workers report; directly observed working hours could give a different estimate.'},
    {title:'Which tasks use AI?',publisher:'RPS · St. Louis Fed, September 2026',url:'https://www.stlouisfed.org/on-the-economy/2026/sep/what-work-does-generative-ai-do',text:'This analysis shows which occupations and tasks account for AI use. It uses the same survey programme as the work-hours indicator above.'}
  ]
};

function drawAdoption15(el,h=270){
  const groups=[
    {key:'total',name:'A few times a year or more',label:'Any use',color:'var(--ink-3)',dash:true,w:1.8},
    {key:'value',name:'A few times a week or more',label:'Regular',color:'var(--ai10)',w:2.8},
    {key:'daily',name:'Every day',label:'Daily',color:'var(--warn10)',w:2}
  ];
  Charts.line(el,{h,legend:false,table:false,axisPlacement:'edges',
    aria:'Gallup survey of US employees, May 2023 to August 2026. Use a few times a year or more rose from 21 to 53 percent; a few times a week or more from 11 to 32 percent; daily use from 4 to 16 percent. Groups overlap and must not be added.',
    x:{min:2023,max:2026.7,ticks:[2023,2024,2025,2026],ticksNarrow:[2023,2024,2025,2026],fmt:String,tip:fmtDate,label:'Survey year'},
    y:{min:0,max:100,ticks:[0,20,40,60,80,100],fmt:n=>n+'%',tip:n=>n+'%',label:'Share of US employees (%)'},
    series:groups.map(g=>({name:g.name,color:g.color,dash:g.dash,w:g.w,markers:'all',r:3,
      endLabel:g.label+' '+ADOPTION7.rows.at(-1)[g.key]+'%',endLabelNarrow:g.label+' '+ADOPTION7.rows.at(-1)[g.key]+'%',
      pts:ADOPTION7.rows.map(r=>[ym(Number(r.date.slice(0,4)),Number(r.date.slice(5,7))),r[g.key]])}))
  });
}
function viewAdoptionPilot(v){
  const A=ADOPTION7,p=SELECTED_EVIDENCE.adoption;
  const more=[{title:'Eurostat: AI use by EU businesses',url:p.sources[1].url,text:'Eurostat reports wider AI use among EU businesses. It counts firms, not employees, so the surveys are not directly comparable. Survey changes in 2025, including in the Netherlands, also limit comparisons over time.'},...A.related];
  const csv=[['survey_month','frequent_ai_users_percent','population','definition','source','retrieved'],
    ...A.rows.map(r=>[r.date.slice(0,7),r.value,'US employees aged 18+ working for organisations','AI at work a few times a week or more, including daily',A.url,'2026-10-14'])];
  v.innerHTML=`<div class="view5 wrap priority6 pilot7 adoption7">${crumbs5('adoption')}
    <header class="claim5"><div class="eye5"><span>AI adoption</span><i aria-hidden="true">·</i><span>2 of 9</span></div><h1 class="h1-5 c">${esc(p.h1)}</h1></header>
    <figure class="evidence-chart7" aria-labelledby="gallup7-title">
      <figcaption>
        <div class="publisher7">${ext7(A.url,'Source: Gallup')}<span>US employee survey · May 2023–August 2026</span></div>
        <h2 id="gallup7-title">Regular workplace AI use has nearly tripled</h2>
        <p class="measure7">US employees using AI <b>a few times a week or more</b>.</p>
        <p class="choice7"><b>Why this indicator?</b> Tracks frequent use across occupations, rather than occasional experimentation.</p>
      </figcaption>
      <div class="chart" id="gallup-chart7"></div>
      <p class="chart-credit7">Self-reported use, including daily users. Each dot is a survey wave. Redrawn from Gallup's published table, retrieved ${A.retrieved}.</p>
    </figure>
    <p class="takeaway7"><b>What changed:</b> Regular AI use among US employees rose from <b>11% in May 2023 to 32% in August 2026</b>, a 21-percentage-point increase. This counts users, not work automated.</p>
    <section class="next-measure9" id="adoption-watch" aria-labelledby="adoption-next-title">
      <h2 id="adoption-next-title">Next measurement needed</h2>
      <p>${esc(p.gap)} <a href="#gaps/adoption">Research priorities →</a></p>
    </section>
    <div class="disclosures7 evidence-grid7">
      <details class="disclosure7" id="adoption-source">
        <summary>Sources, data &amp; caveats</summary>
        <div class="disclosure7-body">
          <dl class="context7">
            <div><dt>What is measured</dt><dd>US employees aged 18+, using AI at work a few times a week or more, including daily users.</dd></div>
            <div><dt>Limitations</dt><dd>Self-reported use of AI broadly, not work automated or dependence. Confidence intervals are not supplied in the published table.</dd></div>
            <div><dt>Chart data</dt><dd>All eight Gallup frequent-use observations, May 2023–August 2026. Lines connect survey waves; no other surveys are combined.</dd></div>
            <div><dt>Scope of this selection</dt><dd>Selected surveys, not a field-wide review. They describe where AI is used, not whether people can work without it.</dd></div>
          </dl>
          <p>AI-assisted summary; not independently verified.</p>
          <p class="source-actions7">${ext7(A.url,'Full methodology: Gallup')}${csvLink7('gallup-frequent-ai-use-2026-10-14.csv',csv)}<a href="#method/selection">How we select indicators</a></p>
          <div class="data-scroll7" role="region" aria-label="Gallup regular AI use data" tabindex="0"><table class="data7"><caption>US employees using AI at work a few times a week or more</caption><thead><tr><th scope="col">Survey month</th><th scope="col">Share of employees</th></tr></thead><tbody>${A.rows.map(r=>`<tr><th scope="row">${fmtDate(ym(Number(r.date.slice(0,4)),Number(r.date.slice(5,7))))}</th><td>${r.value}%</td></tr>`).join('')}</tbody></table></div>
        </div>
      </details>
      <details class="disclosure7" id="adoption-related">
        <summary>More evidence</summary>
        <div class="disclosure7-body">${relatedEvidence7(more)}<p>Working selection, not exhaustive. These AI-assisted summaries have not all been manually verified.</p><p><a href="#details/adoption">Gallup and Eurostat source notes</a></p></div>
      </details>
    </div>
    ${pn5(['capability',nameOf('capability')],['handover',nameOf('handover')])}</div>`;
  const points=A.rows.map(r=>[ym(Number(r.date.slice(0,4)),Number(r.date.slice(5,7))),r.value]);
  Charts.line($('#gallup-chart7',v),{
    aria:'Gallup survey of US employees: AI use at work a few times a week or more rose from 11 percent in May 2023 to 32 percent in August 2026. Horizontal axis: survey year. Vertical axis: share of US employees, percent. All eight observations appear in the data table below.',
    h:300,legend:false,table:false,axisPlacement:'edges',
    x:{min:2023,max:2026.9,ticks:[2023,2024,2025,2026],fmt:n=>String(n),tip:fmtDate,label:'Survey year'},
    y:{min:0,max:40,ticks:[0,10,20,30,40],fmt:n=>n+'%',tip:n=>n+'%',label:'Share of US employees (%)'},
    series:[{name:'AI use a few times a week or more',color:C.s1,end:false,markers:'all',w:2.5,r:4.5,pts:points}],
    ann:[{x:points[0][0],y:11,text:'11% · May 2023',dx:12,dy:-18,strong:true},{x:points[7][0],y:32,text:'32% · Aug 2026',dx:-12,dy:-20,anchor:'end',strong:true}],
    annNarrow:[{x:points[0][0],y:11,text:'11%\nMay 2023',dx:8,dy:-30,strong:true},{x:points[7][0],y:32,text:'32%\nAug 2026',dx:-10,dy:-28,anchor:'end',strong:true}]
  });
  crumbScroll5(v);
}
