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
      '@nuxt/image',
      'nuxt-svgo',
    ],
    runtimeConfig: {
      public: {
        appTitle: 'Nuxt Starter'
      }
    },
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
        title: 'Nuxt Starter',
        meta: [
          { 
            name: 'description', 
            content: 'Starter kit for Nuxt 3 projects with Tailwind CSS and more.'
          }
        ],
      }
    }
  })