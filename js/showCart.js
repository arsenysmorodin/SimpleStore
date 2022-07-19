const cartDOM = {
  button: document.querySelector("#cart-button"),
  iconCart: document.querySelector("#icon-cart"),
  iconCross: document.querySelector("#icon-cross"),
  el: document.querySelector("#cart"),
};

cartDOM.button.addEventListener("click", (event) => {
  cartDOM.el.classList.toggle("hidden");
  cartDOM.iconCart.classList.toggle("hidden");
  cartDOM.iconCross.classList.toggle("hidden");
  renderCart();
});
