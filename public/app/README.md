# Frontend Source

This directory is the active browser-side application tree for the local replica.

## Layout

- `landing/pages/`
  Split landing-page route modules.
- `landing/runtime/`
  Shared landing runtime bootstrap files.
- `landing/styles/`
  Central landing stylesheets.
- `routes/`
  Route-specific HTML entry files for `/tools`, `/prompts`, `/prompts-gallery`, `/prompts-learn`, and `/chat`.
- `styles/`
  Centralized route CSS files such as `shared-theme.css`, `tools.css`, `prompts.css`, and `chat.css`.
- `scripts/`
  Centralized route JavaScript files such as `tools.js`, `prompts.js`, and `chat.js`.
- `runtime/`
  Shared browser runtime helpers such as the custom-route loader and header patch.

## Notes

- This replaces the older `readable-src` layout.
- The landing shell loads from `/app/landing/...`.
- Internal custom routes load from `/app/routes/...`.
