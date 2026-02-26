const mainContent = document.querySelector("main");

// Create an array of product objects with name, price, and id
const products = [
  {
    name: "Classic Shoes",
    price: "49.99",
    id: 1,
    url: "https://sp.yimg.com/ib/th?id=OPHS.23JNfS%2b936EJYQ474C474&o=5&pid=21.1&w=174&h=174",
  },
  {
    name: "Smart Watch",
    price: "99.99",
    id: 2,
    url: "https://tse4.mm.bing.net/th/id/OIP.jeMDSHZLTaBYjUFBQOs4yQHaHa?pid=Api&h=220&P=0",
  },
  {
    name: "Wireless Earbuds",
    price: "59.99",
    id: 3,
    url: "https://tse1.mm.bing.net/th/id/OIP.ckTRBo0NGnwHoW6S58EeIAHaGq?pid=Api&h=220&P=0",
  },
  {
    name: "Laptop",
    price: "1299.99",
    id: 4,
    url: "https://www.gadgetbridge.com/wp-content/uploads/2024/07/HP-OmniBook-X-Image-2.webp",
  },
  {
    name: "Tshirt",
    price: "19.99",
    id: 5,
    url: "https://tse1.mm.bing.net/th/id/OIP.3QXa55WhZU34tH7_28P6VwHaJ4?pid=Api&h=220&P=0",
  },
  {
    name: "Backpack",
    price: "39.99",
    id: 6,
    url: "https://tse4.mm.bing.net/th/id/OIP.CR3L_VpP_6xBmxDCj95V-QHaJh?pid=Api&h=220&P=0",
  },
];

// Dynamically create product cards and append them to the main content
const productSection = document.createElement("section");

productSection.innerHTML = "<h2>Featured Products</h2>";

productSection.setAttribute("class", "products-section");

const productGrid = document.createElement("div");

productGrid.setAttribute("class", "product-grid");

productGrid.setAttribute("id", "products-container");

mainContent.appendChild(productSection);

productSection.appendChild(productGrid);

for (let i = 0; i < products.length; i++) {
  const productCard = document.createElement("div");
  productCard.setAttribute("class", "product-card");
  productCard.setAttribute("data-id", products[i].id);
  productCard.innerHTML = `
    <h3>${products[i].name}</h3>
    <img src="${products[i].url}" alt="${products[i].name}" class="product-image" />
    <p>Price: $${products[i].price}</p>
    <div>Quantity: <input class="quantity-input" type="number" min="1" value="1" class="quantity-input" /></div>
    <button data-id="${products[i].id}" >Add to Cart</button>
    `;
  productGrid.appendChild(productCard);
}

// Create a cart section to display added products
const cartSection = document.createElement("div");
cartSection.setAttribute("class", "cart-section");
cartSection.innerHTML =
  "<h2 class='cart-head'>Cart Items</h2><p id='no-products'>No products in cart yet.</p>";
productGrid.after(cartSection);

const cartList = document.createElement("div");
cartList.setAttribute("id", "cart-list");
cartSection.appendChild(cartList);

// Add event listener to handle adding products to the cart
const cartArray = [];

productGrid.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const productId = event.target.getAttribute("data-id");
    const quantityInput =
      event.target.previousElementSibling.querySelector(".quantity-input");
    const quantity = parseInt(quantityInput.value);
    addItemsToCartArray(productId, quantity);
  }
});

function addItemsToCartArray(productId, quantity) {
  const product = products.find((p) => p.id == productId);
  if (!product) return;
  const inCart = cartArray.find((item) => item.id == productId);
  if (inCart) {
    inCart.quantity = quantity;
  } else {
    cartArray.push({ ...product, quantity });
  }
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  if (cartArray.length === 0) {
    document.getElementById("no-products").style.display = "block";
    document.querySelector(".cart-count").style.display = "none";
  } else {
    document.getElementById("no-products").style.display = "none";
    document.querySelector(".cart-count").style.display = "block";

    cartArray.forEach((item) => {
      addCartItemToDisplay(item);
    });
  }

  addTotalPriceToDisplay(cartArray, cartList);

  document.querySelector(".cart-count").textContent = cartArray.length;
}

function addCartItemToDisplay(item) {
  const cartItem = document.createElement("div");
  cartItem.setAttribute("class", "cart-item");
  cartItem.innerHTML = `
  <div class="cart-item-container">
    <h4>${item.name}</h4>
    <div>
    <p>Quantity: ${item.quantity}</p>
    <p>Price: $${item.price}</p>
    <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  </div>
  `;
  cartList.appendChild(cartItem);
}

function addTotalPriceToDisplay(cartArray, cartList) {
  const totalPrice = cartArray.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const totalPriceElement = document.createElement("div");
  totalPriceElement.classList.add("total-price");
  totalPriceElement.innerHTML = `<h3>Total Price:</h3><p>$${totalPrice.toFixed(2)}</p>`;
  cartList.appendChild(totalPriceElement);
}
