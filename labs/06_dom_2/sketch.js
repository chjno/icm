var x = 0;
var col;
var button;
var canvas;
var sw = 1;

function setup() {

  canvas = createCanvas(100, 100);
  canvas.mousePressed(resetColor);
  background(0);
  par = createP('Itjajajjajdkkdk');
  par.style('color','blue');
  par.style('margin-left','30px');
  button = createButton('submit');
  button.mousePressed(changeColor);

  slider = createSlider(1, 24, 4);

  col = color(255, 0, 0);

}

// function mousePressed() {
//   par.hide();
// }

function changeColor() {
  col = color(random(255), random(255), random(255));
}

function resetColor() {
  col = color(0);
}

function draw() {
  background(col);
  
  sw = slider.value()
  strokeWeight(sw);
  
  stroke(255);
  line(x, 0, x, height);
  x = x + 3;
  if (x > width) {
    x = 0;
  }
  // par.html(x);
}