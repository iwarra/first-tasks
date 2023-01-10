<template>
    <Header />
    <Hero />
    <Main />
    <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Main,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

</style>
