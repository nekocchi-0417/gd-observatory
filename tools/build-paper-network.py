"""Build an isolated, offline-capable preview; never changes the public docs build."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'src/library-view-data.json').read_text())
template = (ROOT / 'prototypes/paper-network/index.html').read_text()
for name in ['matcher.js', 'app.js', 'style.css']:
    template = template.replace('/* INLINE:' + name + ' */', (ROOT / 'prototypes/paper-network' / name).read_text())
template = template.replace('/* INLINE:DATA */', json.dumps(data, ensure_ascii=True).replace('<', '\\u003c'))
output = ROOT / 'dist/paper-network/index.html'
output.parent.mkdir(parents=True, exist_ok=True)
output.write_text(template)
print(output)
