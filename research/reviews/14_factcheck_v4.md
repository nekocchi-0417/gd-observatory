# 14 — Fact-check of site version 4 against the research notes (3 Oct 2026)

Scope: `site/src/data1.js`, `data2.js`, `data3.js`, `app.js`, `charts.js`. Ground truth: notes 01–07 (07 wins on conflict). The court total (2,137) and the `COURT` array are taken as correct, as in reports 08 and 12.

Method: read every source file and every note in full. Compared the current source with `src_v3_backup` token by token to find everything new or reworded. Ran the site's data and chart code in a sandbox to rebuild the measurement record, to compare every plotted date with the label its table shows, and to recompute the workers'-share arithmetic from `LS_Q`. Tested the code fixes proposed below on a scratch copy. No site file was edited. Nothing was fetched from the web.

**Counts for version 4: 1 HIGH, 9 MEDIUM, 27 LOW.**

Status of the 40 items in report 12: 33 fixed, 1 fixed with a new problem (N3), 5 partly fixed (N5, N6, N30, N31, N40), 1 not fixed (N36).

Every OLD string in this report occurs exactly once in the named file (checked by script).

---

## Part A — Status of N1 to N40

| # | Status | Current text (quoted) | Comment |
|---|---|---|---|
| N1 | Fixed | charts.js: `Math.floor((x-y)*12+0.01)` | Sandbox: 0 wrong month labels across all 26 charts. Record reads "Sep 2021 → Aug 2026" for both ADP lanes, "Nov 2023 → May 2026" for milestones. |
| N2 | Fixed | data2.js: `tip:x=>String(Math.floor(x)),label:'Survey year'` | Table now reads 2021 = 37, 2022 = 38, 2023 = 52, 2024 = 51, 2025 = 50, 2026 = 52. |
| N3 | **Fixed, with a new problem** | "In the latest quarter, workers' share of US income was 1.8 points below its 2025 average. Economists expected a 1.5-point fall by 2030." Annotation: 'Q2 2026: −1.8 (one quarter)\nlast four quarters: −0.9\nmoderate forecast for 2030: −1.5' | One-quarter caveat, the −0.9 and the reading note are all in. But the heading dropped "with moderate AI progress". See V1. |
| N4 | Fixed | `skills:['0',['panels tracking','unaided ability'],…]`; 'Panels re-testing people without AI'; 'No panel re-tests the same people without AI.'; 'Nobody tracks it over time.'; 'One-off studies; nothing tracked over time'; 'Five one-off studies exist; none follows its group over time.'; 'No repeated test of AI users exists.' | One residue in the panel heading, see L15. |
| N5 | **Partly fixed** | 'Skills has only single studies.' | The old sentence is gone. The new one is still not right. See V10. |
| N6 | **Partly fixed** | app.js: `name:d.recName||d.tab[0],full:d.tab[0],kind:d.rec`; data2.js: `recName:'Consultants; engineers'`; `rec:'p',recName:'ChatGPT weekly users'` | Lane labels on the chart are fixed and the user counts are now "nearby". The tooltip and the data table still use the tab label. See V3. |
| N7 | Fixed | 'Direct readings cover most of the chain. They stop at institutions and human influence.' | Matches the chart: direct readings by row are 29, 31, 13, 123, 22, 6, 33, 0, 0. |
| N8 | Fixed | 'the March 2026 report says augmentation then "increased slightly" in business traffic too, and gives no figure.' | Matches 07. |
| N9 | Fixed | "As read from METR's post, its point estimates were 18% faster … The direction of those two figures has not been re-checked for this draft." | |
| N10 | Fixed | '…while jobs for 35 to 40 year olds have grown' | |
| N11 | Fixed | `culture:['≈50%',['of new web articles','classed as mostly AI'],'of new English web articles are classed as mostly AI-written']` | |
| N12 | Fixed | 'About half of new web articles, and of the music uploaded to Deezer, are now classed as AI-made. So far, people read and listen to little of it.' | |
| N13 | Fixed | 'Nobody tracks these, and they are the links that decide…' | |
| N14 | Fixed | "…not the latest reading, except for unemployment, which starts from the September 2026 figure." Card label 'Latest'; point note 'latest reading'. | The hover label still says "Baseline", see L20. |
| N15 | Fixed | "by 2050 labour-force participation falls to 55% and workers' share of income falls by 10.5 points. Their numbers imply that…" | |
| N16 | Fixed | '39% chance on average'; '14% chance on average (their median is 10%)' | |
| N17 | Fixed | `label:(o.tag?String(x):x.toFixed(1))+'%'`; subtitle 'means for economists, superforecasters and the public … the AI expert panel\'s figures are as published' | |
| N18 | Fixed | 'people do not want to go back to working without AI. It is not a measure of lost ability.' | |
| N19 | Fixed | 'In the only real-world clinical study identified, doctors detected fewer growths…'; 'Figures are from the abstract and the press release; the journal has published a correction that was not read for this draft.' | |
| N20 | Fixed | 'BLS revises its population estimates each January, so levels are not strictly comparable across years.' | |
| N21 | Fixed | "AI capital's share of GDP: no published estimate was found." | The unsourced "Capital still belongs to people" bullet was replaced by the ILO bullet (checked, correct). |
| N22 | Fixed | 'That is five times the 710 reported for 2023, when the rules were narrower.'; 'over two inventory rounds, as reporting rules widened.' | |
| N23 | Fixed | 'Reported events: first uses, stated goals, surveys and disclosures of AI in lawmaking, administration, justice and the military.' | |
| N24 | Fixed | 'In a spring 2026 survey (LEAP), AI experts expected 3.4 hours and superforecasters 3.5 hours…' | |
| N25 | Fixed | '(the BLS series read 52.8% in Q2 2026)' in both places | |
| N26 | Fixed | '…from 3.35% in 2024 on the measure they were given (the St. Louis Fed survey reads 5.7% for August 2025).' | |
| N27 | Fixed | 'Survey forecasts of unemployment stay in single digits, except for graduates' | |
| N28 | Fixed | 'Observed: about 1.5 points higher in 2012, 1.8 points lower in the second quarter of 2026.' | |
| N29 | Fixed | '… dated readings since 2021' | The record now starts in 2021: 39 lanes, 396 readings. |
| N30 | **Partly fixed** | '…(October 2025), according to trade-press reports.'; '…is 2030 (question wording not checked)' | Still unflagged: the superforecasters' 42.4 is a single read. See L25. |
| N31 | **Partly fixed** | '…(22%) than small ones (60%), according to press reports of Chartbeat data.'; '…and the 2020 values are derived from the changes stated in the 2021 report.' | Still unflagged: the first Deezer point (January or February) and Graphite's 1.6 (middle of 1.4 to 1.8). See L25. |
| N32 | Fixed | 'Three repeated surveys of AI use, set beside five one-off studies of what AI use does to ability.' | |
| N33 | Fixed | 'Shen & Tamkin, How AI Impacts Skill Formation (Anthropic, Jan 2026)' | |
| N34 | Fixed | `['Forecasting Research Institute, Assessing near-term accuracy in the XPT (Sep 2025)',…]` | |
| N35 | Fixed | 'One 2026 paper, known here only through a secondary summary, reports junior employment 8 to 10% lower in adopting firms after two years.' | |
| N36 | **Not fixed** | "The state still depends on people's pay" | See L18. |
| N37 | Fixed | 'Daily use is the nearest available measure of how deep use goes; it does not measure dependence.' | |
| N38 | Fixed | 'These are measured repeatedly by bodies independent of the AI developers.' | |
| N39 | Fixed | `capability:['≈12 h',['software tasks done','at 50% success'],'software tasks finished half the time (range 5 to 61 h)']` | |
| N40 | **Partly fixed** | `obs:[ym(2023,12),ym(2024,12),ym(2026,4)]` (inventory); `obs:[ym(2023,9),ym(2024,9),ym(2025,9)]` (tax) | Inventory and tax now sit at their as-of dates. Tables still read "Jul 2021" for the EU's 2021 figure and "Feb 2025" for Graphite's Q1 2025. See L19. |

