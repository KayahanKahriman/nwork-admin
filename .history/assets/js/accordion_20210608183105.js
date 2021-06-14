const accordionMenu = document.querySelector("#accordion-menu");
const accordionTitle = accordionMenu.querySelectorAll(".accordion-title");
const accordionUl = accordionMenu.querySelectorAll("ul");

Array.from(accordionTitle).map((el) => {
  el.addEventListener("click", () => {
    el.nextElementSibling.classList.toggle("accordion-toggle");
    el.classList.toggle("accordion-active");
  });
  Array.from(accordionUl).map((ul) => {
    ul.classList.remove("accordion-toggle");
    console.log(ul);
  });
});