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
    
            const texture = texLoader.load(objectProps.texture)
            
            const textureRepetitionX = objectProps.dimensions.x / textureRatio
            const textureRepetitionY = objectProps.dimensions.y / textureRatio
            const textureRepetitionZ = objectProps.dimensions.z / textureRatio

            texture.repeat.set(textureRepetitionX, textureRepetitionX)
            
            let boxGeometry = new THREE.BoxBufferGeometry(objectProps.dimensions.x, objectProps.dimensions.y, objectProps.dimensions.z)
            let boxMaterial = new THREE.MeshPhongMaterial( { map: texture, shininess: 30 } )
            
            
            const cuboid = new THREE.Mesh( boxGeometry, boxMaterial )

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

