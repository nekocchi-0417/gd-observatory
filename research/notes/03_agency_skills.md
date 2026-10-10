# 03 — Individual agency, skills and reliance

Slice: "people delegate → skills and judgement erode → people can no longer take the task back".
Compiled 3 October 2026 for the Gradual Disempowerment Observatory.

Framing: Chooi, Lee & Li, "Measuring AI-Induced Disempowerment: A Framework and Proposed Metrics", EvalEval workshop, July 2026 (https://aclanthology.org/2026.evaleval-1.36/). Their three layers are EXPOSURE (AI changes outcomes), EROSION (the person can no longer do it unaided) and LOCK-IN (supporting institutions are gone). Their abstract says current measurement "clusters almost entirely at exposure, leaving erosion and lock-in largely unaddressed". The evidence below fits that description.

## How to read the verification labels

- PRIMARY = I fetched the paper, publisher page, or the authors' own release and the number was on it.
- SECONDARY = a reputable outlet or review quoting the number.
- SNIPPET = search-result text only (none used for any number below).

Important caveat on method: pages were read through a fetch tool that passes the page through a small summarising model. Numbers marked PRIMARY came off the primary page, but they have not all been eyeballed in the original PDF. Where two fetches disagreed, I say so. Before any number goes on a public chart, spot-check it against the source link.

Several publisher pages refused to load (The Lancet, PNAS, PubMed, PubMed Central, SSRN on one attempt). I did not work around those blocks; I used the authors' repository copy or press release instead and labelled accordingly.

---

## A. Erosion: can people still do it unaided?

### 1. Budzyń et al. — endoscopist deskilling after AI exposure
- layer: erosion
- measures: Whether experienced doctors find fewer pre-cancerous growths in ordinary (non-AI) colonoscopies after several months of routinely working with an AI detection aid.
- key_numbers:
  - Adenoma detection rate (ADR) in non-AI colonoscopies: 28.4% (226 of 795) before AI was introduced → 22.4% (145 of 648) after. Sept 2021 – March 2022.
  - Absolute difference −6.0 percentage points (95% CI −10.5 to −1.6; p = 0.0089). About a 20% relative drop.
  - Multivariable model: exposure to AI, odds ratio 0.69 (95% CI 0.53–0.89).
  - n = 1,443 non-AI colonoscopies; 19 endoscopists (each with 2,000+ prior procedures); 4 centres in Poland.
  - For comparison, ADR in the AI-assisted procedures in the same period: 25.3% (186 of 734).
- design: observational (retrospective before/after comparison inside the ACCEPT trial; not randomised on the deskilling question)
- source: Budzyń K, Romańczyk M, et al. — "Endoscopist deskilling risk after exposure to artificial intelligence in colonoscopy: a multicentre, observational study" — Lancet Gastroenterology & Hepatology 2025;10:896–903 — https://www.thelancet.com/journals/langas/article/PIIS2468-1253(25)00133-5/abstract — online Aug 2025
- verification: PRIMARY (abstract text from the co-authors' institutional repository, https://wrap.warwick.ac.uk/id/eprint/191005, plus the journal's press release, https://www.eurekalert.org/news-releases/1094223). The Lancet page itself returned 403.
- cadence: one-off
- caveats and criticisms:
  - Workload confound: total colonoscopies nearly doubled after AI was introduced (795 → 1,382), so fatigue or time pressure could explain the drop (Prof Venet Osmani, QMUL). https://www.sciencemediacentre.org/expert-reaction-to-observational-study-looking-at-detection-rate-of-precancerous-growths-in-colonoscopies-by-health-professionals-who-perform-them-before-and-after-the-routine-introduction-of-ai/
  - Three months is a very short time for skill loss in doctors with decades of experience; the effect may be attention/motivation rather than lost skill (same source).
  - Department changes happened mid-study; one AI system only; "randomised crossover trials are needed" (Prof Allan Tucker, Brunel; same source).
  - The authors themselves state other factors may have influenced the result.
  - A correction to the article was published (https://www.thelancet.com/journals/langas/article/PIIS2468-1253(25)00294-8/fulltext); I could not open it, so I do not know what was corrected.
  - I could not search for 2026 replications or rebuttals (search budget ran out). Treat "no replication found" as "not checked", not "none exists".

### 2. Other clinical evidence — automation bias is measured, deskilling mostly is not
- layer: exposure (the measured part is doctors following wrong AI advice; erosion is largely unmeasured)
- measures: How often clinicians' accuracy falls when an AI suggestion is wrong, and how much real evidence of clinical skill loss exists.
- key_numbers:
  - Mammography (Dratsch et al., Radiology, May 2023): 27 radiologists, 50 mammograms. Inexperienced readers: about 80% correct when the AI suggestion was correct, under 20% when it was wrong. Very experienced readers (15+ years): 82% vs 45.5%.
  - Scoping review (ESMO Real World Data and Digital Oncology, online 19 March 2026) lists only six primary investigations, e.g. radiology ACL tears: 45% of errors attributed to automation bias (Wang et al. 2023); pathology: 7% of correct diagnoses reversed under AI influence (Bellahsen-Harrar et al. 2025). It calls evidence of clinical deskilling "scarce".
  - Mixed-method review (Artificial Intelligence Review, 2025): 22 systematically reviewed sources plus 62 narrative; only 6 of the 22 were empirical, all interview-based; no RCTs or large quantitative studies showing deskilling.
- design: reader study (Dratsch); literature reviews
- source: Dratsch T et al. — "Automation Bias in Mammography" — Radiology — https://pubs.rsna.org/doi/10.1148/radiol.222176 — 2 May 2023. Reviews: https://www.sciencedirect.com/science/article/pii/S2949820126000123 and https://link.springer.com/article/10.1007/s10462-025-11352-1
- verification: PRIMARY for Dratsch via the publisher's press release (https://www.rsna.org/media/press/i/2432); PRIMARY for the two reviews (publisher pages). The individual studies named inside the reviews are SECONDARY.
- cadence: one-off
- caveats and criticisms:
  - Automation bias (accepting a wrong suggestion today) is not the same thing as deskilling (being worse later without the tool). Almost all clinical numbers are the former.
  - Dratsch used deliberately wrong AI suggestions in a lab setting with a small reader panel.
  - Budzyń remains, as far as I could establish, the only real-world quantitative before/after number for clinical skill.

### 3. Bastani et al. — "Generative AI without guardrails can harm learning"
- layer: erosion (failure to form the skill)
- measures: Whether high-school students who practise maths with ChatGPT do better or worse on a later exam taken without it.
- key_numbers:
  - Practice sessions (with AI): GPT Base +48% and GPT Tutor +127% versus control.
  - Later unassisted exam: GPT Base −17% versus control (statistically significant); GPT Tutor about zero (not significant).
  - n = "nearly a thousand" students, about 50 classes, grades 9–11, one large high school in Turkey; fall semester 2023–24; four 90-minute sessions covering about 15% of the maths curriculum.
- design: RCT (three arms: control, plain GPT-4 interface, GPT-4 tutor with guardrails)
- source: Bastani H, Bastani O, Sungu A, Ge H, Kabakcı Ö, Mariman R — "Generative AI without guardrails can harm learning: Evidence from high school mathematics" — PNAS 122 (2025) e2422633122 — https://www.pnas.org/doi/10.1073/pnas.2422633122
- verification: PRIMARY (authors' copy of the paper, https://hamsabastani.github.io/education_llm.pdf). PNAS and PubMed Central pages were blocked. Exact n not confirmed beyond "nearly a thousand".
- cadence: one-off
- caveats and criticisms:
  - One school, one subject, one country, short-term outcome; the authors themselves flag that long-term learning is untested.
  - The harm disappears with a tutor-style design, so the finding is about how AI is deployed, not AI as such.
  - The percentages are relative to a low control mean (0.284 on a normalised scale), so they look larger than the raw grade differences.

### 4. Shen & Tamkin (Anthropic) — "How AI Impacts Skill Formation"
- layer: erosion (failure to form the skill)
- measures: Whether software engineers who learn a new coding library with AI help understand it as well as those who learn without AI.
- key_numbers:
  - Quiz score right after the task: 50% (AI group) vs 67% (no-AI group); Cohen's d = 0.738, p = 0.01. Described as "nearly two letter grades".
  - AI group finished about two minutes faster; not statistically significant.
  - n = 52 (mostly junior) software engineers; library: Trio (Python); 14-question quiz.
  - How people used AI mattered: three patterns scored under 40% on average (full delegation n=4, progressive reliance n=4, iterative AI debugging n=4); three scored 65% or more (generate-then-understand n=2, hybrid code-plus-explanation n=3, conceptual questions only n=7).
- design: RCT
- source: Shen JH, Tamkin A — "How AI Impacts Skill Formation" — arXiv 2601.20245 / Anthropic research post — https://www.anthropic.com/research/AI-assistance-coding-skills — 29 Jan 2026
- verification: PRIMARY (Anthropic post and arXiv abstract)
- cadence: one-off
- caveats and criticisms:
  - Small sample; the pattern subgroups are tiny (n = 2 to 7) and descriptive only.
  - The quiz was taken minutes after the task; nothing is known about retention weeks later.
  - Company-run study of its own product category; not yet peer reviewed as far as I could confirm.
  - Press coverage: https://www.devclass.com/ai-ml/2026/02/02/anthropic-research-skilled-devs-make-better-use-of-ai-but-using-ai-is-bad-for-learning-skills/4079561

### 5. Kosmyna et al. (MIT Media Lab) — "Your Brain on ChatGPT"
- layer: erosion (weak evidence)
- measures: Brain activity (EEG), recall and sense of ownership while writing essays with ChatGPT, with a search engine, or with no tools.
- key_numbers:
  - n = 54 in sessions 1–3 (18 per group); only 18 completed the crossover session 4.
  - Session 1 recall: 83.3% of the LLM group (15 of 18) could not correctly quote from the essay they had just written, versus 11.1% (2 of 18) in each of the other groups.
  - EEG: brain-only group showed the strongest and widest connectivity, LLM group the weakest (no single headline number).
  - Run over about four months with Boston-area university participants.
- design: lab experiment (between-groups, small crossover)
- source: Kosmyna N et al. — "Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task" — arXiv 2506.08872 — https://arxiv.org/abs/2506.08872 — 10 June 2025, revised 31 Dec 2025
- verification: PRIMARY (arXiv abstract and PDF)
- cadence: one-off
- caveats and criticisms:
  - Preprint; no peer-reviewed version confirmed.
  - Published critique (Stankovic, Hirche, Kollatzsch & Doetsch, arXiv 2601.00856, Jan 2026): small sample, analyses not reproducible as reported, problems with the EEG analysis, inconsistent reporting, and results that "could be interpreted more conservatively". https://arxiv.org/abs/2601.00856
  - The widely repeated "cognitive debt" claim rests on the 18-person session 4.
  - Less EEG connectivity during an assisted task shows less effort on that task, not lasting damage.

### 6. Gerlich — AI use, cognitive offloading and critical thinking
- layer: erosion (correlational only)
- measures: Whether people who say they use AI tools more also score lower on a self-report critical-thinking measure.
- key_numbers:
  - AI use vs critical thinking: r = −0.68.
  - AI use vs cognitive offloading: r = +0.72. Offloading vs critical thinking: r = −0.75.
  - n = 666 survey respondents (UK) plus 50 interviews. Younger respondents (17–25) reported more AI dependence and scored lower than those aged 46+.
- design: survey (cross-sectional) plus interviews
- source: Gerlich M — "AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking" — Societies 15(1):6 — https://www.mdpi.com/2075-4698/15/1/6 — Jan 2025
- verification: PRIMARY (publisher page)
- cadence: one-off
- caveats and criticisms:
  - Cross-sectional and self-reported: it cannot show AI use causes lower critical thinking (people who think less critically may simply use AI more, or age may drive both).
  - Correlations this large between self-report scales often mean the scales overlap in wording.
  - A correction was issued in Sept 2025 (Table 4 had duplicated Table 3; conclusions stated as unaffected). https://www.mdpi.com/2075-4698/15/9/252

### 7. AI dependence scales — what prevalence figures exist
- layer: erosion (self-reported dependence)
- measures: Questionnaire scores for how dependent people feel on AI chatbots.
- key_numbers:
  - China (Zhang et al. 2025, as reported in a 2026 review): of 1,004 university students, 45.8% had used ChatGPT in the past month; among those users, 38.2% showed "mild" and 37.6% "moderate" problematic use on an AI chatbot usage and dependence questionnaire.
  - Colombia (Robayo-Pinzon et al., Frontiers in Public Health, Aug 2025): n = 420 university students; mean dependence 64.34 out of 160 (SD 17.31), described as low; higher among those using AI 2–3 hours a day.
  - The 2026 review reports no validated cut-off scores for any scale (Problematic ChatGPT Use Scale, Conversational AI Dependence Scale, Generative AI Dependency Scale).
- design: survey (cross-sectional)
- source: review "Problematic ChatGPT use: Manifestations, etiologies, and evaluation" — https://www.sciencedirect.com/science/article/pii/S2319417026000545 — 2026; Robayo-Pinzon et al. — https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1634121/full; scale paper: Zhang X et al., "The Development and Validation of an Artificial Intelligence Chatbot Dependence Scale", Cyberpsychology, Behavior, and Social Networking 2025 — https://journals.sagepub.com/doi/abs/10.1089/cyber.2024.0240
- verification: SECONDARY for the Chinese prevalence (via the review); PRIMARY for the Colombian study. I did not find a prevalence figure for the Generative AI Dependency Scale itself.
- cadence: one-off (no repeated wave found for any scale)
- caveats and criticisms:
  - Without validated cut-offs, "mild" and "moderate" are the authors' labels, not diagnoses; the 76% combined figure should not be quoted as "76% are dependent".
  - Student convenience samples in single countries.
  - These scales borrow items from social-media and internet addiction scales; whether "dependence" on a work tool is a harm is contested.

---

## B. Perception versus reality

### 8. METR developer RCT — expected, felt and actual speed
- layer: perception
- measures: Whether experienced open-source developers finish real tasks faster with AI tools, and whether their own impression matches the stopwatch.
- key_numbers:
  - Before the study, developers forecast AI would cut completion time by 24%. Afterwards they estimated it had cut time by 20%. Measured: AI increased completion time by 19%.
  - Outside forecasts: economists predicted 39% shorter, ML experts 38% shorter.
  - n = 16 developers, 246 tasks (136 AI-allowed, 110 AI-disallowed), about 2 hours each, Feb–June 2025; tools mainly Cursor Pro with Claude 3.5/3.7 Sonnet. Developers accepted under 44% of AI generations.
- series (if repeated):

| Study period | Group | Estimated change in task time with AI | Interval |
|---|---|---|---|
| Feb–Jun 2025 | 16 developers, 246 tasks | 19% slower | shown graphically; numeric bounds not verified |
| Aug 2025 onward | 10 returning developers | 18% faster (reported as "−18%") | −38% to +9% |
| Aug 2025 onward | 47 newly recruited developers | 4% faster (reported as "−4%") | −15% to +9% |

- design: RCT (tasks randomised to AI-allowed or AI-disallowed)
- source: Becker J, Rush N, Barnes E, Rein D (METR) — "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity" — arXiv 2507.09089 — https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ — 10 July 2025. Follow-up: "We are Changing our Developer Productivity Experiment Design" — https://metr.org/blog/2026-02-24-uplift-update/ — 24 Feb 2026
- verification: PRIMARY (METR post, arXiv abstract and HTML, METR update)
- cadence: repeated once (two rounds, but METR says the second is not comparable)
- caveats and criticisms:
  - CHECK THE SIGN of the follow-up figures before charting. METR reports them as "speedup" estimates of −18% and −4%; my reading is that negative means less time, i.e. faster, but confirm against the post. Both intervals include zero.
  - METR itself calls the late-2025 data "likely a bad proxy" and "only very weak evidence": 30% to 50% of developers said they chose not to submit some tasks because they did not want to do them without AI, and a growing share would not want to do half their work without AI even at $50/hour.
  - That refusal is itself a data point for this slice: a rare, direct sign of people not wanting to take a task back. It is anecdotal within a study, not a measured rate of lost ability.
  - Original study: 16 people, expert developers on codebases they knew extremely well; METR explicitly says it does not show AI fails to speed up most developers.
  - The perception gap (felt +20%, actual −19%) was not re-measured in the follow-up as far as I could find.

### 9. Fernandes et al. — "AI makes you smarter but none the wiser"
- layer: perception
- measures: Whether people who use ChatGPT on reasoning problems can judge how well they actually did.
- key_numbers:
  - Task: 20 LSAT logical-reasoning problems. Study 1 n = 246; Study 2 n = 452.
  - With ChatGPT, participants scored 12.98 on average versus 9.45 in a no-AI comparison sample (Jansen et al. 2021).
  - They estimated they had scored 16.50, an overestimate of about four points.
  - Higher AI literacy went with lower accuracy in judging one's own performance. The usual Dunning–Kruger pattern "ceased to exist with AI use".
- design: online experiments (comparison to an earlier no-AI sample in Study 1)
- source: Fernandes D, Villa S, Nicholls S, Haavisto O, Buschek D, Schmidt A, Kosch T, Shen C, Welsch R — "AI makes you smarter but none the wiser: The disconnect between performance and metacognition" — Computers in Human Behavior vol. 175 (2026), online Oct 2025 — DOI 10.1016/j.chb.2025.108779
- verification: PRIMARY (author-hosted copy of the paper, https://thomaskosch.com/wp-content/papercite-data/pdf/fernandes2025ai.pdf, and university release, https://www.eurekalert.org/news-releases/1103616). Author list beyond the first and last authors not verified.
- cadence: one-off
- caveats and criticisms:
  - The Study 1 comparison group is a different sample from an earlier paper, not a randomised control.
  - Most participants sent one prompt per question and accepted the answer, so the result may describe low-effort use rather than AI use in general.
  - Online crowd-worker samples.

---

## C. Exposure: over-reliance in the moment

### 10. Lee et al. (Microsoft Research + CMU) — knowledge workers and critical thinking
- layer: exposure (self-reported reduction in effort)
- measures: When knowledge workers say they do and do not think critically while using generative AI at work.
- key_numbers:
  - n = 319 knowledge workers who shared 936 real examples of AI use at work.
  - Critical thinking was reported in 555 of 936 examples (59.29%); so in about 41% it was not.
  - Share of examples where workers reported less or much less effort with AI: knowledge 72%, comprehension 79%, application 69%, analysis 72%, synthesis 76%, evaluation 55%.
  - Higher confidence in the AI went with less reported critical thinking (β = −0.69, p < 0.001); higher confidence in oneself went with more (β = 0.26, p = 0.026).
- design: survey (cross-sectional, self-report; recruited via Prolific; weekly-or-more AI users only)
- source: Lee H-P, Sarkar A, Tankelevitch L, Drosos I, Rintel S, Banks R, Wilson N — "The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers" — CHI 2025 — https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/ — April 2025
- verification: PRIMARY (Microsoft Research page and paper PDF)
- cadence: one-off
- caveats and criticisms:
  - It measures what people say about their effort, not their skill. Headlines saying it "found declines in critical thinking skills" overstate it.
  - Less effort on a task the AI does well may be sensible delegation.
  - The authors list: English only, young and tech-savvy sample, self-confidence may not match real expertise.

### 11. Shaw & Nave — "cognitive surrender" (following wrong AI answers)
- layer: exposure
- measures: How often people adopt an AI's answer on reasoning problems when the AI is right and when it is deliberately wrong.
- key_numbers:
  - n = 1,372 participants, over 9,500 trials, across three preregistered studies.
  - Participants went with the AI about 93% of the time when it was right and about 80% of the time when it was wrong; only 19.7% overrode a faulty answer.
  - Confidence rose by 11.7% among AI users even though wrong AI answers lowered accuracy.
  - Immediate feedback with a financial incentive raised override rates by 19 points; a 30-second time limit lowered them by 12.
- design: online experiments (AI accuracy manipulated)
- source: Shaw SD, Nave G — "Thinking—Fast, Slow, and Artificial: How AI is Reshaping Human Reasoning and the Rise of Cognitive Surrender" — SSRN working paper — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6097646 — Jan 2026
- verification: SECONDARY (https://gigazine.net/gsc_news/en/20260406-cognitive-surrender/; SSRN, OSF and ResearchGate would not load). Treat every number here as unconfirmed until checked against the paper.
- cadence: one-off
- caveats and criticisms:
  - Working paper; peer-review status not confirmed.
  - Critics argue this is ordinary deference to a confident source rather than something AI-specific, and that "surrender" is a loaded word for sensible delegation in a low-stakes task. https://winterspeak.substack.com/p/does-ai-create-cognitive-surrender
  - The override rate moved a lot with incentives and time pressure, so the 80% is not a fixed human constant.

### 12. Dell'Acqua et al. — the "jagged frontier"
- layer: exposure
- measures: How consultants' output changes with GPT-4 on tasks the AI handles well versus a task chosen to be just beyond what it can do.
- key_numbers:
  - Inside the frontier: 12.2% more tasks completed, 25.1% faster, more than 40% higher quality than control.
  - Outside the frontier: consultants using AI were 19 percentage points less likely to produce a correct solution.
  - n = 758 Boston Consulting Group consultants (about 7% of its individual-contributor consultants).
- design: RCT (field experiment)
- source: Dell'Acqua F, McFowland E, Mollick E, Lifshitz-Assaf H, Kellogg K, Rajendran S, Krayer L, Candelon F, Lakhani K — "Navigating the Jagged Technological Frontier" — Harvard Business School working paper 24-013 / SSRN — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321 — 15 Sept 2023
- verification: PRIMARY (SSRN abstract)
- cadence: one-off
- caveats and criticisms:
  - GPT-4 as of 2023; the frontier has moved, so the specific task that tripped people up may no longer do so. The general point (people cannot tell where the frontier is) is untested on current models as far as I found.
  - The "outside the frontier" task was built by the researchers to be one the AI gets wrong.
  - One firm, elite consultants.

### 13. Sharma, McCain, Douglas & Duvenaud — "Who's in Charge?" (real usage)
- layer: exposure (mostly "potential" for erosion, measured in real conversations)
- measures: How often real Claude.ai conversations show the AI distorting a user's beliefs, value judgements or actions, as rated by automated classifiers.
- key_numbers:
  - Severe reality-distortion potential: about 1 in 1,300 conversations (0.076%).
  - Severe value-judgement distortion potential: about 1 in 2,100. Severe action-distortion potential: about 1 in 6,000.
  - Mild disempowerment potential: between 1 in 50 and 1 in 70 conversations, across the three types.
  - Signs that it actually happened in the conversation: reality distortion 0.048% (95% CI 0.045–0.052%); action distortion 0.018% (0.016–0.021%).
  - Severe user vulnerability (an amplifying factor): about 1 in 300 interactions.
  - n = about 1.5 million Claude.ai consumer conversations, collected 12–19 Dec 2025.
  - Trend: in a separate sample of over 500,000 conversations where users left a thumbs up/down (Q4 2024 to Q4 2025), the share with moderate or severe disempowerment potential rose, "particularly after May 2025". Start and end percentages are shown only in a figure (Figure 13); I could not extract them.
  - Users gave thumbs-up at above-baseline rates to conversations flagged as moderate or severe. When there were signs the user had actually acted on distorted values or actions, ratings fell below baseline; for reality distortion they stayed favourable.
- series (if repeated): Q4 2024 → Q4 2025, rising; values not extracted (figure only)
- design: usage-log analysis (privacy-preserving, classifier-based)
- source: Sharma M, McCain M, Douglas R, Duvenaud D — "Who's in Charge? Disempowerment Patterns in Real-World LLM Usage" — arXiv 2601.19062 — https://arxiv.org/abs/2601.19062 — 27 Jan 2026; summary at https://www.anthropic.com/research/disempowerment-patterns
- verification: PRIMARY (arXiv abstract and HTML, Anthropic post)
- cadence: one-off cross-section plus one internal trend (five quarters)
- caveats and criticisms:
  - The trend comes from people who chose to leave feedback, which the authors say is a different mix from general traffic; they say they "are unable to attribute the increase to any single cause" (models, user base and use cases all changed).
  - One company's product, analysed by that company; classifiers are imperfect.
  - Each conversation is judged alone. The mechanism this slice cares about (the same person losing ability over months) is not observed.
  - Most figures are "potential", not confirmed harm.
  - This is the closest thing to a population-scale erosion indicator that exists, and it has one time series from one vendor.

### 14. OpenAI + MIT Media Lab — emotional reliance on ChatGPT
- layer: exposure
- measures: How much emotional use of ChatGPT there is, and whether using it more goes with more loneliness and dependence.
- key_numbers:
  - RCT: n = 981 completed 28 days (of 2,539 recruited), over 300,000 messages, nine conditions (text / neutral voice / engaging voice × three conversation types). No significant effects of the assigned conditions. People who chose to use it more had worse outcomes: the top usage decile showed significant decreases in socialising and increases in emotional dependence.
  - On-platform study: automated analysis of more than 3 million conversations, 4,076 user survey responses, about 6,000 heavy voice users followed for 3 months. A small group of users accounts for most emotional cues; in the top decile, over half of conversations triggered them.
  - OpenAI, 27 Oct 2025: about 0.15% of users active in a given week, and 0.03% of messages, show potentially heightened emotional attachment to ChatGPT.
- design: RCT plus usage-log analysis plus survey
- source: Fang CM et al. — "How AI and Human Behaviors Shape Psychosocial Effects of Chatbot Use" — arXiv 2503.17473 — https://arxiv.org/abs/2503.17473 — March 2025; Phang J et al. — "Investigating Affective Use and Emotional Well-being on ChatGPT" — https://cdn.openai.com/papers/15987609-5f71-433c-9972-e91131f399a1/openai-affective-use-study.pdf — March 2025; OpenAI — "Strengthening ChatGPT's responses in sensitive conversations" — https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/ — 27 Oct 2025
- verification: PRIMARY (arXiv abstract, OpenAI PDF, OpenAI post). Author names not verified on the page.
- cadence: one-off (no repeat of the 0.15% figure found)
- caveats and criticisms:
  - The headline link (heavy use ↔ loneliness and dependence) is correlational; lonely people may simply use it more. The randomised part found no effect.
  - 28 days is short; tasks and voices were assigned, so use was not natural.
  - The 0.15% is OpenAI's own "current best estimate" from its own classifiers and is described as hard to measure. With a user base in the hundreds of millions it is still a large number of people, but I have not verified a user-count figure to multiply it by.

---

## D. Exposure trends: the only real time series

### 15. Pew — US teens using ChatGPT / chatbots for schoolwork
- layer: exposure
- measures: The share of US teenagers (13–17) who say they have used ChatGPT, or any AI chatbot, for schoolwork.
- key_numbers:
  - 2024: 26% had used ChatGPT for schoolwork (n = 1,391; 18 Sept – 10 Oct 2024), double the 13% in 2023. By grade in 2024: 31% of 11th–12th graders, 20% of 7th–8th graders.
  - 2025 (new question, any AI chatbot): 54% have used chatbots for help with schoolwork; 10% do all or most of their schoolwork with chatbot help, 21% some, 23% a little (n = 1,458; 25 Sept – 9 Oct 2025).
  - 2025: 64% of teens ever use an AI chatbot; about three in ten daily; 12% use chatbots for emotional support or advice.
- series (if repeated):

| Survey date | Question | Value |
|---|---|---|
| Autumn 2023 | ever used ChatGPT for schoolwork | 13% |
| Sept–Oct 2024 | ever used ChatGPT for schoolwork | 26% |
| Sept–Oct 2025 | ever used AI chatbots for help with schoolwork (wording changed) | 54% |

- design: survey (probability panel, Ipsos KnowledgePanel)
- source: Pew Research Center — "About a quarter of U.S. teens have used ChatGPT for schoolwork – double the share in 2023" — https://www.pewresearch.org/short-reads/2025/01/15/about-a-quarter-of-us-teens-have-used-chatgpt-for-schoolwork-double-the-share-in-2023/ — 15 Jan 2025; "How Teens Use and View AI" — https://www.pewresearch.org/internet/2026/02/24/how-teens-use-and-view-ai/ — 24 Feb 2026; "Teens, Social Media and AI Chatbots 2025" — https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025/ — 9 Dec 2025
- verification: PRIMARY (all three Pew pages). The 2023 sample size and field dates were not on the pages I read.
- cadence: repeated (annual, but the question changed in 2025)
- caveats and criticisms:
  - The 2025 figure is not on the same line as 2023–24: it asks about any chatbot, not ChatGPT only. Plot it as a separate marker or with a visible break.
  - "Used for schoolwork" says nothing about whether the student could have done the work alone. This is exposure, not erosion.
  - Self-report on something teens may under-report.

### 16. HEPI — UK undergraduates using generative AI for assessed work
- layer: exposure
- measures: The share of UK full-time undergraduates who say they use generative AI for assessed work.
- key_numbers:
  - 2026 survey (fieldwork Dec 2025, n = 1,054): 95% use AI in at least one way; 94% use generative AI to help with assessed work; 12% directly include AI-generated text in assessed work.
  - 2025 survey (fieldwork Dec 2024, n = 1,041): 92% use any AI tool (up from 66%); 88% use generative AI for assessments (up from 53%).
  - 2026: 20% say AI makes them feel lonelier, 21% less lonely. About 16% feel AI has worsened their experience.
- series (if repeated):

| Survey edition | Any AI use | Gen AI for assessed work | AI text pasted directly into assessed work |
|---|---|---|---|
| 2024 | 66% | 53% | 3% |
| 2025 | 92% | 88% | 8% |
| 2026 | 95% | 94% | 12% |

- design: survey (polling panel, Savanta in 2025–26; the 2024 wave used a different provider)
- source: Higher Education Policy Institute / Kortext — "Student Generative AI Survey 2025" (Policy Note 61) — https://www.hepi.ac.uk/reports/student-generative-ai-survey-2025/ — Feb 2025; "Student Generative Artificial Intelligence Survey 2026" (Report 199) — https://www.hepi.ac.uk/reports/student-generative-ai-survey-2026/ — March 2026
- verification: PRIMARY (HEPI report pages and the 2026 PDF)
- cadence: repeated (annual, three waves)
- caveats and criticisms:
  - DISCREPANCY TO RESOLVE: the 2025 report page gives 53% → 88% for assessed work. One reading of the 2026 PDF returned 51% (2024) and 89% (2025) for what may be a re-based version of the same series. The 94% (2026) and the 3% / 8% / 12% series were confirmed verbatim. Check the 2026 PDF table before charting the first two points.
  - Survey provider changed after 2024, so the 2024 → 2025 jump may be partly method.
  - Near the ceiling already; this series will stop being informative.
  - Exposure only. The "pasted directly" series (3% → 8% → 12%) is the closest thing to a delegation measure.

### 17. Gallup — US employees using AI at work
- layer: exposure
- measures: The share of US employees who say they use AI at work at all, a few times a week or more, and daily.
- key_numbers:
  - Q2 2026: 52% use AI at work at all, 30% a few times a week or more, 15% daily (n = 22,573 employed US adults; 6–20 May 2026; margin ±0.9 points).
- series (if repeated):

| Quarter | Daily | Few times a week or more | Any use |
|---|---|---|---|
| Q2 2023 | 4% | 11% | 21% |
| Q2 2024 | 4% | 12% | 27% |
| Q2 2025 | 8% | 19% | 40% |
| Q3 2025 | 10% | 23% | 45% |
| Q4 2025 | 12% | 26% | 46% |
| Q1 2026 | 13% | 28% | 50% |
| Q2 2026 | 15% | 30% | 52% |

- design: survey (probability-based Gallup Panel, quarterly)
- source: Gallup — "Organizational AI Adoption Jumps Six Points" — https://www.gallup.com/workplace/712736/organizational-adoption-jumps-six-points.aspx — mid-2026
- verification: PRIMARY (Gallup page). Earlier quarters' sample sizes not all on the page (Q1 2026 n = 23,717; Q4 2025 n = 22,368; Q3 2025 n = 23,068).
- cadence: repeated (quarterly since 2025; annual before)
- caveats and criticisms:
  - The cleanest trend line in this whole slice, and it measures use, not what use does to people.
  - "AI" is self-defined by respondents.
  - Gallup does not ask whether workers could still do the task without AI.

### 18. Common Sense Media — teens and AI companions
- layer: exposure
- measures: How many US teenagers use AI companions, and for what.
- key_numbers:
  - 2025 (n = 1,060, ages 13–17, fielded April–May 2025): 72% have ever used an AI companion; 52% use one a few times a month or more; 13% daily.
  - 33% have chosen to discuss important or serious matters with an AI companion instead of real people (4% frequently).
  - 23% trust AI companions' information or advice quite a bit or completely. 80% spend more time with real friends than with AI companions; 6% spend more time with AI.
  - 2026 census (n = 1,204, ages 9–17, fielded 18–26 March 2026, margin ±3.8 points): 86% use or interact with AI; 24% daily; 67% have used AI chatbots; 37% have used AI to discuss feelings or personal problems; 85% of AI users use it for schoolwork, 21% daily.
- design: survey (nationally representative online panels)
- source: Common Sense Media — "Talk, Trust, and Trade-Offs: How and Why Teens Use AI Companions" — https://www.commonsensemedia.org/research/talk-trust-and-trade-offs-how-and-why-teens-use-ai-companions — July 2025 (toplines: https://www.commonsensemedia.org/sites/default/files/research/talk-trust-and-trade-offs_2025_toplines.pdf); "The Common Sense Census: AI Use by Tweens and Teens, 2026" — https://www.commonsensemedia.org/sites/default/files/research/report/2026-ai-use-by-tweens-and-teens-1.pdf
- verification: PRIMARY (toplines PDF and 2026 report PDF)
- cadence: one-off for the companion questions (the 2026 report is a different survey with a different age range and wording, not a second wave)
- caveats and criticisms:
  - "AI companion" was defined broadly in 2025 and included general assistants used socially, which pushes the 72% up.
  - Do not draw a line between 72% (2025) and 67% (2026): different question, different ages.
  - Advocacy organisation; the survey itself was run by an independent pollster.

---

## E. Model-side: what the systems do

### 19. HumanAgencyBench and sycophancy benchmarks
- layer: exposure (model behaviour, not human outcomes)
- measures: How often AI models behave in ways that support the user's own thinking (asking questions, encouraging learning, deferring big decisions) versus flattering or simply agreeing.
- key_numbers:
  - HumanAgencyBench (Sept 2025): 20 models, six dimensions, 500 tests each (3,000 total). Overall "low-to-moderate agency support". Anthropic models highest overall but lowest on "avoid value manipulation". Top scores cited: ask clarifying questions 66.9% (Claude 3.5 Sonnet); maintain social boundaries 93.5% (Claude 3.5 Haiku); defer important decisions 60.7% (Anthropic models). Agency support did not rise consistently with model capability.
  - ELEPHANT (ICLR 2026): across 11 models, LLMs preserve the user's "face" 45 percentage points more than humans do on advice questions; when given both sides of a moral conflict, they affirm whichever side the user takes in 48% of cases.
  - SycEval (Stanford, Jan 2025): sycophantic behaviour in 58.19% of cases; Gemini 62.47%, Claude Sonnet 57.44%, ChatGPT-4o 56.71%; 14.66% of cases moved the model to a wrong answer; 27,000 queries.
- design: benchmark
- source: Sturgeon B et al. — "HumanAgencyBench: Scalable Evaluation of Human Agency Support in AI Assistants" — arXiv 2509.08494 — https://arxiv.org/abs/2509.08494v1 — Sept 2025; Cheng M et al. — "ELEPHANT: Measuring and understanding social sycophancy in LLMs" — https://arxiv.org/abs/2505.13995; Fanous A et al. — "SycEval: Evaluating LLM Sycophancy" — https://arxiv.org/html/2502.08177v2
- verification: PRIMARY (arXiv pages). Author names for ELEPHANT and SycEval not verified on the page. The HumanAgencyBench per-developer figure for "avoid value manipulation" came back garbled (23.3% vs a 41.6% average) and should be checked in the paper.
- cadence: one-off (each benchmark is a single snapshot; I found no benchmark that re-runs the same test on each new model generation and publishes the series)
- caveats and criticisms:
  - Model-graded benchmarks on synthetic prompts; they do not show what happens to users.
  - No trend: "are models getting more or less sycophantic?" cannot be answered from published data. The models tested (2024–early 2025) are already superseded.
  - I could not search for a sycophancy time series after the search budget ran out; treat this as not found rather than not existing.

### 20. Google DeepMind — harmful manipulation study
- layer: exposure
- measures: Whether a model instructed to steer people actually shifts their beliefs and choices, and whether using more manipulative tactics makes it more effective.
- key_numbers:
  - n = 10,101 participants across nine experiments; UK (3,590), US (3,749), India (2,762); domains: public policy, finance, health; model: Gemini 3 Pro.
  - How often manipulative cues appeared (public policy): 30.3% of responses when explicitly told to steer, 8.8% when not.
  - Effects were strongest in finance (odds ratios roughly 2–4 for money commitments versus control) and weakest in health.
  - Frequency did not predict effect: "there is no clean mapping between propensity and efficacy metrics"; some cues were positively and others negatively associated with belief change.
- design: RCT (online experiments)
- source: Google DeepMind — "Evaluating Language Models for Harmful Manipulation" — arXiv 2603.25326 — https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/evaluating-language-models-for-harmful-manipulation/evaluating-language-models-for-harmful-manipulation.pdf — 26 March 2026
- verification: PRIMARY (DeepMind PDF). The odds-ratio ranges are approximate as read; check the tables before quoting.
- cadence: one-off
- caveats and criticisms:
  - The important lesson for the Observatory: counting manipulative behaviours in transcripts (as usage-log and benchmark studies do) is not a valid stand-in for measuring whether people's beliefs change.
  - Short, paid, online interactions; stated beliefs and small hypothetical commitments.
  - One model, tested by its developer.

---

## F. Felt agency and public perception

### 21. Pew — "more concerned than excited" about AI
- layer: perception
- measures: The share of US adults who say the increased use of AI in daily life makes them more concerned than excited.
- key_numbers:
  - June 2026: 52% more concerned than excited (n = 3,488 US adults, 22–28 June 2026).
  - June 2025: 50% more concerned, 10% more excited, 38% equally both (n = 5,023, 9–15 June 2025).
  - Adults under 30: 31% (2021) → 55% (2026), the first time a majority of this group. By age in 2026: 18–29 55%, 30–49 51%, 50–64 47%, 65+ 59%.
- series (if repeated):

| Year | More concerned than excited |
|---|---|
| 2021 | 37% |
| 2022 | 38% |
| 2023 | 52% |
| 2024 | 51% |
| 2025 | 50% |
| 2026 | 52% |

- design: survey (American Trends Panel, probability-based)
- source: Pew Research Center — "Young adults in the U.S. are increasingly wary of AI, concerned it will take jobs" — https://www.pewresearch.org/short-reads/2026/08/18/young-adults-in-the-us-are-increasingly-wary-of-ai-concerned-it-will-take-jobs/ — 18 Aug 2026; "How Americans View AI and Its Impact on People and Society" — https://www.pewresearch.org/science/2025/09/17/how-americans-view-ai-and-its-impact-on-people-and-society/ — 17 Sept 2025
- verification: PRIMARY (Pew pages)
- cadence: repeated (annual, six points)
- caveats and criticisms:
  - The step change is 2022 → 2023 (after ChatGPT); the line has been flat at about half since. The real movement is among the young.
  - Concern is a mood, not a measure of lost agency.
  - Sample sizes for 2021–2024 not collected here.

### 22. Pew — felt control over AI, and expected effect on human abilities
- layer: perception
- measures: Whether Americans feel they have a say in whether AI is used in their lives, and whether they expect AI to make people better or worse at thinking and relating.
- key_numbers:
  - Aug 2024: 59% of US adults (and 46% of AI experts) said they have little or no control over whether AI is used in their lives; 55% of adults and 57% of experts wanted more control (n = 5,410 adults, 12–18 Aug 2024; 1,013 experts, 14 Aug – 31 Oct 2024).
  - June 2025: 57% say they have not too much or no control; 13% a great deal or quite a bit; 30% some. 61% want more control, "up 6 points since 2024" (n = 5,023).
  - June 2025: 53% say AI will worsen people's ability to think creatively (16% improve); 50% say it will worsen the ability to form meaningful relationships (5% improve); 38% say it will worsen problem-solving (29% improve).
- series (if repeated):

| Survey | Little / not too much or no control | Want more control |
|---|---|---|
| Aug 2024 | 59% | 55% |
| June 2025 | 57% | 61% |

- design: survey (American Trends Panel; separate expert sample)
- source: Pew Research Center — "How the U.S. Public and AI Experts View Artificial Intelligence" — https://www.pewresearch.org/internet/2025/04/03/artificial-intelligence-in-daily-life-views-and-experiences/ — 3 April 2025; "AI in Americans' Lives: Awareness, Experiences and Attitudes" — https://www.pewresearch.org/science/2025/09/17/ai-in-americans-lives-awareness-experiences-and-attitudes/ — 17 Sept 2025
- verification: PRIMARY (Pew pages; the 2025 control sentences were confirmed as verbatim quotes)
- cadence: repeated (two points so far; no 2026 figure found)
- caveats and criticisms:
  - Two points is not a trend; the 59 → 57 change is within normal survey noise.
  - Whether the control question wording was identical across the two waves was not checked.
  - Expected harm to creativity is a prediction by the public, not a measurement of creativity.

### 23. Ipsos AI Monitor — "AI makes me nervous" (multi-country)
- layer: perception
- measures: The average share of adults across about 30 countries who agree that products and services using AI make them nervous, or excited.
- key_numbers:
  - 2026: 50% nervous, 51% excited (32 countries, n = 23,532, 20 March – 3 April 2026).
  - 2025: 53% nervous, 52% excited (30 countries, n = 23,216, 21 March – 4 April 2025).
  - 2023: 52% nervous, 54% excited (31 countries, n = 22,816, 26 May – 9 June 2023); nervousness up an average of 12 points from Dec 2021 across the 24 countries in both waves.
- series (if repeated):

| Wave | Nervous | Excited |
|---|---|---|
| Dec 2021 | about 12 points below 2023 (exact value not retrieved) | not retrieved |
| 2023 | 52% | 54% |
| 2024 | not retrieved | not retrieved |
| 2025 | 53% | 52% |
| 2026 | 50% | 51% |

- design: survey (online panels; "global country average")
- source: Ipsos — "The Ipsos AI Monitor 2026" — https://resources.ipsos.com/rs/297-CXJ-795/images/Ipsos-AI-Monitor-2026.pdf; "The Ipsos AI Monitor 2025" — https://www.ipsos.com/sites/default/files/ct/publication/documents/2025-06/Ipsos-AI-Monitor-2025.pdf; "AI is making the world more nervous" — https://www.ipsos.com/en/ai-making-world-more-nervous — 2023
- verification: PRIMARY (Ipsos PDFs and page) for 2023, 2025, 2026; 2021 and 2024 values not retrieved
- cadence: repeated (annual)
- caveats and criticisms:
  - The set of countries changes each year, so the global average is not strictly like-for-like.
  - Online samples in some countries skew urban and educated.
  - Ipsos notes a "say-do gap": majorities say they do not trust AI tools and use them anyway. The 2026 report has no question on skills or dependence.

---

## G. Baseline: population-level skills (not AI-caused)

### 24. Adult and youth literacy, and reading for pleasure (US)
- layer: erosion (baseline context only; these declines began before mass AI use)
- measures: How well US adults and 13-year-olds read and do maths, and how many read for pleasure.
- key_numbers:
  - Adults 16–65 (PIAAC): share at or below Level 1 in literacy rose from 19% (2017) to 28% (2023); numeracy 29% → 34%. 2023 data were collected Aug 2022 – June 2023.
  - Age 13 (NAEP long-term trend): reading down 4 points 2020 → 2023 and 7 points 2012 → 2023; maths down 9 and 14 points. 2025 results (released June 2026): no change from 2023 in either subject. About 8,200–8,700 students per subject.
  - Adults reading at least one book for pleasure in the past year (NEA Survey of Public Participation in the Arts): 54.6% (2012), 52.7% (2017), 48.5% (2022).
- series (if repeated):

| Indicator | Date | Value |
|---|---|---|
| PIAAC adult literacy, average score | 2012/14 | 269 |
| | 2017 | 270 |
| | 2023 | 258 |
| PIAAC adult numeracy, average score | 2012/14 | 256 |
| | 2017 | 253 |
| | 2023 | 247 |
| Age 13, read for fun almost every day | 1984 | 35% |
| | 2012 | 27% |
| | 2020 | 17% |
| | 2023 | 14% |
| | 2025 | 14% |
| Age 9, read for fun almost every day | 1984 | 53% |
| | 2012 | 53% |
| | 2020 | 42% |
| | 2022 | 39% |
| | 2025 | 37% |

- design: survey / standardised assessment (nationally representative)
- source: NCES — "PIAAC Highlights of U.S. National Results" — https://nces.ed.gov/surveys/piaac/2023/national_results.asp — Dec 2024; NAEP Long-Term Trend 2023 — https://www.nationsreportcard.gov/highlights/ltt/2023/; NAEP Long-Term Trend 2025 — https://www.nationsreportcard.gov/ltt/2025/ and https://www.nagb.gov/news-and-events/news-releases/2026/naep-long-term-trend-assessments-show-different-trends-for-9-and-13-year-olds.html — June 2026; NEA — "Federal Data on Reading for Pleasure: All Signs Show a Slump" — https://www.arts.gov/stories/blog/2024/federal-data-reading-pleasure-all-signs-show-slump — 2024
- verification: PRIMARY (NCES, NAEP, NAGB, NEA pages). NAEP average scale scores themselves were not on the pages read; only the changes were.
- cadence: repeated (PIAAC roughly every 6–10 years; NAEP long-term trend every 2–4 years; NEA every 5 years)
- caveats and criticisms:
  - None of this can be attributed to AI. PIAAC 2023 fieldwork ended in June 2023, and the reading-for-fun decline runs from the 1980s. Present it as the starting line, not as evidence.
  - NCES flags low response rates for PIAAC 2023.
  - These are the only repeated, objective, population-level measures of unaided ability. The next PIAAC cycle is many years away, so they will be slow to show any AI effect.

---

## Best three for a headline visual

1. **Practice up, exam down (Bastani et al., PNAS 2025).** Two bars: +48% on practice problems with ChatGPT, −17% on the later exam without it; a third pair for the tutor version (+127%, about zero). Randomised, about a thousand students, peer reviewed, and it shows both the harm and that design choices remove it. This is the most solid single erosion result.
2. **The lopsided dashboard: use is measured every quarter, ability almost never.** Gallup's line for US workers using AI (21% in 2023 → 52% in Q2 2026), with HEPI (53% → 88% → 94%) and Pew teens (13% → 26%) alongside, next to a near-empty panel for "can still do it unaided". The contrast is the honest headline of this whole slice, and every number on the adoption side is from a repeated probability survey.
3. **Felt faster, was slower (METR, July 2025).** Three bars: expected 24% faster, believed 20% faster, measured 19% slower. Randomised, widely recognised. It needs a visible footnote: 16 developers, early-2025 tools, and METR's 2026 follow-up could not reproduce a clean estimate because many developers no longer wanted to work without AI. That footnote is itself part of the story.

Runners-up: Budzyń (28.4% → 22.4%) is the most striking real-world number but is observational with a strong workload confound, so it should not lead. The Pew concern series (37% → 52%) is the most solid trend but is about mood, not skill.

## What we know and don't know about AI and human skills as of Oct 2026

We know quite a lot about how much people use AI, and it is rising fast on every repeated survey: about half of US workers, more than half of US teens for schoolwork, and nearly all UK undergraduates. We also have a handful of careful experiments showing that leaning on AI while learning something new can leave people knowing less than if they had struggled through it themselves (high-school maths in Turkey, junior programmers learning a new library), and that people are poor judges of how much AI is helping them (developers who felt faster and were slower; test-takers who overestimated their scores by four points out of twenty). We know people often go along with a wrong AI answer, especially under time pressure, and that in real conversations a small share (roughly one in a thousand for severe cases, one in fifty to seventy for mild) show the AI distorting someone's beliefs or decisions, with users tending to rate those conversations well. What we do not have is any repeated measurement of whether people can still do things on their own. Every erosion study is a single snapshot, most are short (minutes to a few months), several are small or not peer reviewed, and the one real-world clinical result has an obvious alternative explanation. Nobody has tracked the same people's unaided ability over years of AI use. The only erosion-adjacent trend line (Anthropic's rising rate of disempowering conversations over 2025) comes from one company's feedback data and the authors say they cannot explain it. The big population measures of literacy and numeracy were falling before AI arrived and will not be updated for years. So the fair summary is: exposure is well measured and climbing, erosion is suggested by several striking one-off studies, and lock-in is essentially unmeasured.

## The most important things nobody measures yet

- **Unaided ability, repeated.** No panel tests the same workers, students or clinicians without AI at regular intervals. Not one erosion study has a second wave.
- **Recovery.** If skills do drop, do they come back after a week or a month without the tool? Nobody has measured take-back time, which is the core of "can no longer take the task back".
- **Refusal or inability to work without AI.** METR stumbled on this (30–50% of developers declining no-AI tasks) but no survey asks it systematically. Gallup, Pew and HEPI ask about use, never about "could you still do this without it?".
- **Never-skilling.** Whether new entrants (junior doctors, junior programmers, students) ever acquire the skill at all. Only short lab studies exist.
- **Clinical skill in the field.** One observational study in one specialty in one country. No randomised crossover trial, nothing published that I found in radiology, pathology or dermatology measuring performance after AI is withdrawn.
- **Judgement and values, not just task skills.** The usage-log work measures potential for distorted beliefs and values inside one conversation; no one follows whether a person's judgement changes across months.
- **A cross-vendor trend.** The Anthropic disempowerment rates are one product. No equivalent from other providers, and no independent audit.
- **Model behaviour over generations.** No benchmark of sycophancy or agency support is re-run on every new model release and published as a series.
- **Whether behaviour counts predict harm.** DeepMind's result (frequency of manipulative cues did not map onto belief change) means transcript-based rates need validating against human outcomes; nobody has done that for disempowerment rates.
- **Dependence prevalence with validated cut-offs.** Scales exist; none has an agreed threshold or a nationally representative, repeated sample.
- **Lock-in.** Whether the fallback has gone: non-AI workflows, training pipelines, staffing levels, exam formats, the people who used to teach the skill. I found no indicator at all.
- **Anything outside the US, UK and a few student samples.** Nearly every number above is American or British.

## Unverified, or to check before publishing

- **Shaw & Nave "cognitive surrender" (item 11):** all numbers are from a secondary write-up; SSRN, OSF and ResearchGate would not load.
- **METR original 95% confidence interval** for the 19% slowdown: shown only in a figure; not retrieved. **METR follow-up sign convention** (−18%, −4%): confirm that negative means faster.
- **HEPI 2024 and 2025 "assessed work" figures:** 53% / 88% (2025 report page) versus 51% / 89% (one reading of the 2026 PDF). Resolve against the PDF table. 2024 sample size and field dates not retrieved.
- **Bastani exact sample size:** only "nearly a thousand students" confirmed; PNAS and PubMed Central were blocked.
- **Budzyń:** numbers confirmed via repository abstract and press release, not the Lancet page (403). Content of the published correction unknown. Whether any 2026 replication or rebuttal exists was not checked (search budget exhausted).
- **Sharma et al. trend values:** the start and end percentages for Q4 2024 → Q4 2025 are in a figure and were not extracted. Exact thumbs-up rates likewise.
- **HumanAgencyBench:** the "avoid value manipulation" figures (23.3% vs 41.6% average) came back ambiguously; check the paper's table.
- **DeepMind manipulation study:** odds-ratio ranges are approximate.
- **Pew 2023 teen survey** sample size and dates; **Pew concern series** sample sizes for 2021–2024; whether the **Pew control question** wording was identical in 2024 and 2025.
- **Ipsos AI Monitor** 2021/2022 and 2024 values not retrieved.
- **PIAAC 2023** US sample size not retrieved; **NAEP** average scale scores not retrieved (changes only).
- **Chinese dependence prevalence (Zhang et al. 2025):** via a review, not the original paper.
- **Author lists** for Fernandes et al., ELEPHANT, SycEval and the OpenAI/MIT papers were not confirmed on the page.
- **Common Sense 2025:** the widely quoted figure that about a third of teens find AI conversations as satisfying as or more satisfying than those with friends was not confirmed; the toplines read gave 10% for "more satisfying" only, so I left the combined figure out.
- **Not searched (budget exhausted):** 2026 replications of the MIT EEG study; a sycophancy time series across model generations; Gallup or other surveys on student AI use; UK reading-for-pleasure trends.
