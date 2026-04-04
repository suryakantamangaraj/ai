# AI Verse Tools Replica

This project is organized in a conventional npm-style layout with the frontend split into modular browser source files:

- `package.json`, `README.md`, and `.gitignore` stay at the root
- `src/` contains server-side source code
- `public/` contains everything the browser can request directly
- `config/` contains project configuration and helper scripts
- `test/` is reserved for tests

## Run locally

1. Update [`.env.example`](/Users/suryaraj/Desktop/git/aiverse.tools/config/.env.example) if needed and place local values in `config/.env`.
2. Start the app:

```bash
npm start
```

By default the site runs at `http://127.0.0.1:3000`.

## Structure

- [`src/server.js`](/Users/suryaraj/Desktop/git/aiverse.tools/src/server.js): Node.js static server with SPA fallback
- [`public/index.html`](/Users/suryaraj/Desktop/git/aiverse.tools/public/index.html): app shell
- [`public/app`](/Users/suryaraj/Desktop/git/aiverse.tools/public/app): active modular browser application tree
- [`public/app/routes`](/Users/suryaraj/Desktop/git/aiverse.tools/public/app/routes): route-specific HTML documents
- [`public/app/styles`](/Users/suryaraj/Desktop/git/aiverse.tools/public/app/styles): centralized route CSS
- [`public/app/scripts`](/Users/suryaraj/Desktop/git/aiverse.tools/public/app/scripts): centralized route scripts
- [`public/app/runtime`](/Users/suryaraj/Desktop/git/aiverse.tools/public/app/runtime): browser runtime helpers
- [`config/validate_frontend_structure.py`](/Users/suryaraj/Desktop/git/aiverse.tools/config/validate_frontend_structure.py): structure validator for the modular frontend tree
- [`test`](/Users/suryaraj/Desktop/git/aiverse.tools/test): test directory placeholder

## Notes

- The landing app serves from `public/app/landing/`.
- The exact `/tools`, `/prompts`, and `/chat` experiences are driven by modular files under `public/app/routes/`.
- `config/validate_frontend_structure.py` validates the modular frontend structure.
