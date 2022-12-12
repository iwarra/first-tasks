<template>
  <div>
    <h1>This is the products page</h1>
    <div class="container">
      <div class="card" v-for="product in products">
        <ProductInfo :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductInfo from '@/components/ProductInfo.vue';
import products from '../data/products.json'
export default { 
  components: { ProductInfo },
  setup() {
    return { products }
  }
}

</script>

<style scoped> 
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
}

.card {
    display: flex;
    flex-direction: column;
    max-width: 275px;
    background-color: #eee;
    padding: 1em;
    gap: 1em;
    border-radius: .5rem;
  }

  h1 {
    margin-block: 1rem;
  }
</style>