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

let nav_transition = [
  {
    d: "M661.541,0L1080,54.959L1080,186.037L0,186.037L0,54.959L418.459,0C430.323,56.216 480.266,98.471 540,98.471C599.734,98.471 649.677,56.216 661.541,0Z",
  },
  {
    d: "M661.541,188.955L1080,0L1080,374.993L0,374.993L0,0L418.459,188.955C430.323,245.172 480.266,287.427 540,287.427C599.734,287.427 649.677,245.172 661.541,188.955Z",
  },
];

anime({
  targets: ".transition-path",
  d: [
    {
      value: nav_transition[0].d,
    },
    {
      value: nav_transition[1].d,
    },
  ],
  duration: 1000,
  direction: "alternate",
  autoplay: true,
  easing: "linear",
  elasticity: 500,
  loop: false,
});

/** Morph end */
