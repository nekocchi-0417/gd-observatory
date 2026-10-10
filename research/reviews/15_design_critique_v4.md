# 15 · Design critique — Gradual Disempowerment Observatory (version 4, pre-publication)

Reviewed: all 108 images in `/home/claude/site/review3/` (desktop light `x_*`, tour, dark `x_dk_*`, phone `x_m_*`, chart sheets `h_sheet_00`–`19`). Coordinates are pixels on the named tile, (x, y) from top-left. Contrast ratios were sampled from the PNGs. Nothing under `/home/claude/site` was edited.

---

## 1. Verdict

1. **At the bar for LessWrong / EA Forum / Substack on a desktop screen, once about eight small fixes land. Not yet on a phone.** Two method tables are cut off at the right edge at 400 px, and that is the page a sceptical reader opens first.
2. **Not yet at Pudding / FT standard.** What separates it: the map's zone names contradict its own legend, the record's legend does not match its marks, and about a dozen labels are unnamed, struck through or floating.
3. **Strongest image:** the home map, `x_map_0` (and `x_dk_map_0`). One junction, four exits, clean right column, a real edge. Strongest single chart: Entry-level work (`x_work_0`).
4. **Weakest page:** Skills and judgement on desktop (`x_skills_0`–`1`): a bullet list posing as a chart, six tabs with three wrapped captions, a dashed "missing" box, a half-empty note. On the phone the weakest page is Method (`x_m_method_1`–`3`).
5. **Biggest pre-publication risk is not visual.** The Method page says the figures "have not yet been checked by a person" (`x_method_0`, y 397–500). The home page says only "compiled with AI research assistance" in a 13 px footer. Five panels still say "for this draft". The first comment on LessWrong will be about this.

---

## 2. Status of the previous report's N defects

| # | Status | Note |
|---|---|---|
| N1 | Mostly fixed | Lanes labelled, axis from 2021, hatched strips, monthly ADP series as bars, headline rewritten to match the picture. Legend and bar rule are incomplete (V3). |
| N2 | Fixed | Three zones with a rule at x=512 and x=1085. Zone names now clash with the ratings (V1). |
| N3 | Fixed | One junction at (528, 762), four exits, no label on a line. |
| N4 | Fixed | 145 px pitch, all end nodes at x=1001, no connector under a label. |
| N5 | Partly | Label is bold and readable. Hatch is still about 6% ink (1.13:1), has no second line, and stops at x≈1260. |
| N6 | Partly | Retitled "Since ChatGPT launched"; gap marked "no readings plotted". Still one 2022 point joined to selected 2025–26 months. |
| N7 | Fixed | "Opus 4.6: 12 h" sits below the band with a leader. |
| N8 | Fixed on line charts | Daily use, automation, ages 22–25 are navy, heaviest, first in legend. Not applied to three bar charts (V14). |
| N9 | Mostly fixed | Every mark labelled, LEAP label clear of the line. No noise band; nine text items in one plot. |
| N10 | Fixed | Chart card at y=296, plot from y≈489. |
| N11 | Partly | X-axes align. Plot tops still differ (399 / 405 / 415). Sixth cell still has 95 px of nothing above its text. |
| N12 | Partly | Arrows no longer hang, 2×2 grids replace orphans. Seven tile-only panels remain; one collision (V9). |
| N13 | Partly | "25–54" unbroken; "−13%" / "−13% pay" now differ. Still six tabs on four pages; four captions still wrap. |
| N14 | Fixed | "100" at the left; end label inside the content edge. |
| N15 | Fixed | Rapid value printed on every row. |
| N16 | Fixed | Scroll strip. |
| N17 | Partly | Two unlabelled marks remain on the phone fan chart. |
| N18 | Not fixed | Notes still run 220–350 px past the chart on three panels. |
| N19 | Not fixed | "≈", "about", "over", "under", "17.31%" next to "49.9%", hyphen minus on one axis. |
| N20 | Partly | Hollow is now defined on Method ("a weaker point"). Dotted grey now means "no readings". Grey band still has three meanings. |
| N21 | Not fixed | Five empty right halves beside headings. |
| N22 | Partly | "So / far" gone; replaced by "AI- / made". "No / panel" remains. |
| N23 | Not fixed | Three thin bars, 85.3 / 84.1 / 84.1. |
| N24 | Fixed | Columns balanced, sources underlined. One group heading is orphaned from its items (V24). |
| N25 | Not fixed | Feb 2026 note still floats. |
| N26 | Not fixed | "Since ChatGPT" is still struck through by the 115 gridline. |
| N27 | Not fixed | Dark dumbbell bands measure 1.27:1. |
| N28 | Not fixed | "108.6" / "108.1" still unnamed. |
| N29 | Not fixed | UK undergraduates navy on Adoption, light blue on Skills. |
| N30 | Not fixed | Area fill on three charts. |
| N31 | Fixed | The signpost-count row is gone. |
| N32 | Not fixed | Gridlines still run through bar labels. |
| N33 | Not fixed | Evidence mini-map still unlabelled. |
| N34 | Partly | Method page uses names. Map legend (desktop and phone) still uses descriptions only. |
| N35 | Partly | Two "could not be extracted for this draft" remain on Futures; three more "for this draft" phrases in chart notes. |
| N36 | Not fixed | Priority cards: Institutions, Skills, Culture. Table: Skills, Institutions. |

