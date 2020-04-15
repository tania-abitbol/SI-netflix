const video = document.querySelector(".video"); //Div Video
const videoContent = document.querySelector(".video__played"); // Contenu de la vidéo
const played = document.querySelector(".video__centralbutton--played"); // Bouton play
const pause = document.querySelector(".video__controller--pause"); // Bouton bottom pause
const play = document.querySelector(".video__controller--play"); // Bouton bottom play
const replay = document.querySelector(".video__controller--replay"); // Bouton replay
const moreSec = document.querySelector(".video__controller--addtime-forward"); // Bouton add +10sec
const lessSec = document.querySelector(".video__controller--addtime-backward"); // Bouton -10se
const mute = document.querySelector(".video__controller--mute"); // Bouton mute
const bar = document.querySelector(".video__progress"); // Controleur bar
const progressBar = document.querySelector(".video__progress__bar"); // Bar de progresssion
const volume = document.querySelector(".video__controller--volume"); // Input volume
const sound = document.querySelector(".video__controller__sound"); // Div images sound
const soundOn = document.querySelector(".video__controller__sound--on"); // Img sound on
const soundOff = document.querySelector(".video__controller__sound--off"); // Img sound off
const videoReturn = document.querySelector(".video__return"); // Bouton return
const controller = document.querySelector(".video__controller"); // Div controller
const fullScreenBtn = document.querySelector(".video__controller__screen--fullScreen"); //Bouton full screen
const midScreenBtn = document.querySelector(".video__controller__screen--midScreen"); //Bouton full screen
const screen = document.querySelector(".video__controller__screen");
videoContent.volume = 0.2;

const eventPlay = () => {
  play.style.display = "none";
  pause.style.display = "block";
  videoContent.play();
  played.style.display = "none";
  controller.style.opacity = 0;
  videoReturn.style.opacity = 0;
};

const eventPause = () => {
  pause.style.display = "none";
  play.style.display = "block";
  videoContent.pause();
  played.style.display = "block";
  controller.style.opacity = 1;
  videoReturn.style.opacity = 1;
};

played.addEventListener("click", () => {
  if (videoContent.paused === true) {
    eventPlay();
  } else if (videoContent.played.length) {
    eventPause();
  }
});

videoContent.addEventListener("click", () => {
  if (videoContent.paused === true) {
    eventPlay();
  } else if (videoContent.played.length) {
    eventPause();
  }
});

pause.addEventListener("click", () => {
  eventPause();
});

play.addEventListener("click", () => {
  eventPlay();
});

replay.addEventListener("click", () => {
  videoContent.currentTime = 0;
});

moreSec.addEventListener("click", () => {
  videoContent.currentTime += 10;
});

lessSec.addEventListener(["click", "keydown"], () => {
  videoContent.currentTime -= 10;
  if (e.keyCode === 39) {
    videoContent.currentTime -= 10;
  }
});

document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 37:
      videoContent.currentTime -= 10;
      break;
    case 39:
      videoContent.currentTime += 10;
      break;
    case 32:
      if (videoContent.paused === true) {
        eventPlay();
      } else if (videoContent.played.length) {
        eventPause();
      }
      break;
    case 13:
      videoReturn.style.opacity = 0;
      videoFullScreen();
      video.style.backgroundColor = "transparent";
      break;
    case 27:
      document.exitFullscreen();
      // video.style.backgroundColor = "white";
      break;
  }
});

videoContent.addEventListener("timeupdate", () => {
  var vid = videoContent.currentTime;
  var duration = videoContent.duration;
  if (videoContent.currentTime !== videoContent.duration) {
    progressBar.style.width = (vid / duration) * 100 + "%";
  } else {
    progressBar.style.width = "0%";
  }
});


sound.addEventListener("click", () => {
  if ((volume.style.display = "none")) {

function mouseOver() {
  if (volume.style.display != "none") {
    volume.style.display = "none";
  } else if (volume.style.display != "block") {

    volume.style.display = "block";
  }
}
setTimeout(function () {
  volume.style.display = "none";
}, 8000);

sound.addEventListener("click", () => {
  if (soundOn.style.display != "none") {
    soundOff.style.display = "block";
    soundOn.style.display = "none";
    videoContent.volume = 0;
  } else if ((soundOff.style.display = "block")) {
    soundOn.style.display = "block";
    soundOff.style.display = "none";
    videoContent.volume = 0.2;
  }
});

volume.addEventListener("change", (e) => {
  videoContent.volume = e.currentTarget.value / 100;
});

videoReturn.addEventListener("click", () => {
  window.history.back();
});


videoContent.addEventListener("mousemove", () => {
  if (controller.style.opacity == "0") {

    controller.style.opacity = 1;
    bar.style.bottom = "5%";
  }
  setTimeout(function () {
    controller.style.opacity = 0;
    bar.style.bottom = 0;

  }, 10000);
});


function videoFullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
}

const rect = bar.getBoundingClientRect();
const largeur = rect.width;

bar.addEventListener("click", (a) => {
  var x = a.clientX - rect.left;
  const widthPercent = (x * 100) / largeur;

  const currenTimeTrue = (widthPercent * videoContent.duration) / 100;
  videoContent.currentTime = currenTimeTrue;
  progressBar.style.width = widthPercent + "%";
});

fullScreenBtn.addEventListener("click", () => {
  console.log("t");
  if ((fullScreenBtn.style.opacity = "1")) {
    console.log("t");
    videoFullScreen();
    midScreenBtn.style.opacity = 1;
    fullScreenBtn.style.opacity = 0;
  } else if (midScreenBtn.style.opacity == "1") {
    exitFullscreen();
    fullScreenBtn.style.opacity = 1;
    midScreenBtn.style.opacity = 0;
  }
});
console.log("t" + videoContent);

