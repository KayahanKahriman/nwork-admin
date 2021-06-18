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

let shapes = [
  {
    d: "M450.058,0L800,27.995L800,99.995L0,99.995L0,27.995L349.942,0C351.984,25.844 373.632,46.211 400,46.211C426.368,46.211 448.016,25.844 450.058,0Z",
  },
  {
    d: "M450.058,159.076C450.058,159.076 613.826,-4.018 665,0.076C723.324,4.742 800,187.071 800,187.071L800,259.071L0,259.071L0,187.071C0,187.071 81.92,11.162 133,7.076C191.324,2.41 349.942,159.076 349.942,159.076C351.984,184.92 373.632,205.287 400,205.287C426.368,205.287 448.016,184.92 450.058,159.076Z",
  },
  {
    d: "M532,186C566.604,234.662 613.826,301.906 665,306C723.324,310.666 800,76 800,76L800,564.995L0,564.995L0,2C0,2 14,265 133,313C187.262,334.887 353.636,241.175 350,167C345,65 384.632,0 411,0C555,0 494.667,133.5 532,186Z",
  },
];

anime({
  targets: ".polymorph",
  d: [{ value: shapes[0].d }, { value: shapes[1].d }, { value: shapes[2].d }],
  duration: 15000,
  direction: "alternate",
  autoplay: true,
  easing: "linear",
  elasticity: 500,
  loop: true,
});

/** Morph end */
