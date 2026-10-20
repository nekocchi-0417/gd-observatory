const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
let parseHTML;
try { ({parseHTML} = require('linkedom')); }
catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') throw error;
  ({parseHTML} = require('../dist/test-deps/node_modules/linkedom'));
}
const root = path.resolve(__dirname, '..');
const target = process.argv[2] || 'dist/reorganized-dashboard/index.html';
const html = fs.readFileSync(path.join(root, target), 'utf8');
const output = path.dirname(path.join(root, target));
assert.match(html, /shareable-review-2026-10-20/);
assert.doesNotMatch(html, /LIBRARY_VIEW23|COMPARISON_DATA|ADOPTION7|drawAdoption15|Bastani|53 seconds|Source checks: 14 October/);
assert(!fs.existsSync(path.join(output, 'library-references.csv')), 'Held bibliography must not be downloadable');
assert.match(fs.readFileSync(path.join(output, 'pdf-source-crosswalk.html'), 'utf8'), /Work in progress/);
if (target === 'docs/index.html') assert(!html.includes('noindex,nofollow'));
assert(html.indexOf('gd-dashboard-theme') < html.indexOf('<style>'));
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
assert.equal(scripts.length, 2, 'No legacy runtime may be embedded');
scripts.forEach(script => new vm.Script(script));

function harness(hash = '#home', savedTheme = null, blockedStorage = false) {
  const {document, Element, Event} = parseHTML(html);
  Element.prototype.scrollIntoView = function() { this.scrolled = true; };
  Element.prototype.focus = function() { this.focused = true; };
  const location = {hash}, listeners = {}, callbacks = [];
  const storage = new Map(savedTheme ? [['gd-dashboard-theme', savedTheme]] : []);
  const window = {scrollTo() {}, addEventListener(name, fn) { (listeners[name] ||= []).push(fn); }};
  const context = vm.createContext({document, window, location, console, Date, Intl,
    requestAnimationFrame(fn) { callbacks.push(fn); },
    localStorage: {
      getItem(key) { if (blockedStorage) throw Error('Storage blocked'); return storage.get(key) ?? null; },
      setItem(key, val) { if (blockedStorage) throw Error('Storage blocked'); storage.set(key, val); }
    }
  });
  const run = code => vm.runInContext(code, context);
  const flush = () => { while (callbacks.length) callbacks.shift()(); };
  scripts.forEach(run); flush();
  return {document, Event, listeners, storage, run, render(route) {
    location.hash = '#' + route; run('render28()'); flush(); return document.querySelector('#view');
  }};
}

for (const theme of ['light','dark']) {
  const h = harness('#home', theme);
  assert.equal(h.document.documentElement.dataset.theme, theme);
  assert.equal(h.document.querySelectorAll('.nav a').length, 6);
  assert.equal(h.document.querySelector('.nav a:last-child').getAttribute('href'), '#method');
  const topics = h.run('TOPICS28.map(t => t[0])');
  const routes = ['evidence','evidence/work','emerging','findings','library','library/skills','library?view=map&area=cognition','record/123','review','details','work/source','adoption/more','capability/old-indicator',...topics,...topics.map(t => 'gaps/' + t),...topics.map(t => 'topic/' + t)];
  for (const route of routes) {
    const v = h.render(route);
    assert(v.querySelector('.hold28'), `${route} must be held`);
    assert.match(v.textContent, /Work in progress/);
    assert.equal(v.querySelectorAll('svg,table,canvas,.chart,iframe').length, 0, route);
    assert.equal(h.document.querySelectorAll('.nav [aria-current="page"]').length, 1);
  }
  const gaps = h.render('gaps');
  assert.equal(gaps.querySelectorAll('.node28').length, 9);
  assert.equal(gaps.querySelectorAll('.topic-group28').length, 3);
  assert.equal(gaps.querySelectorAll('.gap-step20').length, 9);
  assert.equal(gaps.querySelectorAll('[data-coverage]').length, 0);
  assert.doesNotMatch(gaps.textContent, /Major gaps|Partial coverage|Stronger coverage/);
  for (const a of gaps.querySelectorAll('.node28')) {
    assert.match(a.getAttribute('aria-label'), /work in progress/);
    assert(topics.includes(a.getAttribute('href').slice(1)));
  }
  for (const p of gaps.querySelectorAll('path')) assert(!/NaN|undefined/.test(p.getAttribute('d')));
  assert.match(gaps.querySelector('.path28:last-of-type').getAttribute('d'), /1115 216$/, 'The final path must meet the neutral outcome node');
  const method = h.render('method');
  assert.match(method.textContent, /Human review is required/);
  assert.match(method.textContent, /additional branch for skills and judgement/);
  assert(!method.querySelector('a[href*="csv"]'));
  assert.equal(h.render('projects').querySelectorAll('[data-listing]').length, 10);
  assert(h.render('projects/grants').querySelector('#projects-grants').scrolled);
  assert.equal(h.render('contribute').querySelectorAll('.submission-list21 a').length, 3);
  for (const route of ['home','projects','contribute','method','gaps']) {
    for (const a of h.render(route).querySelectorAll('a[target="_blank"]')) assert.match(a.getAttribute('rel'), /noopener/);
  }
  assert.doesNotMatch(h.render('home').textContent, /Benchmarks and adoption surveys|biggest gaps|209 times/);
  assert(h.render('futures').querySelector('.projects21'));
  assert(h.render('map').querySelector('.home28'));
  assert(h.render('about').querySelector('.method22'));
  h.render('<img src=x onerror=alert(1)>');
  assert.equal(h.document.querySelectorAll('img[src="x"]').length, 0);
  const next = theme === 'light' ? 'dark' : 'light';
  h.document.querySelector(`[data-theme-choice="${next}"]`).dispatchEvent(new h.Event('click', {bubbles:true}));
  assert.equal(h.document.documentElement.dataset.theme, next);
  assert.equal(h.storage.get('gd-dashboard-theme'), next);
  assert.equal(h.document.querySelectorAll('[data-theme-choice][aria-pressed="true"]').length, 1);
  h.listeners.storage.forEach(fn => fn({key:'gd-dashboard-theme',newValue:null}));
  assert.equal(h.document.documentElement.dataset.theme, 'light');
}
for (const route of ['#skills','#evidence/work','#library?view=map&area=cognition','#review']) {
  const h = harness(route, null, true);
  assert(h.document.querySelector('.hold28'), 'Initial direct links must not flash draft content');
}
assert(harness('#main-content').document.querySelector('#view h1'), 'Reloading a skip-link URL must not leave the page blank');
assert.throws(() => {
  require('node:child_process').execFileSync(process.execPath, ['tools/build-reorganized-preview.js','--publish','--research'], {cwd:root, stdio:'pipe'});
}, 'Research mode must not be publishable');
console.log('Shareable release: held routes, absent draft payloads, diagram, directory, themes and source checks passed.');
