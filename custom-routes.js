(function () {
  const root = document.getElementById("root");
  if (!root) return;

  const aliases = {
    "/prompts/prompt-gallery": "/prompts/prompts-gallery",
    "/prompts/learn-prompts": "/prompts/prompts-learn",
  };

  const initialPath = window.location.pathname;
  const path = aliases[initialPath] || initialPath;

  if (aliases[initialPath]) {
    history.replaceState(null, "", path);
  }

  document.body.setAttribute("data-custom-route", "true");
  root.setAttribute("data-custom-shell", "true");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const label = document.querySelector(".cr-theme-label");
    if (label) label.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
    localStorage.setItem("custom-route-theme", theme);
  }

  function shell(title, subtitle, active, content, sidebar, mobileTitle) {
    return `
      <div class="cr-shell">
        <header class="cr-topbar">
          <div class="cr-brand">
            <div class="cr-brand-mark">AI</div>
            <div class="cr-brand-copy">
              <div class="cr-brand-title">${title}</div>
              <div class="cr-brand-sub">${subtitle}</div>
            </div>
          </div>
          <nav class="cr-tabs">
            <button class="cr-mobile-menu" type="button" data-menu-toggle aria-label="Open menu">Menu</button>
            <a class="cr-tab${active === "tools" ? " active" : ""}" href="/tools">Tools</a>
            <a class="cr-tab${active === "prompts" ? " active" : ""}" href="/prompts">Prompts</a>
            <a class="cr-tab${active === "chat" ? " active" : ""}" href="/chat">Chat</a>
            <a class="cr-cta" href="/">Home</a>
            <button class="cr-theme" type="button" data-theme-toggle><span class="cr-theme-label">Light Mode</span></button>
          </nav>
        </header>
        <div class="cr-content">
          <div class="cr-grid">
            <aside class="cr-sidebar cr-panel pad" id="customSidebar">
              <div class="cr-nav-title">${mobileTitle}</div>
              ${sidebar}
            </aside>
            <div class="cr-overlay" id="customOverlay"></div>
            <main class="cr-main">${content}</main>
          </div>
        </div>
      </div>
    `;
  }

  function promptsSidebar(current) {
    return `
      <div class="cr-nav-list">
        <a class="cr-nav-link${current === "home" ? " active" : ""}" href="/prompts">Prompts Home</a>
        <a class="cr-nav-link${current === "learn" ? " active" : ""}" href="/prompts/prompts-learn">Prompts Learn</a>
        <a class="cr-nav-link${current === "gallery" ? " active" : ""}" href="/prompts/prompts-gallery">Prompts Gallery</a>
      </div>
    `;
  }

  function renderToolCard(tool) {
    return `
      <article class="cr-tool-card">
        <div class="cr-tool-thumb" style="background:${tool.gradient}">
          <span>${tool.icon}</span>
        </div>
        <div class="cr-tool-card-body">
          <div class="cr-tool-label">${tool.label}</div>
          <h3>${tool.name}</h3>
          <p class="cr-card-text">${tool.description}</p>
        </div>
      </article>
    `;
  }

  function renderToolRow(tool) {
    return `
      <article class="cr-tool-row">
        <div class="cr-tool-row-icon">${tool.icon}</div>
        <div class="cr-tool-row-copy">
          <div class="cr-tool-row-title">${tool.name}</div>
          <p class="cr-card-text">${tool.description}</p>
          <div class="cr-card-meta">
            ${tool.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
        <a class="cr-tool-link" href="${tool.href}" target="_blank" rel="noopener">View</a>
      </article>
    `;
  }

  function toolsPage() {
    const newTools = [
      {
        name: "Cursor",
        label: "Developer Tool",
        icon: "⌘",
        gradient: "linear-gradient(135deg,#111827,#1f2937,#374151)",
        description: "AI-native editor for code completion, refactors, and repo-scale assistance.",
      },
      {
        name: "Runway",
        label: "Creative App",
        icon: "▶",
        gradient: "linear-gradient(135deg,#1f2937,#312e81,#1d4ed8)",
        description: "Text, image, and video generation wrapped in a strong creator-first workflow.",
      },
      {
        name: "NotebookLM",
        label: "Research Tool",
        icon: "✦",
        gradient: "linear-gradient(135deg,#0f172a,#1d4ed8,#38bdf8)",
        description: "Source-grounded summaries, Q&A, and audio over your own uploaded documents.",
      },
      {
        name: "Perplexity",
        label: "Answer Engine",
        icon: "∞",
        gradient: "linear-gradient(135deg,#052e16,#065f46,#0f766e)",
        description: "Fast web-grounded answers with citations, follow-ups, and research-friendly UX.",
      },
    ];

    const popularTools = [
      {
        name: "Claude",
        icon: "C",
        href: "https://claude.ai",
        description: "Long-context assistant for writing, analysis, and code reasoning.",
        tags: ["Assistant", "Long Context"],
      },
      {
        name: "Midjourney",
        icon: "M",
        href: "https://www.midjourney.com",
        description: "High-end image generation with a distinct visual style and strong prompting culture.",
        tags: ["Image", "Creative"],
      },
      {
        name: "ElevenLabs",
        icon: "11",
        href: "https://elevenlabs.io",
        description: "Voice generation, dubbing, and audio tools for product and media teams.",
        tags: ["Audio", "Voice"],
      },
      {
        name: "v0",
        icon: "v0",
        href: "https://v0.dev",
        description: "Prompt-driven UI generation that fits modern frontend workflows well.",
        tags: ["Frontend", "React"],
      },
      {
        name: "Gamma",
        icon: "G",
        href: "https://gamma.app",
        description: "Presentation and doc generation that feels faster than traditional slide tools.",
        tags: ["Productivity", "Decks"],
      },
      {
        name: "Suno",
        icon: "S",
        href: "https://suno.com",
        description: "Text-to-music generation with fast iteration for demos, content, and experiments.",
        tags: ["Music", "Generative"],
      },
    ];

    const builderPicks = [
      {
        name: "Bolt",
        icon: "B",
        href: "https://bolt.new",
        description: "Rapid app prototyping with code generation and deployment-friendly output.",
        tags: ["Builder", "Full Stack"],
      },
      {
        name: "Replit",
        icon: "R",
        href: "https://replit.com",
        description: "Cloud development with AI assistance, previews, and collaborative editing.",
        tags: ["Cloud IDE", "Agent"],
      },
      {
        name: "Lovable",
        icon: "L",
        href: "https://lovable.dev",
        description: "Prompt-first app creation focused on clean product surfaces and quick iteration.",
        tags: ["No Code", "UI"],
      },
      {
        name: "GitHub Copilot",
        icon: "GH",
        href: "https://github.com/features/copilot",
        description: "Inline suggestions, chat, and repo-aware coding inside familiar IDEs.",
        tags: ["Code", "IDE"],
      },
    ];

    return shell(
      "AI Verse Tools",
      "Curated AI tools in the connected app shell",
      "tools",
      `
        <section class="cr-panel cr-tools-header">
          <div>
            <div class="cr-kicker">Tools Directory</div>
            <h1 class="cr-title cr-tools-title">AI Verse Tools</h1>
          </div>
          <div class="cr-tools-caption">A wvw.dev-inspired browsing experience inside AI Verse</div>
        </section>

        <section class="cr-tools-feature" id="featured">
          <article class="cr-panel cr-feature-banner">
            <div class="cr-feature-copy">
              <div class="cr-feature-label">Editor's Pick</div>
              <h2>ChatGPT leads the modern AI workspace.</h2>
              <p class="cr-lead">Research, writing, coding, image generation, and agentic workflows in one polished interface.</p>
              <div class="cr-feature-app">
                <div class="cr-feature-app-icon">◎</div>
                <div>
                  <div class="cr-feature-app-name">ChatGPT</div>
                  <div class="cr-feature-app-sub">OpenAI • Web, desktop, mobile</div>
                </div>
                <a class="cr-tool-link cr-feature-link" href="https://chatgpt.com" target="_blank" rel="noopener">View</a>
              </div>
            </div>
          </article>
        </section>

        <section class="cr-tools-section" id="new">
          <div class="cr-section-head">
            <h2>New & Noteworthy</h2>
            <span class="cr-section-note">Fresh tools worth trying</span>
          </div>
          <div class="cr-tool-grid">
            ${newTools.map(renderToolCard).join("")}
          </div>
        </section>

        <section class="cr-tools-section" id="popular">
          <div class="cr-section-head">
            <h2>Popular AI Tools</h2>
            <span class="cr-section-note">High-signal picks for most workflows</span>
          </div>
          <div class="cr-tool-list">
            ${popularTools.map(renderToolRow).join("")}
          </div>
        </section>

        <section class="cr-tools-section" id="builders">
          <div class="cr-section-head">
            <h2>Builder Picks</h2>
            <span class="cr-section-note">Great for shipping products faster</span>
          </div>
          <div class="cr-tool-list">
            ${builderPicks.map(renderToolRow).join("")}
          </div>
        </section>
      `,
      `
        <div class="cr-nav-list">
          <a class="cr-nav-link active" href="/tools#featured">Featured</a>
          <a class="cr-nav-link" href="/tools#new">New & Noteworthy</a>
          <a class="cr-nav-link" href="/tools#popular">Popular</a>
          <a class="cr-nav-link" href="/tools#builders">Builder Picks</a>
        </div>
        <div class="cr-sidebar-note">
          <div class="cr-nav-title">Connected Routes</div>
          <div class="cr-nav-list">
          <a class="cr-nav-link" href="/prompts">Prompt Resources</a>
          <a class="cr-nav-link" href="/chat">Chat Workspace</a>
        </div>
        </div>
      `,
      "Browse Sections"
    );
  }

  function promptsHomePage() {
    return shell(
      "AI Verse Prompts",
      "Learn and browse prompt patterns inside the app",
      "prompts",
      `
        <section class="cr-panel cr-hero">
          <div class="cr-kicker">Prompt Hub</div>
          <h1 class="cr-title">Two prompt paths, one connected app flow.</h1>
          <p class="cr-lead">Prompts now live under the same shell as Tools and Chat, so navigation feels consistent with the rest of the app instead of hopping into isolated pages.</p>
        </section>

        <section class="cr-action-grid">
          <a class="cr-action" href="/prompts/prompts-learn">
            <div class="cr-action-icon">LP</div>
            <div>
              <h3>Prompts Learn</h3>
              <p class="cr-copy">Prompting Guide–style learning with docs navigation, structured concepts, and AI Verse atmosphere.</p>
            </div>
            <div class="cr-linkline">Open learning track →</div>
          </a>
          <a class="cr-action" href="/prompts/prompts-gallery">
            <div class="cr-action-icon">PG</div>
            <div>
              <h3>Prompts Gallery</h3>
              <p class="cr-copy">Browse ready-to-adapt prompt examples for research, writing, product work, and design tasks.</p>
            </div>
            <div class="cr-linkline">Browse examples →</div>
          </a>
        </section>
      `,
      promptsSidebar("home"),
      "Prompt Routes"
    );
  }

  function promptsLearnPage() {
    return shell(
      "Prompt Engineering Guide",
      "Docs-style prompt learning inside AI Verse",
      "prompts",
      `
        <section class="cr-panel cr-hero">
          <div class="cr-kicker">Prompt Engineering Guide</div>
          <h1 class="cr-title">Prompt Engineering Guide</h1>
          <p class="cr-lead">Prompt engineering helps you understand what models do well, where they fail, and how to structure instructions so the output becomes more reliable. This route now lives inside the shared app shell, but keeps the docs-like learning structure.</p>
          <p class="cr-copy">Use strong roles, clear context, output constraints, examples, and critique loops. Prompting is not only about asking a question well. It is about designing a system the model can execute consistently.</p>
        </section>

        <section class="cr-card-grid">
          ${[
            ["Basics of Prompting", "State the task clearly, define the audience, and describe the expected output so the model has less room to guess."],
            ["Prompt Elements", "Role, context, constraints, examples, and format instructions are the main building blocks of robust prompts."],
            ["General Tips", "Reduce ambiguity, define quality, and force the model to reveal assumptions or tradeoffs when they matter."],
            ["Zero-shot Prompting", "Best for simpler tasks where examples are unnecessary and you want a direct answer."],
            ["Few-shot Prompting", "Use examples when formatting or style matters and you need the model to copy a pattern."],
            ["Chain-of-Thought", "Useful for more complex reasoning or planning tasks where decomposition improves quality."],
            ["Meta Prompting", "Ask the model to improve or critique prompts before running the final task."],
            ["Safety Guardrails", "Tell the model what to do when uncertain, missing information, or operating near risky boundaries."],
          ].map(([title, text]) => `
            <article class="cr-card">
              <h3>${title}</h3>
              <p class="cr-card-text">${text}</p>
            </article>
          `).join("")}
        </section>
      `,
      promptsSidebar("learn"),
      "Prompt Routes"
    );
  }

  function promptsGalleryPage() {
    return shell(
      "Prompt Gallery",
      "Reusable prompt patterns inside AI Verse",
      "prompts",
      `
        <section class="cr-panel cr-hero">
          <div class="cr-kicker">Prompt Examples</div>
          <h1 class="cr-title">Prompt Gallery</h1>
          <p class="cr-lead">Finished prompt patterns for common workflows, all still connected to the shared app shell and prompts navigation.</p>
        </section>

        <section class="cr-card-grid">
          ${[
            ["Research Brief Generator", "Turn notes into a concise summary, key insights, open questions, and next steps."],
            ["Landing Page Copy Prompt", "Generate headline, subheadline, value props, and CTA with a clear tone brief."],
            ["Code Review Assistant", "Push the model toward bug risk, regressions, missing tests, and edge cases."],
            ["Meeting Notes to Action Plan", "Convert rough notes into decisions, open issues, owners, and deadlines."],
            ["Design Critique Prompt", "Get focused feedback on hierarchy, clarity, interaction risk, and polish."],
            ["Prompt Refiner", "Use the model to rewrite and improve a prompt before running the real task."],
          ].map(([title, text]) => `
            <article class="cr-card">
              <h3>${title}</h3>
              <p class="cr-card-text">${text}</p>
            </article>
          `).join("")}
        </section>
      `,
      promptsSidebar("gallery"),
      "Prompt Routes"
    );
  }

  function chatPage() {
    root.innerHTML = `
      <div class="cr-shell">
        <header class="cr-topbar">
          <div class="cr-brand">
            <div class="cr-brand-mark">AI</div>
            <div class="cr-brand-copy">
              <div class="cr-brand-title">AI Verse Chat</div>
              <div class="cr-brand-sub">ChatGPT / Gemini style workspace</div>
            </div>
          </div>
          <nav class="cr-tabs">
            <button class="cr-mobile-menu" type="button" data-menu-toggle aria-label="Open menu">Menu</button>
            <a class="cr-tab" href="/tools">Tools</a>
            <a class="cr-tab" href="/prompts">Prompts</a>
            <a class="cr-tab active" href="/chat">Chat</a>
            <a class="cr-cta" href="/">Home</a>
            <button class="cr-theme" type="button" data-theme-toggle><span class="cr-theme-label">Light Mode</span></button>
          </nav>
        </header>
        <div class="cr-content">
          <div class="cr-chat-layout">
            <aside class="cr-sidebar cr-panel pad" id="customSidebar">
              <div class="cr-nav-title">Recent Chats</div>
              <div class="cr-history">
                <a class="cr-history-item active" href="/chat"><strong>Landing page redesign ideas</strong><span>Visual hierarchy, hero copy, CTA refinement</span></a>
                <a class="cr-history-item" href="/chat"><strong>Prompt library structure</strong><span>Taxonomy, filters, contributor workflow</span></a>
                <a class="cr-history-item" href="/chat"><strong>Product positioning notes</strong><span>Sharper ICP, messaging options, risks</span></a>
                <a class="cr-history-item" href="/chat"><strong>Research synthesis</strong><span>Five takeaways from AI tools market scan</span></a>
              </div>
            </aside>
            <div class="cr-overlay" id="customOverlay"></div>
            <main class="cr-chat-main">
              <section class="cr-panel cr-hero">
                <div class="cr-kicker">AI Verse Chat</div>
                <h1 class="cr-title">What can I help you build today?</h1>
                <p class="cr-lead">This route now lives inside the same app-style shell as Tools and Prompts, while keeping the familiar modern assistant layout.</p>
              </section>
              <section class="cr-suggestions">
                ${[
                  ["Compare AI Tools", "Generate a fast comparison table for tools by use case, pricing, and strengths.", "Help me compare the top AI tools for startup founders in a simple table."],
                  ["Write Landing Copy", "Create premium hero copy, subheadline, and CTA options.", "Draft a landing page hero for an AI prompt marketplace targeted at solo founders."],
                  ["Critique an Idea", "Ask for assumptions, risks, and practical next steps.", "Review this product idea and tell me the biggest risks, assumptions, and next steps."],
                  ["Structure a Prompt Library", "Transform loose ideas into categories and information architecture.", "Turn these rough notes into a structured prompt library taxonomy."],
                ].map(([title, text, prompt]) => `
                  <button class="cr-chip" type="button" data-chat-prompt="${prompt.replace(/"/g, "&quot;")}">
                    <strong>${title}</strong>
                    <span class="cr-copy">${text}</span>
                  </button>
                `).join("")}
              </section>
              <section class="cr-chat-thread">
                <div class="cr-row">
                  <div class="cr-avatar ai">AI</div>
                  <div class="cr-bubble ai">
                    <p>I can help with product strategy, prompt design, tool comparisons, copywriting, and UX direction.</p>
                    <p>If you want this connected to a real model later, this layout is already organized in a way that can map cleanly to streamed assistant and user messages.</p>
                  </div>
                </div>
                <div class="cr-row">
                  <div class="cr-avatar user">You</div>
                  <div class="cr-bubble user">
                    <p>Help me design a premium AI tools directory that feels more curated than a generic list.</p>
                  </div>
                </div>
                <div class="cr-row">
                  <div class="cr-avatar ai">AI</div>
                  <div class="cr-bubble ai">
                    <p>Start by treating curation as the product, not just the inventory.</p>
                    <ul>
                      <li>Show fewer, higher-confidence recommendations before showing the long tail.</li>
                      <li>Group tools by user intent, such as “ship faster,” “research faster,” or “create visuals.”</li>
                      <li>Use editorial notes so every featured tool feels selected, not dumped into a database.</li>
                      <li>Give comparison views and prompt examples so the directory becomes actionable.</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section class="cr-panel cr-composer">
                <textarea id="chatInput" placeholder="Message AI Verse Chat..."></textarea>
                <div class="cr-composer-footer">
                  <div class="cr-tags">
                    <span class="cr-tag">Deep Research</span>
                    <span class="cr-tag">Prompt Help</span>
                    <span class="cr-tag">Product Critique</span>
                  </div>
                  <button class="cr-send" type="button">Send →</button>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    `;
  }

  const pages = {
    "/tools": toolsPage,
    "/prompts": promptsHomePage,
    "/prompts/prompts-learn": promptsLearnPage,
    "/prompts/prompts-gallery": promptsGalleryPage,
    "/chat": chatPage,
  };

  const render = pages[path];
  if (!render) return;

  if (path !== "/chat") {
    root.innerHTML = render();
  } else {
    render();
  }

  const storedTheme = localStorage.getItem("custom-route-theme") || "dark";
  applyTheme(storedTheme);

  const themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  const sidebar = document.getElementById("customSidebar");
  const overlay = document.getElementById("customOverlay");
  const menuToggle = document.querySelector("[data-menu-toggle]");

  if (menuToggle && sidebar && overlay) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("open");
    });

    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("open");
    });
  }

  const chatInput = document.getElementById("chatInput");
  document.querySelectorAll("[data-chat-prompt]").forEach((chip) => {
    chip.addEventListener("click", () => {
      if (!chatInput) return;
      chatInput.value = chip.dataset.chatPrompt || "";
      chatInput.focus();
    });
  });
})();
