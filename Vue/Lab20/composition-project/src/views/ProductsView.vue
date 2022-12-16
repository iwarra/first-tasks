<template>
  <div class="products-container">
    <h1>Our coffee universe </h1>
    <div class="card-container" :key="pageNumber">
    <div class="card" :key="product.SKU" v-for="product in paginated.at(pageNumber)" 
        @click="openProductPage($event, product.SKU)">
        <ProductCard :product="product"/>
      </div>
    </div>
    <ThePagination @paginationClicked="updatePageNumber"/>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import ThePagination from '@/components/ThePagination.vue';
import { paginated } from '../controller/data';
import { useRouter, useRoute } from 'vue-router';
import { ref } from "vue";

export default { 
  components: { ProductCard, ThePagination },
  setup() {
    // route to single-product page
    const router = useRouter();
    function openProductPage(event, productSKU) {
      if (event.target.localName === 'button') return
      router.push({ name: 'product', params: { sku: productSKU } })
    }

    // to get current address-bar number
    const route = useRoute()
    let pageNumber = ref(route.params.number)
    function updatePageNumber(newNumber) {
      pageNumber.value = newNumber
    }

    return { openProductPage, paginated, pageNumber, updatePageNumber }
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