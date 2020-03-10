const configs = {

    parentElemnt: document.body,
    screenHeight: innerHeight,
    screenWidth: innerWidth,

    viewDistance: 3000,
    fov: 75,
    nearPlane: 10, // I have no idea why but setting this higher resolved an issue with overlapping objects flickering

    fogDensity: 0.0005,
    clearColour: 0x001c0c, // Scene background colour
    fogColour: 0x001c0c,

    textureRatio: 128, // Textures are 128 x 128 so this is 1 pixel to 1 unit

    playerHeight: 200,
    viewOffsetY: -10,
    acceleration: 2,
    friction: 0.9,
    jumpPower: 25,
    gravity: 1.1,
    lookSensitivity: 0.018
}

export { configs }