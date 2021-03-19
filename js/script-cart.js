const mainContent = document.querySelector("main");
const cartLink = document.querySelector(".cart-link");
const cartCounter = document.getElementById("cartCounter");
const modalAddedToCart = document.getElementById("modalAddedToCart");
const modalCartCloseButton = document.getElementById("modalCartCloseButton");
const modalCartCloseLink = document.querySelector(
  ".product-added-to-cart-buttons .button--white"
);

function isCartEmpty() {
  if (Number(cartCounter.innerText)) {
    cartLink.classList.add("cart-link--added");
  } else {
    return;
  }
}

isCartEmpty();

function modalCartOpen() {
  modalAddedToCart.style.display = "block";
}

function modalCartClose() {
  modalAddedToCart.style.display = "none";
}

mainContent.addEventListener("click", function (e) {
  const isAddToCartButton = e.target.classList.contains(
    "product-item-buy-button"
  );
  if (isAddToCartButton) {
    cartCounter.innerText = Number(cartCounter.innerText) + 1;
    modalCartOpen();
    isCartEmpty();
    modalAddedToCart.focus();
  }
});

modalCartCloseButton.addEventListener("click", modalCartClose);
modalCartCloseLink.addEventListener("click", modalCartClose);
