

var ball = {};
ball.width = 100;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 20;
ball.scale_y = 20;
var test = 0

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);

}



function draw() {

    ball.x -= ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }



    noStroke();
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);

      fill(random(255), random(255), random(255), random(255));
    }

function mouseMoved() {
    ball.width -= 1;
    ball.width = ball.width % (width*0.2);

}
