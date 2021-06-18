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
    d: "M32.523,122.536c0,0 -53.373,50.425 -23.372,73.556c46.485,35.84 82.969,5.669 144.084,41.6c86.545,50.882 99.965,4.953 122.209,-63.033c26.482,-80.94 149.411,40.333 141.552,-67.025c-1.966,-26.86 -26.743,-28.087 -13.98,-73.776c-28.127,-65.977 -56.34,-17.399 -205.315,-4.87c-77.29,6.501 -14.275,54.572 -69.07,69.225c-35.582,9.515 -58.453,-23.446 -96.108,24.323Z",
  },
  {
    d: "M450.058,900C450.058,900 554.676,759.334 613,764C671.324,768.666 800,927.995 800,927.995L800,999.995L0,999.995L0,927.995C0,927.995 82.676,726.666 141,722C197.829,717.454 349.942,900 349.942,900C351.984,925.844 373.632,946.211 400,946.211C426.368,946.211 448.016,925.844 450.058,900Z",
  },
];

anime({
  targets: ".morph",
  d: [{ value: shapes[0].d }, { value: shapes[1].d }, { value: shapes[2].d }],
  duration: 15000,
  direction: "alternate",
  autoplay: true,
  easing: "linear",
  elasticity: 500,
  loop: true,
});

/** Morph end */
