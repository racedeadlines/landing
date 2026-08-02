# Race Poke website

The dependency-free public website for the Race Poke iOS and Android app.
Vercel serves the marketing, legal, support, account-deletion, and download
pages directly as static HTML, CSS, and JavaScript.

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
