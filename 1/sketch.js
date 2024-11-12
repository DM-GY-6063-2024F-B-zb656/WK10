// TODO: classify it
class Movey {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-10, 10), random(-10, 10));
    this.rad = random(15, 25);
    this.bloop = loadSound("../assets/bloop-0.mp3");
    this.bloop.playMode("untilDone");
  }

  updateAndDraw(others) {
    this.pos.add(this.vel);

    if (this.pos.x > width - this.rad || this.pos.x < this.rad) {
      this.vel.x *= -1;
    }

    if (this.pos.y > height - this.rad || this.pos.y < this.rad) {
      this.vel.y *= -1;
    }

    let overlap = false;
    for (let idx = 0; idx < moves.length; idx++) {
      let otherMovey = others[idx];
      let dist = p5.Vector.dist(this.pos, otherMovey.pos);
      let lookingAtMyself = this.pos == otherMovey.pos;

      overlap = dist < (this.rad + otherMovey.rad) && !lookingAtMyself;

      if (overlap) {
        break;
      }
    }

    if (overlap) {
      fill(255,0,0);
      this.bloop.play();
    } else {
      fill(255);
    }

    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }
}

let moves = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(200, 20, 120);
  for (let idx = 0; idx < moves.length; idx++) {
    let mMove = moves[idx];
    mMove.updateAndDraw(moves);
  }
}

function mousePressed() {
  moves.push(new Movey(mouseX, mouseY));
}

function keyPressed() {
  moves.push(new Movey(width / 2, height / 2));
}
