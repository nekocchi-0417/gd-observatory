# 12 — Fact-check of site version 3 against the research notes (3 Oct 2026)

Scope: `site/src/data1.js`, `data2.js`, `data3.js`, `app.js`, and `charts.js` where it changes what a reader sees. Ground truth: notes 01–07 (07 wins on conflict). The court total (2,137) and the `COURT` array are taken as correct, as in report 08.

Method: read every source file and every note in full. Ran the site's data and chart code in a sandbox (no site file was edited) to count the measurement record, and to compare the date each point is plotted at with the date its tooltip and data table display. Recomputed the workers'-share arithmetic from `LS_Q`. Compared version 3 with `src_v2_backup` to find new or rewritten text. No web fetches.

**Counts for version 3: 4 HIGH, 6 MEDIUM, 30 LOW.**

Status of the 54 items in report 08: **HIGH** 4 fixed, 1 partly fixed (the fix introduced a new error), 1 not fixed. **MEDIUM** 15 fixed (three of the fixes created a smaller new problem, listed below). **LOW** 23 fixed, 8 partly fixed, 2 not fixed.

Note on fields: `headline`, `status` and `mech` in the data files are not rendered anywhere by `app.js`, so problems in those fields are not listed.

---

## Part A — Status of every item in report 08

| 08 # | Status in v3 | Current text (quoted) | Comment |
|---|---|---|---|
| H1 | **Partly fixed; new error** | charts.js: `Math.floor((x-y)*12+1e-6)` | Mid-month points now label correctly. But tables and tooltips round x to four decimals first (three in the measurement record), so any point placed exactly at the start of February, May, August or November now shows the month before. 65 wrong labels in charts, 73 in the record. See N1. |
| H2 | **Not fixed** | data2.js, `control`: `ticks:yrs(2021,2026),tip:x=>String(Math.round(x)),label:'Survey year'` | The `Math.floor` change was applied to the `trust` chart (`label:'Report year'`), whose points sit on whole years and were never wrong. The Pew chart still reads 2022 = 37, 2023 = 38, 2024 = 52, 2025 = 51, 2025 = 50, 2026 = 52. See N2. |
| H3 | Fixed | app.js: `B=2025.51,B2=2024.51` and `'Baseline '+Math.floor(x)` | Baselines read "Baseline 2025" and "Baseline 2024"; history keeps its quarter labels. |
| H4 | Fixed | data3.js: 'No probability for "loss of human agency" could be extracted for this draft: the MIT Delphi study rated it, but the figure sits in an interactive chart. A 2023 survey of AI researchers gave a median 10% to extinction or similarly severe disempowerment.' app.js: 'Almost nobody forecasts "disempowerment" directly.' | Matches 06 A7, B6, C(vi). |
| H5 | Fixed | data2.js: '<b>No usable repeat test</b>Only METR went back to its group (10 returning developers), and it calls the result unreliable.' | Matches 03 #8. But see N4: the surrounding "measured twice" wording is still wrong. |
| H6 | Fixed | app.js: 'about half of new web articles, and of the tracks uploaded to one music service, are classed as AI-made. Each is measured.' | |
| M1 | Fixed | 'The first links are measured repeatedly and are moving fast.' | |
| M2 | Fixed | app.js `BIG`: `work:['−13%',['jobs, ages 22–25,','exposed occupations'],…` | |
| M3 | Fixed, with a new problem | data1.js: 'it was about three-quarters in November 2025; Anthropic says it then "decreased sharply" and gives no figure.' | Tense fixed. The added quotation conflicts with 07. See N8. |
| M4 | Fixed | data1.js `chatgpt`: `tag:'company'` | |
| M5 | Fixed | data1.js deck: 'employment of 26 to 30 year olds in the same occupations has slipped 4% (the observatory\'s reading of the dashboard data)'; cohort read and Route B: 'Stanford\'s dashboard notes "modest declines for the next-youngest groups"…; it publishes no gap figure for this age group.' | |
| M6 | Fixed | '<b>Other countries see less.</b> Studies of national administrative records in Finland and Norway reportedly find no effect on young workers (known here only through a secondary summary). Danish data show no change in pay or hours for workers who adopted chatbots.' | |
| M7 | Fixed | 'Across the whole economy, the employment rate has barely moved' | |
| M8 | Fixed | 'TRACKER BLOG · UNCHECKED AGAINST FILINGS'; 'guidance for 2026 as of July (about $600bn in February)'; Yield Theory added to `src` | |
| M9 | Fixed | 'The share falling further while unemployment stays low.'; GAPS: 'None found.' | |
| M10 | Fixed, with a new problem | 'Its point estimates were 18% faster for returning developers and 4% faster for new ones, both with intervals spanning zero; METR calls them very weak evidence.' | The notes say the sign of these figures must be checked before use. See N9. |
| M11 | Fixed | 'Ended the browsing session: no AI summary' / '…: AI summary shown' | |
| M12 | Fixed | Point: 'AI experts: rapid (2050), unverified' (hollow); bar: 'AI experts, 2050: rapid AI progress (unverified)'; section heading replaced; aria: 'Forecasts range from 3.5 to 10.5 points lower by 2050.' | |
| M13 | Fixed | `{label:'False information',a:12.8,lo:8.9,hi:18.1,b:null}` | Chart prints "n/a", table "not available". |
| M14 | Fixed | "55.5% in 2025 on the forecasters' measure (the BLS series reads 52.8%)" | Small residual, see N25. |
| M15 | Fixed, with a new problem | `'forecast baseline'` and `'Baseline'` | Now wrong for the unemployment card, whose first point is the September 2026 actual. See N14. |
| L1 | Fixed | 'ten or fewer a month in 2023 and 2024' | |
| L2 | Fixed | 'in about 33 the invented material came from a judge' | |
| L3 | Fixed | '≈$0.30' → '≈$0.0004' '(about 725-fold; prices rounded)' | |
| L4 | Fixed | 'total business spending on AI is rising, not falling' | |
| L5 | Fixed | 'METR\'s 95% interval for that figure runs from about 5 to 61 hours.' | 317 and 3,634 minutes are 5.3 and 60.6 hours. |
| L6 | Fixed | 'Measured for most major models by an independent evaluator' | |
| L7 | Fixed | 'the July 2026 GPT-5.6 announcement carried no GDPval score' | |
| L8 | Fixed | 'The share of US firms using AI jumped from about 10% to 17% when the survey question changed' | |
| L9 | Fixed | 'Estimates run from 18% of firms to firms covering 78% of employment.' | |
| L10 | Fixed | 'On OpenAI\'s announced figures, ChatGPT took 8 months…' | |
| L11 | Fixed | 'Among UK undergraduates, use is close to universal' | |
| L12 | Fixed | 'Paired readings from Anthropic studies of how its agents are used.' | |
| L13 | Fixed | 'In 45% of Claude conversations the user hands the task over.' | |
| L14 | Fixed | 'One likely reason: as hundreds of millions of people take up ChatGPT…' | |
| L15 | Partly fixed | Deck: 'for 35 to 40 year olds in the exposed occupations it is up 9%'. New chart title: '…while jobs for older workers have grown' | The new title reintroduces the problem. See N10. |
| L16 | Fixed | 'peaked at 101.8 (November 2023 and again November 2024)' | Confirmed against 07. |
| L17 | Fixed | `[1,2026,7624,'via compiled report passages'],[2,2026,4680,'via compiled report passages']` | |
| L18 | Fixed | 'mostly from March to July' | |
| L19 | Fixed | 'Postings peaked in February 2022, a month before interest rates began to rise'; 'alongside a tax change' | |
| L20 | Fixed | '(a July 2026 update puts it at 0.77 against 0.85, so the difference has nearly closed)' | |
| L21 | Not fixed | 'Selected months only. Stanford\'s macro tracker finds…' | No note on January population-control revisions. See N20. |
| L22 | Fixed | 'reads the rise in capital\'s share since 2022 as the old trend continuing "without signs of abatement"' | "since 2022" is the site's addition; harmless. |
| L23 | Partly fixed | 'carry a 62% wage premium (PwC)'; 'Critics argue that ownership keeps humans powerful even if wages shrink.' | PwC added. The "Critics argue" line still has no source in the notes. See N21. |
| L24 | Fixed | 'of known capacity is in the United States; about 15% in China' | |
| L25 | Partly fixed | Claim: 'has never been tracked over time'. Elsewhere: 'No study has measured unaided ability twice.'; 'nothing measured twice'; 'Nobody has measured it twice.'; '0 … repeat tests of unaided ability' | Now a HIGH. See N4. |
| L26 | Partly fixed | Route D: 'People decline to work without AI'. metrrct read: 'the closest existing evidence that people find it hard to go back to working without AI' | "Find it hard" still implies inability. See N18. |
| L27 | Not fixed | 'Observational, 19 experienced endoscopists. …' | No mention of the published correction or that the Lancet page was not read. See N19. |
| L28 | Fixed | 'shows severe potential to distort the user\'s picture of reality'; 'little or no control over it' | |
| L29 | Partly fixed | Claim: 'AI now makes about half of new web articles and of the music uploaded to Deezer.' Tour: 'Half of new articles and music uploads are AI-made' | Deezer is now named in the claim. The tour and the map caption still generalise. See N11, N12. |
| L30 | Partly fixed | 'classed as human-written (Pangram, mid-2026)' | Reddit figure now attributed. Not flagged: 2020 trust values (derived), Graphite 1.6 (midpoint of a range), Deezer January or February, the 22% and 60% publisher figures (secondary). See N31. |
| L31 | Partly fixed | Tab: 'Reported milestones for AI in government','10 events'. Title: 'Disclosed federal AI uses went from 710 to 3,611 as reporting rules widened'. Deck: 'five times the 2023 count'. Route C: 'in two years' | See N22, N23. |
| L32 | Partly fixed | Odds sub: 'Mean probability each group gives…'; '272 experts began the study'; 'Competitive dynamics' | Fixed: means stated on the chart, 272 qualified, risk label, the "between slow and moderate" sentence removed. Not fixed: the `odds` sentences give 14% and 39% without saying they are means; superforecaster 42.4 is a single read; Consult and LEAP wave 9 facts are unflagged. See N16, N30. |
| L33 | Fixed | "3.35% in 2024 on the forecasters' measure" | Same clause still missing in the adoption "watch" line. See N26. |

