<template>
  <div class="page">
    <h1> {{ title }} </h1>
    <div v-html="content" class="content"></div>
  </div>
</template>

<script>
import { getPost, formatPost } from '../api/getSinglePost'

  export default {
    props: ['sendID'],
    data() {
      return {
        title: "",
        content: "",
      }
    },
    mounted() {
      getPost('posts', this.sendID).then(result => {
        let obj = formatPost(result)
        this.title = obj.title;
        this.content = obj.content
      })
    }
  }
  
</script>

<style>
  img {
    width: 100%;
  }
  h1 {
    margin-block: 1.5rem;
  }

  h3 {
    padding-top: 1rem;
  }
</style>
