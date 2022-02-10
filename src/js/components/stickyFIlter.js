const filterEl = document.querySelector(".filters-wrap");
const toggleEl = document.querySelector(".filters-wrap__toggle");
const toggleOnMobileEl = document.querySelector(".filters-toggle-on-moblie");

if (filterEl) {
  const getRect = () => {
    const rect = filterEl.getBoundingClientRect();
    const baseTop = rect.top + window.scrollY;
    const baseBottom = rect.bottom + window.scrollY;
    const headerHeight = window.matchMedia("(min-width: 960px)").matches
      ? 60
      : 80;
    return {
      width: rect.width,
      height: rect.height,
      baseTop,
      baseBottom,
      headerHeight,
    };
  };

  let rect = getRect();
  let isFixed = false;
  let isOpened = false;

  window.addEventListener("scroll", function () {
    if (
      window.scrollY >
      (isOpened ? rect.baseTop : rect.baseBottom) - rect.headerHeight
    ) {
      filterEl.classList.add("filters-wrap_fixed");
      filterEl.style.width = `${rect.width}px`;
      filterEl.parentElement.style.paddingTop = `${rect.height}px`;
      isFixed = true;
    } else {
      filterEl.classList.remove("filters-wrap_fixed");
      filterEl.style.width = null;
      filterEl.parentElement.style.paddingTop = null;
      isFixed = false;
    }
  });

  window.addEventListener("resize", function () {
    rect = getRect();
  });

  toggleEl.addEventListener("click", function () {
    if (isOpened) {
      close();
    } else {
      open();
    }
  });

  toggleOnMobileEl.addEventListener("click", function () {
    if (isOpened) {
      close();
    } else {
      open();
    }
  });

  const open = () => {
    filterEl.classList.remove("filters-wrap_hidden");
    window.dispatchEvent(new Event("resize"));
    isOpened = true;
  };

  const close = () => {
    filterEl.classList.add("filters-wrap_hidden");
    window.dispatchEvent(new Event("resize"));
    isOpened = false;
  };
}

// function initFilterBar () {
//   // if ($.cookie('show-filters') == 'true') {
//   //     $('.filters-wrap').removeClass('filters-wrap_hidden');
//   //     $('.filters-toggle-on-moblie').addClass('filters-toggle-on-moblie_active');
//   //     window.dispatchEvent(new Event('resize'));
//   // }

//   $(document).on('click', '.filters-wrap__toggle', function() {
//       $('.filters-wrap').toggleClass('filters-wrap_hidden');
//       $('.filters-toggle-on-moblie').toggleClass('filters-toggle-on-moblie_active');
//       // $.cookie('show-filters', !$('.filters-wrap').hasClass('filters-wrap_hidden'));
//       window.dispatchEvent(new Event('resize'));
//   });

//   $('.filters-toggle-on-moblie').on('click', function() {
//       $('.filters-toggle-on-moblie').toggleClass('filters-toggle-on-moblie_active');
//       $('.filters-wrap').toggleClass('filters-wrap_hidden');
//       // $.cookie('show-filters', !$('.filters-wrap').hasClass('filters-wrap_hidden'));
//       window.dispatchEvent(new Event('resize'));
//   });
// }
// initFilterBar();
