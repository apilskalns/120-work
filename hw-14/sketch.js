// Bouncing Balls
// Week 12


// create a variable for the ball object
let balls = [];
const numOfBalls = 20;
var button;
var winx;
var winy;
var ready = false;
var greeting;
var timer = "timer";
var timeLeft = 60*30; //30 fps * 30 seconds

function setup() {
    // createCanvas(windowWidth, windowHeight);
    winx = windowWidth-100;
    winy = windowHeight-100;

  //  console.log(winx)
  //  console.log(winy)

    createCanvas(winx, winy);
    showInstructions();
    showButton();
    initGame();
}

function draw(){
    background('rgb(0, 0, 0)');

    if(ready){
      playGame();
      fill(254);
      text(timer, 50, 50)
      countdown();
    }

}

function play(){
  ready = true;
  button.hide();
  greeting.hide();

}

function restartGame(){
  ready = false
  initGame();
  showButton();
  timeLeft = 60*30;
}

function showButton(){
  button = createButton('play');
  button.position(winx/2, winy/2);
  button.mousePressed(play);
}

function showInstructions(){
  greeting = createElement('h2',  "Use arrow keys (&#8592 &#8593 &#8595 &#8594) to navigate your destroyer ship into the astroids" );
  greeting.style("color", "#FFFFFF");
  greeting.position(20, 5);
}

function countdown() {

  if (timeLeft == 0) {
    restartGame();
  } else {
    timer = (timeLeft/30 + ' seconds remaining');
    timeLeft--;
  }
}

function initGame(){
  // create a new ball object of class type "Ball"
  balls = []
  let init_x = 60;
  let init_y = 60;
  destroyer = new Ball(30,30);
  destroyer.setDestroyerBall();
  balls.push(destroyer);

  for (let i = 1; i < numOfBalls; i++) {
      balls.push(new Ball(init_x, init_y));
      // move the starting position over
      // This is to ensure that the balls do not start
      // "on top" of each other
      init_x += 100;
      if (init_x > width) {
          init_x = 60;
          init_y += 100;
      }
  }
}

document.onkeypress = function (e) {

    switch (e.key) {
        case 'ArrowUp':
            balls[0].moveY(-20);
          //  console.log("up");
            break;
        case 'ArrowDown':
            balls[0].moveY(20);
            // down arrow
          //  console.log("down");
            break;
        case 'ArrowLeft':
            // left arrow
            balls[0].moveX(-20);
          //  console.log("left");
            break;
        case 'ArrowRight':
            balls[0].moveX(20);
          //  console.log("right");
            // right arrow
    }
};

function playGame(){
  for (let i = 0; i < balls.length; i++) {
    // call the ball's methods
      balls[i].ballCheck(balls, i);
      balls[i].edgeCheck();
      balls[i].moveRandom();
      balls[i].display();
    }
  }



//////////////////////////////////////////////////
//      BALL CLASS DEFINITION
//////////////////////////////////////////////////
class Ball {
    constructor(x, y, size) {
        this.color = this.color = 'rgb(110, 240, 158)';
        this.size = random(20, 80);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-5, 5);
        this.deltaY = random(-5, 5);
        this.type = "prey";
    }

    display() {
        push();
        // remove the balls outer stroke
        noStroke();
        // set the balls fill color
        fill(this.color);
        // set the position of the ball
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    moveRandom() {
      if(this.type == "prey"){
        this.posX += this.deltaX;
        this.posY += this.deltaY;
      }
    }

    moveX(directionX){
      this.posX += directionX;
    }

    moveY(directionY){
      this.posY += directionY;
    }

    edgeCheck() {
        // check if the ball has hit a vertical wall (left or right walls)
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
        }
        // check if the ball has hit a horizontal wall (top or bottom walls)
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
        }
    }

    setDestroyerBall(){
      this.color = 'red';
      this.size = 10;
      this.posX = 120;
      this.posY = 120;
      this.type = "destroyer"
    }


    ballCheck(otherBalls, myId) {
        // for loop touches each of the balls in the array

        //console.log(otherBalls.length);
        if(otherBalls.length == 1){
          restartGame();
        }

        for (let n = 0; n < otherBalls.length; n++) {
            // if n != myId, then check for touching
            // otherwise, its ME and we need to skip
            if (n != myId) {
                let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
                let combinedR = this.rad + otherBalls[n].rad;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;

                    if(this.type == "destroyer"){
                      // remove ball it's been destroyed
                      otherBalls.splice(n,1);
                    }

                }
            }
        }
    }
}
