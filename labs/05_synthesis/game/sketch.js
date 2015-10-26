var ellipseX = 300;
var ellipseY = 300;
var bubble;
var bubbles = [];
var score = 0;

// This example shows how to read an analog
// value from an serial port
// and draw circle with size mapped to that value

// Declare a "SerialPort" object
var serial;

// Variable for size 
var diameter = 0;

function setup() {
  createCanvas(600, 400);

  // Instantiate our SerialPort object
  serial = new p5.SerialPort();

  // Assuming our Arduino is connected, let's open the connection to it
  // Change this to the name of your arduino's serial port
  serial.open("/dev/cu.usbmodem1411");

  // if you need to see the list
  // serial.onList(gotList);

  // This is a new concept!
  // Whenever there is new data, the "gotData" function happens.
  // This is called a *CALLBACK*
  serial.onData(gotData);

  for (i = 0; i < 5; i++) {
    bubble = {
      x: random(20, width - 20),
      y: 0,
      radius: 12,
      speed: random(1, 3),
      display: function() {
        fill(random(100, 200), random(100, 200), random(100, 200));
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
      },
      move: function() {
        this.y += this.speed;
        if (this.y > height) {
          this.x = random(20, width - 20);
          this.y = 0;
        }
      }
    }
    bubbles.push(bubble);
  }
}

// This happens when there is data
function gotData() {
  // Read the data as text (a string)!
  var data = serial.readLine();
  // Check to make sure something really came in
  if (data.length > 0); {
    // To use it as a number, the Number() function
    // converts it.  Divide by 10 to make it smaller
    diameter = Number(data);
  }
}

function draw() {
  background(0);
  fill(255);
  // var movement = map(diameter, 0, 15, -5, 5);
  var movement = map(diameter, 570, 900, -5, 5);
  ellipse(ellipseX, ellipseY, 50, 50);
  ellipseX += movement;
  if (ellipseX < 0) {
    ellipseX = 0;
  } else if (ellipseX > width) {
    ellipseX = width;
  }
  // constrain(ellipseX, 0, width);
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }
  // bubble.display();
  // bubble.move();
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
  text(diameter, width / 2, height -12);

  // // Draw the circle!
  // fill(255);
  // ellipse(width/2, height/2, diameter, diameter);
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