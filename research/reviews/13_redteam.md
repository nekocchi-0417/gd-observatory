# 13 — Red-team of the Gradual Disempowerment Observatory (3 Oct 2026)

Scope: `site/src/app.js`, `data1.js`, `data2.js`, `data3.js`; screenshots in `site/review3/`; research notes 01–08 for cross-checks. No site file was edited. Nothing was fetched from the web.

Two flags on my own work:

- Where I name outside literature the site does not cite (ANES, risk-score override studies, the EU moderation database and so on), that is from memory and unverified. Check each before using it.
- The labour-share arithmetic in weakness 4 was recomputed from the `LS_Q` array in `data2.js`.

---

## 1. The top critical comment

> Nicely built, and more honest than most of this genre. But the headline finding comes from the author's filing choices, not from the evidence.
>
> The "chain" measures stops, not arrows. Nothing here shows that adoption causes hand-over, or that hand-over causes skill loss. The thick solid lines are styled by how well each *stop* is counted. And the stops get vaguer as you go right. Link 2 is "has used AI a few times this year" (easy to survey). Link 8 is "decisions made by AI" (hard). Define link 2 as "depends on AI" and link 8 as "governments using AI" and the gradient reverses.
>
> The big zeros don't survive a search. PIAAC and NAEP are repeated tests of unaided ability. Judges' override rates for risk scores, clinical alert overrides and the EU's counts of automated moderation decisions are all published. ANES has asked whether "people like me have any say" since the 1950s. "No measure exists" means "nothing I filed under this heading".
>
> The one result that sounds like news, labour share "already past the 2030 forecast", compares a single noisy quarter with an annual median on a different series. On a four-quarter basis it is −0.9 points, not −1.8.
>
> And "it could not, yet" is unfalsifiable as written. What would you have to see to say it isn't happening?
>
> (Also: 10 of 38 charts were checked by a person. On a site about unreviewed hand-over.)

---

## 2. Ranked weaknesses

### 1. The gradient is built into how the links are named (a, i)

- **What.** "The first links are measured repeatedly… The last ones are barely measured at all." The early links are defined by what is easy to count: Adoption is "use AI at work at least a few times a year". The late links are defined by what the argument needs: "Whether people can still do their work unaided", "How many public decisions AI makes".
- **Why a critic objects.** The fall-off in measurement is partly a fall-off in how concretely each link is defined. The site's own text shows it: under Adoption, "Whether employees could still do the same task without the tool" is listed as unmeasured. So the hard version of link 2 is as dark as link 6. Equally, the easy version of link 8 (governments using AI) is well counted.
- **Fix.** Add a two-column table on the home page or Method: for every link, "the easy version (measured)" and "the version the argument needs (measured or not)". Then state the finding as: "Use is counted at every stage. Consequences are not counted at any stage."

### 2. The map draws causal arrows that nothing on the site tests (a)

- **What.** Method: "the line into each stop is drawn in the style of that stop's rating." Map caption: "AI capability feeds adoption, adoption feeds hand-over, and hand-over runs down four lines towards human influence."
- **Why.** A thick navy line from Capability to Adoption reads as "this causal step is well established". It only means the destination quantity is well counted. No indicator on the site measures an arrow. All arrows point one way, to a hatched endpoint. There is no stop for anything that pushes back: regulation, new kinds of work, people owning capital, design choices (the tutor-style chatbot that removed the learning loss).
- **Fix.** Under the map add: "Line style shows how well each stop is measured. It says nothing about whether one stop causes the next; those arrows are the theory." In Method, add one line per arrow: evidence that A causes B, or "assumed". Consider a faint return arrow or a "what pushes back" stop.

### 3. The big "0" figures are contradicted by the site's own notes and by existing literatures (h)

