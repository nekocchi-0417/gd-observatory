// Bibliography-only overlay: retain stable IDs and original records, add explicit
// topic/related-topic assignments from the separate October research expansion.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const canonical=require('../src/library-url.js');
const root=path.resolve(__dirname,'..'),reviewDate='2026-10-22';
const norm=s=>String(s||'').normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const authorWords=s=>new Set(norm(s).split(' ').filter(t=>/^[a-z]{3,}$/.test(t)&&!['the','and','etal','report','study','team'].includes(t)));
const allowed=new Set(['capability','adoption','handover','work','share','skills','culture','institutions','influence']);
function load(){
 const base=JSON.parse(fs.readFileSync(path.join(root,'src/library-view-data.json'),'utf8'));
 const records=structuredClone(base.records),byURL=new Map(records.map(r=>[canonical(r.url),r]));
 const directory=path.join(root,'research/topic-reviews',reviewDate);let detailedRecords=0,added=0,matched=0,bibliographicMatches=0;
 if(fs.existsSync(directory))for(const topic of [...allowed].filter(t=>t!=='skills')){
  const file=path.join(directory,topic+'.json');if(!fs.existsSync(file))continue;
  const review=JSON.parse(fs.readFileSync(file,'utf8'));assert.equal(review.topicId,topic);
  for(const source of review.sources){
   const url=canonical(source.url);assert(url,'Invalid source URL: '+source.id);
   const topics=[topic,...(source.relatedTopics||[])];assert(topics.every(t=>allowed.has(t)),'Unknown review topic');
   let record=byURL.get(url),identityMethod='Canonical URL';
   if(!record){const authors=authorWords(source.authors),candidates=records.filter(r=>norm(r.title)===norm(source.title)&&Number(r.year)===source.year&&[...authorWords(r.citation)].some(a=>authors.has(a)));if(candidates.length===1){record=candidates[0];identityMethod='Exact title, publication year and named-author overlap';bibliographicMatches++;(record.alternateURLs||=[]).push(url);byURL.set(url,record);}}
   if(record)matched++;else{added++;record={id:'ref:'+crypto.createHash('sha256').update(url).digest('hex').slice(0,16),title:source.title,citation:source.authors+' · '+source.year,url,year:source.year,kind:source.kind,topics:[],landscape:[],provenance:[]};records.push(record);byURL.set(url,record);}
   record.topics=[...new Set([...record.topics,...topics])];
   (record.topicReviews||=[]).push({topic,sourceId:source.id,url,identityMethod,checkedOn:source.checkedOn,access:source.status,note:source.sourceNote});detailedRecords++;
  }
 }
 assert.equal(new Set(records.map(r=>r.id)).size,records.length,'Source identity collision');
 return {schemaVersion:1,updated:detailedRecords?reviewDate:base.updated,baseUpdated:base.updated,records,expansion:{date:reviewDate,detailedRecords,added,matched,bibliographicMatches}};
}
module.exports={load};
