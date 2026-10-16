# Comparison Source Review

Checked 2026-10-15. Data prepared for the approved comparison redesign; AI-assisted primary-source verification, not human review.

## Usable Scope

- Work: 60 monthly observations, September 2021 through August 2026, for six age groups within Q5 (the most AI-exposed occupational quintile). Ages: 22-25, 26-30, 31-34, 35-40, 41-49, 50+. Each group's November 2022 employment = 100. This covers the full Q5 aggregate, not only software developers or customer service workers.
- Exposure: one broad category with a verified published pair: Computer & Math, 94% theoretical and 33% observed. These are the authors' rounded whole-percent figures. Five to eight matched category pairs were not verified; no additional rows are supplied.
- Integration: `src/comparison-data.js` defines `COMPARISON_DATA`, consumed by `src/comparison.js`. Work and exposure have source metadata and data rows; the music series records each release URL and rounding qualifier. No runtime network requests are needed.

## Trend Presentation Review

- [x] METR: join only record-high point estimates among the same 23 models already plotted. Keep every tested model visible. Not a fitted trend, forecast, or population average. Preserve all published intervals in source details and CSV.
- [x] Skills: replace the overview's interval plot with a numerical summary. The adjusted -5.4 and -0.4 point effects remain those in the selected trial; no skills time trend is inferred. The full topic page retains uncertainty.
- [x] Deezer: checked original releases for 24 Jan 2025 (~10%), 16 Apr 2025 (>18%), 11 Sep 2025 (>28%), 29 Jan 2026 (~39%), and 20 Apr 2026 (~44%). Exact URLs and qualifiers are in `COMPARISON_DATA.music.uploads` and the downloadable table.
- [x] Plot release months, not invented observation dates. The line connects reported rounded snapshots, not measured intervening values. Report windows and detector coverage are not constant or fully documented.
- [x] Pair the final upload report with the 1-3% stream range from the same April release. Do not infer a midpoint, confidence interval, fraud-adjusted audience share, or decline in human-created music.
- [x] Exclude later >50% reports because they refer to peak days, not a comparable daily-share snapshot.
- [ ] Human review: are the selected US employment data, Turkish classroom experiment and one music platform useful illustrations of the broader pathways? They do not establish an economy-wide causal story.

## Stanford / ADP Provenance

