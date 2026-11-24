(() => {
  const toggle = document.querySelector(".gba-mode-toggle");
  if (!toggle) return;
  const key = "ginga-koro-gba-mode";
  const filePreview = location.protocol === "file:";
  const siteLinks = [...document.querySelectorAll('a[href]:not([href^="#"])')].map(link => [link, new URL(link.href)])
    .filter(([, url]) => url.pathname.endsWith("/index.html") && (filePreview ? url.protocol === "file:" : url.origin === location.origin));
  const images = [...document.querySelectorAll("img[data-gba-src]")];

  for (const image of images) {
    image.dataset.gbaOriginalSrc = image.getAttribute("src") || "";
    if (image.hasAttribute("srcset")) image.dataset.gbaOriginalSrcset = image.getAttribute("srcset") || "";
  }

  function savedMode() {
    try { return localStorage.getItem(key); } catch { return null; }
  }

  function applyMode(enabled, carryState) {
    document.documentElement.classList.toggle("gba-mode-active", enabled);
    document.documentElement.dataset.gbaMode = enabled ? "on" : "off";
    toggle.setAttribute("aria-checked", String(enabled));
    for (const image of images) {
      if (enabled) {
        image.removeAttribute("srcset");
        image.setAttribute("src", image.dataset.gbaSrc);
      } else {
        image.setAttribute("src", image.dataset.gbaOriginalSrc);
        if (image.dataset.gbaOriginalSrcset) image.setAttribute("srcset", image.dataset.gbaOriginalSrcset);
      }
    }
    if (carryState) {
      for (const [link, url] of siteLinks) {
        url.searchParams.set("gba", enabled ? "on" : "off");
        link.href = url.href;
      }
    }
  }

  const requested = new URL(location.href).searchParams.get("gba");
  const stored = savedMode();
  const selected = requested === "on" ? true : requested === "off" ? false : stored === "on";
  applyMode(selected, filePreview || requested !== null || stored !== null);
  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    const enabled = toggle.getAttribute("aria-checked") !== "true";
    applyMode(enabled, true);
    try { localStorage.setItem(key, enabled ? "on" : "off"); } catch { /* URL propagation still works in local previews. */ }
    const url = new URL(location.href);
    if (filePreview || url.searchParams.has("gba")) {
      url.searchParams.set("gba", enabled ? "on" : "off");
      try { history.replaceState(null, "", url); } catch { /* Local browser policies may prevent URL updates. */ }
    }
  });
})();
