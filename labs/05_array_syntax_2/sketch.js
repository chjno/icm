var languages = ['c++', 'java', 'javascript', 'python'];

var num = 5;

function setup() {
  createCanvas(400, 300);
  background(0);
}

function mousePressed() {
  background(0);
  var index = floor(random(0, languages.length));
  
  // without floor you'd get floats, limits it to 0,1,2,3
  
  fill(255);
  textSize(64);
  text(languages[index], 50, 50);
}

function draw() {

}