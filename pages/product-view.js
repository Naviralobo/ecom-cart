import { products } from "../data/product.js";

export const initProduct = () => {
  console.log("in productjs");
  // Get ID from URL
  const params = new URLSearchParams(window.location.search);
  const productId = Number(params.get("id"));

  // Find product
  const product = products.find((p) => p.id === productId);

  const container = document.getElementById("product-view");

  if (!product) {
    container.innerHTML = "<h2>Product not found</h2>";
  } else {
    const { url, name, price, description, stock, discount } = product;
    container.innerHTML = `
    <div class="detail-container">
      <img src="${url}" alt="${name}" />

      <div class="product-details">
        <h1>${name}</h1>
        <p class="price">$${price}</p>

        ${discount ? `<span class="discount-detail">-${discount}% </span> <span class="deal-text">Limited Time offer</span>` : ""}

        <p class="desc">${description}</p>
        <p class="stock">Stock: ${stock}</p>

        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  `;
  }
};
