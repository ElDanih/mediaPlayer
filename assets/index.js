import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'
import ChangeWindow from './plugins/ChangeWindow.js'

const video = document.querySelector("video")
const playButton = document.getElementById("playButton")
const muteButton = document.getElementById("muteButton")
const player = new MediaPlayer({ 
    element: video, 
    plugins : [ 
        new AutoPlay,
        new AutoPause,
        new ChangeWindow
        ] 
    })

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()

