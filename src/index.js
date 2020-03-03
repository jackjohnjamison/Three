  //////////////////////////////////////////////////////
 ///    threeJS FPS                     ***
//////////////////////////////////////////////////////

window.THREE = require('three')
require('three/examples/js/loaders/GLTFLoader')

import { initEngine } from './includes/init.js'
import { addSettings } from './includes/settings-manager.js'
import { initPlayerControls, playerControls } from './includes/player-controls.js'
import { buildLevel } from './includes/build-level.js'
import { buildCollidables } from './includes/build-collidables.js'
import { initPlayer } from './includes/player-object.js'

initEngine()
initPlayer()
addSettings()
initPlayerControls()
buildLevel()
const collidables = buildCollidables()

var animate = function() {

    playerControls(window.ENGINE.configs, window.ENGINE.player, window.ENGINE.camera, collidables)
    window.ENGINE.renderer.render(window.scene, window.ENGINE.camera)
    requestAnimationFrame(animate)
}

animate()