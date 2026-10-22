const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {topicIds} = require('./build-topic-review');
const input = process.argv[2];
assert(input,'Usage: node tools/import-topic-reviews.js <research-output-directory>');
const destination = path.resolve(__dirname,'../research/topic-reviews/2026-10-22');
const files = [...topicIds,'selected-evidence'];
function publicMetadata(value) {
  if (Array.isArray(value)) return value.map(publicMetadata);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value).filter(([key,item]) => !(key.endsWith('Path') && typeof item === 'string' && item.startsWith('/private/tmp/'))).map(([key,item]) => [key,publicMetadata(item)]));
}
for (const id of files) {
  const file = path.join(input,`${id}.json`);
  if (!fs.existsSync(file)) continue;
  const data = publicMetadata(JSON.parse(fs.readFileSync(file,'utf8')));
  for (const source of data.sources || []) {
    if (Array.isArray(source.authors)) source.authors = source.authors.join(', ');
    assert(source.humanReviewed !== true,'AI-assisted extraction cannot confer human review');
  }
  if (data.reviewNotes) data.reviewNotes = data.reviewNotes.filter(note => !/^No (Chrome|browser)|^FutureSearch was not used/i.test(note));
  if (data.overallNotes) data.overallNotes = data.overallNotes.filter(note => !/^No UI, source repository/.test(note));
  fs.writeFileSync(path.join(destination,`${id}.json`),JSON.stringify(data,null,2)+'\n');
  console.log(`Imported ${id}`);
}
