// const gridButton = document.querySelector(".grid");
// const slider = document.querySelector(".slider");
// gridButton.addEventListener("click", () => {
//   slider.classList.remove("slider--list");
//   slider.classList.add("slider--grid");
// });

// const listButton = document.querySelector(".list");

// listButton.addEventListener("click", () => {
//   slider.classList.add("slider--list");
//   slider.classList.remove("slider--grid");
// });

const fleche_g = document.querySelector(".prev");
const fleche_d = document.querySelector(".next");
const all = document.querySelector(".slider ");

fleche_d.addEventListener("click", function () {
  all.scrollLeft += 100;
});

fleche_g.addEventListener("click", function () {
  all.scrollLeft -= 100;
});
