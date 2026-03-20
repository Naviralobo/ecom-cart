import { initProducts } from "../pages/allProducts.js";
import { initHome } from "../pages/home.js";
import { initOffers } from "../pages/offers.js";
import { loadLayout } from "./layout.js";
import { initNavigation } from "./navigation.js";

const init = async () => {
  await loadLayout(); //load header and footer and (hero if homepage)
  initNavigation(); //load navigation in header

  document.body.classList.add("loaded");

  const path = window.location.pathname;
  if (path === "/" || path.includes("index.html")) {
    initHome();
  } else if (path.includes("offers.html")) {
    initOffers();
  }else if (path.includes("products.html")) {
    initProducts();
  }
};

init()