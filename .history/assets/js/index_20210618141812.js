/** User image start */
const user_image = document.querySelector("#user-image");
const avatar = document.querySelector("#avatar");
user_image.addEventListener("click", () => {
  avatar.click();
});
/** User image end */

/** Swiper start */
const swiper = new Swiper(".news-carousel", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".news-carousel-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1281: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
/** Swiper end */

/** Morph start */
anime({
  targets: "#demo-svg polygon",
  d: [
    {
      value:
        "M450.058,900L800,927.995L800,999.995L0,999.995L0,927.995L349.942,900C351.984,925.844 373.632,946.211 400,946.211C426.368,946.211 448.016,925.844 450.058,900Z",
    },
    {
      value:
        "M450.058,900C450.058,900 554.676,759.334 613,764C671.324,768.666 800,927.995 800,927.995L800,999.995L0,999.995L0,927.995C0,927.995 82.676,726.666 141,722C197.829,717.454 349.942,900 349.942,900C351.984,925.844 373.632,946.211 400,946.211C426.368,946.211 448.016,925.844 450.058,900Z",
    },
  ],
  easing: "easeOutQuad",
  duration: 2500,
  loop: true,
  direction: "alternate",
});
/** Morph end */
