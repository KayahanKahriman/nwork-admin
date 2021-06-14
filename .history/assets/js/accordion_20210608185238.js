const accordionMenu = document.querySelector("#accordion-menu");
const accordionTitle = accordionMenu.querySelectorAll(".accordion-title");
const accordionUl = accordionMenu.querySelectorAll("ul");

Array.from(accordionTitle).map((el) => {
  el.addEventListener("click", () => {
    Array.from(accordionUl).map((ul) => {
      ul.classList.remove("accordion-toggle");
    });
    Array.from(accordionTitle).map((title) => {
      title.classList.remove("accordion-active");
    });
    el.parentElement.classList.toggle("accordion-active-item");
    el.nextElementSibling.classList.toggle("accordion-toggle");
    el.classList.toggle("accordion-active");
  });
});
