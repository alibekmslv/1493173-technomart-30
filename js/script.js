// Map Related Vars
const modalMapTrigger = document.getElementById("modalMapTrigger");
const modalMap = document.getElementById("modalMap");
const modalMapClose = document.getElementById("modalMapClose");

//  Feedback Related Vars
const modalFeedbackTrigger = document.getElementById("modalFeedbackTrigger");
const modalFeedback = document.getElementById("modalFeedback");
const modalFeedbackClose = document.getElementById("modalFeedbackClose");
const feedbackForm = document.getElementById("feedbackForm");
const feedbackFormName = document.getElementById("feedback-sender-name");
const feedbackFormEmail = document.getElementById("feedback-sender-email");
const feedbackFormText = document.getElementById("feedback-sender-text");

// Cart Related Vars
const productsList = document.querySelector(".products-list");
const cartLink = document.querySelector(".cart-link");
const cartCounter = document.getElementById("cartCounter");
const modalAddedToCart = document.getElementById("modalAddedToCart");
const modalCartCloseButton = document.getElementById("modalCartCloseButton");
const modalCartContinueShoppingButton = document.querySelector(
  ".modal--cart-controls button"
);

// Gallery Related Vars
const gallery = document.getElementById("gallery");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");

// Tabs Related Vars
const tabsList = document.querySelector(".tabs-list");

// Product Sort Related Buttons
const productSortTypeButtons = document.querySelectorAll(
  ".product-sort-type button"
);
const productSortDirectionButtons = document.querySelectorAll(
  ".product-sort-direction button"
);

isCartEmpty();

// Modal Feedback
if (modalFeedbackTrigger) {
  modalFeedbackTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    modalFeedback.classList.add("modal--show");
    modalFeedback.focus();
  });

  modalFeedbackClose.addEventListener("click", function () {
    modalFeedback.classList.remove("modal--show", "modal--error");
  });

  feedbackForm.addEventListener("submit", function (e) {
    if (
      !feedbackFormName.value ||
      !feedbackFormEmail.value ||
      !feedbackFormText.value
    ) {
      e.preventDefault();
      modalFeedback.classList.add("modal--error");
    }
  });
}

// Modal Map
if (modalMapTrigger) {
  modalMapTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    modalMap.classList.add("modal--show");
    modalMap.focus();
  });

  modalMapClose.addEventListener("click", function () {
    modalMap.classList.remove("modal--show");
  });
}

// Modal Cart
if (productsList) {
  modalCartCloseButton.addEventListener("click", modalCartClose);
  modalCartContinueShoppingButton.addEventListener("click", modalCartClose);

  productsList.addEventListener("click", function (e) {
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
}

function isCartEmpty() {
  if (Number(cartCounter.innerText)) {
    cartLink.classList.add("cart-link--added");
  } else {
    return;
  }
}

function modalCartOpen() {
  modalAddedToCart.classList.add("modal--show");
}

function modalCartClose() {
  modalAddedToCart.classList.remove("modal--show");
}

// Gallery
let slideIndex = 2;

if (gallery) {
  showSlides(slideIndex);

  prevSlide.addEventListener("click", function () {
    plusSlides(-1);
  });

  nextSlide.addEventListener("click", function () {
    plusSlides(1);
  });

  const controls = document.getElementsByClassName("gallery-dot");
  for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener("click", function () {
      currentSlide(i + 1);
    });
  }
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("gallery-content");
  let dots = document.getElementsByClassName("gallery-dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("gallery-content--hidden");
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("gallery-dot--current");
  }

  slides[slideIndex - 1].classList.remove("gallery-content--hidden");
  dots[slideIndex - 1].classList.add("gallery-dot--current");
}

// Tabs

if (tabsList) {
  const tabs = document.getElementsByClassName("tab-button");
  openTab(0);

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
      openTab(i);
    });
  }
}

function openTab(index) {
  let tabcontent = document.getElementsByClassName("tab-content");
  let tablinks = document.getElementsByClassName("tab-button");

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("tab-content--active");
  }

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("tab-button--active");
  }

  tabcontent[index].classList.add("tab-content--active");
  tablinks[index].classList.add("tab-button--active");
}

//Product Sort Buttons
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
