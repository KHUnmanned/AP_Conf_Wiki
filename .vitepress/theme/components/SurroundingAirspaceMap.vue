<template>
  <div>
    <div id="map_airspace" style="height: 500px;"></div>
    <br><br>
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

  const centre = {lat: 54.41278, lng: -1.66750}

  const map = L.map('map_airspace').setView(centre, 10);

  // Stop the page from scrolling when the zoom buttons are pressed
  const stopNav = (e) => { e.preventDefault(); };

  document.querySelectorAll('.leaflet-control-zoom a').forEach(a => {
    a.setAttribute('href', 'javascript:void(0)');
    a.addEventListener('click', stopNav, true); // capture phase to beat the router
  });

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 
    {
      attribution: 'Tiles © Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
    }
  ).addTo(map);

  // Add NOTAMed area
  const notam_area = L.circle(centre, {
    radius: 700,
    color: 'blue',
  }).addTo(map);
  notam_area.bindPopup("<b>NOTAM Area</b><br>The area covered by NOTAM H5655/25.")


  // Feldom Danger Area
  let latlngs =  [[54.47389, -1.86639],
                  [54.46389, -1.82250],
                  [54.44889, -1.78167],
                  [54.42028, -1.80528],
                  [54.41306, -1.83444],
                  [54.41806, -1.86639],
                  [54.45556, -1.89722],
                  [54.47389, -1.86639]]

  const feldom = L.polygon(latlngs, {
    color: 'red'
  }).addTo(map);
  feldom.bindPopup("<b>EGD408 Feldom</b><br><b>Distance:</b> 9 km<br><b>Bearing:</b> 278°<br><b>Upper limit:</b> 5600 FT ALT<br><b>Lower limit:</b> Surface<br><b>Activity:</b> Ordnance, Munitions and Explosives / Unmanned Aircraft System (VLOS/ BVLOS).<br><b>Tel:</b> 01748-875502 (Range TSO).")

  // Bellerby Danger Area
  const bellerby = L.circle([54.34417, -1.85694], {
    radius: 2300,
    color: 'red'
  }).addTo(map);
  bellerby.bindPopup("<b>EGD442 BELLERBY</b><br><b>Distance:</b> 12 km<br><b>Bearing:</b> 238°<br><b>Upper limit:</b> 3000 FT ALT<br><b>Lower limit:</b> Surface<br><b>Activity:</b> Ordnance, Munitions and Explosives / Unmanned Aircraft System (VLOS/ BVLOS).<br><b>Tel:</b> 01748-875502 (Range TSO).")


  // Leeming
  // First add the runway ends
  latlngs =  [[54.34111, -1.58111],
                  [54.34472, -1.56722],
                  [54.33194, -1.55750],
                  [54.32833, -1.57139]]
  L.polygon(latlngs, {color: 'red'}).addTo(map);
  latlngs =  [[54.34417, -1.50417],
              [54.34000, -1.49083],
              [54.32889, -1.50083],
              [54.33250, -1.51528]]
  L.polygon(latlngs, {color: 'red'}).addTo(map);
  latlngs =  [[54.25472, -1.56972],
              [54.25889, -1.58306],
              [54.26083, -1.58139],
              [54.25583, -1.56861]];
  L.polygon(latlngs, {color: 'red'}).addTo(map);
  latlngs =  [ [54.24389, -1.48972],
               [54.24028, -1.50361],
               [54.25306, -1.51333],
               [54.25667, -1.49944]];
  L.polygon(latlngs, {color: 'red'}).addTo(map);

  // Now do the centre circle
  const leeming = L.circle([54.29250, -1.53528], {
    radius: 4630,
    color: 'red'
  }).addTo(map);
  leeming.bindPopup("<b>EGRU408A LEEMING</b><br><b>Distance:</b> 16 km<br><b>Bearing:</b> 146°<br><b>Upper limit:</b> 2000 FT ALT<br><b>Lower limit:</b> Surface<br><b>Activity:</b> FRZ for Military Airport with Manned Aircraft.<br><b>Tel:</b> 01677 458139 (Duty Operations Controller).")


  // Teeside
  // First add the runway ends
  latlngs =  [[54.46861, -1.49389],
              [54.47528, -1.50444],
              [54.48444, -1.48694],
              [54.47778, -1.47667]];
  L.polygon(latlngs, {color: 'red'}).addTo(map);
  latlngs =  [[54.54972, -1.36472],
              [54.54306, -1.35417],
              [54.53389, -1.37194],
              [54.54056, -1.38222]];
  L.polygon(latlngs, {color: 'red'}).addTo(map);

  // Now do the centre circle
  const teeside = L.circle([54.50917, -1.42944], {
    radius: 4630,
    color: 'red'
  }).addTo(map);
  teeside.bindPopup("<b>EGRU409A TEESIDE INTERNATIONAL</b><br><b>Distance:</b> 18 km<br><b>Bearing:</b> 56°<br><b>Upper limit:</b> 2000 FT ALT<br><b>Lower limit:</b> Surface<br><b>Activity:</b> FRZ for International Airport with Manned Aircraft.<br><b>Tel:</b> 01325 331020 (ATC).")


  // Add instructions for using the map
  L.popup()
    .setLatLng(centre)
    .setContent("Click on the objects to see what they represent.")
    .openOn(map);

})
</script>
