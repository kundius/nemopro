const toggle = document.querySelector(".js-header-search-toggle");
const search = document.querySelector(".u-header-search");

if (toggle && search) {
  let isVisible = false;

  const open = () => {
    toggle.classList.add("active");
    search.classList.add("u-header-search_visible");
    isVisible = true;

    window.addEventListener("scroll", onScroll);
  };

  const hide = () => {
    toggle.classList.remove("active");
    search.classList.remove("u-header-search_visible");
    isVisible = false;

    window.removeEventListener("scroll", onScroll);
  };

  const onScroll = () => hide();

  toggle.addEventListener("click", (e) => {
    e.preventDefault();

    if (isVisible) {
      hide();
    } else {
      open();
    }
  });
}

jQuery(function () {
  $('input[name="query"]').each(function () {
    const input = $(this);

    const onScroll = () => {
      input.autocomplete("close");
    };

    input.autocomplete({
      open: function (e) {
        const menu = $(".ui-menu:visible");
        let close = menu.find(".mse2-ac-close");
        if (close.length === 0) {
          close = $('<li class="mse2-ac-close">Закрыть</li>').appendTo(menu);
          close.on("click", function () {
            input.val("");
            input.autocomplete("close");
          });
        }

        window.addEventListener("scroll", onScroll);
      },
      close: function (e) {
        window.removeEventListener("scroll", onScroll);
      },
    });
  });
});
