import Swiper from "swiper";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1240: {
        slidesPerView: 4,
      },
    },
    autoplay: {
      delay: 1000,
    },
  });
});
