//Setup the document and look for functions
function setup(){
//create the canvas and declare size
    createCanvas(600, 400);
//create an elipse, size and location
    ellipse(50, 50, 10, 20);
//fill canvas with 'string' color
    background('purple')
}

// Declare the draw function
function draw() {
// tell p5 to print the text string "Hello World!", including location
    text( "Hello World!", 300, 200 );
}
