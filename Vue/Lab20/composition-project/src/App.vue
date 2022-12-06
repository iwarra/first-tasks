<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/checkout" >Checkout</router-link>
  </nav>
  <div class="wrapper">
    <router-view/>
  </div>
  <footer>
    <span>All rights reserved</span>
  </footer>
</template>

<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  nav {
     display: flex;
     gap: 1rem;
     align-items: center;
     justify-content: center;
     background-color: #eee;
     min-height: 80px;
  }
  footer {
    background-color: #eee;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wrapper {
    display: flex;
    flex: 1;
  }
</style>
