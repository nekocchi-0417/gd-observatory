# Plain-language copy and comparison alignment

15 October 2026

## Design review

The paired charts shared a starting position, but the headings, descriptions and
source rows above them did not. A separate UI/UX review recommended aligning
each part of the caption, rather than fixing the overall caption height.

Home and Emerging evidence now use shared rows for the category, headline,
scope and source. The capability side identifies its technical-task scope.
On narrow screens the figures return to a natural single-column flow. Home
footnotes include a return control that restores keyboard focus to the chart.

The reviewer inspected the revised desktop screenshots and found no blocking
alignment issue. A clipped pathway prompt was shortened during the final pass.

## Copy principles

- State what changed, for whom, and over which period.
- Explain the quantity being measured before discussing its implications.
- Use ordinary descriptions such as "work without AI" and "check the results".
- Turn measurement gaps into questions a study could answer.
- Keep scope and methodological limits in smaller notes or disclosures.
- Describe gaps in the selected evidence without claiming an exhaustive review.

The pass covers Home, Emerging evidence, the merged Research gaps/pathways
overview, all nine step pages, source explanations, study ideas, Method,
Contribute and the Futures introduction. Historical research records and
bibliographic titles have not been rewritten.

## Preservation and checks

This is a presentation and copy revision. No studies were added, coverage
bands changed, or chart values updated. Source identifiers, URLs, citations,
dates, numerical data and chart configurations were compared with the previous
revision. The skills data-table caption was clarified without changing its data.

Automated checks cover 41 routes at five widths in light and dark themes,
paired-caption alignment, expanded source notes, pathway label bounds,
keyboard navigation, footnote return controls, source-data arithmetic and CSVs.
Screenshots are generated in `dist/verification/` for visual inspection.

These checks do not independently validate the studies. Existing uncertainties
remain, including the financial-services survey denominator and the federal
inventory's discrepancy between explicit stage labels and README totals.
