# OWID Supporting Sources

Checked 2026-10-16. AI-assisted source review, not human sign-off. The source audit below covers robotaxi data and FrontierMath; the implementation review adds Gallup and the presentation checks.

## Gallup And Integration

The adoption comparison now shows three cumulative groups, using all eight waves and 24 numbers from the [original Gallup table](https://www.gallup.com/699797/indicator-artificial-intelligence.aspx). Its HTML `noscript` table is available even when the external interactive chart fails to load. Daily use is included in frequent use, and both are included in total use. Endpoints (May 2023 to August 2026): daily 4% to 16%, frequent 11% to 32%, total 21% to 53%. The table is newer than surrounding Gallup prose, which still discusses May 2026. The three lines must not be added together.

OWID's [Gallup visualisation](https://ourworldindata.org/grapher/share-working-adults-united-states-ai-work) informed the design. On the check date, it stopped at Q2 2026; this dashboard retains the newer August wave and Gallup's month labels. The chart uses direct endpoint labels, three distinct colours, a dashed total-use line, a 0-100% scale, and keyboard/pointer tooltips. Its source table and CSV include all three groups. The existing Home comparison and coverage assessments are unchanged.

The robotaxi chart is collapsed under Delegation to AI, with the source, regional scope, units and outstanding human-outcome questions visible when opened. Full notes and a CSV preserve every displayed monthly value. FrontierMath is a library reference only. There is no new large chart on the capability step.

`tools/verify-owid.js --sources` checks data structure, charts and labels at five widths in both themes, expanded disclosures, CSVs, routing and library entries. It also compares all 24 Gallup numbers with the live primary-source table and checks the live OWID robotaxi CSV against its recorded fingerprint.

### Human Review, About Five Minutes

- Confirm Gallup's August table and overlapping usage definitions; its prose and chart captions can lag the table.
- Review whether one California service is a useful supporting example for delegation. The chart does not measure jobs displaced, human intervention or market share.
- Check the explicit FrontierMath v2 source before citing any model scores. No scores have been added to this dashboard.

## Robotaxi Recommendation

Use `ROBOTAXI15` from `src/robotaxi-data.js` as supporting deployment evidence. Display `rows.filter(row => row.date >= displayStart)`: 32 monthly observations, November 2023 through June 2026. All 52 original OWID observations, March 2022 through June 2026, remain available in the file. There is one entity, California; no observations were interpolated, rounded, or added.

The display restriction avoids the earlier mixture of Waymo service with a safety driver and Cruise service. Cruise's suspension in October 2023 leaves Waymo supplying passenger travel from November. Keep this scope visible when displaying the chart. [OWID chart and processing notes](https://ourworldindata.org/grapher/passenger-kilometers-traveled-self-driving-taxis).

### Sources And Units

- [OWID CSV](https://ourworldindata.org/grapher/passenger-kilometers-traveled-self-driving-taxis.csv?v=1&csvType=full&useColumnShortNames=false), [chart metadata](https://ourworldindata.org/grapher/passenger-kilometers-traveled-self-driving-taxis.metadata.json?v=1&csvType=full&useColumnShortNames=false), and [full indicator metadata](https://api.ourworldindata.org/v1/indicators/1296580.metadata.json). The dataset vintage is 2026-08-20; the CSV ends in June 2026. Retrieval date and observation date must remain distinct.
- [CPUC quarterly reporting](https://www.cpuc.ca.gov/regulatory-services/licensing/transportation-licensing-and-analysis-branch/autonomous-vehicle-programs/quarterly-reporting) is the primary collection. Use deployment reports; the separately listed pilot reports have different coverage. Monthly observations are submitted in quarterly files. CPUC changed the reporting calendar and template in January 2025 and warns about redacted fields.
- [CPUC template and dictionary](https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/consumer-protection-and-enforcement-division/documents/tlab/av-programs/cpuc-av-deployment-data-template-and-dictionary-av-pd---v2.xlsx): `Month-Level Data Dictionary`, row 12, defines `TotalPMT` as summed passenger-miles. `Trip-Level Data Dictionary`, row 27, defines distance weighted by passengers. Shared rides count each segment's occupancy. This distinguishes passenger-distance from vehicle-distance or trip counts.

OWID aggregates carriers and converts passenger-miles using 1.60934. Retain its already-converted values; use the axis unit **passenger-kilometers per month**, despite the metadata's shorter `kilometers` label. Appending `-01` to each CSV month supplies a plotting key, without asserting a day-level observation. Empty travel between pickups is excluded. [OWID metadata](https://ourworldindata.org/grapher/passenger-kilometers-traveled-self-driving-taxis.metadata.json?v=1&csvType=full&useColumnShortNames=false).

### Primary Spot Checks

Read only the monthly aggregate members of these official archives, without extracting trip-level records:

- [September-November 2023 archive](https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/consumer-protection-and-enforcement-division/documents/tlab/av-programs/2023-av-deployment---0901-1130%282%29.zip): Cruise's `PSG0039080_202401_AV_Month_Part0.csv`; Waymo Driverless Deployment's `PSG0038152_2024_01_AV_Month-Level_Part0.csv`. Waymo's Drivered Deployment monthly file contains only its header. Cruise reports zero trips and zero passenger-miles in November.
- [Waymo April-June 2026 archive](https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/consumer-protection-and-enforcement-division/documents/tlab/av-programs/waymo-deployment-2026q2.zip): `Waymo Deployment 2026Q2/Driverless Deployment/PSG0038152_2026_08_AV_Month_Part0-Deployment.csv`.

| Month | CPUC passenger-miles, summed | Multiplied by 1.60934 | OWID passenger-kilometers retained |
|---|---:|---:|---:|
| 2023-09 | 197482.1646 | 317815.946777364 | 317815.97 |
| 2023-10 | 250261.2352 | 402755.416256768 | 402755.4 |
| 2023-11 | 196713.7014 | 316579.228211076 | 316579.22 |
| 2026-04 | 8367026.44 | 13465390.3309496 | 13465390 |
| 2026-05 | 8780780.15 | 14131260.7266010 | 14131260 |
| 2026-06 | 8044459.43 | 12946270.3390762 | 12946270 |

All six differences are below one passenger-kilometer. These are close numerical checks, not exact matches to decimal multiplication; this review did not establish the cause of the small precision differences. The stored observations match OWID exactly. The other 46 months have not been independently recomputed from CPUC submissions.

### Reuse And Limits

Credit: **California Public Utilities Commission (2026), with major processing by Our World in Data**. Link both the CPUC collection and OWID chart, and disclose the November 2023 display restriction. OWID's own work uses [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), requiring attribution and identification of adaptations. Its [full metadata](https://api.ourworldindata.org/v1/indicators/1296580.metadata.json) labels the original CPUC data public domain and `nonRedistributable: false`. [CPUC's ownership terms](https://www.cpuc.ca.gov/about-cpuc/conditions-of-use) describe a general public-domain policy with exceptions for material owned by others. Do not imply OWID's license overrides third-party rights.

The chart describes reported passenger travel in California deployment services. It cannot establish market share, employment effects, or safety. It is not a fixed-fleet or fixed-service-area panel. The title about driverless service applies to the proposed display window; showing the complete history requires an explicit early-period scope warning. Human review remains required, including source revisions and reproduction of any additional months used for headline claims.

### Snapshot Checks

Passed on 2026-10-16: JavaScript syntax and isolated browser-constant loading, complete CSV row equality, monthly continuity, display filtering, metadata and hash matching, six CPUC spot checks, and ASCII-only source files. No build or UI tests were run.

- Parse the CSV with a CSV parser and compare every `Month`/`Passenger-kilometers` pair with the JavaScript rows, after appending `-01`.
- Expect 52 unique, consecutive monthly dates, 52 finite nonnegative values, and 32 observations at or after `displayStart`. No blanks or duplicate months occur in this snapshot.
- Endpoints: full series starts at 20582.791 in March 2022; display starts at 316579.22 in November 2023; both end at 12946270 in June 2026.
- Do not apply the miles conversion again. Do not interpolate missing future months or interpret Cruise's later blank submissions as observed zero rows.

SHA-256 fingerprints of downloaded artifacts:

| Artifact | SHA-256 |
|---|---|
| Robotaxi CSV | `8d06abe443334ba638a26f62a606084209f8c53c78225bc36ad00b260c6951cf` |
| Robotaxi chart metadata | `1a42ef5d5af17a4c7628795402e717ec6f7985398ccadcedde646c46395f807a` |
| Robotaxi full metadata | `7477432d9273694f2e427e8a8c64f1efc972e15fa8f2675ca1da6aa7bf40b854` |
| CPUC template XLSX | `9e1d69f5bccb685666b92917e25ab6e5321f2324834af5884ad9d2b072fc6e06` |
| Waymo 2026 Q2 monthly CSV member | `644c76649e799509000f53a158a62190cff55ddf53e6cda005b1c277f2759c6f` |

Raw downloads are temporary audit material outside the repository. The checked-in JavaScript retains all source observations and the source URLs; a future download can differ when providers revise the series.

## FrontierMath Library Recommendation

Add a library link only; no FrontierMath chart or model-score extraction is proposed.

Suggested title: **FrontierMath: advanced mathematics with Python**.

Suggested blurb: "Epoch AI evaluates how often AI models solve advanced mathematics problems with access to Python. This source covers the corrected Tiers 1-3 v2 benchmark, released on 12 June 2026. Scores from the original version are not directly comparable."

Use the explicit [Epoch Tiers 1-3 v2 page](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2), alongside the [OWID chart](https://ourworldindata.org/grapher/ai-frontiermath-over-time). On the review date, the generic `https://epoch.ai/benchmarks/frontiermath` redirected to Tier 4 v2, a different subset. Do not use that redirecting URL for this blurb.

The [OWID metadata](https://ourworldindata.org/grapher/ai-frontiermath-over-time.metadata.json?v=1&csvType=full&useColumnShortNames=false), updated 2026-09-07, describes corrected Tiers 1-3 and excludes Tier 4. Its 295-problem description refers to the base set; Epoch says hub evaluations normally use private sets. Avoid asserting a fixed per-model denominator in the short blurb. Epoch's changelog confirms the 2026-06-12 v2 correction and removals. Tool-assisted benchmark accuracy is a narrower claim than general mathematical ability. OpenAI funded the benchmark and has exclusive access to a subset, as disclosed on Epoch's page.

FrontierMath metadata SHA-256: `3a64a2df5d81070f5b7ca3227b3b5631a2b1eedf0a9426100bc9bbc0acb47245`. This check covered metadata and evaluation definitions; it did not reproduce model evaluations or audit private problems.
