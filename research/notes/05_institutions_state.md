# 05 — Institutions and the state

**Slice:** AI is embedded in public and corporate decision-making faster than oversight capacity grows; institutions depend less on broad human participation.

**Compiled:** 3 October 2026. All web pages were fetched on that date unless stated.

**How to read the verification labels**

- PRIMARY = I fetched the publisher's own page or PDF and saw the number there.
- SECONDARY = a reputable outlet quoting the number; I did not see the original.
- SNIPPET = seen only in a search result. (None used below.)
- DERIVED = simple arithmetic I did on PRIMARY numbers. Always marked.

**Important limit on this file.** The session's web-search budget ran out part-way through. Several candidate indicators could therefore not be looked up at all. They are listed in section (d) rather than filled with remembered numbers.

**One-line finding.** There is no series anywhere that measures *how many decisions AI makes*. What exists are counts of *disclosed tools* (registers), counts of *caught failures* (court cases, incidents), and one-off surveys of *self-reported use*. All three are driven as much by reporting rules as by real change.

---

### 1. US federal AI use-case inventory (OMB consolidated)
- sub_theme: government_use
- kind: series
- measures: The number of AI use cases that US civilian federal agencies publicly report each year, and how many they classify as affecting rights or safety.
- series or key_numbers:

| date (data as of) | value | note |
|---|---|---|
| FY2022 (GAO review, published Dec 2023) | about 1,200 current and planned use cases; about 200 in actual use | 20 of 23 agencies reported; different method (GAO count, not OMB) |
| 2023 inventory | 710 use cases | As cited by FedScoop when comparing with 2024 |
| 2024 inventory, first release (Dec 2024) | 1,757 use cases; 227 rights- or safety-impacting; 37 agencies | 206 use cases got one-year compliance extensions |
| 2024 inventory, final (as of 23 Jan 2025) | 2,133 use cases; 351 rights- and/or safety-impacting; 41 agency submissions | Later agency submissions added |
| 2025 inventory (as of 13 Apr 2026) | 3,611 individually reported use cases; 445 high-impact; 1,818 deployed or piloted; 56 agency submissions | 2 agencies reported no AI use; commercial off-the-shelf tools reported separately in bulk |
| DERIVED | +69% from 2,133 to 3,611; high-impact share 16.5% (2024) and 12.3% (2025) | My arithmetic |

  Supporting series (GAO, 11 selected agencies): total AI use cases 571 (2023) to 1,110 (2024); generative AI use cases 32 (2023) to 282 (2024).

- source:
  - OMB — 2025 Federal Agency AI Use Case Inventory — https://github.com/ombegov/2025-Federal-Agency-AI-Use-Case-Inventory — as of 13 Apr 2026
  - OMB — 2024 Federal AI Use Case Inventory — https://github.com/ombegov/2024-Federal-AI-Use-Case-Inventory — as of 23 Jan 2025
  - FedScoop — "Federal government discloses more than 1,700 AI use cases" — https://fedscoop.com/federal-government-discloses-more-than-1700-ai-use-cases/ — 18 Dec 2024
  - Nextgov/FCW — "Agencies report over 3,000 AI use cases in 2025" — https://www.nextgov.com/artificial-intelligence/2026/04/agencies-report-over-3000-ai-use-cases-2025/412898/ — Apr 2026
  - GAO — GAO-24-105980 — https://www.gao.gov/products/gao-24-105980 — Dec 2023
  - GAO — GAO-25-107653, Generative AI Use and Management at Federal Agencies — https://www.gao.gov/products/gao-25-107653 — 29 Jul 2025
  - Hunton (law firm summary of OMB M-25-21) — https://www.hunton.com/privacy-and-cybersecurity-law-blog/omb-issues-revised-policies-on-ai-use-and-procurement-by-federal-agencies
- verification: PRIMARY for 2,133 / 351 / 3,611 / 445 / 1,818 and both GAO reports. SECONDARY for 710, 1,757, 227, 206 (FedScoop).
- caveats:
  - The count grows partly because the rules changed. M-24-10 (28 Mar 2024) widened what had to be reported. M-25-21 (3 Apr 2025) replaced it and swapped "rights-/safety-impacting" for a single "high-impact" category, so 351 and 445 are not like-for-like.
  - Defense Department and intelligence community uses are excluded. National-security use cases at other agencies are exempt.
  - A "use case" is a unit of paperwork, not a unit of decisions. One chatbot and one benefits-eligibility model each count as one.
  - GAO found 15 of 20 inventories had incomplete or inaccurate data in the FY2022 round.
  - Press reports disagree on growth (Nextgov: +105% vs the 1,757 first release; FedScoop: about +70% vs the 2,133 final). Both are right; they use different baselines.
  - What the memos require: M-25-21 defines high-impact AI as AI whose output is "a principal basis for decisions or actions that have a legal, material, binding, or significant effect on rights or safety". For those, agencies must do pre-deployment testing, impact assessments, human oversight, and offer appeals, or stop using the system. Waivers are allowed. (SECONDARY, via Hunton.)
- why_it_matters_for_disempowerment: It is the only official yearly count of AI inside a major government, and the high-impact line is the closest thing to "AI in decisions about people".

---

### 2. UK Algorithmic Transparency Recording Standard (ATRS) records vs independent register
- sub_theme: oversight
- kind: series
- measures: How many algorithmic tools UK public bodies have officially disclosed, compared with how many an NGO found on its own.
- series or key_numbers:

| date | official ATRS records | Public Law Project TAG register | note |
|---|---|---|---|
| Feb 2023 | — | 41 tools | TAG launch |
| Oct 2023 | 6 | 55 tools | PLP's own comparison |
| Jan 2025 | 23 | "over 50" | PLP written evidence to Parliament |
| 8 May 2025 | 59 | — | GDS blog; 53 added in previous 12 months |
| 14 Jul 2025 | "over 70" | — | Ministerial written answer |
| 3 Oct 2026 | 152 | — | GOV.UK record finder; newest record dated 9 Sep 2026 |

- source:
  - GOV.UK — Algorithmic transparency records (finder) — https://www.gov.uk/algorithmic-transparency-records — live
  - Government Digital Service blog — "Making the ATRS mandatory across government" — https://dataingovernment.blog.gov.uk/2025/05/08/making-the-algorithmic-transparency-recording-standard-atrs-mandatory-across-government/ — 8 May 2025
  - UK Parliament — Written question 65074 — https://questions-statements.parliament.uk/written-questions/detail/2025-07-04/65074/ — answered 14 Jul 2025
  - Public Law Project — written evidence UAIG0024 — https://committees.parliament.uk/writtenevidence/134545/pdf/ — Jan 2025
  - Public Law Project — TAG register page — https://publiclawproject.org.uk/resources/the-tracking-automated-government-register/ — Oct 2023
- verification: PRIMARY (all rows).
- caveats:
  - Growth after 2024 mostly reflects the standard becoming mandatory for central government, not new tools being built.
  - Scope is narrow: tools with "significant influence on a decision-making process with public effect" or that interact directly with the public. Exemptions exist.
  - I could not get a current TAG count (the live register is an interactive app). The latest NGO figure is Jan 2025.
  - A record says a tool exists. It does not say how many decisions it touches.
- why_it_matters_for_disempowerment: The gap between what an NGO found and what the state disclosed is a direct, countable measure of oversight lagging deployment.

---

