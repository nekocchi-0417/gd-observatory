/* Reorganisation of the accepted pre-comparison dashboard. */
const savedRender20 = render;

function adaptHomeIntro25(v) {
  const hero = $('.home5 .hero5-g.top5', v);
  if (!hero) return;
  hero.classList.add('measurement-intro25');
  const intro = $('.purpose5', hero);
  intro.textContent = 'Benchmarks and adoption surveys help us follow what AI can do and where it is used. The evidence assembled here offers a less complete picture of whether people and institutions retain the skills, authority and practical ability to question its decisions.';
  intro.insertAdjacentHTML('afterend', `<p class="home-finding25"><strong>This dashboard brings those measurement gaps into view.</strong></p>
    <p class="home-links25"><a class="go" href="#gaps">Research gaps &#8594;</a><a class="home-paper25" href="${esc(COPY.home.paper.url)}" target="_blank" rel="noopener" aria-label="Read the original Gradual Disempowerment paper (opens in a new tab)">Original paper &#8599;</a></p>`);
}

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

const gapCoverageSummaries20 = {
  capability:'Benchmarks test defined tasks; performance across complete workflows is less well established.',
  adoption:'Repeated surveys track how often people and businesses use AI.',
  handover:'Provider logs describe tasks handed to AI; human review and intervention are less visible.',
  work:"Payroll studies track employment in AI-exposed jobs; links to firms' actual AI use are less clear.",
  share:"Official statistics track workers' share of income; AI's contribution is harder to isolate.",
  skills:'Short trials test learning; longer-term changes in unaided skills remain unclear.',
  culture:'Platform data track AI uploads and listening; coverage of wider audiences and creator income is limited.',
  institutions:'Inventories list AI applications; comparable records of decisions, overrides and appeals are limited.',
  influence:"Surveys capture perceived control; people's practical ability to refuse or challenge AI is less directly measured."
};

function mountGapDiagram20(el) {
  el.innerHTML=`<div class="gap-map-scroll20" tabindex="0" role="region" aria-label="Proposed gradual disempowerment pathways"><div class="map5 gap-map20">${mapSVG5()}</div></div>`;
  const map=$('.gap-map20',el);
  $('svg',map).setAttribute('aria-label','Proposed pathways to gradual disempowerment. Each node links to its topic. Node colours and shapes correspond to the coverage groups below.');
  $$('.research-prompt5,.coverage-label5',map).forEach(label=>label.remove());
  // Reuse the pathway geometry, with native topic links and no duplicate research cards.
  $$('.st5',map).forEach(node=>{
    const id=node.dataset.id, link=document.createElementNS('http://www.w3.org/2000/svg','a');
    link.setAttribute('class','st5');link.setAttribute('data-id',id);link.setAttribute('data-coverage',coverageOf5(id).band);
    link.setAttribute('href','#'+id);link.setAttribute('tabindex','0');link.setAttribute('role','link');
    link.setAttribute('aria-label',nameOf(id)+'. '+coverageBand5(id).label);
    while(node.firstChild)link.appendChild(node.firstChild);
    node.replaceWith(link);
  });
  let hovered=null,focused=null;
  const highlight=()=>{
    const id=hovered||focused;
    map.classList.toggle('is-previewing',Boolean(id));
    $$('.st5',map).forEach(node=>node.classList.toggle('here',node.dataset.id===id));
    $$('.seg5',map).forEach((path,i)=>path.classList.toggle('active',Boolean(id)&&activeSeg5(id,SEGS5[i])));
  };
  map.addEventListener('pointerover',event=>{const node=event.target.closest?.('.st5');hovered=node?.dataset.id||null;highlight();});
  map.addEventListener('pointerleave',()=>{hovered=null;highlight();});
  map.addEventListener('focusin',event=>{focused=event.target.closest?.('.st5')?.dataset.id||null;highlight();});
  map.addEventListener('focusout',event=>{focused=event.relatedTarget?.closest?.('.st5')?.dataset.id||null;highlight();});
  map.addEventListener('keydown',event=>{
    const node=event.target.closest?.('.st5');if(!node)return;
    if(event.key==='Enter'){event.preventDefault();go(node.dataset.id);}
    else if(['ArrowLeft','ArrowRight'].includes(event.key)){
      event.preventDefault();const i=ORDER.indexOf(node.dataset.id),next=ORDER[(i+(event.key==='ArrowRight'?1:-1)+ORDER.length)%ORDER.length];
      const target=$(`.st5[data-id="${next}"]`,map);target.focus();target.scrollIntoView({block:'nearest',inline:'nearest'});
    }
  });
}

function gapColumns20() {
  return `<div class="gap-columns20">${['major','partial','stronger'].map(band => {
    const label=COPY.coverage.bands[band], ids=ORDER.filter(id=>coverageOf5(id).band===band);
    return `<section class="coverage-column20" data-coverage="${band}" aria-labelledby="gap-${band}-title20">
      <header class="coverage-column-head20">${coverageGlyph5(band,22)}<div><h3 id="gap-${band}-title20">${esc(label.label)}</h3><p>${esc(label.description)}</p></div></header>
      <ul>${ids.map(id=>`<li><a href="#${id}" class="gap-step20"><h4>${esc(nameOf(id))}</h4><p>${esc(gapCoverageSummaries20[id])}</p><span class="map-availability24${topicMaps24[id]?'':' is-pending'}">${topicMaps24[id]?'Evidence map':'Map coming soon'}</span></a></li>`).join('')}</ul>
    </section>`;
  }).join('')}</div>`;
}

