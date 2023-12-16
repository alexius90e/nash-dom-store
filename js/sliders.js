const swiper = new Swiper(".banners .swiper", {
  // loop: true,
  centeredSlides: true,
  spaceBetween: 38,
  pagination: {
    el: ".banners .swiper-pagination",
  },
  navigation: {
    nextEl: ".banners .swiper-button-next",
    prevEl: ".banners .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.25,
      spaceBetween: 8,
    },
    568: {
      slidesPerView: 1.4,
      spaceBetween: 38,
    },
    992: {
      slidesPerView: 1,
    },
  },
});
