import { KEYCHECK } from './key-check.js'

const settings = {}

// Veiw distance
settings.viewDistance = {
    interval: 100,
    numericSetting: true,
    objectProperty: 'far',
    settingTarget: 'Camera',
    keyCode: function(){return KEYCHECK(86)},
    description: 'View distance '
}

// field of view
settings.fov = {
    interval: 5,
    numericSetting: true,
    objectProperty: 'fov',
    settingTarget: 'Camera',
    keyCode: function(){return KEYCHECK(70)},
    description: 'Field of view '
}

// Near plane
settings.nearPlane = {
    interval: 2,
    numericSetting: true,
    objectProperty: 'near',
    settingTarget: 'Camera',
    keyCode: function(){return KEYCHECK(78)},
    description: 'Near plane '
}

// Fog start
settings.fogStart = {
    interval: 50,
    numericSetting: true,
    objectProperty: 'near',
    settingTarget: 'Scene fog',
    keyCode: function(){return KEYCHECK(79)},
    description: 'Fog start '
}

// Fog end
settings.fogEnd = {
    interval: 50,
    numericSetting: true,
    objectProperty: 'far',
    settingTarget: 'Scene fog',
    keyCode: function(){return KEYCHECK(80)},
    description: 'Fog end '
}

export { settings }