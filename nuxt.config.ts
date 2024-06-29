// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: [
    ],
      link: [
        {rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"}
    ],
    style: [
    ],

  }
},




  devtools: { enabled: true },
  modules: [
    "usebootstrap",
    '@pinia/nuxt',
    "maz-ui",
    "@element-plus/nuxt",
  ],
  usebootstrap: {
    bootstrap: {
      prefix: ``
    },
    html: {
      prefix: `B`
    },
  },
  css: [
    "bootstrap/scss/bootstrap.scss",
    "~/assets/css/default.css",
    "@fancyapps/ui/dist/fancybox/fancybox.css"
  ]


  
})