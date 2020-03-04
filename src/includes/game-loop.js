import { playerControls } from './player-controls.js'

let raycaster
let mouse
let onMouseMove
let intersects
let downRay
let intersectsDown

let screenCenter = {x: 0, y: 0}

function initAnimate() {

    raycaster = new THREE.Raycaster()
    mouse = new THREE.Vector2()

    downRay = new THREE.Raycaster()
    console.log(downRay)

    var material = new THREE.LineBasicMaterial( { color: 0x0000ff } )
    var material2 = new THREE.LineBasicMaterial( { color: 0xff0000 } )

    window.addEventListener( 'click', function() {

        if(intersects[0]) {
            var points = []
            points.push(new THREE.Vector3( ENGINE.player.position.x, ENGINE.player.position.y -10, ENGINE.player.position.z ))
            points.push( intersects[0].point )
            var geometry = new THREE.BufferGeometry().setFromPoints( points );
            var line = new THREE.Line( geometry, material )
            scene.add( line )
        }


        if(intersectsDown[0]) {
            var points2 = []
            points2.push(new THREE.Vector3( ENGINE.player.position.x, ENGINE.player.position.y -10, ENGINE.player.position.z ))
            points2.push( intersectsDown[0].point )
            var geometry2 = new THREE.BufferGeometry().setFromPoints( points2 );
            var line2 = new THREE.Line( geometry2, material2 )
            scene.add( line2 )
            console.log(intersectsDown[0].object.name)
        }
        
    }, false )
}


var animate = function() {

    raycaster.setFromCamera( screenCenter, ENGINE.camera )

    let down = new THREE.Vector3(0, ENGINE.UTILS.degreesToRadians(-90), 0)
    let playerPos = new THREE.Vector3(ENGINE.player.position.x, ENGINE.player.position.y -10, ENGINE.player.position.z)
    down.normalize()

    downRay.set(playerPos, down)

    intersects = raycaster.intersectObjects( scene.children )

    intersectsDown = downRay.intersectObjects( scene.children )

    playerControls(ENGINE.configs, ENGINE.player, ENGINE.camera)

    ENGINE.renderer.render(scene, ENGINE.camera)
    requestAnimationFrame(animate)
}

export { initAnimate, animate }