[Original study](https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/) -> [official Canaries Dashboard](https://digitaleconomy.stanford.edu/project/indicators/canaries-dashboard/) -> the Data link below "Employment Index in Canaries Sample by Age Group and AI Exposure."

The dashboard links to a [rolling latest ZIP](https://storage.googleapis.com/aviary-del-public/release_memos/latest/downloads/canaries_age_by_exposure_results.zip). Its SHA-256 matched the [pinned September ZIP](https://storage.googleapis.com/aviary-del-public/release_memos/2026-09/downloads/canaries_age_by_exposure_results.zip) when fetched. The [September manifest](https://storage.googleapis.com/aviary-del-public/release_memos/2026-09/manifest.json) identifies that package, vintage 2026-09-17, published 2026-09-23T03:37:55Z.

Use `canaries_age_by_exposure.csv`, not the separate annualized-growth or year-over-year CSVs. Its bundled `canaries_age_by_exposure_data_dictionary.md` specifies the age labels, units, and normalization. The 300-row source contains five quintiles per month. Filtering `exposure_quintile == "Quintile 5 (most exposed)"` yields 60 rows with all six age columns. Numeric values are preserved as parsed, including floating-point tails; display rounding does not change the stored data.

| File | SHA-256 |
| --- | --- |
| September ZIP | `a99c3912381eeb6b1f7e74b6e86dd1e2a760676adc3848ba901254e76086a397` |
| Underlying CSV | `e8ef62f61d6ffcb91ab1c7be85a7d3f671fe7f3e73eca0a385586adfa07a150d` |
| Data dictionary | `f0b57c4d566770805fe3a3a248d8f92bc70a7646e8c7f93ff1b88fdea64d10fa` |

Endpoint checks, shown to two decimals:

| Age | November 2022 | August 2026 |
| --- | ---: | ---: |
| Ages 22-25 | 100.00 | 87.23 |
| Ages 26-30 | 100.00 | 96.19 |
| Ages 31-34 | 100.00 | 101.60 |
| Ages 35-40 | 100.00 | 108.60 |
| Ages 41-49 | 100.00 | 109.40 |
| Ages 50+ | 100.00 | 104.80 |

The existing `research/verified-2026-10/work.json` has the same September source hashes and its 300 young-worker values match the freshly fetched source. Existing `src/work-series.json` matches those values rounded to two decimals. The new file changes the comparison dimension to age within Q5; it does not alter those existing files.

Interpretation constraints:

- The denominator is each age group's own Q5 baseline employment. These indices show relative trajectories, not absolute counts or unemployment rates.
- Q5 ranks occupations by exposure, with occupations equally weighted when constructing quintiles. It is not the highest-exposure 20% of workers.
- This is a selected balanced panel of ADP firms with occupation-matched workers. Firm entry and exit are excluded. It is not a representative national employment estimate.
- Age groups are not a fixed aging cohort. The comparison does not isolate AI from other labor-market changes or occupational composition.
- Do not pool older ages or exposure quintiles by averaging indices without baseline employment weights.
- Do not relabel the paper's approximately 19% June 2026 young-worker high/low-exposure shortfall as the gap between these age series. That headline uses a different comparison and vintage.

## Anthropic Provenance

The [March 5, 2026 article](https://www.anthropic.com/research/labor-market-impacts) explicitly states 94% theoretical and 33% observed for Computer & Math in its Figure 2 discussion. The linked [report PDF, page 7](https://cdn.sanity.io/files/4zrzovbb/website/2b5bbaf2c1eb81dbf6e6fb813c1a24e35a64d376.pdf) independently contains the same text. Both numbers are transcribed from published prose, not estimated from the radar graphic. `exposure.dataURL` points to that numerical source.

The [official dataset directory](https://huggingface.co/datasets/Anthropic/EconomicIndex/tree/4e5f69fab13a9c3f7d0dcc31a6f893a9818738f6/labor_market_impacts) was inspected at revision `4e5f69fab13a9c3f7d0dcc31a6f893a9818738f6`:

| Download | Rows | Published columns | SHA-256 |
| --- | ---: | --- | --- |
| [job_exposure.csv](https://huggingface.co/datasets/Anthropic/EconomicIndex/resolve/4e5f69fab13a9c3f7d0dcc31a6f893a9818738f6/labor_market_impacts/job_exposure.csv) | 756 | `occ_code`, `title`, `observed_exposure` | `4f0a3adf5feeb2ec5f5d02ab18cc5e851a2a4b8470bde84c0c9335017be12d68` |
| [task_penetration.csv](https://huggingface.co/datasets/Anthropic/EconomicIndex/resolve/4e5f69fab13a9c3f7d0dcc31a6f893a9818738f6/labor_market_impacts/task_penetration.csv) | 17,998 | `task`, `penetration` | `85bee872db1d55d3e9a7f4e89da5ae4a5d59aa8ec875d728fbf4b7d820984616` |

Neither file includes a theoretical score column or a ready-made table of paired Figure 2 category values. The report's category aggregation requires task-time weights followed by employment weights. A simple occupation mean or a join to differently weighted theoretical scores would not verify the published comparison. Office & Admin's theoretical 90% alone is insufficient for a pair, so it is omitted. No observed-only detailed occupation values are mixed with the broad category.

The [methodological appendix](https://cdn.sanity.io/files/4zrzovbb/website/e5f77fc0e77c0185110b5e4b909602791ae76eae.pdf), pages 2-4 and 9-11, clarifies:

- Scores average across all tasks within each occupation using estimated time fractions. The article/PDF then averages occupations using employment weights for the broad category.
- Observed 33% has the category's full task base as its denominator; it is not 33% of the 94% theoretical score.
- The observed measure imposes a usage threshold, gates on theoretical feasibility, and weights automated versus augmentative use. It is not a pure fraction of tasks or work hours actually automated.
- Theoretical scores originate in the Eloundou et al. capability rubric. Observed usage is drawn from Claude samples. Neither measures jobs displaced or all economy-wide AI use.
- The March date is publication, not a single-month data observation. Appendix footnote 3 refers to the previous two Economic Index reports for the observed-usage gate; the main article's previous-four-reports discussion pertains to Figure 1.
- No confidence interval is provided for this rounded category pair. The single pair supports a narrow comparison, not a cross-occupation ranking.

## Verification Checklist

- [x] Read the existing research work file and work series.
- [x] Follow primary-source links; retrieve and parse the original Stanford ZIP, dictionary, and CSV.
- [x] Match the rolling Stanford download to the pinned release by SHA-256.
- [x] Verify the existing young-worker data against that release.
- [x] Read Anthropic's published pair in both article and linked PDF.
- [x] Inspect both official labor-market CSV schemas and record pinned URLs and hashes.
- [x] Keep the six Stanford age groups separate; include only the one verified Anthropic pair.
- [x] No digitization, interpolation, imputation, causal estimates, or invented category values.
- [x] `node --check src/comparison-data.js` passed.
- [x] Parsed the written object and compared all 360 Stanford values with a fresh official ZIP download: exact numeric equality, matching hashes and vintage, 60 consecutive months, six baselines at 100, and no missing values.
- [x] Verified both series-to-column mappings, required metadata fields, ASCII-only JavaScript, and the single stored Anthropic 94/33 pair.
- [ ] Human review (not performed).

Only the two authorized handoff files are created. No UI edits, browser UI, build, git operations, commits, or deployment are part of this task.
