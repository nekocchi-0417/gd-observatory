# Gradual Disempowerment Dashboard

A public evidence dashboard for gradual disempowerment: tracking whether AI is weakening human influence, step by step, and what goes unmeasured.

![The home page: technical-task capability and employment trends, with separate sources and axes](assets/screenshots/home.png)

**Status: research prototype (16 October 2026).** The homepage and Emerging evidence compare AI progress with selected human outcomes. Research gaps brings each topic's evidence and missing measures together. AI-assisted primary-source checks are not independent verification. The [comparison source review](research/checklist/comparison-source-review.md) documents chart choices; the [OWID source review](research/reviews/24_owid_source_review.md) covers the latest supporting additions. The [90-minute review](research/checklist/selected-indicators-review.md) covers the selected indicators. The older `handcheck.csv` is an archive.

## What it shows

Gradual disempowerment is the risk that people lose practical influence over the economy, culture and the state as AI systems replace human work and participation ([Kulveit and co-authors, 2025](https://gradual-disempowerment.ai/)).

The site breaks that argument into a chain of nine stops: AI capability, AI adoption, delegation to AI, then four branches (entry-level jobs and workers' share of income, skills and judgement, culture and information, AI in government), ending at human influence. Each step separates **Currently measured** indicators from **Measurement gaps**, with short findings, source links and essential limits. Detailed source notes and a searchable, AI-assisted **Evidence library** remain collapsed at the bottom; the large charts are on Home and Emerging evidence.

The library reuses the earlier research collections as bibliography entries, without republishing their unchecked numerical claims. It is not a systematic review or a list of independently verified studies. Current selected-source metadata takes precedence where references overlap. Project background and the original paper are under **Contribute**, also linked as **About** in the footer.

The adoption comparison follows Gallup's three overlapping usage groups, with OWID as a visual reference and newer observations from Gallup's own table. Delegation includes a collapsed supporting chart of California robotaxi passenger travel from CPUC data processed by OWID. FrontierMath is a related capability reference only; no new headline capability chart or coverage rating is introduced.

Within this selection, AI capability and use have repeated measurements. Direct longitudinal measures of skills, judgement and influence are more limited. This is not a systematic review of all research, and paired trends are not proof of cause and effect.

| Page | What it answers |
|---|---|
| **Home** | AI capability and employment: a first comparison, with links into the dashboard. |
| **Emerging evidence** | Paired evidence on work, skills and culture. Time-series lines where supported; numerical summaries for snapshots. |
| **Research gaps** | The proposed pathways and a measured-versus-missing overview, linking to nine topic pages with indicator cards, gaps and study ideas. |
| **Futures** (footer) | Published forecasts, mostly about US jobs and income. Work in progress. |
| **Method** | How the ratings are reached, how indicators are chosen, known limits and all sources. |
| **Contribute** | Why measure gradual disempowerment, and how to help: propose an indicator or study, suggest a correction, find funding. |

## View it

- **Online:** https://nekocchi-0417.github.io/gd-observatory/
- **On your computer:** open `docs/index.html` in a browser. It is one self-contained file.

To switch on GitHub Pages: in the repository, go to **Settings → Pages**, set **Source** to "Deploy from a branch", pick branch `main` and folder `/docs`, and save.

## Build it

The site is plain HTML, CSS and JavaScript with no framework. The build joins the files in `src/` into one page.

```sh
sh build.sh            # writes docs/index.html
sh build.sh artifact   # writes dist/artifact.html, for publishing as a Claude artifact
```

Optional checks (needs Node.js):

```sh
npm install
npx playwright install chromium
npm run verify         # every page at desktop and phone widths, light and dark
node tools/verify-selected-data.js  # source-data arithmetic and build syntax
node tools/verify-library.js        # bibliography provenance, deduplication and safe URLs
node tools/verify-owid.js --sources  # OWID additions, responsive charts and original Gallup table
```

## Where things live

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

Current figures are defined in `capability.js`, `adoption.js` and `selected-topics.json`; comparisons use `comparison-data.js` and `comparison.js`. Topic summaries and gap cards live in `measurement-data.js`. Update matching interpretations, source notes, CSVs and tests, then rebuild. Legacy `#pathways`, `#map` and `#evidence` links now reach the merged Research gaps page. `data1.js` and `data2.js` retain the earlier indicator collection. Verification screenshots are saved under `dist/verification/`.

After editing the earlier research collections, run `node tools/build-evidence-library.js` to regenerate the bibliography, inspect its skipped/merged-record report, then rebuild. `node tools/build-evidence-library.js --check` checks that the committed catalog is current. `#library/skills` and equivalent links open the library within the corresponding step page.

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
