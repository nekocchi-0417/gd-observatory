# Hand-over: landscape scan 4.0

12 Oct 2026. 40 items in `handover.jsonl`, 31 read at source this session. The search allowance ran out after about 30 searches. Not reached: Census BTOS task questions, YouTube automated-flagging series, insurance and credit surveys, GitHub Octoverse.

## 1. Status on the site

The stop is rated level 3, signal 2, dated Nov 2025. Indicators: `aei`, `agents`, `code`, `chatgpt`.

- **Still the latest, but 11 months old.** There has been no Economic Index report since 26 Jun 2026. The research page shows only a Canada brief (14 Jul) and a review of retraining (12 Aug). Neither the March nor the June 2026 report text gives the Claude.ai split. The June 2026 **data release** does have monthly automation and directive shares for **April–May 2026** (`collaboration_bucket_automation_pct`), and its scope now includes Cowork. Hugging Face was blocked from here, so the values need pulling by hand.
- **`aei` hides a method problem.** In the Sep 2025 report, footnote 4 says re-running the August 2025 sample with the older classifier gave **45% automation, not 49%**. That gap is as large as the "easing" to 45% shown on the chart. The rise in directive use (27% to 39%) held under both classifiers.
- **`aei` deck.** The March 2026 report also says automation "decreased sharply" in API data. The text gives no figure.
- **`agents` pairs.**
  - 9.8 → 21.2 is the average *longest* run of actions per transcript.
  - Extreme turn length "declined somewhat since mid-January".
  - Anthropic calls the 73% human-in-the-loop figure "an upper bound".
- **`code` is better sourced than shown.** Google's own Cloud Next post (22 Apr 2026) says: "75% of all new code at Google is now AI-generated and approved by engineers, up from 50% last fall."
- **`chatgpt`.** Correct against the NBER PDF. No 2026 update found.
- **Landscape pass (body.md).** It treats auto-approve "20% to over 40%" as a trend, but it is a cross-section by user experience. It also quotes directive use "27% to 39%" without the later fall to 32%.

## 2. What is measured

| Series | Frequency | Latest |
|---|---|---|
| Claude.ai automation share (Anthropic) | every 2–4 months | 45% (Nov 2025); Apr–May 2026 in data release only |
| Claude.ai directive share | same | 27 → 39 → 32% (Nov 2025) |
| API automation share | same | ~75% (Nov 2025); "decreased sharply" (Feb 2026) |
| ChatGPT "Doing" share (OpenAI/NBER) | one study, 2 points | ~50% → 34.6% (Jun 2025) |
| Developers using AI agents at work (Stack Overflow, independent) | annual + pulse | 31% → 59%; daily 14% → 37% (Apr 2026) |
| Agent-marked public GitHub PRs (Amplifying, independent) | continuous | 19.4% of all public PRs (Aug 2026) |
| Google AI-generated new code | irregular | 25 → 50 → 75% (Apr 2026) |
| Large firms scaling agents (McKinsey) | annual | 27% → 40% (2026) |
| KPMG agent deployment, US $1bn+ firms | quarterly | 11, 11, 33, 42, 26, 55, 53% (to Q2 2026) |
| EU DSA fully automated moderation decisions | continuous | 43% of 3.94bn (180 days) |

## 3. Key studies

- **OpenAI, Codex (Jun 2026).** Inside OpenAI, the agent's share of the average worker's output went from under 10% (Aug 2025) to over 85% (Jun 2026). This is a second provider, but it reports the vendor's own staff.
- **Daniotti et al. (2025), independent.** By end-2024, 29% of US Python functions on GitHub were AI-written. Newcomers used AI for 37% of their code; the most experienced for 27%.
- **Anthropic, Cadences (Jun 2026).** Claude Code is 0.37 points more autonomous than chat on a 1–5 scale. Users who automate more are more optimistic about their jobs.
- **Anthropic, expertise (Jun 2026).** Across 400,000 sessions, users made 70% of planning decisions and 20% of execution decisions. Use shifted towards end-to-end agentic work.
- **Tomlinson et al. (Microsoft, 2025).** In 40% of Bing Copilot chats, what the AI did did not overlap with what the user was trying to do. The AI mostly assisted rather than did the task.
- **WORKBank (Stanford, 2025).** Workers want 46.1% of their tasks automated. Equal partnership is the most-wanted level in 47 of 104 occupations.
- **Sonar (Jan 2026).** Developers say 42% of committed code is AI-written, but only 48% always check it: the nearest thing to a review rate.
- **Bank of England and FCA (2024).** In UK finance, 55% of AI use cases involve some automated decision-making; about 2% are fully autonomous.
- **Remote Labor Index.** The best automation rate on real freelance projects rose from at most 2.5% (2025 models) to 21.25% now. This is passed to the capability stop.

## 4. Sceptic's case

- **Method noise.** A classifier change alone moves Claude.ai automation by 4 points. The whole 41–49–45 series sits within that band.
- **Heavier use means more augmentation.** Countries with more Claude use per head lean towards augmentation. ChatGPT's "Doing" share fell as use spread.
- **People keep steering.**
  - 63% of developers rarely or never let agents run on autopilot.
  - Users make 70% of planning decisions.
  - At most 73% of API agent actions involve a human.
