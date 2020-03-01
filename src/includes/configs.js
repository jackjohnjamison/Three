const configs = {}

configs.parentElemnt = document.body
configs.screenHeight = window.innerHeight
configs.screenWidth = window.innerWidth
configs.viewDistance = 2000
configs.fov = 75
configs.nearPlane = 0.1
configs.fogStart = 1000
configs.fogEnd = 2500
configs.clearColour = 0x001c0c // Scene background colour
configs.fogColour = 0x001c0c

configs.acceleration = 2
configs.friction = 0.9
configs.lookSensitivity = 0.02

export { configs }