<template>
  <div class="page">
    <h1>Add a new post</h1>
    <form class="form">
      <label for="article">Write a post:</label>
      <input v-model="articleTitle" type="text" name="article" placeholder="Article title" autofocus class="article">
      <textarea v-model="articleText" name="article" class="article" placeholder="Your article..." cols="70" rows="15"></textarea>
      <button class="btn" @click.prevent="sendData">Add</button>
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

  .article {
    border: .5px solid rgb(170, 169, 169);
    border-radius: 5px;
    padding: .5rem;
    box-shadow: 10px 10px 14px -3px rgba(0,0,0,0.1);
  }
</style>