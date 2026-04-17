# Implement Tool Reviews Backend

This plan outlines the required backend changes to support Tool Reviews, including authentication, validation, pagination, aggregations, moderation, and schema modifications.

## Proposed Changes

### 1. Database Schema (`server/prisma/schema.prisma`)
Update the Prisma schema to add moderation status to reviews, and optionally add rating aggregations to the `Tool` model for performance (though aggregations can also be calculated dynamically).

#### [MODIFY] `server/prisma/schema.prisma`
- **ToolReview Model**: 
  - Add `status String @default("APPROVED") // PENDING, APPROVED, REJECTED` to track moderation status.
- **Tool Model**:
  - Add `averageRating Float @default(0)`
  - Add `reviewCount Int @default(0)`
  *(We will update these cached values whenever a review is added, updated, or deleted, avoiding heavy dynamic aggregations on every list tool query).*

### 2. Routes
Create a new router for reviews and mount it in the main Express app.

#### [NEW] `server/src/routes/review.routes.ts`
- `GET /api/tools/:toolId/reviews`: List reviews for a specific tool with pagination.
- `POST /api/tools/:toolId/reviews`: Submit a new review (Authenticated).
- `PUT /api/reviews/:reviewId`: Edit an existing review (Authenticated, ownership check).
- `DELETE /api/reviews/:reviewId`: Delete a review (Authenticated, ownership check).
- `POST /api/reviews/:reviewId/report`: Report a review (Authenticated).

#### [MODIFY] `server/src/index.ts`
- Mount the new review routes.

### 3. Controllers
Implement the business logic for reviews.

#### [NEW] `server/src/controllers/review.controller.ts`
- **Submit Review**: 
  - Validates `rating` (1-5) and `content` length.
  - Checks if the user already reviewed this tool (prevent duplicate spam).
  - Updates the `Tool` model's `averageRating` and `reviewCount`.
- **List Reviews**: 
  - Fetches approved reviews for a tool.
  - Supports `page` and `limit` query parameters for pagination.
  - Returns `averageRating` and `reviewCount` aggregations in the meta response.
- **Edit/Delete Review**: 
  - Ensures the `req.userId` matches the review's `userId`.
  - Recalculates aggregations for the parent `Tool`.
- **Report Review**: 
  - Creates a new `ModerationFlag` with `entityType="REVIEW"` and sets the review status to `"PENDING"` (or keeps it approved pending admin review depending on preference).

### 4. Aggregations Utility
#### [NEW] `server/src/utils/reviewAggregations.ts`
- Helper function `updateToolRating(toolId: string)`:
  - Uses Prisma `aggregate` to calculate `_avg` rating and `_count` of approved reviews.
  - Updates the `Tool` model with the new calculated values.

## Open Questions

1. **Moderation Flow:** When a user reports a review (`POST /api/reviews/:reviewId/report`), should the review be immediately hidden (status set to `PENDING`), or should it remain `APPROVED` until an admin explicitly takes action via the `ModerationFlag`? I plan to keep it `APPROVED` but create a `ModerationFlag` for admins to review, to prevent malicious users from hiding legitimate reviews by reporting them.
2. **Review Edit Window:** Should users be able to edit their reviews indefinitely, or only within a certain timeframe? I'll assume indefinitely unless specified.
3. **Database Migration:** Are you comfortable with me running `npx prisma db push` to apply the schema changes to your `dev.db` locally?

## Verification Plan

### Automated Tests
- Test endpoints using `curl` or by directly interacting via `fetch` scripts to ensure:
  - Unauthenticated users receive 401 when trying to post.
  - Users receive 400 for out-of-range ratings or empty content.
  - Users receive 403 when trying to edit/delete others' reviews.
  - Duplicate reviews by the same user return 409 Conflict.
  - Aggregations (`averageRating`, `reviewCount`) correctly reflect the additions/deletions.

### Manual Verification
- I will run local testing scripts against the running dev server.