---

## Part B, C, D — Findings in version 3

Exact find-and-replace strings for every HIGH and MEDIUM item are in the next section, in code blocks. The table gives the reasoning.

| # | Sev. | File | Exact current text | Problem | What the notes say | Suggested replacement |
|---|---|---|---|---|---|---|
| N1 | HIGH | charts.js line 5 (`fmtDate`) | `Math.floor((x-y)*12+1e-6)` | The fix for 08-H1 broke a different set of points. Tables and tooltips round x to 4 decimals (`+p[0].toFixed(4)`; 3 decimals in the measurement record). For any point at the exact start of Feb, May, Aug or Nov the rounded value falls just below the month boundary, and `floor` returns the month before. 65 wrong labels in charts: `canaries` and `cohort` 20 of 60 months each (the base month "Nov 2022 = 100" reads "Oct 2022"; the latest point, Aug 2026, reads "Jul 2026"); `courts` 14 of 42 months; `cuts` 5 (the record month, May 2026 = 38,579, reads "Apr 2026"; Nov 2025, Feb 2026, Aug 2026 and the Aug 2025 gap are also one month early); `macro` 3 (Nov 2022, Nov 2025, Aug 2026); `postings` 2 (the base "1 February 2020 = 100" reads "Jan 2020"); `chatbots` 1. Each table then has duplicate month rows. In the measurement record the First and Last columns are wrong for `firsts` ("Oct 2023 → Apr 2026", should be Nov 2023 → May 2026), `agents` ("Jan 2025", should be Feb 2025), `companions` ("Apr 2025", should be May 2025), `canaries` and `cohort` ("Jul 2026", should be Aug 2026). These contradict the site's own text ("38,579 in May 2026", "November 2022 = 100", "data to Aug 2026"). | 07 (ADP series runs Sep 2021 – Aug 2026, Nov 2022 = 100); 02 #9 (May 2026 = 38,579); 02 #7 (1 Feb 2020 = 100); 02 #13; 05 #11 | `Math.floor((x-y)*12+0.01)`. Tested in a sandbox against every plotted point and every record tick: 0 wrong labels in charts, 0 in the record. (The largest rounding error is 0.006 of a month; no point on the site sits later than 0.97 of the way through a month.) |
| N2 | HIGH | data2.js, `control` | `ticks:yrs(2021,2026),tip:x=>String(Math.round(x)),label:'Survey year'` | 08-H2 was not applied here. Points sit at 2021.5, 2022.5, 2023.5, 2024.5, 2025.45, 2026.48, so the table and tooltips read 2022 = 37, 2023 = 38, 2024 = 52, 2025 = 51, 2025 = 50, 2026 = 52. Four values carry the wrong year and 2025 appears twice. Contradicts the note beside the chart ("The step up came in 2023"). | 03 #21: 2021 37%, 2022 38%, 2023 52%, 2024 51%, 2025 50%, 2026 52% | `ticks:yrs(2021,2026),tip:x=>String(Math.floor(x)),label:'Survey year'` |
| N3 | HIGH | app.js, home page and Futures section 1; `fanChart` | "Workers' share of US income has already fallen further than economists expected by 2030 with moderate AI progress" (home `<h3>`); "Workers' share of income has already fallen further than economists expected by 2030 with moderate AI progress" (Futures `<h2>`); annotation 'already past the moderate\nforecast for 2030 (−1.5)' | The arithmetic is right: index × 52.8/93.446 gives a 2025 average of 54.57%, Q2 2026 is −1.77, the moderate 2030 forecast is 54.0 − 55.48 = −1.48, and the central one is −1.18. But the claim holds only for one quarter measured against the calendar-year 2025 average. On the same series the last four quarters average −0.89 (below even the central forecast of −1.2), the first half of 2026 is −1.38, the fall from Q4 2025 is −1.29, and from Q3 2025 it is −1.44. The forecast is for a year (2030), on a different measure, and the notes only give its baseline as "55.48% (2025)", not as a 2025 average. The heading states the result as fact; the caveat ("indicative") is only in the subtitle. | 06 header: labour share has "at least four different definitions… Plot each as change from its own baseline". 06 A1 and C(i): baselines and medians. 02 #14 caveats: "Labour share moves with the business cycle… Short runs are noisy." | Headings: "In the latest quarter, workers' share of US income was 1.8 points below its 2025 average. Economists expected a 1.5-point fall by 2030 with moderate AI progress". Annotation and reading note: add "one quarter" and the four-quarter figure (−0.9). Exact strings below. |
| N4 | HIGH | app.js `BIG`; data2.js `skills` (tab, title, deck, tour, levelWhy, read); data3.js `PRIORITY`, Route A | `skills:['0',['repeat tests of','unaided ability'],'repeat tests of unaided ability']`; 'Repeated measures of unaided ability','0'; 'No study has measured unaided ability twice.'; 'No study has tested the same people\'s unaided ability more than once'; 'Nobody has measured it twice.'; 'nothing measured twice'; 'Five studies exist; each measured its group once.'; 'Every study in the list is a different group measured once' | The headline "0" is contradicted three ways. (1) The notes record PIAAC and NAEP as repeated tests of unaided ability; the site omits them. (2) The site's own colonoscopy chart is the same 19 doctors' unaided detection rate before and after AI. (3) METR re-ran its trial with 10 of the same developers. The site's measurement record also shows 2 "direct" observations in a lane named "Repeated measures of unaided ability". What the notes do support is narrower: no panel re-tests the same people without AI at regular intervals, and no erosion study has a second wave. | 03 #24: PIAAC and NAEP "are the only repeated, objective, population-level measures of unaided ability" (not attributable to AI). 03 #1: before/after design, 19 endoscopists. 03 #8: "repeated once". 03 "nobody measures": "No panel tests the same workers, students or clinicians without AI at regular intervals. Not one erosion study has a second wave." | Reword every instance to the panel claim: '0 … panels tracking unaided ability'; 'No panel re-tests the same people without AI.' Add one sentence to the deck on the clinical study and on PIAAC and NAEP. Exact strings below. |
| N5 | MEDIUM | app.js, home, note under the measurement record | 'Skills has seven readings, each from a study done once.' | The count is right (7: `lopsided` 2, `bastani` 1, `metrrct` 2, `budzyn` 1, `whos` 1). "Each from a study done once" is not: two of the seven are the two rounds of the METR trial (`obs:[ym(2025,4),ym(2025,10)]`). The seven readings come from six studies. | 03 #8: "cadence: repeated once (two rounds, but METR says the second is not comparable)" | 'Skills has seven readings from six studies. Only one study was run a second time, and its authors call that round unreliable.' |
| N6 | MEDIUM | app.js `recordData`; data2.js `lopsided` and `chatbots` | `name:d.tab[0]` with `tab:['Repeated measures of unaided ability','0',…]`,`rec:'d',obs:[ym(2023,9),ym(2026,1)]` and `tab:['People using AI chatbots for news each week','10%',…]`,`rec:'d'` | Two lanes in the measurement record are named for something other than their ticks. (a) "Repeated measures of unaided ability" shows 2 direct observations (the 2023 consultants study and the 2026 engineers study), while its own tab value is 0. (b) "People using AI chatbots for news each week" shows 7 direct observations from Nov 2023 to Jul 2026, but those ticks are OpenAI's weekly-user announcements; the news measure has two readings (2025, 2026) that are not plotted. A user count is also hard to defend as "measures the link itself" for culture: 04 says it "says nothing about what share of a person's reading or thinking passes through the tool". | 04 #9 caveats; 04 #10 (7% in 2025, 10% in 2026); 03 #12 and #4 | Let a lane carry its own name (`d.recName`), name these two lanes for what the ticks are, and class the user counts as nearby. Exact strings below. Culture then shows 33 direct and 14 nearby. |
| N7 | MEDIUM | app.js, home | 'Direct measurement thins out along the chain, then stops' | Contradicted by the chart's own totals. Direct observations by row: Capability 35, Adoption 31, Hand-over 13, Entry-level work 123, Workers' share 0, Skills 7, Culture 40, Institutions 0, Human influence 0. Entry-level work is the densest row and Culture has more direct ticks than Capability. | Counted from the site's own data (412 observations, 249 direct) | 'Direct measurement is uneven along the chain, and stops before the end' |
| N8 | MEDIUM | data1.js, `handover` deck | 'Anthropic says it then "decreased sharply" and gives no figure.' | The quotation comes from note 01. The primary check in 07 records different wording for the same report, and 07 wins on conflict. The site's own chart annotation already uses the 07 wording ("increased slightly"). | 07: 'March 2026 report: augmentation "increased slightly in both Claude.ai and API traffic" — no figure in text.' 01 (weaker): 'Enterprise / 1P API automation: "decreased sharply"; no number in text' | 'the March 2026 report says augmentation then "increased slightly" in business traffic too, and gives no figure.' |
| N9 | MEDIUM | data2.js, `metrrct` read | 'Its point estimates were 18% faster for returning developers and 4% faster for new ones, both with intervals spanning zero; METR calls them very weak evidence.' | Stated as fact. The notes flag the direction of these two figures as unconfirmed. If the sign is the other way round the sentence says the opposite of the truth. | 03 #8: "CHECK THE SIGN of the follow-up figures before charting. METR reports them as 'speedup' estimates of −18% and −4%; my reading is that negative means less time, i.e. faster, but confirm against the post." Repeated in 03 "Unverified". | Keep the figures, say they are as read, and say the direction was not re-checked. Exact string below. Better: open the METR post and confirm, then drop the hedge. |
| N10 | MEDIUM | data1.js, `canaries` title | 'jobs for the youngest workers have fallen since late 2022 while jobs for older workers have grown' | New title. The series plotted is ages 35–40 only. The next tab on the same page says "Jobs for 26 to 30 year olds in the most exposed occupations have started to fall" (−4%). 08-L15 fixed this in the deck; the title brings it back. | 07: Ages 26–30, quintile 5, 96.2 in Aug 2026; Ages 35–40, quintile 5, 108.6. 02 #1: "every older age group had grown" refers to the whole sample, not the most exposed fifth. | '…while jobs for 35 to 40 year olds have grown' |
| N11 | LOW | app.js `BIG` | `culture:['≈50%',['of new web articles','are AI-written'],'of new web articles are AI-written']` | Map caption drops "mostly" and "classed as". The indicator itself says "mostly AI-written"; another study on the same page finds 2.5% of new pages purely AI. English-language, schema-marked articles, vendor detectors. | 04 #1, #3 | `culture:['≈50%',['of new web articles','are mostly AI-written'],'of new English web articles are classed as mostly AI-written']` |
| N12 | LOW | data2.js `culture` claim and tour | 'AI now makes about half of new web articles and of the music uploaded to Deezer.'; 'Half of new articles and music uploads are AI-made, though people mostly are not reading or listening to them yet.' | "AI makes" and "are AI-made" state detector classifications as fact; the tour drops Deezer. | 04 (b): "are classed as AI-generated"; "one music service" | Claim: 'About half of new web articles, and of the music uploaded to Deezer, are now classed as AI-made. So far, people read and listen to little of it.' Tour: 'Machines write and filter. About half of new web articles, and of the music uploaded to Deezer, are classed as AI-made, though people mostly are not reading or listening to them yet.' |
| N13 | LOW | app.js, home, "Dark" | 'Nobody measures these, and they are the links that decide whether hand-over becomes disempowerment.' | The first of the three ("Whether people can still do their work unaided") has five one-off studies on the site's own Skills page, which is rated one bar, not zero. | 03 summary: "Every erosion study is a single snapshot" | 'Nobody tracks these, and they are the links that decide whether hand-over becomes disempowerment.' |
| N14 | LOW | app.js, Futures section 2 note; `drawWorld` | "The first point of each line is the forecasters' baseline, not the latest reading." | False for the unemployment card: its first point is `base:[2026.7,4.2,'4.2% in Sep 2026']`, the latest actual, published after the survey closed (Oct 2025 – Feb 2026). The card prints "Baseline: 4.2% in Sep 2026" and the point note "forecast baseline". | 06 A3: baseline column "4.2% (Sep 2026)" is the note-taker's latest actual; survey made Oct 2025 – Feb 2026 | "The first point of each line is the forecasters' baseline, not the latest reading, except for unemployment, which starts from the September 2026 figure." |
| N15 | LOW | data3.js `WORLDS.rapid.take` | "What changes is that labour-force participation falls to 55% and workers' share of income falls by 10 points. In their view people leave the workforce and are not counted as unemployed." | (a) 45.0 − 55.48 is −10.5; the site says 10.5 everywhere else. (b) No date: these are 2050 values (2030: 59.3% and −3.5). (c) "In their view" attributes to economists an inference drawn from their medians. | 06 A1, A2; 06 D: the inference is the note-taker's summary | "What changes is that by 2050 labour-force participation falls to 55% and workers' share of income falls by 10.5 points. Their numbers imply that people leave the workforce and are not counted as unemployed." |
| N16 | LOW | data3.js `WORLDS` odds | 'Economists give this a 39% chance; the AI expert panel 26%.'; 'Economists give this a 14% chance; the AI expert panel 23%.' | These are means. The economists' median for rapid is 10%. The chart subtitle says "mean"; these sentences, shown beside the scenario buttons, do not. | 06 A6: "(means)"; "economists' median for rapid 10% (IQR 6.7–20%)" | 'Economists give this a 39% chance on average; the AI expert panel 26%.'; 'Economists give this a 14% chance on average (their median is 10%); the AI expert panel 23%.' |
| N17 | LOW | app.js `drawOdds` and odds subtitle | `label:x.toFixed(1)+'%'`; 'Mean probability each group gives to three descriptions of AI in 2030.' | LEAP values are published as whole numbers (26, 52, 23) and print as "26.0%", "52.0%", "23.0%". The notes do not say the LEAP figures are means ("wave reports mostly give medians"). Superforecasters' 42.4 is a single read. | 06 A6; 06 B2 | `label:(o.tag?String(x):x.toFixed(1))+'%'`; subtitle: 'Probability each group gives to three descriptions of AI in 2030: means for economists, superforecasters and the public; the expert panel figures are as published.' |
| N18 | LOW | data2.js `metrrct` read | 'That reluctance is the closest existing evidence that people find it hard to go back to working without AI.' | "Find it hard" implies inability. The notes describe unwillingness. (08-L26, partly fixed.) | 03 #8: "people not wanting to take a task back… not a measured rate of lost ability" | 'That reluctance is the closest existing evidence that people do not want to go back to working without AI. It is not a measure of lost ability.' |
| N19 | LOW | data2.js `budzyn` title and read | 'In the one real-world clinical study, doctors found fewer growths unaided…'; 'Observational, 19 experienced endoscopists. …' | (a) "The one" is stated as fact; the notes say replications were not searched for. (b) Still no mention that a correction was published (content unknown) or that the Lancet page itself was not read. (08-L27, not fixed.) | 03 #1: "Treat 'no replication found' as 'not checked'"; correction "I could not open it"; "The Lancet page itself returned 403" | Title: 'In the only real-world clinical study identified, doctors detected fewer growths unaided after months of working with AI'. Read, first sentence: 'Observational, 19 experienced endoscopists. Figures are from the abstract and the press release; the journal has published a correction that was not read for this draft.' |
| N20 | LOW | data1.js `macro` read | 'Selected months only. Stanford\'s macro tracker…' | 08-L21 not fixed: no note that January population-control revisions make participation levels not strictly comparable across years. | 02 #13: "Worth a note on the chart." | 'Selected months only. BLS revises its population estimates each January, so levels are not strictly comparable across years. Stanford\'s macro tracker…' |
| N21 | LOW | data2.js `share` sceptic and unmeasured | '<b>Capital still belongs to people.</b> Critics argue that ownership keeps humans powerful even if wages shrink.'; "AI capital's share of GDP: named in the original paper, computed by nobody." | Neither statement has any basis in notes 01–07. "Computed by nobody" is an absolute claim. (First is 08-L23, not fixed.) | Not in 01–07 | Add a named source for the first, or cut it. Second: "AI capital's share of GDP: no published estimate was found." |
| N22 | LOW | data2.js `institutions` deck; data3.js Route C | 'US federal agencies reported 3,611 AI use cases for 2025, five times the 2023 count, of which 445 are classed as high-impact.'; 'US federal use cases went from 710 to 3,611 in two years.' | The 710 is a secondary count under narrower rules; the chart title now says so, these two places do not. The span is two inventory rounds ending April 2026, not two years. | 05 #1: 710 "as cited by FedScoop"; "The count grows partly because the rules changed" | Deck: 'US federal agencies reported 3,611 AI use cases for 2025, of which 445 are classed as high-impact. That is five times the 710 reported for 2023, when the rules were narrower.' Route C: 'US federal use cases went from 710 to 3,611 over two inventory rounds, as reporting rules widened.' |
| N23 | LOW | data2.js `firsts` sub | 'Reported events, most of them first instances of AI being given a formal role in lawmaking, administration or justice.' | At most three or four of the ten are a formal role (UAE office, Consult, Diella, arguably Porto Alegre). The rest are a disputed report, a stated goal, two survey or usage statistics, a disclosure count and a regulatory delay. The note under the chart already says so. | 05 (b) timeline | 'Reported events: first uses, stated goals, surveys and disclosures of AI in lawmaking, administration, justice and the military.' |
| N24 | LOW | data1.js `capability` watch | 'A panel of AI experts (LEAP) expected 3.4 to 3.5 hours by the end of 2026; the April 2026 reading was already 3.1 hours.' | 3.5 hours is the superforecasters' median, not the experts'. The survey ran 20 Apr – 11 May 2026, after the 3.1-hour reading was public. | 06 A6: "3.4 hrs (experts); 3.5 hrs (SF)"; LEAP wave 8 dates | 'In a spring 2026 survey (LEAP), AI experts expected 3.4 hours and superforecasters 3.5 hours by the end of 2026; the April 2026 reading was already 3.1 hours.' |
| N25 | LOW | data3.js `MINIS` share base; Route A anchor | "(the BLS series reads 52.8%)"; '(55.5% in 2025 on the forecasters\' measure; the BLS series reads 52.8%)' | Sets a 2025 figure beside an undated Q2 2026 figure, which makes the two measures look 2.7 points apart. On the site's own scaling the BLS series averaged 54.6% in 2025. | 02 #14: 52.8% is 2026 Q2 | "(the BLS series read 52.8% in Q2 2026)" in both places |
| N26 | LOW | data1.js `adoption` watch | 'Share of work hours done with AI: economists\' median forecast is 10% by 2030 and 40% by 2050, from 3.35% in 2024.' | Same page gives 5.7% for August 2025 from another source. 08-L33 fixed this on the Futures card only. | 06 A2; 01 St. Louis Fed | '…from 3.35% in 2024 on the measure they were given (the St. Louis Fed survey reads 5.7% for August 2025).' |
| N27 | LOW | app.js Futures | 'Unemployment forecasts stay in single digits, except for graduates' | The same chart shows a 10–20% bar (Amodei). It is labelled an individual claim, but the heading says "forecasts". | 06 A3, C(iii) | 'Survey forecasts of unemployment stay in single digits, except for graduates' |
| N28 | LOW | app.js `fanChart` aria | 'Observed: about two points higher in 2012, 1.8 points lower by mid-2026.' | 2012 quarters are +1.5, +1.3, +1.1, +2.6 on the site's scaling. | Recomputed from `LS_Q` | 'Observed: about 1.5 points higher in 2012, 1.8 points lower by mid-2026.' |
| N29 | LOW | app.js evidence index kicker | `${R.n.toLocaleString('en-GB')} observations</span>` | Prints "412 observations" with no qualifier. The count covers 2019 onwards only, one tick per date per indicator, and excludes the figures shown as tiles. The home page states the 2019 limit; this line does not. | Counted from the site's data: 412 (249 direct) | `${R.n.toLocaleString('en-GB')} dated readings since 2019</span>` |
| N30 | LOW | data2.js, data3.js (unflagged secondary or unchecked items, 08-L32 residue) | 'The UK\'s "Consult" tool processed over 50,000 consultation responses in about two hours (October 2025).'; 'expert panellists\' median year for governments restricting AI model releases is 2030'; `v:[45.0,42.4,12.6]` | Consult figures are secondary (trade press relaying a government evaluation). The LEAP wave 9 question wording was not checked. Superforecasters' 42.4 is a single read. None is flagged. | 05 #9: "SECONDARY for Consult"; 06 A7: "wording of question not checked"; 06 A6: "SF moderate = single read" | Add 'according to trade-press reports' to the Consult line and '(question wording not checked)' to the LEAP line. |
| N31 | LOW | data2.js `search` read; `trust` read; `deezer`; `articles` (08-L30 residue) | 'Large publishers lost far less traffic (22%) than small ones (60%).'; 'The set of markets changes between years.' | The 22% and 60% are third-hand (Chartbeat via Axios via Search Engine Journal). The 2020 trust and worry values are derived from the 2021 report. The first Deezer point is dated February by one source. Graphite's 1.6 is the middle of a 1.4–1.8 range. | 04 #8, #19, #15, #1 | Search: 'Large publishers lost far less search traffic (22%) than small ones (60%), according to press reports of Chartbeat data.' Trust: 'The set of markets changes between years, and the 2020 values are derived from the changes stated in the 2021 report.' |
| N32 | LOW | data2.js `lopsided` sub | 'Three repeated surveys of AI use, set beside the five studies found on what AI use does to unaided ability.' | "The five studies found" is not accurate: the notes list more (for example the MIT EEG study, the critical-thinking survey), the site has a sixth on the same page, and the note under the chart says two of the five do not measure unaided ability. | 03 A and B | 'Three repeated surveys of AI use, set beside five one-off studies of what AI use does to ability.' |
| N33 | LOW | data2.js `lopsided` source | 'Shen & Tamkin, How AI assistance impacts the formation of coding skills (Anthropic, Jan 2026)' | Title differs from the notes. | 03 #4: "How AI Impacts Skill Formation" | 'Shen & Tamkin, How AI Impacts Skill Formation (Anthropic, Jan 2026)' |
| N34 | LOW | data3.js `TRACK` item 1 and `FUT_SRC` | 'In 2022, superforecasters gave a 2.3% chance, and experts an 8.6% chance…' | The 2.3% and 8.6% come from FRI's September 2025 near-term accuracy review, which is not in the source list. Only the September 2026 review is cited. | 06 E, third bullet: https://forecastingresearch.org/near-term-xpt-accuracy | Add to `FUT_SRC`: `['Forecasting Research Institute, Assessing near-term accuracy in the XPT (Sep 2025)','https://forecastingresearch.org/near-term-xpt-accuracy'],` |
| N35 | LOW | data3.js `GAPS`, work row | 'Stanford and ADP: by age and occupation, not by firm adoption.' | The notes do record one firm-adoption result, though only second-hand. | 02 #10 counter-evidence: Hosseini & Lichtinger (2026), junior employment 8–10% lower in adopting firms after two years (SECONDARY, not read directly) | 'Stanford and ADP: by age and occupation, not by firm adoption. One 2026 paper, known here only through a secondary summary, reports junior employment 8 to 10% lower in adopting firms after two years.' |
| N36 | LOW | data2.js `tax` title | "The state still depends on people's pay" | Individual income tax includes capital gains and business income; the note beside the chart says so. | 05 #17 caveats | "The state still depends on taxes on people's incomes and payrolls" |
| N37 | LOW | data1.js `gallup` read | 'Daily use is the best available proxy for dependence.' | The observatory's judgement stated as fact. The notes say only that daily use shows depth of use. | 01 Gallup caveats: "The daily line is the one to watch" | 'Daily use is the nearest available measure of how deep use goes; it does not measure dependence.' |
| N38 | LOW | app.js, home, "Solid" | 'These are measured repeatedly by bodies with no stake in the answer.' | Overstated. The notes call METR "an independent evaluator", not a body with no stake. | 01 headline-chart note | 'These are measured repeatedly by bodies independent of the AI developers.' |
| N39 | LOW | app.js `BIG` | `capability:['≈12 h',['tasks finished','half the time'],…` | The map caption drops "software". The same figure has a 95% interval of 5 to 61 hours. | 07 METR; 01 caveats: "Software engineering, ML and cybersecurity tasks only" | `capability:['≈12 h',['software tasks','done half the time'],'software tasks finished half the time'],` |
| N40 | LOW | data2.js, data1.js (dates shown for annual and quarterly points); record ticks | `[2021.5,7.7]` (EU), `[2025.125,49.6]` (Graphite), inventory `[2025,3611,'as of 13 Apr 2026'…]`, tax `[2025,84.1…]` | Annual and quarterly values use the monthly date format, so tables read "Jul 2021" for EU 2021 and "Feb 2025" for Graphite's Q1 2025. In the measurement record, annual series are ticked at 1 January of their label year: the 2025 inventory (as of April 2026) and fiscal 2025 (ended September 2025) both sit at January 2025, which understates how recent they are. | 01 Eurostat (annual); 04 #1 (quarters); 05 #1, #17 | Give these charts a year or quarter tip (`tip:x=>String(Math.floor(x))`, `tip:fmtQ`), and give `inventory` and `tax` an `obs` array at their as-of dates. |

