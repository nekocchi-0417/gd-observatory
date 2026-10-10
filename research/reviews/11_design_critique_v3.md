# 11 · Design critique — Gradual Disempowerment Observatory (draft v0.3)

Reviewed: all 101 images in `/home/claude/site/review3/` (desktop light, tour, dark, phone, and the 19 chart sheets). Coordinates are pixels on the named tile, as (x, y) from top-left. Nothing under `/home/claude/site` was edited.

---

## 1. Verdict

1. **Not yet at the bar, but one round away.** v3 is a coherent, well-typeset site with a real hero. v2 was a careful report. The colour grammar now holds on almost every chart, and the evidence is on the first screen of every link page.
2. **What stops it:** the two signature images each undercut their own headline. The map says "runs out halfway" and draws the edge of measurement at 85% of the width. The measurement record says "thins out, then stops" and its densest row is row 4 of 9.
3. **Strongest image:** the home hero plus map (`r_map_0`, light). Headline, lede, map and the hatched "unsurveyed" strip read as one picture. Strongest single chart: Entry-level work (`r_work_0`, y 590–890).
4. **Weakest page:** Futures. The chart starts at y≈600 after a 5-line lede and a 3-line H2; the fan chart carries four unlabelled marks; hollow markers mean three things; the small multiples are not on a shared grid; three things break on the phone.
5. **Biggest residual "template" tell:** six "chart" panels are rows of KPI tiles with no chart, and every link page ends with the same three-column block with ragged heights.

---

## 2. The 46 earlier defects

| # | Status | Note |
|---|---|---|
| 1 | Fixed | H1 is now the answer; "The view from here" sits directly under the map. |
| 2 | Partly | Line ramp is clear (12 px navy / 6 px blue / hollow / dots / faint dots). Unsurveyed zone exists but is 195 px wide, hatch near-invisible, label 10 px grey. |
| 3 | Fixed | No orange or green on observed data anywhere I can find. |
| 4 | Partly | Dashes gone from the map. But dotted blue now means three things and unselected forecasts are grey dashed (see §4). |
| 5 | Fixed | Plot areas start at y≈520–600 on every link page. Not fixed on Futures (new defect N10). |
| 6 | Mostly | Start labels, reference lines, 0–100 axis on sparkline 02. Two new nits (N14). |
| 7 | Partly | Home version is clean. Futures version still has four unlabelled marks and a label touching a line (N9). |
| 8 | Partly | Honest title, all six values labelled. Still 3 points per series across 740 px, axis still 30–70%, Feb 2026 note still floats with no marker. |
| 9 | Mostly | Bars 58 px, "not reported" at 2023, honest title. The redefined 2024/2025 category still shares one swatch. |
| 10 | Mostly | 17 h hollow and labelled unreliable, 12 h bold, ×4 ticks, legend reordered. New: the 12 h label sits inside the "unreliable" band (N7). |
| 11 | Partly | Legend removed, direct labels. Lone hollow points unlabelled. |
| 12 | Mostly | Grey lines labelled, text card follows the selection, notes inside panels. New: plots misaligned (N11). |
| 13 | Fixed | Two groups, outlined bars for quote and unverified figure. |
| 14 | Fixed | 26 px bars, dark labels, one decimal, sorted, "different survey" tag. New phone problem (N15). |
| 15 | Partly | Bracket glyphs gone, stream line lifted. "over 50%" is still a closed dot drawn at exactly 50; 1–3% is still a single line. |
| 16 | Partly | Sorted by date, connecting line removed. Still a list, not dots on the shared time axis. |
| 17 | Mostly | Fixed value columns. Bands still overlap; in dark they almost vanish (N27). |
| 18 | Partly | The four v2 collisions are gone. Branches still leave from two points, and there are three new collisions (N3, N4). |
| 19 | Fixed | Stop figures at ~24 px, plain captions, legend fills the old empty band. |
| 20 | Fixed | Grid removed. |
| 21 | Fixed | Overlay panel, no layout shift, ~35% fade, progress dots, Pause / Exit. |
| 22 | Fixed | Group labels (Economy / People / Culture / State) and "four lines run side by side". |
| 23 | Mostly | Tabs joined to the panel, value baselines aligned. Six-tab rows are cramped (N13). |
| 24 | Partly | "≈" and "about" both in use, plus "over", "under", "40%+", ">45 min", "almost half" (N19). |
| 25 | Partly | Headline-number column and a header mini-map added. No sparkline per row; the mini-map is unlabelled. |
| 26 | Fixed | Three priorities first, least-measured first, column heading once, priority tags. |
| 27 | Fixed | Two-column table. |
| 28 | Partly | Link-page caveats moved into "Reading it" at 15 px serif, full ink. Futures footnotes are still 13 px grey sans; panel notes ~10.5 px grey mono. |
| 29 | Mostly | Titles balanced. Two bad breaks remain (N22). |
| 30 | Partly | Card = top rule plus tinted panel, consistently. Futures §1 and §3 still put the claim outside the card. |
| 31 | Not fixed | Still five link styles: blue + arrow, bold ink + arrow, bold underlined ink, grey underlined, plain ink with no affordance (method sources), plus blue underlined in the footer. |
| 32 | Fixed | "Observatory calculation" used in both places. |
| 33 | Partly | A sceptic-flavoured margin note now sits beside each chart. The three-column block is unchanged: ragged heights (up to ~300 px on `r_work_1`), hairline dashes, last on the page. |
| 34 | Partly | Card borders dropped. Mono kicker over every heading, KPI tiles and the pill control remain. |
| 35 | Fixed | Orange order identical in both themes; blue brightness rises with measurement quality in dark. |
| 36 | Partly | Map rings fine. Dumbbell bands still muddy in dark. |
| 37 | Fixed | One-row scroll strip. |
| 38 | Fixed | Neutral wording. |
| 39 | Mostly | Phone variant with direct labels. Four unlabelled marks remain. |
| 40 | Partly | Prev/next aligned. Route mini-map numerals still ~7 px on phone. |
| 41 | Fixed | All separators are "·". |
| 42 | Changed | Lede and H1 now share a bottom edge, not a top edge. Acceptable. |
| 43 | Fixed | Outlined "0" at the same size as 3,611. |
| 44 | Fixed | Link moved to the tag row. |
| 45 | Mostly | Underlines removed, groups kept together. New: columns unbalanced and no link affordance (N24). |
| 46 | Fixed | Five-row legend, top-left of the map. |

