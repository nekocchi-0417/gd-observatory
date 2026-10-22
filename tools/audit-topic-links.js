const fs = require('node:fs');
const path = require('node:path');
const {loadReviews} = require('./build-topic-review');
const root = path.resolve(__dirname,'..');
const reviews = loadReviews();
const refs = new Map();
for (const [topic,review] of Object.entries(reviews)) for (const source of review.sources) {
  if (!refs.has(source.url)) refs.set(source.url,[]);
  refs.get(source.url).push(`${topic}/${source.id}`);
}
const selectedPath = path.join(root,'research/topic-reviews/2026-10-22/selected-evidence.json');
if (fs.existsSync(selectedPath)) for (const panel of JSON.parse(fs.readFileSync(selectedPath,'utf8')).panels) {
  for (const url of [panel.url,panel.dataURL].filter(Boolean)) {
    if (!refs.has(url)) refs.set(url,[]);
    refs.get(url).push(`selected-evidence/${panel.id}`);
  }
}
const output = path.join(root,'research/topic-reviews/2026-10-22/link-audit.json');
const audit = {checkedAt:new Date().toISOString(),method:'Sequential HTTP HEAD requests, followed by GET only for servers refusing HEAD. Accessibility checks do not verify source content or claims.',results:[]};
async function main() {
  for (const [url,sources] of refs) {
    let result;
    try {
      let response = await fetch(url,{method:'HEAD',redirect:'follow',signal:AbortSignal.timeout(10000)});
      if ([405,501].includes(response.status)) response = await fetch(url,{redirect:'follow',signal:AbortSignal.timeout(10000)});
      result = {url,sources,status:response.status,finalURL:response.url,result:response.ok ? 'reachable' : [404,410].includes(response.status) ? 'needs-link-review' : 'access-not-confirmed'};
      if (response.body) await response.body.cancel();
    } catch (error) { result = {url,sources,result:'access-not-confirmed',error:error.name}; }
    audit.results.push(result);
    if (audit.results.length % 20 === 0) console.log(`${audit.results.length}/${refs.size} links checked`);
    await new Promise(resolve => setTimeout(resolve,150));
  }
  audit.summary = Object.fromEntries(['reachable','needs-link-review','access-not-confirmed'].map(key => [key,audit.results.filter(result => result.result === key).length]));
  fs.writeFileSync(output,JSON.stringify(audit,null,2)+'\n');
  console.log(JSON.stringify(audit.summary));
}
main().catch(error => { console.error(error);process.exitCode=1; });
