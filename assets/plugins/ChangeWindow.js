class ChangeWindows {

  constructor() {
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }

  run(player) {
    this.player = player
    document.addEventListener("visibilitychange", this.handleVisibilityChange)
  }

  handleVisibilityChange() {
    const isVisible = document.visibilityState === "visible"
    if (isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }
}

export default ChangeWindows