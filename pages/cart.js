import {
  getCart,
  addToCart,
  decreaseQty,
  getGrandTotal,
} from "../utils/cart.js";

const container = document.getElementById("cart-container");

export const renderCart = () => {
  const cart = getCart();

  if (!cart.length) {
    container.innerHTML = "<h2>Cart is empty</h2>";
    return;
  }

  container.innerHTML = "";

  cart.forEach((item) => {
    const { name, price, quantity, url } = item;
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `<div class="cart-image-div"> <img src="${url}" class="cart-image"/>  </div>  
    <div class="cart-details">

  <div class="cart-name">${name} </div>

  <div class="cart-price">$${price}</div>

  <div class="cart-quantity">
    ${
      quantity == 1
        ? `<button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>`
        : `<button class="decrease-btn">-</button>`
    }
    <span>${quantity}</span>
    <button class="add-btn">+</button>
  </div>

  <div class="cart-total">$${(price * quantity).toFixed(2)}</div></div>`;

    // 🔥 Attach listeners with access to full item
    div.querySelector(".add-btn").addEventListener("click", () => {
      addToCart(item); // full item passed
      renderCart();
    });

    div.querySelector(".decrease-btn")?.addEventListener("click", () => {
      decreaseQty(item);
      renderCart();
    });
    div.querySelector(".delete-btn")?.addEventListener("click", () => {
      decreaseQty(item);
      renderCart();
    });

    container.appendChild(div);
  });
  const totalDiv = document.createElement("div");
  totalDiv.classList.add("total-div")
  totalDiv.innerHTML = `<span class="cart-grand-total">Grand Total: </span>$${getGrandTotal().toFixed(2)}`;
  container.appendChild(totalDiv);
};
