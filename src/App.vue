<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <DButton text="222" />
  <HelloWorld msg="HelloWorld" />
</template>

<script>
import DButton from './components/DButton/DButton.vue'
import HelloWorld from './components/HelloWorld/HelloWorld.vue'

// import { DButton, HelloWorld } from './index'

export default {
  name: 'App',
  components: {
    DButton,
    HelloWorld
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
