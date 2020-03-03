import * as THREE from 'three'
import { configs } from './configs.js'
import { KEYCHECK } from './key-check.js'
import * as UTILS from './utils.js'
import GLTFLoader from 'three-gltf-loader'

function initEngine() {

    window.THREE = THREE

    window.scene = new window.THREE.Scene({name: 'Root scene'})

    window.scene.fog = new THREE.FogExp2( configs.fogColour, configs.fogDensity)

    window.ENGINE = {
        configs: configs,
        KEYCHECK: KEYCHECK,
        UTILS: UTILS,
        GLTFloader: new GLTFLoader(),
        renderer: new window.THREE.WebGLRenderer({antialias: true})
    }

    window.ENGINE.renderer.setSize(configs.screenWidth, configs.screenHeight)
    window.ENGINE.renderer.setClearColor(configs.clearColour)
    configs.parentElemnt.append(window.ENGINE.renderer.domElement)
}

export { initEngine }
