<template>
  <TheProduct :product="product"/>
</template>

<script>
  import TheProduct from '@/components/TheProduct.vue';
  import { useRoute } from 'vue-router'; 
  import products from '../data/products.json';

  export default {
    components: { TheProduct },
    setup() {
      const route = useRoute()
      const routeSku = route.params.sku
      function findProduct() {
        return products.find(product => product.SKU == routeSku)  
      }
      let product = findProduct();
      return { products, routeSku, findProduct, product } 
    }
  }
</script>
