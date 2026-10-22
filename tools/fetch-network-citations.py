"""Optional OpenAlex citation snapshot using exact DOI identifiers only."""
import datetime
import json
import re
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
merged = ROOT / 'dist/network-library.json'
records = json.loads((merged if merged.exists() else ROOT / 'src/library-view-data.json').read_text())['records']

def doi_for(url):
    parsed = urllib.parse.urlparse(url)
    if parsed.hostname in ('doi.org', 'dx.doi.org'):
        return urllib.parse.unquote(parsed.path[1:]).lower()
    if parsed.hostname == 'arxiv.org':
        match = re.search(r'/(?:abs|pdf)/(\d{4}\.\d{4,5})(?:v\d+)?', parsed.path)
        if match:
            return '10.48550/arxiv.' + match[1]
    return None

identifiers = {r['id']: doi_for(r['url']) for r in records}
unique = sorted({doi for doi in identifiers.values() if doi})
snapshot = {'provider': 'OpenAlex', 'retrieved': datetime.datetime.now(datetime.timezone.utc).isoformat(),
            'method': 'Exact DOI, including arXiv DOI identifiers; no title inference.', 'records': {}, 'errors': []}
found = {}
for i in range(0, len(unique), 40):
    query = urllib.parse.urlencode({'filter': 'doi:' + '|'.join(unique[i:i+40]),
                                   'per-page': 50, 'select': 'id,doi,title,cited_by_count'})
    url = 'https://api.openalex.org/works?' + query
    try:
        with urllib.request.urlopen(url, timeout=30) as response:
            data = json.load(response)
        for work in data['results']:
            doi = doi_for(work.get('doi') or '')
            count = work.get('cited_by_count')
            if doi in unique and isinstance(count, int) and not isinstance(count, bool) and count >= 0:
                found[doi] = {'count': count, 'work': work['id'], 'title': work['title'], 'doi': doi}
        print(f'Batch {i//40+1}: {len(data["results"])} matched', flush=True)
    except Exception as error:
        snapshot['errors'].append({'batch': i//40+1, 'error': str(error)})
        print(f'Batch {i//40+1}: {error}', flush=True)
        # Respect rate limits and do not repeatedly retry a service outage.
        break
for id_, doi in identifiers.items():
    if doi in found:
        snapshot['records'][id_] = found[doi]
output = ROOT / 'prototypes/paper-network/citations.json'
if snapshot['errors']:
    partial = ROOT / 'dist/network-citations-partial.json'
    partial.parent.mkdir(parents=True, exist_ok=True)
    partial.write_text(json.dumps(snapshot, indent=2, ensure_ascii=False) + '\n')
    raise SystemExit(f'Refresh incomplete; existing snapshot preserved. Partial results: {partial}')
output.write_text(json.dumps(snapshot, indent=2, ensure_ascii=False) + '\n')
print(f'{len(snapshot["records"])} / {len(records)} references have citation counts')
