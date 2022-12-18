<template>
  <img src="../../public/image-placeholder.png" alt="no photo available">
  <div>
    <h2>{{ productName }}</h2>
    <em class="sku">SKU: {{ sku }}</em>
  </div>
  <div class="buy"> 
    <span class="price">{{ priceFormated }}</span>
    <button v-if="Stock > 0" @click="addToCartClicked()" class="cart-btn">Add to cart &#128722;</button>
    <div v-else class="stock">
      <span>Out of stock</span>
    </div>
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
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    gap: .5em;
  }

  .cart-btn:hover {
    background-color: rgb(215, 211, 211);
    transition: 1s;
  }

  .price {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--clr-accent);
  }

  .stock {
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
</style>