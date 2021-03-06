import { animate } from './game-loop.js'

let movementX = 0
let movementY = 0

let timeStamp = 0
let timeStampPrev = 0

let xVelocity = 0
let zVelocity = 0

let yVelocity = 0
let canJump = false
let isPointerLocked = false

let deg90

function initPointerLock() {
    document.addEventListener('mousemove', event => {
        if(isPointerLocked === true) {
            movementX = event.movementX
            movementY = event.movementY
            timeStamp = event.timeStamp
        }
    })

    document.addEventListener('pointerlockchange', function() { // This function runs on the ESC key being pressed.
        if(!document.pointerLockElement) {
            ENGINE.renderer.setSize(innerWidth, innerHeight)
            ENGINE.camera.updateProjectionMatrix()
            isPointerLocked = false
            pause()
        } else {
            isPointerLocked = true
        }
    })
}

function pause() {
    if(ENGINE.isPaused === false) {
        ENGINE.isPaused = true
        cancelAnimationFrame(ENGINE.renderLoop)
        ENGINE.UI.pauseScreen.style.display = 'block'
        ENGINE.UI.hud.style.display = 'none'
    }
}

function unpause() {
    if(ENGINE.isPaused === true) {
        ENGINE.isPaused = false
        document.body.requestPointerLock()
        ENGINE.UI.pauseScreen.style.display = 'none'
        ENGINE.UI.startScreen.style.display = 'none'
        ENGINE.UI.hud.style.display = 'block'
        animate()
    }
}

function fullscreen() {
    if(!document.body.fullscreenElement) {
        document.body.requestFullscreen()
        ENGINE.renderer.setSize(innerWidth, screen.height)
        ENGINE.camera.updateProjectionMatrix()
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
        ENGINE.UI.hud.keyCodeDisplay.innerHTML = 'keycode ' + event.keyCode
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

    let groundCollisionsPoint = Math.max(0, ENGINE.collisions.downCollisionPoint)
    
    if (player.position.y < groundCollisionsPoint) {
        yVelocity = Math.max(0, yVelocity)
        player.position.y = groundCollisionsPoint
        canJump = true
    }
}

export { initPlayerControls, playerControls }