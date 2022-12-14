<template>
  <div class="quantity-bar">
    <span>&#8854;</span>
    <input type="text" placeholder="{{productTotal}}" v-model="productTotal">
    <span>&#10753;</span>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup () {
  const { cartTotal: productTotal } = inject("cartTotal")  

    return { productTotal }
  }
}
</script>

<style scoped>
  input {
    border: none;
    width: 1rem;
    font-size: 1rem
  }

  span {
    width: 1rem;
    font-size: 2rem;
  }
  .quantity-bar {
    display: flex;
    gap: 1em;
    justify-content: start;
    align-items: center;
  }
</style>