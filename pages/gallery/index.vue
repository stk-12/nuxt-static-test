<template>
  <div class="l-page">
    <div class="l-inner">
      <h1>Gallery Page</h1>

      <ul class="list">
        <li v-for="photo in visiblePhotos" :key="photo.id">
          <a :href="photo.url" target="_blank">
            <div class="img">
              <img :src="photo.thumbnailUrl" alt="">
            </div>
            <p>{{ photo.title }}</p> 
          </a>
        </li>
      </ul>
      <div v-if="visiblePhotos.length < photos.length" class="more">
        <button @click="loadMore">もっと読み込む</button>
      </div>

    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const { data: photos } = await useFetch('https://jsonplaceholder.typicode.com/photos')

  const itemsToShow = ref(10)
  const visiblePhotos = ref(photos.value.slice(0, itemsToShow.value))

  const loadMore = () => {
    itemsToShow.value += 10
    visiblePhotos.value = photos.value.slice(0, itemsToShow.value)
  }

  // const { data: users, error } = await useFetch('https://jsonplaceholder.typicode.com/usersss')
  // if(error.value) {
  //   throw createError({ statusCode: 404, statusMessage: 'Page Not Found!!'})
  // }

</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  li {
    width: 20%;
    padding: 10px;
    @include mdMax {
      width: 25%;
    }
    @include smMax {
      width: 50%;
    }
  }
  .img {
    width: 100%;
    aspect-ratio: 1 / 1;
    background: #eee;
  }
  p {
    margin-top: 10px;
  }
}

.more {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>

