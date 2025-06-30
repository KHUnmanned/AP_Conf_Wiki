import DefaultTheme from 'vitepress/theme'
import './custom.css' // imports CSS overrides
import { defineAsyncComponent } from 'vue'

// Extend the default vitepress theme
export default {
  ...DefaultTheme,

  enhanceApp({ app }) {
    app.component('RichmondCarParksMap', defineAsyncComponent(() => import('./components/RichmondCarParksMap.vue'))),
    app.component('BusStopsMap', defineAsyncComponent(() => import('./components/BusStopsMap.vue')))
    app.component('TimeTable', defineAsyncComponent(() => import('./components/TimeTable.vue')))
  },

}



