**AI and human agency, skills, expertise and judgement: a landscape review.** Compiled 11 October 2026 with AI research assistance. 361 studies and 98 measures or frameworks; 292 studies checked against the paper's own page or abstract. Draft: check a source before citing it.

## How to read this

**Question.** What does research show about AI's influence on people's agency, skills, expertise and decision-making, at the individual, group and institutional levels? Where exactly are the gaps, especially in tracking change over time?

**Scope.** Mainly generative AI (2022 onward). Earlier work is included where it defines a concept or a method: automation bias, clinical decision support, GPS and memory, autopilot and manual flying, skill decay. Human-side studies (self-reports, behavioural tasks, tests with and without AI, usage logs, panels) and model-side studies (evals and benchmarks of what models do to people) are both covered.

**Method.** Eight parallel search passes: skills and learning; judgement and decisions; beliefs, autonomy and creativity; dependence, panels and reversibility; model-side evals; group level; institutional level; concepts and instruments. Each study was coded for level, design, measures, time span, whether the same people were measured more than once, whether anyone was tested without AI, and whether AI was taken away to see what happened. Duplicates across passes were merged.

**Limits.**

- This is a broad scoping sweep, not a systematic review. Every pass hit a shared search limit before finishing; the areas left thin are listed in section 6.
- "None found" means none found in this search, not that none exists.
- Most studies are from the US and UK, in English.
- "Checked" means the paper's own page or abstract was read, not the full paper. A few headline items were re-checked a second time (for example the retraction of the Wang & Fan meta-analysis, and the latest Canaries revision).

## 1. At a glance

