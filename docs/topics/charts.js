/* ---------- small chart kit: line, bars, columns, stack rows, dumbbell, spark ---------- */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const ym=(y,m)=>y+(m-1)/12;                       // month start as decimal year
const fmtDate=x=>{const y=Math.floor(x+1e-6);const m=Math.min(11,Math.max(0,Math.floor((x-y)*12+0.01)));return MON[m]+' '+y};
const fmtQ=x=>{const y=Math.floor(x+1e-6);return 'Q'+(Math.min(3,Math.floor((x-y)*4))+1)+' '+y};
const fmtMin=v=>v<0.75?(Math.round(v*60)+' sec'):v<60?(Math.round(v)+' min'):v<600?((v/60).toFixed(1).replace(/\.0$/,'')+' h'):(Math.round(v/60)+' h');
const C={s1:'var(--s1)',s2:'var(--s2)',s3:'var(--s3)',ctx:'var(--ctx)',ink:'var(--ink)',p1:'var(--p1)',p2:'var(--p2)',p3:'var(--p3)'};

const Charts=(()=>{
  const mounted=new Set();let CAP=null;
  function capture(fn){CAP=[];try{fn()}catch(e){}const r=CAP;CAP=null;return r}
  function mount(el,draw){el.__draw=draw;mounted.add(el);draw()}
  function redraw(){mounted.forEach(el=>{if(!document.body.contains(el)){mounted.delete(el);return}el.__draw()})}
  let rt;window.addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(redraw,140)});
  const width=el=>Math.max(260,Math.floor(el.clientWidth||el.parentNode&&el.parentNode.clientWidth||600));

  function tipAt(el,tip,px,py,W){
    tip.style.display='block';
    const tw=tip.offsetWidth,th=tip.offsetHeight;
    let l=px+14; if(l+tw>W-2) l=px-tw-14; if(l<0) l=Math.max(0,Math.min(W-tw,px-tw/2));
    let t=py-th-10; if(t<0) t=py+14;
    tip.style.left=l+'px'; tip.style.top=t+'px';
  }
  function tableHTML(head,rows){
    return `<details class="tbl"><summary>Data table</summary><div class="sc"><table><thead><tr>${head.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c==null?'':esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></details>`;
  }
  function legendHTML(items){
    if(items.length<2) return '';
    return `<div class="lg">${items.map(s=>`<span><i class="${s.kind||''}${s.dash?' dash':''}" style="${s.kind==='box'||s.kind==='dot'?'background':'border-color'}:${s.color}"></i>${esc(s.name)}</span>`).join('')}</div>`;
  }
  function axisHTML(x,y){
    return `<div class="axis-note"><span><b>X-axis</b> ${esc(x||'date or year')}</span><span><b>Y-axis</b> ${esc(y||'value')}</span></div>`;
  }

  /* ----- line chart ----- */
  function line(el,cfg){if(CAP){cfg.series.forEach(s=>{if(s.rec!==false)CAP.push(...s.pts.map(p=>p[0]))});return}mount(el,()=>drawLine(el,cfg))}
  function drawLine(el,cfg0){
    const W=width(el),narrow=W<520;
    const cfg=narrow&&(cfg0.x.minNarrow!=null||cfg0.series.some(s=>s.narrowHide))?{...cfg0,series:cfg0.series.filter(s=>!s.narrowHide).map(s=>cfg0.x.minNarrow!=null?{...s,pts:s.pts.filter(p=>p[0]>=cfg0.x.minNarrow)}:s)}:cfg0;
    const H=cfg.h||(narrow?250:310);
    const yf=cfg.y.fmt||(v=>v),ytf=cfg.y.tip||yf,xtf=cfg.x.tip||fmtDate,xf=cfg.x.fmt||(v=>v);
    const log=!!cfg.y.log,ty=v=>log?Math.log10(v):v;
    const yt=cfg.y.ticks,ymin=cfg.y.min??yt[0],ymax=cfg.y.max??yt[yt.length-1];
    const tickW=Math.max(...yt.map(v=>String(yf(v)).length))*6.7+12;
    const ends=cfg.series.filter(s=>s.end!==false&&s.pts.length);
    const endTxt=s=>narrow&&s.endLabelNarrow!=null?s.endLabelNarrow:s.endLabel!=null?s.endLabel:ytf(s.pts[s.pts.length-1][1]);
    const endW=ends.length?Math.max(...ends.map(s=>String(endTxt(s)).length))*7.4+16:16;
    const P={l:tickW,r:Math.min(endW,narrow?104:190),t:cfg.pt||14,b:26};
    const xmin=narrow&&cfg.x.minNarrow!=null?cfg.x.minNarrow:cfg.x.min,xmax=cfg.x.max;
    const sx=x=>P.l+(x-xmin)/(xmax-xmin)*(W-P.l-P.r);
    const sy=y=>P.t+(ty(ymax)-ty(y))/(ty(ymax)-ty(ymin))*(H-P.t-P.b);
    let g='';
    let bl='';(cfg.xbands||[]).forEach(b=>{g+=`<rect x="${sx(b.x0)}" y="${P.t}" width="${sx(b.x1)-sx(b.x0)}" height="${H-P.t-P.b}" fill="var(--surface-2)" opacity=".6"/>`;if(b.label)bl+=`<text x="${sx(b.x0)+6}" y="${P.t+(b.dy||13)}" class="ann">${esc(b.label)}</text>`});
    (cfg.hbands||[]).forEach(b=>{const y1=sy(Math.min(b.y1,ymax)),y0=sy(b.y0);g+=`<rect x="${P.l}" y="${y1}" width="${W-P.l-P.r}" height="${y0-y1}" fill="var(--surface-2)"/>`;if(b.label)bl+=`<text x="${P.l+6}" y="${y1+12}" class="ann">${esc(b.label)}</text>`});
    yt.forEach(v=>{const y=sy(v);g+=`<line x1="${P.l}" x2="${W-P.r}" y1="${y}" y2="${y}" stroke="var(--grid)"/><text x="${P.l-7}" y="${y+3.5}" text-anchor="end">${esc(yf(v))}</text>`});
    if(cfg.zero!=null&&cfg.zero>ymin&&cfg.zero<ymax)g+=`<line x1="${P.l}" x2="${W-P.r}" y1="${sy(cfg.zero)}" y2="${sy(cfg.zero)}" stroke="var(--ink-3)"/>`;
    const xts=(narrow&&cfg.x.ticksNarrow)||cfg.x.ticks;
    xts.forEach(v=>{g+=`<text x="${sx(v)}" y="${H-P.b+16}" text-anchor="middle">${esc(xf(v))}</text><line x1="${sx(v)}" x2="${sx(v)}" y1="${H-P.b}" y2="${H-P.b+4}" stroke="var(--rule)"/>`});
    g+=`<line x1="${P.l}" x2="${W-P.r}" y1="${H-P.b}" y2="${H-P.b}" stroke="var(--rule)"/>`;
    (cfg.vlines||[]).forEach(v=>{const x=sx(v.x);const a=v.anchor||(x>W*0.6?'end':'start');g+=`<line x1="${x}" x2="${x}" y1="${P.t}" y2="${H-P.b}" stroke="var(--ink-3)" stroke-dasharray="2 3"/><text x="${x+(a==='end'?-6:6)}" y="${P.t+(v.dy||11)}" text-anchor="${a}" class="ann">${esc(v.label)}</text>`});
    g+=bl;let m='';
    (cfg.ranges||[]).forEach(r=>{const x=sx(r.x);m+=`<line x1="${x}" x2="${x}" y1="${sy(r.lo)}" y2="${sy(r.hi)}" stroke="${r.color}" stroke-width="2" opacity=".55"/><line x1="${x-5}" x2="${x+5}" y1="${sy(r.lo)}" y2="${sy(r.lo)}" stroke="${r.color}" stroke-width="2" opacity=".55"/><line x1="${x-5}" x2="${x+5}" y1="${sy(r.hi)}" y2="${sy(r.hi)}" stroke="${r.color}" stroke-width="2" opacity=".55"/>`});
    cfg.series.forEach(s=>{
      const n=s.pts.length;if(!n)return;
      const pts=s.pts.map(p=>[sx(p[0]),sy(p[1])]);
      if(!s.dots){
        const cut=s.gapAfter;
        const seg=(a,b,dash)=>{const d=pts.slice(a,b+1).map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');return d.length>3?`<path d="${d}" fill="none" stroke="${s.color}" stroke-width="${s.w||2}" stroke-linejoin="round" stroke-linecap="round" ${dash?'stroke-dasharray="5 5"':''} ${s.op?`opacity="${s.op}"`:''}/>`:''};
        if(s.area){const d=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ')+` L${pts[n-1][0]} ${sy(Math.max(ymin,log?ymin:0))} L${pts[0][0]} ${sy(Math.max(ymin,log?ymin:0))}Z`;m+=`<path d="${d}" fill="${s.color}" opacity=".1"/>`}
        if(cut!=null){m+=seg(0,cut,s.dash)+`<path d="M${pts[cut][0]} ${pts[cut][1]} L${pts[cut+1][0]} ${pts[cut+1][1]}" fill="none" stroke="var(--ink-3)" stroke-width="1.3" stroke-dasharray="2 4"/>`+seg(cut+1,n-1,s.dash)}
        else m+=seg(0,n-1,s.dash);
      }
      const mk=s.markers||(n<=18?'all':'end');
      s.pts.forEach((p,i)=>{if(mk==='none'||p[3]==='n')return;if(mk==='end'&&i<n-1)return;const hollow=p[3]==='h';m+=`<circle cx="${pts[i][0].toFixed(1)}" cy="${pts[i][1].toFixed(1)}" r="${s.r||(i===n-1?4.5:3.5)}" fill="${hollow?'var(--surface)':s.color}" stroke="${hollow?s.color:'var(--surface)'}" stroke-width="2" ${s.op?`opacity="${s.op}"`:''}/>`});
    });
    const lab=cfg.series.filter(s=>s.labels);lab.forEach(s=>{s.pts.forEach((p,i)=>{if(s.end!==false&&i===s.pts.length-1)return;const below=lab.some(o=>o!==s&&o.pts.some(q=>Math.abs(q[0]-p[0])<1e-4&&q[1]>p[1]));m+=`<text x="${sx(p[0]).toFixed(1)}" y="${(sy(p[1])+(below?18:-9)).toFixed(1)}" text-anchor="middle" class="end" style="font-weight:550">${esc(ytf(p[1]))}</text>`})});
    // end labels with simple collision nudge
    const labs=ends.map(s=>{const p=s.pts[s.pts.length-1];return {y:sy(p[1]),x:sx(p[0]),t:endTxt(s),mu:s.endMuted}}).sort((a,b)=>a.y-b.y);
    for(let i=labs.length-1;i>0;i--){if(Math.abs(labs[i].y-labs[i-1].y)<2.5&&Math.abs(labs[i].x-labs[i-1].x)<2){const a=labs[i-1],b=labs[i],first=a.mu&&!b.mu?b:a,second=first===a?b:a;a.t=first.t+', '+second.t;a.mu=a.mu&&b.mu;labs.splice(i,1)}}
    for(let i=1;i<labs.length;i++){if(labs[i].y-labs[i-1].y<14)labs[i].y=labs[i-1].y+14}
    labs.forEach(l=>{m+=`<text x="${l.x+9}" y="${l.y+4}" class="end${l.mu?' mu':''}">${esc(l.t)}</text>`});
    ((narrow&&cfg.annNarrow)||cfg.ann||[]).forEach(a=>{const x=sx(a.x),y=sy(a.y),tx=x+(a.dx||0),ty2=y+(a.dy||0);if(a.lead)m+=`<line x1="${x}" y1="${y}" x2="${tx+(a.anchor==='end'?4:-4)}" y2="${ty2-4}" stroke="var(--ink-3)"/>`;const lines=String(a.text).split('\n');m+=`<text x="${tx}" y="${ty2}" text-anchor="${a.anchor||'start'}" class="ann${a.strong?' strong':''}">${lines.map((t,i)=>`<tspan x="${tx}" dy="${i?14:0}">${esc(t)}</tspan>`).join('')}</text>`});
    const lgs=cfg.series.filter(s=>s.name&&s.legend!==false);if(cfg.legendReverse)lgs.reverse();const lg=cfg.legend===false?'':legendHTML(lgs.map(s=>({name:s.name,color:s.color,dash:s.dash,kind:s.dots?'dot':''})));
    // table
    const xs=[...new Set(cfg.series.filter(s=>s.tip!==false).flatMap(s=>s.pts.map(p=>+p[0].toFixed(4))))].sort((a,b)=>a-b);
    const named=cfg.series.filter(s=>s.name&&s.tip!==false);
    const tbl=tableHTML([cfg.x.label||'Date',...named.map(s=>s.name)],xs.map(x=>[xtf(x),...named.map(s=>{const p=s.pts.find(p=>Math.abs(p[0]-x)<1e-4);return p?ytf(p[1])+(p[2]?' ('+p[2]+')':''):null})]));
    const edgeAxes=cfg.axisPlacement==='edges';
    const axes=edgeAxes?`<div class="chart-y-label">${esc(cfg.y.label)}</div>`:axisHTML(cfg.x.label||'date or year',cfg.y.label||cfg.valLabel||'value');
    el.innerHTML=`${lg}${axes}<div style="position:relative"><svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" tabindex="0" aria-label="${esc(cfg.aria||'Line chart')}">${g}${m}<line class="xh" y1="${P.t}" y2="${H-P.b}" stroke="var(--ink)" stroke-width="1" style="display:none"/><rect x="${P.l}" y="${P.t}" width="${W-P.l-P.r}" height="${H-P.t-P.b}" fill="transparent" class="hit"/></svg><div class="tip"></div></div>${edgeAxes?`<div class="chart-x-label">${esc(cfg.x.label)}</div>`:''}${cfg.table===false?'':tbl}`;
    const svg=el.querySelector('svg'),tip=el.querySelector('.tip'),xh=el.querySelector('.xh');
    let idx=-1;
    const show=i=>{
      if(i<0||i>=xs.length){tip.style.display='none';xh.style.display='none';return}
      idx=i;const x=xs[i],px=sx(x);
      xh.setAttribute('x1',px);xh.setAttribute('x2',px);xh.style.display='';
      const near=named.map(s=>({s,p:s.pts.find(p=>Math.abs(p[0]-x)<1e-4)})).filter(o=>o.p);
      tip.innerHTML='';const d=document.createElement('div');d.className='d';d.textContent=xtf(x);tip.appendChild(d);
      near.forEach(o=>{const r=document.createElement('div');r.className='r';const k=document.createElement('i');k.style.background=o.s.color;const b=document.createElement('b');b.textContent=ytf(o.p[1]);const sp=document.createElement('span');sp.textContent=o.s.name;r.append(k,b,sp);tip.appendChild(r);if(o.p[2]){const nt=document.createElement('div');nt.className='nt';nt.textContent=o.p[2];tip.appendChild(nt)}});
      tipAt(el,tip,px,Math.min(...near.map(o=>sy(o.p[1]))),W);
    };
    const move=e=>{const r=svg.getBoundingClientRect();const mx=(e.clientX-r.left);let best=-1,bd=1e9;xs.forEach((x,i)=>{const d=Math.abs(sx(x)-mx);if(d<bd){bd=d;best=i}});show(best)};
    svg.addEventListener('pointermove',move);svg.addEventListener('pointerdown',move);
    svg.addEventListener('pointerleave',()=>show(-1));
    svg.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){show(Math.min(xs.length-1,idx+1));e.preventDefault()}else if(e.key==='ArrowLeft'){show(Math.max(0,idx<0?xs.length-1:idx-1));e.preventDefault()}else if(e.key==='Escape')show(-1)});
    svg.addEventListener('blur',()=>show(-1));
  }

  /* ----- horizontal bars (label above bar), supports diverging ----- */
  function bars(el,cfg){if(CAP)return;mount(el,()=>drawBars(el,cfg))}
  function drawBars(el,cfg){
    const W=width(el),rh=cfg.rh||46,P={l:cfg.axisPlacement==='edges'?16:2,r:64,t:6,b:cfg.axis===false?6:24};
    const rows=cfg.rows,fmt=cfg.fmt||(v=>v),data=rows.filter(r=>!r.head);
    const min=cfg.min??Math.min(0,...data.map(r=>r.value)),max=cfg.max??Math.max(0,...data.map(r=>r.value));
    const neg=min<0;if(neg)P.l=58;
    const sx=v=>P.l+(v-min)/(max-min)*(W-P.l-P.r),x0=sx(0);
    let m='',y=P.t;const ys=[];
    rows.forEach((r,i)=>{
      if(r.head){if(i)y+=8;m+=`<text x="2" y="${y+12}" style="letter-spacing:.06em">${esc(r.head.toUpperCase())}</text><line x1="0" x2="${W}" y1="${y+18}" y2="${y+18}" stroke="var(--rule)"/>`;y+=24;return}
      const bh=Math.min(16,rh-26),by=y+22,x1=sx(r.value),xa=r.from!=null?sx(r.from):x0,bx=Math.min(xa,x1),bw=Math.max(1.5,Math.abs(x1-xa));ys.push(by);
      const rr=Math.min(4,bw/2),right=r.value>=0;
      const d=r.from!=null?`M${bx} ${by}h${bw}v${bh}h-${bw}z`:right?`M${bx} ${by}h${bw-rr}a${rr} ${rr} 0 0 1 ${rr} ${rr}v${bh-2*rr}a${rr} ${rr} 0 0 1 -${rr} ${rr}h-${bw-rr}z`:`M${bx+bw} ${by}h-${bw-rr}a${rr} ${rr} 0 0 0 -${rr} ${rr}v${bh-2*rr}a${rr} ${rr} 0 0 0 ${rr} ${rr}h${bw-rr}z`;
      m+=`<g class="row" data-i="${i}"><text x="${P.l}" y="${y+15}" class="cat">${esc(r.label)}</text><path d="${d}" fill="${r.hollow?'var(--surface)':(r.color||C.s1)}" ${r.hollow?`stroke="${r.color||C.s1}" stroke-width="1.5" stroke-dasharray="3 3"`:''}/><text x="${right?x1+7:x1-7}" y="${by+bh/2+4}" text-anchor="${right?'start':'end'}" class="end">${esc(r.vlabel||fmt(r.value))}</text><rect x="0" y="${y}" width="${W}" height="${rh}" fill="transparent"/></g>`;
      if(neg)m+=`<line x1="${x0}" x2="${x0}" y1="${by-4}" y2="${by+bh+4}" stroke="var(--ink-2)"/>`;
      y+=rh});
    const H=y+P.b;let g='';
    (cfg.ticks||[]).forEach(v=>{g+=`<line x1="${sx(v)}" x2="${sx(v)}" y1="${P.t}" y2="${H-P.b}" stroke="var(--grid)"/><text x="${sx(v)}" y="${H-P.b+15}" text-anchor="middle">${esc(fmt(v))}</text>`});
    const tbl=tableHTML([cfg.catLabel||'',cfg.valLabel||'Value',...(data.some(r=>r.note)?['Note']:[])],data.map(r=>[r.label,r.vlabel||fmt(r.value),...(data.some(q=>q.note)?[r.note||'']:[])]));
    const edge=cfg.axisPlacement==='edges';
    el.innerHTML=`${edge?`<div class="chart-y-label">${esc(cfg.catLabel)}</div>`:axisHTML(cfg.valLabel||'value',cfg.catLabel||'category')}<div style="position:relative"><svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(cfg.aria||'Bar chart')}">${g}${m}</svg><div class="tip"></div></div>${edge?`<div class="chart-x-label">${esc(cfg.valLabel)}</div>`:''}${cfg.table===false?'':tbl}`;
    const tip=el.querySelector('.tip'),svg=el.querySelector('svg');
    el.querySelectorAll('.row').forEach(n=>{const r=rows[+n.dataset.i];n.addEventListener('pointermove',e=>{const b=svg.getBoundingClientRect();tip.innerHTML='';const d=document.createElement('div');d.className='r';const bb=document.createElement('b');bb.textContent=r.vlabel||fmt(r.value);const sp=document.createElement('span');sp.textContent=r.label;d.append(bb,sp);tip.appendChild(d);if(r.note){const nt=document.createElement('div');nt.className='nt';nt.textContent=r.note;tip.appendChild(nt)}tipAt(el,tip,e.clientX-b.left,e.clientY-b.top,W)});n.addEventListener('pointerleave',()=>tip.style.display='none')});
  }

  /* ----- columns over time ----- */
  function cols(el,cfg){if(CAP){(cfg.sets||[{pts:cfg.pts}]).forEach(s=>CAP.push(...s.pts.filter(p=>p[1]!=null).map(p=>p[0])));return}mount(el,()=>drawCols(el,cfg))}
  function drawCols(el,cfg){
    const W=width(el),narrow=W<520,H=cfg.h||(narrow?230:280);
    const yf=cfg.y.fmt||(v=>v),ytf=cfg.y.tip||yf,xtf=cfg.x.tip||fmtDate,xf=cfg.x.fmt||(v=>v);
    const yt=cfg.y.ticks,ymax=cfg.y.max??yt[yt.length-1];
    const P={l:Math.max(...yt.map(v=>String(yf(v)).length))*6.7+12,r:12,t:cfg.pt||14,b:26};
    const xmin=cfg.x.min,xmax=cfg.x.max,sx=x=>P.l+(x-xmin)/(xmax-xmin)*(W-P.l-P.r),sy=y=>P.t+(ymax-y)/ymax*(H-P.t-P.b);
    const sets=cfg.sets||[{name:cfg.name,color:cfg.color||C.s1,pts:cfg.pts}];
    const step=cfg.step||(1/12),slot=(sx(xmin+step)-sx(xmin)),bw=cfg.grouped?Math.max(4,Math.min(cfg.maxbw||26,slot/(sets.length+1.5))):Math.max(2,Math.min(cfg.maxbw||24,slot-2));
    let g='';yt.forEach(v=>{g+=`<line x1="${P.l}" x2="${W-P.r}" y1="${sy(v)}" y2="${sy(v)}" stroke="var(--grid)"/><text x="${P.l-7}" y="${sy(v)+3.5}" text-anchor="end">${esc(yf(v))}</text>`});
    ((narrow&&cfg.x.ticksNarrow)||cfg.x.ticks).forEach(v=>{g+=`<text x="${sx(v)}" y="${H-P.b+16}" text-anchor="middle">${esc(xf(v))}</text>`});
    g+=`<line x1="${P.l}" x2="${W-P.r}" y1="${H-P.b}" y2="${H-P.b}" stroke="var(--rule)"/>`;
    (cfg.vlines||[]).forEach(v=>{const x=sx(v.x);const a=v.anchor||'start';g+=`<line x1="${x}" x2="${x}" y1="${P.t}" y2="${H-P.b}" stroke="var(--ink-3)" stroke-dasharray="2 3"/><text x="${x+(a==='end'?-6:6)}" y="${P.t+11}" text-anchor="${a}" class="ann">${esc(v.label)}</text>`});
    let m='';
    sets.forEach((s,si)=>s.pts.forEach(p=>{if(p[1]==null)return;const x=sx(p[0])+(cfg.grouped?(si-(sets.length-1)/2)*(bw+2):0)-bw/2,y=sy(p[1]),h=Math.max(0,H-P.b-y),r=Math.min(4,bw/2,h);m+=`<path d="M${x} ${H-P.b}v-${h-r}a${r} ${r} 0 0 1 ${r} -${r}h${bw-2*r}a${r} ${r} 0 0 1 ${r} ${r}v${h-r}z" fill="${p[3]==='h'?'var(--ctx)':s.color}" ${p[3]==='h'?'opacity=".7"':''}/>`;if(p[4])m+=`<text x="${x+bw/2}" y="${y-5}" text-anchor="middle" class="end">${esc(p[4])}</text>`}));
    (cfg.ann||[]).forEach(a=>{m+=`<text x="${sx(a.x)+(a.dx||0)}" y="${sy(a.y)+(a.dy||0)}" text-anchor="${a.anchor||'start'}" class="ann">${String(a.text).split('\n').map((t,i)=>`<tspan x="${sx(a.x)+(a.dx||0)}" dy="${i?14:0}">${esc(t)}</tspan>`).join('')}</text>`});
    const xs=[...new Set(sets.flatMap(s=>s.pts.map(p=>+p[0].toFixed(4))))].sort((a,b)=>a-b);
    const lg=legendHTML(sets.filter(s=>s.name).map(s=>({name:s.name,color:s.color,kind:'box'})));
    const tbl=tableHTML([cfg.x.label||'Date',...sets.map(s=>s.name||cfg.valLabel||'Value')],xs.map(x=>[xtf(x),...sets.map(s=>{const p=s.pts.find(p=>Math.abs(p[0]-x)<1e-4);return p&&p[1]!=null?ytf(p[1])+(p[2]?' ('+p[2]+')':''):(p?'not available':null)})]));
    el.innerHTML=`${sets.length>1?lg:''}${axisHTML(cfg.x.label||'date or year',cfg.y.label||cfg.valLabel||'value')}<div style="position:relative"><svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(cfg.aria||'Column chart')}">${g}${m}<rect x="${P.l}" y="${P.t}" width="${W-P.l-P.r}" height="${H-P.t-P.b}" fill="transparent"/></svg><div class="tip"></div></div>${tbl}`;
    const svg=el.querySelector('svg'),tip=el.querySelector('.tip');
    const move=e=>{const r=svg.getBoundingClientRect(),mx=e.clientX-r.left;let best=null,bd=1e9;xs.forEach(x=>{const d=Math.abs(sx(x)-mx);if(d<bd){bd=d;best=x}});if(best==null){tip.style.display='none';return}
      tip.innerHTML='';const d=document.createElement('div');d.className='d';d.textContent=xtf(best);tip.appendChild(d);let top=H;
      sets.forEach(s=>{const p=s.pts.find(p=>Math.abs(p[0]-best)<1e-4);if(!p)return;const rr=document.createElement('div');rr.className='r';const k=document.createElement('i');k.style.background=s.color;const b=document.createElement('b');b.textContent=p[1]==null?'n/a':ytf(p[1]);const sp=document.createElement('span');sp.textContent=s.name||cfg.valLabel||'';rr.append(k,b,sp);tip.appendChild(rr);if(p[2]){const nt=document.createElement('div');nt.className='nt';nt.textContent=p[2];tip.appendChild(nt)}if(p[1]!=null)top=Math.min(top,sy(p[1]))});
      tipAt(el,tip,sx(best),top,W)};
    svg.addEventListener('pointermove',move);svg.addEventListener('pointerdown',move);svg.addEventListener('pointerleave',()=>tip.style.display='none');
  }

  /* ----- stacked rows (shares summing to 100) ----- */
  function stack(el,cfg){if(CAP)return;mount(el,()=>drawStack(el,cfg))}
  function drawStack(el,cfg){
    const W=width(el),bh=26,P={l:2,r:2,t:4,b:4};
    let m='',y=P.t;
    cfg.rows.forEach((r,i)=>{if(r.tag){y+=8;m+=`<line x1="${P.l}" x2="${W-P.r}" y1="${y}" y2="${y}" stroke="var(--rule)"/>`;y+=10}
      let x=P.l;const tot=r.parts.reduce((a,p)=>a+p.v,0),wAll=W-P.l-P.r;
      m+=`<text x="${P.l}" y="${y+14}" class="cat">${esc(r.label)}${r.tag?`<tspan dx="8" style="font-family:var(--f-mono);font-size:10.5px;fill:var(--ink-3)">${esc(r.tag)}</tspan>`:''}</text>`;
      r.parts.forEach((p,j)=>{const w=p.v/tot*wAll,on=cfg.sel==null||cfg.sel===j;m+=`<rect x="${x+(j?1:0)}" y="${y+21}" width="${Math.max(0,w-(j?2:1))}" height="${bh}" rx="2" fill="${p.color}" opacity="${on?1:.3}"/>`;if(w>34)m+=`<text x="${x+w/2}" y="${y+21+bh/2+4.5}" text-anchor="middle" style="fill:${p.on||'var(--ink)'};font-family:var(--f-display);font-size:${w>46?13:11}px;font-weight:650" opacity="${on?1:.6}">${esc(p.label||Math.round(p.v)+'%')}</text>`;x+=w});
      y+=21+bh+12});
    const H=y+P.b;
    const tbl=tableHTML(['Group',...cfg.rows[0].parts.map(p=>p.name)],cfg.rows.map(r=>[r.label,...r.parts.map(p=>p.label||p.v+'%')]));
    el.innerHTML=legendHTML(cfg.rows[0].parts.map(p=>({name:p.name,color:p.color,kind:'box'})))+axisHTML('group','share of total')+`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(cfg.aria||'Stacked bars')}" style="margin-top:8px">${m}</svg>${tbl}`;
  }

  /* ----- dumbbell (before → after on one scale) ----- */
  function dumbbell(el,cfg){if(CAP)return;mount(el,()=>drawDumb(el,cfg))}
  function drawDumb(el,cfg){
    const W=width(el),rh=48,P={l:2,r:132,t:22,b:24},H=P.t+cfg.rows.length*rh+P.b,fmt=cfg.fmt||(v=>v);
    const sx=v=>P.l+8+(v-cfg.min)/(cfg.max-cfg.min)*(W-P.l-P.r-8);
    let g='';cfg.ticks.forEach(v=>{g+=`<line x1="${sx(v)}" x2="${sx(v)}" y1="${P.t}" y2="${H-P.b}" stroke="var(--grid)"/><text x="${sx(v)}" y="${H-P.b+15}" text-anchor="middle">${esc(fmt(v))}</text>`});
    g+=`<text x="${W-70}" y="12" text-anchor="end">${esc(cfg.short[0])}</text><text x="${W-2}" y="12" text-anchor="end">${esc(cfg.short[1])}</text>`;
    let m='';cfg.rows.forEach((r,i)=>{const y=P.t+i*rh,cy=y+32;m+=`<text x="${P.l}" y="${y+15}" class="cat">${esc(r.label)}</text>`;
      if(r.lo!=null)m+=`<rect x="${sx(r.lo)}" y="${cy-3}" width="${sx(r.hi)-sx(r.lo)}" height="6" rx="3" fill="${cfg.band||cfg.colors[0]}" opacity="${cfg.band?.5:.28}"/>`;
      if(r.b!=null)m+=`<line x1="${sx(r.a)}" x2="${sx(r.b)}" y1="${cy}" y2="${cy}" stroke="var(--ink-2)" stroke-width="1.5"/><circle cx="${sx(r.b)}" cy="${cy}" r="5.5" fill="var(--surface)" stroke="${cfg.colors[1]}" stroke-width="2.5"/>`;
      m+=`<circle cx="${sx(r.a)}" cy="${cy}" r="6" fill="${cfg.colors[0]}" stroke="var(--surface)" stroke-width="2"/>`;
      m+=`<text x="${W-70}" y="${cy+4}" text-anchor="end" class="end">${esc(fmt(r.a))}</text><text x="${W-2}" y="${cy+4}" text-anchor="end" class="end" style="font-weight:500;fill:var(--ink-2)">${r.b!=null?esc(fmt(r.b)):'n/a'}</text>`});
    const tbl=tableHTML(['',cfg.names[0],cfg.names[1]],cfg.rows.map(r=>[r.label,fmt(r.a)+(r.lo!=null?` [${fmt(r.lo)}–${fmt(r.hi)}]`:''),r.b!=null?fmt(r.b):'not available']));
    el.innerHTML=`<div class="lg"><span><i class="dot" style="background:${cfg.colors[0]}"></i>${esc(cfg.names[0])}</span><span><i class="dot" style="background:transparent;box-shadow:inset 0 0 0 2px ${cfg.colors[1]}"></i>${esc(cfg.names[1])}</span></div>${axisHTML('category',cfg.valLabel||'value')}<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(cfg.aria||'Dumbbell chart')}" style="margin-top:8px">${g}${m}</svg>${tbl}`;
  }

  /* ----- sparkline thumbnail ----- */
  function spark(el,cfg){if(CAP)return;mount(el,()=>{
    const W=width(el),H=cfg.h||96;
    const sl=Math.max(0,...cfg.series.map(s=>String(s.startLabel||'').length));
    const P={l:sl?sl*7.2+12:(cfg.refs?30:6),r:cfg.rpad||Math.max(...cfg.series.map(s=>String(s.endLabel||'').length))*7.6+16,t:14,b:cfg.xl?24:14};
    const all=cfg.series.flatMap(s=>s.pts),xs=all.map(p=>p[0]),ys=all.map(p=>p[1]);
    const log=cfg.log,ty=v=>log?Math.log10(v):v,xmin=cfg.xmin??Math.min(...xs),xmax=cfg.xmax??Math.max(...xs),ymin=cfg.min??Math.min(...ys),ymax=cfg.max??Math.max(...ys);
    const sx=x=>P.l+(x-xmin)/(xmax-xmin)*(W-P.l-P.r),sy=y=>P.t+(ty(ymax)-ty(y))/((ty(ymax)-ty(ymin))||1)*(H-P.t-P.b);
    let m='';
    (cfg.refs||[]).forEach(r=>{m+=`<line x1="${P.l}" x2="${W-P.r}" y1="${sy(r.v)}" y2="${sy(r.v)}" stroke="var(--rule)"/><text x="${sl?P.l+2:P.l-6}" y="${sl?sy(r.v)-4:sy(r.v)+3.5}" ${sl?'':'text-anchor="end"'} style="font-size:9.5px">${esc(r.label)}</text>`});
    if(cfg.xl)m+=`<text x="${P.l}" y="${H-6}" style="font-size:9.5px">${esc(cfg.xl[0])}</text><text x="${W-P.r}" y="${H-6}" text-anchor="end" style="font-size:9.5px">${esc(cfg.xl[1])}</text>`;
    const labs=[];
    cfg.series.forEach(s=>{const d=s.pts.map((p,i)=>(i?'L':'M')+sx(p[0]).toFixed(1)+' '+sy(p[1]).toFixed(1)).join(' ');const l=s.pts[s.pts.length-1],f=s.pts[0];
      m+=`<path d="${d}" fill="none" stroke="${s.color}" stroke-width="${s.w||2}" stroke-linejoin="round" stroke-linecap="round"/>`;
      if(s.dotsAll)s.pts.forEach(p=>{m+=`<circle cx="${sx(p[0])}" cy="${sy(p[1])}" r="3" fill="${s.color}" stroke="var(--paper)" stroke-width="1.5"/>`});
      m+=`<circle cx="${sx(l[0])}" cy="${sy(l[1])}" r="4" fill="${s.color}" stroke="var(--paper)" stroke-width="2"/>`;
      if(s.startLabel)m+=`<text x="${sx(f[0])-7}" y="${sy(f[1])+4}" text-anchor="end" class="end" style="font-weight:500;fill:var(--ink-2)">${esc(s.startLabel)}</text>`;
      labs.push({x:sx(l[0])+8,y:sy(l[1])+4,t:s.endLabel})});
    labs.sort((a,b)=>a.y-b.y);for(let i=1;i<labs.length;i++)if(labs[i].y-labs[i-1].y<14)labs[i].y=labs[i-1].y+14;
    labs.forEach(l=>{m+=`<text x="${l.x}" y="${l.y}" class="end">${esc(l.t)}</text>`});
    el.innerHTML=`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(cfg.aria||'')}">${m}</svg>`})}

  /* ----- measurement record: one row per link, one lane per indicator, one tick per observation ----- */
  const sigSVG=(x,y,l)=>[0,1,2,3].map(k=>`<rect x="${x+k*6}" y="${y-(5+k*3)}" width="4" height="${5+k*3}" rx="1" fill="${l===0?'none':(k<l?'var(--ink)':'var(--rule)')}" ${l===0?'stroke="var(--ink-3)" stroke-width=".8" stroke-dasharray="1.5 1.5"':''}/>`).join('');
  function record(el,cfg){mount(el,()=>drawRecord(el,cfg))}
  function drawRecord(el,cfg){
    const W=width(el),narrow=W<780,LW=narrow?0:196,RW=narrow?0:204,P={l:LW+6,r:RW+8,t:44,b:28};
    const xmin=cfg.x.min,xmax=cfg.x.max,sx=x=>P.l+(x-xmin)/(xmax-xmin)*(W-P.l-P.r);
    const lh=narrow?11:14,th=narrow?7:9,pad=narrow?8:10,head=narrow?24:0,minL=narrow?2:3;
    let y=P.t,g='',m='',hit='';const lanes=[];
    cfg.rows.forEach((r,ri)=>{
      const nd=r.lanes.filter(l=>l.kind==='d').length,np=r.lanes.length-nd,slots=r.lanes.length+(nd?0:1);
      const h=head+pad*2+Math.max(slots,minL)*lh;
      g+=`<line x1="0" x2="${W}" y1="${y}" y2="${y}" stroke="${ri?'var(--rule)':'var(--ink)'}"/>`;
      const cnt=nd+' direct'+(np?' · '+np+' nearby':'');
      if(narrow){g+=`<text x="2" y="${y+17}" class="cat halo" style="font-weight:650">${esc(r.name)}</text><text x="${W-2}" y="${y+17}" text-anchor="end" class="halo" style="font-size:10.5px">${esc(cnt)}</text>`}
      else{g+=`<text x="2" y="${y+pad+10}" style="font-size:11px">${String(ri+1).padStart(2,'0')}</text><text x="28" y="${y+pad+11}" class="cat" style="font-weight:650;font-size:14px">${esc(r.name)}</text>${sigSVG(28,y+pad+31,r.level)}<text x="58" y="${y+pad+30}" style="font-family:var(--f-display);font-size:11.5px;fill:var(--ink-2)">${esc(r.word)}</text><text x="28" y="${y+pad+47}" style="font-size:10.5px">${esc(cnt)} series</text>`}
      const off=(Math.max(slots,minL)-slots)*lh/2;let li=0;
      if(!nd){const ly=y+head+pad+off;m+=`<rect x="${P.l}" y="${ly+1.5}" width="${W-P.l-P.r}" height="${lh-3}" fill="url(#rechatch)" stroke="var(--rule)" stroke-width=".8"/>`;
        if(narrow)m+=`<text x="${(P.l+W-P.r)/2}" y="${ly+lh-3}" text-anchor="middle" class="halo" style="font-size:9.5px;letter-spacing:.1em;fill:var(--ink)">NO DIRECT READING</text>`;
        else m+=`<text x="${W-P.r+10}" y="${ly+lh-3.5}" style="font-size:10.5px;fill:var(--ink);font-weight:600">no direct reading found</text>`;li=1}
      r.lanes.forEach(l=>{const ly=y+head+pad+off+li*lh;li++;const i=lanes.length;lanes.push({r,l,y:ly});const col=l.kind==='d'?'var(--s1)':'var(--ctx)';
        hit+=`<rect class="lane" data-i="${i}" x="${P.l}" y="${ly}" width="${W-P.l-(narrow?P.r:8)}" height="${lh}" fill="transparent"/>`;
        m+=`<g>`+(l.bar?`<rect x="${sx(l.xs[0]).toFixed(1)}" y="${(ly+lh/2-1.75).toFixed(1)}" width="${(sx(l.xs[l.xs.length-1])-sx(l.xs[0])).toFixed(1)}" height="3.5" rx="1.75" fill="${col}"/>`
          :l.xs.map(x=>`<rect x="${(sx(x)-1.3).toFixed(1)}" y="${(ly+(lh-th)/2).toFixed(1)}" width="2.6" height="${th}" rx=".6" fill="${col}"/>`).join(''))+`</g>`;
        if(!narrow)m+=`<text x="${W-P.r+10}" y="${ly+lh-3.5}" style="font-size:10.5px;fill:${l.kind==='d'?'var(--ink)':'var(--ink-2)'}">${esc(l.name)}</text>`});
      y+=h});
    g+=`<line x1="0" x2="${W}" y1="${y}" y2="${y}" stroke="var(--ink)"/>`;
    const H=y+P.b;let ax='';
    cfg.x.ticks.forEach(v=>{ax+=`<line x1="${sx(v)}" x2="${sx(v)}" y1="${P.t}" y2="${y}" stroke="var(--grid)"/><text x="${sx(v)+3}" y="${P.t-8}">${v}</text><text x="${sx(v)+3}" y="${y+16}">${v}</text>`});
    (cfg.vlines||[]).forEach(v=>{ax+=`<line x1="${sx(v.x)}" x2="${sx(v.x)}" y1="4" y2="${y}" stroke="var(--ink-3)" stroke-dasharray="2 3"/><text x="${sx(v.x)-6}" y="13" text-anchor="end" class="ann">${esc(v.label)}</text>`});
    if(!narrow)ax+=`<text x="${W-P.r+10}" y="${P.t-8}">SERIES</text>`;
    const defs=`<defs><pattern id="rechatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="var(--ink)" stroke-opacity=".28" stroke-width="1.1"/></pattern></defs>`;
    const tbl=tableHTML(['Link','Series','Kind','Readings shown','First','Last'],lanes.map(o=>[o.r.name,o.l.full||o.l.name,o.l.kind==='d'?'direct':'nearby',o.l.xs.length,fmtDate(o.l.xs[0]),fmtDate(o.l.xs[o.l.xs.length-1])]));
    const sw=(c,w,h,r)=>`<i class="box" style="background:${c};width:${w}px;height:${h}px;border-radius:${r}px"></i>`;
    el.innerHTML=`<div class="lg"><span>${sw('var(--s1)',3,11,0)}${esc(cfg.names[0])}</span><span>${sw('var(--ctx)',3,11,0)}${esc(cfg.names[1])}</span><span>${sw('var(--s1)',16,3.5,2)}${sw('var(--ctx)',16,3.5,2)}${esc(cfg.names[2])}</span><span><i class="box hat" style="width:22px;height:9px;border-radius:0"></i>${esc(cfg.names[3])}</span></div>${axisHTML('date of reading','step and source series')}<div style="position:relative;margin-top:10px"><svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(cfg.aria||'')}">${defs}${ax}${g}<rect class="lanehl" x="${P.l}" width="${W-P.l-(narrow?P.r:8)}" height="${lh}" y="0" fill="var(--surface-2)" visibility="hidden"/>${m}${hit}</svg><div class="tip"></div></div>${tbl}`;
    const svg=el.querySelector('svg'),tip=el.querySelector('.tip'),hl=el.querySelector('.lanehl');
    el.querySelectorAll('.lane').forEach(n=>{const o=lanes[+n.dataset.i];n.style.cursor='pointer';
      n.addEventListener('pointermove',e=>{const b=svg.getBoundingClientRect();hl.setAttribute('y',o.y);hl.setAttribute('visibility','visible');tip.innerHTML='';
        const d=document.createElement('div');d.className='d';d.textContent=o.r.name+' · '+(o.l.kind==='d'?'direct':'nearby');
        const t=document.createElement('div');t.className='r';t.style.whiteSpace='normal';const bb=document.createElement('b');bb.textContent=o.l.full||o.l.name;t.appendChild(bb);
        const c=document.createElement('div');c.className='nt';c.textContent=(o.l.xs.length===1?'1 reading, '+fmtDate(o.l.xs[0]):o.l.xs.length+' readings, '+fmtDate(o.l.xs[0])+' to '+fmtDate(o.l.xs[o.l.xs.length-1]))+(o.l.bar?' (monthly)':'');
        tip.append(d,t,c);tipAt(el,tip,Math.min(e.clientX-b.left,W-P.r),o.y+10,W)});
      n.addEventListener('pointerleave',()=>{tip.style.display='none';hl.setAttribute('visibility','hidden')});
      n.addEventListener('click',()=>cfg.onPick&&cfg.onPick(o.r,o.l))});
  }

  /* Point estimates with horizontal intervals; category labels stay above each row. */
  function intervals(el,cfg){if(CAP)return;mount(el,()=>{
    const W=width(el),P={l:24,r:24,t:14,b:32},rh=78,H=P.t+rh*cfg.rows.length+P.b;
    const sx=x=>P.l+(x-cfg.min)/(cfg.max-cfg.min)*(W-P.l-P.r);
    let g=cfg.ticks.map(x=>`<line x1="${sx(x)}" x2="${sx(x)}" y1="${P.t}" y2="${H-P.b}" stroke="var(--grid)"/><text x="${sx(x)}" y="${H-10}" text-anchor="middle">${x>0?'+':''}${x}</text>`).join('');
    g+=`<line x1="${sx(0)}" x2="${sx(0)}" y1="${P.t}" y2="${H-P.b}" stroke="var(--ink-2)" stroke-dasharray="3 3"/>`;
    cfg.rows.forEach((r,i)=>{const y=P.t+i*rh,col=i===0?C.s1:C.s2;
      g+=`<text x="${P.l}" y="${y+14}" class="cat">${esc(r.label)}</text><text x="${W-P.r}" y="${y+14}" text-anchor="end" class="end">${esc(r.value)}</text>`;
      if(r.low!=null)g+=`<line x1="${sx(r.low)}" x2="${sx(r.high)}" y1="${y+45}" y2="${y+45}" stroke="${col}" stroke-width="3"/><path d="M${sx(r.low)} ${y+39}v12 M${sx(r.high)} ${y+39}v12" stroke="${col}"/>`;
      g+=`<circle cx="${sx(r.value)}" cy="${y+45}" r="6" fill="${col}" stroke="var(--surface)" stroke-width="2"/>`;
    });
    el.innerHTML=`<div class="chart-y-label">${esc(cfg.category)}</div><svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(cfg.aria)}">${g}</svg><div class="chart-x-label">${esc(cfg.axis)}</div>`;
  })}
  return {line,bars,cols,stack,dumbbell,intervals,spark,record,capture,redraw};
})();
