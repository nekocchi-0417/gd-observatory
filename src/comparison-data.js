// Primary-source data for the comparison views; AI-assisted checks, not human sign-off.
// URLs are provenance only; this file performs no network requests.
const COMPARISON_DATA = {
  "music": {
    "sourceURL": "https://newsroom-deezer.com/2026/04/ai-generated-tracks-represent-44-of-new-uploaded-music/",
    "checked": "2026-10-15",
    "uploads": [
      {"date":"2025-01-24","value":10,"qualifier":"about","url":"https://newsroom-deezer.com/2025/01/deezer-deploys-cutting-edge-ai-detection-tool-for-music-streaming/"},
      {"date":"2025-04-16","value":18,"qualifier":"over","url":"https://newsroom-deezer.com/2025/04/deezer-reveals-18-of-all-new-music-uploaded-to-streaming-is-fully-ai-generated/"},
      {"date":"2025-09-11","value":28,"qualifier":"over","url":"https://newsroom-deezer.com/2025/09/28-fully-ai-generated-music/"},
      {"date":"2026-01-29","value":39,"qualifier":"about","url":"https://newsroom-deezer.com/2026/01/deezer-confirms-demonetization-of-ai-music/"},
      {"date":"2026-04-20","value":44,"qualifier":"about","url":"https://newsroom-deezer.com/2026/04/ai-generated-tracks-represent-44-of-new-uploaded-music/"}
    ],
    "streams": {"reported":"2026-04-20","low":1,"high":3},
    "notes": "Release dates, not exact observation windows. Daily-upload share of detected fully AI-generated tracks. Body-text approximations take precedence over inconsistent greater-than wording in notes. Detector coverage is not documented as constant. Lines connect reports, not intermediate observations; no fit or forecast. Later July/October 2026 peak-day shares are excluded. Stream-share sampling window and fraud adjustment are unspecified."
  },
  "work": {
    "title": "Employment by age in the most AI-exposed occupations (Q5)",
    "publisher": "Stanford Digital Economy Lab and ADP Research",
    "sourceURL": "https://digitaleconomy.stanford.edu/project/indicators/canaries-dashboard/",
    "studyURL": "https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/",
    "dataURL": "https://storage.googleapis.com/aviary-del-public/release_memos/2026-09/downloads/canaries_age_by_exposure_results.zip",
    "manifestURL": "https://storage.googleapis.com/aviary-del-public/release_memos/2026-09/manifest.json",
    "dataMember": "canaries_age_by_exposure.csv",
    "dictionaryMember": "canaries_age_by_exposure_data_dictionary.md",
    "vintage": "2026-09-17",
    "publishedAt": "2026-09-23T03:37:55Z",
    "checkedOn": "2026-10-15",
    "observationStart": "2021-09-01",
    "observationEnd": "2026-08-01",
    "frequency": "monthly",
    "unit": "Employment index; November 2022 = 100",
    "normalizationDate": "2022-11-01",
    "denominator": "Each age group's own November 2022 employment in exposure quintile 5.",
    "population": "Workers matched to occupation codes in the dashboard's five-year balanced sample of firms using ADP payroll services.",
    "exposureGroup": "Quintile 5 (most exposed)",
    "exposureDefinition": "Highest occupational AI-exposure quintile under Eloundou et al. Occupations receive equal weight when forming quintiles; Q5 does not mean 20% of workers.",
    "columns": [
      "date",
      "ages_22_25",
      "ages_26_30",
      "ages_31_34",
      "ages_35_40",
      "ages_41_49",
      "ages_50_plus"
    ],
    "series": [
      {
        "key": "ages_22_25",
        "label": "Ages 22-25",
        "columnIndex": 1,
        "sourceColumn": "Early Career 1 (22-25)"
      },
      {
        "key": "ages_26_30",
        "label": "Ages 26-30",
        "columnIndex": 2,
        "sourceColumn": "Early Career 2 (26-30)"
      },
      {
        "key": "ages_31_34",
        "label": "Ages 31-34",
        "columnIndex": 3,
        "sourceColumn": "Developing (31-34)"
      },
      {
        "key": "ages_35_40",
        "label": "Ages 35-40",
        "columnIndex": 4,
        "sourceColumn": "Mid-Career 1 (35-40)"
      },
      {
        "key": "ages_41_49",
        "label": "Ages 41-49",
        "columnIndex": 5,
        "sourceColumn": "Mid-Career 2 (41-49)"
      },
      {
        "key": "ages_50_plus",
        "label": "Ages 50+",
        "columnIndex": 6,
        "sourceColumn": "Senior (50+)"
      }
    ],
    "data": [
      ["2021-09-01",87.81,90.2,89.42,91.41,91.53999999999999,91.64999999999999],
      ["2021-10-01",89.92,91.61,90.74,92.53,92.47999999999999,92.72],
      ["2021-11-01",90.85,92.4,91.84,93.17999999999999,93.14,93.55],
      ["2021-12-01",91.7,93.26,92.47,93.69,93.46,93.85],
      ["2022-01-01",92.43,94.08999999999999,93.64,94.73,94.69,94.24],
      ["2022-02-01",92.73,94.67999999999999,94.02000000000001,94.99,95.19999999999999,94.74000000000001],
      ["2022-03-01",92.36,94.86,94.53,95.41,95.66,95.3],
      ["2022-04-01",93.31,95.84,95.36,95.98,96.37,95.83],
      ["2022-05-01",93.24,96.04,95.49,96.3,96.39999999999999,96],
      ["2022-06-01",95.67,96.66,96.28,96.72,97.05,96.57],
      ["2022-07-01",97.82,97.94,97.32,97.63,98.04,97.50999999999999],
      ["2022-08-01",97.75,97.85000000000001,97.5,97.89,98.3,97.91],
      ["2022-09-01",99.18,98.83,98.7,98.94,99.16,98.7],
      ["2022-10-01",99.66000000000001,99.6,99.31,99.49,99.55000000000001,99.33999999999999],
      ["2022-11-01",100,100,100,100,100,100],
      ["2022-12-01",99.8,100.1,100.4,100.2,99.99,99.98],
      ["2023-01-01",99.18,100.29999999999998,100.89999999999999,100.89999999999999,100.8,99.97],
      ["2023-02-01",99.28,100.2,101,101.2,101,100.2],
      ["2023-03-01",98.83999999999999,100.4,101.4,101.6,101.49999999999999,100.49999999999999],
      ["2023-04-01",98.2,100.6,101.8,101.8,101.8,100.89999999999999],
      ["2023-05-01",97.54,100.6,102,102,102.2,101.4],
      ["2023-06-01",99.48,100.8,102.4,102.4,102.49999999999999,101.6],
      ["2023-07-01",98.88,100.8,102.4,102.3,102.60000000000001,101.6],
      ["2023-08-01",98.44000000000001,100.4,102.69999999999999,102.60000000000001,102.69999999999999,102],
      ["2023-09-01",99.38,101.2,103.4,103.1,103.4,102.4],
      ["2023-10-01",99.05000000000001,101.29999999999998,103.60000000000001,103.4,103.60000000000001,102.8],
      ["2023-11-01",98.92999999999999,101.8,104.3,104.1,104.1,103.4],
      ["2023-12-01",97.47,101.1,103.89999999999999,103.49999999999999,103.60000000000001,102.89999999999999],
      ["2024-01-01",97.31,101.6,104.60000000000001,104.69999999999999,104.5,102.8],
      ["2024-02-01",97.11999999999999,101.49999999999999,104.60000000000001,104.80000000000001,104.60000000000001,103],
      ["2024-03-01",96.25,101.6,104.69999999999999,105.1,104.89999999999999,103.2],
      ["2024-04-01",95.38,101.2,104.5,105.2,105.1,103.3],
      ["2024-05-01",95.64,101.6,105,105.60000000000001,105.4,103.69999999999999],
      ["2024-06-01",95.99,101.2,104.69999999999999,105.5,105.5,103.69999999999999],
      ["2024-07-01",95.12,100.69999999999999,104.2,105.3,105.3,103.69999999999999],
      ["2024-08-01",95.64,101.29999999999998,105.1,106.2,106.1,104.4],
      ["2024-09-01",95.28999999999999,100.89999999999999,104.69999999999999,106,106,104.3],
      ["2024-10-01",95.34,101.1,105.1,106.4,106.4,104.69999999999999],
      ["2024-11-01",95.54,101.8,105.60000000000001,107.1,107,105.4],
      ["2024-12-01",94.28999999999999,101.2,105.2,106.89999999999999,106.80000000000001,105],
      ["2025-01-01",93.83,101.49999999999999,105.3,107.3,107.3,104.5],
      ["2025-02-01",93.17,100.8,105,107.3,107.2,104.5],
      ["2025-03-01",92.21000000000001,100.2,104.60000000000001,107.2,107.1,104.4],
      ["2025-04-01",91.13,99.88,104.3,107.2,107.2,104.4],
      ["2025-05-01",91.32000000000001,100.1,104.60000000000001,107.80000000000001,107.5,104.69999999999999],
      ["2025-06-01",91.43,99.42999999999999,103.89999999999999,107.4,107.4,104.4],
      ["2025-07-01",91.18,99.05000000000001,103.60000000000001,107.60000000000001,107.5,104.4],
      ["2025-08-01",91.23,99.27,103.8,108.1,108,104.80000000000001],
      ["2025-09-01",90.82000000000001,98.97,103.49999999999999,108.3,108.2,105.2],
      ["2025-10-01",91.73,99.72,104,108.80000000000001,108.80000000000001,105.80000000000001],
      ["2025-11-01",91.47999999999999,99.92,104,109.2,109.1,106],
      ["2025-12-01",90.57,99.38,103.60000000000001,109.1,108.80000000000001,105.60000000000001],
      ["2026-01-01",90.60000000000001,99.53999999999999,103.89999999999999,109.60000000000001,109.4,105],
      ["2026-02-01",89.83,98.97,103.4,109.5,109.4,105],
      ["2026-03-01",88.77000000000001,98.28,103,109.1,109.2,104.89999999999999],
      ["2026-04-01",87.85,97.92999999999999,102.49999999999999,109.1,109.3,105],
      ["2026-05-01",87.56,97.76,102.2,109.2,109.5,104.89999999999999],
      ["2026-06-01",88.03,97.18,102,108.89999999999999,109.4,104.89999999999999],
      ["2026-07-01",88.49000000000001,97.08,102.1,109.2,109.60000000000001,105],
      ["2026-08-01",87.22999999999999,96.19,101.6,108.60000000000001,109.4,104.80000000000001]
    ],
    "precision": "CSV numeric values preserved, including source floating-point tails. Round only for display.",
    "suggestedDisplayDecimals": 2,
    "notes": [
      "Select Q5 rows from the official underlying-series CSV; retain all six age columns and chronological monthly observations.",
      "Each line has its own baseline of 100. Index levels compare relative trajectories, not absolute employment counts.",
      "The original study links to the dashboard; the dashboard's live Data link and pinned September ZIP had identical SHA-256 hashes on the check date."
    ],
    "caveats": [
      "Descriptive employment trends by occupational exposure; these are not causal estimates of jobs lost to AI.",
      "The balanced ADP firm sample is not representative of the entire US labor market or all ADP clients; firm entry and exit are excluded and the five-year window rolls forward.",
      "Age groups are separate groups, not a fixed cohort followed as it ages. Differences can reflect occupational composition and other labor-market factors.",
      "Do not average older-age indices or Q4/Q5 indices to invent pooled employment series without the relevant baseline headcount weights.",
      "The paper's approximately 19% June 2026 shortfall compares pooled high- versus low-exposure young workers. It is a different comparison and vintage, not the gap between these age lines."
    ],
    "verification": {
      "status": "verified-original-csv",
      "humanReviewed": false,
      "extraction": "Filter exposure_quintile == 'Quintile 5 (most exposed)'; parse source numeric fields without scaling, rebasing, smoothing or interpolation.",
      "months": 60,
      "ageSeries": 6,
      "numericValues": 360,
      "missingValues": 0,
      "baselineAll100": true,
      "digitized": false,
      "zipSHA256": "a99c3912381eeb6b1f7e74b6e86dd1e2a760676adc3848ba901254e76086a397",
      "csvSHA256": "e8ef62f61d6ffcb91ab1c7be85a7d3f671fe7f3e73eca0a385586adfa07a150d",
      "dictionarySHA256": "f0b57c4d566770805fe3a3a248d8f92bc70a7646e8c7f93ff1b88fdea64d10fa"
    },
    "confidenceIntervals": null,
    "confidenceIntervalNote": "No confidence intervals accompany these descriptive index series."
  },
  "exposure": {
    "title": "Theoretical and observed AI exposure: Computer & Math",
    "publisher": "Anthropic",
    "authors": [
      "Maxim Massenkoff",
      "Peter McCrory"
    ],
    "sourceURL": "https://www.anthropic.com/research/labor-market-impacts",
    "dataURL": "https://cdn.sanity.io/files/4zrzovbb/website/2b5bbaf2c1eb81dbf6e6fb813c1a24e35a64d376.pdf",
    "dataLocator": "Report page 7, paragraphs discussing Figure 2; the article's Figure 2 discussion states the same pair.",
    "appendixURL": "https://cdn.sanity.io/files/4zrzovbb/website/e5f77fc0e77c0185110b5e4b909602791ae76eae.pdf",
    "datasetURL": "https://huggingface.co/datasets/Anthropic/EconomicIndex/tree/4e5f69fab13a9c3f7d0dcc31a6f893a9818738f6/labor_market_impacts",
    "vintage": "2026-03-05",
    "vintageNote": "Report publication date. Observed exposure uses pooled Economic Index samples, not a single March 2026 observation; theoretical ratings derive from Eloundou et al. (2023).",
    "checkedOn": "2026-10-15",
    "unit": "Percent on the report's weighted task-exposure scale",
    "denominator": "All tasks within each occupation, weighted by estimated time spent; occupation scores are then averaged within the broad category using employment weights. Observed 33% is not 33% of the theoretical 94%.",
    "scope": "One broad occupational category, not an individual occupation or an economy-wide average.",
    "columns": [
      "occupation_category",
      "theoretical_percent",
      "observed_percent"
    ],
    "series": [
      {
        "key": "theoretical_percent",
        "label": "Theoretical capability",
        "columnIndex": 1
      },
      {
        "key": "observed_percent",
        "label": "Observed exposure (Claude)",
        "columnIndex": 2
      }
    ],
    "data": [
      [
        "Computer & Math",
        94,
        33
      ]
    ],
    "measures": {
      "theoretical": "Time- and employment-weighted Eloundou beta capability score; task ratings are 1, 0.5 or 0, based on whether LLMs alone or with tools could at least double task speed.",
      "observed": "Time- and employment-weighted task coverage incorporating sufficient Claude work usage and automation. The appendix gates on theoretical feasibility (beta > 0), weights fully automated usage fully, and gives augmentative usage partial weight."
    },
    "precision": "Exact transcription of the authors' published whole-percent values; the underlying estimates are rounded, not known to arbitrary precision.",
    "approximate": true,
    "suggestedDisplayDecimals": 0,
    "notes": [
      "The numerical source is the article/PDF text, not a CSV of matched category pairs.",
      "The official job_exposure.csv has 756 occupation rows and only occ_code, title, observed_exposure. task_penetration.csv has 17,998 rows and only task, penetration.",
      "Neither inspected CSV supplies theoretical category values or the complete task-time and employment weights needed to reproduce Figure 2 pairs.",
      "Only Computer & Math has both values explicitly stated in the verified article/PDF text. Office & Admin has a published theoretical 90%, but no verified paired observed value; it is excluded."
    ],
    "caveats": [
      "Observed exposure is a Claude-based measure, not all AI usage across the economy.",
      "Automation weighting means observed exposure is not a pure percentage of tasks, work hours actually automated, workers using AI, or jobs displaced.",
      "These values do not estimate unemployment, job losses, or causal employment effects.",
      "The theoretical assessment reflects an earlier capability rubric; neither value is a current live reading.",
      "Do not fill additional categories by reading the radar chart, averaging occupation rows without weights, or mixing incompatible theoretical occupation scores."
    ],
    "verification": {
      "status": "verified-published-rounded-pair",
      "humanReviewed": false,
      "pairCount": 1,
      "requestedMultiCategoryScope": "Five to eight matched category pairs were not verified from the inspected primary-source downloads; use the one published pair only.",
      "digitized": false,
      "inferredValues": false,
      "datasetRevision": "4e5f69fab13a9c3f7d0dcc31a6f893a9818738f6",
      "inspectedDownloads": [
        {
          "url": "https://huggingface.co/datasets/Anthropic/EconomicIndex/resolve/4e5f69fab13a9c3f7d0dcc31a6f893a9818738f6/labor_market_impacts/job_exposure.csv",
          "sha256": "4f0a3adf5feeb2ec5f5d02ab18cc5e851a2a4b8470bde84c0c9335017be12d68",
          "columns": [
            "occ_code",
            "title",
            "observed_exposure"
          ],
          "rows": 756
        },
        {
          "url": "https://huggingface.co/datasets/Anthropic/EconomicIndex/resolve/4e5f69fab13a9c3f7d0dcc31a6f893a9818738f6/labor_market_impacts/task_penetration.csv",
          "sha256": "85bee872db1d55d3e9a7f4e89da5ae4a5d59aa8ec875d728fbf4b7d820984616",
          "columns": [
            "task",
            "penetration"
          ],
          "rows": 17998
        }
      ]
    },
    "confidenceIntervals": null,
    "confidenceIntervalNote": "No confidence interval is published for this rounded category pair."
  }
};
