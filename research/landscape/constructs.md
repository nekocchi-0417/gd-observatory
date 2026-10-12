# Constructs: concept map and measures

Pass: `constructs`. Companion file: `constructs.jsonl` holds 98 entries (55 instruments, 43 frameworks). Each entry has `kind`, `ai_use` and `longitudinal_use` fields.
- **Checked at source this session:** 35 entries.
- **Not checked:** Bandura, Arthur et al. 1998, Sutton et al. 2018, AISES, MAILS, SNAIL, GAAIS, Jian et al. 2000. Their pages blocked or rate-limited the fetch, and the shared search budget ran out mid-pass.

---

## 1. The constructs

**1.1 Human agency**
- **Definition:** the capacity to make things happen on purpose through one's own actions (Bandura 2001/2006). Sen (1985) defines agency as freedom to pursue goals one values, kept separate from wellbeing; Chooi, Lee & Li (2026) build on Sen.
- **Parts:**
  - Bandura's four properties: *intentionality*, *forethought*, *self-reactiveness* (self-regulation) and *self-reflectiveness*.
  - Bandura's three modes: *personal*, *proxy* (acting through others who have the means) and *collective*. AI use is a form of proxy agency.
  - Emirbayer & Mische (1998) add three elements: habit (*iterational*), imagining futures (*projective*) and judging in the moment (*practical-evaluative*).
- **AI-specific framings:**
  - Stanford Human Agency Scale (Shao et al. 2025) runs from H1, "AI agent handles the task entirely on its own", to H5, "cannot function without continuous human involvement". H3 (equal partnership) was the level workers most often wanted (47 of 104 occupations).
  - HumanAgencyBench (Sturgeon et al. 2025) scores models on six behaviours: ask clarifying questions, avoid value manipulation, correct misinformation, defer important decisions, encourage learning, maintain social boundaries.
  - "Who's in Charge?" (Sharma et al. 2026) names three distortion potentials (reality, value judgement, action). It adds four amplifiers: authority projection, attachment, reliance & dependency, and vulnerability.
- **Measures:** no validated "agency with AI" scale was found. Proxies: Pew AICONTROL, ESS/ANES efficacy, OPHI agency indicators. HAS measures preference, not capacity.

**1.2 Autonomy**
- **Definition:** "a person's effective capacity for self-governance": acting on values and reasons that are one's own (Prunkl 2022).
- **Parts:**
  - Prunkl's two dimensions. *Authenticity*: are the values one's own? Manipulation, deception and adaptive preferences threaten it. *Agency*: can the person act on them? Lost options, lost competence and paternalism threaten it.
  - Laitinen & Sahlgren (2021) list six aspects: capacities, exercise, recognition, self-respect, others' duties and external resources.
  - Philosophy distinguishes *procedural* autonomy (right way of endorsing), *substantive* autonomy (limits on what is chosen) and *relational* autonomy (built through relationships; Mackenzie & Stoljar 2000).
  - SDT treats autonomy as behaviour that feels self-endorsed.
- **Measures:** BPNSFS (24 items: need satisfaction and frustration), Index of Autonomous Functioning (authorship, interest-taking, low susceptibility to control), Relative Autonomy Index. None is AI-specific.

**1.3 Skills**
- **Definition (working):** a learned ability to do a task to a standard. In this review, skill means what a person can do **without** AI.
- **Parts:**
  - Three kinds: declarative, procedural and tacit.
  - Dreyfus stages: novice, advanced beginner, competent, proficient, expert.
  - Decay with non-use (Arthur et al. 1998).
  - Cognitive skills decay before motor ones. In Casner et al. (2014), pilots' hand-flying stayed "mostly intact", while position-tracking and spotting failures degraded.
- **Measures:** unaided tests (an AI-off study arm), PIAAC (literacy, numeracy, problem solving), and outage or withdrawal tests. The gold standard is a study design, not a scale.