---

## Find-and-replace strings for HIGH and MEDIUM items

Each OLD string occurs exactly once in the named file (checked).

### N1 — charts.js
```
OLD: Math.floor((x-y)*12+1e-6)
NEW: Math.floor((x-y)*12+0.01)
```

### N2 — data2.js
```
OLD: ticks:yrs(2021,2026),tip:x=>String(Math.round(x)),label:'Survey year'
NEW: ticks:yrs(2021,2026),tip:x=>String(Math.floor(x)),label:'Survey year'
```

### N3 — app.js (four edits)
```
OLD: <h3>Workers' share of US income has already fallen further than economists expected by 2030 with moderate AI progress</h3>
NEW: <h3>In the latest quarter, workers' share of US income was 1.8 points below its 2025 average. Economists expected a 1.5-point fall by 2030 with moderate AI progress</h3>
```
```
OLD: <h2 class="h-m">Workers' share of income has already fallen further than economists expected by 2030 with moderate AI progress</h2>
NEW: <h2 class="h-m">In the latest quarter, workers' share of income was 1.8 points below its 2025 average. Economists expected a 1.5-point fall by 2030 with moderate AI progress</h2>
```
```
OLD: text:compact?'Q2 2026: −1.8\nalready past the moderate\nforecast for 2030 (−1.5)':'Observed, Q2 2026: −1.8\nalready past the moderate\nforecast for 2030 (−1.5)'
NEW: text:compact?'Q2 2026: −1.8 (one quarter)\nmoderate forecast for 2030: −1.5\nlast four quarters: −0.9':'Observed, Q2 2026: −1.8 (one quarter)\nmoderate forecast for 2030: −1.5\nlast four quarters: −0.9'
```
```
OLD: On that measure the share is 1.8 points below its 2025 average. Economists expected a fall of 1.2 points by 2030 on their central view, and 1.5 with moderate AI progress.
NEW: On that measure the share in Q2 2026 is 1.8 points below its 2025 average. Economists expected a fall of 1.2 points by 2030 on their central view, and 1.5 with moderate AI progress. One quarter is noisy: averaged over the last four quarters the fall is 0.9 points, and measured from the last quarter of 2025 it is 1.3.
```

