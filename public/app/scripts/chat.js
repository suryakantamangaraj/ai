(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeLabel = themeToggle ? themeToggle.querySelector(".theme-label") : null;
  const mobileToggle = document.getElementById("mobileMenuBtn");
  const sidebar = document.getElementById("chatSidebar");
  const overlay = document.getElementById("chatOverlay");
  const chips = [...document.querySelectorAll(".chat-chip")];
  const textarea = document.getElementById("chatInput");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeLabel) {
      themeLabel.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
    }
    localStorage.setItem("chat-theme", theme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  if (mobileToggle && sidebar && overlay) {
    mobileToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("open");
    });

    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("open");
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      if (!textarea) return;
      textarea.value = chip.dataset.prompt || "";
      textarea.focus();
    });
  });

  applyTheme(localStorage.getItem("chat-theme") || "dark");
})();
