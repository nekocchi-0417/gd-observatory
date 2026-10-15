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
  "takeaway": "The biggest gaps are in skills, government decisions and human influence.",
  "note": "Provisional, AI-assisted ratings of measurement coverage, not risk. Relevant research may be missing.",
  "bands": {
   "major": {"label": "Major gaps", "short": "Major gaps", "description": "Few direct measures"},
   "partial": {"label": "Partial coverage", "short": "Partial coverage", "description": "Narrow or indirect measures"},
   "stronger": {"label": "Stronger coverage", "short": "Stronger coverage", "description": "Repeated, direct measures"}
  },
  "steps": {
   "capability": {"band": "partial", "prompt": "Whole-workflow reliability", "need": "Test reliable AI performance across whole workflows, including work beyond software.", "why": "Benchmarks measure defined tasks. They offer limited coverage of complete jobs and workflows."},
   "adoption": {"band": "stronger", "prompt": "Depth of use and dependence", "need": "Track how much work is delegated and how people check or replace AI outputs.", "why": "Repeated employee surveys and official business statistics directly measure AI use. They do not measure dependence or decisions delegated."},
   "handover": {"band": "partial", "prompt": "Decisions delegated and reviewed", "need": "Measure which decisions AI makes, which people review, and which people can reverse.", "why": "Provider logs and sector surveys cover some forms of delegation. They do not establish how much decision power people retain."},
   "work": {"band": "partial", "prompt": "AI-linked hiring and training", "need": "Link firms' AI use to junior hiring and training, separating AI from other labour-market changes.", "why": "Payroll and administrative studies cover particular countries and periods. AI exposure and workplace adoption give different comparisons."},
   "share": {"band": "stronger", "prompt": "AI's effect on labour income", "need": "Link labour income to actual AI use at firm and sector level.", "why": "Established official series repeatedly measure workers' share of income. Additional research is needed to identify AI's contribution."},
   "skills": {"band": "major", "prompt": "Skills without AI over time", "need": "Follow the same people over time and test what they can do without AI.", "why": "Short experiments test learning and task performance. Broad, repeated tests of unaided skills are still missing from the selected evidence."},
   "culture": {"band": "partial", "prompt": "Audience attention and creator income", "need": "Track what people read, watch and hear, alongside human creators' income and influence.", "why": "Platform reports and creative-task experiments cover parts of supply, listening and diversity. They do not measure culture-wide human influence."},
   "institutions": {"band": "major", "prompt": "Decision and override rates", "need": "Publish decision volumes, human reviews, overrides and appeal outcomes for high-impact AI systems.", "why": "Inventories count reported uses; operational reports cover isolated systems. Direct, comparable measures of decision control remain limited."},
   "influence": {"band": "major", "prompt": "Real choice and appeal", "need": "Measure whether people can refuse, appeal or reverse decisions, and act without AI.", "why": "Felt-control surveys and exploratory conversation studies offer proxies. They do not directly track people's power over the economy, culture or government."}
  }
 },
 "why": {
  "nav": "Contribute",
  "h1": "Help improve the dashboard",
  "lead": "We're developing this prototype into a regularly updated dashboard on AI and human influence.",
  "audiences": [
   {"name": "Researchers", "text": "Share studies, suggest better indicators, or flag errors."},
   {"name": "Grantmakers", "text": "Support research to fill measurement gaps and help maintain the dashboard."}
  ],
  "plan": {
   "h2": "The plan",
   "steps": [
    {"t": "Review", "text": "Show what is measured and what is missing.", "to": "home"},
    {"t": "Measure", "text": "Turn the biggest gaps into studies.", "to": "gaps"},
    {"t": "Improve", "text": "Use better data to find where action could help most."},
    {"t": "Forecast", "text": "Later, use the indicators to model plausible futures, in the style of", "links": [["AI 2027", "https://ai-2027.com/"], ["AI 2040", "https://ai-2040.com/"]]}
   ],
   "aim": "The aim: a shared dashboard that people can update, audit and fund."
  },
  "contribute": {
   "h2": "Add an indicator or study",
   "text": "Suggest a dataset, study or measure, or flag a mistake. Contributions are reviewed before publication.",
   "buttons": [
    ["Propose an indicator", "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=indicator.yml"],
    ["Share a study", "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=study.yml"],
    ["Suggest a correction", "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=correction.yml"]
   ],
   "note": "Each button opens a short form on GitHub."
  },
  "funding": {
   "h2": "Find or offer funding",
   "text": "For researchers: open grants that fit this work. For funders: the gaps most in need of support.",
   "gapsLink": "The gaps most in need of research",
   "grants": [
    {"name": "Foresight Institute, AI for Science and Safety Nodes", "status": "Closes 31 October 2026", "fit": "The \"Human empowerment\" area asks for evidence on when human oversight adds value.", "url": "https://foresight.org/grants/ai-science-safety-nodes-rfp/"},
    {"name": "GTR AI Safety Fund", "status": "Rolling", "fit": "Names \"the gradual effects of AI on human development and social behaviour\".", "url": "https://www.gtr-foundation.org/gtr-ai-safety-fund"},
    {"name": "EA Funds, Transformative AI Fund", "status": "Rolling", "fit": "Typical grants of $10k to $150k for individuals and small teams.", "url": "https://funds.effectivealtruism.org/funds/transformative-ai"},
    {"name": "Coefficient Giving, capacity-building funding", "status": "Rolling", "fit": "Funds websites, data infrastructure and public discussion, not research itself.", "url": "https://coefficientgiving.org/funds/navigating-transformative-ai/funding-for-work-that-builds-capacity-to-address-risks-from-transformative-ai/"}
   ],
   "note": "No funding call is dedicated to gradual disempowerment. Checked at source on 13 October 2026."
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
    "title": "Track reliable task completion beyond technical work",
    "why": "The theory needs AI able to do the casework and management institutions run on, not only code.",
    "what": "METR-style task-length tests for casework, negotiation and management, re-run on each new model by an independent evaluator.",
    "closest": "METR measures technical-task horizons; its tracker is no longer actively updated. The Remote Labor Index adds professional projects, with different scoring and coverage. See the selected capability sources."
   },
   {
    "i": 14,
    "link": "capability",
    "old": "Reliability on real work",
    "chip": "Partial coverage",
    "title": "Test reliability across complete real-world workflows",
    "why": "A system that succeeds once may fail the next time; institutions need work done right every time.",
    "what": "The same real tasks run many times by an independent evaluator, reporting how often AI succeeds on every run.",
    "closest": "METR explicitly measures task completion at a chosen success rate. Its technical-task coverage does not establish reliability across whole jobs."
   },
   {
    "i": 15,
    "link": "capability",
    "old": "Cost per completed real task",
    "chip": "Partial coverage",
    "title": "Track the full cost of completing work with AI",
    "why": "Cheaper answers do not mean cheaper work; whether firms hand work to AI depends on what a finished job costs.",
    "what": "The full cost of finishing real tasks with AI, including reruns and checking, tracked for each new model.",
    "closest": "The selected capability benchmarks measure completion or reliability, not the full cost of deployment, retries and human review."
   },
   {
    "i": 16,
    "link": "capability",
    "old": "Lab-to-life gap",
    "chip": "One-off only",
    "title": "Compare benchmark scores with results for real users",
    "why": "Benchmarks may overstate what people actually get from AI, so capability can look further ahead than its use.",
    "what": "For each new model, its benchmark score set against the results real users get on the same kind of task.",
    "closest": "The capability page separates controlled benchmarks from performance across whole jobs. A repeated comparison with real users remains a monitoring priority."
   },
   {
    "i": 1,
    "link": "adoption",
    "old": "Work hours done with AI, by occupation",
    "chip": "Partial coverage",
    "title": "Measure how much working time involves AI, by job",
    "why": "Yes-or-no use hides depth; hours show how much work AI is actually part of.",
    "what": "A quarterly official survey reporting the share of work hours done with AI, broken down by occupation.",
    "closest": "Gallup tracks regular use; the RPS work-hours indicator linked on the adoption page estimates time involving AI. Neither directly measures work handed over or checked."
   },
   {
    "i": 2,
    "link": "handover",
    "old": "The review rate",
    "chip": "Company data only",
    "title": "Count meaningful checks of AI output across providers",
    "why": "Checking is the line between delegating a task and losing track of it.",
    "what": "For each task AI completes, whether a person checked the output before it was used, across providers, on one definition.",
    "closest": "Anthropic classifies automation and augmentation in conversations. Those patterns do not show whether people checked or used an output."
   },
   {
    "i": 3,
    "link": "work",
    "old": "Junior hiring inside firms that adopt AI",
    "chip": "Not tied to AI",
    "title": "Link junior hiring to firms' actual AI adoption",
    "why": "It would help separate AI's contribution from other changes in demand for junior workers.",
    "what": "Payroll data linking the date a firm adopted AI to its hiring by seniority, updated regularly.",
    "closest": "Stanford/ADP tracks age and occupational exposure, not adoption. Humlum and Vestergaard link Danish adoption reports to administrative outcomes, but in a different period and setting."
   },
   {
    "i": 4,
    "link": "share",
    "old": "AI capital's share of income",
    "chip": "No measure exists",
    "title": "Separate AI-related income shifts from other changes",
    "why": "It would show whether money once paid as wages is going to AI owners instead.",
    "what": "National accounts that split capital income into AI-related and other, so changes in workers' share can be traced.",
    "closest": "ILO global labour income share and BLS US nonfarm-business labour share. Neither attributes changes to AI or identifies who owns AI-related capital."
   },
   {
    "i": 5,
    "link": "skills",
    "old": "Unaided ability, tested twice",
    "chip": "Partial coverage",
    "title": "Re-test unaided skills alongside recorded AI use",
    "why": "Repeat tests help distinguish lasting learning or skill loss from short-term performance changes.",
    "what": "A panel of workers, students or clinicians, tested on set tasks without AI every year, alongside a record of their AI use.",
    "closest": "Bastani et al. test unaided maths performance immediately after practice. The guided tutor and unrestricted tool have different results; neither estimates population-wide long-term change."
   },
   {
    "i": 6,
    "link": "skills",
    "old": "Take-back time",
    "chip": "No measure exists",
    "title": "Measure recovery after AI is withdrawn",
    "why": "It shows whether people could take a task back: the difference between reliance and lock-in.",
    "what": "Withdraw AI from a group for a week or a month and measure how long their performance takes to recover.",
    "closest": "The selected classroom trial tests performance without AI but does not follow recovery over months."
   },
   {
    "i": 17,
    "link": "skills",
    "old": "Dependence checked against behaviour",
    "chip": "Partial coverage",
    "title": "Check reported AI dependence against behaviour",
    "why": "Without a check against behaviour, a dependence score may label ordinary use as a problem, or miss real dependence.",
    "what": "A short dependence scale tested on the same people against their AI use and their performance without AI, with agreed cut-offs and a representative sample.",
    "closest": "The current shortlist does not contain a validated dependence measure linked to repeated unaided performance. This is a gap in this selection, not proof that no relevant study exists."
   },
   {
    "i": 18,
    "link": "skills",
    "old": "Benchmark-to-person link",
    "chip": "No measure exists",
    "title": "Link model behaviour to outcomes for its users",
    "why": "Benchmarks count what models do, such as flattery or manipulation, not whether users' skills or beliefs change. User satisfaction is not a safe guide either.",
    "what": "Studies that give people models with different benchmark scores and measure what changes in those people over time.",
    "closest": "Anthropic's disempowerment study classifies potential risks in conversations, not lasting changes in people's beliefs or agency. It is linked on the human influence page."
   },
   {
    "i": 7,
    "link": "culture",
    "old": "Attention-weighted AI share",
    "chip": "Company data only",
    "title": "Measure human attention to AI-made content across platforms",
    "why": "AI-made content floods supply; the theory turns on how much of it people actually take in.",
    "what": "The share of minutes read, watched or heard that is AI-made, reported by platform, every quarter.",
    "closest": "Deezer reports 1–3% of recorded streams for fully AI-generated tracks. Fraud and recommendation exclusions prevent a clean measure of human listening."
   },
   {
    "i": 8,
    "link": "culture",
    "old": "Convergence in what gets published",
    "chip": "No measure exists",
    "title": "Track diversity in published work over time",
    "why": "If AI makes what is published more uniform, the range of ideas people meet could narrow.",
    "what": "A yearly index of diversity in vocabulary, style and subject across published text, music and images.",
    "closest": "Doshi and Hauser find higher creativity ratings but more similarity in AI-assisted short stories. That experiment is not a trend in published culture."
   },
   {
    "i": 9,
    "link": "institutions",
    "old": "Decisions made by AI",
    "chip": "Partial coverage",
    "title": "Count decisions made with AI, not just applications",
    "why": "Disclosures list tools; only decision counts show how much of the state's work runs through AI.",
    "what": "For each high-impact system, decisions per year: fully automated, AI-recommended with sign-off, or made by a person alone.",
    "closest": "The US inventory lists 3,611 use cases. The Metropolitan Police report 2,077 facial-recognition alerts in one year. These count different things; neither is a government-wide decision count."
   },
   {
    "i": 10,
    "link": "institutions",
    "old": "The override rate",
    "chip": "No measure exists",
    "title": "Publish human reviews, overrides and appeals",
    "why": "An override rate alone cannot establish meaningful control; reviewers' opportunities, reasons and outcomes also matter.",
    "what": "The share of AI recommendations the responsible official changes, with time spent per case, published for each high-impact system.",
    "closest": "The OMB inventory records reported applications and some safeguards, not comparable rates of substantive review and successful appeals. Missing fields do not prove safeguards are absent."
   },
   {
    "i": 11,
    "link": "institutions",
    "old": "Dependence on foreign model providers",
    "chip": "No measure exists",
    "title": "Track public-sector dependence on model providers",
    "why": "States that buy rather than build AI may lose the ability to change or replace it.",
    "what": "Share of public-sector AI spending and queries by vendor and the vendor's home country, published yearly.",
    "closest": "Public inventories can identify some systems and vendors. Counts of listed tools do not measure spending, query volume or the practical ability to switch suppliers."
   },
   {
    "i": 12,
    "link": "influence",
    "old": "Who can decide",
    "chip": "No measure exists",
    "title": "Observe who can make, refuse or reverse a decision",
    "why": "This is the outcome itself: whether people, not systems, still settle what happens.",
    "what": "For real institutions, the smallest group able to settle an outcome, and the mix of people and AI systems in it.",
    "closest": "Pew measures felt control; Anthropic studies conversational risk. Neither is a validated measure of decision authority across institutions."
   },
   {
    "i": 13,
    "link": "influence",
    "old": "A population measure of disempowerment",
    "chip": "Definitions differ",
    "title": "Pair repeated surveys of control with observed choices",
    "why": "It is the nearest population-wide signal of the outcome, and cheap enough to repeat every year.",
    "what": "A tested survey scale, paired with simple behavioural tasks, put to the same people every year.",
    "closest": "Pew reports 57% of US adults felt little or no control in June 2025. Its topline includes earlier responses, but neither wave shows how much actual authority people have."
   }
  ]
 },
 "futures": {
  "nav": "Futures",
  "navTag": "WIP",
  "title": "Futures, work in progress",
  "wipTag": "Work in progress",
  "caveat": "Work in progress. This page is an overview of related projects, not a literature review. It tracks adjacent work and possible scenario directions before choosing what to build.",
  "landscape": {
   "title": "Relevant work to avoid duplicating",
   "sub": "Labour impacts, economic shock and formal agency-loss models are already active areas. This dashboard can connect these projects through shared indicators and measurement gaps.",
   "items": [
    {
     "tag": "Crowded",
     "title": "Economic impacts of frontier AI",
     "org": "SPAR / Rishi Bommasani",
     "line": "AI diffusion through work, household substitution for labour, new tasks and links between benchmarks and economic indicators.",
     "url": "https://www.sparai.org/projects/f26/rec2PlDq9OODdId2k/"
    },
    {
     "tag": "Close overlap",
     "title": "From AI exposure to economic shock",
     "org": "SPAR / AI Safety Asia",
     "line": "Early-warning indicators, transition scenarios and policy triggers for AI-driven labour disruption in Southeast Asia.",
     "url": "https://www.sparai.org/projects/f26/rec6h6JTLiswjlgL9/"
    },
    {
     "tag": "Close overlap",
     "title": "Human autonomy in the age of machines",
     "org": "SPAR / Joshua Krook",
     "line": "Policy and legal work on protecting human autonomy, thought and decision-making under gradual disempowerment.",
     "url": "https://www.sparai.org/projects/f26/recgG94Smce7E8J7G/"
    },
    {
     "tag": "Formal model",
     "title": "Loss of human agency: agent-based model",
     "org": "SPAR",
     "line": "A formal and computational model of agency loss, tipping surfaces and early-warning indicators.",
     "url": "https://www.sparai.org/projects/f26/reck9hzkSGAMop7vj/"
    },
    {
     "tag": "Scenario work",
     "title": "AI Futures Project at MATS",
     "org": "MATS / AI Futures Project",
     "line": "Scenario forecasting, economic modelling, takeoff modelling and policy-relevant AI futures work.",
     "url": "https://www.matsprogram.org/stream/aifp?cebe326e_page=3"
    },
    {
     "tag": "Forecasting",
     "title": "Metaculus stream at MATS",
     "org": "MATS / Deger Turan",
     "line": "Forecasting, world-modelling, AI diffusion, labour unions, technological uncertainty and gradual disempowerment.",
     "url": "https://www.matsprogram.org/stream/turan"
    }
   ]
  },
  "directions": {
   "title": "Promising directions for this dashboard",
   "sub": "These look less duplicative than another labour-displacement model. They fit a public dashboard: scenario claims, indicators, and missing measures.",
   "items": [
    {
     "tag": "Coming soon",
     "title": "Quiet Handoff scenario tracker",
     "line": "A 2027-2032 scenario with trackable claims across delegation, skills, culture, institutions and human influence."
    },
    {
     "tag": "Coming soon",
     "title": "Government decision accountability",
     "line": "Track whether public-sector AI disclosure moves from inventories to decision counts, review rates, overrides and appeals."
    },
    {
     "tag": "Coming soon",
     "title": "Skills without AI",
     "line": "A heatmap of what is known about unaided skill, calibration, judgement and recovery after AI is removed."
    },
    {
     "tag": "Coming soon",
     "title": "Culture and attention",
     "line": "Move beyond AI content supply and ask what share of attention, trust and creator income remains human-led."
    }
   ]
  },
  "toGap": "Almost no forecast covers people's say itself. See the gap →",
  "blocks": {
   "fan": "Workers' share so far, against economists' forecasts: a slow squeeze, not a crash.",
   "routes": "Five ways the chain could unfold, including a plateau, each with signposts to watch.",
   "trust": "Past forecasts underestimated AI capability, were mixed on uptake, and shift with question wording.",
   "more": "More forecasts: AI-progress scenarios, jobs and unemployment, and expert estimates of catastrophic risk."
  },
  "routeDesc": {
   "A": "AI raises productivity; people keep skills, jobs and say.",
   "B": "Entry-level work shrinks, so fewer people build skills.",
   "C": "Institutions route decisions through AI faster than oversight grows.",
   "D": "Skills, institutions and alternatives decay; taking tasks back is hard.",
   "E": "Progress, uptake or rules stall before later links move."
  },
  "routesNote": "The routes are the dashboard's own. \"Seen\" means consistent with a route, not proof of it.",
  "moreCards": [
   {
    "title": "Three AI-progress scenarios",
    "line": "What economists expect under slow, moderate and rapid AI progress."
   },
   {
    "title": "Jobs and unemployment",
    "line": "Survey forecasts stay in single digits, except for new graduates."
   },
   {
    "title": "Catastrophic-risk estimates",
    "line": "Expert odds of catastrophic harm by 2030, including power centralisation."
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
