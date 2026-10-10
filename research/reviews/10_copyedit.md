# Copy-edit: Gradual Disempowerment Observatory (draft v0.2)

100 proposed edits. Each OLD is an exact, single-line substring that occurs once in its file. Where an edit swaps the quote marks around a string (38 to 40), the delimiters are part of OLD and NEW. No number, date or name is changed; possible factual problems are under Queries.

Conventions applied: British spelling; numerals for measured quantities (minutes, hours, months of doubling time); "1 to 3%" in prose and "1–3%" in chart labels; "workers' share", "hand-over", "task length" and "scenario" as the site's terms; impersonal voice.

## Edits

[1]
FILE: /home/claude/site/src/data1.js
OLD: The length of task an AI system can finish on its own keeps doubling.
NEW: The length of task an AI system can finish on its own has doubled about every 4 months since 2023.
WHY: concrete claim; the figure is already in the deck

[2]
FILE: /home/claude/site/src/data1.js
OLD: METR measures how long a software task, in human working time, frontier models can complete with 50% reliability. That length has doubled about every six months since 2019 and about every four months since 2023. It went from four minutes with GPT-4 in March 2023 to roughly twelve hours with Claude Opus 4.6 in February 2026.
NEW: METR, an independent evaluator, measures the longest software task that frontier models (the most capable AI systems) complete half the time. It counts task length as the time a skilled person would need. That length has doubled about every 6 months since 2019 and about every 4 months since 2023. It went from 4 minutes with GPT-4 in March 2023 to about 12 hours with Claude Opus 4.6 in February 2026.
WHY: tangled first sentence; "frontier" and METR unexplained; numerals with units

[3]
FILE: /home/claude/site/src/data1.js
OLD: The software task a frontier model completes half the time has grown from four minutes to about twelve hours in three years.
NEW: The longest software task a frontier model completes half the time has grown from 4 minutes to about 12 hours in three years.
WHY: "the software task" is ambiguous; numerals with units

[4]
FILE: /home/claude/site/src/data1.js
OLD: From seconds to hours: the task length frontier models can complete
NEW: The tasks frontier models can complete have grown from seconds to hours
WHY: colon-reveal title; state the takeaway as a sentence

[5]
FILE: /home/claude/site/src/data1.js
OLD: Human time needed for the hardest software tasks a model completes 50% and 80% of the time, by release date. Log scale.
NEW: Time a skilled person would need for the longest software tasks a model completes 50% and 80% of the time, by model release date. Log scale, so a straight line means steady doubling.
WHY: "human time" and "log scale" unexplained; "hardest" should be "longest"

[6]
FILE: /home/claude/site/src/data1.js
OLD: '÷13 a year'
NEW: '13× cheaper a year'
WHY: "÷13" is hard to read; matches the "13× cheaper" figure below

[7]
FILE: /home/claude/site/src/data1.js
OLD: per million tokens for GPT-4-level answers on a graduate science benchmark
NEW: per million tokens (units of text) for GPT-4-level answers on a graduate-level science benchmark
WHY: "tokens" unexplained

[8]
FILE: /home/claude/site/src/data1.js
OLD: Its own notes say horizons on visual computer-use tasks are 40 to 100 times shorter.
NEW: Its own notes say task lengths are 40 to 100 times shorter when the model has to operate a computer screen.
WHY: "horizons" never defined (site term is "task length"); "visual computer-use tasks" is jargon

[9]
FILE: /home/claude/site/src/data1.js
OLD: At 80% success the frontier horizon is one to three hours, not twelve or more.
NEW: At 80% success the longest task is 1 to 3 hours, not 12 or more.
WHY: "frontier horizon" jargon; numerals with units

[10]
FILE: /home/claude/site/src/data1.js
OLD: OpenAI stopped reporting SWE-bench Verified in February 2026 after finding 59% of audited problems flawed and models reciting answers from memory.
NEW: In February 2026 OpenAI stopped reporting SWE-bench Verified, a widely used coding test. It had found 59% of audited problems flawed and models reciting answers from memory.
WHY: benchmark name unexplained; split a long sentence

[11]
FILE: /home/claude/site/src/data1.js
OLD: METR\'s 80% horizon passing a working day. LEAP forecasters expected 3.4 to 3.5 hours by end-2026; the April 2026 reading was already 3.1.
NEW: Task length at 80% success passing a working day. A panel of AI experts (LEAP) expected 3.4 to 3.5 hours by the end of 2026; the April 2026 reading was already 3.1 hours.
WHY: "horizon" and "LEAP" unexplained; missing unit on 3.1

