/* Bibliography and coded-record maps. No old findings or verification flags. */
const librarySearch23 = value => String(value || '').normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase();
const libraryKinds23 = { study:'Study', indicator:'Indicator', framework:'Framework', forecast:'Forecast', report:'Report', dataset:'Dataset', benchmark:'Benchmark' };
const libraryScopes23 = { observed:'Studies & evaluations', human:'Human studies', model:'Model evaluations', synthesis:'Reviews & frameworks', all:'All records' };
const libraryReview23 = (entry, coding) => (coding.kind || entry.kind) === 'framework' || ['theory','review','meta-analysis','framework'].includes(coding.design);
const libraryPrimaryDesigns23 = ['RCT','lab experiment','field experiment','natural experiment','quasi-experiment','cross-sectional survey','panel survey','log analysis','qualitative','case study','benchmark','administrative dataset','audit'];
const libraryCodings23 = entry => [...entry.landscape,...(entry.mapCodings || [])];
const libraryCodingScope23 = (entry, coding, scope) => {
  if (scope === 'all') return true;
  const review = libraryReview23(entry, coding);
  if (scope === 'synthesis') return review;
  if (review || !libraryPrimaryDesigns23.includes(coding.design)) return false;
  if (scope === 'human') return ['human','both'].includes(coding.side);
  if (scope === 'model') return ['model','both'].includes(coding.side);
  return true;
};
const libraryArea23 = state => LIBRARY_MAP23.areas.find(area => area.id === state.area) || LIBRARY_MAP23.areas[0];
const libraryColumns23 = state => libraryArea23(state).columns || LIBRARY_MAP23.columns;

function libraryState23(route) {
  const [path, query = ''] = String(route).split('?');
  const params = new URLSearchParams(query), topic = params.get('topic') || path.split('/')[1] || '';
  const view = params.get('view') === 'list' || ORDER.includes(path.split('/')[1]) ? 'list' : 'map';
  const defaultArea = topicMaps24[topic]?.area || LIBRARY_MAP23.areas[0].id;
  const state = {
    view, area:LIBRARY_MAP23.areas.some(a => a.id === params.get('area')) ? params.get('area') : defaultArea,
    topic:ORDER.includes(topic) ? topic : '', q:(params.get('q') || '').slice(0,200),
    from:ORDER.includes(params.get('from')) ? params.get('from') : '',
    scope:Object.hasOwn(libraryScopes23, params.get('scope')) ? params.get('scope') : view === 'map' ? 'observed' : 'all',
    year:/^\d{4}$/.test(params.get('year') || '') ? params.get('year') : '', facet:'', measure:'', page:1
  };
  if (libraryArea23(state).facets.some(f => f.id === params.get('facet'))) state.facet = params.get('facet');
  if (libraryColumns23(state).some(c => c.id === params.get('measure'))) state.measure = params.get('measure');
  return state;
}

function libraryRoute23(state) {
  const params = new URLSearchParams();
  for (const key of ['view','area','topic','q','scope','year','facet','measure','from']) if (state[key]) params.set(key,state[key]);
  return 'library?' + params.toString();
}

function libraryBaseRecords23(state) {
  const terms = librarySearch23(state.q).trim().split(/\s+/).filter(Boolean);
  return LIBRARY_VIEW23.records.filter(entry => {
    if (state.topic && !entry.topics.includes(state.topic)) return false;
    if (state.year && String(entry.year) !== state.year) return false;
    if (state.scope !== 'all' && !libraryCodings23(entry).some(c => libraryCodingScope23(entry,c,state.scope))) return false;
    const text = librarySearch23([entry.title,entry.citation,entry.year,...entry.topics.map(nameOf),...entry.landscape.flatMap(c=>[...c.constructs,...c.measures,c.domain]),...(entry.mapCodings || []).flatMap(c=>[c.domain,...c.observations.flatMap(o=>[o.facet,o.measure,o.basis])])].join(' '));
    return terms.every(term => text.includes(term));
  });
}

