Based on the current repo, the app is still frontend-only and most interactive features are mock/in-memory. The backend to-do list below is derived from what the UI already promises in [src/pages/Chat.tsx](/Users/suryaraj/Desktop/gitlab/aiversetools/src/pages/Chat.tsx), [src/contexts/AuthContext.tsx](/Users/suryaraj/Desktop/gitlab/aiversetools/src/contexts/AuthContext.tsx), [src/pages/MyCollection.tsx](/Users/suryaraj/Desktop/gitlab/aiversetools/src/pages/MyCollection.tsx), [src/pages/PromptDetail.tsx](/Users/suryaraj/Desktop/gitlab/aiversetools/src/pages/PromptDetail.tsx), [src/pages/ToolDetail.tsx](/Users/suryaraj/Desktop/gitlab/aiversetools/src/pages/ToolDetail.tsx), [src/pages/Feed.tsx](/Users/suryaraj/Desktop/gitlab/aiversetools/src/pages/Feed.tsx), and the static data files under `src/data`.

**Backend To-Do List**

- Define the backend architecture first.
- Choose the backend stack.
- Choose the database.
- Decide auth provider strategy.
- Decide file storage strategy for screenshots/assets.
- Define environment strategy for local, staging, and production.
- Create a proper backend repository structure or backend folder.
- Add environment variable management.
- Add centralized config loading and validation.
- Add API versioning strategy from day one.
- Add a health-check endpoint.
- Add structured logging.
- Add error handling and standard API error response format.

**1. Authentication and User Accounts**
- Create `users` table/model.
- Store unique user id, username, email, avatar, auth provider, provider id, created_at, updated_at.
- Support OAuth sign-in for GitHub, Google, and Apple because the header already exposes those options.
- Add session handling or JWT/token-based auth.
- Add refresh token strategy if using JWT.
- Add logout endpoint.
- Add “current user” endpoint.
- Add middleware to protect authenticated routes.
- Add user profile fetch/update endpoints.
- Add username uniqueness rules.
- Add avatar/profile sync rules for OAuth accounts.
- Add onboarding flow for first-time users.
- Add auth rate limiting and abuse protection.
- Add audit logging for auth events.

**2. User Session Persistence**
- Persist login state properly instead of React memory state.
- Add session validation on app load.
- Add token expiry handling.
- Add silent re-auth or refresh flow.
- Add invalid-session cleanup behavior.
- Add backend support for “remember me” if needed.

**3. Database Design**
- Design the core schema before coding APIs.
- Create tables/models for:
- `users`
- `tools`
- `tool_reviews`
- `tool_review_votes` if review helpfulness is planned
- `tool_submissions`
- `tool_requests`
- `prompts`
- `prompt_versions`
- `prompt_likes`
- `prompt_saves`
- `prompt_runs`
- `prompt_reports`
- `collections`
- `collection_items`
- `learning_topics`
- `saved_learning_items`
- `subscriptions`
- `chat_conversations`
- `chat_messages`
- `notifications`
- `moderation_flags`
- Add indexes for slug/id lookups, category filters, tags, likes, recency, and author.
- Add migration workflow.
- Add seed data strategy to replace frontend static arrays gradually.

**4. Tools Directory Backend**
- Move tool data out of `src/data/tools.ts` into the database.
- Create tool list endpoint with pagination.
- Add filtering by category.
- Add filtering by author.
- Add search by name/description/tags.
- Add sorting by featured/new/popular.
- Add single-tool detail endpoint.
- Add related tools endpoint or computed relation logic.
- Add “apps by author” endpoint.
- Add featured tools endpoint.
- Add new tools endpoint.
- Add paid tools endpoint.
- Add tool screenshots/media support.
- Add slug support so URLs are stable and SEO-friendly.
- Add admin fields like approval status, visibility status, featured flag.

**5. Tool Reviews**
- Create review submission endpoint.
- Require authentication for posting reviews.
- Validate rating range and comment length.
- Prevent duplicate spam reviews from same user if needed.
- Add edit review endpoint.
- Add delete review endpoint.
- Add list reviews endpoint with pagination.
- Add average rating aggregation.
- Add review count aggregation.
- Add moderation status for reviews.
- Add report review endpoint.
- Add backend ownership checks so users can only edit/delete their own reviews.

**6. Tool Community Flows**
- Create “Request an App” submission endpoint.
- Create `tool_requests` storage.
- Add form validation and deduplication.
- Add status tracking for request submissions.
- Create “Publish an App” submission endpoint.
- Store pending tool submissions separately from approved tools.
- Add moderation/review workflow for submitted tools.
- Add admin approval/rejection flow.
- Add notifications for submission status changes.

