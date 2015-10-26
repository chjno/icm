function Particle() {
  this.x = mouseX;
  this.y = mouseY;
  this.radius = random(5, 50);
  this.speed = 0;
  this.col = color(random(255), random(255), random(255));
  this.display = function() {
    fill(this.col);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  };
  this.move = function() {
    this.y += this.speed;
    this.speed += gravity;
    if (this.y > height - this.radius && gravity > 0) {
      this.radius = random(5, 50);
      this.y = height - this.radius;
      this.speed *= -0.95;
      this.col = color(random(200), random(200), random(200));
    } else if (this.y < this.radius && gravity < 0) {
      this.radius = random(5, 50);
      this.y = this.radius;
      this.speed *= -0.95;
      this.col = color(random(100,255), random(100,255), random(100,255));
    }
  }
}