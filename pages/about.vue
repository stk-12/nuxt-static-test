<template>
  <div class="l-page">
    <div class="l-inner">
      <h1>About Page</h1>

      <NuxtLink to="/">Topページへ</NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: `ABOUTページ`,
  meta: [
    { name: 'description', content: 'ABOUTページの説明文'},
    { property: 'og:title', content: 'ABOUTページ（og:title）' },
    { property: 'og:description', content: 'ABOUTページ（og:description）' }
  ]
})
</script>