### 3. Netherlands national Algorithm Register
- sub_theme: government_use
- kind: series
- measures: The number of algorithm descriptions Dutch public bodies have published in the national register, by month.
- series or key_numbers:

| month | published descriptions | publishing organisations | connected organisations |
|---|---|---|---|
| Dec 2022 | register launched | — | — |
| 16 Jul 2025 | 1,000th algorithm published | — | — |
| Nov 2025 | 1,224 | 287 | 490 |
| Dec 2025 | 1,306 | 299 | 492 |
| Jan 2026 | 1,340 | 305 | 496 |
| Feb 2026 | 1,365 | 310 | 503 |
| Mar 2026 | 1,397 | 315 | 506 |
| Apr 2026 | 1,421 | 318 | 508 |
| May 2026 | 1,441 | 320 | 514 |
| Jun 2026 | 1,492 | 333 | 517 |
| Jul 2026 | 1,522 | 336 | 521 |
| Aug 2026 | 1,538 | 337 | 521 |
| Sep 2026 | 1,573 | 340 | 529 |
| Oct 2026 (3 Oct) | 1,574 | 354 | 530 |

- source:
  - Dutch government — Algoritmeregister dashboard — https://algoritmes.overheid.nl/nl/dashboard — live
  - NL Digital Government — "1000th algorithm published in Algorithm Register" — https://www.nldigitalgovernment.nl/news/1000th-algorithm-published-in-algorithm-register/ — 16 Jul 2025
