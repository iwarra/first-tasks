<template>
    <Navbar />
    <div class="wrapper">
      <RouterView />
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
