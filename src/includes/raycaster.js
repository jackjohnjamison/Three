let raycaster
let downRay
let intersectsDown
let hitLocations = []
let screenCenter = {x: 0, y: 0}

function initRays() {

    raycaster = new THREE.Raycaster()
    downRay = new THREE.Raycaster()

    let materialBlue = new THREE.LineBasicMaterial( { color: 0x0000ff } )
    let materialRed = new THREE.LineBasicMaterial( { color: 0xff0000 } )

    window.addEventListener( 'click', function() {

        function drawLine(start, end, material) {
            let points = []
            points.push(start, end)
            let geometry = new THREE.BufferGeometry().setFromPoints(points)
            let line = new THREE.Line(geometry, material)
            scene.add(line)
        }

        let adjustedPlayerPosition = new THREE.Vector3(
            ENGINE.player.position.x, 
            ENGINE.player.position.y -10, 
            ENGINE.player.position.z
        )

        if(hitLocations[0]) {
            let firstHitLocation = hitLocations[0].point
            drawLine(adjustedPlayerPosition, firstHitLocation, materialBlue)
        }

        if(intersectsDown[0]) {
            let groundCollison = intersectsDown[0].point
            drawLine(adjustedPlayerPosition, groundCollison, materialRed)
        }
        
    }, false )
}



function findRayCollisions() {
    raycaster.setFromCamera( screenCenter, ENGINE.camera )

    let down = new THREE.Vector3(0, ENGINE.UTILS.degreesToRadians(-90), 0)
    let playerPos = new THREE.Vector3(ENGINE.player.position.x, ENGINE.player.position.y -10, ENGINE.player.position.z)
    down.normalize()

    downRay.set(playerPos, down)

    hitLocations = raycaster.intersectObjects( scene.children )

    intersectsDown = downRay.intersectObjects( scene.children )
}

export { initRays, findRayCollisions }
