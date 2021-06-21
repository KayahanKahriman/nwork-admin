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
    d: "M1080,0L0,0L0,1920L1080,1920L1080,0Z",
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
