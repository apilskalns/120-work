
// Bouncing Balls
// Week 12


// create a variable for the ball object
let balls = [];
const numOfBalls = 20;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth-100, 400);

    // create a new ball object of class type "Ball"
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

function draw() {
    background('rgb(66, 57, 66)');

    for (let i = 0; i < balls.length; i++) {
        // call the ball's methods
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].moveRandom();
        balls[i].display();
    }
}

document.onkeypress = function (e) {

    switch (e.key) {
        case 'ArrowUp':
            balls[0].moveY(-20);
            console.log("up");
            break;
        case 'ArrowDown':
            balls[0].moveY(20);
            // down arrow
            console.log("down");
            break;
        case 'ArrowLeft':
            // left arrow
            balls[0].moveX(-20);
            console.log("left");
            break;
        case 'ArrowRight':
            balls[0].moveX(20);
            console.log("right");
            // right arrow
    }
};



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
        this.posX += this.deltaX;
        this.posY += this.deltaY;
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
