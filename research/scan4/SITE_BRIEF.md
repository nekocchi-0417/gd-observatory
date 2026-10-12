# Site update brief (Landscape scan 4.0 + review 3.0) — 12 Oct 2026

Repo: /home/claude/gd-observatory-repo (canonical). Edit `src/` only, then build. The owner approved making the changes directly.

## Sources of the changes
- Per-stop proposals: /home/claude/research/scan4/<stop>.md, section 1 (status), 6 (ratings) and 7 (proposed site changes). Stops: capability, adoption, handover, work, share, culture, institutions, influence. Supporting detail and links are in the matching .jsonl.
- Skills and judgement: from the landscape review /home/claude/research/landscape/body.md (sections 1, 3.1–3.3, 4–6) and master.json. Specific instructions below.

## Rules
- Plain English, UK spelling, short sentences, no jargon. Match the existing voice of `copy.js`.
- Never invent a number. Use only figures stated in the proposals (which were read at source), and keep the source link next to each one. If a proposal says "check before publishing" and you cannot confirm it at source, soften the wording (e.g. "lowest in the series shown") rather than assert it.
- Keep every place consistent: link objects in `data1.js` / `data2.js` (headline, status, claim, deck, tour, levelWhy, dir, asof, inds), `copy.js` (h1, sentence, inds labels/shows, sceptic, unmeasured, watch, rows, levelWhy text), `signals.js` (link signal/basis/change/close_call; indicator trend/toward/basis/flags), `data3.js` (gap list, missing measures, routes, rubric), and any tour/map text. Grep for every old figure you change (e.g. "52%", "5.7%", "2,137", "84%") and update all occurrences.
- Flags: use the existing flag ids. Find the flag dictionary (grep `flags` / flag labels in `components.js` or `app.js`). If a proposal needs a new flag (e.g. `stale`, `policy-driven`, `advocacy-source`), add its label to the dictionary in the same style.
- Source tags: use the existing TAGS keys (direct, primary, company, secondary, derived).
- New indicators: copy the pattern of an existing indicator with the same chart type (line / pairs / bars) in the same file. Give each a `tab`, `tag`, `rec`/`recName` only if it belongs in the measurement record (follow how similar indicators do it; check that the record strip still renders), `title`, `sub`, `render`, `read`, `src`. Add matching entries in `copy.js` inds (label, shows) and `signals.js` indicators (trend, toward, basis, flags).
- Ratings: keep each stop's measurement level and signal as now unless stated below; add or update `close_call` text where the proposals give one.
- Update `asof` dates where the data changed. Bump the site status to "draft v0.5 (12 October 2026)" wherever v0.4 appears (footer, README).

## Decisions per stop (apply all "Fixes" in each proposal's section 7 unless overridden here)
- **capability:** apply fixes. Add `rli` and `eci` as proposed. Flag `metr` and `gdpval` stale. Make RLI the headline ("AI now completes about 1 in 5 real paid remote-work projects to a professional standard"). Keep level 4, signal 4. Add the three sceptic points and three missing measures.
- **adoption:** apply fixes 1–10. Add `hours`. Do NOT add `global` as an indicator; instead rewrite `unmeasured[2]` to mention that the only Global North/South comparison is Microsoft's own data (22.9% vs 13.1% in H1 2025 → 27.5% vs 15.4% in Q1 2026). Replace the "Growth may be slowing" sceptic card as proposed. Keep 4/4.
- **handover:** apply fixes. Add `devagents` (pairs). Skip `prs`. Keep 3/2; add close_call "Could be 3 if coding is treated as the leading edge: agent use at work rose from 31% to 59% of developers."
- **work:** apply fixes 1–8. Add `euyouth`. Do not add `gradgap` as an indicator; add one sentence to `grads.read`: the BLS gap between young (20–24) and older graduates' unemployment widened to 2025 (4.4 points, Jan–Sep average) and narrowed in 2026 (3.7), partly because older graduates' unemployment rose. Keep 3/2.
- **share:** apply fixes. Add `pay`. Check "lowest since the 1930s" against the full FRED series A4002E1A156NBEA (starts 1929); if you cannot confirm, say "lowest since at least 1995". Add the corporate-sector second line to the `ls` chart. Keep 2/2.
- **culture:** apply fixes (trust → Mixed; search → Falling; chatbots link; companions; articles). Add `books`. Keep 3/2; set close_call to mention that self-published genre fiction may already pass 5% of sales (press report of a preprint, unconfirmed).
- **institutions:** apply fixes (courts 2,184; inventory appeal routes; soften "nobody counts decisions" with the Met Police exception; close_call). Add `oecdgov` (pairs). Add `metlfr` as **pairs** using the Met annual report figures (primary: 203 deployments, ~3.1m faces scanned, 2,077 alerts of which 10 false, 962 arrests, Sep 2024–Sep 2025) plus the deployments growth 5 (2022) → 180 (2024) tagged secondary. Keep level 1, signal ?.
- **influence:** apply the `tax` update (86.2%, FY2026, policy-driven), the `control` note, the `firsts` additions (DOGE tool Jul 2025, UAE Cabinet Sep 2026; skip the Alberta item), gap card text, and the Kulveit citation. Add `lobby` (bars, tag secondary, flags as proposed). Do NOT add `trustgov`. **Keep measurement level 0 and signal ?** (lobbying measures effort, not influence). Add the four sceptic points. Add one line to the influence deck or unmeasured list: experiments show AI conversations shift beliefs and the shifts last weeks (Costello et al. 2024: about 20% less conspiracy belief, still there at 2 months), but no repeated measure tracks this in the population.

