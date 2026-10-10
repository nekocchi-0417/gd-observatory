# 09 · Design critique — Gradual Disempowerment Observatory (draft v0.2)

Reviewed: all 46 tiles in `/home/claude/site/review2/` (desktop light, phone, dark, tour state). Coordinates are pixels on the named tile (x, y from top-left). Nothing was edited.

**Overall verdict.** This is a careful, well-typeset report. It is not yet a banger. The typography trio, the cool-paper palette and the claim-style headlines are good. But the one idea that should hit in a second ("we can see the first links clearly and the last ones not at all") is encoded too quietly, the colour system contradicts itself, every link page puts its evidence below the fold, and most charts are default line charts stretched across a wide card. A reader who screenshots anything today will screenshot the *sentence* "The evidence does not show disempowerment. It could not, yet." rather than a picture. The fix is to make a picture that says that sentence.

---

## 1. Five-second impressions

### (a) Home (`r_map_0`)
**Understands:** serious research site; there is a chain from Capability to Human influence; some lines are solid, some dashed; the headline is a question.

**Misses:**
- The answer to the headline. "How far down the chain can we see?" is never answered in the first screen. The answer ("clearly to hand-over, partly to entry-level work, not at all to the destination") is in the lede's last sentence and 2,300 px further down.
- What solid / dashed / dotted mean. The legend is at the bottom of the map (y≈1000), below the fold on a 800-px-tall laptop viewport.
- Any number. The stats under each stop are 11 px grey monospace; nothing is large enough to stick.
- That the faint grey dotted third on the right is the whole point. It is the lightest thing on the page.
- That stops are clickable (no visible affordance at rest).

### (b) A link page (`r_handover_0`, `r_skills_0`, `r_culture_0`)
**Understands:** the claim (the headline is the finding, which is right), which link this is, and the measurement rating.

**Misses:**
- The chart. On every link page the chart title starts at y≈630–735; the plot itself is below the fold. The first screen is all words.
- That the stat cards are tabs. They look like a KPI row.
- The sceptic's case, which is the site's most distinctive content, is a full scroll further down.

### (c) Futures (`r_futures_0`)
**Understands:** these are other people's forecasts, not the observatory's (good kicker); three scenarios in an orange ramp.

**Misses:**
- A reason to care. The first visual is four thin stacked bars: it reads as a survey appendix.
- The page's best finding (actual labour share is already below what economists expected for 2030) — it lives in a footnote under chart 3.
- That "Pick a world" is interactive and the best thing on the page; it sits below the fold with small 130-px charts.

---

## 2. Ranked defects (most severe first)

### A. Things that weaken the core message

**1. The verdict is buried.** `r_map_1`, y≈900–1000. "The evidence does not show disempowerment. It could not, yet." is the thesis and the most shareable line on the site, and it is the fourth block on the home page. The hero headline is a question with no visible answer.
*Fix:* answer the question in the hero. Either make that sentence the H1 (and demote "How far down the chain can we see?" to the kicker), or add a one-line scorecard directly under the H1: "Well measured: 2 links · Measured with limits: 2 · Indirect: 2 · One-off: 2 · The destination: no measure". Move the Solid / Contested / Dark triad to sit immediately under the map, above "Five things".

**2. The map's fade from solid to dotted is too subtle to be the identity.** `r_map_0`, whole map; legend crop at y≈1003. Levels 4 and 3 are both solid at the same width and differ only by navy vs mid-blue. Levels 2 and 1 differ by dash thickness and tint. At a glance the map reads "blue lines, some dashed". The unmeasured segments (grey 2-px dots on near-white, x 830–1090) almost vanish.
*Fix:* widen the steps: stroke widths about 10 / 7 / 5 / 3 / 1.5 px, and make level 3 visibly different from 4 (e.g. a thin white centre line, or 70% width). Turn the unmeasured zone into a region rather than a line style: a faint hatched or tinted band across the right third labelled "UNSURVEYED" in the mono face, with a vertical "edge of measurement" rule where the last instrument sits. Old survey charts mark unknown ground; use that.

**3. Orange is not reserved for projections.** The stated system is blue = measured, orange dashed = projection. Orange is in fact the default second series for measured data:
- `r_capability_0` 80%-success line (y≈830–1085)
- `r_handover_0` augmentation line
- `r_skills_0` UK undergraduates
- `r_culture_0` streams
- `r_institutions_0` high-impact bars
- `r_map_1` sparklines 03 and 04 ("Least exposed", "Streams")

