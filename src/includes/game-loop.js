import { playerControls } from './player-controls.js'

var animate = function() {

    playerControls(window.ENGINE.configs, window.ENGINE.player, window.ENGINE.camera)

    window.ENGINE.renderer.render(window.scene, window.ENGINE.camera)
    requestAnimationFrame(animate)
}

export { animate }