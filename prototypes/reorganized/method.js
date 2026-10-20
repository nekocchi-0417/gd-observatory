function viewMethod22(v) {
  const selectedCount = ORDER.reduce((n, id) => n + SELECTED_EVIDENCE[id].sources.length, 0);
  v.innerHTML = `<div class="view5 wrap method22">${eye5(['Method'])}
    <h1 class="h1-5">How this dashboard is put together</h1>
    <p class="lead5">Selected research on AI and human influence, with original sources and open measurement questions.</p>
    <section class="sec5" id="m-selection"><h2 class="h2-5 sm">How we choose evidence</h2>
      <ul class="scale5 lim5">
        <li><b>Relevance</b><span>Does the measure answer the question at this step? Identify what it captures directly and what it leaves out.</span></li>
        <li><b>Traceable methods</b><span>Prefer original results with methods, definitions and uncertainty we can inspect. Identify commercial involvement and publication status.</span></li>
        <li><b>Clear scope</b><span>State which people, tasks, places and dates are covered. Repeated measurements are especially useful for tracking change.</span></li>
        <li><b>Alternative explanations</b><span>Include benefits, conflicting findings and results showing no effect. Ask what would change the interpretation.</span></li>
      </ul><p class="note5">Selection is editorial and AI-assisted. The collection has not undergone a systematic search or an independent assessment of every study.</p>
    </section>
    <section class="sec5" id="m-chart-sources"><h2 class="h2-5 sm">How the comparisons work</h2>
      <p class="sub5">Evidence presents six selected visuals in three pairs. Each keeps its own source, population, dates and units. The two Deezer visuals come from the same provider.</p>
      <p class="note5">The charts use saved source releases, so later revisions may differ. Side-by-side placement raises a question; it does not identify a causal effect.</p>
      <details class="det5"><summary>Chart construction and versions</summary><ul class="lim5">
        <li><b>AI capability</b><span>METR TH1.1 estimates at 80% success. All 23 selected models remain visible; the line joins record-high estimates. Task length is the time a human expert would need. The line is neither a fitted growth rate nor a forecast.</span></li>
        <li><b>Employment</b><span>The saved September 2026 Stanford/ADP release contains 60 monthly observations for six age groups in the most AI-exposed occupational quintile. Each age group's November 2022 value is 100. The chart shows employment indices, not unemployment rates or an estimated AI effect.</span></li>
        <li><b>AI adoption</b><span>Eight Gallup survey waves. Daily, frequent and any use overlap; the percentages must not be added. These are surveys of US employees.</span></li>
        <li><b>Learning</b><span>Bastani and colleagues' adjusted differences are rescaled from 0-1 to a 0-100 exam-score scale. The overview shows a study result rather than a time trend.</span></li>
        <li><b>Music</b><span>Five rounded Deezer upload reports, January 2025 to April 2026, are paired with the April 1-3% recorded-stream range. The line joins release snapshots. Uploads and streams have different denominators; the stream range is not a confidence interval.</span></li>
      </ul><p class="note5">Each topic page features one selected chart, a short interpretation and a measurement question. Sources and caveats sit below the chart, with a link to the fuller evidence library. Check source notes before comparing values across pages. Redrawn charts do not imply endorsement by their sources.</p></details>
    </section>
    <section class="sec5" id="m-coverage"><h2 class="h2-5 sm">What coverage means</h2>
      <p class="sub5">The colours describe a provisional, AI-assisted reading of the selected measures: how directly they address the question, how often they are repeated and which settings they cover.</p>
      <ul class="scale5 coverage-rubric5 s1">${[
        ['major', 'A central outcome or repeated measurement is missing from this selection.'],
        ['partial', 'The selected measures answer part of the question, within limited settings or through indirect indicators.'],
        ['stronger', 'The named quantity is measured directly and repeatedly. Broader effects and attribution to AI may remain unclear.']
      ].map(([band, description]) => `<li>${coverageGlyph5(band,20)}<div><b>${esc(COPY.coverage.bands[band].label)}</b><span>${esc(description)}</span></div></li>`).join('')}</ul>
      <p class="note5">These bands have no validated numerical score or study-count threshold. They do not establish field-wide research gaps, the level of risk or a funding ranking.</p>
      <details class="det5"><summary>How Research gaps is organised</summary><p class="sub5">The pathway diagram shows the proposed connections. Below it, the same nine steps are grouped into Major gaps, Partial coverage and Stronger coverage. Each has a short summary of what the selected evidence covers. Individual topic pages feature one selected chart and a measurement question.</p><p class="sub5">Evidence maps are available in linked library subpages for Skills and judgement, Human influence, Delegation to AI, Culture and information, and AI in government. They group sources by research facet and measurement method. Human influence focuses on individual agency; the government map adds institutional decisions and oversight. Broader political power remains outside this selection.</p><p class="sub5">The library is AI-assisted, not comprehensive and not yet verified. Its reference counts do not determine research priorities or coverage colours. A missing map or an empty cell does not establish a lack of research.</p></details>
      <p class="review-links"><a href="#gaps">View the topic-level judgments and research questions</a></p>
    </section>
    <section class="sec5" id="m-status"><h2 class="h2-5 sm">Source checks and limitations</h2>
      <p class="sub5">Source checks distinguish a working link, a matching reference and a supported numerical claim. Human review is still needed before treating the dashboard as a verified research synthesis.</p>
      <details class="det5"><summary>Research records and updates</summary><p class="sub5">The <a href="#library">evidence library</a> combines earlier AI-assisted scans with targeted primary-source searches. Skills and Agency retain the earlier construct and measure tags, whose pairing needs checking. The Government, Delegation and Culture maps record explicit question-method pairs, with a source location, description and limitation for each reference.</p><p class="sub5">The newer maps include empirical studies, administrative datasets and audits. Reviews and frameworks are accessible through a separate filter. Searches are purposive, rather than exhaustive, and coding awaits human review. Maps have different search scopes and count scales; their colours cannot be used to compare research maturity across topics.</p><p class="sub5">Matching URLs are combined; uncoded references remain in the full list. Papers using the same data may still appear separately. A count is a number of references, not independent replications. Library counts do not determine the coverage colours.</p><p class="sub5">Bibliography repairs preserve the original records; unresolved identities are held separately. A repaired citation does not validate its old summary or results.</p><p class="sub5">Projects &amp; grants is manually maintained. Each listing carries its own check date; a listing does not confirm that a project has produced results or is still accepting applications. The bibliography may include forecasts; these are not used as observed outcomes in the dashboard.</p></details>
    </section>
    <section class="sec5" id="m-scales"><h2 class="h2-5 sm">Where the pathway comes from</h2><p class="sub5">The pathway is adapted from the <a href="https://gradual-disempowerment.ai/" target="_blank" rel="noopener">Gradual Disempowerment paper</a>.</p></section>
    <section class="sec5" id="m-more"><details class="det5"><summary>${selectedCount} topic-source entries</summary><p class="note5">These are the sources selected for the individual steps. Evidence's six visuals use the versions described above.</p><div class="srcs">${ORDER.map(id => `<div class="sg"><h3>${esc(nameOf(id))}</h3><ol>${SELECTED_EVIDENCE[id].sources.map(source => `<li>${sourceLink6(source)}<br>${esc(source.title)}</li>`).join('')}</ol></div>`).join('')}</div></details></section>
  </div>`;
}