[12]
FILE: /home/claude/site/src/data1.js
OLD: Half of US workers now use AI on the job, and daily use has nearly quadrupled in three years.
NEW: Half of US workers now use AI at work at least a few times a year, and daily use has nearly quadrupled in three years.
WHY: the 52% counts anyone using AI "a few times a year or more"; the claim should say so

[13]
FILE: /home/claude/site/src/data1.js
OLD: Firm adoption doubled on paper when the question changed
NEW: The share of US firms using AI jumped from about 10% to 17% when the survey question changed
WHY: "doubled" overstates the 10% to 17% jump described in the note; "on paper" is idiom

[14]
FILE: /home/claude/site/src/data1.js
OLD: and the level jumped from about 10% to 17% with no change in behaviour. The two segments cannot be joined. An executive survey cited by the Federal Reserve puts the employment-weighted figure at 78%: the answer depends on who is asked and how.
NEW: and the level jumped from about 10% to 17%. The jump reflects the new wording, not a change in behaviour, so the two segments cannot be joined. An executive survey cited by the Federal Reserve puts the figure at 78% when firms are weighted by number of employees. The answer depends on who is asked and how.
WHY: "employment-weighted" is jargon; colon-reveal; says why the segments cannot be joined

[15]
FILE: /home/claude/site/src/data1.js
OLD: For students, use is close to universal
NEW: Among UK undergraduates, use is close to universal
WHY: overclaims; the chart's US teen figure is 54%

[16]
FILE: /home/claude/site/src/data1.js
OLD: In Danish register data, workers who adopted chatbots saw no change in earnings or hours; effects above 2% are ruled out.
NEW: In Danish administrative records, workers who adopted chatbots saw no change in earnings or hours. The study rules out effects above 2%.
WHY: "register data" is jargon; passive

[17]
FILE: /home/claude/site/src/data1.js
OLD: <b>Definitions swing the number</b> from 18% to 78% of firms.
NEW: <b>Definitions swing the number.</b> Estimates of the share of firms using AI run from 18% to 78%.
WHY: every other bullet has a bold sentence followed by a full sentence

[18]
FILE: /home/claude/site/src/data1.js
OLD: People hand whole tasks to AI in just under half of conversations. The share rose, peaked and eased back.
NEW: On Claude, people hand whole tasks to the AI in just under half of conversations. The share rose, peaked and eased back.
WHY: the figure covers one product; the claim read as if it covered all AI use

[19]
FILE: /home/claude/site/src/data1.js
OLD: In programmatic business use it is about three-quarters. Coding agents are being left to run for longer between human checks.
NEW: Where businesses connect their own software to Claude, it is about three-quarters. Engineers also leave AI coding agents to run for longer between checks.
WHY: "programmatic" is jargon; passive voice

[20]
FILE: /home/claude/site/src/data1.js
OLD: of business (API) transcripts showed automation patterns
NEW: of business use through the API (software calling Claude directly) was classed as automation
WHY: "API" unexplained; same wording as the next figure

[21]
FILE: /home/claude/site/src/data1.js
OLD: of business (API) traffic classified as automation
NEW: of business use through the API was classed as automation
WHY: consistent with the figure beside it

[22]
FILE: /home/claude/site/src/data1.js
OLD: longest turns (99.9th percentile) in Claude Code
NEW: length of the longest 0.1% of turns in Claude Code (a turn is one unbroken run by the agent)
WHY: "99.9th percentile" and "turn" unexplained

[23]
FILE: /home/claude/site/src/data1.js
OLD: and describes engineers at a frontier lab using their own product: the most favourable setting there is. Coding only. The 99.9th percentile is the extreme tail; typical turns are far shorter.
NEW: and describes engineers at a leading AI company using their own product, the setting most favourable to hand-over. Coding only. The longest 0.1% of turns is the extreme tail; typical turns are far shorter.
WHY: "frontier lab" jargon; "favourable" to what was unclear; percentile wording matches edit 22

[24]
FILE: /home/claude/site/src/data1.js
OLD: On ChatGPT, the share of "do it for me" messages fell
NEW: On ChatGPT, the share of messages asking for a finished output fell
WHY: scare quotes around an invented label; OpenAI's label is "Doing"

[25]
FILE: /home/claude/site/src/data1.js
OLD: and on ChatGPT "doing" messages fell from about half to 35%.
NEW: and on ChatGPT "Doing" messages (requests for a finished output) fell from about half to 35%.
WHY: label is capitalised on its tab; unexplained here

[26]
FILE: /home/claude/site/src/data1.js
OLD: Young workers in AI-exposed jobs are falling behind. The wider job market shows no displacement.
NEW: Young workers in AI-exposed jobs are falling behind. Employment in the wider job market has not fallen.
WHY: "displacement" is jargon

