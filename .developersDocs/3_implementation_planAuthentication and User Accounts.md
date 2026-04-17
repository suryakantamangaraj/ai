# Add Complete Authentication and User Accounts

This plan addresses the requirements for building out the Authentication and User Accounts system. The requirements specify creating a database table/model, custom endpoints (like logout, current user, profile sync), JWT refresh token strategies, middleware, and audit logging.

## User Review Required

> [!IMPORTANT]  
> The current `aiversetools` repository is exclusively a frontend React (Vite) application without a backend.
> To fulfill requirements like middleware, database schemas, token strategies, and rate limiting, we need to introduce a backend.

**Which backend path would you prefer?**
1. **Custom Node.js + Express + Prisma API** (This is what the plan below assumes, as it aligns perfectly with your endpoint and middleware requests)
2. **Next.js Backend API Routes** (We would need to migrate Vite to Next.js)
3. **Backend-as-a-Service like Supabase** (This replaces the need for custom endpoints, but handles everything securely via its own client)

Please reply with your preference!

## Proposed Changes

Assuming we proceed with a Custom Node.js (Express) backend.

### Backend Setup (`/server`)
Initialize a new Express API inside the repo, using Prisma for database interactions and `express-rate-limit` for abuse protection.

#### [NEW] `server/prisma/schema.prisma`
- Create `User` model: `id`, `username` (unique), `email`, `avatar`, `auth_provider`, `provider_id`, `created_at`, `updated_at`.
- Create `AuditLog` model: Track event types (login, signup, logout) for auth events.
- Create `Session` or `RefreshToken` model to manage session states.

#### [NEW] Auth Endpoints & Middleware (`server/routes/auth.ts`)
- **OAuth Endpoints**: Setup Passport.js or direct integration for GitHub, Google, and Apple OAuth.
- **`GET /auth/me`**: Current user endpoint.
- **`POST /auth/logout`**: Clear token cookies and invalidate session.
- **`POST /auth/refresh`**: Issue new access tokens based on valid refresh tokens.
- **Middleware**: `requireAuth` to protect routes by validating the JWT.
- **Rate Limiting**: Apply strict API rate-limiting rules on all `/auth` routes to prevent brute-force attacks.

#### [NEW] User Endpoints (`server/routes/users.ts`)
- Fetch and update user profile data.
- Enforce username uniqueness checks on updates.

### Frontend Updates (`/src`)

#### [MODIFY] `src/contexts/AuthContext.tsx`
- Remove the mocked login implementation.
- Integrate React Query (`@tanstack/react-query`) to fetch the `/auth/me` endpoint.
- Add Axios/fetch interceptors to handle the "Refresh token strategy" automatically on 401 Unauthorized responses.

#### [MODIFY] `src/components/Header.tsx`
- Wire the generic GitHub, Google, and Apple buttons in the `Header` to navigate the user to the Express OAuth authorization URLs (`http://localhost:3000/auth/github` etc).

#### [NEW] `src/pages/Onboarding.tsx`
- Implement an onboarding screen. After successful OAuth, if it's the user's first time, we sync their avatar from the OAuth provider and ask them to select a unique username to complete registration.

## Open Questions

1. Do you already have Client IDs/Secrets for GitHub, Google, and Apple OAuth?
2. Which database dialect would you like to use with Prisma? (PostgreSQL, MySQL, SQLite)? (I recommend SQLite for quick local dev, but PostgreSQL for production).

## Verification Plan

### Manual Verification
- Start both the frontend and backend servers.
- Go fully through the GitHub OAuth flow.
- Ensure the user gets prompted in the unified Onboarding screen for a valid username.
- Check the backend console or Postgres database to ensure Audit logs are tracked correctly.
- Ensure protected routes correctly redirect unauthenticated users.
