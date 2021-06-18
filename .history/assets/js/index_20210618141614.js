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
anime({
  targets: "#demo-svg polygon",
  d: [
    { value: "87 472,87 91,267 80,501 78,489 304,500 450,293 457" },
    { value: "126 263,281 317,475 132,405 417,530 535,29 490,202 365" },
  ],
  easing: "easeOutQuad",
  duration: 2500,
  loop: true,
  direction: "alternate",
});
/** Morph end */
