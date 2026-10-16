/* Supporting example stays collapsed so the step still opens with its synthesis. */
function robotaxiRows15(){return ROBOTAXI15.rows.filter(r=>r.date>=ROBOTAXI15.displayStart)}

function robotaxiExample15(){
  const r=ROBOTAXI15,rows=robotaxiRows15();
  const csv=[['month','passenger_kilometers','source','checked'],...rows.map(x=>[x.date.slice(0,7),x.value,r.dataURL,r.checked])];
  return `<details class="disclosure7 supporting-example15" id="handover-robotaxis"><summary>Supporting example: driverless taxis</summary><div class="disclosure7-body"><figure aria-labelledby="robotaxi-title15"><figcaption><h3 id="robotaxi-title15">Driverless taxi use has grown in California</h3><p class="source10">${ext7(r.chartURL,'Source: CPUC via Our World in Data')}<span>Nov 2023 - Jun 2026</span></p></figcaption><div class="chart" id="robotaxi-chart15"></div><p class="evidence-note13">One passenger travelling one kilometre = one passenger-kilometre.</p><p class="robotaxi-reading15">Monthly travel grew from about <b>0.32 million passenger-km in November 2023</b> to <b>12.9 million in June 2026</b>.</p></figure><p class="evidence-note13">California paid services; Waymo only in this period. The data leave human driver employment and remote assistance unmeasured.</p><details class="measurement-data11"><summary>Source notes &amp; data</summary><p>Records of paid passenger travel show automation operating outside a test setting. Geography, fleet size and service permissions affect the total. These figures do not establish how much human work was displaced.</p><p>Redrawn from OWID's monthly series, starting after Cruise's October 2023 suspension. Earlier records mix operators and, before August 2023, services with and without onboard safety drivers. Values are unchanged; the line connects monthly observations. Checked with AI assistance on 16 October 2026.</p><p class="source-actions7">${ext7(r.sourceURL,'CPUC reports')}${ext7(r.chartURL,'OWID chart & methods')}${csvLink7('california-robotaxi-passenger-km.csv',csv)}</p><div class="data-scroll7" role="region" tabindex="0" aria-label="Monthly robotaxi passenger-kilometres"><table class="data7"><caption>California paid driverless services: monthly passenger-kilometres</caption><thead><tr><th scope="col">Month</th><th scope="col">Passenger-km</th></tr></thead><tbody>${rows.map(x=>`<tr><th scope="row">${esc(fmtDate(monthlyYear10(x.date)))}</th><td>${esc(x.value.toLocaleString('en-GB',{maximumFractionDigits:3}))}</td></tr>`).join('')}</tbody></table></div></details></div></details>`;
}

function mountRobotaxi15(v){
  const d=$('#handover-robotaxis',v);
  if(!d)return;
  let mounted=false;
  d.addEventListener('toggle',()=>{
    if(!d.open||mounted)return;
    mounted=true;
    const rows=robotaxiRows15();
    Charts.line($('#robotaxi-chart15',v),{h:280,legend:false,table:false,axisPlacement:'edges',
      aria:'Monthly passenger-kilometres in California paid driverless taxi services, Waymo only. November 2023 to June 2026. All 32 months shown; the total rises from 316,579 to 12,946,270 passenger-kilometres, with fluctuations.',
      x:{min:2023.8,max:2026.5,ticks:[ym(2023,11),ym(2025,1),ym(2026,6)],fmt:fmtDate,tip:fmtDate,label:'Observation month'},
      y:{min:0,max:15000000,ticks:[0,5000000,10000000,15000000],fmt:n=>n/1000000+'m',tip:n=>n.toLocaleString('en-GB',{maximumFractionDigits:2})+' passenger-km',label:'Monthly passenger-kilometres (millions)'},
      series:[{name:'California paid driverless services',color:'var(--ai10)',w:2.5,markers:'all',r:2.5,end:false,pts:rows.map(x=>[monthlyYear10(x.date),x.value])}],
      ann:[{x:monthlyYear10(rows.at(-1).date),y:rows.at(-1).value,text:'12.9m',dx:-8,dy:23,anchor:'end',strong:true,lead:true}]
    });
  });
}
