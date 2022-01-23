const { computePosition } = require('@floating-ui/dom')

const referenceElements = document.querySelectorAll('[data-tooltip]')

if (referenceElements.length > 0) {
  referenceElements.forEach(referenceElement => {
    const floatingElement = document.querySelector(referenceElement.dataset.tooltip)

    function applyStyles({x = 0, y = 0, strategy = 'absolute'}) {
      Object.assign(floatingElement.style, {
        position: strategy,
        left: `${x}px`,
        top: `${y}px`
      })
    }

    applyStyles()
    
    computePosition(referenceElement, floatingElement, {
      placement: 'right'
    }).then(applyStyles)
  })
}