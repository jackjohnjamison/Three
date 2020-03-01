
function initPlayer() {
    const configs = window.ENGINE.configs

    const player = window.ENGINE.player = new window.THREE.Object3D()
    player.name = 'Player root object'
    
    const camera = window.ENGINE.camera = new window.THREE.PerspectiveCamera( configs.fov, configs.screenWidth/configs.screenHeight, configs.nearPlane, configs.viewDistance)
    camera.name = 'Player view'
    player.add(camera)
    scene.add(player)
    player.position.z = -1000
    player.position.y = 200
    player.rotation.y = 3
    
    window.ENGINE.GLTFloader.load( 'dist/models/fn2000/scene.gltf', function(gltf){
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