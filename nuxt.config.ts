import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { 
    enabled: true 
  },
  css: [
    '~/assets/css/main.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts'
  ],
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: ['300', '400', '500', '600', '700'],
        subsets: ['latin'],
        display: 'swap'
      },
    ]
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Nuxt starter template',
      // meta: [
      //   { 
      //     name: 'description', 
      //     content: 'Web development, interface design and digital consultancy.'
      //   }
      // ],
      // link: [
      //   { 
      //     rel: 'shortcut icon', 
      //     type: 'image/png', 
      //     href: 'https://a.storyblok.com/f/299693/130x128/f7e6b5d5e7/favicon.png?v=1'
      //   },
      // ],
    }
  }
})