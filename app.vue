<template>
  <div>
    <NuxtLayout><!--layoutsを参照-->
      <NuxtPage /><!--pagesを参照-->
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Nuxt Demo', 
  meta: [
    { name: 'description', content: 'Nuxt Demoサイトの説明文'},
    { property: 'og:title', content: 'Nuxt Demoサイト（og:title）' },
    { property: 'og:type', content: 'article' },
    { property: 'og:description', content: 'Nuxt Demoサイト（og:description）' },
    { property: 'og:url', content: 'https://tech-sc.net/nuxt_demo_mpa/' },
    { property: 'og:image', content: 'https://tech-sc.net/nuxt_demo_mpa/images/ogp.png' }

  ]
})
</script>

