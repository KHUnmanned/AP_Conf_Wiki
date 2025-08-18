<template>
  <div>
    <div id="map" style="height: 500px;"></div>
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

  const map = L.map('map').setView(centre, 15);

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
    fillColor: 'none'
  }).addTo(map);
  notam_area.bindPopup("<b>NOTAM Area</b><br>The area covered by NOTAM H5655/25. This maintains a 200m stand-off to the proposed operating area.")

   var latlngs = [
    [54.417277, -1.667500],
    [54.417259, -1.666826],
    [54.417208, -1.666158],
    [54.417123, -1.665500],
    [54.414250, -1.664680], //corner of A1 stand-off and crowd area intersection
    [54.414231, -1.664858],
    [54.413162, -1.664559],
    [54.413171, -1.664380],
    [54.409790, -1.663433],
    [54.409020, -1.663450],
    [54.408886, -1.663637],// Rejoin into normal arc
    [54.408705, -1.664235],
    [54.408555, -1.664858],
    [54.408437, -1.665500],
    [54.408352, -1.666158],
    [54.408301, -1.666827],
    [54.408283, -1.667500],
    [54.408301, -1.668173],
    [54.408352, -1.668842],
    [54.408437, -1.669500],
    [54.408555, -1.670142],
    [54.408705, -1.670765],
    [54.408886, -1.671363],
    [54.409097, -1.671932],
    [54.409335, -1.672466],
    [54.409600, -1.672963],
    [54.409889, -1.673419],
    [54.410201, -1.673829],
    [54.410532, -1.674191],
    [54.410879, -1.674503],
    [54.411242, -1.674761],
    [54.411616, -1.674963],
    [54.411999, -1.675109],
    [54.412388, -1.675197],
    [54.412780, -1.675227],
    [54.413172, -1.675198],
    [54.413561, -1.675110],
    [54.413944, -1.674964],
    [54.414318, -1.674761],
    [54.414680, -1.674503],
    [54.415028, -1.674192],
    [54.415359, -1.673830],
    [54.415670, -1.673420],
    [54.415959, -1.672964],
    [54.416224, -1.672467],
    [54.416463, -1.671932],
    [54.416674, -1.671364],
    [54.416855, -1.670766],
    [54.417005, -1.670143],
    [54.417123, -1.669500],
    [54.417208, -1.668842],
    [54.417259, -1.668174]
  ]

  const operating_area = L.polygon(latlngs, {color: 'green'}).addTo(map);
  operating_area.bindPopup("<b>Available Operating Area</b><br>Area that is available for normal operations. Direct LoS must still be maintained in this area.")

  // Add a stand-off to the A1
  latlngs = [[54.419395, -1.666112],
             [54.409790, -1.663433],
             [54.407556, -1.663421],
             [54.404015, -1.664474],
             [54.403385, -1.659397],
             [54.407136, -1.658287],
             [54.409972, -1.658368],
             [54.419783, -1.661058]]
  const road_standoff = L.polygon(latlngs, {color: 'red'}).addTo(map);
  road_standoff.bindPopup("<b>Road Stand-off Area</b><br>Aircraft are not to overfly this area.")

  // Add conference crowd area
  latlngs = [[54.413162, -1.664559],
             [54.414231, -1.664858],
             [54.414432, -1.662993],
             [54.413290, -1.662739]]
  const crowd_area = L.polygon(latlngs, {color: 'red'}).addTo(map);
  crowd_area.bindPopup("<b>Audience Viewing Area</b><br>Aircraft are not to overfly this area.")

  // Audience Stand-Off Area
  latlngs = [[54.414144, -1.66560],
             [54.413072, -1.66532],
             [54.412720, -1.66425],
             [54.413171, -1.66438],
             [54.413162, -1.66455],
             [54.414231, -1.66485]]
  const Audiance_standoff_area = L.polygon(latlngs, {color: 'yellow'}).addTo(map);
  Audiance_standoff_area.bindPopup("<b>Audience Stand-Off Zone</b><br>Intended as a transit region from the take off and landing area. Aircraft should be below 30 m AGL and traveling with < 3 m/s ground speed when in this area .")

  // Add Take off and Landing Area
  latlngs = [[54.413256, -1.665141],
             [54.413108, -1.665084],
             [54.413133, -1.664813],
             [54.413284, -1.664851]]
  const takeoff_landing_area = L.polygon(latlngs, {color: 'black'}).addTo(map);
  takeoff_landing_area.bindPopup("<b>Takeoff/Landing Zone</b><br>VTOL aircraft take off and landing point")

  // Public Rights of way
  latlngs = [[54.408237, -1.670401],
             [54.409563, -1.670233],
             [54.411139, -1.670321],
             [54.413580, -1.671637],
             [54.414145, -1.666083],
             [54.414377, -1.664553],
             [54.415012, -1.664813],
             [54.415112, -1.664796],
             [54.415092, -1.663724],
             [54.415820, -1.663870],
             [54.415860, -1.663355],]

  const footpath_base = L.polyline(latlngs, {
    color: 'yellow',
    weight: 3,
    opacity: 0.75
  }).addTo(map);
  footpath_base.bindPopup("<b>Public Right of Way</b><br>Caution: pedestrians, cyclists, and horse riders may be on this path. Member of staff will be standing guard during official conference demos.")

  const footpath_top = L.polyline(latlngs, {
    color: 'black',
    weight: 3,
    dashArray: '12, 12',
    opacity: 0.75
  }).addTo(map);
  footpath_top.bindPopup("<b>Public Right of Way</b><br>Caution: pedestrians, cyclists, and horse riders may be on this path. Member of staff will be standing guard during official conference demos.")

  // Horse Paddock
  latlngs = [[54.414456, -1.664723],
             [54.414430, -1.665001],
             [54.414739, -1.665088],
             [54.414629, -1.666709],
             [54.415138, -1.666964],
             [54.415074, -1.664970]]

  const horse_paddock = L.polygon(latlngs, {
    color: 'black',
    opacity: 0.5,
    fillOpacity: 0.5
  }).addTo(map);
  horse_paddock.bindPopup("<b>Horse Paddock</b><br>Avoid overflying with noisy aircraft")

  // Antenna Mast
  const antenna_mast = L.circle([54.414660, -1.664968], {
    radius: 15,
    color: 'red',
  }).addTo(map);
  antenna_mast.bindPopup("<b>Antenna Mast</b><br>T-mobile mast 65198 (2G/3G/4G).<br>Approx. 25m AGL.")

  // Add no-fly zones over houses
  const house1 = L.circle([54.411339, -1.670857], {
    radius: 150,
    color: 'red',
  }).addTo(map);
  house1.bindPopup("<b>House</b><br>Do not overfly")

  const house2 = L.circle([54.409403, -1.671765], {
    radius: 150,
    color: 'red',
  }).addTo(map);
  house2.bindPopup("<b>House</b><br>Do not overfly")

  // Add instructions for using the map
  L.popup()
    .setLatLng(centre)
    .setContent("Click on the objects to see what they represent.")
    .openOn(map);

})
</script>
