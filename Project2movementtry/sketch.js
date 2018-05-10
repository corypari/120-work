var value = 0;
var valueX = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function deviceMoved() {
  setMoveThreshold(3);
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
