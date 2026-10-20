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

function hold28(v, title, topic = false) {
  v.innerHTML = `<div class="view5 wrap hold28"><div class="hold-inner28"><p class="status28">Work in progress</p><h1 class="h1-5" id="main-content">${esc(title)}</h1><p class="lead5">${topic ? 'Studies and measurement questions are being reviewed before publication.' : title === 'Evidence library' ? 'The source list and evidence maps are being reviewed before publication.' : 'A curated selection of findings is being reviewed before publication.'}</p><a class="text-link28" href="#gaps">${topic ? 'Back to the research questions' : 'Explore the research questions'} <span aria-hidden="true">→</span></a></div></div>`;
}

function home28(v) {
  v.innerHTML = `<div class="home5 home28"><section class="hero5 wrap"><div class="eye5">Better Futures Project / Zhang Yue</div><div class="hero5-g top5"><h1 class="h1-5 purpose5-h" id="main-content">Tracking whether AI is weakening human influence</h1><div><p class="purpose5">How could increasing reliance on AI change people's skills, choices and influence?</p><p class="paper-link28">${ext7('https://gradual-disempowerment.ai/', 'The original gradual disempowerment paper')}</p></div></div></section>
    <section class="wrap home-sections28" aria-label="Explore the dashboard"><div><h2 class="h2-5 sm"><a href="#gaps">Research questions <span aria-hidden="true">→</span></a></h2><p>Nine topics along the proposed pathways.</p></div><div><h2 class="h2-5 sm"><a href="#projects">Projects &amp; grants <span aria-hidden="true">→</span></a></h2><p>Research programmes and funding opportunities.</p></div><div><h2 class="h2-5 sm"><a href="#contribute">Contribute <span aria-hidden="true">→</span></a></h2><p>Share a study, a measure or a correction.</p></div></section><div class="wrap"><p class="release-note28">Research prototype. Selected findings and topic reviews are in progress.</p></div></div>`;
}

function diagram28() {
  return `<div class="gap-map-scroll20" tabindex="0" role="region" aria-label="Proposed pathways diagram. Topic reviews are work in progress."><svg class="map5 gap-map20 neutral-map28" viewBox="0 0 ${GEO5.W} ${GEO5.H}" aria-labelledby="path-title28 path-desc28"><title id="path-title28">Proposed pathways of gradual disempowerment</title><desc id="path-desc28">AI capability, adoption and delegation connect to work, income, skills, culture and government, and ultimately human influence. These are proposed relationships. No evidence coverage ratings are shown.</desc><text x="24" y="28" class="map-section28">AI SYSTEMS AND USE</text><text x="490" y="28" class="map-section28">POSSIBLE CONSEQUENCES</text><text x="1040" y="28" class="map-section28">INFLUENCE</text>
    ${SEGS5.map(s => `<path class="path28" d="M${s.p.map(p => p.join(' ')).join(' L')}"/>`).join('')}
    ${TOPICS28.map(([id, title]) => {const [x,y] = GEO5.S[id]; return `<a class="node28" href="#${id}" aria-label="${esc(title)}: work in progress"><title>${esc(title)}: work in progress</title><circle class="hit28" cx="${x}" cy="${y}" r="23"/><circle class="node-ring28" cx="${x}" cy="${y}" r="9"/><text class="node-label28" x="${x}" y="${y - 24}" text-anchor="middle">${esc(title)}</text></a>`;}).join('')}
    </svg></div>`;
}

