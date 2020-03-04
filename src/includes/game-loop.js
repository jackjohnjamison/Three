import { playerControls } from './player-controls.js'

let raycaster
let mouse
let onMouseMove
let intersects
let downRay
let intersectsDown

let fakeMouse = {
    x: 0, 
    y: 0
}

function initAnimate() {

    raycaster = new THREE.Raycaster()
    mouse = new THREE.Vector2()

    downRay = new THREE.Raycaster()

    onMouseMove = function(event) {
    
        mouse.x = ( event.clientX / innerWidth ) * 2 - 1
        mouse.y = - ( event.clientY / innerHeight ) * 2 + 1
    
    }

    var material = new THREE.LineBasicMaterial( { color: 0x0000ff } )
    

    window.addEventListener( 'mousemove', onMouseMove, false )
    window.addEventListener( 'click', function() {

        var points = [];
        points.push(new THREE.Vector3( ENGINE.player.position.x, ENGINE.player.position.y -10, ENGINE.player.position.z ))
        points.push( intersects[0].point )

        var geometry = new THREE.BufferGeometry().setFromPoints( points );

        var line = new THREE.Line( geometry, material )

        scene.add( line )

        console.log(intersectsDown[0])
    }, false )
}


var animate = function() {

    raycaster.setFromCamera( mouse, ENGINE.camera )

    downRay.setFromCamera( fakeMouse, ENGINE.camera )
    
    // console.log(raycaster)

    intersects = raycaster.intersectObjects( scene.children )

    intersectsDown = downRay.intersectObjects( scene.children )

    playerControls(ENGINE.configs, ENGINE.player, ENGINE.camera)

    ENGINE.renderer.render(scene, ENGINE.camera)
    requestAnimationFrame(animate)
}

export { initAnimate, animate }