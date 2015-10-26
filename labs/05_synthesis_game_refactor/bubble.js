function Bubble() {
  this.x = random(20, width - 20);
  this.y = 0;
  this.radius = 12;
  this.speed = random(1, 3);
  this.display = function() {
    fill(random(100, 200), random(100, 200), random(100, 200));
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  };
  this.move = function() {
    this.y += this.speed;
    if (this.y > height) {
      this.x = random(20, width - 20);
      this.y = 0;
    }
  }
}

function Bigbubble() {
  this.x = 300;
  this.y = 300;
  this.display = function() {
    ellipse(this.x, this.y, 50, 50);
  };
  this.move = function() {
    this.x += movement;
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > width) {
      this.x = width;
    }
  }
}