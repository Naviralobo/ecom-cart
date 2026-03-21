import { updateCartCount } from "../utils/cart.js";

export const initNavigation = () => {
  const navLinks = document.querySelectorAll(".nav-list a");

  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-link");
    }
  });

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  const cartIcon = document.getElementById("cart-icon");
  cartIcon.addEventListener(
    "click",
    () => (window.location.href = "./cart.html"),
  );

  updateCartCount()
};
