var bubbles = [];
var bubble;

function setup() {
  createCanvas(500, 300);
  for (i = 0; i < 30; i++) {
    bubbles.push(new Bubble());
  }
}

function drawPot() {
  strokeWeight(6);
  stroke(0);
  fill(255);
  ellipse(240, 170, 135, 50);

  fill(255);
  ellipse(240, 170, 100, 100);

  fill(0, 0, 255, 100);
  strokeWeight(15);
  stroke(0);
  ellipse(240, 170, 100, 100);
}

function drawText() {
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(200);
  textFont();
  text('B   i l', 250, 150);
}

function draw() {
  background(255);
  drawText();
  drawPot();
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }
}