- **What.** Map: "0 repeat tests of unaided ability"; "0 counts of decisions made by AI". Home finding 5 repeats the second as a hollow "0".
- **Why.** A claim of non-existence falls to one counter-example, and there are several.
  - Skills. Research note 03 §24 records PIAAC and NAEP and calls them "the only repeated, objective, population-level measures of unaided ability". The site omits them. The site's own skills page also shows the colonoscopy study (same 19 doctors, before and after) and the METR re-test. So three different numbers describe the same link: "0" on the map, "five studies" on the page, "7" direct readings on the measurement record.
  - Institutions. Unverified, from memory: field studies report how often judges depart from pretrial risk scores (Kentucky, Virginia) and how often child-welfare screeners override a risk score (Allegheny County); hospitals have decades of data on overridden clinical alerts; the EU's Digital Services Act database records, per moderation decision, whether it was automated. The gaps table says the nearest thing to an override rate is "One lab experiment (292 people)". That undersells what exists.
  - The zero is also too narrow. It counts only governments. Firms are institutions too (hiring screens, credit, moderation, trading).
- **Fix.** Replace each "0" with a true, bounded statement. Skills: "5 one-off studies; no panel" or show "PIAAC: 258, down 12" as a nearby series with "not attributable to AI". Institutions: "0 governments publish decision counts" (keep "governments", and add "that we found"). Add the override literature to the institutions page as "nearest thing that exists". Never print a bare 0 where the honest figure is "none found in this search".

### 4. "Already past the 2030 forecast" does not hold on a like-for-like basis (f)

- **What.** Chart title, used on the home page and on Futures: "Workers' share of US income has already fallen further than economists expected by 2030 with moderate AI progress". Annotation: "Q2 2026: −1.8, already past the moderate forecast for 2030 (−1.5)".
- **Why.** Four separate problems.
  - One quarter against an annual figure. Recomputed from `LS_Q`: Q2 2026 against the 2025 average is −1.77. The first half of 2026 against the 2025 average is −1.38. The latest four quarters against the 2025 average is −0.89. Only the single-quarter figure passes −1.48.
  - The series is noisy. The standard deviation of quarterly changes is about 0.7 points. A quarter at least 1.5 points below the previous year's average happened 11 times between 2001 and 2022 (in 2002, 2009, 2010, 2021 and 2022), all at or before ChatGPT's launch.
  - The baseline flatters the fall. Q1 2025 was high (55.3 on the rescaled series), so Q4 2025 was already 0.5 below the 2025 average while the survey was still open (Oct 2025 – Feb 2026).
  - Different measures. The forecasters' series reads 55.5% for 2025; the rescaled BLS series reads 54.6%. The chart says "indicative"; the title does not.
  - Also: the share was flat for three years of rapid adoption (54.5, 54.7, 54.6 in 2023–25 on the rescaled series). The "record low" is two quarters old and subject to revision.
- **Fix.** Retitle: "In the latest quarter, workers' share was 1.8 points below its 2025 average; economists expected 1.5 by 2030". Add to the note: "On a four-quarter average the fall is 0.9 points. One quarter is not a trend, and BLS revises this series." Plot the 2026 point as a hollow marker until four quarters exist. Drop the claim from the home page or move it below the fold.

### 5. "It could not, yet" is unfalsifiable as written (g, i)

- **What.** "The evidence does not show disempowerment. It could not, yet."
- **Why.** The second sentence turns an absence of evidence into support for the thesis. A reader cannot tell "unmeasured" from "not happening" from "too loosely defined to measure". "Yet" presumes the direction. "Not yet" as a signpost label does the same ("A documented failure to take a process back from AI: Not yet").
- **Fix.** Keep the first sentence. Replace the second with: "The measures that could show it, or rule it out, do not exist." Add a short box, "What would count against this": four or five dated observations (for example: the young-worker gap closes by 2028; a repeated unaided-ability panel shows no decline; AI stream share stays under 5%). Rename "Not yet" to "Not seen".

### 6. "Direct" and "nearby" are applied inconsistently (c)

