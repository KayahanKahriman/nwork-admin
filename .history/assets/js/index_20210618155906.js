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
    d: "M661.541,1733L1080,1787.96L1080,1919.04L0,1919.04L0,1787.96L418.459,1733C430.323,1789.22 480.266,1831.47 540,1831.47C599.734,1831.47 649.677,1789.22 661.541,1733Z",
  },
  {
    d: "M661.541,188.955L1080,0L1080,374.993L0,374.993L0,0L418.459,188.955C430.323,245.172 480.266,287.427 540,287.427C599.734,287.427 649.677,245.172 661.541,188.955Z",
  },
  {
    d: "M661.541,782.395L1080,1545.01L1080,1920L0,1920L-0,1545.01L418.459,782.395C430.323,838.611 480.266,880.866 540,880.866C599.734,880.866 649.677,838.611 661.541,782.395Z",
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
    {
      value: nav_transition[2].d,
    },
  ],
  duration: 1000,
  direction: "normal",
  autoplay: true,
  easing: "linear",
  // elasticity: 500,
  loop: false,
});

/** Morph end */
