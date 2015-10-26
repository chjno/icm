var particle;
var gravity = 0.1;

function setup() {
  createCanvas(400, 400);
  particle = {
    x: random(width),
    y: 100,
    radius: 24,
    speed: 0,
    col: color(0,255,0),
    display: function() {
      fill(this.col);
      ellipse(this.x, this.y, this.radius, this.radius);
    },
    move: function() {
      this.y += this.speed;
      this.speed += gravity;
      if (this.y > height) {
        this.speed *= -0.95;
        this.col = color(random(255),random(255),0);
        this.radius = random(5,50);
      }
    }
  };
}

function draw() {
  background(0);
  particle.display();
  particle.move();
}