<template>
  <footer>
    <span> Copyright &copy Josipovic Ivona {{ date }} </span>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        date: new Date().getFullYear(),
      }
    }
  }
</script>

<style scoped>
  footer {
    background-color: #ca2bd0;
    color: white;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
</style>