<template>
  <div class="page">
    <h1>Ten latest posts</h1>
    <ul class="article-list">
    <li v-for="preview in previews" :key="preview.id" class="preview-list">
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
  .article-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  li {
    display: flex;
    flex-direction: column;
    gap: .3rem;
    list-style: none; 
  }
  
</style>
