const msefilter = document.querySelector("#mse2_mfilter");
// const media = "(min-width: 960px)";

if (msefilter) {
  const headerEl = document.querySelector(".header");
  const wrapEl = msefilter.querySelector(".filters-wrap");
  const formEl = msefilter.querySelector(".filters-form");
  const toggleEl = msefilter.querySelector(".filters-wrap__toggle");
  const toggleOnMobileEl = msefilter.querySelector(".filters-toggle-on-moblie");

  let isHidden = true;
  let placeholderHeight = 0;
  let stickyTop = 0;

  const calcPlaceholderHeight = () => {
    placeholderHeight = formEl.clientHeight;
  };

  const calcStickyTop = () => {
    stickyTop = msefilter.getBoundingClientRect().top + window.scrollY;
    stickyTop -= headerEl.clientHeight;
    if (isHidden) {
      stickyTop += placeholderHeight;
    }
  };

  calcPlaceholderHeight();
  calcStickyTop();
  //   const baseTop = msefilter.getBoundingClientRect().top + window.scrollY;
  //   const headerHeight = window.matchMedia(media).matches ? 60 : 80;

  //   let isFixed = false;
  //   let isHidden = true;
  //   let isVisibleOnMobile = false;

  window.addEventListener("scroll", function () {
    if (window.scrollY > stickyTop) {
      formEl.style.position = "fixed";
      formEl.style.top = `${headerEl.clientHeight}px`;
      formEl.style.width = `${wrapEl.clientWidth}px`;
      wrapEl.style.paddingTop = `${placeholderHeight}px`;
      toggleEl.style.display = "block";
      if (isHidden) {
        formEl.style.transform = "translateY(-100%)";
      }
    } else {
      formEl.style.position = "relative";
      formEl.style.top = null;
      formEl.style.width = null;
      wrapEl.style.paddingTop = null;
      toggleEl.style.display = "none";
      formEl.style.transform = null;
    }
    //     const rect = filterEl.getBoundingClientRect();
    //     const isFixed = () => {
    //       if (window.matchMedia(media).matches) {
    //         let fromTop = baseTop - 60;
    //         if (isHidden) {
    //           fromTop += rect.height;
    //         }
    //         return window.scrollY > fromTop;
    //       } else {
    //         let fromTop = baseTop - 80;
    //         if (isHidden && isVisibleOnMobile) {
    //           fromTop += rect.height;
    //         }
    //         fromTop += 54;
    //         return window.scrollY > fromTop;
    //       }
    //     };
    //     if (isFixed()) {
    //       filterEl.classList.add("filters-wrap_fixed");
    //       filterEl.style.width = `${rect.width}px`;
    //       msefilter.style.paddingTop = `${rect.height}px`;
    //       if (isHidden) {
    //         filterEl.classList.add("filters-wrap_hidden");
    //       }
    //     } else {
    //       filterEl.classList.remove("filters-wrap_fixed");
    //       filterEl.style.width = null;
    //       msefilter.style.paddingTop = null;
    //       filterEl.classList.remove("filters-wrap_hidden");
    //     }
  });

    toggleEl.addEventListener("click", function () {
      if (isHidden) {
  //       filterEl.classList.remove("filters-wrap_hidden");
        formEl.style.transform = "translateY(0)";
        isHidden = false;
        calcStickyTop();
      } else {
        formEl.style.transform = "translateY(-100%)";
        //       filterEl.classList.add("filters-wrap_hidden");
        isHidden = true;
        calcStickyTop();

  //       // проверяем, если скролл меньше нижней линии,
  //       // то убираем фиксацию и сокрытие фильтра (в спокойном состоянии он открыт)
  //       const rect = filterEl.getBoundingClientRect();
  //       if (window.scrollY <= baseTop + rect.height - headerHeight) {
  //         filterEl.classList.remove("filters-wrap_fixed");
  //         filterEl.style.width = null;
  //         msefilter.style.paddingTop = null;
  //         filterEl.classList.remove("filters-wrap_hidden");
  //       }
      }
    });

  //   toggleOnMobileEl.addEventListener("click", function () {
  //     if (!isVisibleOnMobile) {
  //       filterEl.classList.add("filters-wrap_visible-on-mobile");
  //       isVisibleOnMobile = true;
  //     } else {
  //       filterEl.classList.remove("filters-wrap_visible-on-mobile");
  //       isVisibleOnMobile = false;
  //     }
  //   });
}

// -------------------------------------------------- //

// const msefilter = document.querySelector("#mse2_mfilter");
// const media = "(min-width: 960px)";

// if (msefilter) {
//   const filterEl = msefilter.querySelector(".filters-wrap");
//   const toggleEl = msefilter.querySelector(".filters-wrap__toggle");
//   const toggleOnMobileEl = msefilter.querySelector(".filters-toggle-on-moblie");
//   const baseTop = msefilter.getBoundingClientRect().top + window.scrollY;
//   const headerHeight = window.matchMedia(media).matches ? 60 : 80;

//   let isFixed = false;
//   let isHidden = true;
//   let isVisibleOnMobile = false;

//   window.addEventListener("scroll", function () {
//     const rect = filterEl.getBoundingClientRect();
//     const isFixed = () => {
//       if (window.matchMedia(media).matches) {
//         let fromTop = baseTop - 60;
//         if (isHidden) {
//           fromTop += rect.height;
//         }
//         return window.scrollY > fromTop;
//       } else {
//         let fromTop = baseTop - 80;
//         if (isHidden && isVisibleOnMobile) {
//           fromTop += rect.height;
//         }
//         fromTop += 54;
//         return window.scrollY > fromTop;
//       }
//     };
//     if (isFixed()) {
//       filterEl.classList.add("filters-wrap_fixed");
//       filterEl.style.width = `${rect.width}px`;
//       msefilter.style.paddingTop = `${rect.height}px`;
//       if (isHidden) {
//         filterEl.classList.add("filters-wrap_hidden");
//       }
//     } else {
//       filterEl.classList.remove("filters-wrap_fixed");
//       filterEl.style.width = null;
//       msefilter.style.paddingTop = null;
//       filterEl.classList.remove("filters-wrap_hidden");
//     }
//   });

//   toggleEl.addEventListener("click", function () {
//     if (isHidden) {
//       filterEl.classList.remove("filters-wrap_hidden");
//       isHidden = false;
//     } else {
//       filterEl.classList.add("filters-wrap_hidden");
//       isHidden = true;

//       // проверяем, если скролл меньше нижней линии,
//       // то убираем фиксацию и сокрытие фильтра (в спокойном состоянии он открыт)
//       const rect = filterEl.getBoundingClientRect();
//       if (window.scrollY <= baseTop + rect.height - headerHeight) {
//         filterEl.classList.remove("filters-wrap_fixed");
//         filterEl.style.width = null;
//         msefilter.style.paddingTop = null;
//         filterEl.classList.remove("filters-wrap_hidden");
//       }
//     }
//   });

//   toggleOnMobileEl.addEventListener("click", function () {
//     if (!isVisibleOnMobile) {
//       filterEl.classList.add("filters-wrap_visible-on-mobile");
//       isVisibleOnMobile = true;
//     } else {
//       filterEl.classList.remove("filters-wrap_visible-on-mobile");
//       isVisibleOnMobile = false;
//     }
//   });
// }

// -------------------------------------------------- //

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
