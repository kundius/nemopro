const toggle = document.querySelector(".js-header-search-toggle");
const search = document.querySelector(".u-header-search");

if (toggle && search) {
  let isVisible = false;
  const input = search.querySelector('[name="query"]');
  const $input = $(input);
  let autocompleteInitialized = false;

  const open = () => {
    toggle.classList.add("active");
    search.classList.add("u-header-search_visible");
    isVisible = true;
    input.focus();

    if (!autocompleteInitialized) {
      $input.autocomplete({
        open: function (e) {
          const menu = $(".ui-menu:visible");
          let close = menu.find(".mse2-ac-close");
          if (close.length === 0) {
            close = $('<li class="mse2-ac-close">Закрыть</li>').appendTo(menu);
            close.on("click", function () {
              $input.val("");
              hide();
            });
          }

          console.log(menu.children());
        }
      });

      autocompleteInitialized = true;
    }

    window.addEventListener("scroll", onScroll);
  };

  const hide = () => {
    toggle.classList.remove("active");
    search.classList.remove("u-header-search_visible");
    isVisible = false;
    input.blur();
    $input.autocomplete("close");

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
  
  // $input.on("focus", function () {
  //   if (autocompleteInitialized) return;

  //   $input.autocomplete({
  //     open: function (e) {
  //       const menu = $(".ui-menu:visible");
  //       let close = menu.find(".mse2-ac-close");
  //       if (close.length === 0) {
  //         close = $('<li class="mse2-ac-close">Закрыть</li>').appendTo(menu);
  //         close.on("click", function () {
  //           $input.val("");
  //           $input.autocomplete("close");
  //         });
  //       }

  //       window.addEventListener("scroll", onScroll);
  //     },
  //     close: function (e) {
  //       window.removeEventListener("scroll", onScroll);
  //     },
  //   });

  //   autocompleteInitialized = true;
  // });
}

// $('input[name="query"]').each(function () {
//   const input = $(this);

//   const onScroll = () => {
//     input.autocomplete("close");
//   };

//   let initialized = false;

//   input.on("focus", function () {
//     if (initialized) return;

//     input.autocomplete({
//       open: function (e) {
//         const menu = $(".ui-menu:visible");
//         let close = menu.find(".mse2-ac-close");
//         if (close.length === 0) {
//           close = $('<li class="mse2-ac-close">Закрыть</li>').appendTo(menu);
//           close.on("click", function () {
//             input.val("");
//             input.autocomplete("close");
//           });
//         }

//         window.addEventListener("scroll", onScroll);
//       },
//       close: function (e) {
//         window.removeEventListener("scroll", onScroll);
//       },
//     });

//     initialized = true;
//   });
// });
