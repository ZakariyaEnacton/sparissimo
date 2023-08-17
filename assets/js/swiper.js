var swiper = new Swiper(".banner-swwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
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
