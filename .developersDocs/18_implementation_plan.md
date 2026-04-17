# Implement Prompt Interactions

This plan details the implementation of robust prompt interaction capabilities, migrating the frontend from local state to persistent backend storage, and providing metrics tracking.

## Proposed Changes

### Prisma Schema Updates
#### [MODIFY] schema.prisma
- Add `saves` (Int, default 0), `runs` (Int, default 0), and `shares` (Int, default 0) columns to the `Prompt` model for quick aggregations.

### Middlewares
#### [MODIFY] auth.ts
- Add an `optionalAuth` middleware. This will attempt to authenticate the user and attach `req.user` if a token exists, without rejecting the request if the token is missing. This is useful for returning user-specific state (like `hasLiked` or `hasSaved`) on public routes.

### Prompt Controllers
#### [MODIFY] prompt.controller.ts
Implement the following new controller functions:
- `toggleLikePrompt`: Toggles the like status. Adds/removes a `PromptLike` record and increments/decrements the `likes` counter. Prevents duplicate likes.
- `toggleSavePrompt`: Toggles the save status in the user's default saved list. Adds/removes a `PromptSave` record and increments/decrements the `saves` counter.
- `saveToCollection`: Creates a `CollectionItem` for a specific user collection, ensuring the user owns the collection.
- `removeFromCollection`: Deletes a `CollectionItem` from a specific user collection.
- `recordRun`: Creates a `PromptRun` record and increments the `runs` counter.
- `reportPrompt`: Creates a `PromptReport` record.
- `recordShare`: Increments the `shares` counter.
- Update `getPromptBySlug` and `getPrompts` to utilize `optionalAuth` and attach `hasLiked` and `hasSaved` boolean flags to the response payload if the user is logged in.

### Prompt Routes
#### [MODIFY] prompt.routes.ts
Register new routes and apply appropriate authentication middlewares:
- `POST /:id/like` (requireAuth)
- `POST /:id/save` (requireAuth)
- `POST /:id/collection` (requireAuth)
- `DELETE /:id/collection` (requireAuth)
- `POST /:id/run` (optionalAuth or requireAuth depending on desired behavior; I'll use requireAuth for creating a run record)
- `POST /:id/report` (requireAuth)
- `POST /:id/share` (optionalAuth or public)

## User Review Required

> [!WARNING]
> Database Migration Needed
> Modifying `schema.prisma` to add `saves`, `runs`, and `shares` will require running a Prisma migration (`npx prisma migrate dev`).

## Open Questions

> [!IMPORTANT]
> 1. Do you want anonymous users to be able to "run" or "copy" prompts and track those metrics? If so, we will not require authentication on `POST /:id/run` and `POST /:id/share`. I plan to allow anonymous tracking by just incrementing the counter, while logged-in users get a specific `PromptRun` record.
> 2. For `saveToCollection` and `removeFromCollection`, should the route expect a `collectionId` in the request body?

## Verification Plan

### Automated Tests
- Test endpoints via tools/Postman or browser developer tools manually.

### Manual Verification
- Execute `npx prisma db push` or `npx prisma migrate dev` to update the SQLite database.
- Review API responses from the new endpoints to ensure they return optimistic-update-compatible formats (e.g., `{ success: true, hasLiked: true, likes: 5 }`).
