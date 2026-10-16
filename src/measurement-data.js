// Synthesis of the existing selected evidence; no additional sources.
// Gap statuses describe this selection only, not the whole research field.
const MEASUREMENT11 = {
  capability: {
    summary: "Tests show how reliably AI finishes technical tasks and selected professional projects. We still need to measure how reliably it completes whole jobs and what that costs, including human checks.",
    measuredSummary: "Tests measure how reliably AI finishes technical tasks and professional projects.",
    gapSummary: "We need to test complete jobs and their full costs, including human checks.",
    measured: [
      {
        title: "Technical tasks AI can finish",
        source: "metr",
        finding: "METR estimates the length of technical tasks an AI model can complete with 80% success, using the time a human expert would need. Its latest archived estimate is about three hours.",
        scope: "These independent tests use archived TH1.1 results for models released in 2023-2026.",
        limit: "Performance across whole jobs remains uncertain, and human task time differs from AI runtime. The latest estimate has a wide range of uncertainty, and the tracker is no longer updated."
      },
      {
        title: "Finished projects meeting professional standards",
        source: "rli",
        finding: "The Remote Labor Index checks whether AI's finished projects meet the standard of reference work from freelancers. The leading listed AI agent has a completion score of 21.25%.",
        scope: "The benchmark has industry involvement; its leaderboard was read on 13 October 2026.",
        limit: "The selected projects do not show how AI performs in actual jobs or whether clients would accept its work. Unclear evaluation dates mean model release dates cannot show when performance improved."
      }
    ],
    gaps: [
      {
        title: "Completing work from start to finish",
        status: "limited",
        question: "When independent evaluators repeatedly test the same complete work process, how often does AI finish it correctly, including the steps that connect individual tasks?"
      },
      {
        title: "Reliability in casework and management",
        status: "limited",
        question: "When independent evaluators test successive AI models on casework, negotiation and management tasks under comparable conditions, how often does each model complete the work correctly?"
      },
      {
        title: "The full cost of completed work",
        status: "not-tracked",
        question: "For organisations using AI on real tasks, what does each successfully completed task cost after including setup, repeated attempts and human checking?"
      }
    ]
  },
  adoption: {
    summary: "Repeated surveys track how often US employees use AI and how many EU businesses use it. We know less about the time spent using AI, the work it completes and how people check the results.",
    measuredSummary: "Surveys track regular AI use among US employees and use by EU businesses.",
    gapSummary: "We need to observe working time, tasks handed to AI and human checks.",
    measured: [
      {
        title: "How often employees use AI",
        source: "gallup",
        finding: "Gallup asks US employees how often they use AI at work. The proportion reporting use a few times a week or more rose from 11% in May 2023 to 32% in August 2026.",
        scope: "Gallup repeatedly surveyed US employees aged 18+ working for organisations, from May 2023 to August 2026.",
        limit: "The answers apply to the covered employee population and describe reported frequency of use. They do not measure working hours, tasks completed by AI or whether people can work without it."
      },
      {
        title: "How many businesses use AI",
        source: "euai",
        finding: "Eurostat counts businesses using the AI technologies covered by its survey. Among covered EU businesses, 20.0% used AI in 2025, compared with 13.5% in 2024.",
        scope: "Official annual statistics cover EU businesses with 10+ people in selected sectors in 2024-2025.",
        limit: "Smaller businesses are excluded, and the survey covers a broad range of AI technologies. A new category and a break in the Netherlands data series make comparisons between years harder."
      }
    ],
    gaps: [
      {
        title: "Time people spend using AI",
        status: "indirect",
        question: "For workers in different occupations, how closely do their reported hours of AI use match directly observed time on tasks, when both are measured repeatedly?"
      },
      {
        title: "Work people hand over to AI",
        status: "indirect",
        question: "Among employees who regularly use AI, which tasks do they hand over, how do they check the results, and can they still complete those tasks without AI?"
      }
    ]
  },
  handover: {
    summary: "Anthropic groups conversations according to whether AI completes a task or helps someone work through it. Those labels leave open whether people check the results, act on them or can reverse resulting decisions.",
    measuredSummary: "Anthropic classifies conversations by whether AI completes tasks or helps people work through them.",
    gapSummary: "We need to observe how people check, use and reverse decisions involving AI.",
    measured: [
      {
        title: "How people hand tasks to AI",
        source: "aei",
        finding: "Anthropic labels conversations as task completion ('automation') or help with working through a task ('augmentation'). Among Claude chat and Cowork conversations assigned either label, 48.62% were automation and 51.38% augmentation; conversations without either label are excluded.",
        scope: "Anthropic classified its own Claude chat and Cowork conversation records from May 2026.",
        limit: "The labels come from one provider and do not establish whether AI made decisions independently or whether people checked its work. Changes in sampling make comparisons with earlier releases difficult."
      }
    ],
    gaps: [
      {
        title: "Human checks before results are used",
        status: "indirect",
        question: "For people using AI tools from different providers, what proportion of completed tasks does a person check for accuracy before the results are used?"
      },
      {
        title: "What people do with AI results",
        status: "not-tracked",
        question: "Across AI providers, how often do users accept, edit or reject the results, and which results lead to actions or decisions outside the conversation?"
      },
      {
        title: "Reversing decisions handed to AI",
        status: "not-tracked",
        question: "In organisations that hand decisions to AI, who can intervene or reverse the outcome, and how often do attempts to do so succeed?"
      }
    ]
  },
  work: {
    summary: "US payroll records track employment by age, and a Danish study links workplace encouragement of AI use to workforce changes. How AI affects hiring and training still needs clearer measurement.",
    measuredSummary: "Studies track employment by age and compare workplaces that encourage AI use.",
    gapSummary: "We need hiring and training records linked to when employers start using AI.",
    measured: [
      {
        title: "Employment across age groups",
        source: "canaries",
        finding: "Stanford and ADP compare monthly employment changes across six age groups in occupations whose tasks AI could potentially assist with most. In these occupations, employment among ages 22-25 fell 12.8% from November 2022 to August 2026.",
        scope: "US ADP payroll records cover six age groups, from 22-25 to 50+, from September 2021 to August 2026.",
        limit: "The selected firms have limited coverage of the US labour market, and age does not establish a worker's seniority. The estimates of potential AI assistance do not show actual use or explain what caused employment changes."
      },
      {
        title: "Young workers where chatbots are encouraged",
        source: "dk-chatbot-effects",
        finding: "A Danish study linked workplace reports to administrative employment records. Through 2024, workplaces encouraging chatbot use showed no extra decline in the proportion of their workers aged 22-25.",
        scope: "This Danish study observes workplace differences using data through 2024; the paper was revised in March 2026.",
        limit: "Workplaces were not randomly assigned to encourage use. The country, dates and measure of young workers' proportion differ from the US comparison, and the study cannot rule out later employment effects."
      }
    ],
    gaps: [
      {
        title: "Hiring after employers start using AI",
        status: "limited",
        question: "When firms start using AI, how does hiring at each level of seniority change compared with similar firms and with their own earlier hiring patterns?"
      },
      {
        title: "Training and progression for new workers",
        status: "not-tracked",
        question: "In firms that start using AI, how do new workers' training opportunities and chances of moving into skilled roles change?"
      }
    ]
  },
  share: {
    summary: "Labour share is the portion of economic income paid for work. Official figures track this globally and for US businesses outside farming, while AI's role in changes and who receives its economic gains remain unclear.",
    measuredSummary: "Official figures track the portion of economic income paid for work.",
    gapSummary: "We need to measure who receives economic gains when organisations use AI.",
    measured: [
      {
        title: "Global income paid for work",
        source: "ilo-labour-share",
        finding: "The International Labour Organization estimates the portion of global economic output, or GDP, received as income from work, including self-employment. This labour share was 52.6% in 2025 and 53.0% in 2015.",
        scope: "These official global estimates use statistical models for 2015 and 2025 and were published in March 2026.",
        limit: "Only these two years are shown, leaving the intervening path unknown here. The estimates may be revised and do not identify how much AI contributed to the change."
      },
      {
        title: "US business income paid for work",
        source: "ls",
        finding: "The US Bureau of Labor Statistics measures the portion of output from covered businesses outside farming paid to people for work. This was 52.8% in the second quarter (Q2) of 2026, the lowest reading since the series began in 1947.",
        scope: "Official quarterly statistics cover US nonfarm business, the business sector outside farming, in Q2 2026.",
        limit: "The figure does not show what a typical worker earns or how much AI contributed to the change. Its coverage differs from global GDP, and the income left over includes more than profits."
      }
    ],
    gaps: [
      {
        title: "Income paid for work after AI",
        status: "indirect",
        question: "In firms and sectors that begin using AI, how does the portion of income paid for work change after accounting for other economic changes?"
      },
      {
        title: "Who receives income from AI",
        status: "not-tracked",
        question: "Across the economy, how much income from owning assets comes from AI, who receives it, and how does income from work change for employees and self-employed people?"
      }
    ]
  },
  skills: {
    summary: "The selected studies test what students can do without AI after using it to practise, and how people perform tasks with AI. They do not follow lasting changes in the same people's skills.",
    measuredSummary: "Studies test exam performance without AI and task performance with AI.",
    gapSummary: "We need to follow people's skills and ability to work without AI over time.",
    measured: [
      {
        title: "Exam results without AI after practice",
        source: "bastani",
        finding: "After unrestricted GPT practice, adjusted scores on exams taken without AI were 5.4 points lower out of 100 than the no-AI group's. The guided tutor's estimated 0.4-point reduction was too uncertain to establish a clear difference from the no-AI group.",
        scope: "A randomized trial took place at one Turkish high school in 2023; results were published in 2025.",
        limit: "Follow-up was short and covered one school, so it cannot establish permanent skill loss or changes across the population. The uncertain tutor result also leaves open whether the tutor and no-AI groups performed equally well."
      },
      {
        title: "Task results when people use AI",
        source: "vaccaro",
        finding: "Across 106 experiments, people working with AI performed better on average than people working alone. Their combined performance fell below the better of people alone or AI alone, with results varying by task.",
        scope: "Researchers combined results from 106 experiments published in 2020-2023 in a peer-reviewed analysis.",
        limit: "These experiments measure success on tasks without tracking changes in individual skills over time. Much of the evidence predates current generative AI."
      }
    ],
    gaps: [
      {
        title: "Skills without AI over time",
        status: "limited",
        question: "For the same students or workers followed over months or years, how do skills tested without AI change alongside recorded AI use and the kind of help received?"
      },
      {
        title: "Performance when AI is removed",
        status: "not-tracked",
        question: "When students or workers stop using AI, does their performance fall, how long does recovery take, and which tasks or practices help them recover?"
      },
      {
        title: "Reported reliance and performance without AI",
        status: "not-tracked",
        question: "In a representative group of AI users, do people's reports of relying on AI predict their recorded use and results on repeated tasks done without AI?"
      }
    ]
  },
  culture: {
    summary: "Deezer reports how much music is AI-made and how often it is played, while an experiment tests story creativity and similarity. These sources do not establish wider changes in people's attention or creators' incomes.",
    measuredSummary: "Studies measure AI music uploads and plays, and story creativity and similarity.",
    gapSummary: "We need to track people's attention, creators' incomes and variety in published work.",
    measured: [
      {
        title: "AI music uploaded and played",
        source: "deezer",
        finding: "Deezer reports that fully AI-generated tracks exceeded 50% of new uploads on peak days. Fully AI-generated music accounted for 1-3% of recorded streams, which count plays of music.",
        scope: "Deezer published these company figures in October 2026, describing August 2026.",
        limit: "One platform uses its own detector, and peak-day upload shares differ from averages. It is unclear whether fraudulent plays were removed; recommendation rules also affect what gets played."
      },
      {
        title: "Creativity and similarity of AI-assisted stories",
        source: "doshi",
        finding: "In a short-story experiment, AI-assisted stories received higher creativity ratings than stories written without AI. The AI-assisted stories were also more similar to one another.",
        scope: "A randomized experiment involved 293 short-story writers; it was published in July 2024.",
        limit: "The findings come from one short-story experiment. They cannot establish whether culture is becoming less varied over time or whether the amount of work created by people is falling."
      }
    ],
    gaps: [
      {
        title: "Time people spend with AI content",
        status: "indirect",
        question: "Across platforms, what proportion of people's reading, viewing and listening time goes to AI-generated content, after excluding fraudulent activity and recording how recommendations work?"
      },
      {
        title: "Variety in published creative work",
        status: "limited",
        question: "Across published text, music and images, how does the variety of vocabulary, styles and subjects change over time as AI use changes?"
      },
      {
        title: "Creators' income and audience size",
        status: "not-tracked",
        question: "For human creators on different platforms, how do income and audience size change as the amount of AI-generated work and its consumption change?"
      }
    ]
  },
  institutions: {
    summary: "Government reports list AI applications, and one police force reports facial-recognition alerts. We still need comparable counts of decisions made with AI, the checks officials perform and what happens when people challenge the results.",
    measuredSummary: "Reports count US government AI uses and one police force's facial-recognition alerts.",
    gapSummary: "We need to count decisions, reviews and appeals, and measure reliance on suppliers.",
    measured: [
      {
        title: "AI uses reported by government",
        source: "inventory",
        finding: "The US federal inventory lists 3,611 individually reported uses of AI. Agencies explicitly describe 1,480 as in use or in pilot trials, while 338 entries leave their stage of development blank.",
        scope: "These are official US agency reports for the 2025 inventory, using the CSV version dated May 2026.",
        limit: "The reports do not count decisions or independently verify protections. Changing reporting rules limit comparisons, and blank answers do not show whether protections are present."
      },
      {
        title: "Facial-recognition alerts reviewed by police",
        source: "metlfr",
        finding: "London police reported 2,077 facial-recognition alerts, including 10 false alerts. Officers review the alerts before deciding whether to approach someone.",
        scope: "The Metropolitan Police reported on their own operations from 11 September 2024 to 10 September 2025.",
        limit: "This is one force's own report. It leaves unclear how often officers overrule alerts, how many matches the system misses, and whether an independent assessment would find bias."
      }
    ],
    gaps: [
      {
        title: "Who makes government decisions",
        status: "indirect",
        question: "For government AI systems with major consequences for people, how many decisions are fully automated, how many require a person to approve AI recommendations, and how many are made by people alone?"
      },
      {
        title: "Officials' checks and people's appeals",
        status: "limited",
        question: "In government services using AI, how often do officials review and change its recommendations, how much time do they spend and why, and what happens when affected people appeal?"
      },
      {
        title: "Government reliance on AI suppliers",
        status: "not-tracked",
        question: "Across government agencies, what proportions of AI spending and requests sent to AI go to each supplier, and can agencies successfully switch suppliers?"
      }
    ]
  },
  influence: {
    summary: "Surveys ask how much control people feel over AI, and a company study flags conversations where their control may be at risk. We still need to observe whether people can refuse, reverse or challenge decisions.",
    measuredSummary: "Studies ask about control and flag possible losses of control in AI conversations.",
    gapSummary: "We need to observe whether people can refuse, change or challenge decisions involving AI.",
    measured: [
      {
        title: "How much control people feel",
        source: "pew-control",
        finding: "In a representative survey, 57% of US adults said they had little or no control over whether AI was used in their lives. A separate question found that 61% wanted more control.",
        scope: "Pew surveyed a representative sample of 5,023 US adults during June 9-15, 2025.",
        limit: "The survey records people's perceptions. It does not establish their actual power to make decisions, whether that power has declined or how AI affected it."
      },
      {
        title: "Possible loss of control in conversations",
        source: "disempowerment",
        finding: "Anthropic's automated analysis flagged a small minority of Claude conversations for the potential for severe loss of control over what people believe, value or do.",
        scope: "This exploratory company study is a preprint, based on 1.5 million Claude conversations sampled in December 2025.",
        limit: "The classification comes from one provider, and flagged risks do not confirm harm or lasting loss of influence. Rates describe conversations; the number of affected people remains unknown."
      }
    ],
    gaps: [
      {
        title: "People's power to change decisions",
        status: "indirect",
        question: "In institutions using AI, who can make, refuse, reverse or appeal decisions involving it, and how often do those options change the outcome?"
      },
      {
        title: "Reported control and actual choices",
        status: "indirect",
        question: "For the same people surveyed over time, do changes in reported control match changes in their observed ability to choose, act without AI and challenge decisions?"
      }
    ]
  }
};
