/* A small, dated extraction drives both pilot charts and their downloadable tables. */
const CAPABILITY7={
  retrieved:'14 October 2026',
  rli:{
    url:'https://labs.scale.com/leaderboard/rli',
    rows:[['Opus 5.5',21.25],['GPT 6 Astra',20.83],['Fable 5.1',17.92],['Fable 5',15.83],['Opus 4.8',8.33]]
  },
  metr:{
    url:'https://metr.org/time-horizons/',
    data:'https://metr.org/assets/benchmark_results_1_1.yaml',
    key:'results.claude_opus_4_6_inspect.metrics',
    rows:[
      {rate:50,estimate:718.80683,low:316.685725,high:3633.786163},
      {rate:80,estimate:69.874587,low:27.026521,high:170.437873}
    ]
  },
  related:[
    {title:'AI assistance in everyday coding',publisher:'METR · field experiment, 2025',url:'https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/',text:'Tests whether benchmark promise translates into faster work for experienced developers. One setting with early-2025 tools.',update:'https://metr.org/blog/2026-02-24-uplift-update/'},
    {title:'A broader view of benchmark performance',publisher:'Epoch AI · Capabilities Index',url:'https://epoch.ai/data/eci-documentation',text:'Combines benchmark results to track broader capability. Useful context, but the combined score is less directly interpretable as completed work.'},
    {title:'Professional tasks across more occupations',publisher:'OpenAI · GDPval',url:'https://openai.com/index/gdpval/',text:'Extends coverage to deliverables across 44 occupations. A developer-produced evaluation of defined tasks, with limited coverage of ongoing jobs.'}
  ]
};
const ext7=(url,label)=>`<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`;
function csvLink7(name,rows){
  const csv=rows.map(r=>r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(',')).join('\r\n');
  return `<a download="${esc(name)}" href="data:text/csv;charset=utf-8,${encodeURIComponent(csv)}">Download plotted data (CSV) ↓</a>`;
}
function capabilityRelated7(){
  return `<ul class="related7">${CAPABILITY7.related.map(r=>`<li><div><h3>${ext7(r.url,r.title)}</h3><p class="note5">${esc(r.publisher)}</p><p>${esc(r.text)}</p>${r.update?`<p>${ext7(r.update,'Follow-up and study limitations')}</p>`:''}</div><span class="review-status7">Awaiting human review</span></li>`).join('')}</ul>`;
}
function viewCapabilityPilot(v){
  const p=SELECTED_EVIDENCE.capability,R=CAPABILITY7.rli,M=CAPABILITY7.metr;
  const rliCSV=[['agent','automation_rate_percent','source','retrieved','selection'],...R.rows.map(r=>[...r,R.url,'2026-10-14','Five highest scores displayed'])];
  const metrCSV=[['agent','success_rate_percent','estimate_minutes','ci95_low_minutes','ci95_high_minutes','source','source_key','retrieved'],...M.rows.map(r=>['Claude Opus 4.6',r.rate,r.estimate,r.low,r.high,M.data,`${M.key}.p${r.rate}_horizon_length`,'2026-10-14'])];
  v.innerHTML=`<div class="view5 wrap priority6 capability7">${crumbs5('capability')}
    <div class="claim5">${eye5(['AI capability','1 of 9'])}<h1 class="h1-5 c">${esc(p.h1)}</h1><p class="lead5">${esc(p.summary)}</p></div>
    <p class="review-links"><a class="go" href="#method/selection">How indicators are selected →</a><a class="go" href="#details/capability">Source details →</a></p>
    <p class="review-state7"><b>Draft · awaiting human review.</b> Source values checked with AI assistance on ${CAPABILITY7.retrieved}.</p>
    <section class="sec5 selected7" aria-labelledby="selected7-title"><h2 class="h2-5 sm" id="selected7-title">Selected indicators</h2><p class="sub5">Project completion tests the finished output. Task horizons show how much the answer depends on reliability.</p>
      <div class="indicator7" id="capability-rli">
        <div class="indicator7-intro"><span class="lab5">01 · Finished projects</span><h3>Can AI deliver professional work?</h3><p><b>Why included:</b> RLI compares finished freelance deliverables with professional reference work, covering more than software.</p></div>
        <figure class="evidence-chart7" aria-labelledby="rli7-title"><figcaption><div class="publisher7">${ext7(R.url,'CAIS / Scale AI')}<span>Remote Labor Index</span></div><h4 id="rli7-title">Share of projects meeting the professional standard</h4><p>Five highest scores displayed in the leaderboard snapshot · ${CAPABILITY7.retrieved}</p></figcaption>
          <div class="chart" id="rli-chart7"></div>
          <p class="chart-credit7">Chart by this project using CAIS / Scale AI results. Snapshot comparison; evaluation dates are not established here.</p>
        </figure>
        <div class="chart-context7"><p><b>Coverage:</b> Selected freelance projects. Work requiring physical labour, direct client interaction or long-term evaluation is excluded.</p><p><b>Caveat:</b> Scores describe tested agents and their tools. They are not the share of jobs replaced. The leaderboard does not provide confidence intervals.</p>
          <p class="source-actions7">${ext7(R.url,'Original leaderboard & methods')}${csvLink7('rli-selected-2026-10-14.csv',rliCSV)}</p>
          <details class="source6-detail"><summary>How this chart was made</summary><p>We transcribed the five highest displayed automation-rate scores without changing their values. Selection shows the leading listed results, not all tested agents or average AI performance. No dates or scores from other datasets were added.</p><p>The displayed scores were checked against the publisher page with AI assistance. A human still needs to confirm the project denominator, grading and comparability of agent setups.</p></details>
        </div>
        <dl class="reading7"><div><dt>Our interpretation</dt><dd>Some tested agents produce work that meets the benchmark standard, but even the leading score is only about one project in five.</dd></div><div><dt>Still uncertain</dt><dd>Whether this transfers to ongoing jobs, repeated attempts and work that depends on client relationships or organisational context.</dd></div></dl>
      </div>
      <div class="indicator7" id="capability-metr">
        <div class="indicator7-intro"><span class="lab5">02 · Reliability on longer tasks</span><h3>How does the result change when AI must succeed more often?</h3><p><b>Why included:</b> METR makes the success threshold explicit and publishes uncertainty estimates. It complements RLI's finished-project score.</p></div>
        <figure class="evidence-chart7" aria-labelledby="metr7-title"><figcaption><div class="publisher7">${ext7(M.url,'METR')}<span>Task-Completion Time Horizons · TH1.1</span></div><h4 id="metr7-title">Higher reliability means a shorter task horizon</h4><p>One tested agent: Claude Opus 4.6 · technical tasks</p></figcaption>
          <div class="horizon-values7">${M.rows.map(r=>`<div><span>${r.rate}% success</span><b>${r.rate===50?'About 12 hours':'About 70 minutes'}</b><small>95% interval: ${r.rate===50?'5.3–60.6 hours':'27–170 minutes'}</small></div>`).join('')}</div>
          <div class="chart" id="metr-chart7"></div>
          <p class="chart-credit7">Chart by this project using METR's TH1.1 results. Dots show estimates; vertical lines show 95% confidence intervals.</p>
        </figure>
        <div class="chart-context7"><p><b>Reading the measure:</b> Task length is the time a human expert would need. It measures task difficulty, not how long AI runs unattended.</p><p><b>Caveat:</b> These are mainly software, machine-learning and cybersecurity tasks. The uncertainty is wide; METR cautions that horizons above 16 hours are unreliable with this task suite.</p><p class="archive-note7"><b>Historical reference:</b> METR marks this tracker as no longer actively updated. It is not a current frontier ranking.</p>
          <p class="source-actions7">${ext7(M.url,'Original chart & methods')}${ext7(M.data,'Original data (YAML)')}${csvLink7('metr-opus-4-6-horizons.csv',metrCSV)}</p>
          <details class="source6-detail"><summary>How this chart was made</summary><p>We use one agent to illustrate the difference between success thresholds, not to rank models. Both estimates and intervals come from the same TH1.1 results record, retrieved ${CAPABILITY7.retrieved}.</p><p>Source record: <code>${esc(M.key)}</code>, fields <code>p50_horizon_length</code> and <code>p80_horizon_length</code>. Values in minutes are divided by 60 for the chart; the CSV preserves source precision. The headline figures are rounded. No historical trend is fitted.</p></details>
        </div>
        <dl class="reading7"><div><dt>Our interpretation</dt><dd>Capability depends strongly on the required success rate. A task horizon at 50% success can give a very different impression from one at 80%.</dd></div><div><dt>Still uncertain</dt><dd>Performance on messier work, other occupations and the much higher reliability that some workplaces need.</dd></div></dl>
      </div>
    </section>
    <section class="sec5 watch7"><div class="section7-head"><h2 class="h2-5 sm">Signals to watch</h2><span class="review-status7">Proposed monitoring priorities</span></div><p class="sub5">These are questions for future measurement, not validated warning thresholds.</p>
      <dl class="watch-rows7"><div><dt>Reliable across whole workflows</dt><dd>Repeat tests across occupations, including messy tasks and error recovery. Sustained success would make substitution more plausible.</dd></div><div><dt>Less human supervision needed</dt><dd>Track review time, interventions and failures caught by people. Falling supervision needs could enable more delegation.</dd></div><div><dt>Lower cost per successful workflow</dt><dd>Include tools, retries, human review and rework. Lower total costs would strengthen incentives to automate.</dd></div></dl>
      <p class="connection7">To assess disempowerment, we also need evidence that people lose meaningful control as AI takes on more work. <a class="go" href="#handover">Explore AI delegation →</a></p>
    </section>
    <section class="sec5 related-section7"><h2 class="h2-5 sm">Related evidence</h2><p class="sub5">Broader benchmarks and field studies help test how far these findings travel. Summaries are AI-assisted and await human review.</p>${capabilityRelated7()}</section>
    <section class="sec5 priority6-gap"><h2 class="h2-5 sm">What research would help most?</h2><p class="lead5 sm">Repeated, independent tests of complete workflows across occupations, measuring reliability, human supervision and total cost.</p><p class="review-links"><a class="go" href="#gaps/capability">Explore research gaps →</a><a class="go" href="#contribute/add">Suggest evidence or a correction →</a></p></section>
    ${pn5(['evidence','All steps','Back to'],['adoption',nameOf('adoption')])}</div>`;
  Charts.bars($('#rli-chart7',v),{
    aria:'CAIS / Scale AI Remote Labor Index. Five highest listed automation rates, retrieved 14 October 2026. Horizontal axis: projects meeting the professional standard, percent. Vertical categories: evaluated agents.',
    min:0,max:100,ticks:[0,25,50,75,100],fmt:n=>n+'%',catLabel:'Evaluated agent',valLabel:'Projects meeting the standard (%)',
    rows:R.rows.map(([label,value])=>({label,value,vlabel:value.toFixed(2)+'%',color:C.s1}))
  });
  Charts.line($('#metr-chart7',v),{
    aria:'METR TH1.1, Claude Opus 4.6. At 50% success: 12 hours, 95% interval 5.3 to 60.6 hours. At 80%: 70 minutes, interval 27 to 170 minutes. Human task time, not AI runtime.',
    h:280,legend:false,
    x:{min:40,max:90,ticks:[50,80],fmt:n=>n+'%',tip:n=>n+'% success',label:'Required success rate (%)'},
    y:{min:0,max:64,ticks:[0,16,32,48,64],fmt:n=>n+' h',tip:n=>n.toFixed(2)+' hours',label:'Estimated human task time (hours)'},
    series:[{name:'Estimated task horizon',color:C.s1,dots:true,markers:'all',end:false,pts:M.rows.map(r=>[r.rate,r.estimate/60])}],
    ranges:M.rows.map(r=>({x:r.rate,lo:r.low/60,hi:r.high/60,color:C.s1})),
    hbands:[{y0:16,y1:64,label:'Above 16 h: limited task coverage'}]
  });
  crumbScroll5(v);
}
