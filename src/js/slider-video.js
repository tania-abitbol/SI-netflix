const hover = document.querySelectorAll(".slider_item");
alert("gegggg");
hover.on("mouseenter focus", function () {
  alert("bjehbcdhcb");

  hover.play();
});
hover.on("mouseout blur", function () {
  hover.pause();
});