[27]
FILE: /home/claude/site/src/data1.js
OLD: In ADP payroll data, employment of 22 to 25 year olds in the most AI-exposed occupations is down 13% since ChatGPT launched.
NEW: AI-exposed occupations are those where AI can do the largest share of tasks. In ADP payroll data, employment of 22 to 25 year olds in the most exposed occupations is down 13% since ChatGPT launched in November 2022.
WHY: "AI-exposed" is never defined on the site. Check the gloss against Stanford's definition (query 14)

[28]
FILE: /home/claude/site/src/data1.js
OLD: Same occupations, different ages: the youngest workers part ways after late 2022
NEW: In the most AI-exposed occupations, jobs for the youngest workers have fallen since late 2022 while jobs for older workers have grown
WHY: colon-reveal; "part ways" is mannered and does not say which way

[29]
FILE: /home/claude/site/src/data1.js
OLD: Stanford\'s headline measure says 22 to 25 year olds in exposed jobs are 19% behind where they would be had they kept pace with less-exposed peers, up from 15% a year earlier. With controls for interest-rate exposure, education and remote work the occupation-level estimate roughly halves.
NEW: On Stanford\'s headline measure, 22 to 25 year olds in exposed jobs are 19% behind where they would be if they had kept pace with less-exposed peers. A year earlier the gap was 15%. After adjusting for interest-rate exposure, education and remote work, Stanford\'s estimate roughly halves.
WHY: 31-word sentence; "controls" and "occupation-level estimate" are jargon

[30]
FILE: /home/claude/site/src/data1.js
OLD: The next cohort up has started to slip
NEW: Jobs for 26 to 30 year olds in the most exposed occupations have started to fall
WHY: vague title; "cohort" is jargon

[31]
FILE: /home/claude/site/src/data1.js
OLD: Canaries Dashboard: by age and exposure quintile
NEW: Canaries Dashboard: by age and exposure fifth (quintile)
WHY: "quintile" unexplained; the chart subtitle says "fifth"

[32]
FILE: /home/claude/site/src/data1.js
OLD: The economy-wide picture: nothing has moved
NEW: Across the whole economy, the employment rate has barely moved
WHY: colon-reveal; "nothing" overstates (unemployment rose from 3.6% to 4.2%)

[33]
FILE: /home/claude/site/src/data1.js
OLD: Graduates of the most exposed majors start lower
NEW: Graduates of the most AI-exposed majors find first jobs less often and start on lower pay
WHY: "start lower" is vague; states both findings

[34]
FILE: /home/claude/site/src/data1.js
OLD: <b>Controls shrink it.</b> With controls for rate exposure, education and remote work, Stanford\'s occupation-level estimate falls from −0.179 to −0.080.
NEW: <b>Adjustments shrink it.</b> After adjusting for interest-rate exposure, education and remote work, Stanford\'s estimate falls by more than half (from −0.179 to −0.080).
WHY: raw coefficients mean nothing to a general reader without the "more than half"; "controls" and "rate exposure" are jargon

[35]
FILE: /home/claude/site/src/data1.js
OLD: <b>Other countries see nothing.</b> Register studies in Finland and Norway find no effect on young workers; Danish data show no change in pay or hours.
NEW: <b>Nordic studies find no effect.</b> Studies of national administrative records in Finland and Norway find no effect on young workers. Danish data show no change in pay or hours.
WHY: "other countries" overstates three Nordic studies; "register studies" is jargon

[36]
FILE: /home/claude/site/src/data2.js
OLD: The recent leg coincides with a boom in AI investment by a handful of firms
NEW: The latest fall coincides with a boom in AI investment by a handful of firms
WHY: "leg" is market jargon (also in the first sceptic bullet of this link)

[37]
FILE: /home/claude/site/src/data2.js
OLD: Workers' slice of income shrinks. 52.8% of US business income, the lowest on record. Nobody can yet say how much of that is AI.
NEW: Workers' share of income shrinks. It is 52.8% of US business income, the lowest on record. Nobody can yet say how much of the fall is due to AI.
WHY: "slice" drifts from "share"; verbless sentence; "how much of that is AI" is ambiguous

