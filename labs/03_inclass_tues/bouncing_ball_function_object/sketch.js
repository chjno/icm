var gravity = 0.1;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(0);
  //displayBall();
  ball.display();
  ball.move();
  ball.bounce();
}