var THREE = window.THREE = require('three')
require('three/examples/js/loaders/GLTFLoader')


var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight)

var renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor( 0xcccccc )
document.body.append(renderer.domElement)

// var geometry = new THREE.BoxGeometry(1,1,1)
// var material = new THREE.MeshPhongMaterial({color: 0xCCCCCC})
// var cube = new THREE.Mesh(geometry,material)
// scene.add(cube)

var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 )
scene.add( light )

var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 )
scene.add( directionalLight )


///////////////////////////////////////////////////////

var loader = new THREE.GLTFLoader()

loader.load( 'dist/models/car/scene.gltf', function(gltf){
    scene.add(gltf.scene)
    myCar = gltf.scene
    console.log(myCar)
    addControles(myCar)
    setPosition(myCar)
}, undefined, function(error){
	console.error( error )
})

///////////////////////////////////////////////////////

function addControles(object) {
    acceleration = 10


    document.addEventListener('keydown', event => {
        event.preventDefault()
        if(event.keyCode === 38) {
            object.position.z  += acceleration * Math.cos(object.rotation.y)
            object.position.x += acceleration * Math.sin(object.rotation.y)
        }
        if(event.keyCode === 40) {
            object.position.z -= 10
        }
        if(event.keyCode === 37) {
            object.rotation.y += 0.2
        }
        if(event.keyCode === 39) {
            object.rotation.y -= 0.2
        }
    })
}

function setPosition(object) {
    object.position.z = -1000
    object.position.y = -200
    object.scale.x = 0.2
    object.scale.y = 0.2
    object.scale.z = 0.2
}

///////////////////////////////////////////////////////

// cube.position.z = -5
var animate = function() {

    // cube.rotation.x += 0.01
   
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}
animate()