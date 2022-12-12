<template>
  <header>
    <img src="../../public/icons8-warm-drink-64.png" alt="">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/checkout" >Checkout</router-link>
  </nav>
  </header>
</template>

<script>
  export default {
    name: 'TheHeader'
  }
</script>

<style scoped>
  header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #eee;
      min-height: 80px;
  }
  
</style>