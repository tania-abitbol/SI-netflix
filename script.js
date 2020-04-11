const video = document.querySelector('.video');
const play = document.querySelector('.play');
const volumpos = document.querySelector('.volumpos');
const volumneg = document.querySelector('.volumneg');
const replay = document.querySelector('.replay');
const moreSec = document.querySelector('.moreSec');
const lessSec = document.querySelector('.lessSec');
const bar = document.querySelector('.bar')

play.addEventListener('click', () => {
  if (video.paused)
    video.play();
  else
    video.pause();
});

volumpos.addEventListener('click', () => {
  if (video.volume + 0.10 >= 1)
    video.volume = 1
  else
  video.volume += 0.1 // 0 = mute, 1 = max
});

volumneg.addEventListener('click', () => {
  if (video.volume - 0.10 <= 0)
    video.volume = 0
  else
  video.volume -= 0.1 // 0 = mute, 1 = max
});

replay.addEventListener('click', () => {
  video.currentTime = 0;
  video.play();
});

moreSec.addEventListener('click', () => {
  if (video.currentTime + 10 >= video.duration)
    video.currentTime += 0;
  else
  video.currentTime += 10;
  video.play();
});

lessSec.addEventListener('click', () => {
  if (video.currentTime - 10 <= 0)
    video.currentTime -= 0;
  else
  video.currentTime -= 10;
  video.play();
});

video.addEventListener('timeupdate', () => {
	const progress = video.currentTime / video.duration // 0 = Début, 1 = Fin
	bar.style.transform = 'scaleX(' + progress + ')' // On applique le nouveau style a notre bar
})


