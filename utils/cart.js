export const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];
export const setCart = (cart) =>
  localStorage.setItem("cart", JSON.stringify(cart));

export const addToCart = (product) => {
  const cart = getCart();
  const existing = cart.find((p) => p.id === product.id);

  if (existing) existing.quantity += 1;
  else cart.push({ ...product, quantity: 1 });

  setCart(cart);
  updateCartCount();
};

// decrase quantity or remove if quantity===1
export const decreaseQty = (product) => {
  const cart = getCart();
  let updatedCart = cart;
  const existing = cart.find((p) => p.id === product.id);
  console.log(existing, existing.quantity === 1);
  if (!existing) return;
  else if (existing.quantity === 1) {
    updatedCart = cart.filter((p) => p.id !== product.id);
  } else {
    existing.quantity -= 1;
  }
  setCart(updatedCart);
  updateCartCount();
};

export const getCartCount = () => {
  const cart = getCart();
  return cart.reduce((total, item) => (total += item.quantity), 0);
};

export const getGrandTotal = () => {
  const cart = getCart();
  return cart.reduce((total, item) => (total += item.quantity * item.price), 0);
};

export const updateCartCount = () => {
  const cartCount = getCartCount();

  const cartCountEl = document.getElementById("cart-count");

  if (!cartCountEl) return;
  cartCountEl.innerText = cartCount;

  cartCount > 0
    ? cartCountEl.classList.remove("hidden")
    : cartCountEl.classList.add("hidden");
};
