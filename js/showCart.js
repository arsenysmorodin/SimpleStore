let cartButton = document.querySelector("#cart-button");
let iconCart = cartButton.querySelector("#icon-cart");
let iconCross = cartButton.querySelector("#icon-cross");
let cartEl = document.querySelector("#cart");

cartButton.addEventListener("click", (event) => {
  cartEl.classList.toggle("hidden");
  iconCart.classList.toggle("hidden");
  iconCross.classList.toggle("hidden");
});
