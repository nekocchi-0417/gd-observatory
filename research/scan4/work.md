# Entry-level work (`work`): landscape scan 4.0

12 Oct 2026. 63 items in `work.jsonl`; 45 read at source this session. Search budget ran out after about 28 searches; later checks used direct fetches of known URLs.

## 1. Status on the site

Six indicators; level 3, signal 2. Current and re-checked: Canaries dashboard (updated 23 Sep, data to Aug 2026), Challenger (Sep 2026), NY Fed (Q2 2026), Census paper.

Fixes needed:
- **postings:** latest is **78.33 (2 Oct 2026)**. The Dec 2024–Sep 2026 gap is still unfilled (FRED download blocked here); download by hand.
- **canaries read:** Stanford (12 Aug 2026) says the gap **persists** with rate and remote-work controls and **shrinks with education**; the site implies all three halve it.
- **Sceptic "Other countries see less":** now read at source. Finland is a null. Norway is **not** a clean null (see §4).
- **Sceptic "Exposed workers…":** 0.77 vs 0.85 now verified (SIEPR, Jul 2026).
- **Hosseini & Lichtinger:** verified: about **9% after six quarters**, 8% after eight (not "8–10% after 2 years").

## 2. What is measured (best series)

| Series | Country | Frequency | Latest | Why it matters |
|---|---|---|---|---|
| Stanford/ADP Canaries dashboard | US | monthly | Ages 22–25, most exposed: 87.2 (Aug 2026); shortfall 19% (Jun 2026) | Only direct monthly age × exposure series |
| KI-indeksen (Frisch Centre/BI) | Norway | monthly | Text: ages 21–30 in most exposed jobs "fallen" against peers; overall index "about zero" | Canaries design on full register data |
| Revelio AI Labor Market Tracker | US | monthly | Postings gap, most vs least exposed: −29% (Sep), from −40% (Jul) | Second US tracker (vendor) |
| Eurostat LFS, ages 15–24 in information and communication | EU27 | quarterly | 450k (Q4 2025) vs 555k (Q4 2022) | Official; Canaries shape outside the US |
| BLS CPS, bachelor's holders 20–24 vs 25+ (FRED) | US | monthly | Jan–Sep 2026: 6.8% vs 3.1% | Repeated version of `grads` |
| NY Fed recent graduates | US | quarterly | 5.6% unemployed, 42% underemployed (Q2 2026) | Standard reference |
| Indeed postings by seniority | US | blog posts | Senior +14.7%, entry −7.5% year on year (May 2026) | Direct junior/senior split |
| Challenger AI-attributed cuts | US | monthly | 3,961 (Sep 2026) | Employers' stated reasons |
| Census BTOS AI supplement | US | periodic | 2% of firms report AI-related employment falls (Nov 2025–Jan 2026) | Firm side, official |
| ISE Student Recruitment Survey | UK | annual | Graduate vacancies −8%; 140 applications per vacancy (2024/25) | UK repeated series |

## 3. Key studies

- **Brynjolfsson, Chandar & Chen (Aug 2026):** the gap grew from 15% to 19%. With firm-wide hiring trends removed, the fall is clear only **from 2024**, which fits the timing of AI adoption better (Feb 2026 note).
- **Hosseini & Lichtinger (Harvard, May 2026; Revelio data, 281,111 firms):** junior employment is about 9% lower at firms that adopted generative AI, mainly through slower hiring. Senior employment is unchanged.
- **Klein Teeselink (KCL, Oct 2025, UK):** in highly exposed firms, employment fell 4.5% and junior positions 5.8%. Postings in exposed occupations fell 23.4%.
- **Orr, Tucker & Warren (Census, Sep 2026):** graduates of the most exposed majors were 5 points less likely to get a first job and earned 13% less.
- **ECB box (Aug 2026):** euro-area youth employment fell 18.6% in ICT (Q1 2023–Q1 2026); the youth-to-total unemployment ratio rose from 2.1 to 2.4; not yet attributable to AI.
- **Bank of Korea (Aug 2026; read through JoongAng, not verified):** 268,000 of 285,000 youth job losses (94%, Jun 2022 to Jun 2026) were in highly exposed industries. People in their 50s gained 230,000 jobs.
- **Hernæs & Kostøl (IZA DP 18767, Norway):** no overall effect. For ages 22–25 an emerging gap appears from spring 2025, not significant, with pre-trends rejected.
- **Freelance work and translators:** demand fell 2–50% depending on the study (Hui et al.; Demirci et al.; Teutloff et al.). Frey & Llanos-Paredes estimate about 28,000 fewer new translator jobs. All use data from 2023 or earlier.
- **Humlum & Vestergaard (Denmark):** no effect larger than 2% on earnings or hours for existing workers.

