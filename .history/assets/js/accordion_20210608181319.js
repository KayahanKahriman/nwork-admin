const accordionMenu = document.querySelector("#accordion-menu");
const accordionTitle = accordionMenu.querySelectorAll(".accordion-title");

Array.from(accordionTitle).map((el) => {
  el.addEventListener("click", () => {
    el.nextElementSibling.classList.toggle("accordion-toggle");
  });
});
console.log(accordionMenu);
