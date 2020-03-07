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
            background: 'rgba(235, 94, 52, 0.3)'
        }
    }

    const hud = document.createElement('div')

    ENGINE.STYLER.applyBodyStyle(styles.body)
    ENGINE.STYLER.setStyle(styles.hud, hud)

    document.body.appendChild(hud)
}

export { initHud }