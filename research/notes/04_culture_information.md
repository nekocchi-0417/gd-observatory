# 04 — Culture, information and attention

**Pathway:** AI produces and mediates more of what people read, watch, trust and talk to.
**Compiled:** 3 October 2026. **Tools:** WebSearch and WebFetch only.

## How to read the verification labels

- **PRIMARY** — I fetched the publisher's own page or PDF and the number was reported from it.
- **SECONDARY** — a reputable outlet quoting the publisher.
- **SNIPPET** — search-result snippet only (none of the numbers below rely on this alone).

Two honest limits on the whole file:

1. WebFetch returns a machine-read extract of each page, not the raw page. Every "PRIMARY" number was read that way. **Spot-check each number against the linked page before it goes on the public site.**
2. The session's web-search budget ran out part-way through. The homogenisation, companion-app user-count and Steam/Kindle/Adobe Stock items are thinner than planned. Gaps are listed in section (d).

Vendor sources are flagged **[VENDOR]**. They sell SEO services, AI detectors, bot protection or streaming, and each has a commercial interest in the number.

---

### 1. Share of newly published web articles that are primarily AI-generated
- sub_theme: content_share
- measures: Of English-language articles and listicles newly published on the open web, the share that AI detectors classify as mostly written by AI.
- unit: % of sampled articles published in the period
- series (current method — average of three detectors, published May 2026):

| date (article publish period) | value | note |
|---|---|---|
| Jan 2020 – Nov 2022 (pre-ChatGPT) | 1.4–1.8% | This is the detectors' false-positive rate on 15,700 pre-ChatGPT articles, i.e. the noise floor (GPTZero 1.355%, Copyleaks 1.836%, Pangram 1.844%) |
| ~Nov 2023 (12 months after ChatGPT) | 36% | Page text says "36%"; Search Engine Land reports 35.9% |
| ~Nov 2024 (24 months after) | 48% | |
| Q1 2025 | 49.6% | vs 50.4% human |
| Q4 2025 | 50.9% | First quarter above 50% under this method |
| Q1 2026 | 49.9% | Plateau |

- series (earlier method — single detector, published Oct 2025, now marked "superseded" by Graphite):

| date | value | note |
|---|---|---|
| Jan 2020 | ~5% | Axios's reading of the chart; close to the 4.2% false-positive rate |
| Nov 2023 | 39% | Graphite page |
| Nov 2024 | just over 50% | "Surpassed" human-written; exact figure not given in text |
| May 2025 | ~48% | Axios (52% human) |

- source: Graphite [VENDOR, SEO agency] — "AI Now Writes as Many Online Articles as Humans" — https://graphite.io/five-percent/research/ai-now-writes-as-many-online-articles-as-humans-do — 15 May 2026. Earlier: "More Articles Are Now Created by AI Than Humans" — https://graphite.io/five-percent/more-articles-are-now-created-by-ai-than-humans — 14 Oct 2025. Coverage: https://searchengineland.com/nearly-half-online-articles-ai-generated-study-478233 ; https://www.axios.com/2025/10/14/ai-generated-writing-humans
- verification: PRIMARY for the May 2026 series and the Nov 2023 = 39% point; SECONDARY (Axios) for Jan 2020 ≈ 5% and May 2025 ≈ 48%.
- cadence: repeated (Oct 2025, May 2026; quarterly points inside each release)
- signal: leading
- method notes:
  - May 2026: 55,400 URLs from Common Crawl; English; has article schema markup; at least 100 words; published Jan 2020 – Mar 2026; classed as article or listicle. Detectors: Pangram, GPTZero, Copyleaks; results averaged. "Primarily AI" = more AI than human text. False negatives 0.07–1.97%, tested on 6,000 articles from GPT-5, Gemini 3.1 Pro and Claude Opus 4.6.
  - Oct 2025: Surfer detector; article counted as AI if more than 50% of 500-word chunks were flagged; false-positive 4.2%, false-negative 0.6% (GPT-4o only).
- caveats:
  - Measures **supply, not attention**. Graphite's own companion study finds these articles "largely do not appear in Google and ChatGPT" (see indicator 2).
  - Switching from one detector to three lowered the estimate by 3.3 points on average. The level is method-sensitive; the shape (fast rise, then plateau from late 2024) is the more robust finding.
  - AI-assisted, human-edited text is not evaluated. A binary "primarily AI" label hides the large mixed middle (see indicator 3).
  - Common Crawl is not a random sample of what people read. Schema-marked "articles" over-represent SEO content farms.
  - Sample size for the Oct 2025 study is reported inconsistently: the Graphite page (as fetched) says 43,000 URLs; Axios said 65,000.
  - Detector accuracy on newer or "humanised" output is untested and may fall.
- counter_evidence:
  - Graphite's own search study: only 14% of articles in Google results are AI-generated — https://graphite.io/five-percent/ai-content-in-search-and-llms
  - Ahrefs finds only 2.5% of new pages are "pure AI" under a stricter definition — https://ahrefs.com/blog/what-percentage-of-new-content-is-ai-generated/
  - UCLA's Stefano Soatto (quoted by Axios): "it's a symbiosis more than a dichotomy" — the human/AI binary may be the wrong frame.

### 2. AI share of what search engines and answer engines actually surface
- sub_theme: content_share
- measures: Of the articles that rank in Google's top results (or are cited by chatbots), the share flagged as AI-generated — a proxy for AI content weighted by visibility rather than by volume.
- unit: % of ranked or cited articles
- series A (Originality.ai tracker — top 20 Google results for 500 informational keywords):

| date | value | note |
|---|---|---|
| Feb 2019 | 2.27% | Pre-LLM baseline (noise floor) |
| 5 Mar 2024 | 7.43% | |
| 23 Mar 2024 | 10.18% | |
| 22 Apr 2024 | 11.34% | |
| 22 May 2024 | 11.11% | |
| 24 Jun 2024 | 11.67% | |
| 24 Jul 2024 | 12.59% | |
| 26 Aug 2024 | 11.21% | |
| 24 Sep 2024 | 11.46% | |
| 28 Oct 2024 | 17.96% | |
| 25 Nov 2024 | 18.07% | |
| 21 Jan 2025 | 19.10% | |
| 5 May 2025 | 16.57% | |
| 5 Jun 2025 | 16.51% | |
| 8 Jul 2025 | 19.56% | All-time high in the series |
| 18 Aug 2025 | 18.74% | |
| 17 Sep 2025 | 17.31% | Latest point retrieved |

- series B (Graphite, one-off):

| date | value | note |
|---|---|---|
| Jun 2025 | 14% AI / 86% human | Google Search results, 31,493 keywords |
| 2025 | 18% AI / 82% human | ChatGPT citations |
| 2025 | 18% AI / 82% human | Perplexity citations |

- source: Originality.ai [VENDOR, detector seller] — "AI Content in Google Search Results" — https://originality.ai/ai-content-in-google-search-results — last updated 17 Sep 2025. Graphite [VENDOR] — "AI Content in Search & LLMs" — https://graphite.io/five-percent/ai-content-in-search-and-llms — 14 Oct 2025.
- verification: PRIMARY (both)
- cadence: repeated (Originality.ai roughly monthly to bi-monthly; no update after Sep 2025 was found) / one-off (Graphite)
- signal: coincident
- caveats:
  - Single-vendor detectors on both. Originality.ai uses a 0.5 confidence threshold and Internet Archive snapshots; it excludes YouTube and Reddit results.
  - 500 informational keywords is a small, hand-picked sample.
  - Two independent vendors land in the same 14–20% range. That gives the range some support, but neither is audited.
  - This counts what ranks, not what gets read. It is still not a traffic measure.
- counter_evidence:
  - The gap between ~50% of new articles (indicator 1) and ~14–19% of ranked results suggests that ranking systems filter AI content, at least for now. Counter to that reassurance: about 18% of searches now return an AI summary on top of the results (indicator 7), so "human articles rank" matters less if fewer people click. https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/

