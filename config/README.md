# Website engagement analytics

The public build includes the shared analytics integration on Home, Paper explorer,
topic reviews, topic libraries, the topic directory and Selected evidence.
**Tracking is off while `analytics.json` has an empty `endpoint`.** No account is
created by the build.

To activate:

1. Create an owner-controlled account at https://www.goatcounter.com/signup.
2. Set `endpoint` to `https://YOUR-ACCOUNT.goatcounter.com/count` in
   `config/analytics.json`. This public endpoint is not an API key; never put a
   password or private token in the repository.
3. Keep individual-pageview collection disabled in GoatCounter account settings.
4. Run `npm run build` and `npm run verify:analytics`, then publish the reviewed
   change through the usual GitHub Pages process.
5. Open the live site, scroll through the story and follow the explorer link.
   Check the owner's GoatCounter dashboard for the page and event counts.
   Local previews intentionally send nothing, even when the account is set.

An unset endpoint, preview build, wrong origin, Do Not Track, or Global Privacy
Control prevents even loading the external analytics script. The dashboard remains
usable when the provider is unavailable or blocked. To turn tracking off again,
clear `endpoint`, rebuild and publish.

## What is measured

- Canonical page views, including the main site's hash routes and the nine topic
  IDs. Redirect routes count at their destination. In-page anchors are excluded.
- Scroll depth: 25%, 50%, 75%, and approximately the page bottom (98% of the
  available scroll distance, allowing for rounding).
- Each visible homepage story step, whether animated or reduced-motion/static.
- Thirty seconds with the page visible. This is a coarse engagement signal;
  it does not prove reading or active attention.
- Opening the explorer, inspecting a paper, changing a graph filter, opening an
  evidence-map cell, following a source, and clicking a contribution link.

Events are deduplicated in memory per route visit. Refreshing or returning to a
route begins another visit; these are event counts, not a visitor-level funnel.
The provider also reports aggregate browser/device information. It processes IP
addresses to estimate visits and location; see its current privacy documentation.

Only fixed event names, canonical routes and allowlisted topic IDs are sent.
No search terms, arbitrary URL queries/fragments, referrers, source URLs, paper
IDs/titles, review text, imported workspaces, cookies or client-side visitor IDs
are collected by this integration. Existing local theme/workspace storage is
independent of analytics. The privacy disclosure appears at the bottom of each
page and reflects the build's enabled/disabled state.

Counts start only after activation and deployment. Blockers and privacy choices
will make these an incomplete measure of actual use. The included checks mock the
provider and send no analytics traffic; they do not establish live ingestion.

Provider documentation checked 29 October 2026:
- https://www.goatcounter.com/help/js
- https://www.goatcounter.com/help/events
- https://www.goatcounter.com/help/privacy
