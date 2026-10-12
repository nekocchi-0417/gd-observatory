# Institutions: scan 4.0 (12 Oct 2026)

55 items in `institutions.jsonl` (28 indicators, 21 studies, 4 frameworks, 2 forecasts); 24 read at source this session. Oversight and override research is in the landscape pass and is not repeated. The shared search budget ran out after about 22 searches, so legislatures, court AI policies and US state surveys are thin. Several new numbers are my own tabulations of OMB's data files.

## 1. Status on the site

- **courts is stale:** 2,137 → **2,184** (Charlotin, 10 Oct 2026); judges **32**, not "about 33".
- **inventory is current** (3,611 and 445, OMB README, 13 Apr 2026). OMB's "1,818 deployed and piloted" exceeds the CSV stage field (1,040 + 440, 338 blank); label it OMB's summary.
- **atrs is current:** 152 records, the newest dated 9 Sep 2026.
- **"No government publishes how many decisions its AI makes" is too strong.** London's Metropolitan Police publish facial-recognition deployments, faces scanned, AI alerts (true/false) and arrests; an officer reviews each alert. One tool, one force, but a count of AI-triggered decisions.
- The DSA dashboard shows the same 3,944,217,973 and 43% as on 8 Oct; it may refresh rarely.

## 2. What is measured (best series)

| Series | Freq. | Latest | Why it matters |
|---|---|---|---|
| US federal AI inventory (OMB) | annual | 3,611 uses; 445 high-impact (2025) | Only yearly official count; tools, not decisions |
| Inventory safeguard fields (my tabulation) | annual | Of 227 deployed high-impact uses: appeal route established **16 (7%)**, testing done 44, impact assessment 36, monitoring 40; about 101 blank | Oversight lags (filed before Apr 2026 deadline) |
| Inventory vendor field (my tabulation) | annual | Of 311 generative-AI uses naming a vendor: Microsoft 100, OpenAI 34, Google 21, AWS 18, Palantir 15, Anthropic 6 | Supplier dependence; 78% of fields blank |
| OECD Digital Government Index | biennial | Countries using AI internally 70%→86%; in public services 67%→75%; in policymaking 33%→36% (2023→25) | Repeated, independent, cross-country |
| Dutch Algorithm Register | monthly | 1,590 published (Oct 2026); "impactful" 578→716 since Nov 2025; high-risk AI flat at 41 since Jun 2026 | Monthly; has an impact category |
| Met live facial recognition | annual | 2,077 alerts (10 false), 962 arrests, ~3.15m faces (Sep 2024–Sep 2025); deployments 5 (2022) → 180 (2024) | Rare count of AI-triggered state decisions |
| Charlotin court database | continuous | 2,184 (10 Oct 2026) | Caught failures in courts |
| UK ATRS | continuous | 152 | Disclosure under a mandate |
| DSA Transparency Database | continuous | 43% of 3.94bn moderation decisions fully automated | Per-decision automation flag (platforms) |
| UK Civil Service People Survey | annual (new) | 27% save at least 1 hour a week with AI (n = 343,961, autumn 2025) | Huge sample; first reading (via press) |

Also: GAO-25-107653 (generative-AI uses at 11 agencies, 32 → 282 in a year); Brookings contract tracker (potential value $355m → $4.6bn → $91.8bn, 99% defence); GSA OneGov (3.4m staff with access, May 2026, via press).

**A proxy that broke.** Commons contributions containing "I rise to speak" (a ChatGPT-style phrase; my Hansard API counts): 191 (2022), 196 (2023), 132 (2024), 510 (2025: 429 in Jan–Jun, 81 in Jul–Dec), then 82 in Jan–Jun 2026 after September 2025 press coverage. Phrase counts stop working once known.

## 3. Key studies

- **Moon & Boudreaux (RAND, Apr 2026).** Formal model: agency erodes when humans leave decisions, AI joins them, or AI shapes the options, even with aligned AI. Proposed metrics: size and human/AI make-up of the smallest group that can settle a decision, tracked over time; test whether decisions could be handed back. Theory only.
- **Das et al. (FAccT 2026).** Of 409 systems in Canada's register, 86% serve staff, 38% are vendor-built and Microsoft appears in 46. Entries rarely say how humans review outputs.
- **GAO-25-107653 / GAO-26-107859.** Generative-AI uses rose ninefold at 11 agencies; 10 of 12 struggled to comply with AI policy; agencies lack experts to judge vendors (second report via press).
- **Algemene Rekenkamer (2024, via press).** 433 AI systems in 70 bodies; for 35% of those in use, performance unknown; 5% in the public register.
- **OECD Digital Government Outlook 2026.** Thin guardrails: 39% of countries require pre-deployment risk assessment, 31% audit after deployment, 17% keep an open register.

## 4. Sceptic's case

- **Most disclosed AI is back-office or not live.** Of 2025 US uses, 44% are science, admin or IT; 29% are deployed; 227 (6%) are deployed and high-impact; 56 are benefits processing. In Canada, 86% serve staff.
- **AI in policymaking is barely moving:** 33% → 36% of OECD countries in two years.
- **Humans still check.** An officer reviews every Met alert (10 of 2,077 false). Dutch high-risk AI entries are flat at 41.
- **Counts follow rules.** US categories changed each year, ATRS became mandatory and the Dutch register is growing through onboarding.
- **Vendors can be switched (unverified).** In 2026 the Pentagon dropped Anthropic for other suppliers within weeks (analyst account only).

## 5. Gaps (none found in this search)

