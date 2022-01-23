const tippy = require('tippy.js')

tippy.default('[data-tooltip-coupon]', {
  allowHTML: true,
  theme: 'light',
  trigger: 'mouseenter click',
  content: '<div style="text-align: center">На 100% опубликованной суммы<br>Вы можете выбрать товары в подарок!<br><br>Подробнее в разделе «скидки и акции».</div>'
})

const tooltipPriceTemplate = document.getElementById('tooltip-price')
if (tooltipPriceTemplate) {
  tippy.default('[data-tooltip-price]', {
    allowHTML: true,
    theme: 'light',
    trigger: 'mouseenter click',
    content: tooltipPriceTemplate.innerHTML
  })
}

window.addEventListener('scroll', () => {
  tippy.hideAll()
})