**7. Prompts Gallery Backend**
- Move prompt data out of `src/data/prompts.ts` into the database.
- Create prompt listing endpoint.
- Add filtering by category.
- Add filtering by type.
- Add filtering by tags.
- Add full-text search on title/description/prompt content if needed.
- Add sorting by newest, popular, alphabetical.
- Add prompt detail endpoint.
- Add related prompts endpoint.
- Add prompt author metadata support.
- Add prompt visibility state: public/private/draft if planned.
- Add slug/version support for prompt URLs.

**8. Prompt Interactions**
- Create like/upvote endpoint.
- Persist likes instead of local component state.
- Prevent duplicate likes per user.
- Add save-to-collection endpoint.
- Add remove-from-collection endpoint.
- Add copy/run analytics endpoints if those metrics matter.
- Add report prompt endpoint.
- Add share tracking optionally.
- Add optimistic update-compatible API responses for frontend.
- Add aggregate counters for likes, saves, runs.

**9. Prompt Versioning and Collaboration**
- Create prompt version model because the UI already shows a Versions tab.
- Add create new version endpoint.
- Add fetch version history endpoint.
- Add compare versions support if planned later.
- Add “Propose Changes” workflow.
- Store proposed edits separately from approved prompt versions.
- Add moderation/review flow for proposed changes.
- Add attribution for who created each version.
- Add rollback/restore version capability for admins.

**10. My Collection Backend**
- Replace mock `savedPromptIds` and `savedLearningIds` in [src/pages/MyCollection.tsx](/Users/suryaraj/Desktop/gitlab/aiversetools/src/pages/MyCollection.tsx).
- Create collections for each user.
- Decide whether there is one default collection or multiple named collections.
- Add endpoint to save prompts.
- Add endpoint to unsave prompts.
- Add endpoint to fetch saved prompts.
- Add endpoint to save learning items.
- Add endpoint to remove learning items.
- Add endpoint to fetch saved learning items.
- Add endpoint for favorites.
- Add backend search within a user’s collection.
- Add item type support so one collection can hold prompts, learning items, maybe tools later.

**11. Favorites Backend**
- Define what “favorites” means separately from saved prompts.
- Create favorites table/model if it is distinct.
- Add favorite/unfavorite APIs.
- Add fetch favorites API.
- Ensure favorites are user-specific and authenticated.
- Decide whether favorites can apply to prompts, tools, or both.

**12. Feed Backend**
- Replace hardcoded subscribed categories/tags in [src/pages/Feed.tsx](/Users/suryaraj/Desktop/gitlab/aiversetools/src/pages/Feed.tsx).
- Create subscriptions model for categories, tags, authors, or prompt types.
- Add subscribe endpoint.
- Add unsubscribe endpoint.
- Add fetch subscription preferences endpoint.
- Add personalized feed endpoint.
- Add trending feed logic.
- Add recent feed logic.
- Define ranking rules for feed ordering.
- Add pagination/cursor-based loading.
- Add “Manage Subscriptions” backend support.
- Add unread/new content support if notifications are planned.

**13. Learn Section Backend**
- Move learn navigation/content out of static file if it needs to be managed dynamically.
- Create learning topics model.
- Store hierarchy for sections and sub-sections.
- Add fetch learning navigation endpoint.
- Add fetch learning content by topic id endpoint.
- Add save learning topic endpoint for users.
- Add “Add a Topic” submission workflow.
- Add moderation for community-contributed learning topics.
- Add search for learning content.

**14. Chat Backend**
- Replace demo response in [src/pages/Chat.tsx](/Users/suryaraj/Desktop/gitlab/aiversetools/src/pages/Chat.tsx).
- Decide AI provider/model strategy.
- Create conversation model.
- Create message model.
- Add create conversation endpoint.
- Add list user conversations endpoint.
- Add fetch conversation messages endpoint.
- Add send message endpoint.
- Integrate AI inference on backend.
- Add streaming response support if desired.
- Add system prompts / mode support for Smart and future modes.
- Add quick action prompt handling.
- Add title generation for conversations.
- Add token/usage logging.
- Add chat rate limiting.
- Add moderation/safety checks on prompts and outputs.
- Add conversation deletion endpoint.
- Add conversation rename endpoint.
- Add user quota/plan enforcement if applicable.

