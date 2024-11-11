// TODO: classify it

let moves = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(200, 20, 120);
  for (let idx = 0; idx < moves.length; idx++) {
    let mMove = moves[idx];
    mMove.pos = p5.Vector.add(mMove.pos, mMove.vel);
    if (mMove.pos.x > width - mMove.rad || mMove.pos.x < mMove.rad) {
      mMove.vel.x *= -1;
    }

    if (mMove.pos.y > height - mMove.rad || mMove.pos.y < mMove.rad) {
      mMove.vel.y *= -1;
    }

    ellipse(mMove.pos.x, mMove.pos.y, 2 * mMove.rad);
  }
}

function mousePressed() {
  moves.push({
    pos: createVector(mouseX, mouseY),
    vel: createVector(random(-10, 10), random(-10, 10)),
    rad: random(15, 25),
  });
}
