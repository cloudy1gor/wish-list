// core version + navigation, pagination modules:
import Swiper from "swiper";

document.addEventListener("DOMContentLoaded", () => {
  // init Swiper:
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
});
