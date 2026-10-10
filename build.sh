#!/bin/sh
# Builds the whole site into one self-contained HTML file.
#   sh build.sh            -> docs/index.html  (full page; GitHub Pages serves the docs/ folder)
#   sh build.sh artifact   -> dist/artifact.html (no <html>/<head>/<body> wrapper, for a Claude artifact)
set -e
cd "$(dirname "$0")"

css() { cat src/style.css src/components.css src/pages.css; }
js()  { cat src/charts.js src/data1.js src/data2.js src/data3.js src/signals.js src/copy.js src/app.js src/components.js src/views.js
        echo "render((location.hash||'#map').slice(1));initCaveats5();"; }

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
    echo '<meta name="description" content="A draft observatory that maps what is measured about gradual disempowerment, link by link, and where the human side goes unmeasured.">'
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
