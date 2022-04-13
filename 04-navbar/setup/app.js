// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