Tally: 19 fixed, 9 mostly, 16 partly, 1 not fixed, 1 changed.

---

## 3. New defects in v3, most severe first

### A. The two signature images contradict themselves

**N1. The measurement record does not show its headline, and disagrees with the ratings printed beside it.**
`r_map_1` y 713–1000 and `r_map_2` y 0–560.
- Headline: "Direct measurement thins out along the chain, then stops". Direct counts by row: 35, 31, 13, **123**, 0, 7, **40**, 0, 0. The eye lands on Entry-level work (two solid lanes of monthly ticks, `r_map_2` x 568–1062, y 42–66). Nothing thins.
- Row 07 is labelled "Indirect measure" and carries 40 blue "measures the link itself" ticks (`r_map_2` y 305–360).
- Row 08 is labelled "One-off evidence" and carries a monthly lane of about 40 ticks (`r_map_2` x 727–1070, y 421).
- Tick count rewards publishing cadence, not quality: one monthly series outweighs METR.
- Lanes are unlabelled; "Select a lane to open its chart" is the only clue.

*Fix:*
- Derive tick colour from the same rule as the rating. If Culture is "indirect" because supply is a proxy for attention, its supply ticks are grey. Then blue lives in rows 1–4, row 6 shows seven lone blue ticks, rows 5, 7, 8 are grey, row 9 is hatched. That is the headline.
- Draw any series published on a fixed schedule as one 3 px bar from first to last reading with small end caps, and keep single ticks for irregular readings. Row 4 stops shouting.
- Label each lane at its left end in 10 px mono (indicator short name), or on hover at minimum.
- Start the axis at 2021. 2019–2020 holds eight ticks and costs 200 px.
- If the recode is not done, change the headline to what the picture shows: "After entry-level work, the direct readings are one-offs or proxies".

**N2. The map contradicts "halfway".**
`r_map_0`. The only marked boundary is the rule at x=1085 ("EDGE OF MEASUREMENT →", x 920–1075, y 970). That is 85% of the way across. The place where solid lines give way to hollow and dotted ones is x≈510–570, which is the "halfway" of the headline, and it is unmarked.

