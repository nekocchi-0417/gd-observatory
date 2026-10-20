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
const target = process.argv[2] || 'dist/reorganized-dashboard/index.html';
const html = fs.readFileSync(path.join(root, target), 'utf8');
if (target === 'docs/index.html') assert(!html.includes('noindex,nofollow'), 'Public build must be indexable');
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(match => match[1]);
assert.equal(scripts.length, 3);
assert(html.indexOf('gd-dashboard-theme') < html.indexOf('<style>'), 'Theme preference loads before first paint');
scripts.forEach((script, i) => new vm.Script(script, { filename: 'preview:' + i }));

// DOM/source tests only. Linkedom does not lay out, render or open the local site.
function harness(width, { savedTheme = null, storageBlocked = false } = {}) {
  const { document, HTMLElement, Element, Event } = parseHTML(html);
  const callbacks = [];
  const listeners = {};
  document.fonts = { ready: Promise.resolve() };
  Element.prototype.scrollIntoView = function() { this.scrolled = true; };
  Element.prototype.scrollTo = function() {};
  Element.prototype.getBoundingClientRect = () => ({ left: 0, top: 0, width, height: 300 });
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', { configurable: true, get: () => width });
  const location = { hash: '#home' };
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

for (const theme of ['light', 'dark']) {
for (const width of [600, 335]) {
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
  assert.equal(v.querySelectorAll('.matrix-cell20').length, 4);
  const stepLinks = [...v.querySelectorAll('.gap-step20')].map(a => a.getAttribute('href'));
  assert.equal(new Set(stepLinks).size, 9);
  assert.equal(stepLinks.length, 9);
  assert.equal(v.querySelector('[data-group="near-limited"] a').getAttribute('href'), '#influence');
  assert.equal(v.querySelector('[data-group="near-stronger"] a').getAttribute('href'), '#share');
  assert.equal(v.querySelector('[data-group="earlier-stronger"] a').getAttribute('href'), '#adoption');
  assert.match(v.textContent, /does not estimate the size of an effect/);

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
  assert.equal(v.querySelector('#skills-source').open, true);
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
  assert.match(v.textContent, /2x2/);
  assert.match(v.textContent, /Graph distance is a navigation rule/);
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
}
}
const blocked = harness(335, { storageBlocked: true });
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
}
console.log('PASS: historical home, six visuals, chart keyboard events, nine steps in four groups, topic/source routes and Methods references.');
console.log('PASS: six projects, four grants, three submission links, legacy redirects, expired-deadline handling and Method last in navigation.');
console.log('PASS: generated SVG geometry at widths 600 and 335, with source values preserved.');
console.log('PASS: light/dark controls, saved preferences, blocked-storage fallback, and no route/chart/disclosure reset on theme change.');
console.log('PASS: palette text contrast >= 4.5:1 and main chart/diagram colours >= 3:1 in both modes.');
console.log('Not tested: actual browser layout, CSS overflow, pointer positioning or current remote link availability.');
