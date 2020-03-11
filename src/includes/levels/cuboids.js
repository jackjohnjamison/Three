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

            //////////////////////////////////////////////////////////////////////////////////////////
            const textureRatio = ENGINE.configs.textureRatio
    
            const texture1 = texLoader.load(objectProps.texture)
            texture1.wrapS = texture1.wrapT = THREE.RepeatWrapping
            const texture1RepetitionU = objectProps.dimensions.z / textureRatio
            const texture1RepetitionV = objectProps.dimensions.y / textureRatio
            texture1.repeat.set(texture1RepetitionU, texture1RepetitionV)

            const texture2 = texLoader.load(objectProps.texture)
            texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping
            const texture2RepetitionU = objectProps.dimensions.x / textureRatio
            const texture2RepetitionV = objectProps.dimensions.z / textureRatio
            texture2.repeat.set(texture2RepetitionU, texture2RepetitionV)

            const texture3 = texLoader.load(objectProps.texture)
            texture3.wrapS = texture3.wrapT = THREE.RepeatWrapping
            const texture3RepetitionU = objectProps.dimensions.x / textureRatio
            const texture3RepetitionV = objectProps.dimensions.y / textureRatio
            texture3.repeat.set(texture3RepetitionU, texture3RepetitionV)
            
            let boxGeometry = new THREE.BoxBufferGeometry(objectProps.dimensions.x, objectProps.dimensions.y, objectProps.dimensions.z)
            let boxMaterials = [ 
                new THREE.MeshPhongMaterial( { map: texture1, shininess: 30, color: 0xff0000 }),
                new THREE.MeshPhongMaterial( { map: texture1, shininess: 30, color: 0xff0000 }),
                new THREE.MeshPhongMaterial( { map: texture2, shininess: 30, color: 0x00ff00 }),
                new THREE.MeshPhongMaterial( { map: texture2, shininess: 30, color: 0x00ff00 }),
                new THREE.MeshPhongMaterial( { map: texture3, shininess: 30, color: 0x0000ff }),
                new THREE.MeshPhongMaterial( { map: texture3, shininess: 30, color: 0x0000ff })
            ]
            
            console.log(boxMaterials)
            
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

