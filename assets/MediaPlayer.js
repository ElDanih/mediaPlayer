function MediaPlayer(config) {
    this.media = config.element;
  }
  
  MediaPlayer.prototype.playAndPause = function () {
      (this.media.paused)
          ? this.media.play() 
          : this.media.pause();
  };


export default MediaPlayer;