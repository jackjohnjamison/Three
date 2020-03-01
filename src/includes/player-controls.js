document.body.requestPointerLock = document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock

var movementX = 0
var movementY = 0

let timeStamp = 0
let timeStampPrev = 0
let pointerLocked = false

let xVelocity = 0
let zVelocity = 0

let arrowFoward = function() {}
let arrowBack = function() {}
let arrowRight = function() {}
let arrowLeft = function() {}
let quaterTurn = 0


function pointerLock() {
    document.body.requestPointerLock()
    document.addEventListener('mousemove', event => {
        movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0
        movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0
        timeStamp = event.timeStamp
    })
    pointerLocked = true
}

document.addEventListener('pointerlockchange', event => {
    console.log(event)
})


function initPlayerControls(KEYCHECK, UTILS) {
    document.addEventListener('keydown', event => {
        if (event.keyCode === 13) {
            pointerLock()
        }
    })

    arrowFoward = function(){return KEYCHECK(87)}
    arrowBack = function(){return KEYCHECK(83)}
    arrowRight = function(){return KEYCHECK(68)}
    arrowLeft = function(){return KEYCHECK(65)}

    quaterTurn = UTILS.degreesToRadians(90)
}

function playerControls(configs, player, camera) {

    zVelocity -= (configs.acceleration * Math.cos(player.rotation.y)) * arrowFoward()
    zVelocity += (configs.acceleration * Math.cos(player.rotation.y)) * arrowBack()

    xVelocity -= (configs.acceleration * Math.sin(player.rotation.y)) * arrowFoward()
    xVelocity += (configs.acceleration * Math.sin(player.rotation.y)) * arrowBack()

    zVelocity -= (configs.acceleration * Math.cos(player.rotation.y + quaterTurn)) * arrowLeft()
    zVelocity += (configs.acceleration * Math.cos(player.rotation.y + quaterTurn)) * arrowRight()

    xVelocity -= (configs.acceleration * Math.sin(player.rotation.y + quaterTurn)) * arrowLeft()
    xVelocity += (configs.acceleration * Math.sin(player.rotation.y + quaterTurn)) * arrowRight()
    
    player.position.z += zVelocity
    player.position.x += xVelocity
    
    if(pointerLocked && timeStamp !== timeStampPrev) {
        player.rotation.y -= movementX * configs.lookSensitivity
        camera.rotation.x -= movementY * configs.lookSensitivity
    }
    timeStampPrev = timeStamp
    
    zVelocity *= configs.friction
    xVelocity *= configs.friction
}

export { initPlayerControls, playerControls }