const navEl = document.querySelector("#nav");

navEl.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-category")) {
    let category = event.target.dataset.category;
    let filteredCatalog = products.filter((el) => el.category === category);
    renderCatalog(filteredCatalog);
  }
});
