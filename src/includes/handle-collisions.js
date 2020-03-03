// const playerCollideObj = {
//   position: {
//     x: null, y: null, z: null
//   },
//   width: 40,
//   depth: 40,
//   height: 100
// }

function handleCollisions(collideObj, zVelocity, xVelocity, collidables) {
  return {
    x: collideObj.x,
    z: collideObj.z
  }
}

export { handleCollisions }