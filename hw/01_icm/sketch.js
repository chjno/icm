var cloudX = 100;

function setup() {
  createCanvas(1000,600);
}

function draw() {
  background(135,206,250);

  //sun
  fill('yellow');
  ellipse(1000,0,100,100);
  stroke('yellow');
  line(930,15,880,25);
  line(945,40,900,65);
  line(965,60,935,95);
  line(990,70,980,115);
  
  //cloud1
  fill('white');
  noStroke();
  ellipse(cloudX,30,60,50);
  ellipse(cloudX+20,40,40,50);
  ellipse(cloudX+30,26,50,50);
  ellipse(cloudX+40,40,50,30);
  cloudX = cloudX + .5;
  if (cloudX > 1050) {
    cloudX = -90
  }
  
  
  //street
  noStroke();
  fill(100);
  rect(0,200,1000,400);
  
  //building front
  stroke('black');
  fill('red');
  rect(200,-10,500,510);
  //building side
  quad(700,500,750,400,750,-10,700,-10);
  
  //window
  fill('navy');
  stroke('brown');
  strokeWeight(5);
  rect(300,200,80,100);
  line(340,200,340,300);
  line(300,250,380,250);
  
  rect(520,200,80,100);
  line(560,200,560,300);
  line(520,250,600,250);
  
  //door
  stroke('black');
  strokeWeight(1);
  fill(160,82,45);
  rect(420,390,60,110);
  
  //knob
  fill(255,204,0);
  ellipse(470,450,5,5);
  
  // sidewalk
  fill(200);
  noStroke();
  arc(200,500,100,100,HALF_PI,PI);
  arc(700,500,100,100,.12*PI,HALF_PI);
  arc(750,400,100,100,3*PI/2,2*PI);
  quad(200,500,200,550,700,550,700,500);
  quad(746,518,800,400,750,400,700,500);
  quad(150,500,200,400,200,500,150,500);

  //head
  fill(253,228,200);
  ellipse(mouseX,500,30,40);
  //helmet
  fill('black');
  arc(mouseX,490,27,20,PI,2*PI);
  //nostrils
  ellipse(mouseX-2,505,2,2);
  ellipse(mouseX+2,505,2,2);
  //eyes
  ellipse(mouseX-5,497,4,4);
  ellipse(mouseX+5,497,4,4);
  //mouth
  noFill();
  stroke('black');
  arc(mouseX,510,10,5,0,PI);
  
  line(mouseX-30,580,mouseX+30,580);
  arc(mouseX-30,575,20,10,HALF_PI,PI);
  arc(mouseX+30,575,20,10,0,HALF_PI);
  ellipse(mouseX-20,586,8,8);
  ellipse(mouseX+20,586,8,8);
  noFill();
  triangle(mouseX,560,mouseX-15,580,mouseX+15,580);
  line(mouseX,560,mouseX,520);
  line(mouseX,530,mouseX+20,520);
  line(mouseX,530,mouseX-20,520);
  
  //ITP
  fill('purple');
  noStroke();
  rect(315,20,20,100);
  rect(440,20,20,100);
  rect(410,20,80,20);
  rect(560,20,20,100);
  arc(580,50,70,60,-HALF_PI,HALF_PI);
  fill('red');
  arc(580,50,30,20,-HALF_PI,HALF_PI,CHORD);
}