function MediaPlayer(config) {
  this.media = config.element;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  this.plugins.forEach( plugin => {
    plugin.run();
  });
};

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};

MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};

MediaPlayer.prototype.playAndPause = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

export default MediaPlayer;
