# Fact-check of section 7 proposals (scan4)

Checked 12 Oct 2026 against primary sources (WebFetch). Verdicts: **confirmed**, **differs**, **could not check**.

## Summary of problems

1. **ECI series (capability, `eci`).** Proposed values come from Epoch's 1 Sep 2026 data insight. Epoch's current `eci_scores.csv` has different values for almost every model, and the frontier now runs differently: Fable 5 (162.06) is 0.01 below GPT-5.5 Pro (162.07), so it no longer sets a new high. Three frontier steps are missing: Opus 5 (162.78, 24 Jul), Fable 5.1 (164.70, 1 Sep) and GPT-6 Astra (166.45, 3 Sep). Opus 5.5 is 167.33. Use the CSV values (see table).
2. **RLI series (capability, `rli`).** The scores all match, but two models labelled "undated, below frontier" were actually frontier steps when released. Opus 4.8 (released 28 May 2026, 8.33) beat GPT-5.5 (6.25). Fable 5.1 (released 1 Sep 2026, 17.92) beat Fable 5 (15.83) two days before GPT-6 Astra. Release dates are from Epoch's CSV.
3. **METR wording (capability).** On 8 Sep 2026 METR marked the page "no longer actively updated", but the last model it added was in May 2026. "Stopped updating on 8 Sep 2026" overstates how recent the data is.
4. **Eurostat derived index.** The 2025 value for ages 15–24 in sector J is 90.54, so it rounds to 90.5, not 90.6. Everything else matches.
5. **FRED hours.** The Q1 2025 value can be read: 4.68%. Q4 2024 (4.10%) is also on FRED itself.
6. **CBO read.** "The FY2026 rise came from lower corporate tax and tariff refunds" is only about two-thirds right. About 1.4 of the 2.1-point rise comes from those falls; about 0.7 comes from income and payroll receipts growing faster than the total.

## Detailed table