Green also appears twice with no meaning (`r_skills_0` US teens; `r_futures_2` "with pragmatic mitigations").
*Fix:* measured series use the blue ramp plus ink/grey only (dark blue = primary, light blue or slate = comparison). Orange appears only for forecasts. Delete green; use ink for the mitigated case. Then say it once in a persistent key in the footer or method page.

**4. Dashed means two different things.** On the map, dashed = present-day evidence that is weakly measured. On every chart, dashed = forecast. A careful reader can reasonably read the dashed blue Culture line as "projected".
*Fix:* keep dash for the map but make hue carry the split everywhere: blue of any dash pattern = observed; orange = forecast; grey dotted = nothing exists. Put those three swatches in the map legend as a first row, before the five-step scale.

**5. Evidence is below the fold on every link page.** `r_handover_0` (chart title y=703), `r_skills_0` (y=705), `r_culture_0` (y=735), `r_institutions_0` (y=735). H1s run 3–4 lines at ~44 px in a 560-px column while the right half (x 700–1200, y 150–380) is empty; ledes run 5–6 lines.
*Fix:* two-column hero. Left: H1 at ~36 px, max 3 lines, lede cut to two sentences (move the rest into the chart note). Right, top-aligned with the H1: the headline number at 64–72 px with a 60-px sparkline and the rating block under it. Target: plot area starts by y≈520.

**6. Home sparklines have no scale and one exaggerates.** `r_map_1`, x 795–1190. No start values, no baseline, each on its own y-range. Item 02 draws 41 → 49 → 45 as a mountain. Item 01 says "log scale" in a caption but shows no ticks. End labels land at four different x positions (1108, 1078, 1055, 1075).
*Fix:* label the start value at the left end of each line, add a faint reference line (zero, 50%, or index 100), give all five the same plot box and a shared right-hand label column. For 02, plot on a 0–100% axis so the move looks like what it is.

### B. Chart-level problems

**7. The forecast chart's junction is a knot.** `r_futures_1` x 565–675, y 785–845 (and `r_map_2` x≈600, y≈570). Forecast lines start at 0 in 2025, before the shaded "Forecasts" band begins; history ends at −1.8 in Q2 2026; the LEAP line starts from a separate grey dot a year earlier. Five markers sit within 40 px. Two of the three Anthropic open circles sit on top of other series' points and are unlabelled.
*Fix:* crop history to 2015+ (or give history 35% of the width), start the shading at the forecast base year, label "modest" and "substantial" or drop them, and put the finding on the chart: an annotation at the blue end point, "Already −1.8: below what economists expected for 2030".

**8. Hand-over chart: six data points in a 1,060 × 280 plot.** `r_handover_0`, y 800–1090. Truncated 30–70% axis; the "crossing" in the title is 49 vs 47; start values are unlabelled; the annotation "Feb 2026: augmentation 'increased slightly'" (x≈977, y≈870) floats with no marker or leader; the right 30% of the x-axis is empty.
*Fix:* make it a half-width chart with all six values labelled, a hollow marker at Feb 2026 for "no figure published", and use the freed half for the other three indicators as small multiples. Retitle to the honest size of the move: "Automation rose to 49%, then eased to 45%".

**9. Institutions bars are lost in the plot and the title overclaims.** `r_institutions_0`, y 840–1080. 26-px bars in a 1,020-px plot; 2023 has no orange bar (missing or zero?); the orange category changes definition between 2024 and 2025 but keeps one colour; the title says "grew fivefold" while the note says the years are not like-for-like.
*Fix:* narrow the chart, bars ~80 px, hatch the 2024 bar or split the legend into two entries, write "not reported" at 2023, and retitle: "Disclosed uses: 710 → 3,611 as reporting rules widened".

**10. Capability chart details.** `r_capability_0`.
- The tab card says ≈12 h; the bold end label says 17 h, and 17 h sits inside the band the chart itself marks unreliable (y 760–783). The solid line runs into that band as if nothing changed.
- Y ticks are irregular: 1 sec, 15 sec, 1 min, 4 min… leaves a double-height gap at y 1005–1078.
- "Other models" is six faint grey dots but is first in the legend.

