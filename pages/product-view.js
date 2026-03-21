import { products } from "../data/product.js";
import { getCart, addToCart, decreaseQty } from "../utils/cart.js";

export const initProduct = () => {
  const params = new URLSearchParams(window.location.search);
  const productId = Number(params.get("id"));

  const product = products.find((p) => p.id === productId);
  const container = document.getElementById("product-view");

  if (!product) {
    container.innerHTML = "<h2>Product not found</h2>";
    return;
  }

  const render = () => {
    const cart = getCart();
    const existing = cart.find((p) => p.id === product.id);

    const { url, name, price, description, stock, discount } = product;

    container.innerHTML = `
      <div class="detail-container">
        <img src="${url}" alt="${name}" />

        <div class="product-details">
          <h1>${name}</h1>
          <p class="price">$${price}</p>

          ${
            discount
              ? `<span class="discount-detail">-${discount}% </span> 
                 <span class="deal-text">Limited Time offer</span>`
              : ""
          }

          <p class="desc">${description}</p>
          <p class="stock">Stock: ${stock}</p>

          ${
            !existing
              ? `<button class="add-btn">Add to Cart</button>`
              : `
                <div class="qty-container">
                  <button class="decrease-btn">
                    ${existing.quantity === 1 ? "🗑" : "-"}
                  </button>

                  <span class="qty">${existing.quantity}</span>

                  <button class="increase-btn">+</button>
                </div>
              `
          }
        </div>
      </div>
    `;

    attachEvents(existing ? existing : product);
  };

  const attachEvents = (product) => {
    const addBtn = document.querySelector(".add-btn");
    const increaseBtn = document.querySelector(".increase-btn");
    const decreaseBtn = document.querySelector(".decrease-btn");

    if (addBtn) {
      addBtn.addEventListener("click", () => {
        console.log(product);
        addToCart(product);
        render();
      });
    }

    if (increaseBtn) {
      increaseBtn.addEventListener("click", () => {
        addToCart(product);
        render();
      });
    }

    if (decreaseBtn) {
      console.log("decrease btn")
      decreaseBtn.addEventListener("click", () => {
        decreaseQty(product);
        render();
      });
    }
  };

  render();
};