- **The steepest numbers come from AI firms themselves.** OpenAI's 85% and Anthropic's 21 consecutive actions describe the most favourable setting there is.
- **Firm surveys are noisy.** KPMG's figure fell 16 points in one quarter. Menlo found only 16% of enterprise deployments were "true agents".
- **Delegation is wanted.** Workers want 46% of their tasks automated, and heavier automators are more optimistic.

## 5. Gaps

- No series found that measures hand-over across providers on one definition.
- No independent, repeated review rate (whether output is checked before use).
- No count of hiring, lending or insurance decisions made by AI; surveys count use cases or firms.
- No per-person record of delegation over time; logs are per conversation.
- No measure of take-back once a task is handed over.
- No credible measure of consumer delegation (agents buying or paying).
- No independent, repeated hand-over measure outside coding.

## 6. Proposed ratings

- **Measurement level: keep 3** (close call: 2). Measured repeatedly and directly, but mostly with vendors' own classifiers, which change between waves. Independent repeated data cover coding only.
  - Rises to 4 if an independent body runs one shared measure across providers.
  - Falls to 2 if Anthropic stops publishing the split.
- **Signal: keep 2** (close call: 3). Chat hand-over is flat within method noise, and ChatGPT is moving away from it. In coding, hand-over is clearly rising on independent data.
  - Rises to 3 if a non-coding or cross-provider measure rises.
  - Falls if coding-agent use stalls.
  - **Editor's decision:** whether coding counts as the leading edge.

## 7. Proposed site changes

**Fixes**
- `aei.read`: append "Re-running the August 2025 sample with Anthropic's older classifier gave 45%, not 49%, so moves of a few points may reflect method, not behaviour." Source: Sep 2025 report, fn 4.
- `handover.deck`: after the March 2026 sentence, add "and that automation 'decreased sharply' in business API data (no figure in the text)".
- `aei` chart:
  - Add a vline: "Jun 2026 report: no figures in text; monthly data released".
  - Pull the April–May 2026 values from `release_2026_06_26` and mark the Cowork scope break.
- `agents`:
  - Pair 1 label → "longest run of actions per task without human input (average)".
  - Pair 4: add "then declined somewhat after mid-January".
  - Pair 6: "73%" → "at most 73% (Anthropic's upper bound)".
- `code`:
  - Make the 50% and 75% points solid.
  - Replace the TechSpot source with https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/.
  - Change the tag from secondary to company.
  - `read`: "All three are Google's own statements, with no published method. An independent GitHub estimate put AI-written code at 29% of US Python functions by end-2024 (Daniotti et al.)."
- `signals.handover.basis`: "Claude.ai automation 41%, 49%, 45%, within classifier noise; ChatGPT 'Doing' fell. In coding, agent use rose from 31% to 59% of developers." Add `close_call`: "Could be 3 if coding is the leading edge."
- `handover.dir`: "Mixed: rose, then eased" → "Coding rising; chat flat within method noise".

**New indicators**

1. **`devagents` (recommended).**
   - Headline: "Six in ten developers now use AI agents at work, up from three in ten."
   - How to read: pairs compare Stack Overflow's 2025 survey with its April 2026 pulse.
   - Chart: pairs.
   - Data:
     - Any use at work: 31% (2025) → 59% (Apr 2026).
     - Daily use: 14% → 37% (read from a chart).
     - Rarely or never let agents run on autopilot: 63% (Apr 2026).
     - Block unapproved system changes: 60% (Apr 2026).
   - Source: https://stackoverflow.blog/2026/05/27/agents-on-a-leash-agentic-ai-remains-mostly-monitored-at-work. Tag: primary.
   - Flags: self-report; break (the 2026 pulse has 1,100 people); narrow.
2. **`prs` (flag for review).**
   - Headline: "About one in five public GitHub pull requests now carries an AI agent's mark."
   - How to read: marks are floors, so the true share is higher.
   - Chart: pairs.
   - Data:
     - 19.4% of all public PRs (Aug 2026).
     - 32.5% of the 1,999 most recent PRs (to 27 Sep 2026), of which Claude Code 29.8%.
     - Claude Code PRs per week: ~7,700 (Sep 2025) → ~18,800 (Dec 2025) → 1.6m (week to 28 Sep 2026).
   - Source: Amplifying, https://amplifying.ai/research/state-of-coding-agents. Tag: primary (commercial tracker).
   - Flags: commercial; floor; definition; narrow.

**Missing measures**
- An independent review rate.
- Counts of AI decisions in hiring and credit.
- Per-person delegation over time.
- Take-back after hand-over.
- Consumer delegation.

**Sceptic points**
- Add "Method, not behaviour?" (45% vs 49% on the same data).
- Add "Heavy users augment more" (the country pattern).
- Add "Developers keep agents on a leash" (63%).
- Extend "Hand-over can be sensible" with: "workers want 46% of tasks automated, but most occupations prefer equal partnership" (WORKBank).
