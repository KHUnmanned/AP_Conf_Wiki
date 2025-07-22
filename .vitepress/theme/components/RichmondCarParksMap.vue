<template>
  <div>
    <h3>Richmond Town Centre Car Parks</h3>
    <div id="map" style="height: 500px;"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import "leaflet/dist/leaflet.css"
import * as L from 'leaflet';
import markerIconUrl from "../../../node_modules/leaflet/dist/images/marker-icon.png";
import markerIconRetinaUrl from "../../../node_modules/leaflet/dist/images/marker-icon-2x.png";
import markerShadowUrl from "../../../node_modules/leaflet/dist/images/marker-shadow.png"

L.Icon.Default.prototype.options.iconUrl = markerIconUrl;
L.Icon.Default.prototype.options.iconRetinaUrl = markerIconRetinaUrl;
L.Icon.Default.prototype.options.shadowUrl = markerShadowUrl;
L.Icon.Default.imagePath = "";

onMounted(() => {

  const map = L.map('map').setView([54.403473, -1.739696], 16)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  const carParks = [
    { name: "Nuns Close Car Park", lat: 54.405191, lon: -1.742836, link:"https://www.myringgo.co.uk/parkinglocator/31800" },
    // { name: "Market Place Car Park", lat: 54.403067, lon: -1.736531, link:"https://www.myringgo.co.uk/parkinglocator/31800" },
    { name: "York Square Car Park", lat: 54.401477, lon: -1.742091, link:"https://www.myringgo.co.uk/parkinglocator/31802"},
    { name: "Victoria Road North Car Park", lat: 54.404503, lon: -1.739562, link:"https://www.myringgo.co.uk/parkinglocator/31803"},
    { name: "Victoria Road South Car Park", lat: 54.404371, lon: -1.740170, link:"https://www.myringgo.co.uk/parkinglocator/31804"},
  ]

  carParks.forEach(p => {
    L.marker([p.lat, p.lon])
      .addTo(map)
      .bindPopup(`<strong>${p.name}</strong><br/><a href="${p.link}" target="_blank" rel="noopener">View on RingGo for more details.</a>`)
  })
})
</script>
