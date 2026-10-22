'use strict';

// Lucide icon geometry, distributed under the ISC licence in ICON-LICENSE.txt.
const ICONS = {
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/>',
  moon: '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6.25 6.25 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>'
};
const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));

function studyHTML(source) {
  const s = Object.fromEntries(Object.entries(source).map(([key,value]) => [key, typeof value === 'string' ? escapeHTML(value) : value]));
  return `<article class="study" id="study-${s.id}" aria-labelledby="title-${s.id}">
    <div class="study-heading"><p class="study-design"><span class="kind">${s.kind}</span><span aria-hidden="true">/</span>${s.design}</p>
    <details class="study-note"><summary aria-label="Study context and caveats: ${s.authors}" aria-controls="note-${s.id}" aria-expanded="false">${icon('info')}</summary>
      <div class="note-panel" id="note-${s.id}" role="note" aria-label="Study context and caveats"><h4>Context &amp; caveats</h4><p>${s.context}</p><p>${s.limit}</p><a href="${s.url}" target="_blank" rel="noopener noreferrer">Read the original source</a>${s.updateUrl ? `<br><a href="${s.updateUrl}" target="_blank" rel="noopener noreferrer">METR's follow-up update</a>` : ''}</div>
    </details></div>
    <h3 id="title-${s.id}">${s.headline}</h3>
    <p class="finding">${s.finding}</p>
    <p class="source-line"><a href="${s.url}" target="_blank" rel="noopener noreferrer" title="${s.title}">${s.authors}, ${s.publisher} (${s.year}) ${icon('external')}</a><span>${s.scope}</span></p>
    <p class="study-timing"><span>Time covered:</span> ${s.followUp}</p>
    <p class="selection-reason"><span>Why selected:</span> ${s.why}</p>
  </article>`;
}

const refRecord = id => GD_CATALOG.find(item => item.id === id || item.rawIds?.includes(id));
function gapHTML(gap) {
  const links = gap.refs.map(id => {
    const record = refRecord(id);
    if (!record) return '';
    return `<a href="${escapeHTML(topicURL('library.html'))}#${encodeURIComponent(record.id)}">${escapeHTML(record.citation)}</a>`;
  }).filter(Boolean);
  return `<article class="gap-row"><div><h3>${escapeHTML(gap.title)}</h3><p class="gap-question">${escapeHTML(gap.summary)}</p></div><div><p><span class="gap-label">Basis across reviewed sources</span>${escapeHTML(gap.basis)}</p><p class="gap-proposal"><strong>Proposed measurement:</strong> ${escapeHTML(gap.next)}</p><details class="gap-detail"><summary>Evidence behind this gap <span class="count">${links.length} sources</span></summary><div class="gap-sources">${links.join('')}</div><p>This is a provisional synthesis of the sources reviewed. The wider library may contain further evidence or counterexamples.</p></details></div></article>`;
}
function methodHTML() {
  return `<p><strong>Scope.</strong> A targeted, non-exhaustive scan of research on ${escapeHTML(GD_TOPIC.name.toLowerCase())}. ${GD_REVIEW ? 'Detailed records describe the source material inspected on 22 October 2026. Earlier reading leads remain separate.' : 'This topic retains the earlier skills and judgement scan; most library records still need detailed source review.'}</p><p><strong>Selection.</strong> Relevance to the question, clear outcome definitions and useful comparison groups or repeated observations. The shortlist includes different findings and explains each choice. Indicators, empirical studies and proposals have separate labels.</p><p><strong>Gaps.</strong> Each question links to its supporting sources. These are provisional interpretations of this collection; an empty map cell cannot establish an absence of research.</p><p><strong>Review status.</strong> AI-assisted; human review pending. Inspecting an abstract or institutional summary is recorded separately from inspecting a full paper. A study's duration alone does not establish repeated follow-up.</p><p><a href="${GD_REVIEW ? `research/${GD_TOPIC_ID}.json` : 'https://github.com/nekocchi-0417/gd-observatory/blob/main/research/landscape/master.json'}">${GD_REVIEW ? 'Download this topic\'s extraction and search record (JSON)' : 'Earlier landscape source records'}</a></p>`;
}
function decodedHash() { try { return decodeURIComponent(location.hash.slice(1)); } catch { return ''; } }
document.querySelectorAll('[data-library-link]').forEach(link => { link.href = topicURL('library.html'); });
document.querySelectorAll('[data-topic-link]').forEach(link => { link.href = topicURL(); });