*Fix:* three labelled zones across the top of the map in 11 px mono, ink at 70%: "MEASURED REPEATEDLY" (x 40–530), "PATCHY" (x 530–1085), "UNSURVEYED" (x 1085–1280). Give the middle zone a 4% tint and a thin rule at x=530. Then the picture and the headline say the same thing.

**N3. Branch topology misleads, and a label is clipped.**
`r_map_0`.
- The Skills dotted line starts on the Entry-level diagonal at (572, 625). The Institutions dotted line starts at the bend of the Culture line at (575, 752). They read as sub-branches of Economy and Culture.
- "skills go unpractised" starts at x=583, y=610, on the diagonal; the first "s" is half-erased by the line's halo.

*Fix:* turn the junction at (507, 685) into a short vertical splitter (x=507, y 661–709) with four exits 16 px apart, each line running its own diagonal. Move the edge label to x≥640.

**N4. Right-hand column of the map is crowded and misaligned.**
`r_map_0`, x 870–1075, y 470–940.
- Each stop's name sits 12–20 px below the previous stop's caption: "income: record low" (y 575) then "Skills and judgement" (y 596); "unaided ability" (y 695) then "Culture and information" (y 716); "are AI-written" (y 814) then "Institutions" (y 836). Proximity groups the name with the wrong number.
- Nodes: Workers' share at x=987; Skills, Culture, Institutions at x=1001.
- Connectors run under "Human influence" (x≈1140–1150, y≈640) and through the "no" of "no measure exists" (x 1118–1130, y 727).

*Fix:* raise row pitch from 120 to 150 px (map grows 90 px) and hold captions to one line (≤26 characters). Put all four end nodes at x=1001. Move "Human influence" above the node to y≈600 and "no measure exists" to the right of the "?".

**N5. The unsurveyed zone is still the quietest thing on the map.**
`r_map_0`, x 1085–1280. Hatch lines are about 5% darker than the paper. "UNSURVEYED" is 10 px grey mono.

*Fix:* hatch in ink at 14% opacity, 1 px lines, 8 px pitch. Label at 13 px mono, full ink, with a second line "no measure exists past this line". Widen to start at x=1050.

### B. Charts that could mislead

**N6. The employment-rate line runs straight through the pandemic.**
`f_sheet_06` lower panel, x 77–355, y 787–807 (Entry-level work, tab 3). Two points, 2020 and late 2022, are joined by a straight segment under the title "the employment rate has barely moved". The series fell about ten points in April 2020. A careful reader will know.

*Fix:* plot the monthly FRED series from January 2023 only and retitle "Since ChatGPT launched, the employment rate has barely moved". Or plot the full monthly series and let the 2020 trough show.
The same sparse-points-as-a-line pattern is on software postings (`f_sheet_07` lower) and union membership (`f_sheet_10` upper); both at least mark the gap as dotted.

**N7. The 12 h label sits inside the band marked unreliable.**
`r_capability_0`, label at x 620–675, y 548–573; band at y 548–573. 12 h is the site's headline figure and is below the 16 h threshold.

*Fix:* move the label to x≈585, y≈600 (below-left of the point, leader up-right), outside the band.

**N8. The subject of the sentence is drawn as the weaker line.**
The rule is consistent (mid-blue first, navy second, grey third) but navy is the heavier colour at equal width, so the comparison series wins.
- `r_adoption_0`: title says "Daily use is the line to watch". Daily is the thin grey line (y 745–800).
- `r_work_0`: the falling line, the story, is mid-blue; "least exposed" is navy. In dark (`r_dk_work_0`) the comparison is near-white and brightest.
- `r_handover_0`: automation (the title) is mid-blue; augmentation is navy and first in the legend.

*Fix:* subject series = navy, 2.5 px, first in the legend, bold end label. Comparison = mid-blue, 1.5 px. Context = grey, 1.5 px. On the map navy already means "best"; this keeps it.

