'use strict';
const $ = id => document.getElementById(id);
const esc = v => String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const records = CATALOG.records;
const names = Object.fromEntries(PaperNodes.nodes.map(n=>[n.id,n.label]));
const KEY = 'gd-paper-node-review-v1';
let decisions = {}, page = 1, selected = null, storageOK = true;
function validate(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Expected a decisions object.');
  const ids = new Set(records.map(r=>r.id)), clean = {};
  for (const [id, choices] of Object.entries(value)) {
    if (!ids.has(id) || !choices || typeof choices !== 'object' || Array.isArray(choices)) throw new Error('Unknown reference or invalid decisions.');
    clean[id] = {};
    for (const [node, status] of Object.entries(choices)) {
      if (!Object.hasOwn(names,node) || !['keep','remove'].includes(status)) throw new Error('Unknown node or review status.');
      clean[id][node] = status;
    }
  }
  return clean;
}
try { decisions = validate(JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (_) { storageOK = false; }
function save() {
  try { localStorage.setItem(KEY,JSON.stringify(decisions)); storageOK=true; } catch (_) { storageOK=false; }
  $('storage-status').textContent = storageOK ? 'Review decisions stay in this browser. Export a copy to share or preserve your work.' : 'Browser storage is unavailable or invalid. Current decisions are in memory; export them before leaving.';
}
function getLinks(r) {
  return PaperNodes.links(r, decisions).filter(l => $('mode').value === 'existing' ? l.status !== 'keyword suggestion' : $('mode').value === 'suggestions' ? l.status === 'keyword suggestion' : true);
}
function filtered() {
  const query = PaperNodes.normalize($('search').value).split(' ').filter(Boolean), node = $('node').value;
  return records.filter(r => {
    const text = PaperNodes.normalize(r.title+' '+r.citation);
    if (!query.every(t=>text.includes(t))) return false;
    if ($('mode').value === 'unmatched' && PaperNodes.matches(r).length) return false;
    const links = getLinks(r);
    if ($('mode').value === 'suggestions' && !links.length) return false;
    return !node || links.some(l=>l.node===node);
  });
}
const tag = l => `<span class="tag ${l.status==='keyword suggestion'?'suggested':l.status==='accepted locally'?'accepted':''}" title="${esc(l.status)}">${esc(names[l.node])} · ${l.status==='keyword suggestion'?'suggested':l.status==='accepted locally'?'accepted':'existing'}</span>`;
function detail() {
  const r = records.find(r=>r.id===selected);
  if (!r) return;
  const links = PaperNodes.links(r,decisions), matches = PaperNodes.matches(r);
  $('detail').innerHTML = `<p class="eyebrow">REFERENCE DETAILS</p><h2>${esc(r.title)}</h2><p>${esc(r.citation)} · ${r.year} · ${esc(r.kind)}</p><p><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">Open original source ↗</a></p><p>${links.map(tag).join('') || 'No active node links.'}</p><h3>Review connections</h3>${PaperNodes.nodes.filter(n=>links.some(l=>l.node===n.id)||decisions[r.id]?.[n.id]).map(n=>{
    const match=matches.find(m=>m.node===n.id), link=links.find(l=>l.node===n.id);
    return `<div class="decision"><strong>${esc(n.label)}</strong><p>${esc(link?.status || 'removed locally')}${r.topics.includes(n.id)?' · present in source catalog':''}</p><p>${match ? match.hits.map(h=>`“${esc(h.term)}” (${esc(h.field)})`).join('; ') : 'No matching keyword; this link comes from the source catalog or your review.'}</p><button data-decision="keep" data-node="${n.id}">Accept</button><button data-decision="remove" data-node="${n.id}">Remove</button>${decisions[r.id]?.[n.id]?`<button data-decision="undo" data-node="${n.id}">Undo review</button>`:''}</div>`;
  }).join('')}<label>Add a node manually<select id="manual"><option value="">Choose a node…</option>${PaperNodes.nodes.filter(n=>!links.some(l=>l.node===n.id)).map(n=>`<option value="${n.id}">${esc(n.label)}</option>`).join('')}</select></label><details><summary>Source records</summary>${r.provenance.map(p=>`<p>${esc(p.collection)} · ${esc(p.sourceId)}</p>`).join('')}</details>`;
}
function graph(rows) {
  const focus=$('node').value, limit=48;
  // Rank bridges first, with stable title ordering; never imply a random sample.
  const ranked=[...rows].sort((a,b)=>getLinks(b).length-getLinks(a).length || a.title.localeCompare(b.title));
  const visible=ranked.filter(r=>getLinks(r).length).slice(0,limit), points={};
  PaperNodes.nodes.forEach((n,i)=>{const a=-Math.PI/2+i*2*Math.PI/9;points[n.id]=[470+330*Math.cos(a),320+250*Math.sin(a)];});
  const paths=[], dots=[];
  visible.forEach((r,i)=>{
    const ls=getLinks(r), connected=ls.map(l=>points[l.node]);
    const a=i*2.399963, x=470+Math.cos(a)*(65+Math.sqrt(i)*17), y=320+Math.sin(a)*(55+Math.sqrt(i)*15);
    ls.forEach((l,j)=>paths.push(`<line x1="${x}" y1="${y}" x2="${connected[j][0]}" y2="${connected[j][1]}" stroke="${l.node===focus?'#2b7755':'#a3b6a7'}" stroke-width="1" opacity=".55" ${l.status==='keyword suggestion'?'stroke-dasharray="4 5"':''}/>`));
    dots.push(`<g class="paper-dot" data-ref="${esc(r.id)}"><title>${esc(r.title)}</title><circle cx="${x}" cy="${y}" r="12" fill="transparent"/><circle cx="${x}" cy="${y}" r="${selected===r.id?7:4.5}" fill="${selected===r.id?'#aa5c27':'#365f4c'}"/></g>`);
  });
  $('graph').innerHTML=paths.join('')+PaperNodes.nodes.map(n=>{const [x,y]=points[n.id], count=rows.filter(r=>getLinks(r).some(l=>l.node===n.id)).length;return `<g class="topic" data-focus="${n.id}"><title>${esc(n.label)}: ${count} matching references</title><circle cx="${x}" cy="${y}" r="${focus===n.id?16:11}" fill="${focus===n.id?'#b05e28':'#2c6a50'}"/><text x="${x}" y="${y-24}" text-anchor="middle">${esc(n.label)}</text><text x="${x}" y="${y+34}" text-anchor="middle">${count}</text></g>`;}).join('')+dots.join('');
  $('graph-count').textContent=`${visible.length} of ${rows.length} references shown`;
  $('graph').setAttribute('aria-label',`Nine topic nodes; ${visible.length} references shown. Existing links are solid; suggestions dashed. See the reference list for accessible details.`);
}
function render() {
  const rows=filtered(), pages=Math.max(1,Math.ceil(rows.length/15));page=Math.max(1,Math.min(page,pages));
  $('count').textContent=`${rows.length} of ${records.length} references`;
  const suggested=rows.filter(r=>PaperNodes.links(r,decisions).some(l=>l.status==='keyword suggestion')).length;
  $('coverage').textContent=`${suggested} references in this selection have additional keyword suggestions. Graph shows up to 48 connected references, prioritizing those with more links; the list contains all results. Counts describe references in this catalog, not research quality or coverage.`;
  $('list').innerHTML=rows.slice((page-1)*15,page*15).map(r=>`<article class="record"><div><p>${r.year} · ${esc(r.kind)} · ${esc(r.citation)}</p><h3>${esc(r.title)}</h3><div>${getLinks(r).map(tag).join('') || 'No active connections'}</div></div><button data-ref="${esc(r.id)}" aria-label="Review ${esc(r.title)}">Review links →</button></article>`).join('') || '<p>No references match these filters.</p>';
  $('page').textContent=`Page ${page} of ${pages}`;$('prev').disabled=page===1;$('next').disabled=page===pages;
  graph(rows);detail();
}
function decide(node,action) {
  if (!decisions[selected]) decisions[selected]={};
  if(action==='undo')delete decisions[selected][node];else decisions[selected][node]=action;
  if(!Object.keys(decisions[selected]).length)delete decisions[selected];
  save();render();
}
$('node').insertAdjacentHTML('beforeend',PaperNodes.nodes.map(n=>`<option value="${n.id}">${esc(n.label)}</option>`).join(''));
$('rules').innerHTML=PaperNodes.nodes.map(n=>`<p><b>${esc(n.label)}:</b> ${n.keywords.map(esc).join(', ')}</p>`).join('');
['search','node','mode'].forEach(id=>$(id).addEventListener(id==='search'?'input':'change',()=>{page=1;render();}));
$('reset').onclick=()=>{$('search').value='';$('node').value='';$('mode').value='all';page=1;render();};
$('prev').onclick=()=>{page--;render();};$('next').onclick=()=>{page++;render();};
document.addEventListener('click',e=>{
  const ref=e.target.closest('[data-ref]');if(ref){selected=ref.dataset.ref;render();return;}
  const focus=e.target.closest('[data-focus]');if(focus){$('node').value=focus.dataset.focus;page=1;render();return;}
  const choice=e.target.closest('[data-decision]');if(choice)decide(choice.dataset.node,choice.dataset.decision);
});
document.addEventListener('change',e=>{if(e.target.id==='manual'&&e.target.value)decide(e.target.value,'keep');});
$('export').onclick=()=>{
  const blob=new Blob([JSON.stringify({schemaVersion:1,exported:new Date().toISOString(),decisions},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='gd-node-review.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
};
$('import-button').onclick=()=>$('import').click();
$('import').onchange=async e=>{
  try{const file=e.target.files[0];if(!file)return;if(file.size>2000000)throw new Error('File is too large.');const data=JSON.parse(await file.text());if(data.schemaVersion!==1)throw new Error('Unsupported export version.');const incoming=validate(data.decisions);for(const [id,choices] of Object.entries(incoming))decisions[id]={...decisions[id],...choices};save();render();$('message').textContent='Imported review decisions. Imported choices replace local choices for the same reference and node.';}
  catch(err){$('message').textContent='Import failed: '+err.message;}e.target.value='';
};
if (!storageOK) $('storage-status').textContent='Browser storage is unavailable or invalid. Export current decisions before leaving.';
render();
