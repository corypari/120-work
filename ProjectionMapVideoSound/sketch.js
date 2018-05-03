//This example both starts
//and pauses a sound sample
//when the user clicks the canvas

//We will store the p5.MediaElement
//object in here
var clipOne;
var clipTwo;
var audOne;
var audTwo;

//while our audio is playing,
//this will be set to true
var sampleIsPlaying = false;

function setup() {
  createCanvas(710, 400);
  //Here we create a p5.MediaElement object
  //using the createAudio() function.
  clipOne = createVideo('Effect_01.mp4');
    clipOne.hide(); // by default video shows up in separate dom
                    // element. hide it and draw it to the canvas
                    // instead
  clipTwo = createVideo('Effect_02.mp4');
    clipTwo.hide();
  audOne = createAudio('drum.wav');
  audTwo = createAudio('hum.wav');
}

function draw() {
  background(150);
  image(clipOne,10, 10, 100, 100); // draw the video frame to canvas
  image(clipTwo,110, 10, 100, 100);
   // draw a second copy to canvas
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if (sampleIsPlaying) {

      clipOne.pause();
      audOne.pause();

      sampleIsPlaying = false;
    } else {

      clipOne.loop();
      audOne.loop();

      sampleIsPlaying = true;
    }
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
    if (sampleIsPlaying) {

      clipTwo.pause();
      audTwo.pause();

      sampleIsPlaying = false;
    } else {

      clipTwo.loop();
      audTwo.loop();

      sampleIsPlaying = true;
    }

  }
}
