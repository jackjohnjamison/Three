import { playerControls } from './player-controls.js'

// var raycaster = new THREE.Raycaster();
// var mouse = new THREE.Vector2();

// function onMouseMove( event ) {

// 	// calculate mouse position in normalized device coordinates
// 	// (-1 to +1) for both components

// 	mouse.x = ( event.clientX / innerWidth ) * 2 - 1;
// 	mouse.y = - ( event.clientY / innerHeight ) * 2 + 1;

// }

var animate = function() {

    // 	// update the picking ray with the camera and mouse position
	// raycaster.setFromCamera( mouse, camera );

	// // calculate objects intersecting the picking ray
	// var intersects = raycaster.intersectObjects( scene.children );

	// for ( var i = 0; i < intersects.length; i++ ) {

	// 	intersects[ i ].object.material.color.set( 0xff0000 );

	// }

    playerControls(ENGINE.configs, ENGINE.player, ENGINE.camera)

    ENGINE.renderer.render(scene, ENGINE.camera)
    requestAnimationFrame(animate)
}

export { animate }