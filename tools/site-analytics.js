const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

function analytics({publish = false} = {}) {
  const config = JSON.parse(fs.readFileSync(path.join(root, 'config/analytics.json'), 'utf8'));
  if (config.provider !== 'goatcounter') throw new Error('Unsupported analytics provider');
  if (config.endpoint && !/^https:\/\/[a-z0-9-]+\.goatcounter\.com\/count$/.test(config.endpoint)) throw new Error('Use the account’s HTTPS GoatCounter /count endpoint');
  if (config.siteOrigin !== 'https://nekocchi-0417.github.io' || config.basePath !== '/gd-observatory/') throw new Error('Review the production origin before enabling analytics');
  const enabled = publish && Boolean(config.endpoint);
  const settings = JSON.stringify({...config, enabled}).replace(/</g, '\\u003c');
  const script = fs.readFileSync(path.join(root, 'prototypes/reorganized/analytics.js'), 'utf8');
  const note = enabled
    ? 'This dashboard uses GoatCounter for cookie-free counts of page visits, scrolling and key interactions. Search text, review notes and imported workspaces are not sent. Do Not Track and Global Privacy Control are respected. '
    : 'Visitor analytics are currently off. Search text, review notes and imported workspaces stay in your browser. ';
  return `<details data-analytics-ignore class="wrap" style="box-sizing:border-box;max-width:1280px;margin:0 auto;padding:16px var(--site-gutter,24px);font:12px/1.6 Arial,sans-serif;color:var(--ink-2)"><summary>Privacy &amp; analytics</summary><p>${note}<a href="https://www.goatcounter.com/help/privacy" target="_blank" rel="noopener noreferrer">GoatCounter privacy details</a>.</p></details><script data-gd-analytics>(${script})(${settings});</script>`;
}
module.exports = {analytics};
