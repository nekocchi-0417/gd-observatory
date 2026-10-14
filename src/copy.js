/* v5 copy deck (comms agent, edited after the researcher review, 8 Oct 2026; updated for draft v0.5 from landscape scan 4.0 and review 3.0, 12 Oct 2026) */
const COPY={
 "home": {
  "eyebrow": "Better Futures Project · Zhang Yue",
  "paper": {"label": "Read more", "url": "https://gradual-disempowerment.ai/"},
  "purpose": {
   "h1": "AI disempowerment: what is measured, what is missing",
   "sub": "A draft map of nine steps from AI capability to human influence. It separates early signs from the measurement gaps."
  },
  "paths": {
   "items": [
    {"who": "Researchers", "line": "Inspect the evidence and suggest better indicators or studies.", "to": "evidence"},
    {"who": "Funders", "line": "Find under-measured gaps that could become fundable projects.", "to": "gaps"}
   ]
  },
  "mapNote": ["What is already measured?", "What is missing?", "And where would new research or funding matter most?"],
  "snapshot": {
   "h2": "The picture so far",
   "sub": "The early steps are measured often. The human end of the chain is still mostly proxies, one-off studies and paperwork.",
   "items": [
    {"k": "Measured often", "t": "Capability and use", "text": "AI is completing more real work, and roughly half of US workers report using AI at work."},
    {"k": "Early signs", "t": "Jobs, culture, institutions", "text": "Young workers in exposed jobs are falling behind; AI-made content is growing; governments list tools, not decisions."},
    {"k": "Hard to see", "t": "Skills and influence", "text": "We still lack repeat tests of unaided ability and a direct measure of whether people keep their say."}
   ]
  },
  "gaps3": {
   "h2": "Start with three missing measures",
   "sub": "These are close to the outcome and hard to verify from today's sources.",
   "items": [
    {"id": "influence", "t": "Human influence is not directly measured", "text": "A repeated survey and behavioural measure of whether AI changes people's influence over firms, media and government."},
    {"id": "skills", "t": "Unaided skills are rarely re-tested", "text": "Panel studies that re-test the same people without AI while tracking their AI use."},
    {"id": "institutions", "t": "AI-assisted public decisions are rarely counted", "text": "Counts of AI-assisted decisions, review time and override rates for high-impact government systems."}
   ],
   "all": "The full agenda: {n} missing measures"
  },
  "cta": {
   "h2": "Help make the dashboard real",
   "buttons": [
    {"t": "Add an indicator or study", "to": "contribute/add"},
    {"t": "Find or offer funding", "to": "contribute/funding"},
    {"t": "Suggest a correction", "to": "contribute/authors"}
   ],
   "why": "Why this project"
  },
  "legend3": {"lead": "How well measured", "items": {"3": "Well measured", "2": "Partly measured", "1": "Barely measured"}},
  "card": {
   "open": "See the evidence", "openEnd": "See the gap", "next": "Next", "again": "Start again",
   "what": {
    "capability": "Researchers hand AI paid remote-work projects. The best systems complete about 1 in 5 to a professional standard, up from 1 in 40 in October 2025.",
    "adoption": "A colleague drafts a report with AI. In August 2026, 53% of US workers used AI at work; 16% used it daily.",
    "handover": "A developer hands AI a whole task. Developers using AI agents rose from 31% to 59% in a year; in Claude chats, hand-overs are flat.",
    "work": "A 23-year-old looks for a first job. In the most AI-exposed occupations, US employment of 22–25-year-olds is about 19% below trend; the cause is disputed.",
    "share": "A worker opens her payslip. Workers' share of US business income is a record-low 52.8% (Q2 2026), but it was falling before AI.",
    "skills": "A learner gets answers from AI. Short trials find people learn less that way; a three-year clinic audit found no loss of skill.",
    "culture": "A listener presses play. Over half of Deezer uploads and about half of new web articles are AI-made, but AI tracks get 1–3% of streams.",
    "institutions": "An official signs off an AI-drafted decision. Governments disclose thousands of AI uses (US federal: 3,611 in 2025), but almost none count AI-assisted decisions.",
    "influence": "You vote, shop and speak up. Nothing directly measures whether people still have a say over the economy, culture and the state."
   }
  },
  "headline": "We cannot steer what we do not measure."

 },
 "why": {
  "nav": "Contribute",
  "h1": "Help improve the map",
  "lead": "This is a prototype for a live dashboard. Send better evidence, point out mistakes, or help fund the missing measures.",
  "plan": {
   "h2": "The plan",
   "steps": [
    {"t": "Map", "text": "Show what is measured and what is missing.", "to": "map"},
    {"t": "Measure", "text": "Turn the biggest gaps into studies.", "to": "gaps"},
    {"t": "Improve", "text": "Use better data to find where action could help most."},
    {"t": "Forecast", "text": "Later, use the indicators to model plausible futures, in the style of", "links": [["AI 2027", "https://ai-2027.com/"], ["AI 2040", "https://ai-2040.com/"]]}
   ],
   "aim": "The aim: a shared dashboard and library that people can update, audit and fund."
  },
  "contribute": {
   "h2": "Add an indicator or study",
   "text": "Suggest a dataset, study or measure that should be added. Every proposal is reviewed and credited.",
   "buttons": [
    ["Propose an indicator", "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=indicator.yml"],
    ["Share a study", "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=study.yml"]
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
  "authors": {
   "h2": "For the authors of the paper",
   "text": "The map arranges published evidence along the argument in Gradual Disempowerment (Kulveit and co-authors, 2025). Check the steps, definitions and ratings; then tell us what is wrong.",
   "buttons": [
    ["What is counted at each step", "#method/more"],
    ["Suggest a correction", "https://github.com/nekocchi-0417/gd-observatory/issues/new?template=correction.yml"]
   ]
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
  "deck": "One row per step. Colour shows whether the evidence is moving; line style shows how well that step is measured.",
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
  "judgementTip": "The observatory's judgement of how far the data have moved. Not a measure of cause or harm.",
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
   "counter": "What would count against the theory →",
   "toGap": "Why the human end is uncertain →"
  },
  "counter": {
   "intro": "The theory can fail. Each of these would count against it.",
   "items": [
    {
     "label": "Young workers catch up",
     "text": "Jobs for 22 to 25 year olds in exposed fields rejoin their peers' path."
    },
    {
     "label": "Workers' share recovers",
     "text": "Its four-quarter average climbs back above the 2025 level."
    },
    {
     "label": "Skills hold up",
     "text": "Repeated tests find unaided ability stable among heavy AI users, as one Japanese clinic has."
    },
    {
     "label": "Officials overrule the machine",
     "text": "Published override rates show officials changing a substantial share of AI advice."
    },
    {
     "label": "Attention stays with people",
     "text": "AI-made work stays a small share of what people read and hear."
    }
   ]
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
  "sentence": "Six gaps are ready for a study, six need method work, and seven should be watched. Each row shows the closest existing evidence and what a team could build next.",
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
  "ranking": {"title": "How the ranking was made", "sub": "Each step is ranked by two things: how close it is to Human influence, and how well it is measured today. The priority labels are a first pass; corrections welcome."},
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
   "caption": "Dots are placed by closeness to Human influence and by measurement quality. Both are judgement calls by this project.",
   "flag": "Worth working on",
   "flagAlt": "Author's focus",
   "disclosure": "The author works on Skills and judgement and Human influence; Skills and judgement is her addition to the original chain (see Method).",
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
    "title": "Task lengths have been tracked over time for software work only",
    "why": "The theory needs AI able to do the casework and management institutions run on, not only code.",
    "what": "METR-style task-length tests for casework, negotiation and management, re-run on each new model by an independent evaluator.",
    "closest": "METR tracked software, machine learning and security, adding no model after May 2026; a 2025 one-off covered maths, computer use and driving. The Remote Labor Index scores real freelance projects, but not task length."
   },
   {
    "i": 14,
    "link": "capability",
    "old": "Reliability on real work",
    "chip": "Partial coverage",
    "title": "No independent, repeated test of AI reliability on real work",
    "why": "A system that succeeds once may fail the next time; institutions need work done right every time.",
    "what": "The same real tasks run many times by an independent evaluator, reporting how often AI succeeds on every run.",
    "closest": "Princeton's agent reliability tracker measures reliability on benchmark tasks only: accuracy 17 to 80%, reliability 0.69 to 0.87 across 15 agents."
   },
   {
    "i": 15,
    "link": "capability",
    "old": "Cost per completed real task",
    "chip": "Partial coverage",
    "title": "No series of what a finished real task costs",
    "why": "Cheaper answers do not mean cheaper work; whether firms hand work to AI depends on what a finished job costs.",
    "what": "The full cost of finishing real tasks with AI, including reruns and checking, tracked for each new model.",
    "closest": "Epoch AI tracks the cost of reaching a fixed benchmark score, about 13 times cheaper each year; that covers benchmark questions, not real work."
   },
   {
    "i": 16,
    "link": "capability",
    "old": "Lab-to-life gap",
    "chip": "One-off only",
    "title": "No repeated comparison of benchmark scores with real users' results",
    "why": "Benchmarks may overstate what people actually get from AI, so capability can look further ahead than its use.",
    "what": "For each new model, its benchmark score set against the results real users get on the same kind of task.",
    "closest": "One UK trial: AI models alone named the right medical condition in 94.9% of cases; members of the public using them, in under 34.5% (Bean et al. 2026)."
   },
   {
    "i": 1,
    "link": "adoption",
    "old": "Work hours done with AI, by occupation",
    "chip": "Partial coverage",
    "title": "No official count of hours worked with AI, by job",
    "why": "Yes-or-no use hides depth; hours show how much work AI is actually part of.",
    "what": "A quarterly official survey reporting the share of work hours done with AI, broken down by occupation.",
    "closest": "The St. Louis Fed publishes a quarterly series, also by occupation group, from an online panel: 6.3% of US work hours in Q2 2026. No statistics agency measures it."
   },
   {
    "i": 2,
    "link": "handover",
    "old": "The review rate",
    "chip": "Company data only",
    "title": "No cross-company count of how often people check AI output",
    "why": "Checking is the line between delegating a task and losing track of it.",
    "what": "For each task AI completes, whether a person checked the output before it was used, across providers, on one definition.",
    "closest": "Anthropic reports a human in the loop for at most 73% of agent actions on its public API; one company, one period."
   },
   {
    "i": 3,
    "link": "work",
    "old": "Junior hiring inside firms that adopt AI",
    "chip": "Not tied to AI",
    "title": "No regular tracking of junior hiring inside firms that adopt AI",
    "why": "It would show whether AI, rather than interest rates, is cutting first jobs.",
    "what": "Payroll data linking the date a firm adopted AI to its hiring by seniority, updated regularly.",
    "closest": "Stanford and ADP track jobs by age and occupation, not by firm adoption. One 2026 paper (Hosseini and Lichtinger) finds junior employment about 9% lower after six quarters at firms that adopted generative AI, through slower hiring; senior employment unchanged."
   },
   {
    "i": 4,
    "link": "share",
    "old": "AI capital's share of income",
    "chip": "No measure exists",
    "title": "No estimate of how much income goes to AI capital",
    "why": "It would show whether money once paid as wages is going to AI owners instead.",
    "what": "National accounts that split capital income into AI-related and other, so changes in workers' share can be traced.",
    "closest": "The BLS labour share, which cannot separate AI, and press figures on big-tech capital spending."
   },
   {
    "i": 5,
    "link": "skills",
    "old": "Unaided ability, tested twice",
    "chip": "Partial coverage",
    "title": "No general panel re-tests unaided skills alongside AI use",
    "why": "Only repeat tests on the same people can show skills fading as AI use grows.",
    "what": "A panel of workers, students or clinicians, tested on set tasks without AI every year, alongside a record of their AI use.",
    "closest": "Of 233 studies of generative AI found, only 4 test the same people without AI over months, all narrow. Two clinic audits disagree: one found a loss, a three-year study found none. In one call centre, workers kept their gains during AI outages."
   },
   {
    "i": 6,
    "link": "skills",
    "old": "Take-back time",
    "chip": "No measure exists",
    "title": "No measure of how fast skills recover without AI",
    "why": "It shows whether people could take a task back: the difference between reliance and lock-in.",
    "what": "Withdraw AI from a group for a week or a month and measure how long their performance takes to recover.",
    "closest": "None found. Every withdrawal test found is a single check, minutes to weeks later. In METR's 2026 study, 30 to 50% of developers avoided tasks they would have had to do unaided."
   },
   {
    "i": 17,
    "link": "skills",
    "old": "Dependence checked against behaviour",
    "chip": "Partial coverage",
    "title": "No AI-dependence questionnaire checked against what people do",
    "why": "Without a check against behaviour, a dependence score may label ordinary use as a problem, or miss real dependence.",
    "what": "A short dependence scale tested on the same people against their AI use and their performance without AI, with agreed cut-offs and a representative sample.",
    "closest": "At least eight AI-dependence scales exist; none has been checked against behaviour or unaided ability, and none has a cut-off or a representative sample."
   },
   {
    "i": 18,
    "link": "skills",
    "old": "Benchmark-to-person link",
    "chip": "No measure exists",
    "title": "No model benchmark linked to what happens to its users",
    "why": "Benchmarks count what models do, such as flattery or manipulation, not whether users' skills or beliefs change. User satisfaction is not a safe guide either.",
    "what": "Studies that give people models with different benchmark scores and measure what changes in those people over time.",
    "closest": "When Google DeepMind measured both, how often a model used manipulative tactics did not predict how much people's beliefs changed (Akbulut et al. 2026). Users rated more disempowering conversations more highly (Sharma et al. 2026)."
   },
   {
    "i": 7,
    "link": "culture",
    "old": "Attention-weighted AI share",
    "chip": "Company data only",
    "title": "Only one platform reports attention to AI-made content",
    "why": "AI-made content floods supply; the theory turns on how much of it people actually take in.",
    "what": "The share of minutes read, watched or heard that is AI-made, reported by platform, every quarter.",
    "closest": "Deezer reports AI tracks at 1 to 3% of its streams; no other platform's figure was found."
   },
   {
    "i": 8,
    "link": "culture",
    "old": "Convergence in what gets published",
    "chip": "No measure exists",
    "title": "No yearly measure of whether published work grows more alike",
    "why": "If AI makes what is published more uniform, the range of ideas people meet could narrow.",
    "what": "A yearly index of diversity in vocabulary, style and subject across published text, music and images.",
    "closest": "Lab experiments only; no repeated measure of published work was found."
   },
   {
    "i": 9,
    "link": "institutions",
    "old": "Decisions made by AI",
    "chip": "Partial coverage",
    "title": "Almost no government counts its decisions made with AI",
    "why": "Disclosures list tools; only decision counts show how much of the state's work runs through AI.",
    "what": "For each high-impact system, decisions per year: fully automated, AI-recommended with sign-off, or made by a person alone.",
    "closest": "Registers list AI uses (3,611 in the US federal inventory), not decisions. London's Metropolitan Police count face-matching alerts (2,077 in a year). EU online platforms flag automation for each moderation decision (43% fully automated)."
   },
   {
    "i": 10,
    "link": "institutions",
    "old": "The override rate",
    "chip": "No measure exists",
    "title": "Governments rarely publish how often officials overrule AI",
    "why": "If officials almost never overrule AI, human sign-off is a formality, not control.",
    "what": "The share of AI recommendations the responsible official changes, with time spent per case, published for each high-impact system.",
    "closest": "Hospitals log alert overrides, for older tools. One lab experiment (292 people) and scattered field studies; no government we found publishes override rates."
   },
   {
    "i": 11,
    "link": "institutions",
    "old": "Dependence on foreign model providers",
    "chip": "No measure exists",
    "title": "No breakdown of which countries' AI firms governments rely on",
    "why": "States that buy rather than build AI may lose the ability to change or replace it.",
    "what": "Share of public-sector AI spending and queries by vendor and the vendor's home country, published yearly.",
    "closest": "In the US inventory, Microsoft appears in 100 of 311 generative-AI uses that name a vendor; in Canada, 38% of 409 registered systems were built by vendors. Singapore reports about 80% of its public officers have used the government chatbot, with no vendor breakdown."
   },
   {
    "i": 12,
    "link": "influence",
    "old": "Who can decide",
    "chip": "No measure exists",
    "title": "No measure of who holds decision power, people or AI",
    "why": "This is the outcome itself: whether people, not systems, still settle what happens.",
    "what": "For real institutions, the smallest group able to settle an outcome, and the mix of people and AI systems in it.",
    "closest": "RAND (2026) proposes measuring the smallest group able to settle an outcome; not yet applied."
   },
   {
    "i": 13,
    "link": "influence",
    "old": "A population measure of disempowerment",
    "chip": "Definitions differ",
    "title": "No tested, repeated survey of whether AI changes people's say",
    "why": "It is the nearest population-wide signal of the outcome, and cheap enough to repeat every year.",
    "what": "A tested survey scale, paired with simple behavioural tasks, put to the same people every year.",
    "closest": "Pew: 57% say not too much or no control over AI in their lives. UK: 50% say their views are not represented in decisions about AI (Ada Lovelace Institute and Alan Turing Institute, 2025). Dutch and Finnish panels track attitudes; Chooi, Lee and Li (2026) propose perception surveys, not yet fielded."
   }
  ]
 },
 "futures": {
  "nav": "Futures",
  "navTag": "WIP",
  "title": "Forecasts, draft appendix",
  "wipTag": "Work in progress",
  "caveat": "Work in progress. Built on published forecasts, mostly of US jobs and income; it needs more research.",
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
  "routesNote": "The routes are the observatory's own. \"Seen\" means consistent with a route, not proof of it.",
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
  "tooltip": "Draft evidence map. Headline figures are being checked before v1.0; check a source before citing."
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
   "priorityIntro": "Used on the Gaps page. A first pass by the observatory.",
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
    "old": "The strip chart on the home page shows every dated reading plotted on the evidence pages from 2021 onwards. A series is \"direct\" if it measures the quantity the link is named for, and \"nearby\" if it is a proxy, a count of paperwork or an opinion poll. Whether a change can be tied to AI is weighed in the rating, not in the colour. The split is a judgement by the observatory; the chart's data table lists every series.",
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
    "new": "A draft evidence map. AI tools helped find and summarise sources. Headline figures are being checked against primary sources before v1.0; corrections from authors and domain experts are welcome. Each chart is tagged with how its figures were obtained. Check the source before citing, above all for \"Secondary source\" and \"Company's own data\"."
   },
   {
    "where": "Method deck",
    "old": "The observatory organises published evidence along one causal chain, taken from the argument in Gradual Disempowerment (Kulveit and co-authors, 2025): the economy, culture and the state serve people partly because those systems need people, and AI reduces that need. It collects no data of its own.",
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
   "intro": "A judgement by the observatory, separate from how well a link is measured. It is not severity, probability or proof that AI is the cause.",
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
  "footer": "Gradual Disempowerment Observatory · Better Futures Project · Zhang Yue · Draft, compiled with AI research assistance · data as of {date} · Method and sources"
 },
 "nav": {
  "brand": "Gradual Disempowerment Observatory",
  "items": [
   {
    "href": "#map",
    "label": "Map"
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
