var circle = {

  x: 0,
  y: 0,
  diameter: 5

}

function setup() {

// created canvas
  createCanvas(windowWidth, windowHeight);
  background('rgb(55, 166, 215)');

// select color randomly
  r = random(255);
  g = random(255);
  b = random(255);
}
function draw() {
  push()
  noCursor();
  fill(2,2,2);
  // an ellipse controlled by the mouse
  translate(width/2, height/2);
  stroke(r,g,b);
  for (var i = 0; i < 10; i++) {
    ellipse(mouseX, mouseY, 20, 30);
    rotate(PI / 5);
// streamers moving across the canvas
    ellipse(circle.x+50, circle.y+50, circle.diameter, circle.diameter);
    circle.y = circle.y + .1 ;

 }
}
function mousePressed(){


  var d = dist(mouseX, mouseY, 0, 0);
  if (d < windowWidth) {
    // change color randomly
    r = random(255);
    g = random(255);
    b = random(255);

    background(r, g, b);
  }
}
