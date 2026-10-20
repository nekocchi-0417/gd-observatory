# Gradual Disempowerment Dashboard

A public evidence dashboard for gradual disempowerment: tracking whether AI is weakening human influence, step by step, and what goes unmeasured.

**Status: research prototype (19 October 2026).** The accepted pre-comparison homepage is restored, with six selected visuals under Evidence, a Research gaps overview, Projects & grants, Contribute and Method. Light/dark controls retain the reader's preference; light is the default. AI-assisted checks do not establish independent verification. The earlier research notes and screenshots describe different versions and should be read with their dates.

## What it shows

Gradual disempowerment is the risk that people lose practical influence over the economy, culture and the state as AI systems replace human work and participation ([Kulveit and co-authors, 2025](https://gradual-disempowerment.ai/)).

The site breaks that argument into nine stops: AI capability, AI adoption, delegation to AI, then branches covering jobs and income, skills and judgement, culture, and government, ending at human influence. The selected topic pages retain their charts, source notes and measurement questions. Evidence presents three comparisons with separate sources and units.

The repository's working library reuses earlier research collections as bibliography entries without republishing unchecked numerical claims. It is not a systematic review or a list of independently verified studies. A separate library view is planned; the accepted restored topic layout does not yet expose the full collection.

The adoption comparison follows Gallup's three overlapping usage groups. The two culture visuals use the same platform's reports, so six visuals do not represent six independent studies. No new narrative, forecast display or coverage rating is introduced by this release.

Within this selection, AI capability and use have repeated measurements. Direct longitudinal measures of skills, judgement and influence are more limited. This is not a systematic review of all research, and paired trends are not proof of cause and effect.

| Page | What it answers |
|---|---|
| **Home** | The original framing, causal diagram and three-row overview. |
| **Evidence** | Six selected visuals on work, learning and culture, with sources and caveats. |
| **Research gaps** | A provisional 2x2 grouping linking to the nine topic pages. |
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
```

The static tests do not verify rendered browser layout. `build:artifact` and the older browser-check scripts are retained for historical versions; they are not the current publication workflow.

## Where things live

- `prototypes/reorganized/`: accepted base, page overrides, manually maintained directory, Method and theme controls.
- `tools/build-reorganized-preview.js`: preview and public build; `--publish` writes `docs/`.
- `src/comparison-data.js`, `src/comparison.js`, `src/capability.js`, `src/adoption.js`: data/chart helpers imported by the current builder. The builder deliberately excludes the newer source router and homepage.
- `research/library-curation.json`: bibliography-only corrections, preserving original research records.

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

After editing research records or the curation overlay, run `node tools/build-evidence-library.js`, inspect its skipped/merged-record report, and run `node tools/verify-library.js`. `node tools/audit-library-records.js` regenerates the metadata audit. Bibliographic repair does not approve a study's findings.

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
