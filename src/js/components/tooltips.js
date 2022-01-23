// const { computePosition } = require('@floating-ui/dom')

// const withApplyStyles = (el) => {
//   return (params) => {
//     Object.assign(el.style, {
//       position: params.strategy,
//       left: `${params.x}px`,
//       top: `${params.y}px`
//     })
//   }
// }

// const referenceElements = document.querySelectorAll('[data-tooltip]')

// if (referenceElements.length > 0) {
//   referenceElements.forEach(referenceElement => {
//     const floatingElement = document.querySelector(referenceElement.dataset.tooltip)
//     const applyStyles = withApplyStyles(floatingElement)

//     // function applyStyles({x = 0, y = 0, strategy = 'absolute'}) {
//     //   Object.assign(floatingElement.style, {
//     //     position: strategy,
//     //     left: `${x}px`,
//     //     top: `${y}px`
//     //   })
//     // }

//     applyStyles({x: 0, y: 0, strategy: 'absolute'})
    
//     computePosition(referenceElement, floatingElement, {
//       placement: 'right'
//     }).then(applyStyles)
//   })
// }
const tippy = require('tippy.js')
// require('tippy.js/dist/tippy.css')

console.log(tippy)

tippy.default('[data-tooltip-coupon]', {
  content: 'My tooltip!'
})

