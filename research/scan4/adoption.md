# Adoption: landscape scan 4.0 (12 Oct 2026)

`adoption.jsonl` holds 49 items, 40 read at source this session. The search budget ran out near the end, and one FRED page was rate-limited.

## 1. Status on the site

The site has four indicators (gallup, rps, firms, students). It rates measurement 4 and the signal 4, with 3 as the close call.

**Out of date or wrong:**

- **Gallup is one quarter behind.** Gallup's indicator page now has Q3 2026 (1 Aug 2026): 53% any use, 32% weekly or more, 16% daily. The site shows 52%, 30% and 15%. Organisational integration is now 49%.
- **The hours share is stale.** The site shows 5.7% (Aug 2025). FRED now publishes it every quarter (RPSGENAIASSISTWRKHRSALL): **6.27% in Q2 2026**.
- **One gap item is wrong.** It says there is no repeated series of hours by occupation. FRED has published quarterly hours series by occupation group since Q4 2024 (for example RPSGENAIWORKHOURSASSILCIA). They are noisy, and come from a Fed research panel, not a statistics agency.
- **The PC comparison is overstated.** NBER says work adoption was "as fast as" the PC. Only overall adoption was faster than PCs or the internet.
- **The "growth may be slowing" card is weak.** It rests on ChatGPT, which is losing share to rivals. Similarweb: visits to AI sites rose 70% in a year, while ChatGPT's visits stayed flat and its share fell from 76% to 53%.

**Confirmed at source:** RPS 45.2% (still the latest reading), Census 19.8% (the biweekly tool could not be read), HEPI 94% and 12%, Pew teens 54%, Eurostat 20.0%.

## 2. What is measured

| Series | Where, how often | Latest |
|---|---|---|
| Gallup, AI use at work | US, quarterly | 53% any use, 16% daily (Q3 2026) |
| St. Louis Fed RPS, work use | US, quarterly | 45.2% (Q2 2026); all adults 61.8% |
| **RPS, share of work hours** | US, quarterly, also by occupation | **6.27%** (Q2 2026), up from 4.1% (Nov 2024) |
| Census BTOS | US, every two weeks | 19.8% of firms (3 May 2026); wording changed Nov 2025 |
| Eurostat, firms | EU, yearly | 20.0% (2025), up from 7.7% (2021) |
| Eurostat, people (new) | EU, yearly from 2025 | 32.7% of 16–74s; 15.1% for work |
| ONS BICS | UK, about monthly | firms with 10+ staff: about 12% (Sep 2023) to about 35% (Jun 2026); all firms: 30% (Sep 2026) |
| Statistics Canada | Canada, yearly | 6.1%, 12.2%, 19.2% (2024–26), same wording |
| Ramp AI Index (FRED) | US, monthly | 56.1% of Ramp's customer firms paid for AI (Aug 2026), from 7.5% (Jan 2023) |
| Microsoft AI Diffusion | Global, quarterly | 17.8% of 15–64s (Q1 2026) |

Only the hours series measures depth. Ramp's sample leans to tech firms. Only Microsoft's figures cover the Global South, and they are the company's own data.

## 3. Key studies

- **Bick, Blandin & Deming** (NBER w32966; *Management Science* 2026; US). Generative AI use reached 39.4% of adults two years after ChatGPT (later revised to 44.6%); PCs reached 20% after three years.
- **Bick et al.** (NBER w35677, Aug 2026; US). Use is "widespread but shallow": in most jobs and tasks, fewer than half of workers use AI.
- **Bonney et al.** (NBER w35141, 2026; US). 18% of firms use AI (32% weighted by employment); 57% of adopting firms use it in three or fewer business functions; 66% use it only to augment tasks; 2% report AI-related job cuts.
- **Humlum & Vestergaard** (*PNAS* 2024; Denmark). Among 18,000 workers, women were 16 points less likely to use ChatGPT for work.
- **Humlum & Vestergaard** (NBER w33777, revised Mar 2026, now titled *Still Waters, Rapid Currents*; Denmark). No effect on pay or hours; anything above 2% is ruled out.
- **Chatterji et al.** (OpenAI; global). About 10% of the world's adults used ChatGPT by July 2025, and over 70% of messages were not about work.
- **Anthropic Economic Index** (2025–26; global). 1% more GDP per head goes with 0.7% more Claude use; US states are evening out, but there is "no evidence that low-use countries are catching up".
- **ECB Occasional Paper 395** (2026; euro area): see section 4.

## 4. Sceptic's case

- **Wide but shallow.** AI assists 6.3% of US work hours. In the euro area, 70% of firms report some use but only 7% call it significant.
- **Users are not using it more.** My calculation from FRED: hours share divided by work use is about 14.0% in Q2 2025 and 13.9% in Q2 2026. Hours rose because more people use AI, not because each user uses it more. Gallup points the other way: daily users rose from 19% to 30% of all users (2023 to Q3 2026). So the evidence is mixed.
- **Recent growth has slowed.** Gallup any use rose 1 point in Q3 2026; ONS calls UK firm use "broadly stable" (Jun to Sep 2026); Census stayed at 17–20% for five months; Ramp says adoption is "decelerating". One survey (Hartley et al.) reportedly shows work use falling (not verified).
- **Use outside work is growing faster.** In the RPS, non-work use rose 13 points but work use only 4 (Aug 2024 to Aug 2025).
- **The answer depends on who you ask.** Estimates of US firms using AI range from 19.8% (Census) to 56% (Ramp), 78% (weighted by employment) and 88% (McKinsey). RPS revised its first reading by 5 points, and Census and Gallup both changed their questions.
- **No effect on pay** in Denmark.

## 5. Gaps

