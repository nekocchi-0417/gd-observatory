# Comparison Prototype

Initial local prototype, 15 October 2026. The user subsequently approved publication with clearer trend charts or numerical summaries. The production implementation is now in `src/comparison.js` and `src/comparison.css`; the notes below retain the original design rationale.

## Preview

Run `sh build.sh`, then open `docs/index.html` in a browser. The HTML is self-contained; no server is required. `npm run verify` checks the production build and saves screenshots and a report under `dist/verification`. `tools/build-prototype.js` remains available for a non-indexed local copy using the same source files.

## Structure

- Home: capability and employment comparison, linking to the full comparison page.
- Emerging evidence: three chart pairs covering work, skills and culture. Separate axes, populations, periods and primary-source links remain visible.
- Research gaps: the nine existing topic pages, with the missing measures and proposed studies attached below their evidence. Longer question lists expand in place.
- Pathways: the existing causal diagram on its own page. Coverage ratings remain explicitly provisional.
- Method and Contribute remain accessible. Futures is retained in the footer.

## Chart Changes

- Jobs: now compares all six age groups within the highest AI-exposure quintile, instead of five exposure quintiles within ages 22-25. Same Stanford release and baseline, but a different comparison. No pooled older-worker index is invented.
- Adoption: Gallup remains the main indicator. More evidence includes Anthropic's one explicitly published and verified occupational pair, Computer & Math (94% theoretical, 33% observed). Other radar-chart categories were not estimated visually.
- Capability: METR remains the main indicator. A line now joins record-high estimates, with all other tested models still visible. Epoch's price analysis is linked as supporting evidence, not charted.
- Skills: a simple numerical result replaces the overview interval plot; full intervals remain on the topic page. It is not a skills time trend.
- Culture: five original daily-upload reports replace the peak-day supply bar. The 1-3% stream figure is a large numerical range. No human-created share, decline, or 2% midpoint is inferred. Later peak-day reports are explicitly excluded from the line.

## Review Decisions

- Whether to keep the capability/employment pair as the homepage lead. It is a comparison of signals, not causal evidence connecting the two datasets.
- Whether the US adoption/Turkish learning-experiment pairing is useful enough to retain. It is explicitly labelled as different populations, not a matched comparison or a population skill trend.
- Whether to keep the culture counterpoint in the main narrative. It prevents supply growth from being presented as verified displacement of audience attention.
- Human sign-off on the age-comparison interpretation and the narrow Anthropic exposure pair. See `research/checklist/comparison-source-review.md` for original files and exact verification details.

## Publication Checks

The approved views are included by `build.sh`. The separate preview builder writes only to ignored `dist/prototype/` and uses the same production sources. The old local-review banner and page titles have been removed from the public build.

`npm run verify` passed 330 route/viewport/theme combinations, including legacy routes, paired-chart alignment, all nine integrated gap sections, source disclosures, CSV qualifiers, keyboard tooltips and back navigation to the hashless homepage. No page errors, overflow, invalid SVG coordinates or broken accessible labels were found. `tools/verify-selected-data.js` passed source arithmetic and build syntax checks. Desktop, tablet and mobile screenshots were visually inspected.
