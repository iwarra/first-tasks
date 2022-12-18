<template>
  <div class="pagination">
    <button class="page-btn" :disabled="pageNumber <= 0"
      @click="routeTo(Number(pageNumber) -1)">Previous</button>
    <template v-for="(_, index) in paginated">
      <button :key="index" v-if="index < paginationLength" 
        :class="['page-btn', pageNumber == index + 1 ? 'active' : '']" 
        @click="routeTo(index +1)">{{index + 1}}</button>
    </template>
    <button class="page-btn" :disabled="pageNumber >= paginationLength"
      @click="routeTo(Number(pageNumber) +1)">Next</button>
  </div>
</template>

<script>
import { paginated } from '../controller/data';
import { useRouter } from 'vue-router';

export default {
  emits: ['paginationClicked'],
  props: ['pageNumber'],
  setup(props, {emit}) {
    let paginationLength = paginated.length - 1;
    const router = useRouter()

    function paginationRoute(index) {
      index == 0 ? 
      router.push({ name: 'products'}) 
      : router.push({ name: 'paginatedProducts', params: { number: index } })
    }

    function routeTo(index) {
      emit('paginationClicked', index)
      paginationRoute(index)
    }
    
    return { paginated, routeTo, paginationLength }
  }
}

</script>

<style scoped>
  .pagination {
    display: flex;
    gap: .4em;
    margin-block: 2rem;
    align-self: center;
  }
  .page-btn {
    padding: .5em;
    background-color: #eee;
    border: 1px solid darkgray;
    border-radius: 5px;
    cursor: pointer;
  }
  .active {
    background-color: var(--clr-primary);
    cursor: auto;
  }

</style>