<template>
  <header>
    <a href="/"> <img src="../../public/logo.png" alt="Logo"> </a>
    <nav>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/products" class="link" @click="triggerUpdate(Math.random())">Products</router-link>
      <router-link to="/checkout" class="cart" @click="checkoutClicked">
        <span class="qty">{{ cartTotal }}</span>
        <span class="icon">&#128722;</span>
      </router-link>
    </nav>
  </header>
</template>

<script>
import { inject } from 'vue'; 
import { checkoutItems } from '../controller/checkout'
import { countTotal } from '@/controller/cart';

  export default {
    name: 'TheHeader',
    setup() {
      const { cartTotal } = inject("cartTotal")
      const { triggerUpdate } = inject('trigger')

      function checkoutClicked() {
        checkoutItems
      }

      return { cartTotal, triggerUpdate, checkoutClicked, countTotal }
    }
  }
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--clr-primary);
    min-height: 6rem;
    padding-inline: 1.5rem;
  }

  nav {
    display: flex;
    gap: .5rem;
    align-items: center;
  }
  
  .link {
    color: var(--clr-secondary);
    text-decoration: none;
  }

  .cart {
    text-decoration: none;
    color: var(--clr-secondary);
    padding-left: .5rem;
    cursor: pointer;
  }
  
  .icon {
    font-size:1.7rem;
  }
  
  .qty {
    position: absolute;
    background-color: var(--clr-accent);
    font-size: .9em;
    color: white;
    padding: 3px 8px;
    border-radius: 50%;
    top: 16px; 
    right: 34px;
  }
</style>