### N4 — app.js, data2.js, data3.js (nine edits)
app.js:
```
OLD: skills:['0',['repeat tests of','unaided ability'],'repeat tests of unaided ability'],
NEW: skills:['0',['panels tracking','unaided ability'],'panels tracking unaided ability as AI use grows'],
```
data2.js:
```
OLD: tab:['Repeated measures of unaided ability','0','against quarterly surveys of use']
NEW: tab:['Panels re-testing the same people without AI','0','against quarterly surveys of use']
```
```
OLD: title:'Surveys track AI use every quarter. No study has measured unaided ability twice.',
NEW: title:'Surveys track AI use every quarter. No panel re-tests the same people without AI.',
```
```
OLD: No study has tested the same people\'s unaided ability more than once, so there is no trend to show.
NEW: No panel re-tests the same people without AI, so there is no trend to show. The clinical study compares one period before AI with one after, and the long-running literacy and numeracy tests (PIAAC, NAEP) cannot be tied to AI.
```
```
OLD: A few one-off experiments point to lost learning. Nobody has measured it twice.
NEW: A few one-off experiments point to lost learning. Nobody tracks it over time.
```
```
OLD: levelWhy:'One-off studies; nothing measured twice',
NEW: levelWhy:'One-off studies; nothing tracked over time',
```
```
OLD: Every study in the list is a different group measured once, over minutes to a few months.
NEW: Every study in the list is a different group, studied once over minutes to a few months.
```
data3.js:
```
OLD: Five studies exist; each measured its group once.
NEW: Five one-off studies exist; none follows its group over time.
```
```
OLD: ['unm','Unaided skills hold up in repeated tests','No repeated test exists.']
NEW: ['unm','Unaided skills hold up in repeated tests','No repeated test of AI users exists.']
```

