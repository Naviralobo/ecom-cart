import { initProducts } from "../pages/allProducts.js";
import { renderCart } from "../pages/cart.js";
import { initHome } from "../pages/home.js";
import { initOffers } from "../pages/offers.js";
import { initProduct } from "../pages/product-view.js";
import { updateCartCount } from "../utils/cart.js";
import { loadLayout } from "./layout.js";
import { initNavigation } from "./navigation.js";
import { initSubscribe } from "./subscription.js";

const init = async () => {
  await loadLayout(); //load header and footer and (hero if homepage)
  initNavigation(); //load navigation in header
  initSubscribe();

  // update cart count in header
  document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
  });

  //just for smooth transition oon page change
  document.body.classList.add("loaded");

  const path = window.location.pathname;
  if (path === "/" || path.includes("index.html")) {
    initHome();
  } else if (path.includes("offers.html")) {
    initOffers();
  } else if (path.includes("products.html")) {
    initProducts();
  } else if (path.includes("product.html")) {
    initProduct();
  } else if (path.includes("cart.html")) {
    renderCart();
  }
};

init();
