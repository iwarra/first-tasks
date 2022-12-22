<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal">
      <span>Are you sure you want to delete this product?</span>
      <div class="answers">
        <span @click="clickedYes(product)" class="yes-btn">Yes</span> 
        <span @click="clickedNo()" class="no-btn">No</span>
      </div>
    </div>
  </div>
</template>

<script>
import { remove } from '@/controller/storage';
import { inject } from 'vue';
  export default {
    props: ['product'],
    setup(props) {
      const { isVisible, toggle } = inject('modalVisibility')

      function clickedYes(product) {
        remove('inCart', 'sku', product.sku)
        toggle()
      }

      function clickedNo() {
        //return product to as it was before 
        toggle()
      }
      return { remove, isVisible, toggle, clickedYes, clickedNo }
    }
  }
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000c1;
}
.modal {
  background-color: rgb(243, 241, 241);
  text-align: center;
  font-size: 1.5em;
  font-weight: 400;
  padding: 2rem;
  height: 200px;
  width: 500px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.answers {
  display: flex;
  justify-content: space-evenly;
  font-weight: 600;
  cursor: pointer;
}

.yes-btn:hover, .no-btn:hover {
  color: var(--clr-accent);
  transition: 1s;
}
</style>