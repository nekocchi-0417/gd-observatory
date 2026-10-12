# Culture and information: landscape scan 4.0

Stop id `culture`. 12 Oct 2026. 60 items in `culture.jsonl`, 28 read at source this session. Homogenisation and knowledge commons are left to the group pass (`landscape/group.md`); only language-change items are added here.

## 1. Status on the site

Six indicators: deezer, articles, search, chatbots, companions, trust. Level 3, signal 2 (close call 3). Most of it checks out. Fixes needed:

- **trust (stale).** The text says US trust in mass media fell to 28% in 2025. Gallup's 2026 reading is **33%** (1–17 Sep 2026, n ≈ 1,000, ±4). The rise is mostly Republicans (8% to 22%). Source: [Gallup, 29 Sep 2026](https://news.gallup.com/file/poll/714986/20260929NewsMediaTrust.pdf). Reuters still shows a fall (40% to 37%), so the trend should read **Mixed**, not Falling.
- **search (out of date).** The trend is marked "One-off", but repeated series now exist:
  - Ahrefs: an AI Overview goes with a **58%** lower click-through rate for the top result (Dec 2023 vs Dec 2025), up from 34.5% in its 2025 study.
  - Chartbeat (via Search Engine Journal): Google referrals to publishers fell **21.9%**, then **40.2%** (Jul 2025 to Jul 2026).
  - SparkToro: **68%** of US Google searches ended with no click (Jan–Apr 2026).
- **chatbots.** The "1% main source" figure is not in the DNR 2026 executive summary the site links to; it is in the [chatbots chapter](https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/emerging-uses-ai-chatbots-news-and-what-it-means-journalism). Add that link.
- **articles.** Originality.ai has published nothing since 17 Sep 2025; Graphite has no Q2 2026 point yet.
- **deezer.** Verified. Could add: 13.4m AI tracks tagged in 2025.
- **data3.js line 74 ("AI's share of new content stops growing").** True only for articles; ebooks (23% → 53%, 2023–25) and Deezer uploads still rise. Suggest: "Articles plateaued; music and book supply still rising."

## 2. What is measured (best series)

| Series | Freq. | Latest | Note |
|---|---|---|---|
| Deezer AI share of uploads / streams | ~quarterly | >50% / 1–3% (Jun–Jul 2026) | Supply and attention together |
| Graphite, primarily-AI new articles | 2 releases, quarterly points | 49.9% (Q1 2026) | Vendor; clean pre-ChatGPT floor |
| Reimers & Waldfogel, AI share of new Amazon ebooks | annual (in paper) | 52.7% (2025) | Independent; links supply to use |
| Reuters DNR, weekly chatbot news use | annual | 10% (2026, from 7%) | Independent, 48 markets |
| Pew, Americans and AI | annual | 49% use chatbots; 13% news; 4% companionship; 60% read AI summaries (Feb 2026) | Independent US benchmark |
| Ahrefs, click-through rate with AI Overview | annual | −58% | Within-keyword, tied to AI |
| Chartbeat, Google referrals to publishers | annual | −40.2% (Jul 2026) | Mediation; vendor, not isolated to AI |
| Gallup media trust; Reuters trust | annual | 33% US; 37% across 48 markets | Background; not tied to AI |

## 3. Key studies

- **Reimers & Waldfogel 2026 (NBER 34777).** Monthly ebook releases nearly tripled from 2022 to late 2025, and over half of 2025 releases contained AI text. AI books get far fewer ratings (6.0 vs 82.5), though the gap is narrowing. Human-written output held stable.
- **Chakrabarty et al. 2026 (arXiv 2607.20349).** Covers 14,419 self-published genre-fiction books.
  - AI-heavy books (over 25% AI text) take a growing share of sales; press reports put it at about 20% by Q2 2026.
  - Books with no AI text lost most ground in genres where AI is common.
  - This is the first evidence of attention moving towards AI-made work in a real market.
- **Kapwing 2025.** 21% of the first 500 Shorts shown to a new YouTube account were AI slop (one account).
- **Pangram 2025.** 21% of ICLR 2026 peer reviews were classed as fully AI-written.
- **Kobak et al. 2025; Liang et al. 2025.** At least 13.5% of 2024 PubMed abstracts were LLM-processed; 10–24% of complaints, press releases and job posts were LLM-assisted, levelling off by 2024.
- **Yakura et al. (v4 2026); Geng & Trotta 2025.** ChatGPT-favoured words rose in unscripted podcast speech. "Delve" fell once it was flagged, while other such words kept rising.
- **Fang et al. 2025 (MIT and OpenAI, randomised trial, n = 981, 4 weeks).** The assigned chatbot mode made no difference; people who chose to use it more did worse on loneliness and dependence.
- **Anderson et al. 2020 (Spotify, 100m users).** Algorithm-chosen listening was narrower than self-chosen listening. This is the foundation for the "AI as filter" link.

## 4. Sceptic's case