Tally: 9 fixed, 3 mostly, 11 partly, 13 not fixed. The top two changes from last round (map, record) were done. The chart-level label pass was not.

---

## 3. Remaining and new defects, most severe first

### A. The signature images

**V1. The map's zone names contradict its own legend and ratings.**
`x_map_0`, zone labels at (43, 428), (529, 428), (1123, 428); legend at x 40–395, y 485–590.
- The middle zone is called "PATCHY". Three of its five stops carry a rating whose legend text begins "Repeated": Entry-level work (3 bars), Workers' share (2 bars), Culture (3 bars).
- Hand-over (3 bars) sits in "MEASURED REPEATEDLY". Culture (3 bars, same rating) sits in "PATCHY".
- So the zone encodes position in the chain, but its name claims to encode measurement quality, which the line style already encodes differently.

*Fix:* name the zones for what is being counted, which is the site's own sentence ("Use is counted at every stage. Consequences are counted at almost none"):
- "USE · COUNTED REPEATEDLY" (x 43)
- "CONSEQUENCES · PATCHY OR DISPUTED" (x 529)
- "OUTCOME · UNSURVEYED" (x 1100)

**V2. On a laptop the trunk of the map is below the fold.**
`x_map_0`. Hero is 400 px tall; the Capability–Adoption–Hand-over line is at y=762. At 1366×768 or 1440×900 the first screen shows the headline, the legend and the Entry-level branch, not the start of the chain.
Also: the left zone is empty at x 40–510, y 600–700 and y 850–1040.

*Fix:* hero to 300 px (H1 from about 62 px to 52 px; top padding from about 100 px to 56 px; lede to 17 px). Map then starts at y=300 and the trunk sits at y≈660. Move the legend below the trunk (x 40, y≈880) so the eye meets the line first.

**V3. The record's legend does not match its marks, and the bar rule is applied to one series.**
`x_map_2` legend at y 455; `x_map_3` rows 07–09.
- A grey bar (Courts catching AI errors, `x_map_3` x 560–958, y 167) is not in the legend. The legend shows only a blue bar.
- "Published every month" is drawn as a bar for ADP only. "Job cuts blamed on AI" is monthly and drawn as 15 grey ticks (`x_map_2` x 820–960, y 793). "AI share of web articles" is ten ticks that merge (`x_map_3` x 668–756, y 48).
- The two ADP bars are 4 px, fully saturated, 575 px long. Row 04 is still the heaviest thing in the figure.

*Fix:*
- Rule: any series with ten or more evenly spaced readings is a bar. Apply it to job cuts and web articles.
- Bars 2 px with 6 px end caps.
- Legend, four keys: blue tick, grey tick, blue bar "direct, published on a schedule", grey bar "nearby, published on a schedule". Add the hatch swatch "no direct reading".