### 3. Share of new web pages containing any AI-generated text
- sub_theme: content_share
- measures: Of newly detected English web pages (one per domain), the share with any detectable AI text, split by how much.
- unit: % of new pages, April 2025

| date | value | note |
|---|---|---|
| Apr 2025 | 74.2% | Contain some AI-generated content |
| Apr 2025 | 25.8% | Pure human |
| Apr 2025 | 2.5% | Pure AI |
| Apr 2025 | 71.7% | Mixed (25.86% "moderate" 11–40% AI; 20.50% "substantial" 41–70%; 15.51% "dominant" 71–99%) |
| 2025 | 87% | Of 879 content marketers surveyed, share who say they use AI to create or help create content |

- source: Ahrefs [VENDOR, SEO tools] — study of 900,000 newly detected pages on what percentage of new content is AI-generated (exact page title not recorded) — https://ahrefs.com/blog/what-percentage-of-new-content-is-ai-generated/ — 19 May 2025
- verification: PRIMARY
- cadence: one-off
- signal: leading
- caveats:
  - Uses Ahrefs' own "bot_or_not" detector. Ahrefs itself says it "will never be 100% accurate".
  - "Contains some AI" (74.2%) and "pure AI" (2.5%) come from the same data. **This is the clearest illustration of definitional sensitivity: the headline can be 2.5%, about 36% (substantial plus dominant plus pure) or 74% depending on the threshold.**
  - One page per domain, so it weights small sites equally with large ones.
- counter_evidence:
  - Graphite's "primarily AI" share of about 50% (indicator 1) sits between Ahrefs' bands. The studies do not contradict each other so much as measure different thresholds on different samples.

### 4. LLM-modified share of professional and scientific writing (peer-reviewed estimates)
- sub_theme: content_share
- measures: Population-level estimates of how much text in specific written genres has been produced or substantially edited with LLMs, inferred from shifts in word frequencies rather than per-document detectors.
- unit: % of text or documents estimated LLM-modified

| date of data | value | note |
|---|---|---|
| late 2024 (data to Aug 2024) | ~18% | US consumer financial complaints (n = 687,241) |
| late 2024 (data to Sep 2024) | ~24% | Corporate press releases (n = 537,413) |
| data to Oct 2023 | ~10% | Job postings, small firms (n = 304.3M postings) |
| late 2024 (data to Sep 2024) | ~14% | UN press releases (n = 15,919) |
| to Sep 2024 | up to 22% | Computer-science papers (abstracts/introductions) |
| to Sep 2024 | up to 9% | Mathematics papers; Nature-portfolio papers |
| 2024 | at least 13.5% | PubMed abstracts processed with LLMs ("excess vocabulary" method); up to 40% in some sub-corpora |
| 2023–24 | 6.5–16.9% | Text of peer reviews at ICLR 2024, NeurIPS 2023, CoRL 2023, EMNLP 2023 |

- source:
  - Liang et al. — "The widespread adoption of large language model-assisted writing across society" — Patterns — https://pmc.ncbi.nlm.nih.gov/articles/PMC12745980/ — 2 Oct 2025
  - Liang et al. — "Quantifying large language model usage in scientific papers" — Nature Human Behaviour — https://www.nature.com/articles/s41562-025-02273-8 — 4 Aug 2025 (1,121,912 papers, Jan 2020 – Sep 2024)
  - Kobak et al. — "Delving into LLM-assisted writing in biomedical publications through excess vocabulary" — Science Advances — https://arxiv.org/abs/2406.07016 — 2 Jul 2025 (over 15 million abstracts, 2010–2024)
  - Liang et al. — "Monitoring AI-Modified Content at Scale" — https://arxiv.org/abs/2403.07183 — arXiv preprint, Mar 2024
- verification: PRIMARY (PMC full text; Nature article page; arXiv abstracts)
- cadence: one-off papers, each containing a monthly or yearly internal series. No 2025–26 data points were found.
- signal: coincident
- caveats:
  - The authors frame these as **lower bounds**: heavily edited or human-like AI text is not detected.
  - Liang et al. report a rapid rise starting 3–4 months after ChatGPT's launch, then **stabilisation by late 2023**. That could be real saturation, or it could be detection getting harder as models and users change. The paper cannot tell which.
  - "LLM-modified" includes polishing and translation by non-native speakers. It is not the same as "AI wrote it".
  - All series end in 2024. This is the best-quality evidence in the file and also the most out of date.
- counter_evidence:
  - The plateau after late 2023 cuts against a simple "ever-rising" story — https://pmc.ncbi.nlm.nih.gov/articles/PMC12745980/
  - Word-frequency methods are tuned to 2023–24 model styles ("delve" and similar). They may under-count newer models whose style has shifted.

### 5. AI share of long-form social media posts
- sub_theme: content_share
- measures: Of longer text posts on social platforms, the share that a detector classes as AI-generated.
- unit: % of long-form posts

| date | value | note |
|---|---|---|
| before end-2022 | "negligible" | LinkedIn, Originality.ai |
| early 2023 | +189% | Jump in likely-AI LinkedIn posts after ChatGPT |
| to Oct 2024 | over 54% | Long (100+ words) English LinkedIn posts likely AI; 8,795 public posts, Jan 2018 – Oct 2024 |
| late Apr – early Jul 2026 | 41% | LinkedIn, fully AI-generated (plus 4.3% AI-assisted; 55.2% human) |
| late Apr – early Jul 2026 | 25% | X, fully AI (plus 23.2% AI-assisted; 52.7% human) |
| late Apr – early Jul 2026 | ~33% | Medium, fully AI |
| late Apr – early Jul 2026 | 21.9% | Substack, fully AI |
| late Apr – early Jul 2026 | 11.6% | Reddit posts, fully AI |
| late Apr – early Jul 2026 | 1.9% | Reddit comments, fully AI |
| late Apr – early Jul 2026 | 25% | All platforms combined, posts over 250 words |

- source: Originality.ai [VENDOR] via WIRED / eWeek — https://www.eweek.com/news/ai-generated-posts-flood-linkedin/ — Dec 2024. Pangram [VENDOR, detector seller] via The Register — https://www.theregister.com/ai-and-ml/2026/07/09/ai-slop-writing-has-taken-over-the-internet-particularly-linkedin-and-x/5269525 — 9 Jul 2026.
- verification: SECONDARY (both)
- cadence: one-off each. Different vendors, thresholds and samples, so **do not draw a line between the 2024 and 2026 LinkedIn values.**
- signal: coincident
- caveats:
  - Pangram's sample is posts seen in the feeds of people who installed its paid Chrome extension (over one million posts). That is a self-selected group, and the feed is algorithmically curated.
  - Long posts only (100+ or 250+ words). Short posts and replies, which make up most social content, are excluded.
  - Detector vendors benefit from high numbers.
- counter_evidence:
  - In the same Pangram data, Reddit comments are 98.1% human. Conversational, short-form human exchange looks largely intact — https://www.theregister.com/ai-and-ml/2026/07/09/ai-slop-writing-has-taken-over-the-internet-particularly-linkedin-and-x/5269525

### 6. AI-generated share of new Wikipedia articles
- sub_theme: content_share
- measures: Share of newly created English Wikipedia articles flagged as AI-generated by detectors calibrated to a 1% false-positive rate.
- unit: % of new articles created in August 2024

| date | value | note |
|---|---|---|
| Aug 2024 | over 5% | English Wikipedia; lower in German, French and Italian |
| pre-GPT-3.5 | 1% | By construction (calibration baseline) |

