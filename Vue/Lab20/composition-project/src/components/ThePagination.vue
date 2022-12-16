<template>
  <div class="pagination">
    <button class="pagination-btn" @click="routeTo(+currentPage -1)">Previous</button>
    <span v-for="(_, index) in paginated" :key="index">
      <button class="pagination-btn" @click="routeTo(index)">{{index + 1}}</button>
    </span>
    <button class="pagination-btn" @click="routeTo(+currentPage +1)">Next</button>
    <slot></slot>
  </div>
</template>

<script>
import { paginated } from '../controller/data';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';

export default {
  emits: ['paginationClicked'],
  setup(props, {emit}) {
    const router = useRouter()
    const route = useRoute()

    //Need to fix previous, current and add an event to products link in nav 
    const currentPage = ref(route.params.number)

    function paginationRoute(index) {
      router.push({ name: 'paginatedProducts', params: { number: index + 1 } })
    }

    function routeTo(index) {
      emit('paginationClicked', index)
      paginationRoute(index)
    }
    
    return { paginated, routeTo, currentPage }
  }
}

</script>

<style scoped>
  .pagination {
    display: flex;
    gap: .3em;
    margin-block: 1em;
    align-self: center;
  }
  .pagination-btn {
    padding: .5em;
    background-color: #eee;
    border: 1px solid darkgray;
    border-radius: 5px;
    cursor: pointer;
  }
</style>