var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

var conflicts = {
  "Israel–Palestine": [31.5, 34.8],
  "Sudan–South Sudan": [9.145, 30.5],
  "Cuba–USA": [21.5, -77.8],
  "Ukraine–Russia": [48.3, 31.2],
  "India–China–Pakistan": [35.6, 77],
  "North Korea–South Korea–USA": [39.2, 127],
  "Yemen–Saudi Arabia": [15.5, 45],
  "Taiwan–China–USA": [23.5, 121]
};

Object.entries(conflicts).forEach(([name, coords]) => {
  L.circle(coords, {
    radius: 300000,
    color: "#00aaff",
    fillColor: "#00aaff",
    fillOpacity: 0.3
  })
  .addTo(map)
  .bindPopup(`<b>${name}</b><br><a href="conflicts/${name.toLowerCase().replace(/–|\s+/g, '-').replace(/-+/g, '-')}.html">View Conflict</a>`);
});