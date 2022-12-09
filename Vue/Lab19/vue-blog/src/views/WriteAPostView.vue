<template>
  <div class="page">
    <h1>Add a new post</h1>
    <form class="form">
      <label for="title">Write a post:</label>
      <input v-model="articleTitle" type="text" id="title" name="articleTitle" placeholder="Article title" autofocus class="input">
      <textarea v-model="articleText" name="articleText" class="input" placeholder="Your article..."></textarea>
      <button class="btn add" @click.prevent="sendData">Add</button>
    </form>
  </div>
</template>

<script>
import { postAnArticle } from '../api/postArticle'

  export default {
    data() {
      return {
        articleTitle: '',
        articleText: '',
      }
    },
    methods: {
      sendData() {
        let articleObj = {
          title: this.articleTitle,
          text: this.articleText,
        }
      postAnArticle(articleObj) 
      }
    }
  }
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  textarea {
    resize: none;
    height: 250px;
    overflow: auto;
  }

  .add {
    width: 100px;
    font-weight: 600;
  }
</style>