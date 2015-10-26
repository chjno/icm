var linex = 0;
var offset = 0;
function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(0);
  randomSeed(39);
  for (var i = 0; i < 100; i++) {
    fill(255);
    var x = random(width);
    var y = random(height);
    ellipse(x+offset, y, 24, 24);
  }
  strokeWeight(4);
  stroke(255);
  line(linex, 0, linex, height);
  linex = linex + 1;
  
  offset = offset - 1;
  //noLoop();
}