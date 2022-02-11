const msefilter = document.querySelector("#mse2_mfilter");
const media = "(min-width: 960px)";

if (msefilter) {
  const filterEl = msefilter.querySelector(".filters-wrap");
  const toggleEl = msefilter.querySelector(".filters-wrap__toggle");
  const toggleOnMobileEl = msefilter.querySelector(".filters-toggle-on-moblie");
  const baseTop = msefilter.getBoundingClientRect().top + window.scrollY;
  const headerHeight = window.matchMedia(media).matches ? 60 : 80;

  let isHidden = true;

  window.addEventListener("scroll", function () {
    const rect = filterEl.getBoundingClientRect();
    if (
      window.scrollY >
      (isHidden ? baseTop + rect.height : baseTop) - headerHeight
    ) {
      filterEl.classList.add("filters-wrap_fixed");
      filterEl.style.width = `${rect.width}px`;
      msefilter.style.paddingTop = `${rect.height}px`;
      if (isHidden) {
        filterEl.classList.add("filters-wrap_hidden");
      }
    } else {
      filterEl.classList.remove("filters-wrap_fixed");
      filterEl.style.width = null;
      msefilter.style.paddingTop = null;
      filterEl.classList.remove("filters-wrap_hidden");
    }
  });

  toggleEl.addEventListener("click", function () {
    if (isHidden) {
      filterEl.classList.remove("filters-wrap_hidden");
      isHidden = false;
    } else {
      filterEl.classList.add("filters-wrap_hidden");
      isHidden = true;
    }

    const rect = filterEl.getBoundingClientRect();
    if (
      window.scrollY <=
      (isHidden ? baseTop + rect.height : baseTop) - headerHeight
    ) {
      filterEl.classList.remove("filters-wrap_fixed");
      filterEl.style.width = null;
      msefilter.style.paddingTop = null;
    }
    // const rect = filterEl.getBoundingClientRect();
    // if (
    //   window.scrollY >
    //   (isHidden ? baseTop + rect.height : baseTop) - headerHeight
    // ) {
    //   filterEl.classList.add("filters-wrap_fixed");
    //   filterEl.style.width = `${rect.width}px`;
    //   msefilter.style.paddingTop = `${rect.height}px`;
    //   if (isHidden) {
    //     filterEl.classList.add("filters-wrap_hidden");
    //   }
    // } else {
    //   filterEl.classList.remove("filters-wrap_fixed");
    //   filterEl.style.width = null;
    //   msefilter.style.paddingTop = null;
    //   filterEl.classList.remove("filters-wrap_hidden");
    // }
  });

  // toggleOnMobileEl.addEventListener("click", function () {
  //   if (isOpened) {
  //     close();
  //   } else {
  //     open();
  //   }
  // });

  // const open = () => {
  //   filterEl.classList.remove("filters-wrap_hidden");
  //   isOpened = true;
  // };

  // const close = () => {
  //   filterEl.classList.add("filters-wrap_hidden");
  //   isOpened = false;
  // };
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
