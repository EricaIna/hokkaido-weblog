//hamburger
let nav = document.querySelector("#navArea");
let btn = document.querySelector(".hamburger-icon");

btn.onclick = () => {
  nav.classList.toggle("open");
};

//copy right year
document.getElementById("current-year").innerHTML = new Date().getFullYear();

//video loop

const video = document.getElementById("video");
const videos = [
  "img/mountain.mp4",
  "img/ski.mp4",
  "img/6.mp4",
  "img/7.mp4",
  // 他のビデオファイルを追加
];
let currentVideoIndex = 0;

function playNextVideo() {
  video.src = videos[currentVideoIndex];
  video.play();
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
}

video.addEventListener("ended", playNextVideo);

// play again
video.play();
