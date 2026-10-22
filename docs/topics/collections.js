'use strict';

// Imported bibliography and provisional coding. No human-verification status is inherited.
const GD_COLLECTIONS = {
  "capability": [
    {
      "id": "capability:2c8eb3998f72b27a",
      "title": "A Significant Increase in Digital Labor Automation",
      "citation": "CAIS (Mazeika) 2026",
      "url": "https://safe.ai/blog/significant-increase-in-digital-labor-automation",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "cais-rli-jul26"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "cross-sectional",
      "measures": [
        "RLI automation rate for new models, human-graded"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "CAIS (Mazeika) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "cais-rli-jul26",
          "record": 6
        }
      ]
    },
    {
      "id": "capability:e1e5642831c2299a",
      "title": "AI Agent Reliability Tracker",
      "citation": "Princeton HAL 2026",
      "url": "https://hal.cs.princeton.edu/reliability",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "hal-reliability"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "Reliability score (0–1) across 12 metrics of consistency, predictability, robustness and safety on GAIA and tau-bench"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Princeton HAL 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "hal-reliability",
          "record": 18
        }
      ]
    },
    {
      "id": "capability:4aad560dfc2bc2d4",
      "title": "APEX-Agents (AI Productivity Index for Agents)",
      "citation": "Mercor 2026",
      "url": "https://www.mercor.com/apex/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "apex-agents"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "Pass@1 on multi-hour tasks for banking analysts, consultants and corporate lawyers in realistic tool environments"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Mercor 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "apex-agents",
          "record": 17
        }
      ]
    },
    {
      "id": "capability:9cfeb03334d65abb",
      "title": "ARC-AGI-3",
      "citation": "ARC Prize Foundation 2026",
      "url": "https://arxiv.org/abs/2603.24621",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "arc-agi-3"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "% of novel interactive game environments solved (humans: 100%)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "ARC Prize Foundation 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "arc-agi-3",
          "record": 13
        }
      ]
    },
    {
      "id": "capability:989cdb20db3d4b8b",
      "title": "Can AI automate Epoch?",
      "citation": "Hong & Burnham (Epoch AI) 2026",
      "url": "https://epoch.ai/publications/can-ai-automate-epoch",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "epoch-automate-epoch"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "qualitative",
      "measures": [
        "Rubric grades on 11 of Epoch's own work tasks for six Sep 2026 models"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Hong & Burnham (Epoch AI) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "epoch-automate-epoch",
          "record": 34
        }
      ]
    },
    {
      "id": "capability:81c6127951a4fa7a",
      "title": "Clarifying limitations of time horizon",
      "citation": "METR 2026",
      "url": "https://metr.org/notes/2026-01-22-time-horizon-limitations/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "metr-limits"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "review",
      "measures": [
        "Stated limits of the time-horizon metric"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "METR 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "metr-limits",
          "record": 22
        }
      ]
    },
    {
      "id": "capability:24086a0d02298da6",
      "title": "Epoch AI Benchmarking Hub: FrontierMath and FrontierMath Erdős",
      "citation": "Epoch AI 2026",
      "url": "https://epoch.ai/benchmarks",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "frontiermath-erdos"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "Problems solved: research maths (FrontierMath tiers) and Erdős problems proved in Lean"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Epoch AI 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "frontiermath-erdos",
          "record": 15
        }
      ]
    },
    {
      "id": "capability:b029bfc231e620cc",
      "title": "Epoch AI Trends dashboard",
      "citation": "Epoch AI 2026",
      "url": "https://epoch.ai/trends",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "epoch-compute"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "Training compute of frontier language models (growth per year); training cost; chip price-performance"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Epoch AI 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "epoch-compute",
          "record": 10
        }
      ]
    },
    {
      "id": "capability:1e789c5e867da818",
      "title": "Epoch Capabilities Index (ECI) and frontier trend",
      "citation": "Epoch AI 2026",
      "url": "https://epoch.ai/data-insights/eci-frontier-trend",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "epoch-eci"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "Composite capability score (arbitrary units; GPT-5 = 150) fitted across Epoch's benchmark hub (89 benchmarks tracked)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Epoch AI 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "epoch-eci",
          "record": 4
        }
      ]
    },
    {
      "id": "capability:d05d86b6fe3b45a3",
      "title": "GDPval win-or-tie rate against industry experts",
      "citation": "OpenAI 2025–26",
      "url": "https://openai.com/index/gdpval/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "gdpval"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "% of one-off professional deliverables (44 occupations) judged as good as or better than an expert's"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "OpenAI 2025–26",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "gdpval",
          "record": 7
        }
      ]
    },
    {
      "id": "capability:5d24e844043c2d59",
      "title": "GDPval-AA v2.1",
      "citation": "Artificial Analysis 2026",
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "gdpval-aa"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "Elo from blind pairwise comparisons by an AI judge on the 220 public GDPval tasks, agentic setting"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Artificial Analysis 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "gdpval-aa",
          "record": 8
        }
      ]
    },
    {
      "id": "capability:ac7dc20a3232b84a",
      "title": "How well did forecasters predict 2025 AI progress?",
      "citation": "Ho (Epoch AI) 2026",
      "url": "https://epoch.ai/gradient-updates/how-well-did-forecasters-predict-2025-ai-progress",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "epoch-forecast-check"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "review",
      "measures": [
        "2025 AI Digest survey medians vs outcomes (421 respondents)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Ho (Epoch AI) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "epoch-forecast-check",
          "record": 45
        }
      ]
    },
    {
      "id": "capability:864f9aa5af9c1c54",
      "title": "Humanity's Last Exam scores (Opus 5 launch analysis)",
      "citation": "Artificial Analysis 2026",
      "url": "https://artificialanalysis.ai/articles/opus-5",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "hle",
        "aa-index"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "% of expert-written closed questions answered correctly",
        "Composite index of evaluations run independently by Artificial Analysis (0–100 scale)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Artificial Analysis 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "hle",
          "record": 14
        },
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "aa-index",
          "record": 16
        }
      ]
    },
    {
      "id": "capability:43aa6f41ebe77ebb",
      "title": "LEAP wave 8: timelines",
      "citation": "Forecasting Research Institute LEAP 2026",
      "url": "https://leap.forecastingresearch.org/reports/wave8",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "leap-wave8"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "survey series",
      "measures": [
        "Forecast METR 80% horizon at end-2026; year of 8-hour horizon"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Forecasting Research Institute LEAP 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "leap-wave8",
          "record": 44
        }
      ]
    },
    {
      "id": "capability:783db470f2b38b1f",
      "title": "METR's 14h 50% horizon impacts the economy more than ASI",
      "citation": "LessWrong post 2026",
      "url": "https://www.lesswrong.com/posts/gBwrmcY2uArZSoCtp/metr-s-14h-50-horizon-impacts-the-economy-more-than-asi",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "lw-opus46-sat"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "review",
      "measures": [
        "Critique of the Opus 4.6 horizon jump"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "LessWrong post 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "lw-opus46-sat",
          "record": 36
        }
      ]
    },
    {
      "id": "capability:1ea1559ce6e643d8",
      "title": "OSWorld computer-use benchmark",
      "citation": "Stanford HAI AI Index 2026; OpenAI 2026",
      "url": "https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "osworld",
        "aiindex2026"
      ],
      "format": "tracking",
      "direct": "unclassified",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "% of computer-operating tasks completed (human baseline ~72%)",
        "Annual compilation of benchmark results and gaps (US–China, open–closed)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Stanford HAI AI Index 2026; OpenAI 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous, annual",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "osworld",
          "record": 12
        },
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "aiindex2026",
          "record": 46
        }
      ]
    },
    {
      "id": "capability:5f1c7812ba8a664b",
      "title": "Q1 2026 Timelines Update",
      "citation": "AI Futures Project 2026",
      "url": "https://blog.aifutures.org/p/q1-2026-timelines-update",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "aifp-q1-2026"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "model",
      "measures": [
        "Median year of Automated Coder"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "AI Futures Project 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "aifp-q1-2026",
          "record": 41
        }
      ]
    },
    {
      "id": "capability:3022a4e57e7b64f2",
      "title": "Reliability of LLMs as medical assistants for the general public: a randomized preregistered study (Nature Medicine)",
      "citation": "Bean et al. 2026",
      "url": "https://syntheticsociety.oii.ox.ac.uk/research/reliability-llms-medical-assistants",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "bean2026-natmed"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "RCT",
      "measures": [
        "Correct identification of conditions by public participants with vs without LLMs (n=1,298)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Bean et al. 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "bean2026-natmed",
          "record": 27
        }
      ]
    },
    {
      "id": "capability:210b0ed096fd3473",
      "title": "Remote Labor Index (RLI) leaderboard",
      "citation": "CAIS & Scale AI 2025–26",
      "url": "https://labs.scale.com/leaderboard/rli",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "rli"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "Automation rate: % of real paid remote-work projects where human graders judge the AI deliverable acceptable (as good as the professional's)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "CAIS & Scale AI 2025–26",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "rli",
          "record": 5
        }
      ]
    },
    {
      "id": "capability:bc0d7082af2a1129",
      "title": "SWE-Bench Pro (public set) leaderboard",
      "citation": "Scale AI 2026",
      "url": "https://labs.scale.com/leaderboard/swe_bench_pro_public",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "swebench-pro"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "% of real software issues resolved under a standard scaffold"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Scale AI 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "swebench-pro",
          "record": 11
        }
      ]
    },
    {
      "id": "capability:5138f3607a78b007",
      "title": "Summary of METR's predeployment evaluation of Claude Opus 5.5",
      "citation": "METR 2026",
      "url": "https://metr.org/blog/2026-09-22-claude-opus-5-5/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "metr-opus55"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "cross-sectional",
      "measures": [
        "Qualitative comparison on five AI R&D tasks; no time horizon reported"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "METR 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "metr-opus55",
          "record": 3
        }
      ]
    },
    {
      "id": "capability:ae64c2698c51c4a9",
      "title": "Summary of METR's predeployment evaluation of GPT-5.6 Sol",
      "citation": "METR 2026",
      "url": "https://metr.org/blog/2026-06-26-gpt-5-6-sol/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "metr-gpt56sol"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "cross-sectional",
      "measures": [
        "50% time horizon of GPT-5.6 Sol under three treatments of cheating attempts"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "METR 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "metr-gpt56sol",
          "record": 2
        }
      ]
    },
    {
      "id": "capability:6f9c9f881a4696fa",
      "title": "Task-Completion Time Horizons of Frontier AI Models",
      "citation": "METR 2026",
      "url": "https://metr.org/time-horizons/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "metr-th"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "Human time (minutes) of the longest software/ML/security task a model completes with 50% (and 80%) success"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "METR 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "metr-th",
          "record": 1
        }
      ]
    },
    {
      "id": "capability:8f302a505a0a7677",
      "title": "The plunging price of thought",
      "citation": "Epoch AI (Emberson & Roodman) 2026",
      "url": "https://epoch.ai/publications/the-plunging-price-of-thought",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "epoch-price"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "Cost (US$) of reaching a fixed benchmark score, reasoning tokens included; average across five benchmarks"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Epoch AI (Emberson & Roodman) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "epoch-price",
          "record": 9
        }
      ]
    },
    {
      "id": "capability:dd0ab8fb69769501",
      "title": "This is the most misunderstood graph in AI",
      "citation": "MIT Technology Review 2026",
      "url": "https://www.technologyreview.com/2026/02/05/1132254/this-is-the-most-misunderstood-graph-in-ai/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "mittr-graph"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "review",
      "measures": [
        "Journalistic review of critiques of METR's graph"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "MIT Technology Review 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "mittr-graph",
          "record": 37
        }
      ]
    },
    {
      "id": "capability:9fbaa2815062e932",
      "title": "Time Horizon 1.1",
      "citation": "METR 2026",
      "url": "https://metr.org/blog/2026-1-29-time-horizon-1-1/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "metr-th11"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "model",
      "measures": [
        "Doubling time of 50% horizon by window and suite version"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "METR 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "metr-th11",
          "record": 21
        }
      ]
    },
    {
      "id": "capability:66e60decf1825ccc",
      "title": "Towards a Science of AI Agent Reliability",
      "citation": "Rabanser, Kapoor, Narayanan et al. 2026",
      "url": "https://arxiv.org/abs/2602.16666",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "rabanser2026"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "cross-sectional",
      "measures": [
        "12 reliability metrics for 15 models on two benchmarks"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Rabanser, Kapoor, Narayanan et al. 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "rabanser2026",
          "record": 35
        }
      ]
    },
    {
      "id": "capability:1b6b251f1e5c2721",
      "title": "We are changing our developer productivity experiment design",
      "citation": "METR 2026",
      "url": "https://metr.org/blog/2026-02-24-uplift-update/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "metr-uplift2026"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "RCT",
      "measures": [
        "Re-run of the developer trial, late 2025"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "METR 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "metr-uplift2026",
          "record": 26
        }
      ]
    },
    {
      "id": "capability:0aa1710a67875e8e",
      "title": "When will the first general AI system be devised, tested, and publicly announced?",
      "citation": "Metaculus 2026",
      "url": "https://www.metaculus.com/questions/5121/date-of-artificial-general-intelligence/",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "metaculus-agi"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "survey series",
      "measures": [
        "Community median date (strong AGI definition incl. robotics)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Metaculus 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "metaculus-agi",
          "record": 42
        }
      ]
    },
    {
      "id": "capability:a09fb6fd80e8cc1e",
      "title": "Why we no longer evaluate SWE-bench Verified",
      "citation": "OpenAI 2026",
      "url": "https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "openai-swebv"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "cross-sectional",
      "measures": [
        "Share of audited benchmark problems with material flaws; memorisation checks"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "OpenAI 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "openai-swebv",
          "record": 30
        }
      ]
    },
    {
      "id": "capability:c2d8873d1af1970f",
      "title": "AI 2027",
      "citation": "Kokotajlo et al. (AI Futures Project) 2025",
      "url": "https://ai-2027.com/",
      "year": 2025,
      "kind": "forecast",
      "rawIds": [
        "ai2027"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "model",
      "measures": [
        "Scenario milestones: superhuman coder, superintelligence"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Kokotajlo et al. (AI Futures Project) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "ai2027",
          "record": 40
        }
      ]
    },
    {
      "id": "capability:8a26cb171863b1c8",
      "title": "About 30% of Humanity's Last Exam chemistry/biology answers are likely wrong",
      "citation": "FutureHouse 2025",
      "url": "https://futurehouse.org/research/hle-exam",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "futurehouse-hle"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "cross-sectional",
      "measures": [
        "Share of HLE text-only chemistry and biology answers contradicted by peer-reviewed literature (321 questions)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "FutureHouse 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "futurehouse-hle",
          "record": 31
        }
      ]
    },
    {
      "id": "capability:21744944846be2ee",
      "title": "Frontier AI Trends Report",
      "citation": "UK AI Security Institute 2025",
      "url": "https://aisi.gov.uk/frontier-ai-trends-report",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "aisi-trends"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "tracker",
      "measures": [
        "Success on hour-plus software tasks; length of cyber tasks completed; apprentice- and expert-level cyber task success"
      ],
      "constructs": [],
      "setting": "population",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "UK AI Security Institute 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "aisi-trends",
          "record": 19
        }
      ]
    },
    {
      "id": "capability:fcfad95390ed93f2",
      "title": "GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks",
      "citation": "OpenAI 2025",
      "url": "https://arxiv.org/abs/2510.04374",
      "year": 2025,
      "kind": "framework",
      "rawIds": [
        "gdpval-paper"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "cross-sectional",
      "measures": [
        "1,320 tasks (220 public) in 44 occupations, blind expert grading"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "OpenAI 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "gdpval-paper",
          "record": 47
        }
      ]
    },
    {
      "id": "capability:ea3ed5b00325bea8",
      "title": "How Does Time Horizon Vary Across Domains?",
      "citation": "Kwa & Cheng (METR) 2025",
      "url": "https://metr.org/blog/2025-07-14-how-does-time-horizon-vary-across-domains/",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "metr-domains"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "model",
      "measures": [
        "Time horizons and doubling times re-estimated from nine existing benchmarks"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Kwa & Cheng (METR) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "metr-domains",
          "record": 23
        }
      ]
    },
    {
      "id": "capability:040a5e8e08d3cccd",
      "title": "Human+Agent Productivity Index (UpBench)",
      "citation": "Upwork 2025",
      "url": "https://www.upwork.com/human-agent-productivity-index",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "upwork-hapi"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "cross-sectional",
      "measures": [
        "Completion of 322 real Upwork jobs by agents alone vs with expert feedback"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Upwork 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "upwork-hapi",
          "record": 33
        }
      ]
    },
    {
      "id": "capability:ddd93038c44fbd36",
      "title": "Measuring AI Ability to Complete Long Software Tasks",
      "citation": "Kwa et al. (METR) 2025",
      "url": "https://arxiv.org/abs/2503.14499",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "kwa2025"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "model",
      "measures": [
        "50% time horizon across 2019–2025 models"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Kwa et al. (METR) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "kwa2025",
          "record": 20
        }
      ]
    },
    {
      "id": "capability:ea3e8f6ca91c7dba",
      "title": "Measuring the impact of early-2025 AI on experienced open-source developer productivity",
      "citation": "METR 2025",
      "url": "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "metr-rct2025"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "RCT",
      "measures": [
        "Task completion time with vs without AI tools (16 developers, 246 tasks)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "METR 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "metr-rct2025",
          "record": 25
        }
      ]
    },
    {
      "id": "capability:224fdf7572926ffd",
      "title": "Measuring what Matters: Construct Validity in Large Language Model Benchmarks",
      "citation": "Bean et al. 2025",
      "url": "https://www.oii.ox.ac.uk/study-identifies-weaknesses-in-how-ai-systems-are-evaluated/",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "bean2025-construct"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "review",
      "measures": [
        "Methodological quality of 445 LLM benchmarks"
      ],
      "constructs": [],
      "setting": "population",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Bean et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "bean2025-construct",
          "record": 28
        }
      ]
    },
    {
      "id": "capability:dbdceb89a59c69b7",
      "title": "Research update: Towards reconciling slowdown with time horizons",
      "citation": "Rein (METR) 2025",
      "url": "https://metr.org/blog/2025-08-12-research-update-towards-reconciling-slowdown-with-time-horizons/",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "metr-holistic"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "cross-sectional",
      "measures": [
        "Share of agent pull requests passing tests vs mergeable after human review"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Rein (METR) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "metr-holistic",
          "record": 24
        }
      ]
    },
    {
      "id": "capability:36475d34753733c8",
      "title": "The Leaderboard Illusion",
      "citation": "Singh et al. 2025",
      "url": "https://arxiv.org/abs/2504.20879",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "leaderboard-illusion"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "cross-sectional",
      "measures": [
        "Effects of private testing and data access on Chatbot Arena rankings"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Singh et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "leaderboard-illusion",
          "record": 39
        }
      ]
    },
    {
      "id": "capability:ef33e3e91126f3bc",
      "title": "TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks",
      "citation": "Xu et al. 2024–25",
      "url": "https://arxiv.org/abs/2412.14161",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "agentcompany"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "capability"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of simulated software-company tasks completed autonomously"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Xu et al. 2024–25",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "agentcompany",
          "record": 32
        }
      ]
    },
    {
      "id": "capability:420c48ee4c61fe6c",
      "title": "Thousands of AI Authors on the Future of AI",
      "citation": "Grace et al. (AI Impacts) 2024",
      "url": "https://arxiv.org/abs/2401.02843",
      "year": 2024,
      "kind": "forecast",
      "rawIds": [
        "grace2024"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "survey series",
      "measures": [
        "Researchers' probability of HLMI and full automation of occupations by year (n=2,778, surveyed 2023)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Grace et al. (AI Impacts) 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "grace2024",
          "record": 43
        }
      ]
    },
    {
      "id": "capability:a8884d91fa62cc60",
      "title": "Navigating the Jagged Technological Frontier (HBS WP 24-013)",
      "citation": "Dell'Acqua et al. 2023",
      "url": "https://www.hbs.edu/faculty/Pages/item.aspx?num=64700",
      "year": 2023,
      "kind": "study",
      "rawIds": [
        "dellacqua2023"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "RCT",
      "measures": [
        "Consultant output, speed and correctness with GPT-4 (n=758, BCG)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Dell'Acqua et al. 2023",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "dellacqua2023",
          "record": 29
        }
      ]
    },
    {
      "id": "capability:40015abb6ee841c9",
      "title": "Mapping global dynamics of benchmark creation and saturation in artificial intelligence (Nature Communications)",
      "citation": "Ott et al. 2022",
      "url": "https://www.nature.com/articles/s41467-022-34591-0",
      "year": 2022,
      "kind": "study",
      "rawIds": [
        "ott2022"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "capability"
      ],
      "design": "review",
      "measures": [
        "Saturation dynamics across thousands of AI benchmark results"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Ott et al. 2022",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/capability.jsonl",
          "sourceId": "ott2022",
          "record": 38
        }
      ]
    }
  ],
  "adoption": [
    {
      "id": "adoption:f7ad4793caf857e4",
      "title": "64% of 16-24-year-olds used AI in 2025",
      "citation": "Eurostat 2026",
      "url": "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/edn-20260210-1",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "eurostat-indiv-genai"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "official statistic",
      "measures": [
        "% of people aged 16-74 who used generative AI tools in the past 3 months (private, work, education)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "EU",
      "studySpan": "unclear",
      "venue": "Eurostat 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "eurostat-indiv-genai",
          "record": 9
        }
      ]
    },
    {
      "id": "adoption:369b78e6451c4886",
      "title": "AI Search Stats 2026: market share, referral and citation data",
      "citation": "Similarweb 2026",
      "url": "https://aisearch.similarweb.com/blog/gen-ai-stats/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "similarweb-genai"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "platform data",
      "measures": [
        "monthly visits and unique visitors to generative AI websites; ChatGPT share of visits"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Similarweb 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "similarweb-genai",
          "record": 38
        }
      ]
    },
    {
      "id": "adoption:4e91b46d76e27d14",
      "title": "AI use by individuals surges across the OECD as adoption by firms continues to expand",
      "citation": "OECD 2026",
      "url": "https://www.oecd.org/en/about/news/announcements/2026/01/ai-use-by-individuals-surges-across-the-oecd-as-adoption-by-firms-continues-to-expand.html",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "oecd-ict-indiv"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "official statistic",
      "measures": [
        "% of individuals using generative AI tools; % of firms using AI (OECD ICT Access and Usage database)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "OECD 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "oecd-ict-indiv",
          "record": 10
        }
      ]
    },
    {
      "id": "adoption:95874f8c9cd0cfcb",
      "title": "Adoption Monitor: How fast are individuals and firms adopting AI?",
      "citation": "Stanford Digital Economy Lab 2026",
      "url": "https://digitaleconomy.stanford.edu/project/indicators/adoptionmonitor/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "stanford-adoption-monitor"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "tracker",
      "measures": [
        "compilation of individual and firm adoption surveys (Gallup, Bick et al., Hartley et al., Yotzov/Barrero/Bloom, Pew)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Stanford Digital Economy Lab 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "stanford-adoption-monitor",
          "record": 14
        }
      ]
    },
    {
      "id": "adoption:f0fd62ea8dbc6aac",
      "title": "Adoption and investment in AI across the euro area: insights from harmonised firm-level data (ECB Occasional Paper 395)",
      "citation": "Ferrando et al. (ECB) 2026",
      "url": "https://econpapers.repec.org/RePEc:ecb:ecbops:2026395",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "ecb-safe-ai"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "cross-sectional",
      "measures": [
        "SAFE survey modules (Jun and Dec 2025), ~6,000 firms in 12 euro-area countries: any AI use and self-rated significance"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "EU",
      "studySpan": "unclear",
      "venue": "Ferrando et al. (ECB) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "ecb-safe-ai",
          "record": 27
        }
      ]
    },
    {
      "id": "adoption:b2f46f4208e66466",
      "title": "Analysis on artificial intelligence use by businesses in Canada, second quarter of 2026",
      "citation": "Statistics Canada 2026",
      "url": "https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2026010-eng.htm",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "statcan-cbsc"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "official statistic",
      "measures": [
        "% of businesses using AI to produce goods or deliver services in the previous 12 months"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "Canada",
      "studySpan": "unclear",
      "venue": "Statistics Canada 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "statcan-cbsc",
          "record": 26
        }
      ]
    },
    {
      "id": "adoption:428f6ba6fc7bede2",
      "title": "Anthropic Economic Index report, January 2026",
      "citation": "Anthropic 2026",
      "url": "https://www.anthropic.com/research/anthropic-economic-index-january-2026-report",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "anthropic-jan2026-convergence"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "log analysis",
      "measures": [
        "Gini of per-capita Claude use across US states and countries, Aug vs Nov 2025"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Anthropic 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "anthropic-jan2026-convergence",
          "record": 35
        }
      ]
    },
    {
      "id": "adoption:a75091bdf883e962",
      "title": "Artificial Intelligence Adoption by Ramp Businesses: Overall (RAMPAIALL)",
      "citation": "Ramp Economics Lab / FRED 2026",
      "url": "https://fred.stlouisfed.org/data/RAMPAIALL",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "ramp-ai-index"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "platform data",
      "measures": [
        "% of Ramp customer businesses (70,000+) with a payment to an AI product or service in the month"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Ramp Economics Lab / FRED 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "ramp-ai-index",
          "record": 30
        }
      ]
    },
    {
      "id": "adoption:1c77c146862d0996",
      "title": "Artificial intelligence in UK businesses: 2023 to 2026",
      "citation": "ONS 2026",
      "url": "https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "ons-bics",
        "ons-bics-intensity"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "official statistic",
      "measures": [
        "% of UK businesses using at least one listed AI technology (BICS)",
        "extent of AI use within businesses; share of employees using AI in daily work"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "ONS 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly, one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "ons-bics",
          "record": 24
        },
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "ons-bics-intensity",
          "record": 25
        }
      ]
    },
    {
      "id": "adoption:f0d2a16957b993cd",
      "title": "ChatGPT weekly active users",
      "citation": "OpenAI announcements via TechCrunch 2025-26",
      "url": "https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "chatgpt-wau"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "platform data",
      "measures": [
        "ChatGPT weekly active users (company-announced)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "OpenAI announcements via TechCrunch 2025-26",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "chatgpt-wau",
          "record": 37
        }
      ]
    },
    {
      "id": "adoption:f3850220428920a7",
      "title": "Economists' forecasts of share of US work hours assisted by genAI (NBER w35046)",
      "citation": "Forecasting Research Institute (LEAP) 2026",
      "url": "https://www.nber.org/papers/w35046",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "fri-leap-hours"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "model",
      "measures": [
        "share of US work hours assisted by generative AI in 2030 and 2050"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Forecasting Research Institute (LEAP) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "fri-leap-hours",
          "record": 47
        }
      ]
    },
    {
      "id": "adoption:ad653b6e26e7dccd",
      "title": "Gallup indicator: Artificial intelligence (AI use at work, quarterly)",
      "citation": "Gallup 2026",
      "url": "https://www.gallup.com/699797/indicator-artificial-intelligence.aspx",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "gallup-work",
        "gallup-org",
        "gallup-industry-daily"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "% of employed US adults using AI in their role: a few times a year or more / a few times a week or more / daily",
        "% of employees saying their organisation has integrated AI (yes/no/don't know)",
        "% of employees using AI daily, by industry"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Gallup 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "gallup-work",
          "record": 1
        },
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "gallup-org",
          "record": 2
        },
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "gallup-industry-daily",
          "record": 3
        }
      ]
    },
    {
      "id": "adoption:5cddd4efde2cbd04",
      "title": "Generative AI, adoption rate for work: employed adults (RPSGENAIUSAGESHAREWORK)",
      "citation": "Bick, Blandin & Deming / FRED 2026",
      "url": "https://fred.stlouisfed.org/series/RPSGENAIUSAGESHAREWORK",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "rps-work"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "% of employed adults 18-64 who use generative AI for their job"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Bick, Blandin & Deming / FRED 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "rps-work",
          "record": 4
        }
      ]
    },
    {
      "id": "adoption:5691019380019498",
      "title": "Generative AI, adoption rate overall: working-age adults (RPSGENAIUSAGESHAREALL)",
      "citation": "Bick, Blandin & Deming / FRED 2026",
      "url": "https://fred.stlouisfed.org/data/RPSGENAIUSAGESHAREALL",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "rps-all"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "% of adults 18-64 who use generative AI for any purpose"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Bick, Blandin & Deming / FRED 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "rps-all",
          "record": 5
        }
      ]
    },
    {
      "id": "adoption:0a1a224e884b8eed",
      "title": "Generative AI, work hours assisted, by occupation group (e.g. RPSGENAIWORKHOURSASSILCIA, production occupations)",
      "citation": "Bick, Blandin & Deming / FRED 2026",
      "url": "https://fred.stlouisfed.org/data/RPSGENAIWORKHOURSASSILCIA",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "rps-hours-occ"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "% of work hours assisted by generative AI within each major occupation group"
      ],
      "constructs": [],
      "setting": "group",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Bick, Blandin & Deming / FRED 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "rps-hours-occ",
          "record": 7
        }
      ]
    },
    {
      "id": "adoption:4f0c5444c82a6374",
      "title": "Generative AI, work hours assisted: employed adults (RPSGENAIASSISTWRKHRSALL)",
      "citation": "Bick, Blandin & Deming / FRED 2026",
      "url": "https://fred.stlouisfed.org/series/RPSGENAIASSISTWRKHRSALL",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "rps-hours",
        "hours-per-user-derived"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "% of all work hours (users and non-users) in which generative AI was actively used; midpoint of bracketed days x minutes",
        "share of an adopter's work hours assisted (approx. RPS hours share divided by work adoption rate)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Bick, Blandin & Deming / FRED 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "rps-hours",
          "record": 6
        },
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "hours-per-user-derived",
          "record": 49
        }
      ]
    },
    {
      "id": "adoption:e3c42055c75936f3",
      "title": "How Teens Use and View AI",
      "citation": "Pew Research Center 2026",
      "url": "https://www.pewresearch.org/internet/2026/02/24/how-teens-use-and-view-ai/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "pew-teens"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "% of US teens 13-17 using AI chatbots for schoolwork, and how much"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Pew Research Center 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "pew-teens",
          "record": 16
        }
      ]
    },
    {
      "id": "adoption:dc3d956744e47e8c",
      "title": "Large Firms With at Least 20 Employees Biggest AI Users",
      "citation": "US Census Bureau 2026",
      "url": "https://www.census.gov/library/stories/2026/05/ai-use-businesses.html",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "census-btos",
        "census-expectations"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "official statistic",
      "measures": [
        "% of employer businesses using AI in any business function in the last two weeks (firm-weighted)",
        "% of firms expecting to use AI in the next six months"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "US Census Bureau 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "biweekly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "census-btos",
          "record": 18
        },
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "census-expectations",
          "record": 46
        }
      ]
    },
    {
      "id": "adoption:3866987c1937bd1d",
      "title": "Microsoft 2026 Q2 Global AI Diffusion Report (as reported)",
      "citation": "Kyunghyang Shinmun 2026 (reporting Microsoft)",
      "url": "https://www.khan.co.kr/en/article/202609281402017",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "msft-diffusion-q2-2026"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "platform data",
      "measures": [
        "as msft-diffusion"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Kyunghyang Shinmun 2026 (reporting Microsoft)",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "msft-diffusion-q2-2026",
          "record": 33
        }
      ]
    },
    {
      "id": "adoption:4abef89638ceed10",
      "title": "Microsoft AI Diffusion Report 2026 Q1",
      "citation": "Microsoft AI Economy Institute 2026",
      "url": "https://www.microsoft.com/en-us/research/wp-content/uploads/2026/05/Microsoft-AI-Diffusion-Report-2026-Q1.pdf",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "msft-diffusion"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "platform data",
      "measures": [
        "% of people aged 15-64 who used a generative AI product in the period, from Microsoft telemetry adjusted for device share, internet access and population"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Microsoft AI Economy Institute 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "msft-diffusion",
          "record": 32
        }
      ]
    },
    {
      "id": "adoption:4fe414404a3aac1f",
      "title": "Monitoring AI Adoption in the U.S. Economy (FEDS Note)",
      "citation": "Federal Reserve Board 2026 (Survey of Business Uncertainty)",
      "url": "https://www.federalreserve.gov/econres/notes/feds-notes/monitoring-ai-adoption-in-the-u-s-economy-20260403.html",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "sbu-employment-weighted"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "employment-weighted share of firms using AI (executive survey)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Federal Reserve Board 2026 (Survey of Business Uncertainty)",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "sbu-employment-weighted",
          "record": 29
        }
      ]
    },
    {
      "id": "adoption:a6ef1f9e384f9f58",
      "title": "September 2026 Ramp AI Index: Cracks in the AI thesis, part 2",
      "citation": "Ramp 2026",
      "url": "https://ramp.com/data/ai-index-sept-2026",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "ramp-spend"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "platform data",
      "measures": [
        "AI spend per employee per month (top 1% of firms); provider shares"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Ramp 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "ramp-spend",
          "record": 31
        }
      ]
    },
    {
      "id": "adoption:643a831c4cc65ccb",
      "title": "Still Waters, Rapid Currents: Early Labor Market Transformation under Generative AI (NBER w33777, formerly 'Large Language Models, Small Labor Market Effects')",
      "citation": "Humlum & Vestergaard 2025/2026",
      "url": "https://www.nber.org/papers/w33777",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "humlum-still-waters"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "adoption"
      ],
      "design": "quasi-experiment",
      "measures": [
        "earnings and recorded hours of adopters vs non-adopters (diff-in-diff, admin records)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "Denmark",
      "studySpan": "unclear",
      "venue": "Humlum & Vestergaard 2025/2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "humlum-still-waters",
          "record": 44
        }
      ]
    },
    {
      "id": "adoption:4d3336b5b1dc44fd",
      "title": "Student Generative AI Survey 2026",
      "citation": "HEPI 2026",
      "url": "https://www.hepi.ac.uk/reports/student-generative-ai-survey-2026/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "hepi-students"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "% of UK full-time undergraduates using genAI for assessed work; % putting AI text directly into assessed work"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "HEPI 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "hepi-students",
          "record": 17
        }
      ]
    },
    {
      "id": "adoption:a27e8d8fc48a5781",
      "title": "The Microstructure of AI Diffusion: Evidence from Firms, Business Functions, and Worker Tasks (NBER w35141 / CES-WP-26-25)",
      "citation": "Bonney et al. 2026",
      "url": "https://www.nber.org/papers/w35141",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "bonney-2026-microstructure"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "cross-sectional",
      "measures": [
        "BTOS 2026 AI supplement: firm, function and worker-task AI use (Nov 2025-Jan 2026)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Bonney et al. 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "bonney-2026-microstructure",
          "record": 21
        }
      ]
    },
    {
      "id": "adoption:2f456e62d1d8deae",
      "title": "The share of Americans who say they use ChatGPT has more than doubled since 2023",
      "citation": "Pew Research Center 2026",
      "url": "https://www.pewresearch.org/chart/the-share-of-americans-who-say-they-use-chatgpt-has-more-than-doubled-since-2023/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "pew-chatgpt"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "% of US adults who say they ever use ChatGPT (2026 also by other chatbots)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Pew Research Center 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "pew-chatgpt",
          "record": 11
        }
      ]
    },
    {
      "id": "adoption:c1e31a3255ae290d",
      "title": "The state of AI (global executive survey)",
      "citation": "McKinsey 2026",
      "url": "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "mckinsey-state-ai"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "% of respondents whose organisation uses AI in at least one function"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "McKinsey 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "mckinsey-state-ai",
          "record": 28
        }
      ]
    },
    {
      "id": "adoption:7ef74b2b85c9ae97",
      "title": "What Work Does Generative AI Do? (NBER w35677)",
      "citation": "Bick, Blandin, Deming & Schumacher 2026",
      "url": "https://www.nber.org/papers/w35677",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "bick-what-work"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "task-level genAI adoption indexes linked to occupations"
      ],
      "constructs": [],
      "setting": "group",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Bick, Blandin, Deming & Schumacher 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "bick-what-work",
          "record": 42
        }
      ]
    },
    {
      "id": "adoption:2aba8d051378658f",
      "title": "20% of EU enterprises use AI technologies",
      "citation": "Eurostat 2025",
      "url": "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "eurostat-enterprises"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "official statistic",
      "measures": [
        "% of enterprises with 10+ employees using at least one AI technology"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "EU",
      "studySpan": "unclear",
      "venue": "Eurostat 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "eurostat-enterprises",
          "record": 23
        }
      ]
    },
    {
      "id": "adoption:198db9d9aff529ea",
      "title": "AI adoption rate trending down for large companies (Census BTOS, 250+ employees)",
      "citation": "Apollo (Slok) via Willison 2025",
      "url": "https://simonwillison.net/2025/Sep/9/apollo-ai-adoption/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "btos-large-firm-dip"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "official statistic",
      "measures": [
        "% of firms with 250+ employees using AI (old wording), six-survey moving average"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Apollo (Slok) via Willison 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "biweekly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "btos-large-firm-dip",
          "record": 20
        }
      ]
    },
    {
      "id": "adoption:4eb52a51fe3e0f9e",
      "title": "Anthropic Economic Index: geography and the AI Usage Index",
      "citation": "Anthropic 2025",
      "url": "https://www.anthropic.com/research/economic-index-geography",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "anthropic-aui"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "log analysis",
      "measures": [
        "AI Usage Index: country's share of Claude.ai use divided by its share of working-age population"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Anthropic 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "anthropic-aui",
          "record": 34
        }
      ]
    },
    {
      "id": "adoption:459781c41f48dabb",
      "title": "BTOS AI Question Wording Updates",
      "citation": "US Census Bureau 2025",
      "url": "https://www.census.gov/hfp/btos/downloads/AI%20Question%20Wording%20Updates.pdf",
      "year": 2025,
      "kind": "framework",
      "rawIds": [
        "census-wording"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "adoption"
      ],
      "design": "official statistic",
      "measures": [
        "documentation of AI question change ('producing goods or services' to 'any of its business functions')"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "US Census Bureau 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "census-wording",
          "record": 19
        }
      ]
    },
    {
      "id": "adoption:39dae369cee1257f",
      "title": "Digital Progress and Trends Report 2025: Strengthening AI Foundations (factsheet)",
      "citation": "World Bank 2025",
      "url": "https://www.worldbank.org/en/news/factsheet/2025/11/21/strengthening-ai-foundations-emerging-opportunities-for-developing-countries",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "worldbank-dpt-2025"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "adoption"
      ],
      "design": "review",
      "measures": [
        "ChatGPT traffic by income group; internet use and digital skills by income group"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "World Bank 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "worldbank-dpt-2025",
          "record": 39
        }
      ]
    },
    {
      "id": "adoption:b283e8fde4a18d04",
      "title": "Generative AI and news report 2025",
      "citation": "Reuters Institute 2025",
      "url": "https://reutersinstitute.politics.ox.ac.uk/generative-ai-and-news-report-2025-how-people-think-about-ais-role-journalism-and-society",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "reuters-genai-news"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "% using any generative AI tool weekly / ever; six countries (AR, DK, FR, JP, UK, US), ~2,000 each"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Reuters Institute 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "reuters-genai-news",
          "record": 13
        }
      ]
    },
    {
      "id": "adoption:a2d07267e0985333",
      "title": "How People Use ChatGPT (NBER w34255)",
      "citation": "Chatterji et al. 2025",
      "url": "https://www.nber.org/papers/w34255",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "openai-how-people-use"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "log analysis",
      "measures": [
        "ChatGPT consumer messages, Nov 2022-Jul 2025: adoption, work vs non-work share, demographics"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Chatterji et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "openai-how-people-use",
          "record": 36
        }
      ]
    },
    {
      "id": "adoption:a19e708b6b4119e6",
      "title": "The Rapid Adoption of Generative AI (NBER w32966; Management Science 2026)",
      "citation": "Bick, Blandin & Deming 2024/2026",
      "url": "https://www.nber.org/papers/w32966",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "bick-rapid-adoption"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "genAI adoption, work intensity, comparison with PC and internet adoption curves"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Bick, Blandin & Deming 2024/2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "bick-rapid-adoption",
          "record": 40
        }
      ]
    },
    {
      "id": "adoption:1fd5485f62666c18",
      "title": "The State of Generative AI Adoption in 2025",
      "citation": "Bick, Blandin & Deming (St. Louis Fed) 2025",
      "url": "https://www.stlouisfed.org/on-the-economy/2025/nov/state-generative-ai-adoption-2025",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "stl-blog-2025"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "adoption (work, non-work), share of work hours, time savings"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Bick, Blandin & Deming (St. Louis Fed) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "stl-blog-2025",
          "record": 8
        }
      ]
    },
    {
      "id": "adoption:33df8194c318c2e6",
      "title": "U.S. Workers Are More Worried Than Hopeful About Future AI Use in the Workplace",
      "citation": "Pew Research Center 2025",
      "url": "https://www.pewresearch.org/social-trends/2025/02/25/u-s-workers-are-more-worried-than-hopeful-about-future-ai-use-in-the-workplace/",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "pew-workers"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of workers saying at least some of their work is done with AI; chatbot use frequency"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Pew Research Center 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "pew-workers",
          "record": 12
        }
      ]
    },
    {
      "id": "adoption:52dbf968dc6caa11",
      "title": "The Rapid Adoption of Generative AI (On the Economy blog)",
      "citation": "Bick, Blandin & Deming (St. Louis Fed) 2024",
      "url": "https://www.stlouisfed.org/on-the-economy/2024/sep/rapid-adoption-generative-ai",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "stl-speed-2024"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "survey series",
      "measures": [
        "adoption X years after first mass-market product: genAI vs PC vs internet"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Bick, Blandin & Deming (St. Louis Fed) 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "stl-speed-2024",
          "record": 41
        }
      ]
    },
    {
      "id": "adoption:1047e1831f3ba0ac",
      "title": "The unequal adoption of ChatGPT exacerbates existing inequalities among workers (PNAS)",
      "citation": "Humlum & Vestergaard 2024",
      "url": "https://knowledge.uchicago.edu/records/j95qg-jxd71",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "humlum-pnas-2024"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "cross-sectional",
      "measures": [
        "ChatGPT use among 18,000 workers in 11 exposed occupations, linked to registers"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "Denmark",
      "studySpan": "unclear",
      "venue": "Humlum & Vestergaard 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "humlum-pnas-2024",
          "record": 43
        }
      ]
    },
    {
      "id": "adoption:2bd1dad9fec16b10",
      "title": "Tracking Firm Use of AI in Real Time: A Snapshot from the Business Trends and Outlook Survey (NBER w32319)",
      "citation": "Bonney et al. 2024",
      "url": "https://www.nber.org/system/files/working_papers/w32319/w32319.pdf",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "bonney-2024-tracking"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "adoption"
      ],
      "design": "official statistic",
      "measures": [
        "% of firms using AI in producing goods/services (old wording)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Bonney et al. 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "bonney-2024-tracking",
          "record": 22
        }
      ]
    },
    {
      "id": "adoption:1300f6c4fcfbf3ac",
      "title": "AI measurement in ICT usage surveys: A review",
      "citation": "OECD 2021",
      "url": "https://oecd.ai/en/ai-publications/ict-usage-surveys",
      "year": 2021,
      "kind": "framework",
      "rawIds": [
        "oecd-ai-ict-measurement"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "adoption"
      ],
      "design": "review",
      "measures": [
        "review of official AI definitions and survey questions across countries"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "OECD 2021",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/adoption.jsonl",
          "sourceId": "oecd-ai-ict-measurement",
          "record": 48
        }
      ]
    }
  ],
  "handover": [
    {
      "id": "handover:47f30b586acd6834",
      "title": "7 in 10 US consumers use AI to shop",
      "citation": "LDWW 2026 (via FashionUnited)",
      "url": "https://fashionunited.com/news/retail/7-in-10-us-consumers-use-ai-to-shop-reshaping-how-americans-make-their-purchases/2026071773585",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "consumer-ai-purchase"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of 2,000 US adults who have used AI to complete a purchase"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "LDWW 2026 (via FashionUnited)",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "consumer-ai-purchase",
          "record": 33
        }
      ]
    },
    {
      "id": "handover:9e6dd3d46e005444",
      "title": "73% of Employers Say They Use AI in Hiring Decisions",
      "citation": "MyPerfectResume 2026 (via CPA Practice Advisor)",
      "url": "https://www.cpapracticeadvisor.com/2026/05/11/73-of-employers-say-they-use-ai-in-hiring-decisions/182850/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "hiring-auto-reject"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of 1,000 US hiring managers saying AI automatically rejects candidates before human review"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "MyPerfectResume 2026 (via CPA Practice Advisor)",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "hiring-auto-reject",
          "record": 32
        }
      ]
    },
    {
      "id": "handover:4247e01018f0cf47",
      "title": "AI Quarterly Pulse Survey (agent deployment)",
      "citation": "KPMG 2025–2026",
      "url": "https://kpmg.com/us/en/articles/2025/ai-quarterly-pulse-survey",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "kpmg-pulse-agents"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "survey series",
      "measures": [
        "% of US firms with revenue of $1bn+ that have deployed at least some AI agents (130–204 executives per quarter)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "KPMG 2025–2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "kpmg-pulse-agents",
          "record": 26
        }
      ]
    },
    {
      "id": "handover:23980a43b97f6d7c",
      "title": "AI in the Enterprise: How People Use M365 Copilot Chat",
      "citation": "Counts et al. 2026",
      "url": "https://arxiv.org/abs/2605.23958",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "ms-m365-copilot"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "task mix in ~5.5m enterprise Microsoft 365 Copilot Chat sessions"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Counts et al. 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "ms-m365-copilot",
          "record": 15
        }
      ]
    },
    {
      "id": "handover:a6ebb163a6c3bf17",
      "title": "Agentic coding and persistent returns to expertise",
      "citation": "Anthropic 2026",
      "url": "https://www.anthropic.com/research/claude-code-expertise",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "claude-code-expertise"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "share of planning vs execution decisions made by user or Claude in ~400,000 Claude Code sessions (Oct 2025–Apr 2026)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Anthropic 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "claude-code-expertise",
          "record": 11
        }
      ]
    },
    {
      "id": "handover:b753cb38011d27c9",
      "title": "Agents on a leash: agentic AI remains mostly monitored at work",
      "citation": "Stack Overflow 2026",
      "url": "https://stackoverflow.blog/2026/05/27/agents-on-a-leash-agentic-ai-remains-mostly-monitored-at-work",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "so-agents-at-work"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "survey series",
      "measures": [
        "% of developers using AI agents at work (any frequency; daily); oversight practices"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Stack Overflow 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "so-agents-at-work",
          "record": 20
        }
      ]
    },
    {
      "id": "handover:506ea0398c6a70ff",
      "title": "Anthropic Economic Index data release 2026-06-26 (monthly aggregates), data documentation",
      "citation": "Anthropic 2026",
      "url": "https://huggingface.co/datasets/Anthropic/EconomicIndex/blob/main/release_2026_06_26/data_documentation.md",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "aei-monthly-release"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "collaboration_bucket_automation_pct and directive/feedback-loop shares by calendar month, Claude.ai (chat + Cowork) and 1P API, global and by country"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Anthropic 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "aei-monthly-release",
          "record": 7
        }
      ]
    },
    {
      "id": "handover:41879d61cf677bab",
      "title": "Anthropic Economic Index report: Cadences",
      "citation": "Anthropic 2026",
      "url": "https://www.anthropic.com/research/economic-index-june-2026-report",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "aei-cadences"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "AI autonomy (1–5 scale) by product, Apr 10–Jun 10 2026; automation share of survey-linked users (mid-May to early Jun 2026)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Anthropic 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "aei-cadences",
          "record": 6
        }
      ]
    },
    {
      "id": "handover:428f6ba6fc7bede2",
      "title": "Anthropic Economic Index report: Economic primitives (automation vs augmentation on Claude.ai)",
      "citation": "Anthropic 2026",
      "url": "https://www.anthropic.com/research/anthropic-economic-index-january-2026-report",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "aei-automation"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "% of ~1m sampled Claude.ai conversations (one week) classed as automation (directive + feedback loop) vs augmentation (task iteration, validation, learning)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Anthropic 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "aei-automation",
          "record": 1
        }
      ]
    },
    {
      "id": "handover:490c7dfff243fe8c",
      "title": "Anthropic Economic Index: first-party API automation share (Sep 2025, Jan 2026, Mar 2026 reports)",
      "citation": "Anthropic 2025–2026",
      "url": "https://www.anthropic.com/research/economic-index-march-2026-report",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "aei-api"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "% of 1P API transcripts (businesses calling Claude from their own software) classed as automation"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Anthropic 2025–2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "aei-api",
          "record": 3
        }
      ]
    },
    {
      "id": "handover:f69e3440f239d285",
      "title": "DSA Transparency Database",
      "citation": "European Commission 2026",
      "url": "https://transparency.dsa.ec.europa.eu/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "dsa-automated-decisions"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "platform data",
      "measures": [
        "% of platform content-moderation statements of reasons flagged as fully automated decisions, rolling 180 days"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "EU",
      "studySpan": "unclear",
      "venue": "European Commission 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "dsa-automated-decisions",
          "record": 30
        }
      ]
    },
    {
      "id": "handover:5f6807aa79d170e1",
      "title": "How agents are transforming work (summary of 'The shift to agentic AI: evidence from Codex')",
      "citation": "OpenAI 2026",
      "url": "https://openai.com/index/how-agents-are-transforming-work/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "openai-codex-shift"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "Codex share of output tokens (OpenAI staff); growth in Codex users since Aug 2025; % of sampled users requesting tasks estimated over 1 h / 8 h (Dec 2025–May 2026)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "OpenAI 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "openai-codex-shift",
          "record": 13
        }
      ]
    },
    {
      "id": "handover:9f90189258f9cd5e",
      "title": "Measuring AI agent autonomy in practice",
      "citation": "Anthropic 2026",
      "url": "https://www.anthropic.com/research/measuring-agent-autonomy",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "agent-autonomy",
        "agent-api-hitl"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "Claude Code auto-approve share and interrupt rate by user experience; 99.9th-percentile turn duration (Oct 2025–Jan 2026)",
        "% of 998,481 sampled public-API tool calls with a human in the loop; % irreversible; domain mix"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Anthropic 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "agent-autonomy",
          "record": 8
        },
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "agent-api-hitl",
          "record": 9
        }
      ]
    },
    {
      "id": "handover:210b0ed096fd3473",
      "title": "Remote Labor Index leaderboard",
      "citation": "Scale AI & CAIS 2025–2026",
      "url": "https://labs.scale.com/leaderboard/rli",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "remote-labor-index"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "tracker",
      "measures": [
        "% of real paid freelance projects completed by an AI agent at client-acceptable quality"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Scale AI & CAIS 2025–2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "remote-labor-index",
          "record": 34
        }
      ]
    },
    {
      "id": "handover:2253bdfec0d930ce",
      "title": "State of Agent Engineering",
      "citation": "LangChain 2026",
      "url": "https://www.langchain.com/state-of-agent-engineering",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "langchain-agents"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "survey series",
      "measures": [
        "% of respondents with AI agents in production (1,340 responses, 18 Nov–2 Dec 2025)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "LangChain 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "langchain-agents",
          "record": 27
        }
      ]
    },
    {
      "id": "handover:2e4ed91c2bae97b3",
      "title": "State of Code Developer Survey (press release, 8 Jan 2026)",
      "citation": "Sonar 2026",
      "url": "https://www.sonarsource.com/company/press-releases/sonar-data-reveals-critical-verification-gap-in-ai-coding/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "sonar-state-of-code"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "cross-sectional",
      "measures": [
        "self-reported % of committed code that is AI-generated; % of developers who always check AI-assisted code before committing (1,100+ developers)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Sonar 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "sonar-state-of-code",
          "record": 19
        }
      ]
    },
    {
      "id": "handover:92e3877ccf365e83",
      "title": "State of the Coding Agent Market (Oct 2026) and Coding Agents trends tracker",
      "citation": "Amplifying 2026",
      "url": "https://amplifying.ai/research/state-of-coding-agents",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "amplifying-agent-prs"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "tracker",
      "measures": [
        "share of public GitHub pull requests carrying a coding-agent mark; weekly agent-marked PR counts by agent"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Amplifying 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "amplifying-agent-prs",
          "record": 18
        }
      ]
    },
    {
      "id": "handover:23596af5b07b6678",
      "title": "Sundar Pichai shares news from Google Cloud Next 2026",
      "citation": "Google 2026",
      "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "google-code"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "platform data",
      "measures": [
        "% of new code at Google 'AI-generated and approved by engineers' (CEO statements)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Google 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "google-code",
          "record": 16
        }
      ]
    },
    {
      "id": "handover:d1d0b9b5760b3667",
      "title": "The AI Fluency Index",
      "citation": "Anthropic 2026",
      "url": "https://academy.claude.com/tutorials/the-ai-fluency-index",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "ai-fluency-index"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "% of 9,830 multi-turn Claude.ai chats (20–26 Jan 2026) in which users check facts or question reasoning"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Anthropic 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "ai-fluency-index",
          "record": 39
        }
      ]
    },
    {
      "id": "handover:011aee35663a3a58",
      "title": "The results of the 2026 Developer Survey are here",
      "citation": "Stack Overflow 2026",
      "url": "https://stackoverflow.blog/2026/10/06/the-results-of-the-2026-developer-survey-are-here/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "so-dev-survey-2026"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of AI-using developers using coding agents; AI use by development stage (30,000+ respondents)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Stack Overflow 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "so-dev-survey-2026",
          "record": 21
        }
      ]
    },
    {
      "id": "handover:c1e31a3255ae290d",
      "title": "The state of AI (2026)",
      "citation": "McKinsey 2026",
      "url": "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "mckinsey-agents"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "survey series",
      "measures": [
        "% of respondents whose organisation is scaling AI agents (1,719 respondents, 4 May–8 Jun 2026)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "McKinsey 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "mckinsey-agents",
          "record": 25
        }
      ]
    },
    {
      "id": "handover:d2115dba2489b57e",
      "title": "2025: The State of Generative AI in the Enterprise",
      "citation": "Menlo Ventures 2025",
      "url": "https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "menlo-true-agents"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of enterprise and start-up AI deployments that qualify as true agents (495 respondents, Nov 2025)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Menlo Ventures 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "menlo-true-agents",
          "record": 40
        }
      ]
    },
    {
      "id": "handover:99d3d029848cb1e2",
      "title": "Anthropic Economic Index report, September 2025 (directive share)",
      "citation": "Anthropic 2025",
      "url": "https://www.anthropic.com/research/anthropic-economic-index-september-2025-report",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "aei-directive",
        "aei-classifier-rerun",
        "aei-country-gradient"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "% of sampled Claude.ai conversations classed 'directive' (whole task delegated with minimal back-and-forth)",
        "automation share of the same Aug 2025 Claude.ai sample under two classifier models (Sonnet 4 vs Sonnet 3.7)",
        "automation vs augmentation share by country against Claude usage per capita, controlling for task mix"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Anthropic 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "aei-directive",
          "record": 2
        },
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "aei-classifier-rerun",
          "record": 4
        },
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "aei-country-gradient",
          "record": 5
        }
      ]
    },
    {
      "id": "handover:b0fe5d0a0a45d7d7",
      "title": "Future of Work with AI Agents: Auditing Automation and Augmentation Potential across the U.S. Workforce (WORKBank)",
      "citation": "Shao et al. 2025",
      "url": "https://arxiv.org/abs/2506.06576",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "workbank",
        "human-agency-scale"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "cross-sectional",
      "measures": [
        "worker desire for automation and preferred Human Agency Scale level for 844 O*NET tasks in 104 occupations (1,500 workers, Jan–May 2025)",
        "five-level scale of how much human involvement a task should keep"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Shao et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "workbank",
          "record": 22
        },
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "human-agency-scale",
          "record": 23
        }
      ]
    },
    {
      "id": "handover:794b1fa3cfac191a",
      "title": "Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027",
      "citation": "Gartner 2025",
      "url": "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027",
      "year": 2025,
      "kind": "forecast",
      "rawIds": [
        "gartner-agentic-forecasts"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "model",
      "measures": [
        "forecast shares of work decisions and enterprise software involving agentic AI"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Gartner 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "gartner-agentic-forecasts",
          "record": 28
        }
      ]
    },
    {
      "id": "handover:e6e162eaede36463",
      "title": "Gradual Disempowerment: Systemic Existential Risks from Incremental AI Development",
      "citation": "Kulveit et al. 2025",
      "url": "https://arxiv.org/abs/2501.16946",
      "year": 2025,
      "kind": "framework",
      "rawIds": [
        "kulveit-gd"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "review",
      "measures": [
        "theory of incremental substitution of human participation in economy, culture and states"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Kulveit et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "kulveit-gd",
          "record": 38
        }
      ]
    },
    {
      "id": "handover:b05d2a6ff4893e4d",
      "title": "How AI is transforming work at Anthropic",
      "citation": "Anthropic 2025",
      "url": "https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "anthropic-internal"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "per-transcript maximum run of Claude Code tool calls without human input; human turns per transcript (200,000 transcripts, Feb vs Aug 2025); survey of 132 staff"
      ],
      "constructs": [],
      "setting": "group",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Anthropic 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "anthropic-internal",
          "record": 10
        }
      ]
    },
    {
      "id": "handover:cad0287acbba2fd1",
      "title": "How People Use ChatGPT (NBER w34255)",
      "citation": "Chatterji et al. 2025",
      "url": "https://www.nber.org/system/files/working_papers/w34255/w34255.pdf",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "chatgpt-doing"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "% of sampled consumer ChatGPT messages classed Asking / Doing / Expressing"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Chatterji et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "chatgpt-doing",
          "record": 12
        }
      ]
    },
    {
      "id": "handover:ddd93038c44fbd36",
      "title": "Measuring AI Ability to Complete Long Tasks",
      "citation": "Kwa et al. (METR) 2025",
      "url": "https://arxiv.org/abs/2503.14499",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "metr-horizon"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "tracker",
      "measures": [
        "length of software task (human time) AI agents complete with 50% success"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Kwa et al. (METR) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "metr-horizon",
          "record": 35
        }
      ]
    },
    {
      "id": "handover:2be84f63d7cb417f",
      "title": "The Anthropic Economic Index (collaboration patterns)",
      "citation": "Anthropic 2025",
      "url": "https://www.anthropic.com/news/the-anthropic-economic-index",
      "year": 2025,
      "kind": "framework",
      "rawIds": [
        "anthropic-collab-taxonomy"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "five collaboration patterns: directive and feedback loop (automation); task iteration, validation and learning (augmentation)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Anthropic 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "anthropic-collab-taxonomy",
          "record": 24
        }
      ]
    },
    {
      "id": "handover:ee6075a484018041",
      "title": "Who is using AI to code? Global diffusion and impact of generative AI",
      "citation": "Daniotti et al. 2025",
      "url": "https://arxiv.org/abs/2506.08945",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "daniotti-ai-code"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "platform data",
      "measures": [
        "% of Python functions in public GitHub commits classified as AI-written, by country, 2019–2024 (30m+ commits, 170,000 developers)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Daniotti et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "daniotti-ai-code",
          "record": 17
        }
      ]
    },
    {
      "id": "handover:0e0e98a2f0cc4f61",
      "title": "Working with AI: Measuring the Applicability of Generative AI to Occupations",
      "citation": "Tomlinson et al. 2025",
      "url": "https://arxiv.org/abs/2507.07935",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "ms-working-with-ai"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "log analysis",
      "measures": [
        "overlap between O*NET work activities in the user's goal and those the AI performs, 200k Bing Copilot conversations (Jan–Sep 2024)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Tomlinson et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "ms-working-with-ai",
          "record": 14
        }
      ]
    },
    {
      "id": "handover:462ac5c30c975b3c",
      "title": "Artificial intelligence in UK financial services – 2024",
      "citation": "Bank of England & FCA 2024",
      "url": "https://www.bankofengland.co.uk/report/2024/artificial-intelligence-in-uk-financial-services-2024",
      "year": 2024,
      "kind": "indicator",
      "rawIds": [
        "boe-fca-ai-survey"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "survey series",
      "measures": [
        "% of AI use cases with some automated decision-making, semi-autonomous, fully autonomous; % of firms using AI (118 firms)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Bank of England & FCA 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "boe-fca-ai-survey",
          "record": 29
        }
      ]
    },
    {
      "id": "handover:7cca3f70ce548c5e",
      "title": "Automated Transparency: A Legal and Empirical Analysis of the Digital Services Act Transparency Database",
      "citation": "Kaushal et al. 2024",
      "url": "https://arxiv.org/abs/2404.02894",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "kaushal-dsa"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "handover"
      ],
      "design": "cross-sectional",
      "measures": [
        "automated detection and decision flags by platform, 131m statements of reasons, 19–28 Nov 2023"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "EU",
      "studySpan": "unclear",
      "venue": "Kaushal et al. 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "kaushal-dsa",
          "record": 31
        }
      ]
    },
    {
      "id": "handover:bed75bfbf5b41ffd",
      "title": "GPTs are GPTs: An Early Look at the Labor Market Impact Potential of Large Language Models",
      "citation": "Eloundou et al. 2023",
      "url": "https://arxiv.org/abs/2303.10130",
      "year": 2023,
      "kind": "framework",
      "rawIds": [
        "eloundou-gpts"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "model",
      "measures": [
        "share of occupations' tasks exposed to LLMs (O*NET)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Eloundou et al. 2023",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "eloundou-gpts",
          "record": 36
        }
      ]
    },
    {
      "id": "handover:9d979574fd43e5a7",
      "title": "Occupational, industry, and geographic exposure to artificial intelligence: A novel dataset and its potential uses",
      "citation": "Felten, Raj & Seamans 2021",
      "url": "https://doi.org/10.1002/smj.3286",
      "year": 2021,
      "kind": "framework",
      "rawIds": [
        "felten-aioe"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "handover"
      ],
      "design": "model",
      "measures": [
        "AI Occupational Exposure index (overlap of AI applications with job abilities)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Felten, Raj & Seamans 2021",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/handover.jsonl",
          "sourceId": "felten-aioe",
          "record": 37
        }
      ]
    }
  ],
  "work": [
    {
      "id": "work:77741770ae322a8e",
      "title": "2026 Global AI Jobs Barometer",
      "citation": "PwC 2026",
      "url": "https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-jobs-barometer.html",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "pwc-barometer"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "platform data",
      "measures": [
        "Entry-level postings demanding senior-type skills vs others"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "PwC 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "pwc-barometer",
          "record": 52
        }
      ]
    },
    {
      "id": "work:2ed462efdbc8a181",
      "title": "AI Economic Indicators (Canaries Dashboard, Transformation Tracker)",
      "citation": "Stanford Digital Economy Lab 2026",
      "url": "https://digitaleconomy.stanford.edu/project/indicators/",
      "year": 2026,
      "kind": "framework",
      "rawIds": [
        "stanford-indicators"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "tracker",
      "measures": [
        "Monthly canaries series plus 12-indicator macro transformation check"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Stanford Digital Economy Lab 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "stanford-indicators",
          "record": 62
        }
      ]
    },
    {
      "id": "work:f7e41cdc216bea2a",
      "title": "AI Labor Market Tracker (monthly)",
      "citation": "Revelio Labs 2026",
      "url": "https://www.reveliolabs.com/ai-labor-market-tracker",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "revelio-ai-tracker"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "platform data",
      "measures": [
        "Gap in job postings between most and least AI-exposed occupations; headcount event studies by age from weighted online profiles"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Revelio Labs 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "revelio-ai-tracker",
          "record": 3
        }
      ]
    },
    {
      "id": "work:af5c98de88009356",
      "title": "AI and Young-adult Jobs: The Real Mystery",
      "citation": "Ozimek & Goldschlag (EIG) 2026",
      "url": "https://agglomerations.eig.org/p/ai-and-young-adult-jobs-the-real",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "ozimek-goldschlag"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "cross-sectional",
      "measures": [
        "Employment rates of 22–25 year olds with and without degrees (CPS)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Ozimek & Goldschlag (EIG) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "ozimek-goldschlag",
          "record": 40
        }
      ]
    },
    {
      "id": "work:61ab2bc76dbb49d2",
      "title": "Active Tech Jobs Outlook, India",
      "citation": "Xpheno via People Matters 2026",
      "url": "https://www.peoplematters.in/news/recruiting-and-onboarding/indias-tech-hiring-drops-to-28-month-low-as-active-openings-fall-to-93000-50047",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "xpheno-india"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "platform data",
      "measures": [
        "Active tech job openings by experience band (count)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "India",
      "studySpan": "unclear",
      "venue": "Xpheno via People Matters 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "xpheno-india",
          "record": 19
        }
      ]
    },
    {
      "id": "work:10bbd6152861b713",
      "title": "Artificial Intelligence Has Not Impacted Youth Labor Market Outcomes in Finland",
      "citation": "Kauhanen & Rouvinen (ETLA Brief 173) 2026",
      "url": "https://www.etla.fi/en/?p=97898",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "kauhanen-rouvinen"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "panel",
      "measures": [
        "Youth employment and wage growth by AI exposure (income registers)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "Finland",
      "studySpan": "unclear",
      "venue": "Kauhanen & Rouvinen (ETLA Brief 173) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "kauhanen-rouvinen",
          "record": 30
        }
      ]
    },
    {
      "id": "work:2a4c5e0f1ff01b8f",
      "title": "Canaries Dashboard: employment by age and AI-exposure quintile",
      "citation": "Stanford Digital Economy Lab / ADP 2026",
      "url": "https://digitaleconomy.stanford.edu/project/indicators/canaries-dashboard/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "canaries-dash"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "platform data",
      "measures": [
        "ADP payroll employment index (Nov 2022 = 100) by age band and AI-exposure fifth of occupations; annualised % change by gender"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Stanford Digital Economy Lab / ADP 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "canaries-dash",
          "record": 1
        }
      ]
    },
    {
      "id": "work:1bfb6f1808cfe92e",
      "title": "Canaries in the Coal Mine? (Aug 2026 revision): No Widespread Displacement, but the AI Employment Gap for Young Workers Has Widened to 19%",
      "citation": "Brynjolfsson, Chandar & Chen 2026",
      "url": "https://digitaleconomy.stanford.edu/news/canariesaug26/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "canaries-aug26"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "panel",
      "measures": [
        "Shortfall vs 'kept pace' counterfactual for 22–25 year olds in highly exposed occupations (%)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Brynjolfsson, Chandar & Chen 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "canaries-aug26",
          "record": 22
        }
      ]
    },
    {
      "id": "work:9d274966b54b42b3",
      "title": "Canaries, Interest Rates, and Timing",
      "citation": "Brynjolfsson, Chandar & Chen 2026",
      "url": "https://digitaleconomy.stanford.edu/news/canaries-interest-rates-and-timinga-more-on-recent-drivers-of-employment-changes-for-young-workers",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "canaries-rates-note"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "panel",
      "measures": [
        "Relative employment of young workers by AI and interest-rate exposure; firm-time fixed effects"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Brynjolfsson, Chandar & Chen 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "canaries-rates-note",
          "record": 23
        }
      ]
    },
    {
      "id": "work:d14e1e9111ba5c5e",
      "title": "Class of 2026: young college graduates face a weaker labor market, but a more mixed picture",
      "citation": "Fast & Gould (EPI) 2026",
      "url": "https://www.epi.org/blog/class-of-2026-young-college-graduates-face-a-weaker-labor-market-but-a-more-mixed-picture-than-the-headlines-suggest/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "epi-grads"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "cross-sectional",
      "measures": [
        "Unemployment and employment rates, ages 22–27, graduates vs non-graduates (12-month averages)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Fast & Gould (EPI) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "epi-grads",
          "record": 41
        }
      ]
    },
    {
      "id": "work:eabe33287ab34530",
      "title": "Do Job Postings Show Early Labor-Market Effects of AI?",
      "citation": "Audoly, Guerin & Topa (NY Fed) 2026",
      "url": "https://libertystreeteconomics.newyorkfed.org/?p=42257",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "audoly-postings"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "panel",
      "measures": [
        "Postings in high vs low AI-exposure occupations, junior vs senior"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Audoly, Guerin & Topa (NY Fed) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "audoly-postings",
          "record": 38
        }
      ]
    },
    {
      "id": "work:d2a66ad8a7b8b9fe",
      "title": "Economists' forecasts of youth unemployment under AI scenarios",
      "citation": "Economists' survey (NBER w35046) 2026",
      "url": "https://www.nber.org/system/files/working_papers/w35046/w35046.pdf",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "nber-economists-youth"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "model",
      "measures": [
        "US youth (20–24) unemployment rate in 2030 by AI scenario"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Economists' survey (NBER w35046) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "nber-economists-youth",
          "record": 58
        }
      ]
    },
    {
      "id": "work:2d1eb2d041a6bba0",
      "title": "Employed persons by NACE Rev. 2, ages 15–24 vs 25–64, information and communication (J), EU27",
      "citation": "Eurostat LFS (lfsq_egan2) 2026",
      "url": "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfsq_egan2?age=Y15-24&format=JSON&geo=EU27_2020&lang=EN&nace_r2=J&sex=T&sinceTimePeriod=2021-Q1&unit=THS_PER",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "eurostat-ict-youth"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "official statistic",
      "measures": [
        "Employed persons (thousands), quarterly, not seasonally adjusted"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "EU",
      "studySpan": "unclear",
      "venue": "Eurostat LFS (lfsq_egan2) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "eurostat-ict-youth",
          "record": 12
        }
      ]
    },
    {
      "id": "work:f3a90ec3303b5dc3",
      "title": "Employment rate, ages 25–54 (LNS12300060)",
      "citation": "BLS via FRED 2026",
      "url": "https://fred.stlouisfed.org/series/LNS12300060",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "bls-prime-epop"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "official statistic",
      "measures": [
        "Employment-population ratio, ages 25–54 (%)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "BLS via FRED 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "bls-prime-epop",
          "record": 6
        }
      ]
    },
    {
      "id": "work:2ad0f9d939e83951",
      "title": "Generative AI as Seniority-Biased Technological Change (May 2026 version)",
      "citation": "Hosseini & Lichtinger 2026",
      "url": "https://raw.githack.com/s-mahdihosseini/Website/b99fa2962dcc4c165bbc3c41dd283afa99c5ccfb/GenAI_SenBTC_May_2026.pdf",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "hosseini-lichtinger"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "quasi-experiment",
      "measures": [
        "Junior vs senior employment in GenAI-adopting vs non-adopting firms (Revelio résumé and posting data, ~281,000 firms, 2015–2025)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Hosseini & Lichtinger 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "hosseini-lichtinger",
          "record": 24
        }
      ]
    },
    {
      "id": "work:3030305a93e1518b",
      "title": "Graduating into Disruption: Labor Market Outcomes for AI-Exposed College Majors",
      "citation": "Orr, Tucker & Warren (US Census CES-WP-26-56) 2026",
      "url": "https://www.census.gov/library/working-papers/2026/adrm/CES-WP-26-56.html",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "census-orr"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "quasi-experiment",
      "measures": [
        "Initial employment probability and earnings by major AI exposure (administrative records)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Orr, Tucker & Warren (US Census CES-WP-26-56) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "census-orr",
          "record": 28
        }
      ]
    },
    {
      "id": "work:55f04cf0f395be73",
      "title": "Has AI Widened Employment Gaps? Tracking Early-Career Employment by Occupational Exposure in Norway",
      "citation": "Hernæs & Kostøl (IZA DP 18767) 2026",
      "url": "https://docs.iza.org/dp18767.pdf",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "hernaes-kostol"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "panel",
      "measures": [
        "Private-sector employment by exposure quintile and age, Jan 2021–Feb 2026 (A-ordningen)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "Norway",
      "studySpan": "unclear",
      "venue": "Hernæs & Kostøl (IZA DP 18767) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "hernaes-kostol",
          "record": 32
        }
      ]
    },
    {
      "id": "work:1daad6088b91504a",
      "title": "Is AI Responsible for the Rise in Entry-Level Unemployment?",
      "citation": "Revelio Labs 2025 (updated Jun 2026)",
      "url": "https://www.reveliolabs.com/news/macro/is-ai-responsible-for-the-rise-in-entry-level-unemployment/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "revelio-entry-2025"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "panel",
      "measures": [
        "Entry-level postings by AI exposure since Jan 2023"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Revelio Labs 2025 (updated Jun 2026)",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "revelio-entry-2025",
          "record": 49
        }
      ]
    },
    {
      "id": "work:33f253d2b87f6b0f",
      "title": "Job Cuts Report: cuts attributed to AI",
      "citation": "Challenger, Gray & Christmas 2026",
      "url": "https://www.challengergray.com/blog/job-cuts-fall-in-september-hiring-plans-up-3-over-2025-on-weak-early-seasonal-hiring/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "challenger-ai-cuts"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "tracker",
      "measures": [
        "Announced US job cuts where employer cites AI (count, share)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Challenger, Gray & Christmas 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "challenger-ai-cuts",
          "record": 7
        }
      ]
    },
    {
      "id": "work:1b0a77c053d48b1a",
      "title": "KI-indeksen: monthly employment by AI exposure, Norway",
      "citation": "Hernæs & Kostøl (Frisch Centre / BI) 2026",
      "url": "https://kiindeksen.no/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "kiindeksen"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "official statistic",
      "measures": [
        "Private-sector employment index (Nov 2022 = 100) by AI-exposure quintile and age band (21–30 … 51–60), A-ordningen register data via SSB"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "Norway",
      "studySpan": "unclear",
      "venue": "Hernæs & Kostøl (Frisch Centre / BI) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "kiindeksen",
          "record": 2
        }
      ]
    },
    {
      "id": "work:895b206744245911",
      "title": "Labor Market Consequences of Generative AI: Early Evidence from Norway",
      "citation": "Facius & Iacono (CESifo WP 12752) 2026",
      "url": "https://econpapers.repec.org/paper/cesceswps/_5f12752.htm",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "facius-iacono"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "quasi-experiment",
      "measures": [
        "Employment of young workers in AI-exposed occupations, registers 2015–Mar 2025"
      ],
      "constructs": [],
      "setting": "population",
      "country": "Norway",
      "studySpan": "unclear",
      "venue": "Facius & Iacono (CESifo WP 12752) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "facius-iacono",
          "record": 31
        }
      ]
    },
    {
      "id": "work:24d6782bb608a7d9",
      "title": "Labor market impacts of AI: A new measure and early evidence",
      "citation": "Massenkoff & McCrory (Anthropic) 2026",
      "url": "https://www.anthropic.com/research/labor-market-impacts",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "anthropic-lmi"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "panel",
      "measures": [
        "Unemployment and job-finding rates by observed AI task coverage (CPS)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Massenkoff & McCrory (Anthropic) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "anthropic-lmi",
          "record": 29
        }
      ]
    },
    {
      "id": "work:41e0ff427ce4da09",
      "title": "Looking for the Ladder: Is AI Impacting Entry-Level Jobs?",
      "citation": "Iscenko & Curto Millet (Google) 2026",
      "url": "https://eig.org/wp-content/uploads/2026/01/TAWP-Iscenko-Millet.pdf",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "iscenko-millet"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "panel",
      "measures": [
        "Lightcast postings by AI-exposure quintile and seniority, Sep 2019–Aug 2025"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Iscenko & Curto Millet (Google) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "iscenko-millet",
          "record": 39
        }
      ]
    },
    {
      "id": "work:67780d56ec442ae5",
      "title": "Measuring the Economic Effects of AI: A path forward",
      "citation": "Goldschlag (EIG) 2026",
      "url": "https://eig.org/wp-content/uploads/2026/06/EIG_Measuring_Econ_Effects_AI.pdf",
      "year": 2026,
      "kind": "framework",
      "rawIds": [
        "eig-measuring"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "review",
      "measures": [
        "Proposed official metrics: occupation in QWI hires/separations; PSEO graduate cohorts; yearly ABS and frequent BTOS AI modules; AI items in JOLTS and CPS"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Goldschlag (EIG) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "eig-measuring",
          "record": 61
        }
      ]
    },
    {
      "id": "work:68c43861e16c0d2e",
      "title": "New Skills and AI Are Reshaping the Future of Work",
      "citation": "IMF (Georgieva blog; SDN) 2026",
      "url": "https://www.imf.org/en/blogs/articles/2026/01/14/new-skills-and-ai-are-reshaping-the-future-of-work",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "imf-2026-skills"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "model",
      "measures": [
        "Employment in AI-vulnerable occupations by regional AI-skill demand"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "IMF (Georgieva blog; SDN) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "imf-2026-skills",
          "record": 55
        }
      ]
    },
    {
      "id": "work:eec5d706c5804b76",
      "title": "New associate hires at AmLaw 200 firms",
      "citation": "SurePoint Law School Hiring Report via Artificial Lawyer 2026",
      "url": "https://artificiallawyer.com/2026/07/20/new-associate-hiring-is-flat-is-ai-the-cause",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "surepoint-law"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "tracker",
      "measures": [
        "New associates hired by AmLaw 200 firms (count per year)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "SurePoint Law School Hiring Report via Artificial Lawyer 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "surepoint-law",
          "record": 20
        }
      ]
    },
    {
      "id": "work:3b13e2a3a7c4ff40",
      "title": "RPLS August 2026 release: employment in AI-exposed jobs for workers 22–25",
      "citation": "Revelio Labs (RPLS release) 2026",
      "url": "https://www.webull.com/news/15514505135776768",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "revelio-rpls-age"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "platform data",
      "measures": [
        "Relative headcount gap, workers 22–25 in most vs least AI-exposed occupations since Nov 2022"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Revelio Labs (RPLS release) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "revelio-rpls-age",
          "record": 4
        }
      ]
    },
    {
      "id": "work:08490780f1c823b0",
      "title": "Recent-graduate unemployment and underemployment, 2030/2035",
      "citation": "Metaculus Labor Automation Hub 2026",
      "url": "https://www.metaculus.com/labor-hub/",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "metaculus-grads"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "model",
      "measures": [
        "Community forecast of recent-graduate unemployment and underemployment"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Metaculus Labor Automation Hub 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "metaculus-grads",
          "record": 57
        }
      ]
    },
    {
      "id": "work:649dd368f877bff4",
      "title": "Remote Work Leaves Younger Workers Sidelined",
      "citation": "Emanuel, Harrington & Pallais (NY Fed) 2026",
      "url": "https://libertystreeteconomics.newyorkfed.org/2026/06/remote-work-leaves-younger-workers-sidelined/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "emanuel-remote"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "cross-sectional",
      "measures": [
        "Unemployment of young vs experienced graduates in remotable vs non-remotable occupations"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Emanuel, Harrington & Pallais (NY Fed) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "emanuel-remote",
          "record": 37
        }
      ]
    },
    {
      "id": "work:b498fc7900ad4c56",
      "title": "Research on AI and the labor market is still in the first inning",
      "citation": "Kolko (Brookings) 2026",
      "url": "https://www.brookings.edu/articles/research-on-ai-and-the-labor-market-is-still-in-the-first-inning/",
      "year": 2026,
      "kind": "framework",
      "rawIds": [
        "kolko-brookings"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "review",
      "measures": [
        "Review of confounders (over-hiring, rates, remote work) and exposure-measure sensitivity"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Kolko (Brookings) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "kolko-brookings",
          "record": 63
        }
      ]
    },
    {
      "id": "work:56395343fe32cbd3",
      "title": "Software development job postings on Indeed (IHLIDXUSTPSOFTDEVE)",
      "citation": "Indeed Hiring Lab via FRED 2026",
      "url": "https://fred.stlouisfed.org/series/IHLIDXUSTPSOFTDEVE",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "indeed-softdev"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "platform data",
      "measures": [
        "Postings index, 1 Feb 2020 = 100, SA, 7-day average"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Indeed Hiring Lab via FRED 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "indeed-softdev",
          "record": 8
        }
      ]
    },
    {
      "id": "work:643a831c4cc65ccb",
      "title": "Still Waters, Rapid Currents: Early Labor Market Transformation under Generative AI (NBER w33777)",
      "citation": "Humlum & Vestergaard 2026",
      "url": "https://www.nber.org/papers/w33777",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "humlum-vestergaard"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "panel",
      "measures": [
        "Earnings and hours of chatbot adopters vs others (survey linked to registers)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "Denmark",
      "studySpan": "unclear",
      "venue": "Humlum & Vestergaard 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "humlum-vestergaard",
          "record": 26
        }
      ]
    },
    {
      "id": "work:4d57ce20a713d9f0",
      "title": "The Labor Market Is Tilting Toward Seniority",
      "citation": "Indeed Hiring Lab 2026",
      "url": "https://www.hiringlab.org/2026/07/23/the-labor-market-is-tilting-toward-seniority/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "indeed-seniority"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "platform data",
      "measures": [
        "Postings classified Entry (0–1 yrs) / Mid (2–4) / Senior (5+) by text classifier; % change y/y and vs Jan 2025"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Indeed Hiring Lab 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "indeed-seniority",
          "record": 9
        }
      ]
    },
    {
      "id": "work:72a51f89130278f0",
      "title": "The Labor Market for Recent College Graduates",
      "citation": "Federal Reserve Bank of New York 2026",
      "url": "https://www.newyorkfed.org/research/college-labor-market",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "nyfed-grads"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "official statistic",
      "measures": [
        "Unemployment and underemployment rates, bachelor's holders aged 22–27 (%)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Federal Reserve Bank of New York 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "nyfed-grads",
          "record": 10
        }
      ]
    },
    {
      "id": "work:6a4ef3528cfbc27e",
      "title": "The Microstructure of AI Diffusion (BTOS AI supplement)",
      "citation": "Bonney et al. (US Census CES-WP-26-25) 2026",
      "url": "https://www.census.gov/library/working-papers/2026/adrm/CES-WP-26-25.html",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "census-btos-ai-emp"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "survey series",
      "measures": [
        "Share of firms using AI; share reporting AI-related employment decreases"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Bonney et al. (US Census CES-WP-26-25) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "census-btos-ai-emp",
          "record": 14
        }
      ]
    },
    {
      "id": "work:37ba4c9d4fae87e0",
      "title": "The graduate jobs market isn't collapsing",
      "citation": "Ball (Prospects at Jisc) for ISE 2026",
      "url": "https://ise.org.uk/knowledge/insights/573/the_graduate_jobs_market_isnt_collapsing/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "uk-grad-outcomes"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "survey series",
      "measures": [
        "Graduate Outcomes survey (15 months after graduation): share of employed graduates in professional-level roles"
      ],
      "constructs": [],
      "setting": "population",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Ball (Prospects at Jisc) for ISE 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "uk-grad-outcomes",
          "record": 16
        }
      ]
    },
    {
      "id": "work:44aca889a7bc7c5a",
      "title": "Tracking the Impact of AI on the Labor Market",
      "citation": "Budget Lab at Yale 2026",
      "url": "https://budgetlab.yale.edu/research/tracking-impact-ai-labor-market",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "yale-tracker"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "tracker",
      "measures": [
        "Occupational-mix dissimilarity since ChatGPT vs past tech waves; unemployment by AI exposure and usage; synthetic diff-in-diff (CPS)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Budget Lab at Yale 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "yale-tracker",
          "record": 5
        }
      ]
    },
    {
      "id": "work:0a24d9fbf2670297",
      "title": "Unemployment rate, bachelor's holders aged 20–24 (CGBD2024) vs 25+ (CGBD25O)",
      "citation": "BLS CPS via FRED 2026",
      "url": "https://fred.stlouisfed.org/series/CGBD2024",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "bls-gradgap"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "official statistic",
      "measures": [
        "Unemployment rate (%), NSA monthly; gap in points (derived Jan–Sep averages)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "BLS CPS via FRED 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "bls-gradgap",
          "record": 11
        }
      ]
    },
    {
      "id": "work:fe97eee23786b810",
      "title": "What is really happening to jobs? Separating AI hype from reality",
      "citation": "Mahoney, McEntarfer & Wahal (SIEPR) 2026",
      "url": "https://siepr.stanford.edu/publications/policy-brief/what-really-happening-jobs-separating-ai-hype-reality",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "siepr-brief",
        "ramp-adopters"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "review",
      "measures": [
        "Unemployment change by AI-exposure quintile since 2022 (IPUMS-CPS, updating Eckhardt & Goldschlag 2025)",
        "Employment growth after enterprise-AI adoption (card-spend data)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Mahoney, McEntarfer & Wahal (SIEPR) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "siepr-brief",
          "record": 45
        },
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "ramp-adopters",
          "record": 53
        }
      ]
    },
    {
      "id": "work:a069604ae57ae2ec",
      "title": "Worker Types, AI Exposure and the Recent Decline in Job-Finding Rates",
      "citation": "Borovičková & Macaluso (Richmond Fed EB 26-26) 2026",
      "url": "https://www.richmondfed.org/publications/research/economic_brief/2026/eb_26-26",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "richmond-fed"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "model",
      "measures": [
        "Job-finding rates by latent worker type and AI exposure (CPS flows)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Borovičková & Macaluso (Richmond Fed EB 26-26) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "richmond-fed",
          "record": 47
        }
      ]
    },
    {
      "id": "work:776b7b46c8d16b6b",
      "title": "Young workers' employment drops in occupations with high AI exposure",
      "citation": "Atkinson & Yamco (Dallas Fed) 2026",
      "url": "https://www.dallasfed.org/research/economics/2026/0106",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "dallas-fed"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "cross-sectional",
      "measures": [
        "Share of 20–24 year olds' employment in most exposed occupations (CPS)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Atkinson & Yamco (Dallas Fed) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "dallas-fed",
          "record": 43
        }
      ]
    },
    {
      "id": "work:138a8ec3f64a57da",
      "title": "Youth employment amidst cooling labour demand (Economic Bulletin 5/2026, box)",
      "citation": "Chaloupka & Dias da Silva (ECB) 2026",
      "url": "https://www.ecb.europa.eu/press/economic-bulletin/focus/2026/html/ecb.ebbox202605_04~faa9ef5955.en.html",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "ecb-youth-box"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "model",
      "measures": [
        "Youth/total unemployment ratio; youth employment by sector; Okun's-law residuals (euro area)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "EU",
      "studySpan": "unclear",
      "venue": "Chaloupka & Dias da Silva (ECB) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "ecb-youth-box",
          "record": 13
        }
      ]
    },
    {
      "id": "work:4b3fa3231f1ae155",
      "title": "Youth job losses concentrated in AI-exposed industries (as reported)",
      "citation": "Bank of Korea (Oh Sam-il, labour market team) 2026",
      "url": "https://www.koreajoongangdaily.com/business/94-of-job-losses-among-young-people-over-past-4-years-were-in-aiexposed-industries-bok-says/12830646",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "bok-korea-youth"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "cross-sectional",
      "measures": [
        "Change in employment of 15–29 year olds by industry AI exposure, Jun 2022–Jun 2026"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "South Korea",
      "studySpan": "unclear",
      "venue": "Bank of Korea (Oh Sam-il, labour market team) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "bok-korea-youth",
          "record": 18
        }
      ]
    },
    {
      "id": "work:ed8ef759da419763",
      "title": "AI and Jobs: The Final Word (Until the Next One)",
      "citation": "Eckhardt & Goldschlag (EIG) 2025",
      "url": "https://eig.org/ai-and-jobs-the-final-word/",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "eig-final-word"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "cross-sectional",
      "measures": [
        "Unemployment change by AI-exposure quintile (CPS)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Eckhardt & Goldschlag (EIG) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "eig-final-word",
          "record": 46
        }
      ]
    },
    {
      "id": "work:0f30dcf671a4ee9f",
      "title": "AI could wipe out half of entry-level white-collar jobs",
      "citation": "Amodei (Anthropic) via Axios 2025",
      "url": "https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic",
      "year": 2025,
      "kind": "forecast",
      "rawIds": [
        "amodei-claim"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "qualitative",
      "measures": [
        "Entry-level white-collar jobs eliminated; unemployment 10–20% within 1–5 years"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Amodei (Anthropic) via Axios 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "amodei-claim",
          "record": 59
        }
      ]
    },
    {
      "id": "work:af48567512c5caf6",
      "title": "Are Young College Graduates Losing Their Edge in the Job Market?",
      "citation": "Cline & Kaymak (Cleveland Fed) 2025",
      "url": "https://www.clevelandfed.org/publications/economic-commentary/2025/ec-202514-are-young-college-graduates-losing-their-edge-in-the-job-market",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "cleveland-fed"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "panel",
      "measures": [
        "Job-finding (exit) rates of college vs high-school graduates since 1976"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Cline & Kaymak (Cleveland Fed) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "cleveland-fed",
          "record": 42
        }
      ]
    },
    {
      "id": "work:ad6f0c465c5cef55",
      "title": "Are businesses scaling back hiring due to AI?",
      "citation": "New York Fed 2025",
      "url": "https://libertystreeteconomics.newyorkfed.org/2025/09/are-businesses-scaling-back-hiring-due-to-ai/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "nyfed-biz-survey"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "survey series",
      "measures": [
        "Share of regional firms reporting AI-related lay-offs / reduced hiring (past 6 months)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "New York Fed 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "nyfed-biz-survey",
          "record": 21
        }
      ]
    },
    {
      "id": "work:36ec25cfbf516784",
      "title": "Artificial Intelligence and the Labor Market (NBER w33509)",
      "citation": "Hampole, Papanikolaou, Schmidt & Seegmiller 2025",
      "url": "https://www.nber.org/papers/w33509",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "hampole"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "quasi-experiment",
      "measures": [
        "Labour demand by task AI exposure within firms, 2010–2023"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Hampole, Papanikolaou, Schmidt & Seegmiller 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "hampole",
          "record": 25
        }
      ]
    },
    {
      "id": "work:cfebfc13fec79d61",
      "title": "Early impact of AI on the UK job market (SSRN 5516798)",
      "citation": "Klein Teeselink (KCL) 2025",
      "url": "https://www.kcl.ac.uk/news/new-study-reveals-early-impact-of-ai-on-job-market-in-uk",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "klein-teeselink"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "quasi-experiment",
      "measures": [
        "Employment, junior positions and postings in highly AI-exposed firms/occupations, 2021–2025 (postings + LinkedIn profiles)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Klein Teeselink (KCL) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "klein-teeselink",
          "record": 27
        }
      ]
    },
    {
      "id": "work:f630ad4d1c91117e",
      "title": "Evaluating the Impact of AI on the Labor Market: Current State of Affairs",
      "citation": "Gimbel, Kinder, Kendall & Lee (Budget Lab/Brookings) 2025",
      "url": "https://budgetlab.yale.edu/research/evaluating-impact-ai-labor-market-current-state-affairs",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "gimbel-budgetlab"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "cross-sectional",
      "measures": [
        "Occupational dissimilarity index since ChatGPT vs internet era; exposure group shares"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Gimbel, Kinder, Kendall & Lee (Budget Lab/Brookings) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "gimbel-budgetlab",
          "record": 48
        }
      ]
    },
    {
      "id": "work:61d3845eeda8e42f",
      "title": "Future of Jobs Report 2025",
      "citation": "World Economic Forum 2025",
      "url": "https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/",
      "year": 2025,
      "kind": "forecast",
      "rawIds": [
        "wef-foj-2025"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "survey series",
      "measures": [
        "Jobs created and displaced 2025–2030 (employer survey)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "World Economic Forum 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "wef-foj-2025",
          "record": 60
        }
      ]
    },
    {
      "id": "work:87e546ba6b7733b7",
      "title": "How will AI affect the global workforce?",
      "citation": "Goldman Sachs Research (Briggs et al.) 2025",
      "url": "https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-global-workforce",
      "year": 2025,
      "kind": "forecast",
      "rawIds": [
        "goldman-2025"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "model",
      "measures": [
        "Share of US workers displaced if AI widely adopted; transition unemployment"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Goldman Sachs Research (Briggs et al.) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "goldman-2025",
          "record": 54
        }
      ]
    },
    {
      "id": "work:c44289d45558c0b0",
      "title": "ISE Student Recruitment Survey 2025",
      "citation": "Institute of Student Employers 2025",
      "url": "https://ise.org.uk/knowledge/insights/492/apprenticeships_rise_as_graduate_vacancies_drop_8/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "ise-grad-vacancies"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "survey series",
      "measures": [
        "Graduate vacancies at member employers (% change y/y); applications per vacancy"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Institute of Student Employers 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "ise-grad-vacancies",
          "record": 15
        }
      ]
    },
    {
      "id": "work:075aac90b6b8460f",
      "title": "Is AI contributing to rising unemployment? Evidence from occupational variation",
      "citation": "Ozkan & Sullivan (St. Louis Fed) 2025",
      "url": "https://www.stlouisfed.org/on-the-economy/2025/aug/is-ai-contributing-unemployment-evidence-occupational-variation",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "stlouis-fed"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "cross-sectional",
      "measures": [
        "Correlation of occupation AI exposure/adoption with unemployment change, 2022–2025"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Ozkan & Sullivan (St. Louis Fed) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "stlouis-fed",
          "record": 44
        }
      ]
    },
    {
      "id": "work:b3a212221ada203a",
      "title": "Lost in translation: AI's impact on translators and foreign language skills",
      "citation": "Frey & Llanos-Paredes 2025",
      "url": "https://cepr.org/voxeu/columns/lost-translation-ais-impact-translators-and-foreign-language-skills",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "frey-translators"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "quasi-experiment",
      "measures": [
        "Translator employment growth vs machine-translation use, 696 local labour markets, 2010–2023"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Frey & Llanos-Paredes 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "frey-translators",
          "record": 36
        }
      ]
    },
    {
      "id": "work:6a6b4377d849fa1f",
      "title": "No Country for Young Grads",
      "citation": "Burning Glass Institute (Levanon, Sigelman et al.) 2025",
      "url": "https://www.burningglassinstitute.org/research/no-country-for-young-grads",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "burning-glass"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "review",
      "measures": [
        "Graduate unemployment/underemployment and entry-level hiring (report)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Burning Glass Institute (Levanon, Sigelman et al.) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "burning-glass",
          "record": 50
        }
      ]
    },
    {
      "id": "work:caaa2dc221a5bfaf",
      "title": "State of Talent Report 2025",
      "citation": "SignalFire 2025",
      "url": "https://www.signalfire.com/blog/signalfire-state-of-talent-report-2025",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "signalfire"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "platform data",
      "measures": [
        "New-graduate share of Big Tech and startup hires (LinkedIn-type profiles)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "SignalFire 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "signalfire",
          "record": 51
        }
      ]
    },
    {
      "id": "work:92b847a874a266cf",
      "title": "UK entry-level job postings since ChatGPT",
      "citation": "Adzuna via techUK 2025",
      "url": "https://www.techuk.org/insights/news/what-s-actually-happening-with-entry-level-and-graduate-jobs",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "uk-adzuna-entry"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "work"
      ],
      "design": "platform data",
      "measures": [
        "Entry-level job adverts (% change since Nov 2022)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Adzuna via techUK 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "uk-adzuna-entry",
          "record": 17
        }
      ]
    },
    {
      "id": "work:299703c6efa953f1",
      "title": "Who Is AI Replacing? The Impact of Generative AI on Online Freelancing Platforms (Management Science)",
      "citation": "Demirci, Hannane & Zhu 2024/2025",
      "url": "https://ideas.repec.org/p/ces/ceswps/_11276.html",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "demirci"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "natural experiment",
      "measures": [
        "Freelance job posts by automation-prone category"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Demirci, Hannane & Zhu 2024/2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "demirci",
          "record": 34
        }
      ]
    },
    {
      "id": "work:d5e0a62dcbe7cb48",
      "title": "Winners and Losers of Generative AI: Early Evidence of Shifts in Freelancer Demand (JEBO)",
      "citation": "Teutloff et al. 2025",
      "url": "https://www.etla.fi/en/?p=94573",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "teutloff"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "quasi-experiment",
      "measures": [
        "Freelance demand by skill cluster (substitutable vs complementary)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Teutloff et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "teutloff",
          "record": 35
        }
      ]
    },
    {
      "id": "work:45f1a368c58195d9",
      "title": "Gen-AI: Artificial Intelligence and the Future of Work",
      "citation": "Cazzaniga et al. (IMF SDN) 2024",
      "url": "https://www.imf.org/en/Blogs/Articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity",
      "year": 2024,
      "kind": "forecast",
      "rawIds": [
        "imf-2024-exposure"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "model",
      "measures": [
        "Share of jobs exposed to AI"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Cazzaniga et al. (IMF SDN) 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "imf-2024-exposure",
          "record": 56
        }
      ]
    },
    {
      "id": "work:c8fe5c1c91bee033",
      "title": "The Short-Term Effects of Generative AI on Employment: Evidence from an Online Labor Market",
      "citation": "Hui, Reshef & Zhou 2023",
      "url": "https://cepr.org/voxeu/columns/artificial-intelligence-and-its-short-term-effects-employment",
      "year": 2023,
      "kind": "study",
      "rawIds": [
        "hui-reshef-zhou"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "work"
      ],
      "design": "natural experiment",
      "measures": [
        "Monthly jobs and earnings of Upwork writing and image freelancers"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Hui, Reshef & Zhou 2023",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/work.jsonl",
          "sourceId": "hui-reshef-zhou",
          "record": 33
        }
      ]
    }
  ],
  "share": [
    {
      "id": "share:5603c9d563436549",
      "title": "AI 2040",
      "citation": "AI Futures Project 2026",
      "url": "https://ai-2040.com/AI-2040.pdf",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "ai2040"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "model",
      "measures": [
        "US wage bill as share of economy"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "AI Futures Project 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "ai2040",
          "record": 59
        }
      ]
    },
    {
      "id": "share:57c7cdef23167b82",
      "title": "AI chip owners (data hub, updated 12 May 2026)",
      "citation": "Epoch AI 2026",
      "url": "https://epoch.ai/data/ai-chip-owners",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "epoch-chip-owners"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "tracker",
      "measures": [
        "Ownership of leading AI chips/compute by company and customer category (H100e, medians with 5-95% intervals)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Epoch AI 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "epoch-chip-owners",
          "record": 15
        }
      ]
    },
    {
      "id": "share:80eb188afcf95406",
      "title": "AI investment is booming, but so are imports",
      "citation": "First Trust 2026",
      "url": "https://www.ftportfolios.com/Commentary/EconomicResearch/2026/10/1/ai-investment-is-booming,-but-so-are-imports",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "firsttrust-ai-imports"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "AI-related investment as % of GDP and of growth; imports as share of AI investment"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "First Trust 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "firsttrust-ai-imports",
          "record": 18
        }
      ]
    },
    {
      "id": "share:eaff98a3f9771085",
      "title": "Econ Scenario Explorer v1.0",
      "citation": "Anthropic 2026",
      "url": "https://www.anthropic.com/institute/econ-scenarios",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "anthropic-econ2026"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "model",
      "measures": [
        "Modelled US labour and capital shares in 2030 under three AI scenarios"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Anthropic 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "anthropic-econ2026",
          "record": 57
        }
      ]
    },
    {
      "id": "share:3ec7e9fc52616ddf",
      "title": "Follow the CAPEX: Q2 2026 scoreboard",
      "citation": "Platformonomics 2026",
      "url": "https://platformonomics.com/?p=41900",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "capex-platformonomics"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "tracker",
      "measures": [
        "Quarterly capital spending of Amazon, Microsoft, Alphabet, Meta (US$bn, from company releases)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Platformonomics 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "capex-platformonomics",
          "record": 16
        }
      ]
    },
    {
      "id": "share:d2a66ad8a7b8b9fe",
      "title": "Forecasting the economic effects of AI (NBER w35046)",
      "citation": "Karger et al. 2026",
      "url": "https://www.nber.org/system/files/working_papers/w35046/w35046.pdf",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "fri-econ2026"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "survey series",
      "measures": [
        "Median forecasts of US labour share, by group and AI-progress scenario (%)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Karger et al. 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "fri-econ2026",
          "record": 55
        }
      ]
    },
    {
      "id": "share:c0c19913fd4eaea1",
      "title": "Global economic and financial implications of AI: lessons from a scenario-planning exercise (IMF Note 2026/002)",
      "citation": "IMF (Tamirisa et al.) 2026",
      "url": "https://www.imf.org/-/media/files/publications/imf-notes/2026/english/insea2026002.pdf",
      "year": 2026,
      "kind": "framework",
      "rawIds": [
        "imf2026-scenarios"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "review",
      "measures": [
        "Scenario framework for AI's macro-fiscal effects"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "IMF (Tamirisa et al.) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "imf2026-scenarios",
          "record": 60
        }
      ]
    },
    {
      "id": "share:fbcfcf3cdb6364b0",
      "title": "Hollywood studios reach a tentative agreement with writers union",
      "citation": "NPR (Ulaby) 2026",
      "url": "https://www.opb.org/article/2026/04/06/hollywood-studios-reach-a-tentative-agreement-with-writers-union/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "wga-2026"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "qualitative",
      "measures": [
        "Contract terms on AI"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "NPR (Ulaby) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "wga-2026",
          "record": 27
        }
      ]
    },
    {
      "id": "share:f500377018b70515",
      "title": "How much AI compute do frontier labs use?",
      "citation": "Epoch AI (You) 2026",
      "url": "https://epoch.ai/gradient-updates/frontier-labs-dont-use-most-ai-compute",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "epoch-frontier-labs"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "tracker",
      "measures": [
        "Estimated shares of world operational AI compute (H100-equivalents), end 2025"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Epoch AI (You) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "epoch-frontier-labs",
          "record": 14
        }
      ]
    },
    {
      "id": "share:7129280ba249e124",
      "title": "Job Openings and Labor Turnover Survey, August 2026",
      "citation": "BLS 2026",
      "url": "https://www.bls.gov/news.release/jolts.nr0.htm",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "jolts-quits"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Quits as % of employment"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "BLS 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "jolts-quits",
          "record": 24
        }
      ]
    },
    {
      "id": "share:08490780f1c823b0",
      "title": "Labor Automation Forecasting Hub",
      "citation": "Metaculus 2026",
      "url": "https://www.metaculus.com/labor-hub/",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "metaculus-laborhub"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "survey series",
      "measures": [
        "Community forecasts of US labour share of national income"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Metaculus 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "metaculus-laborhub",
          "record": 58
        }
      ]
    },
    {
      "id": "share:a87995178a7bc1b4",
      "title": "Major work stoppages in 2025",
      "citation": "BLS 2026",
      "url": "https://www.bls.gov/news.release/wkstp.nr0.htm",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "bls-stoppages"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Strikes and lockouts of 1,000+ workers beginning in the year; workers involved"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "BLS 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "bls-stoppages",
          "record": 22
        }
      ]
    },
    {
      "id": "share:5d8794300ad00f2c",
      "title": "More AI-exposed industries and states are benefiting, but results are heterogeneous (ProMarket; SSRN 5375017)",
      "citation": "Makridis & Johnston 2026",
      "url": "https://www.promarket.org/2026/05/21/more-ai-exposed-industries-and-states-are-benefiting-but-results-are-heterogenous/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "makridis-johnston2026"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "quasi-experiment",
      "measures": [
        "Output, wage bill, employment, labour share by state-industry AI exposure (QCEW 2017-2024)"
      ],
      "constructs": [],
      "setting": "group",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Makridis & Johnston 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "makridis-johnston2026",
          "record": 45
        }
      ]
    },
    {
      "id": "share:9bc4950664f1773d",
      "title": "NVIDIA announces financial results for second quarter fiscal 2027",
      "citation": "NVIDIA 2026",
      "url": "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "nvidia-q2fy27"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Quarterly revenue, data-centre revenue, GAAP net income (US$)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "NVIDIA 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "nvidia-q2fy27",
          "record": 19
        }
      ]
    },
    {
      "id": "share:1ed86f8ce731658f",
      "title": "Nonfinancial corporations sector: labor share for employees (PRS88003173)",
      "citation": "BLS via FRED 2026",
      "url": "https://fred.stlouisfed.org/series/PRS88003173",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "bls-nfc-ls"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Employee pay as share of nonfinancial corporate output; index 2017=100"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "BLS via FRED 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "bls-nfc-ls",
          "record": 2
        }
      ]
    },
    {
      "id": "share:62db2b4c0cede5f0",
      "title": "Payrolls to prompts: firm-level evidence on the substitution of labor for AI (arXiv 2602.00139)",
      "citation": "Stevens 2026",
      "url": "https://econpapers.repec.org/paper/arxpapers/2602.00139.htm",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "stevens2026"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "panel",
      "measures": [
        "Firm spending on online labour marketplaces vs AI providers"
      ],
      "constructs": [],
      "setting": "group",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Stevens 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "stevens2026",
          "record": 46
        }
      ]
    },
    {
      "id": "share:7e72d08c3b1370bb",
      "title": "Private nonfarm business sector labor share (FRED MPU4910141), as used by the LEAP panel",
      "citation": "BLS (via FRI LEAP) 2026",
      "url": "https://leap.forecastingresearch.org/reports/wave7",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "bls-mfp-ls",
        "leap-wave7"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Labour share of private nonfarm business output, annual productivity-program measure (%)",
        "Median forecasts of private nonfarm labour share (FRED MPU4910141), experts/superforecasters/public"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "BLS (via FRI LEAP) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual, one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "bls-mfp-ls",
          "record": 6
        },
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "leap-wave7",
          "record": 56
        }
      ]
    },
    {
      "id": "share:6a36a3cdbc368230",
      "title": "Productivity and Costs, Q2 2026 revised: nonfarm business labor share",
      "citation": "BLS 2026",
      "url": "https://www.bls.gov/news.release/prod2.nr0.htm",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "bls-ls"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Pay of all workers (self-employed pay imputed) as % of nonfarm business output; FRED PRS85006173 is the same series as an index, 2017=100"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "BLS 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "bls-ls",
          "record": 1
        }
      ]
    },
    {
      "id": "share:7f34c6c8329685b7",
      "title": "Public finance in the age of AI: a primer (NBER w34873)",
      "citation": "Korinek & Lockwood 2026",
      "url": "https://www.nber.org/papers/w34873",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "korinek-lockwood2026"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "model",
      "measures": [
        "Tax base under AI displacement"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Korinek & Lockwood 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "korinek-lockwood2026",
          "record": 52
        }
      ]
    },
    {
      "id": "share:1520f870312d93aa",
      "title": "S&P 500's weight in Mag 7 stocks passes 30% (updated 1 Sep 2026)",
      "citation": "Forbes 2026",
      "url": "https://www.forbes.com/sites/investor-hub/article/sp-500-weight-mag-7-stocks-diversification-risk/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "mag7-forbes"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "platform data",
      "measures": [
        "Seven firms' share of S&P 500 market value (%)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Forbes 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "mag7-forbes",
          "record": 10
        }
      ]
    },
    {
      "id": "share:08db772c2ef9667e",
      "title": "S&P 500: earnings and market cap concentration at record-high levels",
      "citation": "Apollo (Slok) 2026",
      "url": "https://www.apolloacademy.com/wp-content/uploads/2026/01/011326-MarketConcentration.pdf",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "apollo-top10"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "platform data",
      "measures": [
        "Top-10 firms' share of S&P 500 earnings and of market cap, 1990-2025 (Bloomberg data)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Apollo (Slok) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "apollo-top10",
          "record": 12
        }
      ]
    },
    {
      "id": "share:0a04449655636466",
      "title": "Shares of gross domestic income: compensation of employees, paid (A4002E1A156NBEA)",
      "citation": "BEA via FRED 2026",
      "url": "https://fred.stlouisfed.org/series/A4002E1A156NBEA",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "bea-comp-gdi"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Employee compensation as % of US gross domestic income, whole economy"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "BEA via FRED 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "bea-comp-gdi",
          "record": 3
        }
      ]
    },
    {
      "id": "share:e2dbabde2503b758",
      "title": "Shares of gross domestic income: consumption of fixed capital (A262RE1A156NBEA)",
      "citation": "BEA via FRED 2026",
      "url": "https://fred.stlouisfed.org/series/A262RE1A156NBEA",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "bea-cfc-gdi"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Depreciation as % of US gross domestic income"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "BEA via FRED 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "bea-cfc-gdi",
          "record": 5
        }
      ]
    },
    {
      "id": "share:099d95a1cade3230",
      "title": "Shares of gross domestic income: corporate profits with IVA and CCAdj, domestic industries (A445RE1A156NBEA)",
      "citation": "BEA via FRED 2026",
      "url": "https://fred.stlouisfed.org/series/A445RE1A156NBEA",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "bea-profit-gdi"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Domestic corporate profits as % of US gross domestic income"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "BEA via FRED 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "bea-profit-gdi",
          "record": 4
        }
      ]
    },
    {
      "id": "share:643a831c4cc65ccb",
      "title": "Still waters, rapid currents: early labor market transformation under generative AI (NBER w33777)",
      "citation": "Humlum & Vestergaard 2025/2026",
      "url": "https://www.nber.org/papers/w33777",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "humlum-vestergaard2026"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "panel",
      "measures": [
        "Earnings and hours of chatbot adopters, linked surveys and registers"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "Denmark",
      "studySpan": "unclear",
      "venue": "Humlum & Vestergaard 2025/2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "humlum-vestergaard2026",
          "record": 48
        }
      ]
    },
    {
      "id": "share:f820fd31c516ae56",
      "title": "Tracking AI's contribution to GDP growth",
      "citation": "Rubinton & Patro (St. Louis Fed) 2026",
      "url": "https://www.stlouisfed.org/on-the-economy/2026/jan/tracking-ai-contribution-gdp-growth",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "stlfed-ai-gdp"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Contribution of information processing equipment, software, R&D and data-centre construction to real GDP growth (pp, % of growth)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Rubinton & Patro (St. Louis Fed) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "stlfed-ai-gdp",
          "record": 17
        }
      ]
    },
    {
      "id": "share:55ddef2f04e5448b",
      "title": "Transformation Tracker: capital share indicator",
      "citation": "Stanford Digital Economy Lab 2026",
      "url": "https://digitaleconomy.stanford.edu/project/indicators/transformation-tracker/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "stanford-capshare"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "tracker",
      "measures": [
        "US capital share of factor income (logit), ranked against a simulated 1997-2019 trend distribution; four rating bands"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Stanford Digital Economy Lab 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "stanford-capshare",
          "record": 8
        }
      ]
    },
    {
      "id": "share:4249da369bd83050",
      "title": "U.S. workers' share of national income falls to a new low",
      "citation": "Axios (Phillips) 2026",
      "url": "https://axios.com/2026/08/06/ai-boom-labor-workers-income",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "axios2026-feroli"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "qualitative",
      "measures": [
        "Expert commentary on the Q1 2026 low"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Axios (Phillips) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "axios2026-feroli",
          "record": 54
        }
      ]
    },
    {
      "id": "share:b0da19aaa4f72183",
      "title": "Union Members 2025",
      "citation": "BLS 2026",
      "url": "https://www.bls.gov/news.release/union2.nr0.htm",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "bls-union"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Union members as % of wage and salary workers"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "BLS 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "bls-union",
          "record": 20
        }
      ]
    },
    {
      "id": "share:ad2882258496b809",
      "title": "Union affiliation by occupation and industry, 2025 (Table 3)",
      "citation": "BLS 2026",
      "url": "https://www.bls.gov/news.release/union2.t03.htm",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "bls-union-occ"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Union members as % of employed, by occupation"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "BLS 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "bls-union-occ",
          "record": 21
        }
      ]
    },
    {
      "id": "share:6e28ae922bdd9cef",
      "title": "Wage Growth Tracker",
      "citation": "Atlanta Fed 2026",
      "url": "https://www.atlantafed.org/chcs/wage-growth-tracker",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "atl-wgt"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "survey series",
      "measures": [
        "Median 12-month wage growth, 3-month moving average, overall/job switchers/job stayers (%)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Atlanta Fed 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "atl-wgt",
          "record": 23
        }
      ]
    },
    {
      "id": "share:8b3eeb7bc8e2f48d",
      "title": "Workers' share of America's income is at a record low before the AI boom even begins",
      "citation": "Fortune (Roytburg) 2026",
      "url": "https://www.fortune.com/2026/09/04/ai-productivity-labor-share/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "fortune2026-daco"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "qualitative",
      "measures": [
        "Expert commentary on the Q2 2026 record low"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Fortune (Roytburg) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "fortune2026-daco",
          "record": 53
        }
      ]
    },
    {
      "id": "share:ab1f08f66c29ddff",
      "title": "Exploring the U.S. mega-cap landscape (education paper, Apr 2025)",
      "citation": "S&P Dow Jones Indices 2025",
      "url": "https://www.spglobal.com/spdji/en/documents/education/education-exploring-the-us-mega-cap-landscape.pdf",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "spdji-megacap"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Cumulative weight of largest 5, 10, 20 S&P 500 constituents, 1970-Feb 2025"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "S&P Dow Jones Indices 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "spdji-megacap",
          "record": 11
        }
      ]
    },
    {
      "id": "share:92735c509f6627dd",
      "title": "Generative AI at work (QJE 140(2))",
      "citation": "Brynjolfsson, Li & Raymond 2025",
      "url": "https://www.nber.org/papers/w31161",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "brynjolfsson2025"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "quasi-experiment",
      "measures": [
        "Issues resolved per hour, 5,179 support agents"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Brynjolfsson, Li & Raymond 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "brynjolfsson2025",
          "record": 47
        }
      ]
    },
    {
      "id": "share:c6c67c8681d33eda",
      "title": "ILA members ratify new six-year master contract",
      "citation": "ILA 2025",
      "url": "https://ilaunion.org/rank-and-file-members-of-international-longshoremens-association-at-atlantic-and-gulf-coast-ports-overwhelmingly-ratify-provisions-of-new-six-year-master-contract/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "ila-2025"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "qualitative",
      "measures": [
        "Contract terms on automation; wage increase"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "ILA 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "ila-2025",
          "record": 29
        }
      ]
    },
    {
      "id": "share:3ee454a6309d5b21",
      "title": "Negotiating Tech: an inventory of U.S. union contract provisions for the digital age",
      "citation": "Kresge (UC Berkeley Labor Center) 2025",
      "url": "https://laborcenter.berkeley.edu/negotiating-tech-an-inventory-of-u-s-union-contract-provisions-for-the-digital-age",
      "year": 2025,
      "kind": "framework",
      "rawIds": [
        "berkeley-negotiating-tech"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "qualitative",
      "measures": [
        "Technology provisions in union contracts, classified in six sections"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Kresge (UC Berkeley Labor Center) 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "berkeley-negotiating-tech",
          "record": 25
        }
      ]
    },
    {
      "id": "share:3de53f5d16448ae2",
      "title": "SAG-AFTRA members approve 2025 video game agreement",
      "citation": "SAG-AFTRA 2025",
      "url": "https://www.sagaftra.org/sag-aftra-members-approve-2025-video-game-agreement",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "sag-aftra-2025"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "qualitative",
      "measures": [
        "Contract terms on AI digital replicas; ratification vote"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "SAG-AFTRA 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "sag-aftra-2025",
          "record": 28
        }
      ]
    },
    {
      "id": "share:bc03f179c7ed992a",
      "title": "Trends in AI supercomputers",
      "citation": "Epoch AI 2025",
      "url": "https://epoch.ai/blog/trends-in-ai-supercomputers",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "epoch-supercomputers"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "tracker",
      "measures": [
        "Share of known AI supercomputer performance owned by industry vs government/academia; by country"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Epoch AI 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "epoch-supercomputers",
          "record": 13
        }
      ]
    },
    {
      "id": "share:3a71620a77ab1268",
      "title": "World Employment and Social Outlook: May 2025 update (global labour income share)",
      "citation": "ILO 2025",
      "url": "https://www.ilo.org/sites/default/files/2025-05/WESOUpdate_May2025.pdf",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "ilo-lis"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "official statistic",
      "measures": [
        "Labour income (incl. estimated self-employed) as % of world GDP"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "ILO 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "ilo-lis",
          "record": 7
        }
      ]
    },
    {
      "id": "share:d70245053c0a284b",
      "title": "AI will transform the global economy. Let's make sure it benefits humanity (summarising Cazzaniga et al. SDN 2024/001)",
      "citation": "Georgieva (IMF) 2024",
      "url": "https://www.imf.org/en/blogs/articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "imf2024-georgieva"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "model",
      "measures": [
        "Job exposure; qualitative inequality scenarios"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Georgieva (IMF) 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "imf2024-georgieva",
          "record": 50
        }
      ]
    },
    {
      "id": "share:628f4912c23cce35",
      "title": "Applying AI to rebuild middle class jobs (NBER w32140)",
      "citation": "Autor 2024",
      "url": "https://www.nber.org/papers/w32140",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "autor2024"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "review",
      "measures": [
        "Argument on AI and the value of expertise"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Autor 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "autor2024",
          "record": 49
        }
      ]
    },
    {
      "id": "share:c6024b8420c4eefa",
      "title": "Artificial intelligence, firm growth, and product innovation (JFE 151)",
      "citation": "Babina, Fedyk, He & Hodson 2024",
      "url": "https://ideas.repec.org/a/eee/jfinec/v151y2024ics0304405x2300185x.html",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "babina2024"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "panel",
      "measures": [
        "Sales, employment, valuation growth of AI-investing US firms"
      ],
      "constructs": [],
      "setting": "group",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Babina, Fedyk, He & Hodson 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "babina2024",
          "record": 32
        }
      ]
    },
    {
      "id": "share:f474203238793003",
      "title": "Broadening the gains from generative AI: the role of fiscal policies",
      "citation": "IMF SDN 2024/002",
      "url": "https://www.elibrary.imf.org/view/journals/006/2024/002/article-A001-en.xml",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "imf2024-fiscal"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "review",
      "measures": [
        "Fiscal responses to AI, incl. capital vs labour taxation"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "IMF SDN 2024/002",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "imf2024-fiscal",
          "record": 51
        }
      ]
    },
    {
      "id": "share:21530a3f626471fe",
      "title": "Charted: Magnificent 7 market cap as a share of the S&P 500",
      "citation": "Visual Capitalist 2024",
      "url": "https://www.visualcapitalist.com/sp/charted-magnificent-7-market-cap-as-a-share-of-the-sp-500/",
      "year": 2024,
      "kind": "indicator",
      "rawIds": [
        "mag7-vc"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "platform data",
      "measures": [
        "Seven firms' share of S&P 500 market value (%)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Visual Capitalist 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "mag7-vc",
          "record": 9
        }
      ]
    },
    {
      "id": "share:3efea4ffa98039af",
      "title": "Perspectives on the labor share (JEP 38(2))",
      "citation": "Karabarbounis 2024",
      "url": "https://www.aeaweb.org/articles?id=10.1257%2Fjep.38.2.107",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "karabarbounis2024"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "review",
      "measures": [
        "Labour share trends and causes"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Karabarbounis 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "karabarbounis2024",
          "record": 35
        }
      ]
    },
    {
      "id": "share:b4c0b2aec239bb15",
      "title": "Scenarios for the transition to AGI (NBER w32255)",
      "citation": "Korinek & Suh 2024",
      "url": "https://www.nber.org/papers/w32255",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "korinek-suh2024"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "model",
      "measures": [
        "Wages under automation scenarios"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Korinek & Suh 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "korinek-suh2024",
          "record": 31
        }
      ]
    },
    {
      "id": "share:569faca09ce6218d",
      "title": "The simple macroeconomics of AI (NBER w32487)",
      "citation": "Acemoglu 2024",
      "url": "https://www.nber.org/papers/w32487",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "acemoglu2024"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "model",
      "measures": [
        "Task-based estimate of TFP, wage and inequality effects of AI over 10 years"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Acemoglu 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "acemoglu2024",
          "record": 30
        }
      ]
    },
    {
      "id": "share:fb064d129da20d66",
      "title": "Generative AI and firm values (NBER w31222, rev. Jan 2026)",
      "citation": "Eisfeldt, Schubert & Zhang 2023",
      "url": "https://www.nber.org/papers/w31222",
      "year": 2023,
      "kind": "study",
      "rawIds": [
        "eisfeldt2023"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "natural experiment",
      "measures": [
        "Stock returns by workforce exposure to generative AI"
      ],
      "constructs": [],
      "setting": "group",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Eisfeldt, Schubert & Zhang 2023",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "eisfeldt2023",
          "record": 44
        }
      ]
    },
    {
      "id": "share:3ce0debddb359875",
      "title": "Summary of the 2023 WGA MBA",
      "citation": "WGA 2023",
      "url": "https://wgacontract2023.org/the-campaign/summary-of-the-2023-wga-mba",
      "year": 2023,
      "kind": "indicator",
      "rawIds": [
        "wga-2023"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "qualitative",
      "measures": [
        "Contract terms on AI"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "WGA 2023",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "wga-2023",
          "record": 26
        }
      ]
    },
    {
      "id": "share:d0a0f1aba15cc1e1",
      "title": "Tasks, automation, and the rise in US wage inequality (Econometrica 90(5))",
      "citation": "Acemoglu & Restrepo 2022",
      "url": "https://www.nber.org/papers/w28920",
      "year": 2022,
      "kind": "study",
      "rawIds": [
        "acemoglu-restrepo2022"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "model",
      "measures": [
        "Share of wage-structure change due to task displacement"
      ],
      "constructs": [],
      "setting": "group",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Acemoglu & Restrepo 2022",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "acemoglu-restrepo2022",
          "record": 42
        }
      ]
    },
    {
      "id": "share:73804c6bf114eb48",
      "title": "The elusive explanation for the declining labor share (Annual Review of Economics 14)",
      "citation": "Grossman & Oberfield 2022",
      "url": "https://www.annualreviews.org/content/journals/10.1146/annurev-economics-080921-103046",
      "year": 2022,
      "kind": "study",
      "rawIds": [
        "grossman-oberfield2022"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "review",
      "measures": [
        "Proposed causes of the labour share decline"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Grossman & Oberfield 2022",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "grossman-oberfield2022",
          "record": 36
        }
      ]
    },
    {
      "id": "share:08cf6f4ca2dee385",
      "title": "Uneven growth: automation's impact on income and wealth inequality (Econometrica 90(6))",
      "citation": "Moll, Rachel & Restrepo 2022",
      "url": "https://www.nber.org/papers/w28440",
      "year": 2022,
      "kind": "study",
      "rawIds": [
        "moll2022"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "share"
      ],
      "design": "model",
      "measures": [
        "Returns to wealth and inequality under automation"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Moll, Rachel & Restrepo 2022",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "moll2022",
          "record": 43
        }
      ]
    },
    {
      "id": "share:aafd700818bd00bf",
      "title": "Labor share decline and intellectual property products capital (Econometrica 88(6))",
      "citation": "Koh, Santaeulalia-Llopis & Zheng 2020",
      "url": "https://econometricsociety.org/publications/econometrica/2020/11/01/labor-share-decline-and-intellectual-property-products-capital",
      "year": 2020,
      "kind": "study",
      "rawIds": [
        "koh2020"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "model",
      "measures": [
        "Decomposition of the US labour share by capital type"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Koh, Santaeulalia-Llopis & Zheng 2020",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "koh2020",
          "record": 37
        }
      ]
    },
    {
      "id": "share:5e40a957731f8c97",
      "title": "Revisiting the global decline of the (non-housing) labor share (AER: Insights 2(3))",
      "citation": "Gutierrez & Piton 2020",
      "url": "https://www.aeaweb.org/articles?id=10.1257%2Faeri.20190285",
      "year": 2020,
      "kind": "study",
      "rawIds": [
        "gutierrez-piton2020"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "panel",
      "measures": [
        "Harmonised non-housing corporate labour shares"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Gutierrez & Piton 2020",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "gutierrez-piton2020",
          "record": 38
        }
      ]
    },
    {
      "id": "share:a54fc6c0501e78a1",
      "title": "The fall of the labor share and the rise of superstar firms (QJE 135(2))",
      "citation": "Autor, Dorn, Katz, Patterson & Van Reenen 2020",
      "url": "https://www.nber.org/papers/w23396",
      "year": 2020,
      "kind": "study",
      "rawIds": [
        "autor2020"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "panel",
      "measures": [
        "Industry concentration and labour share, US census data"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Autor, Dorn, Katz, Patterson & Van Reenen 2020",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "autor2020",
          "record": 33
        }
      ]
    },
    {
      "id": "share:c0536131abae8fa8",
      "title": "Estimating the U.S. labor share (Monthly Labor Review)",
      "citation": "Giandrea & Sprague (BLS) 2017",
      "url": "https://www.bls.gov/opub/mlr/2017/article/estimating-the-us-labor-share.htm",
      "year": 2017,
      "kind": "study",
      "rawIds": [
        "giandrea-sprague2017"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "review",
      "measures": [
        "Methods for imputing self-employed labour income"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Giandrea & Sprague (BLS) 2017",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "giandrea-sprague2017",
          "record": 40
        }
      ]
    },
    {
      "id": "share:041708f89ffe2130",
      "title": "Has the labour share declined? It depends",
      "citation": "Schreyer (OECD) 2017",
      "url": "https://www.oecd.org/en/publications/has-the-labour-share-declined_2dcfc715-en.html",
      "year": 2017,
      "kind": "study",
      "rawIds": [
        "schreyer2017"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "review",
      "measures": [
        "OECD labour shares, production vs income perspective"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Schreyer (OECD) 2017",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "schreyer2017",
          "record": 39
        }
      ]
    },
    {
      "id": "share:9dc881ae7ef6534b",
      "title": "The global decline of the labor share (QJE 129(1))",
      "citation": "Karabarbounis & Neiman 2014",
      "url": "https://www.nber.org/papers/w19136",
      "year": 2014,
      "kind": "study",
      "rawIds": [
        "karabarbounis-neiman2014"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "panel",
      "measures": [
        "Corporate labour shares across countries"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Karabarbounis & Neiman 2014",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "karabarbounis-neiman2014",
          "record": 34
        }
      ]
    },
    {
      "id": "share:0d68319e05b9dd46",
      "title": "The decline of the U.S. labor share (Brookings Papers on Economic Activity)",
      "citation": "Elsby, Hobijn & Sahin 2013",
      "url": "https://doi.org/10.1353/eca.2013.0016",
      "year": 2013,
      "kind": "study",
      "rawIds": [
        "elsby2013"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "share"
      ],
      "design": "panel",
      "measures": [
        "US labour share and self-employment imputation"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Elsby, Hobijn & Sahin 2013",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/share.jsonl",
          "sourceId": "elsby2013",
          "record": 41
        }
      ]
    }
  ],
  "culture": [
    {
      "id": "culture:dbb79c28a80c3e10",
      "title": "AI Overviews reduce clicks (update)",
      "citation": "Ahrefs 2026",
      "url": "https://ahrefs.com/blog/ai-overviews-reduce-clicks-update",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "ahrefs-ctr"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "log analysis",
      "measures": [
        "Average desktop CTR of top-ranking page for keywords with vs without AI Overview (300,000 keywords, Search Console data)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Ahrefs 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "ahrefs-ctr",
          "record": 25
        }
      ]
    },
    {
      "id": "culture:4318b1c8e5ee54c8",
      "title": "AI and the Quantity and Usage of Creative Products: Have LLMs Boosted Creation of Valuable Books?",
      "citation": "Imke Reimers and Joel Waldfogel. NBER Working Paper 34777; first issued January 2026; version used: July 2026 revision (working paper).",
      "url": "https://www.nber.org/papers/w34777",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "books-reimers"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "panel",
      "measures": [
        "AI share of new English ebook releases on Amazon (Pangram on 1,000-word previews, 48,193 titles); usage via ratings and sales rank"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Imke Reimers and Joel Waldfogel. NBER Working Paper 34777; first issued January 2026; version used: July 2026 revision (working paper).",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "books-reimers",
          "record": 13
        }
      ]
    },
    {
      "id": "culture:4ac84f6bc2e403b4",
      "title": "AI music has surpassed 50% of new music uploads",
      "citation": "Deezer 2026",
      "url": "https://newsroom-deezer.com/2026/07/ai-music-exceeds-50-percent-daily-uploads-deezer/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "deezer-uploads",
        "deezer-streams"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "platform data",
      "measures": [
        "Fully AI-generated tracks as % of daily uploads to Deezer (own detector)",
        "% of Deezer streams going to fully AI-generated tracks; % of those streams flagged fraudulent"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Deezer 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "deezer-uploads",
          "record": 1
        },
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "deezer-streams",
          "record": 2
        }
      ]
    },
    {
      "id": "culture:7bfd6fd78e62fdaf",
      "title": "AI now writes as many online articles as humans",
      "citation": "Graphite 2026",
      "url": "https://graphite.io/five-percent/research/ai-now-writes-as-many-online-articles-as-humans-do",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "graphite-articles"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "tracker",
      "measures": [
        "% of new English web articles (Common Crawl, article schema, 100+ words) classed primarily AI by 3 detectors averaged"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Graphite 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "graphite-articles",
          "record": 4
        }
      ]
    },
    {
      "id": "culture:5437329566fe19a1",
      "title": "AI slop writing has taken over the internet, particularly LinkedIn and X",
      "citation": "Pangram via The Register 2026",
      "url": "https://www.theregister.com/ai-and-ml/2026/07/09/ai-slop-writing-has-taken-over-the-internet-particularly-linkedin-and-x/5269525",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "pangram-social"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "platform data",
      "measures": [
        "% of long posts (250+ words) classed fully AI, by platform, from users of Pangram's browser extension"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Pangram via The Register 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "pangram-social",
          "record": 7
        }
      ]
    },
    {
      "id": "culture:a2caaf0bf3de0c8f",
      "title": "Americans and AI 2026: chatbots, smart devices and views on impact",
      "citation": "Pew Research Center 2026",
      "url": "https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "pew-ai-summaries-2026",
        "pew-chatbot-purposes-2026"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "survey series",
      "measures": [
        "% of US adults who ever read AI summaries at top of search results (n=5,119, 17–23 Feb 2026)",
        "% of US adults who use AI chatbots, and for news, emotional support, companionship"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Pew Research Center 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off, annual",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "pew-ai-summaries-2026",
          "record": 24
        },
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "pew-chatbot-purposes-2026",
          "record": 34
        }
      ]
    },
    {
      "id": "culture:45485b83094bb65c",
      "title": "Bad Bot Report series",
      "citation": "Imperva/Thales 2026",
      "url": "https://www.imperva.com/company/press_releases/ai-driven-bot-attacks-surged-12-5x-according-to-thales-bad-bot-report/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "imperva-bots"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "tracker",
      "measures": [
        "% of web requests on Imperva network from bots"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Imperva/Thales 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "imperva-bots",
          "record": 48
        }
      ]
    },
    {
      "id": "culture:bc52f7888f174da1",
      "title": "Chartbeat 2026 Publisher Playbook: Google search referrals",
      "citation": "Chartbeat via Search Engine Journal 2026",
      "url": "https://www.searchenginejournal.com/google-search-decline-publishers-chartbeat/590681/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "chartbeat-referrals"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "platform data",
      "measures": [
        "Year-on-year change in Google search referral traffic to publishers in Chartbeat's network"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Chartbeat via Search Engine Journal 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "chartbeat-referrals",
          "record": 26
        }
      ]
    },
    {
      "id": "culture:f0d2a16957b993cd",
      "title": "ChatGPT weekly active users",
      "citation": "OpenAI via TechCrunch/The Next Web 2023–26",
      "url": "https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "chatgpt-wau"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "platform data",
      "measures": [
        "ChatGPT weekly active users (company statements)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "OpenAI via TechCrunch/The Next Web 2023–26",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "chatgpt-wau",
          "record": 35
        }
      ]
    },
    {
      "id": "culture:b200d027634aa702",
      "title": "Digital News Report 2026 executive summary",
      "citation": "Reuters Institute 2026",
      "url": "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/dnr-executive-summary",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "reuters-trust"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "survey series",
      "measures": [
        "% who trust most news most of the time; % worried about real vs fake online (48 markets, n=97,520)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Reuters Institute 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "reuters-trust",
          "record": 47
        }
      ]
    },
    {
      "id": "culture:a52ac136db019475",
      "title": "Digital News Report 2026: emerging uses of AI chatbots for news",
      "citation": "Reuters Institute 2026",
      "url": "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/emerging-uses-ai-chatbots-news-and-what-it-means-journalism",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "reuters-dnr-chatbots"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "survey series",
      "measures": [
        "% of online adults in 48 markets using AI chatbots for news weekly; % naming AI as main source"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Reuters Institute 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "reuters-dnr-chatbots",
          "record": 32
        }
      ]
    },
    {
      "id": "culture:784dbbb39f557cb7",
      "title": "Empirical evidence of Large Language Model's influence on human spoken communication",
      "citation": "Hiromu Yakura et al. First released 3 September 2024; version used: arXiv:2409.01754v4, 16 July 2026 (preprint).",
      "url": "https://arxiv.org/abs/2409.01754",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "yakura-speech"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "natural experiment",
      "measures": [
        "Frequency of ChatGPT-favoured words in 737,083 hours of unscripted podcast speech; synthetic control around ChatGPT release"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Hiromu Yakura et al. First released 3 September 2024; version used: arXiv:2409.01754v4, 16 July 2026 (preprint).",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "yakura-speech",
          "record": 20
        }
      ]
    },
    {
      "id": "culture:49d7dc398e1767c0",
      "title": "Generative AI floods and dilutes the market for books",
      "citation": "Chakrabarty et al. 2026",
      "url": "https://arxiv.org/abs/2607.20349",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "books-chakrabarty"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "panel",
      "measures": [
        "Sales share of self-published genre-fiction books with >25% detected AI text (14,419 books, daily sales to Jun 2026)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Chakrabarty et al. 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "books-chakrabarty",
          "record": 14
        }
      ]
    },
    {
      "id": "culture:a9c114c287164240",
      "title": "Google search revenue Q1 2026: AI Mode, record queries",
      "citation": "Alphabet Q1 2026 via Search Engine Journal",
      "url": "https://beta.searchenginejournal.com/google-search-revenue-q1-2026-ai-mode-record-queries/568944/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "alphabet-queries"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "platform data",
      "measures": [
        "Google Search query volume (company statement); Search revenue growth"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Alphabet Q1 2026 via Search Engine Journal",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "alphabet-queries",
          "record": 31
        }
      ]
    },
    {
      "id": "culture:b0ce8824432a95b8",
      "title": "Google zero-click searches 2026 study",
      "citation": "SparkToro/Similarweb via Search Engine Land 2026",
      "url": "https://searchengineland.com/google-zero-click-searches-2026-study-479717",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "sparktoro-zero-click"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "log analysis",
      "measures": [
        "% of US Google searches ending without any click (panel clickstream)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "SparkToro/Similarweb via Search Engine Land 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "sparktoro-zero-click",
          "record": 28
        }
      ]
    },
    {
      "id": "culture:c23ca4a9082d6a52",
      "title": "Journalism and Technology Trends and Predictions 2026",
      "citation": "Chartbeat via Reuters Institute 2026",
      "url": "https://reutersinstitute.politics.ox.ac.uk/sites/default/files/2026-01/Trends_and_Predictions_2026.pdf",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "chartbeat-risj"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "platform data",
      "measures": [
        "% change in Google search referrals to 2,500+ publisher sites"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Chartbeat via Reuters Institute 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "chartbeat-risj",
          "record": 27
        }
      ]
    },
    {
      "id": "culture:03f75f3d03916c1a",
      "title": "Trust in media (news release, 29 Sep 2026)",
      "citation": "Gallup 2026",
      "url": "https://news.gallup.com/file/poll/714986/20260929NewsMediaTrust.pdf",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "gallup-media-trust"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "survey series",
      "measures": [
        "% of US adults with great deal/fair amount of trust in mass media (n≈1,000, ±4)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Gallup 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "gallup-media-trust",
          "record": 46
        }
      ]
    },
    {
      "id": "culture:c8055bfac300d7f7",
      "title": "AI Overviews study",
      "citation": "Semrush 2025",
      "url": "https://www.semrush.com/blog/semrush-ai-overviews-study/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "semrush-aio"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "tracker",
      "measures": [
        "% of tracked keywords triggering an AI Overview"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Semrush 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "semrush-aio",
          "record": 30
        }
      ]
    },
    {
      "id": "culture:705eaba44c2b9a85",
      "title": "AI Slop Report: The Global Rise of Low-Quality AI Videos",
      "citation": "Kapwing 2025",
      "url": "https://www.kapwing.com/blog/ai-slop-report-the-global-rise-of-low-quality-ai-videos/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "kapwing-youtube"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "cross-sectional",
      "measures": [
        "Share of first 500 Shorts served to a new YouTube account that were AI slop; AI slop channels among top 100 trending channels per country"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Kapwing 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "kapwing-youtube",
          "record": 8
        }
      ]
    },
    {
      "id": "culture:8e2613d14c1c5141",
      "title": "AI artists on Billboard charts",
      "citation": "Billboard 2025",
      "url": "https://billboard.com/lists/ai-artists-on-billboard-charts",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "billboard-ai-artists"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "tracker",
      "measures": [
        "Count of AI or AI-assisted acts that have appeared on any Billboard chart"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Billboard 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "billboard-ai-artists",
          "record": 9
        }
      ]
    },
    {
      "id": "culture:abf0eefa1c67967f",
      "title": "AI companion apps on track to pull in $120M in 2025",
      "citation": "Appfigures via TechCrunch 2025",
      "url": "https://techcrunch.com/2025/08/12/ai-companion-apps-on-track-to-pull-in-120m-in-2025",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "appfigures-companions"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "platform data",
      "measures": [
        "Companion-app consumer revenue and downloads (337 apps)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Appfigures via TechCrunch 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "appfigures-companions",
          "record": 41
        }
      ]
    },
    {
      "id": "culture:1640b2a274f53320",
      "title": "AI content in Google search results",
      "citation": "Originality.ai 2025",
      "url": "https://originality.ai/ai-content-in-google-search-results",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "originality-serp"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "tracker",
      "measures": [
        "% of Google top-20 results for 500 informational keywords classed AI"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Originality.ai 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "originality-serp",
          "record": 5
        }
      ]
    },
    {
      "id": "culture:266a9e24ac8903e1",
      "title": "Almost half of the images on Adobe Stock are AI-generated",
      "citation": "Kneschke via PetaPixel 2025",
      "url": "https://petapixel.com/2025/05/22/almost-half-of-the-images-on-adobe-stock-are-ai-generated",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "adobe-stock"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "tracker",
      "measures": [
        "AI-generated images as share of Adobe Stock collection"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Kneschke via PetaPixel 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "adobe-stock",
          "record": 12
        }
      ]
    },
    {
      "id": "culture:d7e0644e318b802c",
      "title": "Deezer/Ipsos survey on AI music",
      "citation": "Deezer/Ipsos 2025",
      "url": "https://newsroom-deezer.com/2025/11/deezer-ipsos-survey-ai-music/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "deezer-ipsos"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of adults who could not tell fully AI music from human-made in a blind test (9,000 adults, 8 countries)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Deezer/Ipsos 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "deezer-ipsos",
          "record": 3
        }
      ]
    },
    {
      "id": "culture:068d2ea3c48e2597",
      "title": "Delving into LLM-assisted writing in biomedical publications through excess vocabulary",
      "citation": "Kobak et al. 2025",
      "url": "https://arxiv.org/abs/2406.07016",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "kobak-pubmed"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "log analysis",
      "measures": [
        "Lower-bound % of PubMed abstracts processed with LLMs (excess-vocabulary method, 15m abstracts 2010–2024)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Kobak et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "kobak-pubmed",
          "record": 16
        }
      ]
    },
    {
      "id": "culture:b283e8fde4a18d04",
      "title": "Generative AI and News Report 2025",
      "citation": "Reuters Institute 2025",
      "url": "https://reutersinstitute.politics.ox.ac.uk/generative-ai-and-news-report-2025-how-people-think-about-ais-role-journalism-and-society",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "risj-genai-6country"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "survey series",
      "measures": [
        "% in 6 countries using generative AI weekly to get news; weekly use of any genAI"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Reuters Institute 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "risj-genai-6country",
          "record": 33
        }
      ]
    },
    {
      "id": "culture:a41687d6aaf6170a",
      "title": "Google users are less likely to click on links when an AI summary appears",
      "citation": "Pew Research Center 2025",
      "url": "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "pew-ai-summaries-2025"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "log analysis",
      "measures": [
        "% of Google searches followed by a result click, with vs without AI summary (900 adults' browsing, Mar 2025)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Pew Research Center 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "pew-ai-summaries-2025",
          "record": 23
        }
      ]
    },
    {
      "id": "culture:e6e162eaede36463",
      "title": "Gradual Disempowerment: Systemic Existential Risks from Incremental AI Development",
      "citation": "Kulveit et al. 2025",
      "url": "https://arxiv.org/abs/2501.16946",
      "year": 2025,
      "kind": "framework",
      "rawIds": [
        "kulveit-gd-framework"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "review",
      "measures": [
        "Proposed culture measures: human vs AI share of widely consumed content; human–AI relationships"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Kulveit et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "kulveit-gd-framework",
          "record": 60
        }
      ]
    },
    {
      "id": "culture:ddd8dca7ac30386a",
      "title": "How AI and Human Behaviors Shape Psychosocial Effects of Extended Chatbot Use: A Longitudinal Randomized Controlled Study",
      "citation": "Fang et al. 2025 (MIT Media Lab & OpenAI)",
      "url": "https://arxiv.org/abs/2503.17473",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "fang-rct"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "RCT",
      "measures": [
        "Loneliness, socialising with people, emotional dependence, problematic use over 4 weeks (n=981, 300,000+ messages)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Fang et al. 2025 (MIT Media Lab & OpenAI)",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "fang-rct",
          "record": 44
        }
      ]
    },
    {
      "id": "culture:a2d07267e0985333",
      "title": "How People Use ChatGPT (NBER WP 34255)",
      "citation": "Chatterji et al. 2025",
      "url": "https://www.nber.org/papers/w34255",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "chatterji-nber"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "log analysis",
      "measures": [
        "Classification of ChatGPT conversations by purpose"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Chatterji et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "chatterji-nber",
          "record": 36
        }
      ]
    },
    {
      "id": "culture:13e0955727d6e0e1",
      "title": "How people use Claude for support, advice and companionship",
      "citation": "Anthropic 2025",
      "url": "https://www.anthropic.com/news/how-people-use-claude-for-support-advice-and-companionship",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "anthropic-affective"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "log analysis",
      "measures": [
        "% of Claude.ai conversations that are affective / companionship or role-play"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Anthropic 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "anthropic-affective",
          "record": 43
        }
      ]
    },
    {
      "id": "culture:a373ad6747303c8b",
      "title": "Human-LLM Coevolution: Evidence from Academic Writing",
      "citation": "Geng & Trotta 2025",
      "url": "https://arxiv.org/abs/2502.09606",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "geng-trotta"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "log analysis",
      "measures": [
        "Frequency of ChatGPT-favoured words in arXiv abstracts over time"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Geng & Trotta 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "geng-trotta",
          "record": 19
        }
      ]
    },
    {
      "id": "culture:1fab5c56265f23e6",
      "title": "LEAP wave 3: daily AI companionship",
      "citation": "LEAP expert panel 2025",
      "url": "https://leap.forecastingresearch.org/reports/wave3",
      "year": 2025,
      "kind": "forecast",
      "rawIds": [
        "leap-companions-forecast"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "model",
      "measures": [
        "% of US adults using AI daily for companionship"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "LEAP expert panel 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "leap-companions-forecast",
          "record": 54
        }
      ]
    },
    {
      "id": "culture:2556cd0223b84efc",
      "title": "New user trends on Wikipedia",
      "citation": "Wikimedia Foundation 2025",
      "url": "https://diff.wikimedia.org/2025/10/17/new-user-trends-on-wikipedia/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "wikimedia-pageviews"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "platform data",
      "measures": [
        "Human pageviews to Wikipedia, year on year"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Wikimedia Foundation 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "wikimedia-pageviews",
          "record": 22
        }
      ]
    },
    {
      "id": "culture:f782a88f5100dadb",
      "title": "News Integrity in AI Assistants",
      "citation": "EBU & BBC 2025",
      "url": "https://www.ebu.ch/research/open/report/news-integrity-in-ai-assistants",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "ebu-bbc"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of AI-assistant answers to news questions with at least one significant issue (3,000+ answers, 18 countries)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "EBU & BBC 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "ebu-bbc",
          "record": 37
        }
      ]
    },
    {
      "id": "culture:b906bc5d5d350018",
      "title": "Pangram predicts 21% of ICLR reviews are AI-generated",
      "citation": "Pangram 2025",
      "url": "https://www.pangram.com/blog/pangram-predicts-21-of-iclr-reviews-are-ai-generated",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "iclr-reviews"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of ICLR 2026 peer reviews (≈70,000) classed fully AI-generated"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Pangram 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "iclr-reviews",
          "record": 15
        }
      ]
    },
    {
      "id": "culture:c8a42f8174abb409",
      "title": "Quantifying large language model usage in scientific papers",
      "citation": "Liang et al. 2025",
      "url": "https://www.nature.com/articles/s41562-025-02273-8",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "liang-nhb"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "log analysis",
      "measures": [
        "Estimated LLM-modified share of paper abstracts/introductions by field (1.12m papers, 2020–Sep 2024)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Liang et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "liang-nhb",
          "record": 18
        }
      ]
    },
    {
      "id": "culture:5e89546faf8031c3",
      "title": "Spotify strengthens AI protections for artists, songwriters and producers",
      "citation": "Spotify 2025",
      "url": "https://newsroom.spotify.com/2025-09-25/spotify-strengthens-ai-protections/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "spotify-spam"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "platform data",
      "measures": [
        "Spammy tracks removed in 12 months; AI policies (impersonation, spam filter, DDEX AI credits)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Spotify 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "spotify-spam",
          "record": 10
        }
      ]
    },
    {
      "id": "culture:51bd3ebdd4628a34",
      "title": "Talk, Trust, and Trade-Offs",
      "citation": "Common Sense Media 2025",
      "url": "https://www.commonsensemedia.org/research/talk-trust-and-trade-offs-how-and-why-teens-use-ai-companions",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "common-sense-companions"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of US teens 13–17 who have used / regularly use AI companions (broad definition)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Common Sense Media 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "common-sense-companions",
          "record": 39
        }
      ]
    },
    {
      "id": "culture:c8501d8e4c8f5716",
      "title": "Teens, Social Media and AI Chatbots 2025",
      "citation": "Pew Research Center 2025",
      "url": "https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "pew-teens-2025"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "survey series",
      "measures": [
        "% of US teens using AI chatbots, and for casual conversation or emotional support"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Pew Research Center 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "pew-teens-2025",
          "record": 40
        }
      ]
    },
    {
      "id": "culture:8d9da3033efb047e",
      "title": "The crawl-to-click gap",
      "citation": "Cloudflare 2025",
      "url": "https://blog.cloudflare.com/crawlers-click-ai-bots-training/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "cloudflare-crawl"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "platform data",
      "measures": [
        "Pages crawled per referral sent back, by AI company"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Cloudflare 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "cloudflare-crawl",
          "record": 38
        }
      ]
    },
    {
      "id": "culture:549b5059df2fbaa0",
      "title": "The widespread adoption of large language model-assisted writing across society",
      "citation": "Liang et al. 2025",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12745980/",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "liang-patterns"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "log analysis",
      "measures": [
        "Estimated % of documents LLM-assisted: consumer complaints, corporate and UN press releases, job postings"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Liang et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "liang-patterns",
          "record": 17
        }
      ]
    },
    {
      "id": "culture:81ba2d85146f41ba",
      "title": "TikTok lets users choose how much AI content they see",
      "citation": "TikTok via Tubefilter 2025",
      "url": "https://www.tubefilter.com/2025/11/19/tiktok-generative-ai-content-toggle-trust-safety/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "tiktok-ai-slider"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "qualitative",
      "measures": [
        "Platform policy: user control over AI-generated content in For You feed; invisible watermarking"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "TikTok via Tubefilter 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "tiktok-ai-slider",
          "record": 11
        }
      ]
    },
    {
      "id": "culture:96a3c0270bd2e5c0",
      "title": "What percentage of new content is AI-generated?",
      "citation": "Ahrefs 2025",
      "url": "https://ahrefs.com/blog/what-percentage-of-new-content-is-ai-generated/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "ahrefs-new-pages"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of 900,000 newly detected English pages with any / pure AI text"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Ahrefs 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "ahrefs-new-pages",
          "record": 6
        }
      ]
    },
    {
      "id": "culture:5e61ac9262001dfc",
      "title": "Who Is AI Replacing? The Impact of Generative AI on Online Freelancing Platforms",
      "citation": "Demirci, Hannane & Zhu 2025",
      "url": "https://spiral.imperial.ac.uk/entities/publication/88113a91-b994-4717-8526-dadac657f1cb",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "demirci-freelance"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "natural experiment",
      "measures": [
        "Freelance job postings by category before/after ChatGPT and image generators"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Demirci, Hannane & Zhu 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "demirci-freelance",
          "record": 50
        }
      ]
    },
    {
      "id": "culture:c4d42b97c326efb1",
      "title": "Young adults leading the way in AI adoption",
      "citation": "AP-NORC 2025",
      "url": "https://apnorc.org/projects/young-adults-leading-the-way-in-ai-adoption/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "ap-norc-companionship"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of US adults who have used AI for companionship"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "AP-NORC 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "ap-norc-companionship",
          "record": 42
        }
      ]
    },
    {
      "id": "culture:57692fd446b28301",
      "title": "Zero-click news searches",
      "citation": "Similarweb via Press Gazette 2025",
      "url": "https://pressgazette.co.uk/media-audience-and-business-data/media_metrics/how-google-ai-overviews-is-fuelling-zero-click-searches-for-top-publishers/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "similarweb-news"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "log analysis",
      "measures": [
        "% of news-related searches ending without a click"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Similarweb via Press Gazette 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "similarweb-news",
          "record": 29
        }
      ]
    },
    {
      "id": "culture:ed7dee5100145a47",
      "title": "AI Companions Reduce Loneliness",
      "citation": "De Freitas et al. 2024",
      "url": "https://arxiv.org/abs/2407.19096",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "defreitas-loneliness"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "RCT",
      "measures": [
        "Loneliness after interacting with AI companion vs human vs other activities; one-week longitudinal study"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "De Freitas et al. 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "defreitas-loneliness",
          "record": 45
        }
      ]
    },
    {
      "id": "culture:3e9d5d7dceceebc1",
      "title": "AI models collapse when trained on recursively generated data",
      "citation": "Shumailov et al. 2024",
      "url": "https://www.nature.com/articles/s41586-024-07566-y",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "shumailov-collapse"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "model",
      "measures": [
        "Model quality across generations trained on prior models' output"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Shumailov et al. 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "shumailov-collapse",
          "record": 55
        }
      ]
    },
    {
      "id": "culture:ca4a037a0aa330bc",
      "title": "Gartner predicts search engine volume will drop 25% by 2026",
      "citation": "Gartner 2024",
      "url": "https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents",
      "year": 2024,
      "kind": "forecast",
      "rawIds": [
        "gartner-search-forecast"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "model",
      "measures": [
        "Traditional search engine volume by 2026"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Gartner 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "gartner-search-forecast",
          "record": 52
        }
      ]
    },
    {
      "id": "culture:512c4bd4c1df2691",
      "title": "Global economic study shows human creators' future at risk from generative AI",
      "citation": "CISAC/PMP Strategy 2024",
      "url": "https://www.cisac.org/Newsroom/news-releases/global-economic-study-shows-human-creators-future-risk-generative-ai",
      "year": 2024,
      "kind": "forecast",
      "rawIds": [
        "cisac-forecast"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "model",
      "measures": [
        "Share of music and audiovisual creators' revenues at risk by 2028; genAI content market"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "CISAC/PMP Strategy 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "cisac-forecast",
          "record": 51
        }
      ]
    },
    {
      "id": "culture:1a66b055e8d38494",
      "title": "Is Model Collapse Inevitable? Breaking the Curse of Recursion by Accumulating Real and Synthetic Data",
      "citation": "Gerstgrasser et al. 2024",
      "url": "https://arxiv.org/abs/2404.01413",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "gerstgrasser-accumulate"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "model",
      "measures": [
        "Test error across generations when synthetic data replaces vs accumulates with real data"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Gerstgrasser et al. 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "gerstgrasser-accumulate",
          "record": 56
        }
      ]
    },
    {
      "id": "culture:016308b8152c8dff",
      "title": "SoA survey on generative AI (via The Bookseller)",
      "citation": "Society of Authors 2024",
      "url": "https://thebookseller.com/news/a-third-of-translators-report-losing-work-to-generative-ai-systems-soa-survey-reveals",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "soa-survey"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of members who lost work / income to generative AI (n=787)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Society of Authors 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "soa-survey",
          "record": 49
        }
      ]
    },
    {
      "id": "culture:4ec45c7d9f3aae84",
      "title": "The Rise of AI-Generated Content in Wikipedia",
      "citation": "Brooks et al. 2024",
      "url": "https://aclanthology.org/2024.wikinlp-1.12/",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "brooks-wikipedia"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "culture"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of new English Wikipedia articles (Aug 2024) flagged AI at 1% false-positive calibration"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Brooks et al. 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "brooks-wikipedia",
          "record": 21
        }
      ]
    },
    {
      "id": "culture:4c55d06f32589610",
      "title": "GPT detectors are biased against non-native English writers",
      "citation": "Liang et al. 2023",
      "url": "https://arxiv.org/abs/2304.02819",
      "year": 2023,
      "kind": "study",
      "rawIds": [
        "liang-detector-bias"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "cross-sectional",
      "measures": [
        "Detector misclassification of native vs non-native English writing"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Liang et al. 2023",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "liang-detector-bias",
          "record": 57
        }
      ]
    },
    {
      "id": "culture:e54c9d7e955992c7",
      "title": "'90% of online content synthetically generated by 2026' (widely cited)",
      "citation": "Attributed to Europol 2022",
      "url": "https://www.europol.europa.eu/cms/sites/default/files/documents/Europol_Innovation_Lab_Facing_Reality_Law_Enforcement_And_The_Challenge_Of_Deepfakes.pdf",
      "year": 2022,
      "kind": "forecast",
      "rawIds": [
        "europol-90-forecast"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "model",
      "measures": [
        "Share of online content synthetically generated by 2026"
      ],
      "constructs": [],
      "setting": "population",
      "country": "EU",
      "studySpan": "unclear",
      "venue": "Attributed to Europol 2022",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "europol-90-forecast",
          "record": 53
        }
      ]
    },
    {
      "id": "culture:0aa23f1ea7a9a01d",
      "title": "Algorithmic Effects on the Diversity of Consumption on Spotify",
      "citation": "Anderson et al. 2020",
      "url": "https://www.cs.utoronto.ca/~ashton/pubs/alg-effects-spotify-www2020.pdf",
      "year": 2020,
      "kind": "study",
      "rawIds": [
        "anderson-spotify"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "log analysis",
      "measures": [
        "Generalist-specialist diversity of listening, algorithmic vs organic (100m+ users, ~70bn streams, 2018–19)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Anderson et al. 2020",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "anderson-spotify",
          "record": 58
        }
      ]
    },
    {
      "id": "culture:60da04b9ac7776f1",
      "title": "Experimental study of inequality and unpredictability in an artificial cultural market",
      "citation": "Salganik, Dodds & Watts 2006",
      "url": "https://doi.org/10.1126/science.1121066",
      "year": 2006,
      "kind": "study",
      "rawIds": [
        "salganik-musiclab"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "culture"
      ],
      "design": "RCT",
      "measures": [
        "Inequality and unpredictability of song success with vs without visible popularity signals (14,341 participants)"
      ],
      "constructs": [],
      "setting": "group",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Salganik, Dodds & Watts 2006",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/culture.jsonl",
          "sourceId": "salganik-musiclab",
          "record": 59
        }
      ]
    }
  ],
  "institutions": [
    {
      "id": "institutions:f907af2d7c43d629",
      "title": "2025 Federal Agency AI Use Case Inventory (consolidated)",
      "citation": "US OMB 2026",
      "url": "https://github.com/ombegov/2025-Federal-Agency-AI-Use-Case-Inventory",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "us_inventory_count",
        "us_inventory_hi_safeguards",
        "us_inventory_vendor",
        "us_inventory_scope"
      ],
      "format": "tracking",
      "direct": "unclassified",
      "topics": [
        "institutions"
      ],
      "design": "official statistic",
      "measures": [
        "AI use cases publicly reported by US civilian federal agencies (count), and those classed rights-/safety-impacting (2024) or high-impact (2025)",
        "Of high-impact use cases recorded as deployed, the number reporting each minimum practice (appeal process, pre-deployment testing, impact assessment, ongoing monitoring) as established",
        "Use cases whose free-text vendor field names each company (count and share of those naming a vendor)",
        "Use cases by development stage and topic area (count, share of 3,611)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "US OMB 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "us_inventory_count",
          "record": 1
        },
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "us_inventory_hi_safeguards",
          "record": 2
        },
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "us_inventory_vendor",
          "record": 4
        },
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "us_inventory_scope",
          "record": 5
        }
      ]
    },
    {
      "id": "institutions:e4027220709d9496",
      "title": "A Formal Model of How Artificial Intelligence Erodes Human Agency (RR-A4817-1)",
      "citation": "Moon & Boudreaux (RAND) 2026",
      "url": "https://www.rand.org/pubs/research_reports/RRA4817-1.html",
      "year": 2026,
      "kind": "framework",
      "rawIds": [
        "moon_boudreaux_2026"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "model",
      "measures": [
        "Proposed metrics: distribution of decisive coalitions, minimal decisive coalition size, and its human/AI composition"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Moon & Boudreaux (RAND) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "moon_boudreaux_2026",
          "record": 52
        }
      ]
    },
    {
      "id": "institutions:63f3803605380ff2",
      "title": "AI Hallucination Cases Database",
      "citation": "Charlotin 2026",
      "url": "https://www.damiencharlotin.com/hallucinations/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "charlotin_db"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "tracker",
      "measures": [
        "Court and tribunal decisions addressing AI-fabricated material in filings (cumulative count)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Charlotin 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "charlotin_db",
          "record": 34
        }
      ]
    },
    {
      "id": "institutions:e31f8d97fcefc992",
      "title": "Albania's cheerful AI minister is the product of a government agency under investigation",
      "citation": "OCCRP 2026",
      "url": "https://www.occrp.org/en/feature/albanias-cheerful-ai-minister-is-the-product-of-a-government-agency-under-investigation-for-massive-corruption",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "diella_2025"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "qualitative",
      "measures": [
        "Formal ministerial title given to an AI system"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "Albania",
      "studySpan": "unclear",
      "venue": "OCCRP 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "diella_2025",
          "record": 40
        }
      ]
    },
    {
      "id": "institutions:81cc94599dfff5f5",
      "title": "Algorithmic transparency records",
      "citation": "UK Government (GOV.UK) 2026",
      "url": "https://www.gov.uk/algorithmic-transparency-records",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "uk_atrs"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "official statistic",
      "measures": [
        "Records published under the Algorithmic Transparency Recording Standard (count)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "UK Government (GOV.UK) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "uk_atrs",
          "record": 13
        }
      ]
    },
    {
      "id": "institutions:eb4ce4c99366aff0",
      "title": "Algoritmeregister dashboard",
      "citation": "Dutch government (Algoritmeregister) 2026",
      "url": "https://algoritmes.overheid.nl/nl/dashboard",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "nl_algoritmeregister"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "official statistic",
      "measures": [
        "Published algorithm descriptions by Dutch public bodies (count), by status and by category (A high-risk AI systems, B impactful, C other)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "NL",
      "studySpan": "unclear",
      "venue": "Dutch government (Algoritmeregister) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "monthly",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "nl_algoritmeregister",
          "record": 21
        }
      ]
    },
    {
      "id": "institutions:95c07df57db43ea5",
      "title": "Anthropic, OpenAI and Palantir: who gains and who loses in the federal fallout",
      "citation": "TBR (Technology Business Research) 2026",
      "url": "https://tbri.com/blog/anthropic-openai-and-palantir-who-gains-and-who-loses-in-the-federal-fallout/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "pentagon_anthropic_2026"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "qualitative",
      "measures": [
        "Effects of the Pentagon's 2026 designation of Anthropic as a security risk on federal AI suppliers"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "TBR (Technology Business Research) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "pentagon_anthropic_2026",
          "record": 11
        }
      ]
    },
    {
      "id": "institutions:790050d8f328053f",
      "title": "Bureaucratic Silences: What the Canadian AI Register Reveals, Omits, and Obscures (FAccT '26)",
      "citation": "Das, Tessono, Ahmed & Guha 2026",
      "url": "https://diptodas.net/assets/pdf/FACCT26_AIregister.pdf",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "das2026"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "qualitative",
      "measures": [
        "Content analysis of 409 register entries: purpose, build source, vendors, data practices"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "Canada",
      "studySpan": "unclear",
      "venue": "Das, Tessono, Ahmed & Guha 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "das2026",
          "record": 28
        }
      ]
    },
    {
      "id": "institutions:42d1de7b5951a25e",
      "title": "Commons spoken contributions containing 'I rise to speak'",
      "citation": "Observatory count, UK Parliament Hansard API 2026",
      "url": "https://hansard-api.parliament.uk/search/contributions/Spoken.json?queryParameters.endDate=2025-12-31&queryParameters.house=Commons&queryParameters.searchTerm=%22I+rise+to+speak%22&queryParameters.startDate=2025-01-01&queryParameters.take=1",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "uk_hansard_phrase"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "log analysis",
      "measures": [
        "House of Commons spoken contributions matching the phrase (count per period)"
      ],
      "constructs": [],
      "setting": "group",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Observatory count, UK Parliament Hansard API 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "uk_hansard_phrase",
          "record": 19
        }
      ]
    },
    {
      "id": "institutions:f69e3440f239d285",
      "title": "DSA Transparency Database dashboard",
      "citation": "European Commission 2026",
      "url": "https://transparency.dsa.ec.europa.eu/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "dsa_tdb"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "platform data",
      "measures": [
        "Statements of reasons for platform moderation decisions in a rolling 180 days, and share flagged as fully automated decisions"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "EU",
      "studySpan": "unclear",
      "venue": "European Commission 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "dsa_tdb",
          "record": 23
        }
      ]
    },
    {
      "id": "institutions:51356b4d2141fda5",
      "title": "Digital Government Outlook 2026, ch. 4: Adopting and governing AI in government (Digital Government Index 2025)",
      "citation": "OECD 2026",
      "url": "https://www.oecd.org/en/publications/digital-government-outlook_0496b2bc-en/full-report/adopting-and-governing-ai-in-government_7ef312a9",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "oecd_dgi_ai"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "survey series",
      "measures": [
        "Share of OECD countries reporting AI use in internal processes, public services, policymaking and oversight; share with guardrails"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "OECD 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "biennial",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "oecd_dgi_ai",
          "record": 29
        }
      ]
    },
    {
      "id": "institutions:a0e3c66356281a42",
      "title": "EU high-risk AI database delay; AI Act omnibus agreement",
      "citation": "Resultsense (citing Euractiv) 2026; Gibson Dunn 2026",
      "url": "https://www.resultsense.com/news/2026-07-27-eu-high-risk-ai-database-delay/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "eu_highrisk_db"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "official statistic",
      "measures": [
        "Entries in the EU database of high-risk AI systems (count)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "EU",
      "studySpan": "unclear",
      "venue": "Resultsense (citing Euractiv) 2026; Gibson Dunn 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "eu_highrisk_db",
          "record": 26
        }
      ]
    },
    {
      "id": "institutions:db304cc0b9c69404",
      "title": "Federal judges report broad adoption of AI tools",
      "citation": "Sedona Conference / Northwestern 2026",
      "url": "https://news.northwestern.edu/stories/2026/03/northwestern-study-finds-a-significant-number-of-federal-judges-are-already-using-ai-tools",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "northwestern_judges_2026"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "cross-sectional",
      "measures": [
        "Share of responding US federal judges using at least one AI tool in judicial work"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Sedona Conference / Northwestern 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "northwestern_judges_2026",
          "record": 36
        }
      ]
    },
    {
      "id": "institutions:2a182566a3ce8fab",
      "title": "GAO-26-107859 on federal AI acquisitions (as reported by ExecutiveGov, 14 Apr 2026)",
      "citation": "US GAO 2026",
      "url": "https://www.executivegov.com/articles/gao-report-ai-procurement-challenges-federal-agencies",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "gao_ai_acquisition_2026"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "qualitative",
      "measures": [
        "Agencies' practices and challenges in buying AI"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "US GAO 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "gao_ai_acquisition_2026",
          "record": 7
        }
      ]
    },
    {
      "id": "institutions:d2c597f01e9b34ed",
      "title": "GSA OneGov AI deals: some extensions, new offers",
      "citation": "FedScoop 2026 (quoting GSA)",
      "url": "https://fedscoop.com/gsa-onegov-ai-deals-some-extensions-new-offers/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "gsa_onegov"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "official statistic",
      "measures": [
        "Orders placed against GSA's government-wide AI offers and staff given access (count)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "FedScoop 2026 (quoting GSA)",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "gsa_onegov",
          "record": 10
        }
      ]
    },
    {
      "id": "institutions:6093cb41c78f4195",
      "title": "Gartner predicts at least 80% of governments will deploy AI agents to automate routine decision-making by 2028",
      "citation": "Gartner 2026",
      "url": "https://www.gartner.com/en/newsroom/press-releases/2026-03-17-gartner-predicts-at-least-80-percent-of-governments-will-deploy-ai-agents-to-automate-routine-decision-making-by-2028",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "gartner_gov_2026"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "model",
      "measures": [
        "Share of governments deploying AI agents for routine decisions (2028); share of agencies requiring explainability and human-in-the-loop (2029)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Gartner 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "gartner_gov_2026",
          "record": 50
        }
      ]
    },
    {
      "id": "institutions:8cb965a251be57fc",
      "title": "Government AI Readiness Index",
      "citation": "Oxford Insights 2024–2026",
      "url": "https://oxfordinsights.com/ai-readiness/government-ai-readiness-index-2025/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "oxford_insights_gairi"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "tracker",
      "measures": [
        "Composite readiness score of governments to use AI"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Oxford Insights 2024–2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "oxford_insights_gairi",
          "record": 30
        }
      ]
    },
    {
      "id": "institutions:416d3d76dcd5dddf",
      "title": "Information Commissioner highlights transparency for agencies in automated decision-making",
      "citation": "Office of the Australian Information Commissioner 2026",
      "url": "https://www.oaic.gov.au/news/media-centre/australian-information-commissioner-highlights-improved-transparency-and-integrity-for-government-agencies-in-automated-decision-making",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "au_oaic_2026"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "official statistic",
      "measures": [
        "Agencies authorised to use automated decision-making that disclose it (count)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "Australia",
      "studySpan": "unclear",
      "venue": "Office of the Australian Information Commissioner 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "au_oaic_2026",
          "record": 41
        }
      ]
    },
    {
      "id": "institutions:ab28849e09905f6f",
      "title": "People Survey 2025: civil servants set out AI gains and expectations",
      "citation": "Civil Service World 2026 (reporting Cabinet Office People Survey)",
      "url": "https://www.civilserviceworld.com/news/article/people-survey-2025-civil-servants-set-out-ai-gains-and-expectations",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "uk_people_survey_ai"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "survey series",
      "measures": [
        "Share of civil servants saying using AI for work saves them at least an hour a week; share expecting AI to change their job within 5 years"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Civil Service World 2026 (reporting Cabinet Office People Survey)",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "uk_people_survey_ai",
          "record": 14
        }
      ]
    },
    {
      "id": "institutions:c65a0ca4167589f4",
      "title": "Public Sector AI Adoption Index 2026",
      "citation": "Public First for the Center for Data Innovation 2026",
      "url": "https://datainnovation.org/2026/02/over-70-of-public-servants-worldwide-use-ai-while-government-frameworks-are-still-evolving/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "public_first_index_2026"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "cross-sectional",
      "measures": [
        "Share of public servants in 10 countries who use AI (survey, n = 3,335)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Public First for the Center for Data Innovation 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "public_first_index_2026",
          "record": 31
        }
      ]
    },
    {
      "id": "institutions:0cdd078e3da991e3",
      "title": "Where does federal AI spending stand in 2026?",
      "citation": "Denford, Dawson & Desouza (Brookings) 2026",
      "url": "https://brookings.edu/articles/where-does-federal-ai-spending-stand-in-2026/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "brookings_ai_contracts"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "tracker",
      "measures": [
        "Federal contracts whose description mentions 'artificial intelligence' or 'AI': count, obligations and potential award value, by report period"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Denford, Dawson & Desouza (Brookings) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "brookings_ai_contracts",
          "record": 9
        }
      ]
    },
    {
      "id": "institutions:db2092d2fee6d8eb",
      "title": "Abu Dhabi aims to be world's first fully AI-native government by 2027",
      "citation": "Abu Dhabi Government 2025 (via Akin Gump)",
      "url": "https://www.akingump.com/en/insights/ai-law-and-regulation-tracker/abu-dhabi-aims-to-be-worlds-first-fully-ai-native-government-across-all-digital-services-by-2027",
      "year": 2025,
      "kind": "forecast",
      "rawIds": [
        "abu_dhabi_2025"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "model",
      "measures": [
        "Stated target: 100% process automation across digital services by 2027"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "UAE",
      "studySpan": "unclear",
      "venue": "Abu Dhabi Government 2025 (via Akin Gump)",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "abu_dhabi_2025",
          "record": 51
        }
      ]
    },
    {
      "id": "institutions:7e0dc68a7df3a638",
      "title": "Algorithmic management in the workplace: new evidence from an OECD employer survey",
      "citation": "OECD 2025",
      "url": "https://www.oecd.org/en/publications/how-widespread-is-algorithmic-management-in-workplaces_cda7a114-en/full-report.html",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "oecd_algomgmt_2025"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "cross-sectional",
      "measures": [
        "Share of firms using software to instruct, monitor or evaluate workers; managers reporting unclear accountability"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "OECD 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "oecd_algomgmt_2025",
          "record": 49
        }
      ]
    },
    {
      "id": "institutions:5051846aa9900d99",
      "title": "Artificial Intelligence: Generative AI Use and Management at Federal Agencies (GAO-25-107653)",
      "citation": "US GAO 2025",
      "url": "https://files.gao.gov/reports/GAO-25-107653/index.html",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "gao_genai_2025"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "official statistic",
      "measures": [
        "AI and generative-AI use cases in the inventories of 11 selected agencies, 2023 vs 2024 (count)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "US GAO 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "gao_genai_2025",
          "record": 6
        }
      ]
    },
    {
      "id": "institutions:9beb6664cd63be73",
      "title": "Canada launches first register of AI uses in federal government",
      "citation": "Treasury Board of Canada Secretariat 2025",
      "url": "https://www.canada.ca/en/treasury-board-secretariat/news/2025/11/canada-launches-first-register-of-ai-uses-in-federal-government.html",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "ca_ai_register"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "official statistic",
      "measures": [
        "AI systems listed by federal institutions (count)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "Canada",
      "studySpan": "unclear",
      "venue": "Treasury Board of Canada Secretariat 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "ca_ai_register",
          "record": 27
        }
      ]
    },
    {
      "id": "institutions:e3a5e6f622176812",
      "title": "DOGE builds AI tool to cut 50 percent of federal regulations",
      "citation": "Washington Post 2025 (via secondary reports)",
      "url": "https://letsdatascience.com/news/trump-officials-deploy-ai-to-slash-federal-regulations-57e7fa6a",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "doge_dereg_tool"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "qualitative",
      "measures": [
        "Reported use of an AI tool to flag federal regulations for repeal"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Washington Post 2025 (via secondary reports)",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "doge_dereg_tool",
          "record": 12
        }
      ]
    },
    {
      "id": "institutions:e6e162eaede36463",
      "title": "Gradual Disempowerment: Systemic Existential Risks from Incremental AI Development",
      "citation": "Kulveit et al. 2025",
      "url": "https://arxiv.org/abs/2501.16946",
      "year": 2025,
      "kind": "framework",
      "rawIds": [
        "kulveit2025_metrics"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "model",
      "measures": [
        "Proposed state metrics such as the fraction of decisions made by AI and AI's role in law and policymaking"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Kulveit et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "kulveit2025_metrics",
          "record": 53
        }
      ]
    },
    {
      "id": "institutions:b03a4f5448024f9b",
      "title": "Live Facial Recognition Annual Report 2025, and deployment records",
      "citation": "Metropolitan Police 2025; London Assembly Greens 2025",
      "url": "https://www.met.police.uk/SysSiteAssets/media/downloads/force-content/met/advice/lfr/other-lfr-documents/live-facial-recognition-annual-report-2025.pdf",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "uk_met_lfr"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "official statistic",
      "measures": [
        "Live facial recognition deployments, faces scanned, AI alerts (true/false) and arrests per year"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Metropolitan Police 2025; London Assembly Greens 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "uk_met_lfr",
          "record": 18
        }
      ]
    },
    {
      "id": "institutions:547999b51eca9f75",
      "title": "M-25-21: Accelerating Federal Use of AI through Innovation, Governance, and Public Trust",
      "citation": "US OMB 2025",
      "url": "https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf",
      "year": 2025,
      "kind": "framework",
      "rawIds": [
        "omb_m2521"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "review",
      "measures": [
        "Defines 'high-impact AI' and minimum practices (testing, impact assessment, human oversight, appeals) agencies must report"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "US OMB 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "omb_m2521",
          "record": 54
        }
      ]
    },
    {
      "id": "institutions:280f92ad30ab97b1",
      "title": "Microsoft 365 Copilot Experiment: Cross-Government Findings Report",
      "citation": "UK Government Digital Service 2025",
      "url": "https://assets.publishing.service.gov.uk/media/683db42bd23a62e5d32680d0/M365_Copilot_Experiment_Findings_Report.pdf",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "uk_copilot_trial"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "cross-sectional",
      "measures": [
        "Self-reported time saved and adoption among 20,000 civil servants in 12 departments, Sep–Dec 2024"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "UK Government Digital Service 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "uk_copilot_trial",
          "record": 15
        }
      ]
    },
    {
      "id": "institutions:a75ede3387423ae9",
      "title": "Response to PQ on progress of adopting AI tools within public service",
      "citation": "Singapore MDDI 2025",
      "url": "https://www.mddi.gov.sg/newsroom/mddi-s-response-to-pq-on-progress-of-adopting-ai-tools-within-public-service/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "singapore_pair"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "official statistic",
      "measures": [
        "Share of 150,000 public officers who have used the government chatbot; custom bots created"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "Singapore",
      "studySpan": "unclear",
      "venue": "Singapore MDDI 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "singapore_pair",
          "record": 33
        }
      ]
    },
    {
      "id": "institutions:31ced9d4b07f0952",
      "title": "Trading nuance for scale? Platform observability and content governance under the DSA",
      "citation": "Papaevangelou & Votta 2025",
      "url": "https://www.ivir.nl/?p=27971",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "papaevangelou2025"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "log analysis",
      "measures": [
        "Automation, speed and territorial scope of 439 million statements of reasons from eight very large platforms"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "EU",
      "studySpan": "unclear",
      "venue": "Papaevangelou & Votta 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "papaevangelou2025",
          "record": 25
        }
      ]
    },
    {
      "id": "institutions:f0d9286ec20d8e57",
      "title": "UAE Cabinet approves Regulatory Intelligence Office",
      "citation": "UAE Cabinet 2025",
      "url": "https://uaecabinet.ae/en/news/uae-cabinet-chaired-by-mohammed-bin-rashid-approves-launch-of-first-integrated-regulatory-intelligence-ecosystem-in-uae-government",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "uae_rio_2025"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "qualitative",
      "measures": [
        "Formal assignment of AI to legislative drafting"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "UAE",
      "studySpan": "unclear",
      "venue": "UAE Cabinet 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "uae_rio_2025",
          "record": 38
        }
      ]
    },
    {
      "id": "institutions:f27a53644599a4b4",
      "title": "UK government 'Consult' tool on live consultations",
      "citation": "PublicTechnology 2025; Think Digital Partners 2025",
      "url": "https://www.thinkdigitalpartners.com/news/2025/10/16/government-built-ai-consult-saves-thousands-of-staff-days/",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "uk_consult_tool"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "qualitative",
      "measures": [
        "AI analysis of public consultation responses: volume, agreement with human analysts"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "PublicTechnology 2025; Think Digital Partners 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "uk_consult_tool",
          "record": 20
        }
      ]
    },
    {
      "id": "institutions:b73340e9103dfc4f",
      "title": "'Lavender': The AI machine directing Israel's bombing spree in Gaza",
      "citation": "+972 Magazine / Local Call 2024",
      "url": "https://www.972mag.com/lavender-ai-israeli-army-gaza/",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "lavender2024"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "qualitative",
      "measures": [
        "Reported human review time per AI-nominated target"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "Israel",
      "studySpan": "unclear",
      "venue": "+972 Magazine / Local Call 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "lavender2024",
          "record": 48
        }
      ]
    },
    {
      "id": "institutions:a70b5a15239f5c03",
      "title": "2024 inventory field 57: can the AI make individual high-impact decisions without direct human involvement?",
      "citation": "US OMB 2024 (observatory tabulation)",
      "url": "https://github.com/ombegov/2024-Federal-AI-Use-Case-Inventory",
      "year": 2024,
      "kind": "indicator",
      "rawIds": [
        "us_inventory_autonomy_q"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "official statistic",
      "measures": [
        "Use cases where the agency answered that all individual decisions are automated, versus some requiring direct human oversight (count)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "US OMB 2024 (observatory tabulation)",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "us_inventory_autonomy_q",
          "record": 3
        }
      ]
    },
    {
      "id": "institutions:762857cfa2fab91d",
      "title": "Algorithmic Risk Assessment in the Hands of Humans",
      "citation": "Stevenson & Doleac 2024",
      "url": "https://doi.org/10.1257/pol.20220620",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "stevenson2024"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "natural experiment",
      "measures": [
        "Effect of a sentencing risk tool on Virginia judges' decisions"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Stevenson & Doleac 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "stevenson2024",
          "record": 43
        }
      ]
    },
    {
      "id": "institutions:7cca3f70ce548c5e",
      "title": "Automated Transparency: A Legal and Empirical Analysis of the Digital Services Act Transparency Database",
      "citation": "Kaushal et al. 2024",
      "url": "https://arxiv.org/abs/2404.02894",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "kaushal2024"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "log analysis",
      "measures": [
        "Automation flags and delays in 131 million statements of reasons, 19–28 Nov 2023"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "EU",
      "studySpan": "unclear",
      "venue": "Kaushal et al. 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "kaushal2024",
          "record": 24
        }
      ]
    },
    {
      "id": "institutions:53fc80549e3cfe95",
      "title": "Automated decision-making systems in NSW public sector (executive report)",
      "citation": "NSW Ombudsman 2024",
      "url": "https://cmsassets.ombo.nsw.gov.au/assets/Reports/Executive-Report-ADMS.pdf",
      "year": 2024,
      "kind": "indicator",
      "rawIds": [
        "nsw_ombudsman_2024"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "official statistic",
      "measures": [
        "Automated decision-making systems reported by NSW public bodies (count)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "Australia",
      "studySpan": "unclear",
      "venue": "NSW Ombudsman 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "nsw_ombudsman_2024",
          "record": 42
        }
      ]
    },
    {
      "id": "institutions:23547fa046e7756b",
      "title": "Focus op AI bij de rijksoverheid",
      "citation": "Algemene Rekenkamer 2024 (via Accountant.nl)",
      "url": "https://www.accountant.nl/nieuws/2024/10/rekenkamer-rijksoverheid-schat-risicos-ai-vaak-laag-in/",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "nl_rekenkamer_2024"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "cross-sectional",
      "measures": [
        "AI systems reported by 70 central-government bodies; whether performance and risks are known"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "NL",
      "studySpan": "unclear",
      "venue": "Algemene Rekenkamer 2024 (via Accountant.nl)",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "nl_rekenkamer_2024",
          "record": 22
        }
      ]
    },
    {
      "id": "institutions:b4618a8a4efbf7d1",
      "title": "Generative AI is already widespread in the public sector",
      "citation": "Bright, Enock, Esnaashari et al. (Alan Turing Institute) 2024",
      "url": "https://arxiv.org/abs/2401.01291",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "bright2024"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "cross-sectional",
      "measures": [
        "Share of 938 UK public-service professionals using generative AI, and with clear guidance"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Bright, Enock, Esnaashari et al. (Alan Turing Institute) 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "bright2024",
          "record": 16
        }
      ]
    },
    {
      "id": "institutions:e80e5bb54943c9e7",
      "title": "Putting a human in the loop: Increasing uptake, but decreasing accuracy of automated decision-making",
      "citation": "Sele & Chugunova 2024",
      "url": "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0298037",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "sele2024"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "RCT",
      "measures": [
        "Uptake and accuracy when people may adjust an algorithm's output (n = 292)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Sele & Chugunova 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "sele2024",
          "record": 46
        }
      ]
    },
    {
      "id": "institutions:446ad936016b8ad1",
      "title": "State of the Courts 2024: generative AI use",
      "citation": "Thomson Reuters Institute 2024",
      "url": "https://www.thomsonreuters.com/en/institute/articles/gen-ai-court-usage",
      "year": 2024,
      "kind": "indicator",
      "rawIds": [
        "tr_state_courts_2024"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "survey series",
      "measures": [
        "Share of US state, county and municipal courts using or planning to use generative AI"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Thomson Reuters Institute 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "tr_state_courts_2024",
          "record": 35
        }
      ]
    },
    {
      "id": "institutions:aa8c600d25f6b4f9",
      "title": "Survey of generative AI use among state and local civil servants",
      "citation": "Giesecke (Hoover Institution) 2024",
      "url": "https://www.hoover.org/generative-ai-use-us-public-sector-rise-survey-hoover-fellow-suggests",
      "year": 2024,
      "kind": "indicator",
      "rawIds": [
        "giesecke2024"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "cross-sectional",
      "measures": [
        "Share of state and local public employees in 12 states using generative AI for work"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Giesecke (Hoover Institution) 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "giesecke2024",
          "record": 32
        }
      ]
    },
    {
      "id": "institutions:b7193cb8e4328b71",
      "title": "UNESCO survey uncovers critical gaps in AI training among judicial operators",
      "citation": "UNESCO 2024",
      "url": "https://www.unesco.org/en/articles/unesco-survey-uncovers-critical-gaps-ai-training-among-judicial-operators-0",
      "year": 2024,
      "kind": "indicator",
      "rawIds": [
        "unesco_judges_2024"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "cross-sectional",
      "measures": [
        "Share of judicial operators in 96 countries who had used AI tools for work, and had guidance"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "UNESCO 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "unesco_judges_2024",
          "record": 37
        }
      ]
    },
    {
      "id": "institutions:aef9b51416f776ec",
      "title": "Use of artificial intelligence in government",
      "citation": "UK National Audit Office 2024",
      "url": "https://www.nao.org.uk/reports/use-of-artificial-intelligence-in-government/",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "nao2024"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "cross-sectional",
      "measures": [
        "Share of government bodies that had deployed or were piloting AI"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "UK National Audit Office 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "nao2024",
          "record": 17
        }
      ]
    },
    {
      "id": "institutions:864aa4c5734d51b4",
      "title": "Algorithmic Recommendations and Human Discretion",
      "citation": "Angelova, Dobbie & Yang 2023",
      "url": "https://www.nber.org/papers/w31747",
      "year": 2023,
      "kind": "study",
      "rawIds": [
        "angelova2023"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "natural experiment",
      "measures": [
        "Outcomes when bail judges override an algorithm's recommendation"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Angelova, Dobbie & Yang 2023",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "angelova2023",
          "record": 44
        }
      ]
    },
    {
      "id": "institutions:f2f1592e937d5bf6",
      "title": "Artificial Intelligence: Agencies Have Begun Implementation but Need to Complete Key Requirements (GAO-24-105980)",
      "citation": "US GAO 2023",
      "url": "https://www.gao.gov/products/gao-24-105980",
      "year": 2023,
      "kind": "study",
      "rawIds": [
        "gao_inventory_2023"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "review",
      "measures": [
        "Completeness of 23 agencies' AI inventories and compliance with AI requirements"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "US GAO 2023",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "gao_inventory_2023",
          "record": 8
        }
      ]
    },
    {
      "id": "institutions:6993dc6c3d3237fa",
      "title": "Brazilian city enacts an ordinance secretly written by ChatGPT",
      "citation": "Associated Press 2023",
      "url": "https://www.ksat.com/tech/2023/11/30/brazilian-city-enacts-an-ordinance-secretly-written-by-a-surprising-new-staffer-chatgpt/",
      "year": 2023,
      "kind": "study",
      "rawIds": [
        "porto_alegre_2023"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "qualitative",
      "measures": [
        "A law drafted by a chatbot"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "Brazil",
      "studySpan": "unclear",
      "venue": "Associated Press 2023",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "porto_alegre_2023",
          "record": 39
        }
      ]
    },
    {
      "id": "institutions:db25bd43ff0e3af9",
      "title": "Report of the Royal Commission into the Robodebt Scheme",
      "citation": "Royal Commission into the Robodebt Scheme 2023",
      "url": "https://robodebt.royalcommission.gov.au/publications/report",
      "year": 2023,
      "kind": "study",
      "rawIds": [
        "robodebt2023"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "institutions"
      ],
      "design": "qualitative",
      "measures": [
        "Harm from automated debt-raising without human review"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "Australia",
      "studySpan": "unclear",
      "venue": "Royal Commission into the Robodebt Scheme 2023",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "robodebt2023",
          "record": 47
        }
      ]
    },
    {
      "id": "institutions:46c45340d63d158d",
      "title": "The Flaws of Policies Requiring Human Oversight of Government Algorithms",
      "citation": "Green 2022",
      "url": "https://doi.org/10.1016/j.clsr.2022.105681",
      "year": 2022,
      "kind": "study",
      "rawIds": [
        "green2022"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "institutions"
      ],
      "design": "review",
      "measures": [
        "Review of 41 policies requiring human oversight of government algorithms"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Green 2022",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/institutions.jsonl",
          "sourceId": "green2022",
          "record": 45
        }
      ]
    }
  ],
  "influence": [
    {
      "id": "influence:917aa1e8a294f7d8",
      "title": "'AI, good servant, bad master': citizens' assembly on AI (French-speaking Switzerland)",
      "citation": "EPFL AI Center, Uni Geneva & Demoscan 2026",
      "url": "https://ai.epfl.ch/ai-good-servant-bad-master",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "epfl-assembly-2026"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "qualitative",
      "measures": [
        "recommendations from 40 randomly selected residents"
      ],
      "constructs": [],
      "setting": "group",
      "country": "CH",
      "studySpan": "unclear",
      "venue": "EPFL AI Center, Uni Geneva & Demoscan 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "epfl-assembly-2026",
          "record": 38
        }
      ]
    },
    {
      "id": "influence:e4027220709d9496",
      "title": "A Formal Model of How Artificial Intelligence Erodes Human Agency (RR-A4817-1)",
      "citation": "Moon & Boudreaux (RAND) 2026",
      "url": "https://www.rand.org/pubs/research_reports/RRA4817-1.html",
      "year": 2026,
      "kind": "framework",
      "rawIds": [
        "rand-moon-boudreaux-2026"
      ],
      "format": "proposal",
      "direct": "direct",
      "topics": [
        "influence"
      ],
      "design": "model",
      "measures": [
        "decisive-coalition distribution, minimal coalition size and composition"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Moon & Boudreaux (RAND) 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "rand-moon-boudreaux-2026",
          "record": 45
        }
      ]
    },
    {
      "id": "influence:a353153a8c20b156",
      "title": "AI Opinion Monitor / Longitudinal Effects Panel (LISS)",
      "citation": "AlgoSoc AI Opinion Monitor (University of Amsterdam) 2024-2026",
      "url": "https://monitor.algosoc.org/en/engagement.html",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "algosoc-monitor"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "influence"
      ],
      "design": "panel",
      "measures": [
        "agreement with 'I know how I can influence what content is recommended to me by AI'; trust in automated decisions"
      ],
      "constructs": [],
      "setting": "population",
      "country": "NL",
      "studySpan": "unclear",
      "venue": "AlgoSoc AI Opinion Monitor (University of Amsterdam) 2024-2026",
      "publication": "Source record; publication status needs review",
      "cadence": "irregular",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "algosoc-monitor",
          "record": 10
        }
      ]
    },
    {
      "id": "influence:ca11c2bac58b3b16",
      "title": "AI interest groups pour tens of millions of dollars into 2026 election",
      "citation": "Scripps News 2026 (FEC records)",
      "url": "https://www.10news.com/the-price-of-data/ai-interest-groups-pour-tens-of-millions-of-dollars-into-2026-election",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "leading-the-future"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "tracker",
      "measures": [
        "super PAC money from AI interests (FEC filings), races targeted"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Scripps News 2026 (FEC records)",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "leading-the-future",
          "record": 23
        }
      ]
    },
    {
      "id": "influence:4b306f7f9831ec43",
      "title": "Data Center Watch quarterly reports",
      "citation": "Data Center Watch (10a Labs) 2025-2026",
      "url": "https://datacenterwatch.org/q1-2026",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "datacenterwatch"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "influence"
      ],
      "design": "tracker",
      "measures": [
        "value ($bn) and number of US data-centre projects blocked or delayed by local opposition"
      ],
      "constructs": [],
      "setting": "group",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Data Center Watch (10a Labs) 2025-2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "datacenterwatch",
          "record": 26
        }
      ]
    },
    {
      "id": "influence:d2102c68df273437",
      "title": "Democracy Report 2026: Unraveling the Democratic Era?",
      "citation": "V-Dem Institute 2026",
      "url": "https://www.v-dem.net/documents/75/V-Dem_Institute_Democracy_Report_2026_lowres.pdf",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "vdem-2026"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "survey series",
      "measures": [
        "expert-coded Liberal Democracy Index (0-1); share of world population in autocracies"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "V-Dem Institute 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "vdem-2026",
          "record": 17
        }
      ]
    },
    {
      "id": "influence:ab5c342b1b5a5f9a",
      "title": "Generative Influence: AI lobbying 2020-2025",
      "citation": "Public Citizen 2026 (Tanglis & O'Grady)",
      "url": "https://citizen.org/article/generative-influence",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "pc-ai-lobbyists"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "tracker",
      "measures": [
        "lobbyists whose federal disclosures mention AI (or AV, data centres) as % of all federal lobbyists (OpenSecrets totals)"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Public Citizen 2026 (Tanglis & O'Grady)",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "pc-ai-lobbyists",
          "record": 22
        }
      ]
    },
    {
      "id": "influence:7b27c1e612dbcb49",
      "title": "Global Dialogues",
      "citation": "Collective Intelligence Project 2024-2026",
      "url": "https://globaldialogues.ai/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "global-dialogues"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "survey series",
      "measures": [
        "recurring 'Global Pulse Indicators' (trust, AI usage, future outlook) from about 1,000 people per round"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Collective Intelligence Project 2024-2026",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "global-dialogues",
          "record": 11
        }
      ]
    },
    {
      "id": "influence:32f7360ce0ccfc29",
      "title": "Governing the Future: Recommendations from the Edinburgh Data and AI Exchange",
      "citation": "University of Edinburgh 2026",
      "url": "https://www.ed.ac.uk/news/citizens-assembly-key-to-giving-public-a-voice-on-ai",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "edinburgh-exchange-2026"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "qualitative",
      "measures": [
        "recommendations from a 99-person stakeholder assembly"
      ],
      "constructs": [],
      "setting": "group",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "University of Edinburgh 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "edinburgh-exchange-2026",
          "record": 39
        }
      ]
    },
    {
      "id": "influence:9e2d95b97657eef0",
      "title": "Huge Majorities Want AI Stopped Immediately",
      "citation": "Public Citizen (September 2026). Advocacy compilation of polls; individual poll findings require original-source checks.",
      "url": "https://www.citizen.org/wp-content/uploads/AI-Polling-Memo_9.17.26.pdf",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "yougov-ifs-preemption-2025",
        "publiccitizen-polling-memo-2026"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of US adults opposing vs supporting federal preemption of state AI laws",
        "compilation of poll toplines on AI regulation, preemption, data centres and trust"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Public Citizen (September 2026). Advocacy compilation of polls; individual poll findings require original-source checks.",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "yougov-ifs-preemption-2025",
          "record": 8
        },
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "publiccitizen-polling-memo-2026",
          "record": 9
        }
      ]
    },
    {
      "id": "influence:e2e464669b3dda29",
      "title": "I checked out one of the biggest anti-AI protests yet",
      "citation": "Heaven, MIT Technology Review 2026",
      "url": "https://www.technologyreview.com/2026/03/02/1133814/i-checked-out-londons-biggest-ever-anti-ai-protest/",
      "year": 2026,
      "kind": "study",
      "rawIds": [
        "london-protest-2026"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "qualitative",
      "measures": [
        "size and demands of street protest against AI"
      ],
      "constructs": [],
      "setting": "group",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Heaven, MIT Technology Review 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "london-protest-2026",
          "record": 40
        }
      ]
    },
    {
      "id": "influence:37ac585fed12312d",
      "title": "Measuring AI-Induced Disempowerment: A Framework and Proposed Metrics (EvalEval, ACL)",
      "citation": "Chooi, Lee & Li 2026",
      "url": "https://aclanthology.org/2026.evaleval-1.36/",
      "year": 2026,
      "kind": "framework",
      "rawIds": [
        "chooi2026"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "review",
      "measures": [
        "six proposed metrics incl. disempowerment perception surveys and capital flow to labour"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Chooi, Lee & Li 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "chooi2026",
          "record": 44
        }
      ]
    },
    {
      "id": "influence:3826ac6b40e6509f",
      "title": "Monthly Budget Review: September 2026 (fiscal year 2026, preliminary)",
      "citation": "CBO 2026",
      "url": "https://www.cbo.gov/system/files/2026-10/61985-MBR.pdf",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "cbo-tax-fy2026"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "official statistic",
      "measures": [
        "individual income + payroll taxes as % of federal receipts (derived from CBO $bn)"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "US",
      "studySpan": "unclear",
      "venue": "CBO 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "cbo-tax-fy2026",
          "record": 20
        }
      ]
    },
    {
      "id": "influence:b0a85230f92cc693",
      "title": "More concerned than excited about increased use of AI in daily life (short read, Aug 2026)",
      "citation": "Pew Research Center 2026",
      "url": "https://www.pewresearch.org/short-reads/2026/08/18/young-adults-in-the-us-are-increasingly-wary-of-ai-concerned-it-will-take-jobs/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "pew-concern"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "survey series",
      "measures": [
        "% of US adults more concerned than excited about AI"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Pew Research Center 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "pew-concern",
          "record": 3
        }
      ]
    },
    {
      "id": "influence:0c53d4934894572d",
      "title": "Pro-AI super PAC keeps $31M ready for the midterms",
      "citation": "Axios 2026 (FEC Q2 filings)",
      "url": "https://axios.com/2026/07/17/pro-ai-super-pac-ready-midterms",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "axios-ai-pacs-q2-2026"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "tracker",
      "measures": [
        "cash on hand and transfers of AI super PACs, Q2 2026"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Axios 2026 (FEC Q2 filings)",
      "publication": "Source record; publication status needs review",
      "cadence": "quarterly",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "axios-ai-pacs-q2-2026",
          "record": 24
        }
      ]
    },
    {
      "id": "influence:7f34c6c8329685b7",
      "title": "Public Finance in the Age of AI: A Primer (NBER w34873)",
      "citation": "Korinek & Lockwood 2026",
      "url": "https://www.nber.org/papers/w34873",
      "year": 2026,
      "kind": "forecast",
      "rawIds": [
        "korinek-lockwood-2026"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "model",
      "measures": [
        "theory of how AI erodes labour and consumption tax bases"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Korinek & Lockwood 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "korinek-lockwood-2026",
          "record": 42
        }
      ]
    },
    {
      "id": "influence:6993dc6c3d3237fa",
      "title": "Reported milestones for AI in government (firsts)",
      "citation": "GD Observatory (compiled)",
      "url": "https://www.ksat.com/tech/2023/11/30/brazilian-city-enacts-an-ordinance-secretly-written-by-a-surprising-new-staffer-chatgpt/",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "firsts-site"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "tracker",
      "measures": [
        "count of reported first uses or symbolic delegations of AI in lawmaking, administration, justice and military"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "GD Observatory (compiled)",
      "publication": "Source record; publication status needs review",
      "cadence": "continuous",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "firsts-site",
          "record": 27
        }
      ]
    },
    {
      "id": "influence:7fbf54e9b6fc8fb6",
      "title": "UAE launches 32 AI Cabinet advisers to support government decision-making",
      "citation": "Khaleej Times 2026",
      "url": "https://www.khaleejtimes.com/uae/uae-launches-cabinet-ai-advisor-support-government-decision-making",
      "year": 2026,
      "kind": "indicator",
      "rawIds": [
        "uae-cabinet-ai-advisers"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "qualitative",
      "measures": [
        "reported deployment of AI advisers to a national cabinet"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "UAE",
      "studySpan": "unclear",
      "venue": "Khaleej Times 2026",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "uae-cabinet-ai-advisers",
          "record": 29
        }
      ]
    },
    {
      "id": "influence:0edfc8b65d2ab978",
      "title": "AICONTROL1: How much control do you think you have in whether AI is used in your life? (American Trends Panel)",
      "citation": "Pew Research Center 2025",
      "url": "https://www.pewresearch.org/wp-content/uploads/sites/20/2025/09/PS_2025.9.17_AI-and-its-impact_topline.pdf",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "pew-aicontrol1",
        "pew-aicontrol2"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "survey series",
      "measures": [
        "% of US adults saying 'not too much' or 'none' control over whether AI is used in their life",
        "% of US adults who would like more control over how AI is used in their life"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Pew Research Center 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "irregular",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "pew-aicontrol1",
          "record": 1
        },
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "pew-aicontrol2",
          "record": 2
        }
      ]
    },
    {
      "id": "influence:f7a74d40052d5789",
      "title": "Alberta minister reportedly putting together first AI-generated legislation in Canada",
      "citation": "Turtle Island News 2025",
      "url": "https://theturtleislandnews.com/?p=99622",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "alberta-ai-bill"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "qualitative",
      "measures": [
        "reported plan to draft a bill (Alberta Whisky Act) with AI"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "CA",
      "studySpan": "unclear",
      "venue": "Turtle Island News 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "alberta-ai-bill",
          "record": 30
        }
      ]
    },
    {
      "id": "influence:f8ef272a6749158b",
      "title": "Americans Prioritize AI Safety and Data Security",
      "citation": "Gallup / SCSP 2025",
      "url": "https://news.gallup.com/poll/694685/americans-prioritize-safety-data-security.aspx",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "gallup-scsp-2025"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "cross-sectional",
      "measures": [
        "% of US adults favouring government AI safety and data-security rules even if AI develops more slowly"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Gallup / SCSP 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "gallup-scsp-2025",
          "record": 5
        }
      ]
    },
    {
      "id": "influence:1e8d4f5f6cea8c36",
      "title": "Artificial Intelligence 2025 Legislation",
      "citation": "NCSL 2025",
      "url": "https://www.ncsl.org/technology-and-communication/artificial-intelligence-2025-legislation",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "ncsl-state-ai-2025"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "tracker",
      "measures": [
        "number of states introducing and enacting AI legislation per year"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "NCSL 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "ncsl-state-ai-2025",
          "record": 25
        }
      ]
    },
    {
      "id": "influence:cd25ab6096e82817",
      "title": "DOGE builds AI tool to cut 50 percent of federal regulations",
      "citation": "Washington Post via Boston Globe 2025",
      "url": "https://www.bostonglobe.com/2025/07/26/nation/doge-builds-ai-tool-cut-50-percent-federal-regulations",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "doge-ai-dereg"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "qualitative",
      "measures": [
        "reported use of an AI tool to decide which federal regulations to cut"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Washington Post via Boston Globe 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "doge-ai-dereg",
          "record": 28
        }
      ]
    },
    {
      "id": "influence:513a07aa1119dc03",
      "title": "Executive Order 'Ensuring a National Policy Framework for Artificial Intelligence' (11 Dec 2025)",
      "citation": "Greenberg Traurig 2025",
      "url": "https://www.gtlaw.com/en/insights/2025/12/trump-administration-issues-executive-order-on-national-ai-policy-framework",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "eo-state-ai-laws-2025"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "qualitative",
      "measures": [
        "federal action against state AI laws; Senate vote on moratorium"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Greenberg Traurig 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "eo-state-ai-laws-2025",
          "record": 31
        }
      ]
    },
    {
      "id": "influence:ca43bd687b47f6d3",
      "title": "Freedom on the Net 2025: The Uncertain Future of the Global Internet",
      "citation": "Freedom House 2025",
      "url": "https://freedomhouse.org/report/freedom-net/2025/uncertain-future-global-internet",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "fotn-2025"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "tracker",
      "measures": [
        "internet freedom scores, 72 countries; narrative cases of AI-generated political content"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Freedom House 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "fotn-2025",
          "record": 18
        }
      ]
    },
    {
      "id": "influence:e6e162eaede36463",
      "title": "Gradual Disempowerment, s6.2 'Estimating Human Disempowerment'",
      "citation": "Kulveit et al. 2025",
      "url": "https://arxiv.org/abs/2501.16946",
      "year": 2025,
      "kind": "framework",
      "rawIds": [
        "kulveit2025-metrics"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "review",
      "measures": [
        "proposed system-specific metrics"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Kulveit et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "kulveit2025-metrics",
          "record": 43
        }
      ]
    },
    {
      "id": "influence:70b06753e07e44d0",
      "title": "How do people feel about AI? (second wave; Public Voices in AI)",
      "citation": "Ada Lovelace Institute & Alan Turing Institute 2025",
      "url": "https://adalovelaceinstitute.org/?p=30737",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "ada-turing-2025"
      ],
      "format": "snapshot",
      "direct": "direct",
      "topics": [
        "influence"
      ],
      "design": "survey series",
      "measures": [
        "% of UK adults saying laws and regulation would increase comfort with AI; % not feeling their views are represented in current AI decisions"
      ],
      "constructs": [],
      "setting": "population",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Ada Lovelace Institute & Alan Turing Institute 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "ada-turing-2025",
          "record": 6
        }
      ]
    },
    {
      "id": "influence:1c37a977a5c0d981",
      "title": "Persuading voters using human-artificial intelligence dialogues (Nature 648:394-401)",
      "citation": "Lin et al. 2025",
      "url": "https://www.nature.com/articles/s41586-025-09771-9",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "lin2025"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "RCT",
      "measures": [
        "change in candidate preference after a conversation with an AI advocating one candidate"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Lin et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "lin2025",
          "record": 32
        }
      ]
    },
    {
      "id": "influence:27b67564c0d64505",
      "title": "Public Trust in Government: 1958-2025",
      "citation": "Pew Research Center 2025",
      "url": "https://www.pewresearch.org/politics/2025/12/04/public-trust-in-government-1958-2025/",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "pew-trust-gov"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "survey series",
      "measures": [
        "% trusting the government in Washington to do what is right just about always or most of the time"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Pew Research Center 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "pew-trust-gov",
          "record": 12
        }
      ]
    },
    {
      "id": "influence:99bca67267b68d8c",
      "title": "Revenue Statistics 2025 (special feature: disentangling personal income tax revenue)",
      "citation": "OECD 2025",
      "url": "https://www.oecd.org/en/publications/revenue-statistics-2025_3a264267-en.html",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "oecd-revenue-stats-2025"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "official statistic",
      "measures": [
        "tax structure shares (PIT, social contributions, payroll, corporate, consumption) of total tax revenue, OECD countries"
      ],
      "constructs": [],
      "setting": "economy",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "OECD 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "oecd-revenue-stats-2025",
          "record": 21
        }
      ]
    },
    {
      "id": "influence:a3523b84e7906c36",
      "title": "The levers of political persuasion with conversational artificial intelligence (Science)",
      "citation": "Hackenburg et al. 2025",
      "url": "https://doi.org/10.1126/science.aea3884",
      "year": 2025,
      "kind": "study",
      "rawIds": [
        "hackenburg2025"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "RCT",
      "measures": [
        "attitude change on 707 political issues across 19 LLMs (n=76,977)"
      ],
      "constructs": [],
      "setting": "individual",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Hackenburg et al. 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "hackenburg2025",
          "record": 33
        }
      ]
    },
    {
      "id": "influence:7780aeea53629d37",
      "title": "Trust and confidence in Britain's system of government at record low",
      "citation": "NatCen British Social Attitudes 42 (2025)",
      "url": "https://www.research-live.com/article/news/public-trust-in-government-sees-further-decline/id/5140263",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "bsa-trust-2024"
      ],
      "format": "tracking",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "survey series",
      "measures": [
        "% trusting governments to put the needs of the nation above party interests just about always or most of the time"
      ],
      "constructs": [],
      "setting": "population",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "NatCen British Social Attitudes 42 (2025)",
      "publication": "Source record; publication status needs review",
      "cadence": "annual",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "bsa-trust-2024",
          "record": 13
        }
      ]
    },
    {
      "id": "influence:2f254d7fc3f63c7f",
      "title": "Trust, attitudes and use of AI: a global study 2025",
      "citation": "University of Melbourne & KPMG 2025",
      "url": "https://kpmg.com/xx/en/our-insights/ai-and-technology/trust-attitudes-and-use-of-ai.html",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "kpmg-melbourne-2025"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "survey series",
      "measures": [
        "% of adults across 47 countries who believe AI regulation is needed"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "University of Melbourne & KPMG 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "kpmg-melbourne-2025",
          "record": 7
        }
      ]
    },
    {
      "id": "influence:7ecafb8ce36bc3a3",
      "title": "US public and AI experts: government will go too far vs not far enough regulating AI; confidence in government and companies",
      "citation": "Pew Research Center 2025",
      "url": "https://pewresearch.org/wp-content/uploads/sites/20/2025/03/pi_2025.04.03_us-public-and-ai-experts_topline.pdf",
      "year": 2025,
      "kind": "indicator",
      "rawIds": [
        "pew-reg-far-enough"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "cross-sectional",
      "measures": [
        "% more concerned US government will not go far enough (vs too far) regulating AI; % with not too much/no confidence in government to regulate AI"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Pew Research Center 2025",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "pew-reg-far-enough",
          "record": 4
        }
      ]
    },
    {
      "id": "influence:f2a1fafc55c2c8bb",
      "title": "AI can help humans find common ground in democratic deliberation (Science)",
      "citation": "Tessler et al. 2024",
      "url": "https://doi.org/10.1126/science.adq2852",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "tessler2024"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "RCT",
      "measures": [
        "ratings of AI-mediated group statements; within-group division (n=5,734 plus a virtual citizens' assembly)"
      ],
      "constructs": [],
      "setting": "group",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Tessler et al. 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "tessler2024",
          "record": 37
        }
      ]
    },
    {
      "id": "influence:834f4b6432850919",
      "title": "AI-Enabled Influence Operations: Safeguarding Future Elections",
      "citation": "Stockwell et al. (CETaS, Alan Turing Institute) 2024",
      "url": "https://cetas.turing.ac.uk/publications/ai-enabled-influence-operations-safeguarding-future-elections",
      "year": 2024,
      "kind": "study",
      "rawIds": [
        "cetas2024"
      ],
      "format": "study",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "qualitative",
      "measures": [
        "catalogued viral AI-enabled election content and assessed impact on results"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Stockwell et al. (CETaS, Alan Turing Institute) 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "cetas2024",
          "record": 34
        }
      ]
    },
    {
      "id": "influence:a23e02dab2c64712",
      "title": "External efficacy: 'People like me don't have any say about what the government does'",
      "citation": "American National Election Studies",
      "url": "https://electionstudies.org/",
      "year": 2024,
      "kind": "indicator",
      "rawIds": [
        "anes-efficacy"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "influence"
      ],
      "design": "survey series",
      "measures": [
        "% agreeing people like me have no say (election years)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "American National Election Studies",
      "publication": "Source record; publication status needs review",
      "cadence": "quadrennial",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "anes-efficacy",
          "record": 15
        }
      ]
    },
    {
      "id": "influence:420c48ee4c61fe6c",
      "title": "Thousands of AI Authors on the Future of AI",
      "citation": "Grace et al. 2024",
      "url": "https://arxiv.org/abs/2401.02843",
      "year": 2024,
      "kind": "forecast",
      "rawIds": [
        "grace2024"
      ],
      "format": "proposal",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "cross-sectional",
      "measures": [
        "share of 2,778 AI researchers saying substantial or extreme concern is warranted about scenarios"
      ],
      "constructs": [],
      "setting": "population",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Grace et al. 2024",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "grace2024",
          "record": 41
        }
      ]
    },
    {
      "id": "influence:ab07daad4930dfc4",
      "title": "Freedom on the Net 2023: The Repressive Power of Artificial Intelligence",
      "citation": "Freedom House 2023",
      "url": "https://freedomhouse.org/report/freedom-net/2023/repressive-power-artificial-intelligence",
      "year": 2023,
      "kind": "indicator",
      "rawIds": [
        "fotn-2023-ai"
      ],
      "format": "snapshot",
      "direct": "proxy",
      "topics": [
        "influence"
      ],
      "design": "tracker",
      "measures": [
        "number of countries where AI tools were used to distort information; countries mandating automated censorship"
      ],
      "constructs": [],
      "setting": "institutional",
      "country": "multi",
      "studySpan": "unclear",
      "venue": "Freedom House 2023",
      "publication": "Source record; publication status needs review",
      "cadence": "one-off",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "fotn-2023-ai",
          "record": 19
        }
      ]
    },
    {
      "id": "influence:4eb42e41c76f9e3e",
      "title": "'People like me don't have any say in what the government does' (waves 3, 6, 12)",
      "citation": "Understanding Society (UKHLS)",
      "url": "https://www.understandingsociety.ac.uk/?p=226255",
      "year": 2022,
      "kind": "indicator",
      "rawIds": [
        "ukhls-efficacy"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "influence"
      ],
      "design": "panel",
      "measures": [
        "agreement that people like me have no say, same people across waves"
      ],
      "constructs": [],
      "setting": "population",
      "country": "UK",
      "studySpan": "unclear",
      "venue": "Understanding Society (UKHLS)",
      "publication": "Source record; publication status needs review",
      "cadence": "irregular",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "ukhls-efficacy",
          "record": 16
        }
      ]
    },
    {
      "id": "influence:6dbaee1fc7406f30",
      "title": "Political efficacy: 'the political system allows people like you to have a say in what the government does'",
      "citation": "European Social Survey (core since Round 8)",
      "url": "https://www.europeansocialsurvey.org/sites/default/files/2023-06/ESS8_political_efficacy_final_temp.pdf",
      "year": 2016,
      "kind": "indicator",
      "rawIds": [
        "ess-efficacy"
      ],
      "format": "tracking",
      "direct": "direct",
      "topics": [
        "influence"
      ],
      "design": "survey series",
      "measures": [
        "5-point agreement that the system allows people like you a say"
      ],
      "constructs": [],
      "setting": "population",
      "country": "EU",
      "studySpan": "unclear",
      "venue": "European Social Survey (core since Round 8)",
      "publication": "Source record; publication status needs review",
      "cadence": "biennial",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "ess-efficacy",
          "record": 14
        }
      ]
    },
    {
      "id": "influence:09c47672d02c64ab",
      "title": "Testing Theories of American Politics: Elites, Interest Groups, and Average Citizens",
      "citation": "Gilens & Page 2014",
      "url": "https://www.cambridge.org/core/journals/perspectives-on-politics/article/testing-theories-of-american-politics-elites-interest-groups-and-average-citizens/62327F513959D0A304D4893B382B992B",
      "year": 2014,
      "kind": "study",
      "rawIds": [
        "gilens-page-2014"
      ],
      "format": "study",
      "direct": "direct",
      "topics": [
        "influence"
      ],
      "design": "cross-sectional",
      "measures": [
        "association of policy outcomes with preferences of average citizens, economic elites and interest groups (1,779 issues)"
      ],
      "constructs": [],
      "setting": "population",
      "country": "US",
      "studySpan": "unclear",
      "venue": "Gilens & Page 2014",
      "publication": "Source record; publication status needs review",
      "cadence": "One publication",
      "provenance": [
        {
          "collection": "research/scan4/influence.jsonl",
          "sourceId": "gilens-page-2014",
          "record": 35
        }
      ]
    }
  ]
};
