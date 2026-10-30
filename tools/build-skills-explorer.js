const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {header,fonts} = require('./site-shell');
const {analytics} = require('./site-analytics');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root,p),'utf8');
const json = x => JSON.stringify(x).replace(/</g,'\\u003c');
function build(output, {publish=false}={}) {
  const library=require('./network-library.js').load();
  const records=library.records.filter(r=>r.topics.includes('skills'));
  const snapshot=JSON.parse(read('prototypes/paper-network/citations.json'));
  const citations={...snapshot,records:Object.fromEntries(records.filter(r=>snapshot.records[r.id]).map(r=>[r.id,snapshot.records[r.id]]))};
  const data={updated:library.updated,baseUpdated:library.baseUpdated,expansion:library.expansion,records,citations};
  let html=read('prototypes/paper-network/skills.html');
  html=html.replace('<!-- SITE_HEADER -->',()=>header({prefix:'index.html',active:'explorer'})).replace('<!-- SITE_FONTS -->',()=>fonts);
  const replacements={DATA:json(data),'theme-init.js':read('prototypes/reorganized/theme-init.js')};
  for(const name of ['site-header.css','appearance.js'])replacements[name]=read('prototypes/reorganized/'+name);
  for(const name of ['skills.css','concepts.js','skills-model.js','skills.js'])replacements[name]=read('prototypes/paper-network/'+name);
  for(const [name,content]of Object.entries(replacements))html=html.replace('/* INLINE:'+name+' */',()=>content);
  if(publish)html=html.replace('<meta name="robots" content="noindex,nofollow">','');
  html=html.replace('</body>',()=>analytics({publish})+'</body>');
  for(const [,s]of html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(s);
  fs.mkdirSync(output,{recursive:true});fs.writeFileSync(path.join(output,'skills.html'),html);
  console.log(`Skills explorer: ${records.length} references; ${Object.keys(citations.records).length} citation counts; library ${library.updated}`);
}
module.exports={build};
