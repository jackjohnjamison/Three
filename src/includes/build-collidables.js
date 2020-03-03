function buildCollidables() {
	const scene = window.scene
	const THREE = window.THREE
	const loader = new THREE.TextureLoader()

	// wall1
	const wall1Geometry = new THREE.BoxGeometry(80, 320, 1200); //width, height, depth
	const wall1Materials = new THREE.MeshBasicMaterial( {map: loader.load('dist/images/grass.jpg')} )
	const wall1 = new Mesh(wall1Geometry, wall1Materials);
	wall1.position.y = -40;
	wall1.position.x = 200;

	scene.add(wall1)
	wall1.geometry.computeBoundingBox()
	let wall1BBox = new Box3( new THREE.Vector3(), new THREE.Vector3() )
	wall1BBox.setFromObject(wall1)
	const collidables = []
	collidables.push(wall1BBox)

	return collidables
}

export { buildCollidables }