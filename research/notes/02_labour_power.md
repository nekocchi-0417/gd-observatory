# 02 — Labour-market and economic-power links

Research slice for the Gradual Disempowerment Observatory. Compiled 3 October 2026.

Chain links covered: (4) junior roles shrinking, (5) broader labour displacement or its absence, (6) bargaining power and the distribution of economic power.

## How to read the verification labels

- **PRIMARY** — I fetched the publisher's own page or PDF and the number came back from it.
- **SECONDARY** — a reputable outlet (or a blog, flagged) quoting the publisher.
- **SNIPPET** — only seen in a search-result snippet.
- **DERIVED** — simple arithmetic on published numbers; never published by the source in that form. Shown so it can be checked, not so it can be quoted as theirs.

One honest limit: every page was read through a fetch tool that summarises the page with a small model. I cross-checked where I could (for example, the Challenger monthly figures add up exactly to the published year-to-date totals, and the FRED productivity index reproduces the BLS-published 2.2% year-on-year figure). Before anything goes on a headline chart, spot-check the plotted values against the source by eye.

The web-search budget for the session ran out part-way through, so the later indicators rely on direct fetches of known URLs. Gaps this caused are listed at the end.

---

### 1. Young workers in AI-exposed jobs — "Canaries in the Coal Mine" (Stanford / ADP)
- chain_link: junior_roles
- measures: How far employment of 22–25 year olds in the most AI-exposed occupations has fallen behind same-age workers in less-exposed occupations, using ADP payroll records.
- unit: percent relative employment shortfall (two different measures — see notes)
- series:

| data through | value | note |
|---|---|---|
| Jul 2025 | 13% relative decline | Aug 2025 paper. Regression estimate controlling for firm-level shocks. PRIMARY (SIEPR abstract; restated in Aug 2026 paper) |
| Jul 2025 | 15% shortfall | Same data vintage, restated on the newer "kept-pace" measure in the Aug 2026 paper. PRIMARY |
| Sep 2025 | 16% relative decline | Nov 2025 revision. Regression estimate; also "a 15 log-point decline" with firm-time fixed effects. PRIMARY |
| Jun 2026 | 19% shortfall | Aug 12 2026 revision. "Kept-pace" descriptive measure. PRIMARY |

Supporting dated points (all PRIMARY, from the paper PDFs):

| period | value | note |
|---|---|---|
| late 2022 → Sep 2025 | −6% | Employment, ages 22–25, most-exposed occupations (Nov 2025 version) |
| late 2022 → Sep 2025 | +6% to +9% | Employment, ages 35–49, same occupations (Nov 2025 version) |
| late 2022 → Sep 2025 | "nearly 20%" decline | Software developers aged 22–25, from late-2022 peak (Nov 2025 version) |
| Nov 2022 → Jun 2026 | about −11% | Ages 22–25, two most-exposed quintiles (Aug 2026 version) |
| Nov 2022 → Jun 2026 | about +10% | Ages 22–25, three least-exposed quintiles (Aug 2026 version) |
| Nov 2022 → Jun 2026 | about −2% | All 22–25 year olds in sample; "every older age group had grown" |
| Nov 2022 → Jun 2026 | about +6% | Average employment across the whole sample |
| Nov 2022 → Jun 2026 | −0.179 | Occupation-level estimate, most-exposed quintile, ages 22–25 |
| Nov 2022 → Jun 2026 | −0.080 | Same estimate with all controls (interest-rate exposure, education, work-from-home) |

- source: Stanford Digital Economy Lab — Brynjolfsson, Chandar & Chen, "Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence" — https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/ — first version Aug 2025; revised Nov 2025; revised 12 Aug 2026. PDFs: https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf and https://digitaleconomy.stanford.edu/app/uploads/2025/11/CanariesintheCoalMine_Nov25.pdf. News note: https://digitaleconomy.stanford.edu/news/canariesaug26/. Aug 2025 abstract: https://siepr.stanford.edu/publications/working-paper/canaries-coal-mine-six-facts-about-recent-employment-effects-artificial
- verification: PRIMARY for all points above.
- cadence: repeated — three paper versions so far, plus a monthly dashboard (see indicator 2)
- signal: leading
- caveats:
  - **The headline measure changed.** 13% and 16% were regression estimates; 19% is a simpler descriptive gap. The paper says: "Earlier versions of this study headlined regression estimates adjusting for firm-level shocks... We now emphasize the simpler descriptive divergence." The like-for-like comparison is 15% (Jul 2025) → 19% (Jun 2026). Do not plot 13 → 16 → 19 as one line without saying so.
  - With the full set of controls the occupation-level estimate falls from −0.179 to −0.080. The effect roughly halves but does not vanish.
  - ADP clients are not a random sample of US employers.
  - The Aug 2025 PDF link now appears to serve the Nov 2025 version, so I could not re-read the original software-developer sentence in the first version.
  - The paper finds little difference in pay by exposure: "adjustment is occurring through employment rather than base compensation."
  - The authors' own title for the Aug 2026 note is "No Widespread Displacement, but the AI Employment Gap for Young Workers Has Widened to 19%".
- counter_evidence:
  - Interest rates: job postings in exposed occupations peaked March–April 2022, when the Fed began raising rates and before ChatGPT. Authors are Google economists. https://eig.org/wp-content/uploads/2026/01/TAWP-Iscenko-Millet.pdf
  - Remote work: Lambert & Schindler (2026) report the AI-exposure coefficient "drops to zero or even flips positive" once remote-work exposure is included; Frank et al. (2026) find unemployment risk in exposed occupations rose from early 2022. Summarised (SECONDARY) at https://aleximas.substack.com/p/has-ai-impacted-the-labor-market
  - Nordic administrative data: no effect for Finnish youth (Kauhanen & Rouvinen 2026) or Norwegian juniors (Facius & Iacono 2026). Same SECONDARY source.
  - Section 174 (2022 change ending immediate deduction of R&D costs, which raised the after-tax cost of software staff). The Canaries paper addresses it and argues robustness to excluding tech firms and computer occupations "speaks against this channel". Popular statement of the argument: https://qz.com/tech-layoffs-tax-code-trump-section-174-microsoft-meta-1851783502
  - Pandemic over-hiring: the paper itself shows exposed occupations "boomed relative to the least exposed during the pandemic". Kolko lists over-hiring, rates and remote work as confounders: https://www.brookings.edu/articles/research-on-ai-and-the-labor-market-is-still-in-the-first-inning/
  - The exposure measure matters; results are "sensitive to which AI measure is chosen" (Kolko, same link).

---

### 2. Stanford AI Economic Indicators — Canaries Dashboard and Transformation Tracker
- chain_link: junior_roles (Canaries Dashboard); displacement (Transformation Tracker)
- measures: A monthly public dashboard of the Canaries series, and a 12-indicator check on whether the macro-economy shows signs of AI-driven transformation.
- unit: percent per year (dashboard); qualitative rating per indicator (tracker)
- series:

| date | value | note |
|---|---|---|
| Nov 2022 → Jul 2026 | −4.5% per year | Women aged 22–25, most-exposed quintile, annualised employment change. PRIMARY |
| Nov 2022 → Jul 2026 | −2.5% per year | Men aged 22–25, most-exposed quintile. PRIMARY |
| year to Jul 2026 | −5.4% | Women aged 22–25, most-exposed quintile, past year. PRIMARY |
| year to Jul 2026 | −3.1% | Men aged 22–25, most-exposed quintile, past year. PRIMARY |
| 1 Jul 2026 | "no decisive evidence of transformation at present" | Transformation Tracker overall verdict. PRIMARY |
| 1 Jul 2026 | Capital share: "Strong" evidence | "continues its historical upward trend without signs of abatement". PRIMARY |
| 1 Jul 2026 | Labour productivity, TFP, output growth: "Neutral" | "no break from recent levels". PRIMARY |

