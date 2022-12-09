<template>
  <div class="page">
    <h1>Ten latest posts</h1>
    <input v-model="filter" class="input" type="text" placeholder="Search...">
    <ul class="article">
      <li v-for="post in results" :key="post.id">
        <h2> {{ post.title}} </h2>
        <span>{{ post.summary }}</span> 
        <button class="btn" @click="$emit('button-clicked', post.id)">Read more</button>
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
    computed: {
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
  .article {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: .3rem;
  }
</style>