function libraryMatches23(entry, facet, column, scope) {
  if(facet.mapArea) return (entry.mapCodings || []).some(coding => coding.area === facet.mapArea && libraryCodingScope23(entry,coding,scope) && coding.observations.some(o => o.facet === facet.id && (!column || o.measure === column.id)));
  return entry.landscape.some(coding => libraryCodingScope23(entry,coding,scope) &&
    facet.constructs.some(tag => coding.constructs.includes(tag)) &&
    (!column || column.measures.some(tag => coding.measures.includes(tag))));
}

function librarySelectedRecords23(records,state) {
  const facet = libraryArea23(state).facets.find(f => f.id === state.facet);
  const column = libraryColumns23(state).find(c => c.id === state.measure);
  return facet ? records.filter(entry => libraryMatches23(entry,facet,column,state.scope)) : records;
}

const libraryBin23 = n => n === 0 ? 0 : n < 5 ? 1 : n < 15 ? 2 : n < 30 ? 3 : 4;

function libraryMap23(records,state,{links=false,heading=true}={}) {
  const area = libraryArea23(state), columns = libraryColumns23(state);
  const bin = n => area.bins ? area.bins.findIndex(max => max === null || n <= max) : libraryBin23(n);
  const cell = (facet,column) => {
    const count = records.filter(entry => libraryMatches23(entry,facet,column,state.scope)).length;
    const selected = state.facet === facet.id && state.measure === (column?.id || '');
    const label=`${count} ${count === 1 ? 'reference' : 'references'}: ${facet.label}, ${column?.label || 'all measures'}`;
    const attributes=`data-library-facet="${facet.id}" data-library-measure="${column?.id || ''}" data-count="${count}" data-bin="${bin(count)}" aria-label="${esc(label)}" title="${count} matched references${count === 0 ? '; none in this selection' : ''}"`;
    if(links) return `<a class="library-cell23" href="#${esc(libraryRoute23({...state,facet:facet.id,measure:column?.id || ''}))}" ${attributes}>${count}</a>`;
    return `<button class="library-cell23" type="button" ${attributes} aria-pressed="${selected}">${count}</button>`;
  };
  return `${heading ? `<div class="library-map-heading23"><h2>${esc(area.label)}</h2><p>${esc(area.description)}</p></div>` : ''}
    <div class="library-map-scroll23" tabindex="0" role="region" aria-label="${esc(area.label)} reference-count table">
      <table class="library-map23"><caption class="sr5">${esc(area.label)}: reference counts by measurement type. The same reference can appear in more than one cell.</caption>
      <thead><tr><th scope="col">Research facet</th>${columns.map(c => `<th scope="col"><abbr title="${esc(c.description)}">${esc(c.label)}</abbr></th>`).join('')}<th scope="col">All measures</th></tr></thead>
      <tbody>${area.facets.map(f => `<tr><th scope="row"><abbr title="${esc(f.description)}">${esc(f.label)}</abbr></th>${columns.map(c => `<td>${cell(f,c)}</td>`).join('')}<td class="library-total23">${cell(f,null)}</td></tr>`).join('')}</tbody></table>
    </div>
    <div class="library-map-foot23"><div class="library-legend23" aria-label="Reference count legend"><span>Reference count</span>${(area.binLabels || ['0','1-4','5-14','15-29','30+']).map((label,i) => `<span><i data-bin="${i}" aria-hidden="true"></i>${label}</span>`).join('')}</div><p>${links ? '' : 'Counts follow the current filters. '}References can appear in several cells; totals cannot be added.</p></div>`;
}

