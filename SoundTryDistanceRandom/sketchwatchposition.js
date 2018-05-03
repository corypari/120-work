var randomSource;
var watchOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
//var audios = ['http://listen.42fm.ru:8000/stealkill-8.0.ogg', 'http://streaming.cuacfm.org/cuacfm.ogg'];
function setup(){

    watchPosition(positionChanged, watchOptions)

    randomSource = createAudio("http://www.junctionpoland.com:8000/64.ogg");
}

function positionChanged(position){
    print("lat: " + position.latitude);
    print("long: " + position.longitude);
    randomSource.play();
}
