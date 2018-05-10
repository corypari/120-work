function setup() {
    // create a canvas to draw my portrait on
    createCanvas( 600, 900 );
}

function draw() {
    // set the background color
    background( 'rgb(78, 249, 135)' );

    // *****************************************************
    // create a sandbox for the entire character
    push();

    // move the entire grid for this character to the center of the canvas
    translate( 300, 450 );

    push();
    noStroke();
    fill('white');
    rect(100, -100, 300, 100, 45, 60, 30, 45);
    rect(-450, 100, 300, 150, 60, 45, 45, 35);
    rect(0, -400, 300, 75, 60, 45, 45, 35);
    rect(-250, -200, 300, 150, 60, 45, 45, 35);
    rect(200, -300, 75, 50, 60, 45, 45, 35);
    rect(100, 100, 75, 30, 60, 45, 45, 35);
    fill('rgb(221, 218, 218)');
    rect(-350, -250, 300, 170, 60, 45, 45, 35);
    rect(-100, -450, 300, 100, 60, 45, 45, 35);

    // ** ARMS **********************************
    push();
    stroke('rgb(226, 127, 0)');
    strokeWeight('40');
    line(23, 235, -50, 400);
    line(230, 240, 270, 500);
    stroke('orange');
    line(-50, 400, -100, 265);
    noStroke();
    fill('rgb(241, 177, 95)');
    rect(-135, 215, 45, 60, 5, 10, 15, 10);

    // arms code goes here

    pop();
    // **END ARMS**


    // ** BODY **********************************
    push();
    fill('orange');
    noStroke();
    rect(0, 200, 250, 400, 45, 45, 0, 0);
    fill('rgb(241, 177, 95)');
    arc(125, 200, 100, 100, 0, PI);
    stroke('black');
    strokeWeight(5);
    line(120, 210, 135, 220);
    line(120, 220, 135, 210);
    // body code goes here

    pop();
    // **END BODY**

    // ** HEAD **********************************
    push();
    translate(-100, -200);
    // head code goes here
    // make skull first
    fill('brown');
    noStroke();
    rect(-120, -200, 110, 220, 500);
    rect(-45, -220, 155, 240, 30, 60, 60, 30);
    stroke('white');
    strokeWeight('5');
    strokeCap(SQUARE);
    line(0, 0, 0, 420);
    strokeCap(ROUND);
    fill('rgb(241, 177, 95)');
    noStroke();
    ellipse(0, -100, 200, 200);


    // **MOUTH**
    push();
    noFill();
    stroke('black');
    strokeWeight(5);
    arc(0, -40, -50, -60, PI, TWO_PI);

    pop();

    // **END MOUTH**

    // **EYES**
    push();

    stroke('black');
    strokeWeight(50);
    point(45, -120);
    point(-45, -120);

    stroke('white');
    noFill();
    strokeWeight(5);
    arc(45, -120, 40, 40, 0, 45);
    arc(-45, -120, 40, 40, 0, 45);

    noStroke();
    fill('rgb(241, 177, 95)');
    triangle(0, -5, 10, 10, -10, 10);

    pop();
    // **END EYES**

    pop();
    // **END HEAD**


    // ** END CHARACTER SANDBOX *******************
    pop();

}
