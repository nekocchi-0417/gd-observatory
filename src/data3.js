/* ---------- content: findings, futures, blind spots ---------- */
const FINDINGS=[
 {h:'The front of the chain is moving fast.',p:'The best AI system now completes about 1 in 5 real paid remote-work projects, up from 1 in 40 a year earlier. The longest software task it can finish half the time grew from 4 minutes to about 12 hours before METR stopped tracking it. Half of US workers now use AI on the job.',links:[['capability','Capability'],['adoption','Adoption']],
  thumb(el){Charts.spark(el,{log:true,rpad:112,xl:['Mar 2023','Feb 2026'],aria:'Task length rising from 4 minutes to 12 hours',series:[{color:C.s1,dotsAll:true,pts:METR.filter(m=>m[4]&&m[0]>2023&&m[1]<1000).map(m=>[m[0],m[1]]),startLabel:'4 min',endLabel:'12 hours'}]})},cap:'LONGEST TASK DONE HALF THE TIME · METR · LOG SCALE'},
 {h:'Hand-over is real, but it has not risen steadily.',p:'On Claude.ai the share of conversations that hand the task over rose from 41% to 49% in 2025, then eased to 45%. On ChatGPT the share of messages asking for a finished output fell.',links:[['handover','Hand-over']],
  thumb(el){Charts.spark(el,{min:0,max:100,rpad:112,xl:['Jan 2025','Nov 2025'],refs:[{v:50,label:'50%'}],aria:'Automation share 41, 49, 45 percent, on a zero to 100 scale',series:[{color:C.s1,dotsAll:true,pts:[[2025,41],[2025.6,49],[2025.87,45]],startLabel:'41%',endLabel:'45% hand over'}]})},cap:'CLAUDE.AI CONVERSATIONS HANDING THE TASK OVER · 0–100%'},
 {h:'The first measurable change is at the bottom of the job ladder.',p:'Jobs for 22 to 25 year olds in the most AI-exposed occupations are down 13% since late 2022. For their peers in the least exposed occupations they are up 8%. The cause is disputed, and employment in the wider job market has not fallen.',links:[['work','Entry-level work'],['share',"Workers' share"]],
  thumb(el){Charts.spark(el,{min:84,max:110,rpad:124,xl:['Nov 2022','Aug 2026'],refs:[{v:100,label:'100'}],aria:'Employment index diverging: least exposed 108, most exposed 87',series:[{color:C.s2,pts:canS(CAN.y1).slice(14),endLabel:'Least exposed 108'},{color:C.s1,w:2.5,pts:canS(CAN.y5).slice(14),endLabel:'Most exposed 87'}]})},cap:'JOBS FOR AGES 22–25, NOV 2022 = 100 · ADP'},
 {h:'AI is flooding the supply of culture. Attention has not followed, yet.',p:'Over half of the music uploaded to Deezer is AI-generated, and about half of new web articles are mostly AI-written. AI tracks get 1 to 3% of streams.',links:[['culture','Culture and information']],
  thumb(el){Charts.spark(el,{min:0,max:60,rpad:112,xl:['Jan 2025','Jul 2026'],aria:'AI share of Deezer uploads rising to over 50 percent while share of streams stays near 2 percent',series:[{color:C.s1,w:2.5,pts:[[2025.04,10],[2025.29,18],[2025.71,28],[2025.87,34],[2026.04,39],[2026.3,44],[2026.46,50]],startLabel:'10%',endLabel:'Uploads over 50%'},{color:C.s2,pts:[[2025.87,0.5],[2026.3,2],[2026.55,2]],endLabel:'Streams 1–3%'}]})},cap:'AI-GENERATED MUSIC ON DEEZER, SHARE OF TOTAL'},
 {h:'Where it matters most, only paperwork is counted.',p:'Governments disclose thousands of AI uses, but almost none publishes how many decisions AI makes, and none we found publishes how often an official overrules it. Whether people can still do their work unaided has never been tracked over time.',links:[['institutions','Institutions'],['skills','Skills and judgement'],['gaps','Blind spots']],
  thumb(el){el.innerHTML='<div class="duo"><div><b>3,611</b><span class="thumbcap">AI USES DISCLOSED</span></div><div><b class="zero">0</b><span class="thumbcap">DECISION COUNTS IN THE US INVENTORY</span></div></div>'},cap:'US FEDERAL AGENCIES, 2025 INVENTORY'}
];

