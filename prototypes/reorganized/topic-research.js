/* Map counts reuse the library; research proposals are editorial. */
const skillsQuestions24 = [
  {
    title:'Do skill changes last?',
    measured:'A Turkish high-school trial tests students without AI immediately after practice.',
    next:'Follow the same people over several months, testing skills without AI and comparing different patterns of AI use against a baseline.',
    sources:[['Bastani et al., 2025','https://hamsabastani.github.io/education_llm.pdf']]
  },
  {
    title:'Does learning transfer to unfamiliar tasks?',
    measured:'In that trial, exam problems are similar to the practice exercises.',
    next:'Add unfamiliar problems and tasks in a different setting, then test whether people can apply what they learned without AI.',
    sources:[['Bastani et al., 2025','https://hamsabastani.github.io/education_llm.pdf']]
  },
  {
    title:'Can people catch and correct AI errors?',
    measured:'Experiments test responses to incorrect advice; workplace surveys capture how people say they check AI output.',
    next:'Track error detection, justified overrides and final accuracy during sustained workplace use, alongside reports of confidence and effort.',
    sources:[['Bu\u00e7inca et al., 2021','https://arxiv.org/abs/2102.09692'],['Lee et al., 2025','https://doi.org/10.1145/3706598.3713778']]
  }
];

const topicMaps24 = {
  skills: {
    area:'cognition',
    title:'How does using AI affect our skills and judgement?',
    intro:'Research tests learning, task performance and how people judge AI advice. A central question is how these abilities change with continued use.',
    description:'Studies and evaluations grouped by the skill and measurement tags in our collection.',
    questions:skillsQuestions24
  },
  influence: {
    area:'autonomy',
    title:'How much control do people retain when AI shapes their decisions?',
    intro:"Explore research on people's choices, sense of agency and control over AI-assisted decisions.",
    description:'Agency and autonomy studies grouped by the constructs and measures tagged in our collection.',
    scope:'This map focuses on individual agency. Government decisions are covered in the AI in government map; broader political power remains outside this selection.',
    questions:[
      {
        title:'Can people act on their choices?',
        measured:'Pew asks US adults how much control they feel over AI use in their lives and whether they want more.',
        next:'Pair these questions with records of whether people can refuse AI involvement, request human review or appeal a decision, and whether those requests succeed.',
        sources:[['Pew Research Center, 2025','https://www.pewresearch.org/science/2025/09/17/how-americans-view-ai-and-its-impact-on-people-and-society/']]
      },
      {
        title:'Can people correct AI-assisted decisions?',
        measured:'A controlled experiment tests whether people accept incorrect AI advice and whether prompts to think more carefully reduce this reliance.',
        next:'Extend these tests into workplaces, recording whether people have the authority and time to intervene, what they change and whether outcomes improve.',
        sources:[['Bu\u00e7inca et al., 2021','https://arxiv.org/abs/2102.09692']]
      }
    ]
  }
};

for(const area of LIBRARY_MAP23.areas.filter(a => a.coding === 'explicit-pairs')) {
  topicMaps24[area.topic]={
    area:area.id,
    title:{institutions:'Who can question or change AI-assisted government decisions?',handover:'When people delegate to AI, what control do they keep?',culture:'How does AI change what people create, see and believe?'}[area.topic],
    intro:area.intro,description:area.description,scope:area.displayScope,questions:area.questions
  };
}

function adaptTopicResearch24(root,id) {
  const topic=topicMaps24[id];
  if(!topic) {
    const pending=document.createElement('section');
    pending.className='map-pending24';pending.setAttribute('aria-labelledby',id+'-map-pending24');
    pending.innerHTML=`<h2 id="${id}-map-pending24">Evidence map</h2><span>Coming soon</span>`;
    $('.claim5',root).after(pending);
    return;
  }
  root.classList.add('topic-research24');
  const header=$('.claim5',root);
  $('h1',header).textContent=topic.title;
  const intro=document.createElement('p');
  intro.className='topic-intro24';
  intro.textContent=topic.intro;
  header.append(intro);
  $('.measure-gap8',root)?.remove();

  const state=libraryState23(`library?view=map&area=${topic.area}&scope=observed&from=${id}`);
  const explicit=libraryArea23(state).coding === 'explicit-pairs';
  const map=document.createElement('section');
  map.className='topic-map24';map.setAttribute('aria-labelledby',id+'-map-title24');
  map.innerHTML=`<div class="topic-map-heading24"><h2 id="${id}-map-title24">What has been studied</h2><a href="#${esc(libraryRoute23(state))}">Full evidence library &#8594;</a></div>
    <p class="topic-map-description24">${esc(topic.description)}</p>
    ${topic.scope?`<p class="topic-map-scope24">${esc(topic.scope)}</p>`:''}
    ${libraryMap23(libraryBaseRecords23(state),state,{links:true,heading:false})}
    <p class="topic-note24"><strong>AI-assisted and not yet verified.</strong> ${explicit ? 'Each cell links to sources with a measurement description and scope note. These classifications await human review.' : 'Counts match tags on a reference; whether that measure was used for that construct needs checking.'} Empty cells may reflect missing references.</p>`;
  header.after(map);

  const gaps=$('#'+id+'-watch',root);
  gaps.className='topic-questions24';
  gaps.innerHTML=`<h2 id="${id}-next-title">What needs better measurement</h2><p class="topic-note24">Proposed extensions to selected studies. Their priority needs review.</p>
    <ol class="topic-question-list24">${topic.questions.map(q=>`<li><h3>${esc(q.title)}</h3><div><p><b>Existing measure</b>${esc(q.measured)}</p><p><b>Proposed extension</b>${esc(q.next)}</p><p class="topic-question-sources24">${q.sources.map(([label,url])=>ext7(url,label)).join(' ')}</p></div></li>`).join('')}</ol>`;
  map.after(gaps);

  for(const selector of ['.evidence-chart7','.takeaway7','.disclosures7']) $(selector,root)?.remove();
}

function viewTopicSource24(v,id) {
  // Preserve source-specific links from Evidence without reintroducing the finding on the map page.
  savedRender20(id);
  const notes=$('#'+id+'-source .disclosure7-body',v);
  const page=document.createElement('div');page.className='view5 wrap topic-source24';
  page.innerHTML=`<nav class="research-back20" aria-label="Research navigation"><a href="#${id}">&#8592; ${esc(nameOf(id))}</a></nav>
    <header class="intro20">${eye5(['Source notes'])}<h1 class="h1-5">${esc(TOPIC_CHARTS[id].title)}</h1><p class="lead5">${esc(TOPIC_CHARTS[id].measure)}</p></header>`;
  notes.id=id+'-source';page.append(notes);v.replaceChildren(page);
}
