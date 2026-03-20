import { initHome } from "../pages/home.js";
import { loadLayout } from "./layout.js";

const init = async () => {
  loadLayout();
  const path = window.location.pathname;
  if (path === "/" || path.includes("index.html")) {
    initHome();
  } 
  else if (path.includes("product.html")) {
    initHome();
  }
};

init();
