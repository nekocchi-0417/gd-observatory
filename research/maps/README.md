# Detailed evidence maps

Working, AI-assisted classifications assembled on 19 October 2026. Human source and coding review is still required. These targeted collections are not systematic reviews and should not be used to estimate the research field's completeness.

## Scope

- `government.json`: public-sector decisions, oversight and accountability, including earlier algorithmic decision systems as well as generative AI.
- `delegation.json`: allocation of work and decision-making between people and AI, including advice, monitoring and intervention.
- `culture.json`: creation, exposure, livelihoods, diversity and influence in information environments.

These files supplement the historical scans. They do not overwrite old records, import their verification flags or change the coverage colours on the pathway diagram.

## Inclusion and coding

The earlier pathway scans provide search leads. Inclusion requires a primary publication, official dataset, original audit or primary research report whose accessible source text supports the coding. Publisher abstracts can support a narrow classification; a classification based on an abstract does not imply the full methods were checked. Source locations identify the basis used.

Each observation explicitly pairs one research facet with one measurement method. A source may support several pairs, but separate facet and method lists must never be multiplied into unobserved pairings. Each pair includes:

- The facet and method IDs.
- A concise description of what was measured or examined.
- A location within the original source and a source URL.

Each source also records its setting, time scope, design and applicability limitations. Policy proposals and review articles are context; the default map view excludes them. Administrative datasets and audits are included, with their nature stated. A documented safeguard is not automatically evidence of an effective safeguard.

## Counts and interpretation

Cells count distinct canonical source URLs. A source counts once per cell and once in a row total, even when it supports several measurement types. A report, experiment and dataset each count as one reference. Different publications or URLs may describe overlapping data; these are not counts of independent studies or replications.

The new maps use count bins 0, 1, 2-3, 4-6 and 7+. The larger legacy maps keep their existing scale. Search scope and coding differ, so shading must not be compared across topics as evidence quality, research maturity or risk.

An empty cell means this selection contains no eligible coded reference for that pairing. It can reflect a search limitation, inaccessible evidence or an unsuitable classification. It does not establish that the research does not exist. Proposed research extensions need a fuller literature search and feasibility review before being treated as priorities.

## Review order

1. Check that the linked publication matches its title, authors and year.
2. Read the cited location. Does it support the specific facet-method pair?
3. Check whether the measure is observed behaviour, reported practice, an audit or a simulated decision.
4. Check setting and duration; distinguish repeated data from a one-time observation or retrospective account.
5. Check duplicate publications, shared samples and alternative interpretations before drawing conclusions.

`npm run verify:maps` checks coding structure, source identity, provenance and safe links. `npm run verify:preview` checks map counts, filters and navigation. Neither verifies scientific findings.

## Priority human checks

Government: read the full methods for Cheng et al. (2022), De-Arteaga et al. (2020), Bright et al. (2024), and Kleizen et al. (2023). The present classifications rely on abstracts or previews. Canada's register was checked at catalog level, and Hemesath and Tepe through indexed publisher text. The source records state these limits.

Culture: prioritise the NBER books working paper and Tessler's deliberation study, whose detailed methods were not fully accessible in this pass. Check the [Salvi author correction](https://www.nature.com/articles/s41562-026-02588-0) before using any personalization estimate.

Costello et al.'s 2024 conspiracy-belief paper is excluded from the new Culture map because of an [Editorial Expression of Concern](https://doi.org/10.1126/science.aej2383), published 11 June 2026. This is not a retraction. It may still occur in the older, unverified landscape collection; that collection needs a separate publication-status audit before being used as a verified synthesis.

Cheng's original paper and its extended analysis use different data/preprocessing. The new government coding refers to the original source's methods and lists the extension as a version warning; no quantitative effects are combined. The culture bibliography records the specific Ashkinaze and Yakura revisions inspected, retaining their initial release dates in the citations.
