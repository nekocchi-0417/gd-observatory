const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const cssom = require('cssom');
const root = path.resolve(__dirname,'..');
const read = name => cssom.parse(fs.readFileSync(path.join(root,name),'utf8'));
const shell = read('prototypes/reorganized/site-header.css');
const story = read('prototypes/reorganized/home-story.css');
const evidence = read('prototypes/topic-review/evidence.css');
const topic = read('prototypes/topic-review/style.css');

// Inspect explicit breakpoint rules only; this does not simulate browser layout.
function matches(query, {width,height,reduced=false,medium='screen'}) {
  return query.split(',').some(alternative => alternative.trim().split(/\s+and\s+/).every(condition => {
    if (condition === 'print' || condition === 'screen') return condition === medium;
    if (condition === '(prefers-reduced-motion:reduce)' || condition === '(prefers-reduced-motion: reduce)') return reduced;
    const size = condition.match(/^\((min|max)-(width|height):\s*(\d+)px\)$/);
    assert(size,`Unsupported test media query: ${condition}`);
    const actual = size[2] === 'width' ? width : height;
    return size[1] === 'max' ? actual <= Number(size[3]) : actual >= Number(size[3]);
  }));
}
function value(sheet, selector, property, viewport) {
  let result;
  function visit(rules) {
    for (const rule of rules) {
      if (rule.media && matches(rule.media.mediaText,viewport)) visit(rule.cssRules);
      if (rule.selectorText?.split(',').map(s=>s.trim()).includes(selector) && rule.style.getPropertyValue(property)) result = rule.style.getPropertyValue(property);
    }
  }
  visit(sheet.cssRules);
  return result;
}
for (const [width,height] of [[320,568],[375,812],[640,900],[768,1024],[1024,768],[1280,800],[1920,1080],[1024,450]]) {
  const viewport = {width,height};
  assert.equal(value(shell,'.bar .nav','display',viewport),width <= 640 ? 'grid' : 'flex');
  assert.equal(value(shell,':root','--site-gutter',viewport),width <= 360 ? '16px' : width <= 640 ? '24px' : width <= 760 ? '28px' : '40px');
  assert.equal(value(shell,'.bar','position',viewport),height <= 500 ? 'static' : 'sticky');
  assert.equal(value(evidence,'.evidence-pair-grid','grid-template-columns',viewport),width <= 760 ? 'minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,1fr)');
  const staticStory = width <= 760 || height <= 760;
  assert.equal(value(story,'.story-static30','display',viewport),staticStory ? 'block' : 'none');
  if (staticStory) assert.equal(value(story,'.story-track30','display',viewport),'none');
  assert.equal(value(topic,'.page-nav','position',viewport),width <= 760 || height <= 650 ? 'static' : 'sticky');
}
const reduced = {width:1440,height:900,reduced:true};
assert.equal(value(story,'.story-track30','display',reduced),'none');
assert.equal(value(story,'.story-static30','display',reduced),'block');
assert.equal(value(topic,'html','scroll-behavior',reduced),'auto');
const print = {width:1000,height:1200,medium:'print'};
assert.equal(value(shell,'.bar','display',print),'none');
assert.equal(value(story,'.story-static30','display',print),'block');
assert.equal(value(evidence,'.evidence-pair-grid','display',print),'block');
console.log('PASS: CSS parses; breakpoint rules cover eight screen sizes, short windows, reduced motion and print. This is a source-level check, not browser rendering.');