const PRIORITY=[
 ['skills','Unaided ability, tested twice','A panel that tests the same workers, students or clinicians without AI every year. Of 233 generative-AI studies found, only 4 re-test people without AI over months.'],
 ['institutions','The override rate','How often the responsible official changes an AI recommendation in a government decision. No government publishes it.'],
 ['culture','Attention-weighted AI share','How much of what people read, watch and hear is made by AI, counted by minutes of attention, not by items published.']];

const WORLDS={
 slow:{name:'Slow',color:C.p1,def:'By 2030 AI is a capable assistant. It can do about half of the freelance software jobs that take a person a day.',odds:'Economists give this a 39% chance on average; the AI expert panel 26%.',take:"Little moves by 2030: workers' share slips half a point and participation one point. By 2050 the share is 3.5 points lower and AI does a quarter of work hours."},
 central:{name:'Central view',color:C.p2,def:"Forecasters' own best guess, with no scenario imposed.",odds:'',take:"AI does a tenth of work hours by 2030 and 40% by 2050. Workers' share falls 5.5 points by 2050 and labour-force participation falls from 62.6% to 58.3%, while unemployment stays near 5%."},
 rapid:{name:'Rapid',color:C.p3,def:'By 2030 AI surpasses people at most cognitive and physical tasks.',odds:'Economists give this a 14% chance on average (their median is 10%); the AI expert panel 23%.',take:"Economists still expect unemployment of about 6%. What changes is that by 2050 labour-force participation falls to 55% and workers' share of income falls by 10.5 points. Their numbers imply that people leave the workforce and are not counted as unemployed."}};
const ODDS=[ // slow, moderate, rapid
 {label:'Economists (69)',v:[38.6,47.4,14.0]},{label:'Superforecasters (38)',v:[45.0,42.4,12.6]},{label:'General public (401)',v:[40.8,41.0,18.1]},{label:'AI expert panel, LEAP (231)',tag:'DIFFERENT SURVEY',v:[26,52,23]}];
const MINIS=[
 {id:'hours',t:'Work hours done with generative AI',base:[2024.5,3.35,"3.35% in 2024 on the forecasters' measure"],v:{slow:[8.0,25.0],central:[10.1,40.0],rapid:[24.2,62.0]},y:[0,70],ticks:[0,20,40,60],f:v=>v+'%'},
 {id:'share',t:"Workers' share of income",base:[2025.5,55.48,"55.5% in 2025 on the forecasters' measure (the BLS series read 52.8% in Q2 2026)"],v:{slow:[55.0,52.0],central:[54.3,50.0],rapid:[52.0,45.0]},y:[40,60],ticks:[40,45,50,55,60],f:v=>v+'%'},
 {id:'lfpr',t:'Adults in the labour force',base:[2025.04,62.6,'62.6% in Jan 2025; 61.8% in Sep 2026'],v:{slow:[61.5,59.2],central:[61.0,58.3],rapid:[59.3,55.0]},y:[42,66],ticks:[45,50,55,60,65],f:v=>v+'%',
  ranges:{central:[[2030,56.9,65.2]],rapid:[[2030,53.1,64.4],[2050,44.8,64.7]]},rnote:'Vertical bars span the 10th to 90th percentile of forecasts (the middle 80%).'},
 {id:'unemp',t:'Unemployment rate',base:[2026.7,4.2,'4.2% in Sep 2026'],v:{slow:[5.0,5.0],central:[5.0,5.0],rapid:[6.0,6.0]},y:[0,10],ticks:[0,2,4,6,8,10],f:v=>v+'%'},
 {id:'wealth',t:'Wealth held by the richest 10%',base:[2023.5,71.2,'71.2% in 2023'],v:{slow:[72,75],central:[73.2,75.0],rapid:[75.0,80.0]},y:[65,85],ticks:[65,70,75,80,85],f:v=>v+'%',rnote:'Slow line from the LEAP expert panel.'}];

