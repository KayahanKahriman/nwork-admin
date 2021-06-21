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
    d: "M1080,1820L892.949,1820C823.375,1820 737.788,1748 662.561,1748C588.902,1748 515.244,1820 441.585,1820C363.631,1820 268.433,1694 194.835,1694C129.89,1694 0,1820 0,1820L0,1920L1080,1920L1080,1820Z",
  },
  {
    d: "M1080,1604C1080,1604 955.299,1820 892.949,1820C823.375,1820 737.788,1457 662.561,1457C588.902,1457 515.244,1820 441.585,1820C363.631,1820 268.433,1611 194.835,1611C129.89,1611 0,1820 0,1820L0,1920L1080,1920L1080,1604Z",
  },
  {
    d: "M1080,1604C1080,1604 955.299,1263 892.949,1263C823.375,1263 737.788,1457 662.561,1457C588.902,1457 515.244,1182 441.585,1182C363.631,1182 268.433,1611 194.835,1611C129.89,1611 0,1478 0,1478L0,1920L1080,1920L1080,1604Z",
  },
  {
    d: "M1080,1604C1080,1604 955.299,1263 892.949,1263C823.375,1263 737.788,587 662.561,587C588.902,587 515.244,1182 441.585,1182C363.631,1182 268.433,647 194.835,647C129.89,647 0,1478 0,1478L0,1920L1080,1920L1080,1604Z",
  },
  {
    d: "M1080,0C1080,0 955.299,322 892.949,322C823.375,322 737.788,587 662.561,587C588.902,587 515.244,316 441.585,316C363.631,316 268.433,647 194.835,647C129.89,647 0,0 0,0L0,1920L1080,1920L1080,0Z",
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
