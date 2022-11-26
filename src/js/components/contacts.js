let init = false;

const widgets = document.querySelectorAll(".cdek-widget") || [];
widgets.forEach((widget) => {
  const placeholder = widget.querySelector(".cdek-placeholder");
  const handler = widget.querySelector(".cdek-placeholder__button");
  const target = widget.dataset.target;
  const city = widget.dataset.city;

  const load = () => {
    new ISDEKWidjet({
      defaultCity: city,
      link: target,
      path: "assets/nemopro/cdek/scripts/",
      servicepath: "assets/nemopro/cdek/scripts/service.php",
      country: "Россия",
      choose: false,
      hidedress: true,
      hidecash: true,
      hidedelt: true,
    });
  };

  handler.addEventListener("click", function (e) {
    e.preventDefault();

    placeholder.classList.add("cdek-placeholder_hidden");

    if (init) {
      load();
    } else {
      const script = document.createElement("script");
      script.id = "ISDEKscript";
      script.onload = function () {
        load();
        init = true;
      };
      script.src = "assets/nemopro/cdek/widjet.js";
      document.head.appendChild(script);
    }
  });
});
