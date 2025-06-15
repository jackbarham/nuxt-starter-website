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
  }
})