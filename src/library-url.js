// Shared URL identity for the AI-assisted bibliography; this does not verify sources.
const libraryURL14 = (() => {
  const trackingParameters = new Set([
    'fbclid', 'gclid', 'dclid', 'msclkid', 'mc_cid', 'mc_eid', 'igshid',
    '_hsenc', '_hsmi', '__hssc', '__hstc', '__hsfp', 'mkt_tok'
  ]);
  const doiHosts = new Set(['doi.org', 'www.doi.org', 'dx.doi.org']);
  const doiPublishers = new Set([
    'dl.acm.org', 'www.science.org', 'science.org', 'www.pnas.org', 'pnas.org',
    'onlinelibrary.wiley.com', 'journals.sagepub.com', 'www.tandfonline.com'
  ]);
  const arxivHosts = new Set(['arxiv.org', 'www.arxiv.org', 'export.arxiv.org']);

  function arxivId(value) {
    const match = value.match(/^(\d{4}\.\d{4,5}|[a-z][a-z0-9.-]*\/\d{7})(?:v\d+)?(?:\.pdf)?$/i);
    return match ? match[1].toLowerCase() : null;
  }

  function doiURL(value) {
    if (!/^10\.\d{4,9}\/\S+$/i.test(value)) return null;
    const doi = value.toLowerCase();
    const arxiv = doi.startsWith('10.48550/arxiv.') && arxivId(doi.slice('10.48550/arxiv.'.length));
    if (arxiv) return 'https://arxiv.org/abs/' + arxiv;
    return 'https://doi.org/' + doi.split('/').map(encodeURIComponent).join('/');
  }

  return function libraryURL14(value) {
    if (typeof value !== 'string') return null;
    const input = value.trim();
    if (!input || /[\u0000-\u0020\u007f]/.test(input)) return null;
    let url;
    try { url = new URL(input); } catch { return null; }
    if (!['http:', 'https:'].includes(url.protocol) || !url.hostname || url.username || url.password) return null;
    url.hash = '';
    for (const key of [...url.searchParams.keys()]) {
      if (key.toLowerCase().startsWith('utm_') || trackingParameters.has(key.toLowerCase())) url.searchParams.delete(key);
    }
    url.searchParams.sort();

    let pathname;
    try { pathname = decodeURIComponent(url.pathname); } catch { return null; }
    // Encoded spaces are valid in document filenames; control characters are not.
    if (/[\u0000-\u001f\u007f]/.test(pathname)) return null;
    if (arxivHosts.has(url.hostname)) {
      const match = pathname.match(/^\/(?:abs|pdf|html)\/(.+?)\/?$/);
      const id = match && arxivId(match[1]);
      if (id) return 'https://arxiv.org/abs/' + id;
    }
    if (doiHosts.has(url.hostname)) {
      return doiURL(pathname.slice(1)) || url.href;
    }
    if (doiPublishers.has(url.hostname)) {
      const match = pathname.match(/^\/doi\/(?:abs\/|full\/|pdf\/|pdfdirect\/|epdf\/)?(10\.\d{4,9}\/.+)$/i);
      if (match) return doiURL(match[1]) || url.href;
    }
    // Preserve content queries and publisher paths unless a source ID is explicit.
    return url.href;
  };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = libraryURL14;
