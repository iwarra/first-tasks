<template>
<div class="hero_image">
  <div class="call_to_action">
    <h1>Welcome</h1>
    <button class="btn" @click="showtext">Click here</button>
  </div>
</div>
</template>

<script>
  export default{
    name: 'Hero',
    methods: {
      showtext() {
        console.log('You clicked the button.')
      }
    }
  }
</script>

<style scoped>
  .hero_image {
    height: 50vh;
    background-image: url(../assets/hero.jpg) ;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .call_to_action {
    padding: 3rem;
  }

  h1 {
    color: rgba(255, 255, 255, 0.971);
    margin-bottom: .3rem;
  }

  .btn {
    cursor: pointer;
    color: #35495e;
    padding: .3rem 1rem;
    background-color: rgb(246, 243, 243);
    border-radius: 5px;
    border: 1px solid #022113;
  }
</style>