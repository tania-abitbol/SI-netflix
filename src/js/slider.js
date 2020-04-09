const gridButton = document.querySelector(".grid");
const slider = document.querySelector(".slider");
gridButton.addEventListener("click", () => {
  slider.classList.remove("slider--list");
  slider.classList.add("slider--grid");
});

const listButton = document.querySelector(".list");

listButton.addEventListener("click", () => {
  slider.classList.add("slider--list");
  slider.classList.remove("slider--grid");
});
