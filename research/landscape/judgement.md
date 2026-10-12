# Judgement, decision-making, reliance, critical thinking and metacognition

74 studies in `judgement.jsonl` (40 LLM-era, 34 foundation); 61 checked against the paper's page or abstract this session.
Tagging rules: `era: "foundation"` = pre-LLM automation or non-generative AI, whatever the year. `unaided_test: true` = the same people who used AI were also scored without it.

## 1. What is studied

- **Over-reliance when the AI is wrong (largest cluster).** Planted-error designs consistently show people follow wrong advice:
  - Dratsch 2023: mammography accuracy fell from about 80% to under 20% for inexperienced readers.
  - Jabbour 2023: a biased model cut clinicians' accuracy by 11.3 points; explanations did not help.
  - Qazi 2025: wrong ChatGPT-4o suggestions cut physicians' reasoning scores by 14 points.
  - Wilson 2025: people followed race-biased hiring picks in up to 90% of choices.
  - Spatharioti 2025 and DeVerna 2024 show the same pattern in LLM search and fact-checking.
- **Human plus AI rarely beats AI alone.**
  - Vaccaro 2024 (106 experiments): combinations did worse than the best of human or AI alone (g = −0.23), and worse on decision tasks.
  - Goh 2024: GPT-4 did not improve physicians' diagnoses (76% vs 74%); GPT-4 alone scored 92%.
  - Bean 2026 (n = 1,298): the public using LLMs found the right condition in under 34.5% of cases, against 94.9% for the LLM alone.
  - Exceptions: Goh 2025 (management reasoning +6.5 points) and McDuff 2025 (differential diagnosis 51.7% vs 36.1%).
- **Experts mis-weight AI.**
  - Agarwal 2023: radiologists underweight AI.
  - Angelova 2023: about 90% of bail judges' overrides were worse than the algorithm.
  - Yu 2024: effects varied across 140 radiologists, and experience did not predict who benefited.
- **Interventions for appropriate reliance.** What helps:
  - cognitive forcing (Buçinca 2021)
  - first-person uncertainty phrases (Kim 2024)
  - sources and visible inconsistencies (Kim 2025)
  - confidence-aligned wording (Steyvers 2025)
  - reliability nudges (Qazi 2026)

  Plain explanations often *increase* reliance on wrong answers (Bansal 2021; Kim 2025; Jacobs 2021).
- **Metacognition and overconfidence.**
  - Fernandes 2025: ChatGPT raised LSAT scores by about 3.5 points out of 20, but users overestimated by about 4, and the Dunning–Kruger gradient vanished.
  - Perry 2023: AI users wrote less secure code but believed it was more secure.
  - METR 2025: developers were 19% slower but believed they were 20% faster.
  - Krügel 2023: 80% of people denied that ChatGPT's moral advice had swayed them.
- **Critical thinking.** Mostly self-report and cross-sectional: Lee 2025 (β = −0.69 for confidence in AI) and Gerlich 2025 (r = −0.68). Small lab studies: Stadler 2024 (shallower reasoning with ChatGPT than with Google) and Fan 2025 (better essays, no gain in knowledge).
- **Model side.**
  - Zhou 2024: models rarely express uncertainty, and answers they presented as confident were wrong 47% of the time.
  - Cheng 2025: models affirm users about 50% more than humans do.
  - Dahl 2024: legal hallucination at 58–88% in general LLMs.
  - Magesh 2024: 17–33% in legal RAG tools.

## 2. Longitudinal and reversibility evidence

Only three studies measure the same people over time:

| Study | Same people | Time span | What happens without AI |
|---|---|---|---|
| Budzyń 2025 (pre-LLM CADe) | 19 endoscopists | About 3 months before and after AI introduction | Detection in non-AI procedures fell from 28.4% to 22.4%. Observational; recovery not tracked (tagged `tested-not-recovered` for want of a "declined" label). |
| Becker / METR 2025 | 16 developers, tasks randomised to AI or no-AI | Feb–Jun 2025 | Unaided speed measured; no skill or recovery measure. |
| METR 2026 follow-up | 10 returning developers | About 6+ months apart | 30–50% of developers withheld tasks they did not want to do without AI. Anecdotal, but a direct sign of reluctance to work unaided. |

Unaided tests within a single session:

- Learning or skill tested without AI: Gajos 2022, Buçinca 2025, Fan 2025.
- Pre-assistance baselines: McDuff, Dell'Acqua, Agarwal, Yu, Tschandl, Jacobs, He, Bo, Schemmer.