## Skills and judgement (from the review)
Keep level 1, signal "?" (close call 2 as now). Changes:
1. `lopsided` card: update with the review's counts: of 233 empirical studies on generative AI found, 21 test people without AI, 22 follow the same people for months or longer, and only 4 do both (all narrow; longest about 4 months). Source: the Observatory's own landscape review (tag `derived`), plus a link to the GitHub research folder file you add (see below).
2. `bastani` card: retitle to make the point "How AI is used decides whether people learn". Add pairs: Bastani plain chatbot −17% on the closed-book exam vs tutor version no harm (PNAS 2025); Shen & Tamkin 2026 coding quiz 50% vs 67% (arXiv 2601.20245); Lira et al. 2025 practising with AI improved later unaided writing (arXiv 2502.02880). Note the retracted Wang & Fan meta-analysis (Apr 2026) in the read text.
3. `budzyn` card: make sure the read text gives both sides: Poland 28.4% → 22.4% (observational, 19 doctors, workload doubled) vs Japan, 3 years, no decline (Okumura et al. 2025, Endoscopy). Both are image-recognition AI, not LLMs.
4. `metrrct` card: add pairs for felt vs actual ability: Fernandes et al. 2025 (ChatGPT raised LSAT scores ~3.5/20 but users overestimated by ~4; doi 10.1016/j.chb.2025.108779); Perry et al. 2023 (less secure code, believed more secure; arXiv 2211.03622). Remove the "has not been re-checked" sentence as in the capability proposal.
5. New indicator `wrongadvice` (pairs, tag primary): "People follow AI advice even when it is wrong". Pairs: mammography readers' accuracy ~80% → under 20% when the AI was wrong (Dratsch et al. 2023, Radiology); physicians' reasoning scores −14 points with wrong ChatGPT-4o suggestions (Qazi et al. 2025, medRxiv 10.1101/2025.08.23.25334280); members of the public using LLMs found the right condition in under 34.5% of cases vs 94.9% for the LLM alone (Bean et al. 2026, Nature Medicine, doi 10.1038/s41591-025-04074-y); human-AI pairs did worse than the better of the two alone, g = −0.23 across 106 experiments (Vaccaro et al. 2024, Nature Human Behaviour). Flags: one-off, narrow. Trend "One-off".
6. Sceptic points to add: Okumura (no decline over 3 years); tutor-style AI shows no harm; Go professionals' unaided play improved after AlphaGo (Shin et al. 2023, PNAS); call-centre agents kept part of their AI gains during outages (Brynjolfsson, Li & Raymond 2025).
7. Missing measures to add: how long it takes to regain a skill after AI is removed ("take-back time"); dependence scales checked against behaviour; model benchmarks linked to what happens to users.

## Research folder
- Copy into the repo: `research/landscape/` ← /home/claude/research/landscape/{body.md→review-3.0.md, skills.md, judgement.md, beliefs.md, dependence.md, group.md, institutions.md, evals.md, constructs.md, master.json, instruments.json, SPEC.md} and `research/scan4/` ← /home/claude/research/scan4/{*.md, *.jsonl}. Update `research/README.md` with a short section for each (what it is, date, counts, limits: broad not systematic; search budget ran out in every pass).

## Build and check
- `cd /home/claude/gd-observatory-repo && sh build.sh && sh build.sh artifact`.
- Run `NODE_PATH=$(npm root -g) node tools/verify.js` (read it first; it checks every page at desktop and phone, light and dark). Fix any console errors or layout breaks. Take screenshots of each changed link page (desktop) and look at them yourself.
- Do NOT git commit, push, or publish anything.

## Report back (≤300 words)
List the changes per stop (one line each), new indicators added, anything you could not do or chose not to do and why, and any figure you softened. Also write the full change log to /home/claude/research/scan4/CHANGELOG.md.
