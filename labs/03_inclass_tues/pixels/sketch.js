function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 0, 0);
  fill(255,0,150);
  rect(100,100,50,50);
}

function mousePressed() {
  loadPixels();
  var col = get(mouseX, mouseY);
  if (___________) {
    println("I clicked on red.");
  }
  println(col);

}