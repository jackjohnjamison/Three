const settings = {

// Veiw distance
    viewDistance: {
        interval: 100,
        objectProperty: 'far',
        type: 'Camera',
        keyCode: 86,
        description: 'View distance'
    },

// field of view
    fov: {
        interval: 5,
        objectProperty: 'fov',
        type: 'Camera',
        keyCode: 70,
        description: 'Field of view'
    },

// Near plane
    nearPlane: {
        interval: 2,
        objectProperty: 'near',
        type: 'Camera',
        keyCode: 78,
        description: 'Near plane'
    },

// Fog start
    fogStart: {
        interval: 50,
        objectProperty: 'near',
        type: 'Scene fog',
        keyCode: 79,
        description: 'Fog start'
    },

// Fog end
    fogEnd: {
        interval: 50,
        objectProperty: 'far',
        type: 'Scene fog',
        keyCode: 80,
        description: 'Fog end'
    },

// Player acceleration
    acceleration: {
        interval: .1,
        objectProperty: 'acceleration',
        type: 'Player controls',
        keyCode: 90,
        description: 'Player acceleration'
    },

// Player friction
    friction: {
        interval: .01,
        objectProperty: 'friction',
        type: 'Player controls',
        keyCode: 75,
        description: 'Player friction'
    },

// lookSensitivity
    lookSensitivity: {
        interval: .01,
        objectProperty: 'lookSensitivity',
        type: 'Player controls',
        keyCode: 76,
        description: 'lookSensitivity'
    }
}

export { settings }