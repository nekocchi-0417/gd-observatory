// Current source notes take precedence over the older, bibliography-only collection.
function libraryEntries14(id){
  const records=new Map(),aliases=new Map();
  SELECTED_EVIDENCE[id].sources.forEach(s=>{
    const key=libraryURL14(s.url);
    [s.url,s.paper,s.doi&&'https://doi.org/'+s.doi].map(libraryURL14).filter(Boolean).forEach(url=>aliases.set(url,key));
  });
  const add=entry=>{
    const url=libraryURL14(entry.url),key=aliases.get(url)||url;
    if(!key)return;
    if(!records.has(key))records.set(key,{...entry,key,sourceURLs:[url]});
    else if(!records.get(key).sourceURLs.includes(url))records.get(key).sourceURLs.push(url);
  };
  SELECTED_EVIDENCE[id].sources.forEach(s=>add({title:s.title,citation:s.citation,url:s.url}));
  relatedMeasurements11(id).forEach(s=>add({title:s.title,citation:s.publisher||'',url:s.url,text:s.text}));
  EVIDENCE_LIBRARY14[id].forEach(add);
  return [...records.values()];
}

function evidenceLibrary14(id){
  const entries=libraryEntries14(id);
  return `<details class="disclosure7 evidence-library14" id="${id}-related"><summary>Evidence library <span class="library-summary14">${entries.length} references / AI-assisted</span></summary><div class="disclosure7-body"><p class="evidence-note13" id="${id}-library-note">AI-assisted reading list. References and summaries need human checking before citation; this collection is not exhaustive.</p><label class="library-search14" for="${id}-library-search">Search this library<input type="search" id="${id}-library-search" placeholder="Title, author or year" aria-controls="${id}-library-list" aria-describedby="${id}-library-note" autocomplete="off"></label><p class="library-count14" role="status" aria-live="polite" aria-atomic="true">${entries.length} references</p><ul class="library-list14" id="${id}-library-list" tabindex="0" aria-label="${esc(nameOf(id))} evidence library">${entries.map(s=>`<li data-library-key="${esc(s.key)}"><h3>${ext7(s.url,s.title)}</h3>${s.citation?`<p class="library-meta14">${esc(s.citation)}</p>`:''}${s.text?`<p class="library-description14">${esc(s.text)}</p>`:''}</li>`).join('')}</ul><p class="library-empty14" hidden>No matching references.</p></div></details>`;
}

function bindEvidenceLibrary14(v,id){
  const library=$('#'+id+'-related',v),input=$('input',library),list=$('.library-list14',library);
  const entries=libraryEntries14(id),searchText=text=>text.normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase();
  const rows=[...list.children].map((el,i)=>({el,text:searchText(el.textContent+' '+(entries[i].year||''))}));
  input.addEventListener('input',()=>{
    const query=searchText(input.value.trim()),terms=query.split(/\s+/).filter(Boolean);
    let count=0;
    rows.forEach(({el,text})=>{el.hidden=!terms.every(term=>text.includes(term));if(!el.hidden)count++});
    $('.library-count14',library).textContent=`${count} of ${rows.length} references`;
    $('.library-empty14',library).hidden=count!==0;
    list.hidden=count===0;
    list.scrollTop=0;
  });
}
