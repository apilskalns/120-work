

let fractal = {}
fractal.x = 3.0;
fractal.y = 3.0;



 function setup(){
//crateing a canvas
   createCanvas(600, 800);
   background(0);
   frameRate(5);
 }

 function draw(){


   fractal.x = width/2;
   fractal.y = height/2;
   drawCircle(fractal.x,fractal.y,300);


 }

 function mousePressed(){
   frameRate(random(5.5*2)%5);
 }

function drawCircle(x, y, radius) {
  x = x + random(-1, 2);
  if(x < 2) {
    y = map(x,-1,1,-20,30)
  }
  r = constrain(random(1000),0,255);
  g = random(abs(255));
  b = random(abs(255));
  fill(r,g,b)
  ellipse(x, y, radius, radius);
  if(radius > 12) {
    drawCircle(x + radius/2, y, radius/2);
    drawCircle(x - radius/2, y, radius/2);
    drawCircle(x, y + radius/2, radius/2);
    drawCircle(x, y - radius/2, radius/2);
  }
}
