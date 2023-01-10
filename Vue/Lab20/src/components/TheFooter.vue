<template>
  <footer>
    <span>All rights reserved</span>
  </footer>
</template>

<script>
  export default {
    name: 'TheFooter',
  }
</script>

<style scoped>
  footer {
    background-color: var(--clr-primary);
    color: var(--clr-secondary);
    min-height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>