**1.4 Expertise**
- **Definition:** consistently better performance on a domain's typical tasks, built through long deliberate practice (Ericsson et al. 1993).
- **Parts:**
  - Collins & Evans (2002) separate *contributory* expertise (can do the work) from *interactional* expertise (can talk the language). AI may keep the second while the first erodes.
  - Deskilling theory: Braverman (1974); Sutton, Arnold & Holt (2018), who describe a "deskilling paradox" in accounting (not re-checked); Rinta-Kahila et al. (2023), who describe "vicious circles" of skill erosion.
  - The pipeline problem: juniors lose the routine tasks that used to train them.
- **Measures:** accuracy without AI in each domain. No general instrument.

**1.5 Judgement and decision-making**
- **Definition:** choosing under uncertainty with limited time, information and computation; people "satisfice" (Simon 1955).
- **Parts:**
  - Dual-process theory: fast/intuitive versus slow/reflective thinking (Evans & Stanovich 2013).
  - Four stages that can each be automated to a different degree: information acquisition, analysis, decision selection and action (Parasuraman, Sheridan & Wickens 2000).
- **Measures:**
  - A-DMC (competence).
  - GDMS, which includes a "dependent" style.
  - Cognitive Reflection Test.
  - Decisional Conflict Scale.
  - Behavioural: weight of advice, switch/agreement fractions, RAIR/RSR, and commission/omission errors.

**1.6 Critical thinking and metacognition**
- **Definition:** critical thinking is "purposeful, self-regulatory judgment" (Facione 1990). Metacognition is "the psychological ability to monitor and control one's thoughts and behavior" (Tankelevitch et al. 2024).
- **Parts:**
  - Critical-thinking skills versus dispositions. CTDS measures critical openness and reflective scepticism.
  - Metacognitive *monitoring* (confidence, calibration) versus *control* (choosing a strategy, including whether to offload).
  - Generative AI adds metacognitive demands: prompting, judging outputs and planning the workflow (Tankelevitch).
- **Measures:** HCTA (skill); CCTDI, CTDS and Need for Cognition (dispositions); MAI; calibration scores (Brier, meta-d′).
- **AI evidence so far** is mostly self-report (Lee et al. 2025; Gerlich 2025, where AI use correlated r = −0.68 with critical thinking).

**1.7 Reliance, dependence and trust**
- **Trust** is an *attitude* that guides reliance when full understanding is impractical (Lee & See 2004).
- **Reliance** is a *behaviour*. Parasuraman & Riley (1997) name four patterns: *use*, *misuse* ("over reliance"), *disuse* (neglect) and *abuse* (automating without regard to people). Schemmer et al. (2023) score *appropriate* reliance with two ratios:
  - **RAIR:** how often people switch to correct AI advice after being wrong.
  - **RSR:** how often people keep a correct answer against wrong AI advice.
- **Dependence** comes in two kinds:
  - *Epistemic*: rationally relying on experts you cannot check (Hardwig 1985).
  - *Habitual or psychological*: preoccupation, negative consequences and withdrawal (Goh et al. 2025).
- **Cognitive offloading:** "the use of physical action to alter the information processing requirements of a task so as to reduce cognitive demand". It is driven by effort and by beliefs about one's own ability, which can be wrong (Risko & Gilbert 2016).
- **Counter-view:** the extended mind. A reliable, trusted tool can count as *part of* cognition (Clark & Chalmers 1998).
- **Measures:**
  - Trust: Jian et al. 2000; Körber TiA; Hoffman XAI Trust.
  - Complacency: CPRS; AICP-R.
  - Dependence: DIA; GAIDS; PCGUS.
  - Behaviour: weight of advice (WoA), RAIR/RSR, usage logs.

**1.8 Self-efficacy**
- **Definition:** belief in one's ability to carry out the actions a goal needs (Bandura 1977).
- **Parts:** level, strength and generality; four sources (mastery, observing others, persuasion, physical state). Two targets need separating:
  - efficacy *at using AI* (AISES, MAILS)
  - efficacy *at the task without AI*, which is rarely measured
- **Measures:** General Self-Efficacy Scale, Computer Self-Efficacy, AISES (not checked at source).

**1.9 Sense of agency and ownership**
- **Definition:** the experience of controlling one's actions and, through them, events.
- **Parts:**
  - Synofzik et al. (2008): a non-conceptual *feeling of agency* versus an explicit *judgement of agency* ("I did this").
  - *Ownership* of one's body, thoughts or outputs.
