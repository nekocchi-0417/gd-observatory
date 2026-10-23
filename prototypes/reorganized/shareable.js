const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const ext7 = (url, label) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`;
const TOPICS28 = [
  ['capability', 'AI capability', 'What kinds of work can AI complete reliably?'],
  ['adoption', 'AI adoption', 'Where and how often are people using AI?'],
  ['handover', 'Delegation to AI', 'Which tasks and decisions are people handing over?'],
  ['work', 'Entry-level jobs', 'How are opportunities to start a career changing?'],
  ['share', "Workers' share of income", 'Who receives the economic gains from AI?'],
  ['skills', 'Skills and judgement', 'How does using AI affect skills people can exercise on their own?'],
  ['culture', 'Culture and information', 'How does AI change what people create, encounter and trust?'],
  ['institutions', 'AI in government', 'Who can review and challenge decisions made with AI?'],
  ['influence', 'Human influence', 'Can people shape, question or refuse decisions that affect them?']
];
const topicHref28 = (id, library = false) => `topics/${library ? 'library' : 'index'}.html?topic=${encodeURIComponent(id)}`;

function hold28(v, title, topic = false) {
  v.innerHTML = `<div class="view5 wrap hold28"><div class="hold-inner28"><p class="status28">Work in progress</p><h1 class="h1-5" id="main-content">${esc(title)}</h1><p class="lead5">${topic ? 'Studies and measurement questions are being reviewed before publication.' : title === 'Evidence library' ? 'The source list and evidence maps are being reviewed before publication.' : 'A curated selection of findings is being reviewed before publication.'}</p><a class="text-link28" href="#gaps">${topic ? 'Back to the research questions' : 'Explore the research questions'} <span aria-hidden="true">→</span></a></div></div>`;
}

function home28(v) {
  v.innerHTML = homeStory30();
}

function diagram28() {
  return `<div class="gap-map-scroll20" tabindex="0" role="region" aria-label="Proposed pathways diagram with links to topic reviews."><svg class="map5 gap-map20 neutral-map28" viewBox="0 0 ${GEO5.W} ${GEO5.H}" aria-labelledby="path-title28 path-desc28"><title id="path-title28">Proposed pathways of gradual disempowerment</title><desc id="path-desc28">AI capability, adoption and delegation connect to work, income, skills, culture and government, and ultimately human influence. These are proposed relationships. No evidence coverage ratings are shown.</desc><text x="24" y="28" class="map-section28">AI SYSTEMS AND USE</text><text x="490" y="28" class="map-section28">POSSIBLE CONSEQUENCES</text><text x="1040" y="28" class="map-section28">INFLUENCE</text>
    ${SEGS5.map(s => { const points = s.from === '_' ? [s.p[0], [GEO5.S.influence[0] - 9, GEO5.TY]] : s.p; return `<path class="path28" d="M${points.map(p => p.join(' ')).join(' L')}"/>`; }).join('')}
    ${TOPICS28.map(([id, title]) => {const [x,y] = GEO5.S[id]; return `<a class="node28" href="${topicHref28(id)}" aria-label="${esc(title)}: studies and measurement gaps"><title>${esc(title)}: studies and measurement gaps</title><circle class="hit28" cx="${x}" cy="${y}" r="23"/><circle class="node-ring28" cx="${x}" cy="${y}" r="9"/><text class="node-label28" x="${x}" y="${y - 24}" text-anchor="middle">${esc(title)}</text></a>`;}).join('')}
    </svg></div>`;
}

function gaps28(v) {
  const groups = [['AI systems and use', ['capability','adoption','handover']], ['Work and skills', ['work','share','skills']], ['Institutions and influence', ['culture','institutions','influence']]];
  v.innerHTML = `<div class="view5 wrap gaps20 gaps28"><header class="intro20"><div class="eye5">Research gaps</div><h1 class="h1-5" id="main-content">Where do we need better measures?</h1><p class="diagram-intro26">Proposed pathways, adapted from ${ext7('https://gradual-disempowerment.ai/', 'the original paper')}. The questions below guide our ongoing review.</p></header>${diagram28()}
    <section class="topics28" aria-labelledby="topics-title28"><div class="topics-head28"><h2 class="h2-5 sm" id="topics-title28">Explore the research</h2><span class="status28">AI-assisted &middot; Human review pending</span></div><div class="gap-columns20">${groups.map(([name, ids]) => `<section class="topic-group28"><h3>${name}</h3><ul>${ids.map(id => {const [,title,question] = TOPICS28.find(t => t[0] === id); return `<li><a class="gap-step20" href="${topicHref28(id)}"><h4>${esc(title)}</h4><p>${esc(question)}</p><span class="topic-status28">Studies and measurement gaps &rarr;</span></a></li>`;}).join('')}</ul></section>`).join('')}</div></section>${reviewMethod28()}</div>`;
}

function reviewMethod28() {
  return `<details class="review-method28" id="review-method28"><summary>How this review works</summary><div class="review-method-body28">
    <section class="method-section28"><h3>The pathways</h3><p>The diagram is adapted from ${ext7('https://gradual-disempowerment.ai/', 'the gradual disempowerment paper')}, with an additional branch for skills and judgement. It organises research questions around the proposed relationships.</p></section>
    <section class="method-section28"><h3>How sources are selected</h3><p>The shortlist prioritises relevance, clear outcomes, useful comparisons or repeated observations, and traceable primary sources. It includes findings that complicate the argument. Each source states why it was selected.</p><p>This is a targeted scoping scan, not a systematic review. The October 22 expansion distinguishes full-paper access, official summaries and abstracts. Imported reading leads are kept separate from detailed extractions. Search records and limitations accompany each topic library; skills and judgement retains the earlier scan.</p></section>
    <section class="method-section28"><h3>What still needs review</h3><p>Topic summaries, maps and proposed gaps are AI-assisted. Human review is still required:</p><ul><li>Confirm the primary source, version, population and outcome.</li><li>Check figures, units, comparisons and the time period.</li><li>Match each claim to the study's design and scope.</li><li>Consider competing explanations and contradictory evidence.</li></ul><p><a href="#evidence">Selected evidence</a> brings together six findings with source data and caveats. Its selection rationale is on that page; those findings also await human review.</p></section>
    <section class="method-section28"><h3>Reading the maps and gaps</h3><p>The expanded evidence maps group extracted sources by research question and measurement over time. Skills and judgement retains its theme-by-design map. Counts describe these collections; they do not score evidence quality or establish a field-wide gap. Evidence-coverage ratings remain on hold.</p><p>Each proposed measurement gap links to the sources behind it. These provisional interpretations can change as the review expands.</p><p>The <a href="skills.html">Paper explorer beta</a> uses keyword matches and shared sources to suggest connections within the skills and judgement literature. These connections do not establish causal effects or agreement. Its matching rules and limitations are explained beside the map.</p></section>
    </div></details>`;
}

function render28() {
  let raw = (location.hash || '#home').slice(1);
  if (raw === 'main-content') {
    if (document.querySelector('#view h1')) { document.querySelector('#view').focus(); return; }
    raw = 'home';
  }
  disposeHomeStory30();
  const parts = raw.split(/[/?]/), root = parts[0];
  const topic = TOPICS28.find(([id]) => root === id || ['gaps','topic'].includes(root) && parts[1] === id);
  const showMethod = ['method','methods','about'].includes(root) || root === 'gaps' && parts[1] === 'method';
  const aliases = {map:'home', method:'gaps', about:'gaps', methods:'gaps', futures:'projects', grants:'projects', emerging:'evidence', findings:'evidence'};
  let route = aliases[root] || root || 'home', title;
  const v = document.querySelector('#view');
  if (topic) { location.replace(topicHref28(topic[0])); return; }
  else if (route === 'evidence') { location.replace('topics/evidence.html'); return; }
  else if (route === 'explorer') { location.replace('skills.html'); return; }
  else if (route === 'library') { const id = TOPICS28.find(([id]) => parts[1] === id)?.[0]; location.replace(id ? topicHref28(id,true) : 'topics/topics.html'); return; }
  else if (route === 'home') { home28(v); title = 'Home'; }
  else if (route === 'gaps') { gaps28(v); title = 'Research gaps'; }
  else if (route === 'projects') { viewProjects21(v, root === 'grants' ? 'grants' : parts[1]); title = 'Projects & grants'; }
  else if (route === 'contribute') { viewContribute21(v); title = 'Contribute'; }
  else { title = route === 'library' ? 'Evidence library' : 'Selected findings'; hold28(v, title); route = 'evidence'; }
  document.title = `${title} | Gradual Disempowerment Dashboard`;
  v.querySelector('h1')?.setAttribute('id', 'main-content');
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.getAttribute('href') === '#' + route) a.setAttribute('aria-current','page');
    else a.removeAttribute('aria-current');
  });
  window.scrollTo(0, 0);
  if (showMethod) {
    const method = v.querySelector('#review-method28');
    method.open = true;
    requestAnimationFrame(() => method.scrollIntoView({block:'start'}));
  }
  if (route === 'home') installHomeStory30();
}
window.addEventListener('hashchange', () => { render28(); document.querySelector('#view').focus({preventScroll:true}); });
render28();
