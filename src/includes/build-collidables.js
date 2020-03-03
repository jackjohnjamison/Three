function buildCollidables() {
	const scene = window.scene
	const THREE = window.THREE
	const loader = new THREE.TextureLoader()
	const collidables = []

	// wall1
	const wall1 = {
		mesh: new THREE.Mesh(
			new THREE.BoxGeometry(80, 320, 1200), //width, height, depth
			new THREE.MeshBasicMaterial( {map: loader.load('dist/images/grass.jpg')} ) 
		),
		collision: {
			type: 'AABB',
			boundingBox: new THREE.Box3( new THREE.Vector3(), new THREE.Vector3() )
		}
	}
	wall1.mesh.position.y = -40
	wall1.mesh.position.x = -200
	wall1.mesh.geometry.computeBoundingBox()
	wall1.collision.boundingBox.setFromObject(wall1.mesh)
	scene.add(wall1.mesh)
	collidables.push(wall1.collision)

	// tidy and sort out pathetic upside down ramp
	// ramp1
	const shape = new THREE.Shape();
	shape.moveTo( 80, 20 )
	shape.lineTo( 40, 80 )
	shape.lineTo( 120, 80 )
	shape.lineTo( 80, 20 ); // close path

	const extrudeSettings = {
		steps: 2,
		depth: 100,
		bevelEnabled: true,
		bevelThickness: 1,
		bevelSize: 1,
		bevelSegments: 2,
	};

	const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings)

	const ramp1 = new THREE.Mesh(
		geometry, 
		new THREE.MeshBasicMaterial( {map: loader.load('dist/images/grass.jpg')} )
	)

	scene.add(ramp1)

	return collidables
}

export { buildCollidables }