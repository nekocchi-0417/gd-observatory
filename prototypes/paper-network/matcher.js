/* Topic relevance only: neither evidence direction nor research quality. */
(function (root) {
  const nodes = [
    ['capability','AI capability',['ai capability','ai capabilities','benchmark','benchmarks','model performance','frontier model','frontier models','task completion']],
    ['adoption','AI adoption',['ai adoption','ai use','ai usage','use of ai','using ai','technology adoption','chatgpt use','usage survey']],
    ['handover','Delegation to AI',['delegation','delegate','delegating','automation bias','algorithmic advice','decision support','decision-support','ai reliance','overreliance','over-reliance','human oversight']],
    ['work','Entry-level jobs',['entry-level','entry level','junior workers','junior developers','employment','hiring','job displacement','labor market','labour market','early career']],
    ['share',"Workers’ share of income",['labor share','labour share','wages','wage','income inequality','income distribution','worker compensation','bargaining power','productivity gains']],
    ['skills','Skills and judgement',['critical thinking','cognitive offloading','deskilling','skill retention','learning','reasoning','judgment','judgement','cognitive','dependence','withdrawal','self-efficacy']],
    ['culture','Culture and information',['misinformation','disinformation','creativity','creative writing','cultural','culture','news','information ecosystem','synthetic media','deepfake','deepfakes','content generation']],
    ['institutions','AI in government',['government','public sector','public administration','public services','algorithmic governance','administrative decisions','welfare','policing','judicial']],
    ['influence','Human influence',['human agency','autonomy','democratic','democracy','political influence','human control','contestability','disempowerment','participation','sense of agency','ownership']]
  ].map(([id,label,keywords]) => ({id,label,keywords}));
  const normalize = text => String(text || '').normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  const contains = (text, phrase) => (' '+normalize(text)+' ').includes(' '+normalize(phrase)+' ');
  // Catalog records are immutable during a preview session.
  const matchCache = new WeakMap();
  function matches(record) {
    if (matchCache.has(record)) return matchCache.get(record);
    const title = record.title || '';
    const metadata = (record.landscape || []).flatMap(c => [...(c.constructs || []),c.domain || '']).join(' ');
    const result = nodes.map(node => {
      const hits = node.keywords.flatMap(term => contains(title,term) ? [{term,field:'title'}] : contains(metadata,term) ? [{term,field:'source metadata'}] : []);
      return {node:node.id,hits,score:hits.reduce((n,h) => n+(h.field==='title'?3:1),0)};
    }).filter(m => m.hits.length).sort((a,b) => b.score-a.score || a.node.localeCompare(b.node));
    matchCache.set(record,result);
    return result;
  }
  function links(record, overrides = {}) {
    const existing = new Set(record.topics || []), suggested = matches(record);
    return nodes.flatMap(node => {
      const decision = overrides[record.id]?.[node.id];
      if (decision === 'remove') return [];
      const match = suggested.find(m => m.node === node.id);
      if (!existing.has(node.id) && !match && decision !== 'keep') return [];
      return [{node:node.id,status:decision === 'keep' ? 'accepted locally' : existing.has(node.id) ? 'existing assignment' : 'keyword suggestion',hits:match?.hits || []}];
    });
  }
  const api = {nodes,normalize,contains,matches,links};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.PaperNodes = api;
})(typeof window !== 'undefined' ? window : globalThis);
