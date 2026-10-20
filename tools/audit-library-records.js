// Metadata triage; this never promotes a reference to human-verified evidence.
const fs = require('node:fs');
const path = require('node:path');
const {buildCatalog, readCuration} = require('./build-evidence-library');
const root = path.resolve(__dirname, '..');
const {report} = buildCatalog();
const curation = readCuration();
const output = {
  checked: curation.checked,
  scope: curation.scope,
  claimVerification: 'Not performed across the full library. Source identity checks are separate from checks of findings.',
  ...report
};
fs.writeFileSync(path.join(root, 'research/checklist/library-audit.json'), JSON.stringify(output, null, 2) + '\n');
console.log(JSON.stringify({checked: output.checked, ...report.totals, curated: report.curated.length, held: report.skipped.filter(item => item.reason.startsWith('Held')).length, unresolvedYearConflicts: report.ambiguities.filter(item => item.fields.includes('year')).length}));
