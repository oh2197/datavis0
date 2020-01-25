/*AUTHOR: oh2197 
CITATIONS: Along with the p5.js reference page, I also recieved help from example 1 and example 3 provided to us. */ 

//these variables were given via example 1
var xPos = 20; // starting x position to draw
var yPos = 20;  // starting y position to draw
var barHeight = 180; // height of each bar
var barMargin = 10; // space between each bar
var barMax = 760; // maximum width of each bar <-
var xPos = 100; // starting x position to draw
var yPos = 300;  // starting y position to draw
var barHeight = 10; // height of each bar
var barMargin = 10; // space between each bar
var barMax = 225; // maximum width of each bar <-


//example 3
var hour_xs = [], hour_ys = [];
var sec_xs = [], sec_ys = [];

const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
	printMinute();
	createCanvas(800,600); // make an HTML canvas element width x height pixels	
	b1 = color(255);
	b2 = color(0);
	c1 = color(50,67,118);
	c2 = color(0, 102, 153);
	amt = 0;
	startColor = color(230,241,74);
    newColor = color(random(255),random(255),random(255));
  
	for (var i = 0; i < 24; i++){
	    append(hour_xs, random(width));
	    append(hour_ys, random(height));
  }
  for (var i = 0; i < 60; i++){
      append(sec_xs, random(width));
      append(sec_ys, random(height));
  }


}

function draw() {
  //setGradient(0, 0, 800, height, c1, c2, X_AXIS);
  //setGradient(width / 2, 0, width / 2, height, c1, b2, X_AXIS);
  // Foreground
  setGradient(0, 0, 800, 600, c1, c2, Y_AXIS);
  //setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
  
  //
  var H = hour();
  var M = minute();
  var S = second();


  
  
  stroke(192,192,192);
  strokeWeight(3);
  
  fill(105,139,80);

  ellipse(210, 200, 400, 100);
  fill(255,253,130);
  fill(lerpColor(startColor, newColor, amt));
  amt += 0.01;
  if(amt >= 1){
    amt = 0.0;
    startColor = newColor;
    newColor = color(random(255),random(255),random(255));
  }
  ellipse(350, 180, 25, 25);
  fill(105,139,80);
  arc(200,200,300,300, PI, TWO_PI, PIE);
  fill(lerpColor(startColor, newColor, amt));
  amt += 0.001;
  if(amt >= 1){
    amt = 0.0;
    startColor = newColor;
    newColor = color(random(255),random(255),random(255));
  }
  stroke(192,192,192);
  ellipse(50, 195, 25, 25);
  ellipse(90, 215, 25, 25);
  ellipse(140, 225, 25, 25);
  ellipse(190, 228, 25, 25);
  ellipse(240, 230, 25, 25);
  ellipse(290, 225, 25, 25);
  ellipse(340, 217, 25, 25);
  ellipse(380, 200, 25, 25);

fill(255,255,128);
  triangle(25, 275, 400, 275, 212.5, 600);

  push();
  fill(125,56,125);

  push();
  
  fill(125,56,125);
  stroke(250,197,221,244);
  strokeWeight(3);
  var min_bound = map(minute(), 0, 59, PI+.01, TWO_PI);
  arc(200,200,300,300, PI, min_bound, PIE);
  pop();
  
  var h = map(hour(), 0, 24, 0, barMax); // Map the function hour() to values from 0 - barMax
  var m = map(minute(), 0, 60, 0, barMax);
  var s = map(second(), 0, 60, 0, barMax);

  var s = map(second(), 0, 60, 0, barMax);
  rect(50, 500, 300, 200);
  
  stroke(3);
  
  fill(lerpColor(startColor, newColor, amt));
  amt += 0.001;
  if(amt >= 1){
    amt = 0.0;
    startColor = newColor;
    newColor = color(random(255),random(255),random(255));
  }

  
  
  noStroke();
  rect(xPos,yPos,barMax,barHeight);
  rect(xPos,yPos + barHeight + barMargin,barMax,barHeight);
  rect(xPos,yPos + barHeight*2 + barMargin*2,barMax,barHeight);
  rect(100, 325 + barHeight*2 + barMargin*2,barMax,barHeight);
  rect(100, 345 + barHeight*2 + barMargin*2,barMax,barHeight);
   
  noStroke();
  fill(255,136,17);
  rect(xPos,yPos,s,barHeight);   // Bar for hours
  fill(255,136,17);
  rect(xPos,yPos + barHeight + barMargin,s,barHeight);   // Bar for minute
  fill(255,136,17);
  rect(xPos,yPos + barHeight*2 + barMargin*2,s,barHeight);   // Bar for second
  rect(xPos,yPos + barHeight*2 + barMargin*2,s,barHeight);
  rect(xPos, 325 + barHeight*2 + barMargin*2,s,barHeight);
  rect(xPos, 345 + barHeight*2 + barMargin*2,s,barHeight);
  
  fill(97, 0, 145);
  quad(25, 500, 100, 400, 300, 400,375, 500); //roof
  rect(150, 550, 100, 50); //door
  
stroke(255);

   for (var i = 0; i < hour(); i++){
    drawLine(hour_xs[i], hour_ys[i], 3);
  }
  for (var i = 0; i < second(); i++){
    drawLine(sec_xs[i], sec_ys[i], 1);
  }
} 
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
 }

function drawLine(x, y, k){
  if (k == 1){  
    stroke(0,181,0);
    strokeWeight(10);
    
    point(x,  y);
    strokeWeight(2);
    line(x, y, (x-10), y -5);
    line(x, y, x + 10, y -5);
  }
  if (k == 3){ 
  stroke 
    line(x, y, x*100 + 50,  y* 100 + 50 );
  }
}
function printMinute(){
  console.log(minute());
}
