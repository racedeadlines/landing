# Race Poke website

The dependency-free marketing website for the Race Poke iOS and Android app.
Vercel serves the HTML, CSS, and JavaScript directly.

## Local development

```sh
python3 -m http.server 3001
```

Open `http://localhost:3001`. The App Store buttons are intentionally marked
“Coming soon”; replace their spans with store links in `index.html` when the
listings are live.

## Vercel

Import this repository with Framework Preset set to Other and no build command,
then point `www.racepoke.com` at the production deployment.
