<template>
<nav class="navigation">
  <img src="https://thesmokedetector.net/wp-content/uploads/2017/12/102005.jpg" alt="TSD logo">
  <ul class="links">
    <li> <RouterLink to="/" class="link">Home</RouterLink> </li>
    <li> <RouterLink to="/write-post" class="link">Write</RouterLink> </li>
    <li> <RouterLink to="/view-post" class="link">Read</RouterLink> </li>
  </ul>
</nav>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .navigation {
    display: flex;
    background-color: #fcfafb;
    align-items: center;
    justify-content: space-between;
    padding-inline: 3em;
  }

  .links {
    display: flex;
    gap: 1em;
  }

  img {
    width: 80px;
  }

  li {
    list-style: none;
  }

  .link {
    color: #ca2bd0;
  }

</style>