import { KEYCHECK } from './key-check.js'

const configs = {}

configs.parentElemnt = document.body
configs.screenHeight = window.innerHeight
configs.screenWidth = window.innerWidth

// Veiw distance
configs.viewDistance = {
    initial: 2000,
    interval: 100,
    numericSetting: true,
    objectProperty: 'far',
    settingTarget: 'Camera',
    keyCode: function(){return KEYCHECK(86)},
    description: 'View distance '
}

// field of view
configs.fov = {
    initial: 75,
    interval: 5,
    numericSetting: true,
    objectProperty: 'fov',
    settingTarget: 'Camera',
    keyCode: function(){return KEYCHECK(70)},
    description: 'Field of view '
}

// Near plane
configs.nearPlane = {
    initial: 0.1,
    interval: 2,
    numericSetting: true,
    objectProperty: 'near',
    settingTarget: 'Camera',
    keyCode: function(){return KEYCHECK(78)},
    description: 'Near plane '
}

// Fog start
configs.fogStart = {
    initial: 1000,
    interval: 50,
    numericSetting: true,
    objectProperty: 'near',
    settingTarget: 'Scene fog',
    keyCode: function(){return KEYCHECK(79)},
    description: 'Fog start '
}

// Fog end
configs.fogEnd = {
    initial: 2500,
    interval: 50,
    numericSetting: true,
    objectProperty: 'far',
    settingTarget: 'Scene fog',
    keyCode: function(){return KEYCHECK(80)},
    description: 'Fog end '
}

// configs.fogEnd = 2000

configs.clearColour = 0x001c0c // Scene background colour
configs.fogColour = 0x001c0c

export { configs }