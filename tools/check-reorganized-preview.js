const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
let parseHTML;
try { ({ parseHTML } = require('linkedom')); }
catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') throw error;
  ({ parseHTML } = require('../dist/test-deps/node_modules/linkedom'));
}
const root = path.resolve(__dirname, '..');
const {buildLibraryView,loadInputs}=require('./build-library-view.js');
const {buildDetailedMaps,loadDetailedMaps}=require('./build-detailed-maps.js');
const freshMaps25=buildDetailedMaps(buildLibraryView(loadInputs()),JSON.parse(fs.readFileSync(path.join(root,'research/library-map-config.json'),'utf8')),loadDetailedMaps(root));
const target = process.argv[2] || 'dist/reorganized-dashboard/index.html';
const html = fs.readFileSync(path.join(root, target), 'utf8');
const hasCoverageColumns = html.includes('function gapColumns20(');
if (target === 'docs/index.html') assert(!html.includes('noindex,nofollow'), 'Public build must be indexable');
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(match => match[1]);
assert.equal(scripts.length, 3);
assert(html.indexOf('gd-dashboard-theme') < html.indexOf('<style>'), 'Theme preference loads before first paint');
scripts.forEach((script, i) => new vm.Script(script, { filename: 'preview:' + i }));

// DOM/source tests only. Linkedom does not lay out, render or open the local site.
function harness(width, { savedTheme = null, storageBlocked = false, initialHash = '#home' } = {}) {
  const { document, HTMLElement, HTMLSelectElement, Element, Event } = parseHTML(html);
  // Linkedom exposes a read-only select.value; emulate the browser setter for filter tests.
  if (!Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,'value')?.set) Object.defineProperty(HTMLSelectElement.prototype,'value',{
    configurable:true,
    get() { return (this.querySelector('option[selected]') || this.querySelector('option'))?.getAttribute('value') || ''; },
    set(value) { for(const option of this.querySelectorAll('option')) option.toggleAttribute('selected',option.getAttribute('value')===String(value)); }
  });
  const callbacks = [];
  const listeners = {};
  document.fonts = { ready: Promise.resolve() };
  Element.prototype.scrollIntoView = function() { this.scrolled = true; };
  Element.prototype.scrollTo = function() {};
  Element.prototype.getBoundingClientRect = () => ({ left: 0, top: 0, width, height: 300 });
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', { configurable: true, get: () => width });
  const location = { hash: initialHash };
  const storage = new Map(savedTheme === null ? [] : [['gd-dashboard-theme', savedTheme]]);
  const localStorage = {
    getItem(key) { if (storageBlocked) throw new Error('Storage disabled'); return storage.get(key) ?? null; },
    setItem(key, value) { if (storageBlocked) throw new Error('Storage disabled'); storage.set(key, value); }
  };
  const window = {
    scrollTo() {},
    addEventListener(name, fn) { (listeners[name] ||= []).push(fn); },
    removeEventListener() {},
    matchMedia: () => ({ matches: false, addEventListener() {} })
  };
  const context = vm.createContext({
    document, window, location, localStorage, structuredClone, console, URL, URLSearchParams,
    matchMedia: window.matchMedia,
    history: { pushState(_a, _b, hash) { location.hash = hash; }, replaceState(_a, _b, hash) { location.hash = hash; } },
    requestAnimationFrame(fn) { callbacks.push(fn); },
    setTimeout(fn) { callbacks.push(fn); return callbacks.length; },
    clearTimeout() {}, setInterval() { return 1; }, clearInterval() {},
    getComputedStyle: () => ({ gridTemplateColumns: '1fr 1fr' })
  });
  const run = code => vm.runInContext(code, context);
  const flush = () => { let count = 0; while (callbacks.length) { assert(++count < 100); callbacks.shift()(); } };
  scripts.forEach((script, i) => vm.runInContext(script, context, { filename: 'runtime:' + i }));
  flush();
  const render = route => { run(`render(${JSON.stringify(route)})`); flush(); return document.querySelector('#view'); };
  return { document, Event, run, render, flush, listeners, location, storage };
}

const empiricalDesigns25=new Set(['RCT','lab experiment','field experiment','natural experiment','quasi-experiment','cross-sectional survey','panel survey','log analysis','qualitative','case study','benchmark','administrative dataset','audit']);
function expectedMapRecords25(records,facet,column) {
  return records.filter(entry => facet.mapArea
    ? (entry.mapCodings || []).some(c => c.area===facet.mapArea && c.kind!=='framework' && empiricalDesigns25.has(c.design) && c.observations.some(o=>o.facet===facet.id && (!column || o.measure===column.id)))
    : entry.kind!=='framework' && entry.landscape.some(c=>empiricalDesigns25.has(c.design) && facet.constructs.some(tag=>c.constructs.includes(tag)) && (!column || column.measures.some(tag=>c.measures.includes(tag)))));
}

