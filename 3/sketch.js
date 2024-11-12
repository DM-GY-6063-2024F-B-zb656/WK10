// TODO: volume and FFT

let song;
let mAmplitude;
let mFFT;

function preload() {
  song = loadSound("../assets/epic.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mAmplitude = new p5.Amplitude();
  mFFT = new p5.FFT();
}

function draw() {
  background(220, 20, 120);
  let mVolume = mAmplitude.getLevel();
  let diam = map(mVolume, 0, 1, 0, height);
  noStroke();
  // ellipse(width/2, height/2, diam);

  let spectrum = mFFT.analyze();
  let bass = mFFT.getEnergy("bass");
  let mid = mFFT.getEnergy("mid");
  let treble = mFFT.getEnergy("treble");

  ellipse(width/2, height/4, map(treble, 0, 255, 0, height/2));
  ellipse(width/2, 3*height/4, map(bass, 0, 255, 0, height/2));
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
