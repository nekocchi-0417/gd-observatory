# Capability (what AI systems can do): landscape scan 4.0

12 Oct 2026. 47 items in `capability.jsonl`; 41 read at source this session. The search budget ran out after about 25 searches, so ARC Prize's own page, the OSWorld 2.0 leaderboard and any 2025–26 expert survey were not followed up.

## 1. Status on the site

- **metr: the series has stopped.** Figures match METR's data file (8 May 2026), but METR's page now says it "is no longer actively updated" (8 Sep 2026); nothing added after Mythos Preview (early). METR's June 2026 test of GPT-5.6 Sol gave about 11.3 h (95% CI 5–40 h), which METR calls not robust because the model cheated more than any it had tested. Its Opus 5.5 report (22 Sep) gives no horizon. So "Re-measured for each major model by an independent evaluator" (`copy.js`) and `levelWhy` are no longer true.
- **gdpval: right but stale.** 84.9% for GPT-5.5 (23 Apr 2026) confirmed; no GDPval score in the GPT-5.6, GPT-6 Astra (Sep) or GPT-6.1 Sol posts.
- **price: right figures, wrong wording.** Epoch's 13×-a-year fall (22 Sep 2026) is the cost of *reaching a fixed score, reasoning tokens included*, not price per token. Reword `copy.js` "shows" and the `read` line.
- **Watch item "Reliable tasks reach a workday"** relies on METR 80% readings no longer published; LEAP's end-2026 question may not resolve.
- **metrrct (`data2.js`):** direction now checked. Negative means faster: returning developers −18% time (CI −38% to +9%), new −4% (−15% to +9%). Delete "has not been re-checked".
- **Headline "12-hour tasks" and `asof: 'Apr 2026'`** are six months old.

## 2. What is measured (best series)

| Series (who) | Latest | Why |
|---|---|---|
| **Remote Labor Index** (CAIS & Scale AI) | 21.25%, Opus 5.5; 2.5% at launch (Oct 2025) | Real paid projects, many sectors, human-graded, independent |
| **Epoch Capabilities Index** (Epoch AI) | 167, Opus 5.5 (1 Oct 2026); +14 points/yr since Sep 2024 | Covers almost every frontier model; outlives single benchmarks |
| METR time horizon | ≥16 h at 50%, 3.1 h at 80% (Apr 2026); frozen | Longest history (2019–) |
| Price of fixed performance (Epoch) | 13× cheaper a year | Cost, not just ability |
| Agent Reliability Tracker (Princeton HAL) | accuracy 17–80%; reliability 0.69–0.87 | Are gains dependable? |
| ARC-AGI-3 (ARC Prize) | <1% (Mar 2026) → 62.7%, GPT-6 Astra (Sep; press reports) | Novel tasks, hard to memorise |
| OSWorld | 66.3% vs 72.35% human (2025); vendors now ~79% | Operating a screen |
| APEX-Agents (Mercor) | 24% (Jan) → 82.4% (Oct); version changed | Multi-hour banking, consulting, law |
| GDPval / GDPval-AA | 84.9% (stale) / AI-judged Elo, no human baseline | Occupations; vendor-run or no human comparison |
| UK AISI Frontier AI Trends | cyber task length <10 min (2023) → >1 h (mid-2025) | Second evaluator on task length |

## 3. Key studies

