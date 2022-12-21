<template>
  <TheHeader/>
  <div class="wrapper">
    <router-view/>
  </div>
  <TheFooter />
</template>

<script>
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';
  import { ref, provide } from 'vue'
  import { countTotal } from '../src/controller/cart';

  export default {
    components: {
      TheHeader,
      TheFooter,
    },
    setup() {
      const cartTotal = ref(countTotal('inCart', 'qty'))
      function setCartTotal(newCartQty) {
        cartTotal.value = newCartQty
      }

      const priceTotal = ref(countTotal('inCart', 'price'))
      function setPriceTotal(newTotal) {
        priceTotal.value = newTotal
      }

      let trigger = ref(Math.random())
      function triggerUpdate(randomNr) {
        trigger.value = randomNr
      }

      provide('cartTotal', {
        cartTotal,
        setCartTotal,
      })

      provide('price', {
        priceTotal,
        setPriceTotal,
      })

      provide('trigger', {
        triggerUpdate,
        trigger
      })

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

  h1 {
    margin-block: 2rem;
    color: #4d3227;
  }
</style>
