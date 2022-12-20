<template>
  <div class="checkout-container">
    <h1 v-if="productTotal == 1" >There is {{ productTotal }} product in your cart</h1>
    <h1 v-else>There are {{ productTotal }} products in your cart</h1>
    <div class="card" v-for="product in checkoutItems" :key="product.sku"> 
      <CheckoutCard :product="product"/>
    </div>
    <div class="total">
      <span class="total-text">Your total is: </span>
      <span class="total-number">{{new Intl.NumberFormat('de-DE', {style: 'currency' , currency: 'EUR'}).format(priceTotal)}} </span>
    </div>
  </div>
</template>

<script>
import CheckoutCard from '../components/CheckoutCard.vue';
import { inject } from 'vue';
import { checkoutItems } from '../controller/checkout'

  export default {
    components:  { CheckoutCard } ,
    setup() {
      const { priceTotal } = inject('price')
      const { cartTotal: productTotal } = inject("cartTotal")

      return { productTotal, checkoutItems, priceTotal }
    }
  }
</script>

<style scoped>
 .card {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;
 }

 .total {
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    align-items: flex-end;
  }

  .total-text{
    font-size: 1.5rem;
  }

  .total-number{
    font-size: 2rem;
  }

  .checkout-container {
    margin-bottom: 2rem;
    justify-self: center;
    min-width: 100%;
  }
</style>