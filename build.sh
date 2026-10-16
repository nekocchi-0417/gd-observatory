#!/bin/sh
# Builds the whole site into one self-contained HTML file.
#   sh build.sh            -> docs/index.html  (full page; GitHub Pages serves the docs/ folder)
#   sh build.sh artifact   -> dist/artifact.html (no <html>/<head>/<body> wrapper, for a Claude artifact)
set -e
cd "$(dirname "$0")"

css() { cat src/style.css src/components.css src/pages.css src/review.css src/comparison.css src/measurement.css; }
js()  { cat src/charts.js src/data1.js src/data2.js src/data3.js src/signals.js src/copy.js
        printf '\nconst SELECTED_EVIDENCE = '
        cat src/priority.json
        printf ';\n'
        printf '\nconst TOPIC_CHARTS = '
        cat src/selected-topics.json
        printf ';\n'
        printf '\nconst WORK_SERIES = '
        cat src/work-series.json
        printf ';\n'
        printf '\nconst EVIDENCE_LIBRARY14 = '
        cat src/evidence-library.json
        printf ';\n'
        cat src/app.js src/components.js src/views.js src/review.js src/capability.js src/adoption.js src/topics.js src/comparison-data.js src/robotaxi-data.js src/owid.js src/measurement-data.js src/library-url.js src/library.js src/measurement.js src/comparison.js
        echo "render((location.hash||'#home').slice(1));initCaveats5();"; }

if [ "$1" = "artifact" ]; then
  mkdir -p dist; OUT=dist/artifact.html
  { cat src/shell_head.html; echo "<style>"; css; echo "</style>"; cat src/shell_body.html
    echo "<script>"; js; echo "</script>"; } > "$OUT"
else
  mkdir -p docs; OUT=docs/index.html
  { echo '<!doctype html>'
    echo '<html lang="en-GB">'
    echo '<head>'
    echo '<meta charset="utf-8">'
    echo '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
    echo '<meta name="description" content="A dashboard of research on gradual disempowerment: selected indicators, emerging findings and measurement gaps.">'
    cat src/shell_head.html
    echo "<style>"
    echo ':root{color-scheme:light}body{margin:0}img{max-width:100%}[hidden]{display:none!important}'
    css
    echo "</style>"
    echo '</head>'
    echo '<body>'
    cat src/shell_body.html
    echo "<script>"; js; echo "</script>"
    echo '</body>'
    echo '</html>'; } > "$OUT"
  touch docs/.nojekyll
fi
echo "Built $OUT ($(wc -c < "$OUT" | tr -d ' ') bytes)"
