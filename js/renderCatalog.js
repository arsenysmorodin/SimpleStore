getProductsData();

async function getProductsData() {
  const response = await fetch(`../js/products.json`);
  const productsData = await response.json();

  render(productsData);
}

function render(productsData) {
  let HTMLTemplate = ``;

  productsData.forEach((product) => {
    let cardTemplate = `
      <div class="card">
        <img src="${product.imgSrc}" class="card__img" alt="" height="500" width="300"/>
        <span class="card__name">${product.name}</span>
        <div class="card__bottom">
          <span class="card__price">${product.price}</span>
          <button class="card__button" id="${product.id}">
            <i class="fi fi-br-shopping-cart-add"></i>
          </button>
        </div>
      </div>`;
    HTMLTemplate += cardTemplate;
  });

  const catalogEl = document.querySelector("#catalog");
  catalogEl.innerHTML = HTMLTemplate;
}
