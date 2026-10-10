# Research workflow

This folder holds the notes and reviews behind the site, so every figure and rating can be traced to its evidence. The work was done with AI research assistance between 3 and 8 October 2026. No figure has yet been checked by a person; [`checklist/handcheck.csv`](checklist/handcheck.csv) lists the headline figures to verify first.

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

### `checklist/`

`handcheck.csv` lists 42 headline figures in priority order, with the source link, what to look for, and how each was obtained so far. Fill in `checked_by_author` as figures are verified.

## Limits

- Searches were broad but not exhaustive. "None found" means none found in that search, not that none exists.
- Most series are from the US or UK.
- Some figures come from secondary reports or the companies whose products are measured; the site tags these.
- The reviews record how the site changed. Some describe earlier versions, so line references may no longer match.
