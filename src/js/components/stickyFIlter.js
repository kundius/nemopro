const filterEl = document.querySelector(".filters-wrap");
const toggleEl = document.querySelector(".filters-wrap__toggle");
const toggleOnMobileEl = document.querySelector(".filters-toggle-on-moblie");

if (filterEl) {
  // const filterSticky = UIkit.sticky(filterEl, {
  //   top: window.matchMedia("(min-width: 960px)").matches ? 60 : 80,
  // });
  window.addEventListener("scroll", function () {
    const rect = filterEl.getBoundingClientRect();
    if (window.scrollY > 280) {
      filterEl.classList.add("filters-wrap_fixed");
      filterEl.style.width = `${rect.width}px`
      filterEl.parentElement.style.paddingTop = `${rect.height}px`
    } else {
      filterEl.classList.remove("filters-wrap_fixed");
      filterEl.style.width = null
      filterEl.parentElement.style.paddingTop = null
    }
  });

  toggleEl.addEventListener("click", function () {
    filterEl.classList.toggle("filters-wrap_hidden");
    toggleOnMobileEl.classList.toggle("filters-toggle-on-moblie_active");
    // $.cookie('show-filters', !$('.filters-wrap').hasClass('filters-wrap_hidden'));
    window.dispatchEvent(new Event("resize"));
  });

  toggleOnMobileEl.addEventListener("click", function () {
    toggleOnMobileEl.classList.toggle("filters-toggle-on-moblie_active");
    filterEl.classList.toggle("filters-wrap_hidden");
    // $.cookie('show-filters', !$('.filters-wrap').hasClass('filters-wrap_hidden'));
    window.dispatchEvent(new Event("resize"));
  });
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