const ROUTES=[
 {id:'A',name:'Augmentation holds',desc:'AI raises productivity. People keep their skills, their jobs and their say.',on:['capability','adoption','handover'],
  story:'Capability keeps improving, but most use stays collaborative. Junior hiring recovers as new entry-level roles form around AI. Workers\' share of income drifts down by a point or two, as it has for decades. The one-off deskilling results fail to replicate at scale.',
  anchor:'Closest published forecast: economists\' slow-progress scenario, with workers\' share at 55.0% in 2030 (55.5% in 2025 on the forecasters\' measure; the BLS series read 52.8% in Q2 2026) and participation at 61.5%.',
  signs:[['partial','Augmentation stays ahead of automation in everyday use','52% against 45% on Claude.ai in November 2025, after automation briefly led in August.'],
   ['seen','No economy-wide displacement','Employment among 25 to 54 year olds is 80.7%, as high as before ChatGPT. Unemployment is 4.2%.'],
   ['not','The gap for young workers narrows','It widened from 15% to 19% in the year to June 2026.'],
   ['not',"Workers' share stops falling",'Five quarterly falls in a row to mid-2026.'],
   ['unm','Unaided skills hold up in repeated tests','Only 4 of 233 studies of generative AI re-test people without AI over months, all narrow; none re-tests a general population.']]},
 {id:'B',name:'Fewer people learn the work',desc:'Entry-level work shrinks and fewer people build skills. People still run institutions.',on:['capability','adoption','handover','work','skills'],
  story:'The squeeze at the bottom of the ladder moves up an age band at a time. Those who are hired learn less, because AI does the tasks they would have learned from. Within a few years firms find they have too few experienced staff. People still sign off decisions, but fewer of them can check the machine\'s work.',
  anchor:'Closest published forecast: Metaculus expects recent-graduate unemployment of 10% by 2030 and 11.9% by 2035 (5.5% in 2025), and 48% of recent graduates underemployed (in jobs that do not need a degree) by 2030.',
  signs:[['seen','The gap for young workers widens year on year','15% in July 2025, 19% in June 2026.'],
   ['seen','Graduates of exposed majors start lower','Five points less likely to land a first job, and 13% lower starting pay (Census, September 2026).'],
   ['partial','The squeeze reaches the next cohort','Ages 26 to 30 in the most exposed jobs: index 96.2 in August 2026, down from a peak of 101.8. Stanford notes "modest declines for the next-youngest groups" in two occupations and publishes no gap figure.'],
   ['partial','Learning loss replicates','Two randomised trials (school maths, junior engineers) point the same way. Neither has been repeated.'],
   ['unm','Firms cut training for juniors','No data series.']]},
 {id:'C',name:'Institutional hand-over',desc:'Institutions build AI into decisions faster than oversight grows.',on:['capability','adoption','handover','culture','institutions'],
  story:'The job market holds up. The change is inside institutions: governments and large firms route more decisions through AI systems because it is cheaper and faster, and review becomes a formality. Public input counts for less, because much of it is machine-written and machine-read.',
  anchor:'No forecaster publishes numbers for this route. The nearest: expert panellists\' median year for governments restricting AI model releases is 2030 (question wording not checked), and the EU has already deferred its high-risk rules to December 2027.',
  signs:[['seen','Disclosed government AI use grows quickly','US federal use cases went from 710 to 3,611 over two inventory rounds, as reporting rules widened.'],
   ['seen','Oversight rules slip','The EU agreed in May 2026 to defer its high-risk AI obligations by 16 months; its public database was reported as not yet open in July 2026.'],
   ['seen','AI reads what the public sends in','The UK\'s "Consult" tool processed over 50,000 consultation responses in about two hours (October 2025), according to trade-press reports.'],
   ['partial','AI is given formal office','Albania\'s AI "minister" (September 2025) is symbolic; officials still decide.'],
   ['unm','Officials rarely overrule AI recommendations','No government publishes override rates.']]},
 {id:'D',name:'Lock-in',desc:'People struggle to take tasks back. The skills, institutions and alternatives have decayed.',on:['capability','adoption','handover','work','share','skills','culture','institutions','influence'],
  story:'All four lines compound. By the 2040s the people who could run key processes without AI have retired or were never trained, the suppliers are few, and the economic reasons to keep people in the loop have thinned. Reversal is possible in principle, but nobody has the capacity or the incentive.',
  anchor:'Closest published forecast: economists\' rapid-progress scenario for 2050, with workers\' share at 45%, participation at 55% and the richest tenth holding 80% of wealth. Asked which of five named AI futures comes first before 2050, Metaculus forecasters give "AI dystopia" 26%.',
  signs:[['seen',"Workers' share falls while unemployment stays low",'A record-low 52.8% with unemployment at 4.2%.'],
   ['seen','Computing power concentrates in private hands','Companies\' share of known AI supercomputer capacity went from 40% to 80% between 2019 and 2025.'],
   ['partial','People decline to work without AI','30 to 50% of developers in METR\'s 2026 study avoided tasks they would have had to do unaided. One small study.'],
   ['not',"The state's revenue stops depending on pay",'About 86% came from income and payroll taxes in FY2026, up from 84%, as corporate and tariff receipts fell.'],
   ['not','A documented failure to take a process back from AI','None found.'],
   ['unm','A few vendors run core state functions','Not measured.']]},
 {id:'E',name:'Plateau',desc:'AI progress or uptake stalls, or rules bite, before the later links move.',on:['capability','adoption'],
  story:'The curve bends. Task lengths stop doubling, or long tasks stay too costly for routine use. Adoption settles at occasional use, and regulators or liability rules keep people in the loop where it matters. The later links never come under the pressure the theory expects.',
  anchor:'Closest published forecast: the slow-progress scenario, which economists give a 39% chance on average. No scenario in the surveys describes a reversal.',
  signs:[['not','Capability gains stop','METR\'s task lengths doubled about every 4 months from 2023 until it stopped adding models in May 2026, and the best AI\'s share of real paid projects rose from 2.5% to 21% in a year.'],
   ['not','Adoption levels off','Use at work has risen in each Gallup reading shown, to 53% in August 2026, though the latest quarter added only 1 point.'],
   ['partial','Hand-over stops rising','On Claude.ai it rose to 49% and eased to 45%. On ChatGPT the share of messages asking for a finished output fell.'],
   ['partial','AI\'s share of new content stops growing','Articles plateaued: AI-written articles have been near half of new web articles since late 2024. Music and book supply are still rising: AI uploads to Deezer, and AI text in new ebooks (23% in 2023 to 53% in 2025).'],
   ['not','Rules bind before deployment','The EU deferred its high-risk obligations to December 2027.']]}];