function checkLibrary(h) {
  if (!h.run('typeof LIBRARY_VIEW23 !== "undefined"')) return;
  const data=h.run('LIBRARY_VIEW23'), config=h.run('LIBRARY_MAP23');
  assert.equal(JSON.stringify(data),JSON.stringify(freshMaps25.library),'Embedded library must match current source files; rebuild the site');
  assert.equal(JSON.stringify(config),JSON.stringify(freshMaps25.mapConfig),'Embedded map definitions must match current source files');
  assert.equal(data.records.length,700+data.stats.addedReferences);
  assert.equal(config.areas.length,5);
  assert.equal(data.stats.landscapeReferences,353);
  assert.equal(data.records.filter(e=>e.landscape.length).length,data.stats.landscapeReferences);
  assert.doesNotMatch(JSON.stringify(data),/futuresearch|"finding"|"verified"/i);
  assert.equal(h.document.querySelectorAll('.library-footer23').length,1);
  for(const id of h.run('ORDER')) {
    const topic=h.render(id);
    assert.equal(topic.querySelectorAll('.library-entry23 a').length,1,id);
    const href=topic.querySelector('.library-entry23 a').getAttribute('href');
    if(h.run(`Boolean(topicMaps24.${id})`)) assert.match(href,new RegExp('from='+id));
    else assert.equal(href,'#library/'+id);
  }
  assert(h.render('gaps').querySelector('.library-entry23 a'));
  const click=selector=>{h.document.querySelector(selector).dispatchEvent(new h.Event('click',{bubbles:true}));h.flush();};
  const filter=(selector,value,event='change')=>{const el=h.document.querySelector(selector);el.value=value;el.dispatchEvent(new h.Event(event,{bubbles:true}));h.flush();};
  let v=h.render('library');
  assert.match(h.document.title,/Evidence library/);
  assert.match(v.textContent,/AI-assisted and not yet verified/);
  assert.equal(v.querySelectorAll('.library-map23 tbody tr').length,8);
  assert.equal(v.querySelectorAll('.library-map23 tbody button').length,64);
  assert.equal(v.querySelectorAll('.library-record23').length,25);
  assert.equal(v.querySelector('.library-tabs23 [aria-pressed="true"]').dataset.libraryView,'map');
  assert.equal(v.querySelector('#library-map-panel23').hidden,false);
  const primary=new Set(['RCT','lab experiment','field experiment','natural experiment','quasi-experiment','cross-sectional survey','panel survey','log analysis','qualitative','case study','benchmark']);
  for(const area of config.areas) {
    filter('#library-area23',area.id);
    for(const cell of v.querySelectorAll('.library-map23 tbody button')) {
      const facet=area.facets.find(f=>f.id===cell.dataset.libraryFacet);
      const column=(area.columns || config.columns).find(c=>c.id===cell.dataset.libraryMeasure);
      const expected=expectedMapRecords25(data.records,facet,column);
      assert.equal(Number(cell.dataset.count),expected.length,`${area.id}/${facet.id}/${column?.id}`);
    }
  }
  for(const area of config.areas.filter(a=>a.coding==='explicit-pairs')) {
    for(const facet of [area.facets[0],area.facets.at(-1)]) {
      for(const column of [null,...area.columns]) {
        const expected=expectedMapRecords25(data.records,facet,column);
        const route=`library?view=map&area=${area.id}&scope=observed&facet=${facet.id}&measure=${column?.id || ''}`;
        const page=h.render(route);
        assert.equal(page.querySelector('#library-count23').textContent,`${expected.length} references`);
        const actual=[...page.querySelectorAll('.library-record23')].map(el=>el.dataset.libraryId).sort();
        assert.equal(actual.join(','),expected.slice(0,25).map(r=>r.id).sort().join(','),'Detailed map cell must open the same exact sources');
        for(const row of page.querySelectorAll('.library-record23')) {
          assert.match(row.textContent,/What was measured and why it is included/);
          assert(row.querySelector('.library-coding25 li a'),'Every coded reference exposes a source location');
        }
      }
    }
  }
  v=h.render('library');
  filter('#library-area23','cognition');
  const first=v.querySelector('[data-library-facet="learning"][data-library-measure="unaided"]');
  const count=Number(first.dataset.count);
  click('[data-library-facet="learning"][data-library-measure="unaided"]');
  assert.equal(v.querySelector('#library-count23').textContent,`${count} references`);
  assert.equal(v.querySelectorAll('.library-record23').length,Math.min(25,count));
  assert(v.querySelector('#library-results-title23').scrolled);
  assert.match(h.location.hash,/facet=learning&measure=unaided/);
  assert.equal(h.run('current'),'library'+h.location.hash.slice('#library'.length));
  const selectedIDs=[...v.querySelectorAll('.library-record23')].map(el=>el.dataset.libraryId);
  for(const id of selectedIDs) assert(data.records.find(r=>r.id===id).landscape.some(c=>primary.has(c.design)&&c.constructs.includes('learning')&&c.measures.includes('unaided performance')));
  const savedRoute=h.location.hash.slice(1);
  v=h.render('home');v=h.render(savedRoute);
  assert.equal(v.querySelector('[data-library-facet="learning"][data-library-measure="unaided"]').getAttribute('aria-pressed'),'true');
  click('[data-library-clear="selection"]');
  assert.equal(v.querySelector('#library-selection23').textContent,'');
  // Unknown designs must not silently become empirical evidence.
  assert.equal(h.run('libraryCodingScope23({kind:"study"},{design:null,side:"human",measures:[]},"observed")'),false);
  assert.equal(h.run('libraryCodingScope23({kind:"study"},{design:"lab experiment",side:"both",measures:[]},"human")'),true);
  assert.equal(h.run('libraryCodingScope23({kind:"study"},{design:"lab experiment",side:"both",measures:[]},"model")'),true);
  assert.equal(h.run('libraryMatches23({kind:"study",landscape:[{design:"RCT",constructs:["learning"],measures:[]},{design:"RCT",constructs:[],measures:["unaided performance"]}]},{constructs:["learning"]},{measures:["unaided performance"]},"all")'),false);
  assert.equal(h.run('libraryMatches23({kind:"study",landscape:[],mapCodings:[{area:"government",design:"audit",observations:[{facet:"appeals",measure:"documents"},{facet:"oversight",measure:"records"}]}]},{id:"appeals",mapArea:"government"},{id:"records"},"observed")'),false,'Different observed pairs cannot create a false positive');
  const detailedArea=config.areas.find(a=>a.coding==='explicit-pairs');
  const mixed={id:'test',title:'Mixed coding',citation:'Test reference',year:2025,url:'https://example.org',kind:'study',topics:['skills'],provenance:[],landscape:[{constructs:['learning'],measures:['self-report'],design:'lab experiment',side:'human',domain:'Legacy lab setting'}],mapCodings:[{area:detailedArea.id,kind:'report',design:'audit',side:'institutional',domain:'New institutional audit',timespan:'One-off',limits:'Test scope',observations:[{facet:detailedArea.facets[0].id,measure:detailedArea.columns[0].id,basis:'Audit coding basis',locator:'Report',sourceUrl:'https://example.org/report'}]}]};
  const humanDetails=h.run(`libraryRecord23(${JSON.stringify(mixed)},{view:'list',scope:'human'})`);
  assert.match(humanDetails,/Legacy lab setting/);
  assert.doesNotMatch(humanDetails,/New institutional audit/,'Detail must match active population filter');
  const allDetails=h.run(`libraryRecord23(${JSON.stringify(mixed)},{view:'list',scope:'all'})`);
  assert.match(allDetails,/Legacy lab setting/);assert.match(allDetails,/New institutional audit/);
  filter('#library-scope23','synthesis');
  assert.match(v.querySelector('#library-count23').textContent,/\d+ references/);
  click('[data-library-view="list"]');
  assert.equal(v.querySelector('#library-map-panel23').hidden,true);
  assert.equal(v.querySelector('#library-area-field23').hidden,true);
  assert.equal(v.querySelector('#library-count23').textContent,`${data.records.length} references`);
  assert.equal(v.querySelector('#library-scope23').value,'all');
  click('#library-next23');
  assert.equal(v.querySelector('#library-page23').textContent,`Page 2 of ${Math.ceil(data.records.length/25)}`);
  click('#library-prev23');
  assert.equal(v.querySelector('#library-page23').textContent,`Page 1 of ${Math.ceil(data.records.length/25)}`);
  for(let i=0;i<3;i++)click('[data-library-clear="all"]');
  click('#library-next23');
  assert.equal(v.querySelector('#library-page23').textContent,`Page 2 of ${Math.ceil(data.records.length/25)}`,'Reset must not accumulate click handlers');
  filter('#library-search23','self-efficacy','input');
  assert.notEqual(v.querySelector('#library-count23').textContent,'0 references');
  filter('#library-search23','<img src=x onerror=alert(1)>','input');
  assert.equal(v.querySelector('#library-count23').textContent,'0 references');
  assert.equal(v.querySelector('img[src="x"]'),null);
  assert.equal(v.querySelector('#library-empty23').hidden,false);
  click('[data-library-clear="all"]');
  filter('#library-topic23','adoption');
  assert.equal(v.querySelector('#library-count23').textContent,`${data.records.filter(r=>r.topics.includes('adoption')).length} references`);
  const year=String(data.records.find(r=>r.topics.includes('adoption')).year);
  filter('#library-year23',year);
  assert.equal(v.querySelector('#library-count23').textContent,`${data.records.filter(r=>r.topics.includes('adoption')&&String(r.year)===year).length} references`);
  for(const route of ['library/skills','library?view=map&area=autonomy','library?area=bogus&scope=bogus&topic=bogus&year=bad']) {
    v=h.render(route);
    assert.equal(v.querySelectorAll('h1').length,1);
    assert.doesNotMatch(v.innerHTML,/\bundefined\b|\bNaN\b/);
    const ids=[...v.querySelectorAll('[id]')].map(el=>el.id);assert.equal(ids.length,new Set(ids).size);
  }
  assert(fs.existsSync(path.join(path.dirname(path.join(root,target)),'library-references.csv')));
}

