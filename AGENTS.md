# Race Poke website

This repository owns the public Race Poke marketing website deployed on
Vercel. It is intentionally independent from the mobile dependency graph.

## Scope

Keep this site focused only on app marketing and App Store/Google Play links.
Do not add product, account, legal, support, or authenticated web experiences.

The sibling `frontend` repository owns the Expo React Native iOS/Android app.
The sibling `api-service` repository owns API behavior.

## Development

```sh
python3 -m http.server 3001
```

Keep the website dependency-free. Do not introduce a framework or workspace
links to `frontend`, `@racepoke/core`, or `@racepoke/ui` without a concrete
need that static HTML, CSS, or JavaScript cannot meet.
