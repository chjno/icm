var h1;
var par;

function setup() {
  var canvas = createCanvas(200, 200);
  canvas.parent('container');
  // h1 = createElement('h1','Sol LeWitt');
  // par = createP('I like Sol.');

  button = select('#clicker');
  button.mousePressed(changestuff);

}

function changestuff() {
  var elements = selectAll('.Sol');
  for (var i = 0; i < elements.length; i++) {
    elements[i].html('I am element ' + i);
  }
  button.html('I am clicked');
}

function draw() {
  background(0);
}