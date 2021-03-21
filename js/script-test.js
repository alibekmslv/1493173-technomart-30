const productSortTypeButtons = document.querySelectorAll(
  ".product-sort-type button"
);
const productSortDirectionButtons = document.querySelectorAll(
  ".product-sort-direction button"
);

if (productSortTypeButtons) {
  for (const button of productSortTypeButtons) {
    button.addEventListener("click", function (e) {
      if (e.target.classList.contains("product-sort-type-button--active")) {
        return;
      } else {
        productSortTypeButtons.forEach(function (item) {
          item.classList.remove("product-sort-type-button--active");
        });
        e.target.classList.add("product-sort-type-button--active");
      }
    });
  }
}

if (productSortDirectionButtons) {
  for (const button of productSortDirectionButtons) {
    button.addEventListener("click", function (e) {
      if (
        e.target.classList.contains("product-sort-direction-button--active")
      ) {
        return;
      } else {
        productSortDirectionButtons.forEach(function (item) {
          item.classList.remove("product-sort-direction-button--active");
        });
        e.target.classList.add("product-sort-direction-button--active");
      }
    });
  }
}
