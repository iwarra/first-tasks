<template>
  <Navbar :loginSwitch="loginSwitch"
          :logoutSwitch="logoutSwitch"
          :name="name"
          @logout-clicked="() => {
            isVisible = !isVisible;
            loginSwitch = !loginSwitch;
            logoutSwitch = !logoutSwitch;
            removeStorage
          }"/>

  <LoginForm :isVisible="isVisible"
              @submited="(username) => {
                isVisible = !isVisible;
                loginSwitch = !loginSwitch;
                logoutSwitch = !logoutSwitch;
                name = username;
              }" />
</template>


<script>
import Navbar from './components/Navbar.vue';
import LoginForm from './components/LoginForm.vue';

  export default {
    components: {
      Navbar,
      LoginForm
    },
    data() {
      return {
        isVisible: true,
        loginSwitch: true,
        logoutSwitch: false,
        name: "",
      }
    },
    computed: {
      removeStorage() {
        localStorage.removeItem('user')
      }
    }
  }
</script>

<style>
  #app {
    width: 100%
  }
</style>
