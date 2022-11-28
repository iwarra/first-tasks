<template>
  <header class="navbar">
    <img class="logo" src="../assets/vue.svg" alt="Vue Logo">
    <div class="login" v-show="loginSwitch">
      <span class="login-text"> Please login </span>
    </div>
    <div class="logout" v-show="logoutSwitch">
      <span class="welcome-text"> Welcome, {{name}} </span>
      <button class="logout-btn" @click="$emit('logout-clicked')"> Logout </button>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Navbar',
    props: ['loginSwitch', 'logoutSwitch', 'name']
  }
</script>


<style scoped>
  .navbar {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: #eee;
    padding: 1em;
    margin-bottom: 1em;
  }

  .logout-btn {
    border: .5px solid gray;
    padding: .5em 1em;
    border-radius: 5px;
    background-color: rgb(253, 251, 251);
    margin-right: 3em;
  }
  .logout-btn:hover{
    cursor: pointer;
    background-color: #41b883;
    color: white;
  }

  .logo {
    margin-left: 3em;
  }
  .login-text {
    margin-right: 3em;
  }
  .welcome-text {
    margin-right: 1em
  }
</style>