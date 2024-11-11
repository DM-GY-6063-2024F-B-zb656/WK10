// TODO: volume and FFT

let song;

function preload() {
  song = loadSound("../assets/epic.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220, 20, 120);
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
