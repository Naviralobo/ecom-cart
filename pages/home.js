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

    productCard.setAttribute("class", "product-card");
    productCard.setAttribute("data-id", product.id);

    productCard.innerHTML = `
    <h3>${product.name}</h3>
    <img src="${product.url}" alt="${product.name}" class="product-image" />
    <p>Price: $${product.price}</p>
    <button data-id="${product.id}" >View Product</button>
    `;

    const button = productCard.querySelector("button");

    button.addEventListener(
      "click",
      () => (window.location.href = `/product.html?id=${product.id}`),
    );

    productGrid.appendChild(productCard);
  }

  productGrid.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const productId = event.target.getAttribute("data-id");
      const quantityInput =
        event.target.previousElementSibling.querySelector(".quantity-input");
      const quantity = parseInt(quantityInput.value);
      addItemsToCartArray(productId, quantity);
    }
  });
};
