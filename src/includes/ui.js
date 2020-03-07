function initHud() {

    const styles = {
        body: {
            margin: '0',
            overflow: 'hidden',
            'font-family': '"Courier New", Courier, monospace',
        },

        UI: {
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
        },

        pauseScreen: {
            position: 'absolute',
            top: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(66, 135, 245, 0.3)',
            display: 'none'
        },

        pauseText: {
            position: 'absolute',
            top: '40vh',
            color: '#fff',
            width: '100%',
            'font-size': '10vh',
            'text-align': 'center'
        },

        startScreen: {
            position: 'absolute',
            top: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(158, 79, 0)'
        },

        startText: {
            position: 'absolute',
            top: '10vh',
            color: '#fff',
            width: '100%',
            'font-size': '10vh',
            'text-align': 'center'
        },

        hud: {
            display: 'none'
        },

        crosshair: {
            position: 'absolute',
            top: '46vh',
            width: '100vw',
            color: 'rgba(255, 255, 255, .5)',
            width: '100%',
            'font-size': '6vh',
            'text-align': 'center'
        }
    }

    ENGINE.STYLER.applyBodyStyle(styles.body)

    ENGINE.UI = {}

    ENGINE.UI.main = ENGINE.STYLER.createElement('div', styles.UI)


    ENGINE.UI.startScreen = ENGINE.STYLER.createElement('div', styles.startScreen)
    let startText = ENGINE.STYLER.createElement('div', styles.startText)
    startText.innerHTML = '[ PRESS ENTER TO START ]'
    ENGINE.UI.main.appendChild(ENGINE.UI.startScreen)
    ENGINE.UI.startScreen.appendChild(startText)


    ENGINE.UI.pauseScreen = ENGINE.STYLER.createElement('div', styles.pauseScreen)
    let pauseText = ENGINE.STYLER.createElement('div', styles.pauseText)
    pauseText.innerHTML = '[ PAUSED ]'
    ENGINE.UI.main.appendChild(ENGINE.UI.pauseScreen)
    ENGINE.UI.pauseScreen.appendChild(pauseText)


    ENGINE.UI.hud = ENGINE.STYLER.createElement('div', styles.hud)
    ENGINE.UI.main.appendChild(ENGINE.UI.hud)


    let crosshair = ENGINE.STYLER.createElement('div', styles.crosshair)
    crosshair.innerHTML = 'x'
    ENGINE.UI.hud.appendChild(crosshair)


    document.body.appendChild(ENGINE.UI.main)
}

export { initHud }