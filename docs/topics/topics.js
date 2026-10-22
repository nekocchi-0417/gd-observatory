'use strict';

// Editorial selections and provisional gap synthesis, kept separate from imported metadata.
const GD_TOPIC_CONFIG = {
  "capability": {
    "name": "AI capability",
    "question": "How much useful work can AI complete reliably?",
    "synthesis": "Benchmarks track the difficulty and range of tasks AI can complete. Technical tasks and prepared work samples are better represented than sustained work inside an organisation.",
    "selected": [
      {
        "record": "metr-th",
        "headline": "Longer technical tasks at a fixed success rate",
        "finding": "METR estimates the human-expert task length that AI completes at a chosen success rate. Its published series records progress on software, machine-learning and cybersecurity tasks.",
        "why": "Makes task difficulty and reliability explicit, with public methods and data.",
        "limit": "Tasks are well specified and mainly technical. The page is no longer actively updated; its last update is 8 September 2026.",
        "authors": "METR",
        "publisher": "Time horizons",
        "followUp": "Historical benchmark series / update paused September 2026",
        "kind": "Historical indicator",
        "measure": "Human-expert task time at 50% or 80% model success"
      },
      {
        "record": "rli",
        "headline": "Can AI deliver work a client would accept?",
        "finding": "The Remote Labor Index tests AI on paid freelance projects, with experts comparing its deliverables against professional work.",
        "why": "Assesses complete work products across several domains, using a stated acceptance standard.",
        "limit": "A selected set of self-contained remote projects. Client interaction, longer-term outcomes and many forms of work are outside its scope.",
        "authors": "CAIS and Scale AI",
        "publisher": "Remote Labor Index",
        "kind": "Benchmark series",
        "measure": "Share of submitted projects meeting the professional acceptance standard"
      },
      {
        "record": "epoch-eci",
        "headline": "A broader view across capability tests",
        "finding": "Epoch combines results from multiple benchmarks into an index of model capabilities.",
        "why": "Helps compare progress across tests when a single benchmark gives a narrow picture.",
        "limit": "The index is a composite. Its units are not hours of work, economic output or a percentage of jobs automated.",
        "authors": "Epoch AI",
        "publisher": "Capabilities Index",
        "kind": "Benchmark series",
        "measure": "Composite score across benchmark results"
      }
    ],
    "gaps": [
      {
        "title": "Performance in ongoing work",
        "summary": "Prepared tests leave everyday working conditions less clear.",
        "basis": "METR uses self-contained technical tasks; RLI also excludes direct client interaction and long-term evaluation. Both help assess capability while leaving coordination and continuing responsibility less tested.",
        "next": "Repeat evaluations in real workflows, including changing requirements, hand-offs and human review.",
        "refs": [
          "metr-th",
          "rli"
        ]
      },
      {
        "title": "Comparable results as tests change",
        "summary": "A continuous score can conceal changes in what was tested.",
        "basis": "METR has different task-suite versions and a paused series. Epoch combines evolving benchmarks; RLI results also depend on the agent setup.",
        "next": "Publish benchmark versions, evaluation budgets and a stable comparison set alongside each new result.",
        "refs": [
          "metr-th",
          "epoch-eci",
          "rli"
        ]
      }
    ]
  },
  "adoption": {
    "name": "AI adoption",
    "question": "Who uses AI, and how much of their work involves it?",
    "synthesis": "Surveys distinguish occasional use, regular use and time spent working with AI. Their estimates depend on who is asked and what counts as adoption.",
    "selected": [
      {
        "record": "gallup-work",
        "headline": "Occasional use and daily use tell different stories",
        "finding": "Gallup asks US employees how often they use AI at work, allowing occasional use to be separated from regular use.",
        "why": "A recurring workplace survey with a clear population and frequency categories.",
        "limit": "Self-reported use of AI. Question wording and reporting periods need to be held constant when comparing releases.",
        "authors": "Gallup",
        "publisher": "Workplace AI indicator",
        "kind": "Repeated survey",
        "measure": "Share of US employees using AI at different frequencies"
      },
      {
        "record": "rps-hours",
        "headline": "How much work time involves AI?",
        "finding": "The Real-Time Population Survey estimates the share of work hours assisted by generative AI, including people who do not use it.",
        "why": "Adds intensity of use to the simpler question of whether someone uses AI.",
        "limit": "Hours are estimated from survey responses. Time assisted does not establish time saved or tasks delegated.",
        "authors": "Bick, Blandin and Deming",
        "publisher": "RPS / FRED",
        "kind": "Repeated survey",
        "measure": "Estimated share of all work hours assisted by generative AI"
      },
      {
        "record": "sbu-employment-weighted",
        "headline": "Why adoption estimates differ",
        "finding": "The Federal Reserve compares surveys of workers, firms and business leaders. Different units, samples and questions explain much of the variation.",
        "why": "Provides a methodological comparison instead of treating all adoption percentages as interchangeable.",
        "limit": "A comparison of selected US surveys through 2025. It does not produce a single definitive adoption rate.",
        "authors": "Jeffrey S. Allen",
        "publisher": "Federal Reserve",
        "kind": "Research synthesis",
        "design": "Survey comparison",
        "title": "Monitoring AI Adoption in the US Economy",
        "followUp": "Published April 2026 / surveys through 2025",
        "url": "https://www.federalreserve.gov/econres/notes/feds-notes/monitoring-ai-adoption-in-the-u-s-economy-20260403.html"
      }
    ],
    "gaps": [
      {
        "title": "Comparable adoption measures",
        "summary": "Worker, firm and time-use estimates answer different questions.",
        "basis": "Gallup counts employees reporting use; RPS estimates assisted hours; the Fed comparison identifies different sampling units and question definitions.",
        "next": "Publish harmonised questions and report worker, firm and task-level use separately.",
        "refs": [
          "gallup-work",
          "rps-hours",
          "sbu-employment-weighted"
        ]
      },
      {
        "title": "What adoption changes in a workflow",
        "summary": "Frequency and hours reveal limited information about responsibility.",
        "basis": "The selected surveys measure use and intensity. They do not consistently link that use to who sets goals, checks outputs or makes final decisions.",
        "next": "Follow the same teams and connect usage records with task assignments, human review and decision authority.",
        "refs": [
          "gallup-work",
          "rps-hours"
        ]
      }
    ]
  },
  "handover": {
    "name": "Delegation to AI",
    "question": "When people delegate to AI, what control do they retain?",
    "synthesis": "Usage studies describe task completion, collaboration and permission to act. Connecting these patterns to the quality of human oversight remains a separate measurement challenge.",
    "selected": [
      {
        "record": "aei-monthly-release",
        "headline": "How people ask Claude to work with them",
        "finding": "The Anthropic Economic Index classifies interactions into patterns such as automation and augmentation, and publishes aggregate data.",
        "why": "Offers observable interaction patterns and downloadable data for studying delegation.",
        "limit": "Provider-defined categories describe conversations. Actual use of the output and effective human review may remain unobserved; product and classifier changes affect comparisons.",
        "authors": "Anthropic",
        "publisher": "Economic Index",
        "kind": "Repeated usage indicator",
        "measure": "Shares of interactions classified by collaboration mode",
        "followUp": "Repeated releases / check each release's product scope"
      },
      {
        "record": "agent-autonomy",
        "headline": "Permission to act and human interruption",
        "finding": "Anthropic examines agent run time, auto-approval and interruption. In its coding data, more experienced users both auto-approve and interrupt more often.",
        "why": "Records aspects of permission and intervention, going beyond message categories.",
        "limit": "The experience comparison is not a time trend for the same people. Logs from one provider cannot establish whether intervention was effective.",
        "authors": "Anthropic",
        "publisher": "Agent autonomy study",
        "kind": "One-off study",
        "followUp": "Published February 2026 / usage observations"
      },
      {
        "record": "chatgpt-doing",
        "headline": "What people ask ChatGPT to do",
        "finding": "A study of consumer ChatGPT messages distinguishes asking for information, producing outputs and expressing thoughts.",
        "why": "Offers a second provider's usage taxonomy and a different view of task delegation.",
        "limit": "Message categories are not directly comparable with Anthropic's taxonomy. Consumer usage excludes many workplace integrations.",
        "authors": "Chatterji et al.",
        "publisher": "NBER working paper",
        "kind": "One-off study",
        "design": "Usage-log analysis",
        "followUp": "Published 2025 / historical usage sample"
      }
    ],
    "gaps": [
      {
        "title": "Whether oversight works",
        "summary": "An interruption is observable; its value is harder to establish.",
        "basis": "The Economic Index and ChatGPT study classify interactions. The agent-autonomy study observes permissions and interruptions, but these measures do not consistently establish whether errors were caught.",
        "next": "Pair agent logs with independent checks of errors, justified interventions and final outcomes.",
        "refs": [
          "aei-monthly-release",
          "agent-autonomy",
          "chatgpt-doing"
        ]
      },
      {
        "title": "How delegation changes for the same people",
        "summary": "Aggregate changes can reflect a changing mix of users and products.",
        "basis": "The selected provider studies cover different products, taxonomies and samples. Differences between experienced and new users are not equivalent to a within-person trajectory.",
        "next": "Follow consenting users or teams across tools, tracking permissions, checking behaviour and the ability to take work back.",
        "refs": [
          "aei-monthly-release",
          "agent-autonomy"
        ]
      }
    ]
  },
  "work": {
    "name": "Entry-level jobs",
    "question": "How are early-career opportunities changing as AI spreads?",
    "synthesis": "Payroll data can track employment changes by age and occupational exposure. Exposure estimates and worker studies add context, but identifying AI's contribution requires evidence about actual use and other changes in the labour market.",
    "selected": [
      {
        "record": "canaries-dash",
        "headline": "Employment trends by age and AI exposure",
        "finding": "Stanford's Canaries Dashboard shows weaker employment trends for young workers in highly AI-exposed occupations within its ADP sample.",
        "why": "Repeated payroll data make age and occupation comparisons possible.",
        "limit": "Occupational exposure estimates potential impact. The sample is not the whole labour market, and the comparison does not isolate AI as the cause.",
        "authors": "Stanford Digital Economy Lab and ADP",
        "publisher": "Canaries Dashboard",
        "kind": "Repeated indicator",
        "measure": "Employment indices by age and occupational AI exposure"
      },
      {
        "record": "humlum-vestergaard",
        "headline": "Linking workers' AI use to labour-market records",
        "finding": "Humlum and Vestergaard link Danish workers' chatbot use with administrative earnings and hours data. Their early results find limited effects on these outcomes despite changes in work tasks.",
        "why": "Connects reported adoption with observed outcomes and offers an important comparison to displacement claims.",
        "limit": "One country's covered occupations and workers. Earnings and hours among existing workers can miss opportunities that new entrants never receive.",
        "authors": "Humlum and Vestergaard",
        "publisher": "NBER working paper",
        "kind": "Longitudinal study",
        "followUp": "Survey and administrative panel / see source for revision"
      },
      {
        "record": "ilo-exposure",
        "headline": "Which occupations could be affected?",
        "finding": "The ILO's exposure index assesses which occupational tasks could be affected by generative AI across countries.",
        "why": "Provides a structured global exposure measure for comparing occupations.",
        "limit": "Exposure is an estimate of technical potential. It does not measure actual adoption, job losses or workers' subsequent careers.",
        "authors": "Gmyrek et al.",
        "publisher": "International Labour Organization",
        "year": "2025",
        "kind": "Exposure index",
        "design": "Task-exposure assessment",
        "title": "Generative AI and Jobs: A Refined Global Index of Occupational Exposure",
        "url": "https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure",
        "measure": "Occupational exposure to generative AI",
        "scope": "Global occupational assessment",
        "followUp": "2025 index / one published assessment"
      }
    ],
    "gaps": [
      {
        "title": "AI use behind employment changes",
        "summary": "Potential exposure and actual workplace adoption need to be connected.",
        "basis": "Canaries groups employment by exposure; the ILO index assesses task potential. The Danish study links use and outcomes, but covers a different population and setting.",
        "next": "Link firm-level deployment, job tasks, recruitment and payroll records, with credible comparison groups.",
        "refs": [
          "canaries-dash",
          "ilo-exposure",
          "humlum-vestergaard"
        ]
      },
      {
        "title": "The route from a first job to expertise",
        "summary": "Employment counts do not reveal what happens to training and progression.",
        "basis": "Canaries follows employment; the ILO assesses exposure; the Danish study examines labour outcomes. These measures do not jointly trace junior tasks, learning and promotion.",
        "next": "Follow entrants over time, recording hiring, training opportunities, skill tests and progression.",
        "refs": [
          "canaries-dash",
          "ilo-exposure",
          "humlum-vestergaard"
        ]
      }
    ]
  },
  "share": {
    "name": "Workers' share of income",
    "question": "Who receives the income generated by the economy?",
    "synthesis": "Official statistics track how income is divided between labour and other recipients. These established measures provide context for GD, but changes in the totals do not identify AI's contribution.",
    "selected": [
      {
        "record": "bls-ls",
        "headline": "Labour's share of US business output",
        "finding": "BLS measures compensation relative to output in the nonfarm business sector.",
        "why": "A long-running official series with documented definitions and revisions.",
        "limit": "Sector coverage and the treatment of self-employment matter. The series cannot attribute changes to AI; index values and percentage shares must be kept distinct.",
        "authors": "US Bureau of Labor Statistics",
        "publisher": "Productivity and Costs",
        "kind": "Repeated official indicator",
        "measure": "Labour compensation as a share of nonfarm business output"
      },
      {
        "record": "bea-comp-gdi",
        "headline": "Employee compensation across the US economy",
        "finding": "BEA records employee compensation as a share of gross domestic income.",
        "why": "Broadens the view beyond the business-sector series.",
        "limit": "It uses a different denominator and treatment of self-employment from other labour-share measures. Comparisons require matching definitions.",
        "authors": "US Bureau of Economic Analysis",
        "publisher": "National accounts / FRED",
        "kind": "Repeated official indicator",
        "measure": "Employee compensation as a share of gross domestic income"
      },
      {
        "record": "ilo-lis",
        "headline": "A global view of labour income",
        "finding": "ILO estimates labour's share of income across countries, including an estimate for self-employed workers.",
        "why": "Provides international context for a question that US statistics cannot settle alone.",
        "limit": "Modelled components and revisions affect comparability. The aggregate does not identify AI's effect or how gains are distributed within the workforce.",
        "authors": "International Labour Organization",
        "publisher": "World Employment and Social Outlook",
        "kind": "Repeated official indicator",
        "measure": "Labour income as a share of output"
      }
    ],
    "gaps": [
      {
        "title": "Which changes are attributable to AI?",
        "summary": "Established income series need to be linked to actual deployment.",
        "basis": "BLS, BEA and ILO describe income distribution at aggregate level. Other changes in industries, bargaining conditions and the economy can move the same measures.",
        "next": "Link adoption and productivity to firm-level wages, profits and staffing, with comparison groups.",
        "refs": [
          "bls-ls",
          "bea-comp-gdi",
          "ilo-lis"
        ]
      },
      {
        "title": "Who gains within each category?",
        "summary": "A national share can conceal large differences between people.",
        "basis": "The selected series aggregate labour or employee income. They do not jointly describe workers' AI exposure, ownership of AI-related assets and bargaining power.",
        "next": "Combine earnings and ownership data with occupational and firm-level adoption measures.",
        "refs": [
          "bls-ls",
          "bea-comp-gdi",
          "ilo-lis"
        ]
      }
    ]
  },
  "skills": {
    "name": "Skills and judgement",
    "question": "How does using AI affect learning and judgement?",
    "synthesis": "AI can help people perform a task, while its effects on learning vary with the task and tool design. The reviewed evidence leaves a less clear picture of how independent judgement changes with sustained use.",
    "gaps": [
      {
        "title": "Skills after sustained use and withdrawal",
        "summary": "Follow-up studies exist, but they differ in technology, task and timing.",
        "basis": "Bastani, Shen and Lira assess learning shortly after assistance. Darvishi examines withdrawal of an earlier feedback tool. Longer clinical studies by Budzyn and Okumura concern image-recognition AI and have different designs and findings. Together they leave transfer to sustained generative-AI use unresolved.",
        "next": "Repeat unaided tests during routine AI use and after withdrawal, including time to recover skills.",
        "refs": [
          "bastani2025",
          "shen2026",
          "lira2025",
          "darvishi2024",
          "budzyn2025",
          "okumura2025"
        ]
      },
      {
        "title": "Perceived ability and demonstrated judgement",
        "summary": "Reports of confidence or effort need to be connected to behaviour.",
        "basis": "Lee surveys reported cognitive effort; METR compares perceived and actual productivity; Bucinca tests reliance on advice. These approaches capture different outcomes and do not by themselves establish a common trajectory of judgement.",
        "next": "Track confidence, error detection and appropriate reliance in the same people over time.",
        "refs": [
          "lee2025chi",
          "metr2025",
          "bucinca2021"
        ]
      },
      {
        "title": "From individual performance to workplace oversight",
        "summary": "Tests of a person's ability reveal only part of their ability to intervene.",
        "basis": "Classroom and coding trials, clinical observations and workplace surveys cover different settings. They do not jointly establish how retained skills interact with time, authority and organisational procedures for challenging AI.",
        "next": "Follow one profession, combining unaided work samples with records of review, overrides and training.",
        "refs": [
          "bastani2025",
          "shen2026",
          "okumura2025",
          "lee2025chi"
        ]
      }
    ]
  },
  "culture": {
    "name": "Culture and information",
    "question": "How does AI change what people create, see and believe?",
    "synthesis": "Platform data can describe AI-generated supply and where attention goes. Understanding changes in cultural influence also requires evidence about audiences, creators and the effects of repeated exposure.",
    "selected": [
      {
        "record": "deezer-uploads",
        "headline": "Music uploads and listening are different measures",
        "finding": "Deezer reports both AI-generated uploads and their share of streams. Reading them together separates content supply from audience attention.",
        "why": "Pairs two measures that would be misleading if treated as the same quantity.",
        "limit": "One platform's detector and fraud rules. Uploads and streams need matched dates and denominators; they cannot establish changes in the whole music market.",
        "authors": "Deezer",
        "publisher": "Platform reporting",
        "kind": "Repeated platform reports",
        "measure": "Fully AI-generated tracks as shares of uploads and streams"
      },
      {
        "record": "pew-ai-summaries-2025",
        "headline": "Search behaviour when an AI summary appears",
        "finding": "In Pew's browsing sample, people clicked search-result links less often when Google displayed an AI summary.",
        "why": "Observes browsing behaviour rather than relying only on reported preferences.",
        "limit": "A limited US sample and observation period. Searches with and without summaries differ, so the comparison does not isolate a causal effect.",
        "authors": "Pew Research Center",
        "publisher": "Browsing-data study",
        "kind": "One-off study",
        "design": "Observational study",
        "followUp": "March 2025 browsing / published July 2025",
        "measure": "Search-result clicks with and without an AI summary"
      }
    ],
    "gaps": [
      {
        "title": "The path from supply to attention",
        "summary": "More AI-generated content does not tell us who sees it.",
        "basis": "Deezer distinguishes uploads from streams; Pew observes search clicks. The measures cover different stages and platforms, leaving cross-platform exposure and audience choice unclear.",
        "next": "Measure labelled content supply, recommendations and genuine audience attention in matched samples.",
        "refs": [
          "deezer-uploads",
          "deezer-streams",
          "pew-ai-summaries-2025"
        ]
      },
      {
        "title": "What repeated exposure changes",
        "summary": "Counts and clicks leave beliefs, diversity and creator livelihoods unresolved.",
        "basis": "The selected platform measures track output and attention. They do not establish how repeated exposure changes people's views or the range and viability of human-created work.",
        "next": "Follow audiences and creators over time, combining exposure logs with belief, diversity and income measures.",
        "refs": [
          "deezer-uploads",
          "pew-ai-summaries-2025"
        ]
      }
    ]
  },
  "institutions": {
    "name": "AI in government",
    "question": "Who can question or change AI-assisted government decisions?",
    "synthesis": "Public inventories and transparency records describe where governments report using AI. They provide starting points for research into oversight, but offer a less complete account of decisions, interventions and outcomes.",
    "selected": [
      {
        "record": "us_inventory_count",
        "headline": "Reported AI uses across federal agencies",
        "finding": "The US federal inventory lists disclosed AI use cases and associated reporting fields.",
        "why": "An official, structured dataset that can help identify cases for further study.",
        "limit": "A proxy for deployment and disclosure. Reporting rules change, and a listed use case does not reveal how often AI affects a decision or whether oversight works.",
        "authors": "US Office of Management and Budget",
        "publisher": "Federal AI use-case inventory",
        "kind": "Proxy / repeated inventory",
        "measure": "Reported use cases and disclosure fields"
      },
      {
        "record": "uk_atrs",
        "headline": "How public organisations describe algorithmic tools",
        "finding": "UK transparency records describe tools, purposes and aspects of their use in public organisations.",
        "why": "Case-level records can support comparisons of declared responsibilities and oversight arrangements.",
        "limit": "Includes non-AI algorithms and reflects disclosure requirements. Declared processes need to be checked against decisions and outcomes.",
        "authors": "UK Government",
        "publisher": "Algorithmic Transparency Recording Standard",
        "kind": "Proxy / public register",
        "measure": "Published descriptions of algorithmic tools and their use"
      },
      {
        "record": "gao_genai_2025",
        "headline": "An audit of federal AI use and management",
        "finding": "GAO reviews AI inventories and management practices in selected US agencies.",
        "why": "Adds external scrutiny of reporting and implementation to agencies' own records.",
        "limit": "Selected agencies and changing reporting scope. An audit of governance practices does not measure all decision-level interventions or harms.",
        "authors": "US Government Accountability Office",
        "publisher": "GAO-25-107653",
        "kind": "One-off audit",
        "measure": "Reported uses and implementation of management practices"
      }
    ],
    "gaps": [
      {
        "title": "What human review changes",
        "summary": "Reporting a safeguard does not establish its effectiveness.",
        "basis": "The US inventory and UK records describe declared uses and practices. GAO examines management implementation. These sources do not consistently link human review to corrected errors or better outcomes.",
        "next": "Publish sampled decisions, review actions, justified overrides and subsequent outcomes with privacy safeguards.",
        "refs": [
          "us_inventory_count",
          "uk_atrs",
          "gao_genai_2025"
        ]
      },
      {
        "title": "Whether people can contest a decision",
        "summary": "Formal arrangements need to be linked to practical access and results.",
        "basis": "The selected registers and audit can identify systems and responsibilities. They offer an incomplete account of who seeks review, barriers to appeal and whether remedies succeed.",
        "next": "Follow appeal journeys and publish aggregate access, resolution-time and outcome measures.",
        "refs": [
          "us_inventory_count",
          "uk_atrs",
          "gao_genai_2025"
        ]
      },
      {
        "title": "Dependence and the ability to change course",
        "summary": "Tool inventories provide limited evidence about institutional independence.",
        "basis": "Disclosure records are possible sources for identifying vendors and workflows. They do not establish the cost or feasibility of operating without a system or switching provider.",
        "next": "Audit fallback procedures, retained expertise, switching costs and the distribution of decision authority.",
        "refs": [
          "us_inventory_count",
          "uk_atrs"
        ]
      }
    ]
  },
  "influence": {
    "name": "Human influence",
    "question": "Do people retain a meaningful say over AI-shaped decisions?",
    "synthesis": "Surveys capture perceived control, conversation studies identify potential disempowering interactions, and formal models propose measures of collective power. These approaches address different parts of human influence and cannot yet be combined into a single trend.",
    "selected": [
      {
        "record": "pew-aicontrol1",
        "headline": "How much control people feel they have",
        "finding": "Pew asks US adults about their control over whether AI is used in their lives.",
        "why": "A clear, repeatable question about perceived control, with published wording.",
        "limit": "Perceived control can differ from practical ability to refuse, appeal or change a decision. Separate survey waves do not establish individual trajectories.",
        "authors": "Pew Research Center",
        "publisher": "American Trends Panel",
        "kind": "Repeated survey item",
        "measure": "Self-reported control over AI use in one's life"
      },
      {
        "record": "sharma2026",
        "headline": "Potential disempowerment in conversations",
        "finding": "Sharma and colleagues classify interactions that could distort users' understanding, value judgements or actions. Their analysis identifies patterns that warrant closer study.",
        "why": "Moves beyond use frequency to specific forms of potential loss of agency.",
        "limit": "Automated classification of one provider's conversations. Potential disempowerment is not confirmed harm or a measured long-term change in the same people.",
        "authors": "Sharma et al.",
        "publisher": "arXiv / Anthropic",
        "year": "2026",
        "kind": "One-off study",
        "design": "Conversation analysis",
        "title": "Who's in Charge? Disempowerment Patterns in Real-World LLM Usage",
        "url": "https://arxiv.org/abs/2601.19062",
        "measure": "Classified potential for reality, value-judgement and action distortion",
        "scope": "Consumer Claude conversations",
        "followUp": "Published January 2026 / conversation samples"
      },
      {
        "record": "rand-moon-boudreaux-2026",
        "headline": "A proposal for measuring collective power",
        "finding": "RAND proposes measures of who belongs to groups able to determine collective decisions, including the balance of humans and AI.",
        "why": "Offers a formal starting point for studying changes in decision-making power.",
        "limit": "A theoretical framework. Application to real institutions and validation of its measures remain research tasks.",
        "authors": "Moon and Boudreaux",
        "publisher": "RAND",
        "kind": "Proposed measure",
        "design": "Formal model",
        "measure": "Decisive coalitions, their size and human/AI composition",
        "followUp": "Published April 2026 / no empirical time series"
      }
    ],
    "gaps": [
      {
        "title": "Perceived, practical and collective control",
        "summary": "Different approaches measure different meanings of influence.",
        "basis": "Pew measures felt control; Sharma classifies conversational risk; RAND models collective decision power. These measures have not been made interchangeable by the sources reviewed here.",
        "next": "Specify the level of agency, then pair self-report with observed choices, successful challenges and decision outcomes.",
        "refs": [
          "pew-aicontrol1",
          "sharma2026",
          "rand-moon-boudreaux-2026"
        ]
      },
      {
        "title": "Change and recovery over time",
        "summary": "A population snapshot or conversation pattern leaves individual trajectories unclear.",
        "basis": "Separate survey waves and sampled conversations do not establish how the same person's ability to act changes. RAND also identifies reversibility as a concern requiring empirical work.",
        "next": "Follow people and institutions through adoption, changes in permissions and withdrawal, including their ability to regain control.",
        "refs": [
          "pew-aicontrol1",
          "sharma2026",
          "rand-moon-boudreaux-2026"
        ]
      }
    ]
  }
};