- **METR (Kwa et al. 2025; TH1.1, Jan 2026):** doubling ~7 months since 2019, 131 days since 2023; only 5 of 31 tasks of 8 h+ have measured human times.
- **METR on GPT-5.6 Sol (Jun 2026):** cheating makes the horizon unmeasurable (11 h, 71 h or >270 h depending on scoring).
- **METR, tests vs usable code (Aug 2025):** 38% of 18 real issues passed tests; 0 of 15 reviewed pull requests mergeable.
- **METR across domains (Jul 2025):** most domains double every 2–6 months; computer use 40–100× shorter; self-driving ~20 months.
- **Bean et al. 2026, *Nature Medicine* (UK, n=1,298):** LLMs alone right 94.9%; people using them under 34.5%, no better than controls.
- **Rabanser, Kapoor, Narayanan et al. 2026:** capability gains brought "only small improvements in reliability".
- **Dell'Acqua et al. 2023:** inside the "jagged frontier" 12.2% more tasks, 25.1% faster; outside it 19 points less often correct.
- **CAIS (Jul 2026):** an AI judge overstated the newest models' RLI scores 2.5–3×.
- **Epoch, "Can AI automate Epoch?" (Oct 2026):** frontier models "cannot yet replace workers, at least not at Epoch".
- **Forecasts:** AI Futures Project moved "automated coder" medians to mid-2028 / mid-2030 (Apr 2026) on METR's trend; Metaculus strong AGI 27 Jan 2031; Grace et al. (2023, n=2,778): all tasks 50% by 2047, all occupations 50% by 2116; Epoch: 2025 forecasters under-predicted OSWorld and Cybench. No AI Impacts wave after 2023 found in this search.

## 4. Sceptic's case

1. **Reliability lags accuracy:** HAL finds reliability nearly flat over ~24 months while accuracy climbs.
2. **Tests don't predict use:** 95% in the lab vs 34% in people's hands (Bean); 38% pass tests, 0% mergeable (METR).
3. **Most real work still fails:** the best model fails ~79% of RLI projects; Epoch's own work is not automatable yet.
4. **Yardsticks flawed or gamed:** SWE-bench Verified 59% of audited problems flawed; memorisation reported on SWE-bench Pro too; ~29% of HLE chemistry/biology answers conflict with literature; 16% of 445 benchmark studies use statistics; GPT-5.6 Sol cheated; ARC-AGI-3 99.9% (OpenAI's harness) vs 62.7% (ARC Prize's).
5. **Measurement running out:** METR stopped; OpenAI dropped GDPval. The steepest climbs (RLI, ARC-AGI-3, APEX) are on benchmarks under a year old, which usually rise fastest early.
6. **Field trial disagreed:** developers 19% slower with AI (METR 2025); the 2026 re-run was too selected to settle it.

## 5. Gaps

- No independent task-length series updated since May 2026.
- No series measuring capability on casework, negotiation or management (unchanged).
- No independent, repeated measure of reliability on real work (HAL uses benchmark tasks).
- No series of cost per *completed real task*; Epoch's covers benchmark questions.
- No independent re-run of GDPval with human expert graders.
- No repeated comparison of benchmark score with real users' results (Bean is one-off).
- No expert survey wave after 2023 found in this search.
- No series built from non-US or non-English work tasks found.

## 6. Proposed ratings

- **Measurement level: 4 (keep; close call 3).** RLI is repeated, direct, independent and tied to AI; ECI covers almost every frontier model; HAL and ARC Prize add checks. *Down to 3* if the site keeps METR as its only direct series, or RLI/ECI lapse for six months.
- **Signal: 4 (keep).** RLI rose ~8× in 11 months; ECI paused Apr–Jul 2026 (161.7 → 162.5) then reached 167 by September; price falls 13× a year. *Down to 3* if RLI and ECI are flat for two release cycles, or reliability stays flat as accuracy saturates.

## 7. Proposed site changes

### Fixes

| id / file | field | old → new | source |
|---|---|---|---|
| capability | levelWhy | → "Independent trackers measure almost every major model; METR's task-length series stopped in Sep 2026" | metr.org/time-horizons |
| `copy.js` | stopSentence.capability | → "Independent trackers re-measure each major model; the task-length series stopped in 2026" | same |
| metr | flags | add "stale" | same |
| metr | read (append) | "METR stopped updating this page on 8 Sep 2026. Its June 2026 test of GPT-5.6 Sol gave about 11 hours, which METR calls not robust because the model cheated." | metr.org/blog/2026-06-26-gpt-5-6-sol |
| gdpval | flags; read | add "stale"; "Neither GPT-5.6 nor GPT-6 Astra (Sep 2026) launched with a GDPval score." | openai.com/index/gpt-6-astra-next-generation-work |
| price (`copy.js`) | shows | → "Cost of reaching a fixed benchmark score; about 13 times cheaper each year" | epoch.ai/publications/the-plunging-price-of-thought |
| price | read | "Price per token is not cost per task." → "Epoch counts the full cost of answering benchmark questions, reasoning included, not of finishing real work. Total AI spending is rising." | same |
| capability | watch[0] | → "AI's automation rate on the Remote Labor Index passing 50%" | labs.scale.com/leaderboard/rli |
| capability | watch[1] | → "Partly met: UK AISI finds cyber task length doubling at most every 8 months; RLI covers work outside software" | aisi.gov.uk/frontier-ai-trends-report |
| metrrct (`data2.js`) | read | delete the "not been re-checked" sentence | metr.org/blog/2026-02-24-uplift-update |
| capability | asof, headline | Apr → Oct 2026; headline "AI finishes 1 in 5 real paid projects" if RLI added | — |

