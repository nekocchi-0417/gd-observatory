const fs = require('node:fs');
const path = require('node:path');
const {parseHTML} = require('linkedom');
const root = path.resolve(__dirname,'..');
const {document} = parseHTML(fs.readFileSync(path.join(root,'prototypes/reorganized/base/index.html'),'utf8'));
const sections = [['home','Home'],['evidence','Selected evidence'],['gaps','Research gaps'],['projects','Projects & grants'],['contribute','Contribute'],['method','Method']];
const fonts = document.querySelector('link[href*="fonts.googleapis.com"]').outerHTML;

function header({prefix = '',active = ''} = {}) {
  const mark = document.querySelector('a.mark').cloneNode(true);
  mark.setAttribute('href',`${prefix}#home`);
  const nav = sections.map(([id,label]) => `<a href="${prefix}#${id}"${active === id ? ' aria-current="page"' : ''}>${label.replace(/&/g,'&amp;')}</a>`).join('');
  const controls = ['light','dark'].map((theme,index) => {
    const icon = fs.readFileSync(path.join(root,`prototypes/reorganized/icons/${index ? 'moon' : 'sun'}.svg`),'utf8');
    const label = index ? 'Dark' : 'Light';
    return `<button type="button" data-theme-choice="${theme}" aria-label="${label} mode" aria-pressed="${!index}" title="${label} mode">${icon}<span class="theme-tip22" aria-hidden="true">${label} mode</span></button>`;
  }).join('');
  return `<header class="bar"><div class="wrap">${mark.outerHTML}<nav class="nav" aria-label="Sections">${nav}</nav><div class="appearance22" role="group" aria-label="Colour theme">${controls}</div></div></header>`;
}
module.exports = {header,fonts};
