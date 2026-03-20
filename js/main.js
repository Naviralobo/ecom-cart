import { initHome } from "../pages/home.js";
import { loadLayout } from "./layout.js";
import { initNavigation } from "./navigation.js";

const init = async () => {
  await loadLayout(); //load header and footer and (hero if homepage)
  initNavigation(); //load navigation in header

  document.body.classList.add("loaded");

  const path = window.location.pathname;
  if (path === "/" || path.includes("index.html")) {
    initHome();
  }
};

init();
