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
        <ChangeQuantity :sku="product.sku" :price="product.pricePerPiece" :total="product.qty" :product="product"/>
        <span class="price">{{new Intl.NumberFormat('de-DE', {style: 'currency' , currency: 'EUR'}).format(product.price)}}</span>
      </div>
</template>

<script>
import ChangeQuantity from '../components/ChangeQuantity.vue'
import { remove } from '../controller/storage';

  export default {
    components: { ChangeQuantity },
    props: ['product'],
    setup(props) {
      
      return { remove }
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
    font-size: 1em;
    cursor: pointer;
  }
  .product-info {
    display: flex;
    flex-direction: column;
    gap: .3rem;
  }

  img {
    height: 200px;
  }

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>