- **What.** The measurement record's blue/grey split, defined as: direct "if it measures what the link claims", nearby "if it is a proxy, a count of paperwork, or a trend that cannot be tied to AI".
- **Why.** Specific cases a commenter will list:
  - The BLS labour share is classed nearby under a link called "Workers' share". It measures workers' share exactly. It is demoted because it "cannot be tied to AI".
  - The ADP young-worker series is classed direct, though "the cause is disputed". Same attribution problem, opposite class.
  - Pew's control question is described on its own chart as "the only direct, repeated measure of whether people feel in control" and classed nearby.
  - Under Skills, "Conversations with severe distortion potential" (a classifier's estimate from one company) is direct. So are two studies the site says "measure performance with AI, not ability without it".
  - Under Capability, price per token is direct. Under Hand-over, an unaudited Google executive statement is direct.
  - Under Culture, ChatGPT's weekly user count is direct.
- **Fix.** Split the one judgement into two columns: "measures the named quantity?" and "attributable to AI?". Publish the 38-row table in Method with a one-line reason each. Recount. If the pattern survives, it is much stronger for having shown its working.

### 7. The five-step rating mixes four criteria and is not applied by its own definitions (c)

- **What.** Scale: repeated, direct, independent, attributable, collapsed into one number by one rater who holds the thesis the ratings produce.
- **Why.**
  - Capability is rated 4 ("independent evaluator"). The definition of 3 is "from a single source". METR is a single source, software only, with a 95% interval of 5 to 61 hours on the headline figure, and its newest point is "above the range METR considers reliable". The other two capability indicators are company data and prices. By the site's rule this is a 3, and the flagship measure is hitting its ceiling.
  - Entry-level work gets 3 with "the cause is disputed". Workers' share gets 2 with "not attributable to AI". The line between those two phrases is not defined.
  - Hand-over gets 3 on three samples from one company's own classifier, restated once, last published for November 2025.
  - "Bodies with no stake in the answer" (home page): a hostile reader will say an AI-safety evaluator has a stake.
- **Fix.** Show a rubric: four yes/no/partly cells per link, and the rule that turns them into bars. Drop Capability to 3 or change the definition. Say "independent of AI developers", not "no stake in the answer". Ask one outside person to rate blind and report agreement.

### 8. The measurement record counts publication frequency, and its title is contradicted by its own totals (c, i)

- **What.** "Direct measurement thins out along the chain, then stops". "Every dated observation behind this site, 412 in all".
- **Why.** The direct totals by row are 35, 31, 13, 123, 0, 7, 40, 0. That is not thinning; link 4 has the most and link 7 has more than links 1 to 3. 120 of the 412 ticks are two lanes from one monthly dashboard. About 40 are monthly court counts. A monthly index earns 60 ticks; a randomised trial earns one. "412 observations" signals rigour the count does not carry.
- **Fix.** Retitle to what the chart shows: "Past the fork, direct measurement is patchy; at the end there is none". Add: "Tick counts reflect how often a series is published, not how strong it is." Drop "412" from the kicker, or say "412 data points from 38 series".

### 9. Every headline figure on the map is the alarming end of its own range (b)

- **What and fix, stop by stop.**
  - "≈12 h tasks finished half the time". Desktop caption drops "software". The same page gives 70 minutes at 80% success, an interval of 5 to 61 hours, and three other current models at about 6 hours. Use "≈12 h (5–61 h), software tasks, 50% success".
  - "52% of US workers use AI at work". This is "a few times a year or more". Daily use is 15%; 5.7% of hours. Use "15% daily" or "52% at least occasionally".
  - "45% of Claude chats hand the task over". Peaked and fell; ChatGPT's comparable share fell to 35%. Use "45%, down from 49%".
  - "−13% jobs, ages 22–25, exposed occupations". For all 22 to 25 year olds the figure is about −2% (note 02). Add it.
  - "52.8%… record low". Most of the fall pre-dates AI; the site says so one click down. Add "most of the fall before 2010".
  - "≈50% of new web articles are AI-written". The page says "mostly AI-written", from an SEO firm's detectors, and cites another study at 2.5% purely AI and 74% some AI. Use "≈50% classed as mostly AI-written" and give the range.
- **Why.** Each evidence page is fair. The map is what gets screenshotted.

### 10. Series that cut the other way are in the notes and not on the site (b, d)

- **What.** Note 02 §15: the ILO global labour income share was 52.3–52.4% from 2022 to 2024, essentially flat. Note 03 §24: PIAAC and NAEP. Neither appears.
- **Why.** The site shows "record low" for the US and omits a flat world series; shows "0" for skills and omits the two repeated tests. That is the pattern a critic calls cherry-picking, even if the motive was tidiness.
- **Fix.** Add the ILO line to the workers'-share page. Add PIAAC/NAEP as a nearby series on the skills page with the caveat already in the notes ("the starting line, not evidence").

### 11. "Hand-over" carries more weight than its evidence can bear (a, e, i)

- **What.** The third trunk stop, rated 3, from which all four lines fork. Hero: the first links "are moving fast".
- **Why.**
  - Concept slip. Anthropic's "automation" class is a chat in which the user asks for an output. That is not the hand-over of decisions the later links need. The site concedes "Hand-over can be sensible".
  - Not moving fast. The site's own finding: "it has not risen steadily". 41, 49, 45.
  - Stale. Latest figure November 2025, on a site dated October 2026. Anthropic has since published no number.
  - One vendor, its own classifier, its own product, plus a Google executive statement.
- **Fix.** Rate it 2. Rename to "Delegation" or define "hand-over" on the map as "asking the AI for a finished output". Change the hero to "The first two links are measured repeatedly and are moving fast." Put "latest data Nov 2025" on the map stop.

### 12. Routes and signpost scores overreach (f)

- **What.** Four routes with tallies of Seen / Partly / Not yet / Unmeasured on each button.
- **Why.**
  - Signposts are not diagnostic. "Disclosed government AI use grows quickly: Seen" would be seen under Route A too, and the institutions page says the rise reflects reporting rules. "Workers' share falls while unemployment stays low: Seen" was true in the 2000s. "Computing power concentrates in private hands: Seen" rests on a dataset covering "10 to 20% of global capacity".
  - "Oversight rules slip: Seen" counts one deferral and no rules adopted.
  - The tallies invite a scoreboard reading, despite the note that "Seen" is "not proof". Route C shows 3 Seen; Route A shows 1.
  - Three of four routes are bad. None covers "AI progress stalls" or "strong policy response". B and C are subsets of D, so the routes are neither exclusive nor exhaustive.
  - The page opens on Route B, the one with the most support.
- **Fix.** For each signpost add "also expected under: A, B…". Remove the count badges from the buttons, or count only signposts unique to that route. Add a fifth route (stall or correction). Open on Route A. Date-stamp each score.

### 13. Reliance on AI-company data, and a circularity (e)

- **What.** Hand-over is Anthropic, OpenAI and Google. Skills leans on two Anthropic papers. Futures uses Anthropic scenarios and an Amodei quote. "Who's in Charge?" is co-authored by two authors of the *Gradual Disempowerment* paper.
- **Why.** Companies choose what to publish and when to stop (Anthropic's missing 2026 figure, OpenAI dropping a benchmark). The thesis's authors supplying the measure of the thesis is a circle a critic will point at. And that paper, the one direct attempt to measure "disempowerment", is filed under Skills while the Human influence row says "NO OBSERVATIONS EXIST".
- **Fix.** In Method, add a line: "N of 38 indicators come from AI developers; the Hand-over link depends on them entirely." Mark the authorship overlap on the "Who's in Charge?" chart. Say why it sits under Skills (it scores single conversations, not society).

### 14. AI-assisted research: 10 of 38 charts checked by a person (e)

- **What.** Method: "extracted by an AI research assistant and not re-read by a person". Tags by count: 10 "Checked at source", 19 "Publisher's page", 4 company, 4 secondary, 1 derived. The charts also plot points labelled "unverified extraction".
- **Why.** The site's own first-priority missing measure is the review rate. Its own review rate is 26%. Someone will make the joke. Plotting a figure you call unverified is an own goal.
- **Fix.** State on the home page: "The six headline figures on the map were checked at source by a person; 10 of 38 charts overall." (True on the current tags; the two zeros are the observatory's own claims.) Remove the two unverified AI-expert points (−15.5 and 8%) until read. Aim for every chart on the home page and Futures to be person-checked before the post goes up.

### 15. "Human influence: no measure exists" is a filing decision (h)

- **What.** The "?" stop; "NO OBSERVATIONS EXIST"; gaps table "None found."
- **Why.** Political science has long-running measures of people's say. From memory, unverified: the ANES external-efficacy items since the 1950s, V-Dem's participation indices, studies of whose preferences policy follows. None isolates AI. But neither does the labour share, and that gets a row of 47 ticks. The site's own Pew figure (57% feel little or no control) is filed under Institutions. The Method page cites a 2026 paper titled "Measuring AI-Induced Disempowerment".
- **Fix.** Give the last row grey ticks for the measures that exist, with "not attributable to AI". Change "No measure exists" to "No measure ties this to AI".

### 16. US and UK centrism is understated (d)

- **What.** "Mostly American… A small-state view, including Singapore, is the largest gap in coverage."
- **Why.** Of the six non-zero headline figures on the map, three are US-only (52%, −13%, 52.8%) and a fourth is the English-language web. The thesis is about humanity. The largest gap is China, India and every low-income country, not small states. The Singapore line reads as the author's own interest. Where the non-US evidence exists, it cuts against the headline (Finland, Norway, Denmark, ILO).
- **Fix.** Put "mostly US evidence" in the hero deck. Reword the limit: "Nothing here covers China, India or any low-income country." Add a coverage table: indicator by country.

### 17. Labour share is not power, and the main objection gets one bullet (b, g)

- **What.** Sceptic list: "Capital still belongs to people."
- **Why.** This is the standard economist's reply to the whole thesis. Also missing: gross versus net share (an investment boom raises depreciation and lowers the gross share mechanically; note 02 mentions depreciation); real pay levels; who owns the capital.
- **Fix.** Promote the objection to the deck. Add one tile: real median pay over the same period. Add a sentence on gross versus net.

### 18. The young-worker result needs its denominators (b)

- **What.** "−13%".
- **Why.** No absolute numbers. Top fifth of occupations only. The sample is a five-year balanced panel of firms (note 07), which excludes new firms, where young people are often hired; the page says only "not a random sample". The Census paper's effect starts "in late 2022, when few firms had deployed AI".
- **Fix.** Add jobs in thousands, the −2% all-22-to-25 figure, and one sentence on the balanced panel.

### 19. The institutions page is both off-target and too narrow (g)

- **What.** Six indicators: use-case counts, court hallucination cases, UK records, tax share, ten "milestones", Pew mood.
- **Why.** Court cases mostly record litigants without lawyers citing invented cases; that is people using AI, not institutions handing over decisions. The milestones list mixes a disputed Gaza targeting report with a Singapore chatbot statistic. Governments only: no firms, no military ("Defence and intelligence are excluded"), no AI-industry lobbying or political spending, which is the most direct route to "influence" in the original paper and is published quarterly.
- **Fix.** Retitle the court chart as a measure of AI error reaching courts. Cut or split the milestones list. Add one tile on AI-firm lobbying spend, or list it as a gap.

### 20. Padding with indicators the site itself calls irrelevant (b)

- **What.** Union membership ("Background, not an AI signal"), trust in news ("Background, not a measure of AI's effect"), seven tech firms' market value (from "a sponsored chart").
- **Why.** They add grey ticks and put long-running declines next to AI by association.
- **Fix.** Move to a collapsed "context" drawer and exclude from the record count.

### 21. Culture: detector-dependent, and complacent about ranking (g)

- **What.** "≈50%"; "Attention has not followed, yet."
- **Why.** This audience distrusts AI-text detectors. Deezer says "up to 85%" of streams on AI tracks are fraudulent, so the upload figure is largely spam. Meanwhile the culture argument in the original paper is about AI choosing what people see. Ranking systems already choose most of it, and the site lists that only as unmeasured.
- **Fix.** Lead with attention (1–3% of streams, 1% main news source) and treat supply as secondary. Add a sentence that algorithmic feeds pre-date generative AI and are the larger mediation.

### 22. Alarmist touches on Futures (g)

- **What.** "Experts put the risk of catastrophic harm from AI-driven power centralisation by 2030 at 18%". The Amodei "10–20%" bar. "AI dystopia" 26%.
- **Why.** "Catastrophic" there means any loss above $100bn, which the note calls "a low bar"; the title omits it. An executive's remark sits on the same axis as survey medians. "AI dystopia" is undefined and the other four options are not named.
- **Fix.** Title: "…harm above $100bn…". Move Amodei to the text. Name all five Metaculus options or cut.

### 23. Three vocabularies for one scale

- **What.** "Solid / Contested / Dark" on the home page; "Well measured / Measured, with limits / Indirect measure / One-off evidence / No measure" elsewhere. "Dark" carries the zero-bar icon but describes skills and institutions, which are rated 1. "Five studies" against "seven readings".
- **Fix.** One vocabulary. Give "Dark" the one-bar icon or say "barely measured".

### 24. "Observatory" with no update promise, no author statement

- **What.** "Draft v0.3". No changelog, no cadence, no statement of the author's view, funding or priors beyond "evidence-led with a view".
- **Fix.** One paragraph: who, why, what I expect, how often this is updated. A changelog link. The author's own probabilities on the "What to watch" thresholds would make the site scoreable.

### 25. Forecasts have no no-AI baseline

- **What.** "Adults in the labour force 58.3% by 2050". Workers' share −5.5 by 2050.
- **Why.** The reader cannot tell AI from ageing or trend. Note 06 records a CBO participation baseline of about 62% to 2050. On the site's own series the share fell about 8.5 points from 2000 to 2025, or 0.34 a year; continued, that gives about −1.5 by 2030, the same as the "moderate AI" forecast.
- **Fix.** Add a grey "no-AI baseline" line to the participation card and a "2000–2025 trend continued" line to the fan chart.

---

## 3. What a general reader will not understand without help

Terms used without a definition where they first appear:

- "frontier AI system" (home finding 1; defined only on the Capability page).
- "exposed occupations", "AI-exposed jobs" (map and home; defined only on the Entry-level work page).
- "hand the task over", "Hand-over", "automation" against "augmentation".
- "Claude chats", "Claude.ai", "Claude Code", "API".
- "workers' share of income" (share of what? The page says "business output", the map says "income").
- "tasks finished half the time" (reads as speed, not success rate).
- "LOG SCALE".
- "Nov 2022 = 100", "index".
- "percentage-point change from each source's own 2025 baseline".
- "median", "central view", "superforecasters", "LEAP", "Metaculus", "Delphi study", "Karger, Tetlock et al.".
- "labour-force participation" against "unemployment". The step "people leave the workforce and are not counted as unemployed" appears once, late.
- "employment rate, ages 25–54" (why this group).
- "proxy", "paperwork", "counts of paperwork".
- "use case", "high-impact".
- "override rate", "human in the loop", "auto-approve", "agent".
- "unaided ability", "take-back time", "never-skilling", "lock-in".
- "randomised" against "observational".
- "95% interval", "10th to 90th percentile".
- "SEO", "top-20 results", "streams".
- "superstar firms", "S&P 500", "capital spending… guidance".
- "UNSURVEYED", "EDGE OF MEASUREMENT", "signposts", "routes".
- "Observatory calculation", "restated", "series break", "hollow marker".
- "the original paper" (institutions tax chart; the paper is named only in Method).
- Source names with no gloss: METR, ADP, BLS, CBO, OMB, HEPI, FRED, NBER, Epoch AI, Graphite, Originality.ai, Pangram, Chartbeat, Challenger, GDPval, ATRS.

Steps in the argument that are skipped:

- Why needing people less means people lose their say. The hero gives it one clause: "because each of those systems comes to need them less". This is the whole theory and needs three sentences and an example.
- Why a fall in workers' share is a loss of power, not just of income.
- Why first jobs matter for "influence" (the pipeline of people who can check the machine).
- Why AI-made supply matters if almost nobody consumes it.
- What "human influence" would look like if it were measured.
- Who Kulveit and co-authors are. The home page never names the source of the idea.
- Mixed metaphors: "chain", "links", "stops", "lines", "routes", "map", "edge", "dark". "Halfway down the chain" does not fit a picture that forks into four parallel lines.

---

## 4. What is missing

Each is small enough for a paragraph or one chart.

1. A "What would count against this" box on the home page: five dated, checkable observations.
2. The easy-version / hard-version table for each link (weakness 1).
3. A rubric table for the ratings: repeated, direct, independent, attributable (weakness 7).
4. The 38-row direct/nearby table with reasons (weakness 6).
5. PIAAC and NAEP as a nearby series on the skills page.
6. The ILO global labour share on the workers'-share page; real median pay as a tile.
7. The four-quarter-average version of the fan-chart comparison, and a trend-continued line.
8. A no-AI participation baseline on the scenario card.
9. The interval on the 12-hour figure, on the map.
10. Absolute job numbers and the all-22-to-25 figure beside −13%.
11. Field evidence on override rates on the institutions page (to be verified).
12. An "evidence of the opposite" line on each link: where AI has widened people's say or ability. The tutor-style chatbot result and people without lawyers reaching court are already in the data.
13. A historical-analogue box: autopilot and manual flying, satnav and navigation, calculators; and the resource-curse literature the tax indicator borrows from.
14. Three sentences stating the original argument, and a link to its best published critique. The site cites no critic of the thesis itself.
15. A coverage table: indicator by country.
16. "N of 38 indicators come from AI developers"; "10 of 38 checked by a person; all map figures checked".
17. An author statement and an update policy with a changelog.
18. The author's probabilities for each "What to watch" threshold, with dates.
19. A glossary, or inline definitions on first use on the home page.
20. For each arrow on the map, one line: evidence for the causal step, or "assumed".
21. AI-industry lobbying and political spending as a candidate series for the last stop.

---

## 5. What is strongest and should be protected

- **"The evidence does not show disempowerment."** Rare restraint for this topic. Keep the sentence; fix only what follows it.
- **"What a sceptic would say" on every link, with real numbers.** Postings peaking before ChatGPT; Stanford's estimate halving after adjustment; ChatGPT's "Doing" share falling. This is what will earn trust from a hostile reader. Do not trim it.
- **Reporting against the thesis.** "Hand-over is real, but it has not risen steadily." "Most of the fall came before AI." The METR follow-up's point estimates.
- **Supply against attention on the culture page.** Over 50% of uploads, 1–3% of streams. The best single chart idea on the site.
- **The Blind spots page.** A named missing measure, what a good version looks like, the nearest thing that exists, and three to fund first. This is the original contribution and the part a funder or statistician can act on. It would survive even if the chain were dropped.
- **"What to watch" thresholds.** Concrete and checkable ("Deezer's AI stream share passing 5%").
- **Provenance tags and the admission of AI extraction.** Unusual honesty. Make it more visible, not less.
- **Series breaks marked, not repaired.** The Census wording-change chart is a model of how to do it.
- **The tax-share indicator.** A neat way to put a number on the paper's core claim that the state needs people's pay.
- **"How far to trust these forecasts".** Shows forecasters wrong in both directions.
- **Colour discipline and plain language.** Orange only for forecasts; short sentences; "Reading it" notes that state the limits beside each chart.
- **The skills page's own caveat.** "Two of the five studies… measure performance with AI, not ability without it", and the tutor-style result that removes the harm.
