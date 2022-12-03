<template>
  <div class="page">
    <h1> {{ title }} </h1>
    <div v-html="content" class="content"></div>
  </div>
</template>

<script>
import { getPost, htmlParser, placeContent } from '../api/getSinglePost'

  export default {
    data() {
      return {
        title: "",
        content: "",
        id: "",
      }
    },
    mounted() {
      getPost('posts', 5410).then(result => {
        this.title = result.title
        this.id = result.id
/*         console.log(htmlParser(result.article)) */
        this.content = htmlParser(result.article)
          .map(elem => placeContent(elem))
          .join("")
      })
    },
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