**15. Search Backend**
- Add backend search for tools.
- Add backend search for prompts.
- Add backend search for learning content.
- Add backend search for user collections.
- Decide between SQL search and external search engine.
- Add query analytics optionally.
- Add typo tolerance if required later.

**16. Notifications Backend**
- Create notifications table/model.
- Add notification types for:
- review replies/status
- tool submission status
- app request updates
- prompt change proposals
- feed/subscription events
- Add fetch notifications endpoint.
- Add mark-as-read endpoint.
- Add unread count endpoint.
- Add delivery rules for in-app notifications first, email later if needed.

**17. Reporting and Moderation**
- Create reporting endpoints for prompts, reviews, and possibly tools.
- Create moderation queue tables/views.
- Add moderation statuses: pending, approved, rejected, removed.
- Add admin endpoints for moderation review.
- Add reason codes and free-text reason storage.
- Add abuse throttling and anti-spam checks.
- Add soft-delete support for moderated content.

**18. Admin Backend**
- Create admin role model or role flag.
- Add admin authentication/authorization middleware.
- Add admin endpoints for:
- reviewing tool submissions
- reviewing app requests
- moderating prompts
- moderating reviews
- managing featured tools
- managing categories/tags
- Add admin dashboard metrics endpoints.

**19. Taxonomy and Metadata Management**
- Create backend-managed categories for tools.
- Create backend-managed categories for prompts.
- Create backend-managed tags.
- Add admin CRUD for taxonomy.
- Add validation so tools/prompts can only use allowed categories/tags if that’s desired.
- Add ordering metadata for category display.

**20. Media and Asset Handling**
- Decide how screenshots for tools will be uploaded and stored.
- Add secure upload endpoints or signed-upload flow.
- Validate file type and size.
- Add image optimization/resizing if needed.
- Add CDN/public asset strategy.
- Add cleanup rules for unused uploads.

**21. API Contract and Documentation**
- Write API specs for each feature area.
- Standardize request/response shapes.
- Add API validation layer.
- Add OpenAPI/Swagger docs if useful.
- Document auth flow.
- Document admin-only endpoints.
- Document error codes and pagination format.

**22. Security**
- Add input validation everywhere.
- Add auth guards on protected routes.
- Add CORS configuration.
- Add CSRF protection if cookie sessions are used.
- Add rate limiting on auth, chat, submissions, and reports.
- Add SQL injection/XSS-safe handling through ORM and validation.
- Add secrets management.
- Add role-based authorization.
- Add file upload validation and malware scanning if uploads become public.

**23. Performance and Scalability**
- Add pagination to list endpoints.
- Add cursor pagination for feeds/chats if needed.
- Add database indexes after query patterns are known.
- Add caching for popular public endpoints.
- Add denormalized counters for likes/reviews if necessary.
- Add background jobs for heavy/non-blocking work.
- Add queue system if chat or moderation workloads grow.

**24. Testing**
- Add backend unit tests.
- Add API integration tests.
- Add auth flow tests.
- Add permission tests.
- Add database migration tests.
- Add seed data test strategy.
- Add contract tests for critical frontend/backend integration points.

**25. DevOps and Deployment**
- Add backend run scripts.
- Add local dev database setup.
- Add migration commands for CI/CD.
- Add staging environment.
- Add production deployment pipeline.
- Add monitoring and alerting.
- Add log aggregation.
- Add backup/restore plan for database.
- Add rollback plan for bad deployments.

**26. Data Migration from Current Frontend**
- Extract the current tools and prompts from static TS files.
- Convert them into seed JSON or migration scripts.
- Define stable IDs/slugs before importing.
- Backfill categories/tags/authors consistently.
- Ensure imported likes/stars/reviews are handled intentionally.
- Replace frontend direct imports with API fetches after backend is ready.

**Suggested implementation order**
- Phase 1: backend skeleton, database, auth, users, health checks, error handling.
- Phase 2: tools + prompts read APIs so the app stops depending on static data.
- Phase 3: collections, likes, favorites, saved learning items.
- Phase 4: reviews, app requests, app publishing submissions, moderation basics.
- Phase 5: subscriptions + personalized feed.
- Phase 6: chat backend + AI integration.
- Phase 7: notifications, admin dashboard, analytics, scaling improvements.

**Biggest blockers right now**
- No backend project exists yet.
- No database schema exists yet.
- No persistent auth/session system exists yet.
- Core app content is hardcoded in frontend files.
- Several user-facing features are currently UI-only demos.

If you want, I can next turn this into a cleaner project-management checklist grouped as `MVP`, `Phase 2`, and `Nice to Have`.