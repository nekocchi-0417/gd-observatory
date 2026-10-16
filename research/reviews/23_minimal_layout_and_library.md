# Minimal layout and evidence library

15 October 2026

## Presentation

Home now opens with the approved headline, a short scope/causation note and the
paired charts. The explanatory paragraph, introductory links and repeated
destination sections have been removed. Background, authorship and the original
paper are in Contribute, reached through About in the footer.

Step pages retain their questions, findings and measurement gaps. Repeated
introductions and per-indicator rationale links are removed. Entries use thin
dividers instead of boxes. Each retains one linked citation and an essential
limitation; fuller rationale and caveats remain in Sources & methods.

A separate UI/UX review inspected desktop/mobile Home, skills, library and
Contribute screenshots and found no blocking visual issue. The approach takes
Epoch AI's short opening and evidence-first hierarchy as a reference, without
copying its text or visual assets.

## Library scope

The catalog imports the eight scan4 collections and the existing skills/agency
landscape, following the repository's topic mapping. It contains bibliography
metadata only: no old findings, extracted values or verification flags. The
existing featured sources and related-evidence summaries are merged at runtime,
with current source metadata taking precedence. Source URLs and known DOI
aliases identify duplicates; this does not establish unique-study counts.

The generated catalog contains 743 entries from 780 records: 22 URL duplicates
were merged and 15 unusable links were omitted. The original files are unchanged.
Every included record retains its collection, source ID and record number.

All nine libraries are collapsed by default, with reference counts and an
AI-assisted label. Opening reveals a human-checking caveat and title/author/year
search. Coverage labels still describe the selected indicators, not the library.

## Parked bibliography checks

These are reference-cleanup issues, separate from the selected-indicator review.
The generator prints the full record-level audit on every run.

- Adoption: unusable link for `mit-nanda-genai-divide`.
- Influence: unusable link for `branham-soroka-wlezien-2017`.
- Skills: unusable links for `rathje2025`, `chiang2024`, `dellacqua2023`,
  `yeverechyahu2024`, `sergeeva2020`, `kellogg2024`, `arnold1998`, `weigelt2009`,
  `cheng2022`, `crootof2023`, `amnesty2021`, `kelly2021`, `macnamara2024`.
- Three merged URLs have conflicting years in the original records: Stanford's
  adoption monitor, the DSA transparency database, and the Public Citizen polling
  memo at `AI-Polling-Memo_9.17.26.pdf`. The generator retains the first record's
  metadata and all provenance. The blanket human-review warning applies.

The import checks URL syntax and identity, not whether every remote page is
available or correctly described. No claim of new source verification is made.

## Verification

`tools/verify-library.js` checks deterministic generation, safe URL handling,
browser/Node parity, permitted fields, and traceability for all 765 included
original records. UI tests cover search, no results, clearing, collapsed state,
deep links, minimal navigation, source notes and preservation of chart data.
