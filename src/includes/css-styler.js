const STYLER = {
    setStyle: function(styles, element) {
        for(let styleName in styles) {
            const styleValue = styles[styleName]
            element.style[styleName] = styleValue
        }
    },

    applyStyleBySelector: function(style, selector) {
        this.setStyle(style, document.body.querySelector(selector))
    },

    applyBodyStyle: function(style) {
        this.setStyle(style, document.body)
    },

    createElement: function(type, styles) {
        const element = document.createElement(type)
        ENGINE.STYLER.setStyle(styles, element)
        return element    
    } 
}

export { STYLER }