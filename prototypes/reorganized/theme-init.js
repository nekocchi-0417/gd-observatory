// Apply the saved choice before styles paint. Light is the default for this preview.
(() => {
  let theme = 'light';
  try {
    const saved = localStorage.getItem('gd-dashboard-theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (_) {
    // Storage can be unavailable when the preview is opened as a local file.
  }
  document.documentElement.setAttribute('data-theme', theme);
})();