- source: Stanford Digital Economy Lab — AI Economic Indicators — https://digitaleconomy.stanford.edu/project/indicators/ ; Canaries Dashboard https://digitaleconomy.stanford.edu/project/indicators/canaries-dashboard/ (last updated 23 Sep 2026); Transformation Tracker https://digitaleconomy.stanford.edu/project/indicators/transformation-tracker/ (last updated 1 Jul 2026)
- verification: PRIMARY
- cadence: repeated — monthly ("the third Wednesday following the first Monday"); next dates 21 Oct and 18 Nov 2026
- signal: leading (dashboard); lagging (tracker)
- caveats:
  - The dashboard is interactive. The fetch tool returned the summary text, not the underlying monthly series. The monthly values need to be read off the page or downloaded by hand.
  - The hub also has an Adoption Monitor and a "GDP-B Surplus Observer"; I did not extract values from those.
  - Software developers and customer-service reps: the dashboard says both show "large declines for early-career workers (22-25), modest declines for the next-youngest groups, and expansion for the remaining age groups" — no numbers in the text.
- counter_evidence:
  - Same as indicator 1. The tracker itself is the in-house counterweight: Stanford's own macro check finds no transformation signal apart from a rising capital share.

---

### 3. Occupational-mix stability — Yale Budget Lab
- chain_link: displacement
- measures: Whether the mix of occupations in the US workforce is changing faster since ChatGPT than in earlier technology waves, and whether AI exposure lines up with unemployment.
- unit: mostly qualitative verdict per release; some percentages
- series:

| release (data through) | value | note |
|---|---|---|
| 1 Oct 2025 (Jul 2025, 33 months after ChatGPT) | "has not experienced a discernible disruption" | Occupational mix changing "only about 1 percentage point higher" than the internet-era path; internet era (1996–2002) "at most around 7 percentage points". PRIMARY |
| 1 Oct 2025 | 29% / 46% / 18% | Share of workers in lowest / middle / highest exposure groups, "stay stable". PRIMARY |
| 1 Oct 2025 | 25–35% | Share of tasks AI could do in the occupations unemployed workers came from; flat across unemployment durations. PRIMARY |
| 28 Jan 2026 (Nov/Dec 2025 CPS) | "largely reflects stability, not major disruption" | Recent-graduate vs older-graduate occupational dissimilarity "rarely deviates outside of the 30-33% range". PRIMARY |
| 16 Jul 2026, updated 15 Sep 2026 (CPS through Aug 2026) | "not yet changing in ways that clearly align with the introduction of AI" | Now an interactive tracker; adds a synthetic difference-in-differences that "does not yet clearly indicate an AI-related labor market footprint". PRIMARY |

- source: The Budget Lab at Yale (with Brookings) — "Evaluating the Impact of AI on the Labor Market: Current State of Affairs" — https://budgetlab.yale.edu/research/evaluating-impact-ai-labor-market-current-state-affairs — 1 Oct 2025; Nov/Dec CPS update — https://budgetlab.yale.edu/research/evaluating-impact-ai-labor-market-novemberdecember-cps-update — 28 Jan 2026; "Tracking the Impact of AI on the Labor Market" — https://budgetlab.yale.edu/research/tracking-impact-ai-labor-market — 16 Jul 2026, updated 15 Sep 2026
- verification: PRIMARY
- cadence: repeated — roughly every one to three months
- signal: lagging
- caveats:
  - The latest tracker page gave no numbers through the fetch tool; the dissimilarity index values sit in interactive charts. Only the Oct 2025 release has a quotable numeric comparison.
  - An economy-wide occupational mix is a blunt instrument. It can stay flat while a narrow group (22–25 year olds in a few occupations) is hit. This series and Canaries are not in direct conflict.
  - CPS samples are small for fine age-by-occupation cells.
- counter_evidence:
  - Canaries (indicator 1) and the Census paper (indicator 6) find effects in exactly the narrow cells this measure averages over.
  - The Canaries authors report trying the same analysis in CPS and "finding high levels of noise consistent with small sample sizes in fine age-occupation cells". https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf

---

### 4. Unemployment by AI exposure — EIG "AI and Jobs: The Final Word (Until the Next One)"
- chain_link: displacement
- measures: Whether unemployment has risen more for workers in the most AI-exposed occupations than for the least exposed.
- unit: percentage-point change in unemployment rate
- series:

| period | value | note |
|---|---|---|
| 2022 → early 2025 | +0.30 pp | Most-exposed quintile of workers. PRIMARY |
| 2022 → early 2025 | +0.94 pp | Least-exposed quintile. PRIMARY |
| "since 2022" (as restated Jul 2026) | +0.77 pp | Top AI-exposed workers, per SIEPR brief citing Eckhardt & Goldschlag with IPUMS-CPS. SECONDARY |
| "since 2022" (as restated Jul 2026) | +0.85 pp | Least-exposed workers, same source. SECONDARY |

- source: Economic Innovation Group — Eckhardt & Goldschlag, "AI and Jobs: The Final Word (Until the Next One)" — https://eig.org/ai-and-jobs-the-final-word/ — 10 Aug 2025. Restatement: SIEPR policy brief, Mahoney, McEntarfer & Wahal, "What is really happening to jobs? Separating AI hype from reality" — https://siepr.stanford.edu/publications/policy-brief/what-really-happening-jobs-separating-ai-hype-reality — Jul 2026
- verification: PRIMARY (2025 figures); SECONDARY (2026 restatement)
- cadence: one-off, with an informal update via SIEPR
- signal: coincident
- caveats:
  - The gap between exposed and unexposed has narrowed between the two readings (0.64 pp in favour of exposed workers → 0.08 pp, DERIVED). That is a direction worth watching, but two points from different write-ups do not make a trend. The end dates are not stated precisely.
  - Also found: labour-force exit is lowest for the most exposed; occupation switching "roughly flat since mid 2022".
  - Unemployment misses people who never get hired into a field in the first place, which is where Canaries sees the effect.
- counter_evidence:
  - St. Louis Fed finds the opposite sign at occupation level: correlation of 0.47 between AI exposure and the 2022–2025 rise in unemployment (0.57 using actual adoption). https://www.stlouisfed.org/on-the-economy/2025/aug/is-ai-contributing-unemployment-evidence-occupational-variation (26 Aug 2025)
  - Dallas Fed: employment share of 22–25 year olds in the most exposed occupations fell from 16.4% (Nov 2022) to 15.5% (Sep 2025); effect on aggregate unemployment about 0.1 pp. https://www.dallasfed.org/research/economics/2026/0106 (6 Jan 2026)

---