- source: Brooks, Eggert & Peskoff (Princeton) — "The Rise of AI-Generated Content in Wikipedia" — WikiNLP workshop, ACL Anthology — https://aclanthology.org/2024.wikinlp-1.12/ — Nov 2024
- verification: PRIMARY (ACL Anthology abstract)
- cadence: one-off
- signal: coincident
- caveats:
  - Detectors: GPTZero and Binoculars. The authors call the result a lower bound.
  - New articles only. This says nothing about edits to existing articles, where most reading happens.
  - Flagged articles were typically lower quality, often self-promotional. Many would be deleted by editors.
- counter_evidence:
  - Wikipedia has human review. The community's own clean-up effort means the surviving share is likely lower than the created share (not measured in the paper) — https://signpost.news/2024-10-19/Recent_research

### 7. Google searches answered by an AI summary, and what users then click
- sub_theme: mediation
- measures: How often Google shows an AI-written summary above the results, and how clicking behaviour differs when it does.
- unit: % of searches; % of search visits ending in a click

| date | value | note |
|---|---|---|
| Mar 2025 | 18% | Of Google searches that produced an AI summary (12,593 of 68,879 searches) |
| Mar 2025 | 58% | Of users who ran at least one search that produced an AI summary |
| Mar 2025 | 8% vs 15% | Clicked a traditional result link: with vs without an AI summary |
| Mar 2025 | 1% | Clicked a link inside the AI summary |
| Mar 2025 | 26% vs 16% | Ended the browsing session: with vs without an AI summary |
| Jan 2025 | 6.49% | Semrush: share of 10M+ tracked keywords triggering an AI Overview |
| Jul 2025 | 24.61% | Semrush peak |
| Nov 2025 | 15.69% | Semrush |
| mid-2025 | 54% | RISJ six-country survey: people who see AI search answers weekly; 33% always/often click links, 28% rarely/never |

