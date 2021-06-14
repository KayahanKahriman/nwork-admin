const accordionMenu = document.querySelector("#accordion-menu");
const accordionTitle = accordionMenu.querySelectorAll(".accordion-title");
const accordionUl = accordionMenu.querySelectorAll("ul");

Array.from(accordionTitle).map((el) => {
  Array.from(accordionUl).map((title) => {
    title.classList.remove("accordion-toggle");
  });

  el.addEventListener("click", () => {
    el.nextElementSibling.classList.toggle("accordion-toggle");
    el.classList.toggle("accordion-active");
  });
});
