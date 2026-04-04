(function () {
  function setLabel(link, text) {
    const textNode = [...link.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (textNode) {
      textNode.textContent = text;
      return;
    }

    const spans = link.querySelectorAll("span");
    if (spans.length > 0) {
      spans[spans.length - 1].textContent = text;
      return;
    }

    link.textContent = text;
  }

  function injectToolsLink() {
    // The mirrored homepage is bundled/minified, so we extend the
    // header after render instead of trying to rewrite the bundle.
    const anchors = [...document.querySelectorAll('a[href="/about"], a[href="/compare"], a[href="/weekly"], a[href="/lab"]')];

    anchors.forEach((anchor) => {
      const container = anchor.parentElement;
      if (!container || container.querySelector('a[href="/tools"]')) return;

      const clone = anchor.cloneNode(true);
      clone.href = "/tools";
      clone.removeAttribute("aria-current");
      setLabel(clone, "Tools");
      anchor.insertAdjacentElement("afterend", clone);
    });
  }

  const observer = new MutationObserver(injectToolsLink);
  observer.observe(document.documentElement, { childList: true, subtree: true });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectToolsLink);
  } else {
    injectToolsLink();
  }
})();
