
function initPlayer() {
    const configs = ENGINE.configs

    const player = ENGINE.player = new THREE.Object3D()
    player.name = 'Player root object'
    
    const camera = ENGINE.camera = new THREE.PerspectiveCamera( configs.fov, configs.screenWidth/configs.screenHeight, configs.nearPlane, configs.viewDistance)
    camera.name = 'Player view'
    player.add(camera)

    camera.position.y = ENGINE.configs.playerHeight

    scene.add(player)
    player.position.z = -1000
    player.position.y = 0 //ENGINE.configs.playerHeight
    player.rotation.y = 3
    
    ENGINE.GLTFloader.load( 'assets/dist/three-js-fps/models/fn2000/scene.gltf', function(gltf){
        camera.add(gltf.scene)
        let rightHand = gltf.scene
        rightHand.name = 'Right hand'
        rightHand.position.z = -30
        rightHand.position.y = -15
        rightHand.position.x = 20
        rightHand.scale.x = 0.05
        rightHand.scale.y = 0.05
        rightHand.scale.z = 0.05
        rightHand.rotation.y = 1.5708
    }, undefined, function(error){
        console.error( error )
    })
}

export { initPlayer }