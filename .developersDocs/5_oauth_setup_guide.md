# Generating OAuth Credentials (Client ID & Secret)

To allow users to log in securely, you need to create "Apps" on GitHub, Google, and Apple. Those platforms will give you a **Client ID** and **Client Secret**.

You will save these credentials in your local `server/.env` file. Do not share your Client Secrets with anyone!

> [!IMPORTANT]
> Since we are running the app locally during development, the URLs you configure matter a lot!
> - The **Homepage URL** is your frontend Vite app: `http://localhost:8080/`
> - The **Callback URL** is your backend server location: `http://localhost:3000/auth/PROVIDER/callback`

---

## 1. GitHub Configuration
GitHub is typically the quickest provider to configure.

### Step-by-Step
1. Log into your account on [GitHub.com](https://github.com).
2. Look at the top right of the page and click your **Profile Picture**, then click **Settings**.
3. Scroll all the way down on the left-side menu and click **Developer settings** (the last item).
4. Click **OAuth Apps** in the left menu, then click the **New OAuth App** button.
5. Fill out the form exactly like this:
   - **Application name**: `AIverse Local` (This is displayed to users when they sign in).
   - **Homepage URL**: `http://localhost:8080/`
   - **Authorization callback URL**: `http://localhost:3000/auth/github/callback`
6. Click **Register application**.
7. You will immediately be shown your **Client ID**. Copy it into your `.env` file as `GITHUB_CLIENT_ID`.
8. Right below it, click the **Generate a new client secret** button.
9. Copy that newly generated secret string into your `.env` file as `GITHUB_CLIENT_SECRET`.

---

## 2. Google Configuration
Google requires you to set up a project within their Google Cloud Platform. 

### Step-by-Step
1. Go to the [Google Cloud Console](https://console.cloud.google.com/) and sign in.
2. Click the **Project Dropdown** at the very top left (near the Google Cloud logo) and click **New Project**. Name it `AIverse App` and click Create.
3. Once created, make sure the project is selected. Use the top-left Hamburger Menu (**☰**) to navigate to **APIs & Services** > **OAuth consent screen**.
4. In the Consent Screen setup:
   - Choose **External** user type and click Create.
   - For App Name, put `AIverse`. Choose your email for support.
   - Scroll to the bottom and put your email for Developer Contact.
   - Keep clicking **Save and Continue** all the way to the end (you don't need to configure scopes or test users for local testing).
5. Now look at the left sidebar menu again and click **Credentials**.
6. At the top of the screeen, click **+ CREATE CREDENTIALS** > **OAuth client ID**.
7. Fill out the application screen as follows:
   - **Application type**: Web application
   - **Name**: `AIverse Web Client`
   - Under **Authorized JavaScript origins**, click + ADD URI and enter: `http://localhost:8080`
   - Under **Authorized redirect URIs**, click + ADD URI and enter: `http://localhost:3000/auth/google/callback`
8. Click **Create**. A pop-up box will appear containing your **Client ID** and **Client Secret**.
9. Copy those two values into your `.env` file as `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

---

## 3. Apple Configuration (Requires Paid Developer Account)
> [!WARNING]
> Apple has extremely strict security policies. Implementing "Sign in with Apple" requires a **paid Apple Developer Account** ($99/year). If you do not have one, you will need to temporarily remove or hide the Apple Button from the app until production.

If you have a paid Apple Developer Account:
1. Log in to the [Apple Developer Portal](https://developer.apple.com/).
2. Navigate to **Certificates, Identifiers & Profiles**.
3. Under **Identifiers**, click the plus **(+)** icon to add a new **App ID** (This is required as a baseline).
4. Go back to Identifiers, but this time click the top-right filter and select **Services IDs**. Click the **(+)** icon to create a new one. This will act as your Client ID. Example identifier: `com.aiverse.webapp`.
5. Check the box for **Sign in with Apple** on that Service ID and click Configure.
   - In the modal, ensure your Primary App ID is selected.
   - Under **Web Domain**, add `localhost`
   - Under **Return URLs**, add `http://localhost:3000/auth/apple/callback`
   - Save and continue.
6. Now go to **Keys** in the left menu. Click **(+)** to create a new Key.
7. Name the key (e.g., `AIverse Auth Key`) and check the **Sign in with Apple** box. Configure it to map to your App ID.
8. Click Continue, then Register.
9. Click **Download** to save the private `.p8` key file. **You can only download this once. Don't lose it.**
10. For future backend implementations, Apple requires:
    - Team ID (Found in your membership area)
    - Service ID (`com.aiverse.webapp`)
    - Key ID (Displayed next to the downloaded Key)
    - The downloaded `.p8` Private Key file. 

*(Note: In the currently deployed backend script, Apple is set up as a placeholder returning an error because the setup for the `.p8` file structure is complex. Let's start with Google and GitHub first!)*