- verification: PRIMARY.
- caveats:
  - Monthly figures were read from the dashboard by an automated page reader. Re-check against the dashboard before charting.
  - The dashboard only shows the latest 12 months. Counts for 2023 and 2024 were not retrieved (the progress report to parliament was blocked by robots.txt; the Dutch data protection authority's critique returned an error).
  - Registration is not yet a legal duty for all bodies. 530 organisations are connected but only 354 have published anything.
  - Includes simple rule-based systems, not just AI.
- why_it_matters_for_disempowerment: It is the cleanest monthly public series of government algorithm disclosure anywhere, and it comes from the country whose childcare-benefits scandal triggered it.

---

### 4. Singapore public service: Pair and AIBots uptake
- sub_theme: government_use
- kind: series (patchy; mixed definitions)
- measures: How many Singapore public officers use the government's in-house chatbot (Pair) and how many custom bots they have built (AIBots).
- series or key_numbers:

| date | value | note |
|---|---|---|
| 2023 (first two months after launch) | over 11,000 Pair users across 100+ agencies | GovTech product page, undated |
| Aug–Sep 2024 | AIBots: 13,000 users; 4,000 bots; 95 agencies | GovTech intro deck |
| undated (about late 2024) | Pair: 55,000 users; 148 agencies; about 50% active | GovTech CTO quoted by GovInsider; article date not confirmed |
| Feb 2025 | AIBots: 40,000 users; 12,000 bots created; 115 agencies; over 1 million messages since Aug 2024 | GovTech product page |
| to Oct 2025 | AIBots: 40.3k users; 23.3k active bots; 118 agencies; 2.3m messages | GovTech intro deck |
| 5–6 Nov 2025 | "About 80% of our 150,000 officers have used Pair Chat"; "over 20,000" bots created | Minister's written reply to a parliamentary question |
| Jun 2026 | "over half" of 150,000 officers regularly use Pair; GovTech piloting a register of AI agents inside its AI Assistant Desk | Trade press report |

- source:
  - MDDI — "Response to PQ on Progress of Adopting AI Tools within Public Service" — https://www.mddi.gov.sg/newsroom/mddi-s-response-to-pq-on-progress-of-adopting-ai-tools-within-public-service/ — 6 Nov 2025
  - GovTech — AIBots product page — https://www.tech.gov.sg/products-and-services/for-government-agencies/productivity-and-marketing/aibots/
  - GovTech — Pair product page — https://www.tech.gov.sg/products-and-services/for-government-agencies/productivity-and-marketing/pair/
  - GovTech — AIBots intro deck — https://file.go.gov.sg/aibots-intro-20250515.pdf
  - GovInsider — https://govinsider.asia/intl-en/article/governments-role-important-to-ensure-use-of-ai-for-public-good-says-govtech-cto
  - Startup Fortune — "Singapore is putting AI agents on a government register" — https://startupfortune.com/singapore-is-putting-ai-agents-on-a-government-register/ — 5 Jun 2026
- verification: PRIMARY for MDDI and GovTech pages. SECONDARY for GovInsider and the June 2026 item.
- caveats:
  - "Have used" (80%), "users" (55,000), "active" and "regularly use" are four different things. Do not draw one line through them.
  - The deck's filename says May 2025 but its statistics run to Oct 2025. Treat its date as uncertain.
  - "Bots created" (20,000+) and "active bots" (23.3k) are reported close in time with different labels.
  - Pair runs on foreign commercial models inside a government wrapper. Uptake is therefore also a measure of dependence on foreign providers, but no official breakdown by model vendor was found.
  - The June 2026 agent register is a pilot reported by one trade outlet. Look for a GovTech primary source before citing.
- why_it_matters_for_disempowerment: A small state reporting that four in five officials have used a chatbot shows how fast AI can become the default layer of routine government work.

---

### 5. Civil servants' use of generative AI (UK surveys and trial)
- sub_theme: government_use
- kind: one-off survey
- measures: The share of UK public-sector workers who say they use generative AI, and what a large government trial found.
- series or key_numbers:

| date of data | value | note |
|---|---|---|
| Late 2023 (paper posted 2 Jan 2024) | 22% of 938 UK public-service professionals actively use generative AI; 45% aware of use in their area; 32% say there is clear guidance; 61% trust outputs | Bright, Enock, Esnaashari et al. (Alan Turing Institute) |
| 30 Sep – 31 Dec 2024 | 20,000 civil servants in 12 departments; 26 minutes saved per day (self-reported); peak adoption 83%; 82% would not want to go back | UK cross-government Microsoft 365 Copilot experiment |

- source:
  - Bright et al. — "Generative AI is already widespread in the public sector" — https://arxiv.org/abs/2401.01291 — Jan 2024
  - Government Digital Service — M365 Copilot Experiment: Cross-Government Findings Report — https://assets.publishing.service.gov.uk/media/683db42bd23a62e5d32680d0/M365_Copilot_Experiment_Findings_Report.pdf — Jun 2025
- verification: PRIMARY (both).
- caveats:
  - Two different populations and questions. Not a trend.
  - Bright et al. covers education, health, social work and emergency services, not core civil servants.
  - Copilot time savings are self-reported; 7,115 survey responses out of 20,000 participants.
  - The fetch tool reported the arXiv posting date as the "survey date". The fieldwork was earlier; check the paper for exact dates.
- why_it_matters_for_disempowerment: Use spread ahead of guidance (22% using, 32% with clear rules), which is the adoption-outruns-oversight pattern at individual level.

---

### 6. Canada Algorithmic Impact Assessments and the EU high-risk AI database
- sub_theme: oversight
- kind: series (single points so far)
- measures: How many formal impact assessments or registrations exist under the two best-known legal regimes for government and high-risk AI.
- series or key_numbers:

| date | value | note |
|---|---|---|
| 3 Oct 2026 | 43 records returned for "Algorithmic impact assessment" on Canada's Open Government Portal | Search-result count, not an official tally |
| 27 Jul 2026 | EU high-risk AI database: "not yet open and operational"; expected launch slipped from end-June 2026 to Q3 2027 | Commission service desk, as reported |
| 6 May 2026 (political agreement) | EU AI Act Annex III high-risk obligations moved from 2 Aug 2026 to 2 Dec 2027; Annex I from 2 Aug 2027 to 2 Aug 2028 | Digital Omnibus |

- source:
  - Government of Canada — Open Government Portal search — https://search.open.canada.ca/opendata/?search_text=Algorithmic+impact+assessment — live
  - Resultsense (citing Euractiv) — "EU high-risk AI register slips to 2027" — https://www.resultsense.com/news/2026-07-27-eu-high-risk-ai-database-delay/ — 27 Jul 2026
  - Gibson Dunn — "EU AI Act Omnibus Agreement" — https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/ — May 2026
- verification: PRIMARY for the Canada count. SECONDARY for both EU items.
- caveats:
  - The Canada figure is a keyword search. Some hits may be guidance documents, and some assessments may be filed under other titles.
  - The EU database has zero public entries because it does not exist yet. That is itself the data point.
  - I did not confirm that the Omnibus was formally published in the Official Journal.
- why_it_matters_for_disempowerment: The world's main binding rule on high-risk AI was postponed by 16 months while deployment continued, so the oversight line moved backwards.

---

### 7. AI-drafted law: Porto Alegre (2023) and the UAE Regulatory Intelligence Office (2025)
- sub_theme: legislature
- kind: case
- measures: Documented cases where a language model wrote legislation or was given a standing role in drafting it.
- series or key_numbers:

| date | value | note |
|---|---|---|
| Oct 2023 (passed); 23 Nov 2023 (enacted); 29 Nov 2023 (revealed) | Porto Alegre, Brazil: ordinance on stolen water meters drafted by ChatGPT from a 49-word prompt; passed unanimously by the 36-member council | Councillor did not tell colleagues beforehand |
| 14 Apr 2025 | UAE Cabinet approves a Regulatory Intelligence Office to run an "AI-driven legislative system"; government claims it will speed up lawmaking "by up to 70 percent" | Covers research, drafting, evaluation and enactment |

- source:
  - Associated Press via KSAT — https://www.ksat.com/tech/2023/11/30/brazilian-city-enacts-an-ordinance-secretly-written-by-a-surprising-new-staffer-chatgpt/ — 30 Nov 2023
  - UAE Cabinet — https://uaecabinet.ae/en/news/uae-cabinet-chaired-by-mohammed-bin-rashid-approves-launch-of-first-integrated-regulatory-intelligence-ecosystem-in-uae-government — 14 Apr 2025
- verification: SECONDARY (AP wire) for Porto Alegre. PRIMARY for UAE.
- caveats:
  - Anecdotes, not a series. Nobody counts AI-drafted bills.
  - The 70% figure is a government target, not a measured result. No outcome data found.
  - The UAE has no elected legislature with full lawmaking power, so the case says less about democratic legislatures.
- why_it_matters_for_disempowerment: These are the first clear instances of the paper's "AI's role in law and policymaking" metric moving from zero.

---

### 8. "I rise to speak": chatbot fingerprints in UK Hansard
- sub_theme: legislature
- kind: series (two points; a proxy)
- measures: How often a phrase typical of ChatGPT-written speeches appears in UK parliamentary debate.
- series or key_numbers:

| period | value | note |
|---|---|---|
| 2024 (full year) | 231 uses of "I rise to speak" | |
| 2025 (year to about late Aug/early Sep) | 635 uses | Part-year |
| 2025 | Z-score of 3.60 for the phrase against 2007–2025 history, adjusted for words spoken | Pimlico Journal |

- source:
  - The Telegraph via Yahoo News — "ChatGPT triggers surge in MPs using AI-written speeches" — https://www.yahoo.com/news/articles/chatgpt-triggers-surge-mps-using-132959577.html — about early Sep 2025
  - Pimlico Journal — "MPs are almost certainly using ChatGPT to generate Commons speeches" — https://www.pimlicojournal.co.uk/p/mps-are-almost-certainly-using-chatgpt — 1 Sep 2025
- verification: SECONDARY for 231/635. PRIMARY for the Z-score (Pimlico's own page).
- caveats:
  - A phrase count is a proxy. The July 2024 election brought in hundreds of new MPs, which alone changes speaking style.
  - Pimlico Journal is an anonymous blog, not a research body. The counts are reproducible from Hansard, which is its strength.
  - No update for full-year 2025 or 2026 was retrieved.
  - The task brief attributed this to Politico/Guardian; what I verified was PoliticsHome (original chart), Pimlico Journal (analysis) and the Telegraph (counts).
- why_it_matters_for_disempowerment: It is a cheap, repeatable measure of representatives outsourcing their own voice, built from public records.

---

### 9. AI on both sides of public consultation: fake comments and the UK "Consult" tool
- sub_theme: legislature
- kind: case
- measures: How much of public input to rulemaking has been machine-generated, and how government now uses AI to read what the public sends in.
- series or key_numbers:

| date | value | note |
|---|---|---|
| 2017 (report 6 May 2021) | "nearly 18 million of the more than 22 million" comments in the FCC net-neutrality proceeding were fake | 8.5m+ from a broadband-industry-funded campaign; 9.3m from one 19-year-old using automated software. Pre-LLM baseline |
| May 2025 | UK "Consult" tool first used on a live consultation (Scottish Government, non-surgical cosmetic procedures): 2,000 responses; F1 score 0.76 | UK runs about 500 consultations a year, about 75,000 staff-days of analysis |
| Oct 2025 | Consult used on the Independent Water Commission review: 50,000+ responses in about 2 hours for £240, plus 22 hours of human checking; agreed with human analysts 83% of the time, versus 55% agreement between two human teams | Projected saving £20 million a year |

- source:
  - New York Attorney General — report on fake comments — https://ag.ny.gov/press-release/2021/attorney-general-james-issues-report-detailing-millions-fake-comments-revealing — 6 May 2021
  - PublicTechnology — https://www.publictechnology.net/2025/05/20/science-technology-and-research/ai-tool-for-collating-consultation-responses-shows-well-in-first-major-test/ — 20 May 2025
  - Think Digital Partners — https://www.thinkdigitalpartners.com/news/2025/10/16/government-built-ai-consult-saves-thousands-of-staff-days/ — 16 Oct 2025
- verification: PRIMARY for the FCC figures. SECONDARY for Consult.
- caveats:
  - No 2024–26 measurement of the share of AI-generated public comments was found. This is a gap, not a zero.
  - The 2017 fakes were template and script based, not language-model text. LLM text is far harder to detect.
  - The £20m and 75,000-day figures are projections.
  - The 83% vs 55% comparison comes from government's own evaluation as relayed by trade press.
- why_it_matters_for_disempowerment: When machines write the public's input and machines summarise it, the consultation loop can close with little human reading on either side.

---

### 10. AI given formal office: Albania's "Diella" and Abu Dhabi's "AI-native government"
- sub_theme: government_use
- kind: case
- measures: Cases where a government formally assigned a ministerial role or a whole-of-government target to AI.
- series or key_numbers:

| date | value | note |
|---|---|---|
| 19 Jan 2025 | Diella 1.0 launched as a text chatbot on the e-Albania portal | |
| 11–12 Sep 2025 | Diella named "Minister of State for Artificial Intelligence", with the stated aim that public tenders be "100 percent free of corruption" | Presidential decree gives the Prime Minister responsibility for creating and running the virtual minister |
| 18 Sep 2025 | Diella "addresses" parliament; session ends after 25 minutes; 82 Socialist MPs approve the government; opposition protests | |
| 2025–26 | The agency that built Diella (AKSHI) is under investigation for rigged tenders; director and deputy director charged; asset seizures exceed €40 million; opposition files a constitutional complaint | |
| May 2026 | OECD AI Incidents Monitor logs the Diella case as an AI incident | |
| Aug 2026 | Reporting states Diella does not make final decisions: officials do | OCCRP |
| 21 Jan 2025 | Abu Dhabi announces a goal to be "the world's first fully AI-native government across all digital services by 2027": AED 13 billion, 100% process automation, 100% sovereign cloud, 200+ AI solutions | Target, not result |

- source:
  - Wikipedia — "Diella (AI system)" (cites Reuters, Guardian, Politico Europe) — https://en.wikipedia.org/wiki/Diella_(AI_system)
  - OCCRP — "Albania's Cheerful 'AI Minister' Is the Product of a Government Agency Under Investigation for Massive Corruption" — https://www.occrp.org/en/feature/albanias-cheerful-ai-minister-is-the-product-of-a-government-agency-under-investigation-for-massive-corruption — reported as 11 Aug 2026
  - OECD.AI Incidents Monitor — https://oecd.ai/en/incidents/2026-05-26-d84d — May 2026
  - Akin Gump — https://www.akingump.com/en/insights/ai-law-and-regulation-tracker/abu-dhabi-aims-to-be-worlds-first-fully-ai-native-government-across-all-digital-services-by-2027 — Jan 2025
- verification: SECONDARY (all). No Albanian government primary document was fetched.
- caveats:
  - Diella is best read as symbolic delegation. Legal responsibility sits with the Prime Minister, and reporting says humans decide.
  - I found no evidence that Diella has decided any tender. I also found no outcome of the constitutional complaint.
  - The OCCRP publication date was read by an automated tool; confirm before citing.
  - Abu Dhabi figures are announced targets. No audit of progress was found.
- why_it_matters_for_disempowerment: It shows that formal delegation can run ahead of both real capability and accountability, and that "who answers for the AI's decision" has no settled legal answer.

---

### 11. Court decisions involving AI-fabricated material (Charlotin database)
- sub_theme: courts
- kind: series
- measures: The running global total of court and tribunal decisions that found a party (or judge) relied on AI-invented citations or content.
- series or key_numbers:

| date | cumulative cases | note |
|---|---|---|
| Q2 2023 | first case | Start of database |
| 29 Dec 2025 | 712 | About 90% dated 2025; growth "five or six a day" in Dec 2025 vs 2–3 a day in Sep 2025 (Bloomberg Law) |
| 22 May 2026 | "more than 1,400" | Scientific American, as listed on Charlotin's media page |
| 5 Sep 2026 | 2,022 | Over 1,300 in US courts |
| 3 Oct 2026 | 2,125 | Database page itself. USA 1,459; Canada 223; Australia 112. By party: self-represented litigants 1,227; lawyers 840; judges 33; experts 15; prosecutors 5 |

- source:
  - Damien Charlotin — AI Hallucination Cases Database — https://www.damiencharlotin.com/hallucinations/ — live
  - Bloomberg Law — "AI-Faked Cases Become Core Issue Irritating Overworked Judges" — https://news.bloomberglaw.com/legal-ops-and-tech/ai-faked-cases-become-core-issue-irritating-overworked-judges — 29 Dec 2025
  - Charlotin — media page — https://www.damiencharlotin.com/media/
  - Daily Caller — https://dailycaller.com/2026/09/08/ai-faked-citations-court-decisions-database-damien-charlotin/ — 8 Sep 2026
- verification: PRIMARY for 2,125 and the breakdowns. SECONDARY for 712, 1,400 and 2,022.
- caveats:
  - This counts cases that were *caught and written up*. It rises with judges' vigilance as well as with misuse.
  - These are not all sanctions. One report says fewer than 160 led to disciplinary action (SECONDARY, Daily Caller).
  - Most cases involve people without lawyers, so it measures access-to-justice behaviour more than professional delegation.
  - Charlotin is quoted in Sep 2026 saying the rise has reached "a plateau". The totals above still imply roughly 5 a day between Dec 2025 and Sep 2026 (DERIVED). Treat the trend claim with care.
  - A monthly series exists inside the database but was not retrievable by page reader. The author offers the data; request it for a proper chart.
  - 33 cases involve judges. That small number is the one most relevant to this slice.
- why_it_matters_for_disempowerment: It is the only daily-updated global count of AI output entering a core state institution unchecked.

---

### 12. Judges' own use of AI
- sub_theme: courts
- kind: one-off survey
- measures: The share of judges and court staff who say they use AI tools in their work.
- series or key_numbers:

| date of data | value | note |
|---|---|---|
| Survey published 19 Jun 2024 | 44% of judicial operators in 96 countries had used AI tools (such as ChatGPT) for work; 9% had received institutional guidance or training; 93% familiar with AI | UNESCO |
| 1–19 Dec 2025 | 61.6% of responding US federal judges use at least one AI tool in judicial work; daily 5.4%, weekly 17%, never 38.4%; 45.5% had no AI training from court administration | 112 responses from 502 sampled (22.3%) |

- source:
  - UNESCO — "UNESCO Survey Uncovers Critical Gaps in AI Training Among Judicial Operators" — https://www.unesco.org/en/articles/unesco-survey-uncovers-critical-gaps-ai-training-among-judicial-operators-0 — 19 Jun 2024
  - Northwestern University — "Federal judges report broad adoption of AI tools" — https://news.northwestern.edu/stories/2026/03/northwestern-study-finds-a-significant-number-of-federal-judges-are-already-using-ai-tools — Mar 2026 (study published by The Sedona Conference, 30 Mar 2026)
  - LawSites — https://www.lawnext.com/2026/03/survey-finds-majority-of-federal-judges-have-used-ai-in-their-work-but-daily-use-remains-rare.html — Mar 2026
- verification: PRIMARY for UNESCO's article and Northwestern's release. SECONDARY for the detailed frequency split (LawSites).
- caveats:
  - Different populations: UNESCO covers judges, prosecutors, lawyers and court staff worldwide and is a self-selected sample; its sample size was not on the page fetched.
  - The US survey has 112 respondents. Margins are wide and users may be more likely to answer.
  - Most reported use is legal research (Westlaw AI 38.4%, ChatGPT 28.6%), not drafting rulings.
  - 44% to 61.6% is not a trend.
- why_it_matters_for_disempowerment: Judges are the last-resort human check on automated state decisions, so their own reliance on AI matters twice over.

---

### 13. Precedents for "delegation without oversight" in welfare systems
- sub_theme: oversight
- kind: case
- measures: The human cost of three automated benefit-fraud systems that ran without effective human review.
- series or key_numbers:

| system and years | people affected | outcome |
|---|---|---|
| Robodebt, Australia, Jul 2016 – May 2020 | about 470,000 wrongly issued debts; about 400,000 people in the class action | Settlement approved Jun 2021 at A$1.872 billion (incl. A$751m repaid); Royal Commission report 7 Jul 2023 |
| Childcare benefits scandal, Netherlands, 2005–2019 | about 26,000 parents wrongly accused of fraud | Cabinet resigned 15 Jan 2021; flat €30,000 compensation announced 22 Dec 2020; data protection authority found the methods "unlawful, discriminatory and improper" (Jul 2020) |
| MiDAS, Michigan, Oct 2013 – 2015 | about 40,000 people wrongly accused of unemployment fraud (one source says "over 34,000") | US$20 million settlement approved Jan 2024; about 3,000 class members paid |

- source:
  - Wikipedia — "Robodebt scheme" — https://en.wikipedia.org/wiki/Robodebt_scheme
  - Wikipedia — "Dutch childcare benefits scandal" — https://en.wikipedia.org/wiki/Dutch_childcare_benefits_scandal
  - Michigan Advance — https://michiganadvance.com/2024/01/31/thousands-of-michiganders-falsely-accused-of-unemployment-fraud-get-20m-settlement/ — 31 Jan 2024
  - AI Incident Database — Incident 373 — https://incidentdatabase.ai/cite/373/
- verification: SECONDARY (all). Royal Commission and parliamentary reports were not fetched.
- caveats:
  - None of these was "AI" in today's sense. Robodebt was income averaging; MiDAS was rule-based; the Dutch case combined a risk model with harsh policy. They are precedents for automation without review.
  - MiDAS error rate is disputed across sources: the AI Incident Database says 85%; a 93% figure is widely quoted but I could not verify it. Do not publish either without the Michigan Auditor General's report.
  - The Wikipedia page fetched did not describe the Dutch risk-classification model. Amnesty's "Xenophobic Machines" report is the source to check for that.
  - Replace Wikipedia with the official inquiry reports before publication.
- why_it_matters_for_disempowerment: Each shows the full chain in miniature: delegation, no working appeal, harm to tens or hundreds of thousands, and correction only after years.

---

### 14. Military autonomy: Replicator, its successor, and AI-assisted targeting
- sub_theme: military
- kind: case
- measures: How far the US has moved toward mass autonomous systems, and what is reported about AI decision support in targeting.
- series or key_numbers:

| date | value | note |
|---|---|---|
| Aug 2023 | Replicator goal: field "multiple thousands" of autonomous systems within 18–24 months (by Aug 2025) | |
| Aug–Sep 2025 | "Hundreds" delivered, per current and former officials; Pentagon declined to give numbers | Goal not met |
| FY2026 vs FY2027 request | Defense Autonomous Warfare Group: US$225.9 million to US$54.6 billion requested; US$75 billion total requested for drones and counter-drone | Bloomberg figures relayed by a trade site |
| Reported 3 Apr 2024 | "Lavender" system marked about 37,000 Palestinians as suspected militants; human check of about 20 seconds per target; system treated as about 90% accurate | Six Israeli intelligence officers, anonymous. The Israeli military denies it uses AI to identify targets this way and says analysts verify independently |

- source:
  - DefenseScoop — "DOD touts 'successful transition' for Replicator initiative — but questions linger" — https://defensescoop.com/2025/09/03/dod-replicator-drone-tech-transition-fielding-questions-linger/ — 3 Sep 2025
  - DroneXL (citing Bloomberg) — https://dronexl.co/2026/04/21/pentagon-fy27-75-billion-drone-budget-dawg-largest-boost/ — 21 Apr 2026
  - +972 Magazine / Local Call — "'Lavender': The AI machine directing Israel's bombing spree in Gaza" — https://www.972mag.com/lavender-ai-israeli-army-gaza/ — 3 Apr 2024
- verification: SECONDARY for Replicator and budget figures. PRIMARY for the +972 article as the original publisher of the reporting (the claims themselves rest on anonymous sources).
- caveats:
  - The US$54.6 billion figure is a budget *request*, relayed second-hand. Verify against the Bloomberg original or budget documents before use. It may bundle programmes moved from elsewhere.
  - Lavender figures are contested by the Israeli military and cannot be independently checked.
  - The Congressional Research Service brief on Replicator was blocked by robots.txt.
  - No public series exists for the share of targeting decisions that are AI-assisted.
- why_it_matters_for_disempowerment: The "state needs citizens as soldiers" link weakens as autonomous systems scale, and a 20-second review is the clearest reported example of nominal human control.

---

### 15. Algorithmic management in firms (OECD employer survey)
- sub_theme: corporate_decisions
- kind: one-off survey
- measures: The share of firms that use software to instruct, monitor or evaluate workers.
- series or key_numbers:

| date | value | note |
|---|---|---|
| Published 6 Feb 2025 | 90% of US firms use algorithmic management tools; 79% average in the European countries surveyed | Over 6,000 firms in France, Germany, Italy, Japan, Spain, United States |
| same | Monitoring of worker communications: 55% of US firms, 6% Europe, 8% Japan | |
| same | 28% of managers report unclear accountability for algorithmic decisions; 27% cannot easily follow the tool's logic | |

- source:
  - OECD — "Algorithmic management in the workplace: New evidence from an OECD employer survey" — https://econpapers.repec.org/paper/oeccomaaa/31-en.htm — 6 Feb 2025
  - TUAC (trade union advisory committee to the OECD) — https://tuac.org/news/new-oecd-report-on-algorithmic-management-reveals-urgent-need-for-worker-protections/ — Feb 2025
  - OECD — "How widespread is algorithmic management in workplaces?" (follow-up brief, Dec 2025) — https://www.oecd.org/en/publications/how-widespread-is-algorithmic-management-in-workplaces_cda7a114-en/full-report.html
- verification: SECONDARY for the percentages (TUAC quoting OECD). PRIMARY only for the sample and country list. The OECD PDF was blocked by robots.txt.
- caveats:
  - The definition is very broad. It includes scheduling and time-tracking software, so 90% does not mean 90% of firms let AI manage people.
  - Japan's overall figure was not retrieved.
  - One wave only. No trend.
  - TUAC is an interested party; pull the figures from the OECD paper itself before publishing.
- why_it_matters_for_disempowerment: It shows that software-mediated authority over workers is already the norm, and that over a quarter of managers cannot say who is accountable for it.

---

### 16. AI in HR and hiring (SHRM)
- sub_theme: corporate_decisions
- kind: series (with a break in method)
- measures: The share of organisations whose HR function uses AI.
- series or key_numbers:

| date of survey | value | note |
|---|---|---|
| 2024 | 26% of HR professionals report their organisation uses AI for HR tasks | SHRM Talent Trends |
| 3–12 Feb 2025 | 43% | SHRM 2025 Talent Trends; n = 2,040; unweighted |
| Published 8 Apr 2026 | 39% of organisations use AI in HR; 27% apply AI in talent acquisition; 60% among organisations with 5,000+ employees | SHRM State of AI in HR 2026; n = 1,908; different survey |

- source:
  - SHRM — 2025 Talent Trends — https://www.shrm.org/topics-tools/research/2025-talent-trends — 2025
  - SHRM — "AI in HR 2026: From Hype to Measured, Human-Centered Impact" — https://www.shrm.org/topics-tools/news/ai-hr-2026-from-hype-to-measured-human-centered-impact — 8 Apr 2026
- verification: PRIMARY.
- caveats:
  - The 2026 number comes from a different SHRM study with different wording. The apparent fall from 43% to 39% is not a real decline.
  - Self-reported by HR staff; unweighted panel; US only.
  - "Uses AI in HR" is not "AI screens out candidates". No source measures the share of applications rejected without a human reading them.
  - ResumeBuilder-type polls were deliberately excluded as low quality.
- why_it_matters_for_disempowerment: Hiring is where most people first meet an institution that decides about them, and the best available series cannot say how often a human is in that decision.

---

### 17. The "state needs workers" indicator: share of US federal revenue from wages and individual income
- sub_theme: state_dependence
- kind: series
- measures: How much of US federal revenue comes from taxes on individuals' income and payrolls, as opposed to corporations, tariffs or other sources.
- series or key_numbers:

| fiscal year | individual income taxes ($bn) | payroll taxes ($bn) | corporate ($bn) | customs ($bn) | other ($bn) | total ($bn) | individual + payroll share (DERIVED) |
|---|---|---|---|---|---|---|---|
| FY2023 | 2,176 | 1,614 | 420 | 80 | 150 | 4,441 | 85.3% |
| FY2024 | 2,426 | 1,709 | 530 | 77 | 176 | 4,918 | 84.1% |
| FY2025 | 2,656 | 1,748 | 452 | 195 | 183 | 5,235 | 84.1% |

  Long-run context (Tax Policy Center, data for 2022): individual income tax 54%, payroll taxes 30%, corporate income tax 9% of federal revenue. Individual income tax "has provided nearly half of total federal revenue since 1950"; payroll taxes were "under 15 percent in the 1950s"; corporate tax fell from "about one-third" in the early 1950s to under 10% in most years since the early 1980s.

- source:
  - Congressional Budget Office — Monthly Budget Review: Summary for Fiscal Year 2025 — https://www.cbo.gov/system/files/2025-11/61307-MBR-FY25-final.pdf — Nov 2025
  - Tax Policy Center — "What are the sources of revenue for the federal government?" — https://taxpolicycenter.org/briefing-book/what-are-sources-revenue-federal-government
- verification: PRIMARY for dollar figures. DERIVED for shares (my arithmetic). PRIMARY for Tax Policy Center quotes.
- caveats:
  - The share has been high and stable. It is a baseline to watch, not evidence of change. FY2026 figures should be out from CBO in Oct–Nov 2026 and were not retrieved.
  - The one visible shift in FY2025 is customs duties rising from 1.6% to 3.7% of receipts (DERIVED), which is tariff policy, not AI.
  - Individual income tax includes tax on capital gains and business income, so the indicator overstates dependence on *labour* income. A cleaner measure would split wage from capital income.
  - No one publishes an "AI share of the tax base".
  - The OMB long-run table (Historical Table 2.2) could not be read by the fetch tool.
- why_it_matters_for_disempowerment: This is the paper's core mechanism made countable: while about 84% of federal revenue comes from people's incomes and payrolls, the state still has a fiscal reason to care about them.

---

### 18. Who owns the compute: private vs public, and by country
- sub_theme: state_dependence
- kind: series
- measures: The share of the world's known AI supercomputer capacity owned by companies rather than governments or universities, and its split by country.
- series or key_numbers:

| date | value | note |
|---|---|---|
| 2019 | Industry holds 40% of AI compute in the dataset | |
| 2025 | Industry holds 80%; public sector "below 20%" | |
| Mar–May 2025 | United States about 75% of global AI supercomputer performance; China about 15% | |
| 2024 | Notable AI models produced: US 40, China 15, Europe 3 | Stanford AI Index 2025 |
| 31 Jul 2025 | UK cloud market: AWS 30–40%, Microsoft 30–40%; fewer than 1% of customers switch provider each year | UK competition authority final decision |
| 2024 | OpenAI alone spent about US$7 billion on compute (about US$5bn on R&D) | Epoch estimate |

- source:
  - Epoch AI — "Trends in AI supercomputers" — https://epoch.ai/blog/trends-in-ai-supercomputers — 23 Apr 2025
  - Epoch AI — "The US hosts the majority of GPU cluster performance, followed by China" — https://epoch.ai/data-insights/ai-supercomputers-performance-share-by-country — 5 Jun 2025
  - Stanford HAI — "AI Index 2025: State of AI in 10 Charts" — https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts — Apr 2025
  - DatacenterDynamics — CMA cloud decision — https://www.datacenterdynamics.com/en/news/competition-is-not-working-well-says-uk-cma-concluding-cloud-market-investigation/ — Jul 2025
  - Epoch AI — OpenAI compute spend — https://epoch.ai/data-insights/openai-compute-spend — 10 Oct 2025
- verification: PRIMARY for Epoch and Stanford. SECONDARY for the CMA shares.
- caveats:
  - Epoch says its dataset covers only "an estimated 10–20%" of global AI supercomputer performance. Shares are of what is publicly known.
  - Chinese capacity is likely under-recorded.
  - CMA shares are for the whole UK market, not for government. I found no verified figure for the share of *government* cloud spend going to each vendor.
  - No 2026 update of the Epoch ownership split was retrieved.
- why_it_matters_for_disempowerment: States, and small states most of all, are becoming customers of a handful of foreign firms for the capability they govern with.

---

### 19. Small-state readiness: Oxford Insights Government AI Readiness Index
- sub_theme: state_dependence
- kind: series (annual index; method changed in 2025)
- measures: A composite score of how ready each government is to use AI in public services.
- series or key_numbers:

| edition | value | note |
|---|---|---|
| 2024 | 188 countries. 1 United States 87.03; 2 Singapore 84.25; 3 South Korea 79.98; 4 France 79.36; 5 United Kingdom 78.88. Global average 47.59 | Singapore first on the Government pillar (90.96) and Data & Infrastructure pillar (93.14) |
| 2025 (released about Jan 2026) | 195 governments. United States 1st; China 8th, up from 23rd in 2024 | Singapore's 2025 rank and score not retrieved |

- source:
  - Oxford Insights — Government AI Readiness Index 2024 — https://oxfordinsights.com/wp-content/uploads/2024/12/2024-Government-AI-Readiness-Index-2.pdf — Dec 2024
  - Oxford Insights — Government AI Readiness Index 2025 — https://oxfordinsights.com/ai-readiness/government-ai-readiness-index-2025/
- verification: PRIMARY.
- caveats:
  - "Readiness" measures capacity to adopt, not dependence or oversight. A high score can go together with heavy reliance on foreign models.
  - The 2025 edition changed its core question and structure, so 2024 and 2025 scores are not comparable.
  - The full 2025 data sit behind a registration form.
  - Tortoise's Global AI Index was not retrieved.
- why_it_matters_for_disempowerment: It shows the gap in the evidence: small states are ranked on how fast they can adopt, and nobody ranks how much control they keep.

---

### 20. Oversight capacity: safety-institute resources and recorded AI incidents
- sub_theme: oversight
- kind: series (incidents) plus key numbers (budgets)
- measures: How much public money and staff go to checking frontier AI, and how many AI harms are logged each year.
- series or key_numbers:

| date | value | note |
|---|---|---|
| 2023 | about 149 incidents (DERIVED from "233, a 56.4% increase over 2023") | AI Incident Database, via Stanford |
| 2024 | 233 incidents | Stanford AI Index 2025 |
| 2025 | 362 incidents ("a record") | Stanford AI Index 2026 |
| Jul 2026 | UK AI Security Institute: £66 million a year; "100+ technical staff"; has evaluated "more than 30 frontier models"; got "less than a week" to test one frontier model | Ada Lovelace Institute |
| 2024 | For scale: one lab (OpenAI) spent about US$7 billion on compute | Epoch estimate |

- source:
  - Stanford HAI — AI Index 2026, Responsible AI chapter — https://hai.stanford.edu/ai-index/2026-ai-index-report/responsible-ai — 2026
  - Stanford HAI — "AI Index 2025: State of AI in 10 Charts" — https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts — Apr 2025
  - Ada Lovelace Institute — "Making sense of the UK's AI Security Institute" — https://www.adalovelaceinstitute.org/feature/aisi/ — 13 Jul 2026
  - Epoch AI — https://epoch.ai/data-insights/openai-compute-spend — 10 Oct 2025
- verification: PRIMARY for 233 and 362. DERIVED for 2023. SECONDARY for the AISI figures (Ada quoting government).
- caveats:
  - Incident counts depend on media coverage and volunteer editors. They measure attention as much as harm.
  - The £66m-vs-US$7bn comparison mixes a budget with a compute bill, in different years and currencies. Use it as an order-of-magnitude illustration only (roughly two orders of magnitude apart).
  - The US institute's (CAISI) budget and headcount were not retrieved. The OECD incident monitor's yearly totals were not retrieved.
  - AISI checks models. It does not oversee how governments deploy AI in decisions, which is this slice's real concern.
- why_it_matters_for_disempowerment: The best-funded public evaluator in the world is tiny next to a single lab's spending and gets days, not weeks, to look.

---

### 21. Human-in-the-loop rules and the evidence on rubber-stamping
- sub_theme: oversight
- kind: case (law) plus one-off study
- measures: What the law requires of human reviewers of automated decisions, and what experiments show humans actually do.
- series or key_numbers:

| date | value | note |
|---|---|---|
| In force since 2018 | GDPR Article 22: a right not to be subject to decisions based solely on automated processing that have legal or similarly significant effects | Legal text not re-fetched this session |
| Adopted 2024 | EU AI Act Article 14: high-risk systems must allow effective human oversight, including awareness of automation bias | Legal text not re-fetched; its application to Annex III systems is now deferred to 2 Dec 2027 (item 6) |
| 3 Apr 2025 | US OMB M-25-21: high-impact AI needs "human oversight" and an appeal route; waivers allowed | Item 1 |
| Published 9 Feb 2024 | Experiment, n = 292: giving people the power to adjust an algorithm's output raised uptake by 7 percentage points but made decisions *less* accurate (error 18.0 vs 17.4, p = 0.04); people adjusted 63% of the time and were *less* likely to step in on large errors (60%) than small ones (64%) | Sele & Chugunova, PLOS ONE |
| Reported Apr 2024 | About 20 seconds of human review per AI-nominated target | Lavender reporting, item 14; contested |

- source:
  - Sele, D. & Chugunova, M. — "Putting a human in the loop: Increasing uptake, but decreasing accuracy of automated decision-making" — https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0298037 — 9 Feb 2024
  - Hunton — OMB M-25-21 summary — https://www.hunton.com/privacy-and-cybersecurity-law-blog/omb-issues-revised-policies-on-ai-use-and-procurement-by-federal-agencies
  - Gibson Dunn — https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/
- verification: PRIMARY for the PLOS ONE study. SECONDARY for M-25-21. The GDPR and AI Act article descriptions are from general knowledge and were NOT fetched; check against EUR-Lex.
- caveats:
  - The experiment is a lab task (predicting students' test scores), not a real caseworker setting.
  - No government publishes the rate at which its officials override algorithmic recommendations. That override rate is the single most useful missing number in this slice.
  - Other well-known studies (for example on "automation bias" among public officials) were found but not fetched.
- why_it_matters_for_disempowerment: If the human in the loop agrees almost every time, legal oversight exists on paper while the decision has in practice moved to the machine.

---

### 22. Public sense of control over AI (Pew)
- sub_theme: public_opinion
- kind: series
- measures: The share of US adults who feel they have little or no say over whether AI is used in their lives, and who trust government to regulate it.
- series or key_numbers:

| survey date | value | note |
|---|---|---|
| 2021 | 37% more concerned than excited about AI in daily life | |
| 2024 survey (report 3 Apr 2025) | 59% say they have not too much or no control over whether AI is used in their lives; 55% want more control. AI experts: 46% and 57% | |
| 9–15 Jun 2025 (report 17 Sep 2025) | 57% say not too much or no control; 61% want more control (up 6 points since 2024); 50% more concerned than excited; 10% more excited | n = 5,023 |
| 2025 | 44% trust the US to regulate AI effectively; 47% have little or no trust. Republicans 54%, Democrats 36% | As summarised by Pew, 12 Mar 2026 |

- source:
  - Pew Research Center — "AI in Americans' lives: awareness, experiences and attitudes" — https://www.pewresearch.org/science/2025/09/17/ai-in-americans-lives-awareness-experiences-and-attitudes/ — 17 Sep 2025
  - Pew Research Center — "How Americans view AI and its impact on people and society" — https://www.pewresearch.org/science/2025/09/17/how-americans-view-ai-and-its-impact-on-people-and-society/ — 17 Sep 2025
  - Pew Research Center — "AI in daily life: views and experiences of US public and AI experts" — https://www.pewresearch.org/internet/2025/04/03/artificial-intelligence-in-daily-life-views-and-experiences/ — 3 Apr 2025
  - Pew Research Center — "What the data says about Americans' views of artificial intelligence" — https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/ — 12 Mar 2026
- verification: PRIMARY.
- caveats:
  - The brief's "57%" is confirmed for the June 2025 survey. The earlier Pew report gives 59%. Both are correct for their own survey.
  - 59% to 57% is within normal survey noise. Do not describe it as a fall.
  - The exact fieldwork dates of the 2024 survey were not on the page fetched.
  - US only. "Trust to regulate" is a single 2025 reading, not a yearly series, and it flipped by party after the change of administration.
- why_it_matters_for_disempowerment: It is the one direct, repeated measure of felt loss of agency, and it already sits at a majority.

---

## (a) Best three for a headline chart

All three are real, countable and updated by their publishers.

1. **US federal AI use-case inventory** (item 1). Disclosed use cases 710 (2023), 2,133 (2024), 3,611 (2025), with the rights/safety or high-impact count (351, then 445) as a second line. Label the definitional break in 2025.
2. **Court decisions involving AI-fabricated material** (item 11). 712 (29 Dec 2025), 2,022 (5 Sep 2026), 2,125 (3 Oct 2026). Ask Charlotin for the monthly file to draw the full curve from 2023.
3. **Individual income plus payroll taxes as a share of US federal receipts** (item 17). 85.3%, 84.1%, 84.1% for FY2023–25. A flat line is the honest picture: the state still depends on people. This is the baseline against which the paper's central claim would show up.

Runner-up: the **Dutch Algorithm Register** (item 3), the cleanest monthly series (1,224 in Nov 2025 to 1,574 in Oct 2026). A strong companion: **ATRS vs TAG** (item 2), which draws the disclosure gap directly (6 official vs 55 found in Oct 2023; 23 vs "over 50" in Jan 2025).

Chart caution for all register series: say on the chart that they count *disclosures*, and that rises follow reporting mandates.

## (b) Timeline of notable "firsts" in institutional delegation to AI, 2023–2026

| date | event | source |
|---|---|---|
| Oct–Nov 2023 | Porto Alegre council unanimously passes an ordinance later revealed to be written by ChatGPT | https://www.ksat.com/tech/2023/11/30/brazilian-city-enacts-an-ordinance-secretly-written-by-a-surprising-new-staffer-chatgpt/ |
| 28 Mar 2024 | US OMB issues M-24-10, the first government-wide binding minimum practices for rights- and safety-impacting AI | https://www.hunton.com/privacy-and-cybersecurity-law-blog/omb-issues-revised-policies-on-ai-use-and-procurement-by-federal-agencies |
| 3 Apr 2024 | First detailed reporting of an AI system (Lavender) nominating human targets at scale, with about 20 seconds of human review | https://www.972mag.com/lavender-ai-israeli-army-gaza/ |
| 21 Jan 2025 | Abu Dhabi commits AED 13 billion to become the "first fully AI-native government" by 2027 | https://www.akingump.com/en/insights/ai-law-and-regulation-tracker/abu-dhabi-aims-to-be-worlds-first-fully-ai-native-government-across-all-digital-services-by-2027 |
| 3 Apr 2025 | US OMB M-25-21 replaces M-24-10; single "high-impact" category; pro-adoption framing | https://www.hunton.com/privacy-and-cybersecurity-law-blog/omb-issues-revised-policies-on-ai-use-and-procurement-by-federal-agencies |
| 14 Apr 2025 | UAE Cabinet creates a Regulatory Intelligence Office to run AI-driven lawmaking | https://uaecabinet.ae/en/news/uae-cabinet-chaired-by-mohammed-bin-rashid-approves-launch-of-first-integrated-regulatory-intelligence-ecosystem-in-uae-government |
| May 2025 | UK government's "Consult" AI first used to analyse a live public consultation (Scotland) | https://www.publictechnology.net/2025/05/20/science-technology-and-research/ai-tool-for-collating-consultation-responses-shows-well-in-first-major-test/ |
| 11–12 Sep 2025 | Albania names an AI system, Diella, as Minister of State for Artificial Intelligence | https://en.wikipedia.org/wiki/Diella_(AI_system) |
| 6 Nov 2025 | Singapore reports about 80% of its 150,000 public officers have used the government chatbot | https://www.mddi.gov.sg/newsroom/mddi-s-response-to-pq-on-progress-of-adopting-ai-tools-within-public-service/ |
| Dec 2025 | First survey showing a majority (61.6%) of responding US federal judges use AI in judicial work | https://news.northwestern.edu/stories/2026/03/northwestern-study-finds-a-significant-number-of-federal-judges-are-already-using-ai-tools |
| 13 Apr 2026 | US federal inventory passes 3,600 disclosed use cases, 445 of them high-impact | https://github.com/ombegov/2025-Federal-Agency-AI-Use-Case-Inventory |
| 6 May 2026 | EU agrees to defer high-risk AI obligations to Dec 2027; the public database is still not open in Jul 2026 | https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/ |

"First" claims are as reported by the sources. I did not independently check that no earlier case exists.

## (c) What nobody measures

1. **Share of consequential government decisions made mainly by AI.** A good measure: for each high-impact system, the yearly number of decisions issued, split into fully automated, AI-recommended with human sign-off, and human-only. No register collects decision volumes.
2. **Human override rate.** A good measure: the percentage of AI recommendations that the responsible official changes, per system per year, with time spent per case. This would turn "human in the loop" from a legal phrase into a number.
3. **AI authorship share of legislation and regulation.** A good measure: a required disclosure field on each bill or rule ("AI used in drafting: none / assisted / primary"), counted yearly. Today there are only anecdotes and phrase-counting proxies.
4. **Share of public input that is machine-generated, and share of it read only by machines.** A good measure: agencies publishing, per consultation, an estimated AI-generated share (with method) and whether analysis was done by AI, human or both. The only hard number is from 2017.
5. **Government dependence on foreign model providers.** A good measure: share of public-sector AI spend and of AI queries going to each vendor and each country of origin, published yearly. Singapore, the UK and the US publish user counts but not vendor shares.
6. **Oversight capacity relative to deployment.** A good measure: number of auditors, inspectors and tribunal staff with authority over government AI, per 100 disclosed high-impact systems. Safety-institute budgets measure model testing, not deployment oversight.
7. **Appeals and redress outcomes for automated decisions.** A good measure: number of appeals filed against AI-assisted decisions, share upheld, and median days to resolve. Robodebt-type failures only became visible after years because nobody tracked this.
8. **Labour's share of the tax base, cleanly.** A good measure: wages-and-salaries-derived revenue as a share of total government revenue, separated from capital income, by country and year, alongside any revenue attributable to AI firms. Current series lump wage and capital income together.
9. **AI share of military decision cycles.** A good measure: even a coarse, declassified yearly count of weapon systems by autonomy level, and whether target nomination is AI-assisted. Nothing public exists beyond leaks and budget lines.
10. **Corporate decisions without human review.** A good measure: share of job applications, loan decisions and dismissals where no human saw the case before the outcome. Employer surveys ask "do you use AI", never "how many decisions".

## (d) Unverified or not retrieved

Search ran out before these could be checked. None of the numbers below should be published without a source.

- **Algorithmic share of equity trading volume.** Not retrieved. Commonly quoted figures (60–75% of US equity volume) are old and loosely sourced. No number included.
- **AI on corporate boards; Kazakhstan, Japan, Sweden and Estonia cases.** Not retrieved. Not included in the timeline.
- **Colombian judge's ChatGPT-assisted ruling (Jan 2023).** Widely reported, not fetched. Left out of the timeline.
- **US state and local government surveys of AI use.** Not retrieved.
- **OECD "Governing with AI" (2025).** Confirmed only that it reviews 200 use cases across 11 functions (PRIMARY). The split by function was not retrieved.
- **OECD AI Incidents Monitor yearly totals.** Not retrieved.
- **US CAISI (formerly AI Safety Institute) budget and headcount.** Not retrieved.
- **Share of government cloud spend by AWS, Microsoft, Google.** Not retrieved. Only whole-market UK shares are given.
- **Sovereign AI spending by country.** Not retrieved.
- **Tortoise Global AI Index.** Not retrieved.
- **Oxford Insights 2025: Singapore's rank and score.** Not on the public page.
- **Dutch register counts before Nov 2025**, and the criticism that high-risk algorithms are missing. Sources blocked (robots.txt, 403).
- **MiDAS error rate.** 85% (AI Incident Database) vs the commonly quoted 93%. Unresolved.
- **Defense Autonomous Warfare Group FY2027 request of US$54.6 billion.** Second-hand via a trade site citing Bloomberg. Needs a primary check.
- **Diella.** No primary Albanian government text fetched; outcome of the constitutional complaint unknown; OCCRP article date machine-read.
- **Charlotin database before Dec 2025.** No dated counts retrieved for 2023–mid 2025.
- **UNESCO judicial survey sample size.** Not on the page fetched.
- **Pair "over half regularly use" (Jun 2026) and the AI agent register.** One trade outlet only.
- **GovInsider article date** for the 55,000 Pair users figure.
- **FedScoop's 2025 inventory article** gave a publication date (29 Apr 2026) that conflicts with the repository's 13 Apr 2026 stamp and Nextgov's mid-April report. I used the repository date.
- **GDPR Article 22 and EU AI Act Article 14 wording.** Described from general knowledge, not fetched.
- **Bright et al. fieldwork dates** and **Pew 2024 survey fieldwork dates.** Not confirmed.
- **Kulveit et al.'s "legislative complexity" metric.** The GWU Regulatory Studies Center publishes page counts of the US Code of Federal Regulations, but the values could not be read from the page. Candidate series for a later pass: https://regulatorystudies.columbian.gwu.edu/reg-stats
