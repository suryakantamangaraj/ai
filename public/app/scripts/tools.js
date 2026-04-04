(function () {
  const root = document.documentElement;
  const searchInput = document.getElementById("searchInput");
  const themeToggle = document.getElementById("themeToggle");
  const themeLabel = themeToggle.querySelector(".theme-label");
  const navItems = [...document.querySelectorAll(".nav-item[data-target]")];
  const entries = [...document.querySelectorAll(".tool-entry")];
  const emptyState = document.getElementById("emptyState");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeLabel.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
    localStorage.setItem("tools-theme", theme);
  }

  function filterEntries() {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    entries.forEach((entry) => {
      const haystack = (entry.dataset.terms || "").toLowerCase();
      const visible = !query || haystack.includes(query);
      entry.style.display = visible ? "" : "none";
      if (visible) visibleCount += 1;
    });

    emptyState.hidden = visibleCount > 0;
  }

  function activateNav(targetId) {
    navItems.forEach((item) => {
      item.classList.toggle("active", item.dataset.target === targetId);
    });
  }

  function bindScrollingNav() {
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        const section = document.getElementById(item.dataset.target);
        if (!section) return;
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        activateNav(item.dataset.target);
        sidebar.classList.remove("open");
        sidebarOverlay.classList.remove("open");
      });
    });

    const sections = navItems
      .map((item) => document.getElementById(item.dataset.target))
      .filter(Boolean);

    // Keep the sidebar highlight aligned with the section the user
    // is actually reading rather than only the last link they clicked.
    const observer = new IntersectionObserver(
      (observed) => {
        const active = observed
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (active) activateNav(active.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.15, 0.3, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function bindMobileMenu() {
    // On mobile we reuse the WVW-style off-canvas sidebar interaction.
    mobileMenuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      sidebarOverlay.classList.toggle("open");
    });

    sidebarOverlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("open");
    });
  }

  themeToggle.addEventListener("click", () => {
    applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  searchInput.addEventListener("input", filterEntries);

  applyTheme(localStorage.getItem("tools-theme") || "dark");
  filterEntries();
  bindScrollingNav();
  bindMobileMenu();
})();
