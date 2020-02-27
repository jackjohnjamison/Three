var THREE = window.THREE = require('three')
require('three/examples/js/loaders/GLTFLoader')

///////////////////////////////////////////////////////

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 4000)

var renderer = new THREE.WebGLRenderer({antialias: true})
const texLoader = new THREE.TextureLoader();

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor( 0xcccccc )
document.body.append(renderer.domElement)

///////////////////////////////////////////////////////

var floorGeometry = new THREE.BoxGeometry(4000, 1, 4000)
var floorMaterial = new THREE.MeshPhongMaterial( { map: texLoader.load('dist/images/grass.jpg'), shininess: 30 } );
var floor = new THREE.Mesh( floorGeometry, floorMaterial )
scene.add(floor)

///////////////////////////////////////////////////////

var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 )
scene.add( light )

var directionalLight = new THREE.DirectionalLight( 0x000000, 1.5 )
scene.add( directionalLight )


///////////////////////////////////////////////////////

var myCar

var loader = new THREE.GLTFLoader()

loader.load( 'dist/models/car/scene.gltf', function(gltf){
    scene.add(gltf.scene)
    myCar = gltf.scene
    addControles(myCar)
    setPosition(myCar)
    animate()
}, undefined, function(error){
	console.error( error )
})

///////////////////////////////////////////////////////

var pressedKeys = {}

function initCheckKeys(key) {
    totalKeys = 230

    for (var i = 0; i < totalKeys; i++) {
        pressedKeys[i] = false
    }
    document.addEventListener('keydown', event => {
        event.preventDefault()
        pressedKeys[event.keyCode] = true
    })
    document.addEventListener("keyup", event => {
        pressedKeys[event.keyCode] = false
    })
}

initCheckKeys()

function checkKey(keyCode) {
    return pressedKeys[keyCode]
}



///////////////////////////////////////////////////////

var arrowFoward =  function(){return checkKey(87)}
var arrowBack = function(){return checkKey(83)}
var arrowRight = function(){return checkKey(68)}
var arrowLeft = function(){return checkKey(65)}

function addControles() {
    document.addEventListener('keydown', event => {
        if (event.keyCode === 13) {
            pointerLock()
        }
    })
}

document.body.requestPointerLock = document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock

var movementX = 0
// var movementY = 0
var timeStamp = 0
timeStampPrev = 0
var pointerLocked = false


function pointerLock() {
    document.body.requestPointerLock()
    document.addEventListener('mousemove', event => {
        movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0
        // movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0
        timeStamp = event.timeStamp
    })
    pointerLocked = true
}

document.addEventListener('pointerlockchange', event => {
    console.log(event)
})

///////////////////////////////////////////////////////////////////

function setPosition(object) {
    object.position.z = -1000
    object.position.y = -200
    object.scale.x = 0.2
    object.scale.y = 0.2
    object.scale.z = 0.2

    floor.position.z = -1000
    floor.position.y = -200
}

///////////////////////////////////////////////////////

var acceleration = 2
var friction = 0.9
var xVelocity = 0
var zVelocity = 0
var lookSensitivity = 0.02

function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi/180);
}

var quaterTurn = degrees_to_radians(90)

var animate = function() {

    zVelocity -= (acceleration * Math.cos(camera.rotation.y)) * arrowFoward()
    zVelocity += (acceleration * Math.cos(camera.rotation.y)) * arrowBack()
    
    xVelocity -= (acceleration * Math.sin(camera.rotation.y)) * arrowFoward()
    xVelocity += (acceleration * Math.sin(camera.rotation.y)) * arrowBack()

    zVelocity -= (acceleration * Math.cos(camera.rotation.y + quaterTurn)) * arrowLeft()
    zVelocity += (acceleration * Math.cos(camera.rotation.y + quaterTurn)) * arrowRight()

    xVelocity -= (acceleration * Math.sin(camera.rotation.y + quaterTurn)) * arrowLeft()
    xVelocity += (acceleration * Math.sin(camera.rotation.y + quaterTurn)) * arrowRight()

    camera.position.z += zVelocity
    camera.position.x += xVelocity

    if(pointerLocked && timeStamp !== timeStampPrev) {
        camera.rotation.y -= movementX * lookSensitivity
    }
    timeStampPrev = timeStamp

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
    
    zVelocity *= friction
    xVelocity *= friction
}