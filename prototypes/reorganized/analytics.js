function installAnalytics(config) {
  'use strict';
  const nav = window.navigator;
  // Fail closed: local previews, unset accounts and privacy signals send nothing.
  if (!config.enabled || !config.endpoint || location.origin !== config.siteOrigin ||
      !location.pathname.startsWith(config.basePath) || nav.globalPrivacyControl ||
      nav.doNotTrack === '1' || nav.doNotTrack === 'yes' || window.doNotTrack === '1') return;
  const topics = new Set(['capability','adoption','handover','work','share','skills','culture','institutions','influence']);
  const pages = {'home':'Home','gaps':'Research gaps','gaps/method':'Review method','projects':'Projects & grants','contribute':'Contribute'};
  const aliases = {map:'home',method:'gaps/method',methods:'gaps/method',about:'gaps/method',futures:'projects',grants:'projects'};
  let route = null, seen = new Set(), queue = [], ready = false, failed = false, frame = 0;
  let visibleMs = 0, lastTick = Date.now(), visible = !document.hidden, scrolled = false;
  function currentPage() {
    const file = location.pathname.slice(config.basePath.length);
    if (file === '' || file === 'index.html') {
      const hash = (location.hash || '#home').slice(1);
      if (hash === 'main-content') return route || {path:'/home',title:'Home'};
      const parts = hash.split(/[/?]/), root = parts[0];
      if (topics.has(root) || ['gaps','topic'].includes(root) && topics.has(parts[1])) return null;
      const id = hash === 'gaps/method' ? 'gaps/method' : aliases[root] || root;
      // Redirect-only routes are counted at their destination, once.
      return pages[id] ? {path:'/'+id,title:pages[id]} : null;
    }
    if (file === 'skills.html') return {path:'/explorer',title:'Paper explorer'};
    if (file === 'topics/evidence.html') return {path:'/evidence',title:'Selected evidence'};
    if (file === 'topics/topics.html') return {path:'/topics',title:'Topic library overview'};
    if (['topics/index.html','topics/library.html'].includes(file)) {
      const value = new URLSearchParams(location.search).get('topic');
      const topic = topics.has(value) ? value : 'skills';
      const kind = file.includes('library') ? 'library' : 'topic';
      return {path:`/${kind}/${topic}`,title:`${kind}: ${topic}`};
    }
    return null;
  }
  function send(value) {
    if (failed) return;
    // Never use automatic document titles, queries, referrers or element text.
    const payload = {...value,referrer:''};
    if (ready) { try { window.goatcounter.count(payload); } catch (_) {} }
    else if (queue.length < 50) queue.push(payload);
  }
  function event(name) {
    if (!route || document.hidden || seen.has(name)) return;
    seen.add(name);
    send({path:`${name}:${route.path.slice(1).replaceAll('/','-')}`,title:name.replaceAll('_',' '),event:true});
  }
  function page() {
    const next = currentPage();
    if (next?.path === route?.path) return;
    route = next; seen = new Set(); visibleMs = 0; lastTick = Date.now(); scrolled = false;
    if (route) send({...route,event:false});
  }
  function isVisible(element) {
    if (!element || !element.getClientRects().length) return false;
    const rect = element.getBoundingClientRect();
    const shown = Math.min(rect.bottom,window.innerHeight)-Math.max(rect.top,0);
    return shown >= Math.min(rect.height,window.innerHeight)*.5;
  }
  function scan() {
    frame = 0;
    if (!route || document.hidden) return;
    const range = document.documentElement.scrollHeight-window.innerHeight;
    if (scrolled && range > 100) {
      const depth = Math.min(1, Math.max(0,window.scrollY/range));
      for (const level of [25,50,75,100]) if (depth >= (level === 100 ? .98 : level/100)) event(`scroll_${level}`);
    }
    if (route.path === '/home') {
      const track = document.getElementById('gd-story30');
      if (isVisible(document.getElementById('story-visual30'))) {
        const beat = track?.dataset.beat;
        if (/^[0-4]$/.test(beat || '')) event(`story_step_${Number(beat)+1}`);
      } else {
        for (const section of document.querySelectorAll('.story-static30>section')) {
          if (isVisible(section.querySelector('h2'))) event(`story_step_${Number(section.dataset.beat)+1}`);
        }
      }
    }
  }
  function schedule() {
    // Run after the homepage's animation frame has updated its scene.
    if (!frame) frame = window.requestAnimationFrame(() => { frame = window.requestAnimationFrame(scan); });
  }
  function tick() {
    const now = Date.now();
    if (visible && !document.hidden) visibleMs += Math.min(now-lastTick,2000);
    lastTick = now; visible = !document.hidden;
    if (visibleMs >= 30000) event('engaged_30_seconds');
  }
  window.goatcounter = {no_onload:true,no_events:true,endpoint:config.endpoint};
  const script = document.createElement('script');
  script.src = 'https://gc.zgo.at/count.js'; script.async = true;
  script.referrerPolicy = 'no-referrer';
  script.onload = () => {
    ready = typeof window.goatcounter.count === 'function';
    if (!ready) { failed = true; queue = []; return; }
    const pending = queue; queue = []; pending.forEach(send);
  };
  script.onerror = () => { failed = true; queue = []; };
  document.head.append(script);
  page(); schedule();
  window.addEventListener('hashchange', () => { page(); schedule(); });
  window.addEventListener('popstate', () => { page(); schedule(); });
  window.addEventListener('scroll', () => { scrolled = true; schedule(); }, {passive:true});
  window.addEventListener('resize', schedule);
  document.addEventListener('visibilitychange', () => { tick(); schedule(); });
  window.setInterval(tick,1000);
  document.addEventListener('click', e => {
    const target = e.target.closest?.('a,button,[role="button"]');
    if (!target || target.closest('[data-analytics-ignore]')) return;
    if (target.matches('[data-paper]')) { event('inspect_paper'); return; }
    if (target.matches('[data-node],[data-pair-a],[data-view]')) { event('explorer_filter'); return; }
    if (target.matches('.map-cell')) event('evidence_map_open');
    if (target.matches('.story-open30')) event('story_explorer_open');
    const href = target.getAttribute('href');
    if (!href) return;
    let url; try { url = new URL(href,location.href); } catch (_) { return; }
    if (!['http:','https:'].includes(url.protocol)) return;
    if (url.origin !== location.origin) event(route?.path === '/contribute' ? 'contribute_click' : 'source_open');
    else if (url.pathname.endsWith('/skills.html') || url.hash === '#explorer') event('explorer_open');
  });
}
