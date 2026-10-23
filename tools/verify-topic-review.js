const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const {parseHTML} = require('linkedom');
const {build} = require('./build-topic-review');
const root = path.resolve(__dirname,'..');
const output = process.argv[2] ? path.resolve(root,process.argv[2]) : build().destination;
const allTopics = ['capability','adoption','handover','work','share','skills','culture','institutions','influence'];

function harness(page, query = '', hash = '', theme = 'light', blockedStorage = false, chartWidth = 600) {
  const html = fs.readFileSync(path.join(output,page),'utf8');
  const {document,window,Element,HTMLSelectElement,HTMLDetailsElement,Event} = parseHTML(html);
  Object.defineProperty(HTMLSelectElement.prototype,'value',{
    configurable:true,
    get() { return this.querySelector('option[selected]')?.getAttribute('value') ?? this.querySelector('option')?.getAttribute('value') ?? ''; },
    set(value) { for (const option of this.querySelectorAll('option')) option.toggleAttribute('selected',option.getAttribute('value') === value); }
  });
  Element.prototype.scrollIntoView = function() { this.scrolled = true; };
  Element.prototype.focus = function() { document.activeElement = this; };
  Element.prototype.getBoundingClientRect = function() { return {left:0,right:600,top:100,bottom:144,width:600,height:44}; };
  Object.defineProperty(Element.prototype,'clientWidth',{configurable:true,get() {return chartWidth;}});
  const location = {search:query,hash,href:`https://example.test/topics/${page}${query}${hash}`};
  const listeners = {}, timers = new Map();
  let timerId = 0;
  const storage = new Map(theme ? [['gd-dashboard-visit-theme',theme]] : []);
  const context = vm.createContext({document,URL,URLSearchParams,HTMLDetailsElement,console,
    location,window:{innerWidth:1280,innerHeight:900,addEventListener(name,fn) {(listeners[name] ||= []).push(fn);}},
    history:{replaceState(state,title,url) { location.href=String(url); }},
    localStorage:{getItem() {return 'dark';}},
    sessionStorage:{getItem(key) {if (blockedStorage) throw Error('blocked');return storage.get(key);},setItem(key,value) {if (blockedStorage) throw Error('blocked');storage.set(key,value);}},
    setTimeout(fn) {timers.set(++timerId,fn);return timerId;},
    clearTimeout(id) {timers.delete(id);}
  });
  const run = script => vm.runInContext(script,context);
  for (const script of document.querySelectorAll('script[src]')) {
    const file = path.join(output,script.getAttribute('src').split('?')[0]);
    assert(fs.existsSync(file),`Missing asset ${file}`);
    run(fs.readFileSync(file,'utf8'));
  }
  for (const tag of document.querySelectorAll('link[rel="stylesheet"]')) {
    const href = tag.getAttribute('href');
    if (!href.startsWith('https://')) assert(fs.existsSync(path.join(output,href.split('?')[0])));
  }
  assert(document.querySelector('link[href*="fonts.googleapis.com"]'),'Topic pages load the main site fonts');
  assert.equal(document.querySelector('.bar .mark').getAttribute('href'),'../index.html#home');
  assert.deepEqual([...document.querySelectorAll('.bar .nav a')].map(a => a.textContent),['Home','Selected evidence','Research gaps','Paper explorer Beta','Projects & grants','Contribute']);
  assert.equal(document.querySelector('.bar .nav a[href="../index.html#explorer"] .beta-label').textContent,'Beta');
  assert.equal(document.querySelector('.bar .nav [aria-current="page"]').getAttribute('href'),`../index.html#${page === 'evidence.html' ? 'evidence' : 'gaps'}`);
  assert.match(document.querySelector('script[src]').getAttribute('src'),/^theme-init\.js\?v=[a-f0-9]{12}$/,'Theme loads before the styles');
  for (const tag of document.querySelectorAll('script[src],link[rel="stylesheet"]')) {
    const url = tag.getAttribute(tag.localName === 'script' ? 'src' : 'href');
    if (url.startsWith('https://')) continue;
    const [file,version] = url.split('?v=');
    assert.equal(version,require('node:crypto').createHash('sha256').update(fs.readFileSync(path.join(output,file))).digest('hex').slice(0,12),'Local assets have content-based cache keys');
  }
  const ids = [...document.querySelectorAll('[id]')].map(node => node.id);
  assert.equal(ids.length,new Set(ids).size,`${page}${query}: duplicate IDs`);
  for (const a of document.querySelectorAll('a[target="_blank"]')) assert.match(a.rel,/noopener/);
  for (const a of document.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href');
    if (/^(https?:|mailto:)/.test(href)) continue;
    if (href.startsWith('#')) {
      assert(document.getElementById(href.slice(1)),`${page}${query}: missing anchor ${href}`);
      continue;
    }
    const localFile = href.split(/[?#]/)[0];
    if (localFile.startsWith('../') && !fs.existsSync(path.join(output,'../index.html'))) continue;
    assert(fs.existsSync(path.resolve(output,localFile)),`${page}${query}: missing local destination ${href}`);
  }
  assert.match(document.querySelector('.review-status').textContent,/AI-assisted.*Human review pending/s);
  assert.doesNotMatch(document.body.textContent,/undefined|\bNaN\b|human-vetted|human-verified/);
  return {document,Event,run,storage,listeners,location,resize(width) {
    chartWidth = width;
    for (const fn of listeners.resize || []) fn();
    for (const [id,fn] of timers) {timers.delete(id);fn();}
  }};
}

let mapCells = 0, sourceRecords = 0;
for (const id of allTopics) {
  const page = harness('index.html',`?topic=${id}`);
  assert.equal(page.run('GD_TOPIC_ID'),id);
  assert(page.document.querySelector('h1').textContent.length > 20);
  assert(page.document.querySelectorAll('.study').length >= 3);
  assert(page.document.querySelectorAll('.gap-row').length >= 2);
  if (id !== 'skills') {
    assert(page.document.querySelector('#map-coverage a[href*="collection=imported"]'));
    assert.match(page.document.querySelector('#map-coverage').textContent,/await assessment and are not included in this map/);
  }
  for (const facet of page.run('GD_FACETS')) {
    assert(page.document.querySelector('#map-tag-rules').textContent.includes(facet.label));
  }
  const cells = [...page.document.querySelectorAll('.map-cell')];
  for (const cell of cells) {
    const url = new URL(cell.getAttribute('href'),'https://example.test/topics/');
    assert.equal(url.searchParams.get('topic'),id);
    const library = harness('library.html',url.search);
    assert.equal(library.document.querySelectorAll('.library-record').length,Number(cell.textContent),`${id}: cell count and filter disagree`);
    if (id !== 'skills') for (const record of library.document.querySelectorAll('.record-status')) assert.match(record.textContent,/AI-assisted extraction/);
    mapCells++;
  }
  for (const a of page.document.querySelectorAll('.gap-sources a')) {
    const url = new URL(a.getAttribute('href'),'https://example.test/topics/');
    const library = harness('library.html',url.search,url.hash);
    assert(library.document.getElementById(decodeURIComponent(url.hash.slice(1))),`${id}: unresolved gap reference`);
  }
  const library = harness('library.html',`?topic=${id}`);
  const expectedCount = library.run('GD_CATALOG.length');
  sourceRecords += expectedCount;
  assert.equal(library.document.querySelectorAll('.library-record').length,expectedCount);
  if (id !== 'skills') {
    const control = library.document.getElementById('library-topic');
    control.value = 'assessed';control.dispatchEvent(new library.Event('change'));
    assert.equal(library.document.querySelectorAll('.library-record').length,library.run('inspectedRecords.length'));
    control.value = 'imported';control.dispatchEvent(new library.Event('change'));
    assert.equal(library.document.querySelectorAll('.library-record').length,expectedCount-library.run('inspectedRecords.length'));
    assert(library.document.querySelector('#search-record-content li'));
  }
  const search = library.document.getElementById('library-search');
  search.value = 'zzzxxyynoresults';search.dispatchEvent(new library.Event('input'));
  assert.equal(library.document.querySelectorAll('.library-record').length,0);
  assert.equal(library.document.getElementById('library-empty').hidden,false);
  const selected = harness('library.html',`?topic=${id}&collection=selected`);
  assert.equal(selected.document.querySelectorAll('.library-record').length,selected.run('GD_SOURCES.length'));
  const dark = harness('index.html',`?topic=${id}`,'','dark');
  assert.equal(dark.document.documentElement.dataset.theme,'dark');
  dark.document.querySelector('[data-theme-choice="light"]').dispatchEvent(new dark.Event('click',{bubbles:true}));
  assert.equal(dark.storage.get('gd-dashboard-visit-theme'),'light');
  assert.equal(dark.document.documentElement.dataset.theme,'light');
  const switcher = page.document.getElementById('topic-switch');
  switcher.value = 'adoption';switcher.dispatchEvent(new page.Event('change'));
  assert.equal(page.location.href,'index.html?topic=adoption');
}
assert.equal(harness('index.html','?topic=unknown').run('GD_TOPIC_ID'),'skills');
assert.equal(harness('library.html','?topic=adoption&facet=bad&design=bad').document.querySelectorAll('.library-record').length,harness('library.html','?topic=adoption').run('GD_CATALOG.length'));
assert.equal(harness('index.html','?topic=work','','dark',true).document.documentElement.dataset.theme,'light');
for (const file of ['index.html','topics.html','library.html','evidence.html']) {
  const fresh = harness(file,'','',null);
  assert.equal(fresh.document.documentElement.dataset.theme,'light',`${file}: a previous persistent dark preference must not override a fresh session`);
  fresh.document.querySelector('[data-theme-choice="dark"]').dispatchEvent(new fresh.Event('click',{bubbles:true}));
  assert.equal(fresh.document.documentElement.dataset.theme,'dark');
  assert.equal(fresh.storage.get('gd-dashboard-visit-theme'),'dark');
}
const directory = harness('topics.html');
assert.equal(directory.document.querySelectorAll('.topic-directory-row').length,9);
assert.notEqual(directory.run("sourceKey('https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1')"),directory.run("sourceKey('https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2')"));
assert.equal(directory.run("sourceKey('https://example.org/paper/?utm_source=mail')"),directory.run("sourceKey('https://example.org/paper')"));
assert.equal(directory.run("sourceKey('https://arxiv.org/abs/2507.09089v3')"),directory.run("sourceKey('https://arxiv.org/pdf/2507.09089')"));
for (const width of [272,288,327,342,363,452,580,600]) {
  const evidence = harness('evidence.html','','','light',false,width);
  assert.equal(evidence.document.querySelectorAll('.evidence-pair').length,3);
  assert.equal(evidence.document.querySelectorAll('.evidence-figure').length,6);
  assert.equal(evidence.document.querySelectorAll('.chart svg').length,4);
  assert.equal(evidence.document.querySelectorAll('.figure-stat').length,2);
  assert.equal(evidence.document.querySelectorAll('.figure-notes table').length,6);
  for (const figure of evidence.document.querySelectorAll('.evidence-figure')) {
    assert(figure.querySelector('.figure-source a[href^="https://"]'));
    assert(figure.querySelector('.chart-credit').textContent.includes('Source:'));
    const table = figure.querySelector('table');
    const columns = table.querySelectorAll('thead th').length;
    for (const row of table.querySelectorAll('tbody tr')) assert.equal(row.children.length,columns);
  }
  for (const svg of evidence.document.querySelectorAll('.chart svg')) {
    assert.equal(Number(svg.getAttribute('width')),width);
    assert.match(svg.getAttribute('aria-label'),/.{40,}/);
    assert(svg.querySelector('path[d]'));
    assert.doesNotMatch(svg.outerHTML,/NaN|undefined|Infinity/);
    for (const point of svg.querySelectorAll('circle')) {
      assert(Number(point.getAttribute('cx')) >= 0 && Number(point.getAttribute('cx')) <= width);
      assert(Number(point.getAttribute('cy')) >= 0 && Number(point.getAttribute('cy')) <= 270);
    }
    const event = new evidence.Event('keydown',{bubbles:true,cancelable:true});
    event.key = 'ArrowRight'; svg.dispatchEvent(event);
    assert.equal(svg.parentNode.querySelector('.tip').style.display,'block');
    assert(svg.parentNode.querySelector('.tip .d').textContent.length > 5);
  }
  assert.equal(evidence.run("evidenceMonth(evidenceDate('2026-05-01'))"),'May 2026');
  assert.equal(evidence.run("evidenceMonth(evidenceDate('2024-03-01'))"),'Mar 2024');
  const panels = evidence.run('GD_SELECTED_EVIDENCE.panels');
  const data = id => panels.find(panel => panel.id === id).chart.data;
  assert.equal(data('capability').length,23);
  assert.equal(data('work').length,60);
  assert(Math.abs(data('work').at(-1)[1] - 87.23) < 0.01);
  assert.equal(data('adoption').at(-1)[2],32);
  assert.equal(data('adoption').at(-1)[3],53);
  assert.equal(data('uploads').length,6);
  assert.equal(data('uploads').at(-1)[1],44);
  assert.equal(data('skills')[0][1],-5.4);
  assert.equal(data('streams')[0][1],1);
  assert.equal(data('streams')[0][2],3);
}
const resizing = harness('evidence.html');
resizing.document.querySelector('.figure-notes').setAttribute('open','');
for (const width of [272,580,327,600]) {
  resizing.resize(width);
  for (const svg of resizing.document.querySelectorAll('.chart svg')) assert.equal(Number(svg.getAttribute('width')),width,'Resizing redraws charts');
  assert(resizing.document.querySelector('.figure-notes').hasAttribute('open'),'Resizing preserves open source notes');
}
console.log('PASS: six evidence panels, primary source links, source-data tables, chart geometry at eight widths, resize events and keyboard data inspection.');
console.log(`PASS: nine topics, ${mapCells} map/filter cells, ${sourceRecords} topic-library records, gap links, search, themes and topic navigation. DOM checks only; no browser rendering assertion.`);
