(function () {
  const root = document.documentElement;
  const themeToggles = [...document.querySelectorAll('[id="themeToggle"]')];
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeToggles.forEach((toggle) => {
      const themeLabel = toggle.querySelector(".theme-label");
      if (themeLabel) {
        themeLabel.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
      }
    });
    localStorage.setItem("prompts-theme", theme);
  }

  themeToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  });

  if (mobileMenuBtn && sidebar && sidebarOverlay) {
    mobileMenuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      sidebarOverlay.classList.toggle("open");
    });

    sidebarOverlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("open");
    });
  }

  applyTheme(localStorage.getItem("prompts-theme") || "dark");
})();
