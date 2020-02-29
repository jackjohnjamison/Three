import { configs } from './configs.js'
import { KEYCHECK } from './key-check.js'

const addSettings = function(camera, scene) {

    const valueUpKey = 104
    const valueDownKey = 98

    function collectNumericSettings() {
        let numericSettingsArray = []

        for (let config in configs) {
            let configObject = configs[config]
            if (configObject.numericSetting) {
                numericSettingsArray.push(configObject)
            }
        }
        return numericSettingsArray
    }

    const numericSettings = collectNumericSettings()

    addEventListener('keydown', function() {
        
            for (let setting in numericSettings) {
                let settingObject = numericSettings[setting]
                let settingTarget
                switch(settingObject.settingTarget) {
                    case 'Camera':
                        settingTarget = camera
                        break

                    case 'Scene fog':
                        settingTarget = scene.fog
                        break
                }
                if(settingObject.keyCode()) {
                    console.log(scene.fog.near)
                    console.log(settingTarget)
                    settingTarget[settingObject.objectProperty] += (KEYCHECK(valueUpKey) * settingObject.interval) - (KEYCHECK(valueDownKey) * settingObject.interval)
                    camera.updateProjectionMatrix()
                    console.log(settingObject.description, settingTarget[settingObject.objectProperty])
            }
        }
    })
}

export { addSettings }