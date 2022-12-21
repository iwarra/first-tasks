<template>
  <div class="pagination">
    <button :disabled="pageNumber <= 0" @click="routeTo(Number(pageNumber) -1)" 
      :class="['first page-btn', pageNumber <= 0 ? 'disabled' : '']">Previous</button>
    <button :class="['page-btn', pageNumber == 0 ? 'active' : '']" 
      @click="routeTo(0)">1</button>
    <template v-for="(_, index) in paginated">
      <button :key="index" v-if="index > 0" 
        :class="['page-btn', pageNumber == index ? 'active' : '']" 
        @click="routeTo(index)">{{index + 1}}</button>
    </template>
    <button :disabled="pageNumber >= paginationLength"
      :class="['last page-btn', pageNumber >= paginationLength ? 'disabled' : '']"
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
    margin-block: 3rem;
    align-self: center;
  }
  .page-btn {
    padding: .5em .8em;
    background-color: rgb(255, 254, 254);
    border: none;
    font-size: 1em;
    background-color: #eee;
    color: var(--clr-secondary);
    cursor: pointer;
  }

  .first {
    border-radius: 15px 0 0 15px;
    padding-left: 1em;
  }

  .last {
    border-radius: 0 15px 15px 0;
    padding-right: 1em;
  }
  .active {
    background-color: var(--clr-accent);
    cursor: auto;
  }

  .disabled {
   color: #5a4137a7;
  }
</style>