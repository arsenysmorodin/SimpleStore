getProductsData();

let products = null;

async function getProductsData() {
  const response = await fetch(`../js/products.json`);
  const productsData = await response.json();

  renderCatalog(productsData);

  products = productsData;
}

function renderCatalog(productsData) {
  let HTMLTemplate = ``;

  productsData.forEach((product) => {
    let cardTemplate = `
      <div class="card">
        <img src="${product.imgSrc}" class="card__img" alt="" height="500" width="300"/>
        <span class="card__name">${product.name}</span>
        <div class="card__bottom">
          <span class="card__price">${product.price}</span>
          <button class="card__button" data-add id="${product.id}">
            <i class="fi fi-br-shopping-cart-add"></i>
          </button>
        </div>
      </div>`;
    HTMLTemplate += cardTemplate;
  });

  const catalogEl = document.querySelector("#catalog");
  catalogEl.innerHTML = HTMLTemplate;
}
