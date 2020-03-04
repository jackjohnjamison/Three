function initSettings() {

    class setting {
        constructor (variable, description, reloadProjection = false) {
            this.get = function() {
                return description, eval(variable)
            }
            
            this.set = function (value) {
                eval(variable + '=' + value)
                if(reloadProjection) {
                    window.ENGINE.camera.updateProjectionMatrix()
                }
                return this.get()
            }
        }
    }

    const settings = {
        viewDistance: new setting('window.ENGINE.camera.far', 'View distance', true),
        fov: new setting('window.ENGINE.camera.fov', 'Field of view', true),
        nearPlane: new setting('window.ENGINE.camera.near', 'Near plane', true),
        fogDensity: new setting('window.scene.fog.density', 'Fog desnity'),
        playerAcceleration: new setting('window.ENGINE.configs.acceleration', 'Player acceleration'),
        playerFriction: new setting('window.ENGINE.configs.friction', 'Player friction'),
        lookSensitivity:  new setting('window.ENGINE.configs.lookSensitivity', 'Look sensitivity')
    }

    return settings
}

export { initSettings }