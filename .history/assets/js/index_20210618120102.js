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
  {
    d: "M532,492.62C566.604,541.283 649.826,89.527 701,93.62C759.324,98.286 800,382.62 800,382.62L800,871.615L0,871.615L0,308.62C0,308.62 64,69.62 183,117.62C237.262,139.508 348.636,100.796 345,26.62C340,-75.38 489.632,148.62 516,148.62C660,148.62 494.667,440.12 532,492.62Z",
  },
  {
    d: "M614,51C648.604,99.662 654.826,279.906 706,284C764.324,288.666 805,573 805,573L805,1062L5,1062L0,0C0,0 100,86 219,134C273.262,155.887 353.636,291.175 350,217C345,115 485.632,210 512,210C656,210 576.667,-1.5 614,51Z",
  },
  {
    d: "M619,71.587C653.604,120.249 660.826,27.493 712,31.587C770.324,36.253 805,8.587 805,8.587L805,1109.58L5,1109.58L0,47.587C0,47.587 53,-7.413 172,40.587C226.262,62.474 303.636,117.763 300,43.587C295,-58.413 469.632,50.587 496,50.587C640,50.587 581.667,19.087 619,71.587Z",
  },
];

anime({
  targets: ".polymorph",
  d: [
    { value: shapes[0].d },
    { value: shapes[1].d },
    { value: shapes[2].d },
    { value: shapes[3].d },
    { value: shapes[4].d },
    { value: shapes[5].d },
  ],
  duration: 5000,
  autoplay: true,
  easing: "ease-in-out",
  loop: true,
});

/** Morph end */
