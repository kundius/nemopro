const tippy = require("tippy.js");

function initCoupon() {
  tippy.default("[data-tooltip-coupon]", {
    allowHTML: true,
    theme: "light",
    trigger: "mouseenter click",
    content:
      '<div style="text-align: center">На 100% опубликованной суммы<br>Вы можете выбрать товары в подарок!<br><br>Подробнее в разделе «скидки и акции».</div>',
  });
}

initCoupon();

$(document).on("mse2_load", initCoupon);

$(document).on("pdopage_load", initCoupon);
// $(document).on("mse2_load", function (a, b, c) {
//   console.log('mse2_load', a, b, c)
// });

// $(document).on("pdopage_load", function (a, b, c) {
//   console.log('pdopage_load', a, b, c)
// });

const tooltipPriceTemplate = document.getElementById("tooltip-price");
if (tooltipPriceTemplate) {
  tippy.default("[data-tooltip-price]", {
    allowHTML: true,
    theme: "light",
    trigger: "mouseenter click",
    content: tooltipPriceTemplate.innerHTML,
  });
}

window.addEventListener("scroll", () => {
  tippy.hideAll();
});
