(function(root){
const defaults=[
 ['offloading','Cognitive offloading','Moving cognitive work from people to an external tool.',['handover','skills'],['cognitive offloading','offloading','cognitive surrender']],
 ['reliance','Reliance and dependence','Relying on AI advice or becoming dependent on its availability.',['handover','skills'],['reliance','overreliance','dependence','dependency','withdrawal']],
 ['bias','Automation bias','Accepting automated recommendations without sufficient evaluation.',['handover','skills'],['automation bias','selective adherence','verification']],
 ['retention','Skill formation and retention','Learning, maintaining or losing the ability to perform a task.',['skills'],['skill formation','skill retention','deskilling','learning','retention','unaided']],
 ['judgement','Independent judgement','Evaluating information or reaching decisions independently.',['skills','influence'],['critical thinking','judgment','judgement','reasoning','decision making']],
 ['agency','Agency and control','Practical ability to direct, refuse or change decisions and actions.',['handover','influence'],['human agency','autonomy','human control','sense of agency','ownership','disempowerment']],
 ['oversight','Oversight and discretion','Monitoring, checking or overriding automated actions.',['handover','institutions'],['human oversight','human discretion','override','contestability','human in the loop']],
 ['performance','Assisted performance','Task outcomes while people have access to AI assistance.',['handover','skills'],['performance','productivity','accuracy','task completion']]
].map(([id,label,definition,nodes,terms])=>({id,label,definition,nodes,terms}));
const norm=s=>String(s||'').normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
function validateRules(input){
 if(!Array.isArray(input)||input.length!==defaults.length)throw Error('Expected all eight concept definitions.');
 return defaults.map(d=>{const r=input.find(r=>r.id===d.id);if(!r||!Array.isArray(r.terms)||r.terms.length>80||r.terms.some(t=>typeof t!=='string'||!norm(t)||t.length>100))throw Error('Invalid keyword list for '+d.label);return {...d,terms:[...new Set(r.terms.map(t=>t.trim()).filter(Boolean))]};});
}
function match(r,rules){const fields=[['title',r.title],['catalog metadata',(r.landscape||[]).flatMap(c=>[...(c.constructs||[]),c.domain||'']).join(' ')]];return rules.flatMap(c=>{const hits=c.terms.flatMap(term=>fields.filter(([,text])=>(' '+norm(text)+' ').includes(' '+norm(term)+' ')).map(([field])=>({term,field})));return hits.length?[{id:c.id,hits}]:[];});}
const outcomes=['assisted','unaided','retention','agency','other','unknown'],durations=['immediate','days','weeks','months','unknown'];
function validateReview(v){
 if(!v||typeof v!=='object'||Array.isArray(v))throw Error('Invalid review.');
 const x={};for(const k of ['population','design','duration','outcome','note','quote','locator']){if(typeof v[k]!=='string'||v[k].length>5000)throw Error('Invalid review field: '+k);x[k]=v[k];}
 if(!outcomes.includes(x.outcome)||!durations.includes(x.duration)||!['unreviewed','checked','excluded'].includes(v.status))throw Error('Invalid review classification.');
 if(v.status==='checked'&&(!x.quote.trim()||!x.locator.trim()))throw Error('Add a source excerpt and page/section before marking checked.');
 return {...x,status:v.status};
}
const api={defaults,norm,match,validateRules,validateReview,outcomes,durations};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.GDConcepts=api;
})(typeof window!=='undefined'?window:globalThis);
