<template>
  <div class="main">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa quia fugiat provident, ratione non aliquid tempore.</p>
    <p> Voluptate alias totam recusandae veniam maiores perferendis dolores maxime iure, eligendi labore ab minima obcaecati.</p>
    <p>Aliquam quisquam, sit assumenda natus architecto quidem fugiat laboriosam? Harum modi ea, porro similique ipsa culpa illo?</p>
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style scoped>
  .main {
    margin: 1rem;
    flex-grow: 1;
    display: flex;
    padding-inline: 2rem;
    gap: 2.5rem;
    text-align: justify;
    font-size: smaller;
  }

  @media (max-width: 700px) {
  .main {
    flex-direction: column;
  }
}
</style>