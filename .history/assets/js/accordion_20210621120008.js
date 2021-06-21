const accordionMenu = document.querySelector(".accordion-menu");
const accordionTitle = accordionMenu.querySelectorAll(".accordion-title");
const accordionUl = accordionMenu.querySelectorAll("ul");
alert(accordionMenu);

Array.from(accordionTitle).map((el) => {
  el.addEventListener(" click", () => {
    console.log("clicked");
    Array.from(accordionUl).map((ul) => {
      ul.classList.remove("accordion-toggle");
    });
    Array.from(accordionTitle).map((title) => {
      title.classList.remove("accordion-active");
      title.parentElement.classList.remove("accordion-active-item");
    });
    if (el.nextElementSibling) {
      el.nextElementSibling.classList.toggle("accordion-toggle");
    }
    el.parentElement.classList.add("accordion-active-item");
    el.classList.toggle("accordion-active");
  });
});