*Fix:* draw the 17 h point hollow with a dashed connector and label it "17 h (unreliable)"; make 12 h the bold label. Add a 4 sec tick. Put the grey-dot item last in the legend or drop the series.

**11. Disagreement chart legend is overloaded and mismatched.** `r_futures_1`, y 595–630. Seven legend items on two rows; the legend shows a filled black dot for the Anthropic model but the chart draws open circles; "AI experts −15.5" is a lone dot with no line.
*Fix:* remove the legend; direct-label every series at its end point (most already are). Give the lone points a short stem to the zero line so they read as estimates.

**12. Futures small multiples under-explain themselves.** `r_futures_0` y 1100–1390, `r_futures_1` y 0–300.
- The grey dashed lines are the other two scenarios but are never labelled.
- The text card "What moves, and what does not" talks about the rapid world while "Central view" is selected.
- Plots are ~130 px tall with three points each.
- Only one panel has whiskers.

*Fix:* label grey lines "slow" / "rapid" at their right ends; make the text card change with the selection (or retitle it "In the rapid world"); raise plot height to ~180 px; state "no intervals published" inside the panels that lack whiskers rather than in a footnote.

**13. Unemployment bar chart compares unlike things.** `r_futures_2`, x 105–560. Whole-workforce unemployment, recent-graduate unemployment and a quoted range share one axis and one bar style.
*Fix:* split into two groups with a rule between them ("All workers" / "Recent graduates") and draw the Amodei quote as a range bracket in the first group.

**14. Stacked bars.** `r_futures_0`, y 617–775. 16-px bars; 11-px white mono on mid-orange is about 3:1 (fails AA); decimals are inconsistent (45% beside 38.6%); the LEAP row is from a different survey but looks like the same instrument; rows are not sorted.
*Fix:* 28-px bars, dark text on the two lighter segments, one decimal everywhere, sort by "rapid" share, put a thin gap and a small "different survey" tag above the LEAP row.

**15. Culture chart.** `r_culture_0`, y 1070–1090. The streams line lies on the x-axis; the square bracket glyphs around its last two points are unexplained; "over 50%" labels a point drawn at exactly 50.
*Fix:* draw 1–3% as a shaded band rather than a line with glyphs; lift the baseline 6 px off the axis; add a ">" tick or open-top marker for "over 50%".

**16. Skills panel: timeline that is not a timeline.** `r_skills_0`, x 655–1180. A vertical line with nodes implies sequence, but the order is Sep 2023, autumn 2023, 2021–22, 2025, Jan 2026.
*Fix:* best option is to plot the five studies as single dots on the same time axis as the left chart, in a row beneath it, so "lines above, lone dots below" is visible in one glance. Minimum: sort by date and drop the connecting line.

**17. Dumbbell chart.** `r_futures_2`, x 680–1140. Pink and grey interval bands overlap and turn muddy; left-hand values float at ragged x positions.
*Fix:* draw the two intervals as offset thin bars (one above, one below the centre line); put both values in a fixed right-hand column.

### C. Map and tour

**18. Label collisions on the map.** `r_map_0`.
- "52.8% of income" is struck through by the dotted line at x≈940, y≈568.
- "people are needed less" is printed on top of two converging dotted lines (x 985–1085, y 590–690).
- "Human influence" runs to x≈1206, past the 1200 content edge.
- Just right of Hand-over (x 500–580, y 700–720) four lines leave from two different points with a short stub.

*Fix:* route Workers' share → Human influence horizontally first, then diagonally, like the other three; give all map text `paint-order: stroke` with a 3-px paper-coloured halo; put edge labels on horizontal segments only; fan all four branches from one point.

**19. The numbers are the smallest thing on the map.** `r_map_0`. Stats are 11-px grey mono; signal bars ~12 px; the left third is a single horizontal line with ~200 px of empty grid above and below. Desktop copy is also more cryptic than mobile ("12 h tasks at 50%" vs mobile "12-hour tasks, half the time").
*Fix:* at each stop set the figure at ~22 px Archivo with the unit in 11-px mono under it. Use the mobile wording on desktop. Fill the empty band under the first three stops with their sparklines, or cut map height to ~440 px.

**20. The graph-paper grid implies axes that do not exist.** `r_map_0`, `r_m_map_0`. Grid lines are about the same lightness as the "no measure" dots and cut through text on mobile.
*Fix:* either remove it, drop it to dots at ~25% opacity, or make it mean something: four labelled columns (Capability → Use → Effects → Outcome).