**V4. The hero and the record headline pull in opposite directions, and the two figures disagree on Institutions.**
- `x_map_0`: "The evidence runs out before the chain does". `x_map_2` y 165–280: "Direct readings cover most of the chain." A skimmer reads these as opposites.
- Institutions is dotted blue inside the tinted zone on the map (`x_map_0`, y 980), and hatched "no direct reading found" in the record (`x_map_3`, y 134–144). Hatching means unmeasured; it is used for this stop in one figure and not the other.
- Skills and Institutions look identical on the map (dotted, 1 bar, solid "0"). The record gives Skills four blue lanes and Institutions none.

*Fix:*
- Record H2: "Direct readings reach seven of the nine stops. None reaches institutions or human influence."
- On the map, draw the Institutions "0" as the outlined zero already used on the home list (`x_map_4`, x 913–937, y 595–625). Keep the Skills "0" solid.

**V5. The unsurveyed hatch is two different strengths.**
- Map hatch: (236, 238, 239) on (251, 252, 253), 1.13:1, 12 px pitch (`x_map_0`, x 1085–1260). It stops at x≈1260, leaving a plain 20 px strip at the page edge.
- Record hatch strip: 3.4:1 (`x_map_3`, x 296–975, y 134–144).

*Fix:* one pattern for both: ink at 14% opacity, 1 px lines, 8 px pitch. Run the map hatch to x=1280. Add a second label line under "UNSURVEYED": "no measure exists past this line", 11 px mono, at (1123, 446).

### B. Charts that could mislead or cannot be read

**V6. Small multiples: labels are in the wrong order against their lines.**
`x_futures_1` (same in `x_dk_futures_1`).
- Wealth panel (x 459–820, y 640–960): the Slow line ends below the Central line (about 74.5 against 75). The label "Slow" (y 829) is printed above "Central" (y 843).
- Unemployment panel (x 70–430): "Slow" (y 829) sits at the end of the Central line (y 830); "Central" (y 843) points at nothing.

*Fix:* place each label at its own line end. Where two ends are within 12 px, print one combined label ("Central and slow, 5%"), or stack them in line order with 1 px leaders.

**V7. A label struck through by a gridline.**
`x_share_0`, "Since ChatGPT" at x 717–801, y 521–533; the 115 gridline is at y 529 (also `h_sheet_08` lower, x 648–730, y 608).

*Fix:* drop the label 16 px to y 545, inside the band, with a 3 px paper halo (`paint-order: stroke`).

**V8. End labels with no series name, where the two values are close.**
- `x_work_0`, x 795–828, y 631 and 645: "108.6" and "108.1"; the two markers overlap.
- `h_sheet_02` lower (Adoption, US firms), x 612–638, y 833 "20%" and x 713–752, y 848 "19.8%": two different series, 75 px apart, either side of the "US question broadened" line. Reads as one series going from 20% to 19.8%.
- `h_sheet_17` lower (UK algorithms): "152" unnamed; the last NGO point at (417, 838) is hollow and has no value.
- `x_adoption_0` (52 / 30 / 15) and `x_skills_0` (94 / 52 / 26): unnamed.

*Fix:* end labels carry the series: "Ages 35–40: 108.6", "Ages 22–25, least exposed: 108.1" (the next tab already does this); "EU: 20%", "US: 19.8%"; "Official: 152", "NGO: 50, last count Jan 2025".

**V9. Two tile values collide.**
`h_sheet_04` upper (Hand-over, coding agents), y 265: "under 25 → over 45 min" ends at x≈288; "≈20% → over 40%" begins at x≈292. Zero gap; reads as one string.

*Fix:* `font-size: clamp(20px, 2.1vw, 26px)` on tile values with `white-space: nowrap`, and a 24 px column gap; or write "<25 → >45 min".

**V10. A floating note.**
`x_handover_0`, x 655–785, y 555–595: "Feb 2026: augmentation 'increased slightly'; no figure published" has no marker and no leader. The plot is empty from x 610 to x 835.

*Fix:* hollow marker on the augmentation path at Feb 2026 (x≈690, y≈632) with a 1 px leader to the note.

**V11. Subject is the lighter bar on three bar charts.**
- `h_sheet_11` lower (developers): the measured result, the subject of "The stopwatch said slower", is light blue. The two beliefs are navy.
- `h_sheet_12` upper (colonoscopy): "after months of working with AI", the finding, is light blue. "Before" is navy.
- `h_sheet_11` upper (ChatGPT practice): navy and light blue separate practice from exam with no key.

