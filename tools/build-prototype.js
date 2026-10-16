// A separate, self-contained preview. Never writes the GitHub Pages build.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, 'src', name), 'utf8');
const css = ['style.css', 'components.css', 'pages.css', 'review.css', 'comparison.css'].map(read).join('\n');
const data = [['SELECTED_EVIDENCE', 'priority.json'], ['TOPIC_CHARTS', 'selected-topics.json'], ['WORK_SERIES', 'work-series.json']]
  .map(([name, file]) => `const ${name} = ${read(file)};`).join('\n');
const js = ['charts.js', 'data1.js', 'data2.js', 'data3.js', 'signals.js', 'copy.js'].map(read).join('\n') + '\n' + data + '\n' +
  ['app.js', 'components.js', 'views.js', 'review.js', 'capability.js', 'adoption.js', 'topics.js', 'comparison-data.js', 'comparison.js'].map(read).join('\n');
const html = `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="description" content="Local prototype of the Gradual Disempowerment Dashboard.">${read('shell_head.html')}<style>${css}</style></head><body>${read('shell_body.html')}<script>${js}\nrender((location.hash||'#home').slice(1));initCaveats5();</script></body></html>`;
const out = path.join(root, 'dist', 'prototype', 'index.html');
fs.mkdirSync(path.dirname(out), {recursive: true});
fs.writeFileSync(out, html);
console.log(`Built local-only prototype: ${out}`);
