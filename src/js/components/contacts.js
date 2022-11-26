const handler = document.querySelector("#cdek-handler");
const map = document.querySelector("#cdek-map");

if (handler && map) {
  let init = false
  handler.addEventListener("click", function (e) {
    e.preventDefault();

    if (init) return

    const script = document.createElement("script");
    script.id = 'ISDEKscript';
    script.onload = function () {
      console.log(map.dataset.city)
      
      console.log(new ISDEKWidjet({
        defaultCity: map.dataset.city,
        link: "cdek-map",
        path: "assets/nemopro/cdek/scripts/",
        servicepath: "assets/nemopro/cdek/scripts/service.php",
        country: 'Россия',
        choose: false,
        hidedress: true,
        hidecash: true,
        hidedelt: true,
      }));

      init = true;
    };
    script.src = "assets/nemopro/cdek/widjet.js";

    document.head.appendChild(script);
  });
}
