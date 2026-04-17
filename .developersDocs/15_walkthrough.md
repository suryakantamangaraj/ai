# Tool Community Flows Walkthrough

I have successfully implemented the "Request an App" and "Publish an App" workflows, along with the moderation and notification systems.

## Summary of Changes

### 1. Community Routes and Controllers
- **`community.routes.ts` & `community.controller.ts`**:
  - `POST /api/community/requests`: Allows authenticated users to request an app. It checks the `ToolRequest` database and prevents duplicates with the exact same title.
  - `GET /api/community/requests/my`: Lists all app requests submitted by the logged-in user, allowing them to track the status (e.g., `OPEN`, `IN_PROGRESS`, `FULFILLED`).
  - `POST /api/community/submissions`: Allows developers to publish an app. It stores the app metadata as a JSON string in the `ToolSubmission` table with a `PENDING` status. Deduplication ensures that a tool with the same name doesn't already exist in the directory.
  - `GET /api/community/submissions/my`: Lists all pending and processed app submissions for the logged-in user.

### 2. Admin Moderation Flows
- **`admin.routes.ts` & `admin.controller.ts`**:
  - Requires both the `requireAuth` and the newly added `requireAdmin` middleware.
  - `GET /api/admin/community/submissions`: Retrieves all `PENDING` tool submissions for admin review.
  - `PUT /api/admin/community/submissions/:id/status`: Approves or rejects a submission. If `APPROVED`, the backend automatically generates a `slug` (with collision handling) and creates a new, publicly visible entry in the `Tool` table.
  - `GET /api/admin/community/requests`: Retrieves all `OPEN` app requests.
  - `PUT /api/admin/community/requests/:id/status`: Updates the status of an app request.

### 3. Notification System
When an admin changes the status of a user's request or submission, a new entry is created in the `Notification` table:
- **Tool Submission Notifications**: `"Your tool submission was approved/rejected."`
- **Tool Request Notifications**: `"Your tool request status was updated to fulfilled/in progress/rejected."`

## Verification
All routes are mounted under `/api/community` and `/api/admin` in the main Express application (`index.ts`). You can now hook these up to your frontend forms to manage submissions and review tools!
