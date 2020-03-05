import { playerControls } from './player-controls.js'
import { findRayCollisions } from './raycaster.js'



var animate = function() {

    findRayCollisions()

    playerControls(ENGINE.configs, ENGINE.player, ENGINE.camera)

    ENGINE.renderer.render(scene, ENGINE.camera)
    requestAnimationFrame(animate)
}

export { animate }