- **Supply is not attention.** AI music is over half of Deezer uploads but only 1–3% of streams, and up to 85% of those streams were fraudulent. AI ebooks are over half of new releases but get one-fourteenth of the ratings.
- **Trust is not tracking AI.** US media trust rose 5 points in 2026, the year chatbot use reached half of US adults (Pew).
- **Searching has not shrunk.** Gartner forecast a 25% fall in search volume by 2026; Google reports record query volume in Q1 2026. What is falling is clicks out to websites.
- **Detectors are unreliable.** Changing detectors moved Graphite's estimate by 3.3 points. 2023 detectors flagged non-native English writing as AI (Liang et al. 2023). Adobe disputes the Adobe Stock count. Writers change wording once a word is flagged.
- **Companions are small, and may help.** Only 4% of US adults have used chatbots for companionship (Pew 2026). An AI companion reduced loneliness over a week (De Freitas et al.).
- **Model collapse is avoidable.** It happens when synthetic data replace real data, not when they accumulate alongside it (Gerstgrasser et al. 2024).
- **A headline forecast looks wrong.** The "90% of online content AI-generated by 2026" claim often attributed to Europol was not found in Europol's current report (as fetched). Measured shares are about 50% of new articles and 2.5% of pages purely AI.

## 5. Gaps

- No series found that measures the AI-made share of time spent watching, listening or reading; no platform that labels AI content (YouTube, TikTok, Meta, Spotify) publishes how much is viewed.
- No independent tracker of the AI share of search results since Originality.ai stopped in Sep 2025.
- No independent cross-vendor audit of AI detectors on 2026 models.
- No repeated earnings series for illustrators, voice actors or translators; only one-off surveys (Society of Authors 2024: a quarter of illustrators lost work).
- No 2026 repeat found of the Common Sense Media teen companion survey; no audited time-per-day data for companion apps.
- No repeated measure of how much consumption is chosen by recommender systems.
- No repeated measure of the AI share of images or video on social platforms; almost nothing outside English and the US.

## 6. Proposed ratings

- **Measurement level: keep 3 (Measured, with limits).** Supply and mediation are measured repeatedly and directly, but mostly by vendors using detectors; attention is measured only on Deezer and in books.
  - **Would go to 4** if an independent body (Ofcom, Nielsen, a statistics office) or a major platform published a repeated attention-weighted AI share.
- **Signal: keep 2 (Early or mixed signs), with a stronger close call to 3.**
  - Supply is above 50% in uploads, articles and ebooks. Search referrals fell 22%, then 40%.
  - But attention to AI-made work is still small, 1% name AI their main news source, and US trust rose.
  - **Flag for the editor:** one niche measure may already meet the site's own "over 5% of attention" rule. AI-heavy self-published fiction reached about 20% of sales by Q2 2026 (press report of a preprint; not read in the paper). If the editor confirms this from the paper, move to 3.
  - **Up** also if Deezer's AI stream share passes 5%, or AI as main news source passes 3%.

## 7. Proposed site changes

**Fixes**
- `trust.read`: "fell from 72% in 1976 to 28% in 2025 (Gallup)" → "fell from 72% in 1976 to a record-low 28% in 2025, then rose to 33% in 2026 (Gallup)". Add the 2026 PDF to `src`. `signals.trust.trend`: Falling → **Mixed**. Basis: "Reuters 40% to 37% in 2026; Gallup US 28% to 33%; neither tied to AI."
- `signals.search.trend`: One-off → **Falling**, toward. Basis: "Top-result click-through 35% then 58% lower with an AI Overview; publishers' Google referrals −22% then −40% a year." Flags: vendor, cause.
- `search` pairs: replace the Chartbeat −33% with "−40%, Google search referrals to publishers, CHARTBEAT VIA SEJ · JUL 2025 → JUL 2026". Add "58% lower click-through for top result with AI Overview, AHREFS · DEC 2025" and "60% of US adults read AI search summaries, PEW · FEB 2026".
- `chatbots.src`: add the DNR 2026 chapter link (the 1% figure). Pairs could add "13% of US adults have used chatbots for news, PEW · FEB 2026".
- `companions.read`: add "Among US adults, 4% have used chatbots for companionship and 10% for emotional support (Pew, Feb 2026)."
- `articles.read`: add "Originality.ai has published no update since Sep 2025."

**New indicator (one; the other candidates are one-offs)**
- **id `books`.**
  - Headline: "Over half of new Amazon ebooks in 2025 contained AI text."
  - How to read: "Share of new English ebooks whose preview a detector flags as not fully human; AI books get far fewer readers."
  - Chart: line, plus pairs.
  - Data (read at source, Table 5 and Introduction): 2022 ≈0% ("roughly zero"); 2023 23.1%; 2024 33.6%; 2025 52.7% (annual, weighted). Monthly peaks 30%, 45%, over 60%.
  - Pairs: average ratings 82.5 human vs 6.0 AI; monthly releases index ≈100 (2020 to mid-2022) to over 300 (late 2025).
  - Source: Reimers & Waldfogel, NBER WP 34777 (Jan 2026, revised Jul 2026), https://www.nber.org/papers/w34777. Tag: primary.
  - Caveats: vendor detector (Pangram); "not fully human" counts light AI help; ebooks only; one paper.
  - Optional pair, flagged secondary: about 20% of sales in self-published genre fiction by Q2 2026 (Chakrabarty et al. 2026, via Let's Data Science).

**Missing measures to add**
- "What share of what platforms label as AI-made is actually watched or listened to."
- "Earnings of illustrators, voice actors and translators, tracked over time."
- "An independent check of AI detectors on current models."

**Sceptic points to add or replace**
- "**Trust is not tracking AI.** US trust in media rose from 28% to 33% in 2026 (Gallup)."
- "**Readers skip AI books.** AI-containing ebooks average 6 ratings against 82 for human-written ones."
- "**Searching has not shrunk.** Google reports record query volume; what is falling is clicks out to websites."

**Watch list:** CISAC forecasts 24% of music creators' revenue at risk by 2028.
