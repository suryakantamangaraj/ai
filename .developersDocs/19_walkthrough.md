# Prompt Interactions Walkthrough

I have successfully implemented the backend features for prompt interactions as outlined in the plan. Here is a summary of the changes made:

## 1. Database Schema Updates
Added three new integer fields to the `Prompt` model to efficiently track metrics:
- `saves` (default 0)
- `runs` (default 0)
- `shares` (default 0)

Synchronized these changes with the SQLite database using `npx prisma db push`.

## 2. New Middlewares
- Implemented an `optionalAuth` middleware in `auth.ts`. This middleware attempts to verify a user's JWT token without failing if it's missing or invalid. This allows public endpoints (like `getPrompts`) to return user-specific data (e.g., whether a prompt is liked) when the user is logged in, while remaining fully accessible to anonymous users.

## 3. Interaction Endpoints
Created and registered several new endpoints in the `prompt.routes.ts` file, utilizing `requireAuth` or `optionalAuth` where appropriate:

- **`POST /api/prompts/:id/like`**
  - Toggles the user's like status.
  - Automatically manages `PromptLike` records and safely increments/decrements the `likes` counter within a transaction.
- **`POST /api/prompts/:id/save`**
  - Toggles the user's default save status.
  - Manages `PromptSave` records and the `saves` counter.
- **`POST /api/prompts/:id/collection` & `DELETE /api/prompts/:id/collection`**
  - Adds or removes a prompt from a specific user collection, verifying ownership of the target collection via `collectionId`.
- **`POST /api/prompts/:id/run`**
  - Tracks a prompt copy/run. 
  - Uses `optionalAuth`. Anonymous runs increment the counter, while authenticated runs also create a detailed `PromptRun` record storing input/output if provided.
- **`POST /api/prompts/:id/report`**
  - Allows authenticated users to report a prompt with a provided reason.
- **`POST /api/prompts/:id/share`**
  - A public endpoint to simply increment the `shares` counter.

## 4. Optimistic Update Support
Modified the `getPrompts` and `getPromptBySlug` controller functions to:
- Accept `AuthRequest` and check for `req.userId`.
- If the user is logged in, the database query checks the `promptLikes` and `promptSaves` relations.
- Injects boolean flags (`hasLiked` and `hasSaved`) into the final JSON response, eliminating the need for separate network calls to check the user's interaction state. This is perfect for driving instant UI updates.

The backend is now ready for the frontend components to switch from local state to these dynamic endpoints.
