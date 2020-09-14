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

    
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
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
