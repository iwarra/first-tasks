<template>
  <SingleProduct :product="product"/>
</template>

<script>
  import SingleProduct from '@/components/SingleProduct.vue';
  import { useRoute } from 'vue-router'; 
  import { findSingleProduct } from '../controller/data'

  export default {
    components: { SingleProduct },
    setup() {
      const route = useRoute()
      const routeSku = route.params.sku
      let product = findSingleProduct(routeSku);

      return { routeSku, findSingleProduct, product } 
    }
  }
</script>
