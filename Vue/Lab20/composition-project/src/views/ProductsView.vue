<template>
  <div>
    <h1>This is the products page</h1>
    <div v-for="product in products">
      <ProductInfo :product="product"/>
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
</style>