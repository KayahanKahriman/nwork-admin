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
    d: "M1080,1820L0,1820L0,1920L1080,1920L1080,1820Z",
  },
  {
    d: "M661.541,1733L1080,1335.06L1080,1919.04L0,1919.04L0,1335.06L418.459,1733C430.323,1789.22 480.266,1831.47 540,1831.47C599.734,1831.47 649.677,1789.22 661.541,1733Z",
  },
  {
    d: "M661.541,612.799L1080,1335.06L1080,1919.04L0,1919.04L0,1335.06L418.459,612.799C430.323,669.015 480.266,711.27 540,711.27C599.734,711.27 649.677,669.015 661.541,612.799Z",
  },
  {
    d: "M661.541,-170.137L1080,-41.702L1080,1919.04L0,1919.04L0,-41.702L418.459,-170.137C430.323,-113.921 480.266,-71.666 540,-71.666C599.734,-71.666 649.677,-113.921 661.541,-170.137Z",
  },
];

const start_transition = anime({
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
    {
      value: nav_transition[3].d,
    },
  ],
  duration: 1000,
  direction: "normal",
  autoplay: false,
  easing: "linear",
  elasticity: 500,
  loop: false,
});

/** Morph end */
const toggle_nav = document.getElementById("toggle-button");
const nav_transition_effect = document.querySelector(".nav-transition-effect");

toggle_nav.addEventListener("click", () => {
  start_transition.play();
  nav_transition_effect.classList.remove("d-none");

  start_transition.finished.then(() => {
    start_transition.reverse();
  });
});
