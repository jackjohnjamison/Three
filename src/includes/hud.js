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
            top: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(235, 94, 52, 0.3)'
        }
    }

    ENGINE.STYLER.applyBodyStyle(styles.body)

    ENGINE.hud = {}

    ENGINE.hud.main = document.createElement('div')
    ENGINE.STYLER.setStyle(styles.hud, ENGINE.hud.main)

    ENGINE.hud.pauseScreen = document.createElement('div')
    ENGINE.STYLER.setStyle(styles.pauseScreen, ENGINE.hud.pauseScreen)
    
    ENGINE.hud.main.appendChild(ENGINE.hud.pauseScreen)
    

    document.body.appendChild(ENGINE.hud.main)
}

export { initHud }