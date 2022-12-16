<template>
  <div class="pagination">
    <button class="pagination-btn">Previous</button>
    <span v-for="(item, index) in paginated" :key="index">
      <button class="pagination-btn" @click="$emit('paginationClicked', index, item)">{{index + 1}}</button>
    </span>
    <button class="pagination-btn">Next</button>
    <slot></slot>
  </div>
</template>

<script>
import { paginated } from '../controller/data';

export default {
  
  setup() {
    
    return { paginated }
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