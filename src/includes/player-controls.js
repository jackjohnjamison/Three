let movementX = 0
let movementY = 0

let timeStamp = 0
let timeStampPrev = 0
let pointerLocked = false

let xVelocity = 0
let zVelocity = 0

let yVelocity = 0

let deg90

function pointerLock() {
    document.body.requestPointerLock()
    document.addEventListener('mousemove', event => {
        movementX = event.movementX
        movementY = event.movementY
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

function jump() {
    yVelocity += ENGINE.configs.jumpPower
}

function initPlayerControls() {
    deg90 = ENGINE.UTILS.degreesToRadians(90)

    document.addEventListener('keydown', event => {
        switch(event.keyCode) {
            case 13:
                pointerLock()
                break
            case 32:
                jump()
                break
        }
    })
}


function playerControls(configs, player, camera) {

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



    
    if(pointerLocked && timeStamp !== timeStampPrev) {
        player.rotation.y -= movementX * configs.lookSensitivity
        camera.rotation.x -= movementY * configs.lookSensitivity

        camera.rotation.x = Math.max(Math.min(camera.rotation.x, deg90), -deg90)
    }
    timeStampPrev = timeStamp
    
    zVelocity *= configs.friction
    xVelocity *= configs.friction

    yVelocity -= configs.gravity
    player.position.y += yVelocity
    
    
    if (player.position.y < 200) {
        console.log('i ran')
        yVelocity = 0
        player.position.y = 200
    }

    

    console.log(player.position.y)
}

export { initPlayerControls, playerControls }