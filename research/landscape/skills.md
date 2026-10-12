# Skills, learning, expertise and deskilling — landscape pass

70 studies in `skills.jsonl` (51 from 2022 onward, 19 foundations); 52 verified against the paper's own page this session.

Coding notes:
- `unaided_test` is true only where a no-AI test was confirmed. Several tutoring RCTs probably used AI-free tests, but the pages read did not say so (Kestin, De Simone, Henkel, Lehmann, Fan, Nie).
- `reversibility` is coded only where performance without AI was measured after a period of routine use.
- Some `era: llm` entries (2022 onward) concern non-generative AI; their `limits` field says so.
- The search budget ran out partway, so translators, designers and dermatology/ECG/pathology training were not swept.

## 1. What is studied

- **Learning with AI, tested without it.** This is the strongest cluster.
  - Bastani et al. 2025 (PNAS, about 1,000 Turkish students): practice scores rose 48% with plain GPT-4, but the closed-book exam fell 17%. A tutor-style design removed the harm.
  - Shen & Tamkin 2026: learning a new coding library with AI cut quiz scores from 67% to 50%.
  - Lira et al. 2025 and Kumar et al. 2023 found the opposite: practising with AI, or seeing its explanations, improved later unaided writing and maths.
  - What decides the outcome is whether AI does the work or explains it.
- **Scaled tutoring RCTs.** Nigeria +0.31 SD in 6 weeks (De Simone); Ghana 0.37 over 8 months (Henkel); Harvard physics about 0.7–1.3 SD on immediate quizzes (Kestin). None follows students after the tutor is removed.
- **Shallower processing and offloading.**
  - Melumad & Yun 2025 (10,462 people): LLM summaries left shallower knowledge than web search.
  - Kosmyna et al. 2025: lower EEG engagement, ownership and recall when writing with ChatGPT.
  - Surveys link AI use to lower critical thinking (Gerlich; Abbas; Lee).
  - Foundations: Sparrow 2011 (partly failed to replicate), Risko & Gilbert, Grinschgl.
- **Clinical deskilling.**
  - Budzyń et al. 2025: detection in non-AI colonoscopies fell from 28.4% to 22.4% after AI was introduced.
  - Okumura et al. 2025 (3 years): no decline.
  - Two reviews call the evidence "limited" or "scarce".
  - Dratsch and Hayden measure automation bias in the moment, not lasting loss.
- **Workplace field experiments.**
  - Call-centre agents partly kept their AI gains during outages (Brynjolfsson, Li & Raymond).
  - Consultants were 19 pp worse on a task beyond the AI's frontier (Dell'Acqua).
  - Gains were uneven: top performers were hurt in law (Choi & Schwarcz) and low performers in Kenya (Otis et al.).
- **Learning from superhuman AI.** Unaided Go (Shin et al. 2023) and chess (Gaessler & Piezunka 2023) play improved after engines spread.
- **Foundations.**
  - Aviation manual-skill loss: Casner; Haslbeck; Ebbatson; FAA SAFO 13002.
  - Bainbridge's "ironies of automation"; Endsley & Kiris on being out of the loop.
  - Skill-decay meta-analysis: Arthur et al.
  - GPS and spatial memory: Dahmani & Bohbot; Ishikawa; Ruginski.
- **Expertise pipeline.**
  - Beane 2019: only a minority of robotic-surgery trainees reached competence.
  - Brynjolfsson, Chandar & Chen (revised Aug 2026): employment of 22–25-year-olds in AI-exposed jobs was about 19% below trend.
  - Neither measures skill directly.

## 2. Longitudinal and reversibility evidence

**AI withdrawn after routine use:**

| Study | Span | Result without AI |
|---|---|---|
| Darvishi et al. 2024 (1,625 students) | 4 weeks with AI, then 4 without | Peer-review quality fell; did not recover in the window |
| Budzyń et al. 2025 (19 endoscopists) | 3 months before vs after | −6 pp detection; workload confound |
| Okumura et al. 2025 (single centre) | 3 years | No decline; high detectors kept gains |
| Brynjolfsson, Li & Raymond 2025 (5,172 agents) | Months (outages) | Gains partly persisted; more with longer exposure |
| Kosmyna et al. 2025 (n=18 crossover) | about 4 months | Lower connectivity when writing unaided (weak) |
| Rinta-Kahila et al. 2023 (one firm) | Years (qualitative) | Unnoticed erosion surfaced when automation stopped |