*Fix:* measured / after / exam bars navy. Beliefs as outlined bars (1.5 px navy stroke, no fill). "Before" and practice bars mid-blue. Add a one-line key.

### C. Phone and dark theme

**V12. Phone: two method tables are cut off.**
- `x_m_method_1` y 930–1300 and `x_m_method_2`: the rubric table's "TIED TO AI?" column is cut at x=380 ("T / T / A", "ye", "d", "n"). The RATING column is off-screen. No scroll cue.
- `x_m_method_3`: the third column of "what is counted vs what the argument needs" is cut mid-word ("changes wha", "how often ar", "government"). Columns 2 and 3 are about 100 px wide and run five to seven lines.

*Fix:* below 640 px, turn each row into a stacked card: link name plus rating glyph on one line, then "Counted: …" and "Needed: …" as two labelled paragraphs. For the rubric, four inline chips per link ("repeated ✓", "direct ✓", "independent ✗", "tied to AI ?").

**V13. Phone record: row names overprinted; lanes anonymous.**
`x_m_map_3`. The ChatGPT-launch dotted line (x=145) runs through "Skills and judgement" (y 440) and "Culture and information" (y 546). Lanes have no labels on the phone, so the "Select a lane" instruction is blind.

*Fix:* 3 px paper halo on row names, or end the dotted line 14 px below each row rule. Print the lane name in 9 px mono at the right end of each lane, or on tap.

**V14. Phone fan chart.**
`x_m_futures_0`. Unlabelled LEAP point at (207, 843) and unlabelled hollow point at (156, 983). The observed series is squeezed into 70 px (x 65–137) and is a scribble.

*Fix:* below 600 px remove the LEAP line and the Anthropic point (they are in the note). Start the x-axis at 2020 so the observed line gets about 110 px.

**V15. Dark theme contrast.**
- Dumbbell interval bands: (65, 41, 37) on (20, 29, 39), 1.27:1 (`x_dk_futures_3`, x 800–1010, y 28–128). In light they are 1.56:1.
- Record "nearby" lane labels: 3.9:1 at 10 px (`x_dk_map_2`, x 984–1125, y 779–808). Nearby ticks: 3.1:1.
- Unselected scenario lines are brown-grey (139, 100, 86) (`x_dk_futures_1`), not recognisably orange.

*Fix:* bands in the "slow" orange at 40% opacity in both themes. Nearby labels to at least (150, 162, 175). Unselected scenarios in the slow orange at 55% opacity.

**V16. Phone: gridlines through labels; kicker wraps with a trailing dot.**
- `x_m_futures_4`, y 530–760: gridlines at x=107 and x=170 pass through the row labels. Desktop `x_futures_2`, x 196 / 297 / 397 / 497, y 820–1000, the same (N32).
- `x_m_map_0` y 117 and `x_m_futures_0` y 115: the kicker line ends in "·".

*Fix:* clip gridlines to the bar rows. Wrap each kicker item in a nowrap span and hide a separator at a line end (separator as `::before` on every item but the first).

### D. Layout, typography, residue

**V17. The three-column closing block is still ragged on every link page.**
Blank below the two short columns: `x_work_1` x 450–1210, y 470–790 (320 px); `x_share_1` y 430–710; `x_handover_1` y 445–655; `x_adoption_1`; `x_capability_1`; `x_culture_1`.

*Fix:* cap each column at three items. Or set "What a sceptic would say" full-width in two columns, with "nobody measures" and "what to watch" side by side beneath.

**V18. Dead space beside headings, plus two new voids.**
- Old: `x_map_1` x 600–1210, y 340–520; `x_map_2` x 700–1210, y 150–390; `x_map_4` x 700–1210, y 780–1000; `x_gaps_0` x 700–1210, y 120–420; `x_method_0` x 740–1210, y 90–520.
- New: `x_method_1`, left column ends at y≈730 and the right runs on; x 70–640, y 740–1000 is blank. `x_map_3`, x 760–1186, y 360–540, blank inside the record card. `x_futures_1`, x 849–1210, y 626–720.