1. **AI's effect on performance with AI is well studied. Its effect on what people can do without AI is not, and change over time almost not at all.** Of 233 empirical studies of generative AI found, 21 test people without AI and 22 follow the same people for months or longer. Only 4 do both, all narrow: a 4-month EEG writing study ([Kosmyna et al. 2025](https://arxiv.org/abs/2506.08872)), two rounds of a developer trial ([METR 2025–26](https://metr.org/blog/2026-02-24-uplift-update/)) and call-centre agents during AI outages ([Brynjolfsson, Li & Raymond 2025](https://arxiv.org/abs/2304.11771)). None re-tests a general population.
2. **How AI is used decides whether people learn.** Getting answers from AI lowers later unaided scores: 17% lower on a closed-book exam ([Bastani et al. 2025](https://doi.org/10.1073/pnas.2422633122)), 50% vs 67% on a coding quiz ([Shen & Tamkin 2026](https://arxiv.org/abs/2601.20245)). Tutor-style or explaining designs show no harm, and sometimes gains ([Lira et al. 2025](https://arxiv.org/abs/2502.02880); [Kumar et al. 2023](https://papers.ssrn.com/abstract=4641653)). The upbeat meta-analyses are unreliable: one was retracted in April 2026 ([Wang & Fan](https://www.nature.com/articles/s41599-026-07310-z)), and a re-analysis found only a handful of comparisons adequately controlled ([Lawson et al. 2026](https://doi.org/10.1016/j.compedu.2026.105701)).
3. **Whether experts lose skill is unresolved, and there is no LLM evidence at all.** In Poland, detection in colonoscopies done without AI fell from 28.4% to 22.4% after AI was introduced ([Budzyń et al. 2025](https://doi.org/10.1016/S2468-1253(25)00133-5)). In Japan, a 3-year audit found no decline ([Okumura et al. 2025](https://doi.org/10.1055/a-2661-2624)). Both concern image-recognition AI. Nothing comparable exists for clinicians, lawyers or analysts using LLMs.
4. **People follow wrong AI advice, and feel more capable than they are.** Planted wrong suggestions cut clinicians' accuracy by 11–14 points ([Jabbour 2023](https://doi.org/10.1001/jama.2023.22295); [Qazi 2025](https://doi.org/10.1101/2025.08.23.25334280)). AI users overestimated their own scores ([Fernandes et al.](https://doi.org/10.1016/j.chb.2025.108779)). Developers felt 20% faster when they were 19% slower ([Becker et al. 2025](https://arxiv.org/abs/2507.09089)). Human plus AI usually does worse than the better of the two alone ([Vaccaro et al. 2024](https://doi.org/10.1038/s41562-024-02024-1): g = −0.23).
5. **AI changes beliefs, and the changes last.** Conversations with GPT-4 cut conspiracy belief by about 20%, still there 2 months later ([Costello et al. 2024](https://doi.org/10.1126/science.adq1814)). Writing assistants shift writers' own opinions without their noticing ([Jakesch et al. 2023](https://arxiv.org/abs/2302.00560); [Williams-Ceci et al. 2026](https://doi.org/10.1126/sciadv.adw5578)). Sycophantic replies made people less willing to repair a real conflict, yet they preferred those replies ([Cheng et al. 2025–26](https://arxiv.org/abs/2510.01395)).
6. **Individuals do better, but people's outputs grow more alike.** Across studies, AI help raises creativity (g = +0.27) but sharply cuts the diversity of ideas across people (g = −0.86) ([Holzner et al. 2025](https://arxiv.org/abs/2505.17241)). Public knowledge-sharing is shrinking: Stack Overflow posting fell about 25% within six months of ChatGPT ([del Rio-Chanona et al. 2024](https://doi.org/10.1093/pnasnexus/pgae400)).
7. **Felt agency and dependence are measured only by one-off self-reports.** At least eight AI-dependence scales exist; none has been checked against behaviour or unaided ability. No validated, AI-specific measure of agency capacity was found.
8. **Model-side evals are not linked to what happens to people.** Benchmarks count model behaviours. When DeepMind measured both, how often a model used manipulative tactics did not predict how much people's beliefs changed ([Akbulut et al. 2026](https://arxiv.org/abs/2603.25326)). Users rate sycophantic or disempowering replies *more* highly ([Sharma et al. 2026](https://arxiv.org/abs/2601.19062)), so satisfaction is not a safe proxy.
9. **Group and institutional evidence is thin, indirect and mostly from before generative AI.** Employment of 22–25-year-olds in AI-exposed jobs is about 19% below trend ([Brynjolfsson, Chandar & Chen, rev. Aug 2026](https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine/)), but no study follows those juniors' skills. Oversight research mostly predates LLMs, and no government found publishes how often officials override AI.

## 2. The concepts and how they connect

**In one line:** agency, skills and decision-making each have an *actual* side (what people can do and decide) and a *felt* side (what they believe they can do), and these drift apart under AI use. Trust, reliance and dependence link AI use to both sides; time decides whether a change can be reversed.

### 2.1 A working taxonomy

| Top-level | Parts | What to measure | Example measure |
|---|---|---|---|
| **A. Agency** | A1 Capacity: own values, plus the competence and options to act on them | Can people still pursue their own goals without AI? | No AI-specific instrument found |
| | A2 Exercise: what people actually decide or hand over | Share of decisions or value judgements delegated | Human Agency Scale H1–H5 (preferred level); delegation shares in usage logs |
| | A3 Felt sense: sense of agency, ownership, perceived control, self-efficacy | Do people feel in control and capable? | Pew AI-control items; Sense of Agency Scale; ownership items |
| **B. Skills and expertise** | B1 With AI (assisted performance) | Output quality and speed with AI | Most studies |
| | B2 Without AI (unaided performance) | What people can do with AI switched off | Closed-book exams, AI-off tasks, non-AI procedures |
| | B3 Learning while AI is available | Skill gained during AI-assisted practice | Pre/post tests without AI |
| | B4 Retention and recovery after AI is withdrawn | What remains, and how fast it returns | Outage or withdrawal arms (rare) |
| **C. Decision-making** | C1 Quality: accuracy, calibration, diversity | Are decisions right and well calibrated? | Planted-error tasks; calibration gaps |
| | C2 Process: deliberation, critical thinking, information search | How carefully do people reason? | Mostly self-report (Lee; Gerlich) |
| | C3 Control: who decides; whether reliance is appropriate | Do people accept good advice and reject bad? | Appropriate-reliance ratios (RAIR, RSR); override rates |
| **Links** | Trust → reliance → dependence | Attitude, then behaviour, then habit | Trust scales; weight of advice; dependence scales |
| | Beliefs and attitudes | Both an input (attitudes to AI) and an outcome (beliefs shaped by AI) | Before/after belief ratings; attitude scales |
| **Time** | Reversibility and lock-in | Could people or institutions go back, at acceptable cost? | No instrument; only withdrawal designs |

Each row applies at three levels. **Individual:** a person's tested ability and felt control. **Group:** a team's shared know-how and decisions. **Institutional:** training pipelines, junior roles, human oversight of decisions, and whether the organisation could still run without AI.

### 2.2 The constructs, defined

| Construct | Working definition (source) | Parts | Main measures | AI-specific validated measure? |
|---|---|---|---|---|
| Human agency | Capacity to make things happen on purpose through one's own actions (Bandura 2001). Sen: freedom to pursue goals one values. | Intentionality, forethought, self-regulation, self-reflection; personal, proxy and collective modes. AI use is a kind of proxy agency. | Pew AI-control items; ESS/ANES political efficacy; OPHI agency indicators | No |
| Autonomy | Effective capacity for self-governance: acting on values that are one's own ([Prunkl 2022](https://ora.ox.ac.uk/objects/uuid:4bb8dbad-9d74-4148-a125-8148f48af17b/files/sbk128b79h)) | *Authenticity* (are the values mine? threatened by manipulation) and *agency* (can I act on them? threatened by lost options or competence); procedural, substantive and relational views | Basic Psychological Need Satisfaction scale; Index of Autonomous Functioning | No |
| Skills | Learned ability to do a task to a standard; here, what a person can do **without** AI | Declarative, procedural, tacit; Dreyfus stages; decay with non-use ([Arthur et al. 1998](https://doi.org/10.1207/s15327043hup1101_3)) | Unaided tests; PIAAC as a population baseline | Study design, not a scale |
| Expertise | Reliably superior performance on a domain's typical tasks, built by deliberate practice (Ericsson) | Contributory (can do it) vs interactional (can talk about it); AI may keep the second while the first erodes | Domain accuracy without AI | No |
| Judgement and decision-making | Choosing under uncertainty with limited time and information (Simon) | Fast vs reflective thinking; four stages that can be automated separately: gather, analyse, choose, act ([Parasuraman et al. 2000](https://doi.org/10.1109/3468.844354)) | A-DMC; Cognitive Reflection Test; weight of advice; error rates with wrong advice | No |
| Critical thinking and metacognition | Purposeful, self-regulatory judgement (Facione); monitoring and controlling one's own thinking | Skills vs dispositions; monitoring (confidence, calibration) vs control (including when to offload) | HCTA; Need for Cognition; calibration scores | No (AI studies use self-report) |
| Trust, reliance, dependence | Trust is an attitude; reliance a behaviour ([Lee & See 2004](https://doi.org/10.1518/hfes.46.1.50_30392)); dependence a habit, sometimes rational (epistemic dependence on experts), sometimes problematic | Use, misuse (over-reliance), disuse, abuse; appropriate reliance ([Schemmer et al. 2023](https://arxiv.org/abs/2302.02187)) | Trust scales (Jian; TiA); appropriate-reliance ratios; DIA, GAIDS, PCGUS dependence scales | Dependence scales yes, but not checked against behaviour |
| Self-efficacy | Belief in one's ability to do what a goal needs (Bandura) | Efficacy *at using AI* vs efficacy *at the task without AI* (rarely measured) | General Self-Efficacy; AISES; MAILS | For AI use only |
| Sense of agency and ownership | The experience of controlling one's actions and their effects | Feeling vs judgement of agency; ownership of outputs | Intentional binding (lab); Sense of Agency Scale ([Tapal et al. 2017](https://doi.org/10.3389/fpsyg.2017.01552)); ownership items | No |
| Beliefs and attitudes | Evaluations of AI, and beliefs or values shaped by AI | Cognitive, affective, behavioural; belief accuracy; value judgements handed to AI | GAAIS; ATTARI-12; AI anxiety; before/after belief ratings | Attitude scales yes; belief change by design |
| Reversibility and lock-in | Whether people or institutions could go back to working without AI at acceptable cost | Exposure → erosion → lock-in ([Chooi, Lee & Li 2026](https://aclanthology.org/2026.evaleval-1.36/)) | Withdrawal or outage arms; retention intervals | No |

### 2.3 How they connect

Each arrow gives the mechanism, then the strength of evidence.

1. **Trust → reliance.** Trust stands in for checking. *Strong in the lab, moderate in the field* (Lee & See; decades of automation studies).
2. **Calibration decides whether reliance is appropriate.** Plain explanations often *raise* over-reliance; contrastive or confidence-matched ones can lower it. *Moderate, mixed* ([Bansal 2021](https://arxiv.org/abs/2006.14779); [Steyvers 2025](https://doi.org/10.1038/s42256-024-00976-7); [Buçinca 2025](https://arxiv.org/abs/2410.04253)).
3. **Reliance → offloading → less practice.** *Strong for memory in the lab, thin for complex skills* ([Risko & Gilbert 2016](https://doi.org/10.1016/j.tics.2016.07.002); [Grinschgl 2021](https://doi.org/10.1177/17470218211008060)).
4. **Less practice → skills decay or are never learned.** *Moderate, short-term, mixed in medicine* (Bastani; Shen & Tamkin; Budzyń vs Okumura; aviation: [Casner 2014](https://doi.org/10.1177/0018720814535628), [Haslbeck 2016](https://doi.org/10.1177/0018720816640394)).
5. **Skill loss → more dependence.** Less ability without the tool means more use of it. *Weak; the loop is mostly theory.*
6. **Dependence plus organisational change → lock-in.** Training, staff and fallback processes are removed. *Weak: theory and case studies* ([Rinta-Kahila et al. 2023](https://aisel.aisnet.org/jais/vol24/iss5/2); [Kulveit et al. 2025](https://arxiv.org/abs/2501.16946); Chooi et al.).
7. **More automation → less awareness → poorer take-over.** *Strong in aviation and driving, untested for LLMs* ([Bainbridge 1983](https://doi.org/10.1016/0005-1098(83)90046-8); [Endsley 2017](https://doi.org/10.1518/001872095779064555)).
8. **Offloading → inflated sense of one's own ability.** Felt and actual capability drift apart. *Moderate* (Fernandes; Becker/METR; [Perry et al. 2023](https://arxiv.org/abs/2211.03622)).
9. **Confidence in AI → less critical-thinking effort; self-confidence → more.** *Weak to moderate; cross-sectional self-report* ([Lee et al. 2025](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/)).
10. **AI authorship → lower ownership and sense of agency.** *Moderate; small samples* ([Draxler et al. 2024](https://doi.org/10.1145/3637875); [Kadoma et al. 2024](https://arxiv.org/abs/2309.11599); Kosmyna).
11. **AI outputs → beliefs and values → authenticity of preferences.** *Moderate for belief change (single sessions with follow-ups); untested for value authenticity over time* (Costello; Jakesch; Sharma).
12. **Handing over decisions → less exercise of agency → loss of capacity.** *Theory only* (Prunkl; Laitinen & Sahlgren).
13. **Group level: individual gains → collective narrowing.** *Moderate and replicated in the lab; thin in the field* (Holzner; [Doshi & Hauser 2024](https://doi.org/10.1126/sciadv.adn5290); [Hao et al. 2026](https://arxiv.org/abs/2412.07727)).

### 2.4 Where the literature disagrees

- **Extension or atrophy?** One view holds that a reliable tool becomes part of the mind (Clark & Chalmers), the other that offloading costs memory and skill. The dispute turns on whether the tool stays available, which is the reversibility question.
- **Augmentation or deskilling?** Gains with AI are robust. Losses without AI are mixed, and outage data show some gains persisting.
- **Perceived or actual?** Claims of critical-thinking decline rest on self-report. Performance studies show self-report and tested ability diverge.
- **Rational trust or pathology?** Relying on sources you cannot check is normal (Hardwig). Addiction-style dependence scales risk treating ordinary use as a disorder.

## 3. What has been studied

### 3.1 Individual: skills, learning and expertise

**Message:** whether AI helps or harms learning depends on whether it does the work or explains it, and almost nobody checks what lasts.

- **Learning with AI, tested without it.** This is the strongest cluster. Answer-giving AI lowered later unaided scores (Bastani; Shen & Tamkin). Tutor-style or explanatory AI did not, and sometimes helped (Bastani's tutor arm; Lira; Kumar 2023; [Kazemitabaar et al. 2023](https://arxiv.org/abs/2302.07427)).
- **Tutoring trials at scale.** Positive results: Nigeria +0.31 SD in 6 weeks ([De Simone et al. 2025](https://openknowledge.worldbank.org/entities/publication/15e1ff08-15ae-4f7a-b2a8-d146e6c113ee)); Ghana over 8 months ([Henkel et al. 2024](https://arxiv.org/abs/2402.09809)); Harvard physics on immediate quizzes ([Kestin et al. 2025](https://doi.org/10.1038/s41598-025-97652-6)). None tests students after the tutor is removed.
- **Shallower processing.** Learning from LLM summaries left shallower knowledge than web search ([Melumad & Yun 2025](https://academic.oup.com/pnasnexus/article/4/10/pgaf316/8303888), n = 10,462). Lower EEG engagement, ownership and recall when writing with ChatGPT (Kosmyna; small, and its methods are disputed).
- **Population-level signal.** On an online maths platform, proctored retention on AI-susceptible word problems fell by a cumulative 25% in odds after ChatGPT ([Rismanchian et al. 2026](https://arxiv.org/abs/2605.21629); preprint, 3.2 million interactions, not the same people).
- **Expert deskilling.** Budzyń (decline) vs Okumura (no decline over 3 years); two reviews call the evidence "limited" or "scarce".
- **Workplaces.** Call-centre agents partly kept AI-taught gains during outages. Consultants were 19 points worse on a task beyond the AI's frontier ([Dell'Acqua et al. 2023](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321)). AI narrowed skill gaps in some studies and widened them in others.
- **Learning from superhuman AI.** Professional Go players' unaided play improved after AlphaGo ([Shin et al. 2023](https://doi.org/10.1073/pnas.2214840120)); chess players improved after access to engines ([Gaessler & Piezunka 2023](https://doi.org/10.1002/smj.3512)).
- **Foundations.** GPS use and spatial memory: 13 people re-tested 3.2 years apart ([Dahmani & Bohbot 2020](https://doi.org/10.1038/s41598-020-62877-0)). Pilots' cognitive flying skills fade before stick-and-rudder skills (Casner; Haslbeck). Skill decay grows with time since practice (Arthur et al.).

### 3.2 Individual: judgement, decisions and reliance

**Message:** people follow wrong AI advice readily, and human-plus-AI rarely beats AI alone.

- **Planted-error studies** consistently show over-reliance:
  - Mammography accuracy fell from about 80% to under 20% for inexperienced readers when the AI was wrong ([Dratsch et al. 2023](https://doi.org/10.1148/radiol.222176)).
  - People followed race-biased hiring picks in up to 90% of choices ([Wilson et al. 2025](https://arxiv.org/abs/2509.04404)).
  - LLM search and fact-checking show the same pattern ([Spatharioti et al. 2025](https://arxiv.org/abs/2307.03744); [DeVerna et al. 2024](https://doi.org/10.1073/pnas.2322823121)).
- **Combined performance.**
  - GPT-4 did not improve physicians' diagnoses (76% vs 74%), while GPT-4 alone scored 92% ([Goh et al. 2024](https://doi.org/10.1001/jamanetworkopen.2024.40969)).
  - Members of the public using LLMs found the right condition in under 34.5% of cases, against 94.9% for the LLM alone ([Bean et al. 2026](https://doi.org/10.1038/s41591-025-04074-y)).
  - Exception: management reasoning improved with GPT-4 ([Goh et al. 2025](https://doi.org/10.1038/s41591-024-03456-y)).
- **Experts mis-weight AI in both directions.**
  - Radiologists under-weighted AI ([Agarwal et al. 2023](https://www.nber.org/papers/w31422)).
  - About 90% of bail judges did worse than the algorithm when they overrode it ([Angelova et al. 2023](https://www.nber.org/papers/w31747)).
- **What helps:** cognitive forcing ([Buçinca 2021](https://arxiv.org/abs/2102.09692)), first-person uncertainty phrases ([Kim et al. 2024](https://arxiv.org/abs/2405.00623)), contrastive explanations, and reliability cues.
- **Moral advice.** People's moral judgements moved with ChatGPT's advice, and most denied it had swayed them ([Krügel et al. 2023](https://doi.org/10.1038/s41598-023-31341-0)).

### 3.3 Individual: critical thinking, metacognition, and felt vs actual ability

**Message:** the "AI erodes critical thinking" claim rests on self-report; tested evidence shows a confidence gap rather than a measured decline.

- **Self-report surveys.**
  - Confidence in AI went with less critical-thinking effort; self-confidence with more ([Lee et al. 2025](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/), 319 knowledge workers).
  - AI use correlated r = −0.68 with critical thinking ([Gerlich 2025](https://www.mdpi.com/2075-4698/15/1/6)). Cross-sectional, so cause is unclear.
- **Lab studies.**
  - ChatGPT users reasoned more shallowly than Google users ([Stadler et al. 2024](https://doi.org/10.1016/j.chb.2024.108386)).
  - Better essays but no gain in knowledge ([Fan et al. 2025](https://doi.org/10.1111/bjet.13544)).
- **Overconfidence.**
  - ChatGPT raised LSAT scores by about 3.5 points of 20, but users overestimated by about 4, and the usual pattern of weaker people overrating themselves vanished (Fernandes).
  - AI users wrote less secure code but believed it more secure (Perry).
  - Developers felt faster while slower (Becker).
- **Gap:** none found that tests critical thinking (not self-report) in the same people over time.

### 3.4 Individual: beliefs, attitudes and autonomy

**Message:** AI persuades as well as or better than people, the effects persist for weeks, and people often don't notice.

- **Conversational persuasion.**
  - Conspiracy belief down about 20% at 2 months (Costello).
  - Post-training and prompting matter more than model size or personalisation; 36–42% of the effect remained after a month ([Hackenburg et al. 2025](https://doi.org/10.1126/science.aea3884)).
  - Candidate-preference shifts larger than typical video ads in three national elections ([Lin et al. 2025](https://doi.org/10.1038/s41586-025-09771-9)).
  - Moral-judgement shifts *grew* by two weeks (Teng et al. 2026, n = 53).
- **Latent persuasion.** Opinionated writing assistants shift what people write and then believe; warnings did not help (Jakesch; Williams-Ceci). AI suggestions pull Indian writers toward Western styles ([Agarwal, Naaman & Vashistha 2025](https://arxiv.org/abs/2409.11360)).
- **Sycophancy and false memory.**
  - Sycophantic AI made people surer they were right and less willing to make amends, yet more likely to return (Cheng et al.).
  - Chatbots asking leading questions tripled false memories, which lasted a week ([Chan et al. 2024](https://arxiv.org/abs/2408.04681)).
- **Delusions.** "AI psychosis" evidence is still case reports and self-selected surveys ([Morrin et al. 2026](https://arxiv.org/abs/2609.08027)).
- **Autonomy proper is thinly studied.** No validated measure of authentic preference or decisional autonomy under AI advice was found. Self-determination-theory studies and patient-autonomy studies were not swept (search limit).

### 3.5 Individual: creativity, ownership and sense of agency

**Message:** people feel less ownership of AI-assisted work, and their ideas converge.

- **Creativity: better for each person, less varied across people.**
  - AI ideas raised individual story novelty by 8.1% but made stories more alike (Doshi & Hauser).
  - The meta-analysis: +0.27 creativity, −0.86 diversity (Holzner).
  - Unaided creativity minutes after AI help was worse in some groups ([Kumar, Vincentius, Jordan & Anderson 2025](https://arxiv.org/abs/2410.03703)).
- **Ownership.**
  - People don't feel they own AI-written text, but still don't disclose the AI's role (Draxler, the "AI ghostwriter effect").
  - Accepting more suggestions lowers felt control (Kadoma).
  - Interface design can restore ownership ([Lou et al. 2025](https://arxiv.org/abs/2509.16128)).
- **Gap:** none found that follows ownership or felt agency over months, or tests whether it recovers after people stop using AI.

### 3.6 Individual: dependence and emotional reliance

**Message:** dependence is measured by many new scales, all one-off, none tied to behaviour; emotional reliance is concentrated in a small group of heavy users.

- **Dependence scales.** At least eight since 2024 (Peru, Korea, China, US/Singapore, Germany, Colombia), mostly adapted from social-media addiction scales. The most thoroughly tested is GAIDS ([Goh, Hartanto & Majeed 2025](https://doaj.org/article/4721100d53604c7b89a03dd74ebb97f6)). None has a validated cut-off.
- **Student panels.**
  - Short (4 weeks to 10 months), self-report, mostly China.
  - Dependence and answer-seeking predict lower later self-efficacy ([AERA 2026 PhD panel](https://convention2.allacademic.com/one/aera/aera26/online_program_direct_link/view_paper/2272806/); [Abbas et al. 2024](https://doi.org/10.1186/s41239-024-00444-7)). Learning-focused use predicts higher self-efficacy ([Zhao et al. 2026](https://doi.org/10.3389/fpsyg.2026.1878514)).
  - In adolescents, poor mental health predicted later dependence, not the reverse ([Huang et al. 2024](https://doi.org/10.2147/PRBM.S440889)).
- **Usage logs show rising delegation.**
  - Full-delegation conversations on Claude rose from 27% to 39% in eight months ([Anthropic Economic Index](https://www.anthropic.com/research/anthropic-economic-index-september-2025-report)).
  - Full auto-approve rose from about 20% to over 40% of sessions as Claude Code users gained experience ([Anthropic 2026](https://www.anthropic.com/research/measuring-agent-autonomy)).
  - Users checked facts in 8.7% of conversations ([AI Fluency Index](https://academy.claude.com/tutorials/the-ai-fluency-index)).
  - These track conversations, not people.
- **Emotional reliance.**
  - A 4-week randomised trial found no effect of the assigned condition, but heavier voluntary use went with more loneliness and emotional dependence ([Fang et al. 2025](https://arxiv.org/abs/2503.17473); [Phang et al. 2025](https://cdn.openai.com/papers/15987609-5f71-433c-9972-e91131f399a1/openai-affective-use-study.pdf)).
  - Companion apps use manipulative goodbyes that raise engagement up to 14-fold ([De Freitas et al. 2025](https://arxiv.org/abs/2508.19258)).
  - When Replika removed a feature, users grieved ([De Freitas et al. 2024](https://arxiv.org/abs/2412.14190)).

### 3.7 Group and team

**Message:** AI raises individual output but narrows collective variety and public knowledge-sharing; nobody follows teams over time.

- **AI as teammate.**
  - At P&G, one person with GPT-4 matched a two-person team and worked less in silos ([Dell'Acqua et al. 2026](https://doi.org/10.1287/orsc.2025.20702)).
  - Across 106 experiments, human-AI pairs lost to the best single performer on decisions (Vaccaro).
  - An LLM facilitator raised information sharing without improving decisions ([Alsobay et al. 2025](https://arxiv.org/abs/2508.08242)).
- **Homogenisation.**
  - Replicated across studies (Doshi & Hauser; [Meincke et al. 2025](https://www.nature.com/articles/s41562-025-02173-x); [Anderson et al. 2024](https://doi.org/10.1145/3635636.3656204); [Padmakumar & He 2024](https://arxiv.org/abs/2309.05196)).
  - Different LLMs give near-identical answers ([Jiang et al. 2025](https://arxiv.org/abs/2510.22954)).
  - Exception: exposure to AI ideas raised collective diversity in one design ([Ashkinaze et al. 2024](https://arxiv.org/abs/2401.13481)).
- **Language and commons.**
  - ChatGPT-favoured words rose in unscripted speech ([Yakura et al. 2024](https://arxiv.org/abs/2409.01754)).
  - Stack Overflow posting fell about 25%, with newer users leaving ([Burtch et al. 2024](https://doi.org/10.1038/s41598-024-61221-0)).
  - Over 5% of new English Wikipedia articles were flagged as AI-written ([Brooks et al. 2024](https://arxiv.org/abs/2410.08044)).
- **Apprenticeship.**
  - Foundation: robotic surgery pushed trainees out of hands-on work, and most fell back on "shadow learning" ([Beane 2019](https://doi.org/10.1177/0001839217751692)).
  - LLM-era evidence is thin and qualitative (Kellogg et al. 2024).
- **Deliberation.**
  - An AI mediator's group statements were preferred to human mediators' versions and reduced division ([Tessler et al. 2024](https://doi.org/10.1126/science.adq2852)).
  - LLM rephrasing improved conversation quality without changing attitudes ([Argyle et al. 2023](https://doi.org/10.1073/pnas.2311627120)).
- **Science.** AI-using scientists gained citations while science's range of topics narrowed (Hao et al.; mostly pre-LLM AI).

### 3.8 Institutions

**Message:** junior pipelines and human oversight are the two live issues; neither is measured as capability over time.

- **Organisational skill erosion is documented only in case studies, all from before generative AI.**
  - Years of reliance on accounting automation eroded staff expertise unnoticed (Rinta-Kahila).
  - Bankers used algorithms they did not understand, which held back juniors ([Anthony 2021](https://doi.org/10.1177/00018392211016755)).
  - Radiology departments differed in whether they folded AI into judgement ([Lebovitz et al. 2022](https://doi.org/10.1287/orsc.2021.1549)).
- **Expertise pipeline.**
  - Junior employment is falling in AI-exposed jobs (Canaries) and in firms adopting AI ([Lichtinger & Hosseini Maasoum 2025](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5425555)).
  - Denmark shows no effect on earnings or hours ([Humlum & Vestergaard 2025](https://www.nber.org/papers/w33777)).
  - A model shows automation can slow knowledge transfer even if junior jobs survive ([Ide 2025](https://arxiv.org/abs/2507.16078)).
  - No study follows juniors' skills.
- **Human oversight.**
  - Judges' departures from a risk tool cancelled its benefit ([Stevenson & Doleac 2022](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3489440)).
  - Screeners corrected wrong scores ([De-Arteaga et al. 2020](https://doi.org/10.1145/3313831.3376638)).
  - Officials follow advice that matches stereotypes ([Alon-Barkat & Busuioc 2023](https://doi.org/10.1093/jopart/muac007)) or their own prior view ([Selten et al. 2023](https://doi.org/10.1111/puar.13602)).
  - Clinicians override 46–96% of safety alerts ([Poly et al. 2020](https://doi.org/10.2196/15653)).
  - A review of 41 policies concludes people cannot do the oversight those policies assume ([Green 2022](https://doi.org/10.1016/j.clsr.2022.105681)).
- **Structural agency.** A formal model frames AI's erosion of agency as changes in which groups can decide outcomes: humans removed from decisions, AI gaining decisive power, and AI shaping which options reach people. It proposes tracking who is in the smallest group that can decide, and keeping the capacity to reverse ([Moon & Boudreaux, RAND 2026](https://www.rand.org/pubs/research_reports/RRA4817-1.html)). No study applying these metrics to real institutions was found.
- **Counting.**
  - Governments count AI tools, not decisions: US federal use cases rose from 710 to 3,611 ([OMB](https://github.com/ombegov/2025-Federal-Agency-AI-Use-Case-Inventory)).
  - Only the EU DSA database counts decisions, for platforms ([EU DSA](https://transparency.dsa.ec.europa.eu/)).
- **Regulators.**
  - Aviation is the only domain found that moved from warning to audit ([FAA 2013](https://www.faa.gov/sites/faa.gov/files/other_visit/aviation_industry/airline_operators/airline_safety/SAFO13002.pdf)).
  - The 2016 audit found the FAA still could not tell how often pilots fly by hand.
- **Knowledge institutions.**
  - 6.5–16.9% of AI-conference peer-review text was substantially LLM-modified ([Liang et al. 2024](https://arxiv.org/abs/2403.07183)).
  - AI-assisted reviews raised acceptance odds ([Latona et al. 2024](https://arxiv.org/abs/2405.02150)).
  - At least 13.5% of 2024 biomedical abstracts were LLM-processed ([Kobak et al. 2025](https://doi.org/10.1126/sciadv.adt3813)).
  - Courts have issued over 2,000 decisions on AI-hallucinated filings ([Charlotin database](https://www.damiencharlotin.com/hallucinations/)).

### 3.9 Model side: evals and benchmarks

**Message:** evals measure what models do, rarely what happens to people; where both were measured, they don't line up.

- **Agency support.**
  - Models scored low to moderate on six agency-supporting behaviours, with no improvement as capability rose ([HumanAgencyBench](https://arxiv.org/abs/2509.08494)).
  - Severe disempowerment potential appears in fewer than 1 in 1,000 real Claude conversations, more often in relationship and lifestyle topics. It rose over time, and users rated such conversations more highly (Sharma et al.).
- **Sycophancy** is the largest cluster. Models give way to pushback about half the time ([SycEval](https://doi.org/10.1609/aies.v8i1.36598); [FlipFlop](https://arxiv.org/abs/2311.08596)) and validate users far more than humans do ([ELEPHANT](https://arxiv.org/abs/2505.13995)).
- **Delusion reinforcement** grew as a topic after the April 2025 GPT-4o rollback ([OpenAI postmortem](https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/)); every model family tested reinforces delusions at meaningful rates, more in long chats ([Kirgis et al. 2026](https://arxiv.org/abs/2604.06188)).
- **Manipulation.** Persuasion evals are mostly capability tests. Manipulation frequency did not predict belief change (Akbulut).
- **Emotional reliance.** Companionship-reinforcing replies outnumber boundary-setting ones ([INTIMA](https://arxiv.org/abs/2508.09998)).
- **Tutoring.** Solving is not teaching, and models give away answers readily ([MRBench](https://arxiv.org/abs/2412.09416); [answer-leakage tests](https://arxiv.org/abs/2604.18660)). All tutoring evals use expert ratings, not later learner performance.
- **Linked to people (rare):**
  - Cheng et al. (sycophancy → certainty and repair).
  - Akbulut (manipulation → belief change; no link).
  - Bean (benchmark accuracy did not transfer to users).
  - Durmus at Anthropic (automated persuasion scores predicted opinion shift poorly).
  - Calibration studies (uncertainty wording changes reliance).
  - Almost all single-session.

## 4. Where the evidence is thick and thin

Counts of empirical studies found (319; theory and reviews excluded), by construct. A study can count under several constructs. Cell colour in the last five columns: **red** = none found; **amber** = 1–3 studies; **light green** = 4–9; **green** = 10 or more.

*(The table of study counts by construct is not reproduced in this Markdown copy. It can be rebuilt from `master.json`, which codes each study's constructs.)*

**Reading the table:**

- **Thick:** reliance and decision quality in single sessions; beliefs and persuasion; self-reported dependence and wellbeing.
- **Thin:** anything measured without AI over time. Self-efficacy, sense of agency and autonomy have almost no tested (as opposed to self-reported) evidence and no repeated measures.
- **Group and institutional rows** are dominated by employment panels, community time series and case studies. None tests capability.
- **Model-side work** clusters on beliefs (persuasion, sycophancy) and emotional reliance, and is almost absent for skills and learning outcomes.

## 5. Studies that follow people over time or take AI away

**Message:** the longest same-people evidence on unaided skill (3 years) comes from colonoscopy AI and GPS, not LLMs. For generative AI, the longest is about 4 months (n = 18), and every withdrawal test is a single check.

*(The table of studies that follow people over time or take AI away is not reproduced here. In `master.json`, see the fields `same_people_repeated`, `unaided_test` and `reversibility`.)*

## 6. The gaps, exactly

Ordered by how central they are to the question "are people losing skills, judgement or say, and could they get them back?"

### A. Time: change in the same people

1. No study found that re-tests the same generative-AI users' unaided skills at intervals beyond about 4 months while recording their AI use. The 3-year evidence is from image-recognition AI (Okumura) and GPS (Dahmani).
2. No study found that follows the same people's *judgement* (accepting good advice, rejecting bad) over time.
3. No tutoring trial found that tests students months after the tutor is removed. None follows LLM-trained novices into practice ("never-skilling").
4. No study found that tracks attitudes, ownership, creativity or felt agency over months of everyday, self-chosen AI use.
5. No dependence panel found in adults. The only repeated dependence measures are a pre-ChatGPT adolescent panel (Huang) and one PhD panel (AERA 2026).

### B. Reversibility: getting it back

6. No study found that measures how long performance takes to recover once AI is removed ("take-back time"). Every withdrawal test is one check, minutes to weeks later.
7. No randomised AI-on/AI-off crossover in clinicians or other professionals.
8. No study found of lock-in: organisations losing fallback processes, staff or training, or the cost of switching back.
9. No study found of what happens to users after a harmful model change is rolled back (e.g. the GPT-4o sycophancy update).

### C. Measurement: no valid instrument

10. No validated, AI-specific measure of agency *capacity*; Pew's control item is a single question.
11. Dependence scales are not checked against behaviour or unaided ability, and none has a cut-off or a representative sample.
12. Critical thinking with AI is measured by self-report only; no performance test of checking AI output was found.
13. Felt and actual ability are rarely measured in the same people, though the few studies that do show them diverging.
14. No AI-specific sense-of-agency scale; intentional binding is lab-only.

### D. Linkage: evidence that doesn't connect

15. No model-side benchmark (agency, sycophancy, delusion, tutoring, reliance) found that is validated against measured change in the same users.
16. Provider logs track conversations, not people. No public per-person trajectory of delegation, checking or overrides, and no independent audit of production traffic.
17. No study found that links real usage logs to the same people's tested ability.

### E. Levels: group and institution

18. No study found that follows the same teams for months to see whether members' own expertise erodes, or that measures junior-to-senior help-seeking before and after LLM adoption.
19. No panel of organisations found that tests their ability to work without AI before and after adoption, or how fast it recovers.
20. No government found that publishes how often officials override AI-assisted decisions. No field study of human oversight of LLM tools in a real public agency. No eval found that measures AI's structural effect on collective decisions (who remains decisive, and which options reach people), as proposed by [Moon & Boudreaux (RAND 2026)](https://www.rand.org/pubs/research_reports/RRA4817-1.html).
21. No study found that links firms' AI adoption to juniors' later skills or promotion; studies stop at hiring.

### F. Who is studied

22. Mostly US and UK, English-language, students and online panels. Few non-Western samples (the DeepMind study found India diverged from the UK and US). Few professions beyond medicine and coding: no later no-AI test found for translators, designers, accountants or analysts.

### G. Open disputes worth settling

- Expert deskilling: Poland vs Japan.
- Help vs harm by use type: answer-giving vs tutoring.
- How long homogenisation and persuasion last.
- Causal direction in dependence: does dependence harm wellbeing, or do people who are struggling become dependent?

### Not swept (search limit)

Self-determination-theory studies of AI use; patients' decisional autonomy with clinical AI; translators and designers; radiology, pathology, dermatology and ECG training; legal RCTs; ICAO and maritime guidance; medical-college and law-society rules; music and fan-fiction communities; conformity to AI in groups.

## 7. Mapping back to the Observatory

### 7.1 What this changes for each stop

| Stop | Now on the site | What this review adds | Still missing |
|---|---|---|---|
| **Skills and judgement** | Measured: one-offs (level 1). Signal: can't tell. | Use type decides harm; tested overconfidence; a 3-year no-decline audit (Japan) against a short-term decline (Poland); a 25% retention drop on one platform (preprint); planted-error over-reliance across fields | A same-people panel re-testing unaided skill and judgement, linked to AI use |
| **Human influence** | No direct measure (level 0) | Felt agency, ownership and self-efficacy are all one-off self-reports; persuasion lasts weeks; users prefer disempowering replies | A repeated same-people measure of say, paired with tested ability |
| **Institutions** | Measured: paperwork (level 1) | Override studies (mostly pre-LLM); junior hiring declines; peer review and courts already absorbing LLM text | Override rates; organisational capability without AI; LLM oversight in agencies |
| **Hand-over** | Measured with limits (level 3) | Delegation rising in logs (27% → 39%; auto-approve 20% → 40%); fact-checking in 8.7% of chats | Per-person trajectories; a second provider; independent audit |
| **Culture and information** | Level 3 | Homogenisation replicated (g = −0.86); public Q&A shrinking; language convergence | Whether narrowing persists after AI use stops; effect on downstream quality |
| **Entry-level work** | Level 3 | Pipeline evidence (Canaries 19%; Lichtinger) vs Denmark null | Juniors' skills and time-to-competence, not just headcount |

### 7.2 Which gaps to take on

A suggested shortlist, ranked on four tests: closeness to the Observatory's weakest stops, how empty the gap is, whether one team could fill it, and whether results would change decisions.

1. **Same-people re-tests of unaided skill and judgement (gaps 1, 2, 13).** The emptiest and most decisive gap, and the one the Skills stop is waiting on. A short annual battery (unaided tasks, a planted-error judgement task, self-estimates) added to an existing panel would be the first of its kind for generative AI.
2. **Take-back time (gaps 6–7).** Measure recovery directly: in a panel subsample, a short AI-off period with re-tests at set intervals. This turns "reversibility" from a word into a number.
3. **Felt vs actual agency (gaps 10, 11, 13).** Pair the felt measures (control, self-efficacy without AI, dependence) with tested ability in the same people. The gap between them is itself an indicator, and it validates the dependence scales against behaviour.
4. **Second tier, better done with partners:**
   - linking model-side evals to user outcomes (gap 15; with labs, via consented log donation);
   - institutional override rates (gap 20; via freedom-of-information requests and registers);
   - junior time-to-competence (gap 21; with professional bodies).

Gaps 1–3 can share one instrument and one sample, so they are one project, not three.

### 7.3 Candidate indicators

| # | Indicator | Construct | Level | How measured | Build on | Priority |
|---|---|---|---|---|---|---|
| 1 | **Unaided ability gap:** change in AI-off task scores, heavy vs light AI users, same people | B2, B4 | Individual | Annual AI-off tasks (writing, numeracy, reasoning, domain items), with AI use recorded | Bastani/Shen-style tests; PIAAC items; NEPS competence tests | Core |
| 2 | **Take-back time:** how fast unaided performance recovers after an AI-off period | B4, reversibility | Individual | Panel subsample: AI-off week; re-tests at days 1, 7, 28 | Darvishi; outage designs | Core |
| 3 | **Appropriate reliance:** share of correct AI advice accepted and wrong advice rejected | C1, C3 | Individual | Planted-error decision task, yearly | Schemmer RAIR/RSR; Dratsch, Qazi designs | Core |
| 4 | **Calibration gap:** self-estimated minus actual unaided score | A3, C1 | Individual | Self-estimate before scoring, same tasks as indicator 1 | Fernandes; METR forecasts | Core |
| 5 | **Delegation share:** tasks people would not do, or could not do, without AI | A2 | Individual | Self-report across life and work domains, plus donated logs where consented | METR withheld tasks; Economic Index; Human Agency Scale | Core |
| 6 | **Felt control and self-efficacy without AI** | A3 | Individual | Pew AI-control items plus task-specific self-efficacy items | Pew AICONTROL; GSE | Core |
| 7 | **Behaviour-checked dependence score** | Dependence | Individual | Short scale (GAIDS or DIA) validated against indicators 1–3 | GAIDS; DIA | Supporting |
| 8 | **Value-judgement outsourcing:** share of personal decisions where AI's view was decisive | A1 | Individual | Self-report vignettes plus log classifiers where available | Sharma et al. distortion types | Exploratory |
| 9 | **Override and human-review rate** for AI-assisted public decisions | C3 | Institutional | Freedom-of-information requests; registers; DSA-style counts | EU DSA database; Angelova-style analyses | Watch |
| 10 | **Junior time-to-competence** in AI-adopting organisations | Expertise pipeline | Institutional | Professional-body data; exam pass rates; supervised hours | Beane; Canaries | Watch |
| 11 | **Collective idea diversity:** semantic spread of answers to a fixed creative prompt, yearly | Creativity/diversity | Group | Same prompt each wave, AI-off, embedding diversity | Doshi & Hauser; Meincke | Watch |
| 12 | **Benchmark-to-person link:** whether agency or sycophancy benchmark scores predict users' outcomes | Linkage | Model ↔ individual | Partner lab study: users randomised to models with different scores | HumanAgencyBench; ELEPHANT; Cheng design | Partner |

### 7.4 Decisions for you

- **Focus.** Gaps 1–3 as one project (recommended), or a narrower start on judgement only (indicators 3 and 4 are the cheapest to run online).
- **Population.** A general adult panel (comparable with Pew; broad but shallow), or one profession (deep, and closer to Budzyń/Okumura). Students are the most-studied group and the least needed.
- **Country and host panel.** The Netherlands (AlgoSoc/LISS), Finland (WorkAI), Germany (NEPS), the US (UAS), or Singapore.
- **Which construct leads the pitch.** Skills (most evidence to build on) or agency (biggest measurement hole).

## 8. Measures you can reuse

*(The list of reusable measures is in `instruments.json`.)*

## Appendix: study database

All 361 studies, grouped by the pass that found them (a study found by several passes appears once, under the first). **Span** is how long the same people were followed; "1 session" means a single sitting. **✓** means checked at source this session. Columns: level (I = individual, G = group, Inst = institutional), design, measure, span, finding.

*(The full study database is `master.json` in this folder.)*
