# Workers' share (stop `share`): landscape scan 4.0

12 Oct 2026. 60 items in `share.jsonl`, 54 read at source this session. The search budget ran out after about 20 searches, so later checks used known URLs only.

## 1. Status on the site

- **`ls` is correct.** BLS gives 52.8% for Q2 2026 (released 3 Sep 2026), and FRED's index (93.446) matches `LS_Q`. The yearly averages and the 0.9-point gap check out. Next release: **5 Nov 2026**.
- **Basis text is now half right.** "2023–25 yearly flat" holds for BLS. But BEA's annual measure (pay as a share of national income) fell to **50.9% in 2025**, from 51.4%, the lowest since the mid-1930s.
- **Sceptic point 1 is incomplete.** Stanford's tracker (updated 23 Sep 2026) does say the capital share continues its trend "without signs of abatement". But it rates that indicator **"Strong Evidence"**, its top band (at or above the 95th percentile of a simulated 1997–2019 trend). Quoting only the first half reads as a sceptic point when the rating points the other way.
- **Sceptic point 2 misquotes.** The Grossman & Oberfield abstract says the literature "collectively explains the phenomenon many times over". It does not say "account for … multiple times over". Two reads agreed.
- **`mag7` is still stale.** No primary 2025–26 value found. Forbes (updated 1 Sep 2026) says "about 34%", undated. S&P Dow Jones Indices says top-5/10/20 weights are the highest since 1970, with numbers only in a chart.
- **`compute` capex now has a better source.** Platformonomics (31 Jul 2026) quotes the company releases: about $172bn in Q2 2026 and about $305bn in the first half. The July guidance sums to $720–745bn, matching the site. The post's own table says $735–750bn, which does not match its listed guidance, so keep the arithmetic sum.
- **`union` is missing a caveat.** The 2025 figure is an 11-month average because the October 2025 survey was not collected (shutdown).

## 2. What is measured (best series)

| Series | Freq. | Latest | Why it matters |
|---|---|---|---|
| BLS nonfarm business labour share | Q | 52.8% (Q2 26); 4-quarter avg 53.7% | Headline; record low |
| BLS nonfinancial corporate labour share (index) | Q | 93.3 (Q2 26), from 97.5 (Q1 25) | Same fall without imputing self-employed pay |
| BEA pay as share of national income (GDI) | A | 50.9% (2025) | Second agency; lowest since 1930s |
| BEA domestic corporate profits share of GDI | A | 11.4% (2025) | Owners' side; stepped up in 2021 |
| BEA depreciation share of GDI | A | 16.4% (2025), flat since 2021 | Rules out the depreciation objection for the recent fall |
| Epoch AI compute ownership | irregular | Google ~25%; industry 80% of known supercomputers | Who owns AI capital |
| Big-four capex (Platformonomics, from company releases) | Q | ~$172bn (Q2 26) | Scale of the AI capital build |
| BLS union density / by occupation | A | 10.0%; computer & maths 3.7% | Exposed jobs barely unionised |
| BLS major work stoppages | A | 30 in 2025 (2006–25 avg 17.8) | Collective leverage proxy |
| Atlanta Fed wage tracker; JOLTS quits | M | switchers 4.7% vs stayers 3.4%; quits 1.9% (Aug) | Outside options |

## 3. Key studies

- **Makridis & Johnston 2026** (US, all employers in the administrative wage records, 2017–24). One standard deviation more AI exposure raised output about 10% and cut the labour share about 5 points. Workers captured about 29 cents of each dollar. This is the closest any study comes to tying AI to the share. But the effects start in 2021, before ChatGPT.
- **Acemoglu 2024.** AI will "widen the gap between capital and labor income", with only small productivity gains (TFP gain of 0.66% or less).
- **Eisfeldt, Schubert & Zhang 2023/26.** Firms whose staff are most exposed to AI beat the least exposed by 5% in the two weeks after ChatGPT. Later hiring and profit patterns fit firms swapping workers for AI.
- **Babina et al. 2024; Autor et al. 2020.** AI-led growth "concentrates among larger firms"; the labour share falls through such "superstar" firms.
- **Stevens 2026.** Each $1 less spent on freelancers comes with about $0.03 more AI spending, a near-total transfer from pay to margin.
- **Korinek & Suh 2024.** Wages collapse if full automation is reached. **Korinek & Lockwood 2026:** AI may erode the labour-income tax base.
- **IMF (2024 blog; Note 2026/002).** AI "will likely worsen overall inequality"; no estimate given.
- **Forecasts.**
  - FRI economists: 54.3% in 2030, 50.0% in 2050 (45.0% with rapid AI).
  - LEAP: 58.3% (2024) to 56% (2030) to 51% (2040, experts).
  - Anthropic (an AI firm, so not independent): 59.4%, 56.1% or 45.2% by 2030, by scenario.

