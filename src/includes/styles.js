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
    },

    keyCodeDisplay: {
        position: 'absolute',
        top: '0',
        right: '0',
        padding: '20px',
        'font-size': '4vh',
        color: '#fff'
    }
}

export { styles }