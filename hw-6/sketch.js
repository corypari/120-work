
function setup() {
//creates object for document descriptive details
  var set = {};
//creates an object to minimize some of the setup
  set.w = windowWidth;
  set.h = windowHeight;
  set.bg = 'rgb(207, 249, 78)';
  set.f = 'rgb(255, 255, 255)';

//window size
    createCanvas( set.w, set.h );
//sets frame rate
    frameRate(30);
//sets background color and draws a white box
    background( set.bg );
    fill( set.f );
    rect(set.w*0.25, set.h*0.25, set.w*0.5, set.h*0.5);
    text("Please No More Homework :(", mouseX, mouseY);
//creates bottom centered text
    fill('rgb(0, 0, 0)');
    textSize(30);
    textAlign(CENTER);
    text("Progression Toward Graduation ->", windowWidth*0.5, windowHeight*0.8);
//creates bank of color texts, red, green, blue
    fill('rgb(255, 0, 56)');
    textSize(15);
    textAlign(LEFT);
    text("Motivation for Homework", windowWidth*0.10, windowHeight*0.4);

    fill('rgb(0, 0, 100)');
    textSize(15);
    textAlign(LEFT);
    text("Hours Clocked In", windowWidth*0.10, windowHeight*0.5);

    fill('rgb(0, 100, 0)');
    textSize(15);
    textAlign(LEFT);
    text("Weed Smoked", windowWidth*0.10, windowHeight*0.6);

    fill('rgb(150, 50, 50)');
    textSize(15);
    textAlign(LEFT);
    text("Student Debt", windowWidth*0.10, windowHeight*0.7);
}
//define variables for position X and Y of the algorythmic graph dots
var pos_x = 0;
var pos_y1 = 0;
var pos_y2 = 0;
var pos_y3 = 0;
var pos_y4 = 0;
var whee = 0;
//starts to draw
function draw() {
  push();
    var whee = map(mouseX, 0, width, windowWidth/3, windowWidth*0.66);
    rect(whee, 0, 100, 100);
//sets graph corner to center
    translate(width*0.25, height*0.25);
    var constx = constrain(pos_x, 0, width*0.5);
    noStroke();
//draws red dots over and over, decreasing randomly
    fill('rgb(255, 0, 56)');
    ellipse(constx, pos_y1, 4);
//draws blue dots over and over, decreasing randomly
    translate(0, height*0.5);
    fill('rgb(0, 50, 100)');
    ellipse(constx, pos_y2, 4);
//draws green dots
    translate(0, 0);
    fill('rgb(0, 100, 50)');
    ellipse(constx, pos_y3, 4);
//draws brown dots
    translate(0, 0-(height*0.2));
    fill('rgb(150, 50, 50)');
    ellipse(constx, pos_y4, 4);

    translate(0, windowHeight*0.25);
//updates the dots to draw over 2 and down randomly
    pos_x += 4;
    pos_y1 += floor(random(0, 3));
    pos_y2 -= floor(random(0,3));
    pos_y3 -= floor(random(0, 2));
    pos_y4 -= 0.5;
    pos_x = pos_x % (windowWidth*0.5);

  pop();

}
