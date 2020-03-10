function initCuboid() {

    const texLoader = new THREE.TextureLoader()

    function cuboid(props = {}) {

            let defaults = {
                name: 'Unnamed',
                ligma: 10
            }

            for (let property in props) {
                defaults[property] = props[property]
            }

            console.log(defaults)

            const textureRatio = ENGINE.configs.textureRatio
    
            const texture = texLoader.load('dist/images/grass2.jpg')
            
            const textureRepetition = dimensions / textureRatio
            texture.repeat.set(textureRepetition, textureRepetition)
            
            let boxGeometry = new THREE.BoxBufferGeometry(dimensions, dimensions, dimensions)
            let boxMaterial = new THREE.MeshPhongMaterial( { map: texture, shininess: 30 } )
            
            
            const cube = new THREE.Mesh( boxGeometry, boxMaterial )
            cube.name = name




            return cube
        }

    ENGINE.entities.cuboid = cuboid
}


 export { initCuboid }