## 4. Sceptic's case

1. **The timing is wrong for AI.** Most of the BLS fall came in 2001–10. The profit-share step came in 2021, before ChatGPT. JPMorgan's Feroli calls it a "level shift before and after the pandemic". EY's Daco says the gains "largely predate the AI boom".
2. **Measurement.**
   - Koh et al. (2020): the post-war decline is "entirely explained" by counting software and R&D as investment. AI spending is mostly of that kind, so the measured share can fall mechanically.
   - OECD (Schreyer): there is "little or no decline" once depreciation is netted out.
   - The BLS measure imputes the pay of the self-employed.
   - Counterpoint: BEA's depreciation share is flat since 2021, and the corporate measure, which needs no imputation, falls too.
3. **US-only.** Harmonised labour shares are stable or rising in every major advanced economy except the US and Canada (Gutiérrez & Piton). That casts doubt on technology as the cause.
4. **No pay effect for workers.** Danish data rule out earnings or hours effects above 2% (Humlum & Vestergaard). Bargaining is not collapsing: 30 major strikes in 2025; AI terms won by writers, actors and dockworkers.
5. **The AI money goes abroad.** About 35% of AI investment is imported (First Trust), so much of its income accrues outside the US split.
6. **Noise.** Quarterly changes have a standard deviation of about 0.7 points, and figures get revised. Axios reported Q1 2026 at 53.7%; the current vintage gives about 53.6%.

## 5. Gaps

- No series splits capital income (profits, rents) into AI-related and other.
- No official statistic on who owns AI compute; Epoch is the only tracker, and its 2025 dataset covers 10–20% of capacity.
- No free primary series of S&P 500 top-firm weights was found; the index provider gives no numbers in text.
- No repeated count of union contracts with AI clauses; the Berkeley inventory is one-off, last updated Jul 2025.
- No regularly updated labour share by AI exposure of industry; Makridis & Johnston is one study, to 2024.
- No series comparing pay and profits inside AI-adopting firms.
- No series of bargaining outcomes (quits, wage growth of job-switchers, strikes) by AI exposure of occupation.
- No ILO labour-share figure for 2025 or 2026 was found in this search.

## 6. Proposed ratings

- **Measurement: keep 2 (Measured, not tied to AI).** Three official, independent, repeated series exist. One study ties the share to AI exposure, but none does so repeatedly.
  - Up to 3 if a repeated sector-by-exposure labour share or an AI-capital-income split appears.
- **Signal: keep 2 (Early or mixed signs).** The fall is now confirmed by BEA's annual data and the corporate series, and Stanford rates the capital share "Strong Evidence". But the fall started long before AI, and the worker-level evidence shows no pay effect.
  - Close call: 3 if the Q3 2026 release (5 Nov) takes the four-quarter average below about 53.5% and a second study links the fall to AI.
  - Close call: 1 if the share recovers above 54.5%.

## 7. Proposed site changes

