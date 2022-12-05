<template>
  <div class="page">
    <h1>Ten latest posts</h1>
    <input v-model="filter" class="article" type="text" placeholder="Search..">
    <ul class="article-list">
    <li v-for="preview in results()" :key="preview.id" class="preview-list">
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
        posts: [],
        filter: '',
      }
    },
    methods: {
      results() {
        return this.posts.filter(post => {
          let title = post.title.toLowerCase()
          let summary = post.summary.toLowerCase()
          let key = this.filter.toLowerCase()

          if (title.includes(key) || summary.includes(key)) return true
        })
      }
    },
    mounted() {
      getPostsToPreview().then(res => {
        this.posts = createPostObj(res)
      });
    },
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