- No series of decision volumes for any high-impact US federal AI system. The 2025 form dropped the 2024 question on whether AI decides without direct human involvement (2024: 3 yes, 143 "some need a human", 1,554 blank).
- No published rate at which officials decline to act on true AI alerts, even where alerts are counted (Met).
- No time series of the DSA automated-decision share; the dashboard gives only a rolling 180-day figure.
- No count of AI-drafted bills, parliaments using AI (IPU figures not retrieved), courts with AI policies, or AI-assisted rulings.
- No series of government AI spending or queries by vendor or vendor's country; none on appeals against AI-assisted decisions.
- The EU high-risk AI database is not operational (secondary report, Jul 2026).

## 6. Proposed ratings

- **Measurement level: keep 1** (one-offs or paperwork). Repeated series count tools, paper safeguards or caught failures; the only decision counts are one police tool and platforms. *Would rise to 3* if several public bodies published per-system decision counts with automation flags for two or more years.
- **What the data show: keep "?"; close call 2.** Use inside governments is clearly rising on independent repeated measures (OECD, US inventory, Dutch register, Met deployments), and oversight paperwork lags (7% of deployed high-impact US uses have an appeal route). But no repeated measure shows decisions moving to AI or review becoming a formality. *Would change* with decision counts or override rates over two or more years. Flagged for review, not changed.

## 7. Proposed site changes

**Fixes**
- `courts`: tab `2,137` → `2,184`, note → `worldwide · to 10 Oct 2026`; `read` "in about 33" → "in 32". Source: damiencharlotin.com/hallucinations.
- `inventory` `read`: add "Of 227 deployed high-impact uses, 16 report an established appeal route and 44 completed testing; the rest mostly say 'in progress' or leave it blank (filed Dec 2025, before the April 2026 deadline). The 2025 form dropped the 2024 question on whether AI decides without direct human involvement." Source: OMB 2025 and 2024 CSVs (observatory tabulation).
- `claim`, `deck` and data3.js line 11: "Nobody counts / none publishes how many decisions AI makes" → "Almost no public body counts …; London police's facial-recognition alerts are a rare exception." Thumbnail "0 DECISION COUNTS PUBLISHED" → "0 DECISION COUNTS IN THE US INVENTORY".
- signals.js `institutions`: add `close_call`: "Could be 2 (Early or mixed signs): AI use inside governments is rising on repeated measures (OECD: internal use in 70% to 86% of countries, 2023–25), but these count tools, not decisions." `change` → "Gets a rating once decision counts or override rates exist for several high-impact systems over two or more years."
- data3.js gap rows, nearest-thing text. "Decisions made by AI": "Disclosed use cases; Met facial-recognition alerts (2,077 a year); EU platforms' automation flags (43%)." "Dependence on foreign model providers": "US: Microsoft in 100 of 311 generative-AI uses naming a vendor; Canada: 38% of 409 systems vendor-built."
- `watch`: add "The 2026 US inventory (on last year's timetable, due to OMB in December): do established appeal routes rise above 16 of 227?"

**New indicator 1: `oecdgov`** (pairs chart)
- Headline: "Most OECD governments use AI internally; about a third use it in policymaking."
- How to read: share of OECD countries reporting AI use in each area, 2023 vs 2025; counts countries, not intensity.
- Data (share of countries):
  - Internal processes: 70% (23/33, 2023) → 86% (31/36, 2025)
  - Public services: 67% (22/33) → 75% (27/36)
  - Policymaking: 33% (11/33) → 36% (13/36)
  - Oversight and accountability: 33% (12/36, 2025; not asked in 2023)
- Source: OECD, *Digital Government Outlook 2026*, ch. 4 (15 Jun 2026), https://www.oecd.org/en/publications/digital-government-outlook_0496b2bc-en/full-report/adopting-and-governing-ai-in-government_7ef312a9. Tag: primary.
- Flags: self-report, two-readings, sample change (33→36; US and Germany missing in 2025).

**New indicator 2: `metlfr`** (bars)
- Headline: "London police AI face-matching went from 5 deployments in 2022 to 180 in 2024."
- How to read: deployments per calendar year; in the latest report year an officer checked each of 2,077 alerts before any stop.
- Data: deployments 2020: 4; 2021: 0; 2022: 5; 2023: 23; 2024: 180. Annotation for 11 Sep 2024–10 Sep 2025: 203 hotspot deployments, about 3,147,436 faces, 2,077 alerts (10 false), 962 arrests.
- Sources:
  - London Assembly Greens, compiled from Met records: https://www.london.gov.uk/over-half-all-facial-recognition-deployments-last-year-took-place-areas-higher-proportion-black (tag: secondary)
  - Met, LFR Annual Report 2025: https://www.met.police.uk/SysSiteAssets/media/downloads/force-content/met/advice/lfr/other-lfr-documents/live-facial-recognition-annual-report-2025.pdf (tag: primary)
- Flags: narrow, period-mix, no count of true alerts not acted on. 2025: a machine read of the deployment record found about 231 rows; recount before use.
- Alternative: add the Dutch register to the `atrs` card. Monthly totals Nov 2025 → Oct 2026: 1,225; 1,307; 1,341; 1,366; 1,398; 1,422; 1,442; 1,493; 1,523; 1,539; 1,574; 1,590 ("impactful" 578 → 716; high-risk AI 32 → 41). Source: algoritmes.overheid.nl/nl/dashboard (primary).

**Add to "missing measures"**
- Override rate for true AI alerts where alerts are already counted.
- A decision-automation field in the US inventory (restore the 2024 question).
- A DSA-style automation flag for public bodies' decisions.

**Sceptic points to add:** the first three bullets of section 4 as written; the vendor-switching point only after a primary check.
