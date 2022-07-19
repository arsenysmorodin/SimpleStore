function renderCart() {
  let cartTemplate = "";
  if (cartFinished.length === 0) {
    cartEmptyText = `
        <div class="cart__empty-text">
          <span> Your cart is empty.</span>
          <a href="#catalog" class="cart__link">Let's buy some clothes!</a>
        </div>`;
    cartTemplate += cartEmptyText;
  } else {
    cartFinished.forEach((el) => {
      let cartProductTemplate = `
      <div class="cart-product">
        <img src="${el.imgSrc}" class="cart-product__img" alt="" height="125" width="75"/>
        <div class="cart-product__content">
          <span class="cart-product__name">${el.name}</span>
          <div class="cart-product__bottom">
            <span class="cart-product__price">${el.price}</span>
            <span class="cart-product__amound">${el.amound}</span>
            <button class="cart-product__button" data-remove id="${el.id}">
              <i class="fi fi-br-trash"></i>
            </button>
          </div>
        </div>
      </div>`;
      cartTemplate += cartProductTemplate;
    });
  }

  cartDOM.el.innerHTML = cartTemplate;
}
