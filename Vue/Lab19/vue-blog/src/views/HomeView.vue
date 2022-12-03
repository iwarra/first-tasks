<template>
  <div class="page">
    <h1>Ten latest posts</h1>
    <ul v-for="preview in previews" :key="preview.id" class="preview-list">
    <li>
      <h2> {{ preview.title}} </h2>
      <span>{{ preview.summary }}</span> 
      <button class="btn" @click="$emit('button-clicked', preview.id)">Read more</button>
    </li>
    </ul>
</div>
</template> 

<script>
import { getPostsToPreview, createPostObj } from '../api/getPostPreviews'

  export default {
    data() {
      return {
        previews: []
      }
    },
    mounted() {
      getPostsToPreview().then(res => {
        this.previews = createPostObj(res)
      })
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
