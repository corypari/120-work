var fence;
var fenceTwo;
var testSound;
var bestSound;
var insideTheFenceTwo;
var outsideTheFenceTwo;
var polygon = [
    {lat: 46.861860, lon: -113.984906},  // top right
    {lat: 46.861858, lon: -113.985072},  // top left
    {lat: 46.861768, lon: -113.985069},  // bottom left
    {lat: 46.861763, lon: -113.984911},  // bottom right
];
var polygonTwo = [
    {lat: 46.861926, lon: -113.985402},  // top right
    {lat: 46.861908, lon: -113.984844},  // top left
    {lat: 46.861603, lon: -113.984839},  // bottom left
    {lat: 46.861563, lon: -113.985563},  // bottom right
];

function setup(){
  fence = new geoFencePolygon(polygon, insideTheFence, outsideTheFence, 'mi')
  fenceTwo = new geoFencePolygon(polygonTwo, insideTheFenceTwo, outsideTheFenceTwo, 'mi')

    //distance = calcGeoDistance(position.latitude, position.latitude, 44.940834, -93.311287, 'mi')
    //print(distance);

    testSound = createAudio("http://www.junctionpoland.com:8000/64.ogg");
    bestSound = createAudio("http://streaming202.radionomy.com/JamendoLounge");

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

function insideTheFenceTwo(position){
    print("INlat2: " + position.latitude);
    print("INlong2: " + position.longitude);
    print("user is inside of the fence")
    bestSound.play();
}

function outsideTheFenceTwo(position){
    print("OUTlat2: " + position.latitude);
    print("OUTlong2: " + position.longitude);
    print("user is outside of the fence")
    bestSound.stop();

}
