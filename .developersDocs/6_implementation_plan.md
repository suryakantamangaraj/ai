# User Session Persistence Implementation Plan

This plan addresses the persistence of login state, token refresh mechanisms, session validations, and adding a prolonged session equivalent to "remember me".

## User Review Required

> [!IMPORTANT]
> The current setup issues a short-lived access token (15 mins) and a 7-day refresh token.
> To support the backend "remember me" requirement, I will increase the refresh token expiry from 7 days to 30 days. Please let me know if you would like a different expiry value.

## Proposed Changes

---

### Backend Updates

#### [MODIFY] `auth.routes.ts`
- **Remember Me Support:** Change the `maxAge` configuration for the `refreshToken` cookie from 7 days to 30 days in the `handleOAuthSuccess` function and the `/refresh` endpoint.

---

### Frontend Updates

#### [MODIFY] `axios.ts`
- **Token Expiry & Silent Re-auth:** Remove the condition that explicitly skips token refresh for `/auth/me` requests. This change will allow the app to automatically use the valid refresh token to get a new access token on startup if the previous access token has expired.
- **Invalid-Session Cleanup:** If the silent `/auth/refresh` request fails (e.g., the refresh token is also expired or invalid), the application will:
  - Remove any authentication flags from `localStorage`.
  - Dispatch a custom DOM event `auth:unauthorized` to uniformly alert the application to reset to a logged-out state.

#### [MODIFY] `AuthContext.tsx`
- **Persist Login State (No UI Flicker):** Currently, the React application defaults `isLoggedIn` to `false` while it fetches user data on load. Instead, we will store a lightweight flag in `localStorage` (`auth-session-valid`). On initial load, the context will read this value synchronously to prevent UI flickering or momentary showing of "Login" buttons.
- **State Validation:** 
  - On a successful `/auth/me` fetch, verify the session and set the local storage flag to `true`.
  - Add an effect to listen for the `auth:unauthorized` event dispatched by Axios to automatically strip context data, remove the `localStorage` flag, and ensure the session is wiped cleanly from the frontend state.
- **Logout Validation:** Ensure the `logout` path drops the `localStorage` state properly.

## Open Questions

> [!WARNING]
> Is there a specific redirect route you want users to hit if they are spontaneously logged out due to session invalidation (e.g., redirect to `/` or just update the UI without an aggressive redirect)? I plan to reset the state and let the existing `ProtectedRoute` handle any required kickouts to `/`.

## Verification Plan

### Manual Verification
- Log into the application and reload the page to ensure the React state retrieves login immediately without flickering.
- Delete the `accessToken` from the browser cookies and reload the page. Verify that a `/auth/refresh` call occurs transparently, `/auth/me` succeeds, and no logout occurs.
- Delete the `refreshToken` from the browser cookies to simulate an expired session, then invoke an API / reload the page. Verify that local storage flags are wiped completely and the app correctly transitions to the logged-out state without errors.
