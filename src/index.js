var THREE = window.THREE = require('three')
require('three/examples/js/loaders/GLTFLoader')


var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 4000)

var renderer = new THREE.WebGLRenderer({antialias: true})
const texLoader = new THREE.TextureLoader();

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor( 0xcccccc )
document.body.append(renderer.domElement)

///////////////////////////////////////////////////////

var floorGeometry = new THREE.BoxGeometry(6000, 1, 4000)

var floorTexture = texLoader.load('dist/images/grass.jpg')
floorTexture.repeat.set(40, 40)
floorTexture.wrapS = THREE.RepeatWrapping
floorTexture.wrapT = THREE.RepeatWrapping

var floorMaterial = new THREE.MeshPhongMaterial( { 
    map: floorTexture,
    shininess: 30
})

var floor = new THREE.Mesh( floorGeometry, floorMaterial )
scene.add(floor)

///////////////////////////////////////////////////////

var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 2 )
scene.add( light )

var directionalLight = new THREE.DirectionalLight( 0x000000, 3 )
scene.add( directionalLight )


///////////////////////////////////////////////////////

var myCar

var loader = new THREE.GLTFLoader()

loader.load( 'dist/models/tank/scene.gltf', function(gltf){
    scene.add(gltf.scene)
    myCar = gltf.scene
    myCar.add(camera)
    camera.position.y += 7
    camera.position.z -= 7
    camera.rotation.y += 3.14159
    camera.rotation.x += .5
    addControles()
    setPosition(myCar)
    animate()
}, undefined, function(error){
	console.error( error )
})

///////////////////////////////////////////////////////
var arrowFoward = false
var arrowBack = false
var arrowRight = false
var arrowLeft = false

function addControles() {
    document.addEventListener('keydown', event => {
        event.preventDefault()
        switch(event.keyCode) {
            case 38:
                arrowFoward = true
                break
            case 40:
                arrowBack = true
                break
            case  37:
                arrowRight = true
                break
            case  39:
                arrowLeft = true
                break
        }
    })

    document.addEventListener("keyup", event => {
        switch(event.keyCode) {
            case 38:
                arrowFoward = false
                break
            case 40:
                arrowBack = false
                break
            case  37:
                arrowRight = false
                break
            case  39:
                arrowLeft = false
                break
        }
    })
}

function setPosition(object) {
    object.position.z = -1000
    object.position.y = -202
    object.scale.x = 25
    object.scale.y = 25
    object.scale.z = 25

    floor.position.z = -1000
    floor.position.y = -200
}

///////////////////////////////////////////////////////

var acceleration = 1.5
var friction = 0.85
var turnSpeed = 0.1
var xVelocity = 0
var zVelocity = 0

var animate = function() {

    zVelocity += (acceleration * Math.cos(myCar.rotation.y)) * arrowFoward
    zVelocity -= (acceleration * Math.cos(myCar.rotation.y)) * arrowBack
    
    xVelocity += (acceleration * Math.sin(myCar.rotation.y)) * arrowFoward
    xVelocity -= (acceleration * Math.sin(myCar.rotation.y)) * arrowBack

    myCar.position.z += zVelocity
    myCar.position.x += xVelocity

    myCar.rotation.y += turnSpeed * arrowRight
    myCar.rotation.y -= turnSpeed * arrowLeft
   
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
    
    zVelocity *= friction
    xVelocity *= friction
}