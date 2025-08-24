require("./components/tooltips.js");
require("./components/stickyFIlter.js");
require("./components/headerSearch.js");
require("./components/contacts.js");
require("./components/order-address.js");

const { initAuthForm } = require("./components/auth-form.js");
const { applyOrderAction, initOrderAction } = require("./components/order-action.js");

initAuthForm()
initOrderAction()

// применить скрипты к загруженным карточкам
$(document).on('pdopage_load', function (e, config, response) {
  const results = document.querySelector(config.rows)
  const addedCards = Array.from(results.children)

  addedCards.forEach((card) => {
    card.querySelectorAll('[data-order-action]')?.forEach(applyOrderAction)
  })
})
