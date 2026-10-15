/* A single source and explicit denominator for each selected visual. */
TOPIC_CHARTS.work.data=WORK_SERIES;
function viewSelectedTopic(v,id){
  const t=TOPIC_CHARTS[id],p=SELECTED_EVIDENCE[id],s=p.sources.find(s=>s.id===t.source),i=ORDER.indexOf(id);
  const more=[...t.support.map(x=>({title:x.label,url:x.url,text:x.text})),...t.related];
  const csv=[t.columns.concat(['source','checked']),...t.data.map(r=>r.concat([t.dataUrl||s.url,'2026-10-14']))];
  v.innerHTML=`<div class="view5 wrap priority6 pilot7 selected8">${crumbs5(id)}
    <header class="claim5"><div class="eye5"><span>${esc(nameOf(id))}</span><i aria-hidden="true">·</i><span>${i+1} of 9</span></div><h1 class="h1-5 c">${esc(p.h1)}</h1></header>
    ${t.gapNote?`<p class="measure-gap8"><b>Measurement gap.</b> ${esc(t.gapNote)}</p>`:''}
    <figure class="evidence-chart7" aria-labelledby="${id}-title8">
      <figcaption><div class="publisher7">${ext7(s.url,'Source: '+t.publisher)}<span>${esc(t.scope)}</span></div>
        <h2 id="${id}-title8">${esc(t.title)}</h2><p class="measure7">${esc(t.measure)}</p>
        <p class="choice7"><b>Why this indicator?</b> ${esc(t.why)}</p></figcaption>
      <div class="chart" id="${id}-chart8"></div>
      <p class="chart-credit7">${esc(t.credit)}</p>
    </figure>
    <p class="takeaway7"><b>${esc(t.takeawayLabel)}:</b> ${esc(t.takeaway)}</p>
    <section class="next-measure9" id="${id}-watch" aria-labelledby="${id}-next-title">
      <h2 id="${id}-next-title">Next measurement needed</h2>
      <p>${esc(p.gap)} <a href="#gaps/${id}">Research priorities →</a></p>
    </section>
    <div class="disclosures7 evidence-grid7">
      <details class="disclosure7" id="${id}-source"><summary>Sources, data &amp; caveats</summary><div class="disclosure7-body">
        <dl class="context7">${t.notes.map(([term,text])=>`<div><dt>${esc(term==='Coverage'?'What is measured':term)}</dt><dd>${esc(text)}</dd></div>`).join('')}</dl>
        <p>AI-assisted summary; not independently verified.</p>
        <p class="source-actions7">${ext7(s.url,'Full methodology: '+t.publisher)}${t.dataUrl?ext7(t.dataUrl,'Original data'):''}${csvLink7(id+'-selected-data-2026-10-14.csv',csv)}<a href="#method/selection">How we select indicators</a></p>
        <div class="data-scroll7" role="region" aria-label="${esc(t.title)} data" tabindex="0"><table class="data7"><caption>${esc(t.tableCaption||t.measure)}</caption><thead><tr>${t.columns.map(c=>`<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${t.data.map(r=>`<tr>${r.map((c,i)=>i?`<td>${esc(c)}</td>`:`<th scope="row">${esc(c)}</th>`).join('')}</tr>`).join('')}</tbody></table></div>
      </div></details>
      <details class="disclosure7" id="${id}-related"><summary>More evidence</summary><div class="disclosure7-body">
        ${relatedEvidence7(more)}
        <p>Working selection, not exhaustive. These AI-assisted summaries have not all been manually verified.</p>
        <p><a href="#details/${id}">Full source notes</a></p></div></details>
    </div>${pn5([ORDER[i-1],nameOf(ORDER[i-1])],ORDER[i+1]?[ORDER[i+1],nameOf(ORDER[i+1])]:['evidence','All steps','Next'])}</div>`;
  drawSelectedChart8($('#'+id+'-chart8',v),t);
  crumbScroll5(v);
}

function drawSelectedChart8(el,t){
  const c=t.chart;
  if(c.kind==='work-series'){
    Charts.line(el,{aria:'Stanford ADP payroll sample, ages 22 to 25. Five occupational AI exposure quintiles. Employment index, November 2022 equals 100. By August 2026 the most exposed quintile is at 87.23 and least exposed at 108.1.',h:310,table:false,axisPlacement:'edges',
      x:{min:2021.6,max:2026.9,ticks:[2022,2023,2024,2025,2026],ticksNarrow:[2022,2024,2026],fmt:n=>String(n),tip:fmtDate,label:'Observation year'},
      y:{min:75,max:120,ticks:[80,90,100,110,120],fmt:n=>String(n),tip:n=>n.toFixed(2),label:'Employment index (November 2022 = 100)'},zero:100,
      series:[2,3,4,1,5].map(q=>({name:q===1?'Least exposed (Q1)':q===5?'Most exposed (Q5)':'Middle groups (Q2–Q4)',legend:[2,1,5].includes(q),color:q===1?C.s2:q===5?C.s1:C.ctx,w:q===1||q===5?2.8:1.3,op:q===1||q===5?1:.55,end:false,markers:'none',pts:WORK_SERIES.map(r=>[ym(Number(r[0].slice(0,4)),Number(r[0].slice(5,7))),r[q],'Quintile '+q])})),
      ann:[{x:2026+7/12,y:108.1,text:'108.1',anchor:'end',dx:-6,dy:-12,strong:true},{x:2026+7/12,y:87.23,text:'87.2',anchor:'end',dx:-6,dy:20,strong:true}]
    });
  }else if(c.kind==='bars'){
    Charts.bars(el,{aria:c.aria,min:0,max:c.max,ticks:c.ticks,fmt:n=>n+c.unit,
      catLabel:c.category,valLabel:c.axis,table:false,rh:60,axisPlacement:'edges',
      rows:c.rows.map((r,i)=>({...r,color:i===0?C.s1:C.ctx}))});
  }else if(c.kind==='line'){
    Charts.line(el,{aria:c.aria,h:300,table:false,axisPlacement:'edges',
      x:{...c.x,fmt:n=>String(n),tip:fmtDate},y:{...c.y,fmt:n=>n+c.unit,tip:n=>n+c.unit},
      series:c.series.map((s,i)=>({...s,color:i===0?C.s1:C.s2,end:false,markers:'none'})),
      ann:c.ann,annNarrow:c.annNarrow});
  }else if(c.kind==='interval'){
    Charts.intervals(el,{...c,table:false});
  }else if(c.kind==='waffle'){
    // The outlined cells show the reported range, not a statistical interval.
    el.innerHTML=`<div class="waffle8" role="img" aria-label="${esc(c.aria)}"><div class="waffle8-number">1–3<span>% of recorded streams</span></div><div class="waffle8-grid">${Array.from({length:100},(_,i)=>`<i class="${i===0?'filled':i<3?'possible':''}"></i>`).join('')}</div></div><p class="waffle8-key"><i></i> One square = 1% of streams. Outlines extend the reported range to 3%.</p>`;
  }
}
