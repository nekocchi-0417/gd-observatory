# Institutions: AI and organisational expertise, skills pipelines and oversight

57 studies in `institutions.jsonl`; 34 checked against their own page this session. `era` is tagged by the kind of AI studied: "llm" for generative AI or the post-2022 period, "foundation" for earlier tools. The shared web-search budget ran out partway through, so some requested items are missing (end of section 4).

## 1. What is studied

- **Skill erosion inside organisations (mostly qualitative, pre-generative).**
  - Rinta-Kahila et al. 2023: years of reliance in an accounting firm bred complacency, and staff expertise eroded without anyone noticing.
  - Anthony 2021: bankers used algorithms without understanding them, which held back juniors' expertise.
  - Beane 2019: surgical trainees had to learn unofficially ("shadow learning"), and the supply of experts shrank.
  - Lebovitz et al. 2022: only one of three radiology departments built AI results into its judgments.
- **Expertise pipeline (the only cluster with large generative-AI-era panels).**
  - Brynjolfsson, Chandar & Chen: 22–25-year-olds in AI-exposed jobs fell 13% relative to peers (2025 version); the Aug 2026 revision reports a 19% gap.
  - Lichtinger & Hosseini Maasoum: junior hiring slowed in firms adopting AI.
  - Humlum & Vestergaard (Denmark): no effect on earnings or hours.
  - Ide 2025 (theory): automation can slow knowledge transfer even when junior jobs survive.
- **Human oversight of algorithmic decisions.**
  - About 90% of bail judges do worse than the algorithm when they override it (Angelova et al.).
  - Virginia's sentencing risk tool had no detectable effect because judges deviated from it (Stevenson & Doleac).
  - Child-welfare screeners followed wrong scores less often (De-Arteaga et al.).
  - Officials follow advice selectively: when it matches stereotypes (Alon-Barkat & Busuioc) or their own prior view (Selten et al.).
  - Hospital clinicians override 46–96% of safety alerts (Poly et al.).
  - Theory: Green 2022 reviewed 41 policies and argues people cannot do the oversight they assume. Sterz et al. 2024 and Laux 2023 set out when EU AI Act Article 14 oversight could work.
- **How governments count their AI.** Disclosed US federal use cases rose from 710 to 3,611 (2023–25). GAO found only 5 of 20 agency inventories complete. UK official records rose from 6 to 152, while an NGO had found 55 tools by 2023. All count tools, not decisions. Only the EU DSA database counts decisions (43% of 3.94bn platform moderation decisions fully automated).
- **Regulators acting on skill erosion.** Aviation is the only domain found that went from warning to audit: the FAA warned about manual flying skills in 2013 (SAFO 13002). A 2016 audit found the FAA still could not tell how often pilots fly by hand. Military parallel: Hawley 2017 on Patriot fratricides.
- **Knowledge institutions under generative AI.**
  - Peer review: 6.5–16.9% of review text was substantially LLM-modified (Liang et al.). At ICLR 2024, borderline papers that got an AI-assisted review were 4.9 points more likely to be accepted (Latona et al.).
  - Papers: at least 13.5% of 2024 PubMed abstracts were LLM-processed (Kobak et al.).
  - Courts: 2,184 decisions on AI-hallucinated filings (Charlotin). Commercial legal AI tools hallucinated on 17–33% of queries (Magesh et al.).
  - Stack Overflow posting fell about 25% after ChatGPT.
  - Science's range of topics narrowed as AI use grew (Hao et al.).
- **Failure cases.** Robodebt, the Dutch childcare-benefits scandal and the 2020 A-level grading algorithm: decisions automated with weak review, later reversed.

## 2. Longitudinal and reversibility evidence

**Same people or organisations measured over time**
- Brynjolfsson et al.: worker payroll panel, late 2022 to mid-2026.
- Lichtinger & Hosseini Maasoum: firm résumé panel, 2015–2025.
- Humlum & Vestergaard: worker and workplace registers, about 2 years after ChatGPT.
- Bonney et al.: rotating Census firm panel, Sep 2023 – Feb 2024.
- Babina et al., Acemoglu et al. (2010–18) and Weigelt 2009: firm panels, all pre-generative.
- Hao et al.: scientists' careers over decades.
- US federal inventories: the same agencies each year, 2023–25.
- Multi-year fieldwork: Beane (2 years), Anthony (2 years), Waardenburg et al. and van den Broek et al. (last two not rechecked).

**Repeated institutional series (different people each time)**
- Charlotin cases (2023–), DSA database (2023–), UK ATRS (2023–26), Dutch Algorithm Register (2022–).
- LLM use in peer reviews and papers (2020–24 and 2010–24).

**Reversibility**
- No study found that tests whether an organisation's skills recover after AI is withdrawn.
- The A-level reversal (2020) and Robodebt refunds restored decisions, not skills.
- FAA SAFO 13002 tried to restore manual flying. The 2016 audit found no data to tell whether it worked.

## 3. Measures and instruments in use

- Payroll and résumé panels with occupation AI-exposure measures. Firm adoption flagged by "AI integrator" job postings.
- Danish registers linked to adoption surveys. Census BTOS firm survey.
- Override and adherence rates (judges, screeners, clinicians).
- Natural experiments: random judge assignment, a software bug that showed wrong scores, staggered rollouts.
- Detecting LLM text in large corpora: distribution-level estimates (Liang), excess vocabulary (Kobak), GPTZero (Latona).
- Public registers: OMB inventories, ATRS, the Algoritmeregister, DSA automation flags.
- Audits: GAO-24-105980, DOT OIG AV-2016-013, NAO 2024.
- Causal loop modelling, ethnography, a preregistered legal-hallucination benchmark.

## 4. Gaps

- No study found that tracks organisations' ability to work without AI before and after adopting generative AI.
- No government found that publishes how often officials override AI-assisted decisions.
- No study found that measures how long an organisation takes to recover after an AI tool is withdrawn or fails.
- No study found that links firms' generative-AI adoption to juniors' later skills or promotion; studies stop at hiring.
- No study found, in this search, on vendor concentration or switching costs in public-sector generative-AI procurement.
- No evaluation found of whether guidance from medical colleges or law societies changed trainees' skills without AI.
- No field study found of how well humans oversee LLM-based tools in a real public agency.
- No panel found on reviewers' checking effort as LLM use in peer review grows.
- Not covered because the search budget ran out: Hampole et al.; Eloundou et al.; ICAO guidance; maritime ECDIS; Grgić-Hlača; Nanji et al.

## 5. Contested or mixed findings

- **Entry-level effects.** Two studies find junior declines (Brynjolfsson et al.; Lichtinger & Hosseini Maasoum). Humlum & Vestergaard find no effect on earnings or hours. For pre-generative AI, Babina et al. found the junior share *rose*. Causes are still debated.
- **Whether human overrides help.** Mostly worse (Angelova, Kleinberg, Hoffman, Stevenson & Doleac). Sometimes corrective (De-Arteaga; Cheng et al.). Sometimes add bias (Albright; Alon-Barkat & Busuioc). Keeping a human in the loop raised acceptance but lowered accuracy (Sele & Chugunova).
- **Whether human oversight can work at all.** Green 2022 says no and argues for oversight by institutions. Sterz et al. and Laux say yes, under conditions.
- **Science.** Scientists who use AI gain individually while science narrows (Hao et al.). AI-assisted reviews give higher scores, but whether review quality falls is unclear.
- **Disclosure counts.** Rising register counts follow new reporting rules, so they are not clean measures of rising use.