- **Measures:**
  - Intentional binding: voluntary actions and their outcomes are perceived as closer in time (Haggard et al. 2002). Implicit and lab-only.
  - Sense of Agency Scale (Tapal et al. 2017): 11 items, positive and negative agency, 2-month retest.
  - Ownership items. In Kosmyna et al. (2025), essay ownership was lowest in the LLM group, and LLM users struggled to quote their own essays.

**1.10 Beliefs and attitudes**
- **Definition:** evaluations, here of two kinds: (a) attitudes *toward* AI; (b) beliefs and values *shaped by* AI.
- **Parts:**
  - Cognitive, affective and behavioural components (ATTARI-12).
  - Positive versus negative views (GAAIS).
  - Anxiety (AIAS: learning, job replacement, sociotechnical blindness, configuration).
  - Perceived control (Pew).
  - For (b): belief accuracy, belief change, and handing value judgements to AI (Sharma).
- **Measures:**
  - GAAIS; ATTARI-12 (31-day retest r = 0.80); AIAS-4; UTAUT2.
  - Pew items on AI's effect on people's abilities; pre/post belief ratings.

**1.11 Reversibility and lock-in**
- **Definition (working):** whether people or institutions could go back to working without AI at acceptable cost. *Lock-in* is path dependence: early adoption raises the later cost of switching (Arthur 1989; David 1985).
- **Parts:** Chooi, Lee & Li (2026) describe three layers:
  - *Exposure*: AI distorts judgement or displaces participation.
  - *Erosion*: "Sustained exposure degrades humans' ability to perform tasks without AI assistance".
  - *Lock-in*: the institutional infrastructure "may no longer exist", so reversal "may be prohibitively costly".
- **Related framings:** Kulveit et al. (2025) warn of an "effectively irreversible" loss of influence over the economy, culture and states. Endsley (2017) describes an "automation conundrum": more reliable automation means lower awareness and a harder takeover.
- **Measures:** no instrument found. It is tested only by study design: withdrawal or outage arms, retention intervals, institutional ethnography.

---

## 2. Relationships (A → B: mechanism; evidence; strength)

1. **Trust → reliance.** Trust stands in for understanding. *Evidence:* Lee & See 2004; decades of automation experiments. *Strength:* strong in the lab, moderate in the field.
2. **Trust calibration moderates whether reliance is appropriate.** *Evidence:* Schemmer et al. 2023. Explanations often *raise* over-reliance. *Strength:* moderate, mixed.
3. **Reliance → cognitive offloading → less practice.** *Evidence:* Risko & Gilbert 2016; Grinschgl et al. 2021 (offloading boosts performance but lowers memory). *Strength:* strong for memory in the lab; thin for complex skills.
4. **Less practice → skill decay or failure to learn.** *Strength:* moderate; timespans are short and medicine is mixed. *Evidence:*
   - Arthur et al. 1998.
   - Casner 2014: cognitive skills degrade before motor skills.
   - Shen & Tamkin 2026: AI use impaired conceptual understanding and debugging.
   - Kosmyna 2025: people who moved from LLM to no tool showed under-engagement (n = 18).
   - Budzyń 2025 (decline) against Okumura 2025 (no decline over 3 years).
