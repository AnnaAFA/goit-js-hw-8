import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  //   console.log(data.seconds);
}
(function player() {
  const savedCurrentTime = localStorage.getItem('videoplayer-current-time');
  if (!savedCurrentTime) {
    return;
  }
});
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') ?? 0);
