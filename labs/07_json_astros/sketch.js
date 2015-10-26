var space;

function setup() {
  createCanvas(200, 200);
  loadJSON('http://api.open-notify.org/astros.json', gotData, 'jsonp');
}

function gotData(data) {
  space = data;
}

function draw() {
  background(0);
  
  // since it takes time to load json
  if (space !== undefined) {
    for (var i = 0; i < space.number; i++) {
      ellipse(i * 20, 100, 10, 10);
    }
  }

}