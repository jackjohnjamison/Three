import * as THREE from 'three'
import { configs } from './configs.js'
import { KEYCHECK } from './key-check.js'
import * as UTILS from './utils.js'
import GLTFLoader from 'three-gltf-loader'
import { initSettings } from './settings.js'

function initEngine() {

    window.THREE = THREE

    window.scene = new THREE.Scene({name: 'Root scene'})

    scene.fog = new THREE.FogExp2( configs.fogColour, configs.fogDensity)

    window.ENGINE = {
        configs: configs,
        KEYCHECK: KEYCHECK,
        UTILS: UTILS,
        GLTFloader: new GLTFLoader(),
        renderer: new THREE.WebGLRenderer({antialias: true})
    }

    window.gameSettings = initSettings()

    ENGINE.renderer.setSize(configs.screenWidth, configs.screenHeight)
    ENGINE.renderer.setClearColor(configs.clearColour)
    configs.parentElemnt.append(ENGINE.renderer.domElement)
}

export { initEngine }