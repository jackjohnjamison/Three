  //////////////////////////////////////////////////////
 ///    threeJS FPS                     ***
//////////////////////////////////////////////////////

var THREE = window.THREE = require('three')
require('three/examples/js/loaders/GLTFLoader')

import { configs } from './includes/configs.js'
import { KEYCHECK } from './includes/key-check.js'
import * as UTILS from './includes/utils.js'
import { addSettings } from './includes/settings-manager.js'
import { initPlayerControls, playerControls } from './includes/player-controls.js'
import { buildLevel } from './includes/build-level.js'


// Init scene
const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(configs.screenWidth, configs.screenHeight)
renderer.setClearColor(configs.clearColour)
// scene.fog = new THREE.Fog( configs.fogColour, configs.fogStart, configs.fogEnd )
scene.fog = new THREE.FogExp2( configs.fogColour, configs.fogDensity) // Alternative fog function
configs.parentElemnt.append(renderer.domElement)


//////////////////////////////////////////////////////////////

const player = new THREE.Object3D()
const camera = new THREE.PerspectiveCamera( configs.fov, configs.screenWidth/configs.screenHeight, configs.nearPlane, configs.viewDistance)
player.add(camera)
scene.add(player)
player.position.z = -1000
player.rotation.y = 3

var loader = new THREE.GLTFLoader()

loader.load( 'dist/models/fn2000/scene.gltf', function(gltf){
    camera.add(gltf.scene)
    let rightHand = gltf.scene
    rightHand.position.z = -30
    rightHand.position.y = -15
    rightHand.position.x = 20
    rightHand.scale.x = 0.05
    rightHand.scale.y = 0.05
    rightHand.scale.z = 0.05
    rightHand.rotation.y = 1.5708
}, undefined, function(error){
	console.error( error )
})


addSettings(KEYCHECK, camera, scene, configs)
initPlayerControls(KEYCHECK, UTILS)


//////////////////////////////////////////////////////////////

buildLevel(THREE, loader, scene)

///////////////////////////////////////////////////////////////////

var animate = function() {

    playerControls(configs, player, camera)

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}

animate()