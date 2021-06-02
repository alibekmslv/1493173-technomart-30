//  Feedback Related Vars
const feedbackForm = document.getElementById("feedbackForm");
const feedbackFormName = document.getElementById("feedback-sender-name");
const feedbackFormEmail = document.getElementById("feedback-sender-email");
const feedbackFormText = document.getElementById("feedback-sender-text");

// Cart Related Vars
const productsList = document.querySelector(".products-list");
const cartLink = document.querySelector(".cart-link");
const cartCounter = document.getElementById("cartCounter");
const modalTriggers = document.querySelectorAll(".modal-trigger")

// Gallery Related Vars
const gallery = document.getElementById("gallery");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");

// Tabs Related Vars
// const tabs = document.querySelector(".tabs");
const tabs = document.querySelectorAll('[role="tab"]');
const tabList = document.querySelector('[role="tablist"]');

// Product Sort Related Buttons
const productSortTypeButtons = document.querySelectorAll(
  ".product-sort-type button"
);
const productSortDirectionButtons = document.querySelectorAll(
  ".product-sort-direction button"
);

// isCartEmpty();

modalTriggers.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const modalId = this.dataset.modalId;
    openModal(modalId);
  })
})

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('modal--show');
  modal.focus();

  closeModal(modal);
}

function closeModal(modal) {
  modal.addEventListener('keydown', (e) => {
    e.code === 'Escape' ? modal.classList.remove('modal--show') : null;
  });

  const closeModalTriggers = modal.querySelectorAll('.modal__close-trigger');
  closeModalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      modal.classList.remove('modal--show');
    })
  });
}

// Modal Cart
// if (productsList) {
//   modalCartCloseButton.addEventListener("click", modalCartClose);
//   modalCartContinueShoppingButton.addEventListener("click", modalCartClose);

//   productsList.addEventListener("click", function (e) {
//     const isAddToCartButton = e.target.classList.contains(
//       "product-item-buy-button"
//     );
//     if (isAddToCartButton) {
//       cartCounter.innerText = Number(cartCounter.innerText) + 1;
//       modalCartOpen();
//       isCartEmpty();
//       modalAddedToCart.focus();
//     }
//   });
// }

// function isCartEmpty() {
//   if (Number(cartCounter.innerText)) {
//     cartLink.classList.add("cart-link--added");
//   } else {
//     return;
//   }
// }

// function modalCartOpen() {
//   modalAddedToCart.classList.add("modal--show");
// }

// function modalCartClose() {
//   modalAddedToCart.classList.remove("modal--show");
// }

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

  const controls = document.getElementsByClassName("gallery__dot");
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
  let slides = document.getElementsByClassName("gallery__slide");
  let dots = document.getElementsByClassName("gallery__dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("gallery__slide--hidden");
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("gallery__dot--current");
  }

  slides[slideIndex - 1].classList.remove("gallery__slide--hidden");
  dots[slideIndex - 1].classList.add("gallery__dot--current");
}

// Tabs
if (tabs) {
  tabs.forEach(tab => {
    tab.addEventListener("click", changeTabs);
  });

  // Enable arrow navigation between tabs in the tab list
  let tabFocus = 0;

  tabList.addEventListener("keydown", e => {
    // Move down
    if (e.keyCode === 40 || e.keyCode === 38) {
      e.preventDefault();
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.keyCode === 40) {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Move up
      } else if (e.keyCode === 38) {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });
}

function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;

  // Remove all current selected tabs
  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach(t => {
      t.setAttribute("aria-selected", false);
      t.classList.remove("tabs__tab--selected");
    });

  // Set this tab as selected
  target.setAttribute("aria-selected", true);
  target.classList.add("tabs__tab--selected");

  // Hide all tab panels
  grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach(p => {
      p.setAttribute("hidden", true);
      p.classList.remove("tabs__tabpanel--active");
    });

  // Show the selected panel
  const selectedPanel = grandparent.querySelector(`#${target.getAttribute("aria-controls")}`);
  selectedPanel.removeAttribute("hidden");
  selectedPanel.classList.add("tabs__tabpanel--active");
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
