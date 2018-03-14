function setup(){
    getCurrentPosition(doThisOnLocation)
}

function doThisOnLocation(position){
    print("lat: " + position.latitude);
    print("long: " + position.longitude);
}

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('Assets/fryhands.mp3');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
}
