  //////////////////////////////////////////////////////
 ///    threeJS FPS                     ***
//////////////////////////////////////////////////////

import { initEngine } from './includes/init.js'
import { initPlayer } from './includes/player-object.js'
import { initPlayerControls } from './includes/player-controls.js'
import { buildLevel } from './includes/build-level.js'
import { initRays } from './includes/raycaster.js'

initEngine()
initPlayer()
initPlayerControls()
buildLevel()

initRays()