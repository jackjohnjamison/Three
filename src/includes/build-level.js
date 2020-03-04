function buildLevel() {

    // Tree printer

    const treeRows = 10
    const treeInterval = 900
    const treeSpaceRandomizer = 550
    const treeScaleRandomizer = 20
    const treeScale = 30

    function addRandom(range) {
        return (Math.random() * range) - (range / 2)
    }
    

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
                tree.position.x = treeX + addRandom(treeSpaceRandomizer)
                tree.position.z = treeZ + addRandom(treeSpaceRandomizer)
                tree.rotation.y += addRandom(7)
                tree.scale.x = treeScale + addRandom(treeScaleRandomizer)
                tree.scale.y = treeScale + addRandom(treeScaleRandomizer)
                tree.scale.z = treeScale + addRandom(treeScaleRandomizer)
                scene.add(tree)
            }
        }
    }

    // Arch

    // ENGINE.GLTFloader.load( 'dist/models/arch/scene.gltf', function(gltf){
    //     scene.add(gltf.scene)
    //     let arch = gltf.scene
    //     arch.name = 'Arch'
    //     arch.position.x = 200
    //     arch.position.z = -1500
    //     arch.position.y = 170
    //     arch.scale.x = 80
    //     arch.scale.y = 80
    //     arch.scale.z = 80

    // }, undefined, function(error){
    //     console.error( error )
    // })

    // Floor

    const texLoader = new THREE.TextureLoader()
    const floorXDimension = 100000
    const floorZDimension = 100000

    const grassTexture = texLoader.load('dist/images/grass2.jpg')
    grassTexture.wrapS = THREE.RepeatWrapping
    grassTexture.wrapT = THREE.RepeatWrapping

    const timesToRepeatHorizontally = floorXDimension / 1000
    const timesToRepeatVertically = floorZDimension / 1000
    grassTexture.repeat.set(timesToRepeatHorizontally, timesToRepeatVertically)

    var floorGeometry = new THREE.BoxBufferGeometry(floorXDimension, 0, floorZDimension)
    var floorMaterial = new THREE.MeshPhongMaterial( { map: grassTexture, shininess: 30 } )
    var floor = new THREE.Mesh( floorGeometry, floorMaterial )
    floor.name = 'Floor'
    
    scene.add(floor)

    floor.position.y = -8 // Fix this bullshit

    // Sexy box

    const boxDimension = 200

    // const boxTimesToRepeatHorizontally = boxDimension / 1000
    // const boxTimesToRepeatVertically = boxDimension / 1000
    // grassTexture.repeat.set(boxTimesToRepeatHorizontally, boxTimesToRepeatVertically)


    var boxGeometry = new THREE.BoxBufferGeometry(boxDimension, boxDimension, boxDimension)
    var boxMaterial = new THREE.MeshPhongMaterial( { map: grassTexture, shininess: 30 } )
    var box = new THREE.Mesh( boxGeometry, boxMaterial )
    box.name = 'Sexy box'

    box.position.z = -1500
    box.position.y = boxDimension / 2
    
    scene.add(box)


    //////////////////////////////////////////////////////////////
    ///   Lights

    const hemisphereLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, .8 )
    hemisphereLight.name = 'Hemisphere light'
    scene.add(hemisphereLight)
}

export { buildLevel }