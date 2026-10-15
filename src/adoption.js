/* Gallup's published Frequent AI users column; survey-month labels, not fieldwork days. */
const ADOPTION7={
  retrieved:'14 October 2026',
  url:'https://www.gallup.com/699797/indicator-artificial-intelligence.aspx',
  rows:[
    {date:'2023-05-01',value:11},
    {date:'2024-05-01',value:12},
    {date:'2025-05-01',value:19},
    {date:'2025-08-01',value:23},
    {date:'2025-11-01',value:26},
    {date:'2026-02-01',value:28},
    {date:'2026-05-01',value:30},
    {date:'2026-08-01',value:32}
  ],
  related:[
    {title:'How much working time involves AI?',publisher:'RPS · Bick, Blandin & Deming / FRED',url:'https://fred.stlouisfed.org/series/RPSGENAIASSISTWRKHRSALL',text:'Generative AI assisted an estimated 6.3% of US work hours in Q2 2026. This measures depth of use, but estimates hours from reported time ranges rather than observing them directly.'},
    {title:'Which tasks use AI?',publisher:'RPS · St. Louis Fed, September 2026',url:'https://www.stlouisfed.org/on-the-economy/2026/sep/what-work-does-generative-ai-do',text:'Breaks adoption down by occupation and task. Helps identify where use is concentrated. It draws on the same survey programme as the work-hours indicator above.'}
  ]
};
function viewAdoptionPilot(v){
  const A=ADOPTION7,p=SELECTED_EVIDENCE.adoption;
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
    <p class="takeaway7"><b>What changed:</b> Regular AI use among US employees rose from <b>11% in May 2023 to 32% in August 2026</b>, a 21-percentage-point increase. ${ext7('https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2','Eurostat also reports wider AI use among EU businesses')}. Together, these suggest spreading adoption, but count users and firms, not work automated.</p>
    <div class="disclosures7">
      <details class="disclosure7" id="adoption-source">
        <summary>Source, caveats and data</summary>
        <div class="disclosure7-body">
          <dl class="context7">
            <div><dt>What counts as regular use?</dt><dd>Gallup's “Frequent AI users”: people using AI at work a few times a week or more, including daily users. This is not everyone who has ever tried AI.</dd></div>
            <div><dt>Who is covered?</dt><dd>US adults aged 18+ employed full or part time by organisations. Gallup uses a probability-recruited panel and demographic weighting. This is not a global estimate.</dd></div>
            <div><dt>What does it miss?</dt><dd>Self-reported AI use, not directly observed activity, work hours automated or dependence. It covers AI broadly, not only generative AI.</dd></div>
            <div><dt>How was this chart made?</dt><dd>All eight “Frequent AI users” values from Gallup's “Use of AI” table, with the published month labels. Lines connect survey waves, not monthly observations. No data from other surveys are added. Wave-specific confidence intervals are not supplied in this table; none have been inferred.</dd></div>
            <div><dt>What should be checked?</dt><dd>The August 2026 table is newer than the page's May 2026 summary. This chart follows the dated table. Extraction and interpretation are AI-assisted, not independently verified.</dd></div>
            <div><dt>How does the EU evidence compare?</dt><dd>Eurostat counts businesses with at least 10 people in covered sectors, not employees. It reports 20.0% using AI in 2025 versus 13.5% in 2024. A new AI category in 2025 and a Netherlands series break complicate the comparison. These figures are context, not part of the Gallup curve.</dd></div>
          </dl>
          <p class="source-actions7">${csvLink7('gallup-frequent-ai-use-2026-10-14.csv',csv)}<a href="#method/selection">How we select indicators</a></p>
          <div class="data-scroll7" role="region" aria-label="Gallup regular AI use data" tabindex="0"><table class="data7"><caption>US employees using AI at work a few times a week or more</caption><thead><tr><th scope="col">Survey month</th><th scope="col">Share of employees</th></tr></thead><tbody>${A.rows.map(r=>`<tr><th scope="row">${fmtDate(ym(Number(r.date.slice(0,4)),Number(r.date.slice(5,7))))}</th><td>${r.value}%</td></tr>`).join('')}</tbody></table></div>
        </div>
      </details>
      <details class="disclosure7" id="adoption-related">
        <summary>Related evidence</summary>
        <div class="disclosure7-body"><p>Additional evidence, beyond the survey linked above. These AI-assisted summaries have not all been manually verified.</p>${relatedEvidence7(A.related)}<p><a href="#details/adoption">Gallup and Eurostat source notes</a></p></div>
      </details>
      <details class="disclosure7" id="adoption-watch">
        <summary>What to watch next</summary>
        <div class="disclosure7-body"><p>Priorities for measurement, not established warning thresholds:</p><ul class="watch7"><li>Regular use spreading across occupations and countries.</li><li>A growing share of working time involving AI, not just more people trying it.</li><li>Which tasks people delegate, how they check outputs, and whether they can work without AI.</li></ul><p><a href="#gaps/adoption">Research gaps →</a></p></div>
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
