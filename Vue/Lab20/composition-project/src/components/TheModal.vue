<template>
  <div class="modal-wrapper" v-show="isVisible" :isVisible="isVisible">
    <span>{{ isVisible }}</span>
    <span>Are you sure you want to delete this product?</span>
    <div class="answers">
      <span @click="remove">Yes</span> <span @click="toggle">No</span>
    </div>
  </div>
</template>

<script>
import { remove } from '@/controller/storage';
import { ref } from 'vue';
  export default {
    setup() {
      //Modal alert to check if user wants to delete a product (when the qty = 0)
      //Need to add functionality and communication from CheckoutView
      let isVisible = ref(true);
      function toggle() {
        isVisible.value = !isVisible
      }
      return { remove, isVisible, toggle }
    }
  }
</script>

<style scoped>

.modal-wrapper {
  background-color: white;
  color: var(--clr-accent);
  font-size: 1.5em;
  font-weight: 400;
  padding: 2rem;
  position: fixed;
  z-index: 1;
}

.answers {
  display: flex;
  justify-content: space-evenly;
  font-weight: 600;
  cursor: pointer;
}
</style>