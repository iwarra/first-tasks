<template>
<nav class="nav-bar">
  <a href="/"><img src="https://thesmokedetector.net/wp-content/uploads/2017/12/102005.jpg" alt="TSD logo"></a>
  <ul class="links">
    <li> <RouterLink to="/" class="link"> Home </RouterLink> </li>
    <li> <RouterLink to="/write-post" class="link"> Write </RouterLink> </li>
  </ul>
</nav>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    background-color: #fdfbfc;
    align-items: center;
    justify-content: space-between;
    margin-inline: 2rem;
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

  .link:hover {
    color: rgb(103, 4, 179);
  }

</style>