[38]
FILE: /home/claude/site/src/data2.js
OLD: tab:['Labour share of US business income',
NEW: tab:["Workers' share of US business income",
WHY: site term is "workers' share" (quote marks change because of the apostrophe)

[39]
FILE: /home/claude/site/src/data2.js
OLD: title:'A long decline, and a new low in 2026'
NEW: title:"Workers' share has fallen since 2000 and reached a record low in 2026"
WHY: title did not name what declined

[40]
FILE: /home/claude/site/src/data2.js
OLD: sub:'Labour share, US nonfarm business sector. Index, 2017 = 100.'
NEW: sub:"Workers' share of output (the labour share), US business sector excluding farms. Index, 2017 = 100."
WHY: links the official term to the site's term; "nonfarm" is US statistical jargon

[41]
FILE: /home/claude/site/src/data2.js
OLD: Stock-market value has concentrated in the firms building AI
NEW: Seven tech firms held just over a third of S&P 500 market value in 2024
WHY: concrete takeaway; "the firms building AI" is loose for a list that includes Apple and Tesla

[42]
FILE: /home/claude/site/src/data2.js
OLD: A handful of firms own most of the machines
NEW: Companies own 80% of known AI computing capacity, up from 40% in 2019
WHY: vague title; states the figure the tab leads with

[43]
FILE: /home/claude/site/src/data2.js
OLD: Workers entered the AI period with little collective leverage
NEW: One in ten US workers belongs to a union, half the share of 1983
WHY: title asserted an interpretation; "collective leverage" is jargon

[44]
FILE: /home/claude/site/src/data2.js
OLD: What gets measured: use, every quarter. Ability, once.
NEW: Surveys track AI use every quarter. No study has measured unaided ability twice.
WHY: colon-reveal and fragments; "once" was ambiguous across five studies

[45]
FILE: /home/claude/site/src/data2.js
OLD: Right: every study of what use does to unaided ability.
NEW: Right: the five studies found on what AI use does to unaided ability.
WHY: "every study" claims a complete search

[46]
FILE: /home/claude/site/src/data2.js
OLD: 19 points less likely to be right on a task beyond the AI's ability.
NEW: Consultants using AI were 19 percentage points less likely to be right on a task beyond the AI's ability.
WHY: no subject, and the reader could not tell this was the with-AI group

[47]
FILE: /home/claude/site/src/data2.js
OLD: 'Developers with AI: believed against measured','+20% vs −19%'
NEW: 'Developers with AI: what they believed and what was measured','20% faster vs 19% slower'
WHY: signs without units are ambiguous (the chart itself uses "less time" and "more time")

[48]
FILE: /home/claude/site/src/data2.js
OLD: That refusal is the nearest thing to a "cannot take it back" reading that exists.
NEW: That reluctance is the closest existing evidence that people find it hard to go back to working without AI.
WHY: scare-quoted invented label; "refusal" is stronger than "avoided"

[49]
FILE: /home/claude/site/src/data2.js
OLD: The one real-world clinical result: doctors found fewer growths unaided
NEW: In the one real-world clinical study, doctors found fewer growths unaided after months of working with AI
WHY: colon-reveal; the comparison was missing

[50]
FILE: /home/claude/site/src/data2.js
OLD: Adenoma detection rate in colonoscopies at four Polish centres, before and after routine AI assistance was introduced.
NEW: Share of colonoscopies in which a precancerous growth (adenoma) was found, at four Polish centres, before and after routine AI assistance began.
WHY: "adenoma detection rate" unexplained; passive

[51]
FILE: /home/claude/site/src/data2.js
OLD: In real conversations, a small share shows the AI distorting beliefs or decisions
NEW: About 1 in 1,300 real conversations shows severe potential to distort the user\'s picture of reality
WHY: the note says these are rates of potential, not confirmed distortion; the title said more

[52]
FILE: /home/claude/site/src/data2.js
OLD: <b>Design fixes it.</b>
NEW: <b>Design can fix it.</b>
WHY: one trial does not show that design always removes the loss

[53]
FILE: /home/claude/site/src/data2.js
OLD: status:'Supply flooded; attention has not'
NEW: status:'Supply is flooded; attention has barely moved'
WHY: "attention has not flooded" does not parse; matches the deck

[54]
FILE: /home/claude/site/src/data2.js
OLD: AI now makes about half of new articles and new music uploads. People mostly are not reading or listening to it yet.
NEW: AI now makes about half of new web articles and of the music uploaded to Deezer. So far, people read and listen to little of it.
WHY: music figure covers one platform; "people mostly are not" is awkward

[55]
FILE: /home/claude/site/src/data2.js
OLD: and AI articles are about one in six of what Google ranks. Supply has flooded; attention has barely moved.
NEW: and AI articles are about one in six of Google\'s top results. AI has flooded supply; attention has barely moved.
WHY: "what Google ranks" is vague (the data are top-20 results); "supply has flooded" does not parse

[56]
FILE: /home/claude/site/src/data2.js
OLD: Half of what is uploaded, a sliver of what is heard
NEW: AI music is over half of uploads to Deezer but only 1 to 3% of streams
WHY: title did not name the subject or the numbers

[57]
FILE: /home/claude/site/src/data2.js
OLD: Lagging context, not an AI measurement. US trust in mass media has fallen from 72% in 1976 to 28% in 2025 (Gallup), long before generative AI.
NEW: Background, not a measure of AI\'s effect. US trust in mass media fell from 72% in 1976 to 28% in 2025 (Gallup), a decline that began long before generative AI.
WHY: "lagging context" is jargon; a fall to 2025 cannot be "long before generative AI"

[58]
FILE: /home/claude/site/src/data2.js
OLD: AI music is over half of uploads and 1 to 3% of streams, most of them flagged as fraud.
NEW: AI music is over half of uploads but 1 to 3% of streams, and most of those streams are flagged as fraud.
WHY: "most of them" could refer to uploads or streams

[59]
FILE: /home/claude/site/src/data2.js
OLD: and LLM-assisted formal writing levelled off by late 2023.
NEW: and the share of formal writing done with AI help levelled off by late 2023.
WHY: "LLM" unexplained and used nowhere else

[60]
FILE: /home/claude/site/src/data2.js
OLD: Attention-weighted AI share: what fraction of the minutes people read, watch and listen to is AI-made.
NEW: AI\'s share of attention: what fraction of the minutes people spend reading, watching and listening goes to AI-made material.
WHY: "attention-weighted" is jargon; "minutes people read" does not parse

[61]
FILE: /home/claude/site/src/data2.js
OLD: Disclosed use rising; real delegation unknown
NEW: Disclosed use rising; hand-over of decisions unknown
WHY: "delegation" drifts from the site's "hand-over"

[62]
FILE: /home/claude/site/src/data2.js
OLD: Fabricated citations reached the courts at over a hundred cases a month
NEW: Courts now catch AI-invented citations in more than 100 decisions a month
WHY: active voice; numeral; "decisions" matches the subtitle and axis

[63]
FILE: /home/claude/site/src/data2.js
OLD: The original paper's core mechanism, made countable: while most revenue comes from people's incomes and payrolls, the state has a fiscal reason to care about them. A flat line is the honest picture.
NEW: This puts a number on the original paper's central argument. While most revenue comes from people's incomes and payrolls, the state has a financial reason to care about them. The share has barely moved in three years.
WHY: verbless opener; "the honest picture" is mannered

[64]
FILE: /home/claude/site/src/data2.js
OLD: 'Formal roles handed to AI','10 firsts','2023 – 2026'
NEW: 'Reported milestones for AI in government','10 events','2023–2026'
WHY: several items are not formal roles or firsts (see query 12); unspaced en dash for a year range

[65]
FILE: /home/claude/site/src/data2.js
OLD: A timeline of institutional firsts
NEW: Ten reported milestones for AI in government, justice and the military since 2023
WHY: generic heading

[66]
FILE: /home/claude/site/src/data2.js
OLD: Reported first instances of AI being given a formal role in lawmaking, administration or justice.
NEW: Reported events, most of them first instances of AI being given a formal role in lawmaking, administration or justice.
WHY: not every item on the list is a first or a formal role

[67]
FILE: /home/claude/site/src/data2.js
OLD: Several of these are targets or symbolic appointments
NEW: Several of these are stated goals or symbolic appointments
WHY: "targets" misreads badly next to the item about nominating targets in Gaza

[68]
FILE: /home/claude/site/src/data2.js
OLD: and most feel they have no say
NEW: and most feel they have little or no control over it
WHY: the survey answer is "little or no control"; "no say" overstates

[69]
FILE: /home/claude/site/src/data2.js
OLD: The one direct, repeated measure of felt agency, and it already sits at a majority.
NEW: This is the only direct, repeated measure of whether people feel in control, and a majority already say they do not.
WHY: verbless; "felt agency" is jargon; "sits at a majority" is unclear

[70]
FILE: /home/claude/site/src/data2.js
OLD: <b>Delegation is old.</b> States have always relied on tools and experts. Delegating is not the same as losing control.
NEW: <b>Hand-over is old.</b> States have always relied on tools and experts. Handing a task over is not the same as losing control.
WHY: terminology; the site calls this hand-over

[71]
FILE: /home/claude/site/src/data3.js
OLD: has grown from four minutes to about twelve hours in three years.
NEW: has grown from 4 minutes to about 12 hours in three years.
WHY: numerals with units; matches the link page

[72]
FILE: /home/claude/site/src/data3.js
OLD: Hand-over is real, but it has not been a one-way march.
NEW: Hand-over is real, but it has not risen steadily.
WHY: cliché

[73]
FILE: /home/claude/site/src/data3.js
OLD: On ChatGPT the share of "do it for me" messages fell.
NEW: On ChatGPT the share of messages asking for a finished output fell.
WHY: scare quotes around an invented label

[74]
FILE: /home/claude/site/src/data3.js
OLD: The first measurable crack is at the bottom of the job ladder.
NEW: The first measurable change is at the bottom of the job ladder.
WHY: "crack" is more alarming than a finding whose cause is disputed

[75]
FILE: /home/claude/site/src/data3.js
OLD: The cause is disputed, and the wider job market shows no displacement.
NEW: The cause is disputed, and employment in the wider job market has not fallen.
WHY: "displacement" is jargon

[76]
FILE: /home/claude/site/src/data3.js
OLD: Where it matters most, we count paperwork.
NEW: Where it matters most, only paperwork is counted.
WHY: first person; site voice is impersonal

[77]
FILE: /home/claude/site/src/data3.js
OLD: Whiskers: 10th to 90th percentile.
NEW: Vertical bars span the 10th to 90th percentile of forecasts (the middle 80%).
WHY: "whiskers" and the percentile range unexplained

[78]
FILE: /home/claude/site/src/data3.js
OLD: name:'Pipeline erosion',desc:'Entry-level work shrinks and skill formation weakens. Institutions stay human-led.'
NEW: name:'Fewer people learn the work',desc:'Entry-level work shrinks and fewer people build skills. People still run institutions.'
WHY: "pipeline erosion", "skill formation" and "human-led" are jargon

[79]
FILE: /home/claude/site/src/data3.js
OLD: Those who are hired learn less, because AI does the formative work. Within a few years firms notice a thin senior bench.
NEW: Those who are hired learn less, because AI does the tasks they would have learned from. Within a few years firms find they have too few experienced staff.
WHY: "formative work" and "thin senior bench" are hard for non-native readers

[80]
FILE: /home/claude/site/src/data3.js
OLD: and underemployment of 48% by 2030.
NEW: and 48% of recent graduates underemployed (in jobs that do not need a degree) by 2030.
WHY: "underemployment" unexplained. Check the gloss against the Metaculus question (query 14)

[81]
FILE: /home/claude/site/src/data3.js
OLD: name:'Institutional delegation',desc:'AI is embedded in decisions faster than oversight grows.'
NEW: name:'Institutional hand-over',desc:'Institutions build AI into decisions faster than oversight grows.'
WHY: terminology ("hand-over"); passive voice

[82]
FILE: /home/claude/site/src/data3.js
OLD: In 2022, forecasters gave an AI gold medal at the International Mathematical Olympiad by 2025 a 2.3% chance (superforecasters) or 8.6% (experts).
NEW: In 2022, superforecasters gave a 2.3% chance, and experts an 8.6% chance, that an AI system would win gold at the International Mathematical Olympiad by 2025.
WHY: tangled sentence

[83]
FILE: /home/claude/site/src/data3.js
OLD: 'Real-world diffusion was not.'
NEW: 'Real-world uptake was not underestimated.'
WHY: heading only made sense read straight after the previous one; "diffusion" is jargon

[84]
FILE: /home/claude/site/src/data3.js
OLD: Dependence scales with no agreed cut-offs.
NEW: Questionnaires that score dependence exist, but have no agreed cut-offs.
WHY: "scales" reads as a verb

[85]
FILE: /home/claude/site/src/app.js
OLD: How far down the chain can we see?
NEW: How far down the chain does the evidence reach?
WHY: first person in the main headline

[86]
FILE: /home/claude/site/src/app.js
OLD: The first links are measured every month and are moving fast.
NEW: The first links are measured regularly and are moving fast.
WHY: capability is measured per model release and adoption per quarter, not monthly

[87]
FILE: /home/claude/site/src/app.js
OLD: and AI makes half of new online content.
NEW: and AI makes about half of new web articles.
WHY: overclaims; the evidence is web articles and uploads to one music platform

[88]
FILE: /home/claude/site/src/app.js
OLD: So the honest reading is narrow. The early links are moving in the direction the theory predicts, and there are no instruments on the later ones.
NEW: The evidence supports only a narrow conclusion. The early links are moving in the direction the theory predicts, and nobody measures the later ones.
WHY: "the honest reading" is mannered; "no instruments" is a metaphor

[89]
FILE: /home/claude/site/src/app.js
OLD: Workers' share of US income: 25 years of history and the range of published forecasts
NEW: Workers' share of US income has fallen for 25 years, and economists expect it to keep falling
WHY: chart title was a label, not a takeaway

[90]
FILE: /home/claude/site/src/app.js
OLD: Most forecasters think rapid progress by 2030 is unlikely, but not negligible
NEW: Forecasters give rapid AI progress by 2030 a 13 to 23% chance
WHY: "unlikely, but not negligible" says little; the numbers are on the chart

[91]
FILE: /home/claude/site/src/app.js
OLD: Pick a world. These are economists' median forecasts for the United States.
NEW: Choose a scenario. These are economists' median forecasts for the United States.
WHY: the page calls these scenarios everywhere else

[92]
FILE: /home/claude/site/src/app.js
OLD: Medians from 60 to 69 economists (Karger, Tetlock et al., NBER working paper 35046). No intervals are published for most of these, so the spread between lines is a spread between scenarios, not a measure of uncertainty.
NEW: Each figure is the median (middle) forecast of 60 to 69 economists (Karger, Tetlock et al., NBER working paper 35046). Most have no published uncertainty range. The gap between lines shows how the scenarios differ, not how uncertain the forecasters are.
WHY: "median" and "intervals" unexplained; long sentence

[93]
FILE: /home/claude/site/src/app.js
OLD: On workers' share of income, serious forecasts for 2050 run from 3.5 to 15.5 points lower
NEW: On workers' share of income, published forecasts for 2050 run from 3.5 to 15.5 points lower
WHY: "serious" is a value judgement the page does not support

[94]
FILE: /home/claude/site/src/app.js
OLD: <span class="chip">Derived</span>
NEW: <span class="chip">Observatory calculation</span>
WHY: the tag is called "Observatory calculation" on every other chart and on the method page

[95]
FILE: /home/claude/site/src/app.js
OLD: Economists expect people to leave the workforce, not join the dole queue
NEW: Economists expect people to leave the workforce, not to become unemployed
WHY: British idiom that many readers will not know

[96]
FILE: /home/claude/site/src/app.js
OLD: 272 experts, three-round Delphi.
NEW: 272 experts, surveyed in three rounds with feedback between rounds (a Delphi study).
WHY: "Delphi" unexplained

[97]
FILE: /home/claude/site/src/app.js
OLD: How far to trust any of this
NEW: How far to trust these forecasts
WHY: vague heading

[98]
FILE: /home/claude/site/src/app.js
OLD: In the rapid world economists still expect unemployment of about 6%. What changes is that participation falls to 55% and workers' share of income falls by ten points. In their view people leave the workforce; they do not queue for work.
NEW: In the rapid scenario economists still expect unemployment of about 6%. What changes is that labour-force participation falls to 55% and workers' share of income falls by 10 points. In their view people leave the workforce and are not counted as unemployed.
WHY: "world" for "scenario"; "participation" unexplained; "queue for work" is idiom

[99]
FILE: /home/claude/site/src/app.js
OLD: Below are the measures that would let us see the later links
NEW: Below are the measures that would make the later links visible
WHY: first person

[100]
FILE: /home/claude/site/src/app.js
OLD: systems stay aligned with people partly because they need them, and AI reduces that need.
NEW: the economy, culture and the state serve people partly because those systems need people, and AI reduces that need.
WHY: "aligned" is jargon here; "they need them" has two possible readings

## Patterns to sweep (not listed one by one)

- "horizon(s)" remains in data1.js (unmeasured and watch bullets of link 1) and data3.js (first blind spot; finding 1 caption "METR 50% TIME HORIZON"). Use "task length".
- "second wave" (data2.js, three places) means "repeat survey" or "repeat test". Say that.
- "tool calls" (data1.js twice, data3.js once): "actions" is the word the tab uses.
- "labour share" survives in the futures page subtitle, finding 5 of the track record and the fan-chart footers. Use "workers' share" except where naming the BLS series.
- "pathways" (futures section 4 note) against "routes" everywhere else.
- "recent leg" also appears in the first sceptic bullet of link 5.
- Numbers as words with units: "eight months", "four and a half", "forty years", "thirteen times".
- Date format: the home page kicker has "3 Oct 2026"; the method page and footer have "3 October 2026".
- "attention-weighted" also appears in the blind spots list and its callout.

## Queries

1. data1.js, price tab: "$0.30 → $0.0004 ... (725-fold)". 0.30 / 0.0004 is 750. Either a rounded figure or the multiple is wrong.
2. data1.js, firms: the old title said adoption "doubled", but the note gives about 10% to 17%. The sceptic bullet says "from 18% to 78% of firms"; 18% appears nowhere else (the chart has 17.3%, 17.8% and 19.8%).
3. data1.js, St. Louis Fed: "under 3% of job tasks have adoption above 50%; none is above 70%". Adoption by whom, measured how? A reader cannot tell what is being counted.
4. data1.js, agents tab: the subtitle says "three Anthropic studies" and two sources are listed. The note says each pair "describes engineers at a frontier lab", but three of the six rows are Claude Code users or the public API.
5. data2.js, skills: the panel is headed "Unaided ability: measured once each", but the consultants and developers items measure performance with AI. The January 2026 study of 52 engineers has no source link anywhere on the site, and the sceptic bullet refers to "the Anthropic study" without saying which study that is.
6. data2.js, courts: tab says 2,137 decisions; the monthly series in the file sums to 2,136. "33 involve judges" is ambiguous, since every case involves a judge. Presumably the judge produced the invented material.
7. data2.js, companions: "80% of teen users spend more time with real friends". More than with AI companions? The comparison is missing.
8. data2.js, link 5 watch list: "The share falling while unemployment stays low" is listed as something to watch for, but route D on the futures page already scores it "Seen". The clause "which earlier automation waves did not produce" has no source.
9. data3.js and app.js: the scenario card gives workers' share as "55.5% in 2025" while the rest of the site says 52.8%. These are different measures. The card and the route A anchor need a few words saying so.
10. data3.js, routes A and B: the young-worker gap is dated "the year to June 2026" and "July 2025 ... June 2026", while link 4 gives latest data as August 2026.
11. data3.js, route D: "an 'AI dystopia' outcome a 26% chance of arriving first before 2050". First ahead of what?
12. data2.js, firsts timeline: three of the ten items are not AI being given a role (US inventory passing 3,600; judges saying they use AI; the EU deferring obligations), and the Gaza item is military, outside "lawmaking, administration or justice".
13. data3.js: "framing alone shifts it by a factor of two" (a factor of two of a date?) and "oversight raised uptake and lowered accuracy" (uptake of what?) are both unclear as written.
14. Two glosses in the edits add a definition and need checking against the source: "AI-exposed" (edit 27) and "underemployed" (edit 80).
15. Tour captions state the mechanism as fact for links rated "One-off evidence": "Skills go unpractised." and "Decisions get routed through AI." The evidence pages do not support that level of certainty.
16. app.js, method page: "via a research assistant's extraction". Human or AI? The callout says "AI research assistance". The five evidence levels also carry three different sets of labels (map legend, tour and index, method page).

## Leave alone

- Home page definition of gradual disempowerment, and "The chain, as a map." note.
- "The evidence does not show disempowerment. It could not, yet."
- Tour captions for hand-over, entry-level work and the end stop ("Here the map runs out...").
- Claims for links 5, 6 and 8, and the decks for links 6 and 8.
- Chart titles: "Any use has more than doubled since 2023. Daily use is the line to watch."; "A second survey shows the same climb"; "Automation overtook augmentation in August 2025, then fell back"; "Google says three-quarters of its new code is generated by AI"; "Employers blamed AI for a fifth of announced job cuts in 2026, mostly in spring"; "Most of the fall in software postings came before ChatGPT"; "Students who practised with ChatGPT did better in practice and worse in the exam"; "Developers thought AI made them faster. The stopwatch said slower."; "When an AI summary appears, people click through about half as often"; "Trust in news fell in 2026 after three flat years"; "Disclosed federal AI uses grew fivefold in two years"; "For two years an NGO found more government algorithms than the government disclosed"; "The state still depends on people's pay".
- Notes: "On the latest reading 85% of employees still do not use AI every day."; "A narrow group can be hit while an economy-wide measure stays flat."; "A use case is a unit of paperwork..."; "It records what judges caught and wrote up, and so rises with vigilance as well as misuse."; "Concern is a mood, not a measure of lost agency."
- Section headings on link pages: "What a sceptic would say", "What nobody measures", "What to watch". Signpost labels "Seen / Partly / Not yet / Unmeasured".
- "Paperwork is counted, decisions are not" and "Losing a skill is not always a loss. Few people miss long division."
- Method page: "Status of the figures" callout, "Known limits" list, the five-step scale wording.
- Blind spots callout "If only three could be funded".
- US spellings inside source titles (Gallup "Organizational", "labor market", FRED series names). They are titles of works.
- En-dash ranges in chart labels and tabs ("1–3%", "Ages 22–25", "$720–745bn", "Jan–Sep 2026") and the upper-case small labels under figures.