### N5 — app.js
```
OLD: Skills has seven readings, each from a study done once.
NEW: Skills has seven readings from six studies. Only one study was run a second time, and its authors call that round unreliable.
```

### N6 — app.js and data2.js (three edits)
app.js:
```
OLD: return {id:d.id,name:d.tab[0],kind:d.rec,xs}
NEW: return {id:d.id,name:d.recName||d.tab[0],kind:d.rec,xs}
```
data2.js:
```
OLD: tag:'primary',rec:'d',obs:[ym(2023,9),ym(2026,1)],wide:true,
NEW: tag:'primary',rec:'d',recName:'One-off studies: consultants (2023), engineers (2026)',obs:[ym(2023,9),ym(2026,1)],wide:true,
```
```
OLD: tab:['People using AI chatbots for news each week','10%','Reuters Institute · 2026'],tag:'secondary',rec:'d',
NEW: tab:['People using AI chatbots for news each week','10%','Reuters Institute · 2026'],tag:'secondary',rec:'p',recName:'ChatGPT weekly users (company announcements)',
```

### N7 — app.js
```
OLD: <h2 class="h-l">Direct measurement thins out along the chain, then stops</h2>
NEW: <h2 class="h-l">Direct measurement is uneven along the chain, and stops before the end</h2>
```

