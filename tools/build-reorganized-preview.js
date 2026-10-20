const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const {buildLibraryView, loadInputs} = require('./build-library-view.js');
const {loadDetailedMaps,buildDetailedMaps} = require('./build-detailed-maps.js');
const {libraryCSV} = require('./library-csv.js');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const args = process.argv.slice(2);
assert(args.length === 0 || (args.length === 1 && args[0] === '--publish'), 'Usage: node tools/build-reorganized-preview.js [--publish]');
const publish = args.includes('--publish');
const {library,mapConfig} = buildDetailedMaps(buildLibraryView(loadInputs()),JSON.parse(read('research/library-map-config.json')),loadDetailedMaps(root));
const saved = file => read('prototypes/reorganized/base/' + path.basename(file));
const between = (source, start, end) => {
  const a = source.indexOf(start), b = source.indexOf(end, a + start.length);
  assert(a >= 0 && b > a, `Missing source boundary: ${start}`);
  return source.slice(a, b);
};

// Keep the accepted historical shell and pages. Import only comparison helpers,
// never the newer router or homepage. Original data files remain unchanged.
const comparison = read('src/comparison.js');
const adoption = read('src/adoption.js');
const adoptionContext = vm.createContext({});
vm.runInContext(adoption.slice(0, adoption.indexOf('\nfunction drawAdoption15')), adoptionContext);
const updatedAdoption = vm.runInContext('ADOPTION7', adoptionContext);
const helpers = [
  read('src/comparison-data.js'),
  `Object.assign(ADOPTION7, ${JSON.stringify(updatedAdoption)});`,
  between(read('src/capability.js'), 'function calendarDate7(', 'function viewCapabilityPilot('),
  between(adoption, 'function drawAdoption15(', 'function viewAdoptionPilot('),
  comparison.slice(0, comparison.indexOf('\nfunction viewHome10(')),
  between(comparison, 'function installWork10(', 'function updateMethod10('),
  `const DIRECTORY21 = ${JSON.stringify(JSON.parse(read('prototypes/reorganized/directory.json'))).replace(/</g, '\\u003c')};`,
  `const LIBRARY_VIEW23 = ${JSON.stringify(library).replace(/</g, '\\u003c')};`,
  `const LIBRARY_MAP23 = ${JSON.stringify(mapConfig).replace(/</g, '\\u003c')};`,
  read('prototypes/reorganized/library.js'),
  read('prototypes/reorganized/topic-research.js'),
  read('prototypes/reorganized/method.js'),
  read('prototypes/reorganized/reorganize.js'),
  read('prototypes/reorganized/appearance.js')
].join('\n');
new vm.Script(helpers, { filename: 'reorganized-preview.js' });
// Preserve new deep links before the historical shell can redirect retired routes.
const themeInit = `const INITIAL_ROUTE23 = (location.hash || '#home').slice(1);\n` + read('prototypes/reorganized/theme-init.js');
new vm.Script(themeInit, { filename: 'theme-init.js' });
const themeControl = `<div class="appearance22" role="group" aria-label="Colour theme">${[['light', 'Light', 'sun'], ['dark', 'Dark', 'moon']].map(([theme, label, icon]) => `<button type="button" data-theme-choice="${theme}" aria-label="${label} mode" aria-pressed="${theme === 'light'}">${read(`prototypes/reorganized/icons/${icon}.svg`)}<span class="theme-tip22" aria-hidden="true">${label} mode</span></button>`).join('')}</div>`;
const html = saved('docs/index.html')
  .replace('<html lang="en-GB">', '<html lang="en-GB" data-theme="light">')
  .replace('<meta charset="utf-8">', () => `<meta charset="utf-8"><script>${themeInit}</script>`)
  .replace('</head>', () => `${publish ? '' : '<meta name="robots" content="noindex,nofollow">'}<meta name="gd-build" content="topic-evidence-maps-2026-10-19"><style>${read('prototypes/reorganized/reorganize.css')}\n${read('prototypes/reorganized/appearance.css')}\n${read('prototypes/reorganized/library.css')}\n${read('prototypes/reorganized/topic-research.css')}</style><!--\nLucide icon licence:\n${read('prototypes/reorganized/icons/LICENSE')}\n--></head>`)
  .replace('</div></header>\n<main', () => `${themeControl}</div></header>\n<main`)
  .replace('</body>', () => `<script>${helpers}</script></body>`);
assert(html.includes('class="appearance22"'), 'Theme control must be in the header');
const output = path.join(root, publish ? 'docs' : 'dist/reorganized-dashboard');
fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(path.join(output, 'index.html'), html);
fs.writeFileSync(path.join(output, 'library-references.csv'), libraryCSV(library));
fs.writeFileSync(path.join(output, 'pdf-source-crosswalk.html'), saved('docs/pdf-source-crosswalk.html'));
if (publish) fs.writeFileSync(path.join(output, '.nojekyll'), '');
console.log(path.join(output, 'index.html'));
