function initHud() {

    const styles = {
        body: {
            margin: '0',
            overflow: 'hidden'
        },

        hud: {
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
            background: 'rgba(235, 94, 52, 0.3)',
            display: 'none'
        },

        pauseText: {
            position: 'absolute',
            top: '40vh',
            color: '#fff',
            width: '100%',
            'font-family': '"Courier New", Courier, monospace',
            'font-size': '10vh',
            'text-align': 'center'
        },

        startScreen: {
            position: 'absolute',
            top: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(235, 94, 52, 0.3)'
        },

        startText: {
            position: 'absolute',
            top: '10vh',
            color: '#fff',
            width: '100%',
            'font-family': '"Courier New", Courier, monospace',
            'font-size': '10vh',
            'text-align': 'center'
        }
    }

    ENGINE.STYLER.applyBodyStyle(styles.body)

    ENGINE.hud = {}

    ENGINE.hud.main = ENGINE.STYLER.createElement('div', styles.hud)


    ENGINE.hud.startScreen = ENGINE.STYLER.createElement('div', styles.startScreen)
    let startText = ENGINE.STYLER.createElement('div', styles.startText)
    startText.innerHTML = '[ PRESS ENTER TO START ]'
    ENGINE.hud.main.appendChild(ENGINE.hud.startScreen)
    ENGINE.hud.startScreen.appendChild(startText)


    ENGINE.hud.pauseScreen = ENGINE.STYLER.createElement('div', styles.pauseScreen)
    let pauseText = ENGINE.STYLER.createElement('div', styles.pauseText)
    pauseText.innerHTML = '[ PAUSED ]'
    ENGINE.hud.main.appendChild(ENGINE.hud.pauseScreen)
    ENGINE.hud.pauseScreen.appendChild(pauseText)

    document.body.appendChild(ENGINE.hud.main)
}

export { initHud }