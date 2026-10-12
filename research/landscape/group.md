# Group / team / community level: AI's effects on agency, skills, expertise and collective knowledge

49 studies in `group.jsonl`; 38 were checked against the paper's own page or abstract this session. The shared search budget ran out partway through this pass. Classroom peer help, music and fan-fiction communities, Quora, conformity to AI in groups, and polarisation studies using LLM chat are therefore thinly covered.

## 1. What is studied

- **AI as teammate.** Dell'Acqua et al. 2026 (Organization Science; 791 P&G staff): individuals using GPT-4 matched two-person teams working without AI. AI also made proposals less siloed by function and lifted users' self-reported mood. Vaccaro et al. 2024 (meta-analysis, 106 experiments): human-AI pairs underperformed the best of human or AI alone (g = −0.23), mainly on decision tasks. Alsobay et al. 2025 (281 groups): an LLM facilitator raised information sharing but did not improve decisions.
- **Collective homogenisation.** AI help improves individual outputs but makes different people's outputs more alike. This holds across Doshi & Hauser 2024, Meincke et al. 2025 (significant in 37 of 45 comparisons), Anderson et al. 2024 and Padmakumar & He 2024. Agarwal et al. 2025 found the drift has a direction: Indian writers were pulled toward Western styles. Jiang et al. 2025 ("Artificial Hivemind") show the model-side source: different LLMs give near-identical answers.
- **Population language shift.** ChatGPT-favoured words rose in unscripted podcast speech (Yakura et al. 2024). At least 13.5% of 2024 biomedical abstracts were LLM-processed (Kobak et al. 2025), as was 6.5–16.9% of AI peer-review text (Liang et al. 2024).
- **Knowledge commons.**
  - Stack Overflow posting fell about 25% within six months of ChatGPT (del Rio-Chanona et al. 2024). Visits fell about 12%, with newer users leaving, while Reddit held steady (Burtch et al. 2024).
  - Over 5% of new English Wikipedia articles were flagged as AI-written (Brooks et al. 2024).
  - 33–46% of crowd workers used LLMs on a writing task (Veselovsky et al. 2023).
  - Model collapse (Shumailov et al. 2024) and knowledge collapse (Peterson 2025) explain why this matters.
- **Science and open source.** AI-using scientists gained citations, but science's topic range shrank 4.63% (Hao et al. 2026; mostly pre-LLM AI). Copilot moved developers toward solo coding and away from collaborative project management (Hoffmann et al. 2024), yet raised coordination time 8% (Song et al. 2024).
- **Apprenticeship and knowledge flow.**
  - The foundation is Beane 2019 (robotic surgery): trainees were pushed out of hands-on work and fell back on rule-bending "shadow learning".
  - LLM-era evidence is thin and mostly qualitative. Juniors can't be relied on to teach seniors to use GenAI (Kellogg et al. 2024), and some staff prefer asking ChatGPT to asking seniors (SINTEF 2023).
  - A call-centre AI spread top performers' practices to novices (Brynjolfsson et al. 2025).
- **Deliberation and AI-mediated communication.**
  - An AI mediator wrote group statements that people preferred to human mediators' versions, and it reduced division (Tessler et al. 2024; n = 5,734).
  - LLM rephrasing improved conversation quality without changing attitudes (Argyle et al. 2023).
  - Smart replies made conversation partners seem warmer, but suspected AI use was penalised (Hohenstein et al. 2023).
- **Expert and creative communities over time.** Art-platform adopters produced more, but average novelty fell (Zhou & Lee 2024). Go professionals' unaided decision quality and novelty rose after superhuman AI (Shin et al. 2023).

## 2. Longitudinal and reversibility evidence

**Same people measured over time:**
- Shin et al. 2023: Go professionals, 1950–2021. The gains show up in unaided tournament play.
- Hao et al. 2026: scientists' careers, over decades.
- Hoffmann et al. 2024: developers, 2 years.
- Zhou & Lee 2024: about 53,000 artists, months.
- Song et al. 2024: GitHub projects and developers, months.
- Brynjolfsson et al. 2025: 5,172 support agents, months.
- Beane 2019: 2-year ethnography.

