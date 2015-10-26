var numberlist = [50, 100, 25, 5, 150];

function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(0);
  fill(255);

  for (var i = 0; i < numberlist.length; i++) {
    ellipse(i * 100 + 100, 100, numberlist[i], numberlist[i]);

  }
}