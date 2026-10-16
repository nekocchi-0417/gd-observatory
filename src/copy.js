/* v5 copy deck (comms agent, edited after the researcher review, 8 Oct 2026; updated for draft v0.5 from landscape scan 4.0 and review 3.0, 12 Oct 2026) */
const COPY={
 "home": {
  "eyebrow": "Better Futures Project · Zhang Yue",
  "paper": {"label": "Read the original paper", "url": "https://gradual-disempowerment.ai/"},
  "purpose": {
   "h1": "Tracking whether AI is weakening human influence",
   "sub": "A public dashboard for gradual disempowerment"
  },
  "mapNote": ["What is already measured?", "What is missing?", "And where would new research or funding matter most?"],
  "snapshot": {
   "h2": "The picture so far",
   "sub": "AI capability and use are tracked regularly. We know much less about changes in people's skills and influence.",
   "items": [
    {"k": "Measured often", "t": "Capability and use", "text": "AI is completing more real work, and roughly half of US workers report using AI at work."},
    {"k": "Early signs", "t": "Jobs, culture, institutions", "text": "Young workers in exposed jobs are falling behind; AI-made content is growing; governments list tools, not decisions."},
    {"k": "Hard to see", "t": "Skills and influence", "text": "We still lack repeat tests of unaided ability and a direct measure of whether people keep their say."}
   ],
   "all": "Explore the research gaps"
  },
  "cta": {
   "h2": "Help improve the dashboard",
   "buttons": [
    {"t": "Add an indicator or study", "to": "contribute/add"},
    {"t": "Find or offer funding", "to": "contribute/funding"},
    {"t": "Suggest a correction", "to": "contribute/add"}
   ],
   "why": "Why this project"
  },
  "card": {
   "open": "See the evidence", "openEnd": "See the gap", "next": "Next", "again": "Start again",
   "nextLabels": {"handover": "Delegation", "work": "Jobs", "share": "Income share", "skills": "Skills", "culture": "Culture", "institutions": "Government", "influence": "Influence"},
   "what": {
    "capability": "The best AI systems complete about 1 in 5 paid remote-work projects to a professional standard in a benchmark, up from 1 in 40 in October 2025.",
    "adoption": "In August 2026, 53% of US workers used AI at work; 16% used it daily.",
    "handover": "AI-agent use among developers rose from 31% to 59% in a year. The share of Claude chats that hand over a whole task is flat.",
    "work": "In jobs most exposed to AI, US employment of 22–25-year-olds is about 19% below trend; AI's role remains disputed.",
    "share": "Workers' share of US business income is a record-low 52.8% (Q2 2026), but it was falling before AI.",
    "skills": "Some short trials find weaker learning when people rely on AI answers; a three-year clinic audit found no loss of skill.",
    "culture": "Over half of Deezer uploads and about half of new web articles are AI-made, but AI tracks get 1–3% of streams.",
    "institutions": "Governments disclose thousands of AI uses (US federal: 3,611 in 2025), but almost none count AI-assisted decisions.",
    "influence": "The dashboard has no direct measure of whether people are losing influence over the economy, culture and government."
   }
  },
  "headline": "We cannot steer what we do not measure."

 },
 "coverage": {
  "title": "Where better measurement is needed",
  "takeaway": "The selected sources leave important gaps in how skills change over time, how governments make decisions, and how much influence people retain.",
  "note": "Coverage labels are provisional judgements made with AI assistance. They describe the selected evidence and may miss relevant research. They have not been independently validated and cannot establish the level of risk.",
  "bands": {
   "major": {"label": "Major gaps", "short": "Major gaps", "description": "Key outcomes or repeated measures are missing."},
   "partial": {"label": "Partial coverage", "short": "Partial coverage", "description": "Measures cover part of the question."},
   "stronger": {"label": "Stronger coverage", "short": "Stronger coverage", "description": "Direct measures are repeated over time."}
  },
  "steps": {
   "capability": {"band": "partial", "prompt": "Reliability across a whole workflow", "need": "Test how reliably AI completes whole workflows, including work beyond software.", "why": "Benchmarks measure performance on defined tasks. The selected evidence covers only part of the work involved in complete jobs and workflows."},
   "adoption": {"band": "stronger", "prompt": "How people use and depend on AI", "need": "Track how much work people delegate to AI and how they check or replace its outputs.", "why": "Repeated employee surveys and official business statistics directly measure AI use. Further measures are needed to show how much people depend on AI or delegate decisions to it."},
   "handover": {"band": "partial", "prompt": "Who reviews AI decisions", "need": "Measure which decisions AI makes, which receive human review, and which people can reverse.", "why": "Records from AI providers and sector surveys cover some forms of delegation. They leave open how much decision-making authority people retain."},
   "work": {"band": "partial", "prompt": "How AI affects hiring and training", "need": "Link firms' AI use to junior hiring and training, accounting for other changes in the labour market.", "why": "Payroll and administrative studies cover particular countries and periods. Estimates of which jobs AI could affect answer a different question from measures of actual workplace use."},
   "share": {"band": "stronger", "prompt": "AI's effect on workers' income", "need": "Link workers' income to actual AI use within firms and sectors.", "why": "Established official series repeatedly measure workers' share of income. Further research is needed to identify how much AI contributes to changes in that share."},
   "skills": {"band": "major", "prompt": "Skills without AI over time", "need": "Follow the same people over time and test what they can do without AI.", "why": "Short experiments test learning and task performance. The selected evidence still lacks broad, repeated tests of what people can do without AI."},
   "culture": {"band": "partial", "prompt": "Attention and income for creators", "need": "Track what people read, watch and hear, alongside human creators' income and influence.", "why": "Platform reports and creative-task experiments measure some aspects of content supply, listening and diversity. They leave open how human influence is changing across culture as a whole."},
   "institutions": {"band": "major", "prompt": "Human review of AI decisions", "need": "For high-impact AI systems, report how many decisions involve AI, how often people review or override them, and what happens when people appeal.", "why": "Inventories count reported AI uses, while operational reports describe individual systems. Comparable measures of who controls decisions remain limited."},
   "influence": {"band": "major", "prompt": "Can people challenge AI?", "need": "Measure whether people can refuse, appeal or reverse decisions, and act without AI.", "why": "Surveys of perceived control and exploratory studies of conversations provide indirect evidence. Direct measures of people's power over the economy, culture and government are still missing from this selection."}
  }
 },
 "why": {
  "nav": "Contribute",
  "h1": "Help improve the dashboard",
  "lead": "We are developing this prototype into a regularly updated dashboard on how AI affects people's skills, choices and influence. Contributions can help improve the evidence and identify what needs to be measured next.",
  "audiences": [
   {"name": "Researchers and other contributors", "text": "Share a study or dataset, suggest a measure, or explain where a summary needs correcting."},
   {"name": "Grantmakers", "text": "Support research on the measurement gaps and the ongoing work of checking and maintaining the dashboard."}
  ],
  "plan": {
   "h2": "How the project will develop",
   "steps": [
    {"t": "Review the evidence", "text": "Explain what the selected sources measure, where findings differ, and which questions remain open.", "to": "home"},
    {"t": "Develop better measures", "text": "Turn important gaps into research questions that studies can address.", "to": "gaps"},
    {"t": "Inform action", "text": "Use stronger evidence to identify where interventions could help people retain skills and influence."},
    {"t": "Explore possible futures", "text": "As the evidence develops, connect indicators to scenarios whose assumptions can be checked over time, drawing on projects such as", "links": [["AI 2027", "https://ai-2027.com/"], ["AI 2040", "https://ai-2040.com/"]]}
   ],
   "aim": "The aim is a shared resource that people can inspect, improve and support over time."
  },
  "contribute": {
   "h2": "Add an indicator or study",
   "text": "Suggest a dataset, study or measure, or flag an error in the figures or interpretation. Explain what the source measures, who it covers and any important limits. Conflicting findings and results showing no effect are useful contributions. Submissions are reviewed before publication.",
   "buttons": [
    ["Propose an indicator", "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=indicator.yml"],
    ["Share a study", "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=study.yml"],
    ["Suggest a correction", "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=correction.yml"]
   ],
   "note": "Submission forms open on GitHub. A source link and a brief explanation help us review your contribution."
  },
  "funding": {
   "h2": "Find or offer funding",
   "text": "The opportunities below may be relevant to researchers working on AI and human influence. Funders can use the research gaps to explore where new studies or support for the dashboard could help.",
   "gapsLink": "Explore the research gaps",
   "grants": [
    {"name": "Foresight Institute, AI for Science and Safety Nodes", "status": "Closes 31 October 2026", "fit": "The \"Human empowerment\" area seeks evidence on when human oversight adds value.", "url": "https://foresight.org/grants/ai-science-safety-nodes-rfp/"},
    {"name": "GTR AI Safety Fund", "status": "Rolling", "fit": "Its stated interests include \"the gradual effects of AI on human development and social behaviour\".", "url": "https://www.gtr-foundation.org/gtr-ai-safety-fund"},
    {"name": "EA Funds, Transformative AI Fund", "status": "Rolling", "fit": "Typical grants of $10k to $150k for individuals and small teams.", "url": "https://funds.effectivealtruism.org/funds/transformative-ai"},
    {"name": "Coefficient Giving, capacity-building funding", "status": "Rolling", "fit": "Supports websites, data infrastructure and public discussion. Research itself falls outside this funding stream.", "url": "https://coefficientgiving.org/funds/navigating-transformative-ai/funding-for-work-that-builds-capacity-to-address-risks-from-transformative-ai/"}
   ],
   "note": "None of these calls is dedicated to gradual disempowerment. Details were checked at source on 13 October 2026; confirm current eligibility and deadlines with the funder."
  },
  "community": {
   "h2": "Join the community",
   "text": "Meet others measuring gradual disempowerment.",
   "soon": "Coming soon",
   "until": "Until then, say hello or ask a question on GitHub.",
   "link": ["Open an issue", "https://github.com/nekocchi-0417/gd-observatory/issues/new/choose"]
  }
 },
  "evidence": {
  "title": "Evidence by step",
  "deck": "Key studies and indicators for each step, with the measurement gaps highlighted.",
  "scaleLabel": "What the data show",
  "scale": {
   "1": {
    "word": "No clear change yet",
    "gloss": "Little movement, or movement that began before AI."
   },
   "2": {
    "word": "Early or mixed signs",
    "gloss": "Some data point that way; others do not, or the cause is disputed."
   },
   "3": {
    "word": "Clearly changing",
    "gloss": "Repeated data show a clear move that way."
   },
   "4": {
    "word": "Changing fast",
    "gloss": "Repeated, direct data show rapid change the way the theory predicts."
   },
   "?": {
    "word": "Can't tell",
    "gloss": "Not measured well enough to say. Not the same as no change."
   }
  },
  "judgementTip": "The dashboard's judgement of how far the data have moved. Not a measure of cause or harm.",
  "rows": {
   "capability": {
    "signal": 4,
    "line": "AI now completes about 1 in 5 real paid projects, up from 1 in 40."
   },
   "adoption": {
    "signal": 4,
    "line": "Use at work keeps climbing; daily use is still a minority."
   },
   "handover": {
    "signal": 2,
    "line": "Chatbot hand-over is not clearly rising; coding-agent use is."
   },
   "work": {
    "signal": 2,
    "line": "Young workers in AI-exposed jobs are falling behind; the cause is disputed."
   },
   "share": {
    "signal": 2,
    "line": "Workers' share is at a record low, but most of the fall came before AI."
   },
   "skills": {
    "signal": "?",
    "line": "Mostly one-off studies; no general panel re-tests skills without AI."
   },
   "culture": {
    "signal": 2,
    "line": "AI-made content is growing; attention to it is barely measured."
   },
   "institutions": {
    "signal": "?",
    "line": "AI tools are counted; AI-assisted decisions rarely are."
   },
   "influence": {
    "signal": "?",
    "line": "No direct measure; the nearest proxy is a poll on control over AI."
   }
  },
  "coverage": {"title": "Measurement coverage: how often each indicator is measured", "cta": "Know a better indicator for any link?", "ctaLink": "Propose it"},
  "footer": {
   "record": "The measurement record: dated readings since 2021 →",
   "toGap": "Why the human end is uncertain →"
  }
 },
 "record": {
  "title": "The measurement record",
  "intro": "Each mark is one dated reading shown on this site since 2021. Blue marks measure the link itself; grey marks measure something nearby.",
  "instruction": "Select a lane to open its chart.",
  "footer": "Marks show how often a series is published, not how strong it is. What would close these gaps →",
  "drawer": {
   "titlePattern": {
    "0": "{stop}: why dotted?",
    "1": "{stop}: why dotted?",
    "2": "{stop}: why a hollow line?",
    "3": "{stop}: why a solid line?",
    "4": "{stop}: why a thick line?"
   },
   "levelSentence": {
    "0": "Nothing measures this directly.",
    "1": "Only one-off studies or counts of paperwork; nothing follows the same thing over time.",
    "2": "Measured repeatedly, but the change cannot be tied to AI.",
    "3": "Measured repeatedly and directly, but by the firms involved, or with the cause disputed.",
    "4": "Measured again and again, directly, by bodies independent of the AI firms."
   },
   "stopSentence": {
    "capability": "Independent trackers re-measure each major model; the task-length series stopped in 2026.",
    "adoption": "Surveyed every quarter by several independent bodies; self-reported.",
    "handover": "Repeated, but from the AI companies' own logs; no new headline figure since November 2025.",
    "work": "Payroll data every month; whether AI is the cause is disputed.",
    "share": "Measured every quarter since 1947, but the change cannot be tied to AI.",
    "skills": "Short one-off trials and two clinic audits that disagree; no general panel links re-tests to AI use.",
    "culture": "Repeated, but mostly by platforms and vendors with a stake in the answer.",
    "institutions": "AI uses disclosed by governments are counted; decisions made with AI rarely are (London police's face-matching alerts are an exception).",
    "influence": "Nothing measures it directly; one poll question on control over AI comes nearest."
   },
   "checks": [
    {
     "label": "Repeated",
     "tip": "Measured more than once, the same way."
    },
    {
     "label": "Direct",
     "tip": "Measures the thing the link is named for."
    },
    {
     "label": "Independent",
     "tip": "Not measured by the firms whose products are involved."
    },
    {
     "label": "Tied to AI",
     "tip": "The change can be linked to AI rather than other causes."
    }
   ],
   "link": "See the full record →",
   "close": "Close",
   "phoneButton": "Why?",
   "ariaPattern": "{stop}: {measurementWord}. Show why."
  }
 },
 "linkUI": {
  "breadcrumb": "Evidence › {link}",
  "pillSignal": "What the data show",
  "pillMeasure": "How well measured",
  "instruction": "Select an indicator to see its chart. Trends describe each series, not its cause.",
  "brief": {"bottom": "Bottom line", "confidence": "How to read this", "evidence": "Evidence", "indicators": "{n} indicators", "caveats": "Caveats", "blind": "Missing measures", "signals": "Signals to watch", "propose": "Know a measure we missed? Propose an indicator", "proposeUrl": "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=indicator.yml"},
  "markerLegend": "Filled dot: moving the way the theory predicts. Hollow: the other way. Half: unclear.",
  "cards": {
   "sceptic": "Reasons to be cautious",
   "unmeasured": "Missing measures",
   "watch": "What to watch"
  },
  "unmeasuredTip": "Not found in published sources searched up to October 2026.",
  "coverage": "How often this link is measured",
  "readingIt": "Reading it",
  "dataTable": "Data table",
  "sources": "Sources",
  "prev": "Previous link",
  "next": "Next link",
  "endOfChain": "End of the chain: the gap →"
 },
 "links": {
  "capability": {
   "h1": "AI can now finish some real paid remote-work projects.",
   "sentence": "On the Remote Labor Index, the best system reached 21.25% in September 2026, up from 2.5% in October 2025. METR's separate software-task series has not added a model since May 2026.",
   "inds": {
    "rli": {
     "label": "Real paid projects AI completes",
     "shows": "Share of real freelance projects done to a professional standard: 1 in 40, now 1 in 5."
    },
    "eci": {
     "label": "Combined capability score",
     "shows": "Epoch's index across many benchmarks: up about 14 points a year since 2024."
    },
    "metr": {
     "label": "Task length AI can finish",
     "shows": "Longest software task AI can finish: doubled about every four months, until the series stopped in 2026."
    },
    "gdpval": {
     "label": "Office work at expert level",
     "shows": "Share of OpenAI's office tasks where AI was rated as good as experts or better; levelling off."
    },
    "price": {
     "label": "Price of fixed capability",
     "shows": "Cost of reaching a fixed benchmark score; about 13 times cheaper each year."
    }
   },
   "sceptic": [
    {
     "label": "Software only",
     "text": "METR's tasks are coding, machine learning and security; on tasks operating a computer screen, lengths are 40 to 100 times shorter."
    },
    {
     "label": "50% is a low bar",
     "text": "At 80% success, the longest task is 1 to 3 hours, not 12 or more."
    },
    {
     "label": "Reliability lags",
     "text": "Princeton's agent reliability tracker finds accuracy rising steadily over two years while reliability has barely moved."
    },
    {
     "label": "Tests can be gamed",
     "text": "OpenAI dropped SWE-bench Verified, a coding test, finding 59% of audited problems flawed and answers memorised; memorisation is reported on SWE-bench Pro too. METR could not measure GPT-5.6 Sol because it cheated."
    },
    {
     "label": "Lab scores, real users",
     "text": "In a UK trial, AI models alone named the right condition 95% of the time; people using them, under 35%."
    },
    {
     "label": "A field trial disagrees",
     "text": "In METR's 2025 trial, experienced developers took 19% longer with AI tools."
    }
   ],
   "unmeasured": [
    {
     "label": "Tasks institutions run on",
     "text": "No task-length measure found for casework, negotiation or management, the work institutions run on."
    },
    {
     "label": "Reliability on real work",
     "text": "How often AI gets the same real task right when it is repeated, measured independently."
    },
    {
     "label": "Cost per finished task",
     "text": "What a completed real task costs, not a benchmark question."
    },
    {
     "label": "The lab-to-life gap",
     "text": "Benchmark scores set against real users' results, repeated for each new model."
    }
   ],
   "watch": [
    {
     "label": "Half of real projects",
     "text": "AI's automation rate on the Remote Labor Index passing 50%; it was 21.25% in September 2026."
    },
    {
     "label": "A second evaluator",
     "text": "Partly met: the UK AI Security Institute finds cyber task length doubling every 8 months or faster, and the Remote Labor Index covers work outside software."
    },
    {
     "label": "A plateau",
     "text": "If capability scores stop rising, every link downstream slows."
    }
   ]
  },
  "adoption": {
   "h1": "AI use at work is now common, but daily use is still a minority.",
   "sentence": "Gallup puts any workplace use at 53% and daily use at 16% in August 2026, up from 21% and 4% in 2023.",
   "inds": {
    "gallup": {
     "label": "US workers using AI",
     "shows": "Share using AI at work, any and daily; both up since 2023."
    },
    "rps": {
     "label": "Workers using generative AI",
     "shows": "Second survey: use rose from a third of workers to 45%."
    },
    "hours": {
     "label": "Work hours done with AI",
     "shows": "Share of all US work hours using generative AI: about 6%, up from 4%."
    },
    "firms": {
     "label": "Firms using AI",
     "shows": "Firm use rising in US and EU; the US question changed mid-series."
    },
    "students": {
     "label": "Students using AI",
     "shows": "UK undergraduates' use for assessed work is now near universal."
    }
   },
   "sceptic": [
    {
     "label": "Wide but shallow",
     "text": "Generative AI assisted 6.3% of US work hours in Q2 2026; under 3% of job tasks have adoption above 50%. In the euro area, 70% of firms report some AI use; 7% call it significant."
    },
    {
     "label": "No pay effect yet",
     "text": "In Danish records, workers who adopted chatbots saw no change in earnings or hours; the study (Still Waters, Rapid Currents, NBER w33777, 2026) rules out effects above 2%."
    },
    {
     "label": "Recent growth has slowed",
     "text": "Gallup's any-use figure rose 1 point in Q3 2026; the ONS calls UK firm use \"broadly stable\"; Census firm use held at 17 to 20% for five months; Ramp says adoption is \"decelerating\"."
    },
    {
     "label": "Definitions swing the number",
     "text": "Estimates run from 18% of firms to firms covering 78% of employment."
    }
   ],
   "unmeasured": [
    {
     "label": "Hours done with AI",
     "text": "No statistics agency measures hours done with AI; the only series (St. Louis Fed, quarterly, by occupation) is an online panel."
    },
    {
     "label": "Could they do without?",
     "text": "Whether workers who use AI could still do the same task without it."
    },
    {
     "label": "Use outside the rich world",
     "text": "Independent, comparable data outside the EU and OECD. The only Global North and South comparison found is Microsoft's own: 22.9% against 13.1% of people aged 15 to 64 (first half of 2025), 27.5% against 15.4% (Q1 2026)."
    }
   ],
   "watch": [
    {
     "label": "Daily use passing 25%",
     "text": "Gallup's daily-use figure passing one in four workers; it was 16% in August 2026."
    },
    {
     "label": "Work hours done with AI",
     "text": "Economists' median: 10% of work hours by 2030 and 40% by 2050, from 3.35% in 2024 on their measure."
    },
    {
     "label": "Firms beating their forecasts",
     "text": "US firm adoption outpacing firms' own expectation of 20 to 23% within six months."
    }
   ]
  },
  "handover": {
   "h1": "Task hand-over is mixed: coding agents are rising, chatbot hand-over is not.",
   "sentence": "On Claude, the hand-over share moved from 41% to 49% to 45% in 2025. On ChatGPT, requests for finished work fell. In coding, agent use is climbing.",
   "inds": {
    "aei": {
     "label": "Chats handing the task over",
     "shows": "Claude chats where users delegate the task: rose, then eased."
    },
    "agents": {
     "label": "Coding agents left unattended",
     "shows": "AI coding agents run longer between human checks, in Anthropic's own data."
    },
    "devagents": {
     "label": "Developers using AI agents",
     "shows": "Share of developers using AI agents at work: 31% to 59% in a year."
    },
    "code": {
     "label": "AI-written code at Google",
     "shows": "Google's own stated share of AI-written code, rising; no published method."
    },
    "chatgpt": {
     "label": "ChatGPT requests for finished work",
     "shows": "Share asking for a finished output fell as personal use grew."
    }
   },
   "sceptic": [
    {
     "label": "Not a one-way trend",
     "text": "Automation eased from 49% to 45% on Claude.ai, and ChatGPT requests for finished output fell from about half to 35%."
    },
    {
     "label": "People still steer",
     "text": "In Claude Code, users make about 70% of planning decisions, and experienced users interrupt the agent more than new ones."
    },
    {
     "label": "One vendor",
     "text": "Claude users lean towards coding and do not represent AI users generally."
    },
    {
     "label": "Hand-over can be sensible",
     "text": "Delegating a task that AI does well is not, in itself, a loss of agency."
    }
   ],
   "unmeasured": [
    {
     "label": "The review rate",
     "text": "Whether anyone checks AI output before it is used. One company reports a partial figure."
    },
    {
     "label": "One definition, all providers",
     "text": "Hand-over measured across AI providers on one shared definition."
    },
    {
     "label": "Beyond coding and office work",
     "text": "Hand-over in fields other than coding and office work."
    }
   ],
   "watch": [
    {
     "label": "Automation above 50%",
     "text": "Claude.ai automation above 50% in two reports running."
    },
    {
     "label": "Fewer humans in the loop",
     "text": "The share of agent actions with a human in the loop falling below 73%."
    },
    {
     "label": "A second provider",
     "text": "Another AI company publishing the same automation and augmentation split."
    }
   ]
  },
  "work": {
   "h1": "The clearest labour-market signal is among young workers in AI-exposed jobs.",
   "sentence": "In US payroll data, jobs for 22 to 25 year olds in the most exposed occupations are down 13% since late 2022. The cause is disputed.",
   "inds": {
    "canaries": {
     "label": "Jobs for ages 22–25",
     "shows": "In the most AI-exposed jobs, down since 2022 while older peers grew."
    },
    "cohort": {
     "label": "Jobs for ages 26–30",
     "shows": "The next age group in the same jobs has started to slip."
    },
    "euyouth": {
     "label": "EU tech jobs for under-25s",
     "shows": "Down 15% since 2023 while older workers' rose; a boom, then a bust."
    },
    "macro": {
     "label": "Employment, ages 25–54",
     "shows": "Share of adults aged 25–54 in work: as high as before ChatGPT."
    },
    "cuts": {
     "label": "Job cuts blamed on AI",
     "shows": "Announced cuts citing AI peaked in May 2026, then fell back."
    },
    "postings": {
     "label": "Software job adverts",
     "shows": "Most of the fall in adverts came before ChatGPT."
    },
    "grads": {
     "label": "Graduates' first jobs",
     "shows": "Graduates of the most AI-exposed majors land first jobs less often, on lower pay."
    }
   },
   "sceptic": [
    {
     "label": "The timing fits other causes",
     "text": "Software adverts peaked in February 2022, after a hiring boom and just before interest rates rose; a tax change also raised costs."
    },
    {
     "label": "Adjustments shrink it",
     "text": "Adjusting for interest-rate exposure, education and remote work more than halves Stanford's estimate, from −0.179 to −0.080."
    },
    {
     "label": "Nordic registers see little",
     "text": "Finland: no effect on young workers. Norway: no robust effect to March 2025; newer data show an emerging, not yet significant gap for 22 to 25 year olds. Danish chatbot adopters saw no change in pay or hours."
    },
    {
     "label": "Exposed workers not more unemployed",
     "text": "Unemployment rose less for the most exposed than the least exposed, though a July 2026 update (Stanford's SIEPR) nearly closes the gap: 0.77 against 0.85 points."
    }
   ],
   "unmeasured": [
    {
     "label": "Gone, or moved?",
     "text": "Whether these jobs have disappeared, or moved to other firms or countries."
    },
    {
     "label": "Junior hiring in adopting firms",
     "text": "Official data linking firms' AI adoption to their junior hiring. Two studies on online-profile data find about 9% (US) and 6% (UK) fewer juniors at adopting or exposed firms; neither is repeated."
    },
    {
     "label": "Do they catch up?",
     "text": "Whether people who miss a first job in an exposed field catch up later."
    }
   ],
   "watch": [
    {
     "label": "The 26 to 30 group",
     "text": "The next age group, now 4% below its November 2022 level in the most exposed jobs."
    },
    {
     "label": "Recent-graduate unemployment",
     "text": "Now 5.6%; Metaculus forecasters expect 10% by 2030."
    },
    {
     "label": "The gap after rates settle",
     "text": "The gap still widening now interest rates have stopped rising, which would weaken the main rival explanation."
    },
    {
     "label": "Norway's monthly index",
     "text": "Whether the young-worker gap in Norway's monthly KI-indeksen becomes significant."
    }
   ]
  },
  "share": {
   "h1": "Workers' share of income is low, but AI may not be the cause.",
   "sentence": "US workers' share of business income was 52.8% in mid-2026, after five quarterly falls. Most of the longer fall happened before generative AI.",
   "inds": {
    "ls": {
     "label": "Workers' share of income",
     "shows": "Record low after five quarterly falls; most of the decline predates AI."
    },
    "pay": {
     "label": "Pay's share of national income",
     "shows": "Fell to 50.9% in 2025, lowest since the 1930s; profits' share stepped up in 2021."
    },
    "mag7": {
     "label": "Big tech's stock-market weight",
     "shows": "Seven firms' share of S&P 500 value more than tripled since 2014."
    },
    "compute": {
     "label": "Who owns AI computing power",
     "shows": "Companies' share of known AI computing capacity doubled to 80% since 2019."
    },
    "union": {
     "label": "Union membership",
     "shows": "Flat near one in ten since 2022, after decades of decline."
    }
   },
   "sceptic": [
    {
     "label": "It started around 2000",
     "text": "Most of the fall came in 2001 to 2010. Stanford rates the rise in capital's share \"Strong Evidence\", but calls it the old trend continuing and sees \"no decisive evidence of transformation\"."
    },
    {
     "label": "Too many explanations",
     "text": "The literature \"collectively explains the phenomenon many times over\" (Grossman and Oberfield 2022)."
    },
    {
     "label": "AI skills pay more",
     "text": "Job adverts asking for AI skills carry a 62% wage premium (PwC), and the most exposed workers earn more already."
    },
    {
     "label": "World figure barely moved",
     "text": "The ILO puts workers' world share at 52.4% in 2024, against 53% in 2014, within its own revision range."
    }
   ],
   "unmeasured": [
    {
     "label": "AI capital's share",
     "text": "AI-related investment is estimated (39% of real GDP growth in the first three quarters of 2025, St. Louis Fed), but no series splits out the income earned by AI capital."
    },
    {
     "label": "Bargaining power itself",
     "text": "No regular series found on quits, strikes or job-switchers' pay rises in AI-exposed occupations."
    },
    {
     "label": "Firm returns against wages",
     "text": "Returns to firms that adopt AI, set against wages in the same firms."
    }
   ],
   "watch": [
    {
     "label": "Economists' forecast",
     "text": "Median forecast: workers' share down 1.2 points by 2030 and 5.5 by 2050, or 10.5 with rapid AI progress."
    },
    {
     "label": "Stanford's tracker moving",
     "text": "Stanford's Transformation Tracker moving off its current verdict of \"no decisive evidence\"."
    },
    {
     "label": "Falling share, low unemployment",
     "text": "The share falling further while unemployment stays low."
    },
    {
     "label": "The next reading",
     "text": "The BLS release for the third quarter of 2026, due on 5 November 2026."
    }
   ]
  },
  "skills": {
   "h1": "We track AI use often, but rarely test whether people keep skills without it.",
   "sentence": "Of 233 studies of generative AI found, only 4 test the same people without AI over months or longer. Short trials found losses; one three-year clinic audit found none.",
   "inds": {
    "lopsided": {
     "label": "Use surveyed, skill untested",
     "shows": "AI use is surveyed often; of 233 studies, only 4 re-test people without AI over months."
    },
    "bastani": {
     "label": "Learning with AI, tested without",
     "shows": "Answer-giving AI lowered later unaided scores; tutor-style designs did not."
    },
    "metrrct": {
     "label": "Feeling faster, being slower",
     "shows": "Developers were slower with AI but believed they were faster; others overrated their scores."
    },
    "wrongadvice": {
     "label": "Following wrong AI advice",
     "shows": "People follow AI advice even when it is wrong; one-off studies."
    },
    "budzyn": {
     "label": "Doctors' detection without AI",
     "shows": "Polish doctors found fewer growths unaided after AI arrived; a Japanese clinic found no decline."
    },
    "whos": {
     "label": "Chats that may distort views",
     "shows": "Rare chats with severe potential to distort a user's beliefs; one snapshot."
    },
    "literacy": {
     "label": "Adult literacy and numeracy",
     "shows": "US test scores fell before AI arrived; cannot be tied to it."
    }
   },
   "sceptic": [
    {
     "label": "Small and short",
     "text": "Most studies: 16 to about 1,000 people, followed for minutes to a few months."
    },
    {
     "label": "Workload changed too",
     "text": "In the Polish clinic study, the number of procedures nearly doubled when AI arrived."
    },
    {
     "label": "A longer study found no loss",
     "text": "A three-year audit at one Japanese clinic found detection without AI held up."
    },
    {
     "label": "Design can fix it",
     "text": "A tutor-style chatbot showed no harm to learning, and some ways of using AI in Anthropic's study scored 65% or more."
    },
    {
     "label": "Learning from AI",
     "text": "Professional Go players' own play, flat for decades, improved after AlphaGo (Shin et al. 2023)."
    },
    {
     "label": "Gains that stayed",
     "text": "Call-centre agents kept part of their AI-taught gains during AI outages (Brynjolfsson, Li and Raymond 2025)."
    }
   ],
   "unmeasured": [
    {
     "label": "The same people, re-tested",
     "text": "Skills without AI, re-tested on the same workers at regular intervals, alongside their AI use. Two clinics and one firm come closest."
    },
    {
     "label": "Take-back time",
     "text": "How long a skill takes to come back after AI is removed for a week or a month. Every withdrawal test found is a single check."
    },
    {
     "label": "Skills never learned",
     "text": "Whether new entrants learn the skill at all, if AI does it from day one."
    },
    {
     "label": "Ways back still open",
     "text": "Whether training routes and non-AI ways of working still exist, so people could switch back."
    },
    {
     "label": "Dependence, checked against behaviour",
     "text": "At least eight AI-dependence questionnaires exist; none has been checked against what people actually do, or can do without AI."
    },
    {
     "label": "Benchmarks linked to users",
     "text": "Whether model benchmarks for flattery, manipulation or tutoring predict what happens to the people who use those models."
    }
   ],
   "watch": [
    {
     "label": "A study repeated",
     "text": "Any of the short trials re-run on the same people."
    },
    {
     "label": "The \"without it\" question",
     "text": "Surveys adding the question \"could you still do this without AI?\"."
    },
    {
     "label": "Certification changes",
     "text": "Professional bodies changing certification because trainees no longer see enough cases."
    },
    {
     "label": "Germany's panel adds AI",
     "text": "Germany's education panel (NEPS) already asks adults it re-tests how often they use AI; trust items follow in 2028."
    }
   ]
  },
  "culture": {
   "h1": "AI-made content is flooding supply, but attention has not followed.",
   "sentence": "About half of new web articles and Deezer uploads are classed as AI-made. On Deezer, AI tracks get only 1 to 3% of streams.",
   "inds": {
    "deezer": {
     "label": "AI music on Deezer",
     "shows": "Over half of uploads are AI-made; streams of them stay small."
    },
    "articles": {
     "label": "AI-written web articles",
     "shows": "About half of new articles classed as AI-written, flat since late 2024."
    },
    "books": {
     "label": "AI text in new ebooks",
     "shows": "Over half of new Amazon ebooks in 2025 contained AI text; readers mostly pass them by."
    },
    "search": {
     "label": "Clicks beside AI summaries",
     "shows": "People click links about half as often when an AI summary appears; the fall is growing."
    },
    "chatbots": {
     "label": "Chatbots as a news source",
     "shows": "Chatbot use is huge, but few name AI their main news source."
    },
    "companions": {
     "label": "Teens and AI companions",
     "shows": "Teen companion use is 72% or 9%, depending on the definition."
    },
    "trust": {
     "label": "Trust in news",
     "shows": "Trust in news dipped across 48 markets in 2026 but rose in the US; neither is tied to AI."
    }
   },
   "sceptic": [
    {
     "label": "Supply is not attention",
     "text": "AI tracks are over half of Deezer uploads but 1 to 3% of streams, up to 85% of them fraudulent, Deezer says."
    },
    {
     "label": "It has plateaued",
     "text": "AI articles have sat near 50% for five quarters, and AI-assisted formal writing levelled off by late 2023."
    },
    {
     "label": "Conversation still looks human",
     "text": "Pangram classes 98% of Reddit comments as human-written (mid-2026)."
    },
    {
     "label": "Trust was falling anyway",
     "text": "The decline in trust in the media is decades old."
    }
   ],
   "unmeasured": [
    {
     "label": "AI's share of attention",
     "text": "What fraction of time spent reading, watching and listening goes to AI-made material; one music service reports a stream share."
    },
    {
     "label": "Sameness in what is made",
     "text": "A repeated measure of diversity in published text, music or images; we found lab studies only."
    },
    {
     "label": "What AI ranking shows people",
     "text": "How much of what people see is chosen by AI ranking, and whether it favours AI-made content."
    }
   ],
   "watch": [
    {
     "label": "AI streams past 5%",
     "text": "Deezer's AI share of streams passing 5%."
    },
    {
     "label": "AI as main news source",
     "text": "More than 1% naming AI as their main source of news."
    },
    {
     "label": "AI companionship",
     "text": "Daily AI companionship use: experts forecast 15% of US adults by 2030 and 30% by 2040."
    }
   ]
  },
  "institutions": {
   "h1": "Governments list AI tools, not the decisions made with them.",
   "sentence": "US agencies listed 3,611 AI uses for 2025, but a use is paperwork: one chatbot counts the same as one benefits model.",
   "inds": {
    "inventory": {
     "label": "US federal AI uses disclosed",
     "shows": "Disclosed uses rose fivefold as reporting rules widened."
    },
    "oecdgov": {
     "label": "Governments using AI (OECD)",
     "shows": "Most OECD countries use AI internally; about a third in policymaking."
    },
    "courts": {
     "label": "Courts catching AI errors",
     "shows": "Rulings on AI-invented citations rose to 120–180 a month, then levelled; partly vigilance."
    },
    "atrs": {
     "label": "UK algorithm records",
     "shows": "Official records rose from 6 to 152 once disclosure became mandatory."
    },
    "metlfr": {
     "label": "London police face-matching",
     "shows": "A rare count of AI-triggered decisions: 2,077 alerts in a year, 10 false."
    },
    "tax": {
     "label": "Taxes on people's incomes",
     "shows": "Income and payroll taxes made up about 86% of federal receipts in FY2026, up from 84%."
    },
    "firsts": {
     "label": "Firsts for AI in government",
     "shows": "Twelve reported milestones since 2023; several are stated goals, not decisions."
    },
    "control": {
     "label": "Feeling in control of AI",
     "shows": "Most US adults say they have not too much or no control over AI; two readings."
    },
    "lobby": {
     "label": "AI's share of lobbyists",
     "shows": "A quarter of US federal lobbyists now work on AI, up from one in ten; effort, not influence."
    }
   },
   "sceptic": [
    {
     "label": "Registers follow rules",
     "text": "Counts rise when reporting becomes mandatory, whether or not use grows."
    },
    {
     "label": "Symbolic delegation",
     "text": "Albania's AI \"minister\" does not make final decisions; officials do."
    },
    {
     "label": "Hand-over is old",
     "text": "States have always relied on tools and experts; handing over a task is not losing control."
    },
    {
     "label": "The state still needs people",
     "text": "About 86% of US federal revenue came from income and payroll taxes in FY2026, up from 84%."
    }
   ],
   "unmeasured": [
    {
     "label": "Decisions made with AI",
     "text": "How many decisions are fully automated, AI-recommended with sign-off, or made by a person alone; London police's face-matching alerts are a rare exception."
    },
    {
     "label": "The override rate",
     "text": "How often the responsible official changes the AI's recommendation; none found routinely published."
    },
    {
     "label": "Foreign model dependence",
     "text": "Reliance on foreign AI providers, above all for small states that buy rather than build."
    },
    {
     "label": "Appeals against AI decisions",
     "text": "Appeals against AI-assisted decisions, and how many succeed."
    }
   ],
   "watch": [
    {
     "label": "Published override rates",
     "text": "Any government publishing override rates for a high-impact system."
    },
    {
     "label": "A decision assigned to AI",
     "text": "A statutory decision formally assigned to an AI system."
    },
    {
     "label": "Appeal routes in the next US inventory",
     "text": "Whether the 2026 inventory, due in December, shows more than 16 of 227 deployed high-impact uses with an established appeal route."
    },
    {
     "label": "Final FY2026 tax shares",
     "text": "Treasury's final FY2026 figures, and whether corporate receipts recover in FY2027."
    }
   ]
  },
  "influence": {
   "h1": "Human influence is the outcome, and it is not directly measured.",
   "sentence": "The nearest proxy is one Pew question: 57% of US adults say they have little or no control over whether AI is used in their lives. AI lobbying is rising, but that measures effort, not influence.",
   "inds": {},
   "indsNote": "Shows the Pew card (id: control) and the AI lobbying card (id: lobby) from Institutions; both are recorded against this stop.",
   "emptyState": "No direct measure exists yet. The nearest proxies are below.",
   "newContent": true,
   "sceptic": [
    {
     "label": "Reported control is steady",
     "text": "Pew's control question, asked twice: 59% (2024), then 57% (2025) said not too much or none; within survey noise."
    },
    {
     "label": "The state still needs people",
     "text": "About 86% of US federal revenue came from income and payroll taxes in FY2026, up from 84%."
    },
    {
     "label": "Voters and legislatures still bite",
     "text": "The US Senate voted 99 to 1 to remove a 10-year ban on state AI laws (2025), and 38 states passed about 100 AI measures that year."
    },
    {
     "label": "Local say is working",
     "text": "Local opposition blocked or delayed about $130bn of data-centre projects in early 2026, about as much as in the whole of 2025."
    },
    {
     "label": "No measured election effect",
     "text": "The Alan Turing Institute's CETaS found no 2024 election result that AI disinformation measurably changed."
    },
    {
     "label": "Lost say predates AI",
     "text": "Trust in the US federal government fell from 77% in 1964 to about 25% by 1980. V-Dem's 2026 democratic decline is political and does not mention AI."
    }
   ],
   "unmeasured": [
    {
     "label": "Who can decide",
     "text": "The smallest group able to settle an outcome, and its mix of people and AI systems; RAND (2026) proposes one, not yet applied."
    },
    {
     "label": "A tested survey scale",
     "text": "A tested survey of whether AI changes people's say, asked of the same people each year. Election surveys ask about say, but not about AI."
    },
    {
     "label": "Preferences that still count",
     "text": "Whether people's preferences still change what governments, firms and media do. Kulveit and co-authors propose this exact measure: how well democratic mechanisms still shape outcomes."
    },
    {
     "label": "Lasting belief change",
     "text": "Experiments show AI conversations shift beliefs and the shifts last: conspiracy belief fell about 20% and was still lower two months later (Costello et al. 2024). No repeated measure tracks this in the population."
    }
   ],
   "watch": [
    {
     "label": "A repeated say survey",
     "text": "Any survey asking the same people, each year, whether AI has changed their say."
    },
    {
     "label": "The control poll moving",
     "text": "Pew's control question moving clearly in either direction over several readings."
    },
    {
     "label": "Tax shares shifting",
     "text": "Income and payroll taxes falling as a share of US federal revenue."
    }
   ]
  }
 },
 "gap": {
  "nav": "Gaps",
  "eyebrow": "Research gaps",
  "h1": "What to measure next",
  "sentence": "A draft agenda for improving the dashboard. The columns use the same coverage ratings as the causal diagram.",
  "priority": {
   "now": {"t": "Ready to fund", "d": "A method exists; it needs money and a team."},
   "method": {"t": "Needs method design", "d": "The construct or instrument still has to be designed and tested."},
   "later": {"t": "Monitor", "d": "Further from the outcome, or data may appear on its own."}
  },
  "cta": {
   "fund": ["Fund or run this measure", "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=offer.yml&title="],
   "study": ["Propose a study", "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=study.yml&title="],
   "ind": ["Suggest an indicator", "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=indicator.yml&title="],
   "review": ["Review this gap", "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=correction.yml&title="]
  },
  "ranking": {"title": "Where better measurement is needed", "sub": "Start with Major gaps. These are the steps with few direct measures and concrete research questions below."},
  "matrix": {
   "title": "Which links are close to the outcome but barely measured?",
   "xAxis": {
    "title": "How well measured today",
    "low": "Not measured",
    "high": "Well measured"
   },
   "yAxis": {
    "title": "Closeness to the outcome",
    "low": "4 steps away",
    "high": "The outcome itself"
   },
   "quadrant": "Close to the outcome, barely measured",
   "caption": "",
   "flag": "Worth working on",
   "flagAlt": "Author's focus",
   "disclosure": "",
   "howTo": "Up the side: how close each step is to Human influence. Along the bottom: how well it is measured today."
  },
  "list": {
   "title": "Missing measures",
   "sub": "Open a row to see why it matters, what to measure and the closest proxy today.",
   "expandAll": "Expand all",
   "collapseAll": "Collapse all",
   "heads": {
    "why": "Why it matters",
    "what": "What it would be",
    "closest": "Closest thing today"
   },
   "open": "Open {link} →"
  },
  "chips": [
   "No measure exists",
   "One-off only",
   "Not tied to AI",
   "Company data only",
   "Definitions differ",
   "Partial coverage"
  ],
  "items": [
   {
    "i": 0,
    "link": "capability",
    "old": "Task lengths outside software",
    "chip": "Partial coverage",
    "title": "Test how reliably AI completes work beyond software",
    "why": "The proposed pathway depends partly on AI taking on casework, negotiation and management. Measuring performance on these tasks would help assess how far technical capabilities extend into institutional work.",
    "what": "Have an independent evaluator adapt METR-style tests to casework, negotiation and management. For each new model, measure the length of task it can complete at a specified success rate.",
    "closest": "METR measures technical-task horizons; its tracker is no longer actively updated. The Remote Labor Index adds professional projects, with different scoring and coverage. See the selected capability sources."
   },
   {
    "i": 14,
    "link": "capability",
    "old": "Reliability on real work",
    "chip": "Partial coverage",
    "title": "Test reliability across complete workflows",
    "why": "A successful attempt gives limited information about whether the same system will perform consistently. Repeated tests would help institutions assess how reliably AI can complete the work they need.",
    "what": "Have an independent evaluator run the same real tasks many times. Report how often AI succeeds and how often it completes every attempt successfully.",
    "closest": "METR explicitly measures task completion at a chosen success rate. Its technical-task coverage does not establish reliability across whole jobs."
   },
   {
    "i": 15,
    "link": "capability",
    "old": "Cost per completed real task",
    "chip": "Partial coverage",
    "title": "Track the full cost of completing work with AI",
    "why": "Firms need to know the cost of a completed job when deciding whether to delegate work to AI. Time spent checking outputs and repeating failed attempts can change the value of a cheaper model.",
    "what": "For each new model, measure the full cost of completing real tasks with AI, including repeated attempts and human checking. Track how that cost changes over time.",
    "closest": "The selected capability benchmarks measure completion or reliability, not the full cost of deployment, retries and human review."
   },
   {
    "i": 16,
    "link": "capability",
    "old": "Lab-to-life gap",
    "chip": "One-off only",
    "title": "Compare benchmark scores with results for real users",
    "why": "Performance on a controlled benchmark may differ from the results people achieve with AI. Repeated comparisons would show how well benchmark improvements translate into useful performance.",
    "what": "For each new model, compare its benchmark results with the outcomes real users achieve on the same kind of task.",
    "closest": "The capability page separates controlled benchmarks from performance across whole jobs. A repeated comparison with real users remains a monitoring priority."
   },
   {
    "i": 1,
    "link": "adoption",
    "old": "Work hours done with AI, by occupation",
    "chip": "Partial coverage",
    "title": "Measure how much working time involves AI in each occupation",
    "why": "Knowing whether someone uses AI leaves open how much of their work involves it. Measuring hours would help distinguish occasional use from use throughout the working day.",
    "what": "Run an official quarterly survey of the share of working hours that involve AI, with results reported separately for each occupation.",
    "closest": "Gallup tracks regular use; the RPS work-hours indicator linked on the adoption page estimates time involving AI. Neither directly measures work handed over or checked."
   },
   {
    "i": 2,
    "link": "handover",
    "old": "The review rate",
    "chip": "Company data only",
    "title": "Measure how often people check AI outputs before use",
    "why": "Human review can help people identify errors and retain oversight of delegated work. Records of completed AI tasks alone leave open whether anyone meaningfully checked the results.",
    "what": "For tasks completed by AI, record whether a person checked the output before it was used. Apply a shared definition of meaningful review across providers so the results can be compared.",
    "closest": "Anthropic classifies automation and augmentation in conversations. Those patterns do not show whether people checked or used an output."
   },
   {
    "i": 3,
    "link": "work",
    "old": "Junior hiring inside firms that adopt AI",
    "chip": "Not tied to AI",
    "title": "Link junior hiring to firms' actual AI adoption",
    "why": "Connecting hiring to actual adoption would help investigate AI's contribution to changes in demand for junior workers. The analysis would also need to account for other changes affecting those firms.",
    "what": "Link the dates when firms adopt AI to payroll records of hiring by seniority. Update the data regularly to compare hiring before and after adoption.",
    "closest": "Stanford/ADP tracks age and occupational exposure, not adoption. Humlum and Vestergaard link Danish adoption reports to administrative outcomes, but in a different period and setting."
   },
   {
    "i": 4,
    "link": "share",
    "old": "AI capital's share of income",
    "chip": "No measure exists",
    "title": "Track income associated with AI capital",
    "why": "Distinguishing income associated with AI capital would help investigate whether shifts in workers' share coincide with gains for AI owners. Establishing that AI caused a shift would require further analysis.",
    "what": "Develop a way to distinguish AI-related capital income within national accounts, then track it alongside workers' share of income.",
    "closest": "ILO global labour income share and BLS US nonfarm-business labour share. Neither attributes changes to AI or identifies who owns AI-related capital."
   },
   {
    "i": 5,
    "link": "skills",
    "old": "Unaided ability, tested twice",
    "chip": "Partial coverage",
    "title": "Follow changes in skills without AI over time",
    "why": "Testing the same people repeatedly would help distinguish lasting learning or skill loss from short-term changes in performance. Recording their AI use would help examine how those changes relate to use.",
    "what": "Follow a group of workers, students or clinicians. Each year, test their performance on defined tasks without AI and record how they have been using AI.",
    "closest": "Bastani et al. test unaided maths performance immediately after practice. The guided tutor and unrestricted tool have different results; neither estimates population-wide long-term change."
   },
   {
    "i": 6,
    "link": "skills",
    "old": "Take-back time",
    "chip": "No measure exists",
    "title": "Measure how performance recovers after AI is removed",
    "why": "Recovery time would help assess whether people can resume tasks independently after relying on AI. It could reveal difficulties that a single test immediately after removal would miss.",
    "what": "Study a group working without AI for a week or a month. Measure whether their performance recovers and, when it does, how long recovery takes.",
    "closest": "The selected classroom trial tests performance without AI but does not follow recovery over months."
   },
   {
    "i": 17,
    "link": "skills",
    "old": "Dependence checked against behaviour",
    "chip": "Partial coverage",
    "title": "Check reported AI dependence against behaviour",
    "why": "A questionnaire about dependence needs to distinguish ordinary AI use from difficulty functioning without it. Comparing answers with behaviour would help test whether the measure identifies that difficulty.",
    "what": "Test a short questionnaire in a representative sample, comparing each person's answers with their AI use and performance without AI. Evaluate the thresholds used to interpret the results before agreeing on cut-offs.",
    "closest": "The current shortlist does not contain a validated dependence measure linked to repeated unaided performance. This is a gap in this selection, not proof that no relevant study exists."
   },
   {
    "i": 18,
    "link": "skills",
    "old": "Benchmark-to-person link",
    "chip": "No measure exists",
    "title": "Test how model behaviour affects users over time",
    "why": "Benchmarks can identify model behaviours such as flattery or manipulation. Direct studies of users are needed to understand whether those behaviours change skills, beliefs or the ability to make independent decisions. Satisfaction alone cannot establish those effects.",
    "what": "Study people using models with different scores on behavioural benchmarks. Follow changes in their skills, beliefs and decision-making over time to test how benchmark results relate to user outcomes.",
    "closest": "Anthropic's disempowerment study classifies potential risks in conversations, not lasting changes in people's beliefs or agency. It is linked on the human influence page."
   },
   {
    "i": 7,
    "link": "culture",
    "old": "Attention-weighted AI share",
    "chip": "Company data only",
    "title": "Track how much AI-made content people read, watch and hear",
    "why": "The cultural pathway depends on what reaches people's attention. Measuring time spent with AI-made content would help assess its role in people's experience of culture.",
    "what": "Each quarter, report the share of time people spend reading, watching or listening to AI-made content on each platform.",
    "closest": "Deezer reports 1–3% of recorded streams for fully AI-generated tracks. Fraud and recommendation exclusions prevent a clean measure of human listening."
   },
   {
    "i": 8,
    "link": "culture",
    "old": "Convergence in what gets published",
    "chip": "No measure exists",
    "title": "Track diversity in published work over time",
    "why": "If AI use makes published work more uniform, people could encounter a narrower range of ideas and styles. Measuring diversity over time would help investigate whether that change is occurring.",
    "what": "Develop an annual measure of diversity across published text, music and images, using features such as vocabulary, style and subject where appropriate to each medium.",
    "closest": "Doshi and Hauser find higher creativity ratings but more similarity in AI-assisted short stories. That experiment is not a trend in published culture."
   },
   {
    "i": 9,
    "link": "institutions",
    "old": "Decisions made by AI",
    "chip": "Partial coverage",
    "title": "Count government decisions that involve AI",
    "why": "Decision counts would show how much government work involves AI and what role it plays. An inventory of tools leaves those volumes and roles unclear.",
    "what": "For each high-impact system, publish annual decision counts in three categories: fully automated, recommended by AI with human sign-off, and made by a person alone.",
    "closest": "The US inventory lists 3,611 use cases. The Metropolitan Police report 2,077 facial-recognition alerts in one year. These count different things; neither is a government-wide decision count."
   },
   {
    "i": 10,
    "link": "institutions",
    "old": "The override rate",
    "chip": "No measure exists",
    "title": "Track how officials review and change AI recommendations",
    "why": "Understanding human control requires evidence about reviewers' opportunities, reasons and outcomes, including appeals. An override rate on its own leaves open whether officials can meaningfully challenge AI recommendations.",
    "what": "For each high-impact system, publish the share of AI recommendations changed by the responsible official and the time spent reviewing each case.",
    "closest": "The OMB inventory records reported applications and some safeguards, not comparable rates of substantive review and successful appeals. Missing fields do not prove safeguards are absent."
   },
   {
    "i": 11,
    "link": "institutions",
    "old": "Dependence on foreign model providers",
    "chip": "No measure exists",
    "title": "Track public-sector dependence on model providers",
    "why": "Governments that rely on external AI providers may face limits on changing or replacing their systems. Tracking concentration by provider and country would help identify where to investigate that dependence.",
    "what": "Publish annual shares of public-sector AI spending and queries by provider and by the provider's home country.",
    "closest": "Public inventories can identify some systems and vendors. Counts of listed tools do not measure spending, query volume or the practical ability to switch suppliers."
   },
   {
    "i": 12,
    "link": "influence",
    "old": "Who can decide",
    "chip": "No measure exists",
    "title": "Observe who can make, refuse or reverse decisions",
    "why": "The central question is how much authority people retain over outcomes. Observing who can settle or challenge a real decision would bring measurement closer to that question.",
    "what": "In real institutions, identify the smallest group able to determine an outcome. Record the roles of people and AI systems, including who can refuse or reverse the decision.",
    "closest": "Pew measures felt control; Anthropic studies conversational risk. Neither is a validated measure of decision authority across institutions."
   },
   {
    "i": 13,
    "link": "influence",
    "old": "A population measure of disempowerment",
    "chip": "Definitions differ",
    "title": "Compare people's sense of control with the choices they can make",
    "why": "Repeated surveys could track perceived control across a population. Pairing them with observed choices would help assess how that perception relates to people's ability to act.",
    "what": "Each year, ask the same people a tested set of questions about control and give them simple tasks that reveal which choices they can make.",
    "closest": "Pew reports 57% of US adults felt little or no control in June 2025. Its topline includes earlier responses, but neither wave shows how much actual authority people have."
   }
  ]
 },
 "futures": {
  "nav": "Futures",
  "navTag": "WIP",
  "title": "Possible futures: an unverified draft",
  "wipTag": "Work in progress",
  "caveat": "Unverified draft. Forecast values, historical chart points and scenario assumptions still need human checking before citation. The related projects and proposed directions are a starting point for further review.",
  "landscape": {
   "title": "Related research and forecasting projects",
   "sub": "These selected projects explore economic change, human autonomy and possible AI futures. They provide starting points for connecting scenarios to indicators that this dashboard could track; the selection is incomplete.",
   "items": [
    {
     "tag": "Economic research",
     "title": "Economic impacts of frontier AI",
     "org": "SPAR / Rishi Bommasani",
     "line": "Explores how AI spreads through work, how households substitute AI for labour, and how new tasks emerge. It also examines links between benchmark performance and economic indicators.",
     "url": "https://www.sparai.org/projects/f26/rec2PlDq9OODdId2k/"
    },
    {
     "tag": "Labour disruption",
     "title": "From AI exposure to economic shock",
     "org": "SPAR / AI Safety Asia",
     "line": "Explores how indicators could give early warning of labour disruption in Southeast Asia, and how different scenarios could inform policy responses.",
     "url": "https://www.sparai.org/projects/f26/rec6h6JTLiswjlgL9/"
    },
    {
     "tag": "Human autonomy",
     "title": "Human autonomy in the age of machines",
     "org": "SPAR / Joshua Krook",
     "line": "Examines how law and policy could protect people's autonomy, freedom of thought and ability to make decisions as AI takes on more responsibilities.",
     "url": "https://www.sparai.org/projects/f26/recgG94Smce7E8J7G/"
    },
    {
     "tag": "Formal model",
     "title": "Loss of human agency: agent-based model",
     "org": "SPAR",
     "line": "Uses formal and computational modelling to explore how people could lose the ability to act and decide, where tipping points might arise, and what early warning could look like.",
     "url": "https://www.sparai.org/projects/f26/reck9hzkSGAMop7vj/"
    },
    {
     "tag": "Scenario work",
     "title": "AI Futures Project at MATS",
     "org": "MATS / AI Futures Project",
     "line": "Develops forecasts and scenarios about AI's future, including economic effects, the pace of capability growth and implications for policy.",
     "url": "https://www.matsprogram.org/stream/aifp?cebe326e_page=3"
    },
    {
     "tag": "Forecasting",
     "title": "Metaculus stream at MATS",
     "org": "MATS / Deger Turan",
     "line": "Uses forecasting and models of possible futures to explore how AI spreads, how labour unions respond, and how technological uncertainty relates to gradual disempowerment.",
     "url": "https://www.matsprogram.org/stream/turan"
    }
   ]
  },
  "directions": {
   "title": "Possible directions for this dashboard",
   "sub": "These proposals would connect claims about the future to evidence that can be checked over time. Their scope and feasibility still need review.",
   "items": [
    {
     "tag": "Proposed",
     "title": "Quiet Handoff scenario tracker",
     "line": "Develop a 2027-2032 scenario with claims that can be tracked about delegation, skills, culture, institutions and human influence."
    },
    {
     "tag": "Proposed",
     "title": "Government decision accountability",
     "line": "Track whether public bodies report how many decisions involve AI, how people review or override them, and what happens when decisions are appealed."
    },
    {
     "tag": "Proposed",
     "title": "Skills without AI",
     "line": "Map the evidence on skills and judgement without AI, how accurately people assess their own ability, and how performance recovers after AI is removed."
    },
    {
     "tag": "Proposed",
     "title": "Culture and attention",
     "line": "Track how audience attention, trust and creator income are distributed as AI-generated content becomes more common."
    }
   ]
  },
  "toGap": "Explore what is needed to measure human influence →",
  "blocks": {
   "fan": "This draft compares recorded workers' income shares with economists' forecasts. Differences in source baselines still need review.",
   "routes": "These five scenarios explore how AI capability, use and human influence could develop, including the possibility that progress slows. Each suggests changes that could help assess whether events are following that path.",
   "trust": "Forecasts depend on the question asked, the assumptions made and the people responding. The notes below discuss past performance and reasons for caution; these summaries still need verification.",
   "more": "Explore unverified forecasts of the economy under different AI scenarios, estimates of unemployment, and expert assessments of catastrophic risk."
  },
  "routeDesc": {
   "A": "AI raises productivity while people retain skills, jobs and influence over decisions.",
   "B": "Entry-level work shrinks, reducing opportunities for people to build skills.",
   "C": "Institutions give AI a greater role in decisions faster than human oversight develops.",
   "D": "Skills, institutions and alternatives weaken, making it harder for people to take tasks back.",
   "E": "Slower progress, limited adoption or regulatory constraints interrupt the pathway before later changes develop."
  },
  "routesNote": "The dashboard developed these scenarios. Their assumptions and signposts remain unverified. A signpost labelled \"Seen\" is interpreted as consistent with a scenario; it does not establish that the scenario is unfolding.",
  "moreCards": [
   {
    "title": "Three AI-progress scenarios",
    "line": "Compare what economists expect under slow, moderate and rapid AI progress. These extracted forecasts still need verification."
   },
   {
    "title": "Jobs and unemployment",
    "line": "Compare unemployment estimates with different populations, time horizons and assumptions about AI progress."
   },
   {
    "title": "Catastrophic-risk estimates",
    "line": "Review unverified expert estimates of catastrophic harm by 2030, including harm from concentrated power."
   }
  ]
 },
 "caveats": {
  "oneOff": {
   "label": "One-off study",
   "tooltip": "No repeated series: a single study or snapshot. It shows one moment, not a trend."
  },
  "cause": {
   "label": "Cause disputed",
   "tooltip": "The data moved, but researchers disagree on whether AI caused it. Other explanations fit too."
  },
  "company": {
   "label": "Company's own data",
   "tooltip": "Published by the company whose product is measured. Useful, but no independent source confirms it."
  },
  "definition": {
   "label": "Definitions differ",
   "tooltip": "Wording or definitions differ between sources or changed mid-series. Compare levels with care."
  },
  "unverified": {
   "label": "Unverified figure",
   "tooltip": "Taken from press or a secondary source, or read once. Check the original before citing."
  },
  "policy": {
   "label": "Policy-driven",
   "tooltip": "The latest change follows a change in law or policy, not AI. Read it as background to the AI question."
  },
  "advocacy": {
   "label": "Advocacy source",
   "tooltip": "Compiled by an advocacy group from public records. Useful, but check its method and definitions before citing."
  },
  "forecast": {
   "label": "Forecast, not data",
   "tooltip": "A published prediction or model scenario. It shows what forecasters expect, not what has happened."
  },
  "stale": {
   "label": "Not updated",
   "tooltip": "The source has stopped updating this series, or has published no new reading for some time. Newer data may differ."
  },
  "more": "Why this matters →"
 },
 "draftChip": {
  "label": "Draft",
  "tooltip": "Draft dashboard. Headline figures are being checked before v1.0; check a source before citing."
 },
 "method": {
  "title": "Method, ratings and source status",
  "contents": [
   "Status",
   "Scales",
   "Ratings",
   "Charts",
   "Tags",
   "Limits",
   "Terms",
   "Sources"
  ],
  "headings": {
   "status": "Status of the figures",
   "families": "The site uses four labels: what the data show, how well a step is measured, what a missing measure needs next, and whether a page is still draft or work in progress. Source tags and caveats appear inside charts.",
   "priority": "What a missing measure needs next",
   "priorityIntro": "Used on the Gaps page. An initial editorial assessment.",
   "criteria": "How indicators are chosen",
   "criteriaText": "An indicator is listed when it comes from an established source and measures the step directly. Nearby measures are used only where nothing better exists, and are marked as such.",
   "challenge": "Challenge a rating",
   "challengeUrl": "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=correction.yml&title=%5BCorrection%5D%20Rating%3A%20",
   "measured": "How well a link is measured",
   "change": "What the data show",
   "ratings": "How each rating is reached",
   "charts": "How to read the charts",
   "tags": "Tags on each chart",
   "limits": "Known limits",
   "stops": "What is counted at each stop",
   "terms": "Terms used on this site",
   "sources": "Sources"
  },
  "rewrites": [
   {
    "where": "The measurement record (Method)",
    "old": "The strip chart on the home page shows every dated reading plotted on the evidence pages from 2021 onwards. A series is \"direct\" if it measures the quantity the link is named for, and \"nearby\" if it is a proxy, a count of paperwork or an opinion poll. Whether a change can be tied to AI is weighed in the rating, not in the colour. The split is an editorial judgement; the chart's data table lists every series.",
    "new": "The measurement record puts the dated readings behind this site since 2021 on one timeline. Blue marks measure the link itself; grey marks measure something nearby, such as a proxy or a poll. The split is a judgement. See the record →"
   },
   {
    "where": "What is counted at each stop",
    "old": "The early stops are defined by things that are easy to count. The later ones are defined by what the theory needs to know. Part of the fall-off in evidence along the chain comes from that difference, so the fairer summary is this: use is counted at most stages, and consequences that can be tied to AI are counted at almost none.",
    "new": "Early stops are defined by what is easy to count; later ones by what the theory needs. Part of the fall-off in evidence is built in. Use is counted at most stages; consequences tied to AI, at almost none."
   },
   {
    "where": "Glossary: Who the sources are",
    "old": "METR: a non-profit that evaluates AI systems. ADP: a US payroll company. BLS: the US Bureau of Labor Statistics. Epoch AI: a research institute that tracks AI trends. HEPI: the UK Higher Education Policy Institute. Graphite and Originality.ai: firms that sell search-marketing services and AI detectors. Challenger: a US outplacement firm that publishes monthly job-cut counts. LEAP: a standing panel of AI experts run by the Forecasting Research Institute. Metaculus: a public forecasting site.",
    "new": "METR: non-profit AI evaluator. ADP: US payroll firm. BLS: US labour statistics agency. Epoch AI: AI-trends institute. HEPI: UK higher-education think tank. Graphite, Originality.ai: sell search marketing and AI detectors. Challenger: US outplacement firm counting job cuts. LEAP: AI-expert panel (Forecasting Research Institute). Metaculus: public forecasting site. Center for AI Safety: non-profit research group. Scale AI: sells training data to AI companies. Public Citizen: US consumer-advocacy group."
   },
   {
    "where": "Status of the figures (becomes the Draft callout)",
    "old": "This is a working draft. The research and figures were compiled by an AI assistant and have not yet been checked by a person. Every chart carries a tag saying how its figures were obtained. Check any figure against its linked source before citing it elsewhere, and treat those tagged \"Secondary source\" or \"Company's own data\" with extra care.",
    "new": "A draft dashboard. AI tools helped find and summarise sources. Headline figures are being checked against primary sources before v1.0; corrections from authors and domain experts are welcome. Each chart is tagged with how its figures were obtained. Check the source before citing, above all for \"Secondary source\" and \"Company's own data\"."
   },
   {
    "where": "Method deck",
    "old": "The dashboard organises published evidence along one causal chain, taken from the argument in Gradual Disempowerment (Kulveit and co-authors, 2025): the economy, culture and the state serve people partly because those systems need people, and AI reduces that need. It collects no data of its own.",
    "new": "Published evidence, arranged along one chain from Gradual Disempowerment (Kulveit and co-authors, 2025): systems serve people partly because they need them, and AI weakens that need. No new data are collected."
   },
   {
    "where": "Known limits: Leans on AI companies",
    "old": "Hand-over rests on Anthropic's and OpenAI's own logs, and parts of capability and skills on company studies. Most of those charts are tagged \"Company's own data\". The main hand-over chart is tagged \"Checked at source\", because its figures were read on Anthropic's own page.",
    "new": "Hand-over rests on Anthropic's and OpenAI's own logs; parts of capability and skills rest on company studies. Most such charts carry the \"Company's own data\" tag; the main hand-over chart is \"Read at source (AI-assisted)\"."
   },
   {
    "where": "How well a link is measured (intro)",
    "old": "A judgement on the best available evidence for the link as an effect of AI, on a five-step scale. On the map, the line into each stop is drawn in the style of that stop's rating.",
    "new": "A judgement, on five steps, of the best evidence for each link as an effect of AI. On the map, line style shows the rating."
   },
   {
    "where": "Known limits: Mostly American",
    "old": "Nearly every series is from the United States or the United Kingdom. No series here tracks China, India or any low-income country on its own, and there is no small-state series such as one for Singapore.",
    "new": "Most series are from the US or UK. None tracks China, India, a low-income country or a small state such as Singapore on its own."
   }
  ],
  "changeScale": {
   "intro": "An editorial judgement, separate from how well a link is measured. It is not severity, probability or proof that AI is the cause.",
   "levels": [
    {
     "key": "4",
     "word": "Changing fast",
     "def": "Repeated, direct data show rapid change in the direction the theory predicts."
    },
    {
     "key": "3",
     "word": "Clearly changing",
     "def": "Repeated data show a clear move in that direction."
    },
    {
     "key": "2",
     "word": "Early or mixed signs",
     "def": "Some data point that way; others do not, or the cause is disputed."
    },
    {
     "key": "1",
     "word": "No clear change yet",
     "def": "Data show little movement, or movement that began before AI."
    },
    {
     "key": "?",
     "word": "Can't tell",
     "def": "Not measured well enough to say. Never read this as \"no change\"."
    }
   ],
   "separate": "The two scales are independent: a link can be well measured and show little change.",
   "trendWords": "Indicator cards use: Rising fast, Rising, Flat, Falling, Mixed, One-off (no trend claimed).",
   "toward": [
    {
     "mark": "Filled dot",
     "def": "Moving the way the theory predicts, and only since generative AI."
    },
    {
     "mark": "Hollow dot",
     "def": "Moving the opposite way."
    },
    {
     "mark": "Half dot",
     "def": "Unclear: began before AI, driven by reporting rules, or no comparison."
    }
   ]
  },
  "footer": "Gradual Disempowerment Dashboard · Better Futures Project · Zhang Yue · Draft, compiled with AI research assistance · data as of {date} · Method and sources"
 },
 "nav": {
  "brand": "Gradual Disempowerment Dashboard",
  "items": [
   {
    "href": "#home",
    "label": "Home"
   },
   {
    "href": "#evidence",
    "label": "Evidence"
   },
   {
    "href": "#gaps",
    "label": "The gap"
   },
   {
    "href": "#futures",
    "label": "Futures",
    "tag": "WIP"
   },
   {
    "href": "#method",
    "label": "Method"
   }
  ],
  "ariaLabel": "Sections"
 },
 "ui": {
  "buttons": {
   "open": "Open",
   "close": "Close",
   "expandAll": "Expand all",
   "collapseAll": "Collapse all",
   "seeChart": "See the chart",
   "backToChain": "Back to the chain",
   "seeRecord": "See the full record",
   "seeGap": "See the gap",
   "why": "Why?",
   "showDetail": "Show detail",
   "hideDetail": "Hide detail"
  },
  "instructions": {
   "indicators": "Select an indicator to see its chart.",
   "map": "Select a stop to open its evidence.",
   "mapLines": "Select a dotted line to see why.",
   "evidenceRows": "Select a row for the detail.",
   "routes": "Select a route to see its signposts.",
   "record": "Select a lane to open its chart.",
   "gaps": "Select a measure to see what it would be."
  },
  "empty": {
   "noIndicators": "No direct measure exists yet. The nearest proxy is below.",
   "noReadings": "No dated readings.",
   "chartFailed": "This chart did not load. The figures are in the data table.",
   "drawerIdle": "Select a line on the map to see how well that stop is measured.",
   "noSources": "No source listed yet."
  }
 }
};
