const tippy = require('tippy.js')

const couponInstance = tippy.default('[data-tooltip-coupon]', {
  allowHTML: true,
  theme: 'light',
  hideOnClick: 'toggle',
  content: '<div style="text-align: center">На 100% опубликованной суммы<br>Вы можете выбрать товары в подарок!<br><br>Подробнее в разделе «скидки и акции».</div>'
})

console.log(couponInstance)

window.addEventListener('scroll', (e) => {
  // tippy.hideAll()
  couponInstance.forEach(instance => {
  //   // instance.hideWithInteractivity(e)
  //   // instance.hide()
  //   // instance.disable()
  //   // instance.enable()
  //   tippy.hideAll()
    instance.reference.dispatchEvent(new Event('click'))
  })
})
