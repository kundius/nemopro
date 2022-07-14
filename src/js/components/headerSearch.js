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

    $('input[name="query"]', search).autocomplete('close');

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

jQuery(function() {
  console.log('loaded', $('input[name="query"]'));
  $('input[name="query"]').autocomplete({
    // change: function( event, ui ) {
    //   console.log('change');
    // },
    // close: function( event, ui ) {
    //   console.log('close');
    // },
    // create: function( event, ui ) {
    //   console.log('create');
    // },
    // focus: function( event, ui ) {
    //   console.log('focus');
    // },
    open: function( event, ui ) {
      console.log('open', event);
    },
    // response: function( event, ui ) {
    //   console.log('response');
    // },
    // search: function( event, ui ) {
    //   console.log('search');
    // },
    // select: function( event, ui ) {
    //   console.log('select');
    // }
  });
});

