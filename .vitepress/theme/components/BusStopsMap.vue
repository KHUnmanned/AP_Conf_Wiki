<template>
  <div>
    <div id="map" style="height: 500px;"></div>
    <br><br>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const L = await import('leaflet')
  await import('leaflet/dist/leaflet.css')

  // Async import of images to ensure correct bundling and paths
  const markerIcon = (await import('leaflet/dist/images/marker-icon.png')).default;
  const markerShadow = (await import('leaflet/dist/images/marker-shadow.png')).default;

  // Fix default icon globally
  L.Marker.prototype.options.icon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });

  const map = L.map('map').setView([54.413444, -1.694761], 12)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  const busStops = [
    { name: "Catterick Garrison Bus Stop", lat: 54.377079, lon: -1.722744, link:"https://www.google.com/maps/place/Premier+Inn+Catterick+Garrison+hotel/@54.3769442,-1.7225999,3a,75y,325.7h,77.8t/data=!3m7!1e1!3m5!1s6xy9C93LchWtI_MZUjNWbQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D12.198409643516783%26panoid%3D6xy9C93LchWtI_MZUjNWbQ%26yaw%3D325.6990261488112!7i16384!8i8192!4m9!3m8!1s0x487c1e4b10e74457:0x99c8b8b0bd1d70e9!5m2!4m1!1i2!8m2!3d54.3765311!4d-1.7227628!16s%2Fg%2F11ckqr6xxy?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D" },
    { name: "Richmond Centre Bus Stop", lat: 54.404766, lon: -1.736951, link:"https://www.google.com/maps/@54.4049445,-1.7368222,3a,75y,228.26h,77.95t/data=!3m7!1e1!3m5!1s8rqrmDmZTgq7IH3Lqk2g9w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D12.052492070000241%26panoid%3D8rqrmDmZTgq7IH3Lqk2g9w%26yaw%3D228.25597751329897!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"},
    { name: "Holiday Inn Bus Stop", lat: 54.442241, lon: -1.671700, link:"https://www.google.com/maps/@54.4423374,-1.6715815,3a,75y,261h,73.38t/data=!3m7!1e1!3m5!1scfcfF65AcYLSo6hHWC-dXw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D16.618453449281006%26panoid%3DcfcfF65AcYLSo6hHWC-dXw%26yaw%3D261.0039541410336!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"},
    { name: "Scotch Corner Services Bus Stop", lat: 54.444925, lon: -1.666172, link:"https://www.google.com/maps/@54.4446007,-1.6666227,3a,75y,56.17h,80.03t/data=!3m7!1e1!3m5!1s-HpC3rmoHq4apyRa9X6-2w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D9.972509093329151%26panoid%3D-HpC3rmoHq4apyRa9X6-2w%26yaw%3D56.16954013770076!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"},
    { name: "Travel Lodge Bus Stop", lat: 54.427107, lon: -1.667066, link:"https://www.google.com/maps/@54.4270429,-1.6665721,3a,75y,280h,80.6t/data=!3m7!1e1!3m5!1sUpEMWA6pO7O8YpsTdBYRXw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D9.397627868561173%26panoid%3DUpEMWA6pO7O8YpsTdBYRXw%26yaw%3D280.002900445514!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"},
  ]

  busStops.forEach(p => {
    L.marker([p.lat, p.lon])
      .addTo(map)
      .bindPopup(`<strong>${p.name}</strong><br/><a href="${p.link}" target="_blank" rel="noopener">View on Street View.</a>`)
  })
})
</script>