- No official statistics agency measures the share of work hours done with AI.
- No series measures whether users could still do the task without AI.
- No series follows the same people over time, so nobody sees who starts or stops.
- No independent, comparable measure of personal use outside the EU and OECD.
- No repeated official count of the share of a firm's staff using AI daily. ONS asked once, in June 2026.
- No measure of how much each person uses AI that is not from AI firms' own data.

## 6. Proposed ratings

- **Measurement level: 4 (keep).** Repeated, direct, independent series tied to AI exist in the US, EU, UK and Canada, and there is now a quarterly hours series. It would fall to 3 if the hours series stopped.
- **What the data show: 4 (keep), close call 3.**
  - Breadth doubled or tripled everywhere: US workers 21% to 53%; firms 8% to 20% (EU), 12% to 35% (UK), 6% to 19% (Canada).
  - Daily use doubled in about a year (8% to 16%), and the hours share rose from 4.1% to 6.3% in 18 months.
  - It is a close call because the latest quarter was slower and hours per user are flat.
  - Move to 3 if Gallup daily use and the hours share each rise less than 1 point over the next two quarters.

## 7. Proposed site changes

### Fixes

1. In `data1.js`, add Aug 2026 to the Gallup data (x 2026.625: any use 53, weekly 32, daily 16). Widen the x-axis to 2026.8. Add the source https://www.gallup.com/699797/indicator-artificial-intelligence.aspx.
2. Update the Gallup figures throughout: 52% → 53%, 15% → 16%, "mid-2026" → "August 2026", Q2 → Q3 2026. This covers `gallup.tab`, the adoption headline, status, claim, deck, tour and as-of date, `copy.js` (h1 and sentence), `data3.js` line 72 and `signals.js` (gallup basis).
3. In `gallup.read`, change "85% ... do not use AI every day" to "84% (Aug 2026)". Label 22,573 as the Q2 2026 sample size.
4. Replace the link basis in `signals.js` with: "Gallup: any use 21% to 53%, daily 4% to 16% (2023 to Aug 2026); work use as fast as PCs, overall faster (NBER). Work hours 6.3% (Q2 2026)." In the close call, change "5.7%, Aug 2025" to "6.3%, Q2 2026; latest quarter slower".
5. In the `rps` pair, change 5.7% (Aug 2025) to 6.3% (Q2 2026), and cite FRED RPSGENAIASSISTWRKHRSALL. In `rps.read`, add "The first adult reading was revised from 39.4% to 44.6%."
6. In the deck, `sceptic[0]` and `watch[1]`, change 5.7% (Aug 2025) to 6.3% (Q2 2026). Add to `sceptic[0]`: "Euro area: 70% of firms report some AI use; 7% call it significant (ECB 2026)."
7. Rewrite `unmeasured[0]` (and `data3.js` line 99) as: "No statistics agency measures hours done with AI; the only series (St. Louis Fed, quarterly, by occupation) is an online panel."
8. Rewrite `unmeasured[2]` as: "Independent, comparable data outside the EU and OECD; Global South figures come from Microsoft's own data."
9. Add pairs to `firms`:
   - UK, firms with 10+ staff: about 12% (Sep 2023) to about 35% (Jun 2026). Source: ONS.
   - Canada: 6.1% to 19.2% (2024–26). Source: Statistics Canada.
10. Give the Danish paper's new title in the pay sceptic card: *Still Waters, Rapid Currents* (NBER w33777, 2026).

### New indicator 1: `hours`

- **Headline:** AI now assists about 6% of US work hours, up from 4% in late 2024.
- **How to read it:** The share of all US work hours, counting non-users, in which workers say they actively used generative AI.
- **Chart:** line.
- **Data:**

| Quarter | Share of work hours | Source |
|---|---|---|
| Q4 2024 (Nov 2024) | 4.1% | St. Louis Fed blog |
| Q2 2025 | 4.90% | FRED |
| Q3 2025 | 5.72% | FRED |
| Q4 2025 | 5.56% | FRED |
| Q1 2026 | 6.01% | FRED |
| Q2 2026 | 6.27% | FRED |

  The Q1 2025 value could not be read this session.
- **Source:** FRED RPSGENAIASSISTWRKHRSALL, https://fred.stlouisfed.org/series/RPSGENAIASSISTWRKHRSALL (primary).
- **Caveats:** self-reported; midpoint of answers given in ranges; online panel; noisy.

### New indicator 2: `global`

- **Headline:** The gap in AI use between the Global North and South keeps widening.
- **How to read it:** The share of people aged 15–64 who used an AI product, estimated from Microsoft's own data. The gap widens in percentage points; in proportional terms, both groups grow at similar rates.
- **Chart:** line, two series.
- **Data:**

| Period | Global North | Global South | Source |
|---|---|---|---|
| H1 2025 | 22.9% | 13.1% | Microsoft |
| H2 2025 | 24.7% | 14.1% | Microsoft |
| Q1 2026 | 27.5% | 15.4% | Microsoft |
| Q2 2026 | 28.8% | 16.2% | Kyunghyang Shinmun, Sep 2026; secondary, show as a hollow marker |

- **Source:** https://www.microsoft.com/en-us/research/wp-content/uploads/2026/05/Microsoft-AI-Diffusion-Report-2026-Q1.pdf (company).
- **Caveats:** the company's own data; adjusted with a model; periods change from half-years to quarters; counts any use.

### New missing measures and sceptic points

- Add gaps 1, 3, 4 and 5 from section 5 to the gap list.
- Add sceptic points 2 to 5 from section 4. The "recent growth has slowed" point replaces the ChatGPT card. Show "users are not using it more" alongside Gallup's rising daily share.
