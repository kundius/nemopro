const msefilter = document.querySelector("#mse2_mfilter");

if (msefilter) {
  const headerEl = document.querySelector(".header");
  const wrapEl = msefilter.querySelector(".filters-wrap");
  const stickEl = msefilter.querySelector(".filters-stick");
  const formEl = msefilter.querySelector(".filters");
  const toggleEl = msefilter.querySelector(".filters-wrap__toggle");
  const toggleOnMobileEl = msefilter.querySelector(
    ".filters-wrap__toggle-on-moblie"
  );
  const isMobile = window.matchMedia("(max-width: 959px)").matches;

  let isHidden = true;
  let isVisibleOnMobile = false;
  let stickyTop = 0;

  const calcStickyTop = () => {
    stickyTop = msefilter.getBoundingClientRect().top + window.scrollY;
    stickyTop -= headerEl.clientHeight;
    if (isHidden) {
      stickyTop += stickEl.clientHeight;
    }
    if (isMobile && !isVisibleOnMobile && isHidden) {
      console.log('isMobile', isMobile)
      console.log('isVisibleOnMobile', isVisibleOnMobile)
      console.log('isHidden', isHidden)
      stickyTop -= stickEl.clientHeight;
    }
  };

  calcStickyTop();

  const stick = () => {
    // if (isMobile) {
    //   toggleOnMobileEl.style.display = "none";
    // }
    stickEl.style.position = "fixed";
    stickEl.style.top = `${headerEl.clientHeight}px`;
    stickEl.style.width = `${wrapEl.clientWidth}px`;
    stickEl.style.borderBottom = "1px solid #ccc";
    wrapEl.style.paddingTop = `${stickEl.clientHeight}px`;
    toggleEl.style.display = "block";
    if (isHidden) {
      stickEl.style.transform = "translateY(-100%)";
    }
  };

  const unstick = () => {
    // if (isMobile) {
    //   toggleOnMobileEl.style.display = "block";
    // }
    stickEl.style.position = "relative";
    stickEl.style.top = null;
    stickEl.style.width = null;
    stickEl.style.borderBottom = null;
    wrapEl.style.paddingTop = null;
    toggleEl.style.display = "none";
    stickEl.style.transform = null;
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY > stickyTop) {
      stick();
    } else {
      unstick();
    }
  });

  toggleEl.addEventListener("click", function () {
    if (isHidden) {
      stickEl.style.transform = "translateY(0)";
      if (isMobile) {
        // toggleOnMobileEl.style.display = "none";
        formEl.style.display = "grid";
      }
      isHidden = false;
    } else {
      stickEl.style.transform = "translateY(-100%)";
      if (isMobile) {
        // toggleOnMobileEl.style.display = "block";
        if (!isVisibleOnMobile) {
          formEl.style.display = "none";
        }
      }
      isHidden = true;
    }

    setTimeout(() => {
      calcStickyTop();
      
      // проверяем, если скролл меньше нижней линии,
      // то убираем фиксацию и сокрытие фильтра (в спокойном состоянии он открыт)
      if (window.scrollY <= stickyTop) {
        unstick();
      }
    }, 0)
  });

  toggleOnMobileEl.addEventListener("click", function () {
    if (isVisibleOnMobile) {
      formEl.style.display = "none";
      isVisibleOnMobile = false;
    } else {
      formEl.style.display = "grid";
      isVisibleOnMobile = true;
    }

    calcStickyTop();

    // проверяем, если скролл меньше нижней линии,
    // то убираем фиксацию и сокрытие фильтра (в спокойном состоянии он открыт)
    if (window.scrollY <= stickyTop) {
      unstick();
    }
  });
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
