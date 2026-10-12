# Change log: draft v0.4 → v0.5 (12 October 2026)

Applied from landscape scan 4.0 (`<stop>.md`, section 7), the landscape review 3.0 (`../landscape/`), and `SITE_BRIEF.md`. Edits are in `src/` only; `docs/index.html` and `dist/artifact.html` were rebuilt. Nothing was committed, pushed or published.

A fact-check of the proposals (`FACTCHECK.md`) appeared during the work. Where it differed from a proposal, I re-read the source myself before changing anything (Epoch's ECI data file, FRED's work-hours series, FRED's pay-share series). Those corrections are marked **[fact-check]**.

## Site-wide

- Version: "Draft v0.4 · 8 October 2026" → "Draft v0.5 · 12 October 2026" (footer, README status line and citation, `package.json` 0.5.0, unused `DRAFT`/`ASOF` constants in `app.js`).
- Indicators: 39 → 50 (home numbers line). Missing measures on the gap page: 14 → 19 (home door card, gap sentence and title, README).
- Flag dictionary (`components.js` `FLAGCAV5`/`CAV5`/icons, `copy.js` `caveats`, Method page chip list): three new caveat chips in the existing style, added after the old ones so no existing card changes chip.
  - `stale` → "Not updated" (now shows on `metr`, `gdpval`, `chatgpt`).
  - `policy-driven` → "Policy-driven" (`tax`).
  - `advocacy-source` → "Advocacy source" (`lobby`).
  - Other new flag ids (`keyword-match`, `effort-not-outcome`, `annual`, `revised`) are recorded in `signals.js` without a chip, like most existing flags.
- Glossary "Who the sources are": added Center for AI Safety, Scale AI and Public Citizen.

## Capability (level 4, signal 4 kept)

- New headline: "AI now completes about 1 in 5 real paid remote-work projects to a professional standard" (h1, link headline, status, claim, deck, tour, evidence row, one-liner).
- New indicator `rli` (line, primary), now the first card: best Remote Labor Index score at each release, 2.5% (Oct 2025) → 21.25% (Sep 2026). **[fact-check]** Claude Opus 4.8 (8.33%, 28 May 2026) and Claude Fable 5.1 (17.92%, 1 Sep 2026) were frontier steps, not "undated, below frontier", so they are plotted; release dates from Epoch's data file; GPT-6 Astra's date is now confirmed (no longer a hollow press-report marker).
- New indicator `eci` (line, primary). **[fact-check]** The proposal asked for a re-pull of Epoch's data before publishing. I re-read `eci_scores.csv` (12 Oct 2026): almost every value had shifted, Claude Fable 5 no longer sets a new high, and Claude Opus 5, Claude Fable 5.1 and GPT-6 Astra do. The chart now plots the 22 releases that set a new high, from 125.89 (GPT-4) to 167.33 (Claude Opus 5.5). The "about 14 points a year" trend is Epoch's own statement.
- `metr`: flag `stale`; read notes METR's GPT-5.6 Sol result (about 11 hours, not robust because the model cheated). **[fact-check]** Wording is "marked no longer actively updated on 8 Sep 2026; the last model added was in May 2026", not "stopped updating on 8 Sep" (also in levelWhy, deck, sentence, signals, gap item, route E).
- `gdpval`: flag `stale`; read says neither GPT-5.6 nor GPT-6 Astra launched with a GDPval score; GPT-6 Astra post added as a source.
- `price`: "shows", read, first pair and signal now say cost of reaching a fixed benchmark score, reasoning included, not price per token.
- levelWhy and drawer sentence: independent trackers measure almost every major model; METR's series has added no model since May 2026.
- Watch: "Half of real projects" (RLI passing 50%); "A second evaluator" marked partly met (UK AISI cyber task length; RLI covers work outside software); plateau text generalised.
- Sceptic: added "Reliability lags" (Princeton tracker) and "Lab scores, real users" (Bean et al.: 95% vs under 35%); "Benchmarks flatter" became "Tests can be gamed" (SWE-bench Verified, memorisation on SWE-bench Pro, GPT-5.6 Sol cheating), so the third new point and the SWE-bench point share one card.
- Missing measures (both "What nobody measures" and the gap list): reliability on real work; cost per completed real task; the lab-to-life gap. Gap item 0 updated for METR and RLI.
- `metrrct` (skills page): deleted "The direction of those two figures has not been re-checked".

## Adoption (4/4 kept)

- Gallup Q3 2026 added (53% any, 32% weekly, 16% daily; Aug 2026) and figures updated everywhere (tab, headline, status, claim, deck, tour, h1 sentence, watch, route E, signals); x-axis widened, also on the skills `lopsided` chart that reuses the series. Read: 84% not daily (Aug 2026); 22,573 labelled as the Q2 2026 sample.
- Link basis rewritten: work use "as fast as" PCs, overall faster (NBER); hours 6.3% (Q2 2026). Close call and "change" updated.
- `rps`: hours pair 5.7% → 6.3% (Q2 2026), FRED hours series cited; first adult reading revised from 39.4% to 44.6%.
- Deck, sceptic "Wide but shallow" and watch: 5.7% → 6.3%; euro-area point added (70% some use, 7% significant; ECB 2026).
- `firms`: pairs for the UK (about 12% → about 35%, ONS) and Canada (6.1% → 19.2%, Statistics Canada).
- Unmeasured: hours item rewritten (no statistics agency; the only series is the St. Louis Fed online panel, quarterly, by occupation); outside-the-rich-world item now cites Microsoft's own Global North/South figures (22.9% vs 13.1% in H1 2025 → 27.5% vs 15.4% in Q1 2026). Gap item 1 title and "closest" corrected to match.
- Sceptic: Danish paper's new title (Still Waters, Rapid Currents, NBER w33777, 2026); "Growth may be slowing" (ChatGPT users) replaced by "Recent growth has slowed" (Gallup +1 point, ONS "broadly stable", Census 17–20% for five months, Ramp "decelerating").
- New indicator `hours` (line, primary): share of US work hours assisted by generative AI. **[fact-check]** All seven quarterly values now come from FRED itself, including Q1 2025 (4.68%), which the proposal could not read; no gap or hollow marker.
- Not added: `global` indicator (brief).

## Hand-over (3/2 kept)

- Close call added: "Could be 3 if coding is treated as the leading edge: agent use at work rose from 31% to 59% of developers." Basis rewritten (classifier noise; coding agents). `dir` → "Coding rising; chat flat within method noise". h1 sentence, evidence row and one-liner updated to match.
- `aei`: read adds the classifier re-run (45% not 49%) and that the June 2026 report gives no split in its text; chart gains a "Jun 2026 report: no figures in text" line and a wider axis.
- Deck: March 2026 report also says automation "decreased sharply" in API data (no figure).
- `agents`: pair 1 relabelled (longest run, average); pair 4 notes the later decline; pair 6 "at most 73% (Anthropic's upper bound)", also in gap item 2.
- `code`: 50% and 75% points now solid; TechSpot replaced by Google's own Cloud Next post; tag secondary → company; read rewritten with the independent GitHub estimate (29% of US Python functions, Daniotti et al.). Flag `weak-source` → `vendor`, since the figures are now read on Google's own page (no chip, because the tag already says "Company's own data").
- New indicator `devagents` (pairs, primary): Stack Overflow, developers using AI agents at work 31% → 59%, daily 14% → 37%, 63% rarely or never use autopilot, 60% block unapproved changes.
- Not done: the April–May 2026 Claude.ai split in Anthropic's June 2026 data release. The proposal gives no values and the file was not read, so the chart shows the gap and the read says so. `prs` skipped (brief).

## Entry-level work (3/2 kept)

- `postings`: 77 → 78.33 (2 Oct 2026); aria, tab, read ("Dec 2024 to Oct 2026") and signal updated; source notes FRED update of 7 Oct 2026.
- `canaries` read: the gap survives rate and remote-work controls but shrinks with education; firm-wide trends removed, the fall is clear only from 2024. Stanford's Feb 2026 note added as a source.
- Sceptic "Other countries see less" → "Nordic registers see little" (Finland null; Norway no robust effect to Mar 2025, emerging gap to Feb 2026; Denmark). "Exposed workers…" now cites Stanford's SIEPR (0.77 vs 0.85).
- Unmeasured: firm adoption and junior hiring (about 9% US, 6% UK, neither repeated). Gap item 3 now cites Hosseini and Lichtinger (about 9% after six quarters, senior unchanged) instead of "8 to 10%, known second-hand".
- `grads` read: EPI (steady employment rate; rise mostly more people looking) and the BLS graduate gap sentence (4.4 points in 2025, 3.7 in 2026, Jan–Sep averages, partly because older graduates' unemployment rose); BLS/FRED and EPI sources added.
- Watch: Norway's KI-indeksen.
- New indicator `euyouth` (line, primary): EU information and communication jobs by age, four-quarter averages, 2022 = 100. The 2025 young-worker value is **90.5**, not the proposal's 90.6 (469.575 / 518.65; the fact-check agrees). Points sit mid-year so the ChatGPT line falls between the 2022 and 2023 averages.
- Not added: `gradgap` as an indicator (brief); its finding is one sentence in `grads`.

## Workers' share (2/2 kept)

- Basis: BLS yearly average flat 2023–25, but BEA's pay share fell to 50.9% in 2025, lowest since the 1930s. **Checked at source:** in FRED A4002E1A156NBEA (from 1929) the only years at or below 50.9% are 1929 (49.5), 1930 (50.9) and 1935 (50.6), so "lowest since the 1930s" stands (strictly, since 1935). Deck and h1 sentence mention the BEA measure.
- `ls` chart: second line for nonfinancial corporations (FRED PRS88003173, 2019–2026; no self-employed pay to estimate); read and source updated; next release 5 Nov 2026.
- New indicator `pay` (line, primary): pay and domestic corporate profits as shares of GDI, 1995–2025, with labels for the 2000 peak and the 2021 profit step (the zero-based axis otherwise hides the fall).
- Sceptic: Stanford's tracker rates the capital share "Strong Evidence" but calls it the old trend; Grossman and Oberfield quote corrected to "collectively explains the phenomenon many times over".
- `compute`: capex pair now sourced to Platformonomics (from company releases), replacing the unchecked tracker blog; Nvidia's quarter added ($59.7bn net income on $96.2bn revenue).
- `union`: 2025 is an 11-month average; pair for computer and mathematical workers (3.7%).
- `mag7`: S&P Dow Jones Indices note (top-10 weight highest since 1970); card and `stale` flag kept.
- Unmeasured: AI-related investment is estimated (39% of real GDP growth, Q1–Q3 2025, St. Louis Fed), but no series splits AI capital's income. Watch: BLS release of 5 Nov 2026.

## Skills and judgement (level 1, signal "?" kept; from review 3.0)

- `lopsided`: tag → `derived`; tab, title and pairs now give the review's counts (233 studies; 21 test without AI; 22 follow the same people for months; 4 do both, all narrow, longest about 4 months); read explains the review's limits; source links the new `research/landscape/review-3.0.md` on GitHub.
- `bastani`: retitled "How AI is used decides whether people learn"; pairs for Bastani (−17%, tutor no harm), Shen and Tamkin (50% vs 67%) and Lira et al. (better later unaided writing); read notes the retracted Wang and Fan meta-analysis.
- `budzyn`: read now sets Poland (28.4% → 22.4%, 19 doctors, observational, workload doubled) against Japan (3 years, no decline, Okumura et al. 2025); both image-recognition AI, not LLMs; Okumura added as a source.
- `metrrct`: pairs for felt vs actual ability (Fernandes et al.: users overestimated by about 4 of 20 points; Perry et al.: less secure code believed more secure); card label "Feeling faster, being slower".
- New indicator `wrongadvice` (pairs, primary, one-off, narrow): mammography (about 80% → under 20%), physicians (−14 points), public using LLMs (94.9% vs under 34.5%), human-AI pairs (g = −0.23, explained in plain words). The mammography figure is marked in the read as not re-read at source (the review codes it unverified).
- Sceptic: added "Learning from AI" (Go players after AlphaGo) and "Gains that stayed" (call-centre outages); Okumura and tutor points were already present.
- Missing measures: "Recovery time" renamed "Take-back time" (every withdrawal test is a single check); added dependence scales checked against behaviour, and benchmarks linked to users (unmeasured cards and two new gap items). Gap items 5 and 6 updated with the review's counts.
- h1 sentence, deck, status, signals basis, gap list, priority list and route A updated with the 233/4 counts.

## Culture and information (3/2 kept)

- `trust`: Gallup US trust 28% (2025) → 33% (2026); trend Falling → Mixed; Gallup 2026 release added; card text updated.
- `search`: trend One-off → Falling (toward), flags vendor and cause; pairs now Chartbeat −22% → −40%, Ahrefs 35% → 58%, Pew 60% read AI summaries; read explains these are vendor series that repeat yearly.
- `chatbots`: DNR 2026 chapter (source of the 1% figure) and Pew 2026 added; pair "13% of US adults have used chatbots for news".
- `companions`: Pew Feb 2026 (4% companionship, 10% emotional support). `articles`: Originality.ai not updated since Sep 2025.
- Close call: AI-heavy self-published genre fiction may already pass 5% of sales (press report of a preprint puts it near 20%; unconfirmed).
- New indicator `books` (line plus pairs, primary): new Amazon ebooks with AI text 23.1% (2023) → 52.7% (2025); ratings 6.0 vs 82.5; releases nearly tripled; the 20% sales figure shown as "press report of a preprint · unconfirmed".
- Route E sign: articles plateaued; music and book supply still rising.

## Institutions (level 1, signal "?" kept)

- `courts`: 2,137 → 2,184 (10 Oct 2026); judges "about 33" → 32.
- `inventory` read: 16 of 227 deployed high-impact uses report an appeal route, 44 completed testing (filed before the April 2026 deadline); the 2025 form dropped the 2024 decision-autonomy question; 1,818 labelled as OMB's summary.
- "Nobody counts / none publishes decisions" softened everywhere to "almost no public body…", with London's Metropolitan Police face-matching alerts as the exception (claim, deck, tour, h1, evidence row, drawer sentence, unmeasured, levelWhy, status, headline, one-liner, gap item 9 title, chip "No measure exists" → "Partial coverage", findings thumbnail "0 decision counts in the US inventory").
- Close call added (OECD internal use 70% → 86%, but tools not decisions); "change" text updated.
- Gap rows: decisions (Met alerts, EU 43% automation flags); foreign providers (Microsoft in 100 of 311 US generative-AI uses naming a vendor; 38% of 409 Canadian systems vendor-built).
- Watch: the 2026 US inventory and its appeal routes.
- New indicator `oecdgov` (pairs, primary): OECD governments using AI internally 70% → 86%, public services 67% → 75%, policymaking 33% → 36%, oversight 33%.
- New indicator `metlfr` (pairs, primary): Met annual report (203 hotspot deployments plus 4 protective-security ones, about 3.1m faces, 2,077 alerts of which 10 false, 962 arrests, Sep 2024–Sep 2025) plus deployments 5 (2022) → 180 (2024) labelled as compiled by the London Assembly Greens.

## Human influence (level 0, signal "?" kept)

- `tax`: FY2026 86.2% added (preliminary; grey column); tab, aria, obs, CBO Sept 2026 source; trend Flat → **Rising** (the site's fixed trend words have no "Edging up"), toward "away", flag `policy-driven`. **[fact-check]** Read says *most* of the rise came from lower corporate tax and tariff refunds; the rest from income and payroll receipts growing faster than the total. Sceptic, watch, route D and card text updated (86%, up from 84%; watch now Treasury's final FY2026 figures).
- `control`: Pew's June 2026 release did not include the control question.
- `firsts`: Jul 2025 (DOGE deregulation tool; HUD says no decisions completed) and Sep 2026 (UAE Cabinet's 32 AI advisers) added; 10 → 12 events; Alberta item skipped.
- Gap card 13: UK, 50% say their views are not represented in decisions about AI (Ada Lovelace and Turing, 2025).
- Unmeasured: "Preferences that still count" cites Kulveit and co-authors' proposed measure; new "Lasting belief change" item (Costello et al. 2024: about 20% less conspiracy belief, still there at 2 months; no repeated population measure).
- Sceptic: four added (Senate 99–1 and 38 states' AI laws; local data-centre opposition about $130bn; CETaS no measured election effect; lost say predates AI, trust 77% → about 25% by 1980, V-Dem).
- New indicator `lobby` (columns, secondary, flags `advocacy-source`, `keyword-match`, `effort-not-outcome`): AI's share of federal lobbyists 11.4% (2020) → 26.1% (2025). It sits on the Institutions page and, with `control`, on the Human influence page and its record row.
- Not added: `trustgov` (brief).

## Research folder

- `research/landscape/`: `review-3.0.md` plus `skills.md`, `judgement.md`, `beliefs.md`, `dependence.md`, `group.md`, `institutions.md`, `evals.md`, `constructs.md`, `master.json`, `instruments.json`, `SPEC.md`. `review-3.0.md` is made from `review_body.md`, not `body.md`: `body.md` is the template with unfilled counts (`{{N_GEN}}`) and citation keys, while `review_body.md` is the same text with the counts the site now cites (233/21/22/4) and the links filled in. Its four table placeholders are replaced by short notes pointing to `master.json` and `instruments.json`.
- `research/scan4/`: all eight `<stop>.md` and `.jsonl`, `SPEC.md`, `SITE_BRIEF.md`, `FACTCHECK.md` and this file.
- `research/README.md`: dates extended to 12 Oct; sections for `landscape/` and `scan4/` (what, when, counts, limits); a note that `checklist/handcheck.csv` was written for v0.4 and rows 1, 3, 4, 5, 10, 16, 29, 31, 37 and 38 now show older text.
- Main README: v0.5 status and citation, nineteen missing measures, one sentence pointing to the new research folders.

## Chose not to do, or could not do

- Proposal items outside the brief's decisions were not applied: the extra sceptic points and gap-list items proposed for adoption, hand-over, work, share, culture and institutions (only their "Fixes" were applied, as the brief says); the CISAC watch item (culture).
- `handcheck.csv` not edited (outside the brief); flagged in `research/README.md`.
- README screenshots (`assets/screenshots/`) not regenerated: Google Fonts cannot load in this environment, so new captures would not match the published look.
- Anthropic's April–May 2026 Claude.ai split not pulled (see hand-over).

## Figures softened or qualified

- "Nobody counts decisions made with AI" → "almost no public body counts…", with the Met exception.
- METR: "stopped in September 2026" → "no model added since May 2026; marked not updated on 8 Sep 2026".
- CBO FY2026 rise: "came from" → "most of it came from" lower corporate tax and tariff refunds.
- Bean et al.: "34%" → "under 35%" / "under 34.5%".
- Self-published fiction near 20% of sales: shown only as an unconfirmed press report of a preprint.
- Dratsch mammography figure: flagged as not re-read at source.
- "Lowest since the 1930s" was confirmed at source and kept.

## Checks

- `sh build.sh && sh build.sh artifact`, then `tools/verify.js` (desktop and phone, light and dark): no script or console errors (the blocked Google Fonts request is ignored, as before), no sideways scrolling, all cards and drawers open; no new "never/nobody/no one" wording. `copy.js` parses as JSON with no duplicate keys; gap items in `copy.js` and `GAPS` in `data3.js` both number 19.
- Desktop screenshots of every changed link page, the evidence record, the gap page and the Method page were reviewed, plus phone and dark-mode views of the new charts.
