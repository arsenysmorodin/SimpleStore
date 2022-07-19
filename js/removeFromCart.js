cartDOM.el.addEventListener("click", (event) => {
  if (event.target.closest("[data-remove]")) {
    let productId = event.target.closest("[data-remove]").getAttribute("id");
    console.log(productId);
    // let productId = productIdEl.getAttribute("id");

    cartFinished.forEach((el, index) => {
      if (el.id === productId) {
        cartFinished.splice(index, 1);
        renderCart();
      }
    });
  }
});
