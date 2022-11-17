<template>
  <div class="footer">
    <p class="footer_text">&copy; {{year}} Ivona Josipovic</p>
  </div>
</template>

<script>
export default {
  data() {
    return{
    year: new Date().getFullYear(),
    }
  },
  name: 'Footer',
}
</script>

<style scoped>
.footer {
  height: 10vh;
  width: 100%;
  background: #35495e;
  color: #41b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>