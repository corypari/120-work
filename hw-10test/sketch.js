
let colorArray = [re, ora, yel];
let re = color(255, 0, 0);
let ora = color(0, 255, 0);
let yel = color(0, 0, 255);
//let idx = 0;

//let bg_color = ‘rgb( 230, 240, 200 )’;

function setup() {
    createCanvas(windowWidth,400);
    frameRate(1);
}

// initialize a variable ‘idx’ to the Number 0
function draw() {
    background('white');
    textSize(56);
    fill(colorArray[1]);
    text("Yo", 20, 100);
    text("What's Up", 20, 200);
    text("Delicious?", 20, 300);

    // increment the idx variable
    // also make sure it stays within the bounds of the array
    //idx = ( idx + 1 ) % stringArray.length;
}
