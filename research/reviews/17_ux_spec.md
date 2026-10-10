# 17. UX and information-design spec for the v5 revamp (8 Oct 2026)

Scope: spec only, no source edited. Measured on live v4 with Playwright at 1280x900 (words and numbers are `#view` text; heights are full-page).

## 0. The spine: one question per page

| Page | Question it answers | Encodes |
|---|---|---|
| Home | What is being measured? | Chain + **line style** (measurement quality) only |
| Evidence | What do the data show? | **Colour** = signal of change (new), click through for numbers |
| Blind spots | What is missing, and where is work worth doing? | Matrix + expandable list |
| Futures (WIP) | Where might it go? | Published forecasts only |
| Method | Why trust this? | Rules, caveats, sources |

This removes the home page's overlap with Evidence (big numbers, record, five findings). Every number removed from Home reappears one click deep.

## 1. References: patterns worth borrowing

Read: METR, AI Futures Project, AI Disruption, OWID, Climate Action Tracker, Anthropic Economic Futures. Copernicus Climate Pulse, Bright Line Watch and the Anthropic Economic Index returned almost no text (dynamic pages), so I draw nothing from them. There is no separate "AI 2040" site I could find: AI Futures Project's "AI 2040" is five plans bracketed on one timeline chart, and AI 2027 is its scrollytelling sibling.

- **METR time horizons.** One chart above the fold with three small toggles. The one caveat that matters ("Measurements above 16 hrs are unreliable") sits directly above the chart. Methodology and FAQ are plain sections far below. Borrow: one chart, one caveat before the figure.
- **AI 2027 / AI Futures.** Dated chapters, one or two figures each; technical depth in expandable boxes, citations in footnotes; one chart brackets five plans on one axis. Borrow: expandable boxes for depth, "one of many possible futures" up front.
- **AI Disruption.** Four indicator cards above the fold: plain-language question, number, one-line definition, chart, "Data updated", "How we measure". Caveats written as "X, not Y" ("Exposure is not loss"); missing data shows a dash. Borrow: card anatomy, the caveat voice, dashes for gaps.
- **Anthropic Economic Futures and scenarios.** Hub page is a short hero plus "Read more" links, no statistics above the fold. Scenarios get the same three numbers each, plain tier names, and a "not predictions" box in the first summary (secondary write-up only). Borrow: equal-weight cards, a not-a-forecast box up front.
- **Our World in Data.** Title, one-line subtitle carrying unit and uncertainty, chart, source and last-updated lines, then a short "What you should know" block. Borrow: subtitle carries uncertainty; fixed slot for caveats.
- **Climate Action Tracker.** Five named categories in plain words, one overall rating plus per-element sub-ratings, detail one click away. Borrow: words first, colour second, verdict with drill-down. Model for the new scale.

## 2. Diagnosis of v4

| Page | Height | Words / numbers / charts | In view at once | Cut |
|---|---|---|---|---|
| Home | 5,746px | 1,718 / 145 / 8 | First screen: 9 stops x 4 items (name, bars, big number, caption) = 36, plus a 5-row legend, 3 zone labels, 6 mechanism labels, tour box. Below: notes, verdict, counter-claims, 39-lane record, 5 findings, fan chart. About 130 text chunks. | All but one sentence and three doors; map numbers; long zone labels. |
| Evidence | 1,422px | 464 / 41 / 1 | 9 rows x 6 items (number, name, bars and word, big number, caption, claim, direction and date) = about 55. | Numbers, captions, claims, dates; use colour pill and one-liner. |
| Link (Skills) | 2,099px | 690 / 67 / 2 | 9 crumbs, 3 verdict facts, 6 tabs x 3 lines, a 3-series chart, 5 study rows, callout, note, 4 sources, "In brief", 11 bullets. About 65 chunks. | Stats on tabs, "In brief", crumb strip; bullets become labelled cards. |
| Futures | 5,210px | 1,653 / 273 / 10 | Fan chart, 5 small multiples, odds bars, unemployment bars, Delphi, 5 routes x 5 signposts, caution table. | Move the five multiples, odds, unemployment and Delphi to a sub-page. |
| Blind spots | 2,447px | 669 / 17 / 0 | 3 priorities and 14 rows x 3 columns, with jargon titles ("Unaided ability, tested twice"). | Three-column table; use matrix plus accordion. |
| Method | 5,356px | 2,425 / 143 / 5 | 11 sections, 111 links. | Collapse glossary and sources; no content cuts. |

