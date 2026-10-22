/* Pure query and graph logic; shared by the browser and regression checks. */
(function(root){
const C=typeof module!=='undefined'&&module.exports?require('./concepts.js'):root.GDConcepts;
const areas=[['capability','AI capability'],['adoption','AI adoption'],['handover','Delegation to AI'],['work','Entry-level jobs'],['share','Workers’ share of income'],['skills','Skills and judgement'],['culture','Culture and information'],['institutions','AI in government'],['influence','Human influence']].map(([id,label])=>({id,label}));
const defaults={q:'',collection:'all',concept:'',connection:'',area:'',area2:'',review:'all',from:'',to:'',cites:'',unknown:'include',sort:'relevance',view:'concepts',size:'citations',paper:''};
const isRetracted=r=>/\bretract(?:ed|ion)\b/i.test(r.title+' '+r.citation);
const citation=(r,data)=>{const n=data.records[r.id]?.count;return Number.isInteger(n)&&n>=0?n:null;};
function readQuery(search){const p=new URLSearchParams(search),s={...defaults};for(const k of Object.keys(s))if(p.has(k))s[k]=p.get(k).slice(0,300);for(const [k,values]of Object.entries({collection:['all','queue'],review:['all','unreviewed','checked','excluded'],unknown:['include','exclude'],sort:['relevance','citations','newest'],view:['concepts','areas'],size:['citations','equal']}))if(!values.includes(s[k]))s[k]=defaults[k];for(const k of ['concept','connection'])if(!C.defaults.some(c=>c.id===s[k]))s[k]='';for(const k of ['area','area2'])if(!areas.some(a=>a.id===s[k]))s[k]='';for(const k of ['from','to','cites'])if(s[k]&&!/^\d{1,6}$/.test(s[k]))s[k]='';if(s.concept===s.connection)s.connection='';return s;}
function query(s){const p=new URLSearchParams();for(const k of Object.keys(defaults))if(s[k]!==defaults[k]&&s[k]!==undefined)p.set(k,s[k]);return p.toString();}
function select(records,s,{matches,reviews={},queue=[],citations}){
 const words=C.norm(s.q).split(' ').filter(Boolean),ids=new Set(queue);
 return records.filter(r=>{
  const n=citation(r,citations),ms=matches(r).map(m=>m.id),status=reviews[r.id]?.status||'unreviewed';
  return (s.collection==='all'||ids.has(r.id))&&words.every(w=>C.norm(r.title+' '+r.citation).includes(w))&&(!s.concept||ms.includes(s.concept))&&(!s.connection||ms.includes(s.connection))&&(!s.area||r.topics.includes(s.area))&&(!s.area2||r.topics.includes(s.area2))&&(s.review==='all'||s.review===status)&&(!s.from||(r.year&&Number(r.year)>=Number(s.from)))&&(!s.to||(r.year&&Number(r.year)<=Number(s.to)))&&(n===null?s.unknown==='include':(!s.cites||n>=Number(s.cites)));
 }).sort((a,b)=>{
  if(s.sort==='citations'){const d=(citation(b,citations)??-1)-(citation(a,citations)??-1);if(d)return d;}
  if(s.sort==='newest'){const d=(Number(b.year)||0)-(Number(a.year)||0);if(d)return d;}
  return matches(b).length-matches(a).length||a.id.localeCompare(b.id);
 });
}
function pairs(records,idsFor){const out=new Map();for(const r of records){const ids=[...new Set(idsFor(r))].sort();ids.forEach((a,i)=>ids.slice(i+1).forEach(b=>{const key=a+'/'+b;if(!out.has(key))out.set(key,{a,b,ids:[]});out.get(key).ids.push(r.id);}));}return [...out.values()].sort((a,b)=>b.ids.length-a.ids.length||a.a.localeCompare(b.a));}
function radius(n,mode){return mode==='equal'?6:n===null?5:5+Math.min(9,Math.sqrt(Math.log1p(n))*3);}
const api={areas,defaults,isRetracted,citation,readQuery,query,select,pairs,radius};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.GDSkills=api;
})(typeof window!=='undefined'?window:globalThis);
