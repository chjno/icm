var ball = {
  x: 200,
  y: 30,
  speed: 0,
  img: undefined
};

// var x = 200;
// var y = 30;
// var speed = 0;

var gravity = 0.1;

// function preload() {
//   ball.img = loadImage('images/astronaut.jpg');
// }

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(0);

  fill(255);
  ellipse(ball.x, ball.y, 24, 24);
  //image(ball.img, ball.x, ball.y);
  
  ball.y = ball.y + ball.speed;
  ball.speed = ball.speed + gravity;
  
  if (ball.y > height) {
    ball.speed = ball.speed * -0.95;
  }
  
  

}