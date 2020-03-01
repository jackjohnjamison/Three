import { settings } from './settings.js'

const addSettings = function(KEYCHECK, camera, scene) {

    const valueUpKey = function(){return KEYCHECK(104)}
    const valueDownKey = function(){return KEYCHECK(98)}

    for (let setting in settings) {
        
        let settingObject = settings[setting]

        settingObject.settingFunction = function() {
            let type
            switch(settingObject.type) {
                case 'Camera':
                    type = camera
                    break
    
                case 'Scene fog':
                    type = scene.fog
                    break
            }
            type[settingObject.objectProperty] += (valueUpKey() * settingObject.interval) - (valueDownKey() * settingObject.interval)
            camera.updateProjectionMatrix()
        }
    }

    addEventListener('keydown', event => {
            if (valueUpKey() || valueDownKey()) {

                for(let setting in settings) {
                    let settingObject = settings[setting]

                    if(KEYCHECK(settingObject.keyCode)) {
                        settingObject.settingFunction()
                    }
                }
            }
    })
}

export { addSettings }