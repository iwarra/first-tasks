<template>
  <div class="page">
    <h1>Ten latest posts</h1>
    <ul v-for="preview in previews" :key="preview.id" class="preview-list">
    <li>
      <h2> {{ preview.title}} </h2>
      <p>{{ preview.summary }}</p> 
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

  .btn {
    cursor: pointer;
    padding: .3em .5em;
    margin-top: .5em;
    background-color: #eee;
    border: .5px gray solid;
    border-radius: 5px;
    color: #ca2bd0;
    transition: .5s;
  }
  .btn:hover {
    background-color: rgb(248, 244, 244);
    transition: .5s;
  }
</style>
