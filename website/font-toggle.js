(() => {
  const toggle = document.querySelector(".font-toggle");
  const key = "ginga-koro-font";
  const filePreview = location.protocol === "file:";
  const siteLinks = filePreview
    ? [...document.querySelectorAll('a[href]:not([href^="#"])')].map(link => [link, new URL(link.href)])
      .filter(([, url]) => url.protocol === "file:" && url.pathname.endsWith("/index.html"))
    : [];

  function savedFont() {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function applyFont(prism) {
    document.documentElement.dataset.siteFont = prism ? "prism" : "default";
    toggle.setAttribute("aria-checked", String(prism));
    for (const [link, url] of siteLinks) {
      url.searchParams.set("font", prism ? "prism" : "default");
      link.href = url.href;
    }
  }

  const selected = new URL(location.href).searchParams.get("font") ?? savedFont();
  applyFont(selected === "prism");
  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    const prism = toggle.getAttribute("aria-checked") !== "true";
    applyFont(prism);
    const value = prism ? "prism" : "default";
    try {
      localStorage.setItem(key, value);
    } catch {
      // The switch still works when storage is disabled.
    }
    const url = new URL(location.href);
    if (filePreview || url.searchParams.has("font")) {
      url.searchParams.set("font", value);
      try {
        history.replaceState(null, "", url);
      } catch {
        // Local browser policies can disallow URL changes.
      }
    }
  });
})();
