<template>
    <Navbar />
    <div class="wrapper">
      <span>{{ articleID }}</span>
      <RouterView :sendID="articleID" @button-clicked="(id) => { articleID = id }" />
    </div>
    <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

  export default {
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        articleID: "",
        sendID: '',
      }
    }
  }
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
