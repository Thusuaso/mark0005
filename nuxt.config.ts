// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  app: {
  head: {

    title:'Mekmar Marble & Natural Stone Supplier/Manufacturer Universally',
    charset: 'utf-8',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      { name: 'description', content: "Mekmar produces tile,slab,mosaic,sink,etc made from marble,travertine,limestone with cross/vein cut in white,beige,grey,black colors and exports worldwide" },
      // { name:'google-site-verification',content:'-2spBZ_-lBKXZMQ9r5jpKUNxQ_KOI1Gf_CVKyn7URHA' },
      { name:"keywords",content:"Marble, Travertine, Natural Stone, Limestone, Beige,Interior Design" }

    ],

    script: [
      // {src:'https://kit.fontawesome.com/0867affd7d.js'},
      // {src:'https://www.googletagmanager.com/gtag/js?id=G-1VBK9JFP48'},
      
    ],
    
      link: [
        // {rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"},
        {rel:"icon",href:"https://cdn.mekmarimage.com/logo/mekmar-up-icon.png"},
        // {rel:"canonical",href:'https://www.mekmar.com'}

    ],
    style: [
    ],

  }
},

  nitro: {
    preset: 'node-server',
    prerender: {
      // crawlLinks: true,
      routes: ['/', 'sitemap.xml'],
      // routes: ['/'],

      failOnError: false,
    },
  },

  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    "maz-ui/nuxt",
    "@element-plus/nuxt",
    '@primevue/nuxt-module',
    "@vee-validate/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots"
  ],

  css: [
    "~/assets/css/default.css",

    "bootstrap/dist/css/bootstrap.min.css",
    "@fancyapps/ui/dist/fancybox/fancybox.css",
    "~/assets/icons/font/bootstrap-icons.min.css"
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
  sitemap: {
    sources: ['/api/sitemap'],
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.5,
      changefreq: 'weekly'
    },
    cacheMaxAgeSeconds: 3600
  },
  runtimeConfig: {
    public: {
      gtagId: 'G-1VBK9JFP48',
    }
  },
  vite: {
    server: {
        headers: {
            'Cache-Control': 'max-age=50000000'
        }
    }
  },
  robots: {
    // provide simple disallow rules for all robots `user-agent: *`
    disallow: [
      '/videos', 
      '/fr/videos',
      '/es/videos',
      '/ru/videos',
      '/ar/videos',
      '/search/*',
      '/fr/search/*',
      '/es/search/*',
      '/ru/search/*',
      '/ar/search/*',

    ],
    sitemap:'https://mekmar.com/sitemap.xml'
  },
  static: {
    prefix: false
  }

})