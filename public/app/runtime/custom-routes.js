(function () {
  const root = document.getElementById("root");
  if (!root) return;

  const aliases = {
    "/prompts/prompt-gallery": "/prompts/prompts-gallery",
    "/prompts/learn-prompts": "/prompts/prompts-learn",
  };

  const routes = {
    "/tools": "/app/routes/tools/index.html",
    "/prompts": "/app/routes/prompts/index.html",
    "/prompts/prompts-gallery": "/app/routes/prompts/gallery/index.html",
    "/prompts/prompts-learn": "/app/routes/prompts/learn/index.html",
    "/chat": "/app/routes/chat/index.html",
  };

  const initialPath = window.location.pathname;
  const path = aliases[initialPath] || initialPath;
  const routeHtml = routes[path];

  if (!routeHtml) return;

  if (aliases[initialPath]) {
    history.replaceState(null, "", path);
  }

  document.documentElement.setAttribute("data-app-custom-route", "true");
  document.body.setAttribute("data-app-custom-route", "true");

  waitForDefaultShell()
    .then((target) => mountRouteIntoDefaultShell(target, routeHtml))
    .catch((error) => {
      console.error("Unable to mount custom route into default shell", error);
    });

  function waitForDefaultShell() {
    return new Promise((resolve, reject) => {
      const startedAt = Date.now();
      const observer = new MutationObserver(check);

      function check() {
        const target = findDefaultRouteTarget();
        if (target) {
          observer.disconnect();
          resolve(target);
          return;
        }

        if (Date.now() - startedAt > 15000) {
          observer.disconnect();
          reject(new Error("Timed out waiting for bundled app shell"));
        }
      }

      observer.observe(root, { childList: true, subtree: true });
      check();
    });
  }

  function findDefaultRouteTarget() {
    const nav = root.querySelector("nav.glass-nav");
    if (!nav) return null;

    let sibling = nav.nextElementSibling;
    while (sibling) {
      if (isRouteContentCandidate(sibling)) return sibling;
      sibling = sibling.nextElementSibling;
    }

    const fallback = root.querySelector("main, div.min-h-screen, div[class*='min-h-screen']");
    return fallback && !fallback.closest("nav") ? fallback : null;
  }

  function isRouteContentCandidate(element) {
    if (!element || element === root) return false;
    if (element.matches("nav, footer, script, style")) return false;
    if (element.className && String(element.className).includes("fixed bottom-6")) return false;
    return true;
  }

  async function mountRouteIntoDefaultShell(target, htmlPath) {
    cleanupRouteAssets();

    const response = await fetch(htmlPath, { credentials: "same-origin" });
    if (!response.ok) {
      throw new Error(`Unable to fetch ${htmlPath}: ${response.status}`);
    }

    const html = await response.text();
    const parsed = new DOMParser().parseFromString(html, "text/html");

    injectRouteAssets(parsed);

    target.className = "cr-default-route-stage";
    target.removeAttribute("style");
    target.innerHTML = `<div id="customRouteMount" class="cr-default-route-host">${extractBodyMarkup(parsed)}</div>`;

    if (parsed.title) {
      document.title = parsed.title;
    }

    loadRouteScripts(parsed);
  }

  function extractBodyMarkup(doc) {
    const fragment = doc.body.cloneNode(true);
    fragment.querySelectorAll("script").forEach((script) => script.remove());
    return fragment.innerHTML;
  }

  function injectRouteAssets(doc) {
    const assetFragment = document.createDocumentFragment();

    doc.querySelectorAll('link[rel="stylesheet"][href]').forEach((link) => {
      const href = normalizeUrl(link.getAttribute("href"));
      if (!href || href === "/app/landing/styles/main.css" || href === "/app/runtime/custom-routes.css") {
        return;
      }

      const clone = document.createElement("link");
      clone.rel = "stylesheet";
      clone.href = href;
      clone.setAttribute("data-custom-route-asset", "style");
      assetFragment.appendChild(clone);
    });

    doc.querySelectorAll("style").forEach((style) => {
      const clone = document.createElement("style");
      clone.textContent = style.textContent;
      clone.setAttribute("data-custom-route-asset", "inline-style");
      assetFragment.appendChild(clone);
    });

    document.head.appendChild(assetFragment);
  }

  function loadRouteScripts(doc) {
    const scriptSources = [...new Set(
      [...doc.querySelectorAll("script[src]")]
        .map((script) => normalizeUrl(script.getAttribute("src")))
        .filter(Boolean)
    )];

    scriptSources.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      script.setAttribute("data-custom-route-script", "");
      document.body.appendChild(script);
    });
  }

  function cleanupRouteAssets() {
    document.querySelectorAll("[data-custom-route-asset], [data-custom-route-script]").forEach((node) => {
      node.remove();
    });
  }

  function normalizeUrl(url) {
    if (!url) return null;
    return new URL(url, window.location.origin).pathname;
  }
})();
