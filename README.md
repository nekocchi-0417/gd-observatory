# Gradual Disempowerment Dashboard

A public evidence dashboard for gradual disempowerment: tracking whether AI is weakening human influence, step by step, and what goes unmeasured.

**Status: research prototype (19 October 2026).** The accepted pre-comparison homepage is restored, with six selected visuals under Evidence, a Research gaps overview, Projects & grants, Contribute and Method. Light/dark controls retain the reader's preference; light is the default. AI-assisted checks do not establish independent verification. The earlier research notes and screenshots describe different versions and should be read with their dates.

## What it shows

Gradual disempowerment is the risk that people lose practical influence over the economy, culture and the state as AI systems replace human work and participation ([Kulveit and co-authors, 2025](https://gradual-disempowerment.ai/)).

The site breaks that argument into nine stops: AI capability, AI adoption, delegation to AI, then branches covering jobs and income, skills and judgement, culture, and government, ending at human influence. The selected topic pages retain their charts, source notes and measurement questions. Evidence presents three comparisons with separate sources and units.

The working library reuses earlier research collections as bibliography entries without republishing unchecked numerical claims. It is not a systematic review or a list of independently verified studies. The separate `#library` subpage is linked from the footer and topic pages, outside the main navigation.

The draft library contains 700 references after matching canonical URLs across topics; 353 have landscape metadata. Its two eight-facet maps cover skills/decision-making and agency/autonomy. Cells count references whose source records contain both tags, not verified construct-specific measurements. Map counts do not determine the dashboard's coverage ratings. Both the bibliography and tags are explicitly AI-assisted and unverified.

Research gaps restores the causal diagram above three coverage columns, replacing the 2x2. The diagram shows connections and links directly to topics; the columns summarise evidence coverage. Research proposals stay on the topic pages. Topic assignments and coverage labels are unchanged.

The adoption comparison follows Gallup's three overlapping usage groups. The two culture visuals use the same platform's reports, so six visuals do not represent six independent studies. No new narrative, forecast display or coverage rating is introduced by this release.

Within this selection, AI capability and use have repeated measurements. Direct longitudinal measures of skills, judgement and influence are more limited. This is not a systematic review of all research, and paired trends are not proof of cause and effect.

| Page | What it answers |
|---|---|
| **Home** | The original framing, causal diagram and three-row overview. |
| **Evidence** | Six selected visuals on work, learning and culture, with sources and caveats. |
| **Research gaps** | A causal diagram followed by Major gaps, Partial coverage and Stronger coverage columns linking to the nine topic pages. |
| **Projects & grants** | Manually checked project and funding listings with dates. |
| **Contribute** | Submit a study, indicator or correction. |
| **Method** | Selection, chart construction, coverage limitations and source-check scope. |

## View it

- **Online:** https://nekocchi-0417.github.io/gd-observatory/
- **On your computer:** open `docs/index.html` in a browser. It is one self-contained file.

To switch on GitHub Pages: in the repository, go to **Settings → Pages**, set **Source** to "Deploy from a branch", pick branch `main` and folder `/docs`, and save.

## Build it

The site is plain HTML, CSS and JavaScript. The current builder combines the accepted historical base in `prototypes/reorganized/base/` with the reorganized components and selected source modules. It does not require a full Git history.

```sh
sh build.sh            # writes docs/index.html
node tools/build-reorganized-preview.js  # writes the local preview under dist/
```

Optional checks (needs Node.js):

```sh
npm install
npm run verify:static  # DOM, routes, SVG geometry, theme and data preservation
node tools/verify-library.js        # bibliography provenance, deduplication and safe URLs
node tools/verify-library-view.js   # cross-topic identities and landscape provenance
node tools/check-reorganized-preview.js # local preview, including library interactions
```

The static tests do not verify rendered browser layout. `build:artifact` and the older browser-check scripts are retained for historical versions; they are not the current publication workflow.

## Where things live

- `prototypes/reorganized/`: accepted base, page overrides, manually maintained directory, Method and theme controls.
- `tools/build-reorganized-preview.js`: preview and public build; `--publish` writes `docs/`.
- `src/comparison-data.js`, `src/comparison.js`, `src/capability.js`, `src/adoption.js`: data/chart helpers imported by the current builder. The builder deliberately excludes the newer source router and homepage.
- `research/library-curation.json`: bibliography-only corrections, preserving original research records.
- `research/library-map-config.json`: explicit construct rows and measure-type columns; no inferred outcome/quality scoring.
- `tools/build-library-view.js`, `src/library-view-data.json`: deduplicated bibliography view with source metadata, excluding unchecked findings and legacy verification flags.
- `prototypes/reorganized/library.js`, `library.css`: secondary library subpage, filters and clickable count maps.

Earlier source architecture, retained for reference and historical exports:

```
src/
  copy.js          all page text (headlines, card labels, gap items, method)
  data1.js         indicators for capability, adoption, hand-over, entry-level work
  data2.js         indicators for workers' share, skills, culture, institutions, human influence
  data3.js         futures scenarios, routes, missing measures, rating rubric, glossary
  signals.js       "what the data show" ratings per link, and the trend word per indicator
  charts.js        hand-written SVG chart kit (line, bars, record strip, and more)
  app.js           router, measurement record, shared charts
  components.js    map, tour, evidence rows, indicator cards, insight cards, gap matrix, caveat chips
  views.js         the pages
  capability.js, adoption.js, topics.js   selected data and reusable chart functions
  priority.json, selected-topics.json    selected source notes and chart data
  comparison.js, comparison.css        comparison views and active router
  comparison-data.js                  original data and provenance for comparisons
  robotaxi-data.js, owid.js            OWID/CPUC supporting data and collapsed chart
  measurement-data.js                 measured indicators and gap summaries for all nine steps
  measurement.js, measurement.css     merged pathways overview and compact step pages
  library.js, library-url.js           searchable bibliography and shared URL normalization
  evidence-library.json               generated metadata from earlier research collections
  style.css, components.css, pages.css
  shell_head.html, shell_body.html
docs/index.html    the built site (served by GitHub Pages)
research/          how the evidence was gathered and checked (see research/README.md)
tools/             verification and screenshot scripts
```

The accepted topic pages inherit their selected releases from the saved base. Check the builder before changing a source module: not every newer `src/` component is active in this version. Update matching interpretations, source notes and tests together. Legacy `#futures` links now open Projects & grants, and `#emerging` opens Evidence.

After editing research records or the curation overlay, run `node tools/build-evidence-library.js`, inspect its skipped/merged-record report, and run `node tools/verify-library.js`. Then regenerate the secondary view with `node tools/build-library-view.js` and test it with `node tools/verify-library-view.js`. The site builder derives fresh view data from the catalog each time. `node tools/audit-library-records.js` regenerates the metadata audit. Bibliographic repair does not approve a study's findings.

The library CSV contains bibliographic details and provenance only, carries an unverified-status column, and neutralises formula-like text. The source/DOM suite tests filters, all displayed cell counts, query escaping, pagination, route persistence and light/dark text contrast. It also checks direct pathway links, keyboard navigation and the absence of repeated gap descriptions on Research gaps. Browser layout checks are separate from this suite.

## How it was made

The evidence was gathered and checked with an AI-assisted research workflow: parallel research passes per domain, spot checks against primary sources, then several rounds of fact-checking, copy-editing, design critique and red-teaming. The notes and reviews are in [`research/`](research/README.md), so every rating can be traced back to its evidence. Draft v0.6 rebuilt the home page, the evidence pages and the gaps page after a design review, and added the GitHub issue forms in `.github/ISSUE_TEMPLATE/`. Draft v0.5 adds a fourth scan of the evidence for eight stops ([`research/scan4/`](research/scan4/)) and a landscape review of AI's effects on skills and judgement ([`research/landscape/`](research/landscape/)).

## Corrections

Corrections and suggestions are welcome. Please open an issue with the page, the figure, and a link to the source.

## Licence

- Code (`src/`, `tools/`, `build.sh`): [MIT](LICENSE).
- Content (page text, data compilations and everything in `research/`): [CC BY 4.0](LICENSE-CONTENT.md). Reuse freely with credit.

Figures and quotations from third-party sources remain the property of their publishers; each is linked to its source.

## Cite as

Zhang Yue (2026). *Gradual Disempowerment Dashboard* (draft v0.8). Better Futures Project.

## Paper–node explorer preview (22 October 2026)

An isolated MVP under `prototypes/paper-network/` uses the 700-reference draft catalog. It does not change the public build or release the held bibliography.

```sh
python3 tools/build-paper-network.py
node tools/verify-paper-network.js
# Open dist/paper-network/index.html, or serve that directory locally.
```

The preview separates existing topic assignments, keyword suggestions, and locally accepted links. Edit the per-node keyword arrays in `matcher.js`. Matching uses normalized whole words/phrases in titles and landscape construct/domain metadata; abstracts are not available in this catalog. Title hits rank above metadata hits. Keyword matches do not establish support, causality, quality, or independent evidence.

Choose a node, inspect the matched phrases, and accept/remove links. Decisions persist in browser storage, support undo, and can be exported/imported as JSON; they do not edit source records. Imports merge decisions and replace conflicting choices for the same reference/node. Files opened directly may have browser-specific storage behavior; localhost is preferred.

The graph shows up to 48 connected references, prioritizing records with more links. Node counts cover all filtered references. All results remain available in the paginated list. Layout positions do not encode semantic distance. This initial graph uses a fixed layout rather than dragging or force simulation.

### Delegation and skill-retention concept pilot

The same preview build also writes `dist/paper-network/pilot.html`, linked from the nine-node explorer. Eight concepts have editable keyword lists, definitions and cross-node mappings. Title and construct/domain metadata matches explain connections; the related-paper panel lists shared concepts rather than inferring citations or agreement.

An initial 40-reference queue is selected deterministically from human/both landscape records classified as studies, favoring records matching more default concepts. It is an unreviewed convenience sample, not a systematic search or representative field sample; changing rules does not change queue membership. Users may switch to the entire catalog.

The comparison table distinguishes catalog hints from user-entered population, design, primary outcome and outcome-specific follow-up. The matrix counts only records the user marks source checked, requiring a source excerpt and page/section. Unknown classifications remain explicit. Reviews do not establish independent verification, causal inference, or field-wide gaps. The matrix uses the current collection/search, independent of concept/status filters, and allows one primary outcome per reference. Related papers can come from outside the queue.

Rules, saved reviews, queue IDs and research notes persist separately from the original node-review workspace. JSON export/import preserves them; import replaces the workspace after validation, saves a browser-local backup and provides undo. Unsaved review form edits survive paper switching within the session, but must be saved before reload/export. Bibliographic data and public publication remain unchanged.
