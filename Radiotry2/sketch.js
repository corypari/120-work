var ele;
function setup() {
  ele = createAudio('http://revolutionradio.ru/live.ogg');

  // here we set the element to autoplay
  // The element will play as soon
  // as it is able to do so.
  ele.autoplay(true);
}
