const handler = document.querySelector("#cdek-handler");
const map = document.querySelector("#cdek-map");

if (handler && map) {
  handler.addEventListener("click", function (e) {
    e.preventDefault();

    const script = document.createElement("script");
    script.onload = function () {
      new ISDEKWidjet({
        defaultCity: map.dataset.city,
        link: "cdek-map",
        path: "assets/nemopro/cdek/scripts/",
        servicepath: "assets/nemopro/cdek/scripts/service.php",
        country: 'Россия',
        choose: false,
        hidedress: true,
        hidecash: true,
        hidedelt: true,
      });
    };
    script.src = "assets/nemopro/cdek/widjet.js";

    document.head.appendChild(script);
  });
}
