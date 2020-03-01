function buildLevel(THREE, loader, scene) {
    
    // Tree printer

    const treeRows = 10
    const treeInterval = 900
    const treeSpaceRandomizer = 500
    const treeScaleRandomizer = 20
    const treeScale = 30

    function addRandom(range) {
        return (Math.random() * range) - (range / 2)
    }
    

    for(let i = 0; i < treeRows; i++) {
        let treeX = 0 + treeInterval * i

        for(let i = 0; i < treeRows; i++) {
            let treeZ = 0 + treeInterval * i

            loader.load( 'dist/models/tree/scene.gltf', function(gltf){
                scene.add(gltf.scene)
                let tree = gltf.scene
                tree.position.x = treeX + addRandom(treeSpaceRandomizer)
                tree.position.z = treeZ + addRandom(treeSpaceRandomizer)
                tree.rotation.y += addRandom(7)
                tree.scale.x = treeScale + addRandom(treeScaleRandomizer)
                tree.scale.y = treeScale + addRandom(treeScaleRandomizer)
                tree.scale.z = treeScale + addRandom(treeScaleRandomizer)
            }, undefined, function(error){
                console.error( error )
            })
        }
    }

    // Arch

    loader.load( 'dist/models/arch/scene.gltf', function(gltf){
        scene.add(gltf.scene)
        let arch = gltf.scene
        arch.position.x = 200
        arch.position.z = -1500
        arch.position.y = 170
        arch.scale.x = 80
        arch.scale.y = 80
        arch.scale.z = 80

    }, undefined, function(error){
        console.error( error )
    })


    // Floor

    const texLoader = new THREE.TextureLoader()
    const floorXDimension = 100000
    const floorZDimension = 100000

    const grassTexture = texLoader.load('dist/images/grass2.jpg')
    grassTexture.wrapS = THREE.RepeatWrapping;
    grassTexture.wrapT = THREE.RepeatWrapping;

    const timesToRepeatHorizontally = floorXDimension / 1000
    const timesToRepeatVertically = floorZDimension / 1000
    grassTexture.repeat.set(timesToRepeatHorizontally, timesToRepeatVertically)

    var floorGeometry = new THREE.BoxGeometry(floorXDimension, 0, floorZDimension)
    var floorMaterial = new THREE.MeshPhongMaterial( { map: grassTexture, shininess: 30 } )
    var floor = new THREE.Mesh( floorGeometry, floorMaterial )
    
    scene.add(floor)

    floor.position.y = -8


    //////////////////////////////////////////////////////////////
    ///   Lights

    var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, .8 )
    scene.add( light )

    // var directionalLight = new THREE.DirectionalLight( 0x000000, 1.5 )
    // scene.add( directionalLight )

    // const color = 0xFFFFFF
    // const intensity = 1
    // const light = new THREE.RectAreaLight(color, intensity)
    // light.power = 8000
    // light.decay = 2
    // light.distance = 2000
    // light.position.set(0, 10, 0)
    // scene.add(light)
}

export { buildLevel }