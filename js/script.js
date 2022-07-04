const accordionItem = document.querySelectorAll("dd");
const accordionTitle = document.querySelectorAll("dt");
const itemChange = document.querySelectorAll(".open-icon");

accordionTitle.forEach((dt, index) => {
  dt.addEventListener("click", showDescription);
});

function showDescription(index) {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}