function viewGaps20(v) {
  v.innerHTML = `<div class="view5 wrap gaps20"><header class="intro20"><div class="eye5"><span>Research gaps</span></div><h1 class="h1-5">Where do we need better measures?</h1></header>
    <section class="gap-pathway20" aria-label="Proposed gradual disempowerment pathways"><div id="gaps-map20"></div></section>
    <section class="gap-coverage20" aria-labelledby="gap-coverage-title20"><h2 class="h2-5 sm" id="gap-coverage-title20">What the selected evidence covers</h2>
      ${gapColumns20()}<p class="note5">Provisional, AI-assisted assessment of selected sources. <a href="#method/coverage">How assessed</a></p>
    </section></div>`;
  mountGapDiagram20($('#gaps-map20',v));
}

function adaptTopic20(v, id, sub) {
  const root = $('.pilot7', v) || $('.priority6', v);
  if (!root) return;
  const back = document.createElement('nav');
  back.className = 'research-back20';
  back.setAttribute('aria-label', 'Research navigation');
  back.innerHTML = '<a href="#gaps">&#8592; Research gaps</a>';
  root.prepend(back);
  if(root.classList.contains('pilot7')) adaptTopicResearch24(root,id);
  // Keep one home for each gap summary rather than repeating the overview here.
  const watch = $('#' + id + '-watch', v);
  if (watch) {
    const selfLink = watch.querySelector(`a[href="#gaps/${id}"]`);
    if (selfLink) selfLink.remove();
  }
  $$('.pn5 a[href="#evidence"]', v).forEach(a => a.setAttribute('href', '#gaps'));
  if (sub === 'source' || sub === 'more') {
    const target = $('#' + id + (sub === 'source' ? '-source' : '-related'), v);
    if (target) {
      for(let parent=target;parent && root.contains(parent);parent=parent.parentElement) if(parent.tagName === 'DETAILS') parent.open=true;
      openAt5(target);
    }
  }
  if (sub === 'gaps' && watch) openAt5(watch);
  libraryCorner23(v,id);
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
  if (/^library(?:[/?]|$)/.test(String(id))) return { page:'library' };
  const [base, sub] = String(id || 'home').split('/');
  if(topicMaps24[base] && sub==='source') return { page:'topic-source', id:base };
  if(topicMaps24[base] && sub==='more') return { page:'library', route:`library?view=map&area=${topicMaps24[base].area}&scope=observed&from=${base}` };
  if (base === 'projects' || base === 'futures') return { page: 'projects', sub: ['work', 'grants'].includes(sub) ? sub : null };
  if (base === 'contribute' || base === 'why') return sub === 'funding' ? { page: 'projects', sub: 'grants' } : { page: 'contribute' };
  if (base === 'emerging' || base === 'evidence') return { page: 'evidence', sub };
  if (base === 'gaps' && ORDER.includes(sub)) return { page: 'topic', id: sub, sub: 'gaps' };
  if (base === 'gaps' || base === 'record') return { page: 'gaps' };
  if (ORDER.includes(base)) return { page: 'topic', id: base, sub };
  if (base === 'review') return ORDER.includes(sub) ? { page: 'topic', id: sub } : { page: 'gaps' };
  return { page: 'original', id: base, sub };
}

function renderReorganized20(id) {
  clearInterval(tourTimer); tourTimer = null;
  const route = resolveRoute20(id), v = $('#view');
  let active;
  window.scrollTo(0, 0);
  if (route.page === 'evidence') { viewEvidence20(v, route.sub); active = 'evidence'; }
  else if (route.page === 'gaps') { viewGaps20(v); libraryCorner23(v,''); active = 'gaps'; }
  else if (route.page === 'library') { viewLibrary23(v,route.route || id); id=current; active='gaps'; }
  else if (route.page === 'topic-source') { viewTopicSource24(v,route.id); active='gaps'; }
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
    adaptHomeIntro25(v);
    active = ['home', 'map', 'pathways'].includes(route.id) ? 'home' : route.id === 'details' ? 'gaps' : route.id === 'why' ? 'contribute' : route.id;
  }
  current = id;
  $$('.nav a').forEach(a => a.getAttribute('href') === '#' + active ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
  const titles = { evidence: 'Evidence', gaps: 'Research gaps', projects: 'Projects & grants', contribute: 'Contribute' };
  if (titles[active]) document.title = titles[active] + ' | Gradual Disempowerment Dashboard';
  if (route.page === 'library') document.title = 'Evidence library | Gradual Disempowerment Dashboard';
}

installWork10();
COPY.home.cta.buttons = COPY.home.cta.buttons.map(button => button.to === 'contribute/funding' ? { ...button, t: 'Find funding', to: 'projects/grants' } : button);
COPY.home.cta.why = 'How to contribute';
$('.nav').innerHTML = [['home', 'Home'], ['evidence', 'Evidence'], ['gaps', 'Research gaps'], ['projects', 'Projects & grants'], ['contribute', 'Contribute'], ['method', 'Method']].map(([id, label]) => `<a href="#${id}">${esc(label)}</a>`).join('');
const libraryFooter23=document.createElement('a');
libraryFooter23.href='#library';libraryFooter23.className='library-footer23';libraryFooter23.textContent='Evidence library';
$('.ft .wrap').append(libraryFooter23);
render = renderReorganized20;
const mapEntry24=Object.keys(topicMaps24).some(id=>[id,id+'/source',id+'/more',id+'/gaps','gaps/'+id].includes(INITIAL_ROUTE23));
if(mapEntry24) { try { history.replaceState(null,'','#'+INITIAL_ROUTE23); } catch (_) {} }
render(mapEntry24 || /^library(?:[/?]|$)/.test(INITIAL_ROUTE23) ? INITIAL_ROUTE23 : (location.hash || '#home').slice(1));
