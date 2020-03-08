function makeForest(rows, interval, intervalDeviation, scale, scaleDeviation) {
    const forest = new THREE.Object3D()
    forest.name = forest

    ENGINE.GLTFloader.load( 'dist/models/tree/scene.gltf', function(gltf){
        let platonicTree = gltf.scene
        randomForest(platonicTree)
    }, undefined, function(error){
        console.error( error )
    })

    function randomForest(platonicTree) {
        for(let i = 0; i < rows; i++) {
            let treeX = 0 + interval * i

            for(let j = 0; j < rows; j++) {
                let treeZ = 0 + interval * j
                let tree = platonicTree.clone()
                tree.name = 'Tree ' + i + ' ' + j
                tree.position.x = treeX + ENGINE.UTILS.randomiseByRange(intervalDeviation)
                tree.position.z = treeZ + ENGINE.UTILS.randomiseByRange(intervalDeviation)
                tree.rotation.y += ENGINE.UTILS.randomiseByRange(7)
                tree.scale.x = scale + ENGINE.UTILS.randomiseByRange(scaleDeviation)
                tree.scale.y = scale + ENGINE.UTILS.randomiseByRange(scaleDeviation)
                tree.scale.z = scale + ENGINE.UTILS.randomiseByRange(scaleDeviation)
                forest.add(tree)
            }
        }
    }

    return forest
}

export { makeForest }