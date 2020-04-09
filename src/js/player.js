const video = document.querySelector(".video");
const videoContent = document.querySelector(".video__player");
const play = document.querySelector(".video__controller--play");
const volumpos = document.querySelector(".video__controller--dicrease-volume");
const volumneg = document.querySelector(".video__controller--increase-volume");
const replay = document.querySelector(".video__controller--replay");
const moreSec = document.querySelector(".video__controller--addtime-forward");
const lessSec = document.querySelector(".video__controller--addtime-backward");
const bar = document.querySelector(".video__progress__bar");

play.addEventListener("click", () => {
if(videoContent.paused){
  videoContent.play();
}else{
  videoContent.pause();
  console.log('y')
}
});

volumpos.addEventListener("click", () => {
  if (video.volume + 0.1 >= 1) video.volume = 1;
  else video.volume += 0.1; // 0 = mute, 1 = max
});

volumneg.addEventListener("click", () => {
  if (video.volume - 0.1 <= 0) video.volume = 0;
  else video.volume -= 0.1; // 0 = mute, 1 = max
});

replay.addEventListener("click", () => {
  video.currentTime = 0;
  video.play();
});

moreSec.addEventListener("click", () => {
  if (video.currentTime + 10 >= video.duration) video.currentTime += 0;
  else video.currentTime += 10;
  video.play();
});

lessSec.addEventListener("click", () => {
  if (video.currentTime - 10 <= 0) video.currentTime -= 0;
  else video.currentTime -= 10;
  video.play();
});

video.addEventListener("timeupdate", () => {
  const progress = video.currentTime / video.duration; // 0 = Début, 1 = Fin
  bar.style.transform = "scaleX(" + progress + ")"; // On applique le nouveau style a notre bar
});
