//Sets up function and draws framerate and window size
function setup() {
	createCanvas( windowHeight, windowHeight);
	frameRate(5);
}
//draw kiio creates let variables to be called upon later in a loop that will repeat until conditions are met
function draw() {
	let numPerRow = 100;
	let lineSize = 0;
	let pad = 25;

	background(0);
//Outter loop, makes it so that the inner loop is copied until y is the height
	for ( let y = lineSize; y < height; y += numPerRow) {
//Inner loop creates the X axis copies that will go until X hits the wall
		for ( let x = lineSize; x < width; x += pad) {
//Stroke and line information for the coloring options that will randomise
			stroke(random(255), random(255), random(255));
			strokeWeight(1.5);
//line 1
			line( x, y, lineSize+pad, y+numPerRow);
//line 2, inverse of line 1
			stroke(random(255), random(255), random(255));
			line( x, (y+numPerRow), (lineSize+pad), y);
		}
//After the loops, create a text layer on top that randomizes color.
		fill(random(255), random(255), random(255));
		strokeWeight(7);
		stroke(255);
		textAlign(CENTER);
		textSize(50);
		text("THAS DOPE MAYNE", windowHeight/2, windowHeight/2);
	}
}
