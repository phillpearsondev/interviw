<template>
  <div id="app">
    <img alt="Clix logo" src="./assets/logo.png">
    <HelloWorld msg="Authentication in your hands" />
    <RandomNumberGenerator />
    <PushButton />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import RandomNumberGenerator from './components/RandomNumberGenerator.vue'
import PushButton from './components/PushButton.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    RandomNumberGenerator,
    PushButton
  }
}

</script>

<style>
html {
  margin: 0;
  padding: 0;
  border: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

body {
  background: url(./assets/images/background.jpg);
  background-size: cover;
}

.random-number-generator {
  background-color: rgba(64, 0, 87, 0.335);
  border: solid 2px rgb(123, 74, 141);
  width: 15vh;
  height: 15vh;
  margin: 5vh 0 5vh 0;
  padding: 0;
  transform: translateX(45.80vw)
}



#button-actual {
  background: url(../src/assets/images/btn-up.png) no-repeat;
  background-position: 0%;
  background-size: contain;
  height: 25vh;
  width: 25vh;
  border: none;
}

#button-actual:active {
  background: url(../src/assets/images/btn-down.png) no-repeat;
  background-position: 0%;
  background-size: contain;
  height: 25vh;
  width: 25vh;
  border: none;
}

#svg-circle-container {
  background: rgb(0, 255, 0);
  height: 20vh;
  width: 20vh;
  border-radius: 50%;
  margin-left: 10px;
}
</style>
