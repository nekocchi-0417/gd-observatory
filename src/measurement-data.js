// Synthesis of the existing selected evidence; no additional sources.
// Gap statuses describe this selection only, not the whole research field.
const MEASUREMENT11 = {
  capability: {
    summary: "Benchmarks measure technical-task reliability and selected professional deliverables, but do not establish dependable performance or total costs across real workflows.",
    measuredSummary: "Task reliability and professional project completion in benchmarks.",
    gapSummary: "Reliable whole workflows beyond software, with human review costs included.",
    measured: [
      {
        title: "Reliable technical task completion",
        source: "metr",
        finding: "METR tests technical-task length at 80% success, measured in human-expert time. The latest archived estimate is about three hours.",
        scope: "Independent benchmark; models released 2023-2026; frozen TH1.1 results.",
        limit: "Technical tasks, not whole jobs or runtime; latest uncertainty is wide and the tracker is no longer actively updated."
      },
      {
        title: "Professional project completion quality",
        source: "rli",
        finding: "The leading listed agent scores 21.25% on completion of selected freelance projects, judged against reference deliverables from professional work.",
        scope: "Industry-linked benchmark; leaderboard read 13 October 2026.",
        limit: "Selected projects, not actual jobs or client acceptance; unclear evaluation dates prevent a trend based on model release dates."
      }
    ],
    gaps: [
      {
        title: "Reliability across complete workflows",
        status: "limited",
        question: "How often can AI complete the same whole workflow correctly across repeated independent trials, including failures between individual tasks?"
      },
      {
        title: "Completion beyond technical work",
        status: "limited",
        question: "How reliably do successive models complete casework, negotiation and management tasks under comparable independent tests?"
      },
      {
        title: "Full cost of finished work",
        status: "not-tracked",
        question: "What does each successfully completed real task cost once deployment, retries and human checking are included?"
      }
    ]
  },
  adoption: {
    summary: "Repeated surveys measure regular employee use and enterprise adoption, but reveal less about how much work involves AI or is handed over.",
    measuredSummary: "Regular use by US employees and AI adoption by EU enterprises.",
    gapSummary: "Directly observed working time, delegated tasks and checking practices.",
    measured: [
      {
        title: "Regular workplace AI use",
        source: "gallup",
        finding: "The share of US employees reporting AI use at work a few times a week or more rose from 11% to 32% between May 2023 and August 2026.",
        scope: "Repeated survey; US organisational employees aged 18+; May 2023-August 2026.",
        limit: "Self-reported frequency, not work hours, tasks automated or dependence; excludes people outside the covered employee population."
      },
      {
        title: "AI use by enterprises",
        source: "euai",
        finding: "Official statistics count covered EU enterprises using AI: 20.0% in 2025, compared with 13.5% in 2024.",
        scope: "Official annual statistics; covered EU enterprises with 10+ people; 2024-2025.",
        limit: "Excludes microfirms; covers broad AI, not just generative AI; a new category and Netherlands series break complicate comparisons."
      }
    ],
    gaps: [
      {
        title: "Actual time spent using AI",
        status: "indirect",
        question: "How closely do self-reported AI-assisted hours match observed time on tasks, across occupations and repeated observations?"
      },
      {
        title: "Depth of workplace reliance",
        status: "indirect",
        question: "Among regular users, which tasks are delegated, how are outputs checked, and can the work still be completed without AI?"
      }
    ]
  },
  handover: {
    summary: "Company conversation labels distinguish task completion from collaboration, but do not reveal whether people review, use or can reverse AI outputs.",
    measuredSummary: "Automation and augmentation labels in one provider's conversations.",
    gapSummary: "Actual output use, meaningful human review and reversible decisions across providers.",
    measured: [
      {
        title: "Task completion versus collaboration",
        source: "aei",
        finding: "Among Claude chat and Cowork conversations assigned either interaction mode, 48.62% were classified as automation and 51.38% as augmentation; unclassified conversations are excluded.",
        scope: "Company logs and classifier; Claude chat and Cowork; May 2026.",
        limit: "One provider; automation does not establish autonomy or absent oversight; sampling changes prevent simple comparisons with earlier releases."
      }
    ],
    gaps: [
      {
        title: "Meaningful checks before use",
        status: "indirect",
        question: "Across providers, what share of completed AI tasks receives substantive human checking before the output is used?"
      },
      {
        title: "Outputs acted on in practice",
        status: "not-tracked",
        question: "Which AI outputs are accepted, edited or rejected, and which lead to real actions or decisions?"
      },
      {
        title: "Ability to reverse delegated decisions",
        status: "not-tracked",
        question: "For decisions delegated to AI, who can intervene or reverse the outcome, and how often do those options work?"
      }
    ]
  },
  work: {
    summary: "Payroll records show who is employed. Linking those changes to AI adoption, hiring and training remains harder.",
    measuredSummary: "Monthly employment by age; adoption-linked workplace studies.",
    gapSummary: "Junior hiring and training linked to actual employer AI adoption.",
    measured: [
      {
        title: "Employment in AI-exposed occupations",
        source: "canaries",
        finding: "Monthly employment indices compare six age groups in the most AI-exposed occupations. Employment among ages 22-25 fell 12.8% from November 2022 to August 2026.",
        scope: "US ADP payroll; six age groups, 22-50+; September 2021-August 2026.",
        limit: "Selected US firms, not the whole market; age is not seniority, and exposure does not establish adoption or AI causation."
      },
      {
        title: "Young-worker share after adoption encouragement",
        source: "dk-chatbot-effects",
        finding: "Linked workplace and administrative data show no extra decline in the share of workers aged 22-25 at workplaces encouraging chatbot use through 2024.",
        scope: "Danish observational study; data through 2024; March 2026 revision.",
        limit: "Encouragement was not randomized; country, period and employment-share outcome differ from the US indices, leaving later effects unresolved."
      }
    ],
    gaps: [
      {
        title: "Junior hiring after AI adoption",
        status: "limited",
        question: "How does hiring by seniority change after documented employer AI adoption, compared with similar firms and their earlier hiring trends?"
      },
      {
        title: "Training opportunities for new workers",
        status: "not-tracked",
        question: "After firms adopt AI, how do training opportunities and progression into skilled roles change for new workers?"
      }
    ]
  },
  share: {
    summary: "Official statistics measure labour's share of output at global and US sector levels, but neither identifies AI's contribution or who receives AI-related gains.",
    measuredSummary: "Global labour income share and quarterly US nonfarm-business compensation share.",
    gapSummary: "Income shifts tied to AI adoption and ownership of AI-related gains.",
    measured: [
      {
        title: "Global labour income share",
        source: "ilo-labour-share",
        finding: "ILO estimates labour income, including self-employed labour income, at 52.6% of global GDP in 2025 versus 53.0% in 2015.",
        scope: "Official modelled global estimates; 2015 and 2025; March 2026 publication.",
        limit: "Two endpoints, not an annual trajectory; estimates may be revised and do not attribute changes to AI."
      },
      {
        title: "US labour compensation share",
        source: "ls",
        finding: "BLS measures labour compensation as a share of US nonfarm-business output: 52.8% in Q2 2026, the lowest in its series beginning in 1947.",
        scope: "Official quarterly statistics; US nonfarm business; Q2 2026.",
        limit: "Not typical wages or AI's effect; sector coverage differs from global GDP, and output outside labour compensation is not all profit."
      }
    ],
    gaps: [
      {
        title: "Income shares after AI adoption",
        status: "indirect",
        question: "How do labour income shares change within firms and sectors after measured AI adoption, accounting for other economic changes?"
      },
      {
        title: "Recipients of AI-related income",
        status: "not-tracked",
        question: "How much capital income is attributable to AI, and who receives it, alongside changes in employee and self-employed labour income?"
      }
    ]
  },
  skills: {
    summary: "Studies test short-term unaided learning and human-AI task performance. They do not yet track lasting changes in the same people's skills.",
    measuredSummary: "Unaided exam performance after AI practice, plus human-AI task performance.",
    gapSummary: "Long-term unaided ability, recovery after withdrawal and validated measures of dependence.",
    measured: [
      {
        title: "Unaided learning after AI practice",
        source: "bastani",
        finding: "Versus the no-AI group, adjusted unaided exam scores were 5.4 points lower out of 100 after unrestricted GPT practice. The guided tutor's 0.4-point difference was not statistically significant.",
        scope: "Randomized trial; one Turkish high school; 2023 experiment, published 2025.",
        limit: "Short follow-up in one school, not permanent or population-wide deskilling; the tutor's nonsignificant estimate does not prove equivalence."
      },
      {
        title: "Human-AI team task performance",
        source: "vaccaro",
        finding: "Across 106 experiments, human-AI teams outperformed humans alone on average but underperformed the better of humans or AI alone; results varied by task.",
        scope: "Peer-reviewed meta-analysis; 106 experiments published in 2020-2023.",
        limit: "Measures task performance, not changes in individual skills over time; much evidence predates current generative AI."
      }
    ],
    gaps: [
      {
        title: "Unaided skills over time",
        status: "limited",
        question: "How do the same people's unaided skills change over months or years, alongside recorded AI use and the kind of assistance received?"
      },
      {
        title: "Recovery after AI withdrawal",
        status: "not-tracked",
        question: "When AI is withdrawn, how long does performance take to recover, and which tasks or practices make recovery easier?"
      },
      {
        title: "Reported dependence and observed ability",
        status: "not-tracked",
        question: "Do reported dependence scores predict actual AI use and repeated unaided performance in the same representative sample?"
      }
    ]
  },
  culture: {
    summary: "Platform reports separate AI music supply from recorded streams, while one experiment measures story similarity; human attention and creator livelihoods remain incompletely measured.",
    measuredSummary: "AI music uploads versus streams, and experimental story creativity and similarity.",
    gapSummary: "Human attention, creator income and cultural diversity across platforms and time.",
    measured: [
      {
        title: "AI music supply and streams",
        source: "deezer",
        finding: "Deezer reports fully AI-generated music exceeding 50% of uploads on peak days but receiving 1-3% of recorded streams, separating supplied tracks from plays.",
        scope: "Company disclosure, October 2026; Deezer figures dated August 2026.",
        limit: "One platform's detector; peak days are not averages; fraud adjustment is unspecified and recommendation policy affects streams."
      },
      {
        title: "Story creativity and similarity",
        source: "doshi",
        finding: "AI-assisted short stories received higher creativity ratings but were more similar to one another, measuring individual ratings separately from collective text diversity.",
        scope: "Randomized experiment; 293 short-story writers; published July 2024.",
        limit: "One bounded experiment, not a trend in culture-wide diversity or evidence that human creative output is declining."
      }
    ],
    gaps: [
      {
        title: "Human attention to AI content",
        status: "indirect",
        question: "What share of minutes people read, watch or hear is AI-generated across platforms, excluding fraudulent activity and recording recommendation policies?"
      },
      {
        title: "Diversity in published culture",
        status: "limited",
        question: "How do vocabulary, style and subject diversity change over time across published text, music and images as AI use changes?"
      },
      {
        title: "Income reaching human creators",
        status: "not-tracked",
        question: "How do human creators' income and audience reach change alongside AI-generated supply and consumption across platforms?"
      }
    ]
  },
  institutions: {
    summary: "Public inventories count AI applications and operational reports count alerts, but neither provides comparable measures of delegated decisions, substantive review or successful appeals.",
    measuredSummary: "Reported federal AI applications and one police force's facial-recognition alerts.",
    gapSummary: "Decision volumes, substantive reviews, appeal outcomes and dependence on providers.",
    measured: [
      {
        title: "Reported government AI applications",
        source: "inventory",
        finding: "The federal inventory counts 3,611 individually reported AI use cases by development stage; 1,480 are explicitly deployed or piloted, while 338 have no stage recorded.",
        scope: "Official US agency disclosures; 2025 inventory; CSV pinned May 2026.",
        limit: "Use cases are not decision volumes or audited safeguards; changing reporting rules limit comparisons, and blank fields do not establish absent protections."
      },
      {
        title: "Facial-recognition alerts and human review",
        source: "metlfr",
        finding: "London police reported 2,077 facial-recognition alerts, including 10 false alerts; officers review alerts before deciding whether to approach someone.",
        scope: "Operational self-report; Metropolitan Police; 11 September 2024-10 September 2025.",
        limit: "One force's self-report, not a complete override rate, false-negative measure or independent bias audit."
      }
    ],
    gaps: [
      {
        title: "Decision volumes by human role",
        status: "indirect",
        question: "For each high-impact system, how many decisions are fully automated, AI-recommended with human sign-off, or made by people alone?"
      },
      {
        title: "Substantive review and successful appeals",
        status: "limited",
        question: "How often do officials meaningfully review and change AI recommendations, with what time and reasons, and what happens when affected people appeal?"
      },
      {
        title: "Dependence on AI providers",
        status: "not-tracked",
        question: "What shares of public-sector AI spending and queries go to each provider, and can agencies practically switch suppliers?"
      }
    ]
  },
  influence: {
    summary: "Perceived control and flagged conversational risks are measurable, but neither establishes people's actual power to refuse, reverse or appeal decisions.",
    measuredSummary: "Reported control over AI and potential disempowerment flagged in conversations.",
    gapSummary: "Observed decision authority and repeated surveys linked to real choices.",
    measured: [
      {
        title: "Perceived control over AI use",
        source: "pew-control",
        finding: "In a representative survey, 57% of US adults reported little or no control over whether AI was used in their lives; 61% wanted more control.",
        scope: "Representative US survey; 5,023 adults; June 9-15, 2025.",
        limit: "Perceived control, not observed decision authority; this snapshot does not establish a decline or AI-caused loss of influence."
      },
      {
        title: "Potential disempowerment in AI conversations",
        source: "disempowerment",
        finding: "Automated analysis flagged a small minority of Claude conversations for severe disempowerment potential involving beliefs, values or actions.",
        scope: "Exploratory company preprint; 1.5 million Claude conversations; December 2025 sample.",
        limit: "One provider's classifiers measure potential risk, not confirmed harm or lasting loss of influence; conversation rates are not rates of affected people."
      }
    ],
    gaps: [
      {
        title: "Power to refuse or reverse",
        status: "indirect",
        question: "In real institutions, who can make, refuse, reverse or appeal AI-mediated decisions, and do those options change the outcome?"
      },
      {
        title: "Felt control and observed choices",
        status: "indirect",
        question: "Do repeated surveys of the same people's control track their observed ability to choose, act without AI and challenge decisions?"
      }
    ]
  }
};
