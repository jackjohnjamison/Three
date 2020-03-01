  //////////////////////////////////////////////////////
 ///    threeJS FPS                     ***
//////////////////////////////////////////////////////

var THREE = window.THREE = require('three')
require('three/examples/js/loaders/GLTFLoader')

import { configs } from './includes/configs.js'
import { KEYCHECK } from './includes/key-check.js'
// import { degreesToRadians } from './includes/utils.js'
import { addSettings } from './includes/settings-manager.js'
import { initPlayerControls, playerControls, addControles } from './includes/player-controls.js'


// Init scene
const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({antialias: true})
const texLoader = new THREE.TextureLoader()
renderer.setSize(configs.screenWidth, configs.screenHeight)
renderer.setClearColor(configs.clearColour)
scene.fog = new THREE.Fog( configs.fogColour, configs.fogStart, configs.fogEnd )
configs.parentElemnt.append(renderer.domElement)

const player = new THREE.Object3D()
const camera = new THREE.PerspectiveCamera( configs.fov, configs.screenWidth/configs.screenHeight, configs.nearPlane, configs.viewDistance)

player.add(camera)
scene.add(player)

addSettings(KEYCHECK, camera, scene)

//////////////////////////////////////////////////////////////

var floorGeometry = new THREE.BoxGeometry(4000, 1, 4000)
var floorMaterial = new THREE.MeshPhongMaterial( { map: texLoader.load('dist/images/grass.jpg'), shininess: 30 } );
var floor = new THREE.Mesh( floorGeometry, floorMaterial )
scene.add(floor)

var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 )
scene.add( light )

var directionalLight = new THREE.DirectionalLight( 0x000000, 1.5 )
scene.add( directionalLight )

///////////////////////////////////////////////////////


var rightHand

var loader = new THREE.GLTFLoader()

loader.load( 'dist/models/gun/scene.gltf', function(gltf){
    player.add(gltf.scene)
    rightHand = gltf.scene
    addControles()
    setPosition(rightHand)
    animate()
}, undefined, function(error){
	console.error( error )
})

///////////////////////////////////////////////////////


// function addControles() {
//     document.addEventListener('keydown', event => {
//         if (event.keyCode === 13) {
//             pointerLock()
//         }
//     })
// }

// document.body.requestPointerLock = document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock

// var movementX = 0
// // var movementY = 0
// let timeStamp = 0
// let timeStampPrev = 0
// let pointerLocked = false


// function pointerLock() {
//     document.body.requestPointerLock()
//     document.addEventListener('mousemove', event => {
//         movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0
//         // movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0
//         timeStamp = event.timeStamp
//     })
//     pointerLocked = true
// }

// document.addEventListener('pointerlockchange', event => {
//     console.log(event)
// })

///////////////////////////////////////////////////////////////////

initPlayerControls(KEYCHECK)

//////////

function setPosition(object) {
    object.position.z = -8
    object.position.y = -2
    object.position.x = 3
    object.scale.x = 0.3
    object.scale.y = 0.3
    object.scale.z = 0.3
    object.rotation.y = 1.5708

    floor.position.z = -1000
    floor.position.y = -200
}

///////////////////////////////////////////////////////

// var acceleration = 2
// var friction = 0.9
// var xVelocity = 0
// var zVelocity = 0
// var lookSensitivity = 0.02

var animate = function() {

    playerControls(player)

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}