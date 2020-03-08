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
    
    console.log(floor)
    
    ENGINE.collisions.targetObjects.push(floor)
    scene.add(floor)

        // Tree printer

        const forest = new THREE.Object3D()
        forest.name = forest

        const treeRows = 10
        const treeInterval = 900
        const treeSpaceRandomizer = 550
        const treeScaleRandomizer = 20
        const treeScale = 30
        
    
        ENGINE.GLTFloader.load( 'dist/models/tree/scene.gltf', function(gltf){
            let platonicTree = gltf.scene
            randomForest(platonicTree)
        }, undefined, function(error){
            console.error( error )
        })
    
        function randomForest(platonicTree) {
            for(let i = 0; i < treeRows; i++) {
                let treeX = 0 + treeInterval * i
    
                for(let j = 0; j < treeRows; j++) {
                    let treeZ = 0 + treeInterval * j
                    let tree = platonicTree.clone()
                    tree.name = 'Tree ' + i + ' ' + j
                    tree.position.x = treeX + ENGINE.UTILS.randomiseByRange(treeSpaceRandomizer)
                    tree.position.z = treeZ + ENGINE.UTILS.randomiseByRange(treeSpaceRandomizer)
                    tree.rotation.y += ENGINE.UTILS.randomiseByRange(7)
                    tree.scale.x = treeScale + ENGINE.UTILS.randomiseByRange(treeScaleRandomizer)
                    tree.scale.y = treeScale + ENGINE.UTILS.randomiseByRange(treeScaleRandomizer)
                    tree.scale.z = treeScale + ENGINE.UTILS.randomiseByRange(treeScaleRandomizer)
                    forest.add(tree)
                }
            }
        }

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