import { makeForest } from './tree-printer.js'
import { initCuboid } from './cuboids.js'

function buildLevel() {

    initCuboid()
    // Floor

    const texLoader = new THREE.TextureLoader()
    const floorDimensionX = 100000
    const floorDimensionZ = 100000

    const grassTexture = texLoader.load('dist/images/grass.jpg')
    grassTexture.wrapS = THREE.RepeatWrapping
    grassTexture.wrapT = THREE.RepeatWrapping

    const timesToRepeatHorizontally = floorDimensionX / 1000
    const timesToRepeatVertically = floorDimensionZ / 1000
    grassTexture.repeat.set(timesToRepeatHorizontally, timesToRepeatVertically)

    var floorGeometry = new THREE.PlaneGeometry(floorDimensionX, floorDimensionZ)
    var floorMaterial = new THREE.MeshPhongMaterial( { map: grassTexture, shininess: 30, side: THREE.DoubleSide } )
    var floor = new THREE.Mesh( floorGeometry, floorMaterial )
    floor.name = 'Floor'

    floor.rotation.x = 1.5708 // 90 degrees in radians
    
    ENGINE.collisions.targetObjects.push(floor)
    scene.add(floor)


    // Make forest
    const forest = makeForest(20, 900, 700, 30, 20)
    scene.add(forest)

    // Sexy box

    const box = ENGINE.entities.cuboid({
        name: 'Small box',
        texture: 'dist/images/map.png',
        dimensions: {x: 128, y: 128, z: 256},
        position: {x: 0, z: -1500, y: 64 },
        addToScene: true,
        target: true,
        collidable: true
    }) 

    // Sexy ramp

    const ramp = ENGINE.entities.cuboid({
        name: 'Sexy ramp',
        texture: 'dist/images/map.png',
        dimensions: {x: 512, y: 1024, z: 256},
        position: {x: 0, z: -2000, y: 0 },
        addToScene: true,
        target: true,
        collidable: true
    }) 

    ramp.rotation.y = 0.785398
    ramp.rotation.z = 0.785398

    //////////////////////////////////////////////////////////////
    ///   Lights

    const hemisphereLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, .8 )
    hemisphereLight.name = 'Hemisphere light'
    scene.add(hemisphereLight)
}

export { buildLevel }