Shin 2023 is a population time series (Go professionals' unaided moves, 1950–2021). Move quality improved after superhuman AI appeared. It does not track individuals.

No study tested recovery after AI was withdrawn.

## 3. Measures and instruments in use

- **Reliance:**
  - over-reliance rate (agreement with wrong AI)
  - switch rate and weight of advice in two-stage judge-advisor designs
  - Appropriateness of Reliance (Schemmer 2023)
  - "susceptible" share who never catch wrong advice (Gaube 2021)
- **Paradigms and synergy:** planted-error paradigms; Hedges' g for human+AI against the best of human or AI alone (Vaccaro).
- **Clinical:**
  - structured diagnostic-reasoning rubric (Goh 2024; Qazi)
  - management-reasoning rubric (Goh 2025)
  - top-10 differential accuracy (McDuff)
  - BI-RADS accuracy
  - adenoma detection rate
- **Reasoning:** LSAT logical-reasoning items (Fernandes, Bo); trolley dilemmas (Krügel).
- **Metacognition:**
  - estimated vs actual score; AUC metacognitive sensitivity (Fernandes)
  - calibration and discrimination gaps (Steyvers)
  - forecast vs perceived vs measured time (METR)
- **Self-report:**
  - items drawn from the Halpern Critical Thinking Assessment (Gerlich)
  - Bloom's-taxonomy effort items (Lee)
  - Need for Cognition (Buçinca 2021; Pitts)
  - cognitive load (Stadler)
  - IAT (Wilson)
- **Admin data:** override-quality estimators (Angelova); risk-score natural experiments (Albright; Stevenson & Doleac).
- **Model evals:** legal hallucination and false-premise acceptance (Dahl, Magesh); uncertainty expression (Zhou); affirmation rate (Cheng).

## 4. Gaps

- No study found tracking the same professionals' unaided decision accuracy over months of routine **LLM** use; Budzyń is pre-LLM and observational.
- No study found that withdraws an LLM assistant after sustained use and measures whether, and how fast, decision quality recovers.
- No study found measuring automation bias with deployed LLM tools in live clinical, legal or public-sector decisions. All LLM-era evidence uses vignettes or lab tasks.
- No study found on public officials' reliance on LLM advice. Alon-Barkat & Busuioc 2023 used algorithm scores and found no automation bias.
- No study found testing whether AI-induced overconfidence (Fernandes, Perry, METR) carries into later unaided work.
- No study found linking critical-thinking **test** scores (not self-report) to AI use in the same people over time.
- No study found joining real usage logs to individual decision accuracy.
- No study found on group or committee decisions with LLM advisers beyond one session.

## 5. Contested or mixed findings

- **Does AI help experts?**
  - Null: Goh 2024, Agarwal.
  - Positive: Goh 2025, McDuff, Tschandl (with good AI).
  - Heterogeneous: Yu.
  - Vaccaro: it depends on whether the human or the AI is better alone.
- **Over- or under-reliance?**
  - Strong over-reliance: Klingbeil, Wilson, Qazi, Dratsch.
  - None beyond human advice: Alon-Barkat & Busuioc.
  - Experts underweighting: Agarwal; Logg (experts).
  - Aversion after errors: Dietvorst.
  - Advice unaffected despite a competence penalty: Böhm 2023.
- **Explanations.** Some find they raise over-reliance (Bansal, Kim 2025, Jacobs, Jabbour, Chen). Others find they reduce it when contrastive, confidence-aligned or cheap to check (Vasconcelos, Si, Steyvers, Buçinca 2025).
- **Does experience protect?**
  - Partly: Dratsch (45.5% vs under 20%); Gaube (28% vs 42% susceptible).
  - Not reliably: Tschandl (experts misled too); Yu (experience not predictive).
- **Wrong advice can help.** A deliberately biased forecasting assistant still improved accuracy (Schoenegger 2024), unlike the clinical planted-error results.
- **Critical-thinking decline.** Gerlich and Lee are cited as showing decline but are cross-sectional and self-reported. Lee frames lower effort partly as a shift to verifying AI output. Fan found no difference in knowledge gain.
- **METR.** The estimate went from a 19% slowdown (early 2025) to speed-ups of 18% and 4% (late 2025). METR calls the later figures weak because of task selection.

**Search limits:** the shared web-search budget ran out mid-pass.
- Cited from known DOIs without re-checking (`verified:false`): Albright, Green & Chen, Dietvorst, Logg, Burton and the automation-bias reviews.
- Checked only second-hand: Dratsch (RSNA press release); Shaw & Nave (secondary report).
- Not swept: Choi/Monahan/Schwarcz legal RCTs, Otis et al. (entrepreneurs), Chiang et al. (devil's-advocate group study).