## 4. Sceptic's case (strongest first)

1. **Remote work.** NY Fed (Emanuel, Harrington & Pallais, Jun 2026): remote work explains **64%** of the rise in young-graduate unemployment from 2017–19 to 2022–24. AI does not explain the bulk.
2. **Postings fell before ChatGPT, for all ranks.** NY Fed (Audoly, Guerin & Topa, May 2026): the fall in exposed-occupation postings began before ChatGPT, with no extra break after it, and junior and senior postings moved in parallel. Iscenko & Curto Millet (Google economists, so not independent): postings peaked with the first rate rise, and a hiring freeze shrinks the 22–25 group mechanically.
3. **Not just graduates.** EPI (May 2026): unemployment rose 1.3 points for young graduates and 1.2 for non-graduates, while graduates' employment rate held steady (98% of the rise is more people looking). EIG (Ozimek & Goldschlag) reaches the same conclusion.
4. **Long decline.** Cleveland Fed: graduates' job-finding rate went from 47.0% (1976–2000) to 37.1% (2025), and AI "cannot explain" the long fall.
5. **Nordic registers.** Finland shows no effect (ETLA, Jan 2026). In Norway, data to Mar 2025 show no robust effect and pre-existing trends (Facius & Iacono).
6. **Firm side.** Only 2% of US firms report AI-related employment falls (Census). AI-adopting firms grew employment 10% (Ramp, second-hand).
7. **Easing in 2026.** The young-graduate unemployment gap narrowed from 4.4 to 3.7 points (Jan–Sep averages). NY Fed has been flat at 5.6% for three quarters. Revelio's postings gap is narrowing, and Challenger AI cuts have fallen back.
8. **Boom, then bust.** EU youth ICT employment in 2025 is back at its 2021 level.

Best reply: the US gap survives rate and remote-work controls, and the firm-level studies tie junior losses to adoption, not just exposure.

## 5. Gaps

- No official series counts hires by age and occupation (the US QWI has no occupation field; EIG proposes adding one).
- No official series links a firm's AI adoption to its junior hiring.
- No repeated freelance-platform demand series after 2023 found in this search.
- No series measures on-the-job training or mentoring given to juniors.
- No study found in this search tests offshoring of entry-level work as an alternative to AI.
- No series tracks whether people who missed a first job in an exposed field catch up later.
- No repeated junior-hiring series for law, consulting or accounting beyond trade counts (SurePoint, ISE).
- No official Asian series ties youth employment to AI exposure (Bank of Korea one-offs only).
- Every monthly tracker uses AI *exposure*, not actual AI *use*.

## 6. Proposed ratings

- **Measurement: 3 (keep; close call 4).** Three independent monthly trackers (Stanford/ADP, Revelio, Norway), but all use exposure, not use, and none is official and tied to AI. **Up to 4** if an agency publishes hires by age and occupation linked to firms' AI use, or KI-indeksen's numbers match the US.
- **Signal: 2 (keep; close call 3).** The US gap widened (15% to 19%) and the same shape appears in EU, Korean and UK data; but 2026 studies credit remote work and rates, Nordic registers show little, and the graduate gap eased in 2026. **Up** if the US gap keeps widening to Dec 2026 and Norway's or the EU's becomes significant; **down** if it stops widening for two quarters.

## 7. Proposed site changes

### Fixes
1. `postings`: tab value `'77'` → `'78'`. Last point `[ym(2026,9.6),77.32,'latest']` → `[ym(2026,10.07),78.33,'latest']`. Aria text "77 in September 2026" → "78 in early October 2026". Source: FRED IHLIDXUSTPSOFTDEVE (updated 7 Oct 2026).
2. `canaries.read`: "roughly halves" sentence → "The gap survives controls for interest rates and remote work but shrinks once education is counted; with all controls Stanford's estimate roughly halves. Removing firm-wide hiring trends, the fall is clear only from 2024." Sources: Stanford news note 12 Aug 2026; Stanford note 9 Feb 2026.
3. Sceptic bullet 3 (`Other countries see less`) → "**Nordic registers see little.** Finland: no effect on young workers (ETLA, Jan 2026). Norway: no robust effect to March 2025 (Facius & Iacono); newer data to February 2026 show an emerging, not yet significant gap for 22 to 25 year olds (Hernæs & Kostøl). Danish data show no change in pay or hours for chatbot adopters."
4. Sceptic bullet 4: "(a July 2026 update, known here second-hand, puts it at 0.77 against 0.85…)" → "(Stanford's SIEPR, July 2026: 0.77 against 0.85, so the difference has nearly closed)".
5. `unmeasured[1]` → "Official data linking firms' AI adoption to their junior hiring. Two studies on online-profile data find about 9% (US) and 6% (UK) fewer juniors at adopting or exposed firms; neither is repeated."
6. Gap list / `data3` text, "One 2026 paper, known second-hand, finds 8 to 10%…" → "One 2026 paper (Hosseini & Lichtinger) finds junior employment about 9% lower after six quarters at firms that adopted generative AI, through slower hiring; senior employment unchanged."
7. `grads.read`: add "EPI finds young graduates' employment rate steady since 2024; the rise in their unemployment is mostly more people looking for work."
8. Add to `watch`: "Norway's monthly KI-indeksen: whether its young-worker gap becomes significant."