**21. Tour.** `r_tour_0`.
- The panel is inserted between map and legend and pushes the page down ~140 px (layout shift).
- It sits 300 px from the active stop and contains text only.
- Inactive elements fade to ~12% so the chain's shape disappears.
- The button still says "Play the tour" while playing.

*Fix:* reserve the panel's space (or overlay it at the bottom of the map); fade to ~35%; show the stop's number and sparkline in the panel; toggle the button to "Exit tour"; add nine progress dots. Consider driving it by scroll instead of autoplay.

**22. Mobile map draws parallel branches as one series.** `r_m_map_0`, y 800–1140. Entry-level → Workers' share → Skills → Culture → Institutions hang off a single vertical line, so they read as consecutive steps.
*Fix:* draw a spine with four short branch ticks (a bracket/tree), or add group labels ("Work", "Skills", "Culture", "State") with a gap between groups.

### D. Layout, typography, consistency

**23. Indicator tabs look like KPI tiles, and their baselines drift.** `r_culture_0` y 580–690 (values at y 634 and 650), `r_institutions_0` ("10 firsts" y 619, "57%" y 650). Six cards at 180 px force mono captions to wrap. Selected state is only a 3-px top rule. A 10-px gap separates tabs from the panel they control.
*Fix:* use subgrid so label, value and caption rows align across cards; join the selected tab to the chart panel (shared background, no bottom border); cap at four visible with horizontal scroll for the rest.

**24. Value grammar is inconsistent.** "≈12 h", "≈50%", "over 50%", "50%+" (home sparkline), "about 75%", "72% or 9%", "÷13 a year", "10 firsts". Pick one approximate marker ("about"), one range form, and use it everywhere.

**25. Evidence index is a plain table.** `r_evidence_0`. No figure or sparkline per row; status column is 150 px so trends wrap to three lines; header's right 40% is empty; the Human influence row puts "→" in the number column.
*Fix:* add a headline-number column and a 100-px sparkline; widen status; replace the stray arrow with "09" or "?"; put a small chain map in the header's empty space.

**26. Blind spots page hides its best content.** `r_gaps_0`, `r_gaps_1`. Fourteen identical rows starting with the two well-measured links; "NEAREST THING THAT EXISTS" printed 14 times; "If only three could be funded" is at the very bottom.
*Fix:* lead with the three priorities as large numbered cards; sort the table darkest link first; set the column heading once; mark the three priority rows.

**27. "How far to trust any of this" is five 170-px columns.** `r_futures_2` y 1370+, `r_futures_3`. About 22 characters per line in 16-px serif, heights from 5 to 11 lines.
*Fix:* a two-column table: "What was forecast" / "What happened", five rows.

**28. Caveats are set in the smallest, greyest type.** 12-px grey sans carries the most important honesty statements: `r_futures_2` y 583–622 ("The four pathways are the observatory's own…"), `r_futures_1` y 322–360 ("…not a measure of uncertainty"). Mono kickers are ~10–11 px.
*Fix:* 14-px minimum for any sentence; caveats in the serif note style at full ink; check all grey text for 4.5:1.

**29. Chart titles break badly while half the card is empty.** `r_capability_0` y 630–655 ("…the task / length frontier models can complete"), `r_map_2` y 322–347 ("…25 years of / history and…").
*Fix:* widen title max-width to ~34em and add `text-wrap: balance`.

**30. Container patterns vary.** Title inside the card on home and link pages, outside on futures §1 and §3. The rule above chart notes spans only x 103–735 (`r_capability_0` y 1164). Two box styles: soft rounded cards vs hard dark-bordered callouts (`r_gaps_1`, `r_method_0`).
*Fix:* one rule: the claim-title always sits inside the card; full-width rules; one callout style.

**31. Four link styles.** Blue with arrow (home), black bold underlined (blind spots, method), grey underlined (sources), blue underlined (footer, futures sources). Choose two: navigational (blue + arrow) and citation (underlined ink).

**32. Tag vocabulary mismatch.** `r_futures_1` y 1224 shows "DERIVED"; the method page (`r_method_0` y 1040–1310) defines "OBSERVATORY CALCULATION" and has no "DERIVED". Use one.

