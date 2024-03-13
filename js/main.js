var map = L.map('map').setView([-24.1881, -65.3127], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var polyline = L.polyline(linea_7_general, {
  color: 'purple',
  weight: 5,
  opacity: 1,
  smoothFactor: 1
}).addTo(map);

/* */ /*
var polyline = L.polyline(lineas_sector_dos, {
  color: 'blue',
  weight: 5,
  opacity: 1,
  smoothFactor: 0.5
}).addTo(map);
*/

/*var decorator1 = L.polylineDecorator(linea_5_extension_1, {
  patterns: [
    // defines a pattern of 10px-wide dashes, repeated every 20px on the line
    {offset: 0, repeat: 20, symbol: L.Symbol.dash({pixelSize: 8, pathOptions: {color: '#2E2FFF'}})}
  ]
}).addTo(map);


var decorator2 = L.polylineDecorator(linea_5_extension_2, {
  patterns: [
    // defines a pattern of 10px-wide dashes, repeated every 20px on the line
    {offset: 0, repeat: 20, symbol: L.Symbol.dash({pixelSize: 8, pathOptions: {color: '#A00001'}})}
  ]
}).addTo(map);*/

/*
var busIcon = L.icon({
  iconUrl: 'img/bus-pick.png',
  iconSize:     [25, 25], // size of the icon
  iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
});

L.marker([-24.16463,-65.33620], {icon: busIcon}).addTo(map);
L.marker([-24.18869,-65.30046], {icon: busIcon}).addTo(map);
L.marker([-24.20225,-65.30207], {icon: busIcon}).addTo(map);
L.marker([-24.21902,-65.27383], {icon: busIcon}).addTo(map);
//L.marker([-24.18906,-65.29562], {icon: busIcon}).addTo(map); -24.21902,-65.27383
/**/