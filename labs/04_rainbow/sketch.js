xShift = 0;
yShift = 5;

function setup() {
  createCanvas(1000, 600);
  background(51);
}

function rainbow(x, y) {
  noStroke();
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
  fill(0, 255, 0);
  ellipse(x - 50, y, 50, 50);
}

function draw() {

  for (i = 0; i < 100; i++) {
    rainbow(900 - xShift, 500-yShift);
    //translate(xShift, yShift);
    xShift = xShift + 0.5;
    yShift -= 0.5;
  }
}