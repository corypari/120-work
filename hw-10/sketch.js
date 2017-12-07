
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(30);

}



function draw() {

  translate(windowWidth/2, windowHeight/4);
  moveEvery();

}

//lets me more easily move the entire body of letters as one whole.
var moveLetters = -300;

function moveEvery(){
  superH();
  superE();
  superY();
  superSmile();
}

function dotPlace(ballx, bally, ballwidth){
noStroke();
ellipse(ballx, bally, ballwidth, ballwidth);
}

function superH(){
  fill(color(random(255), random(255), random(255)));
  dotPlace(0 + moveLetters, 0, 100);
  dotPlace(-100 + moveLetters, 0, 100);
  dotPlace(-100 + moveLetters, 100, 100);
  dotPlace(-100 + moveLetters, -100, 100);
  dotPlace(100 + moveLetters, 100, 100);
  dotPlace(100 + moveLetters, -100, 100);
  dotPlace(100 + moveLetters, 0, 100)
}

function superE(){
  fill(color(random(255), random(255), random(255)));
  dotPlace(250 + moveLetters, 0, 100);
  dotPlace(250 + moveLetters, -100, 100);
  dotPlace(250 + moveLetters, 100, 100);
  dotPlace(350 + moveLetters, 100, 100);
  dotPlace(350 + moveLetters, -100, 100);

}
function superY(){
  fill(color(random(255), random(255), random(255)));
  dotPlace(550 + moveLetters, 0, 100);
  dotPlace(500 + moveLetters, -100, 100);
  dotPlace(550 + moveLetters, 100, 100);
  dotPlace(600 + moveLetters, -100, 100);

}
function superSmile(){
  fill(color(random(255), random(255), random(255)));
  dotPlace(250 + moveLetters, 400, 300);
  fill('black');
  ellipse(-100, 350, 25);
  ellipse(0, 350, 25);
  ellipse(-50, 450, 50);
}
