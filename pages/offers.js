import { products } from "../data/product.js";

export const initOffers = () => {
  const mainContent = document.querySelector("main");

  // Dynamically create product cards and append them to the main content
  const productSection = document.createElement("section");

  productSection.innerHTML = "<h2>Offers and Deals</h2>";

  productSection.setAttribute("class", "products-section");

  const productGrid = document.createElement("div");

  productGrid.setAttribute("class", "product-grid");

  productGrid.setAttribute("id", "products-container");

  mainContent.appendChild(productSection);

  productSection.appendChild(productGrid);

  let offerProducts = products.filter((p) => p.hasOwnProperty("discount"));

  // Function to render products
  const renderProducts = (productsList) => {
    productGrid.innerHTML = ""; //
    productsList.forEach((product) => {
      const { price, discount, name, url, id } = product;

      //calculate mrp based on discount
      const mrp = (price / (1 - discount / 100)).toFixed(2);

      const productCard = document.createElement("div");
      productCard.className = "product-card offer-card";
      productCard.dataset.id = id;

      productCard.innerHTML = `
       <h3>${name}</h3>
       <img src="${url}" alt="${name}" class="product-image" />
       <div class="discount-label">
         <span class="discount-amt"> - ${discount}% </span>
         <span class="deal-text">Limited time deal</span>
       </div>
       <div>$${price} <span class="mrp">M.R.P<span> <span class="mrp-text">$${mrp}</span></div>
`;

      productCard.addEventListener("click", () => {
        window.location.href = `/product.html?id=${id}`;
      });

      productGrid.appendChild(productCard);
    });
  };

  renderProducts(offerProducts);
};
