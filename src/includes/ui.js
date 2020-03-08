import { styles } from './styles.js'

function initHud() {

    ENGINE.STYLER.applyBodyStyle(styles.body)

    ENGINE.UI = {}

    ENGINE.UI.main = ENGINE.STYLER.createElement('div', styles.UI.children)


    ENGINE.UI.startScreen = ENGINE.STYLER.createElement('div', styles.startScreen)
    let startText = ENGINE.STYLER.createElement('div', styles.startText)
    startText.innerHTML = '[ PRESS ENTER TO START ]'
    ENGINE.UI.main.appendChild(ENGINE.UI.startScreen)
    ENGINE.UI.startScreen.appendChild(startText)


    ENGINE.UI.pauseScreen = ENGINE.STYLER.createElement('div', styles.pauseScreen)
    let pauseText = ENGINE.STYLER.createElement('div', styles.pauseText)
    pauseText.innerHTML = '[ paused ]'
    ENGINE.UI.main.appendChild(ENGINE.UI.pauseScreen)
    ENGINE.UI.pauseScreen.appendChild(pauseText)


    ENGINE.UI.hud = ENGINE.STYLER.createElement('div', styles.hud)
    ENGINE.UI.main.appendChild(ENGINE.UI.hud)


    let crosshair = ENGINE.STYLER.createElement('div', styles.crosshair)
    crosshair.innerHTML = 'x'
    ENGINE.UI.hud.appendChild(crosshair)


    ENGINE.UI.hud.keyCodeDisplay = ENGINE.STYLER.createElement('div', styles.keyCodeDisplay)
    ENGINE.UI.hud.appendChild(ENGINE.UI.hud.keyCodeDisplay)

    document.body.appendChild(ENGINE.UI.main)
}

export { initHud }