function libraryDetailedCoding23(entry,state) {
  return (entry.mapCodings || []).filter(c => (state.view !== 'map' || c.area === state.area) && libraryCodingScope23(entry,c,state.scope)).map(c => {
    const area=LIBRARY_MAP23.areas.find(a => a.id === c.area);
    const pairs=c.observations.filter(o => !state.facet || (o.facet === state.facet && (!state.measure || o.measure === state.measure)));
    return `<div class="library-coding25"><p><b>${esc(area.label)}</b> &middot; ${esc(c.design)}<br>${esc(c.domain)} &middot; ${esc(c.timespan)}</p><ul>${pairs.map(o => `<li><b>${esc(area.facets.find(f=>f.id===o.facet).label)} / ${esc(area.columns.find(m=>m.id===o.measure).label)}</b><p>${esc(o.basis)}</p><a href="${esc(o.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(o.locator)} &#8599;</a></li>`).join('')}</ul><p><b>Scope:</b> ${esc(c.limits)}</p></div>`;
  }).join('');
}

function libraryRecord23(entry,state) {
  const coding = state.view==='map' && libraryArea23(state).coding==='explicit-pairs' ? [] : entry.landscape.filter(c=>libraryCodingScope23(entry,c,state.scope));
  const detailed=libraryDetailedCoding23(entry,state);
  return `<li class="library-record23" data-library-id="${esc(entry.id)}"><div class="library-record-top23"><span>${entry.year || 'Date unclear'}</span><span>${esc(libraryKinds23[entry.kind] || 'Reference')}</span></div>
    <h3><a href="${esc(entry.url)}" target="_blank" rel="noopener noreferrer">${esc(entry.title)} <span aria-hidden="true">&#8599;</span></a></h3>
    <p class="library-citation23">${esc(entry.citation)}</p><p class="library-topics23">${entry.topics.map(nameOf).map(esc).join(' · ')}</p>
    <details class="library-record-details23"><summary>${detailed ? 'What was measured and why it is included' : 'Scan details'}</summary>
      ${detailed}${coding.length ? (detailed ? '<p><b>Earlier landscape coding</b></p>' : '') + coding.map(c => `<dl><div><dt>Topics coded</dt><dd>${esc(c.constructs.join('; ') || 'Not recorded')}</dd></div><div><dt>Measures coded</dt><dd>${esc(c.measures.join('; ') || 'Not recorded')}</dd></div><div><dt>Design / level</dt><dd>${esc([c.design,c.level].filter(Boolean).join(' / ') || 'Not recorded')}</dd></div><div><dt>Setting / duration</dt><dd>${esc([c.domain,c.timespan].filter(Boolean).join(' / ') || 'Not recorded')}</dd></div></dl>`).join('') : detailed ? '' : '<p>Facet and measurement tags are not available for this record.</p>'}
      <p class="library-provenance23">${entry.provenance.map(p => `${p.collection.startsWith('research/maps/') ? 'Detailed map' : p.collection === 'research/landscape/master.json' ? 'Cognition landscape' : 'Pathway scan'}: ${esc(p.sourceId)}`).join('; ')}</p><p>AI-assisted coding, awaiting human review. Follow the original source for its methods and findings.</p>
    </details></li>`;
}

