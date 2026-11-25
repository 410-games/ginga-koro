(() => {
  const nav = document.querySelector(".promo-topbar .reference-toplinks");
  if (!nav) return;

  const path = window.location.pathname;
  const isShared = path.includes("/campaigns/shared/");
  const isInterface = path.includes("/campaigns/interface/");
  const isDevelopment = path.includes("/development/");
  const isHome = !isShared && !isInterface && !isDevelopment;
  const root = isShared || isInterface ? "../../" : isDevelopment ? "../" : "";
  const home = `${root}index.html`;
  const pages = [
    { label: "Gameplay", href: `${home}#gameplay`, section: "gameplay" },
    { label: "Campaigns", href: `${home}#campaigns`, section: "campaigns" },
    { label: "Ships", href: `${home}#ships`, section: "ships" },
    { label: "Weapons", href: `${home}#weapons`, section: "weapons" },
    { label: "The craft", href: `${home}#craft`, section: "craft" },
    { label: "Shared art", href: `${root}campaigns/shared/index.html`, page: isShared },
    { label: "Interface", href: `${root}campaigns/interface/index.html`, page: isInterface },
  ];

  nav.replaceChildren(...pages.map(({ label, href, section, page }) => {
    const link = document.createElement("a");
    link.className = "reference-back site-nav-link";
    link.href = href;
    link.textContent = label;
    if (section) link.dataset.section = section;
    if (page) link.setAttribute("aria-current", "page");
    return link;
  }));

  const brand = document.querySelector(".promo-topbar [data-home-link]");
  const links = [...nav.querySelectorAll("a")];
  const activate = (activeLink) => {
    links.forEach((link) => link.removeAttribute("aria-current"));
    brand?.removeAttribute("aria-current");
    if (activeLink) activeLink.setAttribute("aria-current", isHome ? "location" : "page");
    else if (isHome) brand?.setAttribute("aria-current", "page");
  };

  if (!isHome) return;

  const sections = pages
    .filter(({ section }) => section)
    .map(({ section }) => document.getElementById(section))
    .filter(Boolean);
  const updateActiveSection = () => {
    const marker = Math.min(window.innerHeight * 0.38, 300);
    if (sections[0].getBoundingClientRect().top > marker) {
      activate(null);
      return;
    }
    let current = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= marker) current = section;
    });
    activate(nav.querySelector(`[data-section="${current.id}"]`));
  };

  nav.addEventListener("click", (event) => {
    const link = event.target.closest("[data-section]");
    if (link) activate(link);
  });
  window.addEventListener("scroll", updateActiveSection, { passive: true });
  window.addEventListener("resize", updateActiveSection);
  window.addEventListener("hashchange", updateActiveSection);
  updateActiveSection();
})();
