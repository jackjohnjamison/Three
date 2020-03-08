function cuboid() {

    const texLoader = new THREE.TextureLoader()

    const boxDimension = 128

    const boxTexture = texLoader.load('dist/images/grass2.jpg')
    
    const boxTimesToRepeatHorizontally = boxDimension / 128
    const boxToRepeatVertically = boxDimension / 128
    boxTexture.repeat.set(boxTimesToRepeatHorizontally, boxToRepeatVertically)
    
    let boxGeometry = new THREE.BoxBufferGeometry(boxDimension, boxDimension, boxDimension)
    let boxMaterial = new THREE.MeshPhongMaterial( { map: boxTexture, shininess: 30 } )
    
    
    let box = new THREE.Mesh( boxGeometry, boxMaterial )
    box.name = 'Sexy box'
    
    box.position.z = -1500
    box.position.y = boxDimension / 2

    return box
}
 export { cuboid }