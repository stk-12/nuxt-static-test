<template>
  <div>
    <h1>Top Page</h1>

    <NuxtLink to="/about/">Aboutページへ</NuxtLink>
    <NuxtLink to="/company/">Companyページへ</NuxtLink>
    <a href="/nuxt_demo_mpa/about/">Aboutへ（aタグ）</a>

    <br>

    <p>public/に格納</p>
    <img src="/images/1.jpg" alt="">

    <br>

    <p>assets/に格納</p>
    <div class="img-half">
      <img src="~/assets/images/2.jpg" alt="">
    </div>

    
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
}

.img-half {
  img {
    width: 50%;
    @include smMax {
      width: 100%;
    }
  }
}
</style>

<script setup>
useHead({
  title: `TOPページ｜Nuxt Demo`, 
  meta: [
    { name: 'description', content: 'TOPページの説明文'},
    { property: 'og:title', content: 'TOPページ（og:title）' },
    { property: 'og:type', content: 'website' },
    { property: 'og:description', content: 'TOPページ（og:description）' },
  ]
})
</script>