## 3. Target structure, page by page

### Home (target 2,000px, max 2,200px; was 5,746px; 350 words or fewer)

1280x900 first viewport shows only: nav, one mono eyebrow, the headline, one sentence, and **the whole chain** (map at most 480px tall, starting at about 350px). The legend row may sit on the fold edge. Nothing else.

1. **Hero.** Eyebrow: "Better Futures Project · Zhang Yue" (6 words) plus a Draft chip. Headline: "How can we better track gradual disempowerment?" (7 words). One sentence, 25 words or fewer: "People could lose their say over the economy, culture and the state without any dramatic event. This chain shows what is tracked, link by link."
2. **The chain.** Small mono label above it: "What is measured today". Nodes: name only (3 words max), no numbers, no signal bars. Line style is the only encoding. Zone shading stays but labels shrink to "Use", "Consequences", "Outcome". Map height drops from 700 to about 500 viewBox units (branch spacing 120, not 140). Legend: one row under the map, five line samples with 2-3 words each. One caveat line (15 words or fewer): "Lines show how well each stop is measured, not that one causes the next." Tour: demote to a ghost button in the legend row; its card opens over the empty top-left of the map.
3. **The one insight** (below the chain, as she asked). H2 (13 words): "The first links are measured repeatedly. The last ones are barely measured at all." Under it three small groups, names only: Measured repeatedly (Capability, Adoption, Hand-over); Patchy (Entry-level work, Workers' share, Culture); Barely measured (Skills, Institutions, Human influence). Each name links to its page. A mono strip of three numbers: 8 links, 39 indicators, 392 readings since 2021. This is the only quantitative claim on the page.
4. **Three doors** (cards): Evidence ("What the data show"), Blind spots ("What nobody measures"), Futures with WIP chip, dashed outline ("Where forecasters think it leads"). Title 4 words or fewer, one line of 12 words or fewer.

Gaps: hero to chain 56-80px; chain to insight and insight to doors 96-128px.

**Where the measurement record lives.** Home loses it. It becomes `#record` (sub-page of Evidence), reached from (a) the Evidence overview footer, (b) the Method page, (c) **a click on the map**. Click behaviour:
- Every line segment into a stop is a 24px-wide hit target. Segments rated 2 or below (hollow, dotted, faint) carry a 18px "i" badge at the midpoint; the legend row says "Select a dotted line to see why".
- Click opens a **drawer** inside the map card, below the SVG (max 260px, animates 0 to height in 200ms). Contents, 45 words or fewer: title "Skills and judgement: why dotted?"; a **one-row record strip** (that link's lanes only, reusing `Charts.record` with one row); four check marks from RUBRIC (Repeated, Direct, Independent, Tied to AI); one sentence ("Five one-off studies; none follows the same people over time."); link "See the full record".
- Solid lines open the same drawer ("why solid?"), no badge. This shows the lack of longitudinal series as the reason for a low rating, which is her idea.
- Link pages also get a closed "Data coverage" expander with the same one-row strip.

### Evidence overview (target 1,000px; was 1,422px; 250 words or fewer)

1. Hero: H1 "What the evidence shows" (4 words); deck 20 words or fewer: "One row per link. Colour shows how much the data have moved. Select a row for the detail." Drop the chain glyph.
2. Legend: one row, five swatches with words (Changing fast, Clearly changing, Early or mixed signs, No clear change yet, Can't tell). User-facing label for the scale: "What the data show" (not "signal").
3. Nine rows (spec in section 5). No raw numbers. A 4px colour band down the left edge makes the vertical fade from dark teal to grey read at a glance. That fade is the page's one message: movement is strongest at the front of the chain and unknowable at the end.
4. Footer: two links in one row, "Measurement record: every dated reading since 2021" and "What would count against the theory" (the home `COUNTER` list moves here, as a closed expander of five short rows).

### Link page (target 1,700px; was 2,099px; 250 words or fewer closed)

1. **Claim.** Small breadcrumb with prev/next (replaces the 9-tab crumb strip): "Evidence › Skills and judgement ‹ ›". H1 claim (16 words or fewer) plus one sentence (first sentence of the old "In brief", 25 words or fewer). Right side: two pills only, "What the data show" and "How well measured". Latest-data date goes in the chart footer.
2. **Indicator cards.** 3-up grid (6 cards = 2 rows). Closed card has no numbers (spec in section 5). Instruction above, 7 words: "Select an indicator to see its chart". First card open by default.
3. **Open panel.** Title with the headline figure (14 words or fewer), one chart, "Reading it" (40 words or fewer), source chip, one caveat signpost, "Data table" expander. Sources under "Sources" expander.
4. **Insight cards**: sceptic, nobody measures, watch (spec in section 5). Content change: each item needs a label of 5 words or fewer plus a sentence of 22 words or fewer. The sceptic items already have bold lead-ins ("Small and short.", "Confounded."); the other two lists need labels written (about 60 items).

### Futures (target 2,600px main; was 5,210px; 400 words or fewer)

Mark WIP three ways (spec in section 5): nav tag, banner under the H1, dashed-outline cards. Banner copy, 18 words or fewer: "Work in progress. Anchored on published forecasts, mostly US labour-market economics. Needs more research."
1. **Squeeze, not crash**: the existing fan chart plus one sentence. One caveat signpost ("Forecast, not data") above it, as METR does.
2. **Five routes**: keep the tabs and signposts (Route E, plateau, must stay); cut route descriptions to 10 words; move the "closest forecast" note into an expander.
3. **How far to trust forecasts**: five lessons as closed rows (label visible, sentence on click).
4. **More forecasts** (three link cards to new `#futures/more`, each carrying the WIP chip): three AI-progress scenarios (the five small multiples and the odds chart), jobs and unemployment, catastrophic-risk estimates. Existing draw functions are reused unchanged.

### Blind spots (target 1,900px; was 2,447px; 300 words or fewer closed)

1. Hero: H1 "What is not being measured?" (5 words); one sentence of 25 words or fewer on why human influence has no direct measure.
2. **Priority matrix** (about 460px tall, plain SVG). X: how well measured today (the existing 0-4 level, left = none). Y: closeness to the outcome (steps from Human influence on the map: Human influence 0; Skills, Institutions, Culture, Workers' share 1; Hand-over and Entry-level work 2; Adoption 3; Capability 4, drawn top = closest). Both axes are objective, so the only judgement is the existing level. Top-left quadrant shaded with the map's hatch and labelled "Close to the outcome, barely measured". Nine labelled dots; Human influence and Skills and judgement get a ring plus the flag "Worth working on". Institutions also sits in that quadrant and stays unflagged but visible; a note says why (see risks). One-sentence caption. Disclosure line (see risks): "The author's research focus is Human influence and Skills and judgement."
3. **Missing measures** as accordion rows grouped by link, closest-to-outcome first, with an "Expand all" control. 14 rows. Closed row text is plain language (spec in section 5). Rewrites:
   - Unaided ability, tested twice → "No repeat tests of people working without AI"
   - Take-back time → "How long skills take to recover when AI is withdrawn"
   - The override rate → "How often officials overrule AI advice is unpublished"
   - Decisions made by AI → "No count of the decisions AI actually makes"
   - Attention-weighted AI share → "How much of what people read and watch is AI-made, by time"
   - Who can decide → "Who holds decision power, and how much of it is AI"
   - A population measure of disempowerment → "No validated survey scale for disempowerment"

### Method (target 2,800px; was 5,356px; content kept)

Wording and UI only. Add a contents bar under the H1 (anchor chips: Status, Ratings, Charts, Tags, Limits, Terms, Sources). Convert "Status of the figures" into the Draft-tag callout. Glossary and Sources become closed `details` sections. "Known limits" rows show the bold lead as the visible label and expand to the sentence, but the first two (Mostly American; Map shows stops, not causes) stay open. Replace "The measurement record" paragraph with a link to `#record`. Add a "Signal scale" rubric block (the five words with definitions) next to the 0-4 measurement scale.

## 4. Spacing and type system (site-wide)

Current gaps (48px sections, 22px hero-to-chain, 22-24px card padding) are too tight for the white space she asked for.

```css
:root{
  /* space */
  --gap-section: clamp(72px, 9vw, 128px);   /* between sections, home */
  --gap-section-sm: clamp(56px, 7vw, 96px); /* inner pages */
  --gap-hero: clamp(48px, 6vw, 80px);       /* headline block to first figure */
  --gap-head: 28px;                         /* section head to its body */
  --gap-stack: 16px; --gap-tight: 8px;
  --pad-card: clamp(20px, 2.4vw, 32px);     /* phone: 20px */
  --gutter: clamp(16px, 4vw, 40px);         /* wrap padding-inline */
  --maxw: 1160px;
  /* measure */
  --m-prose: 62ch; --m-note: 56ch; --m-card: 34ch; --m-h1: 16em; --m-h2: 20em;
  /* type (Archivo UI/display, Source Serif 4 prose, IBM Plex Mono labels) */
  --t-xs: .6875rem;                              /* 11px mono labels, axis, tags */
  --t-sm: .8125rem;                              /* 13px captions, chips */
  --t-base: 1rem;                                /* 16px UI and card text */
  --t-prose: 1.0625rem;                          /* 17px serif body, lh 1.55 */
  --t-lead: clamp(1.1875rem, 1.6vw, 1.375rem);   /* 19-22px deck, serif, lh 1.45 */
  --t-h3: clamp(1.0625rem, 1.4vw, 1.25rem);      /* 17-20px card title, Archivo 700, lh 1.2 */
  --t-h2: clamp(1.75rem, 3.2vw, 2.5rem);         /* 28-40px, Archivo 750, lh 1.1, -0.02em */
  --t-h1: clamp(2.125rem, 4.6vw, 3.5rem);        /* 34-56px, Archivo 800, lh 1.04, -0.025em */
}
```

Rules:
1. **Three levels per view.** L1 = H1 or H2 (one per section). L2 = card or row title (Archivo 650-700, `--t-h3` or `--t-base`). L3 = body, caption or chip (serif `--t-prose`, or sans `--t-sm`). If a block shows a big number, a title, a caption and a mono label, it has four levels: cut one.
2. **Mono labels** (Plex Mono, uppercase, 0.06em): only for an eyebrow (one per section, 24 characters or fewer), axis and unit text, dates, and source tags. Never for sentences, buttons, nav or caveat chips. No mono run longer than 40 characters, so the map captions ("software tasks done at 50% success") go.
3. **Serif is for sentences a reader reads through; sans is for things a reader scans or clicks.** Row labels, chips and card titles are sans.
4. Max 2 chips per figure; max 1 mono eyebrow per card.
5. Sections separated by space, not rules; rules only inside lists and under tables.
6. Phone (390px): gutter 16px, section gap 64px, H1 34px, card padding 20px, minimum touch target 44px.

## 5. Component specs

### Signal of change colour (new)
Teal ramp, one hue, reads as "observed", opposite the orange forecast ramp; grey for unknown. Lightness steps are monotonic (light: L* 35, 54, 76, 91; dark mode reversed), so it survives colour-blindness and greyscale.
```css
--sg4:#0b5d57; --sg3:#2a8f86; --sg2:#86c8bf; --sg1:#d6ebe8; --sg0:#8f9ca8; /* light */
/* dark: */ --sg4:#7be0d3; --sg3:#46b3a6; --sg2:#2a7d74; --sg1:#1d4a46; --sg0:#66747f;
```
The two lightest light-mode swatches fail 3:1 against the surface (1.2 and 1.85), so every swatch gets a 1.5px `--ink-3` outline. Never put text on a swatch; the word sits beside it. "Can't tell" is a hollow disc with a dashed `--sg0` ring and a "?", not a pale teal, so unmeasured never reads as "little change". Teal sits beside the navy line ramp on the map only in tooltips, which is why Home carries line style alone.

### Evidence overview row
- Anatomy (desktop grid): `28px | 1.1fr name | 56px line-glyph | 188px signal pill | 2fr one-liner | 20px chevron`; row `min-height:72px; padding:18px 0`; 4px left band in the signal colour. Whole row is one `<a>`.
- One-liner 12 words or fewer, serif 16px, `--ink-2`. The line glyph is the map's line sample (title attribute carries the measurement word).
- Hover: `background:var(--surface)`, band to 8px, chevron `translateX(3px)`. Focus: 2px accent outline. No open state (it navigates).
- Phone: name and pill on line one, one-liner on line two, glyph hidden, chevron right.

### Indicator card (link page)
- Closed: `min-height:112px; padding:16px; border:1px solid var(--rule); border-radius:4px; background:var(--paper)`. Contents top to bottom: 72x28 sparkline of the real data (`Charts.spark`, stroke 2px, end dot, no axes and no numbers) with a **points-toward-the-concern marker** at its right (filled disc = toward, hollow = away, half = unclear, with `aria-label`); label (sans 15px/600, 8 words or fewer, 2 lines max); trend word (sans 13px `--ink-2`: Rising fast / Rising / Flat / Falling / Mixed / One-off). Chevron bottom right.
- Affordance: border plus chevron, and the instruction line above the grid. A legend for the marker sits once in that line, not on each card.
- Hover: border `--ink`, `background:var(--surface)`. Focus: 2px accent outline, offset 2. **Open**: 2px `--ink` border, `--surface` background, chevron rotated 90 degrees, a 10px notch joining the card to the panel.
- Desktop (641px and wider): `role="tablist"` of `role="tab"`, roving tabindex, arrows move focus, Enter or Space selects (manual activation, so charts do not redraw on every arrow press); panel `role="tabpanel"` with `aria-labelledby`. Phone (640px and below): single-open disclosure list (`aria-expanded`, `aria-controls`); the panel is re-parented directly under the pressed card; rows are 64px high.

### Insight cards (sceptic, nobody measures, watch)
- 3-up grid, `gap:24px`, `align-items:start`, padding `--pad-card`, `border:1px solid var(--rule)`, `background:var(--surface)`. Stacks to one column at 860px.
- Header: 20px line icon plus title (sans 17px/700, 5 words or fewer). Top accent distinguishes the three without new colours: **sceptic** = 3px solid `--ink-3`; **nobody measures** = 8px band of the map's hatch pattern (reads as "unmeasured"); **watch** = 3px dashed `--ink` (reads as "ahead").
- Body: 3 or 4 rows. Closed row = label (sans 15px/600, 5 words or fewer), 44px high, "+" at right. Open = sentence of 22 words or fewer (serif 16px, `--ink-2`), "-" at right. Rows are `button[aria-expanded]` with a labelled region; Enter and Space toggle; Tab moves row to row. Multiple rows can be open.
- Never hide a card's existence; labels always visible, so a sceptic point cannot be buried.

### Expandable row (blind spots)
- Closed: 64px high; chevron, title (sans 16px/600, 10 words or fewer), problem-type chip, link name (13px, hidden inside grouped lists). Group header per link: name, line glyph, and a "Worth working on" flag on Human influence and Skills and judgement.
- Open: two columns of labelled blocks: "What it would be" (30 words or fewer), "Closest thing today" (30), "Why it matters" (20), plus "Open <link> →". Phone: chip drops under the title, blocks stack.
- Keyboard: `button[aria-expanded][aria-controls]`; Enter or Space toggles; Up and Down arrows move between row headers; "Expand all" and "Collapse all" at list top.
- Problem types (reuse caveat icons where they match): No measure exists, One-off only, Not tied to AI, Company data only, Definitions differ.

### Caveat signpost (6 types)
Icon (14px outline SVG, `currentColor`, stroke 1.5) plus 4 words or fewer, in a 24px pill (`padding:0 8px 0 6px; border-radius:12px; background:var(--surface-2); border:1px solid var(--rule)`; sans 12.5px/500 `--ink-2`; sentence case, never mono). Place at the top right of the figure header, before the chart, as METR does. Maximum two chips per figure (one source tag plus one caveat). The source tag stays mono outline.
1. **One-off study** (single dot)
2. **Cause disputed** (broken link)
3. **Company's own data** (tag)
4. **Definitions differ** (two unequal bars)
5. **Unverified figure** (hollow marker, matching the chart's hollow points)
6. **Forecast, not data** (dashed line)

Interaction: a `<button>` with `aria-describedby` pointing at a tooltip (`--surface`, 1px `--ink` border, 13px, max 240px, 25 words or fewer plus a "Why this matters" link to Method). It opens on hover or focus after 150ms, toggles on tap, Esc closes. "Not yet checked by a person" is a page-level Draft tag, not a figure caveat.

### WIP tag and treatment
- Tag: 22px chip, mono 10.5px uppercase "Work in progress", `border:1px dashed var(--ink-3)`, hatch background at 8% opacity. Appears next to "Futures" in the nav (abbreviated "WIP"), in the banner, and on the Home door card.
- Greyed treatment on Futures: banner full width, 40px; `.fig` cards use `border:1.5px dashed var(--rule)` and a transparent background (sketch look); headings `--ink-2`; orange ramp at `filter:saturate(.8)`. Charts stay legible: the point is "draft", not "disabled".

### Map line-click drawer
`role="region"`, `aria-live="polite"`, reserved below the SVG. Badges and segments are `tabindex="0"`, `role="button"`, `aria-expanded`, `aria-controls="mdrawer"`, with `aria-label` such as "Skills and judgement: thinly measured. Show why." Tab order follows the chain. Esc closes and returns focus to the badge. On phone the map is replaced by the vertical list (as now); each row has a "Why?" text button that opens the same drawer inline under the row.

## 6. Top 15 changes, highest impact first

| # | Change | Effort |
|---|---|---|
| 1 | Cut Home to hero, chain, one insight, three doors (2,000px, 350 words) | M |
| 2 | Spacing and type tokens in section 4, applied site-wide | S |
| 3 | Strip big numbers and long zone labels from map nodes; compact geometry so the whole chain fits 1280x900 | M |
| 4 | New headline and one-sentence deck; move the "measured repeatedly / barely measured" line below the chain | S |
| 5 | Signal-of-change field per link plus trend word and toward/away per indicator (needs her sign-off) | M |
| 6 | Evidence overview rows: colour pill, line glyph, one-liner, no numbers | S |
| 7 | Indicator icon cards on link pages (sparkline, trend word, toward marker, single-open panel) | M |
| 8 | Insight cards with 5-word labels and expand-for-sentence (about 60 labels to write) | M |
| 9 | Move measurement record to `#record`; add click-a-line drawer on the map | M |
| 10 | Futures: WIP treatment, split to `#futures/more`, trim routes | M |
| 11 | Blind spots: plain-language titles, accordion with problem-type chips | M |
| 12 | Blind spots: priority matrix plus the author-interest disclosure | M |
| 13 | Caveat signpost set (6 icons, tooltip) replacing inline caveat paragraphs | M |
| 14 | Method: contents bar, collapsed glossary and sources, signal rubric | S |
| 15 | Phone and keyboard pass: tab/disclosure switch, 44px targets, focus order, reduced motion | M |

## 7. Risks and mitigations

- **Fewer numbers can look like less rigour to researchers.** Keep every number one click away (open panel title, data table, tooltip). Put "8 links, 39 indicators, 392 readings" on Home so scale is visible without the clutter.
- **The signal scale is a judgement and could be read as a finding.** Show an "Observatory judgement" label, publish the five definitions on Method, keep it separate from measurement quality, and never describe it as causal. Grey means "can't tell", never "low".
- **Hiding caveats can mislead.** Draft chip on every page, caveat signposts before the figure, and the "not that one causes the next" line stays under the map. The six honesty caveats from the brief all survive: unchecked figures (Draft chip, Method), source tags (kept), line style not causation (map caption), what would count against (Evidence footer), Futures anchored on forecasts (WIP banner), Route E (kept).
- **Flagging two focus areas can look self-serving.** The matrix places Institutions in the same quadrant and the rule is objective (closeness to the outcome and measurement level). Add the line "The author's research focus is Human influence and Skills and judgement" so the interest is disclosed, not implied.
- **Collapsed sceptic points can look like burying.** Labels always visible; no item removed.
- **WIP greying can make Futures look abandoned.** Keep the fan chart fully legible and give one clear sentence on what is thin.
- **Icon and colour-only cues.** Every swatch and icon has a word beside it and an `aria-label`.
- **Audience spread.** Funders get the fast path (Home to Evidence colours); researchers get depth (Data tables, record, Method). Do not add a "simple/detailed" toggle in v5.

## 8. Provisional signal values and vocabulary notes (for her call)

Read from the existing `dir` strings; nothing here has been checked against the data. Capability 4; Adoption 3; Hand-over 2 (rose, then eased); Entry-level work 2 (young workers down, wider market flat); Workers' share 1 (fall mostly predates AI); Skills and judgement Can't tell; Culture 3 (supply up, attention low); Institutions Can't tell; Human influence Can't tell. Adoption (3 or 4) and Culture (2 or 3) are the close calls.

Vocabulary recommendations (do not rename the scale, only the surrounding labels): show the axis to users as "What the data show" rather than "signal of change", since "signal" is jargon; "Early or mixed signs" blends two ideas, so a one-line gloss in the legend tooltip is worth adding; keep "Can't tell" visually apart from "No clear change yet".
