    class cuboid {
        constructor() {
            const texLoader = new THREE.TextureLoader()
            const boxDimension = 128
    
            const boxTexture = texLoader.load('dist/images/grass2.jpg')
            
            const boxTimesToRepeatHorizontally = boxDimension / 128
            const boxToRepeatVertically = boxDimension / 128
            boxTexture.repeat.set(boxTimesToRepeatHorizontally, boxToRepeatVertically)
            
            let boxGeometry = new THREE.BoxBufferGeometry(boxDimension, boxDimension, boxDimension)
            let boxMaterial = new THREE.MeshPhongMaterial( { map: boxTexture, shininess: 30 } )
            
            
            this.box = new THREE.Mesh( boxGeometry, boxMaterial )
            this.box.name = 'Sexy box'
            
            this.box.position.z = -1500
            this.box.position.y = boxDimension / 2
        }

    }


 export { cuboid }