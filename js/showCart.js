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

function renderCart() {
  let cartTemplate = "";

  cartFinished.forEach((el) => {
    let cartProductTemplate = `
    <div class="cart-product">
      <img src="${el.imgSrc}" class="cart-product__img" alt="" height="125" width="75"/>
      <div class="cart-product__content">
        <span class="cart-product__name">${el.name}</span>
        <div class="cart-product__bottom">
          <span class="cart-product__price">${el.price}</span>
          <span class="cart-product__amound">${el.amound}</span>
          <button class="cart-product__button" id="${el.id}">
            <i class="fi fi-br-trash"></i>
          </button>
        </div>
      </div>
    </div>`;
    cartTemplate += cartProductTemplate;
  });
  cartDOM.el.innerHTML = cartTemplate;

  console.log("cart finished:", cartFinished);
}
