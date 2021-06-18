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
    d: "M38.38,131.986c0,0 -16.238,16.259 6.658,93.576c16.997,57.393 123.54,73.633 121.429,44.235c-5.899,-82.176 32.766,-18.89 122.209,-63.033c76.369,-37.69 149.411,40.332 141.553,-67.025c-1.967,-26.861 -91.546,1.416 -74.569,-61.132c-38.136,-100.222 -112.186,-76.406 -144.726,-17.514c-37.512,67.889 -19.07,-34.814 -90.145,-3.481c-85.658,37.761 -44.754,26.605 -82.409,74.374Z",
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