function checkTopicResearch(h) {
  if(!h.run('typeof adaptTopicResearch24 === "function"')) return;
  const config=h.run('LIBRARY_MAP23'),records=h.run('LIBRARY_VIEW23.records');
  const primary=new Set(['RCT','lab experiment','field experiment','natural experiment','quasi-experiment','cross-sectional survey','panel survey','log analysis','qualitative','case study','benchmark']);
  for(const [id,topic] of Object.entries(h.run('topicMaps24'))) {
    const areaID=topic.area,area=config.areas.find(a=>a.id===areaID),columns=area.columns || config.columns;
    const facetID=area.facets[0].id,measureID=columns[0].id;
    let v=h.render(id);
    assert.equal(v.querySelector('h1').textContent,h.run(`topicMaps24.${id}.title`));
    assert.equal(v.querySelectorAll('.topic-map24').length,1);
    assert.equal(v.querySelectorAll('.library-map23 tbody tr').length,area.facets.length);
    assert.equal(v.querySelectorAll('.library-cell23[href]').length,area.facets.length*(columns.length+1));
    assert.equal(v.querySelectorAll('.topic-question-list24 > li').length,topic.questions.length);
    assert(v.innerHTML.indexOf('class="topic-map24"') < v.innerHTML.indexOf(`id="${id}-watch"`));
    assert.equal(v.querySelector('.next-measure9,.topic-finding24,.evidence-chart7,.takeaway7,.disclosures7,.map-pending24'),null);
    assert.doesNotMatch(v.textContent,/Selected finding/);
    assert.match(v.querySelector('.topic-map24').textContent,/AI-assisted and not yet verified/);
    assert.match(v.querySelector('.topic-map24').textContent,area.coding==='explicit-pairs' ? /These classifications await human review/ : /whether that measure was used for that construct needs checking/);
    assert.match(v.querySelector('.topic-map24').textContent,/Empty cells may reflect missing references/);
    assert.match(v.querySelector('#'+id+'-watch').textContent,/Proposed extensions/);
    if(id==='influence') assert.match(v.querySelector('.topic-map-scope24').textContent,/Government decisions are covered/);
    for(const cell of v.querySelectorAll('.library-cell23')) {
      const route=cell.getAttribute('href').slice(1), params=new URLSearchParams(route.split('?')[1]);
      assert.equal(params.get('topic'),null);assert.equal(params.get('from'),id);assert.equal(params.get('scope'),'observed');assert.equal(params.get('area'),areaID);
      const facet=config.areas.find(a=>a.id===areaID).facets.find(f=>f.id===cell.dataset.libraryFacet);
      const column=columns.find(c=>c.id===cell.dataset.libraryMeasure);
      const expected=expectedMapRecords25(records,facet,column);
      assert.equal(Number(cell.dataset.count),expected.length,'Topic map must retain all relevant area records, independent of old pathway tags');
      assert.equal(params.get('facet'),facet.id);assert.equal(params.get('measure')||'',column?.id||'');
    }
    const cell=v.querySelector(`[data-library-facet="${facetID}"][data-library-measure="${measureID}"]`),count=Number(cell.dataset.count);
    cell.dispatchEvent(new h.Event('click',{bubbles:true}));h.flush();
    assert.match(h.run('current'),/^library\?/);
    assert.equal(v.querySelector('.library-back23 a').getAttribute('href'),'#'+id);
    assert.equal(v.querySelector('#library-count23').textContent,`${count} references`);
    assert.equal(v.querySelector(`[data-library-facet="${facetID}"][data-library-measure="${measureID}"]`).getAttribute('aria-pressed'),'true');
    v=h.render('library/'+id);
    v.querySelector('[data-library-view="map"]').dispatchEvent(new h.Event('click',{bubbles:true}));h.flush();
    assert.equal(v.querySelector('#library-area23').value,areaID,'Topic library should default to its matching map');
    v=h.render(id+'/more');
    assert(v.querySelector('.library23'));
    assert.equal(v.querySelector('#library-topic23').value,'');
    assert.equal(v.querySelector('#library-area23').value,areaID);
    assert.equal(v.querySelector('#library-map-panel23').hidden,false);
    assert.equal(v.querySelector('.library-back23 a').getAttribute('href'),'#'+id);
    v.querySelector('[data-library-clear="all"]').dispatchEvent(new h.Event('click',{bubbles:true}));h.flush();
    assert.equal(v.querySelector('.library-back23 a').getAttribute('href'),'#'+id,'Reset preserves return navigation without filtering the corpus');
    v=h.render(id+'/source');
    assert(v.querySelector('.topic-source24 .disclosure7-body'),'Source-specific notes must remain accessible');
    assert(v.querySelector('#'+id+'-source'));
    assert(v.querySelector('.context7'));
    assert.equal(v.querySelector('.evidence-chart7,.topic-finding24'),null);
    assert.equal(v.querySelector('.research-back20 a').getAttribute('href'),'#'+id);
    assert.match(v.textContent,/AI-assisted summary; not independently verified/);
  }
  for(const id of h.run('ORDER.filter(id=>!topicMaps24[id])')) {
    const v=h.render(id);
    assert.equal(v.querySelector('.topic-research24'),null);
    assert.equal(v.querySelectorAll('.map-pending24').length,1);
    assert.match(v.querySelector('.map-pending24').textContent,/Evidence mapComing soon/);
    assert.equal(v.querySelector('.map-pending24 a,.map-pending24 button'),null,'Pending map must not look actionable');
    assert(v.querySelector('.evidence-chart7'),id+': existing research remains accessible');
    assert(v.querySelector('.library-entry23 a'));
  }
  const overview=h.render('gaps');
  assert.equal(overview.querySelectorAll('.map-availability24.is-pending').length,4);
  assert.equal(overview.querySelectorAll('.map-availability24:not(.is-pending)').length,5);
}