### N8 — data1.js
```
OLD: it was about three-quarters in November 2025; Anthropic says it then "decreased sharply" and gives no figure.
NEW: it was about three-quarters in November 2025; the March 2026 report says augmentation then "increased slightly" in business traffic too, and gives no figure.
```

### N9 — data2.js
```
OLD: Its point estimates were 18% faster for returning developers and 4% faster for new ones, both with intervals spanning zero; METR calls them very weak evidence.
NEW: As read from the METR post, its point estimates were 18% faster for returning developers and 4% faster for new ones, both with intervals spanning zero; METR calls them very weak evidence. The direction of these two figures has not been re-checked for this draft.
```

### N10 — data1.js
```
OLD: jobs for the youngest workers have fallen since late 2022 while jobs for older workers have grown',
NEW: jobs for the youngest workers have fallen since late 2022 while jobs for 35 to 40 year olds have grown',
```

---

## Checked and correct

Requested checks:

- **`BIG` values.** '≈12 h' (719 minutes, Claude Opus 4.6, Feb 2026); '52%' (Gallup Q2 2026, at least a few times a year); '45%' (Claude.ai, Nov 2025, verbatim in 07); '−13%' (87.2 against 100, most exposed fifth, ages 22–25); '52.8%' (BLS, Q2 2026, series low since 1947); institutions '0' (05: "no series anywhere … measures how many decisions AI makes"). Skills '0' and culture caption: see N4, N11.
- **Home page.** Hero deck; "Solid" figures; "Contested" (as rewritten for 08-H6); "Entry-level work is tracked monthly"; "Workers' share and Institutions have only grey ticks" (every indicator in both links is `rec:'p'`); "Skills has seven readings" (count is 7; the rest of the sentence is N5). Finding texts and thumbnail values 1 to 5.
- **`obs` dates.** Every `obs` array matches the dates in its own indicator's text: `price`, `agents`, `chatgpt`, `grads`, `compute`, `lopsided`, `bastani`, `metrrct`, `budzyn`, `whos`, `search`, `companions`, `firsts` (10 events, 10 dates).
- **`rec` labels.** No `'p'` label is indefensible. `'d'` labels that rest on judgement but can be defended: `price`, `code`, `whos`, `metrrct`, `canaries` (cause disputed). The one that cannot be defended as plotted is `chatbots` (N6).
- **`fanChart` arithmetic.** Scale 52.8 / 93.446 = 0.56503; 2025 average 54.57%; Q2 2026 −1.77; slow −0.48 / −3.48; moderate −1.48 / −5.48; rapid −3.48 / −10.48; central −1.18 / −5.48; AI experts −15.48 (hollow, flagged); LEAP −2.3 / −7.3 from a 2024 baseline; Anthropic −0.6 / −3.9 / −14.8. `LS_Q` has 106 quarters, matches 02 #14 at every listed date, five straight quarterly falls. The claim built on it: N3.
- **`WORLDS`, `ODDS`, `MINIS`.** Every number matches 06: odds 38.6 / 47.4 / 14.0, 45.0 / 42.4 / 12.6, 40.8 / 41.0 / 18.1, 26 / 52 / 23; hours 3.35 → 8.0 / 25.0, 10.1 / 40.0, 24.2 / 62.0; share 55.48 → 55.0 / 52.0, 54.3 / 50.0, 52.0 / 45.0; participation 62.6 → 61.5 / 59.2, 61.0 / 58.3, 59.3 / 55.0 with ranges 56.9–65.2, 53.1–64.4, 44.8–64.7; unemployment 5 / 5, 5 / 5, 6 / 6; wealth 71.2 → 72 / 75 (LEAP, flagged), 73.2 / 75.0, 75.0 / 80.0. Slow and central `take` sentences are right; rapid: N15.
- **Futures bars and Delphi.** 4.2%; 5.0%; 6.0%; 8.0% (hollow, flagged); 10–20% (Amodei, May 2025, flagged as an individual claim); new row 5.6% (New York Fed, Q2 2026, ages 22–27, PRIMARY in 02 #5); Metaculus 10%. Delphi: 21.5 [16.9–26.4] → 12; 21.0 [15.1–27.5] → 12; 18.0 [12.1–24.8] → 11; 16.6 [12.0–21.6] → 7; 12.8 [8.9–18.1] → not shown. "272 experts began the study"; "$100bn, a low bar".
- **Track-record table.** All five rows match 06 E and A7 (2.3% and 8.6%; 7.3% against about 2.5%; 47% and "a decade or two"; 2060 to 2047 and a factor of two; median 10%).
- **`PRIORITY` and `GAPS`.** 14 rows, heading says fourteen; the three priority names match their rows; all "nearest thing" entries match the notes except N35; 292-person experiment, 73% human in the loop, 5.7% of hours, 57% little or no control. PRIORITY item 2: see N4.
- **Reworded titles and notes.** "Automation rose to 49% of conversations in August 2025, then eased to 45%" (49% is implied by the January 2026 report, and the point note says so); "Disclosed federal AI uses went from 710 to 3,611 as reporting rules widened"; METR read note "about 5 to 61 hours" and "about 70 minutes" at 80%; `metrrct` tab '19% slower' / 'they believed 20% faster'; "Most of the fall in software postings came before ChatGPT" (53% of the peak-to-trough fall); "Seven tech firms held just over a third" (34.6%); "One in ten US workers belongs to a union, half the share of 1983" (10.0% against 20.1%); "For two years an NGO found more…" (Feb 2023 to Jan 2025); "Courts now catch AI-invented citations in more than 100 decisions a month".

Data arrays, re-checked by script or by eye:

- **METR**: all 26 rows match 07 (date, 50% and 80% values, frontier flag). **ADP**: all four series match 07 exactly; 26–30 peak 101.8 in Nov 2023 and Nov 2024.
- **Gallup, St. Louis Fed, Census, Eurostat, HEPI, Pew teens, GDPval, price, Anthropic split and agent figures, Google code, ChatGPT intent**: all values and dates.
- **BLS macro, Challenger (sums to 120,136), Indeed, Census graduates, New York Fed, Anthropic job-finding, EIG 0.30 / 0.94 and 0.77 / 0.85.**
- **Magnificent Seven, union series, Epoch 40% → 80%, 75% / 15%, 25%; capex ≈$400bn, $720–745bn, $600bn.**
- **Skills studies**: Bastani +48 / +127 / −17 / about 0; METR 24 / 20 / 19, 16 developers, 246 tasks, 10 returning developers, 30 to 50%; Budzyń 28.4 (795), 22.4 (648), 25.3; Shen & Tamkin 50 against 67, 65% or more; Dell'Acqua 19 points, 758; "Who's in Charge?" 1 in 1,300, 1 in 2,100, 1 in 6,000, 1 in 50 to 70.
- **Culture**: Deezer uploads and stream shares, 85% fraud; Graphite and all 16 Originality.ai values; Pew search 15 / 8 / 1 / 16 / 26 and 18%; Chartbeat −33%; Similarweb 56% → 69%; Reuters Institute 7% → 10% and 1%; EBU "almost half"; companion figures 72 / 64 / 52 / 16 / 12 / 9, AP-NORC 16%, 80%; trust and worry series; Gallup 72% → 28%; LEAP 15% and 30%.
- **Institutions**: 710 / 2,133 / 3,611, 351 / 445, 1,757, 1,818; ATRS 6 / 23 / 59 / 70 / 152 and PLP 41 / 55 / "over 50"; tax 85.3 / 84.1 / 84.1; all ten timeline entries; Pew 59 → 57, 55 → 61, 44%; `COURT` sums to 2,136 with a peak of 182 in March 2026.
- **Counts stated on the site**: 8 links, 38 indicators (all 38 have a `rec` flag), 9 tour stops, 5 findings, 4 routes, 14 gaps, 10 milestones, 5 listed studies. Measurement record as built: 412 observations, 249 direct (Capability 35, Adoption 31, Hand-over 13, Entry-level work 123 direct and 39 nearby, Workers' share 47 nearby, Skills 7, Culture 40 direct and 7 nearby, Institutions 70 nearby).