function refreshLibrary23(v,state,{scroll=false}={}) {
  const area = libraryArea23(state), base = libraryBaseRecords23(state);
  const records = state.view === 'map' ? base.filter(entry=>area.facets.some(f=>libraryMatches23(entry,f,null,state.scope))) : base;
  const matched = librarySelectedRecords23(records,state), size=25;
  const pages = Math.max(1,Math.ceil(matched.length/size));
  state.page = Math.min(pages,Math.max(1,state.page));
  $('#library-map-panel23',v).hidden = state.view !== 'map';
  $('#library-map-panel23',v).innerHTML = state.view === 'map' ? libraryMap23(records,state) : '';
  $('#library-area-field23',v).hidden = state.view !== 'map';
  $$('.library-tabs23 button',v).forEach(button => {
    const selected = button.dataset.libraryView === state.view;
    button.setAttribute('aria-pressed',String(selected));
  });
  const facet = area.facets.find(f => f.id === state.facet), column = libraryColumns23(state).find(c => c.id === state.measure);
  $('#library-map-scope23',v).textContent=state.view==='map' ? (area.displayScope || 'The original landscape tags have not been independently checked.') : '';
  $('#library-map-method23',v).textContent=state.view==='map' ? (area.scope || '') : '';
  $('#library-selection23',v).innerHTML = facet ? `<span>${esc(facet.label)}${column ? ' / '+esc(column.label) : ''}</span><button type="button" data-library-clear="selection">Clear selection</button>` : '';
  $('#library-count23',v).textContent = `${matched.length} references`;
  $('#library-list23',v).innerHTML = matched.slice((state.page-1)*size,state.page*size).map(entry => libraryRecord23(entry,state)).join('');
  $('#library-empty23',v).hidden = matched.length !== 0;
  $('#library-pagination23',v).hidden = pages <= 1;
  $('#library-page23',v).textContent = `Page ${state.page} of ${pages}`;
  $('#library-prev23',v).disabled = state.page === 1;
  $('#library-next23',v).disabled = state.page === pages;
  const route = libraryRoute23(state);
  try { history.replaceState(null,'','#'+route); } catch (_) {}
  current=route;
  if (scroll) { const heading=$('#library-results-title23',v); requestAnimationFrame(() => { heading.scrollIntoView({block:'start'}); heading.focus(); }); }
}

