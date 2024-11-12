// TODO: add color and mouseover
//       classify it

let blinks = [];

class Blinky {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.visible = false;
    this.period = random(100, 1000);
    this.changed = 0;
    this.diam = 50;
    this.mocolor = color(255,0,0);
    this.mouseOver = false;
  }

  update() {
    if (millis() - this.changed > this.period) {
      this.visible = !this.visible;
      this.changed = millis();
    }

    this.mouseOver = dist(mouseX, mouseY, this.x, this.y) < (this.diam/2);
  }

  draw() {
    if (this.visible || this.mouseOver) {
      if(this.mouseOver) {
        fill(this.mocolor);
      } else {
        fill(255);
      }
      ellipse(this.x, this.y, this.diam);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(200, 20, 120);
  for (let idx = 0; idx < blinks.length; idx++){
    let mBlink = blinks[idx];
    mBlink.update();
    mBlink.draw();
  }
}

function mousePressed() {
  blinks.push(new Blinky(mouseX, mouseY));
}
