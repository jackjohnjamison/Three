import { makeForest } from './tree-printer.js'

function buildLevel() {

    // Floor

    const texLoader = new THREE.TextureLoader()
    const floorDimensionX = 100000
    const floorDimensionZ = 100000

    const grassTexture = texLoader.load('dist/images/grass2.jpg')
    grassTexture.wrapS = THREE.RepeatWrapping
    grassTexture.wrapT = THREE.RepeatWrapping

    const timesToRepeatHorizontally = floorDimensionX / 1000
    const timesToRepeatVertically = floorDimensionZ / 1000
    grassTexture.repeat.set(timesToRepeatHorizontally, timesToRepeatVertically)

    var floorGeometry = new THREE.PlaneGeometry(floorDimensionX, floorDimensionZ)
    var floorMaterial = new THREE.MeshPhongMaterial( { map: grassTexture, shininess: 30, side: THREE.DoubleSide } )
    var floor = new THREE.Mesh( floorGeometry, floorMaterial )
    floor.name = 'Floor'

    floor.rotation.x = 1.5708
    
    ENGINE.collisions.targetObjects.push(floor)
    scene.add(floor)


    // Make forest
    const forest = makeForest(20, 900, 700, 30, 20)
    scene.add(forest)

    // Sexy box

    const boxDimension = 100

    let boxGeometry = new THREE.BoxBufferGeometry(boxDimension, boxDimension, boxDimension)
    let boxMaterial = new THREE.MeshPhongMaterial( { map: grassTexture, shininess: 30 } )
    let box = new THREE.Mesh( boxGeometry, boxMaterial )
    box.name = 'Sexy box'

    box.position.z = -1500
    box.position.y = boxDimension / 2
    
    scene.add(box)

    ENGINE.collisions.collisionObjects.push(box)
    ENGINE.collisions.targetObjects.push(box)

    // Sexy ramp

    const rampDimension = 500

    let rampGeometry = new THREE.BoxBufferGeometry(rampDimension, rampDimension, rampDimension)
    let rampMaterial = new THREE.MeshPhongMaterial( { map: grassTexture, shininess: 30 } )
    let ramp = new THREE.Mesh( rampGeometry, rampMaterial )
    ramp.name = 'Sexy ramp'

    ramp.position.z = -2000
    ramp.rotation.y = 0.785398
    ramp.rotation.z = 0.785398
    
    scene.add(ramp)

    ENGINE.collisions.collisionObjects.push(ramp)
    ENGINE.collisions.targetObjects.push(ramp)


    //////////////////////////////////////////////////////////////
    ///   Lights

    const hemisphereLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, .8 )
    hemisphereLight.name = 'Hemisphere light'
    scene.add(hemisphereLight)
}

export { buildLevel }