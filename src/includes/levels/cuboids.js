function initCuboid() {

    const texLoader = new THREE.TextureLoader()

    function cuboid(props = {}) {

            const objectProps = {
                name: 'Unnamed',
                texture: 'dist/images/blank.jpg',
                dimensions: {x: 128, y: 128, z: 128},
                position: {x: 0, z: 0, y: 0},
                addToScene: false,
                target: false,
                collidable: false 
            }

            for (let property in props) {
                objectProps[property] = props[property]
            }

            const textureRatio = ENGINE.configs.textureRatio

            function initTexture(width, height) {
                const texture = texLoader.load(objectProps.texture)
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping
                const textureRepetitionU = width / textureRatio
                const textureRepetitionV = height / textureRatio
                texture.repeat.set(textureRepetitionU, textureRepetitionV)
                return texture
            }

            const textureX = initTexture(objectProps.dimensions.z, objectProps.dimensions.y)
            const textureY = initTexture(objectProps.dimensions.x, objectProps.dimensions.z)
            const textureZ = initTexture(objectProps.dimensions.x, objectProps.dimensions.y)

            
            let boxGeometry = new THREE.BoxBufferGeometry(objectProps.dimensions.x, objectProps.dimensions.y, objectProps.dimensions.z)
            let boxMaterials = [ 
                new THREE.MeshPhongMaterial( { map: textureX, shininess: 30, color: 0xff0000 }),
                new THREE.MeshPhongMaterial( { map: textureX, shininess: 30, color: 0xff0000 }),
                new THREE.MeshPhongMaterial( { map: textureY, shininess: 30, color: 0x00ff00 }),
                new THREE.MeshPhongMaterial( { map: textureY, shininess: 30, color: 0x00ff00 }),
                new THREE.MeshPhongMaterial( { map: textureZ, shininess: 30, color: 0x0000ff }),
                new THREE.MeshPhongMaterial( { map: textureZ, shininess: 30, color: 0x0000ff })
            ]
            
            const cuboid = new THREE.Mesh( boxGeometry, boxMaterials )

            cuboid.position.x = objectProps.position.x
            cuboid.position.y = objectProps.position.y
            cuboid.position.z = objectProps.position.z

            if(objectProps.addToScene) {
                scene.add(cuboid)
            }
            if(objectProps.target) {
                ENGINE.collisions.collisionObjects.push(cuboid)              
            }
            if(objectProps.collidable) {
                ENGINE.collisions.targetObjects.push(cuboid)
            }

            return cuboid
        }

    ENGINE.entities.cuboid = cuboid
}

 export { initCuboid }

