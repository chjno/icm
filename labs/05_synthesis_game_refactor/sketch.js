var bubbles = [];
var score = 0;
var movement;

// This example shows how to read an analog
// value from an serial port
// and draw circle with size mapped to that value

// Declare a "SerialPort" object
var serial;

// Variable for size 
var sensorVal = 0;

function setup() {
  createCanvas(600, 400);
  serial = new p5.SerialPort();
  serial.open("/dev/cu.usbmodem1411");
  serial.onData(gotData);
  for (i = 0; i < 5; i++) {
    bubbles.push(new Bubble());
  }
}

function gotData() {
  var data = serial.readLine();
  if (data.length > 0); {
    sensorVal = Number(data) / 10;
  }
}

function draw() {
  background(0);
  fill(255);
  movement = map(sensorVal, 0, 15, -5, 5);
  
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }
  for (i = 0; i < bubbles.length; i++) {
    if (dist(ellipseX, ellipseY, bubbles[i].x, bubbles[i].y) < 37) {
      score += 1;
      bubbles[i].x = random(20, width - 20);
      bubbles[i].y = 0;
    }
  }

  fill(0, 255, 0);
  textAlign(RIGHT, BOTTOM);
  textSize(24);
  text('Score = ' + score, 550, 380);

  // Display raw data in canvas
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text(sensorVal, width / 2, height -12);

  // // Draw the circle!
  // fill(255);
  // ellipse(width/2, height/2, sensorVal, sensorVal);
}


/*
// Got the list of ports
function gotList(thelist) {
  println("List of Serial Ports:");
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    println(i + " " + thelist[i]);
  }
}*/