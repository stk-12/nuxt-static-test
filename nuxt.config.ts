// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true, // SSRを有効にして、SSGモードを使用
  // ssr: false, // falseにするとアプリケーションがSPAとして動作するようになる
  app: {
    baseURL: '/nuxt_demo_mpa/',
    // head: {
    //   title: 'Nuxt Demo',
    //   meta: [
    //     { name: 'description', content: 'Nuxt Demoサイトの説明文'},
    //     { property: 'og:title', content: 'Nuxt Demoサイト（og:title）' },
    //     { property: 'og:type', content: 'article' },
    //     { property: 'og:description', content: 'Nuxt Demoサイト（og:description）' }
    //   ]
    // }
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
  css: ["~/assets/styles/style.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/global" as *;'
        }
      }
    }
  }
})
