<template>
  <div class="header">
    <img alt="Vue logo" src="../assets/logo.png">
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  img {
    height: 50px;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-inline: 1em;
  }

  li {
    list-style: none;
    display: inline;
    margin-inline: 5px;
  }

  a:hover {
    color: #41b883;
    transition: 0.2s;
  }

  a {
    transition: 0.2s;
    text-decoration: none;
    color: #35495e;
  }

@media (max-width: 700px) {
  .header {
    flex-direction: column;
  }

  li {
    display: block;
  }

  ul {
    margin-bottom: 5px;
  }
}
</style>