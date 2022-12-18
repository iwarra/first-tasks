<template>
  <div class="products-container" :key="trigger">
    <h1>Our coffee universe </h1>
    <div class="card-container" :key="key">
    <div class="card" v-for="product in paginated.at(pageNumber)" 
        @click="openProductPage($event, product.SKU)">
        <ProductCard :product="product"/>
      </div>
    </div>
    <ThePagination @paginationClicked="updatePageNumber" :pageNumber="pageNumber"/>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import ThePagination from '@/components/ThePagination.vue';
import { paginated } from '../controller/data';
import { useRouter, useRoute } from 'vue-router';
import { ref, inject, watch } from "vue";

export default { 
  components: { ProductCard, ThePagination },
  setup() {
    let key = ref(Math.random())

    // route to single-product page
    const router = useRouter();
    function openProductPage(event, productSKU) {
      if (event.target.localName === 'button') return
      router.push({ name: 'product', params: { sku: productSKU } })
    }

    // to get current address-bar number
    const route = useRoute()
    let pageNumber = ref(route.params.number ?? 0)

    //Trigger the page to refresh by updating the key
    function updatePageNumber(newNumber) {
      pageNumber.value = newNumber
      key.value = Math.random()
    }

    //Trigger the page to refresh if trigger value changes (products link in nav)
    const { trigger } = inject("trigger")
    watch(trigger, () => {
      pageNumber.value = 0
    })
    
    return { openProductPage, paginated, pageNumber, updatePageNumber, key, trigger }
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