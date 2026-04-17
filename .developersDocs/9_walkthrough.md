# Database Schema Design Walkthrough

The schema has been successfully architected in `server/prisma/schema.prisma`. Here is a summary of the key elements that were set up!

## 1. Database Schema Additions
All the requested database elements have been implemented carefully with respect to **SQLite's** abilities and limitations.
- `Tool`, `ToolReview`, `ToolReviewVote`, `ToolSubmission`, `ToolRequest`
- `Prompt`, `PromptVersion`, `PromptLike`, `PromptSave`, `PromptRun`, `PromptReport`
- `Collection` and `CollectionItem`
- `LearningTopic` and `SavedLearningItem`
- `Subscription`, `ChatConversation`, `ChatMessage`
- `Notification`, `ModerationFlag`

**Unique Indexes:**
- Handled slug/id uniqueness naturally with `@unique` fields.
- Implemented performant `@@index` references on crucial lookup targets like `slug`, `category`, `likes`, `stars`, `createdAt` (for recency sorting), and `authorId`.

**SQLite Adaptations:**
- Many-to-Many associations (like `Tool` <-> `Tag`) are utilizing implicit relations via the newly created `Tag` model!
- Enums (like `role` inside the `User` table) were modeled as standard `String` elements with application-level documented `@default` restrictions, maintaining integrity without breaking SQLite format restrictions.

## 2. Gradual Seed Data Strategy

Instead of abruptly dropping the `tools.ts` and `prompts.ts` files from the frontend which would break current UI implementation, I created a **Seed strategy**:
- **Seed Script**: A custom execution flow is now defined inside `/server/prisma/seed.ts`.
- **Functionality**: The script acts as an initial bootstrap. It generates an admin user, essential categories/tags, and loads foundational components from the static data into dynamic database instances.
- **Execution Hook**: Inside `server/package.json` I assigned the `"prisma": { "seed": "ts-node-dev prisma/seed.ts" }` variable. You can now easily inject default seeds with `npx prisma db seed`.

---

## What you need to do next!

> [!WARNING]
> My automated process was unable to find `npx` inside the sandbox terminal's execution `PATH`. 
> You'll need to manually execute the Prisma bindings in your local server terminal!

Please open a terminal running inside the `server` directory and run the following commands:
```bash
npx prisma format
npx prisma generate
npx prisma migrate dev --name core_schema_design
npx prisma db seed
```

This will deploy the new schema into your SQLite file safely, output the Prisma UI types, and preload the initial tags/tools!
