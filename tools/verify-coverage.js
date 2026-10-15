const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const path=require('node:path');
const topics=require('../src/priority.json');
const PAGE='file://'+path.resolve(__dirname,'../docs/index.html');
const OUT=path.resolve(__dirname,'../../../outputs');
const MAJOR=['skills','institutions','influence'];

async function settle(page){
  await page.evaluate(async()=>{
    await document.fonts.ready;
    document.documentElement.style.scrollBehavior='auto';
    window.scrollTo(0,0);
    await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  });
}

function contrast(a,b){
  const luminance=rgb=>rgb.map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((n,v,i)=>n+v*[.2126,.7152,.0722][i],0);
  const values=[luminance(a),luminance(b)].sort((x,y)=>y-x);
  return (values[0]+.05)/(values[1]+.05);
}

(async()=>{
  const browser=await chromium.launch(),errors=[];
  try{
    for(const width of [1440,1280,1024,768,390,340])for(const colorScheme of ['light','dark']){
      const context=await browser.newContext({viewport:{width,height:1000},colorScheme});
      const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
      await page.goto(PAGE+'#map');await settle(page);
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Map overflow: ${width} ${colorScheme}`);
      const legend=await page.locator('#homeMap .coverage-key5').boundingBox();
      const diagram=await page.locator(width>=980?'.map5':'.mlist5').boundingBox();
      assert.ok(legend.y+legend.height<=diagram.y,'Legend must precede diagram');
      const mapRatings=await page.locator('.st5').evaluateAll(nodes=>Object.fromEntries(nodes.map(n=>[n.dataset.id,n.dataset.coverage])));
      assert.deepEqual(Object.keys(mapRatings).filter(id=>mapRatings[id]==='major'),MAJOR);
      if(width>=980){
        const badText=await page.locator('.map5>svg').evaluate(svg=>{
          const box=svg.viewBox.baseVal,texts=[...svg.querySelectorAll('text')].map(e=>({text:e.textContent,b:e.getBBox()}));
          const bad=texts.filter(({b})=>b.x<0||b.y<0||b.x+b.width>box.width||b.y+b.height>box.height).map(x=>'Outside: '+x.text);
          for(let i=0;i<texts.length;i++)for(let j=i+1;j<texts.length;j++){
            const a=texts[i].b,b=texts[j].b;
            if(a.x<b.x+b.width&&a.x+a.width>b.x&&a.y<b.y+b.height&&a.y+a.height>b.y)bad.push('Overlap: '+texts[i].text+' / '+texts[j].text);
          }
          return bad;
        });
        assert.deepEqual(badText,[],`Diagram text: ${width}`);
        await page.locator('.st5[data-id="skills"]').focus();await page.keyboard.press('ArrowRight');
        assert.equal(await page.locator('.st5[aria-pressed="true"]').getAttribute('data-id'),'culture');
        await page.locator('.st5[data-id="influence"]').focus();await page.keyboard.press('Enter');
        assert.equal(await page.locator('.priority6 h1').innerText(),topics.influence.h1);
        await page.goto(PAGE+'#map');await settle(page);
        await page.locator('.st5[data-id="capability"]').hover();
        await page.locator('.map5 [data-t="open"]').click();
        assert.equal(await page.locator('.evidence-chart7').count(),1);
      }else{
        assert.equal(await page.locator('.ml5.open').getAttribute('data-id'),'skills');
        for(const id of MAJOR)assert.ok(await page.locator(`.ml5[data-id="${id}"] .ml5-prompt`).isVisible());
        await page.locator('.ml5[data-id="influence"] .ml5-btn').click();
        await page.locator('.ml5.open [data-t="open"]').click();
        assert.equal(await page.locator('.priority6 h1').innerText(),topics.influence.h1);
      }
      await page.goto(PAGE+'#map');await settle(page);
      if(width===1440||width===390)await page.locator('#homeMap').screenshot({path:path.join(OUT,`coverage-map-${width}-${colorScheme}.png`),style:'.bar{visibility:hidden}'});
      await page.goto(PAGE+'#evidence');await settle(page);
      assert.equal(await page.locator('.er5').count(),9);
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Evidence overflow: ${width}`);
      const evidenceRatings=await page.locator('.er5').evaluateAll(nodes=>Object.fromEntries(nodes.map(n=>[n.getAttribute('href').slice(1),n.dataset.coverage])));
      assert.deepEqual(evidenceRatings,mapRatings,'Coverage must agree across pages');
      const colors=await page.locator('.er5 .coverage-badge5').evaluateAll(nodes=>nodes.map(n=>({fg:getComputedStyle(n).color.match(/\d+/g).slice(0,3).map(Number),bg:getComputedStyle(document.body).backgroundColor.match(/\d+/g).slice(0,3).map(Number)})));
      colors.forEach(({fg,bg})=>assert.ok(contrast(fg,bg)>=4.5,`Coverage text contrast: ${width} ${colorScheme}`));
      await page.locator('.coverage-note5 a').click();await page.waitForTimeout(100);
      assert.equal(await page.locator('.coverage-reasons5>div').count(),9);
      assert.ok(await page.evaluate(()=>scrollY>0),'Coverage explanation deep link must scroll');
      assert.ok(await page.evaluate(()=>document.querySelector('#m-coverage h2').getBoundingClientRect().top>=document.querySelector('.bar').getBoundingClientRect().bottom),'Coverage heading must clear the navigation');
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Method overflow: ${width}`);
      await page.locator('.coverage-reasons5 a[href="#skills"]').click();
      assert.equal(await page.locator('.evidence-chart7').count(),1);
      if(width===1440||width===390){await page.goto(PAGE+'#evidence');await settle(page);await page.screenshot({path:path.join(OUT,`coverage-evidence-${width}-${colorScheme}.png`),fullPage:true});}
      await context.close();console.log(`Passed ${width}px ${colorScheme}`);
    }
    assert.deepEqual(errors,[]);
    console.log('Coverage consistency, legend position, text layout, contrast, keyboard controls and research links passed.');
  }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
