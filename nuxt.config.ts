// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@vee-validate/nuxt'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      exclude: ['vee-validate']
    }
  },
  router: {
    options: {
      sensitive: false  // This makes routes case-insensitive
    }
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      API_TOKEN: process.env.API_TOKEN,
    }
  }

})