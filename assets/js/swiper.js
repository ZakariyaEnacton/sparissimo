var swiper = new Swiper(".banner-swwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero-button-next",
    prevEl: ".hero-button-prev",
  },
});

var swiper = new Swiper(".card-swiper", {
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    nextEl: ".card-button-next",
    prevEl: ".card-button-prev",
  },
});

var swiper = new Swiper(".grid-card-swiper", {
  slidesPerView: 2,
  slidesPerColumn: 2,
  grid: {
    rows: 2,
    fill: "row",
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".os-button-next",
    prevEl: ".os-button-prev",
  },
});

var swiper = new Swiper(".deals-swiper", {
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    nextEl: ".d-card-button-next",
    prevEl: ".d-card-button-prev",
  },
});
var swiper = new Swiper(".earn-cb-swiper", {
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    nextEl: ".e-card-button-next",
    prevEl: ".e-card-button-prev",
  },
});
var swiper = new Swiper(".cb-offers-swiper", {
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    nextEl: ".cb-card-button-next",
    prevEl: ".cb-card-button-prev",
  },
});
