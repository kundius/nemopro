const handler = document.querySelector("#cdek-handler");
const map = document.querySelector("#cdek-map");

if (handler && map) {
  import("https://nemopro.ruassets/nemopro/cdek/widjet.js")
    .then((obj) => {
      console.log(obj);
      alert("loaded");
    })
    .catch((err) => {
      console.log(err);
      alert("no loaded");
    });

  // handler.addEventListener('click', function(e) {
  //   e.preventDefault();
  //   var widjet = new ISDEKWidjet({
  //     defaultCity: 'Москва',
  //     link: 'cdek-map',
  //     path: '{'site_url' | config}assets/nemopro/cdek/scripts/',
  //     servicepath: '{'site_url' | config}assets/nemopro/cdek/scripts/service.php',
  //     choose: false,
  //     hidedress: true,
  //     hidecash: true,
  //     hidedelt: true,

  //   });
  //   });
}
