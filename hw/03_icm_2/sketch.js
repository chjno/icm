var cloudX = 100;
var face = 0;
var faceAlpha = 0;
var meY = 525;
var leftWall = 0;
var rightWall = 1000;
var mouseXC;
var inside = false;
var bodyAlpha = 255;
var itp;
var insideCol = {
  r: 0,
  g: 0,
  b: 128
}
  
var doorFill = {
  r: 160,
  g: 82,
  b: 45
}
var knobFill = {
  r: 255,
  g: 204,
  b: 0
}

function setup() {
  createCanvas(1000,650);
}

function draw() {
  
  background(135,206,250);
  
  //darkness
  night = map(mouseY,0,height,0,255);
  fill(0,night);
  rect(0,0,width,200);

  //sun
  noStroke();
  fill(255,255,0,255-night);
  ellipse(1000,0,100,100);
  stroke(255,255,0,255-night);
  line(930,15,880,25);
  line(945,40,900,65);
  line(965,60,935,95);
  line(990,70,980,115);
  
  //stars
  noStroke();
  fill(255,255,255,night);
  ellipse(0,0,100,100);
  
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
  rect(0,200,1000,450);
  
  //building front
  stroke('black');
  fill('red');
  rect(200,-10,500,510);
  //building side
  quad(700,500,750,400,750,-10,700,-10);
  
  //window background
  if (meY == 275) {
    insideCol.g = random(255);
    insideCol.b = random(255);
  } else {
    insideCol.g = 0;
    insideCol.b = 128;
  }
  
  fill(insideCol.r,insideCol.g,insideCol.b);
  rect(300,200,80,100);
  
  fill(insideCol.r,insideCol.g,insideCol.b);
  rect(520,200,80,100);
  
  //door
  stroke('black');
  strokeWeight(1);
  fill(doorFill.r,doorFill.g,doorFill.b);
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

  mouseXC = constrain(mouseX,leftWall,rightWall);
  //head
  fill(253,228,200);
  ellipse(mouseXC,meY,30,40);
  //helmet
  fill('black');
  arc(mouseXC,meY-10,27,20,PI,2*PI);
  //nostrils
  ellipse(mouseXC-2,meY+5,2,2);
  ellipse(mouseXC+2,meY+5,2,2);
  //eyes
  ellipse(mouseXC-5,meY-3,4,4);
  ellipse(mouseXC+5,meY-3,4,4);
  //mouth
  noFill();
  stroke('black');
  arc(mouseXC,meY+10,10,5,0,PI);
  
  stroke(0,0,0,bodyAlpha);
  line(mouseXC-30,meY+80,mouseXC+30,meY+80);
  arc(mouseXC-30,meY+75,20,10,HALF_PI,PI);
  arc(mouseXC+30,meY+75,20,10,0,HALF_PI);
  ellipse(mouseXC-20,meY+86,8,8);
  ellipse(mouseXC+20,meY+86,8,8);
  noFill();
  triangle(mouseXC,meY+60,mouseXC-15,meY+80,mouseXC+15,meY+80);
  line(mouseXC,meY+60,mouseXC,meY+20);
  line(mouseXC,meY+30,mouseXC+20,meY+20);
  line(mouseXC,meY+30,mouseXC-20,meY+20);
  
  //between windows
  noStroke();
  fill('red');
  rect(380,200,140,100);
  
  //windowframes
  stroke('brown');
  noFill();
  strokeWeight(5);
  rect(300,200,80,100);
  line(340,200,340,300);
  line(300,250,380,250);
  
  rect(520,200,80,100);
  line(560,200,560,300);
  line(520,250,600,250);
  
  
  //ITP
  var itp = {
  r: 75,
  g: 0,
  b: 130
  };
  fill(itp.r,itp.g,itp.b);
  noStroke();
  rect(315,20,20,100);
  rect(440,20,20,100);
  rect(410,20,80,20);
  rect(560,20,20,100);
  arc(580,50,70,60,-HALF_PI,HALF_PI);
  fill('red');
  arc(580,50,30,20,-HALF_PI,HALF_PI,CHORD);
  
  // calder
  // if (mouseIsPressed) {
  //   if (mouseY > 480 && mouseY < 520) {

      translate(mouseX-90,475);  
      scale(0.15,0.15);
      fill(2,2,2,faceAlpha);
      beginShape();
      vertex(367,404);
      bezierVertex(408,427,437,403,468,380);
      bezierVertex(428,366,390,352,350,337);
      bezierVertex(394,325,436,313,479,302);
      bezierVertex(461,266,428,239,429,194);
      bezierVertex(461,207,493,219,526,232);
      bezierVertex(531,209,537,188,547,167);
      bezierVertex(563,134,587,110,620,94);
      bezierVertex(621,93,623,90,626,93);
      bezierVertex(628,95,627,97,626,100);
      bezierVertex(623,108,619,115,613,122);
      bezierVertex(608,126,606,132,605,139);
      bezierVertex(601,155,602,171,603,187);
      bezierVertex(603,193,605,199,610,200);
      bezierVertex(614,201,618,196,621,192);
      bezierVertex(630,174,638,156,634,134);
      bezierVertex(633,129,634,124,634,118);
      bezierVertex(652,128,665,143,674,161);
      bezierVertex(684,180,679,199,673,219);
      bezierVertex(682,218,690,216,698,213);
      bezierVertex(724,205,751,201,778,202);
      bezierVertex(787,202,798,203,801,211);
      bezierVertex(803,217,795,225,788,230);
      bezierVertex(769,244,751,258,733,271);
      bezierVertex(730,273,727,274,728,277);
      bezierVertex(729,281,733,279,735,279);
      bezierVertex(755,281,775,280,795,273);
      bezierVertex(802,270,812,266,817,273);
      bezierVertex(821,279,816,288,811,295);
      bezierVertex(797,315,780,332,759,345);
      bezierVertex(755,347,751,350,746,354);
      bezierVertex(759,361,773,361,786,357);
      bezierVertex(809,351,829,340,847,325);
      bezierVertex(855,319,863,313,872,305);
      bezierVertex(851,370,820,422,744,432);
      bezierVertex(770,454,781,479,765,509);
      bezierVertex(754,531,735,539,712,541);
      bezierVertex(712,536,715,534,718,531);
      bezierVertex(735,516,732,488,712,477);
      bezierVertex(699,470,686,469,672,469);
      bezierVertex(666,468,669,472,670,475);
      bezierVertex(676,494,677,513,668,532);
      bezierVertex(661,545,651,556,638,564);
      bezierVertex(622,573,605,581,585,588);
      bezierVertex(596,568,616,554,613,529);
      bezierVertex(611,507,605,486,589,470);
      bezierVertex(577,486,565,502,555,519);
      bezierVertex(549,529,549,540,553,551);
      bezierVertex(554,556,558,562,553,565);
      bezierVertex(548,568,541,565,536,560);
      bezierVertex(519,542,509,521,509,495);
      bezierVertex(510,480,511,465,512,451);
      bezierVertex(510,449,509,450,508,450);
      bezierVertex(482,465,455,464,428,451);
      bezierVertex(405,439,385,424,367,404);
      endShape();
      
      fill(2,2,2,faceAlpha);
      beginShape();
      vertex(569,416);
      bezierVertex(569,417,568,418,567,418);
      bezierVertex(565,418,563,418,562,419);
      bezierVertex(561,420,564,421,564,422);
      bezierVertex(590,452,639,449,666,418);
      bezierVertex(668,415,667,413,664,412);
      bezierVertex(663,406,672,406,671,399);
      bezierVertex(636,418,600,425,562,411);
      bezierVertex(564,413,567,414,569,416);
      endShape();
      
      fill(2,2,2,faceAlpha);
      beginShape();
      vertex(612,397);
      bezierVertex(615,397,618,397,621,396);
      bezierVertex(644,392,649,381,638,361);
      bezierVertex(632,350,625,339,618,328);
      bezierVertex(613,320,610,320,605,329);
      bezierVertex(599,340,593,351,587,363);
      bezierVertex(577,384,582,394,606,397);
      bezierVertex(608,397,610,397,612,397);
      endShape();
      
      fill(2,2,2,faceAlpha);
      beginShape();
      vertex(723,308);
      bezierVertex(700,290,677,286,650,293);
      bezierVertex(640,295,630,301,623,310);
      bezierVertex(621,313,620,316,625,318);
      bezierVertex(639,327,654,333,672,330);
      bezierVertex(691,327,706,318,723,308);
      endShape();
      
      fill(2,2,2,faceAlpha);
      beginShape();
      vertex(501,316);
      bezierVertex(514,330,529,338,547,340);
      bezierVertex(566,341,583,334,595,318);
      bezierVertex(598,314,598,312,594,309);
      bezierVertex(583,301,572,297,560,297);
      bezierVertex(538,296,520,306,501,316);
      endShape();
      
      fill(248,248,248,faceAlpha);
      beginShape();
      vertex(612,397);
      bezierVertex(610,397,608,397,606,397);
      bezierVertex(582,394,577,384,587,363);
      bezierVertex(593,351,599,340,605,329);
      bezierVertex(610,320,613,320,618,328);
      bezierVertex(625,339,632,350,638,361);
      bezierVertex(649,381,644,392,621,396);
      bezierVertex(618,397,615,397,612,397);
      endShape();
      
      fill(245,245,245,faceAlpha);
      beginShape();
      vertex(723,308);
      bezierVertex(706,318,691,327,672,330);
      bezierVertex(654,333,639,327,625,318);
      bezierVertex(620,316,621,313,623,310);
      bezierVertex(630,301,640,295,650,293);
      bezierVertex(677,286,700,290,723,308);
      endShape();
      
      fill(245,245,245,faceAlpha);
      beginShape();
      vertex(683,308);
      bezierVertex(683,302,681,298,675,297);
      bezierVertex(670,297,657,308,658,312);
      bezierVertex(659,318,663,321,669,322);
      bezierVertex(677,322,683,316,683,308);
      endShape();
      
      fill(246,246,246,faceAlpha);
      beginShape();
      vertex(501,316);
      bezierVertex(520,306,538,296,560,297);
      bezierVertex(572,297,583,301,594,309);
      bezierVertex(598,312,598,314,595,318);
      bezierVertex(583,334,566,341,547,340);
      bezierVertex(529,338,514,330,501,316);
      endShape();
      
      fill(246,246,246,faceAlpha);
      beginShape();
      vertex(546,332);
      bezierVertex(553,330,561,329,561,320);
      bezierVertex(561,313,555,309,549,307);
      bezierVertex(544,306,535,316,536,321);
      bezierVertex(537,326,540,330,546,332);
      endShape();
      
      fill(243,243,243,faceAlpha);
      beginShape();
      vertex(664,412);
      bezierVertex(667,413,668,415,666,418);
      bezierVertex(639,449,590,452,564,422);
      bezierVertex(564,421,561,420,562,419);
      bezierVertex(563,418,565,418,567,418);
      bezierVertex(574,423,582,426,591,428);
      bezierVertex(615,433,638,432,658,416);
      //lineTo(658,416);
      bezierVertex(659,416,659,416,660,416);
      bezierVertex(663,416,664,414,664,412);
      endShape();
      
      fill(237,237,237,faceAlpha);
      beginShape();
      vertex(664,412);
      bezierVertex(664,414,663,416,660,416);
      bezierVertex(660,415,659,414,659,414);
      bezierVertex(657,414,657,415,658,416);
      //lineTo(658,416);
      bezierVertex(656,413,655,416,653,416);
      bezierVertex(625,428,597,428,569,416);
      bezierVertex(567,414,564,413,562,411);
      bezierVertex(600,425,636,418,671,399);
      bezierVertex(672,406,663,406,664,412);
      endShape();
      
      fill(30,30,30,faceAlpha);
      beginShape();
      vertex(569,416);
      bezierVertex(597,428,625,428,653,416);
      bezierVertex(655,416,656,413,658,416);
      bezierVertex(638,432,615,433,591,428);
      bezierVertex(582,426,574,423,567,418);
      bezierVertex(568,418,569,417,569,416);
      endShape();
      
      fill(10,10,10,faceAlpha);
      beginShape();
      vertex(683,308);
      bezierVertex(683,316,677,322,669,322);
      bezierVertex(663,321,659,318,658,312);
      bezierVertex(657,308,670,297,675,297);
      bezierVertex(681,298,683,302,683,308);
      endShape();
      
      fill(12,12,12,faceAlpha);
      //fill(random(0,255));
      beginShape();
      vertex(546,332);
      bezierVertex(540,330,537,326,536,321);
      bezierVertex(535,316,544,306,549,307);
      bezierVertex(555,309,561,313,561,320);
      bezierVertex(561,329,553,330,546,332);
      endShape();
      
      fill(30,30,30,faceAlpha);
      beginShape();
      vertex(658,416);
      bezierVertex(657,415,657,414,659,414);
      bezierVertex(659,414,660,415,660,416);
      bezierVertex(659,416,659,416,658,416);
      endShape();
  //   }
  // }
}

