let pressedKeys =[]

function init() {
    const totalKeys = 230

    for (var i = 0; i < totalKeys; i++) {
        pressedKeys[i] = false
    }
    document.addEventListener('keydown', event => {
        event.preventDefault()
        pressedKeys[event.keyCode] = true
    })
    document.addEventListener("keyup", event => {
        pressedKeys[event.keyCode] = false
    })
}

init()

const KEYCHECK = function(keyCode){
    return pressedKeys[keyCode]
}

export { KEYCHECK }