**Community time series (repeated snapshots, different people):** del Rio-Chanona, Burtch, Lyu, Reeves, Brooks, Yakura, Kobak, Liang.

**Reversibility:**
- Brynjolfsson et al. 2025 is the only withdrawal test found. During outages, agents' gains partly persisted (detail unverified).
- Yakura et al.: word adoption lasted past a distractor task, a matter of minutes.
- de Rooij & Biskjaer 2026 (unverified meta-analysis): "preliminary" evidence that homogenisation persists after AI use ends.
- No team or community study found removes AI and tracks recovery.

## 3. Measures and instruments in use

- **Diversity:** embedding cosine similarity across participants (Doshi, Anderson, Agarwal, Meincke); homogenisation scores (Padmakumar & He); accuracy of a classifier telling groups apart (Agarwal); content and visual novelty (Zhou & Lee); the Infinity-Chat benchmark (Jiang); Pielou's evenness (Peterson).
- **Language shift:** excess-word analysis (Kobak); maximum-likelihood estimate of LLM-modified share (Liang); synthetic control (Yakura).
- **Commons:** difference-in-differences and synthetic control on posts, visits and edits; GPTZero and Binoculars detectors (Brooks); keystroke detection (Veselovsky).
- **Teams:** expert-rated solution quality, a technical-vs-commercial balance index and self-reported emotions (Dell'Acqua); the hidden-profile task and the open-source GRAIL platform (Alsobay); team situation awareness (McNeese); Hedges' g for synergy (Vaccaro).
- **Deliberation:** endorsement ratings, opinion shift and a group-preference reward model (Tessler, Bakker); democratic reciprocity (Argyle).
- **Expertise:** KataGo move-quality and novelty index (Shin); bibliometric topic-range metrics (Hao).

## 4. Gaps

- No study found that follows the same teams for months to test whether an AI teammate erodes members' own cross-functional expertise.
- No study found that withdraws AI from a team or community and measures whether diversity or skill recovers.
- No study found that uses within-firm logs to count juniors' questions to seniors, code-review feedback or mentoring time before and after LLM adoption.
- No quantitative LLM-era replication of Beane's shadow-learning finding was found.
- No study found in this search on peer help in courses (forum posts, office hours) after ChatGPT.
- No study found that links lost Q&A contributions to later answer quality for humans or models.
- No study found on repeated AI-mediated deliberation with the same group, testing whether minority positions get crowded out over time.
- No field study found that measures decision quality when LLMs take part in real organisational meetings.
- Only one study found (Agarwal et al.) that tests cultural homogenisation directly; non-Western samples are rare.
- No benchmark found that measures whether a model preserves diversity across its users, rather than in its own outputs.
- No study found that ties collective homogenisation to downstream outcomes such as innovation success.

## 5. Contested or mixed findings

- **Homogenise or diversify?** Most lab studies find narrowing. The exceptions:
  - Ashkinaze et al. 2025: AI example ideas *raised* collective diversity.
  - Shin et al. 2023: novelty rose among Go professionals.
  - Zhou & Lee 2024: peak novelty rose while average novelty fell.
  - Padmakumar & He 2024: the effect depended on the model (InstructGPT, not base GPT-3).
- **Commons decline.** The Stack Overflow drop is consistent across studies, but Reddit showed none. On Wikipedia, Reeves et al. found no fall, while Lyu et al. found falls in articles that overlap with ChatGPT.
- **Teams.** Dell'Acqua et al.: AI can stand in for a teammate on quality. Vaccaro et al.: human-AI combinations usually lose to the best single performer on decisions. Alsobay et al.: better information sharing, but decisions no better.
- **Open source.** Hoffmann et al. find less collaboration; Song et al. find more coordination time.
- **Deliberation.** Tessler and Bakker treat AI-driven convergence as finding common ground. Sourati et al. and Burton et al. warn that the same convergence, at scale, becomes homogenisation. Hohenstein et al.: the social benefits reverse when people suspect AI use.
