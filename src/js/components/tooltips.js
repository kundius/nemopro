const tippy = require('tippy.js')

const couponInstance = tippy.default('[data-tooltip-coupon]', {
  allowHTML: true,
  theme: 'light',
  hideOnClick: 'toggle',
  content: '<div style="text-align: center">На 100% опубликованной суммы<br>Вы можете выбрать товары в подарок!<br><br>Подробнее в разделе «скидки и акции».</div>'
})

console.log(couponInstance)

window.addEventListener('scroll', () => {
  tippy.hideAll()
  // window.dispatchEvent(new Event('click'))
  // window.dispatchEvent(new Event('touchstart'))
  // window.dispatchEvent(new Event('touchmove'))
  // window.dispatchEvent(new Event('touchcancel'))
  // window.dispatchEvent(new Event('touchend'))
  couponInstance.forEach(instance => {
  //   // instance.hideWithInteractivity(e)
    // instance.hide()
    // instance.show()
    // instance.disable()
    instance.setProps({
      // touch: false
      triggerTarget: instance.reference
    })
    instance.setProps({
      // touch: true
      triggerTarget: null
    })
  //   tippy.hideAll()
    // instance.reference.dispatchEvent(new Event('touchend'))
  })
})
