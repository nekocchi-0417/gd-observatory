// Start each visit in light mode; retain an explicit choice within the current tab session.
(() => {
  let theme = 'light';
  try {
    const saved = sessionStorage.getItem('gd-dashboard-visit-theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (_) {
    // Storage can be unavailable when the preview is opened as a local file.
  }
  document.documentElement.setAttribute('data-theme', theme);
})();
