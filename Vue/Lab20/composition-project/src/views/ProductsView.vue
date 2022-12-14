<template>
  <div>
    <h1>Our coffee universe </h1>
    <div class="container">
      <div class="card" v-for="product in products" 
      @click="openProductPage($event, product.SKU)">
        <ProductCard :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import products from '../data/products.json'
import { useRouter } from 'vue-router';

export default { 
  components: { ProductCard },
  setup() {
    const router = useRouter();
    function openProductPage(event, productSKU) {
      if (event.target.localName === 'button') return
      router.push({ name: 'product', params: { sku: productSKU } })
    }

    return { products, openProductPage }
  }
}
</script>

<style scoped> 
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.card {
    display: flex;
    flex-direction: column;
    max-width: 275px;
    background-color: #eee;
    padding: 1em;
    gap: 1em;
    border-radius: .5rem;
    cursor: pointer;
  }
</style>