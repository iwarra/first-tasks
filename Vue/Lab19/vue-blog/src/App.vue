<template>
    <Navbar />
    <div class="wrapper">
      <RouterView :sendID="articleID" 
                  @button-clicked="(id) => { articleID = id
                  this.$router.push('/view-post')
                  }" />
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
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
