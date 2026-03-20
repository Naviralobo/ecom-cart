const loadComponent = async (path, id) => {
  const res = await fetch(path);
  const html = await res.text();

  document.getElementById(id).innerHTML = html;
};

export const loadLayout = async () => {
  await loadComponent("../components/header.html", "header");
  await loadComponent("../components/footer.html", "footer");

  // only for homepage include the hero banner
  const path = window.location.pathname;
  if (path === "/" || path.includes("index.html")) {
    await loadComponent("../components/hero.html", "hero");
  }
};
