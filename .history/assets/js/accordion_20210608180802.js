const accordionMenu = document.querySelector("#accordion-menu");
const accordionTitle = accordionMenu.querySelectorAll(".accordion-title");

Array.from(accordionTitle).map((el) => {
  console.log(el);
});
