<template>
  <div class="quantity-bar">
    <div class="quantity-selector">
      <v-icon class="icon" name="minus-circle" 
        @click="updateCartClicked()"/>
    </div>
    <input type="number" autocomplete="off" v-model="inputQty">
    <div class="quantity-selector">
      <v-icon class="icon" name="plus-circle" 
        @click="addToCartClicked()"/>
    </div>
  </div>
</template>

<script>
import { inject, ref } from 'vue';
import { addToCart, countTotal, updateCart, getTotalPricePerProduct } from '@/controller/cart';
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/plus-circle'
import 'vue-awesome/icons/minus-circle'

export default {
  components: {
    "v-icon": Icon
  },
  props: ['product'],
  setup (props, {emit}) {
    const { setCartTotal } = inject("cartTotal")  
    const { setPriceTotal } = inject('price')
    let inputQty = ref(0)
    inputQty.value = inputQty.value + props.product.qty

    function addToCartClicked() {
      addToCart(props.product.sku, props.product.pricePerPiece)
      setCartTotal(countTotal('inCart', 'qty'))
      inputQty.value++
      setPriceTotal(countTotal('inCart', 'price'))
      emit('countingTotal', getTotalPricePerProduct(props.product.sku))
    }

    function updateCartClicked() {
      updateCart(props.product.sku, props.product.pricePerPiece)
      setCartTotal(countTotal('inCart', 'qty'))
      inputQty.value--
      setPriceTotal(countTotal('inCart', 'price'))
      emit('countingTotal', getTotalPricePerProduct(props.product.sku))
    }

    return { addToCartClicked, setCartTotal, inputQty, updateCartClicked }
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

  /* Removes sidebar in input type number for Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  button {
    background-color: white;
    border: 2px solid rgb(221, 221, 221);
    font-size: calc(var(--size) / 3);
    height: calc(var(--size) / 1.5);
    width: calc(var(--size) / 1.5);
    border-radius: 20%;
  }

  .icon {
    cursor: pointer;
  }

  .quantity-bar > * {
    font-weight: 900;
  }
  
  .quantity-bar {
    display: flex;
    gap: .5rem;
    justify-content: flex-start;
    align-items: center;
    height: var(--size);
  }
</style>