const SPLAB={seen:'Seen',partial:'Partly',not:'Not seen',unm:'Unmeasured'};

const TRACK=[
 ['Capability was underestimated.','In 2022, superforecasters gave a 2.3% chance, and experts an 8.6% chance, that an AI system would win gold at the International Mathematical Olympiad by 2025. It happened. A 2026 review says both groups "dramatically underestimate" benchmark progress.'],
 ['Real-world uptake was not underestimated.','Experts expected 7.3% of US ride-hailing trips to be driverless by 2027. The trend points to about 2.5%. On adoption the record is mixed.'],
 ['Exposure is not job loss.','In 2013 Frey and Osborne put 47% of US jobs at high risk of computerisation within "a decade or two". Thirteen years on, unemployment is 4.2%.'],
 ['Answers move with the question.',"AI researchers' median date for human-level AI moved from 2060 to 2047 in a single year, and two ways of wording the same question give answers that differ by about a factor of two."],
 ['Almost nobody forecasts disempowerment itself.','No probability for "loss of human agency" could be extracted for this draft: the MIT Delphi study rated it, but the figure sits in an interactive chart. A 2023 survey of AI researchers gave a median 10% to extinction or similarly severe disempowerment. Most forecasts cover the ingredients: workers\' share, participation, wealth concentration.']];

