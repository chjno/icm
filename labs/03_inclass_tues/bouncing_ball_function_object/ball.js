var ball = {
  x: 200,
  y: 30,
  speed: 0,
  display: function() {
    fill(255);
    ellipse(this.x, this.y, 24, 24);
  },
  move: function() {
    this.y = this.y + this.speed;
    this.speed = this.speed + gravity;

  },
  bounce: function() {
    if (this.y > height) {
      this.speed = this.speed * -0.95;
    }
  }
};