**33. Three-column sceptic / nobody measures / watch block.** `r_capability_1`, `r_handover_1`. Column heights differ by up to 150 px; hairline "–" bullets; it comes last although it is the site's differentiator.
*Fix:* pull the strongest sceptic point up beside the chart as a margin note; in the block, cap each column at three items with "more".

**34. Templated tells.** 1-px bordered rounded cards with small grey captions, uppercase mono kicker over every heading, KPI tiles, three-column feature row, pill segmented control. None is wrong, but together they are the look the owner wants to avoid.
*Fix:* drop borders on chart cards (let charts sit on the paper with a top rule), keep mono kickers for section numbers only, and spend the saved chrome on one distinctive chart form (see §3).

### E. Dark theme

**35. Ramps invert.** `r_dk_map_0`: best-measured lines become the palest blue and the "indirect" dashed line the most saturated, so Culture pops more than Capability. `r_dk_futures_0`: Slow is dark brown and Rapid pale peach, the reverse of light theme. Two screenshots of the same chart in different themes carry opposite legends.
*Fix:* keep hue order fixed across themes; in dark, let brightness rise with measurement quality but keep saturation high for level 4.

**36. Low-contrast marks in dark.** `r_dk_map_0`: Skills and Institutions rings (x≈810, y≈653 and 880) are dark navy on near-black, under 3:1. `r_dk_futures_0`/`_1`: grey dashed scenario lines and dumbbell bands are muddy.
*Fix:* minimum 3:1 for all marks against the dark surface; lighten the level-1 blue and the neutral grey.

### F. Mobile

**37. Tabs cost a screen.** `r_m_skills_0` y 715–1060: five cards in a 2-column grid with an orphan, 350 px before the chart.
*Fix:* horizontal scroll-snap strip, one row.

**38. Copy says "left" and "right" in a stacked layout.** `r_m_skills_0` y 1138, `r_m_skills_1` y 298. Use "above/below" or neutral wording ("the surveys", "the studies").

**39. Disagreement chart is unreadable at 400 px.** `r_m_futures_1` y 1520+, `r_m_futures_2` y 40–70. History squeezed into ~100 px; "Anthropic extreme" label runs over the y-axis labels; legend takes five lines.
*Fix:* mobile variant from 2020, direct labels only, taller plot (1:1).

**40. Small things.** Prev/next labels misalign when one wraps (`r_m_skills_1` y 1445–1470); route mini-map numerals ~8 px (`r_m_futures_3` y 510–620); "0 decision counts published" label nearly touches the right edge (`r_m_map_1` y 1573).

### G. Minor

**41.** Home kicker separators are inconsistent: spaces between the first three items, "·" before the date (`r_map_0` y 101).
**42.** Hero lede top (y≈140) and H1 cap-height (y≈155) are not aligned.
**43.** "0 decision counts published" (`r_map_1` x≈940, y≈703) is grey. It is the most striking number on the page; set it in full ink or outline style at the same size as 3,611.
**44.** Inline "See what is missing →" is 13-px sans inside 19-px serif (`r_map_1` y 1365); baseline and size clash. Put it on its own line.
**45.** Method sources: every line underlined makes a wall; the Skills list breaks across columns with no repeated header (`r_method_1`). Underline on hover only; `break-inside: avoid` per group.
**46.** Legend on the map wraps to two rows with the last two items orphaned (`r_map_0` y 1003–1030). Set it as a five-step horizontal scale with one caption at each end ("better measured ← → not measured").

---

## 3. Where it falls short of the bar, and the five highest-leverage changes

**Shortfall.** The site is modular and coherent, and its tone is right. What is missing:
- **No image that makes the argument alone.** Copernicus has the warming stripes and the thermometer; METR has the one log line; AI 2040 has its timeline. Here the map is a diagram of the argument's structure, not of its finding.
- **Low information density in charts.** Several plots stretch 3–7 points across 1,000 px.
- **Interactivity is tabs plus an autoplay tour.** "Pick a world" and the route signposts are the only places where a choice changes what you see.
- **Every link page is the same template**, so pages 3–8 feel like forms being filled in.

### Five changes, in order of leverage

**1. Make the map state the finding, and make it the share image.**
- Answer the headline in the hero (scorecard line or swap H1 to the verdict).
- Widen the line ramp; set each stop's number at ~22 px.
- Shade and label the right third "UNSURVEYED" with an "edge of measurement" rule.
- Fix the four collisions.
- Export this exact view, with title and source line baked in, as the Open Graph image.

