/** User image start */
const user_image = document.querySelector("#user-image");
const avatar = document.querySelector("#avatar");
user_image.addEventListener("click", () => {
  avatar.click();
});
/** User image end */

/** Swiper start */
const swiper = new Swiper(".news-carousel", {
  navigation: {
    nextEl: ".news-carousel-next",
    prevEl: ".news-carousel-prev",
  },
});
/** Swiper end */