---

## Parts B, C, D — Findings in version 4

Exact find-and-replace strings for every item follow the table, in code blocks.

| # | Sev. | File | Exact current text | Problem | What the notes say | Replacement |
|---|---|---|---|---|---|---|
| V1 | HIGH | app.js, home `<h3>` and Futures `<h3>` | "…was 1.8 points below its 2025 average. Economists expected a 1.5-point fall by 2030." | The edit for N3 dropped "with moderate AI progress". 1.5 points is the median under one of three scenarios. Economists' own (unconditional) median is 1.2 points. The site says so in three other places: the note beside the Futures chart ("1.2 points by 2030 on their central view, and 1.5 with moderate AI progress"), the workers'-share "watch" line ("down 1.2 points by 2030") and the chart's own annotation ("moderate forecast for 2030: −1.5"). So the same quantity has two values on one page, and the heading on the home page is the wrong one. | 06 A1: unconditional 2030 median 54.3% from 55.48% (−1.2); moderate 54.0% (−1.5). 06 C(i). | "…was 1.8 points below its 2025 average. With moderate AI progress, economists expected a 1.5-point fall by 2030." |
| V2 | MEDIUM | data2.js, `control` | `recName:'Pew: feel no control over AI',recRow:'influence',` | The lane has no `obs`, so the record takes its dates from the chart, and the chart plots a different question ("more concerned than excited", 2021–2026). The Human influence row therefore shows six grey readings from July 2021 to June 2026 under the name "feel no control over AI". The control question was asked twice (August 2024, June 2025). This is the same fault as N6: a lane named for something other than its marks. It also overstates what exists for the last stop. | 03 #22: control question, Aug 2024 (59%) and June 2025 (57%), "two points so far". 03 #21: the concern series is a separate question. | Add `obs:[ym(2024,8),ym(2025,6)]`. Tested: the row then shows 2 readings, Aug 2024 → Jun 2025; record total 392. |
| V3 | MEDIUM | app.js, `recordData` | `full:d.tab[0],kind:d.rec` | N6 is fixed only for the label printed beside each lane on wide screens. The hover box and the data table use `full`, which is still the tab label. The table reads "Skills and judgement · Panels re-testing people without AI · direct · 2 readings" (the tab's own value is 0) and "Culture · People using chatbots for news weekly · nearby · 7 readings · Nov 2023 → Jul 2026" (those are ChatGPT user announcements). On narrow screens the lane labels are hidden, so the hover box is the only name shown. The Method page points readers to this table ("the chart's data table lists every series"). | 04 #9, #10; 03 #12, #4 | `full:d.recName||d.tab[0],kind:d.rec`. Tested. |
| V4 | MEDIUM | app.js, home; data3.js `COUNTER` | 'The last is what the data show today.'; 'AI-made work stays at a few per cent of what people listen to and read, even as it fills the supply.' | True for listening on one service (1 to 3% of Deezer streams). Not shown for reading. The site's own culture page lists "AI's share of attention" under "What nobody measures", and its nearest figure for reading is "about one in six of Google's top results", which is not "a few per cent". | 04 (c): "Attention-weighted AI share … Deezer's stream share is the only public example. Nothing comparable exists for … news." 04 #2: 14 to 19% of ranked results. | COUNTER: '…stays a small share of what people listen to and read…'. Intro: "The last is what the one direct measure shows today: AI tracks get 1 to 3% of streams on Deezer. For reading there is only a proxy, and it is higher: about one in six top search results." |
| V5 | MEDIUM | data2.js, `chatbots` tile | `{v:'≈45%',l:"of AI assistants' answers to news questions had at least one significant problem (reported as \"almost half\")",…}` | New since v3 (was 'almost half'). The 45% is not in the notes. The notes say the page gives the fractions in words and the PDF with the percentages was not opened. The site prints a number nobody on this project has read. | 04 #11: '"almost half" … the exact percentages are in the PDF, which I did not open'. 04 (d). | `{v:'almost half',l:"of AI assistants' answers to news questions had at least one significant problem",…}`. Or open the EBU PDF and cite the figure. |
| V6 | MEDIUM | data3.js, `GAPS`, last row | 'Election surveys have long asked whether "people like me have any say" in government; none ties the answer to AI.' | Stated as fact, with a phrase in quotation marks. It is not in notes 01–07. It comes from the red-team report, which says of exactly this material: "that is from memory and unverified. Check each before using it." | Not in 01–07. 13, flag at the top and weakness 15. | Hedge it: 'Long-running election surveys are reported to ask whether people like the respondent have any say in government (not checked for this draft); none is known to tie the answer to AI.' Or cut the sentence until a source is read. |
| V7 | MEDIUM | app.js, Method rubric table | `<th>Independent of AI developers?</th>` with culture = 'no: vendors and platforms' | The answer does not fit the question. Deezer, Graphite and Originality.ai are not AI developers. Two of them sell against AI content. Their problem is a commercial stake of their own, which is what the level-3 definition on the same page says ("the company or vendor whose product is involved"). A reader checking the rubric will see a wrong "no". | 04: "[VENDOR] … They sell SEO services, AI detectors, bot protection or streaming, and each has a commercial interest in the number." | `<th>Independent of the firms involved?</th>` |
| V8 | MEDIUM | app.js, home "The view from here" | `<h3>${sig(2)} Contested</h3>`; `<h3>${sig(0)} Dark</h3>` | The icons do not match the ratings of the links named under them. "Contested" names entry-level work (rated 3), workers' share (2) and AI-made content (culture, now 3) under a two-bar icon. "Dark" names skills (1) and institutions (1) under the zero-bar icon, which everywhere else means "No direct measure" and belongs to Human influence alone. Culture's rating was raised to 3 in this version and this panel was not updated. | Site's own `level` values: work 3, share 2, skills 1, culture 3, institutions 1. | `${sig(3)} Contested` and `${sig(1)} Dark`. (Or drop the two icons.) |
| V9 | MEDIUM | data2.js, `literacy` | `rec:'p'` with title 'The only repeated tests of unaided ability were falling before AI arrived' | Breaks the stated rule. The rule: blue if the series measures the quantity the link is named for; "Whether a change can be tied to AI is weighed in the rating, not in the colour." The chart's own title calls these "tests of unaided ability", which is the quantity. The read note gives only one reason for setting them aside: they cannot be tied to AI. That is the reasoning the rule says is not used for colour, and it is the opposite of how the BLS workers' share is treated (blue, low rating). The title is also absolute ("The only…"), where the note says "found for this draft". | 03 #24: "the only repeated, objective, population-level measures of unaided ability"; "baseline context only". | Keep grey, but give a reason that fits the rule, and make the title say what the tests are. Title: 'The only repeated population tests of reading and maths were falling before AI arrived'. Add to the read note: 'They count as a nearby measure here because they test general reading and maths across the whole population, not the work that people hand to AI.' (The alternative is `rec:'d'`, which would then need the home-page sentence in V10 and the record's aria text rewritten.) |
| V10 | MEDIUM | app.js, home, deck above the measurement record | 'Skills has only single studies.' | N5 again in new words. The Skills row has six lanes. One is the METR trial, which was run twice (lane name: "Developer trial, re-run", two marks). One is the literacy and numeracy tests, which are repeated (three marks, grey). | 03 #8: "repeated once"; 03 #24. Record as built: Skills has 6 direct readings from 5 studies and 4 nearby readings. | 'The direct readings for skills come from five small studies, only one of which was run a second time.' |
| L1 | LOW | data2.js, `literacy` tab and two tiles | 'US adults at the lowest literacy level'; '…at or below the lowest literacy level'; '…at or below the lowest numeracy level' | The tab drops "or below". The published category is "at or below Level 1"; there is a band below Level 1, so Level 1 is not the lowest. | 03 #24: "share at or below Level 1 in literacy rose from 19% (2017) to 28% (2023); numeracy 29% → 34%" | Tab: 'US adults at or below Level 1 in literacy'. Tiles: '…at or below Level 1 in literacy, the lowest band'; '…at or below Level 1 in numeracy'. |
| L2 | LOW | data2.js, `literacy` and `inventory` `obs` | `obs:[ym(2022,11),2023.0,2025.0]`; `obs:[ym(2023,12),ym(2024,12),ym(2026,4)]` | (a) The adult survey the site calls "PIAAC 2023" is ticked at November 2022, so the record reads "Nov 2022". Fieldwork ran August 2022 to June 2023. (b) The 2024 inventory figure plotted (2,133) is the final count as of 23 January 2025; the tick is at December 2024, the date of the first release (1,757). The date of the 2023 inventory is not in the notes. | 03 #24; 05 #1 | `obs:[2023.0,ym(2023,6),2025.0]`; `obs:[ym(2023,12),ym(2025,1),ym(2026,4)]` |
| L3 | LOW | data1.js, `macro` title and aria | 'Since ChatGPT launched, the employment rate for 25 to 54 year olds has barely moved'; `aria:'US prime-age employment rate between 79.8% and 80.7% from 2019 to 2026'` | (a) With the chart now starting at November 2022, the plotted change is +0.9 points (79.8% to 80.7%). "Has not fallen" is exact and makes the same point. The sub-title "It was 80.4% in December 2019" is correct. (b) The aria text still says "from 2019"; the chart starts in November 2022. | 02 #13: Dec 2019 80.4, Nov 2022 79.8, Sep 2026 80.7; "prime-age employment is higher than in Nov 2022" | Title: '…has not fallen'. Aria: 'US prime-age employment rate: 79.8% in November 2022, between 80.2% and 80.7% from 2025 to 2026'. |
| L4 | LOW | data1.js, `grads` tab | `tab:['Graduates of AI-exposed majors','−13% pay',…]` | The rewording dropped "the most". The figure is for the most exposed tenth of majors. | 02 #6: "most AI-exposed decile of majors" | 'Graduates of the most AI-exposed majors' |
| L5 | LOW | data1.js, `firms` series name | `name:'US firms (question broadened in November 2025)'` | Fine as a legend entry for the whole blue line. But the same name heads the data-table column that holds only the old-wording values (3.7, 5.4, about 10), which reads as if they were measured after the change. Series order, values, break marker and the EU line are all correct. | 01 BTOS: old wording to Sep 2025; new wording from Nov 2025 | `name:'US firms (old wording to September 2025; question broadened in November 2025)'` |
| L6 | LOW | data2.js, `culture` `levelWhy` | 'Repeated, but mostly by firms that sell detection or run the platform' | The headline figure (about 50% of new articles) is from Graphite, an SEO agency. It does not sell detection. The page's own read note and the glossary say "SEO services or AI detectors". | 04 #1: "Graphite [VENDOR, SEO agency]" | 'Repeated, but mostly by vendors and platforms with a commercial interest' |
| L7 | LOW | data1.js, `handover` `levelWhy` | "Repeated, but from one company's logs" | Three wordings for one fact. `DEFS` says "in two companies' logs". Method "Known limits" says "Anthropic's and OpenAI's own logs". | 01: Anthropic Economic Index; OpenAI's ChatGPT paper | "Repeated, but from the companies' own logs" |
| L8 | LOW | data3.js, `DEFS` | 'Whether people and firms use AI at all'; 'What a handful of experiments each found once' | (a) The adoption page also counts how often (daily 15%) and how much (5.7% of work hours). (b) The clinical study is observational, not an experiment. | 01 Gallup; St. Louis Fed. 03 #1: "observational" | 'Whether, and how often, people and firms use AI'; 'What a handful of small studies each found once' |
| L9 | LOW | app.js, home map note and Method | 'Use is counted at every stage. Consequences are counted at almost none.'; 'use is counted at every stage, and consequences are counted at almost none.' | Overreach in both halves. At the two economy stops what is counted is an outcome (jobs, income share), not use. The home page says of three downstream items "Each is measured." The `DEFS` table itself gives the missing piece for those stops as the cause, not the count. | Site's own `DEFS` rows for work and share | 'Use is counted at most stages. Consequences that can be tied to AI are counted at almost none.' (and the same in lower case on Method) |
| L10 | LOW | app.js, Method, "How to read the charts" | 'Hatching means nothing is measured.','On the map and in the measurement record, hatched areas are where no observation exists.' | In the record a hatched lane is labelled "no direct reading found" and sits above grey lanes that do hold readings (Institutions has 64). | Record as built | 'Hatching means nothing is measured directly.','…hatched areas are where no direct reading exists.' |
| L11 | LOW | app.js, Method | 'A hollow marker is a weaker point: a secondary source, a restated figure or a changed definition.' | No restated figure is drawn hollow. The two restated Anthropic points (January 2025) and the two implied ones (August 2025) are solid. Hollow markers are used for secondary sources, changed questions and unverified figures. | Chart code | '…a secondary source, a changed definition or an unverified figure.' |
| L12 | LOW | app.js, Method "Known limits" | "Nothing here covers China, India or any low-income country, and a small-state view such as Singapore\'s is missing."; "Those charts are tagged." | (a) Too absolute. The site shows China's share of computing capacity (about 15%), a 48-market news survey, the ILO world figure, and a Singapore milestone. (b) The main hand-over chart (`aei`) is tagged "Checked at source", not "Company's own data", and the Google chart is tagged "Secondary source". | Site's own tags | (a) 'No series here tracks China, India or any low-income country on its own, and there is no small-state series such as one for Singapore.' (b) see strings below. |
| L13 | LOW | app.js, Blind spots | 'Three measures would turn dotted lines into ones that can be tracked' | The third measure belongs to culture, which is now rated 3 and drawn as a solid line. | `level:3` for culture | 'Three measures would do most to make the later links trackable' |
| L14 | LOW | data3.js, Route E | `['not','Adoption levels off','Use at work has risen in each Gallup reading shown, to 52% in mid-2026.']` | Accurate, but one-sided next to the site's own adoption page ("Growth may be slowing": ChatGPT took 8 months for 400 to 800 million, then 4.5 months for the next 100 million). The other four Route E signposts and the anchor are correct. | 01 ChatGPT counter-evidence; 01 BTOS counter-evidence (17% to 20% in six months) | '…to 52% in mid-2026, though growth in ChatGPT\'s weekly users has slowed.' |
| L15 | LOW | data2.js, `lopsided` panel heading | 'What AI use does to ability: five studies, each done once' | The box under the list says "Only METR went back to its group". One of the five was done twice. | 03 #8 | 'What AI use does to ability: five studies, none tracked over time' |
| L16 | LOW | app.js, home map note | 'The chain comes from <em>Gradual Disempowerment</em> (Kulveit and co-authors, 2025).' | The Method page describes the paper as being about the economy, culture and the state. The skills line is framed in the notes by a different paper (exposure, erosion, lock-in). | 03 header: "Framing: Chooi, Lee & Li … EvalEval workshop, July 2026" | 'The chain is built on <em>Gradual Disempowerment</em> (Kulveit and co-authors, 2025); the skills line draws on later work on measuring disempowerment (Chooi, Lee and Li, 2026).' |
| L17 | LOW | data3.js `GLOSSARY`; data1.js `work` deck | '…according to published task-by-task ratings.'; '…automation, where the user asks for a finished output…'; 'AI-exposed occupations are those where AI can do the largest share of tasks.' | (a) How Stanford scores exposure is not in the notes. (b) "Asks for a finished output" is OpenAI's "Doing" class. The notes describe Anthropic's automation class as handing the task over ("directive" plus "feedback loop"). | 01 Anthropic Economic Index, "measures"; 02 #1 (no description of the exposure measure) | Glossary: 'A job in which AI could do a large share of the tasks.'; '…automation, where the user hands the task over, and augmentation…'. Check the Stanford paper for the exposure measure before publishing the deck sentence. |
| L18 | LOW | data2.js, `tax` title | "The state still depends on people's pay" | N36, not fixed. Individual income tax includes capital gains and business income; the note beside the chart says so. | 05 #17 caveats | "The state still depends on taxes on people's incomes and payrolls" |
| L19 | LOW | data1.js `firms`; data2.js `articles` | x axes with no `tip` | N40 residue. Tables and hover labels read "Jul 2021", "Jul 2023", "Jul 2024", "Jul 2025" for the EU's annual figures, and "Feb 2025", "Nov 2025", "Feb 2026" for Graphite's Q1 2025, Q4 2025 and Q1 2026. | 01 Eurostat (annual); 04 #1 (quarters) | Add a `tip` to each x axis (strings below; tested). |
| L20 | LOW | app.js, `drawWorld` | `tip:x=>x<2029?'Baseline':String(Math.round(x))` | N14 residue. On the unemployment card the hover label for the first point says "Baseline"; the card and the note say it is the latest reading. | 06 A3 | `tip:x=>x<2029?(m.id==='unemp'?'Latest':'Baseline'):String(Math.round(x))` |
| L21 | LOW | data1.js `work` sceptic and `cuts` read; data3.js Route C | '(a July 2026 update puts it at 0.77 against 0.85…)'; 'Oxford Economics suspects…'; 'The EU deferred its high-risk AI obligations by 16 months; its public database is not yet open.' | Three items the notes mark SECONDARY, stated without a flag. The EU item is a political agreement of May 2026 (formal adoption not confirmed) and the database status is as of July 2026. The milestones list words it correctly ("agrees to defer"). | 02 #4: "SECONDARY (2026 restatement)"; 02 #9 (via Fortune); 05 #6: "SECONDARY for both EU items … I did not confirm that the Omnibus was formally published" | Strings below. |
| L22 | LOW | app.js, home record deck | 'Every dated reading behind this site since 2021, on one timeline: ${R.series} series, … each lane one series.' | (a) A lane is an indicator, and some hold several series (Census and Eurostat; Graphite and Originality.ai). The evidence index calls the same 39 "indicators". (b) Not every reading is there: lanes with `obs` leave out, for example, the Reuters chatbot-news readings (2025, 2026) and the 2022 reading-for-pleasure figure. | Record as built: 39 lanes, 396 readings | 'Dated readings behind this site since 2021, on one timeline: ${R.series} indicators, … each lane one indicator.' |
| L23 | LOW | data2.js, `budzyn` tab | 'Polyp detection without AI, after using it' | The measure is the adenoma detection rate. Not every polyp is an adenoma. The sub-title has it right. | 03 #1: "Adenoma detection rate (ADR)" | 'Adenoma detection without AI, after using it' |
| L24 | LOW | app.js, home "Contested" | 'Whether AI is the cause, and whether it changes who holds power, is disputed.' | For the third item (content classed as AI-made) AI is the cause by construction; the rubric says "Tied to AI? yes" for culture. | Site's own `RUBRIC` | 'Whether AI is the cause of the first two, and whether any of this changes who holds power, is disputed.' |
| L25 | LOW | app.js odds subtitle; data2.js `deezer`, `articles` | '…surveyed Oct 2025 – Feb 2026); …'; `[ym(2025,1.5),10,'via press']`; "detectors' false-positive rate before ChatGPT" | N30 and N31 residue: the superforecasters' 42.4 is a single read; the first Deezer point is dated February by one outlet; 1.6 is the middle of a 1.4 to 1.8 range. | 06 A6; 04 #15; 04 #1 | Strings below. |
| L26 | LOW | data2.js, tags on `deezer`, `articles`, `inventory` | `tag:'direct'` | By the Method page's own definitions, "Checked at source" means read on the publisher's page itself and "Publisher's page" means read through an automated summary. Note 07, the record of raw-page checks, covers METR, the Stanford dashboard, Gallup and Anthropic only. The notes show these three as read through the fetch tool. Report 08 accepted these tags from a list given for that task; this is a reminder that 07 does not back them. | 07 (scope); 04 header: 'Every "PRIMARY" number was read that way' | Confirm a raw-page check was made, or use `tag:'primary'` on these three. |
| L27 | LOW | data1.js, data2.js `rec` labels | `code` 'd'; `companions` 'd'; `compute` lane | Judgement calls, no change required. Google's share of AI-written code is closer to use than to hand-over. A teen survey of companion use is a survey of use. The "Who owns AI compute" lane includes one mark for capital spending guidance (July 2026). All other labels follow the stated rule; every `recName` except `control` (V2) names what its marks are; every `obs` date except those in L2 matches the indicator's own text. | — | None. |

---

## Find-and-replace strings

### V1 — app.js (two edits)
```
OLD: workers' share of US income was 1.8 points below its 2025 average. Economists expected a 1.5-point fall by 2030.</h3>
NEW: workers' share of US income was 1.8 points below its 2025 average. With moderate AI progress, economists expected a 1.5-point fall by 2030.</h3>
```
```
OLD: workers' share of income was 1.8 points below its 2025 average. Economists expected a 1.5-point fall by 2030.</h3>
NEW: workers' share of income was 1.8 points below its 2025 average. With moderate AI progress, economists expected a 1.5-point fall by 2030.</h3>
```

### V2 — data2.js
```
OLD: recName:'Pew: feel no control over AI',recRow:'influence',
NEW: recName:'Pew: feel no control over AI',recRow:'influence',obs:[ym(2024,8),ym(2025,6)],
```

### V3 — app.js
```
OLD: full:d.tab[0],kind:d.rec
NEW: full:d.recName||d.tab[0],kind:d.rec
```

### V4 — data3.js and app.js
data3.js:
```
OLD: 'AI-made work stays at a few per cent of what people listen to and read, even as it fills the supply.'
NEW: 'AI-made work stays a small share of what people listen to and read, even as it fills the supply.'
```
app.js:
```
OLD: The last is what the data show today.
NEW: The last is what the one direct measure shows today: AI tracks get 1 to 3% of streams on Deezer. For reading there is only a proxy, and it is higher: about one in six top search results.
```

### V5 — data2.js
```
OLD: {v:'≈45%',l:"of AI assistants' answers to news questions had at least one significant problem (reported as \"almost half\")",w:'EBU / BBC · 2025'}
NEW: {v:'almost half',l:"of AI assistants' answers to news questions had at least one significant problem",w:'EBU / BBC · 2025'}
```

### V6 — data3.js
```
OLD: Election surveys have long asked whether "people like me have any say" in government; none ties the answer to AI. 
NEW: Long-running election surveys are reported to ask whether people like the respondent have any say in government (not checked for this draft); none is known to tie the answer to AI. 
```
(Both strings end with one space.)

### V7 — app.js
```
OLD: <th>Independent of AI developers?</th>
NEW: <th>Independent of the firms involved?</th>
```

### V8 — app.js (two edits)
```
OLD: <h3>${sig(2)} Contested</h3>
NEW: <h3>${sig(3)} Contested</h3>
```
```
OLD: <h3>${sig(0)} Dark</h3>
NEW: <h3>${sig(1)} Dark</h3>
```

### V9 — data2.js (two edits)
```
OLD: title:'The only repeated tests of unaided ability were falling before AI arrived',
NEW: title:'The only repeated population tests of reading and maths were falling before AI arrived',
```
```
OLD: These are the only repeated, objective, population-wide measures of unaided ability found for this draft. None can be tied to AI:
NEW: These are the only repeated, objective, population-wide measures of unaided ability found for this draft. They count as a nearby measure here because they test general reading and maths across the whole population, not the work that people hand to AI. None can be tied to AI:
```

### V10 — app.js
```
OLD: Skills has only single studies.
NEW: The direct readings for skills come from five small studies, only one of which was run a second time.
```

### L1 — data2.js (three edits)
```
OLD: tab:['US adults at the lowest literacy level','28%','PIAAC 2023 · was 19% in 2017']
NEW: tab:['US adults at or below Level 1 in literacy','28%','PIAAC 2023 · was 19% in 2017']
```
```
OLD: l:'of US adults aged 16 to 65 at or below the lowest literacy level'
NEW: l:'of US adults aged 16 to 65 at or below Level 1 in literacy, the lowest band'
```
```
OLD: l:'of US adults at or below the lowest numeracy level'
NEW: l:'of US adults at or below Level 1 in numeracy'
```

### L2 — data2.js (two edits)
```
OLD: obs:[ym(2022,11),2023.0,2025.0]
NEW: obs:[2023.0,ym(2023,6),2025.0]
```
```
OLD: obs:[ym(2023,12),ym(2024,12),ym(2026,4)]
NEW: obs:[ym(2023,12),ym(2025,1),ym(2026,4)]
```

### L3 — data1.js (two edits)
```
OLD: title:'Since ChatGPT launched, the employment rate for 25 to 54 year olds has barely moved',
NEW: title:'Since ChatGPT launched, the employment rate for 25 to 54 year olds has not fallen',
```
```
OLD: aria:'US prime-age employment rate between 79.8% and 80.7% from 2019 to 2026'
NEW: aria:'US prime-age employment rate: 79.8% in November 2022, between 80.2% and 80.7% from 2025 to 2026'
```

### L4 — data1.js
```
OLD: tab:['Graduates of AI-exposed majors','−13% pay','US Census · Sep 2026']
NEW: tab:['Graduates of the most AI-exposed majors','−13% pay','US Census · Sep 2026']
```

### L5 — data1.js
```
OLD: {name:'US firms (question broadened in November 2025)',color:C.s1,end:false,
NEW: {name:'US firms (old wording to September 2025; question broadened in November 2025)',color:C.s1,end:false,
```

### L6 — data2.js
```
OLD: levelWhy:'Repeated, but mostly by firms that sell detection or run the platform',
NEW: levelWhy:'Repeated, but mostly by vendors and platforms with a commercial interest',
```

### L7 — data1.js
```
OLD: levelWhy:"Repeated, but from one company's logs",
NEW: levelWhy:"Repeated, but from the companies' own logs",
```

### L8 — data3.js (two edits)
```
OLD: adoption:['Whether people and firms use AI at all',
NEW: adoption:['Whether, and how often, people and firms use AI',
```
```
OLD: skills:['What a handful of experiments each found once',
NEW: skills:['What a handful of small studies each found once',
```

### L9 — app.js (two edits)
```
OLD: Use is counted at every stage. Consequences are counted at almost none.
NEW: Use is counted at most stages. Consequences that can be tied to AI are counted at almost none.
```
```
OLD: use is counted at every stage, and consequences are counted at almost none.
NEW: use is counted at most stages, and consequences that can be tied to AI are counted at almost none.
```

### L10 — app.js
```
OLD: Hatching means nothing is measured.','On the map and in the measurement record, hatched areas are where no observation exists.'
NEW: Hatching means nothing is measured directly.','On the map and in the measurement record, hatched areas are where no direct reading exists.'
```

### L11 — app.js
```
OLD: A hollow marker is a weaker point: a secondary source, a restated figure or a changed definition.
NEW: A hollow marker is a weaker point: a secondary source, a changed definition or an unverified figure.
```

### L12 — app.js (two edits)
```
OLD: Nothing here covers China, India or any low-income country, and a small-state view such as Singapore\'s is missing.
NEW: No series here tracks China, India or any low-income country on its own, and there is no small-state series such as one for Singapore.
```
```
OLD: Those charts are tagged.'
NEW: Most of those charts are tagged "Company\'s own data". The main hand-over chart is tagged "Checked at source", because its figures were read on Anthropic\'s own page.'
```

### L13 — app.js
```
OLD: Three measures would turn dotted lines into ones that can be tracked
NEW: Three measures would do most to make the later links trackable
```

### L14 — data3.js
```
OLD: ['not','Adoption levels off','Use at work has risen in each Gallup reading shown, to 52% in mid-2026.']
NEW: ['not','Adoption levels off','Use at work has risen in each Gallup reading shown, to 52% in mid-2026, though growth in ChatGPT\'s weekly users has slowed.']
```

### L15 — data2.js
```
OLD: What AI use does to ability: five studies, each done once
NEW: What AI use does to ability: five studies, none tracked over time
```

### L16 — app.js
```
OLD: The chain comes from <em>Gradual Disempowerment</em> (Kulveit and co-authors, 2025).
NEW: The chain is built on <em>Gradual Disempowerment</em> (Kulveit and co-authors, 2025); the skills line draws on later work on measuring disempowerment (Chooi, Lee and Li, 2026).
```

### L17 — data3.js (two edits)
```
OLD: 'A job in which AI could do a large share of the tasks, according to published task-by-task ratings.'
NEW: 'A job in which AI could do a large share of the tasks.'
```
```
OLD: where the user asks for a finished output, and augmentation
NEW: where the user hands the task over, and augmentation
```

### L18 — data2.js
```
OLD: title:"The state still depends on people's pay",
NEW: title:"The state still depends on taxes on people's incomes and payrolls",
```

### L19 — data1.js and data2.js
data1.js:
```
OLD: x:{min:2021,max:2026.7,ticks:yrs(2021,2026),ticksNarrow:[2021,2023,2025]},y:{min:0,max:25
NEW: x:{min:2021,max:2026.7,ticks:yrs(2021,2026),ticksNarrow:[2021,2023,2025],tip:x=>Math.abs(x%1-0.5)<1e-6?String(Math.floor(x)):fmtDate(x)},y:{min:0,max:25
```
data2.js:
```
OLD: x:{min:2022.6,max:2026.5,ticks:[2023,2024,2025,2026]},y:{min:0,max:60,ticks:[0,20,40,60],fmt:pct,tip:v=>v+'%'},
NEW: x:{min:2022.6,max:2026.5,ticks:[2023,2024,2025,2026],tip:x=>[2025.125,2025.875,2026.125].includes(x)?fmtQ(x):fmtDate(x)},y:{min:0,max:60,ticks:[0,20,40,60],fmt:pct,tip:v=>v+'%'},
```

### L20 — app.js
```
OLD: tip:x=>x<2029?'Baseline':String(Math.round(x))
NEW: tip:x=>x<2029?(m.id==='unemp'?'Latest':'Baseline'):String(Math.round(x))
```

### L21 — data1.js (two edits) and data3.js
data1.js:
```
OLD: (a July 2026 update puts it at 0.77 against 0.85, so the difference has nearly closed)
NEW: (a July 2026 update, known here second-hand, puts it at 0.77 against 0.85, so the difference has nearly closed)
```
```
OLD: Oxford Economics suspects some firms are dressing up ordinary lay-offs;
NEW: Oxford Economics, as quoted in the press, suspects some firms are dressing up ordinary lay-offs;
```
data3.js:
```
OLD: ['seen','Oversight rules slip','The EU deferred its high-risk AI obligations by 16 months; its public database is not yet open.']
NEW: ['seen','Oversight rules slip','The EU agreed in May 2026 to defer its high-risk AI obligations by 16 months; its public database was reported as not yet open in July 2026.']
```

### L22 — app.js (three edits)
```
OLD: Every dated reading behind this site since 2021, on one timeline:
NEW: Dated readings behind this site since 2021, on one timeline:
```
```
OLD: ${R.series} series, 
NEW: ${R.series} indicators, 
```
```
OLD: each lane one series.
NEW: each lane one indicator.
```

### L23 — data2.js
```
OLD: tab:['Polyp detection without AI, after using it',
NEW: tab:['Adenoma detection without AI, after using it',
```

### L24 — app.js
```
OLD: Whether AI is the cause, and whether it changes who holds power, is disputed.
NEW: Whether AI is the cause of the first two, and whether any of this changes who holds power, is disputed.
```

### L25 — app.js and data2.js (three edits)
app.js:
```
OLD: surveyed Oct 2025 – Feb 2026); the AI expert panel's figures are as published (LEAP wave 6, Feb – Mar 2026).
NEW: surveyed Oct 2025 – Feb 2026; the superforecasters' moderate figure was read once and not cross-checked); the AI expert panel's figures are as published (LEAP wave 6, Feb – Mar 2026).
```
data2.js:
```
OLD: pts:[[ym(2025,1.5),10,'via press']
NEW: pts:[[ym(2025,1.5),10,'via press; one outlet dates this to February']
```
```
OLD: "detectors' false-positive rate before ChatGPT"
NEW: "detectors' false-positive rate before ChatGPT (1.4 to 1.8%)"
```

L26 and L27 have no replacement string.

---

## Checked and correct

New material named in the brief:

- **`RUBRIC`.** The cell values match each link's `level`, its `levelWhy` and the five rating definitions on the Method page: all four "yes" gives 4 (capability, adoption); "no" on independence or "disputed" on cause gives 3 (hand-over, entry-level work, culture); "no" on cause gives 2 (workers' share); "no" on repeated or on direct gives 1 (skills, institutions). The one fault is the column heading (V7).
- **`DEFS`.** Hand-over, entry-level work, workers' share, culture, institutions and human influence rows match the evidence pages and `GAPS`. Adoption and skills: L8.
- **`COUNTER` and its intro.** First: not seen (the gap widened from 15% to 19%). Second: not seen (four-quarter average 53.7% against 54.6% for 2025). Third and fourth: no repeated test of AI users and no published override rate exist. Fifth: V4.
- **`GLOSSARY`.** All 16 entries read against the notes. Two wordings: L17.
- **Route E "Plateau".** Doubling time about 6 months since 2019 and about 4 since 2023 (07: 187.8 and 128.7 days). Gallup rose in every reading shown (21, 27, 40, 45, 46, 50, 52). Hand-over 49% then 45%; ChatGPT "Doing" fell. Articles near half since late 2024 (48, 49.6, 50.9, 49.9); Deezer uploads still rising (44% to over 50%). EU deferral to December 2027. Anchor: slow scenario 38.6%, mean. `on:['capability','adoption']`. "Five routes" in heading, note and label. One wording: L14.
- **`PRIORITY`.** Three names match their `GAPS` rows; texts match the notes. 14 rows in `GAPS`; heading says fourteen.
- **`WORLDS`.** All three `def`, `odds` and `take` strings match 06 (0.48 and 1.1 points by 2030; 3.5 by 2050; 10.1% and 40% of hours; 58.3%; 55%; 10.5 points; means 38.6 and 14.0; median 10; LEAP 26 and 23).
- **`literacy` figures and dates.** PIAAC 19% → 28% and 29% → 34%, 2017 → 2023, ages 16 to 65; fieldwork ended June 2023; low response rates flagged by NCES; NAEP age 13 reading −7 and maths −14, 2012 to 2023, no change 2023 to 2025; NEA 54.6% → 48.5%, 2012 → 2022; next adult survey years away. All match 03 #24. Labels: L1, L2, V9.
- **Workers'-share tiles.** ILO 53% (2014) → 52.4% (2024), May 2025 update, 0.6 points, within the range of revisions: matches 02 #15. Recomputed from `LS_Q` with scale 52.8 / 93.446: 2023 average 54.49%, 2024 54.68%, 2025 54.57%, which round to 54.5, 54.7, 54.6. "The yearly figure was flat; the fall is in the latest quarters" is right (97.871 in Q1 2025 to 93.446 in Q2 2026, five falls in a row).
- **ILO sceptic bullet.** Both quotations match 02 #15 ("could exert further downward pressure"; "This is not a prediction about AI effects").
- **Culture claim and rating.** Claim wording matches 04 (b). Level 3 fits the Method definition (repeated and direct, measured by vendors and platforms). `levelWhy` wording: L6.
- **`whos` authorship note.** The source string lists Sharma, McCain, Douglas & Duvenaud; the Framework source lists Kulveit, Douglas, Ammann, Turan, Krueger & Duvenaud. Two of four overlap.
- **Employment-rate chart.** Points match 02 #13 exactly (Nov 2022 79.8 through Sep 2026 80.7); 80.4% in December 2019; dotted gap marked "no readings plotted"; tiles 4.2% (3.6%), 61.8% (62.1%), +2.2%. Title wording: L3.
- **Gallup chart.** Series order is now Daily, A few times a year or more, A few times a week or more. Each name is bound to the right data (`day`, `any`, `wk`); values match 01 and 07.
- **Firms chart.** Old wording 3.7 (Sep 2023), 5.4 (Feb 2024), about 10 (Sep 2025); new wording 17.3, 17.8 (hollow, secondary), 19.8 (3 May 2026); EU 7.7, 8.1, 13.5, 20.0; break at November 2025. Column name: L5.
- **Tab labels.** All 39 `tab:[label, value, caption]` triples read against the notes. Correct except `grads` (L4), `literacy` (L1) and `budzyn` (L23).
- **`rec`, `recName`, `recRow`, `obs`.** All 39 indicators have a `rec` flag and a `recName`. Labels follow the stated rule except `literacy` (V9); judgement calls are listed in L27. `ls` is now 'd' and `price`, `whos`, `chatbots` are 'p', which fits the rule. Every institutions indicator is 'p', which fits the rubric ("Direct? no"). `recName` is accurate for 38 of 39 (not `control`, V2). `obs` dates match the indicator's own text for `price`, `agents`, `chatgpt`, `grads`, `compute`, `lopsided`, `bastani`, `metrrct`, `budzyn`, `whos`, `search`, `companions`, `tax`, `firsts`; see L2 for `literacy` and `inventory`.
- **`BIG`.** '≈12 h' with range 5 to 61 h (317 and 3,634 minutes); '52%' and 15% daily; '45%', down from 49%; '−13%' (87.2); '52.8%', falling since 2000; '0' panels; '≈50%' classed as mostly AI; '0' governments found; '?'.
- **`LEVELWORD`, `LEVELDEF`, Method rating definitions.** The three sets agree with each other and with each link's `levelWhy`.
- **Home page.** Hero deck; both map-note paragraphs (wording: L9, L16); heading "The evidence does not show disempowerment. The measures that could show it, or rule it out, do not exist."; Solid; Contested and Dark texts (icons: V8; one clause: L24); record heading "Direct readings cover most of the chain. They stop at institutions and human influence." (direct readings in 7 of 9 rows, none in the last two); the read note under the record, including "workers' share has a long blue lane and a low rating" (22 quarterly marks, rating 2).
- **Workers'-share chart, home and Futures.** Recomputed: Q2 2026 −1.77; last four quarters −0.89; first half of 2026 −1.38; moderate 2030 −1.48; central 2030 −1.18; slow −0.48 and −3.48; rapid −3.48 and −10.48; 2012 quarters +1.5, +1.3, +1.1, +2.6. Annotation, both sub-titles, both reading notes ("flat from 2023 to 2025"; Anthropic −0.6 and −3.9) and the aria text are right. Heading: V1.
- **Futures page.** Routes note; unemployment bars (4.2, 5.0, 6.0, 8.0 hollow, 10–20 hollow, 5.6, 10); Delphi rows (21.5, 21.0, 18.0, 16.6, 12.8 with intervals; 12, 12, 11, 7, not shown); 272 experts; $100bn; odds 38.6 / 47.4 / 14.0, 45.0 / 42.4 / 12.6, 40.8 / 41.0 / 18.1, 26 / 52 / 23; "13 to 23%"; all `MINIS` values and ranges; all five `TRACK` rows; `FUT_SRC` now includes the September 2025 accuracy review.
- **Method page.** Rating definitions; rubric values; "What is counted" table; tag definitions; glossary; known limits (two sentences: L12); "How to read the charts" (two sentences: L10, L11).