**2. Add one signature chart: the measurement record.**
A strip chart with eight rows (one per link) on a shared 2019–2026 time axis; every published observation is a tick. Capability and Adoption are dense with ticks; Skills shows five lone dots; Institutions three; Human influence an empty row. This turns "measured every month vs measured once" into one picture, and it generalises the Skills panel, which is already the best composition on the site. Put it on the home page directly under the map (or as the header of Blind spots). This is the screenshot.

**3. Enforce one colour and line grammar everywhere.**
Blue = observed, orange = forecast, grey dotted = no measure. No orange or green on measured data. Same hue order in dark theme. One key, shown on the map legend and method page. This is mostly find-and-replace in the chart config and removes the largest source of possible misreading.

**4. Rebuild the top of the link page so the evidence is on the first screen.**
Two-column hero with a 64–72 px headline number and sparkline on the right; H1 ≤ 3 lines; tabs joined to the chart panel; the strongest sceptic point as a margin note beside the chart. Give each chart card a "copy link / save image" control with the claim title and source in the image.

**5. Turn Futures into "where we are against where forecasters said we would be".**
Open with the labour-share fan (history cropped to 2015+, junction untangled, on-chart note that the actual is already past the 2030 median). Then "Pick a world" with larger, labelled panels, and let the selection also drive the route mini-map and signposts so one control changes the whole page. Move the stacked bars down; replace the five-column caution with a "forecast vs outcome" table.

---

## 4. Already working — do not change

- Claim-style H1s on link pages; the sentence "The evidence does not show disempowerment. It could not, yet."
- The sceptic / nobody measures / what to watch triad as a fixed structure.
- The signal-bar glyph for measurement quality, and its reuse in nav, index and method.
- Archivo + Source Serif 4 + IBM Plex Mono, and the cool paper with blue ink.
- Source tags ("Checked at source" etc.) and the data-table toggle under every chart.
- Direct end-of-line labels on charts.
- The Skills panel's idea: repeated surveys beside one-off studies, with "No second wave".
- The route cards with Seen / Partly / Unmeasured signposts.
- The link sub-nav with ramp-coloured bars.
- Switching the map to a vertical list on phones (fix the branching, keep the approach).
- "Published forecasts, not the observatory's own" in the Futures kicker.

---

## 5. Encodings that could mislead a careful reader

1. **Dashed = weak evidence (map) vs dashed = forecast (charts).** See defect 4.
2. **Orange on measured data** contradicts "orange = projection". See defect 3.
3. **Labour-share fan** (`r_futures_1`, `r_map_2`): history and forecasts use different definitions and different base years, yet share one axis; forecasts restart from 0 in 2025 while the actual is already at −1.8. The caveat is in a footnote. Straight segments between the 2030 and 2050 medians imply a known path, and the kink at 2030 is an artefact of having two points.
4. **Scenario spread reads as uncertainty.** In the small multiples the two grey lines bracket the orange one like a confidence band. The footnote says it is not one; the picture says it is.
5. **Hand-over chart**: truncated axis plus a title built on a 2-point crossing from one vendor's classifier.
6. **Home sparkline 02 and 03**: no axis; 03 is an index (108 vs 87) whose gap looks larger without the 100 line labelled.
7. **Capability**: the 17 h point is drawn solid and bold inside the band marked unreliable; the page's own headline figure is 12 h.
8. **Institutions**: bars of the same colour for categories whose definitions changed; missing 2023 bar could be read as zero; "fivefold" in the title.
9. **Unemployment bars**: recent-graduate and whole-workforce rates on one scale.
10. **Skills left chart**: three surveys of different populations and different questions share one axis; 94% vs 52% invites a comparison the data cannot support. Add "not comparable in level; compare slopes".
11. **Skills right list**: connected nodes imply a sequence or a trend where the point is that there is none.
12. **Mobile map**: parallel branches shown as serial steps.
13. **Map segments**: the line style into a stop encodes that stop's rating, but a reader may take the Entry-level → Workers' share dashed segment as a measured causal link between those two. A short legend note ("line style shows how well the stop it leads to is measured") would cover it.
14. **Dark theme** inverts both ramps (defect 35).
15. **Culture**: "over 50%" drawn at 50; a range (1–3%) drawn as a single line.
