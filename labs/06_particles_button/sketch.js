var particleList = [];
var particle;
var gravity = 0.1;
var button;

function setup() {
  createCanvas(400, 400);
  button = createButton('Reverse');
  button.mousePressed(reverseG);
}

function reverseG() {
  gravity = -gravity;
}

function mousePressed() {
  if (mouseX < width) {
    particleList.push(new Particle());
  }
}

function draw() {
  background(0);
  for (i = 0; i < particleList.length; i++) {
    particleList[i].display();
    particleList[i].move();
  }
}