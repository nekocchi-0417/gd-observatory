# Gradual Disempowerment Observatory

A research prototype for understanding how growing reliance on AI could weaken human influence, and how we might measure that change.

**Current release: 22 October 2026.** The homepage follows three chapters: a proposed pathway and interacting harms; the challenge of measuring them across disciplines; and a connected-literature preview. The same nine nodes carry the desktop scroll narrative. Phones show the same story in ordinary reading order. The homepage opens a separate **Skills and judgement** explorer; the separately prepared topic reviews and selected-evidence pages are also preserved, with human review pending.

[View the site](https://nekocchi-0417.github.io/gd-observatory/) · [Skills explorer](https://nekocchi-0417.github.io/gd-observatory/skills.html) · [Original GD proposal](https://gradual-disempowerment.ai/)

## What the maps mean

- Homepage arrows show proposed relationships, adapted from the GD paper with an additional Skills and judgement branch. Dashed connections between harms illustrate a hypothesis, not established effects.
- The measurement scene shows illustrative, overlapping research lenses. It does not assign coverage scores.
- The final homepage network counts shared references in the draft catalog's existing topic assignments plus explicit related-area tags from the 22 October expansion. These links replace the causal arrows; they have a different meaning.
- The explorer's **Concepts** view matches editable whole phrases in reference titles and construct/domain metadata. Abstracts and full texts are not searched. Shared concepts suggest relevance, not agreement, citation relationships or causation.
- **GD areas** uses the existing topic assignments of references within the Skills collection. It is not a complete literature review of the other areas.
- Alternate versions or repeated use of the same underlying data can remain. Source counts and citation counts do not establish measurement quality. Missing citation counts stay distinct from zero. No field-wide gap verdict or coverage gradient is published.

## Skills and judgement MVP

The explorer contains **353 references**, combining the 19 October base catalog with the **22 October topic-review expansion**. The combined bibliography has 775 references after URL and bibliographic matching: 700 base records plus 75 additions from 181 detailed topic-source records. The overlay matches 106 extracted records to existing entries, including 23 alternate-URL matches using an exact title, publication year and named-author overlap with a single candidate. Original IDs are retained. The Skills subset remains 353 references, and 32 now have explicit updated review provenance. The inspector exposes each match method and reviewed-source link; these joins remain reviewable. This overlay preserves original reference IDs and keeps source-review status separate from users’ local assessments.

Users can:

- Select concepts or pairs of concepts; inspect the references shared by two GD areas.
- Filter by title/author, publication years, minimum citations, missing counts, collection, topic and review status; sort by concept matches, citations or date.
- Size paper dots by a compressed citation scale or use equal sizes. The map shows up to 24 references; all matching results appear in a paginated list.
- Inspect exact matching phrases, source links and related references.
- Edit all eight concept keyword lists, restore defaults with undo, and share a URL containing filters and the selected paper.
- Save source-review drafts and assessments, inspect an outcome-by-follow-up matrix, and export/import a workspace with validation, backup and undo.

The **OpenAlex snapshot from 22 October 2026** contains counts for **197 of the 353 references**, matched by exact DOI, including arXiv DOI. Counts change over time and may combine versions. No fuzzy title inference was used. The snapshot and optional refresh tool are `prototypes/paper-network/citations.json` and `tools/fetch-network-citations.py`.

An initial review queue selects up to 40 studies using draft human/both metadata and default concept matches. It excludes catalog-noted retractions. It is a convenience sample, not a systematic search; the default view is the whole Skills collection. Retraction notes remain visible when those records appear in the wider collection.

Reviews and drafts are stored locally under `gd-skills-pilot-v1`. They do not change the repository, synchronize across devices or get sent to a server. Export to preserve or share them. A checked assessment requires an excerpt and locator, but remains the user's assessment. Only saved checked assessments enter the matrix, and the matrix follows the current filters. Empty cells are questions to investigate, not evidence that the field has no research. One primary outcome per reference is supported.

View links do not include custom rules or reviews; use a workspace export for those. Original local pilot workspaces are retained under their original storage keys. Imports containing references outside the Skills collection are rejected without replacing the current workspace.

## Build and check

The site is plain HTML, CSS and JavaScript. Each published page embeds its scripts, styles and data; fonts are optional external assets.

```sh
npm ci --ignore-scripts
node tools/build-reorganized-preview.js             # dist/reorganized-dashboard/
node tools/check-shareable-dashboard.js             # homepage, routes, themes
node tools/verify-topic-review.js dist/reorganized-dashboard/topics # integrated topic pages
node tools/check-home-story-motion.js               # transitions, reduced motion and cleanup
node tools/check-skills-explorer.js                 # filtering, matching, persistence, review scope
node tools/verify-paper-network.js                  # matching and original pilot checks
node tools/build-reorganized-preview.js --publish   # docs/index.html and docs/skills.html
node tools/check-shareable-dashboard.js docs/index.html
node tools/check-skills-explorer.js docs/skills.html
python3 -m http.server 8766 --directory dist/reorganized-dashboard
```

GitHub Pages serves `main` → `/docs`. The `--research` mode is a separate historical preview; combining it with `--publish` is rejected. Static checks do not substitute for visual browser checks.

## Where things live

- `prototypes/reorganized/home-story.js` and `.css`: homepage copy, persistent nodes, transitions and phone layout.
- `prototypes/reorganized/shareable.js`: public routes into the updated topic and selected-evidence pages.
- `prototypes/paper-network/skills.html`, `.css`, `.js`: explorer UI and local workspace.
- `prototypes/paper-network/skills-model.js`: query, intersection, citation and graph logic.
- `prototypes/paper-network/concepts.js`: eight starting concept definitions and keyword rules.
- `tools/build-shareable-dashboard.js` and `build-skills-explorer.js`: public assembly and data scoping.
- `src/library-view-data.json`: base bibliography; `tools/network-library.js` overlays the 22 October topic-review sources by canonical URL or a unique exact-title/year/author match, without publishing their findings in the map.
- `research/`: earlier research collections, curation and review notes. Historical screenshots and ratings describe their dated versions, not this release.

To integrate an updated bibliography, regenerate `src/library-view-data.json` with the existing library tools, check stable reference IDs and schema compatibility, rerun the current builds and checks, and inspect changed matches. The public builder consumes that generated snapshot plus the explicitly dated topic-review overlay; it does not run a new literature search. Citation refresh is a separate step. Bibliographic repair does not approve a paper's findings.

## Original local prototypes

`python3 tools/build-paper-network.py` still builds the original 700-reference node explorer and `pilot.html` under `dist/paper-network/`. These prototypes and their workspace keys remain unchanged. The original pilot's matrix uses collection/search, whereas the published Skills MVP's matrix follows all current filters. The original pilot requires saving review edits before reload; the new Skills page preserves drafts automatically.

## Review next

1. Audit broad keyword matches and existing topic assignments against source abstracts/full texts, especially links spanning GD areas.
2. Review the interacting-harms narrative and dashed links as a proposed mechanism, including countervailing effects and interventions.
3. Define a defensible coverage rubric before introducing a gradient: directness of measures, population/setting, study design and repeated follow-up should remain distinct from source volume.
4. Review the integrated literature update and decide whether concept definitions and the initial queue need revision.
5. Extend multi-outcome review and shared curation if researchers use the local workflow regularly.

The scroll-continuity reference was [Anthropic's Economic Scenarios](https://www.anthropic.com/institute/econ-scenarios). Its visual assets and economic model are not included here.

## Corrections and licence

Please open an issue with the page, the claim or label, and a source link. Code is [MIT](LICENSE); page text and data compilations are [CC BY 4.0](LICENSE-CONTENT.md). Third-party source material retains its original ownership.

Zhang Yue (2026). *Gradual Disempowerment Observatory* (research prototype). Better Futures Project.
