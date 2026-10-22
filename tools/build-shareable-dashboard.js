const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const {header} = require('./site-shell');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const between = (source, start, end) => {
  const a = source.indexOf(start), b = source.indexOf(end, a + start.length);
  assert(a >= 0 && b > a, `Missing source boundary: ${start}`);
  return source.slice(a, b);
};

function build({publish = false} = {}) {
  const base = read('prototypes/reorganized/base/index.html');
  const copyContext = vm.createContext({});
  vm.runInContext(read('src/copy.js'), copyContext);
  const contributionButtons = vm.runInContext('COPY.why.contribute.buttons', copyContext);
  const serialise = value => JSON.stringify(value).replace(/</g, '\\u003c');
  // Only aggregate shared-source counts are needed for the homepage story.
  const library = require('./network-library.js').load();
  fs.mkdirSync(path.join(root,'dist'),{recursive:true});
  fs.writeFileSync(path.join(root,'dist/network-library.json'),JSON.stringify(library));
  assert(Array.isArray(library.records), 'Library snapshot must contain records');
  const topicIds = new Set(['capability','adoption','handover','work','share','skills','culture','institutions','influence']);
  const pairs = new Map();
  for (const r of library.records) {
    assert(Array.isArray(r.topics) && r.topics.every(id => topicIds.has(id)), `Review new topic mappings for ${r.id} before publishing`);
    const topics = [...new Set(r.topics)].sort();
    topics.forEach((a, i) => topics.slice(i + 1).forEach(b => {
      const id = a + '/' + b; pairs.set(id, (pairs.get(id) || 0) + 1);
    }));
  }
  const script = [
    `const STORY_ICONS31 = ${serialise(Object.fromEntries(['play','pause','chevron-left','chevron-right','rotate-ccw','book-open'].map(name=>[name,read(`prototypes/reorganized/icons/${name}.svg`)])))};`,
    `const HOME_NETWORK30 = ${serialise({updated:library.updated,pairs:[...pairs].map(([id,count])=>{const [a,b]=id.split('/');return {a,b,count};})})};`,
    `const DIRECTORY21 = ${serialise(JSON.parse(read('prototypes/reorganized/directory.json')))};`,
    `const COPY = ${serialise({why: {contribute: {buttons: contributionButtons}}})};`,
    between(read('src/components.js'), 'const GEO5=', 'const activeSeg5='),
    between(read('prototypes/reorganized/reorganize.js'), 'function directoryDate21(', 'viewSourceMethod = viewMethod22;'),
    read('prototypes/reorganized/home-story.js'),
    read('prototypes/reorganized/shareable.js'),
    read('prototypes/reorganized/appearance.js')
  ].join('\n');
  new vm.Script(script, {filename: 'shareable-dashboard.js'});
  const head = base.slice(0, base.indexOf('</head>'))
    .replace('<html lang="en-GB">', '<html lang="en-GB" data-theme="light">')
    .replace('<meta charset="utf-8">', () => `<meta charset="utf-8"><script>${read('prototypes/reorganized/theme-init.js')}</script>`)
    .replace(/<meta name="description"[^>]+>/, '<meta name="description" content="Explore how AI-related harms could interact, how different disciplines measure them, and how the Skills and judgement literature connects.">');
  const html = `${head}
${publish ? '' : '<meta name="robots" content="noindex,nofollow">'}
<meta name="gd-build" content="topic-review-2026-10-22">
<style>${read('prototypes/reorganized/reorganize.css')}\n${read('prototypes/reorganized/appearance.css')}\n${read('prototypes/reorganized/shareable.css')}\n${read('prototypes/reorganized/home-story.css')}\n${read('prototypes/reorganized/site-header.css')}</style>
<!-- Lucide icon licence:\n${read('prototypes/reorganized/icons/LICENSE')} -->
</head><body>
<a class="skip28" href="#main-content">Skip to content</a>
${header()}
<main id="view" tabindex="-1"></main>
<noscript><div class="wrap view5"><h1>Gradual Disempowerment Dashboard</h1><p>This research prototype needs JavaScript to display its topic reviews and charts.</p><p><a href="https://gradual-disempowerment.ai/">Read the original gradual disempowerment paper</a></p></div></noscript>
<footer class="ft"><div class="wrap"><span><b>Gradual Disempowerment Dashboard</b> · Better Futures Project · Zhang Yue</span><span>Research prototype · <a href="#method">Method</a></span></div></footer>
<script>${script}</script></body></html>`;
  const output = path.join(root, publish ? 'docs' : 'dist/reorganized-dashboard');
  fs.mkdirSync(output, {recursive: true});
  require('./build-topic-review.js').build({output: path.join(output,'topics')});
  fs.writeFileSync(path.join(output, 'index.html'), html);
  require('./build-skills-explorer.js').build(output, {publish});
  // Retired direct downloads must not continue exposing the held bibliography.
  fs.rmSync(path.join(output, 'library-references.csv'), {force: true});
  fs.writeFileSync(path.join(output, 'pdf-source-crosswalk.html'), '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Evidence library | Work in progress</title><body style="font-family:Arial,sans-serif;line-height:1.6;margin:48px auto;padding:0 24px;max-width:640px"><main><p>Work in progress</p><h1>Evidence library</h1><p>The source list is being reviewed before publication.</p><a href="index.html#home">Return to the dashboard</a></main></body></html>');
  if (publish) fs.writeFileSync(path.join(output, '.nojekyll'), '');
  console.log(path.join(output, 'index.html'));
}

module.exports = {build};