### New indicator A: `euyouth`
- **Headline:** EU tech and media jobs for under-25s down 15% since 2023; older workers' up.
- **How to read:** employment in the EU information-and-communication sector by age, averaged over four quarters, 2022 = 100. A widening gap between the lines matches the US "canaries" pattern.
- **Chart:** line, three series. Derived four-quarter averages, 2021–2025:
  - Ages 15–24, sector J: 89.8, 100, 106.5, 98.9, 90.6
  - Ages 25–64, sector J: 95.8, 100, 104.1, 107.7, 109.0
  - Ages 15–24, all sectors: 93.1, 100, 102.6, 102.9, 102.6
- **Raw quarterly data, read at source** (thousands, Q1 2021 to Q4 2025; Q1 2021 flagged as a series break):
  - Ages 15–24, J: 421.5, 446.0, 483.9, 512.3, 514.8, 510.6, 493.8, 555.4, 579.5, 548.6, 546.4, 534.6, 556.0, 516.3, 498.0, 482.3, 486.1, 472.1, 470.1, 450.0
  - Ages 25–64, J: 6335.5, 6623.6, 6609.9, 6708.7, 6764.2, 6799.6, 6844.0, 7027.8, 7054.9, 7129.8, 7119.0, 7246.2, 7327.3, 7313.4, 7401.4, 7496.5, 7532.7, 7484.7, 7463.0, 7412.9
  - Ages 15–24, all sectors: 13875.7, 14677.9, 15757.3, 15444.1, 15410.4, 15986.6, 16507.8, 16275.9, 16085.2, 16419.2, 16889.6, 16458.9, 16159.9, 16455.5, 16987.3, 16459.5, 16121.3, 16480.6, 16907.9, 16365.8
- **Source:** Eurostat, *Employed persons by economic activity (NACE Rev. 2), quarterly* (lfsq_egan2), EU27_2020, updated 11 Sep 2026. https://ec.europa.eu/eurostat/databrowser/view/lfsq_egan2/default/table. Tag: **primary**.
- **Caveat flags:** `proxy` (a sector, not occupations), `cause`, `derived`, `break`. Not seasonally adjusted. EU27 has no 2026 data yet. The 2025 level is back at 2021's.

### New indicator B: `gradgap` (or add as a chart on `grads`)
- **Headline:** Young US graduates' unemployment gap widened 2022–25, then narrowed in 2026.
- **How to read:** each point is the January–September average of the monthly unemployment rate for bachelor's holders aged 20–24 and aged 25+.
- **Chart:** line, two series, derived Jan–Sep averages (%), 2018–2026:
  - Ages 20–24: 5.49, 5.52, 11.97, 8.24, 5.66, 5.82, 6.68, 7.16, 6.78
  - Ages 25+: 2.27, 2.34, 5.86, 3.79, 2.26, 2.29, 2.50, 2.77, 3.06
  - Gap: 3.22, 3.18, 6.11, 4.46, 3.40, 3.53, 4.18, 4.39, 3.72
- **Source:** BLS CPS via FRED, CGBD2024 and CGBD25O (monthly values read at source). Tag: **primary**.
- **Caveat flags:** `cause`, `derived`. Not seasonally adjusted, small samples, and October 2025 is missing (shutdown; outside the Jan–Sep window). Part of the 2026 narrowing comes from older graduates' unemployment rising.

### New missing measures
Add the first, second, fourth, fifth and eighth items from §5 to the gap list.

### New or better sceptic points
Add §4 points 1, 2, 3 and 7. Note that Iscenko & Curto Millet are Google economists.
