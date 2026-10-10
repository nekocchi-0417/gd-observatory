# Gradual Disempowerment Observatory — Slice 1: Capability, Adoption, Automation

Compiled 3 October 2026. Covers the first three links of the chain: (1) AI capability and task frontier, (2) adoption and usage, (3) the shift from augmentation to automation / delegation / autonomy.

## How to read the verification labels

- **PRIMARY** — I fetched the publisher's own page or PDF and the number was returned from it.
- **SECONDARY** — a third party quoting the publisher (news outlet, Wikipedia, a mirror of the publisher's PDF).
- **SNIPPET** — seen only in a search-result title or snippet; the page itself was not read.
- **DERIVED** — not printed by the publisher; computed from two published numbers (shown so you can check it). Do not chart these as if published.

Two process limits to know about:

1. Pages were read through a fetch tool that summarises the page. Where a number matters for a headline chart, re-open the source and eyeball it before publishing. I flag the specific cells where the tool's readings disagreed with each other.
2. The web-search allowance for this session ran out part-way through. Everything after that point was fetched from known URLs only. The "could not verify" list at the end is longer than it would otherwise be.

---

## LINK 1 — CAPABILITY AND TASK FRONTIER

### METR task-completion time horizon (50% and 80%)
- chain_link: capability
- measures: The length of software task (measured by how long it takes a skilled human) that a frontier AI model completes with 50% (or 80%) success.
- unit: minutes / hours of human task time
- series:

| Model release date | Model | 50% horizon [95% CI] | 80% horizon | Note / verification |
|---|---|---|---|---|
| Feb 2019 | GPT-2 | ~2 seconds | — | PRIMARY (arXiv 2503.14499v3; original TH1.0 suite) |
| Mar 2023 | GPT-4 (0314) | 3.5 min [1.6, 6.9] | 37 sec | 50%: PRIMARY (METR TH1.1 post; was 5.4 min under TH1.0). 80%: SECONDARY (Wikipedia) |
| Nov 2023 | GPT-4 (1106) | 3.6 min [1.6, 7.5] | — | PRIMARY (TH1.1 post; was 8.5 min under TH1.0) |
| Mar 2024 | Claude 3 Opus | 4 min | 29 sec | SECONDARY (Wikipedia table of METR data) |
| May 2024 | GPT-4o | 6 min | 57 sec | SECONDARY (Wikipedia) |
| Oct 2024 | Claude 3.5 Sonnet (new) | 20 min | 2 min | SECONDARY (Wikipedia) |
| Dec 2024 | o1 | 38 min | 6 min | SECONDARY (Wikipedia) |
| Feb 2025 | Claude 3.7 Sonnet | 60 min [32, 106] | 10 min | 50%: PRIMARY (TH1.1). 80%: SECONDARY |
| Apr 2025 | o3 | 121 min [74, 201] | 24 min | 50%: PRIMARY (TH1.1). 80%: SECONDARY |
| May 2025 | Claude Opus 4 | 101 min [58, 170] | 17 min | 50%: PRIMARY (TH1.1). 80%: SECONDARY |
| Aug 2025 | GPT-5 | 214 min [117, 480] (3h34m) | 32 min | 50%: PRIMARY (TH1.1; was 138 min / "2h17m" under TH1.0). 80%: SECONDARY |
| 19 Nov 2025 | GPT-5.1-Codex-Max | 2h40m [75 min, 5h50m] | 30 min [9, 80] | PRIMARY (METR evaluation report; TH1.0 basis, so not directly comparable with TH1.1 rows) |
| 24 Nov 2025 | Claude Opus 4.5 | 320 min [170, 729] (5h20m) | 42 min | 50%: PRIMARY (TH1.1; was 289 min under TH1.0). 80%: SECONDARY |
| Dec 2025 | GPT-5.2 (high) | 6h34m | 55 min | SECONDARY (Wikipedia) |
| Feb 2026 | Claude Opus 4.6 | 11h59m (current METR figure); first announced as ~14.5h [6h, 98h] | 1h10m | Current figure: SECONDARY (Wikipedia; NextBigFuture citing metr.org). Initial figure: SNIPPET of METR's own X post |
| Apr 2026 (evaluated Mar 2026, early version) | Claude Mythos Preview | "at least 16 hrs" [8.5h, 55h] | 3h06m | SECONDARY (Wikipedia; two independent write-ups quoting METR) |

Models METR's page lists but for which I could not obtain a number: Gemini 3.1 Pro, GPT-5.4, GPT-5.3-Codex, Gemini 3 Pro, Claude Sonnet 4.5, Grok-4, Claude Opus 4.1 and several open-weight models. METR says it has **no** measurement yet for Claude Opus 4.7, Grok 4.3 or GPT-5.5 (page last updated 8 May 2026).

Doubling times METR has stated:

| Period | Doubling time | Source / verification |
|---|---|---|
| 2019–2025, 50% horizon | 207 days [166, 240] ("about 7 months") | PRIMARY (arXiv 2503.14499v3) |
| 2019–2025, 80% horizon | 204 days as returned by the fetch (my recollection of the paper is ~213 days; check) | PRIMARY but flagged |
| 2019–2025, TH1.0 vs TH1.1 | 195.8 days [162, 223] vs 196.5 days | PRIMARY (TH1.1 post, 29 Jan 2026) |
| 2023 onward | 165.3 days [129, 211] (TH1.0) vs 130.8 days [107, 161] (TH1.1) | PRIMARY (TH1.1 post) |
| 2024 onward | 108.9 days (TH1.0) vs 88.6 days (TH1.1) | PRIMARY (TH1.1 post) |

- source: METR — "Task-Completion Time Horizons of Frontier AI Models" — https://metr.org/time-horizons/ — last updated 8 May 2026. METR — "Time Horizon 1.1" — https://metr.org/blog/2026-1-29-time-horizon-1-1/ — 29 Jan 2026. Kwa et al. — "Measuring AI Ability to Complete Long Software Tasks" — https://arxiv.org/abs/2503.14499 — Mar 2025. METR — GPT-5.1-Codex-Max report — https://metr.org/evaluations/gpt-5-1-codex-max-report/ — Nov 2025. Wikipedia table — https://en.wikipedia.org/wiki/METR
- verification: mixed, per row. METR's raw data file (metr.org/assets/benchmark_results_1_1.yaml) could not be read by the fetch tool, so the full model list is not primary-verified.
- cadence: repeated — a new point per major model, usually within weeks of release; suite revised roughly yearly (TH1.0 Mar 2025, TH1.1 Jan 2026)
- signal: leading
- caveats:
  - METR states: "Measurements above 16 hrs are unreliable with our current task suite." Only 5 of 228 tasks are 16+ hours. Opus 4.6 and Mythos sit at or beyond the ceiling, so the newest points are the least trustworthy.
  - Software engineering, ML and cybersecurity tasks only. METR's own limitations note says horizons in other domains can be lower by a large factor (visual computer-use tasks 40–100x lower).
  - The number is the human time of the task, not how long the AI runs unattended. This is the most common misreading.
  - Confidence intervals are wide (roughly 2x either way). The Opus 4.6 estimate moved from ~14.5h to ~12h after publication.
  - The human baseline is a "low-context" professional (new hire or contractor), not an expert who knows the codebase.
  - 50% success is far below what most real work needs; the 80% horizon is 4–10x shorter. Opus 4.6: about 12 hours at 50% but 70 minutes at 80%.
  - Switching suite version changed individual estimates by −57% to +55%.
- counter_evidence:
  - METR's own "Clarifying limitations of time horizon" note lists eleven limits, including benchmark selection bias and that tasks are cleaner than real work — https://metr.org/notes/2026-01-22-time-horizon-limitations/
  - MIT Technology Review, "This is the most misunderstood graph in AI" (5 Feb 2026): critics question whether human time is a valid measure of difficulty and note the graph is almost all coding — https://www.technologyreview.com/2026/02/05/1132254/this-is-the-most-misunderstood-graph-in-ai/
  - METR's 2025 randomised trial found experienced open-source developers were 19% slower with AI tools while believing they were faster, a gap between benchmark and field performance (SNIPPET of METR's X post: https://x.com/METR_Evals/status/1943360399220388093). A 2026 follow-up reportedly could not be completed because developers would not work without AI (SECONDARY, blog: https://blog.robbowley.net/2026/04/04/metrs-developer-productivity-research-2026-update/).
  - LessWrong critique that the 50% jump for Opus 4.6 reflects suite saturation and that the 80% horizon stayed on trend — https://www.lesswrong.com/posts/gBwrmcY2uArZSoCtp/metr-s-14h-50-horizon-impacts-the-economy-more-than-asi

### Price of a fixed level of AI capability
- chain_link: capability
- measures: How much it costs to buy a given, fixed level of model performance, tracked over time.
- unit: US$ per million tokens (or per question); rate of decline per year
- series:

| Date | Value | Note / verification |
|---|---|---|
| Nov 2021 | $60 per million tokens | GPT-3, the only model then reaching MMLU 42. PRIMARY (a16z) |
| Nov 2024 | $0.06 per million tokens | Llama 3.2 3B, same MMLU 42 threshold; 1,000x fall in 3 years, "10x every year". PRIMARY (a16z) |
| Mar 2023 | $37.50 per million tokens | GPT-4-0314, at GPT-4-level score on GPQA Diamond. PRIMARY (Epoch AI) |
| Nov 2023 | $15.00 per million tokens | GPT-4 Turbo, same threshold. PRIMARY (Epoch AI) |
| Feb 2025 | $0.18 per million tokens | Gemini 2.0 Flash, same threshold; Epoch: fell "40x per year"; range across benchmarks "9x to 900x per year". PRIMARY (Epoch AI) |
| Jan 2025 | ~$0.30 per question | o3, GPQA Diamond at 75% accuracy. PRIMARY (Epoch AI, Sept 2026) |
| Mid-2026 | ~$0.0004 per question | GPT-5.6 Luna, same threshold; 725-fold fall in ~18 months. PRIMARY (Epoch AI, Sept 2026) |
| 2023 – mid-2026 | 47% per quarter (13x per year) | Epoch's overall estimate of the fall in price of fixed performance. PRIMARY (Epoch AI, Sept 2026) |
| Mar 2026 → Sep 2026 | $1.15 → $0.68 per million tokens | Effective blended price actually paid by businesses on Ramp (not capability-fixed). PRIMARY (Ramp, vendor data) |

- source: Epoch AI — "LLM inference prices have fallen rapidly but unequally across tasks" — https://epoch.ai/data-insights/llm-inference-price-trends — 12 Mar 2025. Epoch AI — "The plunging price of thought" — https://epoch.ai/publications/the-plunging-price-of-thought — 22 Sep 2026. a16z — "LLMflation" — https://a16z.com/llmflation-llm-inference-cost/ — 12 Nov 2024 (venture firm blog; flag as such).
- verification: PRIMARY for all rows
- cadence: one-off analyses, updated irregularly (Epoch roughly every 12–18 months)
- signal: leading
- caveats:
  - The three sources use different thresholds and benchmarks; do not join them into one line. Chart each as its own short series.
  - Per-token price is not per-task cost. Reasoning models use many more tokens per task, and total enterprise spend is rising, not falling.
  - Epoch notes prices fall fastest just after a capability debuts (66% per quarter) and half as fast two years later (32% per quarter).
  - Benchmarks may be contaminated or over-optimised, which overstates how cheaply "the same capability" is being bought.
  - List prices can be below cost; they are not a measure of underlying compute cost.
- counter_evidence:
  - Epoch itself: "The fastest price drops in that range have occurred in the past year, so it's less clear that those will persist" — https://epoch.ai/data-insights/llm-inference-price-trends
  - Ramp data show spend per employee at heavy-user firms rising steeply even as token prices fall (top 1% of firms: $7,205 per employee per month in Aug 2026) — https://ramp.com/data/ai-index-sept-2026
  - The Stanford AI Index 2025 figure usually quoted here (GPT-3.5-level cost down 280-fold, Nov 2022 to Oct 2024) could not be verified in this session; see end list.

### GDPval — share of real professional tasks done at or above expert level
- chain_link: capability
- measures: How often a model's finished work product is judged as good as or better than an experienced professional's, across 44 knowledge-work occupations.
- unit: % win-or-tie rate against industry experts
- series:

| Model release date | Model | Win-or-tie rate | Note / verification |
|---|---|---|---|
| ~May 2024 | GPT-4o | 13.7% | SECONDARY (TechCrunch, 25 Sep 2025) |
| Aug 2025 | GPT-5 | 38.8% (OpenAI's later comparison figure); 40.6% for "GPT-5-high" | 38.8%: PRIMARY (OpenAI GPT-5.2 post). 40.6%: SECONDARY (TechCrunch) |
| Aug 2025 | Claude Opus 4.1 | 49% ("just under half") | SECONDARY (TechCrunch); OpenAI page confirms "just under half" (PRIMARY wording) |
| 11 Dec 2025 | GPT-5.2 Thinking | 70.9% (GPT-5.2 Pro 74.1%) | PRIMARY (OpenAI) |
| 5 Mar 2026 | GPT-5.4 | 83.0% | PRIMARY (OpenAI) |
| 23 Apr 2026 | GPT-5.5 | 84.9% (same table: Claude Opus 4.7 80.3%, Gemini 3.1 Pro 67.3%) | PRIMARY (OpenAI) |

- source: OpenAI — "GDPval" — https://openai.com/index/gdpval/ — 25 Sep 2025; paper https://arxiv.org/abs/2510.04374. OpenAI model posts: https://openai.com/index/introducing-gpt-5-2/ , https://openai.com/index/introducing-gpt-5-4/ , https://openai.com/index/introducing-gpt-5-5/ . TechCrunch — https://techcrunch.com/2025/09/25/openai-says-gpt-5-stacks-up-to-humans-in-a-wide-range-of-jobs
- verification: mixed, per row
- cadence: repeated — reported with each OpenAI flagship release (about every 2–4 months)
- signal: leading
- caveats:
  - Built, run and reported by OpenAI, a vendor with an interest in the result. Competitor scores in the table are also OpenAI's measurements.
  - Tasks are one-shot, well-specified deliverables (reports, spreadsheets, slides). TechCrunch notes this is all GDPval-v0 tests; real jobs involve far more than handing in a document.
  - Only a 220-task "gold" subset is public; the full set is 1,320 tasks.
  - The curve is flattening near the top (83.0% to 84.9%), so it will stop being informative soon.
  - The July 2026 GPT-5.6 announcement gave no GDPval number (PRIMARY: checked), so the series may be ending.
- counter_evidence:
  - Third-party trackers moved to Elo ratings on the public subset and recalibrated several times, so independent replication of the win-rate series is weak (hobby explainer, flag: https://itdoeswhatnow.com/benchmarks/gdpval/)
  - Humlum & Vestergaard (NBER w33777, rev. Mar 2026) find "precise null effects on earnings and recorded hours", ruling out effects above 2%, in Danish administrative data about two years after ChatGPT: lab task wins have not shown up in pay or hours — https://www.nber.org/papers/w33777

### SWE-bench Verified — top published score
- chain_link: capability
- measures: Share of 500 real GitHub software issues that a model fixes correctly on its own.
- unit: % of issues resolved
- series:

| Date | Model | Score | Note / verification |
|---|---|---|---|
| 13 Aug 2024 | GPT-4o | 33.2% | Benchmark launch. PRIMARY (OpenAI) |
| Oct 2024 | Claude 3.5 Sonnet (new) | 49% | PRIMARY (Anthropic Claude 3.7 post, as comparison) |
| 24 Feb 2025 | Claude 3.7 Sonnet | 63.7% on a 489-task subset; 70.3% with heavy scaffolding | PRIMARY (Anthropic). The widely quoted headline figure (62.3%) was not returned by the fetch |
| 22 May 2025 | Claude Sonnet 4 / Opus 4 | 72.7% / 72.5% | PRIMARY (Anthropic) |
| 29 Sep 2025 | Claude Sonnet 4.5 | 77.2% | PRIMARY (Anthropic) |
| 11 Dec 2025 | GPT-5.2 Thinking | 80.0% (GPT-5.1 Thinking 76.3%) | PRIMARY (OpenAI) |
| Apr–May 2026 | Claude Opus 4.7 / Opus 4.8 | 87.6% / 88.6% | SECONDARY, weak (marketing-agency blog; "self-reported") |
| Apr 2026 | Claude Mythos Preview | 93.9% | SECONDARY, weak (same blog) |
| Jun 2026 | Claude Fable 5 | 95.0% | SECONDARY, weak (same blog) |

- source: OpenAI — "Introducing SWE-bench Verified" — https://openai.com/index/introducing-swe-bench-verified/ — 13 Aug 2024. Anthropic model posts: https://www.anthropic.com/news/claude-3-7-sonnet , https://www.anthropic.com/news/claude-4 , https://www.anthropic.com/news/claude-sonnet-4-5 . OpenAI — https://openai.com/index/introducing-gpt-5-2/ . 2026 rows: https://www.digitalapplied.com/blog/swe-bench-verified-june-2026-benchmark-vs-scaffolding-analysis (blog; flag)
- verification: PRIMARY to Dec 2025; 2026 rows SECONDARY from a non-authoritative blog
- cadence: repeated — with each coding-model release, but OpenAI stopped reporting it in Feb 2026
- signal: leading (now saturating)
- caveats:
  - Scores are self-reported by developers with their own scaffolds; not like-for-like.
  - The benchmark is close to its ceiling and is public, so newer models have very likely seen the answers.
  - Useful as a historical 2024–2025 line for a general reader; not a live indicator from 2026.
- counter_evidence:
  - OpenAI, "Why we no longer evaluate SWE-bench Verified" (23 Feb 2026): 59.4% of 138 audited problems had material flaws, and GPT-5.2, Claude Opus 4.5 and Gemini 3 Flash could all reproduce gold patches from memory. OpenAI recommends SWE-bench Pro instead — https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/
  - On the harder SWE-bench Pro, scores are far lower: GPT-5.4 57.7% (Mar 2026, PRIMARY, OpenAI); GPT-5.5 58.6% and Claude Opus 4.7 64.3% (Apr 2026, SECONDARY, MarkTechPost) — https://openai.com/index/introducing-gpt-5-4/

### Epoch Capabilities Index (ECI) — frontier score
- chain_link: capability
- measures: A single composite score that combines 50+ benchmarks into one general-capability scale, so models can be compared even after individual benchmarks saturate.
- unit: ECI points (arbitrary scale anchored at Claude 3.5 Sonnet = 130, GPT-5 = 150)
- series:

| Date | Frontier model | ECI | Note / verification |
|---|---|---|---|
| (anchor) | Claude 3.5 Sonnet | 130 | Scale anchor by definition. PRIMARY |
| 12 Sep 2024 | o1-mini | 136.64 | First reasoning model; trend breakpoint. PRIMARY |
| 17 Dec 2024 | o1 | 142.67 | PRIMARY |
| (anchor; Aug 2025) | GPT-5 | 150 | Scale anchor by definition. PRIMARY |
| 24 Jul 2026 | Claude Opus 5 | 161.59 | Latest frontier point in the note. PRIMARY |

Trend: frontier rising 14 points per year since reasoning models (Sep 2024), against 6 points per year before. PRIMARY.

- source: Epoch AI — "The ECI frontier has advanced by 14 points per year since the introduction of reasoning models" — https://epoch.ai/data-insights/eci-frontier-trend — 1 Sep 2026; index page https://epoch.ai/benchmarks/eci
- verification: PRIMARY (the full per-model table is in an interactive chart the fetch tool could not read)
- cadence: repeated — updated continuously as models are evaluated
- signal: leading
- caveats:
  - Epoch: absolute values are meaningless; only differences between models matter. Hard to explain to a general reader.
  - Inherits contamination and "teaching to the test" problems from its component benchmarks.
  - The "two regimes" result comes from simple linear fits on state-of-the-art models only.
- counter_evidence:
  - Epoch's own caveats list benchmark-saturation bias, developer optimisation and cherry-picked developer-reported scores — https://epoch.ai/benchmarks/eci
  - A forecaster comparing Mythos Preview's ECI jump with its METR result notes the two measures do not line up cleanly at the frontier — https://forecastingaifutures.substack.com/p/over-eight-months-of-progress-in (blog; flag)

---

## LINK 2 — ADOPTION AND USAGE

### US Census BTOS — share of firms using AI
- chain_link: adoption
- measures: Share of US businesses that say they used AI in the last two weeks.
- unit: % of firms (firm-weighted, so small firms dominate)
- series:

| Date of data | Value | Note / verification |
|---|---|---|
| Sep 2023 | 3.7% | Old wording: AI used "in producing goods or services". PRIMARY (NBER w32319 / Census CES-WP-24-16) |
| Feb 2024 | 5.4% | Old wording. PRIMARY (same paper) |
| "Early 2024" | 4.6% | Old wording; EIG's reading of the series (date vague; conflicts slightly with the row above). SECONDARY (EIG) |
| Mid-2024 | ~5% | Old wording. PRIMARY (Minneapolis Fed article) |
| Sep 2025 (end Q3) | ~10% (EIG: 10%; Fed Board: ~10.9%) | Old wording, last reading before the break. Fed: up 3.9 points (68%) over the year. PRIMARY (Fed FEDS Note); SECONDARY (EIG) |
| — BREAK, early Nov 2025 — | — | Question changed to AI use "in any of its business functions" |
| Nov 2025 | 17.3% | New wording, first reading. SECONDARY (EIG, 19 Dec 2025) |
| Dec 2025 | 17.8% (Fed: "about 18 percent" at end-2025) | New wording. SECONDARY (Univ. of Missouri Extension); PRIMARY (Fed FEDS Note) |
| 14 Dec 2025 – 3 May 2026 | "between 17% and 20%" | New wording. PRIMARY (Census) |
| 3 May 2026 | 19.8% | New wording. Expected use in next six months: 20–23%. PRIMARY (Census) |
| First half 2026 (average) | 18.9% | New wording. SECONDARY, weak (a résumé company's analysis of BTOS, via CPA Practice Advisor) |

By size on 3 May 2026 (PRIMARY, Census): 250+ employees 37%; 100–249 employees 32%; under 20 employees below 20%. Information sector 39.7%; finance and insurance 33.9%; retail 14%.

- source: US Census Bureau — "Large Firms With at Least 20 Employees Biggest AI Users" — https://www.census.gov/library/stories/2026/05/ai-use-businesses.html — May 2026. Bonney et al. — "Tracking Firm Use of AI in Real Time" — https://www.nber.org/system/files/working_papers/w32319/w32319.pdf — Mar 2024. Federal Reserve Board — "Monitoring AI Adoption in the U.S. Economy" — https://www.federalreserve.gov/econres/notes/feds-notes/monitoring-ai-adoption-in-the-u-s-economy-20260403.html — 3 Apr 2026. Minneapolis Fed — https://www.minneapolisfed.org/article/2026/ai-adoption-in-business-grows-steadily-but-unevenly . EIG — https://agglomerations.eig.org/p/how-many-businesses-are-using-ai — 19 Dec 2025.
- verification: mixed, per row. The biweekly Census data tool needs JavaScript and the 2026 Census working paper is blocked to the fetch tool, so the full biweekly series is not in this file.
- cadence: repeated — every two weeks
- signal: coincident
- caveats:
  - The Nov 2025 wording change roughly doubled the level (about 10% to about 17%) with no real change in behaviour. Chart as two separate series with a visible break; never join them.
  - The Fed reports the jump at the break varied by sector, from +47% (professional services) to +159% (manufacturing), so the old question missed most back-office use.
  - Firm-weighted: one-person firms count the same as Walmart. The employment-weighted figure is much higher (32% versus 18% in the Nov 2025–Feb 2026 supplement, SECONDARY).
  - A yes/no measure. It says nothing about how intensively AI is used.
  - Respondents may not recognise AI built into software they already use.
- counter_evidence:
  - The Fed Board note finds growth on the old series "decelerated in Q2 2025", and since the break the rate has moved only from ~17% to ~20% in six months — https://www.federalreserve.gov/econres/notes/feds-notes/monitoring-ai-adoption-in-the-u-s-economy-20260403.html
  - EIG: firms expect only about a 4-point rise over six months and "not a single sector is expecting a double digit increase" — https://agglomerations.eig.org/p/how-many-businesses-are-using-ai
  - The same Fed note reports 78% employment-weighted adoption from an executive survey (Survey of Business Uncertainty, Nov 2025). The 18%-to-78% spread shows how much the answer depends on who is asked and how.

### Ramp AI Index — share of US businesses paying for AI
- chain_link: adoption
- measures: Share of businesses on Ramp's corporate-card and bill-pay platform that have a paid subscription to an AI model or tool.
- unit: % of Ramp customer businesses
- series:

| Date of data | Overall paid adoption | Anthropic / OpenAI share of businesses | Note / verification |
|---|---|---|---|
| Mar 2025 | 35% | — | PRIMARY (Ramp, Apr 2026 post) |
| Jan 2026 | 46.8% | 19.5% / 35.9% | PRIMARY (Ramp, 11 Feb 2026) |
| Mar 2026 | 50.4% | 30.6% / 35.2% | First month over 50%. PRIMARY (Ramp, 14 Apr 2026) |
| Apr 2026 | 50.6% | 34.4% / 32.3% | Anthropic passes OpenAI. PRIMARY (Ramp, 13 May 2026) |
| May 2026 | not found | 41% / 39.5% | PRIMARY (Ramp, 26 Jun 2026). Probable method change: see caveats |
| Jul 2026 | not found | 43.5% / 39.7% | PRIMARY (Ramp, 12 Aug 2026) |
| Aug 2026 | not found | 43.8% / 39.8% | PRIMARY (Ramp, 9 Sep 2026) |

- source: Ramp Economics Lab — Ramp AI Index monthly posts — https://ramp.com/data/ai-index-february-2026 , https://ramp.com/leading-indicators/the-tokenmaxxing-economy-splits-off-and-up , https://ramp.com/data/ai-index-may-2026 , https://ramp.com/data/ai-index-june-2026 , https://ramp.com/data/ai-index-august-2026 , https://ramp.com/data/ai-index-sept-2026
- verification: PRIMARY (vendor data; flag as such)
- cadence: repeated — monthly
- signal: coincident (moves earlier than survey measures)
- caveats:
  - Ramp's 70,000+ customers skew towards start-ups and tech firms (80% of VC-backed customers pay for AI). Not representative of US business.
  - Counts paid subscriptions only: misses free tools, AI bundled into Microsoft or Google suites, and employees paying personally.
  - OpenAI's share reads 32.3% for April and 39.5% for May. A jump that size in one month points to a method change (Ramp began counting token/API spend around then). Treat April-and-earlier and May-and-later vendor shares as separate series until confirmed.
  - I could not find the overall adoption rate for May–Aug 2026; recent posts lead with spend per employee instead.
- counter_evidence:
  - Ramp's own Aug and Sep 2026 posts are titled "Cracks in the AI thesis": spend per employee at the top 1% of firms fell 9.7% in August ($7,976 to $7,205) — https://ramp.com/data/ai-index-sept-2026
  - Overall adoption barely moved between March and April 2026 (50.4% to 50.6%), which may signal a plateau in the share of firms paying — https://ramp.com/data/ai-index-may-2026
  - Census BTOS, a representative sample, puts firm use at about 20%, less than half Ramp's level — https://www.census.gov/library/stories/2026/05/ai-use-businesses.html

### Eurostat — EU enterprises using AI
- chain_link: adoption
- measures: Share of EU businesses with 10 or more employees that use at least one AI technology.
- unit: % of enterprises (10+ employees)
- series:

| Year | Value | Note / verification |
|---|---|---|
| 2021 | 7.7% | PRIMARY |
| 2023 | 8.1% | PRIMARY |
| 2024 | 13.5% | PRIMARY |
| 2025 | 20.0% | Denmark 42.0% (highest); Romania 5.2% (lowest). PRIMARY |

- source: Eurostat — "20% of EU enterprises use AI technologies" — https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2 — 11 Dec 2025
- verification: PRIMARY
- cadence: repeated — annual (next release expected Dec 2026)
- signal: lagging
- caveats:
  - Excludes firms with fewer than 10 employees, so not comparable with BTOS, which is dominated by tiny firms.
  - Annual, published almost a year after the reference period.
  - "Uses AI" covers anything from text mining to generative AI; breadth, not depth.
  - No 2022 data point.
- counter_evidence:
  - Four in five EU enterprises still report no AI use in 2025, and the national range is 5% to 42%: diffusion is slow and uneven even under an official definition — same source.

### McKinsey Global Survey (as carried in the Stanford AI Index) — organisations using AI
- chain_link: adoption
- measures: Share of surveyed executives who say their organisation uses AI in at least one business function.
- unit: % of respondents
- series:

| Survey year | Value | Note / verification |
|---|---|---|
| 2023 | 55% | PRIMARY (Stanford AI Index 2026, Economy chapter page) |
| 2024 | 78% | SNIPPET only (widely quoted from AI Index 2025; not confirmed by fetch) |
| 2025 | 88% | PRIMARY (Stanford AI Index 2026, Economy chapter page) |
| 2026 (fielded 4 May – 8 Jun 2026) | "Nearly nine in ten" | n = 1,719 across 97 nations. PRIMARY (McKinsey) |
| 2025 → 2026 | Large organisations (>$1bn revenue) "scaling AI agents": 27% → 40%; smaller organisations flat at 22% | PRIMARY (McKinsey) |

- source: McKinsey — "The state of AI" — https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai — 2026 edition. Stanford HAI — AI Index Report 2026, Economy chapter — https://hai.stanford.edu/ai-index/2026-ai-index-report/economy
- verification: mixed, per row
- cadence: repeated — annual
- signal: lagging
- caveats:
  - Consultancy survey of its own executive network: self-selected and skewed to large firms (36% of 2026 respondents are from $1bn+ organisations).
  - "At least one function" is a very low bar. The measure has hit its ceiling (88% to "nearly nine in ten") and will show nothing further.
  - The agent-scaling figures are the more useful part from here on.
- counter_evidence:
  - Census BTOS finds about 20% of US firms using AI in any business function at the same time McKinsey reports about 88% — https://www.census.gov/library/stories/2026/05/ai-use-businesses.html
  - McKinsey's own data show no growth in agent scaling among smaller organisations (flat at 22%).

### St. Louis Fed Real-Time Population Survey — workers using generative AI for their job
- chain_link: adoption
- measures: Share of employed US adults aged 18–64 who say they use generative AI for their job.
- unit: % of employed adults
- series:

| Quarter (FRED date) | Value | Note / verification |
|---|---|---|
| Q3 2024 (Aug 2024 wave) | 33.27% | PRIMARY (FRED) |
| Q4 2024 | 31.01% | PRIMARY (FRED) |
| Q1 2025 | 32.75% | PRIMARY (FRED) |
| Q2 2025 | 35.08% | PRIMARY (FRED) |
| Q3 2025 (Aug 2025 wave) | 37.36% | PRIMARY (FRED) |
| Q4 2025 (Nov 2025 wave) | 40.73% | PRIMARY (FRED) |
| Q1 2026 | 43.41% | PRIMARY (FRED) |
| Q2 2026 (May 2026 wave) | 45.20% | PRIMARY (FRED) |

Companion series from the same survey (PRIMARY, St. Louis Fed): any generative AI use among all adults 18–64 was 44.6% (Aug 2024), 54.6% (Aug 2025), 62% (May 2026). Share of all work hours spent using generative AI was 4.1% (Nov 2024) and 5.7% (Aug 2025). In Nov 2025 about 12% of workers used it daily at work (PRIMARY, Fed Board note).

- source: Federal Reserve Bank of St. Louis (FRED) — "Generative Artificial Intelligence, Adoption Rate for Work: Employed Adults" (RPSGENAIUSAGESHAREWORK) — https://fred.stlouisfed.org/series/RPSGENAIUSAGESHAREWORK . Underlying paper: Bick, Blandin & Deming, "The Rapid Adoption of Generative AI" (Management Science, 2026). St. Louis Fed blog posts: https://www.stlouisfed.org/on-the-economy/2025/nov/state-generative-ai-adoption-2025 (Nov 2025) and https://www.stlouisfed.org/on-the-economy/2026/sep/what-work-does-generative-ai-do (1 Sep 2026)
- verification: PRIMARY
- cadence: repeated — quarterly
- signal: coincident
- caveats:
  - Online panel survey, self-reported; ages 18–64 only.
  - "Use for your job" includes someone who tried it once last month. Intensity is still low: 5.7% of work hours in Aug 2025.
  - The series dipped in late 2024 (33.3% to 31.0%), which shows sampling noise of a couple of points.
  - FRED notes the data are copyrighted; check terms before republishing the series.
- counter_evidence:
  - St. Louis Fed (Sep 2026): fewer than 3% of job tasks have adoption above 50%, and none above 70%; use is wide but shallow — https://www.stlouisfed.org/on-the-economy/2026/sep/what-work-does-generative-ai-do
  - Humlum & Vestergaard find high adoption alongside no measurable effect on earnings or hours (effects above 2% ruled out) — https://www.nber.org/papers/w33777
  - Yale Budget Lab (1 Oct 2025): 33 months after ChatGPT, AI-exposure measures "show no sign of being related to changes in employment or unemployment" — https://budgetlab.yale.edu/research/evaluating-impact-ai-labor-market-current-state-affairs

### Gallup — US employees using AI at work
- chain_link: adoption
- measures: Share of US employees who say they use AI in their role at least a few times a year, a few times a week, or daily.
- unit: % of employed US adults
- series:

| Quarter | Any use (few times a year or more) | Frequent (few times a week or more) | Daily | Organisation has adopted AI ("yes") |
|---|---|---|---|---|
| Q2 2023 | 21% | 11% | 4% | — |
| Q2 2024 | 27% | 12% | 4% | — |
| Q2 2025 | 40% | 19% | 8% | — |
| Q3 2025 | 45% | 23% | 10% | 38% |
| Q4 2025 | 46% | 26% | 12% | 38% |
| Q1 2026 | 50% | 28% | 13% | 41% |
| Q2 2026 (6–20 May 2026) | 52% | 30% | 15% | 47% |

- source: Gallup — "Organizational AI Adoption Jumps Six Points" — https://www.gallup.com/workplace/712736/organizational-adoption-jumps-six-points.aspx — 20 Jul 2026 (n = 22,573 employed US adults for Q2 2026)
- verification: PRIMARY (all rows)
- cadence: repeated — quarterly since Q2 2025; annual before
- signal: coincident
- caveats:
  - Self-reported, and "AI" is left broad for the respondent to interpret.
  - Three frequency tiers make this the best survey for showing depth of use, not just reach. The daily line is the one to watch.
  - One in five employees still "don't know" whether their organisation has adopted AI.
- counter_evidence:
  - Even on the latest reading, 85% of employees do not use AI daily and 48% use it less than a few times a year or never (DERIVED as complements of 15% and 52%) — same source.
  - Gallup's daily figure (12% in Q4 2025) matches the RPS daily-at-work figure (about 12% in Nov 2025), which supports the level but also shows heavy use remains a minority.

### Pew Research Center — US adults who have used ChatGPT
- chain_link: adoption
- measures: Share of US adults who say they have ever used ChatGPT.
- unit: % of US adults
- series:

| Survey year | Value | Note / verification |
|---|---|---|
| 2023 | 18% | PRIMARY (field dates not on the chart page) |
| 2024 | 23% | PRIMARY |
| 2025 | 34% | PRIMARY |
| 2026 (17–23 Feb 2026) | 44% | PRIMARY. Question structure changed in 2026: see caveats |

- source: Pew Research Center — "The share of Americans who say they use ChatGPT has more than doubled since 2023" — https://www.pewresearch.org/chart/the-share-of-americans-who-say-they-use-chatgpt-has-more-than-doubled-since-2023/ — 11 Jun 2026 (from "Americans and AI 2026")
- verification: PRIMARY
- cadence: repeated — annual
- signal: lagging
- caveats:
  - "Ever used" only rises and says nothing about current or intensive use.
  - In 2026 the question was asked alongside other chatbots rather than only of people who had heard of ChatGPT, so 2025-to-2026 is not strictly like-for-like.
  - ChatGPT only. Total chatbot reach is higher (a search snippet suggests Pew finds about half of Americans now use AI chatbots; not verified).
- counter_evidence:
  - More than half of US adults had still never used ChatGPT in early 2026, over three years after launch — same source.
  - OpenAI's own usage paper finds the non-work share of ChatGPT messages rose from 53% (June 2024) to 73% (June 2025): rising consumer reach is not the same as rising use at work — https://www.nber.org/system/files/working_papers/w34255/w34255.pdf

### ChatGPT weekly active users
- chain_link: adoption
- measures: Number of people worldwide using ChatGPT in a given week, as stated by OpenAI.
- unit: millions of weekly active users
- series:

| Date | Value | Note / verification |
|---|---|---|
| Dec 2024 | 300 million | SECONDARY, weak (statistics aggregator citing The Verge) |
| Feb 2025 | 400 million | SECONDARY, weak (aggregator citing Reuters/Axios) |
| End Mar 2025 | 500 million | SECONDARY (TechCrunch) |
| Jul 2025 | "more than 700 million" | PRIMARY (NBER w34255, written by OpenAI staff and academic co-authors); also 2.5 billion messages per day |
| 6 Oct 2025 | "more than 800 million" | SECONDARY (TechCrunch quoting Sam Altman at DevDay) |
| 27 Feb 2026 | 900 million | SECONDARY (TechCrunch quoting OpenAI's funding announcement); 50 million paying subscribers |
| Mid-2026 | 1 billion (claimed) | SNIPPET only. Headlines disagree on whether this is weekly or monthly users; not verified |

- source: Chatterji et al. — "How People Use ChatGPT" — https://www.nber.org/system/files/working_papers/w34255/w34255.pdf — Sep 2025. TechCrunch — https://techcrunch.com/2025/10/06/sam-altman-says-chatgpt-has-hit-800m-weekly-active-users/ and https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users/ . Aggregator (flag): https://www.demandsage.com/chatgpt-statistics/
- verification: mixed, per row
- cadence: irregular — whenever OpenAI chooses to announce a milestone
- signal: coincident
- caveats:
  - Company-announced round numbers, unaudited, released at moments that suit OpenAI (developer day, funding round).
  - One product only. Excludes Gemini, Claude, Copilot and Meta AI, so it understates total reach while overstating how precisely it is known.
  - "Weekly active" includes very light use.
  - The aggregator's pre-2024 rows conflicted with what I know of OpenAI's announcements, so I left them out.
- counter_evidence:
  - Growth slowed sharply: 400M to 800M took about eight months (Feb–Oct 2025), then 800M to 900M took about four and a half (Oct 2025–Feb 2026) — TechCrunch links above.
  - Only about 50 million of 900 million weekly users pay (roughly 6%; DERIVED from the two TechCrunch figures).

---

## LINK 3 — FROM AUGMENTATION TO AUTOMATION, DELEGATION AND AUTONOMY

### Anthropic Economic Index — automation vs augmentation on Claude.ai and the API
- chain_link: automation
- measures: Share of Claude conversations where the user hands the task over (automation = "directive" plus "feedback loop") versus works through it with the model (augmentation = "learning", "task iteration", "validation").
- unit: % of sampled conversations (Claude.ai) or transcripts (first-party API)
- series:

| Data collected | Report (published) | Claude.ai augmentation | Claude.ai automation | Claude.ai "directive" | Enterprise / 1P API automation | Verification |
|---|---|---|---|---|---|---|
| Dec 2024 – Jan 2025 | 1st report (10 Feb 2025) | 57% as first published; restated as 56% in the Jan 2026 report | 43% as first published; restated as 41% | 27% | not measured | PRIMARY (Feb 2025 post; Jan 2026 report; Sep 2025 report for directive) |
| Feb – Mar 2025 (11 days after Claude 3.7 Sonnet launch) | 2nd report (27 Mar 2025) | 57% | not stated (balance "relatively constant") | not stated | not measured | PRIMARY |
| 4–11 Aug 2025 | 3rd report (15 Sep 2025) | 47% | 49% | 39% | 77% automation, 12% augmentation | Directive and API: PRIMARY. Split: DERIVED from the Jan 2026 report ("jumped 5pp to 52%", "fell 4pp to 45%"). The Sep 2025 report says only that automation exceeded augmentation for the first time and the split was "nearly even" |
| 13–20 Nov 2025 | 4th report, "Economic Primitives" (15 Jan 2026) | 52% | 45% | 32% | "three-quarters" automation | PRIMARY |
| 5–12 Feb 2026 | 5th report, "Learning curves" (24 Mar 2026) | 53% | 44% (unverified) | not stated | "decreased sharply"; no number in text | Augmentation: SECONDARY (PPC Land), consistent with Anthropic's wording that it "increased slightly". Automation: UNVERIFIED chart label; see caveat |
| 10 Apr – 10 Jun 2026 | 6th report, "Cadences" (26 Jun 2026) | not published in text | not published in text | not published | not published | PRIMARY check: no aggregate split in the text |

No Economic Index report later than 26 June 2026 appears on Anthropic's economics research page (PRIMARY check on 3 Oct 2026). Later items there are country briefs and other studies.

- source: Anthropic — Economic Index reports — https://www.anthropic.com/news/the-anthropic-economic-index (10 Feb 2025); https://www.anthropic.com/news/anthropic-economic-index-insights-from-claude-sonnet-3-7 (27 Mar 2025); https://www.anthropic.com/research/anthropic-economic-index-september-2025-report (15 Sep 2025); https://www.anthropic.com/research/anthropic-economic-index-january-2026-report (15 Jan 2026); https://www.anthropic.com/research/economic-index-march-2026-report (24 Mar 2026); https://www.anthropic.com/research/economic-index-june-2026-report (26 Jun 2026). Data: https://huggingface.co/datasets/Anthropic/EconomicIndex
- verification: mixed, per cell
- cadence: repeated — roughly every 2–4 months (six reports in 17 months)
- signal: coincident
- caveats:
  - **The series does not show a steady rise in automation.** Automation went 41–43% → 49% → 45% → about 44%; directive use went 27% → 39% → 32%. It peaked in August 2025 and partly reversed. Any chart must show that honestly.
  - Anthropic has restated earlier figures (57/43 became 56/41). Figure 1.3 of the March 2026 report carries data labels that, read in order from a third-party PDF mirror, appear to be automation 41, 42, 49, 45, 44 and augmentation 55, 55, 47, 52, 53 for Jan 2025, Mar 2025, Aug 2025, Nov 2025, Feb 2026. That ordering is my reconstruction from unordered chart labels, not a verified reading. Pull the exact values from Anthropic's Hugging Face data release (release_2026_03_24) before charting.
  - The June 2026 release is described as including "monthly aggregates", which may allow the series to be extended from the raw data. Not checked.
  - One company's product, classified by that company's own model. Claude users are not representative of AI users.
  - Each sample is one week of about a million conversations; the product mix changes between samples (new models, Claude Code, Cowork), so shifts may reflect who is using what rather than behaviour change.
  - API "automation" partly reflects that API traffic is programmatic by nature. It is a level to report, not evidence of a trend, until Anthropic publishes numbers for 2026.
- counter_evidence:
  - Anthropic's Jan 2026 report: augmentation regained the lead (52% vs 45%) and directive use fell 7 points, reversing the August 2025 pattern — https://www.anthropic.com/research/anthropic-economic-index-january-2026-report
  - Anthropic's March 2026 report: augmentation "increased slightly" on Claude.ai and automation "decreased sharply" on the API — https://www.anthropic.com/research/economic-index-march-2026-report
  - OpenAI's ChatGPT data move the same way: "Doing" messages fell from about half (July 2024) to 34.6% (late June 2025) while "Asking" rose to 51.6% — https://www.nber.org/system/files/working_papers/w34255/w34255.pdf
  - Anthropic's June 2026 survey report: the share of users reporting they learn more with AI stayed flat across automation levels, which cuts against a simple de-skilling story — https://www.anthropic.com/research/economic-index-june-2026-report

### Claude Code agent autonomy — how long agents run and how often humans step in
- chain_link: automation
- measures: How long the AI coding agent works between human inputs, and how much human approval or intervention remains.
- unit: minutes per turn; % of sessions; counts per session or task
- series:

| Date of data | Metric | Value | Note / verification |
|---|---|---|---|
| Feb 2025 | Consecutive tool calls per task without human input (Anthropic internal use) | 9.8 | PRIMARY |
| Aug 2025 | Same | 21.2 | PRIMARY |
| Feb 2025 → Aug 2025 | Human turns per task (Anthropic internal) | 6.2 → 4.1 | PRIMARY |
| "12 months ago" → Aug 2025 | Share of own work in which Anthropic engineers use Claude (self-report, n = 132) | 28% → 59% | PRIMARY |
| Oct 2025 | 99.9th-percentile Claude Code turn duration | under 25 minutes | PRIMARY |
| Jan 2026 | Same | over 45 minutes | PRIMARY |
| Aug → Dec 2025 | Human interventions per session (Anthropic internal) | 5.4 → 3.3 | PRIMARY |
| Oct 2025 – Jan 2026 | Sessions run with full auto-approve | ~20% for new users (<50 sessions); over 40% for experienced users (750+ sessions) | PRIMARY. A cross-section by experience, not a time series |
| Oct 2025 – Jan 2026 | Public API agent tool calls with a human in the loop / that are irreversible | 73% / 0.8% | PRIMARY |
| Oct 2025 – Apr 2026 | Who decides in Claude Code sessions (~400,000 sessions) | Users make ~70% of planning decisions; Claude makes ~80% of execution decisions | PRIMARY |
| Apr – Jun 2026 | AI autonomy rating, Claude Code vs chat (1–5 scale) | +0.37 points | PRIMARY |

- source: Anthropic — "Measuring AI agent autonomy in practice" — https://www.anthropic.com/research/measuring-agent-autonomy — 18 Feb 2026. Anthropic — "How AI is transforming work at Anthropic" — https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic — 2 Dec 2025. Anthropic — "Agentic coding and persistent returns to expertise" — https://www.anthropic.com/research/claude-code-expertise — 16 Jun 2026. Anthropic — Economic Index "Cadences" — https://www.anthropic.com/research/economic-index-june-2026-report
- verification: PRIMARY
- cadence: one-off studies so far, but three within seven months using overlapping measures; likely to recur
- signal: leading
- caveats:
  - Each metric has only two dated points, and they come from different studies with different definitions. This is a set of paired before-and-after readings, not yet a clean series.
  - The 99.9th percentile is the extreme tail. Typical turns are far shorter; the median was not returned by the fetch.
  - Anthropic's internal figures describe one frontier lab's engineers using their own product, the most favourable setting possible.
  - Coding only.
- counter_evidence:
  - The same Anthropic study: experienced users interrupt the agent more often (about 9% of turns versus 5% for new users), and 73% of API tool calls keep a human in the loop. Oversight is changing shape, not vanishing — https://www.anthropic.com/research/measuring-agent-autonomy
  - Anthropic's Dec 2025 study: most engineers say only 0–20% of their work can be fully delegated — https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic
  - Anthropic's June 2026 study: verified success is only 15% of sessions for novices and 28–33% for experts, and users still make about 70% of planning decisions — https://www.anthropic.com/research/claude-code-expertise

### Share of new code written by AI at major firms
- chain_link: automation
- measures: Share of newly written code that a company says is generated by AI and then reviewed by its engineers.
- unit: % of new code (company self-report)
- series (Google only; the one firm with a repeated figure):

| Date | Value | Note / verification |
|---|---|---|
| 29 Oct 2024 | "more than a quarter" | Pichai, Q3 2024 earnings remarks: "generated by AI, then reviewed and accepted by engineers". PRIMARY (Google blog) |
| Apr 2025 | "over 30%" | SNIPPET only (article headlines; not fetched) |
| Late 2025 | 50% | SECONDARY (TechSpot; hobby tracker) |
| Apr 2026 | 75% | SECONDARY (TechSpot, 23 Apr 2026, citing Pichai) |

Other firms, single claims (all SECONDARY via a hobby tracker; flag): Microsoft 20–30% "in some projects" (Nadella, Apr 2025); Anthropic 70–90% company-wide (spokesperson, Jan 2026) and 90%+ (CFO, May 2026); Snap at least 65% of new code (Apr 2026); OpenAI 80% (Brockman, Apr 2026; scope unclear).

- source: Google — Q3 2024 earnings call, CEO remarks — https://blog.google/inside-google/message-ceo/alphabet-earnings-q3-2024/ — 29 Oct 2024. TechSpot — https://www.techspot.com/news/112152-google-ai-now-generates-75-new-code-up.html — 23 Apr 2026. Tracker (flag: hobby site) — https://provenbrief.com/story/the-ai-code-share-tracker-every-verified-public-number-on-ai-written-code-from-n
- verification: mixed, per row
- cadence: irregular — executive remarks on earnings calls, about once or twice a year
- signal: leading (for the wider economy; these are frontier firms)
- caveats:
  - Executive statements, unaudited, with no published method. "Generated by AI" may include autocomplete an engineer accepted character by character.
  - Definitions differ by firm (new code, all code, some projects), so do not chart firms on one line.
  - Share of code written is not share of engineering work done. Review, design, testing and deciding what to build stay with people.
  - Firms selling AI have an incentive to report high numbers.
- counter_evidence:
  - METR's 2025 randomised trial: experienced open-source developers were 19% slower with AI tools — https://x.com/METR_Evals/status/1943360399220388093 (SNIPPET)
  - Anthropic's own Claude Code data: verified success in 15–33% of sessions — https://www.anthropic.com/research/claude-code-expertise
  - The tracker itself notes the highest claims come from individuals or narrow scopes and that "smaller denominators produce larger percentages".

---

## Supplementary one-off statistics (fewer than three dated points; not chart-ready)

| Statistic | Value and date | Source / verification |
|---|---|---|
| ChatGPT messages by intent ("Asking / Doing / Expressing") | Jul 2024: Asking and Doing about even, Expressing just under 8%. Late Jun 2025: 51.6% / 34.6% / 13.8%. Among work messages, nearly 56% were "Doing" (Jul 2025) | PRIMARY — https://www.nber.org/system/files/working_papers/w34255/w34255.pdf |
| ChatGPT work vs non-work messages | Non-work share 53% (Jun 2024) → 73% (Jun 2025) | PRIMARY — same paper |
| Enterprise generative-AI spend | $1.7bn (2023), $11.5bn (2024), $37bn (2025) | PRIMARY, but a venture firm's estimate — https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/ |
| Agents' share of enterprise AI application spend | About $750m of $8.4bn horizontal-AI spend (roughly 9%, DERIVED); only 16% of enterprise and 27% of start-up deployments "qualify as true agents" (survey 7–25 Nov 2025, n = 495) | PRIMARY — same Menlo report |
| Coding's share of departmental AI spend | $4.0bn, 55% (2025) | PRIMARY — same Menlo report |
| Large organisations scaling AI agents | 27% (2025) → 40% (2026); smaller organisations flat at 22% | PRIMARY — McKinsey, link above |
| Computer-use benchmark (OSWorld) | About 5% (2024) → 66.3% (2025), per Stanford AI Index 2026. OSWorld-Verified: GPT-5.2 47.3% → GPT-5.4 75.0% (Mar 2026) | PRIMARY — https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance ; https://openai.com/index/introducing-gpt-5-4/ |
| Task length in real use (Anthropic) | Claude reaches about 50% success at tasks of 3.5 hours on the API and about 19 hours on Claude.ai (Nov 2025 data). Returned by the fetch as a summary; re-check wording | PRIMARY, flagged — https://www.anthropic.com/research/anthropic-economic-index-january-2026-report |
| Occupational breadth of Claude use | About 36% of occupations use AI for at least a quarter of their tasks; about 4% for at least three-quarters (Dec 2024 – Jan 2025) | PRIMARY — https://www.anthropic.com/news/the-anthropic-economic-index |

---

## Best three for a headline chart

1. **METR 50% time horizon (log scale), with the 80% horizon as a second line.** The longest series (2019–2026, 15+ points), the clearest trend, and from an independent evaluator. It must carry three notes on the chart itself: software tasks only; it measures human task time, not AI running time; points above 16 hours are unreliable. Showing the 80% line next to it (70 minutes versus 12 hours for Opus 4.6) is the most honest way to convey the reliability gap.

2. **Workers actually using AI: Gallup's three tiers (any / weekly / daily), Q2 2023 – Q2 2026.** Seven fully primary points, one consistent question, and the tiers show depth as well as reach (daily use 4% → 15% while any use went 21% → 52%). The St. Louis Fed RPS series (33% → 45%, eight quarterly points) is an equally sound alternative, or a cross-check on the same chart. Prefer either to Census BTOS as a headline, because the BTOS wording break makes a single line misleading; BTOS works better as a supporting "firms" panel drawn as two separate segments.

3. **Anthropic Economic Index: automation vs augmentation on Claude.ai across five samples (Jan 2025 – Feb 2026), with API automation shown as a separate marker.** It is the only repeated direct measure of the delegation link. Its value for this site is that it does **not** show a one-way march to automation: automation peaked around August 2025 and eased back. Showing that plainly will build credibility. Confirm the Feb 2026 values against Anthropic's data release first.

A fourth worth considering for a "capability" panel aimed at general readers: GDPval win-or-tie rate (13.7% → 84.9% in two years). It is easy to grasp, but it is a vendor's own benchmark and is close to its ceiling, so label it accordingly.

---

## Looked for but could not verify

- **METR horizons for Gemini 3.1 Pro, GPT-5.4, GPT-5.3-Codex, Gemini 3 Pro, Claude Sonnet 4.5, Grok-4, Claude Opus 4.1** and others. METR lists the models but the numbers sit in an interactive chart and a data file the fetch tool could not read. METR's public repository (github.com/METR/eval-analysis-public; the README points to `reports/time-horizon-1-1/data/wrangled/logistic_fits/headline.csv`) should have them; the path I tried returned a 404.
- **METR 80% horizons and pre-2023 points (GPT-3, GPT-3.5) from a primary source.** 80% values in this file are from Wikipedia's table of METR data.
- **The 80% doubling time in the original METR paper.** The fetch returned 204 days; I recall about 213. Check the paper.
- **A claimed "105-day" doubling time from METR's fit through February 2026.** Seen only in a commentator's X post snippet.
- **Claude Opus 4.6's revision from about 14.5h to 11h59m.** Both figures appear in secondary sources; I did not find METR's own explanation.
- **Anthropic Economic Index, Feb 2026 automation share and directive share, and any 1P API automation figure for Feb 2026.** The report text gives directions only.
- **Anthropic Economic Index, Aug 2025 exact split.** Often quoted as 49.1% automation versus 47% augmentation; the report page did not return those figures.
- **Any Anthropic Economic Index report after 26 June 2026.** None listed as of 3 Oct 2026.
- **Census BTOS full biweekly series (Sep 2023 onward) and any reading after 3 May 2026.** The Census data tool needs JavaScript, and the 2026 Census working paper (CES-WP-26-25) and a CRS brief are blocked to automated fetching. Download the BTOS AI spreadsheet from census.gov/hfp/btos/data by hand.
- **Ramp AI Index overall adoption rate for May–Aug 2026, and any value before March 2025.**
- **Stanford AI Index inference-cost figure** (GPT-3.5-level cost falling from $20 to $0.07 per million tokens, Nov 2022 – Oct 2024, "280-fold"). Seen in search snippets only; the AI Index pages return charts as images.
- **McKinsey 2024 value (78%)** and the McKinsey generative-AI-use series. Snippet only.
- **SWE-bench Verified: Claude Opus 4.5 (commonly cited as 80.9%) and Claude 3.7 Sonnet's headline 62.3%.** Not returned by the Anthropic pages; all 2026 scores rest on a single marketing blog.
- **Epoch Capabilities Index per-model table.** Interactive chart only.
- **ChatGPT 1 billion users.** Headlines disagree on weekly versus monthly; the CNBC article (12 Jun 2026) returned a 403.
- **Google "over 30%" of code (Apr 2025) and 75% (Apr 2026) from Google's own remarks.** The Q1 2026 earnings-remarks URL I tried returned a 404.
- **Microsoft AI Economy Institute "AI diffusion" reports** (share of working-age population using AI, by country). Not reached before the search allowance ran out.
- **Microsoft / Copilot usage studies classifying "doing" versus "asking".** Not reached.
- **Pew field dates for 2023–2025** and Pew's broader "use any AI chatbot" figure for 2026.
- **METR's own write-up of the 2026 developer-productivity follow-up.** Seen only through a personal blog.
