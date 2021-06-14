const accordionMenu = document.querySelector("#accordion-menu");
const accordionTitle = accordionMenu.querySelectorAll(".accordion-title");

Array.from(accordionTitle).map((el) => {
  el.addEventListener("click", () => {
    console.log(el);
  });
});
