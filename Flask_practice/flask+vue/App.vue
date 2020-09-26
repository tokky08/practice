<template>
  <div id="app">
    <h1>テスト！！</h1>
  </div>
</template>

<script>
// import HelloWorld2 from './components/HelloWorld2.vue';
// import myheader from './components/myheader.vue';


export default {
  name: 'App',
  components: {
    // HelloWorld2,
    // myheader
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
