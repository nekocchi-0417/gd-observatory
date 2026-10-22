# Topic review expansion: 22 October 2026

## Scope

Eight topic reviews add 181 detailed topic-source records, with five selected
sources and four provisional measurement questions per topic. Some sources
appear in more than one topic, so this is not a count of unique studies.
The skills and judgement topic retains its earlier scan and selected studies.

This is an AI-assisted, targeted scoping scan. It is not a systematic review,
an independent replication or a completed human assessment. Search trails,
exclusions, source-access levels and review notes accompany each topic JSON.
Sources accessed through abstracts or official summaries are identified as such.

The eight expanded maps use only detailed extracted records. They group research
questions by whether observations are one-time, repeated, follow the same units,
or belong to reviews/proposals. Older imported reading leads remain searchable
but are excluded from these maps. The skills map retains its earlier theme-by-
design classification. Counts are neither evidence-quality scores nor comparable
estimates of field coverage. Related publications can reuse data.

## Selected evidence

Six panels reuse four traceable time series and two one-off numeric findings:

- METR: archived TH1.1 estimates at 80% predicted success, all 23 model points.
  The public series stopped updating in September 2026; this is not a live feed.
- Stanford / ADP: all six age groups from the pinned September 2026 release.
  The 12.8% own-baseline fall differs from the paper's 19% relative shortfall.
  A newer October release exists and has not been substituted into this chart.
- Gallup: eight waves from the official HTML table. Page prose and an embedded
  chart were out of sync with that table; the exact extraction is documented.
- Bastani et al.: adjusted unaided exam differences. The unrestricted tool's
  difference is 5.4 percentage points, not a 17-point difference. One school and
  a short experiment cannot establish long-run workplace deskilling.
- Deezer uploads: six dated reports, including the previously omitted November
  2025 report. Qualified values are preserved. Later peak-day shares are excluded.
- Deezer streams: the reported April 2026 range of 1-3%, including fraudulent
  activity. No invented midpoint, organic share or time trend.

The pairs illustrate questions worth connecting; they do not identify a causal
relationship between the two outcomes. Primary links, provenance, transformation
notes and the exact chart values are in selected-evidence.json.

## Human review priorities

1. Review the six displayed readings against their source tables, especially
   Gallup's inconsistent release components and the two employment denominators.
2. Review the three prominently featured sources per topic and decide whether
   they answer the intended question. Two further selections are expandable.
3. Check the provisional gap interpretations and temporal/facet classifications.
   Empty cells describe this collection, not proof of absent research.
4. Read source corrections and access limits in the libraries. In particular,
   the Costello et al. conspiracy study has an expression of concern (not a
   retraction), and the AFST reanalysis revised accuracy conclusions.
5. Review older imported leads before relying on their metadata or conclusions.

## Verification and remaining limits

- The public-link audit checked 180 distinct links: 153 responded successfully,
  none returned 404/410, and 27 blocked or timed out. See link-audit.json. A
  successful HTTP response is not a content verification. The older imported
  libraries were not exhaustively link-audited in this expansion.
- Automated DOM checks cover all nine topics, map/filter consistency, linked
  gap references, library search, topic switching, themes and review labels.
- Selected-evidence checks cover six panels, source tables, keyboard inspection
  and chart geometry at three container widths. These are not screenshot tests.
- Chrome control was unavailable in this session. Visual inspection on desktop
  and mobile remains outstanding; no substitute browser runtime was used.
- Preliminary topic pages retain noindex metadata while human review is pending.
- Existing dependency audit reports one high-severity development dependency
  issue. Dependency versions were not changed by this research/UI update.

## Build and rollback

Run with the repository's installed Node dependencies:

```sh
node tools/build-reorganized-preview.js
node tools/verify-topic-review.js
node tools/check-shareable-dashboard.js
node tools/build-reorganized-preview.js --publish
node tools/verify-topic-review.js docs/topics
node tools/check-shareable-dashboard.js docs/index.html
```

The prior live output is preserved under
archives/2026-10-22-before-topic-expansion/docs, with full original source at
commit b25d20f58c90e857075e0dc5b42bad03a94ac82f. The paper-node-explorer branch,
its PR, prototype files, package.json and README were not modified.