const FUT_SRC=[
 ['Karger, Tetlock et al., Forecasting the Economic Effects of AI (NBER w35046, Apr 2026)','https://www.nber.org/papers/w35046'],
 ['Forecasting Research Institute, LEAP panel reports, waves 3, 6, 7, 8 and 9','https://leap.forecastingresearch.org/reports'],
 ['Metaculus, Labor Automation Forecasting Hub (accessed 3 Oct 2026)','https://www.metaculus.com/labor-hub/'],
 ['Anthropic, Scenarios for our economic future (Sep 2026)','https://www.anthropic.com/institute/econ-scenarios'],
 ['Saeri et al., Prioritization of risks from AI: MIT AI Risk Initiative Delphi study (Jun 2026)','https://arxiv.org/abs/2606.04490'],
 ['Axios interview with Dario Amodei (28 May 2025)','https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic'],
 ['Forecasting Research Institute, How accurate have AI progress forecasts been so far? (Sep 2026)','https://forecastingresearch.org/research/ai-progress-accuracy-update'],
 ['Forecasting Research Institute, Assessing near-term accuracy in the XPT (Sep 2025)','https://forecastingresearch.org/near-term-xpt-accuracy'],
 ['Grace et al., Thousands of AI authors on the future of AI (2024)','https://arxiv.org/abs/2401.02843'],
 ['Frey & Osborne, The Future of Employment (2013)','https://oms-www.files.svdcdn.com/production/downloads/academic/The_Future_of_Employment.pdf']];

