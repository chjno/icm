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
  particle = {
    x: mouseX,
    y: mouseY,
    radius: random(5, 50),
    speed: 0,
    col: color(random(255), random(255), random(255)),
    display: function() {
      fill(this.col);
      ellipse(this.x, this.y, this.radius*2, this.radius*2);
    },
    move: function() {
      this.y += this.speed;
      this.speed += gravity;
      if (this.y > height-this.radius) {
        this.radius = random(5, 50);
        this.y = height-this.radius;
        this.speed *= -0.95;
        this.col = color(random(255), random(255), random(255));
      } else if (this.y < 0) {
        
        
      }
    }
  };
  particleList.push(particle);
}

function draw() {
  background(0);
  for (i = 0; i < particleList.length; i++) {
    particleList[i].display();
    particleList[i].move();
  }
}