const video = document.querySelector(".video");
const videoContent = document.querySelector(".video__played");
const played = document.querySelector(".video__controller--played");
const pause = document.querySelector(".video__controller--pause");
const play = document.querySelector(".video__controller--play");
const volumpos = document.querySelector(".video__controller--increase-volume");
const volumneg = document.querySelector(".video__controller--decrease-volume");
const replay = document.querySelector(".video__controller--replay");
const moreSec = document.querySelector(".video__controller--addtime-forward");
const lessSec = document.querySelector(".video__controller--addtime-backward");
const mute = document.querySelector(".video__controller--mute");
const bar = document.querySelector(".video__progress");
const progressBar = document.querySelector(".video__progress__bar");
videoContent.volume = 0.2;

played.addEventListener("click", () => {
  // if (videoContent.paused) {
    videoContent.play();
    played.remove();
  // } else {
    // videoContent.pause();
  // }
});

pause.addEventListener("click", ()=>{
  if(videoContent.played){
    videoContent.pause();
      pause.style.display = 'none';
      play.style.display = 'block';
  }
})

play.addEventListener("click", ()=>{
  if(videoContent.paused){
    play.style.display = 'none';
    pause.style.display = 'block';
    videoContent.play();
  }
})
volumpos.addEventListener("click", () => {
  if (videoContent.volume + 0.1 <= 1) {
    videoContent.volume += 0.1;
  } else {
    videoContent.volume = 1;
  }
});

volumneg.addEventListener("click", () => {
  if (videoContent.volume - 0.1 >= 0) {
    videoContent.volume -= 0.1;
  } else {
    video.volume = 0; // 0 = mute, 1 = max
  }
})

mute.addEventListener("click", () =>{
  videoContent.volume = 0;
});

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
