import { configs } from './configs.js'
import { KEYCHECK } from './key-check.js'
import * as UTILS from './utils.js'

function initEngine() {

    window.ENGINE = {}

    window.ENGINE.configs = configs
    window.ENGINE.KEYCHECK = KEYCHECK
    window.ENGINE.UTILS = UTILS

    window.scene = new window.THREE.Scene()
    window.scene.name = 'Root scene'
    
    window.ENGINE.GLTFloader = new THREE.GLTFLoader()
    
    window.ENGINE.renderer = new window.THREE.WebGLRenderer({antialias: true})
    window.ENGINE.renderer.setSize(configs.screenWidth, configs.screenHeight)
    window.ENGINE.renderer.setClearColor(configs.clearColour)
    
    // scene.fog = new THREE.Fog( configs.fogColour, configs.fogStart, configs.fogEnd )
    window.scene.fog = new THREE.FogExp2( configs.fogColour, configs.fogDensity) // Alternative fog function
    
    configs.parentElemnt.append(window.ENGINE.renderer.domElement)
}

export { initEngine }
