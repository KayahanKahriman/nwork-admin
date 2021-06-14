const accordionMenu = document.querySelector("#accordion-menu");
const accordionTitle = accordionMenu.querySelectorAll(".accordion-title");
const accordionUl = accordionMenu.querySelectorAll("ul");

Array.from(accordionTitle).map((el) => {
  el.addEventListener("click", () => {
    Array.from(accordionUl).map((ul) => {
      ul.classList.add("accordion-toggle");
    });
    el.nextElementSibling.classList.toggle("accordion-toggle");
    el.classList.toggle("accordion-active");
  });
});