| # | Figure | Proposed value | What the source says | Verdict | URL |
|---|---|---|---|---|---|
| 1 | RLI: Opus 5.5 | 21.25 (2026-09-22) | 21.25 ("NEW", top); release 2026-09-22 per Epoch CSV | confirmed | https://labs.scale.com/leaderboard/rli |
| 1 | RLI: GPT-6 Astra | 20.83 (2026-09-03) | 20.83; release 2026-09-03 per Epoch CSV | confirmed | same; https://epoch.ai/data/eci_scores.csv |
| 1 | RLI: Fable 5.1 | 17.92, "undated, below frontier" | 17.92; released 2026-09-01, so above Fable 5 (15.83) and before Astra: a frontier step | **differs** (status/date) | same |
| 1 | RLI: Fable 5 | 15.83 (2026-06-09) | 15.83; safe.ai blog (1 Jul 2026): "highest measured so far" | confirmed | same; https://safe.ai/blog/significant-increase-in-digital-labor-automation |
| 1 | RLI: Opus 4.8 | 8.33, "undated, below frontier" | 8.33; released 2026-05-28, so above GPT-5.5 (6.25): a frontier step | **differs** (status/date) | same |
| 1 | RLI: GPT-5.5 | 6.25 (2026-04-23) | 6.25, listed as "Codex GPT 5.5" (Codex scaffold) | confirmed (note scaffold) | same |
| 1 | RLI: Opus 4.6 (Cowork) | 4.17 (2026-02-05) | 4.17 "claude-opus-4-6 (CoWork)" | confirmed | same |
| 1 | RLI: Opus 4.5 | 3.75 (2025-11-24) | 3.75 | confirmed | same |
| 1 | RLI launch best | 2.50 (2025-10-30) | arXiv v1 30 Oct 2025, best agent 2.5% | confirmed | https://arxiv.org/abs/2510.26787 |
| 1 | RLI definition | "as good as a professional's" | "% of projects where an AI's deliverable is judged at least as good as the human standard"; 230-project private set | confirmed | labs.scale.com/leaderboard/rli |
| 1 | ECI trend | ~14 points/year | "advanced linearly by 14 points per year" since Sep 2024 (Barry, 1 Sep 2026) | confirmed | https://epoch.ai/data-insights/eci-frontier-trend |
| 1 | ECI ↔ METR | 5 points ≈ one doubling | "at the time of ECI's launch, a 5 point gain … roughly correspond[ed] to a doubling of the METR Time Horizon" | confirmed | https://epoch.ai/eci |
| 1 | ECI values (1 Sep piece) | GPT-4 126.19, GPT-4o 128.80, 3.5 Sonnet 130.00, o1 142.67, o3 147.06, GPT-5 150.00, Gemini 3 Pro 153.06, GPT-5.2 Pro 155.07, GPT-5.3 Codex 156.22, GPT-5.4 Pro 158.55, GPT-5.5 Pro 161.71, Fable 5 162.48, Opus 5 161.59, GPT-5.6 Sol 161.06 | All match the 1 Sep 2026 data insight | confirmed vs 1 Sep piece | https://epoch.ai/data-insights/eci-frontier-trend |
| 1 | ECI o1-mini, Gemini 2.5 Pro | 136.64, 144.63 | Not in 1 Sep piece. Current CSV: o1-mini 135.82 (2024-09-12); Gemini 2.5 Pro (Mar 2025) 144.16 (2025-03-31) | **differs** (current data) | https://epoch.ai/data/eci_scores.csv |
| 1 | ECI current CSV (re-pull) | as above | GPT-4 (Mar 2023) 125.89; GPT-4o (May 2024) 128.97; 3.5 Sonnet 130.0; o1 141.91; o3 146.86; GPT-5 150.0; Gemini 3 Pro 152.92; GPT-5.2 Pro 155.40; GPT-5.3 Codex 156.77; GPT-5.4 Pro 158.93; GPT-5.5 Pro 162.07; Fable 5 162.06; Opus 5 162.78 (2026-07-24); GPT-5.6 Sol 161.66 (2026-07-09); Fable 5.1 164.70 (2026-09-01); GPT-6 Astra 166.45 (2026-09-03); Opus 5.5 167.33 (2026-09-22) | **differs**: values shifted; frontier missing Opus 5, Fable 5.1, GPT-6 Astra; Fable 5 no longer a frontier step | same |
| 1 | ECI Opus 5.5 | ≈167 | "took the top spot … with a score of 167, narrowly ahead of GPT-6 Astra" (1 Oct 2026); CSV 167.33 | confirmed | https://epoch.ai/benchmarks |
| 2 | Gallup any use | 53% (Aug 2026, Q3) | 53% (Aug 2026); prior 52% (May 2026) | confirmed | https://www.gallup.com/699797/indicator-artificial-intelligence.aspx |
| 2 | Gallup weekly | 32% | 32% (few times a week or more); prior 30% | confirmed | same |
| 2 | Gallup daily | 16%; 84% not daily | 16%; prior 15% (84% is derived) | confirmed | same |
| 2 | Gallup Q2 sample 22,573 | 22,573 | Page gives no sample sizes | could not check | same |
| 2 | FRED work hours share | Q4'24 4.1, Q2'25 4.90, Q3'25 5.72, Q4'25 5.56, Q1'26 6.01, Q2'26 6.27 | 4.1008, 4.6775 (Q1'25), 4.9025, 5.7209, 5.5643, 6.0112, 6.2669; updated 4 Aug 2026 | confirmed; Q1 2025 = 4.68 is available, and Q4 2024 is on FRED | https://fred.stlouisfed.org/series/RPSGENAIASSISTWRKHRSALL |
| 3 | SO agents at work | 31% → 59% | "59% use agents at work at any frequency, compared to 31% in the 2025 Developer Survey" | confirmed | https://stackoverflow.blog/2026/05/27/agents-on-a-leash-agentic-ai-remains-mostly-monitored-at-work |
| 3 | SO daily | 14% → 37% | Chart: 14% (2025) → 37% (Apr 2026 pulse) | confirmed (chart) | same |
| 3 | SO autopilot | 63% | "63% … rarely or never let agents run entirely on autopilot" | confirmed | same |
| 3 | SO block changes | 60% | "Most (60%) … block agents from making unapproved system changes" | confirmed | same |
| 3 | SO sample | 1,100 | "1,100 developers and working professionals"; pulse from late April | confirmed | same |
| 4 | Eurostat 15–24, J (20 quarters) | 421.5 … 450.0 | All 20 values match; 2021-Q1 flagged "b"; updated 11 Sep 2026; 2026 no data | confirmed | https://ec.europa.eu/eurostat/databrowser/view/lfsq_egan2/default/table |
| 4 | Eurostat 25–64, J | 6335.5 … 7412.9 | All match | confirmed | same |
| 4 | Eurostat 15–24, all sectors | 13875.7 … 16365.8 | All match | confirmed | same |
| 4 | Fall 2023→2025 (15–24, J) | ~15% | 552.3 → 469.6 (4-quarter means) = −14.97% | confirmed | derived |
| 4 | Index 15–24 J, 2025 | 90.6 | 90.54 (2022 = 100) | **differs** (rounding: 90.5) | derived |
| 4 | Other indices | 89.8, 106.5, 98.9; 95.8, 104.1, 107.7, 109.0; 93.1, 102.6, 102.9, 102.6 | 89.83, 106.48, 98.94; 95.78, 104.06, 107.67, 108.96; 93.10, 102.61, 102.93, 102.64 | confirmed | derived |
| 5 | BEA pay share 2025 | 50.9% | 50.9 (updated 30 Sep 2026); 1995–2024 values all match proposal | confirmed | https://fred.stlouisfed.org/series/A4002E1A156NBEA |
| 5 | "Lowest since the 1930s" | yes | Lower or equal only in 1929 (49.5), 1930 (50.9), 1935 (50.6). Minimum 1940–2024 is 51.3 (1941). Strictly "lowest since 1935" | confirmed | same |
| 5 | Corporate profits share 2025 | 11.4% | 11.4; 1995–2024 values all match | confirmed | https://fred.stlouisfed.org/series/A445RE1A156NBEA |
| 6 | Ebook AI share 2023/24/25 | 23.1 / 33.6 / 52.7 | Table 5 weighted: 23.12 / 33.57 / 52.70; 2020–22 "close to zero" | confirmed | https://www.nber.org/papers/w34777 (PDF) |
| 6 | Monthly peaks | 30, 45, >60 | "monthly peaks of 30 percent in 2023, 45 percent in 2024, and over 60" in 2025 | confirmed | same |
| 6 | Ratings human vs AI | 82.5 vs 6.0 | "82.5 vs 6.0 average ratings" (s.3.2); Table 1: 82.53 vs 5.96. These are counts of ratings, not star scores | confirmed | same |
| 6 | Paper dates; detector | Jan 2026, rev. Jul 2026; Pangram | Issue Jan 2026, revised Jul 2026; Pangram Labs | confirmed | same |
| 7 | OECD internal use | 70% (23/33) → 86% (31/36) | Same | confirmed | https://www.oecd.org/en/publications/digital-government-outlook_0496b2bc-en/full-report/adopting-and-governing-ai-in-government_7ef312a9 |
| 7 | OECD public services | 67% (22/33) → 75% (27/36) | Same | confirmed | same |
| 7 | OECD policymaking | 33% (11/33) → 36% (13/36) | Same | confirmed | same |
| 7 | OECD oversight | 33% (12/36, 2025 only) | Same; Germany and US no 2025 data; published 15 Jun 2026 | confirmed | same |
| 7 | Met LFR deployments | 203 hotspot | 203 hotspot + 4 protective security = 207; period 11 Sep 2024–10 Sep 2025 | confirmed | https://www.met.police.uk/SysSiteAssets/media/downloads/force-content/met/advice/lfr/other-lfr-documents/live-facial-recognition-annual-report-2025.pdf |
| 7 | Met faces | ~3,147,436 | "~ 3,147,436 faces that passed the LFR cameras" | confirmed | same |
| 7 | Met alerts / false | 2,077 / 10 | "2077 alerts, of which 2067 were true alerts"; 10 false | confirmed | same |
| 7 | Met arrests | 962 | "962 people were arrested" | confirmed | same |
| 8 | Public Citizen AI lobbyist shares | 11.4, 10.4, 10.5, 17.1, 23.8, 26.1 | Counts match (1,311/11,530 … 3,570/13,699); report rounds to 11, 10, 11, 17, 24, 26; computed shares match. Published 24 Feb 2026 | confirmed | https://citizen.org/article/generative-influence |
| 8 | CBO income + payroll share | 86.2% FY2026 (84% FY2025) | (2,844 + 1,815) / 5,403 = 86.2%; FY2025 84.1% | confirmed | https://www.cbo.gov/system/files/2026-10/61985-MBR.pdf |
| 8 | CBO cause | "rise came from lower corporate tax and tariff refunds" | Corporate −$70bn, customs −$22bn (≈$130bn IEEPA refunds); but individual income taxes also +$188bn (+7%). Corporate and customs falls account for ≈1.4 of the 2.1 points | **differs** (partly) | same |
| 9 | Gallup media trust | 28% (2025) → 33% (2026) | 33% (1–17 Sep 2026; ±4); 28% (2025); 72% (1976) | confirmed | https://news.gallup.com/file/poll/714986/20260929NewsMediaTrust.pdf |
| 9 | Charlotin count | 2,184 to 10 Oct 2026 | "2184 cases identified so far"; last updated 10 Oct 2026 | confirmed | https://www.damiencharlotin.com/hallucinations/ |
| 9 | Charlotin judges | 32 | Party filter "Judge (32)" | confirmed | same |
| 9 | Ahrefs CTR | −58% (Dec 2023 vs Dec 2025); earlier 34.5% | Same; article 4 Feb 2026 | confirmed | https://ahrefs.com/blog/ai-overviews-reduce-clicks-update |
| 9 | Chartbeat referrals | −21.9% then −40.2% (Jul 2025→Jul 2026) | Same; SEJ 24 Sep 2026 | confirmed | https://www.searchenginejournal.com/google-search-decline-publishers-chartbeat/590681/ |
| 10 | METR "no longer actively updated" | stopped updating 8 Sep 2026 | Note dated 8 Sep 2026; last model added 8 May 2026 (Claude Mythos Preview) | **differs** (wording: data ends May 2026) | https://metr.org/time-horizons |
| 10 | METR GPT-5.6 Sol | ~11 hours, not robust, cheated | 11.3 h (95% CI 5–40 h); "we do not consider any of these numbers to represent a robust measurement"; highest detected cheating rate; post 26 Jun 2026 | confirmed | https://metr.org/blog/2026-06-26-gpt-5-6-sol |

Notes: the GPT-6 Astra announcement shows no GDPval or RLI score (confirmed). Epoch values were read from `eci_scores.csv` via WebFetch on 12 Oct 2026, so re-pull them before publishing.
