<template>
  <div class="card">
    <h2> {{ productName }}</h2>
    <div class="product-group">
      <img src="../../public/No_image_available.svg.png" alt="">
      <div class="info">
        <span> {{ producer }} </span>
        <span> SKU: {{ sku }}</span>
        <span class="clickable">Read more</span>
      </div>
    </div>
    <div class="buy">
      <span> Price: {{ price }} € </span>
      <span @click="addToCart(sku)" class="cart-btn">Add to cart &#128722;</span>
    </div>
  </div>
</template>

<script>
import { addToCart } from '../controller/cart.js'

  export default {
    name: 'ProductInfo',
    props: [ 'product' ],
    setup(props) {
      const { Producer: producer, SKU: sku, EUR: price } = props.product
      const productName = props.product['Name of product'] 

      return { producer, sku, price, productName, addToCart }

    }
  }
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    border: .3px solid rgb(228, 224, 224);
    gap: 1em;
    align-items: center;
    padding-bottom: 1em;
    margin-bottom: 1em;
  }
  .product-group {
    min-width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .buy {
    display: flex;
    flex-direction: column;
    gap: .5em;
    align-items: center;
    cursor: pointer;
  }
 .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5em;
  }
  span {
    align-self: center;
    cursor: pointer;
  }
  
  img {
    max-width: 100px;
  }

  .cart-btn {
    border: .3px solid rgb(184, 182, 182);
    padding: 5px 8px;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(241, 238, 238);
  }

  .clickable {
    cursor: pointer;
    font-weight: 600;
  }
</style>