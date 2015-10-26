// var weather = {
//   temp: 72,
//   status: "raining"
// }

var space;

function setup() {
  createCanvas(600, 300);
  weather = loadJSON('http://api.open-notify.org/astros.json', gotData, 'jsonp');
}

function gotData(data) {
  space = data;
  println(space);
}

function draw() {
  background(0);

  if (space) {
    for (var i = 0; i < space.number; i++) {
      fill(255);
      ellipse(25 + i * 100, 100 + 15 * i, 10, 10);
      text(space.people[i].name, i * 100, 150 + 15 * i);
    }
  }


}