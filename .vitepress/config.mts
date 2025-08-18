import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ArduPilot Conference 2025 Attendee Guide",
  description: "A wiki to help attendees of the ArduPilot 2025 Conference",
  base: '/ap-conf2025/',
  head: [
    ['link', { rel: 'icon', href: '/ap-conf2025/favicon.ico', type: 'image/x-icon' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Schedule',
        // collapsed: true,
        items: [
          { text: 'Time Table', link: '/time-table' },
          { text: 'Demo Support', link: '/demos' },
          { text: 'Conference Dinner', link: '/conferenceDinner' }
        ]
      },
      {
        text: 'Travel to Conference Venue',
        // collapsed: true,
        link: '/travel_to_venue',
        items: [
          { text: 'Bus Stops', link: '/bus-stops' },
          { text: 'Equipment Drop Off', link: '/equipment-drop-off' },
          { text: 'Disabled Access', link: '/disabled-access' }
        ]
      },
      {
        text: 'Flight Information',
        // collapsed: true,
        items: [
          { text: 'Flyer/Drone Registration', link: '/flyer-registration' },
          { text: 'Operating Area', link: '/operating-area' },
          // { text: 'Site Rules', link: '/api-examples' },
          // { text: 'Insurance', link: '/api-examples' },
        ]
      },
      { text: 'Getting to Yorkshire', link: '/travel' },
      { text: 'Family & Friends', link: '/familyAndFriends' },
      { text: 'Sponsors', link: '/sponsors' },
      { text: 'Help & Contact', link: '/help_and_contact' }
    ],

    // Add logo to header
    logo: {
      light: '/images/APDC-Logo.svg',
      dark:'/images/APDC-Logo-Dark.svg'
    },

    // Remove title from header
    siteTitle: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KHUnmanned/AP_Conf_Wiki' }
    ],

    search: {
      provider: 'local'
    },

    lastUpdated: true,

  }
})
