class MediaPlayer {

  constructor(config){
    this.media = config.element
    this.plugins = config.plugins || []
    this._initPlugins()
  }

  _initPlugins () {
    const player = {
      play  : () => this.play(),
      pause : () => this.pause(),
      media : this.media,
      get muted () {
        return this.media.muted
      },
      set  muted (value) {
        (value) 
          ? this.media.muted = true
          : this.media.muted = false
      } 

    }

    this.plugins.forEach(plugin => {
      plugin.run(player)
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
