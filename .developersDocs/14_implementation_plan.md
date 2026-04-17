# Tool Community Flows Implementation Plan

This plan outlines the steps to implement the "Request an App" and "Publish an App" flows, along with the admin moderation tools and notification system.

## User Review Required

> [!IMPORTANT]
> - **Schema Additions**: The database currently has `ToolSubmission` and `ToolRequest` models. I will create the endpoints using the existing schema without adding new fields. Let me know if you would like additional fields (e.g., `url` for `ToolRequest`).
> - **Tool Submission Structure**: `ToolSubmission` currently stores `toolData` as a JSON string. The frontend will need to pass all tool metadata (name, description, category, etc.) and it will be saved as JSON. On approval, it will be parsed and mapped to the `Tool` model. 
> - **Admin Permissions**: Admin routes will require the user to have `role === 'ADMIN'`. Please ensure you have an Admin user to test these flows.

## Open Questions

> [!NOTE]
> 1. **Deduplication Logic**: For "Request an App", how should we detect duplicates? The plan is to deduplicate by `title` (case-insensitive) for requests, and by `slug` / `website` for submissions. Is this approach acceptable?
> 2. **Notifications**: When a status changes, we'll create a `Notification` record for the user. Do we need a new route to fetch these notifications, or is that out of scope for this task?

## Proposed Changes

### Backend Setup and Routes
We will introduce new route files and controllers to handle community workflows.

#### [NEW] [community.routes.ts](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/src/routes/community.routes.ts)
- Mount under `/api/community`
- Define routes for:
  - `POST /requests` (Submit a request)
  - `GET /requests/my` (List user's requests for status tracking)
  - `POST /submissions` (Publish/Submit a tool)
  - `GET /submissions/my` (List user's submissions for status tracking)

#### [NEW] [admin.routes.ts](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/src/routes/admin.routes.ts)
- Mount under `/api/admin`
- Define routes for:
  - `GET /community/submissions` (List all pending submissions)
  - `PUT /community/submissions/:id/status` (Approve/Reject submission)
  - `GET /community/requests` (List all open requests)
  - `PUT /community/requests/:id/status` (Update request status)

#### [MODIFY] [index.ts](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/src/index.ts)
- Register `community.routes.ts` and `admin.routes.ts`.

---

### Controllers & Business Logic

#### [NEW] [community.controller.ts](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/src/controllers/community.controller.ts)
- `createRequest`: Validate input, check for existing request with the same title (deduplication), and store in `ToolRequest`.
- `getMyRequests`: Return user's `ToolRequest` items.
- `createSubmission`: Validate tool data (JSON string), check if a tool with the same website/slug already exists, and store in `ToolSubmission` as pending.
- `getMySubmissions`: Return user's `ToolSubmission` items.

#### [NEW] [admin.controller.ts](file:///Users/suryaraj/Desktop/git/aiverse.tools/server/src/controllers/admin.controller.ts)
- `getPendingSubmissions`: Fetch `ToolSubmission` items with status `PENDING`.
- `updateSubmissionStatus`: 
  - Change status to `APPROVED` or `REJECTED`. 
  - If `APPROVED`, parse `toolData` and create a new `Tool` record.
  - Create a `Notification` for the submission's author about the status change.
- `getOpenRequests`: Fetch `ToolRequest` items with status `OPEN`.
- `updateRequestStatus`: 
  - Update status (e.g., `FULFILLED`, `REJECTED`).
  - Create a `Notification` for the requester.

---

### Notifications

We will rely on the existing `Notification` model to push status changes. When an admin updates a submission or request:
```prisma
await prisma.notification.create({
  data: {
    userId: submission.userId,
    type: 'SUBMISSION_STATUS_CHANGED',
    content: `Your tool submission was ${newStatus}.`,
    link: `/dashboard/submissions`
  }
});
```

## Verification Plan

### Automated Tests
- N/A (We'll verify via Postman or frontend).

### Manual Verification
1. **Submit Request**: Make a POST request to `/api/community/requests`. Attempt to submit a duplicate title and verify it gets rejected.
2. **Submit Tool**: Make a POST request to `/api/community/submissions`. Ensure it's stored in `ToolSubmission`.
3. **Status Tracking**: Call `/api/community/requests/my` and `/api/community/submissions/my` as the user to see pending items.
4. **Admin Approval**: As an admin, call the approve endpoint for a submission.
5. **Verify Publish**: Check that the newly approved tool exists in the `Tool` table.
6. **Verify Notification**: Check the `Notification` table to confirm the user received a notification of the approval.
