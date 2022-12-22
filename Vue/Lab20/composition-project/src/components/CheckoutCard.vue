<template>
    <img src="../../public/coffee-machine.png" alt="coffee machine">
      <div class="product-info">
        <div class="row">
          <h2>{{product.name}}</h2>
          <button class="close-btn" @click="remove('inCart', 'sku', product.sku)">x</button>
        </div>
        <em class="sku">SKU: {{ product.sku }}</em>
        <span class="price">
          {{new Intl.NumberFormat('de-DE', {style: 'currency' , currency: 'EUR'}).format(product.pricePerPiece)}}
        </span>
        <ChangeQuantity :product="product" @countingTotal="updateTotalPerProduct"/>
        <span class="price total">Total: {{ new Intl.NumberFormat('de-DE', {style: 'currency' , currency: 'EUR'}).format(currentTotal) }}</span>
      </div>
</template>

<script>
import ChangeQuantity from '../components/ChangeQuantity.vue'
import { remove } from '../controller/storage';
import { ref } from 'vue';

  export default {
    components: { ChangeQuantity },
    props: ['product'],
    setup(props) {
      let currentTotal = ref(props.product.price)
      function updateTotalPerProduct(update) {
        currentTotal.value = update
      }

      return { remove, updateTotalPerProduct, currentTotal }
    }
  }
</script>

<style scoped>
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }

  .close-btn {
    justify-self: flex-end;
    background-color: white;
    border: none;
    font-weight: 600;
    font-size: 1.2em;
    cursor: pointer;
    color: rgb(167, 164, 164);
    transition: 1s;
  }

  .close-btn:hover {
    color: black;
    transition: 1s;
  }
  .product-info {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
  }

  img {
    height: 200px;
  }

  h2 {
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--clr-secondary);
  }

  .total {
    font-weight: 500;
  }
</style>