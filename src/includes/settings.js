const settings = {}

// Veiw distance
settings.viewDistance = {
    interval: 100,
    objectProperty: 'far',
    type: 'Camera',
    keyCode: 86,
    description: 'View distance '
}

// field of view
settings.fov = {
    interval: 5,
    objectProperty: 'fov',
    type: 'Camera',
    keyCode: 70,
    description: 'Field of view '
}

// Near plane
settings.nearPlane = {
    interval: 2,
    objectProperty: 'near',
    type: 'Camera',
    keyCode: 78,
    description: 'Near plane '
}

// Fog start
settings.fogStart = {
    interval: 50,
    objectProperty: 'near',
    type: 'Scene fog',
    keyCode: 79,
    description: 'Fog start '
}

// Fog end
settings.fogEnd = {
    interval: 50,
    objectProperty: 'far',
    type: 'Scene fog',
    keyCode: 80,
    description: 'Fog end '
}

export { settings }