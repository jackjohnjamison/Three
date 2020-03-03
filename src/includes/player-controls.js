document.body.requestPointerLock // = document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock

let movementX = 0
let movementY = 0

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
        movementX = event.movementX // || event.mozMovementX || event.webkitMovementX || 0
        movementY = event.movementY // || event.mozMovementY || event.webkitMovementY || 0
        timeStamp = event.timeStamp
    })
    document.addEventListener('pointerlockchange', function() {
        if(document.pointerLockElement) {
            pointerLocked = true
        } else {
            pointerLocked = false
        }
    })
}


function initPlayerControls(KEYCHECK, UTILS, player) {
    document.addEventListener('keydown', event => {
        if (event.keyCode === 13) {
            pointerLock()
        }
        if (event.keyCode === 81) {
            console.log('Player X', player.position.x)
            console.log('Player Z', player.position.z)
        }
    })

    arrowFoward = function(){return window.ENGINE.KEYCHECK(87)}
    arrowBack = function(){return window.ENGINE.KEYCHECK(83)}
    arrowRight = function(){return window.ENGINE.KEYCHECK(68)}
    arrowLeft = function(){return window.ENGINE.KEYCHECK(65)}

    quaterTurn = window.ENGINE.UTILS.degreesToRadians(90)
}

function playerControls(configs, player, camera, collidables) {

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

        camera.rotation.x = Math.max(Math.min(camera.rotation.x, quaterTurn), -quaterTurn)
    }
    timeStampPrev = timeStamp
    
    zVelocity *= configs.friction
    xVelocity *= configs.friction
}

export { initPlayerControls, playerControls }