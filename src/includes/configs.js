const configs = {

    parentElemnt: document.body,
    screenHeight: innerHeight,
    screenWidth: innerWidth,

    viewDistance: 2000,
    fov: 75,
    nearPlane: 0.1,

    fogStart: 500, // Old fog configs currently not is use
    fogEnd: 2000,

    fogDensity: 0.0008,

    clearColour: 0x001c0c, // Scene background colour
    fogColour: 0x001c0c,

    playerHeight: 200,
    acceleration: 2,
    friction: 0.9,
    jumpPower: 25,
    gravity: 1.1,
    lookSensitivity: 0.02
}

export { configs }