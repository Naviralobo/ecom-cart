import { initProducts } from "../pages/product.js";
import { loadLayout } from "./components/layout.js";

const init = async () => {
  loadLayout();
  const path = window.location.pathname;
  initProducts();
};

init();