function gaps28(v) {
  const groups = [['AI systems and use', ['capability','adoption','handover']], ['Work and skills', ['work','share','skills']], ['Institutions and influence', ['culture','institutions','influence']]];
  v.innerHTML = `<div class="view5 wrap gaps20 gaps28"><header class="intro20"><div class="eye5">Research gaps</div><h1 class="h1-5" id="main-content">Where do we need better measures?</h1><p class="diagram-intro26">Proposed pathways, adapted from ${ext7('https://gradual-disempowerment.ai/', 'the original paper')}. The questions below guide our ongoing review.</p></header>${diagram28()}
    <section class="topics28" aria-labelledby="topics-title28"><div class="topics-head28"><h2 class="h2-5 sm" id="topics-title28">Questions under review</h2><span class="status28">Topic pages coming soon</span></div><div class="gap-columns20">${groups.map(([name, ids]) => `<section class="topic-group28"><h3>${name}</h3><ul>${ids.map(id => {const [,title,question] = TOPICS28.find(t => t[0] === id); return `<li><a class="gap-step20" href="#${id}" aria-label="${esc(title)}: work in progress"><h4>${esc(title)}</h4><p>${esc(question)}</p><span class="topic-status28">Work in progress</span></a></li>`;}).join('')}</ul></section>`).join('')}</div></section></div>`;
}

function method28(v) {
  v.innerHTML = `<div class="view5 wrap method22"><header class="intro20"><div class="eye5">Method</div><h1 class="h1-5" id="main-content">What this prototype covers</h1><p class="lead5">Research on how AI could affect human skills, choices and influence.</p></header>
    <section class="method-section28"><h2 class="h2-5 sm">The pathways</h2><p>The diagram is adapted from ${ext7('https://gradual-disempowerment.ai/', 'the gradual disempowerment paper')}, with an additional branch for skills and judgement. It organises research questions around the proposed relationships.</p></section>
    <section class="method-section28"><h2 class="h2-5 sm">Current status</h2><p>Findings, topic reviews and evidence maps are being reviewed before publication. Evidence-coverage ratings are also on hold.</p></section>
    <section class="method-section28"><h2 class="h2-5 sm">How sources will be selected</h2><p>The planned selection will prioritise direct relevance to each question, sound methods, clear population and time coverage, and traceable sources. It will include findings that challenge the interpretation.</p><details class="method-details28"><summary>Review checks</summary><ul><li>Confirm the primary source, version, population and outcome.</li><li>Check figures, units, comparisons and any chart transformations.</li><li>Match each claim to the study's design and scope.</li><li>Review competing explanations and relevant contradictory evidence.</li></ul><p>AI assists discovery and extraction. Human review is required before a finding is featured. A curated selection will not establish that a research area has no evidence.</p></details></section>
    <section class="method-section28"><h2 class="h2-5 sm">Projects &amp; grants</h2><p>The directory is manually maintained. Each entry links to its organiser and shows its last source-check date. Availability can change.</p></section></div>`;
}

function render28() {
  const raw = (location.hash || '#home').slice(1);
  if (raw === 'main-content') { document.querySelector('#view').focus(); return; }
  const parts = raw.split(/[/?]/), root = parts[0];
  const topic = TOPICS28.find(([id]) => root === id || ['gaps','topic'].includes(root) && parts[1] === id);
  const aliases = {map:'home', about:'method', methods:'method', futures:'projects', grants:'projects', emerging:'evidence', findings:'evidence'};
  let route = aliases[root] || root || 'home', title;
  const v = document.querySelector('#view');
  if (topic) { hold28(v, topic[1], true); route = 'gaps'; title = topic[1]; }
  else if (route === 'home') { home28(v); title = 'Home'; }
  else if (route === 'gaps') { gaps28(v); title = 'Research gaps'; }
  else if (route === 'projects') { viewProjects21(v, root === 'grants' ? 'grants' : parts[1]); title = 'Projects & grants'; }
  else if (route === 'contribute') { viewContribute21(v); title = 'Contribute'; }
  else if (route === 'method') { method28(v); title = 'Method'; }
  else { title = route === 'library' ? 'Evidence library' : 'Selected findings'; hold28(v, title); route = 'evidence'; }
  document.title = `${title} | Gradual Disempowerment Dashboard`;
  v.querySelector('h1')?.setAttribute('id', 'main-content');
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.getAttribute('href') === '#' + route) a.setAttribute('aria-current','page');
    else a.removeAttribute('aria-current');
  });
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', () => { render28(); document.querySelector('#view').focus({preventScroll:true}); });
render28();
