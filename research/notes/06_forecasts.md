# 06 — Published forecasts for the Gradual Disempowerment Observatory

Compiled 3 October 2026. All web access was via WebSearch / WebFetch only.

**Read this first (how far to trust the numbers below)**

- **PRIMARY** = I fetched the publisher's own page or PDF and the number was returned from it. **SECONDARY** = a reputable third party quoting it. **SNIPPET** = search snippet only (none used in the table).
- WebFetch returns pages through a small summarising model, not raw text. Numbers quoted from *prose* were usually cross-checked with a second, verbatim-quote query and are solid. Numbers read from *figures or stat boxes* are marked **PRIMARY-fig** and were sometimes inconsistent between two reads; where that happened I give both reads. Spot-check any PRIMARY-fig number against the PDF before publishing.
- The WebSearch budget for this session ran out part-way through (after the first round of searches). From then on I could only fetch URLs I already knew or could navigate to on a publisher's own site. Section F lists what this left unverified.
- "Derived" = simple arithmetic I did on two published numbers (e.g. percentage-point change from the source's own baseline). Nothing is interpolated.
- **Labour share has at least four different definitions across sources** (FRI paper 55.48%, LEAP/BLS private nonfarm 58.3%, Anthropic "roughly 60%", Metaculus series unknown). Plot each as change from its own baseline, never on one absolute axis.

Latest actuals used as baselines (BLS Employment Situation, released 2 Oct 2026, reference month Sep 2026 — PRIMARY, https://www.bls.gov/news.release/empsit.nr0.htm): unemployment 4.2%; labour-force participation 61.8%; employment–population ratio 59.2%; long-term unemployed 1.9 million; payrolls +29,000.

---

## A. Forecast table

Abbreviations: FRI-Econ = Karger et al., "Forecasting the Economic Effects of AI" (NBER WP 35046). LEAP = FRI Longitudinal Expert AI Panel. SF = superforecasters. p10–p90 = 10th–90th percentile. IQR = 25th–75th percentile. "Rapid/moderate/slow" = FRI's AI-progress scenarios for 2030 (defined in section B1).

### A1. Labour share

| Quantity | Baseline | Target | Median | Range | Group (n) | Scenario | Made | Source | Verif. |
|---|---|---|---|---|---|---|---|---|---|
| US labour share of income | 55.48% (2025) | 2030 | 54.3% | not stated | Economists (62–69) | Unconditional | Oct 2025–Feb 2026 | https://www.nber.org/system/files/working_papers/w35046/w35046.pdf | PRIMARY (verbatim) |
| same | 55.48% | 2030 | 55.0% / 54.0% / 52.0% | not stated | Economists | Slow / Moderate / Rapid | same | same | PRIMARY (verbatim) |
| same | 55.48% | 2050 | 50.0% | not stated | Economists | Unconditional | same | same | PRIMARY (verbatim) |
| same | 55.48% | 2050 | 52.0% / 50.0% / 45.0% | not stated | Economists | Slow / Moderate / Rapid | same | same | PRIMARY (verbatim) |
| same | 55.48% | 2050 | 40.0% | not stated | AI experts (n≈47–52) | Rapid | same | same | PRIMARY (two reads agree; see note F3) |
| US labour share, private nonfarm sector (BLS) | 58.3% (2024) | 2026 | 58% | not stated | Experts (214), SF (55), public (630) — all 58% | Unconditional | 9–31 Mar 2026 | https://leap.forecastingresearch.org/reports/wave7 | PRIMARY |
| same | 58.3% | 2030 | 56% | IQR reported in charts, not in text | Experts, SF, public — all 56% | Unconditional | same | same | PRIMARY |
| same | 58.3% | 2040 | 51% (experts); 53% (SF); 53% (public) | "wide and grows substantially" | as above | Unconditional | same | same | PRIMARY |
| US labour share of national income | not extracted | 2030 | 58.3% | not extracted | Metaculus community + 5 Pro Forecasters (46 forecasters on Q41578) | Unconditional | accessed 3 Oct 2026 | https://www.metaculus.com/labor-hub/ ; https://www.metaculus.com/questions/41578/ | PRIMARY (series and baseline not confirmed) |
| same | — | 2035 | 55.6% | not extracted | same | same | same | same | PRIMARY |
| US labour vs capital share of income | ~60% labour / ~40% capital ("today") | 2030 | 59.4% labour | model output, no interval | Anthropic economics team (Korinek, Jones, Sacher, Cotter, McCrory) | "Modest" (AI ≈ internet-sized impact) | Sep 2026 (v1.0) | https://www.anthropic.com/institute/econ-scenarios | PRIMARY |
| same | ~60% | 2030 | 56.1% labour (capital +3.9 pts) | — | same | "Substantial" (AI can do half of knowledge work by 2030) | same | same | PRIMARY |
| same | ~60% | 2030 | 45.2% labour (capital +14.8 pts) | — | same | "Extreme" (AI beats humans at the vast majority of knowledge tasks) | same | same | PRIMARY |
| US wage bill as share of economy | ~55% (2025, per authors) | 2033–35 | ~10% | — | AI Futures Project | AI 2040 "Plan A" (normative, not a best guess) | Jul 2026 | https://ai-2040.com/AI-2040.pdf | PRIMARY |

### A2. Labour-force participation, employment

| Quantity | Baseline | Target | Median | Range | Group (n) | Scenario | Made | Source | Verif. |
|---|---|---|---|---|---|---|---|---|---|
| US LFPR | 62.6% (Jan 2025); 61.8% (Sep 2026, BLS) | start 2030 | 61.0% | p10–p90 56.9–65.16% (pooled distribution) | Economists (60–69) | Unconditional | Oct 2025–Feb 2026 | NBER w35046 (URL above) | PRIMARY (verbatim) |
| same | same | start 2030 | 61.5% | — | Economists | Slow | same | same | PRIMARY (verbatim) |
| same | same | start 2030 | 59.3% | p10–p90 53.09–64.4% | Economists | Rapid | same | same | PRIMARY (verbatim) |
| same | same | start 2050 | 58.3% | — | Economists | Unconditional | same | same | PRIMARY (verbatim) |
| same | same | start 2050 | 59.2% | — | Economists | Slow | same | same | PRIMARY (verbatim) |
| same | same | start 2050 | 55.0% | p10–p90 44.77–64.69% | Economists | Rapid | same | same | PRIMARY (verbatim) |
| same | same | 2030 / 2050 | 62.0% / 60.0% | — | General public (226–401) | Unconditional | same | same | PRIMARY (verbatim) |
| same | same | 2050 | 54.6% | — | Superforecasters (34–38) | Rapid | same | https://forecastingresearch.org/research/economic-effects-of-ai | PRIMARY (two reads agree) |
| same | same | 2030 / 2050 | SF: 62.0 / 58.2 unconditional; 59.0 or 58.2 (2030 rapid). AI experts: 61.1 / 58.2–60.0 unconditional; 59.0–60.0 (2030 rapid) / 54.0 (2050 rapid). Public rapid: 60.0 / 57.7 | — | SF, AI experts (47), public | Unconditional and Rapid | same | NBER w35046, Figure 9 | PRIMARY-fig (reads disagree; check PDF) |
| US LFPR | 62.4% ("current") | start 2030 | 62% | — | Experts (231), SF (53), public (706) — all 62% | Unconditional | 9 Feb–3 Mar 2026 | https://leap.forecastingresearch.org/reports/wave6 | PRIMARY |
| same | same | start 2050 | 60% (experts, public) | — | same | Unconditional and Slow | same | same | PRIMARY |
| same | same | start 2050 | 52% (experts); 56% (SF); 60% (public) | — | same | Rapid | same | same | PRIMARY |
| CBO baseline LFPR (as cited by FRI) | — | 2025–29 avg; 2046–50 avg | 62.4%; 62.1% | — | CBO | no AI adjustment | — | NBER w35046 | PRIMARY (as quoted in paper; check CBO) |
| US total employment, % change vs 2025 | 2025 = 0 | 2027 / 2030 / 2035 | +0.32% / −0.53% / −3.7% | not extracted | Metaculus community + Pros (61 forecasters, Q41307) | Unconditional. Government baseline is +3.1% by 2035 | accessed 3 Oct 2026 | https://www.metaculus.com/labor-hub/ | PRIMARY |
| Occupation employment, % change vs 2025 | 0 | 2035 | Financial specialists −13.0%; software developers −11.6%; lawyers and law clerks −10.7%; services sales reps −10.1%; registered nurses +11.6%; physicians +5.4%; law enforcement +3.1% | not extracted | Metaculus hub | Unconditional | 3 Oct 2026 | same | PRIMARY |
| US white-collar jobs, % change vs 1 Jan 2025 | trend extrapolation +6.8% by 2030 | 2030 | +2% | IQR about −4% to +5% | LEAP experts (339 across waves 1–3) | Unconditional | Jun–Aug 2025 | https://leap.forecastingresearch.org/reports/waves-1-to-3-insights | PRIMARY |
| US employment–population ratio falls below 51.3% (COVID low) in any month | 59.2% (Sep 2026) | 2026 / 2030 | 0.5% / 5% probability | — | Metaculus (51) | — | 3 Oct 2026 | https://www.metaculus.com/questions/17472/ | PRIMARY |
| US employment–population ratio five years after AGI | 59.2% | AGI + 5 yrs | 39.7% | IQR 17.7–55.6% | Metaculus (28; thin) | Conditional on AGI | 3 Oct 2026 | https://www.metaculus.com/questions/26248/ | PRIMARY |
| "Employment rate" (definition not stated; "only 26% of Americans have jobs" in 2036) | 62% (2027 in scenario) | 2030 / 2033 / 2035 / 2038 | 61% / 52% / 32% / 17% | — | AI Futures Project | AI 2040 Plan A (normative) | Jul 2026 | https://ai-2040.com/AI-2040.pdf | PRIMARY-fig (stat boxes; two reads agree) |
| Jobs created / displaced worldwide | — | 2025–2030 | 170m created (14%); 92m displaced (8%); net +78m (7%) | — | WEF employer survey (1,000+ employers, 14m+ workers, 55 economies) | — | Jan 2025 | https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/ | PRIMARY |
| Share of US workers displaced if AI widely adopted | — | "transition period" (no year) | 6–7% | 3–14% under different assumptions; 2.5% if current use cases scaled | Goldman Sachs Research (Briggs, Dong) | Wide adoption | 13 Aug 2025 | https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-global-workforce | PRIMARY |
| Full-time-equivalent jobs exposed to automation, global | — | no year | 300 million | — | Goldman Sachs | — | 5 Apr 2023 | https://www.goldmansachs.com/insights/articles/generative-ai-could-raise-global-gdp-by-7-percent | PRIMARY |
| Share of US hours worked that could be automated | 21.5% (pre-gen-AI estimate) | 2030 | 29.5% | — | McKinsey Global Institute | Midpoint adoption | 26 Jul 2023 | https://www.mckinsey.com/mgi/our-research/generative-ai-and-the-future-of-work-in-america | PRIMARY |
| Share of jobs exposed to AI | — | no year | ~40% global; ~60% advanced; ~40% emerging; ~26% low-income | "roughly half" of exposed jobs in advanced economies may benefit, half be harmed | IMF (Cazzaniga et al.; Georgieva blog) | — | 14 Jan 2024 | https://www.imf.org/en/Blogs/Articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity | PRIMARY |
| Share of US employment at high risk of computerisation | — | "perhaps a decade or two" from 2013 | 47% | — | Frey & Osborne (702 occupations) | Technical feasibility, not a job-loss forecast | 17 Sep 2013 | https://oms-www.files.svdcdn.com/production/downloads/academic/The_Future_of_Employment.pdf | PRIMARY (verbatim) |
| Share of US work hours assisted by generative AI | 3.35% (2024) | 2030 / 2050 | 10.1% / 40.0% | — | FRI-Econ economists | Unconditional (rapid: 24.2% / 62.0%; slow: 8.0% / 25.0%) | Oct 2025–Feb 2026 | NBER w35046 | PRIMARY (verbatim) |
| same | 4% (2025 median) | 2027 / 2030 | 8% / 18% | 2030 IQR 9–30%; top decile >40% | LEAP experts (263); public 10% for 2030 | Unconditional | 22 Sep–13 Oct 2025 | https://leap.forecastingresearch.org/reports/wave3 | PRIMARY |

### A3. Unemployment

| Quantity | Baseline | Target | Median | Range | Group (n) | Scenario | Made | Source | Verif. |
|---|---|---|---|---|---|---|---|---|---|
| US unemployment rate | 4.2% (Sep 2026) | 2030 | 5.0% | not stated | Economists (62) | Unconditional, Slow and Moderate (all 5.0%) | Oct 2025–Feb 2026 | NBER w35046 | PRIMARY (verbatim) |
| same | same | 2030 | 6.0% | — | Economists | Rapid | same | same | PRIMARY (verbatim) |
| same | same | 2050 | 5.0% / 5.0% / 6.0% / 6.0% | — | Economists | Unconditional / Slow / Moderate / Rapid | same | same | PRIMARY (verbatim) |
| same | same | 2050 | 8.0% | — | AI experts | Rapid | same | same | PRIMARY (see note F3) |
| US youth (20–24) unemployment | not extracted | 2030 | 9.5% / 9.0% / 10.0% / 11.0% | — | Economists | Unconditional / Slow / Moderate / Rapid | same | same | PRIMARY (verbatim) |
| same | — | 2050 | 9.0% / 8.2% / 9.8% / 10.0% | — | Economists | same order | same | same | PRIMARY (verbatim) |
| US annual unemployment rate | 4.2% | 2027 | 5.14% | — | Metaculus (19–24) | — | 3 Oct 2026 | https://www.metaculus.com/questions/14064/ (value from Metaculus search listing) | PRIMARY (thin) |
| Unemployment rate, recent college graduates | 5.5% (2025) | 2030 / 2035 | 10% / 11.9% | not extracted | Metaculus hub (52 forecasters) | — | 3 Oct 2026 | https://www.metaculus.com/labor-hub/ | PRIMARY |
| Underemployment rate, recent graduates | 41.6% (2025) | 2030 / 2035 | 48.4% / 55.4% | — | Metaculus hub (60) | — | 3 Oct 2026 | same | PRIMARY |
| Recent-graduate unemployment ≥20% for three months before 2030 | 5.5% | before 2030 | 24% probability | — | Metaculus (63) | — | 3 Oct 2026 | Metaculus search listing | PRIMARY |
| 20 million Americans laid off from private-sector jobs in any quarter before 2030 | — | before 2030 | 11% probability | — | Metaculus (36) | — | 3 Oct 2026 | Metaculus search listing | PRIMARY |
| US long-term unemployment rate | not extracted | 2030 / 2035 | 2.42% / 4.19% | — | Metaculus hub (43) | — | 3 Oct 2026 | https://www.metaculus.com/labor-hub/ | PRIMARY (definition not confirmed) |
| Unemployment rise during AI transition | — | transition (frictional, fades "after two years" historically) | +0.5 percentage point | — | Goldman Sachs Research | Wide adoption | 13 Aug 2025 | Goldman URL above | PRIMARY |
| US unemployment | 4.2% | within 1–5 years of May 2025 (i.e. 2026–2030) | 10–20% ("could") | — | Dario Amodei, Anthropic CEO | Individual claim; label as outlier. Also "half of all entry-level white-collar jobs" | 28 May 2025 | https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic | PRIMARY (outlet that took the interview) |
| US unemployment exceeds 10% before 2030 | 4.2% | before 2030 | 25% | — | Manifold market | — | Aug 2026 | https://aimultiple.com/ai-job-loss | SECONDARY |
| "Citrini scenario" (mass layoffs by 2028) | — | 2028 | 15% | — | Kalshi | — | Aug 2026 | same | SECONDARY |
| US unemployment by 2030 expected by the public | 4.2% | 2030 | "around 5%" | — | US general public (10,980, Morning Consult) | Typical respondent | Aug 2026 | https://www.anthropic.com/institute/econ-scenarios | PRIMARY |

### A4. Inequality and household outcomes

| Quantity | Baseline | Target | Median | Range | Group (n) | Scenario | Made | Source | Verif. |
|---|---|---|---|---|---|---|---|---|---|
| Share of US wealth held by top 10% of households | 71.2% (2023) | 2030 / 2050 | 73.2% / 75.0% | not stated in text | Economists (62) | Unconditional | Oct 2025–Feb 2026 | NBER w35046 | PRIMARY (verbatim) |
| same | 71.2% | 2030 / 2050 | 75.0% / 80.0% | — | Economists | Rapid | same | same | PRIMARY (verbatim) |
| same | 71.2% | 2050 | 74.5% / 75.0% | — | Superforecasters (36) | Unconditional / Rapid | same | same | PRIMARY (verbatim) |
| same | 71.2% | 2030 / 2050 | 73% / 75% (experts); 72% / 73% (SF) | — | LEAP experts (231), SF (53) | Unconditional | 9 Feb–3 Mar 2026 | https://leap.forecastingresearch.org/reports/wave6 | PRIMARY |
| same | 71.2% | 2030 / 2050 | 76% / 81% (experts); 76% in 2050 (SF) | — | LEAP | Rapid (slow: 72% / 75%, experts) | same | same | PRIMARY |
| Household resource-to-needs ratio, 20th / 50th / 80th percentile | 1.2 / 2.3 / 4.3 (2024) | 2030 | 1.2 / 2.4 / 4.9 | — | Metaculus hub | — | 3 Oct 2026 | https://www.metaculus.com/labor-hub/ | PRIMARY |
| same | same | 2035 | 1.3 / 2.6 / 5.3 | — | same | — | same | same | PRIMARY |
| US median household income (nominal) | $80,610 (2023) | 2030 / 2050 | $83,967 / $93,175 | — | Economists | Unconditional (rapid: $87,000 / $100,000) | Oct 2025–Feb 2026 | NBER w35046 | PRIMARY (verbatim) |
| Knowledge-worker wages | — | 2030 | "essentially flat" (substantial); fall "more than 10%" (extreme) | — | Anthropic model | Substantial / Extreme | Sep 2026 | Anthropic URL above | PRIMARY |
| Median real wage growth vs 2025 | 0 | 2030 / 2035 | +2.3% / +3.1% | — | Metaculus hub | — | 3 Oct 2026 | Metaculus hub | PRIMARY |
| Citizen's dividend per person (US, inflation-adjusted) | none | 2032 / 2035 / 2040 | $45,000 / ~$1M / $10M | — | AI Futures Project | AI 2040 Plan A (normative; assumes ~50% real GDP growth in 2032) | Jul 2026 | https://ai-2040.com/AI-2040.pdf | PRIMARY (2032 and 2035 verbatim; 2040 single read) |
| US adopts national UBI before end of 2035 | — | 2035 | 6% | — | Metaculus (2 forecasters; do not plot) | — | 3 Oct 2026 | https://www.metaculus.com/questions/40883/us-ubi-adoption-by-2035/ | PRIMARY |
| Date any country adopts UBI | — | — | Jan 2035 | IQR Mar 2027–Mar 2045 | Metaculus (26) | — | 3 Oct 2026 | https://www.metaculus.com/questions/2728/when-will-a-country-adopt-universal-basic-income/ | PRIMARY |
| UBI exists five years after AGI | — | AGI + 5 | 25% | — | Metaculus (12) | Conditional on AGI | 3 Oct 2026 | https://www.metaculus.com/questions/26326/5y-after-agi-universal-basic-income/ | PRIMARY |

### A5. Growth and productivity

| Quantity | Baseline | Target | Median | Range | Group (n) | Scenario | Made | Source | Verif. |
|---|---|---|---|---|---|---|---|---|---|
| US real GDP growth, 5-yr annualised | 2.4% (2021–25) | 2025–29 | 2.5% (economists, AI experts, SF); 2.4% (public) | economists p10–p90 reported as 0.73–4.56% (single read) | Economists (64), AI experts (47), SF (35), public (261) | Unconditional | Oct 2025–Feb 2026 | NBER w35046 | PRIMARY (abstract confirms 2.5%) |
| same | 2.4% | 2025–29 | 3.3% (economists); 3.7% (AI experts); 3.7% (SF) | economists 1.2–5.5%; SF 2.0–6.0% (median p10 and p90) | same | Rapid | same | same | PRIMARY (verbatim) |
| same | 2.4% | 2045–49 | 3.5% (economists); 5.3% (AI experts); 4.0% (SF); 4.5% (public) | 1.0–7.0%; 2.3–9.3%; 1.0–7.0%; 2.5–7.1% | same | Rapid | same | same | PRIMARY (verbatim) |
| same | 2.4% | 2045–49 | 2.5% (economists) | — | Economists | Unconditional | same | same | PRIMARY (verbatim) |
| same | ~2.5% | 2025–30 | 2.7% (experts); 2.5% (SF, public) | — | LEAP wave 6 | Unconditional (experts: slow 2.3%, rapid 4.0%; SF rapid 3.5%) | Feb–Mar 2026 | LEAP wave 6 | PRIMARY |
| same | — | 2045–50 | 5.0% (experts); 3.4% (SF) | — | LEAP wave 6 | Rapid (experts slow 2.5%) | same | same | PRIMARY |
| Advanced-economy GDP growth | — | 2050 | 2.7% (experts); 2.6% (public); 2.4% (SF) | experts IQR 1.4–3.2% | LEAP wave 10 (180 experts, 53 SF, 595 public) | Unconditional. Rapid: 5% / 4.9% / 3%. Slow: 2% / 2% / 1.9% | 16 Jun–7 Jul 2026 | https://leap.forecastingresearch.org/reports/wave10 | PRIMARY |
| US GDP level vs no-AI baseline | ~$30T (past year) | 2030 | +1.6% ($34.1T) / +8.3% ($36.3T) / +32.4% ($44.4T), 2025 prices | — | Anthropic model | Modest / Substantial / Extreme (extreme reaches ~15% a year) | Sep 2026 | Anthropic URL above | PRIMARY |
| US TFP gain from AI | — | 10 years from 2024 | ≤0.66% total; "less than 0.53%" after adjusting for hard tasks | — | Daron Acemoglu | Sceptical anchor | May 2024 | https://www.nber.org/papers/w32487 | PRIMARY (abstract verbatim) |
| US labour productivity vs 2025 | 0 | 2030 / 2035 | +13.7% / +27.3% | — | Metaculus hub | — | 3 Oct 2026 | Metaculus hub | PRIMARY |
| Global GDP boost from generative AI | — | ~10 years | +7% (~$7T); productivity growth +1.5 pp a year | — | Goldman Sachs | Wide adoption | 5 Apr 2023 | Goldman 2023 URL above | PRIMARY |
| Gross world product growth | ~3% a year | during automation | "2–20 times" the historical ~3% | authors warn against reading as precise predictions | Epoch AI GATE model | Default assumptions | 21 Mar 2025 | https://epoch.ai/blog/announcing-gate | PRIMARY |

### A6. AI capability and timelines

| Quantity | Baseline | Target | Median | Range | Group (n) | Scenario | Made | Source | Verif. |
|---|---|---|---|---|---|---|---|---|---|
| METR 50% time horizon, best model | Claude Opus 4.5: 320 min | measured | — | 95% CI 170–729 min | METR (Time Horizon 1.1) | measurement, not forecast | 29 Jan 2026 | https://metr.org/blog/2026-1-29-time-horizon-1-1/ | PRIMARY |
| Doubling time of 50% time horizon | — | trend | 196.5 days (2019–2025); 130.8 days (since 2023); 88.6 days (since 2024) | CIs "substantially wide"; >16 hrs unreliable with current task suite | METR | trend fit | 29 Jan 2026 | same; https://metr.org/time-horizons/ | PRIMARY |
| When agents handle week-long software tasks | ~1 hr (Claude 3.7 Sonnet, Mar 2025) | 2027–2029 ("2–4 more years" if trend continues) | — | month-long tasks arrive "approximately 2.5 years sooner" if the 2024–25 trend holds | METR | Trend continuation | 19 Mar 2025 | https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/ | PRIMARY |
| METR 80% time horizon | — | end 2026 | 3.4 hrs (experts); 3.5 hrs (SF); 3 hrs (public) | — | LEAP wave 8: experts (205), SF (52), public (601) | Unconditional | 20 Apr–11 May 2026 | https://leap.forecastingresearch.org/reports/wave8 | PRIMARY |
| Year the 8-hour task horizon is reached | — | — | 2028 (SF); 2030 (experts); 2037 (public) | 25th percentile: 2027; 2028; 2030 | LEAP wave 8 | Unconditional | same | same | PRIMARY |
| AGI before 2100 and year, if so | — | — | 80% (experts), 2050; 80% (SF), 2047; 65% (public), 2050 | experts' year IQR 2039–2065 | LEAP wave 8 | — | same | same | PRIMARY |
| "Rapid progress" world before 2100 and year | — | — | 68%, 2045 (experts); 76%, 2050 (SF); 55%, 2045 (public) | — | LEAP wave 8 | — | same | same | PRIMARY |
| Probability of rapid / moderate / slow AI progress by 2030 | — | 2030 | Economists 14.0% / 47.4% / 38.6%; SF 12.6% / 42.4% / 45.0%; public 18.1% / 41.0% / 40.8% (means) | economists' median for rapid 10% (IQR 6.7–20%) | FRI-Econ | — | Oct 2025–Feb 2026 | NBER w35046 | PRIMARY (verbatim, except SF moderate = single read) |
| same | — | 2030 | Experts 23% / 52% / 26%; SF 19% / 54% / 26%; public 23% / 46% / 30% | — | LEAP wave 6 | — | Feb–Mar 2026 | LEAP wave 6 | PRIMARY |
| "First general AI system" announced | — | — | 21 Jan 2031 | IQR 16 Apr 2028–Jul 2037 | Metaculus (~1,900) | Strong-AGI definition (reasoning, robotics, coding) | accessed 3 Oct 2026 | https://www.metaculus.com/questions/5121/date-of-artificial-general-intelligence/ | PRIMARY (a Metaculus listing page showed 18 Apr 2031; see F) |
| "Weakly general AI" announced | — | — | 8 Sep 2027 | IQR 11 Sep 2026–29 Jan 2030 | Metaculus (~1,800) | — | 3 Oct 2026 | https://www.metaculus.com/questions/3479/date-weakly-general-ai-is-publicly-known/ | PRIMARY |
| HLMI (machines do every task better and cheaper) | — | 10% / 50% | 2027 / 2047 | 2022 survey: 2029 / 2060. Framing changes answer roughly twofold | AI researchers (2,778 total; 1,714 on this question) | — | Oct 2023 | https://arxiv.org/abs/2401.02843 | PRIMARY |
| Full Automation of Labor (every occupation) | — | 10% / 50% | 2037 / 2116 | 2022 survey: 2050 / 2164 | AI researchers (774) | — | Oct 2023 | same | PRIMARY |
| AGI median year | — | — | 2028 (Kokotajlo, when AI 2027 was finished); other authors 2031–2035 | — | AI Futures Project authors | personal medians | 2025–26 | https://ai-2040.com/AI-2040.pdf | PRIMARY (verbatim) |
| AI 2027 milestones | — | 2027 | superhuman coder Mar 2027; superintelligence Dec 2027 | scenario, not median forecast | AI Futures Project | AI 2027 scenario | 3 Apr 2025 | https://ai-2027.com/ | PRIMARY |
| Impact of AI on Technological Richter Scale by 2040 | — | 2040 | Level 8 35%, level 9 24%, level 10 11% (experts); 34% / 23% / 8.5% (SF); public: level 8 23% | — | LEAP wave 8 | — | Apr–May 2026 | LEAP wave 8 | PRIMARY |
| US adults using AI daily for companionship | — | 2027 / 2030 / 2040 | 10% / 15% / 30% | 2040 IQR 16–40%; top decile >60%; public 20% | LEAP experts (263) | — | Sep–Oct 2025 | LEAP wave 3 | PRIMARY |

### A7. Agency, power concentration, institutions, catastrophe

| Quantity | Baseline | Target | Median | Range | Group (n) | Scenario | Made | Source | Verif. |
|---|---|---|---|---|---|---|---|---|---|
| Probability "power centralization" causes catastrophic harm | — | Sep 2025–Sep 2030 | 18.0% (panel mean) | 95% CI 12.1–24.8% | 272 experts, 37 countries (214 finished all 3 rounds) | Business as usual | Sep–Nov 2025; paper Jun 2026 | https://arxiv.org/abs/2606.04490 | PRIMARY |
| same | — | same | 11% | — | same | Pragmatic mitigations | same | same | PRIMARY |
| "Competitive dynamics" → catastrophic harm | — | same | 16.6% | 95% CI 12.0–21.6% | same | Business as usual (7% with mitigations) | same | same | PRIMARY |
| "False information" → catastrophic harm | — | same | 12.8% | 95% CI 8.9–18.1% | same | Business as usual (7% with mitigations — SECONDARY, ppc.land) | same | same | PRIMARY / SECONDARY |
| "Dangerous capabilities"; "weapons & cyberattacks" | — | same | 21.5% [16.9–26.4]; 21.0% [15.1–27.5] | 12% each with mitigations | same | Business as usual | same | same | PRIMARY |
| "Governance failure" → catastrophic harm | — | same | 14% (ppc.land); "14–17%" (my read of paper) | — | same | Business as usual | same | https://ppc.land/how-ai-could-damage-the-planet-and-break-society-before-2030-2/ | SECONDARY (check paper) |
| "Inequality & unemployment" → catastrophic harm | — | same | 11% | BAU figure not found (>10%) | same | Pragmatic mitigations | same | arXiv 2606.04490 | PRIMARY |
| "Environmental harm" | — | same | 17% BAU (SECONDARY); 12% with mitigations | — | same | — | same | arXiv / ppc.land | PRIMARY / SECONDARY |
| Count of risks with >10% chance of catastrophic outcome | — | same | 18 of 24 (BAU); 5 of 24 (mitigations); all 24 >5% even with mitigations | — | same | — | same | arXiv 2606.04490 | PRIMARY |
| "Loss of human agency", "overreliance", "economic/cultural devaluation", "loss of consensus reality" | — | same | NOT FOUND numerically. Only: overreliance was "#8 in 'top concerns' and #20 by severity"; loss of consensus reality was the most-selected "top concern" (21.6%) | — | same | — | same | arXiv 2606.04490 | PRIMARY (partial) |
| Governments restrict AI model releases | — | — | median year 2030 (experts; 25%–75%: 2028–2034); SF 2030; public 2032 | — | LEAP wave 9: experts (194), SF (53), public (612) | — | 19 May–10 Jun 2026 | https://leap.forecastingresearch.org/reports/wave9 | PRIMARY (wording of question not checked) |
| Number of top-10 economies that are authoritarian (EIU score <4) | not extracted | 2040 | 3 (experts); 4.6 (public); ~2 (SF, unconditional) | — | LEAP wave 9 | Rapid progress (experts, public) | same | same | PRIMARY (baseline count needed) |
| First major AI-driven harm event (≥50 deaths or ≥$100B damage) | — | by 2050 | 62% (experts); 70% (SF); 35% (public); median year 2035 if it occurs | experts: 25% by 2031, 75% by 2040 | LEAP wave 9 | — | same | same | PRIMARY |
| AI-caused catastrophe (>10% of humanity dies within 5 years) | — | by 2100 | 5% (experts); 2.4% (SF); 7% (public) | Rapid: 10% / 5% / 15%. Slow: 2% (experts), 5% (public) | LEAP wave 9 | Unconditional and conditional | same | same | PRIMARY |
| AI-caused catastrophe | — | by 2100 | 2.13% (SF, n=88); 12% (AI domain experts); 5% (public survey) | — | XPT | — | Jun–Oct 2022 | https://forecastingresearch.org/pdf/existential-risk-persuasion-tournament.pdf | PRIMARY |
| AI-caused extinction | — | by 2100 | 0.38% (SF); 3% (AI domain experts) | — | XPT (169 participants: 89 SF, 80 experts) | — | 2022 | same | PRIMARY |
| Extinction or similarly severe disempowerment from inability to control AI | — | no date | median 10%, mean 19.4% (n=661); extinction question median 5%, mean 16.2% (n=1,321) | 37.8–51.4% of respondents gave ≥10% | AI researchers | — | Oct 2023 | https://arxiv.org/pdf/2401.02843 | PRIMARY |
| Share of AI researchers rating a scenario "substantial" or "extreme" concern (next 30 years) | — | — | False information 86%; manipulation of public opinion 79%; authoritarian control of populations 73%; dangerous groups' tools 73%; worsened economic inequality 71% | other six scenarios not extracted | AI researchers (1,345) | — | Oct 2023 | same | PRIMARY |
| Which of Aaronson's five AI worlds comes first before 2050 | — | 2050 | Futurama 38.2%; AI-Dystopia 26.4%; Singularia 17.7%; Paperclipalypse 11.9%; AI-Fizzle 5.9% | — | Metaculus (316) | — | 3 Oct 2026 | https://www.metaculus.com/questions/20683/ | PRIMARY |
| US–China military AI agreement signed | — | 2027 / 2030 / 2040 | 5% / 16% / 40% | — | LEAP wave 5 experts (229), SF similar | — | 12 Jan–2 Feb 2026 | https://leap.forecastingresearch.org/reports/wave5 | PRIMARY |
| Combined OpenAI + Anthropic revenue run-rate (2026 USD) | ~$140B reported so far in 2026 (per FRI accuracy review, Sep 2026) | 2030 / 2040 | $150B / $300B (experts); $300B / $770B (SF); $68B / $95B (public) | SF 2040 p10–p90 $222B–$1.3T | LEAP wave 11: experts (191), SF (52), public (625) | — | 13 Jul–11 Aug 2026 | https://leap.forecastingresearch.org/reports/wave11 | PRIMARY |

### A8. Public expectations

| Quantity | Value | Who (n) | When | Source | Verif. |
|---|---|---|---|---|---|
| Expect AI to lead to fewer jobs in US over next 20 years | 64% of US adults vs 39% of AI experts | 5,410 adults; 1,013 AI experts | Aug–Oct 2024 (published 3 Apr 2025) | https://www.pewresearch.org/internet/2025/04/03/how-the-us-public-and-ai-experts-view-artificial-intelligence/ | PRIMARY |
| Expect AI to have a positive effect on the US over 20 years | 17% of adults vs 56% of experts | same | same | same | PRIMARY |
| More concerned than excited about AI | 50% (up from 37% in 2021); 10% more excited | 5,023 US adults | 9–15 Jun 2025 | https://www.pewresearch.org/science/2025/09/17/how-americans-view-ai-and-its-impact-on-people-and-society/ | PRIMARY |
| AI will worsen people's ability to think creatively / form meaningful relationships | 53% / 50% (16% / 5% say improve) | same | same | same | PRIMARY |
| Want more control over how AI is used in their lives | "about six-in-ten" (Pew 2025); 55% adults, 57% experts (Pew 2024) | same | same | both Pew URLs | PRIMARY |
| Workers worried technology will make their job obsolete | 27% (2026), 20% (2025), 22% (2023), 15% (2021), 13% (2017) | 507 employed adults (±6 pts) | 3–24 Aug 2026 | https://news.gallup.com/poll/714368/workers-fear-losing-jobs-technology.aspx | PRIMARY |
| Expect AI to reduce total US jobs over next decade | "nearly eight in 10" | Bentley–Gallup (n not extracted) | not extracted | quoted in Gallup article above | SECONDARY |
| Public's implied 2030 economy | Typical respondent near "substantial" scenario: GDP ~10% higher, unemployment ~5%; ~10% of respondents align with "extreme" | 10,980 US adults (Morning Consult) | Aug 2026 | Anthropic URL above | PRIMARY |
| Think AI's effect over next 20 years will be positive | 42.0% public; 57.5% experts; 69.8% superforecasters | LEAP wave 8 | Apr–May 2026 | LEAP wave 8 | PRIMARY |
| Support for UBI in response to AI | Public 47.9% for, 30.3% against; economists: plurality (38.2%) opposed | FRI-Econ (401 public; 69 economists) | Oct 2025–Feb 2026 | NBER w35046 | PRIMARY (verbatim) |
| Support for a job guarantee | 57.1% of public vs 13.7% of economists | same | same | same | PRIMARY (verbatim) |
| Executives expecting AI to displace existing jobs / create new jobs | 54.3% / 24% | WEF executive survey | Jan 2026 | https://reports.weforum.org/docs/WEF_Four_Futures_for_Jobs_in_the_New_Economy_AI_and_Talent_in_2030_2025.pdf | PRIMARY |

---

## B. Per-source notes

### B1. Karger, Kuusela, Abaluck, Bryan, Halperin, Jones, Murphy, Trammell, … Tetlock — "Forecasting the Economic Effects of AI" (NBER WP 35046, April 2026; also Chicago Fed WP 2026-07; FRI PDF dated May 2026)

- Exists as described. URLs: https://www.nber.org/papers/w35046 ; https://forecastingresearch.org/pdf/economic-effects-of-ai.pdf.
- Survey ran October 2025 – February 2026. Final sample: 69 economists (reweighted), 27 AI-industry and 25 AI-policy professionals (pooled as "AI experts"), 38 superforecasters, 401 members of the public. n per question is lower (roughly 60–64 economists).
- Each respondent gave unconditional forecasts and forecasts conditional on three 2030 AI-progress scenarios. **Slow**: AI is a capable assistant (half of one-day freelance software jobs). **Moderate**: an effective collaborator (almost all five-day software jobs; robotaxis anywhere). **Rapid**: AI surpasses humans in most cognitive and physical tasks.
- Headline: unconditional medians look like "business as usual plus a bit" — GDP growth 2.5%, LFPR drifting down with demographics. Under rapid progress economists expect LFPR 55% by 2050; the authors attribute about 4.2 points of that fall (roughly 10 million workers) to AI by comparing rapid with slow.
- Labour share, unemployment, youth unemployment, median income and work hours are reported mainly for economists and **as medians only** — no interval in the text. Intervals exist for GDP and LFPR (10th–90th percentile).
- Core outcomes are not "inequality" in the Gini or top-1% sense. The paper uses the **top-10% wealth share**. I found no top-1% or Gini forecast.
- Caveats stated by authors: only economists are reweighted to a population; 11–21% of economists' distributions were incoherent; rapid-versus-slow gaps are not clean causal effects. A variance decomposition says experts disagree mostly about what capable AI does to the economy, not about how fast AI improves.

### B2. FRI LEAP (Longitudinal Expert AI Panel)

- Exists. Monthly waves; reports at https://leap.forecastingresearch.org/reports. Waves found: 1 Headliners (Jun–Aug 2025), 2 AI for Science, 3 Broad Adoption (Sep–Oct 2025), 4 AI R&D (Nov–Dec 2025), 5 Security and Geopolitics (Jan 2026), 6 Economic Effects (Feb–Mar 2026), 7 Robotics (Mar 2026), 8 Timelines (Apr–May 2026), 9 Risks (May–Jun 2026), 10 Benefits (Jun–Jul 2026), 11 AI Industry Economics (Jul–Aug 2026).
- Panel: roughly 180–340 experts per wave (computer scientists, industry, economists, policy think-tank staff), 52–60 superforecasters, 600–1,400 members of the public. Expert numbers fall over time (330 in wave 1, 180 in wave 10) — attrition matters when comparing waves.
- Most useful for the Observatory: wave 7 labour share (BLS private nonfarm), wave 6 LFPR / GDP / top-10% wealth by scenario, wave 3 work hours and AI companions, wave 1 white-collar jobs, wave 8 time horizons and AGI, wave 9 governance and authoritarian drift.
- Wave reports mostly give medians; IQRs are in charts. I could extract IQRs only for a few items.
- Experts and superforecasters agree on about 69% of questions (waves 1–3); the public expects less progress on about 71% of comparable questions.
- Wave 2 was not read.

### B3. XPT (2022, published 2023) and follow-ups

- Exists. 169 participants (89 superforecasters, 80 experts), June–October 2022.
- I could verify the 2100 medians only. The 2030 and 2050 columns were not visible in the fetched PDF (long document, truncated).
- I found **no** XPT forecast of labour-force participation. Economic items found: probability of >15% annual world GDP growth by 2100 (10.5% "AI-concerned" vs 4.5% "AI-sceptic" camp); largest AI training run cost by 2030 ($156M vs $100M).
- Follow-up 1: "Assessing near-term accuracy in the XPT" (2 Sep 2025), 38 resolved questions. Superforecasters and domain experts were about equally accurate (0.05 SD apart) and **both underestimated AI progress**. Public far worse (1.82 SD below the median participant). No correlation between near-term accuracy and long-run risk forecasts.
- Follow-up 2: "How accurate have AI progress forecasts been so far?" (22 Sep 2026) — see section E.

### B4. AI Impacts — "Thousands of AI Authors on the Future of AI" (Grace et al., arXiv 2401.02843)

- Exists. 2,778 researchers who published at six top venues; fielded October 2023; about 15% response rate.
- HLMI and FAOL questions describe almost the same thing yet get answers ~70 years apart — a known framing artefact. "Fixed-years" versus "fixed-probability" framing also shifts HLMI by about a factor of two. Treat these as soft.
- Concern ratings cover "the next thirty years", and are shares of respondents, not probabilities.
- I found no 2025 or 2026 wave on the AI Impacts wiki page.

### B5. Metaculus

- Biggest find: the **Labor Automation Forecasting Hub** (https://www.metaculus.com/labor-hub/), with forecasts to 2030 and 2035 for employment, graduate unemployment, labour share, wages, hours, productivity and occupation-level employment. Aggregate is a recency-weighted median of community forecasts plus five Pro Forecasters.
- The page reads "Hub launch date: October 3, 2026" in one fetch and "commentary last updated September 28, 2026" in another. Treat the launch date as unconfirmed; the forecasts were live when accessed on 3 October 2026.
- Forecaster counts are small (about 20–60 per question). Quartiles exist on the question pages but did not come through in the fetch.
- An August 2026 secondary source quoted the same hub at "employment 1.9% below 2025 by 2030"; the page on 3 October shows −0.53%. Either the forecast moved or the secondary source used a different question. Use the live page.
- Long-run AGI questions have ~1,900 forecasters and proper quartiles. The "post-AGI" conditional questions have very few forecasters (4–28) — show as curiosities, not anchors.
- Metaculus's API returned 403; I did not try to get around it.

### B6. MIT AI Risk Initiative Delphi (Saeri et al., arXiv 2606.04490, June 2026)

- Exists. Three-round Delphi, September–November 2025, 272 experts from 37 countries (68% male, 79% Europe/North America).
- Experts spread 100 points across five severity levels for each of 24 risks. Reported values are **panel means** from round 3. "Catastrophic" = more than 1 million deaths, or more than $100B loss, or civilisation-scale intangible harm (e.g. democratic collapse, authoritarian lock-in). "Severe" = up to 1 million deaths, $100M–$10B.
- Horizon is five years: September 2025 to September 2030. Two conditions: "business as usual" (no extra AI-specific mitigation) and "pragmatic mitigations".
- Only the top five risks have numbers in the main text (Table 1). The risks you most care about — loss of human agency, overreliance, devaluation of human effort, loss of consensus reality — are **not quantified in any text I could fetch**. The numbers live in an interactive chart (airi-delphi-viz.vercel.app/severity) and on OSF, neither of which is machine-readable through WebFetch.
- Authors' own caveat: participants are risk specialists, not calibrated forecasters. A $100B loss threshold is also low for "catastrophic" — cybercrime alone could cross it — so do not read 18% as "18% chance of civilisational catastrophe".

### B7. Institutional numbers

- **IMF Jan 2024**: exposure, not displacement. January 2026 follow-up exists as a Georgieva blog, "New Skills and AI Are Reshaping the Future of Work" (14 Jan 2026): one in ten job postings in advanced economies needs a new skill; employment in AI-vulnerable occupations 3.6% lower after five years in regions with high AI-skill demand.
- **Goldman Sachs**: 6–7% displaced is a transition estimate with no date; the 300 million figure (2023) is exposure. Both verified.
- **McKinsey (Jul 2023)**: 29.5% of US hours "could be automated" by 2030 — technical potential under a midpoint adoption scenario.
- **WEF**: Future of Jobs 2025 numbers verified. "Four Futures for Jobs in the New Economy: AI and Talent in 2030" (Jan 2026) is qualitative — Supercharged Progress, Age of Displacement, Co-Pilot Economy, Stalled Progress — with no employment numbers per scenario.
- **Anthropic "Scenarios for our Economic Future"** (Sep 2026, v1.0): a model, not a forecast. It omits policy responses, business cycles, demand shortfalls and catastrophic risk. No unemployment number per scenario (only "beyond typical recessionary levels" for knowledge workers in the extreme case).
- **Fed Governor Barr, 17 Feb 2026**: three scenarios — gradual adoption, rapid growth ("jobless boom"), stalled growth. **No numbers.** He judges evidence so far "consistent with" gradual adoption. A second speech (14 Jul 2026) covers inequality, also without projections.
- **CEA**: "Artificial Intelligence and the Great Divergence" (21 Jan 2026) exists; the web page had no extractable projections.
- **Acemoglu**: abstract confirms ≤0.66% TFP over 10 years (and <0.53% adjusted). The "~5% of tasks" figure is not in the abstract; unverified here.
- **Stanford (Brynjolfsson, Chandar, Chen)**: "Canaries in the Coal Mine?" — an observed indicator, not a forecast. Revised 12 Aug 2026: employment of 22–25-year-olds in AI-exposed occupations is 19% below less-exposed peers through June 2026.

### B8. Scenario projects

- **AI 2027** (3 Apr 2025): milestones only; the text I could fetch has no unemployment or GDP numbers. The longer endings were truncated.
- **AI 2040 "Plan A"** (AI Futures Project, July 2026): explicitly "a recommendation, not a prediction". Stat boxes give an employment rate falling from 62% (2027) to 17% (2038), with a citizen's dividend of $45,000 (2032) rising to ~$1M (2035). Plot only as a labelled extreme scenario.
- **METR**: verified measurements and doubling times. METR does not publish a dated forecast for one-month tasks; it gives conditional statements.
- **Epoch GATE**: authors say outputs are qualitative. No year-by-year table on the pages I could read.
- **Windfall Trust**: policy atlas and scenario exercises; no quantitative forecasts found. **Centre for Future Generations**: "Advanced AI: Possible Futures" (10 Jul 2025), five qualitative scenarios (Plateau, Big AI, Diplomacy, Arms Race, Intelligence Explosion); no labour numbers.

---

## C. Chart-ready sets

### (i) US labour share — plot as percentage-point change from each source's own baseline

| Source | Baseline | 2030 | 2035 | 2040 | 2050 |
|---|---|---|---|---|---|
| FRI-Econ economists, unconditional | 55.48% (2025) | 54.3% (−1.2 pt, derived) | — | — | 50.0% (−5.5 pt) |
| FRI-Econ economists, slow | 55.48% | 55.0% | — | — | 52.0% |
| FRI-Econ economists, moderate | 55.48% | 54.0% | — | — | 50.0% |
| FRI-Econ economists, rapid | 55.48% | 52.0% (−3.5 pt) | — | — | 45.0% (−10.5 pt) |
| FRI-Econ AI experts, rapid | 55.48% | — | — | — | 40.0% (−15.5 pt) |
| LEAP wave 7 experts | 58.3% (2024, BLS private nonfarm) | 56% (−2.3 pt) | — | 51% (−7.3 pt) | — |
| LEAP wave 7 superforecasters / public | 58.3% | 56% | — | 53% (−5.3 pt) | — |
| Metaculus hub | unknown | 58.3% | 55.6% | — | — |
| Anthropic modest / substantial / extreme | ~60% | 59.4% / 56.1% / 45.2% (−0.6 / −3.9 / −14.8 pt) | — | — | — |

- **Fan**: slow → moderate → rapid from FRI-Econ gives a clean three-line fan to 2030 and 2050 (52–55% in 2030; 45–52% in 2050). No published interval exists, so the fan is scenario spread, not uncertainty. Say so on the chart.
- **Disagreement**: by 2030 everyone except Anthropic's "extreme" is within about 4 points of baseline. Anthropic "extreme" (−14.8 pt in four years) is larger than economists' rapid scenario for 2050 (−10.5 pt in 25 years). AI experts are 5 points below economists for 2050 rapid.

### (ii) US labour-force participation (baseline 61.8%, Sep 2026; FRI used 62.6%, Jan 2025)

| Source | 2030 | 2050 |
|---|---|---|
| FRI-Econ economists, unconditional | 61.0% (p10–p90 56.9–65.2%) | 58.3% |
| FRI-Econ economists, slow | 61.5% | 59.2% |
| FRI-Econ economists, rapid | 59.3% (53.1–64.4%) | 55.0% (44.8–64.7%) |
| FRI-Econ superforecasters, rapid | — | 54.6% |
| FRI-Econ public, unconditional | 62.0% | 60.0% |
| LEAP wave 6 experts | 62% | 60% unconditional and slow; 52% rapid |
| LEAP wave 6 superforecasters, rapid | — | 56% |
| LEAP wave 6 public, rapid | — | 60% |
| CBO (as cited in FRI paper) | 62.4% (2025–29 avg) | 62.1% (2046–50 avg) |

- This is the **best fan available**: a real median with a 10th–90th percentile band at both 2030 and 2050, plus scenario lines.
- Employment alternative: Metaculus hub total employment −0.53% (2030) and −3.7% (2035) versus 2025, against a government baseline of +3.1% by 2035 — a 6.8-point gap.
- **Disagreement**: small for 2030 (59–62%). For 2050 under rapid progress: LEAP experts 52%, FRI economists 55%, superforecasters 54.6–56%, public 58–60%. The public barely moves its forecast under rapid progress; experts move 8 points.

### (iii) Unemployment (baseline 4.2%, Sep 2026)

| Source | 2027 | 2030 | 2035 | 2050 |
|---|---|---|---|---|
| FRI-Econ economists, unconditional | — | 5.0% | — | 5.0% |
| FRI-Econ economists, rapid | — | 6.0% | — | 6.0% |
| FRI-Econ AI experts, rapid | — | — | — | 8.0% |
| FRI-Econ youth (20–24), unconditional / rapid | — | 9.5% / 11.0% | — | 9.0% / 10.0% |
| Metaculus annual unemployment | 5.14% | — | — | — |
| Metaculus recent-graduate unemployment (5.5% in 2025) | — | 10% | 11.9% | — |
| Public (Anthropic / Morning Consult) | — | ~5% | — | — |
| Goldman Sachs | — | +0.5 pt during transition | — | — |
| Amodei (outlier claim) | — | 10–20% within 2026–2030 | — | — |
| Manifold: P(>10% before 2030) — SECONDARY | — | 25% | — | — |

- Plot the economists' line (4.2 → 5.0 → 5.0), a rapid line (6.0), and Amodei's 10–20% as a labelled bar. No published interval for the economists' numbers.
- **Disagreement**: economists' worst-case median (6%) is below the bottom of Amodei's range (10%). Economists put the adjustment in participation and labour share, not the unemployment rate. Graduate unemployment is where forecasters expect the visible damage: a near-doubling by 2030.

### (iv) Inequality — top-10% wealth share (baseline 71.2%, 2023)

| Source | 2030 | 2050 |
|---|---|---|
| FRI-Econ economists, unconditional | 73.2% | 75.0% |
| FRI-Econ economists, rapid | 75.0% | 80.0% |
| FRI-Econ superforecasters, unconditional / rapid | — | 74.5% / 75.0% |
| LEAP wave 6 experts, unconditional | 73% | 75% |
| LEAP wave 6 experts, slow / rapid | 72% / 76% | 75% / 81% |
| LEAP wave 6 superforecasters, unconditional / rapid | 72% | 73% / 76% |

- Second option: Metaculus household resource-to-needs ratio. The 80th percentile rises 4.3 → 5.3 by 2035 while the 20th moves 1.2 → 1.3 (ratio of the two, derived: 3.6 → 4.1).
- **Disagreement**: experts and economists expect +9 to +10 points by 2050 under rapid progress; superforecasters expect +4 to +5. No top-1% or Gini forecasts were found.
- Note that Governor Barr's July 2026 speech cites the top tenth holding 59% of wealth — a different dataset. Keep the FRI baseline with FRI forecasts.

### (v) AI capability and time horizon

- **Measured**: Claude 3.7 Sonnet ~60 min (early 2025); Claude Opus 4.5 320 min, CI 170–729 (TH1.1, January 2026). Doubling time 196.5 days long-run, 130.8 days since 2023, 88.6 days since 2024.
- **Forecast points**: 80% horizon at end-2026 — 3.4 hrs (experts), 3.5 hrs (superforecasters). Year the 8-hour horizon is reached — 2028 (superforecasters), 2030 (experts), 2037 (public).
- **Milestone dates**: weak AGI 2027 (Metaculus, IQR 2026–2030); "first general AI" January 2031 (Metaculus, IQR 2028–2037); AGI 2047–2050 conditional on arriving before 2100 (LEAP; 80% say it does); HLMI 2047 and full automation of labour 2116 (AI researchers, 2023); AI 2027 scenario superintelligence December 2027; Kokotajlo median 2028.
- You could draw your own extrapolation from METR's three doubling times. That would be the Observatory's line, not METR's — label it so.
- **Disagreement**: about 20 years between Metaculus (2031) and LEAP experts (2050) on "AGI", partly definitional. Superforecasters expect the 8-hour horizon two years **before** experts — the reverse of the usual pattern where superforecasters are the cautious group.

### (vi) Agency, power concentration, institutions

- **Probability bars to 2030** (MIT Delphi, panel means, business as usual → with mitigations): power centralization 18.0% [12.1–24.8] → 11%; competitive dynamics 16.6% [12.0–21.6] → 7%; false information 12.8% [8.9–18.1] → 7% (secondary); governance failure ~14% (secondary); inequality & unemployment >10% → 11%.
- **To 2040**: authoritarian top-10 economies under rapid progress — 3 (experts), 4.6 (public), ~2 (superforecasters, unconditional). Baseline count not extracted.
- **To 2050**: Metaculus "AI-Dystopia" first, 26.4%; "Paperclipalypse" 11.9%.
- **To 2100**: AI catastrophe 5% (LEAP experts), 2.4% (superforecasters), 7% (public); XPT 2022: 2.13% vs 12%.
- **Concern shares** (AI researchers, 2023): authoritarian control 73%; manipulation of public opinion 79%; inequality 71%.
- **Disagreement**: XPT domain experts were 5.6 times superforecasters on AI catastrophe (12% vs 2.13%). In LEAP 2026 the gap is about 2 times (5% vs 2.4%). There is **no published probability for "loss of human agency" as such** that I could extract — the closest are the Delphi power-centralization number and the AI Impacts "inability to control" median of 10%.

---

## D. Where forecasters disagree most

- **Whether capable AI shows up in the labour statistics at all.** Under the same "rapid" scenario, FRI economists put 2050 unemployment at 6% and labour share at 45%; AI experts say 8% and 40%. The FRI authors find that disagreement is mainly about economic effects of a given capability level, not about the pace of AI.
- **Speed of labour-share decline.** Anthropic's "extreme" scenario loses 14.8 points by 2030. Economists' rapid scenario loses 3.5 points by 2030 and 10.5 by 2050. LEAP experts (unconditional) lose 2.3 by 2030 and 7.3 by 2040. AI 2040 has wages at ~10% of the economy by 2033–35.
- **Unemployment versus participation.** Amodei: 10–20% unemployment by 2030. Economists: 5–6%. Manifold (secondary): 25% chance of exceeding 10% before 2030. Economists expect people to leave the labour force rather than be counted as unemployed.
- **Experts versus the public, in both directions.** The public is more pessimistic about jobs (64% vs 39% expect fewer jobs — Pew) yet forecasts **smaller** changes in LFPR under rapid progress (60% vs 52% in 2050 — LEAP). Public pessimism is not reflected in public numerical forecasts.
- **Timelines.** Metaculus "general AI" median January 2031; LEAP experts 2050; AI researchers' HLMI 2047 and full labour automation 2116; AI Futures authors 2028–2035. On catastrophic risk, experts sit at 2 to 6 times superforecasters, though the gap has narrowed since 2022.

---

## E. Forecast track record

- **Both experts and superforecasters have underestimated AI capability progress.** FRI's accuracy review (22 Sep 2026) says forecasters "dramatically underestimate AI progress on benchmarks". Examples: IMO gold was reached in 2025 against an expert median of 2030 and a superforecaster median of 2035; LiveCodeBench Pro 2026 median forecast 14%, actual 53.8% by May; top AI-company revenue for end-2026 forecast at $20–25B, actual about $100B. Source: https://forecastingresearch.org/research/ai-progress-accuracy-update (PRIMARY).
- **Adoption and real-world diffusion are mixed, sometimes overestimated.** Same review: experts expected 7.3% of US ride-hailing trips to be autonomous by 2027; trend points to about 2.5% (superforecasters said 2%). Electricity and data-centre forecasts were roughly on track. FRI says there is not yet enough resolved data to judge forecasts of macro and labour impacts. FRI also flags a selection effect: questions that resolve early are the ones where progress came faster.
- **Superforecasters were not better than experts on AI.** XPT near-term review (2 Sep 2025): the two groups were 0.05 SD apart; in 2022 superforecasters gave 2.3% and experts 8.6% to an IMO gold by 2025, which happened. Individual forecasters did no better than simple trend extrapolation; aggregates did. Near-term accuracy did not predict long-run risk views. Source: https://forecastingresearch.org/near-term-xpt-accuracy (PRIMARY).
- **Exposure estimates have not translated into job losses on the stated timescale.** Frey & Osborne (2013) put 47% of US employment at high risk "perhaps over a decade or two". Thirteen years on, US unemployment is 4.2% and the employment–population ratio 59.2% (BLS, September 2026). Their number was technical susceptibility, not a job-loss forecast, but it was widely read as one. The same caution applies to IMF 40%, Goldman 300 million and McKinsey 30%.
- **Survey forecasts move a lot between waves, and with wording.** AI researchers' median HLMI year moved from 2060 to 2047 in one year (2022 → 2023) and full automation of labour from 2164 to 2116; question framing alone shifts answers by about a factor of two. METR's measured doubling time has shortened from about 7 months (2019–2025) to about 3 months (since 2024). Treat every date on the capability chart as a snapshot.

---

## F. Unverified or not found

1. **WebSearch budget exhausted** after the first round (200 of 200 calls used session-wide). Everything after that relied on direct fetches. A second search round would close several gaps below.
2. **XPT 2030 and 2050 medians** for AI catastrophe and extinction: not visible in the fetched PDF. From recollection (UNVERIFIED — do not plot until checked against the PDF, tables near pp. 16–17 and the AI-risk section): AI catastrophe by 2030 / 2050 — superforecasters 0.01% / 0.73%, domain experts 0.35% / 5%; AI extinction by 2030 / 2050 — superforecasters 0.0001% / 0.03%, domain experts 0.02% / 1.1%. No XPT labour-force participation forecast was found.
3. **FRI-Econ, non-economist groups**: LFPR, TFP and top-10% wealth medians for AI experts and superforecasters were read from figures and came back differently across reads (e.g. superforecasters' 2030 rapid LFPR 59.0% vs 58.2%; AI experts' 2050 unconditional LFPR 58.2% vs 60.0%). One read said the "additional outcomes" (unemployment, labour share) were asked only of economists, yet AI-expert values for 2050 rapid (unemployment 8.0%, labour share 40.0%) appear in two reads. Check the PDF.
4. **FRI-Econ economists' unconditional GDP p10–p90 (0.73–4.56%) and a rapid p90 of 6.42%** appeared in one read only; the verbatim quote gives rapid 2030 as 1.2–5.5%.
5. **MIT Delphi per-risk numbers** for loss of human agency and autonomy, overreliance and unsafe use, economic and cultural devaluation of human effort, loss of consensus reality, and the business-as-usual figure for inequality & unemployment: not found. OSF (osf.io/pj2qr) and the interactive charts are JavaScript-rendered and unreadable through WebFetch. Governance failure 14% and environmental harm 17% are SECONDARY (ppc.land). Your list included "dependency and lock-in", "concentration of epistemic power" and "erosion of trust in institutions" — I did not see those as named risks in this study; they may be labels from a different taxonomy.
6. **LEAP wave 1 scenario probabilities**: one read gave slow 51% / moderate 26% for experts, which conflicts with the waves 1–3 insights report (slow 28%, rapid 23%). Use wave 6 values (26 / 52 / 23).
7. **LEAP wave 9** "authoritarian top-10 economies": current baseline count not extracted; question wording for the government-restriction item not checked. LEAP wave 2 not read.
8. **Metaculus**: quartiles for hub questions not extracted; labour-share data series and baseline unknown; Q5121 median shown as 21 Jan 2031 on the question page (two reads) and 18 Apr 2031 on a listing page; hub launch date unconfirmed. No Metaculus question found on "US unemployment exceeds X% by year Y" for the general rate, nor any explicitly "gradual disempowerment" question.
9. **Manifold and Kalshi** numbers are SECONDARY (aimultiple.com, August 2026); market URLs, liquidity and exact wording not checked. Polymarket: nothing found.
10. **OECD Employment Outlook 2026**: not found (guessed URLs returned 404). **US CEA January 2026**: page exists ("Artificial Intelligence and the Great Divergence", 21 Jan 2026) but no projections extracted. **IMF WEO Update January 2026**: no AI scenario numbers on the landing page; a secondary compilation attributes "+0.1–0.8 pt a year" to it (unverified).
11. **Fed Governor Barr's three scenarios** contain no numbers — nothing to plot.
12. **Anthropic scenarios**: no unemployment rate per scenario. Site-visitor sample size read as 30,447 on Anthropic's page and 7,704 in a Substack write-up (probably a growing live count). The technical report (Korinek et al. 2026) was not located.
13. **Acemoglu "~5% of tasks"**: not in the abstract; unverified. **Amodei**: verified via Axios only.
14. **AI 2027**: no unemployment, UBI or GDP numbers in the fetched text (endings truncated). **AI 2040**: "employment rate" is undefined in the document; publication date not printed in the PDF (July 2026 per a 13 Jul 2026 summary post); the $10M dividend in 2040 came from a single read.
15. **Epoch GATE**: no year-by-year outputs. **METR**: no published date for one-month tasks at 50%; the time-horizons page (updated 8 May 2026) may hold newer model results than the January 2026 figures used here.
16. **Ipsos AI Monitor**: page not found. **Bentley–Gallup "nearly eight in 10"**: quoted in a Gallup article; original not fetched. **AI Impacts**: six of eleven concern scenarios not extracted; no post-2023 wave found.
17. **Windfall Trust** and **Centre for Future Generations**: no quantitative forecasts found.
18. **Stanford "Canaries"** 19% figure is from the August 2026 revision; the original 2025 paper reported a smaller number (as far as I recall; not re-checked) — cite the revision date.