*Fix:* let H2s run to 900 px so most set on one or two lines. In the record card put the totals in the gap ("7 of 9 stops have a direct reading", "396 readings"). On Method, put the legend and the rubric in one full-width table. In the small-multiples grid, start the text card at the top of its cell.

**V19. Draft residue.**
- "Draft v0.3" in every kicker and footer; unchanged since the last round.
- "for this draft" five times: `h_sheet_11` lower ("has not been re-checked for this draft"), `h_sheet_12` upper ("a correction that was not read for this draft"), `h_sheet_13` upper, `x_futures_3` y 276–298, `x_futures_4` y 793.
- `x_evidence_0` kicker says "8 LINKS" over a nine-row table.

*Fix:* fill or cut each sentence. Put one status line under the home kicker in 13 px sans: "Figures compiled with AI assistance; each chart says how it was checked." Kicker: "8 links and the outcome".

**V20. Bad line breaks.**
- `x_culture_0` H1, x 700–745, y 231: "classed as AI- / made".
- `x_skills_0` panel title, y 463: "every quarter. No / panel re-tests".
- `x_map_1` H2, y 412: "disempowerment. The / measures that could show / it, or rule it out".
- `x_futures_3`: Route B title wraps to two lines, so its blurb starts 19 px lower than the other four.

*Fix:* non-breaking hyphen (U+2011) in "AI-made". Non-breaking space after "No" and "The". H2 `max-width: 15em` plus `text-wrap: balance`. Route B: "Fewer learn the work".

**V21. Margin notes longer than their charts (N18).**
`h_sheet_11` lower: chart ends y≈700, note y≈1060; x 24–800 blank for 350 px. `h_sheet_12` lower: 220 px. `x_skills_1` x 720–1186, y 30–140: note set full width, right half empty. `x_futures_0`: the note is about 190 words.

*Fix:* 70-word cap; overflow to "In brief". On Skills, set the note in two columns.

**V22. Tile-only panels (N12).**
Seven remain: `h_sheet_01` upper, `h_sheet_04` upper, `h_sheet_05` upper, `h_sheet_08` upper, `h_sheet_09` lower, `h_sheet_12` lower, `h_sheet_13` upper. Blank under the tiles in each (for example `h_sheet_13`, x 24–800, y 360–540). Near-duplicate tiles on `x_handover_0` y 875–955: "77%" and "about 75%" for the same quantity three months apart.

*Fix:* one row per before → after pair as a two-dot slope on a shared 0–100% or log axis, 28 px tall. Merge the 77% / 75% tiles into "77% → about 75%".

**V23. Six-tab rows (N13).**
`x_work_0`, `x_skills_0`, `x_culture_0`, `x_institutions_0`. Captions still wrap on Skills ("vs quarterly surveys of / use", "believed 20% faster · / METR", "PIAAC 2023 · was 19% in / 2017") and Culture ("1–3% of streams · Jun / 2026").

*Fix:* captions ≤24 characters, `white-space: nowrap`. Or four tabs plus "+2 more".

**V24. Smaller items.**
- `x_map_1`: "The theory." and "How to read the map." start at x=40; everything below starts at x=70.
- `x_map_0` right column: stop names are right-aligned to x≈1040; figures and captions are centred on x=1001. Centre the names on the node.
- `x_map_0`: caption "workers' share of income;" ends at x=1082, 3 px from the zone rule. Shorten to "of income; falling since 2000" on one line.
- `x_method_3` / `x_method_4`: a sources group heading sits at the bottom of the left column (`x_method_4` y≈963) and its items start the right column. `break-after: avoid` on headings.
- `x_gaps_0`: card order and table order differ (N36). "Human influence" is the only link name not underlined.
- `x_evidence_0`, x 815–1195, y 135–290: mini-map nodes unnumbered (N33). `x_evidence_1`: "Culture and information" is the only name that wraps.
- `h_sheet_18` upper: three 44 px bars for 85.3 / 84.1 / 84.1 (N23).
- `h_sheet_13` lower: "over 50%" is a closed dot at exactly 50; use a hollow dot with an upward tick.
- `x_tour_0`: the tour card sits at y 914–1090, 150 px below the stop it describes and below a laptop fold. Anchor it at y≈600 in the left zone.
- `x_map_3` y 956: the "50%" reference label is 8 px at 3.06:1. Raise to 10 px.
- Link styles: still five (blue + arrow, bold ink + arrow, bold underlined, plain underlined, blue underlined footer).
- Value grammar (N19): "about 75%", "≈$400bn", "over 50%", "under 3%", "17.31%" beside "49.9%", tab "10.0%" over chart "10%", hyphen in "-17%" and "-25%" (`h_sheet_11` upper).
- `x_skills_0` vs `h_sheet_03` upper: UK undergraduates light blue on one page, navy on the other (N29).

