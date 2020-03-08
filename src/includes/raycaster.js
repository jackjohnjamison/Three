let raycaster
let downRay
let intersectsDown
let hitLocations = []
let screenCenter = {x: 0, y: 0}
let downAngle
let viewPos


function initRays() {
    downAngle = new THREE.Vector3(0, ENGINE.UTILS.degreesToRadians(-90), 0).normalize()
    viewPos = new THREE.Vector3()

    raycaster = new THREE.Raycaster()
    downRay = new THREE.Raycaster()

    let materialBlue = new THREE.LineBasicMaterial( { color: 0x0000ff } )
    let materialRed = new THREE.LineBasicMaterial( { color: 0xff0000 } )

    window.addEventListener( 'click', function() {

        if(!ENGINE.isPaused) {
            if(hitLocations[0]) {
                let firstHitLocation = hitLocations[0].point
                ENGINE.UTILS.drawLine(viewPos, firstHitLocation, materialBlue)
            }
    
            if(intersectsDown[0]) {
                let groundCollison = intersectsDown[0].point
                ENGINE.UTILS.drawLine(viewPos, groundCollison, materialRed)
            }
        }
    }, false )
}


function findRayCollisions() {
    raycaster.setFromCamera( screenCenter, ENGINE.camera )

    viewPos.set(ENGINE.player.position.x, (ENGINE.camera.position.y -10 + ENGINE.player.position.y), ENGINE.player.position.z)

    downRay.set(viewPos, downAngle)

    hitLocations = raycaster.intersectObjects( scene.children )

    intersectsDown = downRay.intersectObjects( ENGINE.collisions.collisionObjects )

    if(intersectsDown[0]) {
        ENGINE.collisions.downCollisionPoint = intersectsDown[0].point.y
    } else {
        ENGINE.collisions.downCollisionPoint = 0
    }
}

export { initRays, findRayCollisions }
