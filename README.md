# Gradual Disempowerment Observatory

A public evidence map for gradual disempowerment: tracking whether AI is weakening human influence, link by link, and what goes unmeasured.

![The home page: the chain from AI capability to human influence, with line style showing how well each stop is measured](assets/screenshots/home.png)

**Status: draft v0.6 (13 October 2026).** A draft evidence map. AI tools helped find and summarise the sources; headline figures are being checked against primary sources before v1.0, and corrections from authors and domain experts are welcome. Every chart says how its figures were obtained and links to its source. Check the source before citing a figure. A checklist of the headline figures to verify is in [`research/checklist/handcheck.csv`](research/checklist/handcheck.csv).

## What it shows

Gradual disempowerment is the risk that people lose practical influence over the economy, culture and the state as AI systems replace human work and participation ([Kulveit and co-authors, 2025](https://gradual-disempowerment.ai/)).

The site breaks that argument into a chain of nine stops: AI capability, AI adoption, delegation to AI, then four branches (entry-level jobs and workers' share of income, skills and judgement, culture and information, AI in government), ending at human influence. Each stop's page is a short briefing: the bottom line, how confident to be, the evidence, caveats, blind spots and signals to watch.

The main finding: what AI can do and who uses it are measured again and again. Whether people keep their skills, judgement and say is rarely measured, and almost never on the same people over time.

| Page | What it answers |
|---|---|
| **Map** (home) | How could disempowerment unfold? Nine steps, each with a card; then a summary of what is measured often, early signs, and what is hard to see. |
| **Evidence** | What do we already observe? One row per link; a record of every dated reading since 2021 sits behind a drawer. |
| **Link pages** | The indicators behind each link, each opening its own chart. |
| **Gaps** | The measurement agenda: nineteen missing measures, grouped by what each needs next (fund now, develop methodology, monitor later). |
| **Futures** | Published forecasts, mostly about US jobs and income. Work in progress. |
| **Method** | How the ratings are reached, how indicators are chosen, known limits and all sources. |
| **Contribute** | Why measure gradual disempowerment, and how to help: propose an indicator or study, suggest a correction, find funding. |

<table><tr>
<td><img src="assets/screenshots/evidence.png" alt="The Evidence page: one row per link, coloured by how far the data have moved"></td>
<td><img src="assets/screenshots/gap.png" alt="The gap page: a matrix of how close each stop is to the outcome against how well it is measured"></td>
</tr></table>

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
  style.css, components.css, pages.css
  shell_head.html, shell_body.html
docs/index.html    the built site (served by GitHub Pages)
research/          how the evidence was gathered and checked (see research/README.md)
tools/             verification and screenshot scripts
```

To change a figure, edit the indicator in `data1.js` or `data2.js` (its chart data, `title`, `read` and `src`), then any matching text in `copy.js`, then rebuild.

## How it was made

The evidence was gathered and checked with an AI-assisted research workflow: parallel research passes per domain, spot checks against primary sources, then several rounds of fact-checking, copy-editing, design critique and red-teaming. The notes and reviews are in [`research/`](research/README.md), so every rating can be traced back to its evidence. Draft v0.6 rebuilt the home page, the evidence pages and the gaps page after a design review, and added the GitHub issue forms in `.github/ISSUE_TEMPLATE/`. Draft v0.5 adds a fourth scan of the evidence for eight stops ([`research/scan4/`](research/scan4/)) and a landscape review of AI's effects on skills and judgement ([`research/landscape/`](research/landscape/)).

## Corrections

Corrections and suggestions are welcome. Please open an issue with the page, the figure, and a link to the source.

## Licence

- Code (`src/`, `tools/`, `build.sh`): [MIT](LICENSE).
- Content (page text, data compilations and everything in `research/`): [CC BY 4.0](LICENSE-CONTENT.md). Reuse freely with credit.

Figures and quotations from third-party sources remain the property of their publishers; each is linked to its source.

## Cite as

Zhang Yue (2026). *Gradual Disempowerment Observatory* (draft v0.6). Better Futures Project.