---

## 4. Colour grammar

Orange on observed data: **none found.** Blue on forecasts: **none found.** Hollow forecast points are now orange. Unselected scenarios are pale orange in light. The breaks that remain:

1. **Hatching is not used the same way in the two signature figures.** Institutions is hatched in the record and dotted blue on the map (V4). The two hatch patterns differ in strength by a factor of three (V5).
2. **Dashed in neutral ink means "missing" in one place.** `x_skills_0`, x 655–1186, y 889–988: the "No usable repeat test" box has a dashed border. Dashed should mean forecast. *Fix:* fill the box with the hatch pattern and use a solid 1 px border.
3. **Dotted grey is used consistently for "no readings here"** (`h_sheet_03` upper, `h_sheet_06` lower, `h_sheet_07` lower, `h_sheet_10` upper), and matches "No direct measure" on the map. It is not declared. Only one of the four is labelled on the chart. *Fix:* add a fourth entry to "How to read the charts" on Method ("Dotted grey: no readings in this stretch") and print "no readings" in 9 px on each dotted segment.
4. **Grey band still has three meanings:** unreliable range (`x_capability_0`, y 548–573), "Since ChatGPT" (`x_share_0`, x 712–801), forecast zone (`x_futures_0`, x 352–738). *Fix:* keep the band for the forecast zone. Use a top bracket for "Since ChatGPT" and the hatch pattern for "unreliable".
5. **Grey bar in the record is not in the legend** (V3).
6. **Navy / light blue on bar charts encode something different on each chart** and three times the subject is the lighter bar (V11).
7. **Area fill** on `h_sheet_02` upper, `h_sheet_09` upper, `h_sheet_15` upper; plain lines elsewhere (N30). Drop the fill.
8. **A single orange whisker** appears on one small multiple only (`x_futures_1`, x 953, y 403–457). Its caption explains it, but it reads as an error. Draw it as a 6 px band at 25% opacity at both 2030 and 2050, or remove it and keep the sentence.
9. **Dark theme:** hue order holds. Unselected scenarios drift to brown-grey (V15).

---

## 5. Five changes, in order of leverage

**1. Make the map's words agree with its legend, and get the chain on the first screen.**
Rename the zones USE / CONSEQUENCES / OUTCOME. Hero to 300 px so the trunk sits at y≈660. One hatch (14% ink, 8 px pitch) to the page edge, with "no measure exists past this line". Outlined zero for Institutions. Rating names in the legend. (V1, V2, V5, N34)

**2. Finish the measurement record.**
Four-key legend that matches the marks. Every scheduled series as a 2 px bar, direct blue and nearby grey. Headline "Direct readings reach seven of the nine stops. None reaches institutions or human influence." On the phone: halo the row names, label the lanes. (V3, V4, V13)

**3. One label pass over every chart.**
Series names on all end labels. Small-multiple labels in line order. "Since ChatGPT" off the gridline. A marker for the Feb 2026 note. Subject bars navy on the three bar charts. "No readings" printed on dotted segments. No area fills. Fix the tile collision. (V6–V11, §4)

**4. Phone and dark pass.**
Method tables as stacked cards below 640 px. Phone fan chart down to three lines. Dumbbell bands and nearby labels up to readable contrast. Gridlines clipped to bars. Kicker without a trailing dot. (V12–V16)

**5. Clear the residue and the voids.**
Cut or fill the five "for this draft" sentences; decide what "Draft v0.3" should say; put a one-line figure-status note on the home page. Cap closing columns at three items and notes at 70 words. Let H2s run wider so five right-hand halves are not empty. Fix four line breaks. Match the Blind spots card and table order. (V17–V21, N36)
