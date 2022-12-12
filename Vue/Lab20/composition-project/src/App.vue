<template>
  <TheHeader />
  <div class="wrapper">
    <router-view/>
  </div>
  <TheFooter />
</template>

<script>
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';

  export default {
    components: {
      TheHeader,
      TheFooter
    }
  }

</script>

<style>
  @import "../src/assets/base.css";

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Open Sans', sans-serif;
  }
  
  .wrapper {
    display: flex;
    flex: 1;
    max-width: 1200px;
    align-self: center;
  }
</style>
