//sets up document to be the width and height of window
function setup() {
//window size
    createCanvas( windowWidth, windowHeight );
}


//starts to draw
function draw() {
//sets custom var rainBow to be windowWidth
  var rainBow = windowWidth;

//beginning rainbow drawing, and its settings
push();
//background color, drawn every frame
    background( 'rgb(78, 184, 249)' );
    translate(rainBow*0.5, windowHeight);
//rainbow set to rotate with mouseY along bottom center
    rotate(radians(mouseY));
    stroke('rgba(255, 0, 0, 1)');
    strokeWeight(20);
    noFill();
//arc 1 - 5, decreasing by 20 pixels each time. The size of the stroke.
    arc(0,0, rainBow, rainBow, PI, 0);


    stroke('rgba(255, 240, 0, 1)');
    arc(0, 20, rainBow-20, rainBow, PI, 0);

    stroke('rgba(5, 255, 0, 1)');
    arc(0, 40, rainBow-40, rainBow, PI, 0);

    stroke('rgba(0, 21, 255, 1)');
    arc(0, 60, rainBow-60, rainBow, PI, 0);

    stroke('rgba(114, 0, 255, 1)');
    arc(0, 80, rainBow-80, rainBow, PI, 0);

pop();

//new translate and stroke/fill settings to draw a thumbs-up
//will scale thumb drawing with 100/mouseY to convert to reasonable ratio

push();
//sets middle of window to center
    translate(windowWidth*0.5,windowHeight*0.5)
    noStroke();
//creates a ratio of mouse movement
    scale(100/mouseY);
    fill('white');
    textSize(40);
//creates text above thumb
    text('PROCRASTINATION IS COOL!', -300, -200);
    fill('rgb(255, 222, 171)');
//thumbs up drawing
    ellipse(-50, -50, 75, 250);
    ellipse(0, 150, 150, 75);
    ellipse(0, 0, 150, 75);
    ellipse(0, 50, 150, 75);
    ellipse(0, 100, 150, 75);
    ellipse(-55, 0, 75, 250);
    ellipse(-60, 60, 100, 220);
    fill('rgb(0, 0, 0)');
    rect(-12, 22, 70, 5);
    rect(-12, 72, 70, 5);
    rect(-12, 122, 70, 5);

pop();

}
