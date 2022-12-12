<template>
  <header>
    <img src="../../public/icons8-warm-drink-64.png" alt="">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/checkout" class="cart">
        <span class="qty">{{totalQty}}</span>
        <span class="icon">&#128722;</span>
        <span>{{ totalPrice }} €</span>
      </router-link>
    </nav>
  </header>
</template>

<script>
  import {countTotal} from '../controller/cart';
 
  export default {
    name: 'TheHeader',
    setup() {
      //need to make reactive
      const totalQty = countTotal('inCart', 'qty')
      const totalPrice = countTotal('inCart' , 'price')
      return { totalQty, totalPrice }
    }
  }
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eee;
    min-height: 80px;
    padding-inline: 1rem
  }

  nav {
    display: flex;
    gap: .5rem;
    align-items: center;
  }
  
  /* cart needs styling */
  .cart {
    background-color: orange;
  }
</style>