### 5. Recent-graduate unemployment and underemployment — New York Fed
- chain_link: junior_roles
- measures: Unemployment rate of recent college graduates (aged 22–27 with a bachelor's degree) and the share working in jobs that do not need a degree, against all workers.
- unit: percent
- series:

Current quarterly series:

| date | recent-grad unemployment | recent-grad underemployment | note |
|---|---|---|---|
| 2025 Q1 | 5.8% | 41.2% | "highest reading since 2021". SECONDARY (Hubbard & O'Brien blog quoting NY Fed) |
| 2025 Q4 ("December 2025") | 5.6% | — | Inferred from "unchanged from December 2025". SECONDARY (Bloomberg Law, 5 May 2026) |
| 2026 Q1 ("as of March 2026") | 5.6% | — | SECONDARY (Bloomberg Law). Non-degree 22–27 year olds: 7.2%, down from 7.7% |
| 2026 Q2 | 5.6% | 42% | PRIMARY. "Labor market conditions remained challenging for recent college graduates through the second quarter of 2026." |

Older monthly-vintage series (SECONDARY, Visual Capitalist table of NY Fed data; not directly comparable with the quarterly figures above):

| date | recent graduates | all workers |
|---|---|---|
| Jan 2019 | 4.1% | 3.7% |
| Jan 2020 | 3.6% | 3.5% |
| Jan 2021 | 6.7% | 6.5% |
| Jan 2022 | 4.5% | 4.0% |
| Jan 2023 | 4.2% | 3.5% |
| Jan 2024 | 4.4% | 3.7% |
| Jan 2025 | 4.8% | 4.0% |
| Jun 2025 | 4.8% | 4.0% |

- source: Federal Reserve Bank of New York — "The Labor Market for Recent College Graduates" — https://www.newyorkfed.org/research/college-labor-market — updated quarterly (Feb, May, Aug, Nov); latest Aug 2026. Secondary: https://news.bloomberglaw.com/new-york-brief/unemployment-for-recent-college-grads-remains-high-ny-fed-says ; https://hubbardobrieneconomics.com/2025/07/22/how-well-are-recent-college-graduates-doing-in-the-labor-market/ ; https://www.visualcapitalist.com/charted-the-rising-unemployment-rate-of-college-graduates/
- verification: mixed, per row
- cadence: repeated — quarterly
- signal: coincident
- caveats:
  - **I could not extract the full quarterly series 2019–2026.** The NY Fed's download is an Excel file the fetch tool cannot read. The two tables above come from different data vintages (the NY Fed moved from a smoothed monthly series to quarterly) and should not be spliced. Download the spreadsheet from the NY Fed page for the chart.
  - SIEPR (Jul 2026) describes the same series as "5.6 percent in early 2026, up 1.6 percentage points from three years earlier".
  - Historically recent graduates had lower unemployment than all workers; since about 2019 they have had higher. That reversal began before ChatGPT.
  - One low-quality source gave 5.7% / 41.5% for 2026 Q1; I have gone with Bloomberg.
- counter_evidence:
  - EPI: young graduates' unemployment rose from 4.0% (Jul 2023) to 5.3% (Mar 2026), but the employment-to-population ratio "has held steady since 2024"; nearly all of the rise came from higher participation, and non-graduates the same age saw a similar rise. "There isn't anything particularly damaging to young college graduates happening today, such as AI specifically destroying their labor market prospects." https://www.epi.org/blog/class-of-2026-young-college-graduates-face-a-weaker-labor-market-but-a-more-mixed-picture-than-the-headlines-suggest/
  - Cleveland Fed: the graduate job-finding rate has been falling since around 2000 (47.0% pre-2001 → 37.1% in Jun 2025). "Developments related to AI... cannot explain the decades-long decline." https://www.clevelandfed.org/publications/economic-commentary/2025/ec-202514-are-young-college-graduates-losing-their-edge-in-the-job-market (24 Nov 2025)
  - A June 2026 NY Fed study reportedly links weaker youth outcomes to remote work; I could only see the CNBC headline, the page was blocked. https://www.cnbc.com/2026/06/01/remote-work-youth-unemployment-new-york-fed.html (SNIPPET)

---

### 6. Graduates of AI-exposed majors — US Census "Graduating into Disruption"
- chain_link: junior_roles
- measures: How first-job employment and pay changed for graduates of the most AI-exposed college majors after late 2022, using administrative records.
- unit: percentage points (employment); percent (earnings)
- series:

| period | value | note |
|---|---|---|
| post-late-2022 vs before | −5 percentage points | Likelihood of initial employment, most AI-exposed decile of majors, regression-adjusted. PRIMARY |
| post-late-2022 vs before | −13% | Full-quarter initial earnings, same group. PRIMARY |
| same | about half / half | Half of the earnings fall is lower pay within the same sectors; half is a shift into lower-wage sectors such as restaurants and retail. PRIMARY |

- source: US Census Bureau, Center for Economic Studies — Orr, Tucker & Warren, "Graduating into Disruption: Labor Market Outcomes for AI-Exposed College Majors", Working Paper CES-26-56 — https://www.census.gov/library/working-papers/2026/adrm/CES-WP-26-56.html — Sep 2026
- verification: PRIMARY (abstract page). The PDF itself is blocked to automated fetching, so cohort-by-cohort numbers are not captured.
- cadence: one-off
- signal: coincident
- caveats:
  - Working paper, not peer reviewed; Census working papers carry a standard disclaimer that views are the authors'.
  - The paper says divergence began "immediately following the introduction of ChatGPT in late 2022". Very early onset is itself a reason for caution, because firm adoption was minimal then (see counter-evidence).
  - Inside Higher Ed reports the earnings loss is "comparable in magnitude to the earnings losses associated with graduating into a large recession", and that effects "attenuate as graduates move further from labor market entry but remain substantial". SECONDARY: https://www.insidehighered.com/news/quick-takes/2026/09/22/ai-created-recession-job-market-some-new-grads
  - Most exposed majors include computer science, accounting, journalism, engineering — which are also the majors most tied to the 2021–22 tech hiring boom and bust.
- counter_evidence:
  - Timing: fewer than 10% of large businesses used AI in Q4 2023 and 12% by Q3 2025 (Census business survey, cited in EIG). An effect that starts in late 2022 is hard to attribute to deployed AI. https://eig.org/wp-content/uploads/2026/01/TAWP-Iscenko-Millet.pdf
  - Same rate-cycle and over-hiring objections as indicator 1.

---

### 7. Software-development job postings — Indeed Hiring Lab
- chain_link: junior_roles
- measures: The number of US software-development job adverts on Indeed, relative to just before the pandemic.
- unit: index, 1 Feb 2020 = 100, seasonally adjusted, 7-day average
- series:

| date | value | note |
|---|---|---|
| 1 Feb 2020 | 100.00 | Base. PRIMARY (FRED) |
| 1 May 2020 | 70.28 | PRIMARY |
| 1 Jan 2021 | 91.26 | PRIMARY |
| 1 Jan 2022 | 212.96 | PRIMARY |
| 10 Feb 2022 | 227.93 | All-time peak (a second read returned 227.94). PRIMARY |
| 30 Nov 2022 | 142.50 | ChatGPT launch date. Already 37% below peak (DERIVED). PRIMARY |
| 1 Jan 2023 | 130.29 | PRIMARY |
| 1 Jul 2023 | 82.62 | PRIMARY |
| 1 Jan 2024 | 72.59 | PRIMARY |
| 1 Jul 2024 | 70.11 | PRIMARY |
| 1 Oct 2024 | 69.20 | PRIMARY |
| 3 Dec 2024 | 67.66 | Last row the tool could read from the full file. PRIMARY |
| 18 Sep 2026 | 77.32 | Latest observation shown on FRED. PRIMARY |

Related published points for broader "tech" postings (not the same series):

| date | value | note |
|---|---|---|
| 11 Jul 2025 | −36% vs Feb 2020 | All tech postings; software engineer titles −49%; machine-learning engineer +59%. PRIMARY (Hiring Lab) |
| 31 Oct 2025 | "almost a third lower" than early 2020 | Tech postings; all US postings at index 101.7. PRIMARY (Hiring Lab) |

- source: Indeed Hiring Lab via FRED — "Software Development Job Postings on Indeed in the United States" (IHLIDXUSTPSOFTDEVE) — https://fred.stlouisfed.org/series/IHLIDXUSTPSOFTDEVE — daily; FRED last updated 23 Sep 2026. Hiring Lab posts: https://www.hiringlab.org/2025/07/30/the-us-tech-hiring-freeze-continues/ ; https://www.hiringlab.org/2025/11/20/indeed-2026-us-jobs-hiring-trends-report/
- verification: PRIMARY (FRED mirror of Indeed data), with a gap
- cadence: repeated — daily
- signal: leading
- caveats:
  - **Gap: no verified points for 2025 or the first eight months of 2026.** The daily file is too long for the fetch tool and the CSV download came back unreadable. The series needs downloading from FRED directly.
  - The index covers all experience levels, not just junior roles.
  - The fall from the 2022 peak mostly happened before ChatGPT and before any meaningful AI coding adoption. On this series alone, AI is not the first explanation.
  - The latest value (77) is above the late-2024 low (about 68). Postings have partly recovered during the period of fastest AI coding adoption.
  - One platform's adverts; an advert is not a hire.
- counter_evidence:
  - Indeed's own reading (Nov 2025): young workers are struggling "not because entry-level jobs have disappeared" but because "the entire job market is contracting"; entry-level roles had not fallen faster than postings overall. https://www.hiringlab.org/2025/11/20/indeed-2026-us-jobs-hiring-trends-report/
  - Interest rates and the post-pandemic tech boom-bust: postings peaked March–April 2022. https://eig.org/wp-content/uploads/2026/01/TAWP-Iscenko-Millet.pdf
  - Section 174 R&D amortisation took effect for tax year 2022, the same moment as the peak. https://qz.com/tech-layoffs-tax-code-trump-section-174-microsoft-meta-1851783502
  - Tech employment itself "ticked down 2% in 2024" but was "still up 19% from their 2019 level" (Hiring Lab, Jul 2025 link above).

---

### 8. Entry-level postings and new-graduate hiring — Revelio Labs, SignalFire, PwC, LinkedIn
- chain_link: junior_roles
- measures: Vendor measures of how far entry-level job adverts and new-graduate hires have fallen, split by AI exposure where available.
- unit: percent change
- series:

| period | value | note |
|---|---|---|
| Jan 2023 → mid-2025 | "over 35% fewer" | Entry-level job openings, all. Revelio Labs. PRIMARY (vendor) |
| Jan 2023 → mid-2025 | "over 40%" decline | Entry-level roles with high AI exposure. PRIMARY (vendor) |
| Jan 2023 → mid-2025 | −33% | Entry-level roles with low AI exposure. PRIMARY (vendor) |
| Jan 2023 → mid-2025 | −27% / −16% | Non-entry-level roles, high / low AI exposure. PRIMARY (vendor) |
| 2023 → 2024 | −25% | New-graduate hires at Big Tech. SignalFire. PRIMARY (vendor) |
| 2019 → 2024 | "over 50%" decline | New-graduate hires at Big Tech; new grads "just 7% of hires". PRIMARY (vendor) |
| 2019 → 2024 | "over 30%" decline | New-graduate hires at startups. PRIMARY (vendor) |
| pre-pandemic → 2025 | −23% | Entry-level hiring (LinkedIn data, as quoted by EIG). SECONDARY |
| 2019 → 2025 (US) | +35% vs −10% | Entry-level roles that now demand senior-type skills vs other entry-level roles. PwC 2026. PRIMARY (vendor) |

- source: Revelio Labs — "Is AI Responsible for the Rise in Entry-Level Unemployment?" — https://www.reveliolabs.com/news/macro/is-ai-responsible-for-the-rise-in-entry-level-unemployment/ — 4 Aug 2025 (page updated 10 Jun 2026). SignalFire — "State of Talent Report 2025" — https://www.signalfire.com/blog/signalfire-state-of-talent-report-2025 — 20 May 2025. PwC — "2026 Global AI Jobs Barometer" press release — https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-jobs-barometer.html — 15 Jun 2026
- verification: PRIMARY for each vendor's own page, but **all are vendor claims** using proprietary data and unpublished methods.
- cadence: one-off (Revelio, SignalFire); repeated annually (PwC)
- signal: leading
- caveats:
  - The key Revelio number is the **gap** between high- and low-exposure entry-level roles: roughly 40% vs 33%. Entry-level postings fell by a third even where AI exposure is low. Most of the fall is not AI-specific.
  - January 2023 is close to the tail of the hiring boom, which flatters any "decline since" figure.
  - SignalFire is a venture firm; its data are LinkedIn-profile based and tech-sector only.
  - I could not find or verify a Handshake series or a "share of postings requiring 0–2 years' experience" series.
- counter_evidence:
  - Indeed (Nov 2025): entry-level roles had not declined faster than postings overall. https://www.hiringlab.org/2025/11/20/indeed-2026-us-jobs-hiring-trends-report/
  - Macro explanation (rates, post-pandemic normalisation): https://eig.org/wp-content/uploads/2026/01/TAWP-Iscenko-Millet.pdf

---

### 9. Job cuts that employers attribute to AI — Challenger, Gray & Christmas
- chain_link: displacement
- measures: The number of announced US job cuts where the employer named artificial intelligence as the reason.
- unit: announced job cuts (count); share of all announced cuts (percent)
- series:

Annual:

| year | AI-attributed cuts | all announced cuts | AI share | note |
|---|---|---|---|---|
| 2023 + 2024 combined | 16,989 | — | — | DERIVED (71,825 since 2023 minus 54,836 in 2025). Split between the two years not verified. First tracked May 2023 (3,900 that month; SECONDARY) |
| 2024 | — | 761,358 | — | PRIMARY |
| 2025 | 54,836 | 1,206,374 | 4.5% (DERIVED; matches Oxford Economics' figure) | PRIMARY |
| 2026, Jan–Sep | 120,136 | 573,195 | "approximately 21%" | PRIMARY |

Monthly:

| month | AI-attributed cuts | note |
|---|---|---|
| Jul 2025 | 10,375 | SECONDARY (compiled report passages) |
| Sep 2025 | 7,000 | SECONDARY |
| Oct 2025 | 31,039 | SECONDARY |
| Nov 2025 | 6,280 | SECONDARY |
| Dec 2025 | 142 | PRIMARY |
| Jan 2026 | 7,624 | SECONDARY; consistent with published year-to-date totals |
| Feb 2026 | 4,680 | SECONDARY; consistent with published year-to-date totals |
| Mar 2026 | 15,341 | 25% of the month's cuts. PRIMARY |
| Apr 2026 | 21,490 | 26%. PRIMARY |
| May 2026 | 38,579 | 40%. Highest month on record. PRIMARY |
| Jun 2026 | 14,029 | 31%. PRIMARY |
| Jul 2026 | 10,970 | 33%. Fifth straight month as top reason. PRIMARY |
| Aug 2026 | 3,462 | Fourth-most cited reason. PRIMARY |
| Sep 2026 | 3,961 | Fifth-most cited reason. PRIMARY |

Cumulative since tracking began in 2023:

| as of | value | note |
|---|---|---|
| Dec 2025 | 71,825 | PRIMARY |
| Mar 2026 | 99,470 | PRIMARY |
| Jun 2026 | 173,568 | PRIMARY |
| Jul 2026 | 184,538 | PRIMARY |
| Sep 2026 | 191,961 | DERIVED (71,825 + 120,136) |

- source: Challenger, Gray & Christmas — monthly Job Cuts Report — archive https://www.challengergray.com/blog/category/job-cuts-report/ ; Sep 2026 report (1 Oct 2026) https://www.challengergray.com/blog/job-cuts-fall-in-september-hiring-plans-up-3-over-2025-on-weak-early-seasonal-hiring/ ; Dec 2025 report https://www.challengergray.com/wp-content/uploads/2026/01/Challenger-Report-December-2025.pdf ; Mar, May, Jun, Jul 2026 PDFs and Apr, Aug 2026 blog posts on the same site. Compiled passages for 2023–Feb 2026: https://gist.github.com/mcphil/08f8f011f27c9864d157ead0b9d716d9
- verification: mixed, per row. The 2026 monthly figures sum exactly to each published year-to-date total, which is a good consistency check.
- cadence: repeated — monthly
- signal: coincident
- caveats:
  - **"AI-washing".** These are reasons employers choose to give. Citing AI can make a cost-cutting layoff sound like a growth story. Challenger's own executive said in May 2026: "Regardless of whether individual jobs are being replaced by AI, the money for those roles is" — that is, some of these cuts fund AI spending rather than reflect AI doing the work.
  - These are announcements, not completed separations, and cover only cuts Challenger tracks.
  - The 2026 jump is concentrated in March–July. August and September fell back to about 3,500–4,000 a month.
  - Scale: 120,136 in nine months compares with roughly 7.1 million unemployed in Sep 2026 (BLS). The category "Technological Update (possibly AI)" is separate (20,219 in 2025).
- counter_evidence:
  - Oxford Economics: AI-attributed cuts were 4.5% of the 2025 total, against 245,000 blamed on "market and economic conditions"; "We suspect some firms are trying to dress up layoffs as a good news story rather than bad news." Reported at https://fortune.com/2026/02/02/ai-labor-market-yale-budget-lab-ai-washing/ (SECONDARY)
  - NY Fed business survey (Sep 2025): only 1% of service firms and 0% of manufacturers reported laying workers off because of AI in the previous six months; 12% of service firms had scaled back hiring; 11% had hired more because of AI. https://libertystreeteconomics.newyorkfed.org/2025/09/are-businesses-scaling-back-hiring-due-to-ai/
  - Imas & Schaal (Sep 2026): only "1% of laid-off workers attribute their firing to AI". https://aleximas.substack.com/p/has-ai-impacted-the-labor-market (SECONDARY)

---

### 10. Earnings and hours of AI-chatbot adopters — Humlum & Vestergaard (Denmark)
- chain_link: displacement
- measures: Whether workers and workplaces in Denmark that adopted AI chatbots saw any change in pay or hours, using linked survey and administrative data.
- unit: percent effect on earnings / recorded hours (upper bound ruled out)
- series:

| version | value | note |
|---|---|---|
| Apr–May 2025 working paper | "precise null effects... ruling out effects larger than 2% two years after" | Title then: "Large Language Models, Small Labor Market Effects". PRIMARY (BFI page as currently shown) |
| Mar 2026 revision | "precise null effects on earnings and recorded hours... ruling out effects larger than 2% two years after the launch of ChatGPT" | Retitled "Still Waters, Rapid Currents: Early Labor Market Transformation under Generative AI". PRIMARY (NBER) |

- source: NBER Working Paper 33777 — Humlum & Vestergaard — https://www.nber.org/papers/w33777 — issued 12 May 2025, revised Mar 2026. Also https://bfi.uchicago.edu/working-papers/large-language-models-small-labor-market-effects/
- verification: PRIMARY
- cadence: one-off, revised
- signal: lagging
- caveats:
  - The first version is widely quoted as ruling out effects "larger than 1%". Both pages I fetched now say 2%. I could not confirm the 1% wording; use 2%.
  - The paper has been retitled. Cite the current title or readers will not find it.
  - Denmark has strong unions and employment protection; results may not transfer to the US.
  - The revision adds that work is being reorganised: "Technological change reshapes work well before it surfaces in earnings or hours." That cuts both ways for the observatory.
  - It studies existing workers, not people failing to get a first job.
- counter_evidence:
  - Canaries and the Census paper find effects at the point of entry, which this design cannot see.
  - Hosseini & Lichtinger (2026): junior employment fell "8–10% in adopting firms relative to non-adopters after 2 years" (SECONDARY, via https://aleximas.substack.com/p/has-ai-impacted-the-labor-market).

---

### 11. Hiring into exposed occupations and observed AI coverage — Anthropic
- chain_link: junior_roles; displacement
- measures: Whether workers in occupations where AI is actually being used (not just theoretically usable) have seen higher unemployment or slower hiring.
- unit: percent; percentage points
- series:

| period | value | note |
|---|---|---|
| late 2022 → early 2026 | "indistinguishable from zero" | Difference in unemployment change, most-exposed vs unexposed workers. PRIMARY |
| post-ChatGPT vs before | about −14% | Job-finding rate of 22–25 year olds into the most exposed occupations ("about half a percentage point" off a base near 2% a month). "Just barely statistically significant." PRIMARY |
| Aug–Oct 2022 | +47% | Average earnings of the most-exposed quartile relative to unexposed workers. PRIMARY |
| 2026 | 75% | Observed task coverage, computer programmers (highest); data entry keyers 67%. PRIMARY |
| 2026 | 30% | Share of workers with zero observed coverage. PRIMARY |

- source: Anthropic — Massenkoff & McCrory, "Labor market impacts of AI: A new measure and early evidence" — https://www.anthropic.com/research/labor-market-impacts — 5 Mar 2026 (updated 8 Mar 2026)
- verification: PRIMARY
- cadence: one-off (the underlying Economic Index is updated periodically)
- signal: leading (hiring rate); coincident (unemployment)
- caveats:
  - **Vendor research.** Anthropic sells the product being measured. The exposure measure is built from its own usage data.
  - The 14% figure is fragile by the authors' own account.
  - Exposed workers are higher paid and more educated (17.4% with graduate degrees vs 4.5%). This matters for the bargaining-power story: the people most exposed are those who currently have the most labour-market leverage.
  - I did not find a published wage premium or penalty by exposure over time in this paper.
- counter_evidence:
  - The paper's own headline is a null on unemployment.
  - Yale Budget Lab uses Anthropic usage data and finds "no connection to changes in employment or unemployment". https://budgetlab.yale.edu/research/tracking-impact-ai-labor-market

---

### 12. Freelance markets after ChatGPT — Hui, Reshef & Zhou; Demirci, Hannane & Zhu
- chain_link: displacement
- measures: How demand and pay for freelancers in writing, coding and image work changed on online platforms after generative AI tools launched.
- unit: percent change
- series:

| period | value | note |
|---|---|---|
| after Nov 2022 (ChatGPT) | −2% | Monthly jobs for writing-related freelancers on Upwork. PRIMARY |
| after Nov 2022 | −5.2% | Monthly earnings, same group. PRIMARY |
| after Apr 2022 (DALL-E 2 / Midjourney) | −2.1% jobs; −5.2% earnings | Image-related freelancers. PRIMARY |
| 8 months after ChatGPT | −21% | Job posts for automation-prone work (writing, coding) on a large freelance platform. PRIMARY (abstract) |
| after image-AI launch | −17% | Job posts for image creation. PRIMARY (abstract) |

- source: Hui, Reshef & Zhou — "The Short-Term Effects of Generative Artificial Intelligence on Employment: Evidence from an Online Labor Market" (Organization Science) — author summary at https://cepr.org/voxeu/columns/artificial-intelligence-and-its-short-term-effects-employment — 1 Dec 2023. Demirci, Hannane & Zhu — "Who Is AI Replacing? The Impact of Generative AI on Online Freelancing Platforms" (Management Science) — https://ideas.repec.org/p/ces/ceswps/_11276.html — 2024
- verification: PRIMARY (authors' column; working-paper abstract)
- cadence: one-off
- signal: leading
- caveats:
  - Both use data from 2022–2023. **I found no verified later replication** showing whether the effect grew, held or faded. This is a real gap for a time-series site.
  - Hui et al. found top-rated freelancers were not protected: "We do not find evidence that being high-quality moderates the adverse effects."
  - Freelance platforms are the easiest place for buyers to switch to AI: no severance, no contracts. They may overstate what happens in salaried work — or simply show it early.
  - Demirci et al. also found the remaining posts became more complex and better paid.
- counter_evidence:
  - Freelance work is a small share of employment; salaried-worker studies (indicator 10) find nulls.
  - Platform-level demand shifts can reflect platform competition and fee changes as well as AI. (No source verified for this point.)

---

### 13. Aggregate checks — unemployment, participation, prime-age employment, productivity
- chain_link: displacement
- measures: Whether economy-wide US data show job loss or a productivity surge of the kind mass AI displacement would produce.
- unit: percent (rates); index 2017 = 100 and percent growth (productivity)
- series:

Monthly rates (PRIMARY, FRED mirror of BLS; Oct 2025 is missing because of the government shutdown):

| date | unemployment rate | participation rate | prime-age (25–54) employment rate |
|---|---|---|---|
| Dec 2019 | — | — | 80.4 |
| Nov 2022 | 3.6 | 62.1 | 79.8 |
| Jun 2023 | 3.6 | 62.6 | — |
| Dec 2023 | 3.8 | 62.5 | — |
| Jun 2024 | 4.1 | 62.6 | — |
| Dec 2024 | 4.1 | 62.5 | — |
| Jan 2025 | 4.0 | 62.6 | 80.7 |
| Jun 2025 | 4.1 | 62.3 | 80.7 |
| Sep 2025 | 4.4 | 62.5 | 80.7 |
| Nov 2025 | 4.5 | 62.5 | 80.6 |
| Dec 2025 | 4.4 | 62.4 | 80.7 |
| Mar 2026 | 4.3 | 61.9 | 80.7 |
| Jun 2026 | 4.2 | 61.5 | 80.2 |
| Jul 2026 | 4.1 | 61.4 | 80.4 |
| Aug 2026 | 4.1 | 61.6 | 80.4 |
| Sep 2026 | 4.2 | 61.8 | 80.7 |

Sep 2026 confirmed against the BLS release of 2 Oct 2026: unemployment 4.2%, 7.1 million unemployed, participation 61.8%, employment–population ratio 59.2%, payrolls +29,000. PRIMARY.

Labour productivity, nonfarm business (PRIMARY for index and Q2 2026 growth; annual growth is DERIVED from the quarterly index):

| date | value | note |
|---|---|---|
| 2022 Q4 | 110.047 | Index |
| 2023 Q4 | 113.881 | Index |
| 2024 Q4 | 116.445 | Index |
| 2025 Q4 | 119.350 | Index |
| 2026 Q1 | 119.594 | Index |
| 2026 Q2 | 120.017 | Index. BLS: +1.4% annualised on the quarter, +2.2% on a year earlier |
| 2023 annual average | +2.1% | DERIVED |
| 2024 annual average | +2.9% | DERIVED |
| 2025 annual average | +2.3% | DERIVED |

- source: BLS via FRED — UNRATE https://fred.stlouisfed.org/series/UNRATE ; CIVPART https://fred.stlouisfed.org/series/CIVPART ; LNS12300060 https://fred.stlouisfed.org/series/LNS12300060 ; OPHNFB https://fred.stlouisfed.org/series/OPHNFB. BLS Employment Situation, 2 Oct 2026 — https://www.bls.gov/news.release/empsit.nr0.htm. BLS Productivity and Costs, Q2 2026 revised, 3 Sep 2026 — https://www.bls.gov/news.release/prod2.nr0.htm
- verification: PRIMARY (rates and index); DERIVED (annual productivity growth)
- cadence: repeated — monthly (rates), quarterly (productivity)
- signal: lagging
- caveats:
  - Unemployment is up about 0.6 pp since ChatGPT launched, but prime-age employment is higher than in Nov 2022 and at its Dec 2019 level or above. That is not a displacement picture.
  - **Participation has fallen noticeably in 2026** (62.4 in Dec 2025 to 61.4–61.8 by Jul–Sep 2026). With prime-age employment steady, this points to ageing and lower immigration rather than AI, but I did not verify a source for the cause. Annual population-control revisions each January also make levels not strictly comparable across years. Worth a note on the chart.
  - Payroll growth is very weak (+29,000 in Sep 2026). "Low hire, low fire" is the standard description, and it is the setting in which a junior-hiring squeeze would show up first.
  - Productivity growth of 2–3% a year is good by post-2008 standards but shows "no break from recent levels" (Stanford tracker).
- counter_evidence:
  - Dallas Fed: the youth effect is real but would explain only about 0.1 pp of the rise in aggregate unemployment. https://www.dallasfed.org/research/economics/2026/0106
  - SIEPR (Jul 2026): "AI's effects on overall employment is likely small, though a tough job market for new graduates may be partly due to AI." https://siepr.stanford.edu/publications/policy-brief/what-really-happening-jobs-separating-ai-hype-reality
  - Firm-level: employment "grew by 10 percent in the two years following adoption" among firms adopting enterprise AI (Kharazian, Simon & Stevens 2026, via the SIEPR brief; SECONDARY).

---

### 14. US labour share of income — nonfarm business sector (BLS)
- chain_link: bargaining_power
- measures: The share of the value of US business output that is paid to workers as compensation.
- unit: index, 2017 = 100 (FRED PRS85006173); BLS also publishes the level in percent
- series:

| date | index | note |
|---|---|---|
| 1947 Q1 | 115.996 | Series start. PRIMARY |
| 1958 Q1 | 116.379 | Series maximum. PRIMARY |
| 1960 Q1 | 113.619 | PRIMARY |
| 1970 Q1 | 115.245 | PRIMARY |
| 1980 Q1 | 111.222 | PRIMARY |
| 1990 Q1 | 110.182 | PRIMARY |
| 2000 Q1 | 112.828 | PRIMARY |
| 2001 Q1 | 113.626 | PRIMARY |
| 2005 Q1 | 104.707 | PRIMARY |
| 2010 Q1 | 99.433 | PRIMARY |
| 2015 Q1 | 99.693 | PRIMARY |
| 2019 Q1 | 101.342 | PRIMARY |
| 2020 Q1 | 102.159 | PRIMARY |
| 2022 Q1 | 99.120 | PRIMARY |
| 2023 Q1 | 96.555 | PRIMARY |
| 2024 Q1 | 96.882 | PRIMARY |
| 2025 Q1 | 97.871 | PRIMARY |
| 2025 Q2 | 96.723 | PRIMARY |
| 2025 Q3 | 95.999 | PRIMARY |
| 2025 Q4 | 95.727 | PRIMARY |
| 2026 Q1 | 94.843 | PRIMARY |
| 2026 Q2 | 93.446 | Latest, and the series minimum. FRED updated 3 Sep 2026. PRIMARY |

Level in percent:

| date | value | note |
|---|---|---|
| 2026 Q2 | 52.8% | BLS: "the lowest level in the series, which begins in the first quarter of 1947". PRIMARY |
| 2000 Q1 | 63.9% | Older data vintage (BLS Monthly Labor Review, 2017). PRIMARY for that vintage |
| 2001 Q1 | 64.3% | Older vintage. PRIMARY for that vintage |
| 2011 Q4 | 56.0% | Described in 2017 as the low. Older vintage |
| 2016 Q3 | 58.4% | Older vintage |

- source: BLS Productivity and Costs — https://www.bls.gov/news.release/prod2.nr0.htm — 3 Sep 2026; FRED — https://fred.stlouisfed.org/series/PRS85006173. Long-run context: BLS Monthly Labor Review, "Estimating the U.S. labor share" — https://www.bls.gov/opub/mlr/2017/article/estimating-the-us-labor-share.htm — 2017
- verification: PRIMARY. **Latest value confirmed: 93.446 for 2026 Q2**, matching the series you already hold.
- cadence: repeated — quarterly
- signal: lagging
- caveats:
  - The index is down about 17% from 2000 Q1 to 2026 Q2 (DERIVED: 112.828 → 93.446). Most of that fall (to about 99) happened between 2001 and 2010, long before generative AI.
  - The recent leg matters more for this site: from 97.871 (2025 Q1) to 93.446 (2026 Q2) is five straight quarterly falls and a new post-war low. It coincides with the AI capex boom, but coincidence is all this series can show.
  - Percent levels from the 2017 article are an older vintage; BLS has revised the data since. They line up roughly with the index but should not be plotted on the same axis as 52.8% without a note.
  - Labour share moves with the business cycle, with how self-employed income is split, and with housing and depreciation. Short runs are noisy.
  - **Long-run framing.** Karabarbounis & Neiman (2013): the global labour share "has significantly declined since the early 1980s", and cheaper investment goods (IT) "explains roughly half of the observed decline". https://www.nber.org/papers/w19136. Autor, Dorn, Katz, Patterson & Van Reenen (2017): the fall is driven by "superstar firms" with high profits and low labour shares gaining market share; most of the decline comes from reallocation between firms. https://www.nber.org/papers/w23396. Both mechanisms — cheap capital substituting for labour, and winner-take-most firms — are the ones the gradual-disempowerment argument expects AI to intensify.
- counter_evidence:
  - Grossman & Oberfield (2022), "The Elusive Explanation for the Declining Labor Share": proposed causes (technology, trade, China, concentration, union decline, demographics) together "account for the phenomenon multiple times over" — a warning against attributing it to any single cause, AI included. https://www.annualreviews.org/content/journals/10.1146/annurev-economics-080921-103046
  - Stanford's tracker rates the rising capital share as a continuation of "its historical upward trend", not a break. https://digitaleconomy.stanford.edu/project/indicators/transformation-tracker/

---

### 15. Global labour income share — ILO
- chain_link: bargaining_power
- measures: The share of world income that goes to workers (including an estimate for the self-employed).
- unit: percent of global income
- series:

| date | value | note |
|---|---|---|
| 2019 | 52.9% | Sep 2024 report. PRIMARY |
| 2022 | 52.3% | Sep 2024 report. PRIMARY |
| 2023 | 52.3% | Sep 2024 report ("remained"). PRIMARY |
| 2024 | 52.3% | Sep 2024 report. PRIMARY |
| 2004 → 2024 | −1.6 pp | Sep 2024 report; equals a US$2.4 trillion annual shortfall in 2024 (constant PPP). PRIMARY |
| 2014 | 53% | May 2025 update (revised estimates). PRIMARY |
| 2024 | 52.4% | May 2025 update (revised estimates). PRIMARY |

- source: International Labour Organization — "World Employment and Social Outlook: September 2024 Update" — https://www.ilo.org/sites/default/files/2024-10/WESO%20September%202024%20Update%20-%20Final.pdf — Sep 2024; "World Employment and Social Outlook: May 2025 Update" — https://www.ilo.org/sites/default/files/2025-05/WESOUpdate_May2025.pdf — May 2025
- verification: PRIMARY
- cadence: repeated — roughly annual, with revisions
- signal: lagging
- caveats:
  - The two reports use different estimate vintages (2024: 52.3% vs 52.4%). Use one vintage per line.
  - I did not find a 2026 update, and did not extract a clean annual OECD series.
  - The ILO is careful about AI: generative AI "could exert further downward pressure on the labour income share", but "This is not a prediction about AI effects."
  - The May 2025 update also estimates 7.5% of workers are in high-exposure occupations and 16.3% in medium-exposure ones.
- counter_evidence:
  - A change of 0.6 pp over ten years is small and within the range of revisions between vintages.
  - Same multi-cause caution as indicator 14 (Grossman & Oberfield).

---

### 16. Union membership rate — BLS
- chain_link: bargaining_power
- measures: The share of US wage and salary workers who belong to a union.
- unit: percent of wage and salary workers
- series:

| year | value | note |
|---|---|---|
| 1983 | 20.1% | First comparable year; 17.7 million members. PRIMARY |
| 2000 | 13.4% | PRIMARY |
| 2005 | 12.5% | PRIMARY |
| 2010 | 11.9% | PRIMARY |
| 2015 | 11.1% | PRIMARY |
| 2019 | 10.3% | PRIMARY |
| 2020 | 10.8% | Pandemic: non-union jobs were lost faster. PRIMARY |
| 2021 | 10.3% | PRIMARY |
| 2022 | 10.1% | PRIMARY |
| 2023 | 10.0% | PRIMARY |
| 2024 | 9.9% | PRIMARY |
| 2025 | 10.0% | "little changed"; 14.7 million members; public sector 32.9%, private sector 5.9%. PRIMARY |

Full annual series 2000–2025 from the same BLS page: 13.4, 13.3, 13.3, 12.9, 12.5, 12.5, 12.0, 12.1, 12.4, 12.3, 11.9, 11.8, 11.3, 11.3, 11.1, 11.1, 10.7, 10.7, 10.5, 10.3, 10.8, 10.3, 10.1, 10.0, 9.9, 10.0.

- source: US Bureau of Labor Statistics — "Union Members — 2025" news release — https://www.bls.gov/news.release/union2.htm — 18 Feb 2026; The Economics Daily, "Union membership rate 10.0 percent in 2025" — https://www.bls.gov/opub/ted/2026/union-membership-rate-10-0-percent-in-2025.htm
- verification: PRIMARY
- cadence: repeated — annual (next release early 2027)
- signal: lagging
- caveats:
  - This is background, not an AI signal. The decline is forty years old and has flattened at about 10% since 2022.
  - Membership is a narrow proxy for bargaining power. Quit rates, wage growth for job-switchers, and strike activity would be more responsive; I did not collect them.
  - The occupations most exposed to AI (software, finance, professional services) are barely unionised, so this series would not register AI-driven loss of leverage even if it happened.
- counter_evidence:
  - Not applicable in the usual sense. The honest framing is that workers entered the AI period with historically low collective bargaining coverage, not that AI lowered it.

---

### 17. Stock-market concentration in the largest AI-linked firms
- chain_link: bargaining_power
- measures: The share of total S&P 500 market value held by the seven largest technology firms ("Magnificent Seven": Apple, Microsoft, Alphabet, Amazon, Nvidia, Meta, Tesla).
- unit: percent of S&P 500 market capitalisation
- series:

| year | value | note |
|---|---|---|
| 2014 | 9.8% | SECONDARY |
| 2015 | 12.4% | SECONDARY |
| 2016 | 12.5% | SECONDARY |
| 2017 | 15.3% | SECONDARY |
| 2018 | 16.6% | SECONDARY |
| 2019 | 19.2% | SECONDARY |
| 2020 | 26.9% | SECONDARY |
| 2021 | 29.1% | SECONDARY |
| 2022 | 21.6% | SECONDARY |
| 2023 | 30.1% | SECONDARY |
| 2024 | 34.6% | SECONDARY |
| Sep 2026 | "over one-third" (about 34%) | Forbes; Nvidia alone about 8%. SECONDARY — the article carries two dates (Aug 2025 and Sep 2026), so the as-of date is uncertain |

- source: Visual Capitalist — "Charted: Magnificent 7 Market Cap as a Share of the S&P 500" — https://www.visualcapitalist.com/sp/charted-magnificent-7-market-cap-as-a-share-of-the-sp-500/ — 11 Dec 2024 (sponsored content). Forbes — "S&P 500's Weight In Mag 7 Stocks Passes 30%..." — https://www.forbes.com/sites/investor-hub/article/sp-500-weight-mag-7-stocks-diversification-risk/
- verification: SECONDARY throughout. No primary index-provider source fetched.
- cadence: repeated — can be recomputed any day; these sources update irregularly
- signal: leading (it reflects investors' expectations of future profits)
- caveats:
  - The Visual Capitalist page is sponsored content; the point-in-year for each annual value is not stated.
  - **No verified 2025 year-end value.**
  - Forbes notes the top-10 share has historically "remained below 30%, averaging 24%", with a previous high of 28% in 1970 — context, not a current reading.
  - Market value is a bet on future profits, not a measure of present economic power. It can reverse quickly (2022: 29.1% → 21.6%).
  - Tesla and Apple are in the seven for reasons only partly to do with AI.
- counter_evidence:
  - Concentration was already rising steeply in 2014–2021, before generative AI. The post-2022 rise continues a trend.
  - A bubble interpretation is live: high share-price concentration would then signal mispricing, not durable power. (No source verified.)

---

### 18. AI infrastructure spending and compute ownership — hyperscaler capex; Epoch AI
- chain_link: bargaining_power
- measures: How much the four largest cloud firms are spending on capital investment, and how much of the world's AI computing capacity a few firms own.
- unit: US$ billion per year (capex); share of world AI compute in H100-equivalents (ownership)
- series:

Combined capital expenditure, Amazon + Microsoft + Alphabet + Meta:

| year | value | note |
|---|---|---|
| 2024 | about $230bn | Blog citing company 10-Ks. SECONDARY (blog) |
| 2025 | about $400bn | "nearly $400 billion... sans leases" (Sherwood News); "approximately $402 billion" (blog citing 10-Ks). SECONDARY |
| 2026 guidance, as of Feb 2026 | roughly $600bn | Sherwood News. SECONDARY |
| 2026 guidance, as of late Apr 2026 | about $710bn midpoint | Blog, after Q1 earnings. SECONDARY (blog) |
| 2026 guidance, as of late Jul 2026 | $720–745bn | Microsoft about $175bn; Alphabet $195–205bn; Amazon about $220bn; Meta $130–145bn. SECONDARY (blog, reviewed 30 Sep 2026) |
| 2025, Alphabet alone | $91.4bn | SECONDARY (blog) |

AI compute ownership, end of 2025 (Epoch AI estimates):

| date | value | note |
|---|---|---|
| end 2025 | about 16 million H100e | World operational AI compute; cumulative sales about 20 million. PRIMARY |
| end 2025 | about 25% | Google's share of world total ("roughly five million H100e"). PRIMARY |
| end 2025 | about 10% | Meta's share. PRIMARY |
| end 2025 | 10–15% | OpenAI's share of operational compute (about 1.7 million H100e). PRIMARY |
| end 2025 | "1 million or more" H100e | Anthropic. PRIMARY |
| end 2025 | 600,000–700,000 H100e | xAI. PRIMARY |
| end 2025 | "less than half" | Top five frontier labs combined. PRIMARY |

- source: Sherwood News — "Big Tech capital expenditure soared in 2025. It's going up another 50% in 2026." — https://sherwood.news/tech/big-tech-capital-expenditure-soared-in-2025-its-going-up-another-50-in-2026/ — Feb 2026. Blogs: https://analysis-atlas.com/research/hyperscaler-ai-capex-2026/ ; https://www.yieldtheory.app/research/hyperscaler-ai-capex-tracker-2026. Epoch AI — "How Much AI Compute Do Frontier Labs Use?" — https://epoch.ai/gradient-updates/frontier-labs-dont-use-most-ai-compute — 20 May 2026; data explorer https://epoch.ai/data/ai-chip-owners (updated 12 May 2026)
- verification: SECONDARY (capex — two of three sources are low-authority blogs that agree with each other and with Sherwood); PRIMARY (Epoch)
- cadence: repeated — quarterly earnings (capex); Epoch updates irregularly
- signal: leading
- caveats:
  - **Capex figures need checking against the companies' own filings before publication.** I could not reach CNBC or SEC filings. I found no verified totals for 2022 or 2023.
  - A fourth tracker (valueaddvc.com) gives much lower "AI capex" figures for 2022–2024 (about $41bn, $73bn, $152bn). These appear to be an AI-only estimate on a different definition. I have not used them; do not mix them with the totals above.
  - Microsoft's 2026 figure fell from about $190bn to about $175bn between sources, reportedly because of a lease-accounting change.
  - Epoch's shares are estimates with wide uncertainty; Epoch says it is least confident about Amazon's in-house chips.
  - **Nvidia's share of AI accelerator revenue: not verified.** Epoch's chip-sales page (updated 1 Oct 2026) has the data in an interactive chart but no quotable share in the text.
  - No verified US-versus-China compute split.
- counter_evidence:
  - Heavy spending is not the same as durable power. If returns disappoint, capex is a cost, and competition between four or more well-funded firms is the opposite of monopoly.
  - Epoch's own headline is deconcentrating in one sense: frontier labs use "less than half" of world AI compute.

---

### 19. Pay premium for AI skills — PwC Global AI Jobs Barometer
- chain_link: bargaining_power
- measures: How much more job adverts that ask for AI skills pay than otherwise similar adverts that do not.
- unit: percent wage premium
- series:

| report (publication date) | value | note |
|---|---|---|
| 2024 report | 25% | As restated in the 2025 report: "up from 25% last year". PRIMARY (via 2025 release) |
| 2025 report (3 Jun 2025) | 56% | PRIMARY |
| 2026 report (15 Jun 2026) | 62% | "up from 57% last year" — so the 2025 figure was revised from 56% to 57%. PRIMARY |

Other 2026 report figures (PRIMARY, vendor): jobs requiring AI skills growing 69% vs 9% for all jobs; headcount at the most AI-exposed companies +52% (2018–2025) vs +36% at the least exposed; productivity +34% vs +24% in most vs least exposed sectors; premium ranges from 16% (public sector) to 118% (consumer markets).

- source: PwC — "2026 Global AI Jobs Barometer" press release — https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-jobs-barometer.html — 15 Jun 2026; 2025 press release — https://www.pwc.com/gx/en/news-room/press-releases/2025/ai-linked-to-a-fourfold-increase-in-productivity-growth.html — 3 Jun 2025
- verification: PRIMARY (publisher's page). **Vendor claim**: a consultancy that sells AI advice, using job-advert data and an unpublished matching method.
- cadence: repeated — annual (June)
- signal: coincident
- caveats:
  - This measures a premium for people with AI skills. It says nothing about pay for people whose tasks AI replaces. A rising premium is evidence of a widening gap between workers, which is relevant to the distribution of bargaining power, not evidence that workers in general are doing well.
  - Advertised pay, not paid wages. Composition effects (AI skills cluster in already high-paying jobs) are likely large.
  - The jump from 25% to 56% in one year looks like a method or sample change as much as a real change.
  - **Starting salaries for exposed majors (for example NACE): not found or verified.**
- counter_evidence:
  - Canaries finds "little difference in compensation trends by age or exposure quintile"; among job-stayers real base pay "has grown more slowly in more exposed jobs". https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf
  - The Census paper finds starting earnings down 13% for the most exposed majors (indicator 6).
  - PwC's own data show headcount growing faster at AI-exposed companies, which cuts against displacement.

---

## (a) Best three for a headline chart

1. **Canaries gap, like-for-like: 15% (data to Jul 2025) → 19% (data to Jun 2026)**, with the −11% vs +10% absolute split for 22–25 year olds since Nov 2022. This is the single strongest "junior roles" signal, it is moving, and Stanford now updates it monthly. Show it with the note that with full controls the estimate roughly halves, and that the headline measure changed between versions.

2. **AI-attributed job cuts by month (Challenger), Jan 2025 – Sep 2026**, plotted as a share of all announced cuts and overlaid with the flat prime-age employment rate (80.7 in Jan 2025, 80.7 in Sep 2026). The contrast is the story: employers are saying "AI" far more often (4.5% of cuts in 2025, about 21% in 2026 so far), while the economy-wide employment rate has not moved. It also lets the "AI-washing" caveat sit on the chart itself.

3. **US labour share index, 2000 Q1 – 2026 Q2 (112.8 → 93.4; 52.8% of output, the lowest since 1947)**, with the last six quarters highlighted and hyperscaler capex ($230bn → $400bn → $720–745bn guided) as a secondary series once the capex figures are checked against filings. This is the cleanest long series for the bargaining-power link and it has just set a record low. Label it clearly: most of the fall pre-dates AI.

Runner-up: the Indeed software postings index is visually striking, but the peak-to-trough fall mostly pre-dates ChatGPT, so as a headline it would mislead more than inform. Better as a supporting chart with the ChatGPT launch date marked.

## (b) What the evidence does and does not show about AI and jobs as of Oct 2026

**What it shows.** Something has gone wrong at the bottom of the ladder in AI-exposed, white-collar work. Payroll data from ADP show 22–25 year olds in the most exposed occupations about 19% behind their peers in less exposed work, and the gap widened over the past year. Census administrative records show graduates of the most exposed majors are 5 percentage points less likely to land a first job and start on 13% lower pay. Older workers in the same occupations are fine. The adjustment is happening through fewer hires, not through layoffs or pay cuts.

**What it does not show.** There is no sign of economy-wide displacement. Unemployment is 4.2%. The share of 25–54 year olds in work is as high as it was before ChatGPT. The mix of occupations is changing no faster than in earlier technology waves. In Denmark, workers who adopted chatbots saw no measurable change in pay or hours. Employers now blame AI for about a fifth of announced job cuts, but firm surveys and worker reports suggest very few layoffs are actually caused by AI doing the work.

**What is unresolved.** Whether the junior squeeze is caused by AI at all. The fall in postings for these jobs began in spring 2022, when interest rates started rising and before ChatGPT existed. Tech firms had over-hired in 2021. A tax change made software staff more expensive in the same year. Several 2026 papers find the "AI effect" shrinks or disappears once remote work is controlled for, and Nordic register data find nothing. The careful reading is: the pattern is consistent with AI, the timing fits some non-AI explanations at least as well, and the fact that the gap kept widening into 2026 — after rates stopped rising — is the main reason to keep taking the AI explanation seriously.

**On economic power.** Workers' share of US business income is at its lowest since records began in 1947 and has fallen for five quarters running. A handful of firms hold about a third of US stock-market value and a large part of the world's AI computing capacity, and plan to spend over $700bn this year. These are real and measurable. But the labour share has been falling since around 2000, and none of these series can show that AI caused the recent movement. They describe the terrain on which any AI-driven shift in bargaining power would play out, more than they show that shift under way.

## (c) What I could not verify

- **NY Fed recent-graduate series, full quarterly history 2019–2026.** The data file is Excel and unreadable to the fetch tool. Only 2026 Q2 is PRIMARY. Needs a manual download.
- **Indeed software postings index for 2025 and Jan–Aug 2026.** File too long to read in full. Needs a manual download from FRED.
- **Canaries, original Aug 2025 PDF.** The link now serves the Nov 2025 version. The 13% figure is confirmed from the SIEPR abstract; the first version's software-developer sentence is not re-verified.
- **Canaries Dashboard monthly values.** Only summary text was readable.
- **Yale Budget Lab latest numeric values.** The tracker's dissimilarity index values are in interactive charts.
- **Challenger: the 2023 / 2024 split** of AI-attributed cuts (combined 16,989), and monthly figures for Jan–Jun and Aug 2025.
- **Humlum & Vestergaard "1%" bound** as commonly quoted from the first version. Both pages now say 2%.
- **Census PDF** (blocked): cohort-level estimates and the exact data source.
- **Hyperscaler capex 2022 and 2023**, and all capex figures against company filings. Current figures rest on Sherwood News and two blogs.
- **Nvidia's share of AI accelerator revenue.** Not found in readable form.
- **US vs China share of AI compute.** Not found.
- **S&P 500 concentration for end-2025**, and a primary (index-provider) source for any year.
- **Handshake and LinkedIn entry-level series; share of postings requiring 0–2 years' experience.** Not found. The LinkedIn "−23%" figure is second-hand via EIG.
- **Starting salaries for exposed majors (NACE or similar).** Not found.
- **OECD annual labour share series for other economies; ILO 2026 update.** Not found.
- **Later replication of the Upwork freelance studies.** None found.
- **NY Fed June 2026 remote-work study** and the **NY Fed 2026 business survey update on AI and hiring.** CNBC page blocked; no primary link found.
- **Pages that refused automated access:** CNBC (two articles), Financial Advisor magazine, Census PDF, and Indeed Hiring Lab's 2026 posts (redirect errors).
- **Cause of the 2026 fall in labour-force participation.** Observed in the data; explanation not sourced.
- Papers cited only through the Imas & Schaal summary (Lambert & Schindler; Frank et al.; Kauhanen & Rouvinen; Facius & Iacono; Hosseini & Lichtinger; Klein Teeselink) were **not read directly**.