function viewLibrary23(v,route) {
  const state=libraryState23(route), years=[...new Set(LIBRARY_VIEW23.records.map(r => r.year).filter(Boolean))].sort((a,b)=>b-a);
  const returnTopic=state.from || state.topic;
  const options=(rows,value) => rows.map(([id,label]) => `<option value="${esc(String(id))}"${String(id)===value?' selected':''}>${esc(label)}</option>`).join('');
  v.innerHTML=`<div class="view5 wrap library23"><nav class="library-back23" aria-label="Research navigation"><a href="#${returnTopic || 'gaps'}">&#8592; ${returnTopic ? esc(nameOf(returnTopic)) : 'Research gaps'}</a></nav>
    <header class="library-header23"><h1>Evidence library</h1><p>Research on AI, people and institutions.</p><p class="library-status23"><strong>AI-assisted and not yet verified.</strong> Check original sources before citing.</p></header>
    <div class="library-topline23"><div class="library-tabs23" role="group" aria-label="Library views"><button id="library-tab-map23" type="button" data-library-view="map" aria-controls="library-map-panel23">Evidence maps</button><button id="library-tab-list23" type="button" data-library-view="list" aria-controls="library-results23">All references</button></div><a class="library-download23" href="library-references.csv" download>Download references &#8595;</a></div>
    <form class="library-filters23" role="search" aria-label="Filter evidence library"><label class="library-search23">Search<input id="library-search23" type="search" value="${esc(state.q)}" placeholder="Title, author or topic" autocomplete="off" maxlength="200"></label>
      <label>Pathway step<select id="library-topic23">${options([['','All steps'],...ORDER.map(id=>[id,nameOf(id)])],state.topic)}</select></label>
      <label>Record type<select id="library-scope23">${options(Object.entries(libraryScopes23),state.scope)}</select></label>
      <label>Year<select id="library-year23">${options([['','All years'],...years.map(y=>[y,String(y)])],state.year)}</select></label>
      <label id="library-area-field23">Map<select id="library-area23">${options(LIBRARY_MAP23.areas.map(a=>[a.id,a.label]),state.area)}</select></label>
      <button type="button" class="library-reset23" data-library-clear="all">Reset filters</button></form>
    <p class="library-scope-note23">${LIBRARY_VIEW23.records.length} linked references; ${LIBRARY_VIEW23.stats.mappedReferences} have map coding. Shading counts references within this collection. Empty cells may reflect missing sources. The count scale is shown below each map.</p><p id="library-map-scope23" class="library-scope-note23"></p>
    <div id="library-map-panel23" aria-labelledby="library-tab-map23"></div>
    <details class="library-method23"><summary>Scope and limitations</summary><p id="library-map-method23"></p><p>The Skills and Agency maps use construct and measurement tags from Better Futures Project, pp. 26-27. A cell means both tags occur on a source record; the pairing needs checking.</p><p>The Government, Delegation and Culture maps add targeted primary-source searches. Each counted pair has a measurement description, source location and limitation in the reference details. These are working classifications awaiting human review. Government sources include earlier algorithmic systems as well as generative AI.</p><p>Matching URLs are combined across topics; other duplicate papers, versions and overlapping samples may remain. References sharing data are not independent evidence. Uncoded records appear in All references.</p><p>The default filter includes empirical studies, audits and administrative datasets. Reviews, frameworks and unknown designs are excluded. Human and model filters overlap for mixed studies; institutional documents and administrative datasets are included in Studies &amp; evaluations.</p><p>Maps differ in search scope and count scale. Their shading cannot rank topics by research quality, risk or field-wide coverage. Missing cells identify questions for further search. Performance without AI does not establish long-term retention; model tests alone do not establish effects on people.</p><p>Compiled October 2026. <a href="#method">Dashboard method</a></p></details>
    <section id="library-results23" aria-labelledby="library-results-title23"><div class="library-results-heading23"><h2 id="library-results-title23" tabindex="-1">References</h2><p id="library-count23" role="status" aria-live="polite" aria-atomic="true"></p></div><div id="library-selection23"></div><ul id="library-list23"></ul><p id="library-empty23" hidden>No references match these filters.</p><div id="library-pagination23"><button id="library-prev23" type="button" aria-label="Previous page" title="Previous page">&#8592;</button><span id="library-page23"></span><button id="library-next23" type="button" aria-label="Next page" title="Next page">&#8594;</button></div></section></div>`;
  $('.library-filters23',v).addEventListener('submit',e=>e.preventDefault());
  const filter=(id,key,event='change') => $('#'+id,v).addEventListener(event,e=>{state[key]=e.target.value;state.page=1;if(key==='area'){state.facet='';state.measure='';}refreshLibrary23(v,state);});
  filter('library-search23','q','input'); filter('library-topic23','topic'); filter('library-scope23','scope'); filter('library-year23','year'); filter('library-area23','area');
  $('.library23',v).addEventListener('click',e=>{
    const cell=e.target.closest('[data-library-facet]');
    if(cell){state.facet=cell.dataset.libraryFacet;state.measure=cell.dataset.libraryMeasure;state.page=1;refreshLibrary23(v,state,{scroll:true});return;}
    const tab=e.target.closest('[data-library-view]');
    if(tab){state.view=tab.dataset.libraryView;state.facet='';state.measure='';state.page=1;state.scope=state.view==='map'?'observed':'all';$('#library-scope23',v).value=state.scope;refreshLibrary23(v,state);tab.focus();return;}
    const clear=e.target.closest('[data-library-clear]');
    if(clear){if(clear.dataset.libraryClear==='all'){viewLibrary23(v,'library?view='+state.view+(state.from?'&from='+state.from+'&area='+state.area:''));$('#library-search23',v).focus();}else{state.facet='';state.measure='';state.page=1;refreshLibrary23(v,state);}return;}
    if(e.target.closest('#library-prev23')&&!$('#library-prev23',v).disabled){state.page--;refreshLibrary23(v,state,{scroll:true});}
    if(e.target.closest('#library-next23')&&!$('#library-next23',v).disabled){state.page++;refreshLibrary23(v,state,{scroll:true});}
  });
  refreshLibrary23(v,state);
}

function libraryCorner23(v,id) {
  if($('.library-entry23',v))return;
  const link=document.createElement('p');link.className='library-entry23';
  const route=topicMaps24[id]?`library?view=map&area=${topicMaps24[id].area}&scope=observed&from=${id}`:`library/${ORDER.includes(id)?id:''}`;
  link.innerHTML=`<a href="#${esc(route)}">Evidence library &#8594;</a>`;
  ($('.pilot7',v)||$('.priority6',v)||$('.gaps20',v)||v).append(link);
}