if (document.body.dataset.view === 'topic') {
  document.title = `${GD_TOPIC.name} | Gradual Disempowerment Dashboard`;
  document.querySelector('.topic-header .eyebrow').textContent = GD_TOPIC.name;
  document.querySelector('.topic-header h1').textContent = GD_TOPIC.question;
  document.querySelector('.topic-synthesis').textContent = GD_TOPIC.synthesis;
  const switcher = document.getElementById('topic-switch');
  switcher.innerHTML = Object.entries(GD_TOPIC_CONFIG).map(([id,topic]) => `<option value="${id}">${escapeHTML(topic.name)}</option>`).join('');
  switcher.value = GD_TOPIC_ID;
  switcher.addEventListener('change',() => { location.href = `index.html?topic=${encodeURIComponent(switcher.value)}`; });
  const topicIds = Object.keys(GD_TOPIC_CONFIG);
  const current = topicIds.indexOf(GD_TOPIC_ID);
  document.getElementById('topic-sequence').innerHTML = [current > 0 ? `<a href="index.html?topic=${topicIds[current-1]}">&larr; ${escapeHTML(GD_TOPIC_CONFIG[topicIds[current-1]].name)}</a>` : '<span></span>', current < topicIds.length-1 ? `<a href="index.html?topic=${topicIds[current+1]}">${escapeHTML(GD_TOPIC_CONFIG[topicIds[current+1]].name)} &rarr;</a>` : '<span></span>'].join('');
  const isSkills = GD_TOPIC_ID === 'skills';
  document.querySelector('#map-note').innerHTML = '<span id="map-coverage"></span> Themes overlap. Counts describe this collection, not evidence quality or the whole field.';
  document.querySelector('#evidence-map .section-intro').textContent = isSkills ? 'Research grouped by theme and study design.' : 'Which questions are studied, and whether measurements follow change over time.';
  document.querySelector('.evidence-matrix thead tr').innerHTML = `<th scope="col">Research theme</th>${GD_DESIGNS.map(item => `<th scope="col">${escapeHTML(item.label)}</th>`).join('')}`;
  document.querySelector('.evidence-matrix caption').textContent = 'Number of sources in the mapped collection. Each count links to its sources. A zero means no source in this subset, not no research in the field.';
  document.querySelector('.evidence-matrix').dataset.layout = isSkills ? 'design' : 'temporal';
  document.querySelector('.map-method>div').innerHTML = isSkills
    ? '<p>Counts group the scan\'s construct tags and study-design labels. Themes can overlap. The collection includes earlier forms of AI alongside generative AI.</p><dl id="map-tag-rules"></dl>'
    : '<p>Only sources with detailed extraction notes enter this map. Imported reading leads stay in the library until assessed. A source may address several themes; related publications can reuse the same dataset.</p><p><strong>One-time findings:</strong> a single measurement window or short experiment. <strong>Repeated measures:</strong> comparable observations across dates, sometimes with different participants. <strong>Same units followed:</strong> people, organisations or other units followed over time. <strong>Reviews &amp; proposals:</strong> synthesis and conceptual work without a new measured trajectory.</p><p>Study duration and whether follow-up occurs after AI is withdrawn appear in individual records. Colours encode source counts within this map and should not be compared across topics.</p><dl id="map-tag-rules"></dl>';
  document.querySelector('.library-access').href = topicURL('library.html');
  document.querySelector('#studies h2').innerHTML = '<span class="section-number">02</span> Selected studies and indicators';
  document.querySelector('.selection-intro').textContent = 'Selected for relevance, interpretable measures and a clear research design. Each source explains what it contributes.';
  document.querySelector('.selection-method>div').innerHTML = methodHTML();
  document.querySelector('#gaps .section-intro').textContent = 'Open questions across the sources examined, and concrete ways to investigate them.';
  document.querySelectorAll('.gap-row').forEach(row => row.remove());
  document.querySelector('#gaps').insertAdjacentHTML('beforeend',GD_TOPIC.gaps.map(gapHTML).join(''));
  const counts = GD_FACETS.map(facet => GD_DESIGNS.map(design => GD_CATALOG.filter(source => matchesFacet(source,facet.id) && mapColumn(source) === design.id).length));
  const largestCount = Math.max(1,...counts.flat());
  document.getElementById('map-rows').innerHTML = GD_FACETS.map((facet,row) => `<tr><th scope="row">${escapeHTML(facet.label)}</th>${GD_DESIGNS.map((design,column) => {
    const count = counts[row][column];
    const density = count === 0 ? 0 : Math.ceil(count / largestCount * 3);
    return `<td><a class="map-cell" data-density="${density}" href="${escapeHTML(topicURL('library.html',{facet:facet.id,design:design.id}))}" aria-label="${escapeHTML(facet.label)}: ${count} ${escapeHTML(design.label.toLowerCase())} references" title="${count} references: ${escapeHTML(facet.label)} / ${escapeHTML(design.label)}">${count}</a></td>`;
  }).join('')}</tr>`).join('');
  document.getElementById('map-library-count').textContent = `${GD_CATALOG.length} references`;
  const mappedCount = GD_CATALOG.filter(source => GD_FACETS.some(facet => matchesFacet(source,facet.id))).length;
  const mapCoverage = document.getElementById('map-coverage');
  mapCoverage.textContent = `${mappedCount} of ${GD_CATALOG.length} library records mapped.`;
  if (!isSkills && GD_CATALOG.length > mappedCount) {
    const leads = document.createElement('a');
    leads.href = topicURL('library.html',{collection:'imported'});
    leads.textContent = `${GD_CATALOG.length-mappedCount} further reading leads`;
    mapCoverage.append(' ',leads,' await assessment and are not included in this map.');
  }
  document.getElementById('map-tag-rules').innerHTML = GD_FACETS.map(facet => `<dt>${escapeHTML(facet.label)}</dt><dd>${escapeHTML(facet.tags.join(', '))}</dd>`).join('');
  document.getElementById('featured-studies').innerHTML = GD_SOURCES.filter(source => source.featured).map(studyHTML).join('');
  document.getElementById('supporting-studies').innerHTML = GD_SOURCES.filter(source => !source.featured).map(studyHTML).join('');
  document.getElementById('supporting').hidden = !GD_SOURCES.some(source => !source.featured);
  document.querySelector('#supporting>summary>span').innerHTML = `More selected sources <span class="count">${GD_SOURCES.filter(source => !source.featured).length}</span>`;
  const notes = [...document.querySelectorAll('.study-note')];
  const pinned = new WeakSet();
  const timers = new WeakMap();
  let suppressFocus = false;

  function closeNote(note) {
    clearTimeout(timers.get(note));
    pinned.delete(note);
    note.open = false;
    note.querySelector('summary').setAttribute('aria-expanded','false');
  }

  function positionNote(note) {
    const panel = note.querySelector('.note-panel');
    const trigger = note.querySelector('summary').getBoundingClientRect();
    panel.style.position = 'fixed';
    const width = Math.min(350, window.innerWidth - 32);
    panel.style.width = `${width}px`;
    panel.style.left = `${Math.max(16,Math.min(trigger.right - width,window.innerWidth - width - 16))}px`;
    panel.style.right = 'auto';
    panel.style.maxHeight = `${window.innerHeight - 32}px`;
    panel.style.overflowY = 'auto';
    const height = panel.getBoundingClientRect().height;
    const below = trigger.bottom + 8;
    const top = below + height <= window.innerHeight - 16 ? below : Math.max(16,trigger.top - height - 8);
    panel.style.top = `${top}px`;
  }

  function openNote(note) {
    clearTimeout(timers.get(note));
    notes.filter(other => other !== note).forEach(closeNote);
    note.open = true;
    note.querySelector('summary').setAttribute('aria-expanded','true');
    positionNote(note);
  }

  notes.forEach(note => {
    const summary = note.querySelector('summary');
    note.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') openNote(note); });
    note.addEventListener('pointerleave', () => {
      if (!pinned.has(note) && !note.contains(document.activeElement)) timers.set(note,setTimeout(() => closeNote(note),180));
    });
    note.addEventListener('focusin', () => { if (!suppressFocus) openNote(note); });
    note.addEventListener('focusout', event => { if (!pinned.has(note) && !note.contains(event.relatedTarget)) closeNote(note); });
    summary.addEventListener('click', event => {
      event.preventDefault();
      if (pinned.has(note)) closeNote(note);
      else { openNote(note); pinned.add(note); }
    });
    note.addEventListener('toggle', () => summary.setAttribute('aria-expanded',String(note.open)));
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.study-note')) notes.forEach(closeNote);
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const open = notes.find(note => note.open);
    if (!open) return;
    const shouldRestoreFocus = open.contains(document.activeElement);
    notes.forEach(closeNote);
    if (shouldRestoreFocus) {
      suppressFocus = true;
      open.querySelector('summary').focus({preventScroll:true});
      suppressFocus = false;
    }
  });
  window.addEventListener('resize', () => notes.filter(note => note.open).forEach(positionNote));
  window.addEventListener('scroll', () => notes.filter(note => note.open).forEach(positionNote),{passive:true});

  function revealLinkedStudy() {
    const target = document.getElementById(decodedHash());
    if (!target) return;
    const collapsed = target.closest('details:not([open])');
    if (collapsed) {
      collapsed.open = true;
      target.scrollIntoView({block:'start'});
    }
  }
  window.addEventListener('hashchange',revealLinkedStudy);
  revealLinkedStudy();

  const navLinks = [...document.querySelectorAll('.page-nav nav a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const entry = entries.filter(item => item.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!entry) return;
      navLinks.forEach(link => link.classList.toggle('is-current',link.hash === `#${entry.target.id}`));
    },{rootMargin:'-8% 0px -60% 0px',threshold:0});
    navLinks.forEach(link => observer.observe(document.querySelector(link.hash)));
  }
} else if (document.body.dataset.view === 'library') {
  document.title = `${GD_TOPIC.name}: evidence library | GD Dashboard`;
  document.querySelector('.topic-header .eyebrow').textContent = GD_TOPIC.name;
  document.querySelector('.topic-deck').textContent = GD_TOPIC.question;
  document.querySelector('.library-status').textContent = GD_REVIEW
    ? `${inspectedRecords.length} detailed source records and ${GD_CATALOG.length-inspectedRecords.length} additional reading leads. Human review pending.`
    : `${GD_CATALOG.length} reading leads from the earlier skills and judgement scan. Human review pending.`;
  document.querySelector('.library-method>div').innerHTML = methodHTML();
  if (GD_REVIEW) {
    document.getElementById('search-record').hidden = false;
    document.getElementById('search-record-content').innerHTML = `<p>Targeted searches and source trails, recorded on 22 October 2026. This is a scoping scan, without a comprehensive database search or independent double screening.</p><h2>Searches</h2><ul>${GD_REVIEW.searchLog.map(item => `<li><strong>${escapeHTML(item.query)}</strong><span>${escapeHTML(item.scope)}. ${escapeHTML(item.notes)}</span></li>`).join('')}</ul><h2>Items needing review</h2><ul>${GD_REVIEW.reviewNotes.map(note => `<li>${escapeHTML(note)}</li>`).join('')}</ul>${GD_REVIEW.exclusions.length ? `<h2>Excluded or set aside</h2><ul>${GD_REVIEW.exclusions.map(item => `<li>${item.url ? `<a href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.title)}</a>` : escapeHTML(item.title)}<span>${escapeHTML(item.reason)}</span></li>`).join('')}</ul>` : ''}`;
  }
  document.querySelector('.library-reset').innerHTML = `<a href="${escapeHTML(topicURL('library.html'))}">Clear all filters</a><a href="${escapeHTML(topicURL())}#evidence-map">Back to evidence map</a>`;
  const records = document.getElementById('library-records');
  const search = document.getElementById('library-search');
  const topic = document.getElementById('library-topic');
  const facet = document.getElementById('library-facet');
  const design = document.getElementById('library-design');
  const duration = document.getElementById('library-duration');
  if (GD_TOPIC_ID !== 'skills') {
    document.getElementById('library-facet-label').textContent = 'Research theme';
    document.getElementById('library-column-label').textContent = 'Measurements over time';
    topic.innerHTML = '<option value="all">All sources and reading leads</option><option value="assessed">Detailed source records</option><option value="selected">Selected sources</option><option value="imported">Additional reading leads</option>';
    duration.closest('label').hidden = true;
  }
  design.innerHTML = '<option value="all">All classifications</option>' + GD_DESIGNS.map(item => `<option value="${item.id}">${escapeHTML(item.label)}</option>`).join('');
  const selected = new Map(GD_SOURCES.map(source => [source.landscapeId,source]));
  const selectedOrder = new Map(GD_SOURCES.map((source,index) => [source.landscapeId,index]));
  const library = [...GD_CATALOG].sort((a,b) => {
    const aRank = selectedOrder.get(a.id) ?? GD_SOURCES.length;
    const bRank = selectedOrder.get(b.id) ?? GD_SOURCES.length;
    return aRank - bRank || b.year - a.year || a.title.localeCompare(b.title);
  });
  facet.innerHTML = '<option value="all">All themes</option>' + GD_FACETS.map(item => `<option value="${item.id}">${escapeHTML(item.label)}</option>`).join('');
  const filterParams = [
    [facet,'facet',['all',...GD_FACETS.map(item => item.id)]],
    [topic,'collection',GD_TOPIC_ID === 'skills' ? ['all','selected','skills','judgement'] : ['all','selected','assessed','imported']],
    [design,'design',['all',...GD_DESIGNS.map(item => item.id)]],
    [duration,'duration',GD_TOPIC_ID === 'skills' ? ['all','session','short','long'] : ['all']]
  ];
  const params = new URLSearchParams(location.search);
  search.value = params.get('q') ?? '';
  filterParams.forEach(([control,key,allowed]) => {
    control.value = allowed.includes(params.get(key)) ? params.get(key) : 'all';
  });
  function libraryHTML(source) {
    const assessed = source.assessment;
    const picked = selected.get(source.id);
    const title = picked?.title ?? source.title;
    const citation = picked ? `${picked.authors} / ${picked.publisher}, ${picked.year}` : source.citation;
    const designText = picked?.design ?? (source.design === 'RCT' ? 'Randomised experiment' : source.design);
    const scope = picked?.scope ?? `${source.setting} / ${source.country}`;
    const measure = picked?.measure ?? source.measures.join(', ');
    const studyType = ['theory','benchmark'].includes(source.design) ? 'Concept or evaluation' : 'Reading lead';
    const time = picked?.followUp ?? (source.cadence ? `Release pattern recorded in the scan: ${source.cadence}` : ['n/a','unclear'].includes(source.studySpan) ? 'Not specified or not applicable in the scan' : `Study duration: ${source.studySpan}. Delayed follow-up needs checking in the paper.`);
    return `<details class="library-record" id="${escapeHTML(source.id)}">
      <summary><span><span class="record-title">${escapeHTML(title)}</span><span class="library-meta">${escapeHTML(citation)} / ${escapeHTML(designText)}</span></span><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></summary>
      <div class="record-body"><p class="record-status">${assessed ? `${escapeHTML(kindLabels[assessed.kind])} / AI-assisted extraction; human review pending` : picked ? `${picked.featured ? 'Selected' : 'Supporting'} source / AI-assisted summary; human review pending` : `${studyType} / imported metadata; not source-reviewed in this expansion`}</p>
      ${assessed || picked ? `<p>${escapeHTML(assessed?.finding ?? picked.finding)}</p>` : ''}
      <dl><dt>Measures</dt><dd>${escapeHTML(measure)}</dd><dt>Setting</dt><dd>${escapeHTML(assessed ? `${assessed.population} / ${assessed.geography}` : scope)}</dd><dt>Time covered</dt><dd>${escapeHTML(time)}</dd>${picked ? `<dt>Why selected</dt><dd>${escapeHTML(picked.why)}</dd>` : ''}${assessed || picked ? `<dt>Where to check</dt><dd>${escapeHTML(assessed?.locator ?? picked.locator)}</dd>` : `<dt>Publication</dt><dd>${escapeHTML(source.venue)} / ${escapeHTML(source.publication)}</dd>`}${assessed ? `<dt>Source inspected</dt><dd>${escapeHTML({'primary-fulltext':'Primary paper or report: relevant sections','primary-summary':'Official summary or dataset description','primary-abstract':'Primary abstract only'}[assessed.status])} (${escapeHTML(assessed.checkedOn)})<br>${escapeHTML(assessed.sourceNote)}</dd>` : ''}</dl>
      ${assessed || picked ? `<p class="library-limit"><strong>Limitations:</strong> ${escapeHTML(assessed?.limitations ?? picked.limit)}</p>` : ''}
      <a class="record-source" href="${escapeHTML(picked?.url ?? source.url)}" target="_blank" rel="noopener noreferrer">Original source ${icon('external')}</a>
      </div></details>`;
  }
  function renderLibrary() {
    const terms = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const matches = library.filter(source => {
      const picked = selected.get(source.id);
      const searchText = [source.title,source.citation,source.venue,source.design,source.setting,source.country,...source.measures,...source.constructs,source.assessment?.finding ?? picked?.finding ?? '',picked?.authors ?? '',picked?.publisher ?? ''].join(' ').toLowerCase();
      return terms.every(term => searchText.includes(term))
        && (topic.value === 'all' || (topic.value === 'selected' ? selected.has(source.id) : topic.value === 'assessed' ? Boolean(source.assessment) : topic.value === 'imported' ? !source.assessment : source.topics.includes(topic.value)))
        && matchesFacet(source,facet.value)
        && (design.value === 'all' || mapColumn(source) === design.value)
        && (duration.value === 'all' || durationGroup(source.studySpan) === duration.value);
    });
    records.innerHTML = matches.map(libraryHTML).join('');
    document.getElementById('library-count').textContent = `${matches.length} ${matches.length === 1 ? 'reference' : 'references'}`;
    document.getElementById('library-empty').hidden = matches.length !== 0;
  }
  function updateLibrary() {
    renderLibrary();
    const next = new URLSearchParams({topic:GD_TOPIC_ID});
    filterParams.forEach(([control,key]) => { if (control.value !== 'all') next.set(key,control.value); });
    if (search.value.trim()) next.set('q',search.value.trim());
    try {
      const url = new URL(location.href);
      url.search = next.toString();
      url.hash = '';
      history.replaceState(null,'',url);
    } catch {}
  }
  search.addEventListener('input', updateLibrary);
  [topic,facet,design,duration].forEach(control => control.addEventListener('change',updateLibrary));
  renderLibrary();
  if (location.hash) {
    const target = document.getElementById(decodedHash());
    if (target instanceof HTMLDetailsElement) {
      target.open = true;
      target.scrollIntoView({block:'start'});
    }
  }
} else if (document.body.dataset.view === 'overview') {
  document.getElementById('topic-directory').innerHTML = Object.entries(GD_TOPIC_CONFIG).map(([id,topic],index) => `<a class="topic-directory-row" href="index.html?topic=${id}"><span class="directory-number">${String(index+1).padStart(2,'0')}</span><span><strong>${escapeHTML(topic.name)}</strong><span>${escapeHTML(topic.question)}</span></span><span aria-hidden="true">&rarr;</span></a>`).join('');
}
