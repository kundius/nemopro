let initVendor = false;

const widgets = document.querySelectorAll(".cdek-widget") || [];
widgets.forEach((widget) => {
  const placeholder = widget.querySelector(".cdek-placeholder");
  const handler = widget.querySelector(".cdek-placeholder__button");
  const target = widget.dataset.target;
  const city = widget.dataset.city;

  let initMap = false;

  const load = () => {
    new ISDEKWidjet({
      defaultCity: city,
      cityFrom: city,
      link: target,
      path: "assets/nemopro/cdek/scripts/",
      servicepath: "assets/nemopro/cdek/scripts/service.php",
      country: "Россия",
      choose: false,
      hidedress: true,
      hidecash: true,
      hidedelt: true,
    });
    initMap = true;
  };

  handler.addEventListener("click", function (e) {
    e.preventDefault();

    if (initMap) return;

    placeholder.classList.add("cdek-placeholder_hidden");

    if (initVendor) {
      load();
    } else {
      const script = document.createElement("script");
      script.id = "ISDEKscript";
      script.onload = function () {
        load();
        initVendor = true;
      };
      script.src = "assets/nemopro/cdek/widjet.js";
      document.head.appendChild(script);
    }
  });
});
