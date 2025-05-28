// Initialize the map
const map = L.map('map').setView([28.6139, 77.2090], 13); // You can change coordinates

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Click to add marker
map.on('click', function (e) {
  const { lat, lng } = e.latlng;

  L.marker([lat, lng]).addTo(map)
    .bindPopup('Waste report added here.').openPopup();

  // Optional: Log or use lat/lng in your form
  console.log("Latitude:", lat, "Longitude:", lng);
});
