var skaters = [];

var skater;

function mousePressed() {
  print(mouseY);
  if (mouseY > 500) {
    skater = {
      x: mouseX,
      y: mouseY-250,
      headX: 0,
      headY: 20,
      bodyX: -50,
      bodyY: 5,
      boardX: -85,
      boardY: 247,
      create: function() {
        image(skateboard, this.x + this.boardX, this.y + this.boardY);
        image(man, this.x + this.bodyX, this.y + this.bodyY);
        //head
        fill(253, 228, 200);
        ellipse(this.x + this.headX, this.y + this.headY, 30, 40);
        //helmet
        fill('black');
        arc(this.x + this.headX, this.y + this.headY - 10, 27, 20, PI, 2 * PI);
        //nostrils
        ellipse(this.x + this.headX - 2, this.y + this.headY + 5, 2, 2);
        ellipse(this.x + this.headX + 2, this.y + this.headY + 5, 2, 2);
        //eyes
        ellipse(this.x + this.headX - 5, this.y + this.headY - 3, 4, 4);
        ellipse(this.x + this.headX + 5, this.y + this.headY - 3, 4, 4);
        //mouth
        noFill();
        stroke('black');
        arc(this.x + this.headX, this.y + this.headY + 10, 10, 5, 0, PI);
      },
      move: function() {
        this.x += 1;
        if (this.x > 1100) {
          this.x = -100;
        }
      }
    }
    skaters.push(skater);
  }
}

function preload() {
  skateboard = loadImage('images/skateboard-small.png');
  man = loadImage('images/man.png');
  street = loadImage('images/street.jpg');
}

function setup() {
  createCanvas(1000, 750);
}

function draw() {
  background(street);
  itp();
  for (i = 0; i < skaters.length; i++) {
    skaters[i].create();
    skaters[i].move();
  }
}


function itp() {
  push();
  scale(0.4, 0.4);
  translate(900, 360);
  stroke('black');
  fill('red');
  rect(200, -10, 500, 510);
  //building side
  quad(700, 500, 750, 400, 750, -10, 700, -10);

  //window background
  fill(0, 0, 128);
  rect(300, 200, 80, 100);

  fill(0, 0, 128);
  rect(520, 200, 80, 100);

  //door
  stroke('black');
  strokeWeight(1);
  fill(160, 82, 45);
  rect(420, 390, 60, 110);

  //knob
  fill(255, 204, 0);
  ellipse(470, 450, 5, 5);

  //windowframes
  stroke('brown');
  noFill();
  strokeWeight(5);
  rect(300, 200, 80, 100);
  line(340, 200, 340, 300);
  line(300, 250, 380, 250);

  rect(520, 200, 80, 100);
  line(560, 200, 560, 300);
  line(520, 250, 600, 250);

  //ITP
  fill(75, 0, 130);
  noStroke();
  rect(315, 20, 20, 100);
  rect(440, 20, 20, 100);
  rect(410, 20, 80, 20);
  rect(560, 20, 20, 100);
  arc(580, 50, 70, 60, -HALF_PI, HALF_PI);
  fill('red');
  arc(580, 50, 30, 20, -HALF_PI, HALF_PI, CHORD);
  pop();
}