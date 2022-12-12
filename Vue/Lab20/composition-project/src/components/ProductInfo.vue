<template>
  <img src="../../public/woocommerce-placeholder.png" alt="">
  <div>
    <h2>{{ productName }}</h2>
    <em class="sku">SKU: {{ sku }}</em>
  </div>
  <span>Stock: {{ Stock }}</span>
  <div class="buy"> 
    <span class="price">{{ price }} €</span>
    <span @click="addToCart(sku, qty, price)" class="cart-btn">Add to cart &#128722;</span>
  </div>
</template>

<script>
import { addToCart } from '../controller/cart.js'

  export default {
    name: 'ProductInfo',
    props: [ 'product' ],
    setup(props) {
      const { Producer: producer, SKU: sku, EUR: price, Stock } = props.product
      const productName = props.product['Name of product']

      return { producer, sku, price, productName, Stock, addToCart }
    }
  }
</script>

<style scoped>

  h2 {
    font-size: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  img {
    width: 100%;
  }

  .buy {
    display:flex;
    flex-direction:column;
    align-items: start;
    gap: .5em;
  }

  .cart-btn {
    border: .3px solid rgb(184, 182, 182);
    padding: .5rem .9rem;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(252, 251, 251);
  }

  .price {
    font-weight: 600;
    font-size: 1.5rem;
    color: rgb(245, 149, 5);
  }

  .sku {
    color: gray;
    font-size: .9rem;
  }

</style>