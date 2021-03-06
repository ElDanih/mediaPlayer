class MediaPlayer {

  constructor(config){
    this.media = config.element
    this.plugins = config.plugins || []
    this._initPlugins()
  }

  _initPlugins () {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }

  mute () {
    this.media.muted = true
  }

  unmute () {
    this.media.muted = false
  }

  play () {
    this.media.play()
  }

  togglePlay () {
    (this.media.paused)
      ? this.media.play()
      : this.media.pause()
  }

  toggleMute () {
    (this.media.muted)
      ? this.media.muted = false
      : this.media.muted = true
  }

}

export default MediaPlayer