for (const theme of ['light', 'dark']) {
for (const width of [1200, 600, 335]) {
  const h = harness(width, { savedTheme: theme === 'light' ? null : theme });
  assert.equal(h.document.documentElement.getAttribute('data-theme'), theme);
  const choices = [...h.document.querySelectorAll('.appearance22 button')];
  assert.equal(choices.length, 2);
  assert.equal(h.document.querySelector('.appearance22').getAttribute('aria-label'), 'Colour theme');
  assert.equal(h.document.querySelector('.appearance22 [aria-pressed="true"]').dataset.themeChoice, theme);
  for (const button of choices) {
    assert.equal(button.getAttribute('type'), 'button');
    assert.match(button.getAttribute('aria-label'), /^(Light|Dark) mode$/);
    assert.equal(button.querySelector('svg').getAttribute('aria-hidden'), 'true');
  }
  const home = h.document.querySelector('#view');
  assert(home.querySelector('#homeMap'));
  assert.equal(home.querySelectorAll('[data-comparison-chart]').length, 0);
  assert.match(home.textContent, /Tracking whether AI is weakening human influence/);
  const homeIntro = home.querySelector('.measurement-intro25');
  assert(homeIntro);
  assert.equal(homeIntro.querySelector('.purpose5').textContent, 'Benchmarks and adoption surveys help us follow what AI can do and where it is used. The evidence assembled here offers a less complete picture of whether people and institutions retain the skills, authority and practical ability to question its decisions.');
  assert.equal(homeIntro.querySelector('.home-finding25 strong').textContent, 'This dashboard brings those measurement gaps into view.');
  assert.equal(homeIntro.querySelector('.purpose5').nextElementSibling.className, 'home-finding25');
  assert.equal(homeIntro.querySelector('.home-links25 a').getAttribute('href'), '#gaps');
  assert.equal(homeIntro.querySelector('.home-paper25').getAttribute('href'), 'https://gradual-disempowerment.ai/');
  assert.equal(homeIntro.querySelectorAll('.home-finding25').length, 1);
  const nav = [...h.document.querySelectorAll('.nav a')];
  assert.deepEqual(nav.map(a => a.getAttribute('href')), ['#home', '#evidence', '#gaps', '#projects', '#contribute', '#method']);
  assert.equal(nav.at(-1).textContent, 'Method');
  assert(home.querySelector('a[href="#projects/grants"]'));
  assert.equal(home.querySelector('a[href="#contribute/funding"]'), null);

  let v = h.render('evidence');
  assert.equal(v.querySelectorAll('[data-comparison-chart]').length, 6);
  assert.equal(v.querySelectorAll('[data-comparison-chart] svg').length, 4);
  assert.equal(v.querySelectorAll('.stat-chart10').length, 2);
  assert.equal(v.querySelectorAll('.pair-reading10').length, 3);
  assert.equal(v.querySelectorAll('.pair-notes10').length, 3);
  assert.equal(v.querySelectorAll('.source10 a').length, 6);
  assert.match(v.textContent, /12\.8%/);
  assert.match(v.textContent, /5\.4 points lower/);
  assert.match(v.textContent, /1-3%/);
  assert.equal(h.document.querySelector('.nav [aria-current="page"]').getAttribute('href'), '#evidence');
  // The actual chart functions produce finite SVG geometry at both test widths.
  for (const svg of v.querySelectorAll('.chart svg')) {
    assert.doesNotMatch(svg.outerHTML, /NaN|Infinity|undefined/);
    assert(svg.querySelector('path'));
  }
  const chart = v.querySelector('.chart svg');
  const key = new h.Event('keydown', { bubbles: true, cancelable: true });
  key.key = 'ArrowRight'; chart.dispatchEvent(key);
  assert.notEqual(v.querySelector('.chart .tip').textContent, '');
  const escape = new h.Event('keydown', { bubbles: true, cancelable: true });
  escape.key = 'Escape'; chart.dispatchEvent(escape);
  assert.equal(v.querySelector('.chart .tip').style.display, 'none');

  // Changing colours must preserve route, mounted charts and open source notes.
  const sourceNotes = v.querySelector('details');
  sourceNotes.open = true;
  const currentRoute = h.run('current');
  const otherTheme = theme === 'light' ? 'dark' : 'light';
  h.document.querySelector(`[data-theme-choice="${otherTheme}"] svg`).dispatchEvent(new h.Event('click', { bubbles: true }));
  assert.equal(h.document.documentElement.getAttribute('data-theme'), otherTheme);
  assert.equal(h.storage.get('gd-dashboard-theme'), otherTheme);
  assert.equal(h.document.querySelector('.appearance22 [aria-pressed="true"]').dataset.themeChoice, otherTheme);
  assert.equal(v.querySelector('.chart svg'), chart);
  assert.equal(sourceNotes.open, true);
  assert.equal(h.run('current'), currentRoute);
  h.document.querySelector(`[data-theme-choice="${theme}"]`).dispatchEvent(new h.Event('click', { bubbles: true }));

  for (const route of ['evidence/work', 'evidence/skills', 'evidence/culture', 'emerging/work']) {
    v = h.render(route);
    assert(v.querySelector('#compare-' + route.split('/')[1]).scrolled);
  }

  v = h.render('gaps');
  assert.equal(v.querySelectorAll('.matrix-cell20').length, hasCoverageColumns ? 0 : 4);
  const stepLinks = [...v.querySelectorAll('.gap-step20')].map(a => a.getAttribute('href'));
  assert.equal(new Set(stepLinks).size, 9);
  assert.equal(stepLinks.length, 9);
  if (hasCoverageColumns) {
    assert.equal(v.querySelectorAll('.coverage-column20').length,3);
    assert.deepEqual([...v.querySelectorAll('.coverage-column-head20 h3')].map(el=>el.textContent),['Major gaps','Partial coverage','Stronger coverage']);
    for (const band of ['major','partial','stronger']) {
      const expected=Array.from(h.run(`ORDER.filter(id=>coverageOf5(id).band===${JSON.stringify(band)})`),id=>'#'+id);
      assert.deepEqual([...v.querySelectorAll(`.coverage-column20[data-coverage="${band}"] .gap-step20`)].map(a=>a.getAttribute('href')),expected);
    }
    const map=v.querySelector('#gaps-map20');
    assert(map);
    assert(v.innerHTML.indexOf('id="gaps-map20"')<v.innerHTML.indexOf('class="gap-columns20"'));
    assert.equal(map.querySelectorAll('.st5').length,9);
    assert.equal(map.querySelectorAll('.ml5[data-id]').length,0);
    assert.equal(map.querySelectorAll('a.st5[role="link"]').length,9);
    assert.equal(map.querySelectorAll('.coverage-header5').length,0,'Do not repeat the three legend panels above the diagram');
    assert.equal(v.querySelectorAll('.coverage-key5').length,0);
    assert.doesNotMatch(map.querySelector('svg').outerHTML,/NaN|Infinity|undefined/);
    assert.doesNotMatch(v.textContent,/2x2|How the two criteria work|Closer to human influence/);
    assert(v.querySelector('a[href="#method/coverage"]'));
    assert.equal(v.querySelectorAll('a[href="#method/coverage"]').length,1);
    assert.equal(v.querySelector('.gap-coverage20 > h2').textContent,'What the selected evidence covers');
    assert(v.querySelector('.gap-columns20').nextElementSibling.classList.contains('note5'));
    assert.equal(map.querySelectorAll('.card5,.research-prompt5,.coverage-label5').length,0);
    for(const id of h.run('ORDER')) {
      const summary=v.querySelector(`.gap-step20[href="#${id}"] p`).textContent;
      assert.equal(summary,h.run(`gapCoverageSummaries20[${JSON.stringify(id)}]`));
      assert.notEqual(summary,h.run(`coverageOf5(${JSON.stringify(id)}).need`));
      assert.equal(map.querySelector(`.st5[data-id="${id}"]`).getAttribute('href'),'#'+id);
      assert.doesNotMatch(map.querySelector(`.st5[data-id="${id}"]`).getAttribute('aria-label'),/Research needed/);
    }
    map.querySelector('.st5[data-id="institutions"]').dispatchEvent(new h.Event('pointerover',{bubbles:true}));
    assert.equal(map.querySelector('.st5.here').dataset.id,'institutions');
    assert(map.querySelector('.seg5.active'));
    map.querySelector('.gap-map20').dispatchEvent(new h.Event('pointerleave'));
    assert.equal(map.querySelector('.st5.here'),null);
    const arrow=new h.Event('keydown',{bubbles:true,cancelable:true});arrow.key='ArrowRight';
    map.querySelector('.st5[data-id="capability"]').dispatchEvent(arrow);h.flush();
    assert(map.querySelector('.st5[data-id="adoption"]').scrolled);
    const enter=new h.Event('keydown',{bubbles:true,cancelable:true});enter.key='Enter';
    map.querySelector('.st5[data-id="skills"]').dispatchEvent(enter);h.flush();
    assert.equal(h.run('current'),'skills');
    assert.equal(h.location.hash,'#skills');
    v=h.render('gaps');
    v.querySelector('.gap-step20[href="#influence"]').dispatchEvent(new h.Event('click',{bubbles:true}));h.flush();
    assert.equal(h.run('current'),'influence');
    assert.equal(h.document.querySelector('.nav [aria-current="page"]').getAttribute('href'),'#gaps');
    v=h.render('gaps');
    v.querySelector('.st5[data-id="skills"] .nm5').dispatchEvent(new h.Event('click',{bubbles:true}));h.flush();
    assert.equal(h.run('current'),'skills');
  } else {
    assert.equal(v.querySelector('[data-group="near-limited"] a').getAttribute('href'), '#influence');
    assert.equal(v.querySelector('[data-group="near-stronger"] a').getAttribute('href'), '#share');
    assert.equal(v.querySelector('[data-group="earlier-stronger"] a').getAttribute('href'), '#adoption');
    assert.match(v.textContent, /does not estimate the size of an effect/);
  }

  const routes = ['home', 'evidence', 'gaps', 'method', 'method/coverage', 'projects', 'projects/work', 'projects/grants', 'futures', 'futures/more', 'contribute', 'contribute/add', 'contribute/funding', 'why/funding',
    ...h.run('ORDER'), ...h.run('ORDER.map(id => id + "/source")'), ...h.run('ORDER.map(id => "gaps/" + id)'), 'details/work'];
  for (const route of routes) {
    v = h.render(route);
    assert.equal(v.querySelectorAll('h1').length, 1, route);
    assert.equal(h.document.documentElement.getAttribute('data-theme'), theme, route);
    assert.doesNotMatch(v.innerHTML, /\bundefined\b|\bNaN\b/, route);
    const ids = [...v.querySelectorAll('[id]')].map(el => el.id);
    assert.equal(ids.length, new Set(ids).size, route + ': duplicate IDs');
    for (const el of v.querySelectorAll('[aria-labelledby]')) {
      for (const id of el.getAttribute('aria-labelledby').split(' ')) assert(h.document.getElementById(id), route + ': missing aria label ' + id);
    }
    for (const a of v.querySelectorAll('a[href]')) {
      const href = a.getAttribute('href');
      assert(!href.startsWith('javascript:'), route);
      if (href.startsWith('http')) assert.equal(new URL(href).protocol, 'https:', href);
    }
  }
  v = h.render('skills/source');
  assert(v.querySelector('.topic-source24 .data7'));
  assert.match(v.textContent,/5\.4/);
  assert.equal(h.document.querySelector('.nav [aria-current="page"]').getAttribute('href'), '#gaps');
  v = h.render('gaps/skills');
  assert(v.querySelector('#skills-watch').scrolled);
  assert.equal(v.querySelector('a[href="#gaps/skills"]'), null);
  v = h.render('futures');
  assert.equal(v.querySelector('.future-grid5-ideas'), null);
  assert.equal(v.querySelector('.routes'), null);
  assert.doesNotMatch(v.textContent, /Promising directions|Five routes the chain could take/);
  assert.equal(v.querySelectorAll('.directory-row21').length, 10);
  assert.equal(v.querySelectorAll('#projects-work .directory-row21').length, 6);
  assert.equal(v.querySelectorAll('#projects-grants .directory-row21').length, 4);
  assert.equal(v.querySelectorAll('.chart').length, 0);
  assert.match(v.textContent, /Manually updated/);
  assert.equal(h.location.hash, '#projects');
  assert.equal(h.document.querySelector('.nav [aria-current="page"]').getAttribute('href'), '#projects');
  assert.match(h.document.title, /Projects & grants/);
  for (const route of ['projects/grants', 'contribute/funding', 'why/funding']) {
    v = h.render(route);
    assert(v.querySelector('#projects-grants').scrolled, route);
  }
  v = h.render('futures/more');
  assert.equal(h.location.hash, '#projects');
  assert.doesNotMatch(v.textContent, /US labour-share forecast|How far to trust these forecasts/);
  v = h.render('contribute');
  assert.equal(v.querySelectorAll('.submission-list21 a').length, 3);
  assert.equal(v.querySelector('.directory-row21'), null);
  assert.doesNotMatch(v.textContent, /Find or offer funding|The plan|AI 2040|grants/i);
  const submissions = [...v.querySelectorAll('.submission-list21 a')].map(a => new URL(a.getAttribute('href')));
  assert.deepEqual(submissions.map(url => url.searchParams.get('template')), ['indicator.yml', 'study.yml', 'correction.yml']);
  for (const url of submissions) assert.equal(url.origin, 'https://github.com');
  for (const item of h.run('[...DIRECTORY21.projects, ...DIRECTORY21.grants]')) {
    assert.equal(new URL(item.url).protocol, 'https:');
    assert.equal(item.checked, '2026-10-19');
  }
  assert.equal(h.run('grantStatus21(DIRECTORY21.grants[0], Date.parse("2026-10-30T00:00:00Z"))'), 'Closes 31 Oct 2026');
  assert.equal(h.run('grantStatus21(DIRECTORY21.grants[0], Date.parse("2026-11-01T07:00:00Z"))'), 'Deadline passed');
  assert.equal(h.run('grantStatus21(DIRECTORY21.grants[1], Date.parse("2026-11-01T07:00:00Z"))'), 'Rolling applications');
  v = h.render('method');
  assert.match(v.textContent, /six selected visuals/);
  if(hasCoverageColumns) {
    assert.match(v.textContent,/How Research gaps is organised/);
    assert.match(v.textContent,/same nine steps are grouped/);
    assert.doesNotMatch(v.textContent,/2x2|Graph distance/);
  } else {
    assert.match(v.textContent, /2x2/);
    assert.match(v.textContent, /Graph distance is a navigation rule/);
  }
  assert.equal(v.querySelectorAll('.coverage-reasons5').length,0);
  assert.doesNotMatch(v.textContent, /Still needed:|Definitions at each step|All 18 priority sources/);
  assert.match(v.textContent, /six age groups/);
  assert.match(v.textContent, /same provider/);
  assert.match(v.textContent, /manually maintained/);
  assert.doesNotMatch(v.textContent, /all 60 months and five exposure quintiles/);
  assert.doesNotMatch(v.textContent, /forecast section remains/);

  // No value changes during the reorganisation; data are the stored source extract.
  assert.equal(h.run('CAPABILITY7.metr.rows.length'), 23);
  assert.equal(h.run('COMPARISON_DATA.work.data.length'), 60);
  assert.equal(h.run('COMPARISON_DATA.work.series.length'), 6);
  assert.equal(h.run('ADOPTION7.rows.length'), 8);
  assert.equal(h.run('ADOPTION7.rows.at(-1).total'), 53);
  assert.equal(h.run('COMPARISON_DATA.music.uploads.length'), 5);
  assert.equal(h.run('Math.abs(TOPIC_CHARTS.skills.chart.rows[0].value)'), 5.4);
  assert.equal(h.run('TOPIC_CHARTS.work.chart.kind'), 'work-ages');
  checkLibrary(h);
  checkTopicResearch(h);
}
}
const blocked = harness(335, { storageBlocked: true });
if(hasCoverageColumns) {
  for(const initialHash of ['#gaps','#evidence','#projects','#contribute','#skills']) {
    const direct=harness(1200,{initialHash});
    assert.equal(direct.document.querySelectorAll('#view h1').length,1);
    assert.equal(direct.document.querySelector('.nav [aria-current="page"]').getAttribute('href'),initialHash==='#skills'?'#gaps':initialHash);
    if(initialHash==='#skills') assert(direct.document.querySelector('.topic-map24'));
  }
}
if (html.includes('const LIBRARY_VIEW23')) {
  for(const initialHash of ['#library','#library/skills','#library?view=map&area=autonomy&facet=choice&measure=report']) {
    const direct=harness(600,{initialHash});
    assert(direct.document.querySelector('.library23'),initialHash+': direct entry lost');
    assert.match(direct.location.hash,/^#library\?/);
    assert.match(direct.document.title,/Evidence library/);
    if(initialHash==='#library/skills') {
      assert.equal(direct.document.querySelector('#library-topic23').value,'skills');
      assert.equal(direct.document.querySelector('#library-map-panel23').hidden,true);
    }
    if(initialHash.includes('facet=choice')) assert.equal(direct.document.querySelector('[data-library-facet="choice"][data-library-measure="report"]').getAttribute('aria-pressed'),'true');
    direct.location.hash='#home';direct.listeners.hashchange.forEach(fn=>fn());direct.flush();
    assert(direct.document.querySelector('#homeMap'));
    direct.location.hash=initialHash;direct.listeners.popstate.forEach(fn=>fn());direct.flush();
    assert(direct.document.querySelector('.library23'));
  }
}
if(html.includes('function adaptTopicResearch24')) {
  for(const id of ['skills','influence','handover','culture','institutions']) for(const initialHash of ['#'+id,'#'+id+'/source','#'+id+'/more','#'+id+'/gaps','#gaps/'+id]) {
    const direct=harness(600,{initialHash});
    if(initialHash.endsWith('/more')) {
      assert(direct.document.querySelector('.library23'),initialHash+': open topic library on direct entry');
      assert.equal(direct.document.querySelector('#library-topic23').value,'');
      assert.equal(direct.document.querySelector('.library-back23 a').getAttribute('href'),'#'+id);
      assert.match(direct.location.hash,/^#library\?/);
    } else if(initialHash.endsWith('/source')) {
      assert(direct.document.querySelector('.topic-source24 .disclosure7-body'),initialHash+': retain source-specific notes and caveats');
      assert.equal(direct.location.hash,initialHash);
    } else {
      assert(direct.document.querySelector('.topic-map24'),initialHash+': map must survive direct entry');
      assert.equal(direct.location.hash,initialHash);
      if(initialHash.includes('/')) assert(direct.document.querySelector('#'+id+'-watch').scrolled);
    }
    assert.equal(direct.document.querySelector('.topic-finding24'),null);
  }
}
assert.equal(blocked.document.documentElement.getAttribute('data-theme'), 'light');
blocked.document.querySelector('[data-theme-choice="dark"]').dispatchEvent(new blocked.Event('click', { bubbles: true }));
assert.equal(blocked.document.documentElement.getAttribute('data-theme'), 'dark');
assert.equal(harness(600, { savedTheme: 'invalid' }).document.documentElement.getAttribute('data-theme'), 'light');
const reload = harness(600, { savedTheme: 'dark' });
reload.listeners.storage.forEach(fn => fn({ key: 'gd-dashboard-theme', newValue: 'light' }));
assert.equal(reload.document.documentElement.getAttribute('data-theme'), 'light');
assert.equal(reload.document.querySelector('.appearance22 [aria-pressed="true"]').dataset.themeChoice, 'light');
const css = fs.readFileSync(path.join(root, 'prototypes/reorganized/reorganize.css'), 'utf8');
assert.match(css, /@media\(max-width:760px\)/);
assert.match(css, /grid-template-rows:subgrid/);
assert.match(css, /\.gap-columns20\s*\{[^}]*grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/);
assert.match(css, /\.gap-columns20\s*\{[^}]*grid-template-columns:1fr/);
assert.doesNotMatch(css, /font-size:\s*[^;}]*vw|letter-spacing:\s*-/);
const appearance = fs.readFileSync(path.join(root, 'prototypes/reorganized/appearance.css'), 'utf8');
assert.doesNotMatch(appearance, /font-size:\s*[^;}]*vw|letter-spacing:\s*-/);
assert.match(appearance, /--page-gutter22:40px/);
assert.match(appearance, /--page-gutter22:24px/);
assert.match(appearance, /safe-area-inset-left/);
assert.match(appearance, /:focus-visible/);
const rgb = hex => hex.slice(1).match(/../g).map(value => parseInt(value, 16));
const luminance = colour => colour.map(value => {
  const c = value / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}).reduce((sum, value, i) => sum + value * [0.2126, 0.7152, 0.0722][i], 0);
