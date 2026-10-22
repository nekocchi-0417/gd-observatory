'use strict';

// Bibliographic leads imported from the landscape scan; metadata has not been independently verified.
const GD_SKILLS_LANDSCAPE = [
  {
    "id": "krugel2023",
    "title": "ChatGPT's inconsistent moral advice influences users' judgment",
    "citation": "Kr\u00fcgel, Ostermaier & Uhl 2023",
    "url": "https://doi.org/10.1038/s41598-023-31341-0",
    "year": 2023,
    "venue": "Scientific Reports",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task",
      "self-report"
    ],
    "constructs": [
      "beliefs/attitudes",
      "critical thinking/metacognition",
      "autonomy"
    ],
    "setting": "general public",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 14
  },
  {
    "id": "cheng2025",
    "title": "Sycophantic AI decreases prosocial intentions and promotes dependence",
    "citation": "Cheng, Lee, Khadpe, Yu, Han & Jurafsky 2025",
    "url": "https://arxiv.org/abs/2510.01395",
    "year": 2025,
    "venue": "arXiv",
    "publication": "preprint",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "model eval",
      "behavioural task",
      "self-report"
    ],
    "constructs": [
      "decision quality",
      "dependence",
      "beliefs/attitudes",
      "trust"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 23
  },
  {
    "id": "kosmyna2025",
    "title": "Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task",
    "citation": "Kosmyna et al. 2025",
    "url": "https://arxiv.org/abs/2506.08872",
    "year": 2025,
    "venue": "arXiv",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "neuro/physio",
      "unaided performance",
      "self-report",
      "behavioural task"
    ],
    "constructs": [
      "memory/offloading",
      "sense of agency/ownership",
      "learning",
      "reversibility",
      "skill"
    ],
    "setting": "writing",
    "country": "US",
    "studySpan": "months",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 43
  },
  {
    "id": "lee2025chi",
    "title": "The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers",
    "citation": "Lee et al. 2025",
    "url": "https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/",
    "year": 2025,
    "venue": "CHI 2025",
    "publication": "peer-reviewed",
    "topics": [
      "skills",
      "judgement"
    ],
    "design": "cross-sectional survey",
    "measures": [
      "self-report"
    ],
    "constructs": [
      "critical thinking/metacognition",
      "reliance/automation bias",
      "self-efficacy",
      "trust"
    ],
    "setting": "knowledge work",
    "country": "multi",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 47
  },
  {
    "id": "darvishi2024",
    "title": "Impact of AI assistance on student agency",
    "citation": "Darvishi et al. 2024",
    "url": "https://digital.library.adelaide.edu.au/items/99e9a0ee-4feb-405c-8e66-062c6b67aa11",
    "year": 2024,
    "venue": "Computers & Education 210:104967",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance",
      "unaided performance",
      "usage logs"
    ],
    "constructs": [
      "skill",
      "reliance/automation bias",
      "reversibility",
      "autonomy",
      "learning"
    ],
    "setting": "education",
    "country": "unclear",
    "studySpan": "weeks",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 48
  },
  {
    "id": "abbas2024",
    "title": "Is it harmful or helpful? Examining the causes and consequences of generative AI usage among university students",
    "citation": "Abbas, Jam & Khan 2024",
    "url": "https://doi.org/10.1186/s41239-024-00444-7",
    "year": 2024,
    "venue": "International Journal of Educational Technology in Higher Education",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "panel survey",
    "measures": [
      "self-report"
    ],
    "constructs": [
      "memory/offloading",
      "dependence",
      "learning"
    ],
    "setting": "education",
    "country": "Pakistan",
    "studySpan": "weeks",
    "repeated": true,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 82
  },
  {
    "id": "okumura2025",
    "title": "Long-term impact of computer-aided adenoma detection: a prospective observational study",
    "citation": "Okumura et al. 2025",
    "url": "https://doi.org/10.1055/a-2661-2624",
    "year": 2025,
    "venue": "Endoscopy (Thieme)",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "quasi-experiment",
    "measures": [
      "unaided performance",
      "admin data"
    ],
    "constructs": [
      "skill",
      "expertise",
      "reversibility"
    ],
    "setting": "medicine",
    "country": "Japan",
    "studySpan": "years",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 92
  },
  {
    "id": "budzyn2025",
    "title": "Endoscopist deskilling risk after exposure to artificial intelligence in colonoscopy: a multicentre, observational study",
    "citation": "Budzy\u0144 et al. 2025",
    "url": "https://doi.org/10.1016/s2468-1253(25)00133-5",
    "year": 2025,
    "venue": "Lancet Gastroenterology & Hepatology",
    "publication": "peer-reviewed",
    "topics": [
      "skills",
      "judgement"
    ],
    "design": "quasi-experiment",
    "measures": [
      "unaided performance",
      "admin data"
    ],
    "constructs": [
      "skill",
      "expertise",
      "reliance/automation bias",
      "reversibility"
    ],
    "setting": "medicine",
    "country": "Poland",
    "studySpan": "months",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 93
  },
  {
    "id": "metr2026",
    "title": "We are changing our developer productivity experiment design (late-2025 follow-up)",
    "citation": "METR 2026",
    "url": "https://metr.org/blog/2026-02-24-uplift-update/",
    "year": 2026,
    "venue": "METR blog report",
    "publication": "report",
    "topics": [
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance",
      "unaided performance",
      "self-report"
    ],
    "constructs": [
      "dependence",
      "decision quality",
      "reversibility",
      "reliance/automation bias"
    ],
    "setting": "coding",
    "country": "unclear",
    "studySpan": "months",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 95
  },
  {
    "id": "dahmani2020",
    "title": "Habitual use of GPS negatively impacts spatial memory during self-guided navigation",
    "citation": "Dahmani & Bohbot 2020",
    "url": "https://doi.org/10.1038/s41598-020-62877-0",
    "year": 2020,
    "venue": "Scientific Reports",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "panel survey",
    "measures": [
      "unaided performance",
      "self-report",
      "behavioural task"
    ],
    "constructs": [
      "skill",
      "memory/offloading",
      "dependence"
    ],
    "setting": "general public",
    "country": "Canada",
    "studySpan": "years",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 96
  },
  {
    "id": "anthropic2025edu",
    "title": "Anthropic Education Report: How University Students Use Claude",
    "citation": "Anthropic 2025 (Handa et al.)",
    "url": "https://www.anthropic.com/news/anthropic-education-report-how-university-students-use-claude",
    "year": 2025,
    "venue": "Anthropic",
    "publication": "report",
    "topics": [
      "skills"
    ],
    "design": "log analysis",
    "measures": [
      "usage logs"
    ],
    "constructs": [
      "memory/offloading",
      "reliance/automation bias",
      "critical thinking/metacognition",
      "learning"
    ],
    "setting": "education",
    "country": "multi",
    "studySpan": "days",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 99
  },
  {
    "id": "brynjolfsson2025",
    "title": "Generative AI at Work",
    "citation": "Brynjolfsson, Li & Raymond 2025",
    "url": "https://arxiv.org/abs/2304.11771",
    "year": 2025,
    "venue": "Quarterly Journal of Economics (NBER WP 31161)",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "natural experiment",
    "measures": [
      "admin data",
      "usage logs",
      "unaided performance",
      "assisted performance"
    ],
    "constructs": [
      "skill",
      "learning",
      "expertise",
      "reversibility",
      "expertise pipeline"
    ],
    "setting": "knowledge work",
    "country": "unclear",
    "studySpan": "months",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 104
  },
  {
    "id": "bastani2025",
    "title": "Generative AI without guardrails can harm learning: Evidence from high school mathematics",
    "citation": "Bastani et al. 2025",
    "url": "https://doi.org/10.1073/pnas.2422633122",
    "year": 2025,
    "venue": "PNAS",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance",
      "unaided performance",
      "self-report",
      "usage logs"
    ],
    "constructs": [
      "skill",
      "learning",
      "reliance/automation bias",
      "critical thinking/metacognition"
    ],
    "setting": "education",
    "country": "Turkey",
    "studySpan": "weeks",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 108
  },
  {
    "id": "shen2026",
    "title": "How AI Impacts Skill Formation",
    "citation": "Shen & Tamkin 2026",
    "url": "https://arxiv.org/abs/2601.20245",
    "year": 2026,
    "venue": "arXiv / Anthropic",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "RCT",
    "measures": [
      "unaided performance",
      "assisted performance",
      "usage logs"
    ],
    "constructs": [
      "skill",
      "learning",
      "reliance/automation bias"
    ],
    "setting": "coding",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 109
  },
  {
    "id": "casner2014",
    "title": "The Retention of Manual Flying Skills in the Automated Cockpit",
    "citation": "Casner et al. 2014",
    "url": "https://doi.org/10.1177/0018720814535628",
    "year": 2014,
    "venue": "Human Factors",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "unaided performance",
      "self-report"
    ],
    "constructs": [
      "skill",
      "expertise"
    ],
    "setting": "aviation",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 112
  },
  {
    "id": "haslbeck2016",
    "title": "Flying the Needles: Flight Deck Automation Erodes Fine-Motor Flying Skills Among Airline Pilots",
    "citation": "Haslbeck & Hoermann 2016",
    "url": "https://doi.org/10.1177/0018720816640394",
    "year": 2016,
    "venue": "Human Factors",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "unaided performance"
    ],
    "constructs": [
      "skill",
      "expertise"
    ],
    "setting": "aviation",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 113
  },
  {
    "id": "arthur1998",
    "title": "Factors that influence skill decay and retention: A quantitative review and analysis",
    "citation": "Arthur et al. 1998",
    "url": "https://doi.org/10.1207/s15327043hup1101_3",
    "year": 1998,
    "venue": "Human Performance",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "meta-analysis",
    "measures": [
      "unaided performance"
    ],
    "constructs": [
      "skill",
      "reversibility"
    ],
    "setting": "other",
    "country": "multi",
    "studySpan": "n/a",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 114
  },
  {
    "id": "macina2025",
    "title": "MathTutorBench: A Benchmark for Measuring Open-ended Pedagogical Capabilities of LLM Tutors",
    "citation": "Macina et al. 2025",
    "url": "https://arxiv.org/abs/2502.18940",
    "year": 2025,
    "venue": "arXiv",
    "publication": "benchmark",
    "topics": [
      "skills"
    ],
    "design": "benchmark",
    "measures": [
      "model eval"
    ],
    "constructs": [
      "learning",
      "expertise"
    ],
    "setting": "education",
    "country": "n/a",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 153
  },
  {
    "id": "maurya2025",
    "title": "Unifying AI Tutor Evaluation: An Evaluation Taxonomy for Pedagogical Ability Assessment of LLM-Powered AI Tutors (MRBench)",
    "citation": "Maurya et al. 2025",
    "url": "https://arxiv.org/abs/2412.09416",
    "year": 2025,
    "venue": "arXiv",
    "publication": "benchmark",
    "topics": [
      "skills"
    ],
    "design": "benchmark",
    "measures": [
      "model eval"
    ],
    "constructs": [
      "learning"
    ],
    "setting": "education",
    "country": "n/a",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 154
  },
  {
    "id": "zhou2024",
    "title": "Relying on the unreliable: the impact of language models' reluctance to express uncertainty",
    "citation": "Zhou, Hwang, Ren & Sap 2024",
    "url": "https://aclanthology.org/2024.acl-long.198",
    "year": 2024,
    "venue": "ACL 2024",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "model eval",
      "behavioural task"
    ],
    "constructs": [
      "reliance/automation bias",
      "critical thinking/metacognition",
      "trust"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 162
  },
  {
    "id": "steyvers2025",
    "title": "What large language models know and what people think they know",
    "citation": "Steyvers, Tejeda, Kumar, Belem, Karny, Hu, Mayer & Smyth 2025",
    "url": "https://doi.org/10.1038/s42256-024-00976-7",
    "year": 2025,
    "venue": "Nature Machine Intelligence",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task",
      "model eval"
    ],
    "constructs": [
      "critical thinking/metacognition",
      "trust",
      "reliance/automation bias"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 163
  },
  {
    "id": "kim2024",
    "title": "\"I'm not sure, but...\": examining the impact of large language models' uncertainty expression on user reliance and trust",
    "citation": "Kim, Liao, Vorvoreanu, Ballard & Wortman Vaughan 2024",
    "url": "https://arxiv.org/abs/2405.00623",
    "year": 2024,
    "venue": "FAccT 2024",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance",
      "self-report",
      "behavioural task"
    ],
    "constructs": [
      "reliance/automation bias",
      "trust",
      "decision quality"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 164
  },
  {
    "id": "vaccaro2024",
    "title": "When combinations of humans and AI are useful: a systematic review and meta-analysis",
    "citation": "Vaccaro, Almaatouq & Malone 2024",
    "url": "https://doi.org/10.1038/s41562-024-02024-1",
    "year": 2024,
    "venue": "Nature Human Behaviour",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "meta-analysis",
    "measures": [
      "assisted performance",
      "unaided performance"
    ],
    "constructs": [
      "decision quality",
      "reliance/automation bias",
      "creativity/diversity"
    ],
    "setting": "other",
    "country": "multi",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 174
  },
  {
    "id": "messeri2024",
    "title": "Artificial intelligence and illusions of understanding in scientific research",
    "citation": "Messeri & Crockett 2024",
    "url": "https://doi.org/10.1038/s41586-024-07146-0",
    "year": 2024,
    "venue": "Nature (Perspective)",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "theory",
    "measures": [
      "self-report"
    ],
    "constructs": [
      "critical thinking/metacognition",
      "collective knowledge",
      "expertise"
    ],
    "setting": "science",
    "country": "n/a",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 196
  },
  {
    "id": "shin2023",
    "title": "Superhuman artificial intelligence can improve human decision-making by increasing novelty",
    "citation": "Shin, Kim, van Opheusden & Griffiths 2023",
    "url": "https://doi.org/10.1073/pnas.2214840120",
    "year": 2023,
    "venue": "PNAS",
    "publication": "peer-reviewed",
    "topics": [
      "skills",
      "judgement"
    ],
    "design": "natural experiment",
    "measures": [
      "unaided performance",
      "admin data"
    ],
    "constructs": [
      "skill",
      "decision quality",
      "creativity/diversity",
      "expertise"
    ],
    "setting": "other",
    "country": "multi",
    "studySpan": "years",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 199
  },
  {
    "id": "beane2019",
    "title": "Shadow Learning: Building Robotic Surgical Skill When Approved Means Fail",
    "citation": "Beane 2019",
    "url": "https://doi.org/10.1177/0001839217751692",
    "year": 2019,
    "venue": "Administrative Science Quarterly",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "qualitative",
    "measures": [
      "self-report",
      "behavioural task"
    ],
    "constructs": [
      "expertise pipeline",
      "skill",
      "learning"
    ],
    "setting": "medicine",
    "country": "US",
    "studySpan": "years",
    "repeated": true,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 200
  },
  {
    "id": "rintakahila2023",
    "title": "The Vicious Circles of Skill Erosion: A Case Study of Cognitive Automation",
    "citation": "Rinta-Kahila et al. 2023",
    "url": "https://aisel.aisnet.org/jais/vol24/iss5/2",
    "year": 2023,
    "venue": "Journal of the Association for Information Systems",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "case study",
    "measures": [
      "self-report",
      "admin data"
    ],
    "constructs": [
      "skill",
      "reliance/automation bias",
      "expertise",
      "reversibility"
    ],
    "setting": "finance",
    "country": "unclear",
    "studySpan": "years",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 214
  },
  {
    "id": "lebovitz2022",
    "title": "To engage or not to engage with AI for critical judgments: how professionals deal with opacity when using AI for medical diagnosis",
    "citation": "Lebovitz, Lifshitz-Assaf & Levina 2022",
    "url": "https://doi.org/10.1287/orsc.2021.1549",
    "year": 2022,
    "venue": "Organization Science",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "qualitative",
    "measures": [
      "self-report"
    ],
    "constructs": [
      "expertise",
      "oversight/control",
      "trust",
      "reliance/automation bias"
    ],
    "setting": "medicine",
    "country": "US",
    "studySpan": "unclear",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 215
  },
  {
    "id": "brynjolfsson2025canaries",
    "title": "Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence",
    "citation": "Brynjolfsson, Chandar & Chen 2025 (rev. 2026)",
    "url": "https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine/",
    "year": 2025,
    "venue": "Stanford Digital Economy Lab working paper",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "quasi-experiment",
    "measures": [
      "admin data"
    ],
    "constructs": [
      "expertise pipeline"
    ],
    "setting": "knowledge work",
    "country": "US",
    "studySpan": "years",
    "repeated": true,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 222
  },
  {
    "id": "alonbarkat2023",
    "title": "Human-AI interactions in public sector decision making: 'automation bias' and 'selective adherence' to algorithmic advice",
    "citation": "Alon-Barkat & Busuioc 2023",
    "url": "https://doi.org/10.1093/jopart/muac007",
    "year": 2023,
    "venue": "Journal of Public Administration Research and Theory",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task"
    ],
    "constructs": [
      "reliance/automation bias",
      "decision quality",
      "oversight/control"
    ],
    "setting": "government",
    "country": "Netherlands",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 230
  },
  {
    "id": "stevenson2022",
    "title": "Algorithmic risk assessment in the hands of humans",
    "citation": "Stevenson & Doleac 2022",
    "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3489440",
    "year": 2022,
    "venue": "SSRN working paper",
    "publication": "preprint",
    "topics": [
      "judgement"
    ],
    "design": "quasi-experiment",
    "measures": [
      "admin data"
    ],
    "constructs": [
      "decision quality",
      "oversight/control",
      "reliance/automation bias"
    ],
    "setting": "law",
    "country": "US",
    "studySpan": "years",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 233
  },
  {
    "id": "albright2019",
    "title": "If you give a judge a risk score: evidence from Kentucky bail decisions",
    "citation": "Albright 2019",
    "url": "http://www.law.harvard.edu/programs/olin_center/fellows_papers/pdf/Albright_85.pdf",
    "year": 2019,
    "venue": "Harvard Olin Center Fellows' Discussion Paper",
    "publication": "preprint",
    "topics": [
      "judgement"
    ],
    "design": "natural experiment",
    "measures": [
      "admin data"
    ],
    "constructs": [
      "decision quality",
      "reliance/automation bias",
      "oversight/control"
    ],
    "setting": "law",
    "country": "US",
    "studySpan": "years",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 234
  },
  {
    "id": "angelova2023",
    "title": "Algorithmic recommendations and human discretion",
    "citation": "Angelova, Dobbie & Yang 2023",
    "url": "https://www.nber.org/papers/w31747",
    "year": 2023,
    "venue": "NBER Working Paper 31747 (Review of Economic Studies 2026 per NBER page)",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "quasi-experiment",
    "measures": [
      "admin data"
    ],
    "constructs": [
      "decision quality",
      "expertise",
      "reliance/automation bias",
      "oversight/control"
    ],
    "setting": "law",
    "country": "US",
    "studySpan": "years",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 235
  },
  {
    "id": "hoffman2018",
    "title": "Discretion in hiring",
    "citation": "Hoffman, Kahn & Li 2018",
    "url": "https://doi.org/10.1093/qje/qjx042",
    "year": 2018,
    "venue": "Quarterly Journal of Economics",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "quasi-experiment",
    "measures": [
      "admin data"
    ],
    "constructs": [
      "decision quality",
      "oversight/control",
      "reliance/automation bias"
    ],
    "setting": "other",
    "country": "US",
    "studySpan": "years",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 237
  },
  {
    "id": "faa2013",
    "title": "SAFO 13002: Manual Flight Operations",
    "citation": "FAA 2013",
    "url": "https://www.faa.gov/sites/faa.gov/files/other_visit/aviation_industry/airline_operators/airline_safety/SAFO13002.pdf",
    "year": 2013,
    "venue": "US Federal Aviation Administration",
    "publication": "report",
    "topics": [
      "skills"
    ],
    "design": "review",
    "measures": [
      "admin data"
    ],
    "constructs": [
      "skill",
      "oversight/control",
      "reliance/automation bias"
    ],
    "setting": "aviation",
    "country": "US",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 257
  },
  {
    "id": "magesh2024",
    "title": "Hallucination-free? Assessing the reliability of leading AI legal research tools",
    "citation": "Magesh, Surani, Dahl, Suzgun, Manning & Ho 2024",
    "url": "https://arxiv.org/abs/2405.20362",
    "year": 2024,
    "venue": "arXiv (later Journal of Empirical Legal Studies, not checked)",
    "publication": "preprint",
    "topics": [
      "judgement"
    ],
    "design": "benchmark",
    "measures": [
      "model eval"
    ],
    "constructs": [
      "reliance/automation bias",
      "oversight/control",
      "decision quality"
    ],
    "setting": "law",
    "country": "US",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 261
  },
  {
    "id": "skitka1999",
    "title": "Does automation bias decision-making?",
    "citation": "Skitka, Mosier & Burdick 1999",
    "url": "https://doi.org/10.1006/ijhc.1999.0252",
    "year": 1999,
    "venue": "International Journal of Human-Computer Studies",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task",
      "assisted performance"
    ],
    "constructs": [
      "reliance/automation bias",
      "decision quality"
    ],
    "setting": "aviation",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 265
  },
  {
    "id": "parasuraman2010",
    "title": "Complacency and bias in human use of automation: an attentional integration",
    "citation": "Parasuraman & Manzey 2010",
    "url": "https://doi.org/10.1177/0018720810376055",
    "year": 2010,
    "venue": "Human Factors",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "review",
    "measures": [
      "behavioural task",
      "assisted performance"
    ],
    "constructs": [
      "reliance/automation bias",
      "critical thinking/metacognition"
    ],
    "setting": "aviation",
    "country": "n/a",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 266
  },
  {
    "id": "goddard2012",
    "title": "Automation bias: a systematic review of frequency, effect mediators, and mitigators",
    "citation": "Goddard, Roudsari & Wyatt 2012",
    "url": "https://doi.org/10.1136/amiajnl-2011-000089",
    "year": 2012,
    "venue": "Journal of the American Medical Informatics Association",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "review",
    "measures": [
      "assisted performance"
    ],
    "constructs": [
      "reliance/automation bias",
      "decision quality"
    ],
    "setting": "medicine",
    "country": "multi",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 267
  },
  {
    "id": "lyell2017",
    "title": "Automation bias and verification complexity: a systematic review",
    "citation": "Lyell & Coiera 2017",
    "url": "https://doi.org/10.1093/jamia/ocw105",
    "year": 2017,
    "venue": "Journal of the American Medical Informatics Association",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "review",
    "measures": [
      "assisted performance"
    ],
    "constructs": [
      "reliance/automation bias",
      "oversight/control"
    ],
    "setting": "medicine",
    "country": "multi",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 268
  },
  {
    "id": "dietvorst2015",
    "title": "Algorithm aversion: people erroneously avoid algorithms after seeing them err",
    "citation": "Dietvorst, Simmons & Massey 2015",
    "url": "https://doi.org/10.1037/xge0000033",
    "year": 2015,
    "venue": "Journal of Experimental Psychology: General",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task"
    ],
    "constructs": [
      "trust",
      "reliance/automation bias",
      "decision quality"
    ],
    "setting": "general public",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 269
  },
  {
    "id": "logg2019",
    "title": "Algorithm appreciation: people prefer algorithmic to human judgment",
    "citation": "Logg, Minson & Moore 2019",
    "url": "https://doi.org/10.1016/j.obhdp.2018.12.005",
    "year": 2019,
    "venue": "Organizational Behavior and Human Decision Processes",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task"
    ],
    "constructs": [
      "trust",
      "reliance/automation bias",
      "expertise"
    ],
    "setting": "general public",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 270
  },
  {
    "id": "burton2020",
    "title": "A systematic review of algorithm aversion in augmented decision making",
    "citation": "Burton, Stein & Jensen 2020",
    "url": "https://doi.org/10.1002/bdm.2155",
    "year": 2020,
    "venue": "Journal of Behavioral Decision Making",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "review",
    "measures": [
      "behavioural task"
    ],
    "constructs": [
      "trust",
      "reliance/automation bias",
      "autonomy"
    ],
    "setting": "general public",
    "country": "multi",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 271
  },
  {
    "id": "green2019",
    "title": "Disparate interactions: an algorithm-in-the-loop analysis of fairness in risk assessments",
    "citation": "Green & Chen 2019",
    "url": "https://doi.org/10.1145/3287560.3287563",
    "year": 2019,
    "venue": "FAT* 2019",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task",
      "assisted performance"
    ],
    "constructs": [
      "decision quality",
      "reliance/automation bias",
      "critical thinking/metacognition"
    ],
    "setting": "law",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 272
  },
  {
    "id": "agarwal2023",
    "title": "Combining human expertise with artificial intelligence: experimental evidence from radiology",
    "citation": "Agarwal, Moehring, Rajpurkar & Salz 2023",
    "url": "https://www.nber.org/papers/w31422",
    "year": 2023,
    "venue": "NBER Working Paper 31422",
    "publication": "preprint",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "unaided performance",
      "assisted performance",
      "behavioural task"
    ],
    "constructs": [
      "expertise",
      "reliance/automation bias",
      "decision quality"
    ],
    "setting": "medicine",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 273
  },
  {
    "id": "yu2024",
    "title": "Heterogeneity and predictors of the effects of AI assistance on radiologists",
    "citation": "Yu, Moehring, Banerjee, Salz, Agarwal, Rajpurkar et al. 2024",
    "url": "https://doi.org/10.1038/s41591-024-02850-w",
    "year": 2024,
    "venue": "Nature Medicine",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "unaided performance",
      "assisted performance"
    ],
    "constructs": [
      "expertise",
      "reliance/automation bias",
      "decision quality"
    ],
    "setting": "medicine",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 274
  },
  {
    "id": "dratsch2023",
    "title": "Automation Bias in Mammography: The Impact of Artificial Intelligence BI-RADS Suggestions on Reader Performance",
    "citation": "Dratsch et al. 2023",
    "url": "https://doi.org/10.1148/radiol.222176",
    "year": 2023,
    "venue": "Radiology",
    "publication": "peer-reviewed",
    "topics": [
      "skills",
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance",
      "behavioural task"
    ],
    "constructs": [
      "reliance/automation bias",
      "expertise"
    ],
    "setting": "medicine",
    "country": "Germany",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 275
  },
  {
    "id": "jabbour2023",
    "title": "Measuring the impact of AI in the diagnosis of hospitalized patients: a randomized clinical vignette survey study",
    "citation": "Jabbour, Fouhey, Shepard, ... Sjoding et al. 2023",
    "url": "https://doi.org/10.1001/jama.2023.22295",
    "year": 2023,
    "venue": "JAMA",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance",
      "behavioural task"
    ],
    "constructs": [
      "reliance/automation bias",
      "decision quality",
      "expertise"
    ],
    "setting": "medicine",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 276
  },
  {
    "id": "gaube2021",
    "title": "Do as AI say: susceptibility in deployment of clinical decision-aids",
    "citation": "Gaube et al. 2021",
    "url": "https://doi.org/10.1038/s41746-021-00385-9",
    "year": 2021,
    "venue": "npj Digital Medicine",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance",
      "self-report"
    ],
    "constructs": [
      "reliance/automation bias",
      "expertise",
      "trust"
    ],
    "setting": "medicine",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 277
  },
  {
    "id": "tschandl2020",
    "title": "Human-computer collaboration for skin cancer recognition",
    "citation": "Tschandl et al. 2020",
    "url": "https://doi.org/10.1038/s41591-020-0942-0",
    "year": 2020,
    "venue": "Nature Medicine",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "unaided performance",
      "assisted performance"
    ],
    "constructs": [
      "expertise",
      "reliance/automation bias",
      "decision quality"
    ],
    "setting": "medicine",
    "country": "multi",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 278
  },
  {
    "id": "jacobs2021",
    "title": "How machine-learning recommendations influence clinician treatment selections: the example of antidepressant selection",
    "citation": "Jacobs, Pradier, McCoy, Perlis, Doshi-Velez & Gajos 2021",
    "url": "https://doi.org/10.1038/s41398-021-01224-x",
    "year": 2021,
    "venue": "Translational Psychiatry",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "unaided performance",
      "assisted performance",
      "self-report"
    ],
    "constructs": [
      "reliance/automation bias",
      "decision quality",
      "critical thinking/metacognition"
    ],
    "setting": "medicine",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 279
  },
  {
    "id": "bansal2021",
    "title": "Does the whole exceed its parts? The effect of AI explanations on complementary team performance",
    "citation": "Bansal et al. 2021",
    "url": "https://arxiv.org/abs/2006.14779",
    "year": 2021,
    "venue": "CHI 2021",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance",
      "behavioural task"
    ],
    "constructs": [
      "reliance/automation bias",
      "decision quality",
      "trust"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 280
  },
  {
    "id": "bucinca2021",
    "title": "To trust or to think: cognitive forcing functions can reduce overreliance on AI in AI-assisted decision-making",
    "citation": "Bu\u00e7inca, Malaya & Gajos 2021",
    "url": "https://arxiv.org/abs/2102.09692",
    "year": 2021,
    "venue": "Proceedings of the ACM on Human-Computer Interaction (CSCW)",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance",
      "self-report"
    ],
    "constructs": [
      "reliance/automation bias",
      "critical thinking/metacognition"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 281
  },
  {
    "id": "zhang2020",
    "title": "Effect of confidence and explanation on accuracy and trust calibration in AI-assisted decision making",
    "citation": "Zhang, Liao & Bellamy 2020",
    "url": "https://arxiv.org/abs/2001.02114",
    "year": 2020,
    "venue": "FAT* 2020",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance",
      "behavioural task"
    ],
    "constructs": [
      "trust",
      "reliance/automation bias",
      "decision quality"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 282
  },
  {
    "id": "vasconcelos2023",
    "title": "Explanations can reduce overreliance on AI systems during decision-making",
    "citation": "Vasconcelos, J\u00f6rke, Grunde-McLaughlin, Gerstenberg, Bernstein & Krishna 2023",
    "url": "https://arxiv.org/abs/2212.06823",
    "year": 2023,
    "venue": "Proceedings of the ACM on Human-Computer Interaction (CSCW)",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance",
      "behavioural task"
    ],
    "constructs": [
      "reliance/automation bias",
      "critical thinking/metacognition"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 283
  },
  {
    "id": "gajos2022",
    "title": "Do people engage cognitively with AI? Impact of AI assistance on incidental learning",
    "citation": "Gajos & Mamykina 2022",
    "url": "https://arxiv.org/abs/2202.05402",
    "year": 2022,
    "venue": "IUI 2022",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance",
      "unaided performance"
    ],
    "constructs": [
      "learning",
      "reliance/automation bias",
      "decision quality"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 284
  },
  {
    "id": "he2023",
    "title": "Knowing about knowing: an illusion of human competence can hinder appropriate reliance on AI systems",
    "citation": "He, Kuiper & Gadiraju 2023",
    "url": "https://arxiv.org/abs/2301.11333",
    "year": 2023,
    "venue": "CHI 2023",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "self-report",
      "assisted performance",
      "unaided performance"
    ],
    "constructs": [
      "critical thinking/metacognition",
      "reliance/automation bias"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 285
  },
  {
    "id": "schemmer2023",
    "title": "Appropriate reliance on AI advice: conceptualization and the effect of explanations",
    "citation": "Schemmer, K\u00fchl, Benz, Bartos & Satzger 2023",
    "url": "https://arxiv.org/abs/2302.02187",
    "year": 2023,
    "venue": "IUI 2023",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance",
      "unaided performance"
    ],
    "constructs": [
      "reliance/automation bias",
      "trust"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 286
  },
  {
    "id": "chen2023",
    "title": "Understanding the role of human intuition on reliance in human-AI decision-making with explanations",
    "citation": "Chen, Liao, Wortman Vaughan & Bansal 2023",
    "url": "https://arxiv.org/abs/2301.07255",
    "year": 2023,
    "venue": "Proceedings of the ACM on Human-Computer Interaction (CSCW)",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "qualitative",
    "measures": [
      "self-report",
      "assisted performance"
    ],
    "constructs": [
      "reliance/automation bias",
      "critical thinking/metacognition"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 287
  },
  {
    "id": "lai2023",
    "title": "Towards a science of human-AI decision making: a survey of empirical studies",
    "citation": "Lai, Chen, Liao, Smith-Renner & Tan 2023",
    "url": "https://arxiv.org/abs/2112.11471",
    "year": 2023,
    "venue": "FAccT 2023 (arXiv 2021)",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "review",
    "measures": [
      "assisted performance",
      "self-report"
    ],
    "constructs": [
      "reliance/automation bias",
      "decision quality",
      "trust"
    ],
    "setting": "other",
    "country": "n/a",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 288
  },
  {
    "id": "passi2022",
    "title": "Overreliance on AI: literature review",
    "citation": "Passi & Vorvoreanu 2022",
    "url": "https://www.microsoft.com/en-us/research/publication/overreliance-on-ai-literature-review/",
    "year": 2022,
    "venue": "Microsoft Research technical report MSR-TR-2022-12",
    "publication": "report",
    "topics": [
      "judgement"
    ],
    "design": "review",
    "measures": [
      "assisted performance",
      "self-report"
    ],
    "constructs": [
      "reliance/automation bias",
      "trust",
      "oversight/control"
    ],
    "setting": "other",
    "country": "n/a",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 289
  },
  {
    "id": "goh2024",
    "title": "Large language model influence on diagnostic reasoning: a randomized clinical trial",
    "citation": "Goh, Gallo, Hom, ... Chen et al. 2024",
    "url": "https://doi.org/10.1001/jamanetworkopen.2024.40969",
    "year": 2024,
    "venue": "JAMA Network Open",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance"
    ],
    "constructs": [
      "expertise",
      "decision quality",
      "reliance/automation bias"
    ],
    "setting": "medicine",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 290
  },
  {
    "id": "goh2025",
    "title": "GPT-4 assistance for improvement of physician performance on patient care tasks: a randomized controlled trial",
    "citation": "Goh et al. 2025",
    "url": "https://doi.org/10.1038/s41591-024-03456-y",
    "year": 2025,
    "venue": "Nature Medicine",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance"
    ],
    "constructs": [
      "expertise",
      "decision quality"
    ],
    "setting": "medicine",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 291
  },
  {
    "id": "mcduff2025",
    "title": "Towards accurate differential diagnosis with large language models",
    "citation": "McDuff, Schaekermann, Tu, ... Natarajan et al. 2025",
    "url": "https://arxiv.org/abs/2312.00164",
    "year": 2025,
    "venue": "Nature (2025); arXiv 2312.00164",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "unaided performance",
      "assisted performance",
      "model eval"
    ],
    "constructs": [
      "expertise",
      "decision quality"
    ],
    "setting": "medicine",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 292
  },
  {
    "id": "qazi2025",
    "title": "Automation bias in large language model assisted diagnostic reasoning among AI-trained physicians",
    "citation": "Qazi, Ali, Khawaja, Akhtar, Sheikh & Alizai 2025",
    "url": "https://doi.org/10.1101/2025.08.23.25334280",
    "year": 2025,
    "venue": "medRxiv",
    "publication": "preprint",
    "topics": [
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance"
    ],
    "constructs": [
      "reliance/automation bias",
      "expertise",
      "decision quality"
    ],
    "setting": "medicine",
    "country": "Pakistan",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 293
  },
  {
    "id": "qazi2026",
    "title": "Mitigating automation bias in physician-LLM diagnostic reasoning using behavioral nudges: a randomized controlled trial",
    "citation": "Qazi, Ali, Khawaja, Akhtar, Sheikh & Alizai 2026",
    "url": "https://doi.org/10.64898/2026.06.01.26354596",
    "year": 2026,
    "venue": "medRxiv",
    "publication": "preprint",
    "topics": [
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance"
    ],
    "constructs": [
      "reliance/automation bias",
      "oversight/control",
      "decision quality"
    ],
    "setting": "medicine",
    "country": "Pakistan",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 294
  },
  {
    "id": "bean2026",
    "title": "Reliability of LLMs as medical assistants for the general public: a randomized preregistered study",
    "citation": "Bean, Payne, Parsons, Kirk, ... Rocher & Mahdi 2026",
    "url": "https://doi.org/10.1038/s41591-025-04074-y",
    "year": 2026,
    "venue": "Nature Medicine",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance",
      "model eval"
    ],
    "constructs": [
      "decision quality",
      "reliance/automation bias"
    ],
    "setting": "general public",
    "country": "UK",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 295
  },
  {
    "id": "deverna2024",
    "title": "Fact-checking information from large language models can decrease headline discernment",
    "citation": "DeVerna, Yan, Yang & Menczer 2024",
    "url": "https://doi.org/10.1073/pnas.2322823121",
    "year": 2024,
    "venue": "PNAS",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "behavioural task",
      "self-report"
    ],
    "constructs": [
      "critical thinking/metacognition",
      "beliefs/attitudes",
      "reliance/automation bias"
    ],
    "setting": "general public",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 296
  },
  {
    "id": "si2024",
    "title": "Large language models help humans verify truthfulness - except when they are convincingly wrong",
    "citation": "Si, Goyal, Wu, Zhao, Feng, Daum\u00e9 & Boyd-Graber 2024",
    "url": "https://arxiv.org/abs/2310.12558",
    "year": 2024,
    "venue": "NAACL 2024",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance"
    ],
    "constructs": [
      "reliance/automation bias",
      "critical thinking/metacognition"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 297
  },
  {
    "id": "spatharioti2025",
    "title": "Effects of LLM-based search on decision making: speed, accuracy, and overreliance (earlier title: Comparing traditional and LLM-based search for consumer choice)",
    "citation": "Spatharioti, Rothschild, Goldstein & Hofman 2025",
    "url": "https://arxiv.org/abs/2307.03744",
    "year": 2025,
    "venue": "CHI 2025",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance",
      "self-report"
    ],
    "constructs": [
      "reliance/automation bias",
      "decision quality"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 298
  },
  {
    "id": "yazan2026",
    "title": "The decision to verify: how warmth and user characteristics shape reliance on conversational agents for information search",
    "citation": "Yazan, Situmeang & Verberne 2026",
    "url": "https://arxiv.org/abs/2605.28498",
    "year": 2026,
    "venue": "arXiv",
    "publication": "preprint",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task",
      "self-report"
    ],
    "constructs": [
      "reliance/automation bias",
      "trust"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 299
  },
  {
    "id": "kim2025",
    "title": "Fostering appropriate reliance on large language models: the role of explanations, sources, and inconsistencies",
    "citation": "Kim, Wortman Vaughan, Liao, Lombrozo & Russakovsky 2025",
    "url": "https://arxiv.org/abs/2502.08554",
    "year": 2025,
    "venue": "CHI 2025",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance",
      "self-report"
    ],
    "constructs": [
      "reliance/automation bias",
      "trust"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 300
  },
  {
    "id": "bo2024",
    "title": "To rely or not to rely? Evaluating interventions for appropriate reliance on large language models",
    "citation": "Bo, Wan & Anderson 2024",
    "url": "https://arxiv.org/abs/2412.15584",
    "year": 2024,
    "venue": "arXiv",
    "publication": "preprint",
    "topics": [
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "unaided performance",
      "assisted performance",
      "self-report"
    ],
    "constructs": [
      "reliance/automation bias",
      "critical thinking/metacognition"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 301
  },
  {
    "id": "klingbeil2024",
    "title": "Trust and reliance on AI: an experimental study on the extent and costs of overreliance on AI",
    "citation": "Klingbeil, Gr\u00fctzner & Schreck 2024",
    "url": "https://doi.org/10.1016/j.chb.2024.108352",
    "year": 2024,
    "venue": "Computers in Human Behavior",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task"
    ],
    "constructs": [
      "reliance/automation bias",
      "trust",
      "decision quality"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 302
  },
  {
    "id": "bohm2023",
    "title": "People devalue generative AI's competence but not its advice in addressing societal and personal challenges",
    "citation": "B\u00f6hm, J\u00f6rling, Reiter & Fuchs 2023",
    "url": "https://doi.org/10.1038/s44271-023-00032-x",
    "year": 2023,
    "venue": "Communications Psychology",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "self-report"
    ],
    "constructs": [
      "trust",
      "reliance/automation bias",
      "beliefs/attitudes"
    ],
    "setting": "general public",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 303
  },
  {
    "id": "wilson2025",
    "title": "No thoughts just AI: biased LLM hiring recommendations alter human decision making and limit human autonomy",
    "citation": "Wilson, Sim, Gueorguieva & Caliskan 2025",
    "url": "https://arxiv.org/abs/2509.04404",
    "year": 2025,
    "venue": "AIES 2025",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task"
    ],
    "constructs": [
      "reliance/automation bias",
      "autonomy",
      "decision quality"
    ],
    "setting": "other",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 304
  },
  {
    "id": "schoenegger2024",
    "title": "AI-augmented predictions: LLM assistants improve human forecasting accuracy",
    "citation": "Schoenegger, Park, Karger, Trott & Tetlock 2024",
    "url": "https://arxiv.org/abs/2402.07862",
    "year": 2024,
    "venue": "arXiv (later journal version not checked)",
    "publication": "preprint",
    "topics": [
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance"
    ],
    "constructs": [
      "decision quality",
      "reliance/automation bias"
    ],
    "setting": "other",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 305
  },
  {
    "id": "gerlich2025",
    "title": "AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking",
    "citation": "Gerlich 2025",
    "url": "https://www.mdpi.com/2075-4698/15/1/6",
    "year": 2025,
    "venue": "Societies",
    "publication": "peer-reviewed",
    "topics": [
      "skills",
      "judgement"
    ],
    "design": "cross-sectional survey",
    "measures": [
      "self-report"
    ],
    "constructs": [
      "memory/offloading",
      "critical thinking/metacognition"
    ],
    "setting": "general public",
    "country": "UK",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 306
  },
  {
    "id": "fernandes2025",
    "title": "AI makes you smarter but none the wiser: the disconnect between performance and metacognition",
    "citation": "Fernandes, Villa, Nicholls, Haavisto, Buschek, Schmidt, Kosch, Shen & Welsch 2025",
    "url": "https://doi.org/10.1016/j.chb.2025.108779",
    "year": 2025,
    "venue": "Computers in Human Behavior",
    "publication": "peer-reviewed",
    "topics": [
      "skills",
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance",
      "self-report"
    ],
    "constructs": [
      "critical thinking/metacognition",
      "decision quality"
    ],
    "setting": "general public",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 307
  },
  {
    "id": "stadler2024",
    "title": "Cognitive ease at a cost: LLMs reduce mental effort but compromise depth in student scientific inquiry",
    "citation": "Stadler, Bannert & Sailer 2024",
    "url": "https://doi.org/10.1016/j.chb.2024.108386",
    "year": 2024,
    "venue": "Computers in Human Behavior",
    "publication": "peer-reviewed",
    "topics": [
      "skills",
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "self-report",
      "assisted performance"
    ],
    "constructs": [
      "critical thinking/metacognition",
      "learning",
      "memory/offloading"
    ],
    "setting": "education",
    "country": "Germany",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 308
  },
  {
    "id": "fan2025",
    "title": "Beware of metacognitive laziness: Effects of generative artificial intelligence on learning motivation, processes, and performance",
    "citation": "Fan et al. 2025",
    "url": "https://doi.org/10.1111/bjet.13544",
    "year": 2025,
    "venue": "British Journal of Educational Technology",
    "publication": "peer-reviewed",
    "topics": [
      "skills",
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance",
      "usage logs",
      "self-report",
      "unaided performance"
    ],
    "constructs": [
      "learning",
      "critical thinking/metacognition",
      "dependence"
    ],
    "setting": "education",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 309
  },
  {
    "id": "zhai2024",
    "title": "The effects of over-reliance on AI dialogue systems on students' cognitive abilities: a systematic review",
    "citation": "Zhai, Wibowo & Li 2024",
    "url": "https://doi.org/10.1186/s40561-024-00316-7",
    "year": 2024,
    "venue": "Smart Learning Environments",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "review",
    "measures": [
      "self-report"
    ],
    "constructs": [
      "critical thinking/metacognition",
      "decision quality",
      "dependence"
    ],
    "setting": "education",
    "country": "multi",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 310
  },
  {
    "id": "tankelevitch2024",
    "title": "The metacognitive demands and opportunities of generative AI",
    "citation": "Tankelevitch, Kewenig, Simkute, Scott, Sarkar, Sellen & Rintel 2024",
    "url": "https://arxiv.org/abs/2312.10893",
    "year": 2024,
    "venue": "CHI 2024",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "theory",
    "measures": [],
    "constructs": [
      "critical thinking/metacognition",
      "self-efficacy"
    ],
    "setting": "knowledge work",
    "country": "n/a",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 311
  },
  {
    "id": "kloft2024",
    "title": "\"AI enhances our performance, I have no doubt this one will do the same\": the placebo effect is robust to negative descriptions of AI",
    "citation": "Kloft, Welsch, Kosch & Villa 2024",
    "url": "https://arxiv.org/abs/2309.16606",
    "year": 2024,
    "venue": "CHI 2024",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task",
      "self-report"
    ],
    "constructs": [
      "critical thinking/metacognition",
      "trust"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 312
  },
  {
    "id": "prather2024",
    "title": "The Widening Gap: The Benefits and Harms of Generative AI for Novice Programmers",
    "citation": "Prather et al. 2024",
    "url": "https://arxiv.org/abs/2405.17739",
    "year": 2024,
    "venue": "ICER 2024",
    "publication": "peer-reviewed",
    "topics": [
      "skills",
      "judgement"
    ],
    "design": "qualitative",
    "measures": [
      "behavioural task",
      "neuro/physio",
      "self-report",
      "assisted performance"
    ],
    "constructs": [
      "critical thinking/metacognition",
      "skill",
      "reliance/automation bias",
      "learning",
      "self-efficacy"
    ],
    "setting": "coding",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 313
  },
  {
    "id": "perry2023",
    "title": "Do users write more insecure code with AI assistants?",
    "citation": "Perry, Srivastava, Kumar & Boneh 2023",
    "url": "https://arxiv.org/abs/2211.03622",
    "year": 2023,
    "venue": "ACM CCS 2023",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance",
      "self-report",
      "usage logs"
    ],
    "constructs": [
      "critical thinking/metacognition",
      "reliance/automation bias",
      "decision quality"
    ],
    "setting": "coding",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 314
  },
  {
    "id": "pitts2025",
    "title": "Students' reliance on AI in higher education: identifying contributing factors",
    "citation": "Pitts, Rani, Mildort & Cook 2025",
    "url": "https://arxiv.org/abs/2506.13845",
    "year": 2025,
    "venue": "arXiv",
    "publication": "preprint",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task",
      "self-report"
    ],
    "constructs": [
      "reliance/automation bias",
      "self-efficacy",
      "trust"
    ],
    "setting": "education",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 315
  },
  {
    "id": "shaw2026",
    "title": "Thinking - fast, slow, and artificial: how AI is reshaping human reasoning and the rise of cognitive surrender",
    "citation": "Shaw & Nave 2026",
    "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6097646",
    "year": 2026,
    "venue": "SSRN working paper",
    "publication": "preprint",
    "topics": [
      "judgement"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task",
      "self-report"
    ],
    "constructs": [
      "reliance/automation bias",
      "critical thinking/metacognition"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 316
  },
  {
    "id": "dellacqua2023",
    "title": "Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality",
    "citation": "Dell'Acqua et al. 2023",
    "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321",
    "year": 2023,
    "venue": "HBS Working Paper 24-013 / SSRN",
    "publication": "preprint",
    "topics": [
      "skills",
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance",
      "unaided performance"
    ],
    "constructs": [
      "decision quality",
      "reliance/automation bias",
      "expertise"
    ],
    "setting": "knowledge work",
    "country": "multi",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 317
  },
  {
    "id": "metr2025",
    "title": "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity",
    "citation": "Becker et al. (METR) 2025",
    "url": "https://arxiv.org/abs/2507.09089",
    "year": 2025,
    "venue": "arXiv",
    "publication": "preprint",
    "topics": [
      "skills",
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance",
      "unaided performance",
      "self-report"
    ],
    "constructs": [
      "critical thinking/metacognition",
      "decision quality",
      "dependence"
    ],
    "setting": "coding",
    "country": "multi",
    "studySpan": "months",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 318
  },
  {
    "id": "bucinca2025",
    "title": "Contrastive explanations that anticipate human misconceptions can improve human decision-making skills",
    "citation": "Bu\u00e7inca, Swaroop, Paluch, Doshi-Velez & Gajos 2025",
    "url": "https://arxiv.org/abs/2410.04253",
    "year": 2025,
    "venue": "CHI 2025",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "RCT",
    "measures": [
      "unaided performance",
      "assisted performance",
      "self-report"
    ],
    "constructs": [
      "skill",
      "learning",
      "decision quality"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 319
  },
  {
    "id": "dahl2024",
    "title": "Large legal fictions: profiling legal hallucinations in large language models",
    "citation": "Dahl, Magesh, Suzgun & Ho 2024",
    "url": "https://doi.org/10.1093/jla/laae003",
    "year": 2024,
    "venue": "Journal of Legal Analysis",
    "publication": "peer-reviewed",
    "topics": [
      "judgement"
    ],
    "design": "benchmark",
    "measures": [
      "model eval"
    ],
    "constructs": [
      "reliance/automation bias",
      "critical thinking/metacognition",
      "decision quality"
    ],
    "setting": "law",
    "country": "US",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 320
  },
  {
    "id": "kestin2025",
    "title": "AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting",
    "citation": "Kestin et al. 2025",
    "url": "https://doi.org/10.1038/s41598-025-97652-6",
    "year": 2025,
    "venue": "Scientific Reports",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "RCT",
    "measures": [
      "unaided performance",
      "self-report"
    ],
    "constructs": [
      "learning"
    ],
    "setting": "education",
    "country": "US",
    "studySpan": "weeks",
    "repeated": true,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 321
  },
  {
    "id": "lehmann2024",
    "title": "AI Meets the Classroom: When Do Large Language Models Harm Learning?",
    "citation": "Lehmann, Cornelius & Sting 2024",
    "url": "https://arxiv.org/abs/2409.09047",
    "year": 2024,
    "venue": "arXiv",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "unaided performance",
      "usage logs"
    ],
    "constructs": [
      "learning",
      "skill",
      "reliance/automation bias"
    ],
    "setting": "education",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 322
  },
  {
    "id": "desimone2025",
    "title": "From Chalkboards to Chatbots: Evaluating the Impact of Generative AI on Learning Outcomes in Nigeria",
    "citation": "De Simone et al. 2025",
    "url": "https://openknowledge.worldbank.org/entities/publication/15e1ff08-15ae-4f7a-b2a8-d146e6c113ee",
    "year": 2025,
    "venue": "World Bank Policy Research Working Paper 11125",
    "publication": "report",
    "topics": [
      "skills"
    ],
    "design": "RCT",
    "measures": [
      "unaided performance"
    ],
    "constructs": [
      "learning"
    ],
    "setting": "education",
    "country": "Nigeria",
    "studySpan": "weeks",
    "repeated": true,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 323
  },
  {
    "id": "henkel2024",
    "title": "Effective and Scalable Math Support: Evidence on the Impact of an AI-Tutor on Math Achievement in Ghana",
    "citation": "Henkel et al. 2024",
    "url": "https://arxiv.org/abs/2402.09809",
    "year": 2024,
    "venue": "arXiv (AIED-related)",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "field experiment",
    "measures": [
      "unaided performance"
    ],
    "constructs": [
      "learning"
    ],
    "setting": "education",
    "country": "Ghana",
    "studySpan": "months",
    "repeated": true,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 324
  },
  {
    "id": "wang2024tutorcopilot",
    "title": "Tutor CoPilot: A Human-AI Approach for Scaling Real-Time Expertise",
    "citation": "Wang et al. 2024",
    "url": "https://arxiv.org/abs/2410.03017",
    "year": 2024,
    "venue": "arXiv / EdWorkingPaper 24-1054",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance",
      "usage logs",
      "self-report"
    ],
    "constructs": [
      "expertise",
      "expertise pipeline",
      "learning"
    ],
    "setting": "education",
    "country": "US",
    "studySpan": "months",
    "repeated": true,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 325
  },
  {
    "id": "melumad2025",
    "title": "Experimental evidence of the effects of large language models versus web search on depth of learning",
    "citation": "Melumad & Yun 2025",
    "url": "https://academic.oup.com/pnasnexus/article/4/10/pgaf316/8303888",
    "year": 2025,
    "venue": "PNAS Nexus",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "unaided performance",
      "self-report",
      "behavioural task"
    ],
    "constructs": [
      "learning",
      "memory/offloading",
      "creativity/diversity"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 326
  },
  {
    "id": "deng2025",
    "title": "Does ChatGPT enhance student learning? A systematic review and meta-analysis of experimental studies",
    "citation": "Deng et al. 2025",
    "url": "https://doi.org/10.1016/j.compedu.2024.105224",
    "year": 2025,
    "venue": "Computers & Education",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "meta-analysis",
    "measures": [
      "unaided performance",
      "self-report"
    ],
    "constructs": [
      "learning",
      "critical thinking/metacognition",
      "self-efficacy"
    ],
    "setting": "education",
    "country": "multi",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 328
  },
  {
    "id": "lawson2026",
    "title": "Color Me Confounded: A Critical Analysis of Media Comparisons on ChatGPT in Education",
    "citation": "Lawson et al. 2026",
    "url": "https://doi.org/10.1016/j.compedu.2026.105701",
    "year": 2026,
    "venue": "Computers & Education",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "review",
    "measures": [
      "unaided performance"
    ],
    "constructs": [
      "learning"
    ],
    "setting": "education",
    "country": "multi",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 329
  },
  {
    "id": "weidlich2025",
    "title": "ChatGPT in Education: An Effect in Search of a Cause",
    "citation": "Weidlich et al. 2025",
    "url": "https://doi.org/10.1111/jcal.70105",
    "year": 2025,
    "venue": "Journal of Computer Assisted Learning",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "review",
    "measures": [
      "unaided performance"
    ],
    "constructs": [
      "learning"
    ],
    "setting": "education",
    "country": "multi",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 330
  },
  {
    "id": "nie2024",
    "title": "The GPT Surprise: Offering Large Language Model Chat in a Massive Coding Class Reduced Engagement but Increased Adopters' Exam Performances",
    "citation": "Nie et al. 2024",
    "url": "https://arxiv.org/abs/2407.09975",
    "year": 2024,
    "venue": "arXiv",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "RCT",
    "measures": [
      "usage logs",
      "unaided performance"
    ],
    "constructs": [
      "learning",
      "dependence"
    ],
    "setting": "coding",
    "country": "multi",
    "studySpan": "weeks",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 331
  },
  {
    "id": "lira2025",
    "title": "Coach not crutch: Evidence that AI can improve writing skill despite reducing effort (earlier title: Learning not cheating)",
    "citation": "Lira et al. 2025",
    "url": "https://arxiv.org/abs/2502.02880",
    "year": 2025,
    "venue": "arXiv",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "RCT",
    "measures": [
      "unaided performance",
      "assisted performance",
      "self-report"
    ],
    "constructs": [
      "skill",
      "learning"
    ],
    "setting": "writing",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 332
  },
  {
    "id": "kumar2023",
    "title": "Math Education with Large Language Models: Peril or Promise?",
    "citation": "Kumar, Rothschild, Goldstein & Hofman 2023",
    "url": "https://papers.ssrn.com/abstract=4641653",
    "year": 2023,
    "venue": "SSRN working paper",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "RCT",
    "measures": [
      "unaided performance",
      "assisted performance"
    ],
    "constructs": [
      "learning",
      "skill"
    ],
    "setting": "education",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 333
  },
  {
    "id": "wecks2024",
    "title": "Generative AI Usage and Exam Performance",
    "citation": "Wecks et al. 2024",
    "url": "https://arxiv.org/abs/2404.19699",
    "year": 2024,
    "venue": "arXiv / ECIS 2025",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "quasi-experiment",
    "measures": [
      "admin data",
      "unaided performance"
    ],
    "constructs": [
      "learning",
      "skill"
    ],
    "setting": "education",
    "country": "unclear",
    "studySpan": "months",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 334
  },
  {
    "id": "kazemitabaar2023",
    "title": "Studying the effect of AI Code Generators on Supporting Novice Learners in Introductory Programming",
    "citation": "Kazemitabaar et al. 2023",
    "url": "https://arxiv.org/abs/2302.07427",
    "year": 2023,
    "venue": "CHI 2023",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance",
      "unaided performance"
    ],
    "constructs": [
      "skill",
      "learning"
    ],
    "setting": "coding",
    "country": "unclear",
    "studySpan": "weeks",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 335
  },
  {
    "id": "kazemitabaar2024codeaid",
    "title": "CodeAid: Evaluating a Classroom Deployment of an LLM-based Programming Assistant that Balances Student and Educator Needs",
    "citation": "Kazemitabaar et al. 2024",
    "url": "https://doi.org/10.1145/3613904.3642773",
    "year": 2024,
    "venue": "CHI 2024",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "qualitative",
    "measures": [
      "usage logs",
      "self-report"
    ],
    "constructs": [
      "learning",
      "reliance/automation bias"
    ],
    "setting": "coding",
    "country": "unclear",
    "studySpan": "months",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 336
  },
  {
    "id": "he2025",
    "title": "Predictive AI Can Support Human Learning while Preserving Error Diversity",
    "citation": "He, Li, Puranam & Lin 2025",
    "url": "https://arxiv.org/abs/2502.16411",
    "year": 2025,
    "venue": "arXiv",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "field experiment",
    "measures": [
      "assisted performance",
      "unaided performance"
    ],
    "constructs": [
      "learning",
      "skill",
      "collective knowledge"
    ],
    "setting": "medicine",
    "country": "unclear",
    "studySpan": "days",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 337
  },
  {
    "id": "hayden2026",
    "title": "Diagnostic reasoning with and without AI: automation bias in pre-clerkship medical students",
    "citation": "Hayden et al. 2026",
    "url": "https://knowledgeconnection.mainehealth.org/mmc/4604",
    "year": 2026,
    "venue": "BMC Medical Education",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "quasi-experiment",
    "measures": [
      "assisted performance",
      "self-report"
    ],
    "constructs": [
      "reliance/automation bias",
      "critical thinking/metacognition",
      "learning"
    ],
    "setting": "medicine",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 338
  },
  {
    "id": "aireview2025deskilling",
    "title": "Mixed-method review of AI-induced deskilling in medicine",
    "citation": "Artificial Intelligence Review 2025 (authors not confirmed)",
    "url": "https://doi.org/10.1007/s10462-025-11352-1",
    "year": 2025,
    "venue": "Artificial Intelligence Review",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "review",
    "measures": [
      "self-report"
    ],
    "constructs": [
      "skill",
      "expertise pipeline",
      "reliance/automation bias"
    ],
    "setting": "medicine",
    "country": "multi",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 339
  },
  {
    "id": "esmo2026scoping",
    "title": "Scoping review of automation bias and deskilling in clinical AI",
    "citation": "ESMO Real World Data & Digital Oncology 2026 scoping review (authors not confirmed)",
    "url": "https://www.sciencedirect.com/science/article/pii/S2949820126000123",
    "year": 2026,
    "venue": "ESMO Real World Data and Digital Oncology",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "review",
    "measures": [
      "assisted performance"
    ],
    "constructs": [
      "skill",
      "reliance/automation bias"
    ],
    "setting": "medicine",
    "country": "multi",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 340
  },
  {
    "id": "noyzhang2023",
    "title": "Experimental evidence on the productivity effects of generative artificial intelligence",
    "citation": "Noy & Zhang 2023",
    "url": "https://doi.org/10.1126/science.adh2586",
    "year": 2023,
    "venue": "Science",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "RCT",
    "measures": [
      "assisted performance",
      "self-report"
    ],
    "constructs": [
      "skill",
      "decision quality"
    ],
    "setting": "writing",
    "country": "US",
    "studySpan": "weeks",
    "repeated": true,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 341
  },
  {
    "id": "choi2023",
    "title": "AI Assistance in Legal Analysis: An Empirical Study",
    "citation": "Choi & Schwarcz 2023",
    "url": "https://papers.ssrn.com/abstract=4539836",
    "year": 2023,
    "venue": "SSRN working paper",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "assisted performance"
    ],
    "constructs": [
      "expertise",
      "decision quality"
    ],
    "setting": "law",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 342
  },
  {
    "id": "otis2023",
    "title": "The Uneven Impact of Generative AI on Entrepreneurial Performance",
    "citation": "Otis et al. 2023",
    "url": "https://www.hks.harvard.edu/centers/cid/publications/uneven-impact-generative-ai-entrepreneurial-performance",
    "year": 2023,
    "venue": "HBS Working Paper 24-042",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "field experiment",
    "measures": [
      "admin data",
      "usage logs"
    ],
    "constructs": [
      "decision quality",
      "expertise"
    ],
    "setting": "knowledge work",
    "country": "Kenya",
    "studySpan": "months",
    "repeated": true,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 343
  },
  {
    "id": "humlum2025",
    "title": "Large Language Models, Small Labor Market Effects (revised as 'Still Waters, Rapid Currents: Early Labor Market Transformation under Generative AI')",
    "citation": "Humlum & Vestergaard 2025",
    "url": "https://www.nber.org/papers/w33777",
    "year": 2025,
    "venue": "NBER Working Paper 33777",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "natural experiment",
    "measures": [
      "self-report",
      "admin data"
    ],
    "constructs": [
      "oversight/control",
      "expertise pipeline"
    ],
    "setting": "knowledge work",
    "country": "Denmark",
    "studySpan": "years",
    "repeated": true,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 224
  },
  {
    "id": "gaessler2023",
    "title": "Training with AI: Evidence from chess computers",
    "citation": "Gaessler & Piezunka 2023",
    "url": "https://doi.org/10.1002/smj.3512",
    "year": 2023,
    "venue": "Strategic Management Journal",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "natural experiment",
    "measures": [
      "unaided performance",
      "admin data"
    ],
    "constructs": [
      "skill",
      "learning",
      "expertise"
    ],
    "setting": "other",
    "country": "unclear",
    "studySpan": "years",
    "repeated": true,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 345
  },
  {
    "id": "sparrow2011",
    "title": "Google effects on memory: Cognitive consequences of having information at our fingertips",
    "citation": "Sparrow, Liu & Wegner 2011",
    "url": "https://doi.org/10.1126/science.1207745",
    "year": 2011,
    "venue": "Science",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task",
      "unaided performance"
    ],
    "constructs": [
      "memory/offloading"
    ],
    "setting": "general public",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 346
  },
  {
    "id": "hesselmann2020",
    "title": "No conclusive evidence that difficult general knowledge questions cause a 'Google Stroop effect'. A replication study",
    "citation": "Hesselmann 2020",
    "url": "https://peerj.com/articles/10325/",
    "year": 2020,
    "venue": "PeerJ",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task"
    ],
    "constructs": [
      "memory/offloading"
    ],
    "setting": "general public",
    "country": "unclear",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 347
  },
  {
    "id": "risko2016",
    "title": "Cognitive Offloading",
    "citation": "Risko & Gilbert 2016",
    "url": "https://doi.org/10.1016/j.tics.2016.07.002",
    "year": 2016,
    "venue": "Trends in Cognitive Sciences",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "review",
    "measures": [
      "behavioural task"
    ],
    "constructs": [
      "memory/offloading",
      "critical thinking/metacognition"
    ],
    "setting": "general public",
    "country": "n/a",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 348
  },
  {
    "id": "storm2017",
    "title": "Using the Internet to access information inflates future use of the Internet to access other information",
    "citation": "Storm, Stone & Benjamin 2017",
    "url": "https://doi.org/10.1080/09658211.2016.1210171",
    "year": 2017,
    "venue": "Memory",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task"
    ],
    "constructs": [
      "memory/offloading",
      "dependence"
    ],
    "setting": "general public",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 349
  },
  {
    "id": "fisher2015",
    "title": "Searching for explanations: How the Internet inflates estimates of internal knowledge",
    "citation": "Fisher, Goddu & Keil 2015",
    "url": "https://doi.org/10.1037/xge0000070",
    "year": 2015,
    "venue": "Journal of Experimental Psychology: General",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "self-report",
      "behavioural task"
    ],
    "constructs": [
      "critical thinking/metacognition",
      "memory/offloading"
    ],
    "setting": "general public",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 350
  },
  {
    "id": "grinschgl2021",
    "title": "Consequences of cognitive offloading: Boosting performance but diminishing memory",
    "citation": "Grinschgl, Papenmeier & Meyerhoff 2021",
    "url": "https://doi.org/10.1177/17470218211008060",
    "year": 2021,
    "venue": "Quarterly Journal of Experimental Psychology",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "behavioural task",
      "unaided performance"
    ],
    "constructs": [
      "memory/offloading",
      "learning"
    ],
    "setting": "general public",
    "country": "Germany",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 351
  },
  {
    "id": "henkel2014",
    "title": "Point-and-Shoot Memories: The Influence of Taking Photos on Memory for a Museum Tour",
    "citation": "Henkel 2014",
    "url": "https://doi.org/10.1177/0956797613504438",
    "year": 2014,
    "venue": "Psychological Science",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "unaided performance"
    ],
    "constructs": [
      "memory/offloading"
    ],
    "setting": "general public",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 352
  },
  {
    "id": "ishikawa2008",
    "title": "Wayfinding with a GPS-based mobile navigation system: A comparison with maps and direct experience",
    "citation": "Ishikawa et al. 2008",
    "url": "https://doi.org/10.1016/j.jenvp.2007.09.002",
    "year": 2008,
    "venue": "Journal of Environmental Psychology",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "field experiment",
    "measures": [
      "unaided performance",
      "behavioural task"
    ],
    "constructs": [
      "skill",
      "memory/offloading"
    ],
    "setting": "general public",
    "country": "Japan",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 353
  },
  {
    "id": "ruginski2019",
    "title": "GPS use negatively affects environmental learning through spatial transformation abilities",
    "citation": "Ruginski et al. 2019",
    "url": "https://doi.org/10.1016/j.jenvp.2019.05.001",
    "year": 2019,
    "venue": "Journal of Environmental Psychology",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "cross-sectional survey",
    "measures": [
      "self-report",
      "unaided performance",
      "behavioural task"
    ],
    "constructs": [
      "skill",
      "memory/offloading"
    ],
    "setting": "general public",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 354
  },
  {
    "id": "hembree1986",
    "title": "Effects of hand-held calculators in precollege mathematics education: A meta-analysis",
    "citation": "Hembree & Dessart 1986",
    "url": "https://doi.org/10.2307/749255",
    "year": 1986,
    "venue": "Journal for Research in Mathematics Education",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "meta-analysis",
    "measures": [
      "unaided performance"
    ],
    "constructs": [
      "skill",
      "learning"
    ],
    "setting": "education",
    "country": "multi",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 355
  },
  {
    "id": "ebbatson2010",
    "title": "The relationship between manual handling performance and recent flying experience in air transport pilots",
    "citation": "Ebbatson et al. 2010",
    "url": "https://doi.org/10.1080/00140130903342349",
    "year": 2010,
    "venue": "Ergonomics",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "unaided performance"
    ],
    "constructs": [
      "skill"
    ],
    "setting": "aviation",
    "country": "UK",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 356
  },
  {
    "id": "bainbridge1983",
    "title": "Ironies of Automation",
    "citation": "Bainbridge 1983",
    "url": "https://doi.org/10.1016/0005-1098(83)90046-8",
    "year": 1983,
    "venue": "Automatica",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "theory",
    "measures": [
      "self-report"
    ],
    "constructs": [
      "skill",
      "oversight/control",
      "expertise pipeline"
    ],
    "setting": "other",
    "country": "n/a",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 357
  },
  {
    "id": "endsley1995",
    "title": "The Out-of-the-Loop Performance Problem and Level of Control in Automation",
    "citation": "Endsley & Kiris 1995",
    "url": "https://doi.org/10.1518/001872095779064555",
    "year": 1995,
    "venue": "Human Factors",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "lab experiment",
    "measures": [
      "unaided performance",
      "behavioural task"
    ],
    "constructs": [
      "oversight/control",
      "reliance/automation bias",
      "skill"
    ],
    "setting": "other",
    "country": "US",
    "studySpan": "single session",
    "repeated": false,
    "unaidedTest": true,
    "generativeAI": false,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 358
  },
  {
    "id": "simkute2024",
    "title": "Ironies of Generative AI: Understanding and mitigating productivity loss in human-AI interactions",
    "citation": "Simkute et al. 2024",
    "url": "https://arxiv.org/abs/2402.11364",
    "year": 2024,
    "venue": "arXiv (later IJHCI)",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "theory",
    "measures": [
      "self-report"
    ],
    "constructs": [
      "oversight/control",
      "skill",
      "reliance/automation bias"
    ],
    "setting": "knowledge work",
    "country": "n/a",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 359
  },
  {
    "id": "macnamara2024",
    "title": "Does using artificial intelligence assistance accelerate skill decay and hinder skill development without performers' awareness?",
    "citation": "Macnamara et al. (2024). Theoretical review, Cognitive Research: Principles and Implications.",
    "url": "https://doi.org/10.1186/s41235-024-00572-8",
    "year": 2024,
    "venue": "Cognitive Research: Principles and Implications",
    "publication": "peer-reviewed",
    "topics": [
      "skills"
    ],
    "design": "review",
    "measures": [
      "unaided performance"
    ],
    "constructs": [
      "skill",
      "critical thinking/metacognition",
      "reversibility"
    ],
    "setting": "other",
    "country": "n/a",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 360
  },
  {
    "id": "learnlm2024",
    "title": "LearnLM: Improving Gemini for Learning",
    "citation": "LearnLM Team (Google) 2024",
    "url": "https://arxiv.org/abs/2412.16429",
    "year": 2024,
    "venue": "arXiv",
    "publication": "preprint",
    "topics": [
      "skills"
    ],
    "design": "benchmark",
    "measures": [
      "model eval"
    ],
    "constructs": [
      "learning"
    ],
    "setting": "education",
    "country": "n/a",
    "studySpan": "n/a",
    "repeated": false,
    "unaidedTest": false,
    "generativeAI": true,
    "sourceFile": "research/landscape/master.json",
    "sourceRecord": 361
  }
];