**N9. Futures fan chart: unlabelled marks, a label on a line, and a title stronger than its data.**
`r_futures_0`.
- Hollow circles at (408, 694) and (408, 754) have no label. They are named only in the second, grey paragraph of the margin note.
- "Expert panel (LEAP) −7.3 by 2040" (x 507–615, y 830–856) touches the Rapid line at about (608, 826).
- The sub-head says baselines are "2024 or 2025"; the home version of the same chart says "2025".
- The title claims the share "has already fallen further than economists expected by 2030". The same blue line swings between +4 and −1.8 inside the plot. A −1.8 against a −1.5 forecast, on different definitions, is within the series' ordinary noise.

*Fix:* on this chart keep three scenario lines plus two labelled extremes; label the two hollow points "modest −0.6" and "substantial −3.9" or delete them. Move the LEAP label above its point. Add a light band at ±1.5 points around zero labelled "typical year-to-year swing since 2013". Retitle: "Workers' share is already below the 2030 forecast for moderate AI progress".

**N10. Futures hero pushes the evidence below the fold.**
`r_futures_0`. Chart card starts at y=512, plot at y≈600. H1, a 5-line lede (y 180–325) and a 3-line H2 (y 400–487) come first.

*Fix:* lede to two lines; drop the H2 and use it as the in-card chart title, as on the home page. Target plot top ≤ y 420.

**N11. Small multiples are not on a shared grid.**
`r_futures_1`.
- Plot tops at y 552 / 547 / 537 and x-axes at y 693 / 709 / 693 in one row, because baseline notes run one or two lines.
- The sixth cell (x 849–1210) has a top rule at y 757 and then 95 px of nothing before "IN THE CENTRAL VIEW" at y 855.

*Fix:* reserve two lines for every baseline note, fix plot height at 150 px, align x-axes. Start the text card at the top of its cell, or move it above the grid, beside the scenario control.

### C. Layout and typography

**N12. Six "chart" panels contain no chart.**
`f_sheet_01` upper (price), `f_sheet_04` upper (coding agents), `f_sheet_05` upper (ChatGPT), `f_sheet_08` upper (graduates), `f_sheet_09` lower (compute), `f_sheet_12` lower (distortion).
- "≈$400bn → / $720–745bn" wraps, leaving the arrow hanging (`f_sheet_09`, x 24–265, y 762–822).
- A fourth tile is orphaned on its own row (`f_sheet_08` y 290–420; `f_sheet_09` y 755–955).
- Words fill the number slot: "Rising", "Rated higher", "almost half".
- "The figures are in a chart and were not extracted for this draft" appears as tile copy.

*Fix:* draw every before → after pair as a two-dot slope on a shared mini-axis (one row per pair, 28 px tall, values at both ends). Single figures go into the margin note as a sentence. Delete tiles whose value is a word.

**N13. Six-tab rows are cramped.**
`r_work_0` y 315–428, `r_culture_0` y 327–455, `r_institutions_0` y 328–457.
- 190 px tabs; labels run to three lines; the row is 130 px tall.
- "ages 25– / 54" breaks at the en dash (`r_work_0`, x 466–625, y 334–350).
- Mono captions break mid-phrase: "21% of all / cuts", "445 / high-impact", "depending on the / definition".
- Two tabs on one page both read "−13%" (`r_work_0`, tabs 1 and 6).

*Fix:* show four tabs at 285 px and put the rest behind a "+2 more" tab or a scroll strip. Keep ranges unbroken (`white-space: nowrap`). Captions: one line, ≤28 characters.

**N14. Home sparkline 03.**
`r_map_3`. The "100" reference label (x 778–798, y 398–406) is struck through by both lines. "Least exposed 108" runs to x=1216, past the 1210 content edge; on the phone it reaches x=386 of 400 (`r_m_map_4`, y 12).

*Fix:* put "100" at the right end of the reference line, under the end labels. Shorten to "Least exposed 108" → "Least 108" / "Most 87", or end the plot at x=1070.

**N15. Phone: the stacked bars hide the number in the title.**
`r_m_futures_3`, y 450–535. The "rapid" label is dropped on Economists and Superforecasters (segment too narrow) but shown on the other two rows. The title is about the rapid share.

*Fix:* print the rapid value outside the bar at the right end on every row.

**N16. Phone: route tabs detach from their panel.**
`r_m_futures_4` bottom / `r_m_futures_5` y 0–285. Tabs are a 2×2 grid. When Route A or B is selected, Routes C and D sit between the selected tab and its panel.

*Fix:* one-row scroll strip, as on the link pages.

