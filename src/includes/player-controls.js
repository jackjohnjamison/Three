import { animate } from './game-loop.js'

let movementX = 0
let movementY = 0

let timeStamp = 0
let timeStampPrev = 0

let xVelocity = 0
let zVelocity = 0

let yVelocity = 0
let canJump = false

let deg90

function initPointerLock() {
    document.addEventListener('mousemove', event => {
        movementX = event.movementX
        movementY = event.movementY
        timeStamp = event.timeStamp
    })

    document.addEventListener('pointerlockchange', function() {
        if(!document.pointerLockElement) {
            pause()
        }
    })
}

function pause() {
    ENGINE.isPaused = true
    cancelAnimationFrame(ENGINE.renderLoop)
    ENGINE.hud.pauseScreen.style.display = 'block'
}

function unpause() {
    ENGINE.isPaused = false
    document.body.requestPointerLock()
    ENGINE.hud.pauseScreen.style.display = 'none'
    animate()
}

function fullscreen() {
    if(!document.body.fullscreenElement) {
        document.body.requestFullscreen()
    }
}

function jump() {
    if(canJump) {
        yVelocity += ENGINE.configs.jumpPower
        canJump = false
    }
}

function initPlayerControls() {
    deg90 = ENGINE.UTILS.degreesToRadians(90)

    initPointerLock()

    document.addEventListener('keydown', event => {
        switch(event.keyCode) {
            case 13:
                unpause()
                break
            case 32:
                jump()
                break
            case 112:
                fullscreen()
                break
        }
    })
}


function playerControls(configs, player, camera) {

    if(timeStamp !== timeStampPrev) {
        player.rotation.y -= movementX * configs.lookSensitivity
        camera.rotation.x -= movementY * configs.lookSensitivity

        camera.rotation.x = Math.max(Math.min(camera.rotation.x, deg90), -deg90)
    }
    timeStampPrev = timeStamp

    const arrowForward = ENGINE.KEYCHECK(87)
    const arrowBack = ENGINE.KEYCHECK(83)
    const arrowRight = ENGINE.KEYCHECK(68)
    const arrowLeft = ENGINE.KEYCHECK(65)

    const cosY = Math.cos(player.rotation.y)
    const cosYDeg90 = Math.cos(player.rotation.y + deg90)

    const sinY = Math.sin(player.rotation.y)
    const sinYDeg90 = Math.sin(player.rotation.y + deg90)

    xVelocity += (configs.acceleration * sinYDeg90 * arrowRight) - (configs.acceleration * sinYDeg90 * arrowLeft) + (configs.acceleration * sinY * arrowBack) - (configs.acceleration * sinY * arrowForward)
    zVelocity += (configs.acceleration * cosYDeg90 * arrowRight) - (configs.acceleration * cosYDeg90 * arrowLeft) + (configs.acceleration * cosY * arrowBack) - (configs.acceleration * cosY * arrowForward)
    
    player.position.x += xVelocity
    player.position.z += zVelocity
    
    zVelocity *= configs.friction
    xVelocity *= configs.friction

    yVelocity -= configs.gravity
    player.position.y += yVelocity
    
    if (player.position.y < ENGINE.configs.playerHeight) {
        yVelocity = 0
        player.position.y = ENGINE.configs.playerHeight
        canJump = true
    }
}

export { initPlayerControls, playerControls }