const GAPS=[
 ['capability','Task lengths outside software','METR-style task-length measures for casework, negotiation and management tasks, re-run on each new model.','METR (software only; no model added since May 2026); Remote Labor Index (real projects, no task length); GDPval (one vendor, one-off deliverables).'],
 ['capability','Reliability on real work','The same real tasks run many times by an independent evaluator, reporting how often AI succeeds on every run.','Princeton\'s reliability tracker: benchmark tasks only (reliability 0.69 to 0.87).'],
 ['capability','Cost per completed real task','The full cost of finishing real tasks with AI, tracked for each new model.','Epoch AI: cost of a fixed benchmark score, about 13 times cheaper a year.'],
 ['capability','Lab-to-life gap','Benchmark scores set against real users\' results on the same kind of task, repeated for each new model.','One UK trial (Bean et al. 2026): 94.9% for models alone, under 34.5% for people using them.'],
 ['adoption','Work hours done with AI, by occupation','A quarterly official survey that reports the share of hours, not yes-or-no use.','St. Louis Fed: 6.3% of hours (Q2 2026), quarterly and by occupation group, from an online panel; no statistics agency measures it.'],
 ['handover','The review rate','For each task AI completes, whether a person checked the output before it was used. Across providers, on one definition.','Anthropic: at most 73% of agent actions have a human in the loop.'],
 ['work','Junior hiring inside firms that adopt AI','Payroll data that links the date a firm adopted AI to its hiring by seniority.','Stanford and ADP: by age and occupation, not by firm adoption. One 2026 paper (Hosseini and Lichtinger) finds junior employment about 9% lower after six quarters at firms that adopted generative AI, through slower hiring; senior employment unchanged.'],
 ['share',"AI capital's share of income",'National accounts that split capital income into AI-related and other.','BLS labour share; press figures on capital spending.'],
 ['skills','Unaided ability, tested twice','A panel of workers, students or clinicians tested without AI at regular intervals.','Of 233 generative-AI studies found, 4 re-test people without AI over months; all narrow.'],
 ['skills','Take-back time','How long performance takes to recover when AI is withdrawn for a week or a month.','None. Every withdrawal test found is a single check. In one METR study, 30 to 50% of developers avoided unaided tasks.'],
 ['skills','Dependence checked against behaviour','A short dependence scale tested against the same people\'s AI use and unaided performance, with agreed cut-offs.','At least eight scales exist; none checked against behaviour.'],
 ['skills','Benchmark-to-person link','People given models with different benchmark scores, followed to see what changes in them.','DeepMind (2026): manipulative tactics did not predict belief change; users rate disempowering replies more highly.'],
 ['culture','Attention-weighted AI share','The fraction of minutes read, watched or heard that is AI-generated, by platform.','Deezer: 1 to 3% of streams.'],
 ['culture','Convergence in what gets published','A yearly index of diversity in vocabulary, style and subject for text, music and images.','Lab experiments only.'],
 ['institutions','Decisions made by AI','For each high-impact system, decisions per year: fully automated, AI-recommended with sign-off, or made by a person alone.','Disclosed use cases; Met facial-recognition alerts (2,077 a year); EU platforms\' automation flags (43%).'],
 ['institutions','The override rate','The share of AI recommendations that the responsible official changes, with time spent per case.','One lab experiment (292 people): letting people adjust an algorithm\'s output made them use it more, and made the decisions less accurate.'],
 ['institutions','Dependence on foreign model providers','Share of public-sector AI spending and queries by vendor and country of origin.','US: Microsoft in 100 of 311 generative-AI uses naming a vendor; Canada: 38% of 409 systems vendor-built; Singapore: about 80% of officers have used the government chatbot, no vendor breakdown.'],
 ['influence','Who can decide','The smallest group able to settle an outcome, and its mix of people and AI systems, applied to real institutions.','None found.'],
 ['influence','A population measure of disempowerment','A validated survey scale paired with behavioural tasks, repeated every year.','Pew: 57% feel little or no control over AI in their lives. UK: 50% say their views are not represented in decisions about AI (Ada Lovelace Institute and Alan Turing Institute, 2025). Questionnaires that score dependence exist, but have no agreed cut-offs.']];

/* priority of each missing measure (index into GAPS), a first pass by the observatory:
   now = a method exists and the step is close to the outcome; it needs money and a team.
   method = the construct or instrument still has to be designed and tested.
   later = further from the outcome, or data may appear on its own. */
const GAPPRI={0:'later',14:'later',15:'later',16:'later',1:'later',2:'method',3:'later',4:'method',
 5:'now',6:'now',17:'now',18:'method',7:'later',8:'method',9:'now',10:'now',11:'now',12:'method',13:'method'};
/* how each rating is reached: repeated, direct, independent of AI developers, tied to AI */
const RUBRIC={capability:['yes','yes','yes','yes'],adoption:['yes','yes','yes','yes'],handover:['yes','yes',"no: companies' own logs",'yes'],
 work:['yes','yes','yes','disputed'],share:['yes','yes','yes','no'],skills:['no: one-offs','yes','mixed','yes'],
 culture:['yes','yes','no: vendors and platforms','yes'],institutions:['yes','no: disclosures, not decisions','yes','yes']};
