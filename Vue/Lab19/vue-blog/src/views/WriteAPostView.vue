<template>
  <div class="page">
    <h1>Add a new post</h1>
    <form class="form">
      <label for="article">Write a post:</label>
      <textarea name="article" id="article" placeholder="Your article..." autofocus cols="70" rows="15"></textarea>
      <button class="btn">Add</button>
    </form>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  #article {
    border: .5px solid rgb(170, 169, 169);
    border-radius: 5px;
    padding: 1em;
  }
</style>