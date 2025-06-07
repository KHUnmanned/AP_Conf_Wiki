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
          { text: 'List of Talks', link: '/talks' },
          { text: 'List of Demos', link: '/demos' }
        ]
      },
      {
        text: 'Travel to Conference',
        // collapsed: true,
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
          { text: 'UK Flyer ID', link: '/markdown-examples' },
          { text: 'Operating Area', link: '/api-examples' },
          { text: 'Site Rules', link: '/api-examples' },
          { text: 'Insurance', link: '/api-examples' },
        ]
      }
    ],

    // Add logo to header
    logo: {
      light: '/images/APDC-Logo.svg',
      dark:'/images/APDC-Logo-Dark.svg'
    },

    // Remove title from header
    siteTitle: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },

    lastUpdated: true,

  }
})
