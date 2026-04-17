# Prompts Gallery Backend Migration

This plan details the steps to migrate the static prompt data from the frontend to the backend database and establish a robust API for the Prompts Gallery.

## User Review Required

> [!IMPORTANT]
> The current prompt data resides in `src/data/prompts.ts`. I will extract the `prompts` array into a JSON file (`server/prisma/prompts.json`) for seeding the database. The frontend file will be kept for now or modified to only export categories, as removing it immediately might break the frontend before it's hooked up to the new API. Is it okay to leave the frontend integration for a later step and focus solely on the backend right now?

## Proposed Changes

### Database & Schema Updates

#### [MODIFY] [schema.prisma](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/prisma/schema.prisma)
- Add `visibilityStatus` (String, default: "PUBLIC") to the `Prompt` model to support PUBLIC, PRIVATE, and DRAFT states.
- Ensure the `Prompt` model supports slugs and relations to `PromptVersion`, `Tag`, and `User` (author) which are already present.

#### [NEW] [prompts.json](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/prisma/prompts.json)
- Create a JSON file containing the static prompts extracted from `src/data/prompts.ts` to be used for database seeding.

#### [MODIFY] [seed.ts](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/prisma/seed.ts)
- Update the seed script to read `prompts.json` and bulk insert prompts into the database.
- Handle tag creation and linking during the prompt seeding process.
- Assign all seeded prompts to the default admin user.

### API Implementation

#### [NEW] [prompt.controller.ts](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/src/controllers/prompt.controller.ts)
- `getPrompts`: Handles listing with pagination, filtering (`category`, `type`, `tags`), full-text search (`q` on title/description/content), and sorting (`newest`, `popular`, `alphabetical`). It will only return `PUBLIC` prompts.
- `getPromptBySlug`: Retrieves a single prompt by its slug, including its author, tags, and versions.
- `getRelatedPrompts`: Fetches related prompts based on the same category or overlapping tags.

#### [NEW] [prompt.routes.ts](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/src/routes/prompt.routes.ts)
- Map routes to the controller methods:
  - `GET /` -> `getPrompts`
  - `GET /:slug` -> `getPromptBySlug`
  - `GET /:id/related` -> `getRelatedPrompts`

#### [MODIFY] [index.ts](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/src/index.ts)
- Register the new `/api/prompts` route namespace.

## Verification Plan

### Automated Tests
- Run `npx prisma db push` to apply schema changes.
- Run `npm run seed` to populate the database with the static prompt data.
- Test the new endpoints using HTTP requests to verify filtering, search, sorting, and relations are working properly.

### Manual Verification
- Verify that no static prompt data is lost during the migration.
- Review the `prompts` table in the database to confirm tags, authors, and initial versions are correctly linked.
