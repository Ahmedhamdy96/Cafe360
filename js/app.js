// 1 - get menu data

import { menu } from "./data.js";

let filterCategory = "breakfast";

// 2 - place of categories menu
let categoriesEl = document.querySelector(".menu .container .categories ul");

// 3 - remove duplicate categories
let categories = new Set(menu.map((meal) => meal.category));

// 4 - render categories
categories.forEach((category) => {
  categoriesEl.innerHTML += `<li><span class=${category}>${category}</span> <span><i class="fa-solid fa-angle-right"></i></span></li>`;
});

// 5 - get categories to attach an event handler
let categoryElments = document.querySelectorAll(
  ".menu .container .categories ul li"
);

// 6 - handle clicks
categoryElments.forEach((el) =>
  el.addEventListener("click", () => {
    categoryElments.forEach((el) => (el.className = ""));
    el.className = "active";
    filterCategory = el.querySelector("span").innerHTML;
    slidesContainer.innerHTML = "";
    renderMenuItems();
  })
);

// 7 - place of slides
let slidesContainer = document.querySelector(".wrapper");

function renderMenuItems() {
  let slides = menu.map((meal) => {
    if (meal.category === filterCategory) {
      return `
              <div class="swiper-slide slide">
                <h4 class="title">${meal.title}</h4>
                <div class="details">
                    <p class="desc">
                    ${meal.description}
                    </p>
                  <button class="btn cta">Order now</button>
                </div>
                    <div class="img">
                        <img src="${meal.imgSrc}" alt="breakfast" />
                    </div>
                </div>`;
    } else {
      return "";
    }
  });

  slides.forEach((slide) => {
    slidesContainer.innerHTML += slide;
  });
}

renderMenuItems();

document
  .querySelector(".scroll-btn-container")
  .addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
