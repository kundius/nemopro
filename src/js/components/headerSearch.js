const { throttle, debounce } = require("throttle-debounce");

const toggle = document.querySelector(".js-header-search-toggle");
const search = document.querySelector(".u-header-search");

if (toggle && search) {
  let isVisible = false;
  const input = search.querySelector('[name="query"]');
  const $input = $(input);
  let autocompleteInitialized = false;
  let prevScroll = window.scrollY;
  let scrolled = 0;

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

          const children = menu.children(".ui-menu-item");
          if (children.length > 5) {
            children
              .last()
              .replaceWith(
                `<li class="mse2-ac-more"><a href="/search?query=${$input.val()}">Показать все</a></li>`
              );
          }
        },
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
    scrolled = 0;

    window.removeEventListener("scroll", onScroll);
  };

  const onScroll = (e) => {
    // let forward = window.scrollY > prevScroll
    // if (window.scrollY - prevScroll) {

    // }
    // console.log(window.scrollY, prevScroll, scrolled)

    // let diff = window.scrollY - prevScroll
    // let newScrolled = Math.abs(scrolled + (window.scrollY - prevScroll));
    // console.log(newScrolled);
    // if (newScrolled < scrolled) {
    //   scrolled = 0
    // } else {
    //   scrolled = newScrolled;
    // }
    scrolled += Math.abs((window.scrollY - prevScroll));

    prevScroll = window.scrollY;
    $input.autocomplete( "search" );
    // console.log($input.autocomplete( "instance" ).get(0).getBoundingClientRect(););
    console.log($input.autocomplete( "instance" ).element.get(0).getBoundingClientRect().bottom);

    console.log(scrolled);

    if (scrolled > 20) {
      hide();
    }
  };

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