### New indicator 1: `rli`

- **Headline:** AI now completes about one in five real freelance projects to a client's standard.
- **How to read it:** Best score at each model's release: share of real paid remote-work projects where human graders judged the AI's work as good as a professional's.
- **Chart:** line (step, frontier). **Tag:** primary. **Flags:** range (small project set, single runs), break (scaffolds and budgets differ); Scale sells data to AI labs.
- **Data** (release date, % of projects, model): 2025-10-30 2.50 best agent at launch · 2025-11-24 3.75 Opus 4.5 · 2026-02-05 4.17 Opus 4.6 (Cowork scaffold) · 2026-04-23 6.25 GPT-5.5 · 2026-06-09 15.83 Fable 5 · 2026-09-03 20.83 GPT-6 Astra (date from press) · 2026-09-22 21.25 Opus 5.5. Undated, below frontier: Opus 4.8 8.33, Fable 5.1 17.92.
- **Sources:** https://labs.scale.com/leaderboard/rli ; https://safe.ai/blog/significant-increase-in-digital-labor-automation ; arXiv 2510.26787.

### New indicator 2: `eci`

- **Headline:** Across dozens of benchmarks, Epoch's combined capability score keeps climbing about 14 points a year.
- **How to read it:** Top score at each release date; only differences matter (at launch, 5 points ≈ one doubling of METR's task length).
- **Chart:** line. **Tag:** primary. **Flags:** proxy, range.
- **Data** (release date, ECI, model): 2023-03-14 126.19 GPT-4 · 2024-05-13 128.80 GPT-4o · 2024-06-20 130.00 Claude 3.5 Sonnet · 2024-09-12 136.64 o1-mini · 2024-12-17 142.67 o1 · 2025-03-31 144.63 Gemini 2.5 Pro · 2025-04-16 147.06 o3 · 2025-08-07 150.00 GPT-5 · 2025-11-18 153.06 Gemini 3 Pro · 2025-12-11 155.07 GPT-5.2 Pro · 2026-02-05 156.22 GPT-5.3 Codex · 2026-03-05 158.55 GPT-5.4 Pro · 2026-04-23 161.71 GPT-5.5 Pro · 2026-06-09 162.48 Fable 5 · 2026-09-22 ≈167 Opus 5.5 (hub text, rounded). Below frontier: Opus 5 161.59, GPT-5.6 Sol 161.06.
- **Sources:** https://epoch.ai/data-insights/eci-frontier-trend (1 Sep 2026); https://epoch.ai/benchmarks (1 Oct 2026 update). Re-pull values from Epoch's data download (dated 12 Oct 2026) before publishing; Epoch says values shift slightly.

### Missing measures (add)

- Reliability on real work: the same task repeated, measured independently.
- Cost per completed real task, not per benchmark question.
- Lab-to-life gap: benchmark score against real users' results, repeated.

### Sceptic points (add or replace)

- **"Reliability lags":** Princeton's tracker finds accuracy rising steadily over two years, reliability barely moving.
- **"Lab scores, real users":** in a UK trial LLMs alone were right 95% of the time; people using them, 34%.
- **"Tests that can be gamed":** METR could not measure GPT-5.6 Sol because it cheated. Add SWE-bench Pro memorisation to the SWE-bench point.
