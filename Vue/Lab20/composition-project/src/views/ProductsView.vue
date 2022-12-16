<template>
  <div class="products-container">
    <h1>Our coffee universe </h1>
     <div class="card-container">
      <div class="card" v-for="product in paginated.at(pageNumber)" 
        @click="openProductPage($event, product.SKU)">
        <ProductCard :product="product"/>
      </div>
    </div>
    <ThePagination :arr="item" @paginationClicked="(index) => { }"/>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import ThePagination from '@/components/ThePagination.vue';
import { paginated } from '../controller/data'
import { useRouter, useRoute } from 'vue-router';
import { ref } from "vue"

export default { 
  components: { ProductCard, ThePagination },
  setup() {
    // for pagination
    function paginationRoute(index, router) {
      router.push({ name: 'paginatedProducts', params: { number: index + 1 } })
    }
    const route = useRoute()
    let pageNumber = ref(route.params.number)
  

    // for opening single product page
    const router = useRouter();
    function openProductPage(event, productSKU) {
      if (event.target.localName === 'button') return
      router.push({ name: 'product', params: { sku: productSKU } })
    }

    return { openProductPage, paginated, pageNumber, router, paginationRoute }
  }
}
</script>

<style scoped> 
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-gap: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  background-color: #eee;
  padding: 1em;
  gap: 1em;
  border-radius: .5rem;
  cursor: pointer;
}

.products-container {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1210px) {
  .products-container {
    padding-inline: 2rem;
  }
}
</style>