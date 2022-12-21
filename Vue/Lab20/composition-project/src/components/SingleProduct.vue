<template>
  <div class="container">
    <div class="product-card">
        <img src="../../public/coffee-machine.png" alt="Coffee machine">
        <div class="info">
          <h1>{{ producer }}</h1>
          <em class="sku">{{sku}}</em>
          <h2>{{ productName }}</h2>
          <span v-if="Stock > 0" class="stock in-stock">{{Stock}} in stock</span>
          <span v-else class="stock out-of-stock">Out of stock</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod tempora alias rerum ad laborum! Distinctio eveniet neque, doloribus dicta numquam dolor consequatur, vitae, iure repudiandae eos inventore ratione nulla repellendus.</p>
          <div class="call-to-action" >
            <span class="price">Price: {{ priceFormated }}</span>
            <button class="cart-btn" v-if="Stock > 0" @click="addToCartClicked()">Add to cart &#128722;</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { updateCart, countTotal } from '../controller/cart.js';
import { inject } from 'vue';

export default {
  props: [ 'product' ],
  setup(props) {
    let { Producer: producer, SKU: sku, EUR: price, Stock } = props.product
    producer = producer.toUpperCase()
    const productName = props.product['Name of product']
    const priceFormated = new Intl.NumberFormat('de-DE', {style: 'currency' , currency: 'EUR'}).format(price)
    
    const { setCartTotal } = inject("cartTotal")
    function addToCartClicked() {
      updateCart(sku, price, 'addition')
      setCartTotal(countTotal('inCart', 'qty'))
    }

    return { producer, sku, price, productName, Stock, priceFormated, addToCartClicked }
  }
}
</script>

<style scoped>
  h1 {
    margin: 0;
  }

  .container {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .product-card {
    display: flex;
    flex-direction: row;
    gap: 2em;
  }
  
  img {
    width: 100%;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .call-to-action {
    display: flex;
    align-items: center;
  }

  .price {
    color: var(--orange);
    font-weight: 600;
    font-size: 1.2rem;
    margin-right: 1.6rem;
  }

  .in-stock {
    color: darkgreen;
  }

  .in-stock::before {
    content: "\2713";
    padding-right: 0.2rem;
  }
</style>