import "./slider.js";
import "./api-imdb.js";
import "./slider-video.js";

const accountArrow = document.querySelector(".header__nav__right__menu--img");

const accountDropDown = document.querySelector(".header__nav__right__menu--open");

let isToggle = false;

accountArrow.addEventListener("click", () => {
  isToggle = !isToggle;
  toggleDropDown();
});

const toggleDropDown = () => {
  if (!isToggle) {
    accountDropDown.style.display = "block";
  } else {
    accountDropDown.style.display = "none";
  }
};
