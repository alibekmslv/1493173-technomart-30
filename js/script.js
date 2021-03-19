const modalFeedbackTrigger = document.getElementById("modalFeedbackTrigger");
const modalFeedback = document.getElementById("modalFeedback");
const modalFeedbackClose = document.getElementById("modalFeedbackClose");
const modalMapTrigger = document.getElementById("modalMapTrigger");
const modalMap = document.getElementById("modalMap");
const modalMapClose = document.getElementById("modalMapClose");
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

modalFeedbackTrigger.addEventListener("click", function () {
  modalFeedback.style.display = "block";
  modalFeedback.focus();
});

modalFeedbackClose.addEventListener("click", function () {
  modalFeedback.style.display = "none";
});

feedbackForm.addEventListener("submit", function (e) {
  e.preventDefault();
  modalFeedback.style.display = "none";
});

modalMapTrigger.addEventListener("click", function (e) {
  e.preventDefault();
  modalMap.style.display = "block";
  modalMap.focus();
});

modalMapClose.addEventListener("click", function () {
  modalMap.style.display = "none";
});

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
