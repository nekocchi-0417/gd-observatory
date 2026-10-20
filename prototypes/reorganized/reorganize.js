/* Local reorganisation of the accepted pre-comparison dashboard. */
const savedRender20 = render;

const evidencePairs20 = [
  {
    id: 'work', n: '01', left: 'capability', right: 'work',
    title: 'Models handle longer tasks. Young-worker employment has fallen in highly exposed jobs.',
    tag: 'Technical tests / US employment',
    watch: 'If technical gains translate into workplace automation, a useful next test is whether firms adopting AI reduce junior hiring or training more than comparable firms.'
  },
  {
    id: 'skills', n: '02', left: 'adoption', right: 'skills',
    title: 'AI use is spreading. How it is used may matter for learning.',
    tag: 'US survey / Turkish classroom trial',
    watch: 'The classroom result suggests that tool design may matter. Workplace studies could test whether guided AI use preserves skills better than simply providing answers.'
  },
  {
    id: 'culture', n: '03', left: 'uploads', right: 'streams',
    title: 'AI music makes up far more of new uploads than of listening on Deezer.',
    tag: 'One streaming platform',
    watch: 'A growing upload share alone tells us little about displacement. The next signal is whether human creators lose genuine audience attention or income.'
  }
];

function evidencePair20(pair) {
  const ids = pair.id === 'culture' ? ['culture'] : [pair.left, pair.right];
  return `<section class="comparison10" id="compare-${pair.id}" aria-labelledby="pair-${pair.id}">
    <header class="pair-head10"><span class="pair-no10">${pair.n}</span><div><h2 id="pair-${pair.id}">${esc(pair.title)}</h2><p class="pair-tag10">${esc(pair.tag)}</p></div></header>
    <div class="pair-grid10">${comparisonCard10(pair.left, `${pair.id}-left20`)}${comparisonCard10(pair.right, `${pair.id}-right20`)}</div>
    <p class="pair-reading10"><b>What to watch:</b> ${esc(pair.watch)}</p>
    <div class="pair-footer10"><details class="pair-notes10"><summary>Sources &amp; caveats</summary>${pairNotes10(pair)}</details>
    <div class="pair-links10">${ids.map(id => `<a href="#${id}">${esc(nameOf(id))}: research gaps &#8594;</a>`).join('')}</div></div>
  </section>`;
}

function viewEvidence20(v, anchor) {
  v.innerHTML = `<div class="wrap view5 evidence20"><header class="intro20"><div class="eye5"><span>Evidence</span></div><h1 class="h1-5">AI progress and human outcomes</h1><p class="lead5">Six selected findings on work, learning and culture.</p></header>
    <nav class="jump10" aria-label="Evidence comparisons">${[['work', 'Work'], ['skills', 'Learning'], ['culture', 'Culture']].map(([id, label], i) => `<a href="#evidence/${id}">${i + 1}. ${label}</a>`).join('')}</nav>
    <p class="reading-note10">Read each finding in its own setting. Pairing them does not establish a causal link.</p>
    ${evidencePairs20.map(evidencePair20).join('')}
    <p class="note5">AI-assisted selection. Source figures and interpretations still need independent review.</p></div>`;
  mountComparisons10(v);
  if (['work', 'skills', 'culture'].includes(anchor)) requestAnimationFrame(() => {
    document.getElementById('compare-' + anchor)?.scrollIntoView({ block: 'start' });
  });
}

function gapGroups20() {
  const distance = steps5();
  const score = { major: 0, partial: 1, stronger: 2 };
  const ordered = [...ORDER].sort((a, b) => score[coverageOf5(a).band] - score[coverageOf5(b).band] || distance[a] - distance[b] || ORDER.indexOf(a) - ORDER.indexOf(b));
  return [
    { id: 'near-limited', near: true, limited: true, title: 'Closer to human influence, less well measured' },
    { id: 'near-stronger', near: true, limited: false, title: 'Closer to human influence, better measured' },
    { id: 'earlier-limited', near: false, limited: true, title: 'Earlier in the pathway, less well measured' },
    { id: 'earlier-stronger', near: false, limited: false, title: 'Earlier in the pathway, better measured' }
  ].map(group => ({ ...group, ids: ordered.filter(id => (distance[id] <= 1) === group.near && (coverageOf5(id).band !== 'stronger') === group.limited) }));
}

function gapMatrix20() {
  const groups = gapGroups20();
  const cell = group => `<section class="matrix-cell20" data-group="${group.id}" aria-labelledby="${group.id}-title"><h2 id="${group.id}-title" class="sr5">${group.title}</h2>
    <ul>${group.ids.map(id => `<li><a href="#${id}" class="gap-step20"><div class="gap-step-head20"><h3>${esc(nameOf(id))}</h3>${coverageBadge5(id)}</div><p>${esc(coverageOf5(id).need)}</p></a></li>`).join('')}</ul></section>`;
  return `<div class="gap-matrix20" role="group" aria-label="Research gaps by measurement coverage and closeness to human influence">
    <div class="matrix-axis20">Measurement coverage</div><div class="matrix-col20">Less well measured</div><div class="matrix-col20">Better measured</div>
    <div class="matrix-row20">Closer to human influence</div>${cell(groups[0])}${cell(groups[1])}
    <div class="matrix-row20">Earlier in the pathway</div>${cell(groups[2])}${cell(groups[3])}
  </div>`;
}

function viewGaps20(v) {
  v.innerHTML = `<div class="view5 wrap gaps20"><header class="intro20"><div class="eye5"><span>Research gaps</span></div><h1 class="h1-5">Where do we need better measures?</h1><p class="lead5">The selected evidence leaves important questions about skills, oversight and people's ability to influence decisions.</p></header>
    ${gapMatrix20()}
    <details class="matrix-method20"><summary>How the two criteria work</summary><dl>
      <div><dt>How well measured?</dt><dd>Less well measured combines the diagram's major-gap and partial-coverage bands. Better measured uses its stronger-coverage band. Each step keeps its original label.</dd></div>
      <div><dt>How close to human influence?</dt><dd>Closer means the outcome itself or one connection away in this dashboard's pathway. Earlier steps are two or more connections away. This describes the diagram's structure; it does not estimate the size of an effect.</dd></div>
    </dl><p>These AI-assisted groupings describe the selected evidence. They can help choose questions to investigate; a systematic review could change them. They do not rank risk, funding value or the total amount of research.</p><a href="#method/coverage">Coverage criteria</a></details>
    <p class="note5">Provisional grouping of selected sources. Open a step for its indicators, limitations and next measurement needed.</p></div>`;
}

function adaptTopic20(v, id, sub) {
  const root = $('.pilot7', v) || $('.priority6', v);
  if (!root) return;
  const back = document.createElement('nav');
  back.className = 'research-back20';
  back.setAttribute('aria-label', 'Research navigation');
  back.innerHTML = '<a href="#gaps">&#8592; Research gaps</a>';
  root.prepend(back);
  // Keep one home for each gap summary rather than repeating the overview here.
  const watch = $('#' + id + '-watch', v);
  if (watch) {
    const selfLink = watch.querySelector(`a[href="#gaps/${id}"]`);
    if (selfLink) selfLink.remove();
  }
  $$('.pn5 a[href="#evidence"]', v).forEach(a => a.setAttribute('href', '#gaps'));
  if (sub === 'source' || sub === 'more') {
    const target = $('#' + id + (sub === 'source' ? '-source' : '-related'), v);
    if (target) { target.open = true; openAt5(target); }
  }
  if (sub === 'gaps' && watch) openAt5(watch);
}

function directoryDate21(date) {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(date + 'T00:00:00Z'));
}

function grantStatus21(grant, now = Date.now()) {
  return grant.deadline && now > Date.parse(grant.deadline) ? 'Deadline passed' : grant.status;
}

function directoryRow21(item, grant = false) {
  const status = grant ? grantStatus21(item) : item.status;
  return `<li class="directory-row21" data-listing="${item.id}"><div class="directory-main21"><p class="directory-org21">${esc(item.organisation)}</p><h3>${ext7(item.url, item.title)}</h3><p>${esc(item.summary)}</p></div>
    <div class="directory-meta21">${item.period ? `<span>${esc(item.period)}</span>` : ''}<span class="directory-status21">${esc(status)}</span>${item.deadlineLabel ? `<small>${esc(item.deadlineLabel)}</small>` : ''}<small>Checked <time datetime="${item.checked}">${directoryDate21(item.checked)}</time></small></div></li>`;
}

function viewProjects21(v, anchor) {
  v.innerHTML = `<div class="view5 wrap projects21"><header class="intro20"><div class="eye5"><span>Projects &amp; grants</span></div><h1 class="h1-5">Ongoing &amp; upcoming projects</h1><p class="lead5">Research and funding relevant to gradual disempowerment.</p></header>
    <nav class="directory-nav21" aria-label="Directory sections"><a href="#projects/work">Projects</a><a href="#projects/grants">Grants</a></nav>
    <section class="directory-section21" id="projects-work" aria-labelledby="projects-heading21"><h2 class="h2-5 sm" id="projects-heading21">Research projects</h2><p class="note5">Listed programmes and research proposals; application status is shown separately.</p><ul class="directory-list21">${DIRECTORY21.projects.map(item => directoryRow21(item)).join('')}</ul></section>
    <section class="directory-section21" id="projects-grants" aria-labelledby="grants-heading21"><h2 class="h2-5 sm" id="grants-heading21">Grants</h2><p class="note5">Potential fits for this work. Check each funder's scope and eligibility.</p><ul class="directory-list21">${DIRECTORY21.grants.map(item => directoryRow21(item, true)).join('')}</ul></section>
    <p class="note5 directory-review21">Manually updated. Source pages checked with AI assistance on ${directoryDate21(DIRECTORY21.reviewed)}. Confirm availability with the organiser.</p></div>`;
  if (['work', 'grants'].includes(anchor)) requestAnimationFrame(() => document.getElementById('projects-' + anchor)?.scrollIntoView({ block: 'start' }));
}

function viewContribute21(v) {
  const buttons = COPY.why.contribute.buttons;
  const descriptions = {
    'Propose an indicator': 'Suggest a measure that could help track a step in the pathway.',
    'Share a study': 'Send research that adds evidence or challenges our interpretation.',
    'Suggest a correction': 'Flag an incorrect figure, unclear summary or broken source link.'
  };
  v.innerHTML = `<div class="view5 wrap contribute21"><header class="intro20"><div class="eye5"><span>Contribute</span></div><h1 class="h1-5">Help improve the evidence</h1><p class="lead5">Share a study, suggest an indicator or flag a mistake.</p></header>
    <ul class="submission-list21">${buttons.map(([label, url]) => `<li><h2>${ext7(url, label)}</h2><p>${esc(descriptions[label])}</p></li>`).join('')}</ul>
    <p class="note5">Include the original source and a short explanation of what it measures or changes. Submissions open on GitHub and are reviewed before inclusion.</p></div>`;
}

viewSourceMethod = viewMethod22;

function resolveRoute20(id) {
  const [base, sub] = String(id || 'home').split('/');
  if (base === 'projects' || base === 'futures') return { page: 'projects', sub: ['work', 'grants'].includes(sub) ? sub : null };
  if (base === 'contribute' || base === 'why') return sub === 'funding' ? { page: 'projects', sub: 'grants' } : { page: 'contribute' };
  if (base === 'emerging' || base === 'evidence') return { page: 'evidence', sub };
  if (base === 'gaps' && ORDER.includes(sub)) return { page: 'topic', id: sub, sub: 'gaps' };
  if (base === 'gaps' || base === 'record') return { page: 'gaps' };
  if (ORDER.includes(base)) return { page: 'topic', id: base, sub };
  if (base === 'review' || base === 'library') return ORDER.includes(sub) ? { page: 'topic', id: sub } : { page: 'gaps' };
  return { page: 'original', id: base, sub };
}

function renderReorganized20(id) {
  clearInterval(tourTimer); tourTimer = null;
  const route = resolveRoute20(id), v = $('#view');
  let active;
  window.scrollTo(0, 0);
  if (route.page === 'evidence') { viewEvidence20(v, route.sub); active = 'evidence'; }
  else if (route.page === 'gaps') { viewGaps20(v); active = 'gaps'; }
  else if (route.page === 'projects') {
    const target = 'projects' + (route.sub ? '/' + route.sub : '');
    if (id !== target) { try { history.replaceState(null, '', '#' + target); } catch (_) {} }
    id = target; viewProjects21(v, route.sub); active = 'projects';
  }
  else if (route.page === 'contribute') { viewContribute21(v); active = 'contribute'; }
  else if (route.page === 'topic') {
    const detail = route.sub && !['source', 'more', 'gaps'].includes(route.sub);
    savedRender20(detail ? route.id + '/' + route.sub : route.id);
    adaptTopic20(v, route.id, route.sub); active = 'gaps';
  } else {
    savedRender20(id);
    active = ['home', 'map', 'pathways'].includes(route.id) ? 'home' : route.id === 'details' ? 'gaps' : route.id === 'why' ? 'contribute' : route.id;
  }
  current = id;
  $$('.nav a').forEach(a => a.getAttribute('href') === '#' + active ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
  const titles = { evidence: 'Evidence', gaps: 'Research gaps', projects: 'Projects & grants', contribute: 'Contribute' };
  if (titles[active]) document.title = titles[active] + ' | Gradual Disempowerment Dashboard';
}

installWork10();
COPY.home.cta.buttons = COPY.home.cta.buttons.map(button => button.to === 'contribute/funding' ? { ...button, t: 'Find funding', to: 'projects/grants' } : button);
COPY.home.cta.why = 'How to contribute';
$('.nav').innerHTML = [['home', 'Home'], ['evidence', 'Evidence'], ['gaps', 'Research gaps'], ['projects', 'Projects & grants'], ['contribute', 'Contribute'], ['method', 'Method']].map(([id, label]) => `<a href="#${id}">${esc(label)}</a>`).join('');
render = renderReorganized20;
render((location.hash || '#home').slice(1));
