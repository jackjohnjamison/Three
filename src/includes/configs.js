const configs = {

    parentElemnt: document.body,
    screenHeight: window.innerHeight,
    screenWidth: window.innerWidth,
    viewDistance: 2000,
    fov: 75,
    nearPlane: 0.1,
    fogStart: 1000,
    fogEnd: 2500,
    clearColour: 0x001c0c, // Scene background colour
    fogColour: 0x001c0c,

    acceleration: 2,
    friction: 0.9,
    lookSensitivity: 0.02
}

export { configs }