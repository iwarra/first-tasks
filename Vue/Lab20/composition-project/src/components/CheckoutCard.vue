<template>
  <div>
    <h1 v-if="productTotal == 1" >There is {{ productTotal }} product in your cart</h1>
    <h1 v-else>There are {{ productTotal }} products in your cart</h1>
    <div class="parent"> <!-- loop thru all products in the cart? -->
      <img src="../../public/coffee-machine.png" alt="coffee machine">
      <div class="product-info">
        <h2>Product Name</h2>
        <em class="sku">SKU: {{ sku }}</em>
      </div>
    </div>
    <ChangeQuantity :sku="sku"/>
    <div class="total">
      <span class="total-text">Your total is: </span>
      <span class="total-number">{{priceTotalFormated}} </span>
    </div>
  </div>
</template>

<script>
import { countTotal } from '../controller/cart';
import { getAll, remove } from '../controller/storage'
import { inject } from 'vue';
import ChangeQuantity from '../components/ChangeQuantity.vue'

  export default {
    components: { ChangeQuantity },
    setup() {

      const { cartTotal: productTotal } = inject("cartTotal")
      const priceTotal = countTotal('inCart', 'price')
      const priceTotalFormated = new Intl.NumberFormat('de-DE', {style: 'currency' , currency: 'EUR'}).format(priceTotal)

      return { priceTotal, productTotal, getAll, remove, priceTotalFormated}
    }
  }

</script>

<style scoped>
  .parent {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .product-info {
    display: flex;
    flex-direction: column;
  }

  img {
    height: 200px;
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
</style>