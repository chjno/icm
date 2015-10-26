function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(51);
  rainbow(100, 100, 255, 0, 0, 64);
  rainbow(200, 200, 0, 255, 0, 32);
}

function rainbow(x, y, r, g, b, diameter) {
  println(x);
  fill(r, g, b);
  ellipse(x, y, diameter, diameter);
  fill(150, 0, 255);
  ellipse(x + 50, y, diameter, diameter);
}