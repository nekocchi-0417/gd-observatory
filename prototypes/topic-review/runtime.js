'use strict';

const requestedTopic = new URLSearchParams(location.search).get('topic') || 'skills';
const GD_TOPIC_ID = Object.hasOwn(GD_TOPIC_CONFIG,requestedTopic) ? requestedTopic : 'skills';
const GD_REVIEW = GD_EXPANSION[GD_TOPIC_ID] || null;
for (const [id,review] of Object.entries(GD_EXPANSION)) {
  Object.assign(GD_TOPIC_CONFIG[id],{name:review.name,question:review.question,synthesis:review.pageSynthesis || review.synthesis,gaps:review.gaps});
}
const GD_TOPIC = GD_TOPIC_CONFIG[GD_TOPIC_ID];
const topicURL = (page = 'index.html', params = {}) => `${page}?${new URLSearchParams({topic:GD_TOPIC_ID,...params})}`;
const GD_FACETS = GD_TOPIC_ID === 'skills' ? [
  {id:'learning',label:'Learning and skills',tags:['learning','skill','expertise','memory/offloading']},
  {id:'decisions',label:'Decision-making',tags:['decision quality']},
  {id:'reliance',label:'Trust and reliance',tags:['trust','reliance/automation bias','dependence']},
  {id:'agency',label:'Critical thinking and agency',tags:['critical thinking/metacognition','autonomy','sense of agency/ownership']}
] : GD_REVIEW.facets.map(facet => ({...facet,tags:[facet.description]}));
const GD_DESIGNS = GD_TOPIC_ID === 'skills' ? [
  {id:'comparison',label:'Tests and trials'}, {id:'survey',label:'Surveys'},
  {id:'synthesis',label:'Reviews'}, {id:'other',label:'Other'}
] : [
  {id:'snapshot',label:'One-time findings'}, {id:'repeated',label:'Repeated measures'},
  {id:'longitudinal',label:'Same units followed'}, {id:'none',label:'Reviews & proposals'}
];
function designGroup(value) {
  if (['RCT','lab experiment','field experiment','quasi-experiment','natural experiment'].includes(value)) return 'comparison';
  if (['review','meta-analysis'].includes(value)) return 'synthesis';
  if (['cross-sectional survey','panel survey'].includes(value)) return 'survey';
  return 'other';
}
function durationGroup(value) {
  if (value === 'single session') return 'session';
  if (['days','weeks'].includes(value)) return 'short';
  if (['months','years'].includes(value)) return 'long';
  return 'unknown';
}
function mapColumn(source) { return GD_TOPIC_ID === 'skills' ? designGroup(source.design) : source.assessment?.temporal; }
function matchesFacet(source, id) {
  const facet = GD_FACETS.find(item => item.id === id);
  if (!facet) return true;
  return GD_TOPIC_ID === 'skills' ? source.constructs.some(tag => facet.tags.includes(tag)) : Boolean(source.assessment?.facets.includes(id));
}
function sourceKey(value) {
  try {
    const url = new URL(value);
    const arxiv = url.hostname.includes('arxiv.org') && url.pathname.match(/\/(?:abs|pdf)\/(\d{4}\.\d{4,5})/);
    if (arxiv) return `arxiv:${arxiv[1]}`;
    for (const key of [...url.searchParams.keys()]) if (/^utm_|^(fbclid|gclid)$/.test(key)) url.searchParams.delete(key);
    url.searchParams.sort();
    return `${url.hostname.replace(/^www\./,'')}${url.pathname.replace(/\/$/,'')}${url.search}`.toLowerCase();
  } catch { return value; }
}
const titleKey = value => value.toLowerCase().replace(/[^a-z0-9]/g,'');
const kindLabels = {series:'Repeated indicator',study:'Empirical study',review:'Research review',proposal:'Proposed measure',framework:'Conceptual framework'};
const inspectedRecords = GD_REVIEW ? GD_REVIEW.sources.map(source => ({
  id:`${GD_TOPIC_ID}:${source.id}`,rawIds:[source.id],title:source.title,
  citation:`${source.authors}, ${source.year}`,url:source.url,year:source.year,
  kind:source.kind,topics:[GD_TOPIC_ID],design:source.design,measures:[source.measure],
  constructs:source.facets,setting:source.population,country:source.geography,
  studySpan:'unclear',venue:source.publisher,publication:'See original source',
  cadence:source.duration,assessment:source
})) : [];
const inspectedURLs = new Set(inspectedRecords.map(source => sourceKey(source.url)));
const inspectedTitles = new Set(inspectedRecords.map(source => titleKey(source.title)));
const GD_LANDSCAPE = GD_TOPIC_ID === 'skills' ? GD_SKILLS_LANDSCAPE : [
  ...inspectedRecords,
  ...GD_COLLECTIONS[GD_TOPIC_ID].filter(source => !inspectedURLs.has(sourceKey(source.url)) && !inspectedTitles.has(titleKey(source.title)))
];
const GD_SOURCES = GD_TOPIC_ID === 'skills' ? GD_SKILLS_SOURCES : inspectedRecords.filter(record => record.assessment.selected).map((record,index) => {
  const source = record.assessment;
  return {id:source.id,landscapeId:record.id,featured:index < 3,title:source.title,year:String(source.year),
    kind:kindLabels[source.kind],design:source.design,authors:source.authors,publisher:source.publisher,
    scope:source.geography,measure:source.measure,followUp:source.duration,
    headline:source.pageHeadline || source.headline,finding:source.pageFinding || source.finding,why:source.selectionReason,limit:source.limitations,
    context:`${source.population} Measures: ${source.measure} Source access: ${source.status === 'primary-fulltext' ? 'relevant sections of the primary paper or report' : source.status === 'primary-abstract' ? 'primary abstract only' : 'official summary or dataset description'}.`,locator:source.locator,url:source.url};
});
const GD_CATALOG = GD_LANDSCAPE.map(source => {
  const picked = GD_SOURCES.find(item => item.landscapeId === source.id);
  return {...source,year:picked ? Number(picked.year) : source.year,
    studySpan:source.id === 'lira2025' ? 'days' : source.studySpan,
    design:source.id === 'wecks2024' ? 'observational study' : source.design};
});
