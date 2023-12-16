const bannersSwiper = new Swiper(".banners .swiper", {
  loop: true,
  centeredSlides: true,
  spaceBetween: 38,
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
  pagination: {
    el: ".banners .swiper-pagination",
  },
  navigation: {
    nextEl: ".banners .swiper-button-next",
    prevEl: ".banners .swiper-button-prev",
  },
});

const noveltySwiper = new Swiper(".novelty .swiper", {
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 12,
      centeredSlides: true,
    },
    568: {
      slidesPerView: 3,
      spaceBetween: 20,
      
    },
    992: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: ".novelty .swiper-button-next",
    prevEl: ".novelty .swiper-button-prev",
  },
});
