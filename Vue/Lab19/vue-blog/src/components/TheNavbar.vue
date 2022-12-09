<template>
<nav class="nav-bar">
  <div class="nav-container">
    <a href="/"><img src="https://thesmokedetector.net/wp-content/uploads/2017/12/102005.jpg" alt="TSD logo"></a>
    <ul class="nav-links">
      <li> <RouterLink to="/" class="link"> Home </RouterLink> </li>
      <li> <RouterLink to="/write-post" class="link"> New post </RouterLink> </li>
    </ul>
  </div>
</nav>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    justify-content: center;
    background-color: #fdfbfc;
  }

  .nav-container {
    width: 100%;
    display: flex;
    max-width: 960px;
    align-items: center;
    justify-content: space-between;
  }

  .nav-links {
    display: flex;
    gap: 1em;
  }
  
  .link {
    color: #ca2bd0;
  }

  .link:hover {
    color: rgb(103, 4, 179);
  }

  img {
    width: 80px;
  }

  li {
    list-style: none;
  }
</style>