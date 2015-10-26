// http://api.wordnik.com:80/v4/word.json/apple/frequency?useCanonical=false&startYear=1800&endYear=2012&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5


var url = "http://api.wordnik.com:80/v4/word.json/" // fake address
var type = "/frequency?useCanonical=false&startYear=1800&endYear=2012&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"                  // fake address
var term = "apple";

var input;

function setup() {
  noCanvas();
  
  input = createInput('apple');
  var button = createButton('submit');
  button.mousePressed(getData);
}

function getData() {
  loadJSON(url + input.value() + type, gotData);
}

function gotData(data) {
  println(data);
}

function draw() {
  
}