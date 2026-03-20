import { products } from "../data/product.js";

export const initHome = () => {
  const mainContent = document.querySelector("main");

  // Dynamically create product cards and append them to the main content
  const productSection = document.createElement("section");

  productSection.innerHTML = "<h2>Featured Products</h2>";

  productSection.setAttribute("class", "products-section");

  const productGrid = document.createElement("div");

  productGrid.setAttribute("class", "product-grid");

  productGrid.setAttribute("id", "products-container");

  mainContent.appendChild(productSection);

  productSection.appendChild(productGrid);

  const homepageProducts = products.filter((p) => p.inHomePage);

  for (let i = 0; i < homepageProducts.length; i++) {
    const product = homepageProducts[i];
    const productCard = document.createElement("div");

    const { name, url, price, id } = product;

    productCard.setAttribute("class", "product-card");
    productCard.setAttribute("data-id", id);

    productCard.innerHTML = `
    <h3>${name}</h3>
    <img src="${url}" alt="${name}" class="product-image" />
    <p>Price: $${price}</p>
    <button data-id="${id}" >View Product</button>
    `;
    productCard.addEventListener(
      "click",
      () => (window.location.href = `/product.html?id=${id}`),
    );

    productGrid.appendChild(productCard);
  }

  const button = document.getElementById("shopNowBtn");
  button.addEventListener("click", () => {
    window.location.href = "/products.html";
  });
};
