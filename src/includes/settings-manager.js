import { settings } from './settings.js'

const addSettings = function(KEYCHECK, camera, scene, configs) {

    const valueUpKey = function(){return window.ENGINE.KEYCHECK(104)}
    const valueDownKey = function(){return window.ENGINE.KEYCHECK(98)}

    for (let setting in settings) {
        
        let settingObject = settings[setting]

        settingObject.settingFunction = function() {
            let type
            switch(settingObject.type) {
                case 'Camera':
                    type = window.ENGINE.camera
                    break
    
                case 'Scene fog':
                    type = window.scene.fog
                    break

                case 'Player controls':
                    type = window.ENGINE.configs
                    break
            }
            type[settingObject.objectProperty] += (valueUpKey() * settingObject.interval) - (valueDownKey() * settingObject.interval)
            window.ENGINE.camera.updateProjectionMatrix() // Redundant in none type Camera cases
            console.log(settingObject.description, type[settingObject.objectProperty]) // Don't delete!
        }
    }

    addEventListener('keydown', function() {
        if (valueUpKey() || valueDownKey()) {

            for(let setting in settings) {
                let settingObject = settings[setting]

                if(window.ENGINE.KEYCHECK(settingObject.keyCode)) {
                    settingObject.settingFunction()
                }
            }
        }
    })
}

export { addSettings }