**N17. Phone: fan chart.**
`r_m_futures_0`, y 830–1100. Four unlabelled marks at (157, 836), (157, 895), (207, 957), (157, 1094) in a 125 px forecast zone.

*Fix:* drop all hollow points and the LEAP line below 600 px width.

**N18. Margin note taller than the chart.**
`f_sheet_11` lower: the chart ends at y 700, the note at y 960; x 24–800 is blank for 260 px. Same on `f_sheet_01` upper. On Skills the note runs full width below with the right half empty (`r_skills_1`, x 720–1186, y 50–145).

*Fix:* cap "Reading it" at 70 words; overflow goes to "In brief".

**N19. Value grammar is still a zoo.**
"≈12 h", "≈50%", "≈1bn" beside "about 75%", "about 50%", "About 1 in 1,300"; "over 50%", "under 3%", "40%+", "<25 → >45 min", "almost half". Precision: "17.31%" next to "49.9%" (`f_sheet_13` lower). Axis ticks use a hyphen ("-25%", `f_sheet_11`) where figures use a true minus.

*Fix:* "≈" in figures and "about" in sentences; "over" / "under" for bounds; one decimal; U+2212 on axes.

**N20. One mark, three meanings (three times).**
- Hollow marker: weaker source (Google code), unreliable estimate (17 h), changed definition (teens 54%), model scenario (fan chart), mitigated case (dumbbell).
- Dotted blue: one-off evidence (map), no readings in the gap (`f_sheet_07`, `f_sheet_10`), non-comparable step (`f_sheet_03`).
- Grey band: unreliable range (capability), since ChatGPT (workers' share), forecasts (fan chart).

*Fix:* hollow = "treat with caution" only, and say why in a 10 px label beside it. Gaps: leave the line broken, no dots. Grey band = forecast zone only; use a top bracket for "since ChatGPT" and a hatched band for "unreliable".

**N21. Dead space beside every section heading.**
The right 45% is empty next to each H2 + lede: `r_map_1` x 700–1210, y 480–690; `r_gaps_0` x 700–1210, y 120–300; `r_method_0` x 740–1210, y 90–500; `r_futures_0` x 780–1210, y 120–490. Once is editorial. Four times is a habit.

*Fix:* on Blind spots and Method reuse the Evidence header mini-map with the relevant stops filled. On the home record section put the DIRECT / NEARBY totals there as two large numerals.

**N22. Two bad line breaks.**
`r_culture_0` H1, y 231–268: "…Deezer. So / far, people…". `r_skills_0` panel title, y 463: "…every quarter. No / study has…".

*Fix:* non-breaking space after "So" and "No", or break after the full stop.

**N23. Three near-identical thin bars in a wide plot.**
`f_sheet_17` lower ("The state still depends on people's pay"): 85.3 / 84.1 / 84.1 as 44 px bars 230 px apart.

*Fix:* one 100% bar for FY2025 split into "income and payroll taxes 84.1%" and "everything else", with "85.3% in FY2023" as a tick on it.

**N24. Method sources.**
`r_method_2` y 940 to `r_method_3` y 260: the left column ends 330 px before the right, leaving a 600 × 330 blank. Source lines are plain ink with no sign they are links.

*Fix:* balance the columns (`column-fill: balance`) and add a 1 px underline at 30% ink.

### D. Smaller

**N25.** `r_handover_0` x 655–785, y 555–595: the Feb 2026 note still floats. Add a hollow marker at Feb 2026 on the augmentation line's path with a short leader.

**N26.** `r_share_0` x 717–801, y 521–533: "Since ChatGPT" sits on the 115 gridline. Drop it 14 px into the band.

**N27.** `r_dk_futures_3` x 795–1025, y 45–245: dumbbell interval bands are dark maroon on near-black, well under 3:1. Lighten to the "slow" orange at 35% opacity.

**N28.** `r_work_0` x 795–830, y 644–658: end labels "108.6" and "108.1" are stacked with no series name. Write "35–40: 108.6" and "22–25 least: 108.1", as the next tab already does.

**N29.** Same series, different colours on two pages: UK undergraduates are blue on Adoption (`f_sheet_03` upper) and navy on Skills (`r_skills_0`). Pick one.

**N30.** Area fill on three charts (`f_sheet_02` upper, `f_sheet_09` upper, `f_sheet_14` lower), plain lines everywhere else, for the same kind of data. Drop the fill.

**N31.** `r_futures_3` y 837 vs 855: the signpost-count row on Route D sits 18 px lower than on A–C. Pin it to the bottom of the tab.

**N32.** `r_futures_3` x 196 / 297 / 397, y 10–300: vertical gridlines run through the bar labels. Clip gridlines to the bar rows.

**N33.** `r_evidence_0` x 815–1195, y 150–290: the header mini-map has no labels and no hover. Number its nodes 1–9 to match the rows.

**N34.** The map legend describes ("Repeated, direct, independent"); the record, nav and method page name ("Well measured"). Use the names on the map and keep the description as a second, lighter line.

**N35.** "Not extracted for this draft" appears three times (`f_sheet_12` lower, `r_futures_3` y 370–415, `r_futures_4` y 873–945). Fill or cut before publishing.

**N36.** `r_gaps_0`: priority cards are ordered Institutions, Skills, Culture; the table below is ordered Skills, Institutions, Culture. Match them.

---

## 4. Where the colour grammar breaks

Orange on observed data: **none found.** Blue on forecasts: **none found.** The breaks are in grey and in dots.

1. **Grey dashed = forecast.** `r_futures_1`, all five panels: unselected scenarios are grey dashed lines. The rule says grey is observed. *Fix:* draw them in the palest orange (the "slow" tint at 50%), dashed.
2. **Dotted blue that is not on the map.** `f_sheet_03` upper (dotted connector to the hollow 54%), `f_sheet_07` lower (dotted 2025 → 2026 gap), `f_sheet_10` upper (dotted 1983 → 2000). A reader who learnt "dashed = forecast" will read dotted as projected. *Fix:* break the line; no connector.
3. **Black hollow circles on forecast charts.** `r_futures_0` (Anthropic model points) and `r_futures_3` dumbbell (mitigated case) are ink, not orange. Both are forecasts. *Fix:* hollow orange stroke.
4. **Grey ticks in the record are "nearby", grey lines in charts are "context", grey bars are "the control group" in `f_sheet_14` upper, "a different survey" in `f_sheet_15` upper and "incomplete months" in `f_sheet_16` lower.** Five uses. The record's use is the one that matters. *Fix:* in the record, use a hollow blue tick for "nearby" so grey stays neutral elsewhere.
5. **Hatching** is used correctly and only for "nothing measured". It is just too faint (N5).
6. **Dark theme:** hue order holds. The level-4 map line is pale, so the saturated dotted lines (Skills, Institutions) are the most vivid thing on `r_dk_map_0`. Raise level-4 saturation (about `#7fb4f5`) and drop the dots to 70% opacity.

---

## 5. Five changes, in order of leverage

**1. Make the map agree with its headline, then fix its geometry.**
Three labelled zones (measured repeatedly / patchy / unsurveyed) with a rule at x≈530. One junction with four exits. 150 px row pitch on the right, nodes on one x. Hatch and label the unsurveyed zone at readable strength. Export that view as the share image. (N2–N5)

**2. Recode the measurement record so the picture is the sentence.**
Tick colour from the same rule as the rating. Scheduled series as one bar, irregular readings as ticks. Label the lanes. Axis from 2021. This is the chart most likely to be screenshotted on LessWrong and the one most likely to be picked apart. (N1)

**3. One hierarchy and mark pass over all 38 charts.**
Subject series navy and heaviest. Hollow, dotted and grey band get one meaning each. Sparse readings are not joined across gaps (start with the employment rate). End labels carry series names. Move the 12 h label out of the unreliable band. (N6–N8, N20, N25–N30)

**4. Tighten Futures.**
Two-line lede, chart on the first screen. Fan chart: three lines, two labelled extremes, a noise band, a title the data can carry. Small multiples on a shared grid, unselected scenarios in pale orange. Phone: scroll-strip route tabs, rapid value outside the bar, no hollow points. (N9–N11, N15–N17)

**5. Remove the dashboard residue.**
Replace the tile-only panels with two-dot slope rows. Cap tabs at four. One approximate marker. Cut "not extracted for this draft". Trim the sceptic / nobody measures / watch block to three items a column so the heights match, and move it above "In brief". (N12, N13, N19, N35, old 33)