- source: Pew Research Center — "Google users are less likely to click on links when an AI summary appears in the results" — https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/ — 22 Jul 2025 (900 US adults' browsing, 1–31 Mar 2025). Semrush [VENDOR] — "AI Overviews Study" — https://www.semrush.com/blog/semrush-ai-overviews-study/ — updated 15 Dec 2025. Reuters Institute — "Generative AI and News Report 2025" — https://reutersinstitute.politics.ox.ac.uk/generative-ai-and-news-report-2025-how-people-think-about-ais-role-journalism-and-society — 7 Oct 2025.
- verification: PRIMARY (all three)
- cadence: Pew one-off; Semrush repeated (monthly through 2025; no 2026 value found); RISJ annual
- signal: leading
- caveats:
  - Pew measured behaviour (browsing data from 900 consenting panellists) rather than self-report. That is a strength, but it is one month and one country.
  - The Pew comparison is observational. Queries that trigger AI summaries are different queries (longer, question-style), so the 8% vs 15% gap is not a clean causal effect.
  - Semrush's keyword set is not weighted by search volume. The fall from 24.61% to 15.69% shows Google actively changes where summaries appear, so the trend is not one-way.
- counter_evidence:
  - Google called the Pew study "flawed" with a "skewed queryset", and said it has not seen significant drops in aggregate web traffic. It gave no numbers — https://ppc.land/google-disputes-pew-study-showing-ai-overviews-reduce-clicks-by-half/
  - Semrush, tracking the same keywords before and after AI Overviews appeared, found the zero-click rate fell slightly, from 33.75% to 31.53% — https://www.semrush.com/blog/semrush-ai-overviews-study/

### 8. Search referrals to publishers and zero-click news searches
- sub_theme: mediation
- measures: Whether people who search for news still arrive at a publisher's site, and how much traffic publishers receive from Google.
- unit: % of news searches ending without a click; % change in referral traffic

| date | value | note |
|---|---|---|
| May 2024 | 56% | Similarweb: zero-click share of news-related searches |
| May 2025 | 69% | Similarweb (Digiday: "nearly 69%") |
| Jul 2024 → Jun 2025 | over 2.3bn → 1.8bn | Similarweb: organic search visits to news sites, US (Press Gazette gives "under 1.7bn" for May 2025) |
| Jun 2024 → Jun 2025 | 12bn → 11.2bn (−6.7%) | Similarweb: global organic visits across 1,000 domains |
| Nov 2024 → Nov 2025 | −33% | Chartbeat: Google search referrals to 2,500+ publisher sites, global (US: −38%) |
| Nov 2024 → Nov 2025 | −21% | Chartbeat: Google Discover referrals, global (US: −29%) |
| Dec 2024 → Dec 2025 | −60% / −47% / −22% | Chartbeat via Axios: search referrals to small / medium / large publishers |
| May–Jun 2025 | 35.3M → 35.9M visits | Similarweb: referrals from AI platforms to publishers, global |
| mid-2025 vs mid-2024 | about −8% | Wikimedia Foundation: human pageviews to Wikipedia, year on year |
| late 2025 (survey) | −43% | RISJ survey of 280 media leaders in 51 countries: expected traffic change over the next three years |

- source:
  - Similarweb via Press Gazette — https://pressgazette.co.uk/media-audience-and-business-data/media_metrics/how-google-ai-overviews-is-fuelling-zero-click-searches-for-top-publishers/ — 7 Jul 2025; and Digiday — https://digiday.com/media/in-graphic-detail-ai-platforms-are-driving-more-traffic-but-not-enough-to-offset-zero-click-search/ — 10 Jul 2025
  - Chartbeat via Reuters Institute "Journalism and Technology Trends and Predictions 2026" (https://reutersinstitute.politics.ox.ac.uk/sites/default/files/2026-01/Trends_and_Predictions_2026.pdf) as reported by Press Gazette — https://pressgazette.co.uk/media-audience-and-business-data/google-traffic-down-2025-trends-report-2026/ — 12 Jan 2026. The −33% figure is also quoted in the Digital News Report 2026 executive summary.
  - Chartbeat via Axios, as reported by Search Engine Journal — https://www.searchenginejournal.com/search-referral-traffic-down-60-for-small-publishers-data-shows/569959/ — 17 Mar 2026
  - Wikimedia Foundation — "New user trends on Wikipedia" — https://diff.wikimedia.org/2025/10/17/new-user-trends-on-wikipedia/ — 17 Oct 2025
- verification: SECONDARY for Similarweb and Chartbeat (trade press quoting the data firms; −33% also PRIMARY via the RISJ DNR 2026 summary); PRIMARY for Wikimedia.
- cadence: repeated but irregular (Similarweb and Chartbeat release when asked by the press; no fixed schedule)
- signal: coincident
- caveats:
  - Similarweb is a panel-based estimate. Chartbeat covers its own clients, which skew to news publishers.
  - Not all of the fall is AI. Google algorithm updates, Discover changes and the shift to social video overlap in time.
  - AI referrals are growing fast from a tiny base. Press Gazette reports ChatGPT at "just 0.02%" of referral traffic; Search Engine Journal says ChatGPT referrals grew over 200% but stay under 1% of publisher page views. The two base definitions differ.
  - Wikimedia's figure followed a bot reclassification. The extract I read gives the comparison period as May–June 2025 against the same months of 2024; confirm the exact window before publishing.
- counter_evidence:
  - Google's statement that aggregate traffic has not dropped significantly — https://ppc.land/google-disputes-pew-study-showing-ai-overviews-reduce-clicks-by-half/
  - Large publishers lost far less (−22%) than small ones (−60%), so "publishers" is not one population — https://www.searchenginejournal.com/search-referral-traffic-down-60-for-small-publishers-data-shows/569959/

### 9. ChatGPT weekly active users
- sub_theme: mediation
- measures: The number of people using the largest AI chatbot in a given week, as stated by OpenAI or reported from its internal figures.
- unit: weekly active users

| date | value | note |
|---|---|---|
| 6 Nov 2023 | 100 million | Altman at DevDay (TechCrunch) |
| Feb 2025 | 400 million | Reported (The Next Web summary) |
| end Mar 2025 | 500 million | TechCrunch |
| Aug 2025 | 700 million | "On the cusp of" (TechCrunch) |
| 6 Oct 2025 | 800 million | Altman at DevDay (TechCrunch) |
| Feb 2026 | 900 million | TechCrunch, as cited by The Next Web |
| Jul 2026 | ~1 billion | The Information, from internal OpenAI figures, via The Next Web. **Not an official announcement.** |
| Jul 2025 | ~10% of the world's adult population | NBER working paper using OpenAI data |
| to mid-2025 | 53% → over 70% | Share of ChatGPT messages that are not work-related (same NBER paper; the abstract does not give the start and end months) |

- source: TechCrunch — https://techcrunch.com/2023/11/06/openais-chatgpt-now-has-100-million-weekly-active-users/ (6 Nov 2023); https://techcrunch.com/2025/10/06/sam-altman-says-chatgpt-has-hit-800m-weekly-active-users/ (6 Oct 2025). The Next Web — https://thenextweb.com/news/chatgpt-1-billion-weekly-active-users-openai-target (29 Jul 2026). Chatterji et al. — "How People Use ChatGPT" — NBER Working Paper 34255 — https://www.nber.org/papers/w34255 — Sep 2025.
- verification: SECONDARY (company statements relayed by the press); PRIMARY for the NBER abstract.
- cadence: repeated (company announcements, irregular)
- signal: leading
- caveats:
  - Self-reported by a company with fundraising incentives. "Weekly active" is not independently audited.
  - A usage count says nothing about what share of a person's reading or thinking passes through the tool.
  - The 200 million (Aug 2024) and 300 million (Dec 2024) milestones are widely reported but I could not fetch a source for them in this session, so they are left out of the table.
- counter_evidence:
  - OpenAI's own target was 1 billion by end-2025 and it arrived about seven months late — growth is slowing in relative terms — https://thenextweb.com/news/chatgpt-1-billion-weekly-active-users-openai-target
  - The NBER paper finds "Practical Guidance", "Seeking Information" and "Writing" make up nearly 80% of conversations. Mostly this is a search and writing tool, not a culture feed — https://www.nber.org/papers/w34255

### 10. People who get news from AI chatbots
- sub_theme: mediation
- measures: Share of the public who say they use AI chatbots to get news.
- unit: % of adults (online population in the RISJ surveys)

| date (fieldwork) | value | note |
|---|---|---|
| 2024 | 3% | RISJ six-country survey: weekly use of generative AI for getting news |
| Jun–Jul 2025 | 6% | Same survey, same six countries (Argentina, Denmark, France, Japan, UK, US) |
| 2024 → 2025 | 18% → 34% | Same survey: weekly use of any generative AI tool (ever used: 40% → 61%) |
| early 2025 | 7% | Digital News Report 2025, 48 markets: use AI chatbots for news weekly |
| early 2025 | 15% | Same, under-25s |
| early 2026 | 10% | Digital News Report 2026, 48 markets ("up from 7% last year") |
| early 2026 | 16% | Same, under-35s |
| early 2026 | 1% | Same: name AI as their main news source |
| early 2026 | 42% | Of people who use chatbots for news: say they always or often click through to the original source |
| early 2026 | 20% | Trust answers from AI chatbots (global) |
| 18–24 Aug 2025 | 9% (2% often + 7% sometimes) | Pew, US adults (n = 5,153); 75% never; fewer than 1% prefer chatbots for news |

- source: Reuters Institute — Digital News Report 2026 executive summary — https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/dnr-executive-summary — 16 Jun 2026 (total sample 97,520; about 2,000 per market). Digital News Report 2025 — https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025/dnr-executive-summary — 17 Jun 2025. "Generative AI and News Report 2025" — https://reutersinstitute.politics.ox.ac.uk/generative-ai-and-news-report-2025-how-people-think-about-ais-role-journalism-and-society — 7 Oct 2025 (fieldwork 5 Jun – 15 Jul 2025). Pew Research Center — https://www.pewresearch.org/short-reads/2025/10/01/relatively-few-americans-are-getting-news-from-ai-chatbots-like-chatgpt/ — 1 Oct 2025.
- verification: PRIMARY (all four)
- cadence: repeated — annual (RISJ DNR each June; RISJ generative-AI survey each autumn)
- signal: leading
- caveats:
  - The two RISJ series (3% → 6% in six countries; 7% → 10% in 48 markets) use different samples and question wording. **Plot them as two separate lines.**
  - RISJ samples are online panels. In lower-connectivity markets they represent younger, more urban, more educated people. RISJ says the 2026 rise is driven largely by Asia, Africa, Latin America and Southern and Eastern Europe.
  - Exact fieldwork dates for the DNR 2025 and 2026 waves were not shown in the pages I fetched. "Early 2025/2026" is my labelling, not RISJ's.
  - One read of the 2026 chapter page gave 17% for under-25s. I could not find that sentence again on re-fetch, so the table uses the 16% under-35s figure from the executive summary.
  - Self-report misses passive exposure through AI summaries in search (indicator 7), which reaches far more people.
- counter_evidence:
  - Use remains small, and only 1% call AI their main news source (DNR 2026). Pew finds 75% of US adults never get news from chatbots — https://www.pewresearch.org/short-reads/2025/10/01/relatively-few-americans-are-getting-news-from-ai-chatbots-like-chatgpt/
  - Comfort is low: 12% are comfortable with fully AI-made news, against 43% when a human leads with some AI help and 62% for entirely human-made news (RISJ, 2025) — https://reutersinstitute.politics.ox.ac.uk/generative-ai-and-news-report-2025-how-people-think-about-ais-role-journalism-and-society

### 11. Accuracy of AI assistants when answering news questions
- sub_theme: mediation
- measures: Share of AI-assistant answers to news questions that professional journalists judged to have at least one significant problem.
- unit: % of evaluated responses

| date | value | note |
|---|---|---|
| 2025 | "almost half" | Answers with at least one significant issue |
| 2025 | "a third" | Answers with serious sourcing problems |
| 2025 | "a fifth" | Answers with major accuracy issues (hallucinated or outdated information) |

- source: European Broadcasting Union and BBC — "News Integrity in AI Assistants" — https://www.ebu.ch/research/open/report/news-integrity-in-ai-assistants — 21 Oct 2025. Over 3,000 responses from ChatGPT, Copilot, Gemini and Perplexity; 22 public-service media organisations, 18 countries, 14 languages.
- verification: PRIMARY (EBU page; the page gives the fractions in words — the exact percentages are in the PDF, which I did not open)
- cadence: one-off, building on an earlier BBC-only study. A repeat would make this a trend.
- signal: coincident
- caveats:
  - The evaluators are public broadcasters, who have a stake in the result.
  - Questions were chosen to be about news, which is a hard case for assistants.
  - Models change quickly. A 2025 snapshot may already be out of date.
- counter_evidence:
  - Users seem partly aware of this: Pew finds about half of those who get news from chatbots say they at least sometimes see news there they think is inaccurate — https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/

### 12. What AI crawlers take versus what they send back
- sub_theme: mediation
- measures: For each AI company, the number of pages its crawlers fetch for every visitor it refers back to a website.
- unit: ratio of crawls to referrals (pages crawled : 1 referral)

| company | Jan 2025 | Jul 2025 |
|---|---|---|
| Anthropic | 286,930 : 1 | 38,065 : 1 |
| OpenAI | 1,217 : 1 | 1,091 : 1 |
| Perplexity | 54 : 1 | 194 : 1 |
| Google | 3.8 : 1 | 5.4 : 1 |

Also: share of AI-bot crawling done for model training — 72% (Jul 2024) → 79% (Jul 2025).

- source: Cloudflare [VENDOR, sells bot-management and pay-per-crawl products] — "The crawl-to-click gap" — https://blog.cloudflare.com/crawlers-click-ai-bots-training/ — 29 Aug 2025
- verification: PRIMARY
- cadence: repeated (Cloudflare Radar tracks this continuously; this post gives the Jan–Jul 2025 comparison)
- signal: leading
- caveats:
  - Covers only sites behind Cloudflare.
  - Referrals from apps that do not send a referrer header are under-counted, which inflates the ratios.
  - Cloudflare sells the remedy.
- counter_evidence:
  - Ratios fell sharply for Anthropic (−86.7%) and slightly for OpenAI (−10.4%) across 2025 — the imbalance is not uniformly getting worse — https://blog.cloudflare.com/crawlers-click-ai-bots-training/

### 13. Teenagers' use of AI companions and chatbots for social and emotional purposes
- sub_theme: companions
- measures: Share of US teenagers who use AI companions or chatbots, and the share who use them for social interaction, emotional support or romantic relationships.
- unit: % of US teens

| date (fieldwork) | value | note |
|---|---|---|
| Apr–May 2025 | 72% | Common Sense Media: have ever used an AI companion (n = 1,060, ages 13–17) |
| Apr–May 2025 | 52% | Regular users (a few times a month or more) |
| Apr–May 2025 | 13% | Use daily (8% several times a day + 5% daily) |
| Apr–May 2025 | 33% | Use AI companions "for social interaction and relationships, including role-playing, romantic interactions, emotional support, friendship, or conversation practice" (press release says "about one in three") |
| Apr–May 2025 | 9% | Use "as a friend or best friend"; 12% for emotional or mental health support; 18% for conversation or social practice |
| Jun–Aug 2025 | 19% | CDT: high-school students who say they or a friend have had a romantic relationship with AI (n = 1,030, grades 9–12) |
| Jun–Aug 2025 | 42% | CDT: they or someone they know used AI as a friend or companion (same share for mental health support) |
| 25 Sep – 9 Oct 2025 | 64% | Pew: teens who ever use AI chatbots (n = 1,458, ages 13–17); about 30% daily; 16% several times a day or almost constantly |
| 25 Sep – 9 Oct 2025 | 16% | Pew: have used chatbots for casual conversation |
| 25 Sep – 9 Oct 2025 | 12% | Pew: have used chatbots for emotional support or advice |
| 25 Sep – 9 Oct 2025 | 9% | Pew: use Character.ai (ChatGPT 59%, Gemini 23%, Meta AI 20%, Copilot 14%, Claude 3%) |

- source: Common Sense Media — "Talk, Trust, and Trade-Offs: How and Why Teens Use AI Companions" — toplines https://www.commonsensemedia.org/sites/default/files/research/talk-trust-and-trade-offs_2025_toplines.pdf ; press release https://www.commonsensemedia.org/press-releases/nearly-3-in-4-teens-have-used-ai-companions-new-national-survey-finds — 16 Jul 2025. Center for Democracy & Technology — "Hand in Hand: Schools' Embrace of AI Connected to Increased Risks to Students" — https://cdt.org/wp-content/uploads/2025/10/FINAL-CDT-2025-Hand-in-Hand-Polling-100225-accessible.pdf — Oct 2025. Pew Research Center — "Teens, Social Media and AI Chatbots 2025" — https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025/ — 9 Dec 2025; and "How Teens Use and View AI" — https://www.pewresearch.org/wp-content/uploads/sites/20/2026/02/PI_2026.02.24_Teens-and-AI_REPORT.pdf — 24 Feb 2026.
- verification: PRIMARY (all)
- cadence: one-off so far for Common Sense and CDT (no 2026 wave found); Pew's teen survey is roughly annual
- signal: leading
- caveats:
  - **Definition drives the number.** Common Sense defined "AI companions" broadly enough to include general chatbots such as ChatGPT. So 72% "have used an AI companion" sits beside Pew's 64% "use any AI chatbot" and 9% "use Character.ai".
  - The 33% combines role-play, conversation practice, emotional support, friendship and romance. It is not "33% have AI relationships". The single items run from 9% to 18%.
  - CDT's 19% is "you or a friend". It measures awareness in a peer group, not personal prevalence, and will run well above the personal rate.
  - Common Sense Media and CDT are advocacy organisations. Pew is the neutral benchmark.
  - US only. The survey firm for Common Sense was not named in the pages I fetched.
- counter_evidence:
  - Common Sense's own data: 80% of teen users put real friendships first; 50% do not trust AI companions' advice — https://www.commonsensemedia.org/press-releases/nearly-3-in-4-teens-have-used-ai-companions-new-national-survey-finds
  - Pew's narrower questions give much lower numbers (12% emotional support) — https://www.pewresearch.org/wp-content/uploads/sites/20/2026/02/PI_2026.02.24_Teens-and-AI_REPORT.pdf

### 14. Adults' use of AI for companionship or romance
- sub_theme: companions
- measures: Share of US adults who say they have used AI for companionship, social interaction or as a romantic partner — set against what usage logs show.
- unit: % of US adults (or of singles); % of conversations

| date (fieldwork) | value | note |
|---|---|---|
| 2025 (released Jun 2025) | 16% | Match / Kinsey "Singles in America": singles who have engaged with AI as a romantic companion (n = 5,001 US singles) |
| 2025 | 33% | Same, Gen Z singles |
| 2025 | 26% | Same: singles using AI to enhance their dating life (Match calls this a 333% rise year on year) |
| 10–14 Jul 2025 | 16% | AP-NORC: US adults who have used AI for companionship (n = 1,437); higher among under-30s, figure not retrieved |
| May 2026 | 27% | Elon University: internet-using US adults who "have social interactions with" AI language models (n = 1,000) |
| May 2026 | 9% | Elon: have ever used AI for sexual chat or role-play |
| Jan 2024 | 3.5 million | Character.ai daily visitors (BBC, as cited by Wikipedia) |
| 2025 (usage logs) | 2.9% | Anthropic: share of Claude.ai conversations that are "affective" |
| 2025 (usage logs) | under 0.5% | Anthropic: share that are companionship or role-play (romantic or sexual role-play under 0.1%) |

- source: AP-NORC — https://apnorc.org/projects/young-adults-leading-the-way-in-ai-adoption/ — Jul 2025. Elon University Imagining the Digital Future Center — "The Rise of AI Companions" — https://imaginingthedigitalfuture.org/reports-and-publications/the-rise-of-ai-companions/ — Sep 2026. Match and the Kinsey Institute — https://match.mediaroom.com/2025-06-10-Match-and-The-Kinsey-Institute-Unveil-14th-Annual-Singles-in-America-Study — 10 Jun 2025; the 16% and 33% figures come via The Week — https://theweek.com/tech/ai-lovers-replacing-humans. Anthropic — https://www.anthropic.com/news/how-people-use-claude-for-support-advice-and-companionship — 27 Jun 2025.
- verification: PRIMARY for AP-NORC, Elon and Anthropic. For Match, PRIMARY for n and the 26% figure; **SECONDARY for 16% and 33%** (they are not in the press release as fetched). Character.ai figure is tertiary (Wikipedia citing BBC).
- cadence: Match annual; the others one-off so far
- signal: leading
- caveats:
  - Match is a dating company [VENDOR]; its sample is singles from an opt-in panel (Dynata), and "engaged with AI as a romantic companion" is loosely worded.
  - "Used AI for companionship" (16%) and "social interactions with AI" (27%) come from different surveys and wordings a year apart. **They do not form a trend.**
  - Usage logs from one company (Anthropic) are not representative of companion apps such as Character.ai or Replika, which are built for this use. Anthropic notes Claude is trained to discourage romantic role-play.
  - I could not retrieve reliable dated user counts for Replika or Character.ai in this session.
- counter_evidence:
  - Usage logs show companionship is a small share of general-chatbot use (under 0.5%) — https://www.anthropic.com/news/how-people-use-claude-for-support-advice-and-companionship
  - The NBER/OpenAI study finds nearly 80% of ChatGPT conversations are practical guidance, information-seeking or writing — https://www.nber.org/papers/w34255

### 15. AI-generated share of music uploaded to a streaming service — and of music listened to
- sub_theme: creative
- measures: Share of tracks delivered to Deezer each day that its detector tags as fully AI-generated, set against the share of listening those tracks receive.
- unit: % of daily track uploads; tracks per day; % of streams

| date | % of daily uploads | AI tracks per day | note |
|---|---|---|---|
| Jan 2025 | 10% | 10,000 | Detection tool launched (Euronews dates this figure to February) |
| Apr 2025 | 18% | 20,000 | |
| Sep 2025 | 28% | 30,000 | |
| Nov 2025 | 34% | 50,000 | |
| Jan 2026 | 39% | 60,000 | |
| Apr 2026 | 44% | ~75,000 | Over 2 million AI tracks a month |
| Jun 2026 | over 50% | ~90,000 | First month above half |

Attention side:

| date | value | note |
|---|---|---|
| Nov 2025 | ~0.5% | Share of Deezer streams from fully AI-generated music |
| Apr and Jul 2026 | 1–3% | Share of total streams |
| 2025 (stated Nov 2025) | up to 70% | Of streams on fully AI tracks detected as fraudulent |
| 2025 (stated Apr 2026) | up to 85% | Same measure, revised statement |
| 6–10 Oct 2025 | 97% | Deezer/Ipsos: listeners who could not tell fully AI music from human-made in a blind test (9,000 adults, 8 countries) |
| 12 months to Sep 2025 | over 75 million | Spotify: "spammy" tracks removed (not all AI) |

- source: Deezer [VENDOR, streaming platform] — https://newsroom-deezer.com/2026/07/ai-music-exceeds-50-percent-daily-uploads-deezer/ (21 Jul 2026); https://newsroom-deezer.com/2026/04/ai-generated-tracks-represent-44-of-new-uploaded-music/ (20 Apr 2026); https://newsroom-deezer.com/2025/11/deezer-ipsos-survey-ai-music/ (12 Nov 2025). Full timeline in TechCrunch — https://techcrunch.com/2026/07/21/music-streamer-deezer-says-more-than-50-of-daily-uploads-are-ai-generated/. Euronews — https://euronews.com/culture/2025/09/15/french-streamer-deezer-reveals-that-28-per-cent-of-music-uploaded-to-platform-is-ai-genera. Spotify via Music Business Worldwide — https://www.musicbusinessworldwide.com/spotify-has-deleted-75m-spammy-tracks-as-it-unveils-new-ai-music-policies/ (25 Sep 2025).
- verification: PRIMARY for Nov 2025, Apr 2026 and Jun 2026 and for the stream and fraud shares. SECONDARY (TechCrunch, Euronews) for Jan 2025, Apr 2025, Sep 2025 and Jan 2026. SECONDARY for Spotify.
- cadence: repeated (Deezer has updated every 2–5 months since Jan 2025)
- signal: leading
- caveats:
  - One mid-sized platform's own detector, validated by the company. No independent audit.
  - "Fully AI-generated" only. AI-assisted music is not counted.
  - Deezer positions itself commercially as the anti-AI-music streamer.
  - **Uploads are not listening.** Over half of uploads but only 1–3% of streams, and most of those streams are flagged as fraud. Much of this is spam aimed at royalty pools, not culture people choose.
  - The stream share rose from about 0.5% to 1–3% in under a year. That is the number to watch.
- counter_evidence:
  - Deezer's own stream-share and fraud figures (above) — https://newsroom-deezer.com/2026/04/ai-generated-tracks-represent-44-of-new-uploaded-music/
  - Spotify described engagement with prompt-generated tracks as "de minimis" — https://www.musicbusinessworldwide.com/spotify-has-deleted-75m-spammy-tracks-as-it-unveils-new-ai-music-policies/

### 16. Homogenisation: does AI assistance make human output more alike?
- sub_theme: homogenisation
- measures: Experimental estimates of how AI assistance changes the diversity of what people write, and whether it shifts what they think.
- unit: % change against a no-AI control group (experiments)

| date (published) | value | note |
|---|---|---|
| Jul 2024 | +8.1% novelty, +9% usefulness | Doshi & Hauser: stories written with access to AI ideas, as rated by evaluators (300 writers, 600 evaluators) |
| Jul 2024 | +10.7% novelty, +11.5% usefulness | Same study, less creative writers |
| Jul 2024 | +10.7% similarity | Same study: stories written with one AI idea were more similar to each other than stories written without AI |
| Apr 2023 | direction only | Jakesch et al. (N = 1,506): a writing assistant set to favour one side changed what participants wrote and shifted their opinions in a later attitude survey |
| 2025 | direction only | Agarwal, Naaman & Vashistha (n = 118, India and US): AI suggestions pushed Indian participants toward Western writing styles; Americans got more of the efficiency gain |

- source: Doshi & Hauser — "Generative AI enhances individual creativity but reduces the collective diversity of novel content" — Science Advances — https://www.science.org/doi/10.1126/sciadv.adn5290 — 12 Jul 2024 (numbers read from the university press release: https://www.eurekalert.org/news-releases/1050888). Jakesch et al. — "Co-Writing with Opinionated Language Models Affects Users' Views" — CHI 2023 — https://arxiv.org/abs/2302.00560. Agarwal et al. — "AI Suggestions Homogenize Writing Toward Western Styles and Diminish Cultural Nuances" — CHI 2025 — https://arxiv.org/abs/2409.11360.
- verification: Doshi & Hauser SECONDARY (press release; the journal page and PMC copy would not load). Jakesch and Agarwal PRIMARY (arXiv abstracts — sample sizes and direction of effect only; effect sizes not retrieved).
- cadence: one-off experiments
- signal: leading (mechanism evidence, not prevalence)
- caveats:
  - Short, low-stakes lab tasks (an eight-sentence story; a short opinion piece) with 2023-era models.
  - These show the mechanism exists. They do not show how large the effect is in real-world culture.
  - **No repeated measurement of convergence in real-world text was verified in this session.** This is the biggest hole in the sub-theme.
  - The "+10.7%" appears twice in the press release (novelty for less creative writers, and similarity). Check both against the paper.
- counter_evidence:
  - The same Doshi & Hauser experiment shows AI **raised** individual creativity ratings, most for the least creative writers. The individual gain and the collective loss come together — https://www.eurekalert.org/news-releases/1050888

### 17. Model collapse and the training-data feedback loop
- sub_theme: homogenisation
- measures: Whether models trained on earlier models' output lose the rare parts of the original data, and how much AI crawling is for training.
- unit: qualitative finding; % of AI-bot crawling

| date | value | note |
|---|---|---|
| 24 Jul 2024 | qualitative | Shumailov et al., Nature: training on recursively generated data causes "irreversible defects" in which the tails of the original distribution disappear |
| Jul 2024 → Jul 2025 | 72% → 79% | Cloudflare: share of AI-bot crawling done for training |

- source: Shumailov et al. — "AI models collapse when trained on recursively generated data" — Nature — https://www.nature.com/articles/s41586-024-07566-y — 24 Jul 2024. Cloudflare [VENDOR] — https://blog.cloudflare.com/crawlers-click-ai-bots-training/ — 29 Aug 2025.
- verification: PRIMARY
- cadence: one-off
- signal: leading
- caveats:
  - The Nature result is for models trained **mostly or only** on model output across generations. In practice, synthetic data is mixed with human data, and that case is much less clear.
  - **No published measurement of how much AI-generated text is actually in any frontier model's training set was found.** Indicators 1–6 are the nearest proxies for contamination of the public web.
- counter_evidence:
  - None verified in this session. There is a published literature arguing collapse is avoided when synthetic data accumulates alongside real data rather than replacing it; I did not fetch it and it should be checked before the site makes a claim either way.

### 18. Trust in news media (United States, long run)
- sub_theme: trust
- measures: Share of US adults with a "great deal" or "fair amount" of trust in newspapers, TV and radio to report the news fully, accurately and fairly.
- unit: % of US adults

| year | value | | year | value | | year | value |
|---|---|---|---|---|---|---|---|
| 1972 | 68 | | 2004 | 44 | | 2016 | 32 |
| 1974 | 69 | | 2005 | 50 | | 2017 | 41 |
| 1976 | 72 | | 2007 | 47 | | 2018 | 45 |
| 1997 | 53 | | 2008 | 43 | | 2019 | 41 |
| 1998 | 55 | | 2009 | 45 | | 2020 | 40 |
| 1999 | 55 | | 2010 | 43 | | 2021 | 36 |
| 2000 | 51 | | 2011 | 44 | | 2022 | 34 |
| 2001 | 53 | | 2012 | 40 | | 2023 | 32 |
| 2002 | 54 | | 2013 | 44 | | 2024 | 31 |
| 2003 | 54 | | 2014 | 40 | | 2025 | 28 |
| | | | 2015 | 40 | | | |

2025 detail: 34% say "none at all". Survey 2–16 Sep 2025, n = 1,000, margin ±4 points.

- source: Gallup — "Trust in Media at New Low of 28% in U.S." — https://news.gallup.com/poll/695762/trust-media-new-low.aspx — 2 Oct 2025
- verification: PRIMARY
- cadence: repeated (annual, each September; no measurements 1977–1996 or in 2006). The 2026 reading was not found — it is normally published in early October.
- signal: lagging
- caveats:
  - **The decline long pre-dates generative AI** (72% in 1976; 32% in 2016). It cannot be used as evidence of an AI effect.
  - US only, and heavily partisan: movements track political cycles.
  - "Mass media" means newspapers, TV and radio, which is not where most people now get information.
- counter_evidence:
  - The low of 32% in 2016, before LLMs, was followed by a recovery to 45% in 2018 — so the series can rebound, and partisanship rather than technology is the usual explanation — https://news.gallup.com/poll/695762/trust-media-new-low.aspx

### 19. Trust in news and worry about telling real from fake online (multi-country)
- sub_theme: trust
- measures: Share who trust most news most of the time, and share who worry about telling real from fake news online, averaged across the Digital News Report markets.
- unit: % of online adults, all-market average

| report year | trust most news most of the time | worried about real vs fake online | note |
|---|---|---|---|
| 2020 | 38% | 56% | Both implied by the 2021 report ("grown by six points" to 44%; "58% (+2)") |
| 2021 | 44% | 58% | Pandemic rise in trust |
| 2022 | 42% | 54% | |
| 2023 | 40% | 56% | |
| 2024 | 40% | 59% | 47 markets |
| 2025 | 40% | 58% | 48 markets; 73% in the US and in Africa |
| 2026 | 37% | 62% | 48 markets; lowest trust since measurement began in 2015; trust fell in 29 of 48 markets; US 25% |

Related context:

| date | value | note |
|---|---|---|
| 23 Oct – 18 Nov 2025 | 70% | Edelman: unwilling or hesitant to trust someone with different values, approaches or information sources (about 34,000 respondents, 28 countries) |
| 23 Oct – 18 Nov 2025 | 65% | Edelman: worry foreign actors inject falsehoods into national media |
| 2021 → Jun 2025 | 37% → 50% | Pew: US adults more concerned than excited about AI (10% more excited) |
| Jun 2025 | about half | Pew: US adults who think AI will worsen people's ability to think creatively and to form meaningful relationships |

- source: Reuters Institute Digital News Report executive summaries — 2021: https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2021/dnr-executive-summary ; 2022: https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2022/dnr-executive-summary ; 2023: https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2023/dnr-executive-summary ; 2024: https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2024/dnr-executive-summary ; 2025: https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025/dnr-executive-summary ; 2026: https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/dnr-executive-summary. Edelman — 2026 Trust Barometer — https://www.edelman.com/news-awards/2026-edelman-trust-barometer-society-slides-into-insularity — 18 Jan 2026. Pew — https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/ — 12 Mar 2026.
- verification: PRIMARY for each report year 2021–2026; the 2020 values are derived from the 2021 report's stated changes, not read from the 2020 report.
- cadence: repeated (annual, each June)
- signal: lagging
- caveats:
  - The set of markets changes between years (47 in 2024, 48 in 2025–26; fewer earlier), so the all-market average is not a like-for-like series.
  - The wording of the real/fake item has varied a little between years.
  - The 2026 drop (40% → 37%; worry 58% → 62%) coincides with wider AI use, but RISJ does not attribute it to AI. Wars, elections and news-creator dynamics are named in the same report.
  - Edelman is a PR firm [VENDOR]; its framing ("insularity") changes each year, so headline items are not a continuous series.
- counter_evidence:
  - Trust held flat at 40% for 2023, 2024 and 2025 — the three years of fastest generative-AI adoption — https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025/dnr-executive-summary
  - RISJ 2025 finds trusted news brands are still the place people most often say they go to check whether something is true — a possible premium on human-verified news — https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025/dnr-executive-summary

### 20. Automated (bot) share of all web traffic
- sub_theme: bots
- measures: Share of requests to websites on one security vendor's network that come from automated programs rather than people.
- unit: % of web traffic observed on the Imperva (Thales) network, by calendar year of data

| data year | all bots | bad bots | good bots | humans | note |
|---|---|---|---|---|---|
| 2014 | 59.1% | 22.8% | 36.3% | 40.9% | Bots already exceeded humans |
| 2015 | 45.6% | 18.6% | 27.0% | 54.4% | |
| 2016 | 38.7% | 19.9% | 18.8% | 61.3% | |
| 2017 | 42.2% | 21.8% | 20.4% | 57.8% | |
| 2018 | 37.9% | 20.4% | 17.5% | 62.1% | |
| 2019 | 37.2% | 24.1% | 13.1% | 62.8% | Low point for bots |
| 2020 | 40.8% | 25.6% | 15.2% | 59.2% | |
| 2021 | 42.3% | 27.7% | 14.6% | 57.7% | |
| 2022 | 47.4% | 30.2% | 17.3% | 52.6% | "All bots" = 100 − humans |
| 2023 | 49.6% | 32% | ~17.6% | 50.4% | |
| 2024 | 51% | 37% | — | 49% | "For the first time in a decade", automated traffic passed human |
| 2025 | 53% | 40% | ~13% | 47% | AI-enabled bot attacks: 2 million → 25 million a day |

For 2014–2021 the "all bots" column is my addition of the published bad-bot and good-bot figures; the report publishes the three components.

- source: Imperva / Thales [VENDOR, sells bot protection] — Bad Bot Report series. 2022 report PDF (2014–2021 table): https://www.imperva.com/resources/reports/2022-Imperva-Bad-Bot-Report.pdf ; 2023 report PDF (2022): https://www.imperva.com/resources/reports/2023-Imperva-Bad-Bot-Report.pdf ; 2024 press release (2023): https://www.imperva.com/company/press_releases/bots-make-up-half-of-all-internet-traffic-globally/ ; 2025 press release (2024): https://www.businesswire.com/news/home/20250415432215/en/ ; 2026 report (2025): https://www.imperva.com/company/press_releases/ai-driven-bot-attacks-surged-12-5x-according-to-thales-bad-bot-report/ and https://cpl.thalesgroup.com/blog/application-security/bad-bots-in-the-agentic-age — 29–30 Apr 2026.
- verification: PRIMARY (publisher PDFs and press releases for every year). The 2026 report's own blog page was blocked by a bot check and was not read.
- cadence: repeated (annual, each April)
- signal: coincident
- caveats:
  - **The widely repeated claim that 2024 was the first year bots outnumbered humans is wrong on Imperva's own data.** Bots were 59.1% in 2014. The accurate statement is "first time in a decade".
  - Measured on one vendor's customer network (sites that buy bot protection), not the whole internet.
  - Counts requests, not human attention. A scraper hitting a page a thousand times does not change what any person reads.
  - "Bad bot" is the vendor's own classification, and the vendor sells the remedy.
  - The 2013 figure in the 2023 report (57.0% human) uses an earlier methodology; the series is cleanest from 2014.
- counter_evidence:
  - The 2014–2019 fall (59.1% → 37.2%) shows bot share has dropped before; the rise since 2019 began three years before ChatGPT — https://www.imperva.com/resources/reports/2022-Imperva-Bad-Bot-Report.pdf
  - Cloudflare data suggest most AI-bot activity is crawling for training (79%), which takes content but does not put synthetic content in front of people — https://blog.cloudflare.com/crawlers-click-ai-bots-training/

---

## (a) Best three for a headline chart

1. **Deezer: AI share of music uploads against AI share of listening (indicator 15).** Seven dated points in 18 months (10% → over 50% of uploads) beside 0.5% → 1–3% of streams. One chart shows both the flood of supply and the fact that attention has barely moved. It is the cleanest "production vs selection" picture for the paper's argument. Limit: single vendor.

2. **Graphite: share of new web articles that are primarily AI, with the share that ranks in Google overlaid (indicators 1 and 2).** About 1–2% noise floor before ChatGPT → 36% (Nov 2023) → 48% (Nov 2024) → about 50% plateau through Q1 2026, against 14–19% of what Google surfaces. Shows the rise, the plateau and the filter. Limit: vendor data, detector-dependent.

3. **Mediation: ChatGPT weekly users with Reuters Institute "AI chatbots for news" as the survey anchor (indicators 9 and 10).** 100 million (Nov 2023) → about 1 billion (Jul 2026), beside 7% → 10% weekly news use across 48 markets and 3% → 6% in six countries. Pairs a company-reported trend line with an independent survey that is repeated every year.

Runner-up for a clean annual series: Imperva bot share of web traffic, 2014–2025 (indicator 20) — but show the full series, not just 2019 onward, because the long view undercuts the "first time ever" framing.

## (b) What the evidence does and does not show about AI and culture as of Oct 2026

**What it shows.** AI now produces a very large share of new *supply* in several media. About half of newly published web articles, over half of the tracks uploaded to one music service, and somewhere between a quarter and a half of long posts on LinkedIn and X are classed as AI-generated. Peer-reviewed work puts LLM-modified text at roughly 10–24% of complaints, press releases and scientific abstracts by 2024. AI also increasingly sits *between* people and information: about one in five Google searches returned an AI summary in March 2025, users clicked through about half as often when it did, publishers' Google referrals fell by a third in a year, and ChatGPT has gone from 100 million to roughly a billion weekly users in under three years.

**What it does not show.** Supply is not attention. Where both are measured, the gap is wide: AI is over half of music uploads but 1–3% of streams (mostly fraudulent), and about half of new articles but 14–19% of what ranks in search. Only 10% of people use chatbots for news weekly and 1% call AI their main source. Most "AI companion" headlines rest on broad definitions; narrower questions give 9–16%, and usage logs from general chatbots put companionship under 1% of conversations. The homogenisation evidence is experimental and small. Nobody has yet published a repeated real-world measure of culture converging. Trust in news is falling, but it was falling for decades before generative AI, and the multi-country series was flat from 2023 to 2025.

**Plainly:** the first link in the paper's chain — AI makes more of the content — is well evidenced, if imprecisely. The second link — AI decides what people see — is real and growing fast in search. The third — people's tastes, beliefs and relationships are being reshaped as a result — is not yet measured in a way that would let anyone say it is or is not happening. Several series (web articles, formal writing, Google results) show a plateau rather than a continued rise, and it is not known whether that is saturation or detectors falling behind.

## (c) Most important unmeasured things

- **Attention-weighted AI share.** What fraction of the minutes people spend reading, watching and listening is AI-generated? Deezer's stream share is the only public example. Nothing comparable exists for YouTube, TikTok, Instagram, Spotify, Kindle or news.
- **Recommender mediation.** How much of what people see is chosen by AI ranking systems, and whether those systems favour or penalise AI-made content. Platforms hold this data and do not publish it.
- **Real-world homogenisation over time.** A repeated measure of diversity in published text, music or images (vocabulary, style, topic spread) before and after 2022.
- **Training-data contamination.** No lab publishes the share of synthetic content in its training corpus.
- **Human–AI relationship depth, not just prevalence.** Hours per week, substitution for human contact, and longitudinal outcomes. Current surveys ask "ever used".
- **Companion-app usage from the apps themselves.** Audited active users and time spent for Character.ai, Replika and similar.
- **Passive exposure.** People who never "use a chatbot for news" still read AI summaries in search, AI-written articles and AI-drafted messages. Surveys of intentional use miss this.
- **AI-assisted (hybrid) content.** Every detector study skips it, and it is probably the largest category (Ahrefs: 71.7% of new pages).
- **Images and video.** No credible repeated measure of the AI share of images or video uploaded or viewed was found.
- **Outside the US and Europe, and outside English.** Almost every indicator here is US or English-language.

## (d) Unverified, unresolved or not retrieved

- **Search budget ran out** (200-search session cap) before these could be looked up. None has a number in this file: Steam generative-AI disclosure share; Kindle AI-disclosure share; Adobe Stock AI-image share; Replika and Character.ai user counts by date; any 2026 wave of the Common Sense Media companion survey; Gallup's 2026 media-trust reading; Similarweb zero-click data after mid-2025; Semrush AI Overview prevalence in 2026.
- **Pages that would not load, with no workaround attempted:** Imperva's 2026 report blog (bot check); the PMC copy of Doshi & Hauser (reCAPTCHA); science.org (403) for Kobak et al.; a Steam generative-AI analysis page (429); a TechCrunch page for the 200-million ChatGPT milestone (404); the arXiv page for Yakura et al. on LLM vocabulary spreading into spoken language (empty); a critique of the Graphite study at itechguides.com (timeout).
- **Doshi & Hauser numbers** come from the university press release, not the paper. "+10.7%" appears for two different outcomes; check against the article.
- **Match "16% of singles / 33% of Gen Z"** — secondary only (The Week citing Mashable). Not in the Match press release as fetched.
- **Deezer Jan 2025, Apr 2025, Sep 2025 and Jan 2026 points** — secondary (TechCrunch timeline; Euronews for Sep 2025). Euronews dates the 10,000-a-day figure to February 2025, TechCrunch to January.
- **Graphite Oct 2025 sample size** — the Graphite page as fetched says 43,000 URLs; Axios reported 65,000.
- **Graphite 12-month figure** — "36%" on the page, "35.9%" in Search Engine Land.
- **RISJ DNR 2026 under-25 figure (17%)** — seen once, not re-found. Use 16% for under-35s.
- **RISJ DNR 2025 and 2026 fieldwork dates** — not shown in the pages fetched.
- **CDT 42% companionship figure** — NPR words it as "they or someone they know"; the report table extract read as personal use. Check Table 3 wording.
- **Wikimedia −8%** — confirm the exact comparison months.
- **EBU/BBC** — the page gives "almost half", "a third", "a fifth"; exact percentages are in the PDF.
- **ChatGPT 200 million (Aug 2024) and 300 million (Dec 2024)** — widely reported, not fetched here, left out of the table. The ~1 billion figure for Jul 2026 is a press report of internal numbers, not an OpenAI announcement.
- **Semrush March 2025 value** — not on the page as fetched; left out.
- **Model-collapse counter-literature** (accumulating real and synthetic data avoids collapse) — known to exist, not fetched.
