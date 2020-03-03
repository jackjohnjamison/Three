// const playerMeta = {
//   width: 40,
//   depth: 40,
//   height: 100
// }

function handleCollisions(playerPos, playerMeta, zVelocity, xVelocity, collidables) {
  // for every collidable check type
  // if type == AABB do AABB intersection test only
  // if type == ramp do AABB intersection test, 
  // if true test if bottom of player obj inside slope
  return {
    x: playerPos.x + xVelocity,
    z: playerPos.z + zVelocity
  }
}

export { handleCollisions }