import { degreesToRadians } from './utils.js'

function addControles() {
    document.addEventListener('keydown', event => {
        if (event.keyCode === 13) {
            pointerLock()
        }
    })
}

document.body.requestPointerLock = document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock

var movementX = 0
// var movementY = 0
let timeStamp = 0
let timeStampPrev = 0
let pointerLocked = false


function pointerLock() {
    document.body.requestPointerLock()
    document.addEventListener('mousemove', event => {
        movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0
        // movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0
        timeStamp = event.timeStamp
    })
    pointerLocked = true
}

document.addEventListener('pointerlockchange', event => {
    console.log(event)
})

const acceleration = 2
const friction = 0.9
const lookSensitivity = 0.02

var quaterTurn = degreesToRadians(90)

let xVelocity = 0
let zVelocity = 0

let arrowFoward = function() {}
let arrowBack = function() {}
let arrowRight = function() {}
let arrowLeft = function() {}

function initPlayerControls(KEYCHECK) {
    arrowFoward = function(){return KEYCHECK(87)}
    arrowBack = function(){return KEYCHECK(83)}
    arrowRight = function(){return KEYCHECK(68)}
    arrowLeft = function(){return KEYCHECK(65)}
}

function playerControls(player) {
    zVelocity -= (acceleration * Math.cos(player.rotation.y)) * arrowFoward()
    zVelocity += (acceleration * Math.cos(player.rotation.y)) * arrowBack()
    
    xVelocity -= (acceleration * Math.sin(player.rotation.y)) * arrowFoward()
    xVelocity += (acceleration * Math.sin(player.rotation.y)) * arrowBack()
    
    zVelocity -= (acceleration * Math.cos(player.rotation.y + quaterTurn)) * arrowLeft()
    zVelocity += (acceleration * Math.cos(player.rotation.y + quaterTurn)) * arrowRight()
    
    xVelocity -= (acceleration * Math.sin(player.rotation.y + quaterTurn)) * arrowLeft()
    xVelocity += (acceleration * Math.sin(player.rotation.y + quaterTurn)) * arrowRight()
    
    player.position.z += zVelocity
    player.position.x += xVelocity
    
    if(pointerLocked && timeStamp !== timeStampPrev) {
        player.rotation.y -= movementX * lookSensitivity
    }
    timeStampPrev = timeStamp
    
    zVelocity *= friction
    xVelocity *= friction
}

export { initPlayerControls, playerControls, addControles }