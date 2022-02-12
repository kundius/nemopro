const toggle = document.querySelector(".js-header-search-toggle");
const search = document.querySelector(".u-header-search");

if (toggle && search) {
  let isVisible = false;
  toggle.addEventListener("click", () => {
    if (isVisible) {
      search.classList.remove('u-header-search_visible')
    } else {
      search.classList.add('u-header-search_visible')
    }
  })
}