**Same people measured more than once, with no withdrawal test:**
- Dahmani & Bohbot: 13 people re-tested about 3.2 years apart; more GPS use, steeper spatial-memory decline.
- Kazemitabaar 2023: 1-week retention test; no harm from Codex.
- Henkel: 8 months. De Simone: 6 weeks.
- Bastani: 4 sessions. Kestin: 2-week crossover.
- Tutor CoPilot: about 2 months; tutors never tested without the tool.
- He et al. 2025: days.
- Abbas: 3 waves. METR: 2025 plus a 2026 follow-up. Noy & Zhang: 2 weeks.
- Gaessler & Piezunka; Otis; Humlum & Vestergaard; Canaries.

## 3. Measures and instruments

- **AI-free tests after assisted practice:** closed-book exams (Bastani), a 14-item library quiz (Shen & Tamkin), no-AI writing tests (Lira), 1-week retention tests (Kazemitabaar).
- **Clinical:** adenoma detection rate in non-AI procedures with CUSUM curves; BI-RADS accuracy under correct versus wrong AI suggestions.
- **Field logs:** resolutions per hour and chat time during outages; exit-ticket mastery.
- **Neuro, memory and spatial:** EEG connectivity, eye tracking, cognitive-map drawing, the Pattern Copy Task, the Google Stroop task.
- **Aviation:** raw-data ILS deviation; simulator think-aloud probes.
- **Self-report scales:** Gerlich's offloading/critical-thinking survey; Abbas et al.'s ChatGPT-use scale; Lee et al.'s Bloom-based effort ratings.
- **Model side:** MRBench (8 pedagogical dimensions), MathTutorBench, LearnLM expert preference.

## 4. Gaps

- No study found re-tests unaided skill in the same LLM users at 6–24 months. The longest is about 4 months.
- No randomised crossover trial with AI-on and AI-off periods in clinicians was found.
- No study found measures recovery time: how much practice without AI restores a skill.
- No study found follows novices trained with LLMs into practice and tests them without AI ("never-skilling").
- No post-withdrawal study found in radiology, pathology, dermatology or ECG.
- No study found of translators, designers, accountants or analysts using LLMs includes a later no-AI test.
- No tutoring RCT found tests learning months after the tutor is removed.
- No study found tests whether AI-coached tutors or workers keep the improved practice without the tool.
- No tutoring benchmark found is validated against measured student learning.
- No adequately sized, preregistered replication of Kosmyna's EEG result was found.
- Almost no unaided-skill evidence was found outside the US, UK, Turkey and Sub-Saharan Africa.

## 5. Contested or mixed findings

- **Harm or help.**
  - Harm: Bastani, Shen & Tamkin, and Wecks (AI users scored 6.71/100 lower; observational).
  - Neutral or positive: Lira, Kumar, Kestin, Kazemitabaar.
  - Likely reconciliation: answer-giving use harms learning; explanation, worked examples or tutor designs help.
- **Meta-analyses.** Wang & Fan 2025 (g = 0.867) was retracted in 2026. Lawson et al. 2026 found only 6 of 63 (Deng) and 3 of 46 (Wang & Fan) comparisons adequately controlled, with 7–8 letting the AI group use ChatGPT during the post-test. Weidlich et al. 2025 agree.
- **Clinical deskilling.** Budzyń (decline over 3 months) versus Okumura (no decline over 3 years). Neither is randomised.
- **Who benefits.** AI narrows skill gaps in some studies (Noy & Zhang; Brynjolfsson; Tutor CoPilot) and widens them in others (Otis; Lehmann; Prather; De Simone).
- **Offloading.** The Google Stroop effect failed to replicate (Camerer et al. 2018; Hesselmann 2020). Grinschgl found offloading's memory cost largely disappears when people intend to learn.
- **EEG "cognitive debt".** It faces a methods critique (Stankovic et al., arXiv 2601.00856). Lower connectivity shows less effort, not lasting loss.

**To check:**
- Okumura was read from an editorial, Dratsch from a press release, and Deng's effect sizes were not seen.
- Several foundation studies and Stadler, Fernandes and the ESMO review were not re-read this session.
- The Macnamara et al. 2024 page was rate-limited, so its DOI is not confirmed.
