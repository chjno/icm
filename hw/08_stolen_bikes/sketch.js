var url = "https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&proximity=new%20york%2C%20ny&proximity_square=5&stolen_after=2014";




// var url = "http://api.wordnik.com:80/v4/word.json/" // fake address
// var type = "/frequency?useCanonical=false&startYear=1800&endYear=2012&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"                  // fake address
// var term = "apple";

var stolenBikes;

function setup() {
  createCanvas(1000,600);
  stolenBikes = loadJSON(url, gotData);
  // input = createInput('apple');
  // var button = createButton('submit');
  // button.mousePressed(getData);
  
  // var bike = loadImage();
  // println(bike);
}

function getData() {
  
}

function gotData(data) {
  println(stolenBikes.bikes[1].id);
}

function draw() {
  background(255);
  
  
  
}