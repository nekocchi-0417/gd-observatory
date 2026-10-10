// Takes full-page screenshots of the built site.
// Usage: node tools/screenshot.js "name|route|width|light-or-dark" ...
//   e.g. node tools/screenshot.js "home|map|1280|light" "skills|skills|390|dark"
// Images are written to assets/screenshots/<name>.png
const { chromium } = require('playwright');
const path=require('path');
const PAGE='file://'+path.resolve(__dirname,'..','docs','index.html');
(async()=>{const b=await chromium.launch();
 for(const a of process.argv.slice(2)){const [name,hash,w,scheme]=a.split('|');
  const ctx=await b.newContext({viewport:{width:+w,height:900},colorScheme:scheme||'light'});const p=await ctx.newPage();
  await p.goto(PAGE+'#'+hash);await p.waitForTimeout(900);
  const h=await p.evaluate(()=>document.documentElement.scrollHeight);
  await p.setViewportSize({width:+w,height:Math.min(h,9000)});await p.waitForTimeout(400);
  const out=path.resolve(__dirname,'..','assets','screenshots',name+'.png');
  await p.screenshot({path:out});console.log(out);await ctx.close()}
 await b.close()})();
