var mymap = L.map('map');
mymap.setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(mymap);
mymap.on('click', function (e) {
    window.alert("You clicked the map at ".concat(e.latlng));
});