**Fixes**
- `share.basis`: "…2023–25 yearly flat…" → "…BLS yearly average flat 2023–25, but BEA's annual pay share fell to 50.9% in 2025, lowest since the 1930s…" (BEA via FRED A4002E1A156NBEA).
- `sceptic[0]`: replace the Stanford clause with "Stanford's tracker rates the capital share 'Strong Evidence' but calls it the historical trend 'without signs of abatement', and sees 'no decisive evidence of transformation'."
- `sceptic[1]` (and copy.js): quote → "collectively explains the phenomenon many times over" (Grossman & Oberfield 2022, abstract).
- `compute` capex pair: source tag "TRACKER BLOG · UNCHECKED" → "PLATFORMONOMICS, FROM COMPANY RELEASES · JUL 2026". Add a pair: "$59.7bn: Nvidia net income in one quarter (to 26 Jul 2026), on $96.2bn revenue" (company release).
- `union` read: add "2025 is an 11-month average (October survey not collected)". Add a pair: "3.7% of computer and mathematical workers are union members (2025)" (BLS Table 3).
- `mag7` read: add "S&P Dow Jones Indices: top-10 weight highest since 1970 (Feb 2025)". Keep the stale flag, or demote the card to a pair under `compute` (editor's call).
- `unmeasured[0]`: "no published estimate" → "Investment is estimated (AI-related categories gave 39% of real GDP growth in Q1–Q3 2025, St. Louis Fed). No series splits income earned by AI capital."
- `watch`: add "BLS Q3 2026 release, 5 Nov 2026".

**New indicator 1: `pay` (primary)**
- **Headline:** "Pay's share of US national income fell to 50.9% in 2025, lowest since the 1930s."
- **How to read it:** "Both lines are shares of all income earned in the US. Pay falling while profits rise means owners take a bigger slice."
- **Chart:** line, two series, % of GDI, annual.
- **Pay (compensation):**
  - 1995 55.7, 1996 55.2, 1997 55.0, 1998 55.7, 1999 56.0
  - 2000 56.6, 2001 56.5, 2002 55.8, 2003 55.4, 2004 55.0
  - 2005 54.0, 2006 53.4, 2007 54.6, 2008 55.3, 2009 54.4
  - 2010 53.0, 2011 52.7, 2012 52.3, 2013 52.3, 2014 52.2
  - 2015 52.8, 2016 53.2, 2017 53.4, 2018 53.3, 2019 53.3
  - 2020 54.6, 2021 53.0, 2022 51.7, 2023 51.5, 2024 51.4, 2025 50.9
- **Domestic corporate profits:**
  - 1995 8.3, 1996 8.8, 1997 9.1, 1998 8.0, 1999 7.7
  - 2000 6.6, 2001 5.8, 2002 7.0, 2003 8.0, 2004 9.2
  - 2005 10.0, 2006 10.4, 2007 8.7, 2008 6.6, 2009 7.5
  - 2010 9.3, 2011 9.3, 2012 10.1, 2013 9.9, 2014 10.2
  - 2015 9.7, 2016 9.2, 2017 8.8, 2018 9.0, 2019 9.0
  - 2020 9.3, 2021 11.4, 2022 11.2, 2023 11.3, 2024 11.3, 2025 11.4
- **Source:** BEA NIPA shares of GDI, via FRED A4002E1A156NBEA and A445RE1A156NBEA (updated 30 Sep 2026).
- **Caveat flags:** predates (the profit step was in 2021), cause, annual, revised. Check "lowest since the 1930s" against BEA Table 1.11 before publishing (from a summarised read: 1935 was 50.6%).

**New indicator 2: none.** Bargaining series (strikes, quits, switchers' pay) lack a verified history here. Instead, add a second line to the `ls` chart (same units, index 2017=100): BLS nonfinancial corporations, FRED PRS88003173.
- 2019: Q1 100.727, Q2 100.572, Q3 99.636, Q4 99.960
- 2020: Q1 102.095, Q2 106.781, Q3 102.420, Q4 101.885
- 2021: Q1 99.575, Q2 98.688, Q3 98.900, Q4 98.494
- 2022: Q1 97.316, Q2 95.759, Q3 96.071, Q4 96.284
- 2023: Q1 96.645, Q2 96.931, Q3 96.648, Q4 95.996
- 2024: Q1 97.487, Q2 97.073, Q3 96.875, Q4 96.953
- 2025: Q1 97.508, Q2 96.923, Q3 96.421, Q4 95.755
- 2026: Q1 95.062, Q2 93.327
- Label: "Corporations only: no self-employed pay to estimate."

**New sceptic points:** Gutiérrez & Piton (US-only decline); Koh et al. (counting software and R&D as investment); about 35% of AI investment is imported.
