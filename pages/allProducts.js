import { products } from "../data/product.js";

export const initProducts = () => {
  const mainContent = document.querySelector("main");

  // Dynamically create product cards and append them to the main content
  const productSection = document.createElement("section");

  //   productSection.innerHTML = "<h2>Featured Products</h2>";

  productSection.setAttribute("class", "products-section");

  const productGrid = document.createElement("div");

  productGrid.setAttribute("class", "product-grid");

  productGrid.setAttribute("id", "products-container");

  mainContent.appendChild(productSection);

  productSection.appendChild(productGrid);

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
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
