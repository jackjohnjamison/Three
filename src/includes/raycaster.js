let raycaster
let downRay
let intersectsDown
let hitLocations = []
let screenCenter = {x: 0, y: 0}
let down
let playerPos


function initRays() {
    down = new THREE.Vector3(0, ENGINE.UTILS.degreesToRadians(-90), 0).normalize()
    playerPos = new THREE.Vector3()

    raycaster = new THREE.Raycaster()
    downRay = new THREE.Raycaster()

    let materialBlue = new THREE.LineBasicMaterial( { color: 0x0000ff } )
    let materialRed = new THREE.LineBasicMaterial( { color: 0xff0000 } )

    window.addEventListener( 'click', function() {

        if(!ENGINE.isPaused) {
            if(hitLocations[0]) {
                let firstHitLocation = hitLocations[0].point
                ENGINE.UTILS.drawLine(playerPos, firstHitLocation, materialBlue)
            }
    
            if(intersectsDown[0]) {
                let groundCollison = intersectsDown[0].point
                ENGINE.UTILS.drawLine(playerPos, groundCollison, materialRed)
            }
        }
    }, false )
}


function findRayCollisions() {
    raycaster.setFromCamera( screenCenter, ENGINE.camera )

    playerPos.set(ENGINE.player.position.x, ENGINE.player.position.y -10, ENGINE.player.position.z)

    downRay.set(playerPos, down)

    hitLocations = raycaster.intersectObjects( scene.children )

    intersectsDown = downRay.intersectObjects( scene.children )
}

export { initRays, findRayCollisions }
