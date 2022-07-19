let cart = [];
let cartFinished = [];
let catalog = document.querySelector("#catalog");

function closeCart() {
  cartDOM.el.classList.add("hidden");
  cartDOM.iconCart.classList.remove("hidden");
  cartDOM.iconCross.classList.add("hidden");
}

catalog.addEventListener("click", (event) => {
  closeCart();
  if (event.target.closest("[data-add]")) {
    let productToCart = {
      id: event.target.closest("[data-add]").getAttribute("id"),
      imgSrc: event.target
        .closest(".card")
        .querySelector(".card__img")
        .getAttribute("src"),
      name: event.target.closest(".card").querySelector(".card__name")
        .innerHTML,
      price: event.target.closest(".card").querySelector(".card__price")
        .innerHTML,
      amound: 1,
    };

    if (cart.includes(productToCart.id)) {
      console.log("already in cart!");
      for (let i = 0; i < cartFinished.length; i++) {
        if (cartFinished[i].id === productToCart.id) {
          cartFinished[i].amound += 1;
          console.log(cartFinished);
        }
      }
    } else {
      cart.push(productToCart.id);
      cartFinished.push(productToCart);
      console.log(cartFinished);
    }
  }
});
