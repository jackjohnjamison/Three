function initSettings() {

    class setting {
        constructor (variable, description, reloadProjection = false) {
            this.get = function() {
                return description, eval(variable)
            }
            
            this.set = function (value) {
                eval(variable + '=' + value)
                if(reloadProjection) {
                    ENGINE.camera.updateProjectionMatrix()
                }
                return this.get()
            }
        }
    }

    const settings = {
        viewDistance: new setting('ENGINE.camera.far', 'View distance', true),
        fov: new setting('ENGINE.camera.fov', 'Field of view', true),
        nearPlane: new setting('ENGINE.camera.near', 'Near plane', true),
        fogDensity: new setting('scene.fog.density', 'Fog desnity'),
        playerAcceleration: new setting('ENGINE.configs.acceleration', 'Player acceleration'),
        playerFriction: new setting('ENGINE.configs.friction', 'Player friction'),
        lookSensitivity:  new setting('ENGINE.configs.lookSensitivity', 'Look sensitivity')
    }

    return settings
}

export { initSettings }