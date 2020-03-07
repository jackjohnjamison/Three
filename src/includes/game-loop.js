import { playerControls } from './player-controls.js'
import { findRayCollisions } from './raycaster.js'

const animate = function() {

    findRayCollisions()

    playerControls(ENGINE.configs, ENGINE.player, ENGINE.camera)

    ENGINE.renderer.render(scene, ENGINE.camera)
    ENGINE.renderLoop = requestAnimationFrame(animate)
}

export { animate }