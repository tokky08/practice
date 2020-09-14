<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <myheader header></myheader>
    <div v-if="msg.length > 0">
      <HelloWorld2 :msg="msg"/>
    </div>
    <p v-else>no text</p>
    <input type="text" v-model="msg">
    <button v-on:click="clear()">clear</button>
    <!-- <router-link to="/page1">ページ１へ</router-link>
    <router-link to="/page2">ページ２へ</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld2 from './components/HelloWorld2.vue';
import myheader from './components/myheader.vue';

export default {
  name: 'App',
  components: {
    HelloWorld2,
    myheader
  },
  data(){
    return{
      msg: "parant",
      header: "headerだよおおお"
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
