function initConsoleFunctions() {

    // class setting {
    // constructor(variable, description, reloadProjection = false) {
    //     this.get = function() {
    //         return description, window[variable]
    //     }
    //     this.set = function (value) {
    //         window[variable] = value
    //         if(reloadProjection) {
    //             window.ENGINE.camera.updateProjectionMatrix()
    //         }
    //         return variable
    //     }
    // }
// }
    
    const consoleFunctions = {
        // viewDistance: new setting('ENGINE.camera.far', 'View distance', true),
            // get: function() {
            //     return 'View distance', window.ENGINE.camera.far
            // },
            // set: function(value) {
            //     window.ENGINE.camera.far = value
            //     window.ENGINE.camera.updateProjectionMatrix()
            //     return this.get()
            // }
    
        fov: {
            get: function() {
                return 'Field of view', window.ENGINE.camera.fov
            },
            set: function(value) {
                window.ENGINE.camera.fov = value
                window.ENGINE.camera.updateProjectionMatrix()
                return this.get()
            }
        },
    
        nearPlane: {
            get: function() {
                return 'Near plane', window.ENGINE.camera.near
            },
            set: function(value) {
                window.ENGINE.camera.near = value
                window.ENGINE.camera.updateProjectionMatrix()
                return this.get()
            }
        },
    
        fogDensity: {
            get: function() {
                return 'Fog desnity', window.scene.fog.density
            },
            set: function(value) {
                window.scene.fog.density = value
                return this.get()
            }
        },
    
        playerAcceleration: {
            get: function() {
                return 'Player acceleration', window.ENGINE.configs.acceleration
            },
            set: function(value) {
                window.ENGINE.configs.acceleration = value
                return this.get()
            }
        },
    
        playerFriction: {
            get: function() {
                return 'Player friction', window.ENGINE.configs.friction
            },
            set: function(value) {
                window.ENGINE.configs.friction = value
                return this.get()
            }
        },
    
        lookSensitivity: {
            get: function() {
                return 'Look sensitivity', window.ENGINE.configs.lookSensitivity
            },
            set: function(value) {
                window.ENGINE.configs.lookSensitivity = value
                return this.get()
            }
        }
    }

    return consoleFunctions
}



export { initConsoleFunctions }