Internal consistency:

- **Counts.** 8 links, 39 indicators, 9 tour stops, 5 findings, 5 routes, 14 gaps, 10 milestones, 5 listed studies, 3 priority measures. The evidence index and the home page print the counts from the data, so they cannot drift.
- **Measurement record as built.** 39 lanes, 396 readings, 257 direct and 139 nearby. By row (direct / nearby): Capability 29 / 4; Adoption 31 / 0; Hand-over 13 / 0; Entry-level work 123 / 36; Workers' share 22 / 12; Skills 6 / 4; Culture 33 / 13; Institutions 0 / 64; Human influence 0 / 6 (0 / 2 after V2).
- **Same quantity, same value across pages.** 45% and 49% hand-over; 52.8%; five quarterly falls; 80.7% and 4.2%; 15% to 19% gap; 96.2 and 101.8; 3,611, 710 and 445; 84%; 57%; 5.6% and 5.5% (different sources, both labelled); 1.2, 5.5 and 10.5 points. The one clash is V1.
- **Date labels.** Every plotted point in every chart shows the intended month, quarter or year, apart from the two charts in L19.

Carried over from report 12 and unchanged in this version: the METR array (26 rows), the four ADP series, `LS_Q` (106 quarters), `COURT` (sum 2,136, peak 182 in March 2026), Challenger (sum 120,136), and all other data arrays.
