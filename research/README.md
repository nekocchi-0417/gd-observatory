# Research workflow

This folder holds the notes and reviews behind the site. Human approval is not assumed. Use the current [90-minute selected-indicator review](checklist/selected-indicators-review.md), with [primary-source audit records](verified-2026-10/). The public review route has been retired. Earlier notes and chart extractions are not automatically approved by the new selection.

## Source review, 13 October 2026

The supplied 95-page landscape scan was cross-referenced against the pre-edit website citations and repository research. A smaller selection of two primary-source records per topic now drives the page headlines, source panels and manual checklist. Each records design, dates, rationale, finding, limit and two checks. AI-assisted primary-source reading is not independent replication or human verification.

- [PDF reference crosswalk](../docs/pdf-source-crosswalk.html): identifier/URL matching, editorial decisions and matching limitations. Links are not unique-study counts.
- [Priority sources](../src/priority.json): the current published selection, not an exhaustive ranking of the literature.
- Earlier source collections remain in the research folders; they are not automatically approved for the current dashboard.
- The 42-item `handcheck.csv` below is historical, not the current review workload. Forecasts and proposed measurement instruments are outside the 1-2 hour pass.

## How it was done

1. **Frame the chain.** The argument in *Gradual Disempowerment* (Kulveit and co-authors, 2025) was broken into nine stops, from AI capability to human influence. The skills and judgement branch draws on later work on measuring disempowerment (Chooi, Lee and Li, 2026).
2. **Gather evidence by domain.** Six research passes, one per part of the chain, collected indicators, dated data points and sources. Each figure is labelled by how it was obtained: PRIMARY (read on the publisher's own page or paper) or SECONDARY (reported by someone else).
3. **Spot-check against primary sources.** The most important series were re-read at source. Where notes disagree, `07_primary_checks.md` wins.
4. **Build, then review in rounds.** After each version of the site:
   - a fact-check compared every sentence and chart with the notes and sources;
   - a copy-edit cut jargon and tightened wording;
   - a design critique reviewed screenshots at desktop and phone widths, in light and dark;
   - a red-team review argued the case against the site's own framing.
5. **Rate each link.** Two separate judgements per link: how well it is measured (repeated? direct? independent of the firms involved? tied to AI?) and what the data show (how far repeated data have moved the way the theory predicts). Both are explained on the site's Method page.

## Files

### `notes/`: the evidence

| File | Covers |
|---|---|
| `01_capability_adoption.md` | What AI can do (METR task lengths, GDPval, prices) and who uses it (Gallup, Census, St. Louis Fed, Eurostat) |
| `02_labour_power.md` | Entry-level work, workers' share of income, ownership of AI capital |
| `03_agency_skills.md` | Skills and judgement: studies of ability with and without AI, literacy tests, reliance |
| `04_culture_information.md` | AI-made content, attention, news and search |
| `05_institutions_state.md` | Government AI inventories, courts, decisions routed through AI |
| `06_forecasts.md` | Published forecasts used on the Futures page |
| `07_primary_checks.md` | Primary-source checks of the main series; wins on conflict |

### `reviews/`: the checks

| File | What it is |
|---|---|
| `08_factcheck.md`, `12_factcheck_v3.md`, `14_factcheck_v4.md` | Fact-checks of successive versions, with each fix |
| `10_copyedit.md` | Plain-language copy-edit |
| `09_design_critique.md`, `11_design_critique_v3.md`, `15_design_critique_v4.md` | Design reviews from screenshots |
| `13_redteam.md` | Red-team review of the framing and claims |
| `17_ux_spec.md` | The readability spec behind the current version: one message per page, detail one click deeper |
| [`18_counterevidence_pending_review.md`](reviews/18_counterevidence_pending_review.md) | Withdrawn counter-evidence proposals and their origin; marked **To be verified** |

### `landscape/`: review of AI and human agency, skills and judgement (review 3.0)

A broad review of research on how AI affects people's agency, skills, expertise and decisions, at individual, group and institutional level. Compiled 10 to 12 October 2026. It feeds the Skills and judgement stop on the site.

- **Counts:** 361 studies and 98 measures or frameworks; 292 studies checked against the paper's own page or abstract. Of 233 empirical studies of generative AI, 21 test people without AI, 22 follow the same people for months or longer, and 4 do both.
- **Files:** `review-3.0.md` (the write-up; its tables are not reproduced in Markdown and can be rebuilt from the JSON files), `master.json` (every study, coded), `instruments.json` (measures you can reuse), one note per search pass (`skills.md`, `judgement.md`, `beliefs.md`, `dependence.md`, `group.md`, `institutions.md`, `evals.md`, `constructs.md`), and `SPEC.md` (the shared brief for the passes).
- **Limits:** a broad scoping sweep, not a systematic review. Every pass hit its search limit before finishing. "None found" means none found in that search. Mostly US and UK studies in English. "Checked" means the paper's own page or abstract was read, not the full paper.

### `scan4/`: landscape scan 4.0 of the other eight stops

One research pass per stop (capability, adoption, hand-over, entry-level work, workers' share, culture, institutions, human influence), run on 12 October 2026 to update the site to draft v0.5.

- **Counts:** 419 coded items (indicators, studies, forecasts and frameworks), 297 of them read at source during the pass. Per stop: capability 47, adoption 49, hand-over 40, entry-level work 63, workers' share 60, culture 60, institutions 55, human influence 45.
- **Files:** `<stop>.md` (status on the site, best series, key studies, sceptic's case, gaps, proposed ratings and proposed site changes), `<stop>.jsonl` (every item, coded), `SPEC.md` (the shared brief), `SITE_BRIEF.md` (which proposals were applied), `FACTCHECK.md` (a check of the proposed figures against their sources) and `CHANGELOG.md` (what changed on the site, and what was left out).
- **Limits:** broad, not systematic. The shared search budget ran out in every pass (after about 20 to 30 searches each), and some sources could not be read from the research environment. Items marked `verified: false` were not read at source.

### `checklist/`

`handcheck.csv` lists 42 headline figures in priority order, with the source link, what to look for, and how each was obtained so far. Fill in `checked_by_author` as figures are verified. It was written for draft v0.4. In v0.5 several shown texts changed (rows 1, 3, 4, 5, 10, 16, 29, 31, 37 and 38: indicator counts, the capability headline, Gallup, workers' share, decision counts, the human-influence cards, junior hiring, work hours and the human-in-the-loop figure), so check those rows against the current site.

## Limits

- Searches were broad but not exhaustive. "None found" means none found in that search, not that none exists.
- Most series are from the US or UK.
- Some figures come from secondary reports or the companies whose products are measured; the site tags these.
- The reviews record how the site changed. Some describe earlier versions, so line references may no longer match.
