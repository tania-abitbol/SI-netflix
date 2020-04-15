const slider = document.querySelectorAll(".sliders__item");

const videoPlayer = document.querySelector(".video__played");

for (let i = 0; i < slider.length; i++) {
  var src = slider[i].getAttribute("src");
  videoPlayer.setAttribute("src", src);
}
