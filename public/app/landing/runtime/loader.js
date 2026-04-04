// Generated from the modular frontend source tree.
// Sequential loader for the reconstructed modular landing runtime.

(function () {
  const scripts = [
  "/app/landing/runtime/core.js",
  "/app/landing/pages/landing.js",
  "/app/landing/pages/not-found.js",
  "/app/landing/pages/admin-login.js",
  "/app/landing/pages/secret-admin-portal.js",
  "/app/landing/pages/lab.js",
  "/app/landing/pages/favorites.js",
  "/app/landing/pages/tool-detail.js",
  "/app/landing/pages/admin-dashboard.js",
  "/app/landing/pages/admin-tools.js",
  "/app/landing/pages/admin-categories.js",
  "/app/landing/pages/admin-blog-posts.js",
  "/app/landing/pages/admin-weekly.js",
  "/app/landing/pages/admin-users.js",
  "/app/landing/pages/admin-user-detail.js",
  "/app/landing/pages/admin-settings.js",
  "/app/landing/pages/adams-list.js",
  "/app/landing/pages/compare.js",
  "/app/landing/pages/weekly.js",
  "/app/landing/pages/about.js",
  "/app/landing/pages/adams-list-detail.js",
  "/app/landing/runtime/bootstrap.js"
];
  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve(src);
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });

  (async () => {
    for (const src of scripts) {
      await loadScript(src);
    }
    window.dispatchEvent(new Event("aiverse:landing-runtime-ready"));
  })().catch((error) => {
    console.error("Failed to boot reconstructed landing runtime:", error);
  });
})();
