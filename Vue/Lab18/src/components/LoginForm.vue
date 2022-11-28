<template>
  <form class="login-form" @submit.prevent="handleSubmit" v-show="isVisible">
    <label for="name">Username:</label>
    <input type="text" id="name" v-model="username" ref="nameInput">
    <span class="error" > {{errorName}} </span>

    <label for="password">Password:</label>
    <input id="password" type="password" v-model="password" ref="passwordInput">
    <span class="error" > {{errorPassword}} </span>

    <button type="submit" class="btn">Submit</button>
  </form>
</template>


<script>
  export default {
    name: 'LoginForm',
    props: [ "isVisible"],
    data() {
      return {
        username:'',
        password: '',
        errorName: '',
        errorPassword: '', 
      }
    },
    methods: {
      handleSubmit() {
        if (this.username.trim() === "") {
          this.errorName = 'You need to enter your name!'
          this.$refs.nameInput.focus()
          return
        }
        if (this.password.trim() === "") {
          this.errorPassword = 'You need to enter your password!'
          this.$refs.passwordInput.focus()
          return
        }

        const user = {
          username: this.username,
          password: this.password
        }

        localStorage.setItem('user', JSON.stringify(user))

        this.$emit('submited', user.username);
        console.log(user)
        
        this.username = ''
        this.password = ''
        this.errorName = ''
        this.errorPassword = ''
      },
    }
  }
</script>


<style scoped>
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8em;
  }
  
  label {
    font-size: large;
  }

  input {
    border: .5px solid rgb(208, 205, 205);
    border-radius: 5px;
    height: 2.3em;
    padding-inline-start: .8em;
    min-width: 50%;
  }

  .btn {
    border: .5px solid rgb(208, 205, 205);
    padding: .5em 2em;
    border-radius: 8px;
    background-color: #ffffff;
    font-size: large;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
  }

  .btn:hover {
    cursor: pointer;
    background-color: #eee;
    transition: .8s;
  }

  .error {
    color: #d33529e3;
  }
</style>