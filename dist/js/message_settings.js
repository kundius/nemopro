

miniShop2.Message = {
  initialize: function () {
    miniShop2.Message.close = function () {
    };
    miniShop2.Message.show = function (message) {
      if (message != '') {
        alert(message);
      }
    };

    if (typeof (UIkit.notify) == 'function') {
      miniShop2.Message.close = function () {
        $('.uk-notify .uk-close').click();
      };
      miniShop2.Message.show = function (message, options) {
        if (message != '') {
          UIkit.notify(message, options);
        }
      }
    }
  },
  success: function (message) {
    miniShop2.Message.show(message, {
      theme: 'ms2-message-success',
      sticky: false,
      timeout: 2000
    });
  },
  error: function (message) {
    miniShop2.Message.show(message, {
      theme: 'ms2-message-error',
      sticky: false,
      timeout: 2000
    });
  },
  info: function (message) {
    miniShop2.Message.show(message, {
      theme: 'ms2-message-info',
      sticky: false,
      timeout: 2000
    });
  }
};