/* what is counted at each stop, and what the argument needs */
const DEFS={capability:['How long a software task leading AI systems can finish, and what share of real paid projects they complete','Whether AI can do the work institutions run on: casework, negotiation, management'],
 adoption:['Whether, and how often, people and firms use AI','How much of the work depends on it, and whether people could do without'],
 handover:["How often users ask a chatbot for a finished output, in two companies' logs",'How often AI output is used with nobody checking it'],
 work:['Jobs by age in occupations where AI can do many of the tasks','Whether firms that adopt AI hire fewer juniors'],
 share:['The part of business income paid to workers','How much of the change is caused by AI'],
 skills:['What a handful of small studies each found once','Whether the same people can still do the work unaided, year after year'],
 culture:['How much of what is published is classed as AI-made','How much of what people read, watch and hear is AI-made, and whether it changes what they believe'],
 institutions:['How many AI uses governments disclose, and how many errors courts catch','How many decisions AI makes, and how often an official overrules it'],
 influence:['Nothing directly. One poll asks whether people feel in control of AI',"Whether people's preferences still change what governments, firms and media do"]};
const COUNTER=[
 ['The gap for young workers closes','Jobs for 22 to 25 year olds in AI-exposed occupations return to the path of their less-exposed peers.'],
 ["Workers' share recovers",'Its four-quarter average climbs back above the 2025 level.'],
 ['Skills hold up','A repeated test finds unaided ability stable among heavy users of AI.'],
 ['Officials overrule the machine','Published override rates show officials changing a substantial share of AI recommendations.'],
 ['Attention stays with people','AI-made work stays a small share of what people listen to and read, even as it fills the supply.']];
const GLOSSARY=[
 ['Leading or frontier AI system','The most capable AI models available at a given time.'],
 ['Task length at 50% success','The length of task, counted as the time a skilled person would need, that an AI system completes successfully half the time. It measures difficulty, not how long the AI runs.'],
 ['AI-exposed occupation','A job in which AI could do a large share of the tasks.'],
 ['Delegation to AI (hand-over)','Giving AI a task to complete, rather than working through each step with it. Anthropic calls these two patterns automation and augmentation.'],
 ["Workers' share of income (labour share)",'The part of business income paid out as wages and benefits, as opposed to profit, rent and interest.'],
 ['Labour-force participation','The share of adults who are working or looking for work. People who stop looking are not counted as unemployed.'],
 ['Index, for example "Nov 2022 = 100"','A series rescaled so that a chosen date equals 100. A reading of 87 is 13% below that date.'],
 ['Log scale','An axis on which each step multiplies the last (1, 4, 15, 60 minutes). Steady doubling shows as a straight line.'],
 ['Percentage point','The difference between two percentages. A fall from 55% to 53% is two percentage points.'],
 ['Median','The middle answer when all answers are put in order.'],
 ['Proxy, or nearby measure','A measure of something close to the thing of interest, used because the thing itself is not measured.'],
 ['Use case','One entry in a government list of AI uses. A chatbot and a benefits-eligibility model each count once.'],
 ['Override rate','How often the responsible official changes or rejects what an AI system recommended.'],
 ['Superforecasters','People with a strong measured record in forecasting tournaments.'],
 ['Delphi study','A survey of experts run in several rounds, with the group shown its own answers between rounds.'],
 ['Who the sources are','METR: a non-profit that evaluates AI systems. ADP: a US payroll company. BLS: the US Bureau of Labor Statistics. Epoch AI: a research institute that tracks AI trends. HEPI: the UK Higher Education Policy Institute. Graphite and Originality.ai: firms that sell search-marketing services and AI detectors. Challenger: a US outplacement firm that publishes monthly job-cut counts. LEAP: a standing panel of AI experts run by the Forecasting Research Institute. Metaculus: a public forecasting site. Center for AI Safety: a non-profit research group. Scale AI: a firm that sells training data to AI companies. Public Citizen: a US consumer-advocacy group.']];
