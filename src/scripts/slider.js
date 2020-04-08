const fleche_g = document.querySelector(".prev");
const fleche_d = document.querySelector(".next");
const all = document.querySelector(".slider");

fleche_d.addEventListener("click", function () {
  all.scrollLeft += 300;
});

fleche_g.addEventListener("click", function () {
  all.scrollLeft -= 300;
});