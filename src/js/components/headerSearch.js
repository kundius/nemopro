const toggle = document.querySelector(".js-header-search-toggle");
const search = document.querySelector(".u-header-search");

if (toggle && search) {
  let isVisible = false;
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    if (isVisible) {
      toggle.classList.remove("active");
      search.classList.remove("u-header-search_visible");
      isVisible = false;
    } else {
      toggle.classList.add("active");
      search.classList.add("u-header-search_visible");
      isVisible = true;
    }
  });
}
