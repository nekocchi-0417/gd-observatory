const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const {createHash} = require('node:crypto');
const {parseHTML} = require('linkedom');
const {header,fonts} = require('./site-shell');
const {analytics} = require('./site-analytics');
const root = path.resolve(__dirname, '..');
const topicIds = ['capability','adoption','handover','work','share','culture','institutions','influence'];
const date = '2026-10-22';
const researchDirectory = path.join(root, 'research/topic-reviews', date);
const templateDirectory = path.join(root, 'prototypes/topic-review');

function loadReviews() {
  const reviews = {};
  for (const id of topicIds) {
    const review = JSON.parse(fs.readFileSync(path.join(researchDirectory, `${id}.json`), 'utf8'));
    assert.equal(review.topicId,id);
    for (const key of ['name','question','synthesis']) assert.equal(typeof review[key],'string',`${id}: ${key}`);
    for (const key of ['facets','sources','gaps','searchLog','exclusions','reviewNotes']) assert(Array.isArray(review[key]),`${id}: ${key}`);
    assert(review.facets.length >= 4 && review.facets.length <= 6,`${id}: 4-6 research facets`);
    const facets = new Set(review.facets.map(facet => facet.id));
    assert.equal(facets.size,review.facets.length);
    const sources = new Set();
    for (const source of review.sources) {
      assert(!sources.has(source.id),`${id}: duplicate ID ${source.id}`);
      sources.add(source.id);
      assert.match(source.id,/^[a-z0-9-]+$/);
      for (const key of ['title','authors','publisher','design','population','geography','duration','measure','finding','limitations','locator','sourceNote','searchOrigin']) {
        assert.equal(typeof source[key],'string',`${id}/${source.id}: ${key}`);
        assert(source[key].trim(),`${id}/${source.id}: empty ${key}`);
      }
      assert(['series','study','review','proposal','framework'].includes(source.kind));
      assert(['repeated','longitudinal','snapshot','none'].includes(source.temporal));
      assert(['primary-fulltext','primary-summary','primary-abstract'].includes(source.status));
      assert.equal(source.checkedOn,date);
      assert(Number.isInteger(source.year) && source.year >= 1900 && source.year <= 2026);
      assert(['http:','https:'].includes(new URL(source.url).protocol));
      assert.doesNotMatch(source.url,/futuresearch/i);
      assert(source.facets.length > 0 && source.facets.every(facet => facets.has(facet)));
      if (source.selected) {
        assert(source.headline && source.selectionReason);
      }
    }
    assert(review.sources.filter(source => source.selected).length >= 3,`${id}: selected sources`);
    assert(review.sources.filter(source => source.selected).length <= 5,`${id}: keep shortlist readable`);
    assert(review.searchLog.length > 0,`${id}: search provenance`);
    for (const gap of review.gaps) {
      assert(gap.title && gap.summary && gap.basis && gap.next && gap.scope);
      assert.equal(gap.confidence,'provisional');
      assert(gap.refs.length >= 2 && gap.refs.every(ref => sources.has(ref)),`${id}: gap references ${gap.title}`);
    }
    reviews[id] = review;
  }
  return reviews;
}

function build({output = 'dist/topic-review', publish = false} = {}) {
  const reviews = loadReviews();
  const copy = JSON.parse(fs.readFileSync(path.join(researchDirectory,'page-copy.json'),'utf8'));
  for (const [id,edits] of Object.entries(copy)) {
    assert(reviews[id],`Unknown topic copy: ${id}`);
    reviews[id].pageSynthesis = edits.synthesis;
    for (const [sourceId,fields] of Object.entries(edits.sources || {})) {
      const source = reviews[id].sources.find(source => source.id === sourceId);
      assert(source,`Unknown source copy: ${id}/${sourceId}`);
      if (fields.headline) source.pageHeadline = fields.headline;
      if (fields.finding) source.pageFinding = fields.finding;
    }
  }
  const destination = path.resolve(root,output);
  fs.mkdirSync(destination,{recursive:true});
  const files = ['index.html','topics.html','library.html','app.js','runtime.js','style.css','data.js','landscape.js','collections.js','topics.js','evidence.html','evidence.css','evidence.js','ICON-LICENSE.txt'];
  for (const file of files) fs.copyFileSync(path.join(templateDirectory,file),path.join(destination,file));
  for (const file of ['theme-init.js','appearance.js','site-header.css']) fs.copyFileSync(path.join(root,'prototypes/reorganized',file),path.join(destination,file));
  const script = `'use strict';\nconst GD_EXPANSION = ${JSON.stringify(reviews).replace(/</g,'\\u003c')};\n`;
  new vm.Script(script,{filename:'research.js'});
  fs.writeFileSync(path.join(destination,'research.js'),script);
  const selected = JSON.parse(fs.readFileSync(path.join(researchDirectory,'selected-evidence.json'),'utf8'));
  assert.equal(selected.panels.length,6);
  assert(selected.panels.every(panel => panel.status === 'ready' && panel.humanReviewed === false && panel.chart.data.length > 0));
  fs.writeFileSync(path.join(destination,'selected-evidence.js'),`'use strict';\nconst GD_SELECTED_EVIDENCE = ${JSON.stringify(selected).replace(/</g,'\\u003c')};\n`);
  fs.copyFileSync(path.join(root,'src/charts.js'),path.join(destination,'charts.js'));
  fs.mkdirSync(path.join(destination,'research'),{recursive:true});
  for (const id of topicIds) fs.copyFileSync(path.join(researchDirectory,`${id}.json`),path.join(destination,'research',`${id}.json`));
  fs.copyFileSync(path.join(researchDirectory,'selected-evidence.json'),path.join(destination,'research/selected-evidence.json'));
  for (const file of ['index.html','topics.html','library.html','evidence.html']) {
    const {document} = parseHTML(fs.readFileSync(path.join(destination,file),'utf8'));
    document.querySelector('header.site-header').outerHTML = header({prefix:'../index.html',active:file === 'evidence.html' ? 'evidence' : 'gaps'});
    document.querySelector('link[rel="stylesheet"]').insertAdjacentHTML('beforebegin',`<script src="theme-init.js"></script>${fonts}`);
    document.head.insertAdjacentHTML('beforeend','<link rel="stylesheet" href="site-header.css"><script src="appearance.js" defer></script>');
    // Keep a cached old runtime from loading against a newly deployed header.
    for (const tag of document.querySelectorAll('script[src],link[rel="stylesheet"]')) {
      const attribute = tag.localName === 'script' ? 'src' : 'href', asset = tag.getAttribute(attribute);
      if (asset.startsWith('https://')) continue;
      const hash = createHash('sha256').update(fs.readFileSync(path.join(destination,asset))).digest('hex').slice(0,12);
      tag.setAttribute(attribute,`${asset}?v=${hash}`);
    }
    document.body.insertAdjacentHTML('beforeend',analytics({publish}));
    fs.writeFileSync(path.join(destination,file),document.toString());
  }
  return {destination,reviews};
}

if (require.main === module) console.log(build().destination);
module.exports = {build,loadReviews,topicIds};
