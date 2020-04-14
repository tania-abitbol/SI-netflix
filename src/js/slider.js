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

const fleche_g = document.querySelectorAll(".prev");
const fleche_d = document.querySelectorAll(".next");
const all = document.querySelectorAll(".sliders");

for (let i = 0; i < fleche_g.length; i++) {
  fleche_g[i].addEventListener("click", function () {
    all[i].scrollLeft -= 100;
  });
}

for (let i = 0; i < fleche_d.length; i++) {
  fleche_d[i].addEventListener("click", function () {
    all[i].scrollLeft += 100;
  });
}
