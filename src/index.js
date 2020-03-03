  //////////////////////////////////////////////////////
 ///    threeJS FPS                     ***
//////////////////////////////////////////////////////

import { initEngine } from './includes/init.js'
import { initPlayer } from './includes/player-object.js'
import { initPlayerControls } from './includes/player-controls.js'
import { buildLevel } from './includes/build-level.js'
import { initSettings } from './includes/settings.js'
import { animate } from './includes/game-loop.js'

initEngine()
initPlayer()
initPlayerControls()
buildLevel()
animate()

window.gameSettings = initSettings()