


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);

}

var ballx;
var bally;
var ballDeltax;
var ballDeltay;
var ballScalex;
var ballScaley;
var ballwidth;

function draw() {

  ballPlace(100, 100, 20, 20, 1, 1, 100) {

    ballx -= ballDeltax * ballScalex;
    bally += ballDeltay * ballScaley;


    if (ballx >= width || ballx <= 0) {
        ballDeltax = -1 * ballDeltax;
    }
    if (bally >= height || bally <= 0) {
        ballDeltay = -1 * ballDeltay;
    }

  }

}

function ballPlace(ballx, bally, ballDeltax, ballDeltay, ballScalex, ballScaley, ballwidth){

  noStroke();
  ellipse(ballx, bally, ballwidth, ballwidth);

}
