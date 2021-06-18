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
    d: "M32.523,146.052c0,0 -53.373,50.424 -23.372,73.555c46.485,35.841 98.774,-38.059 159.889,-2.128c86.545,50.882 84.16,48.681 106.404,-19.304c26.482,-80.94 -19.962,-62.534 87.286,-71.767c24.377,-2.098 29.631,-47.581 9.202,-63.766c-138.239,-90.212 -93.22,-67.976 -180.553,-26.47c-70.054,33.294 -55.897,-12.339 -110.692,2.314c-35.582,9.515 -10.509,59.797 -48.164,107.566Z",
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
