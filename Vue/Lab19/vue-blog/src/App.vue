<template>
    <TheNavbar />
    <div class="wrapper">
      <RouterView :sendID="articleID" 
                  @button-clicked="(id) => { articleID = id
                  this.$router.push('/view-post')
                  }" />
    </div>
    <TheFooter />
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';

  export default {
    components: {
      TheNavbar,
      TheFooter,
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
