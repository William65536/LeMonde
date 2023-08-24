const map = L.map('map');
map.setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// map.on('click', (e) => {
//     window.alert(`You clicked the map at ${e.latlng}`);
// });

// const tooltip = L.tooltip(latlng, {content: 'Hello world!<br />This is a nice tooltip.'}).addTo(map);

// const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
// svgElement.setAttribute('viewBox', "0 0 200 200");
// svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
// const svgElementBounds = L.latLngBounds(L.latLng(32, -130), L.latLng(13, -100));
// L.svgOverlay(svgElement, svgElementBounds).addTo(map);


