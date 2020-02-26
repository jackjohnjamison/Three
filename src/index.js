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
var arrowFoward = false
var arrowBack = false
var arrowRight = false
var arrowLeft = false

function addControles(object) {
    document.addEventListener('keydown', event => {
        event.preventDefault()
        if(event.keyCode === 38) {
            arrowFoward = true
        }
        if(event.keyCode === 40) {
            arrowBack = true
        }
        if(event.keyCode === 37) {
            arrowRight = true
        }
        if(event.keyCode === 39) {
            arrowLeft = true
        }
    })

    document.addEventListener("keyup", event => {
        if (event.keyCode === 38) {
            arrowFoward = false
        }
        if (event.keyCode === 40) {
            arrowBack = false
        }
        if(event.keyCode === 37) {
            arrowRight = false
        }
        if(event.keyCode === 39) {
            arrowLeft = false
        }
    })
}

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