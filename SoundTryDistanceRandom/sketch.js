var fenceOne;
var fenceClass;
var testSound;
var bestSound;
var insideTheFenceTwo;
var outsideTheFenceTwo;
//var bestSound;
//var distance;
//var insideTheFenceTwo;
//var outsideTheFenceTwo;
var fenceOptions = {
  enableHighAccuracy: true,
  timeout:5000,
  maximumAge: 0
};

function setup(){
    //fenceOne = new geoFenceCircle(46.861110499999995,-113.9857734, 0.025, insideTheFence, outsideTheFence, 'km')
  fenceClass = new geoFenceCircle(46.848470999999996,-113.988616, 0.01, insideTheFence, outsideTheFence, 'mi')

    //distance = calcGeoDistance(position.latitude, position.latitude, 44.940834, -93.311287, 'mi')
    //print(distance);

    testSound = createAudio("http://www.junctionpoland.com:8000/64.ogg");
    //bestSound = createAudio("http://streaming202.radionomy.com/JamendoLounge");

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

//function insideTheFenceTwo(position){
//    print("INlat2: " + position.latitude);
//    print("INlong2: " + position.longitude);
//    print("user is inside of the fence")
//    bestSound.play();
//}
//function outsideTheFenceTwo(position){
//    print("OUTlat2: " + position.latitude);
//    print("OUTlong2: " + position.longitude);
//    print("user is outside of the fence")
//    bestSound.stop();

//}
