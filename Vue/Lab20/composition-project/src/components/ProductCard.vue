<template>
  <img src="../../public/image-placeholder.png" alt="no photo available">
  <div>
    <h2>{{ productName }}</h2>
    <em class="sku">SKU: {{ sku }}</em>
  </div>
  <span v-if="Stock > 0 ">Stock: {{ Stock }}</span>
  <span v-else class="stock">Out of stock</span>
  <div class="buy"> 
  <span class="price">{{ priceFormated }}</span>
  <button v-if="Stock > 0" @click="addToCartClicked()" class="cart-btn">Add to cart &#128722;</button>
  </div>
</template>

<script>
import { addToCart, countTotal } from '../controller/cart.js'
import { inject } from 'vue';

  export default {
    name: 'ProductInfo',
    props: [ 'product' ],
    setup(props) {
      const { Producer: producer, SKU: sku, EUR: price, Stock } = props.product
      const productName = props.product['Name of product']
      const priceFormated = new Intl.NumberFormat('de-DE', {style: 'currency' , currency: 'EUR'}).format(price)

      const { setCartTotal } = inject("cartTotal")
      function addToCartClicked() {
        addToCart(sku, price)
        setCartTotal(countTotal('inCart', 'qty'))
      }
  
      return { producer, sku, price, productName, Stock, addToCartClicked, priceFormated}
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
    font-size: 1rem;
    transition: 2s;
  }

  .cart-btn:hover {
    background-color: rgb(215, 211, 211);
    transition: 2s;
  }

  .price {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--clr-accent);
  }

  .sku {
    color: gray;
    font-size: .9rem;
  }

  .stock {
    font-weight: 600;
    color: gray;
  }
</style>