var fenceOne;
var testSound;
var myMap;
var canvas;
// var mappa = new Mappa('Leaflet');
var options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}
var pos;
var prevPos;
var numOfNewStations = 0;




function setup(){
    // fenceOne = new geoFenceCircle(46.8610337,-113.98858930000002, 0.004, insideTheFence, outsideTheFence, 'mi')
    // fenceOptions = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0
    // };
    // intervalCurrentPosition(positionPing, 5000)
    watchPosition(positionPing);

    testSound = createAudio("http://www.junctionpoland.com:8000/64.ogg");

    canvas = createCanvas(640,640);
    // myMap = mappa.tileMap(options);
    // myMap.overlay(canvas)
    fill(200, 100, 100);

    // Only redraw the point when the map change and not every frame.
    // myMap.onChange(drawPoint);

}

function positionPing(position){
  pos = position;
    print("lat: " + position.latitude);
    print("long: " + position.longitude);
    let el = document.querySelector("#testDiv");
    el.innerText = "pos: " + position.latitude + ", " + position.longitude;

    if(prevPos != null){
      let d = calcGeoDistance(prevPos.latitude, prevPos.longitude, position.latitude, position.longitude, 'mi');
      el = document.querySelector("#dist");
      el.innerText = "dist: " + d;
      console.log(d);
    }

    // if d is greater than some number, then do stuff
    if(d > 0.01){
      prevPos = position;
      numOfNewStations++;
      el = document.querySelector("#dist");
      el.innerText = numOfNewStations;
      // start new station here
    }
}





function insideTheFence(position){
    print("INlat: " + position.latitude);
    print("INlong: " + position.longitude);
    print("user is inside of the fence")
    testSound.play();
}

function outsideTheFence(position){
    print("OUTlat: " + position.latitude);
    print("OUTlong: " + position.longitude);
    print("user is outside of the fence")
    testSound.stop();

}

// function drawPoint(){
//   clear();
//   var nigeria = myMap.latLngToPixel(11.396396, 5.076543);
//   ellipse(nigeria.x, nigeria.y, 20, 20)
// }
