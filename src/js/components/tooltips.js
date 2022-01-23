const tippy = require('tippy.js')

const couponInstance = tippy.default('[data-tooltip-coupon]', {
  allowHTML: true,
  theme: 'light',
  content: '<div style="text-align: center">На 100% опубликованной суммы<br>Вы можете выбрать товары в подарок!<br><br>Подробнее в разделе «скидки и акции».</div>'
})

console.log(couponInstance)
