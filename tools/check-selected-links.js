const {spawnSync}=require('node:child_process');
const fs=require('node:fs');
const topics=require('../src/selected-topics.json');
const selected=require('../src/priority.json');
const urls=new Set();
Object.values(selected).forEach(t=>t.sources.forEach(s=>{urls.add(s.url);if(s.paper)urls.add(s.paper)}));
Object.values(topics).forEach(t=>{t.support.concat(t.related).forEach(s=>urls.add(s.url));if(t.dataUrl)urls.add(t.dataUrl)});
const rows=[];
for(const url of urls){
 const r=spawnSync('curl',['-L','-s','--max-time','15','-I','-o','/dev/null','-w','%{http_code} %{url_effective}',url],{encoding:'utf8'});
 const status=Number(r.stdout.slice(0,3));
 const result=status>=200&&status<400?'reachable':status===403||status===429?'access-restricted':status===405?'HEAD-not-supported':status===0?'inconclusive':'needs-review';
 const row={url,status,result,final_url:r.stdout.slice(4).trim()};rows.push(row);console.log(JSON.stringify(row));
}
if(process.env.LINK_REPORT)fs.writeFileSync(process.env.LINK_REPORT,JSON.stringify({checked:'2026-10-14',method:'Redirect-following HEAD; reachability is not claim verification',links:rows},null,2)+'\n');
if(rows.some(r=>r.result==='needs-review'))process.exitCode=1;
