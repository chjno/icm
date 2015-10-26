var json;

function preload() {
  json = loadJSON('birds.json');
}

function setup() {
  var albatross = json.birds[0].members[3];
  createP(albatross);
  
  for (var i = 0; i < json.birds.length; i++) {
    var bird = json.birds[i];
    createElement('h1',bird.family);
    
    for (var j = 0; j < bird.members.length; j++) {
      createDiv(bird.members[j]);
    }
  }
}

function draw() {
  
}