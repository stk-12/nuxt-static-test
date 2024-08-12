// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  // ssr: false, // falseにするとアプリケーションがSPAとして動作するようになる
  app: {
    baseURL: '/nuxt_demo_mpa/'
  },
})
