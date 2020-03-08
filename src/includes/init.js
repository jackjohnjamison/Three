import * as THREE from 'three'
import { configs } from './configs.js'
import { KEYCHECK } from './key-check.js'
import * as UTILS from './utils.js'
import GLTFLoader from 'three-gltf-loader'
import { initSettings } from './settings.js'
import { initHud } from './ui.js'
import { STYLER } from './css-styler.js'
import { collisions } from './collisions.js'

function initEngine() {

    window.THREE = THREE

    window.scene = new THREE.Scene({name: 'Root scene'})

    scene.fog = new THREE.FogExp2( configs.fogColour, configs.fogDensity)

    window.ENGINE = {
        configs: configs,
        KEYCHECK: KEYCHECK,
        UTILS: UTILS,
        STYLER: STYLER,
        isPaused: true,
        GLTFloader: new GLTFLoader(),
        renderer: new THREE.WebGLRenderer({antialias: true}),
        collisions: collisions
    }

    window.gameSettings = initSettings()

    ENGINE.renderer.setSize(configs.screenWidth, configs.screenHeight)
    ENGINE.renderer.setClearColor(configs.clearColour)

    configs.parentElemnt.append(ENGINE.renderer.domElement)

    initHud()
}

export { initEngine }
