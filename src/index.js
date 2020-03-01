  //////////////////////////////////////////////////////
 ///    threeJS FPS                     ***
//////////////////////////////////////////////////////

import * as THREE from 'three';
import { initEngine } from './includes/init.js'
import { initPlayer } from './includes/player-object.js'
import { addSettings } from './includes/settings-manager.js'
import { initPlayerControls } from './includes/player-controls.js'
import { buildLevel } from './includes/build-level.js'
import { animate } from './includes/game-loop.js'

window.THREE = THREE

initEngine()
initPlayer()
addSettings()
initPlayerControls()
buildLevel()
animate()