5. **Skill loss → dependence.** Less ability without the tool means more use of it. *Evidence:* Storm et al. 2017 (using the internet to answer questions raises later internet use; not re-checked). *Strength:* weak to moderate; the loop is mostly theory.
6. **Dependence + organisational change → lock-in.** Training, staffing and workflows get removed. *Evidence:* Chooi et al. 2026; Rinta-Kahila et al. 2023 (case study); Kulveit et al. 2025. *Strength:* weak (theory and cases).
7. **Higher automation → lower situation awareness → poorer takeover.** *Evidence:* Endsley 2017; Bainbridge 1983; Casner 2014. *Strength:* strong in aviation and driving; untested for LLMs.
8. **Offloading → inflated sense of own ability (perceived ≠ actual).** *Evidence:* Fisher et al. 2015; Fernandes et al. 2026 (AI raised LSAT scores, users overestimated by about 4 points, and the usual Dunning–Kruger pattern vanished). *Strength:* moderate.
9. **Confidence in AI → less critical-thinking effort; self-confidence → more.** *Evidence:* Lee et al. 2025 (cross-sectional self-report). *Strength:* weak to moderate.
10. **Automation or AI authorship → lower sense of agency and ownership.** *Evidence:* Berberian et al. 2012 (intentional binding fell as automation rose; not re-checked); Kosmyna 2025; Draxler et al. 2024 (not re-checked). *Strength:* moderate; small samples.
11. **Felt measures ↔ actual capability.** Self-efficacy and sense of agency are the felt side of capability, and the two drift apart (edges 8 and 9). *Strength:* weak; few studies measure both.
12. **AI outputs → beliefs and values → authenticity.** *Evidence:* Sharma et al. 2026: severe reality-distortion potential in about 1 in 1,300 conversations, rising over time, and rated *more* highly by users. Also HumanAgencyBench. *Strength:* moderate, but human outcomes are unmeasured.
13. **Delegating values and actions → less exercise of agency → loss of capacity.** Exercise is part of autonomy (Laitinen & Sahlgren); Prunkl names "loss of competence". *Strength:* theory only.
14. **Attitudes and perceived control → adoption and reliance.** *Evidence:* UTAUT-type surveys. Pew: wanting more control rose from 55% to 61%; whether use changed with it is untested. *Strength:* moderate, for intention to use.

**Where the literature disagrees**
- **Extension or atrophy?** Clark & Chalmers treat a reliable tool as part of the mind; Risko & Gilbert and Grinschgl show memory costs. The dispute turns on whether the tool stays available, which is the reversibility question.
- **Augmentation or deskilling?** Gains with AI are strong. Losses without AI are mixed: Budzyń against Okumura; Brynjolfsson et al. found gains kept during outages.
- **Perceived or actual?** Critical-thinking findings rest on self-report, and performance studies (Fernandes) show the two diverge.
- **Rational trust or pathology?** Hardwig treats epistemic dependence as normal. Addiction-style scales (PCGUS, GAIDS) risk over-pathologising everyday use (Billieux et al. 2015).

---

## 3. Proposed taxonomy for the review

**A. Agency**
- **A1 Capacity:** having one's own values (authenticity), plus the competence and options to act on them.
- **A2 Exercise:** what people actually decide or delegate (HAS level; Sharma's action and value delegation).
- **A3 Felt sense:** sense of agency, ownership, perceived control and self-efficacy.

**B. Skills and expertise**
- **B1 With AI:** assisted performance.
- **B2 Without AI:** unaided performance.
- **B3 Acquisition:** learning while AI is available.
- **B4 Retention and recovery:** what remains, and what returns, after AI is withdrawn.
- Metacognitive calibration links B to A3.

**C. Decision-making**
- **C1 Quality:** accuracy, calibration, diversity.
- **C2 Process:** deliberation, critical thinking, information search.
- **C3 Control:** who decides, and whether reliance is appropriate.

**Mediators:** trust → reliance → dependence; beliefs and attitudes (both input and outcome).

**Cross-cutting:** *time* (reversibility, lock-in) and *level*:

| | Individual | Group / team | Institutional |
|---|---|---|---|
| Agency | perceived control; delegation | team's say over AI use | meaningful human control; ability to run without AI |
| Skills | unaided tests | shared team know-how | training pipeline; junior roles |
| Decisions | accuracy; RAIR/RSR | team decisions with AI | oversight of automated decisions |

## 4. Measurement gaps
- **Agency capacity:** no validated, AI-specific measure separate from attitudes or perceived control. Pew's is a single item.
- **Reversibility:** no instrument. It is tested only by withdrawal or outage arms, rarely beyond weeks.
- **Sense of agency:** no AI-specific scale. Intentional binding is lab-only, and no AI study using the SoAS was found.
- **Dependence:** the scales (DIA, GAIDS, PCGUS) are cross-sectional self-report, and none is validated against behaviour or unaided skill.
- **Critical thinking with AI:** only self-report. No performance measure of checking AI output was found.
- **Self-efficacy without AI:** task-level self-efficacy without AI is rarely paired with unaided tests.
