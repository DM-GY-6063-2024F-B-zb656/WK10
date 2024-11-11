// TODO: add other files
// TODO: add sound to exercise 1

let bloop;

function preload() {
  bloop = loadSound("../assets/bloop-0.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220, 20, 120);
}

function mouseClicked() {
  bloop.play();
}
