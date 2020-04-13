const video = document.querySelector(".video");
const videoContent = document.querySelector(".video__played");
const played = document.querySelector(".video__centralbutton--played");
const pause = document.querySelector(".video__controller--pause");
const play = document.querySelector(".video__controller--play");
const replay = document.querySelector(".video__controller--replay");
const moreSec = document.querySelector(".video__controller--addtime-forward");
const lessSec = document.querySelector(".video__controller--addtime-backward");
const mute = document.querySelector(".video__controller--mute");
const bar = document.querySelector(".video__progress");
const progressBar = document.querySelector(".video__progress__bar");
const centralButtonPlay = document.querySelector(".video__centralbutton");
const volume = document.querySelector(".video__controller--volume");
const sound = document.querySelector(".video__controller--sound");
const videoReturn = document.querySelector(".video__return");
const controller = document.querySelector(".video__controller");
const fullScreenBtn = document.querySelector(".video__controller--fullSCreen");
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

mute.addEventListener("click", () => {
  videoContent.volume = 0;
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
      eventPause();
      break;
    default:
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

sound.addEventListener("mouseenter", () => {
  console.log(volume.style.display);
  if (volume.style.display != "none") {
    volume.style.display = "none";
    mutee();
  } else if (volume.style.display != "block") {
    volume.style.display = "block";
  }
  setTimeout(function () {
    volume.style.display = "none";
  }, 8000);
});

sound.addEventListener("click", () => {
  mutee();
});

function mutee() {
  var imgSound = sound.getAttribute("src");
  if ((videoContent.volume = 0)) {
    imgSound.this.src = "../assets/images/videoplayer/mute.svg";
  }
}

volume.addEventListener("change", (e) => {
  videoContent.volume = e.currentTarget.value / 100;
});

videoReturn.addEventListener("click", () => {
  window.history.back();
});

video.addEventListener("mousemove", () => {
  if ((controller.style.opacity = "0")) {
    controller.style.opacity = 1;
    bar.style.bottom = "5%";
  }
  setTimeout(function () {
    controller.style.opacity = 0;
    bar.style.bottom = 0;
  }, 10000);
});

document.addEventListener(
  "keydown",
  (e) => {
    if (e.keyCode === 13) {
      video.requestFullscreen();
    }
  },
  false
);

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
  const surrenTimeTrue = (widthPercent * videoContent.duration) / 100;
  videoContent.currentTime = surrenTimeTrue;
  progressBar.style.width = widthPercent + "%";
});

// fullScreenBtn.addEventListener('click', () => {
//   document.requestFullscreen();
// })
