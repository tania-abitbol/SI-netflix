const video = document.querySelector(".video");
const videoContent = document.querySelector(".video__played");
const play = document.querySelector(".video__controller--play");
const volumpos = document.querySelector(".video__controller--increase-volume");
const volumneg = document.querySelector(".video__controller--decrease-volume");
const replay = document.querySelector(".video__controller--replay");
const moreSec = document.querySelector(".video__controller--addtime-forward");
const lessSec = document.querySelector(".video__controller--addtime-backward");
const bar = document.querySelector(".video__progress");
const progressBar = document.querySelector(".video__progress__bar");
videoContent.volume = 0.2;

play.addEventListener("click", () => {
  if (videoContent.paused) {
    videoContent.play();
    play.textContent = "Pause";
  } else {
    videoContent.pause();
    play.textContent = "Play";
  }
});

volumpos.addEventListener("click", () => {
  if (videoContent.volume + 0.1 <= 1) {
    videoContent.volume += 0.1;
  } else {
    videoContent.volume = 1;
  }
});

if (videoContent.volume - 0.1 >= 0) {
  videoContent.volume -= 0.1;
} else {
  video.volume = 0; // 0 = mute, 1 = max
}

replay.addEventListener("click", () => {
  videoContent.currentTime = 0;
});

moreSec.addEventListener("click", () => {
  videoContent.currentTime += 10;
});

lessSec.addEventListener("click", () => {
  videoContent.currentTime -= 10;
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
