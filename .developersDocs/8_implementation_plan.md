# Database Core Schema Design

This plan outlines the design of the core database schema for AIverse. We will update the Prisma schema file (`server/prisma/schema.prisma`) to include all the requested models and their relations. 

We are using **SQLite**, which influences some design decisions (e.g., using `String` instead of Enums, and explicit models for many-to-many relationship patterns or list of strings since native scalar arrays are not supported in SQLite).

## User Review Required

> [!IMPORTANT]
> **Database Limitations Review:** 
> Our Prisma configuration currently uses `sqlite`. Unlike PostgreSQL, `sqlite` does not support array primitives (like `String[]`) or native enums. 
> - For tags/features, I will implement a `Tag` and `Feature` model with many-to-many relationships (or comma-separated strings if it's simpler for minor fields like features).
> - For enums (like `role`, `status`), I will use `String` fields with application-level validation.
> - Using SQLite is totally fine for a fast frontend-first environment, but please confirm if you plan to stick with SQLite or want me to migrate the Prisma config to PostgreSQL before writing out the schema.

## Proposed Changes

---

### Prisma Schema (`server/prisma/schema.prisma`)

We will add the following models and indexes to the schema:

1. **User** (Existing: add relations for prompts, tools, reviews, etc.)
2. **Tools & Reviews**
   - `Tool` 
     - Fields: `id`, `slug` (unique), `name`, `description`, `longDescription`, `icon`, `category`, `platform`, `price`, `authorId`, `stars`, `forks`, `website`, `github`, `language`, `createdAt`.
     - Indexes: `@@index([slug])`, `@@index([category])`, `@@index([stars])`, `@@index([createdAt])`, `@@index([authorId])`
   - `ToolReview`
     - Fields: `id`, `toolId`, `userId`, `rating`, `content`, `createdAt`
   - `ToolReviewVote`
     - Fields: `id`, `reviewId`, `userId`, `isHelpful`, `createdAt`
   - `ToolSubmission` (Forms submitted by users to add new tools)
     - Fields: `id`, `userId`, `status` (PENDING, APPROVED, REJECTED), `toolData` (JSON string), `createdAt`
   - `ToolRequest` (Users asking for tools)
     - Fields: `id`, `userId`, `title`, `description`, `status`, `createdAt`
3. **Prompts**
   - `Prompt`
     - Fields: `id`, `slug` (unique), `title`, `description`, `content`, `category`, `type` (text, image, code), `authorId`, `likes`, `createdAt`
     - Indexes: `@@index([slug])`, `@@index([category])`, `@@index([likes])`, `@@index([createdAt])`, `@@index([authorId])`
   - `PromptVersion` (History/Versioning)
     - Fields: `id`, `promptId`, `content`, `versionNumber`, `createdAt`
   - `PromptLike` (User interactions)
     - Fields: `id`, `promptId`, `userId`, `createdAt`
   - `PromptSave` (Bookmarked prompts)
     - Fields: `id`, `promptId`, `userId`, `createdAt`
   - `PromptRun` (Logs of when a user runs a prompt)
     - Fields: `id`, `promptId`, `userId`, `inputVariables` (optional), `output`, `createdAt`
   - `PromptReport` (Flagging problematic prompts)
     - Fields: `id`, `promptId`, `userId`, `reason`, `createdAt`
4. **Collections / Directories**
   - `Collection` (Lists of tools/prompts)
     - Fields: `id`, `slug` (unique), `userId`, `name`, `description`, `isPublic`, `createdAt`
   - `CollectionItem` 
     - Fields: `id`, `collectionId`, `itemType` (TOOL, PROMPT), `itemId`, `addedAt`
5. **Learning & Curriculum**
   - `LearningTopic` (Guides/Courses)
     - Fields: `id`, `slug` (unique), `title`, `content`, `parentId` (self-relation), `position`, `createdAt`
   - `SavedLearningItem` (User progress)
     - Fields: `id`, `userId`, `topicId`, `savedAt`
6. **Chat & Subscription**
   - `Subscription` (Stripe or generic)
     - Fields: `id`, `userId`, `planType`, `status`, `currentPeriodEnd`, `createdAt`
   - `ChatConversation` (Context container)
     - Fields: `id`, `userId`, `title`, `createdAt`
   - `ChatMessage`
     - Fields: `id`, `conversationId`, `role` (user, assistant), `content`, `createdAt`
7. **Social & Admin**
   - `Notification`
     - Fields: `id`, `userId`, `type`, `content`, `link`, `isRead`, `createdAt`
   - `ModerationFlag` (General flagging system)
     - Fields: `id`, `entityType` (TOOL, PROMPT, USER, REVIEW), `entityId`, `flaggedByUserId`, `reason`, `status`, `createdAt`

### Shared Meta Models (Crucial for SQLite)
- `Tag` (id, slug, name) with implicit many-to-many models to Tool and Prompt.

---

### Migration Workflow

1. Apply `npm run format` then `npx prisma format` to keep the syntax clear.
2. Generate the Prisma Client using `npx prisma generate` to validate the schema syntax.
3. Apply the migration using `npx prisma migrate dev --name core_schema_design`.

---

### Seed Data Strategy

We will gradually transition the frontend from importing static arrays (`src/data/tools.ts` and `src/data/prompts.ts`) to using database-driven API routes.
1. **Creation of `server/prisma/seed.ts`**: The script will import the existing `tools.ts` and `prompts.ts` data and map them into the new Prisma models.
2. Users/Authors mapped in the static data (e.g., `author: "techmaster42"`) will either be created as dummy users or dynamically mapped.
3. Run the seed script initially. The frontend can initially remain unchanged. 
4. In future tasks, we'll progressively rewrite frontend data fetching hooks/components to consume our upcoming API endpoints querying this new schema.

## Open Questions

- Do you agree with the SQLite implementation strategy (using implicit ManyToMany relations and `String` for enums)?
- Would you like any extra fields inside the `User` model, like `role` (Admin/User)?

## Verification Plan

### Automated Tests
- I will run `npx prisma generate` to ensure the Prisma schema is completely valid.
- Run `npx prisma migrate dev --name init_schema` to verify the DB builds successfully.
- I will execute the seed file to ensure that our static datasets successfully populate the `dev.db`.
