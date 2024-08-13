// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true, // SSRを有効にして、SSGモードを使用
  // ssr: false, // falseにするとアプリケーションがSPAとして動作するようになる
  app: {
    baseURL: '/nuxt_demo_mpa/',
  },
  hooks: {
    // カスタムルート設定
    'pages:extend' (routes) {
      // for (const route of routes) {
      //   route.alias = resolve(route.path, 'index.html')
      // }
      routes.forEach((route) => {
        const alias = route.path.length > 1 ? `${route.path}/index.html` : '/index.html'        
        route.alias = alias
      })
    }
  },
})
