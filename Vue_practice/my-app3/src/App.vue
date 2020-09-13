<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div v-if="msg.length > 0">
      <HelloWorld2 :msg="msg"/>
    </div>
    <p v-else>no text</p>
    <input type="text" v-model="msg">
    <button v-on:click="clear()">clear</button>
  </div>
</template>

<script>
import HelloWorld2 from './components/HelloWorld2.vue'

export default {
  name: 'App',
  components: {
    HelloWorld2
  },
  data(){
    return{
      msg: "parant"
    }
  },
  methods: {
    clear () {
      this.msg = ''
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
