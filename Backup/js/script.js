function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('player', {
    width: 1280,
    height: 720,
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError
    }
  });
}

function onPlayerReady(event) {
  event.target.setVolume(30);
  event.target.playVideo();
}