<template>
  <div class="quantity-bar">
    <div class="quantity-selector">
      <v-icon name="minus-circle"/>
    </div>
    <input type="text" v-model="cartTotal">
    <div class="quantity-selector">
      <v-icon name="plus-circle" @click="addToCartClicked()"/>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/plus-circle'
import 'vue-awesome/icons/minus-circle'

export default {
  components: {
    "v-icon": Icon
  },
  setup () {
    const { cartTotal } = inject("cartTotal")  
    const { setCartTotal } = inject("cartTotal")

    //Needs SKU and price to add up to total
    function addToCartClicked() {
      addToCart(sku, price)
      setCartTotal(countTotal('inCart', 'qty'))
    }

    return { cartTotal, addToCartClicked, setCartTotal }
  }
}
</script>

<style scoped>
  * {
    --size: 2rem;
  }

  .quantity-selector {
    display: flex;
    align-items: center;
    height: 100%;
  }

  input {
    border: none;
    border-bottom: 3px solid lightgray;
    width: 1rem;
    font-size: 1.4rem;
    width: 2rem;
    text-align: center;
    vertical-align: top;
    min-height: 100%;
  }

  button {
    background-color: white;
    border: 2px solid rgb(221, 221, 221);
    font-size: calc(var(--size) / 3);

    height: calc(var(--size) / 1.5);
    width: calc(var(--size) / 1.5);
    border-radius: 20%;
  }

  .quantity-bar > * {
    font-weight: 900;
  }
  .quantity-bar {
    display: flex;
    gap: .5rem;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
    height: var(--size);
  }
</style>