function mousePressed() {
  
  // transform into calder
  if (mouseY > 505 && mouseY < 545 && faceAlpha == 0 && meY == 525) {
    faceAlpha = 255;
  } else if (mouseY > 505 && mouseY < 545 && faceAlpha == 255 && meY == 525) {
    faceAlpha = 0;
  }

  // enter school
  if (mouseX > 420 && mouseX < 480 && mouseY > 390 && mouseY < 480 && meY == 525) {
    meY = 275;
    leftWall = 320;
    rightWall = 580;
    faceAlpha = 0;
    bodyAlpha = 0;
    // insideCol.g = random(255);
    // insideCol.b = random(255);
  } else if (mouseX > 420 && mouseX < 480 && mouseY > 390 && mouseY < 480 && meY == 275) {
    meY = 525;
    leftWall = 0;
    rightWall = 1000;
    bodyAlpha = 255;
    // insideCol.g = 0;
    // insideCol.b = 128;
    // itp.r = 0;
    // itp.g = random(255);
    // itp.b = random(255);
    
  //   doorFill = {
  //     r: 0,
  //     g: 0,
  //     b: 0
  //   }
  //   knobFill = {
  //     r: 0,
  //     g: 0,
  //     b: 0
  //   }
  }
}

//

  // //building front
  // stroke('black');
  // fill('red');
  // rect(200,-10,500,510);
  // //building side
  // quad(700,500,750,400,750,-10,700,-10);
  
  // //window background
  // fill('navy');
  // rect(300,200,80,100);
  
  // fill('navy');
  // rect(520,200,80,100);
  
  // mouseXC = constrain(mouseX,leftWall,rightWall);
  // //head
  // fill(253,228,200);
  // ellipse(mouseXC,meY,30,40);
  // //helmet
  // fill('black');
  // arc(mouseXC,meY-10,27,20,PI,2*PI);
  // //nostrils
  // ellipse(mouseXC-2,meY+5,2,2);
  // ellipse(mouseXC+2,meY+5,2,2);
  // //eyes
  // ellipse(mouseXC-5,meY-3,4,4);
  // ellipse(mouseXC+5,meY-3,4,4);
  // //mouth
  // noFill();
  // stroke('black');
  // arc(mouseXC,meY+10,10,5,0,PI);
  
  // line(mouseXC-30,meY+80,mouseXC+30,meY+80);
  // arc(mouseXC-30,meY+75,20,10,HALF_PI,PI);
  // arc(mouseXC+30,meY+75,20,10,0,HALF_PI);
  // ellipse(mouseXC-20,meY+86,8,8);
  // ellipse(mouseXC+20,meY+86,8,8);
  // noFill();
  // triangle(mouseXC,meY+60,mouseXC-15,meY+80,mouseXC+15,meY+80);
  // line(mouseXC,meY+60,mouseXC,meY+20);
  // line(mouseXC,meY+30,mouseXC+20,meY+20);
  // line(mouseXC,meY+30,mouseXC-20,meY+20);
  
  // //windowframes
  // stroke('brown');
  // noFill();
  // strokeWeight(5);
  // rect(300,200,80,100);
  // line(340,200,340,300);
  // line(300,250,380,250);
  
  // rect(520,200,80,100);
  // line(560,200,560,300);
  // line(520,250,600,250);