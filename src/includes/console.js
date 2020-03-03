function initConsoleFunctions() {

    const consoleFunctions = {
        viewDistance: {variable: 'window.ENGINE.camera.far',
            description: 'View distance',
            reloadProjection: true
        },

        fov: {            
            variable: 'window.ENGINE.camera.fov',
            description: 'Field of view',
            reloadProjection: true
        },
    
        nearPlane: {
            variable: 'window.ENGINE.camera.near',
            description: 'Near plane',
            reloadProjection: true
        },
    
        fogDensity: {
            variable: 'window.scene.fog.density',
            description: 'Fog desnity',
        },
    
        playerAcceleration: {
            variable: 'window.ENGINE.configs.acceleration',
            description: 'Player acceleration',
        },
    
        playerFriction: {
            variable: 'window.ENGINE.configs.friction',
            description: 'Player friction',
        },
    
        lookSensitivity: {
            variable: 'window.ENGINE.configs.lookSensitivity',
            description: 'Look sensitivity',
        }
    }

    for (let setting in consoleFunctions) { // I know eval is evil, sorry
        let settingObject = consoleFunctions[setting]
        consoleFunctions[setting].get = function() {
            return eval(settingObject.variable)
        }
        consoleFunctions[setting].set = function (value) {
            eval(settingObject.variable + '=' + value)
            if(settingObject.reloadProjection) {
                window.ENGINE.camera.updateProjectionMatrix()
            }
            return eval(settingObject.variable)
        }
    }
    return consoleFunctions
}

export { initConsoleFunctions }