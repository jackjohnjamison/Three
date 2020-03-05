function degreesToRadians(degrees) {
    var pi = Math.PI
    return degrees * (pi/180)
}


function randomiseByRange(range) {
    return (Math.random() * range) - (range / 2)
}


function drawLine(start, end, material) {
    let points = []
    points.push(start, end)
    let geometry = new THREE.BufferGeometry().setFromPoints(points)
    let line = new THREE.Line(geometry, material)
    scene.add(line)
}


export { degreesToRadians, randomiseByRange, drawLine }