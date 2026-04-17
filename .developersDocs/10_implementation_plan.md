# Tools Directory Backend Implementation Plan

We are going to migrate the static tools data into the Prisma database and expose a complete set of backend endpoints to handle tool listings, searching, filtering, and related data retrieval. 

## User Review Required

> [!IMPORTANT]
> - A Prisma migration will be executed to add new fields to the `Tool` model. Ensure the database has no pending unresolved migrations.
> - We will run `npm run seed` inside the `server/` folder to populate the database with the data from `src/data/tools.ts`.

## Open Questions

> [!WARNING]
> - Is the definition for "Paid tools" strictly anything where `price` is not exactly equal to `"Free"`? I will assume this logic.
> - The `screenshots` field will be stored as a `String` representing a JSON-encoded array of URLs (since SQLite doesn't natively support Prisma's `Json` array datatype smoothly). Is this acceptable?

## Proposed Changes

---

### Prisma Schema Updates

#### [MODIFY] [schema.prisma](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/prisma/schema.prisma)
Update `model Tool` to include the requested admin and media fields:
- `isFeatured Boolean @default(false)`
- `approvalStatus String @default("APPROVED")` (Values: PENDING, APPROVED, REJECTED)
- `visibilityStatus String @default("PUBLIC")` (Values: PUBLIC, PRIVATE)
- `screenshots String?` (JSON string representing a URL array)

---

### Database Seeding

#### [MODIFY] [seed.ts](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/prisma/seed.ts)
- Modify the script to import `tools` from `../../src/data/tools.ts`.
- Map over the existing tool arrays and perform `prisma.tool.upsert` to dump them into the database seamlessly. This will include transferring their tags.

---

### Controllers & Routes

#### [NEW] [tool.controller.ts](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/src/controllers/tool.controller.ts)
Implement the following endpoint controllers:
1. `getTools`: Handles pagination, search (by name/description/tags), filtering (category/author), sorting (featured/new/popular).
2. `getFeaturedTools`: Fast endpoint to get specifically featured tools.
3. `getNewTools`: Fast endpoint returning tools ordered by newest `createdAt`.
4. `getPaidTools`: Fast endpoint returning tools where `price != "Free"`.
5. `getToolBySlug`: Single tool detail by its stable URL slug.
6. `getRelatedTools`: Returns tools with the same category and overlapping tags.
7. `getAppsByAuthor`: Returns all tools created by a specific user/author.

#### [NEW] [tool.routes.ts](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/src/routes/tool.routes.ts)
Wire the controller methods to proper `express.Router()` routes (e.g., `GET /`, `GET /featured`, `GET /new`, `GET /paid`, `GET /:slug`, `GET /:slug/related`, `GET /author/:authorId`).

#### [MODIFY] [index.ts](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/src/index.ts)
Mount the newly created `toolRoutes` on `app.use('/api/tools', toolRoutes)`.

---

## Verification Plan

### Automated Tests
- Run `npx prisma db push` or `npx prisma migrate dev` and ensure successful DB sync.
- Run `npm run seed` and verify the data appears in the SQLite database by running a quick count.

### Manual Verification
- Curl or use the browser to hit `http://localhost:3000/api/tools` and check if pagination/results work.
- Validate sorting parameters `?sort=popular` and `?sort=new`.
- Verify the featured, new, and paid endpoints return the correctly filtered records.