const contrast = (a, b) => {
  const values = [luminance(a), luminance(b)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
};
for (const theme of ['light', 'dark']) {
  const palette = appearance.match(new RegExp(`:root\\[data-theme="${theme}"\\]\\s*\\{([^}]+)\\}`))[1];
  const colours = Object.fromEntries([...palette.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6})/g)].map(match => [match[1], rgb(match[2])]));
  for (const background of ['paper', 'surface', 'surface-2']) {
    for (const foreground of ['ink', 'ink-2', 'ink-3', 'accent', 'coverage-major', 'coverage-partial', 'coverage-stronger']) {
      assert(contrast(colours[foreground], colours[background]) >= 4.5, `${theme}: ${foreground} text on ${background}`);
    }
    for (const foreground of ['s1', 's2', 's3', 'map-path']) {
      assert(contrast(colours[foreground], colours[background]) >= 3, `${theme}: ${foreground} graphics on ${background}`);
    }
  }
  for (const band of ['major', 'partial', 'stronger']) {
    const colour = colours['coverage-' + band];
    const tint = colour.map((value, i) => value * 0.1 + colours.surface[i] * 0.9);
    assert(contrast(colour, tint) >= 4.5, `${theme}: ${band} label on tinted legend background`);
  }
  for(const fraction of [0.08,0.16,0.24,0.34]) {
    const tint=colours.accent.map((value,i)=>value*fraction+colours.surface[i]*(1-fraction));
    assert(contrast(colours.ink,tint)>=4.5,`${theme}: heat-map count on ${fraction} tint`);
  }
}
const {libraryCSV,csvCell}=require('./library-csv.js');
assert.equal(csvCell('a,"b"\nc'),'"a,""b""\nc"');
assert.equal(csvCell('=1+1'),'"\'=1+1"');
assert.equal(csvCell('  @SUM(A1)'),'"\'  @SUM(A1)"');
assert.equal(csvCell('\tbad'),'"\'\tbad"');
const exportText=libraryCSV({records:[]});
assert.match(exportText,/Review status/);
assert.doesNotMatch(exportText,/Finding|Effect size/);
console.log('PASS: historical home, six visuals, chart keyboard events, nine grouped steps, topic/source routes and Methods references.');
if(hasCoverageColumns)console.log('PASS: compact pathway above three coverage columns; no repeated gap text, direct node links, hover/keyboard controls and Method alignment.');
console.log('PASS: six projects, four grants, three submission links, legacy redirects, expired-deadline handling and Method last in navigation.');
console.log('PASS: generated SVG geometry at widths 1200, 600 and 335, with source values preserved.');
console.log('PASS: light/dark controls, saved preferences, blocked-storage fallback, and no route/chart/disclosure reset on theme change.');
console.log('PASS: palette text contrast >= 4.5:1 and main chart/diagram colours >= 3:1 in both modes.');
if(html.includes('const LIBRARY_VIEW23')) console.log('PASS: library routes, filters, all map cell counts, exact source memberships, reset/pagination, query escaping and CSV export.');
if(html.includes('function adaptTopicResearch24')) console.log('PASS: five topic maps, exact source counts/links, no selected findings, four pending maps and separate source-note routes.');
console.log('Not tested: actual browser layout, CSS overflow, pointer positioning or current remote link availability.');
