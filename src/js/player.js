const video = document.querySelector(".video");
const videoContent = document.querySelector(".video__player");
const play = document.querySelector(".video__controller--play");
const volumpos = document.querySelector(".video__controller--increase-volume");
const volumneg = document.querySelector(".video__controller--dicrease-volume");
const replay = document.querySelector(".video__controller--replay");
const moreSec = document.querySelector(".video__controller--addtime-forward");
const lessSec = document.querySelector(".video__controller--addtime-backward");
const bar = document.querySelector('.video__progress')
const progressBar = document.querySelector(".video__progress__bar");
videoContent.volume = 0.2;

play.addEventListener("click", () => {
  if (videoContent.paused) {
    videoContent.play();
    play.textContent = 'Pause'
  } else {
    videoContent.pause();
    play.textContent = 'Play'
  }
});


volumpos.addEventListener("click", () => {
  if (videoContent.volume + 0.10 <= 1) {
    videoContent.volume += 0.10;
    console.log('y')
  } else {
    videoContent.volume = 1;
  }
  console.log(videoContent.volume)
});

volumneg.addEventListener("click", () => {
  if (videoContent.volume - 0.1 >= 0) videoContent.volume -= 0.10;
  else video.volume = 0; // 0 = mute, 1 = max
});

replay.addEventListener("click", () => {
  videoContent.currentTime = 0;
});

moreSec.addEventListener("click", () => {
  // if (video.currentTime + 10 >= video.duration) video.currentTime += 0;
  // else video.currentTime += 10;
  // video.play();
  videoContent.currentTime += 10;
});

lessSec.addEventListener("click", () => {
  // if (video.currentTime - 10 <= 0) video.currentTime -= 0;
  // else video.currentTime -= 10;
  // video.play();
  videoContent.currentTime -= 10;
});


// videoContent.addEventListener('timeupdate', () =>{
//   // var positionSouris = event.pageX;
//   // var positionBar = bar.offsetWidth;
//   // var positionProgress = progressBar.offsetLeft;
//   var vid = videoContent.currentTime;
//   // var x = positionSouris - positionProgress;
//   // var pourcent = Math.ceil((x / positionBar)*100);
//   var duration = videoContent.duration;
//   // var vid = (duration * pourcent)/100;
//   // if(!videoContent.ended){
// bar.style.width = parseInt(vid * 100 / duration) + '%';

// console.log(vid, bar.style.width, duration)
// });

// videoContent.addEventListener('timeupdate', () => {
//   progressBar.value = video.currentTime;
// });


videoContent.addEventListener('timeupdate', () => {
  var vid = videoContent.currentTime;
  var duration = videoContent.duration;
  if (videoContent.currentTime !== videoContent.duration) {
    progressBar.style.width = vid / duration * 100 + '%';
    console.log(bar.style.width)
  } else {
    progressBar.style.width = '0%';
  }
})

// progressBar.addEventListener('click', (positionSouris) =>{

//   var videoTime = parseInt(videoContent.currentTime * 100 / videoContent.duration) + '%'; //% progression video
//   positionSouris = videoTime;
//   if(positionSouris == videoContent.currentTime){
//     videoTime = videoContent.currentTime
//   }
//   console.log('Souris' + positionSouris, 'videoTime' + videoTime, 'current' + video.currentTime)
// })

// videoContent.addEventListener("timeupdate", () => {
//   const progress = videoContent.currentTime / videoContent.duration; // 0 = Début, 1 = Fin
//   bar.style.transform = "scaleX(" + progress + ")"; // On applique le nouveau style a notre bar
//   console.log(bar.style.transform)
//   console.log('prog' + progress)
// });