(() => {
  const control = document.querySelector('.appearance22');
  const buttons = [...control.querySelectorAll('[data-theme-choice]')];
  const apply = theme => {
    document.documentElement.setAttribute('data-theme', theme);
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme)));
  };
  apply(document.documentElement.getAttribute('data-theme'));
  control.addEventListener('click', event => {
    const button = event.target.closest('[data-theme-choice]');
    if (!button || !control.contains(button)) return;
    const theme = button.dataset.themeChoice;
    apply(theme);
    try { localStorage.setItem('gd-dashboard-theme', theme); } catch (_) {}
  });
  window.addEventListener('storage', event => {
    if (event.key === 'gd-dashboard-theme' || event.key === null) {
      apply(event.newValue === 'dark' ? 'dark' : 'light');
    }
  });
})();
