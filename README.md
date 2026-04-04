# AI Verse Tools Replica

This repo is a local static replica of `aiversetools.com` with one custom extension:

- the mirrored production shell and assets from `aiversetools.com`
- a custom `/tools` page inspired by `https://wvw.dev/`
- a lightweight local Node.js server with SPA fallback support

## Run locally

1. Copy `.env.example` to `.env` if you want to override the defaults.
2. Start the local server:

```bash
npm start
```

By default the site runs at `http://127.0.0.1:3000`.

## Configuration

Supported `.env` values:

- `HOST`: interface to bind the local server to
- `PORT`: port for the local server

## Project structure

- `index.html`: mirrored app shell from the live site
- `assets/`: mirrored production CSS and JS bundles
- `~flock.js`: mirrored analytics helper expected by the live shell
- `server.js`: static file server with SPA fallback and `/tools` route handling
- `tools.html`: custom tools landing page
- `tools-assets/wvw.css`: mirrored styling base from `wvw.dev`
- `tools-assets/tools-page.js`: custom interactivity for `/tools`
- `header-tools-link.js`: injects a `Tools` navigation link into the mirrored app header

## Notes

- The exact `/tools` route serves the custom page.
- Existing mirrored routes such as `/tools/:slug` still fall through to the original AI Verse SPA.
- Missing asset files return `404 Not found`; only extensionless routes fall back to `index.html`.
