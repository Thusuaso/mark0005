// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  app: {
  head: {

    title:'Mekmar',
    charset: 'utf-8',
    meta: [
      
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      { name: 'description', content: 'My amazing site.' }
    ],

    script: [
      {src:'https://kit.fontawesome.com/0867affd7d.js'},

    ],
      link: [
        {rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"},
        {rel:"icon",href:"https://cdn.mekmarimage.com/logo/mekmar-up-icon.png"},

    ],
    style: [
    ],

  }
},

  nitro: {
    preset: 'node-server'
  },

  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    "maz-ui/nuxt",
    "@element-plus/nuxt",
    '@primevue/nuxt-module',
    "@vee-validate/nuxt",
    "@nuxtjs/sitemap"
  ],

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/default.css",
    "@fancyapps/ui/dist/fancybox/fancybox.css",
  ],

  "overrides": { "vue": "3.3.13" },

  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
},

  compatibilityDate: "2024-07-16",
  override:true,
  site: {
    url: 'https://www.mekmar.com',
    trailingSlash: true
  },
})