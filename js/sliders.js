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

const superPricesSwiper = new Swiper(".super-prices .swiper", {
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
    nextEl: ".super-prices .swiper-button-next",
    prevEl: ".super-prices .swiper-button-prev",
  },
});

const seasonalOffersSwiper = new Swiper(".seasonal-offers .swiper", {
  loop: true,
  centeredSlides: true,
  spaceBetween: 23,
  breakpoints: {
    320: {
      slidesPerView: 1.25,
      spaceBetween: 8,
    },
    568: {
      slidesPerView: 2,
      spaceBetween: 23,
    },
    992: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".seasonal-offers .swiper-pagination",
  },
  navigation: {
    nextEl: ".seasonal-offers .swiper-button-next",
    prevEl: ".seasonal-offers .swiper-button-prev",
  },
});

const servicesSwiper = new Swiper(".services .swiper", {
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    568: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

const recentlyWatchedSwiper = new Swiper(".recently-watched .swiper", {
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    568: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
    },
  },
});


const goodInfoSwiperThumbs = new Swiper(".good-info__gallery-thumbs .swiper", {
  direction: 'vertical',
  spaceBetween: 16,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});


const goodInfoSwiper = new Swiper(".good-info__gallery-main .swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
  },
  thumbs: {
    swiper: goodInfoSwiperThumbs,
  },
});
