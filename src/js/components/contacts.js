const handler = document.querySelector("#cdek-handler");
const map = document.querySelector("#cdek-map");

if (handler && map) {
  var script = document.createElement('script');
script.onload = function () {
  alert("loaded");
    //do stuff with the script
};
script.src = 'assets/nemopro/cdek/widjet.js';

document.head.appendChild(script); //or something of the likes


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
