<!-- Header.vue -->
<template>
  <header>
    <router-link to="/">
      <h1>whisp.</h1>
    </router-link>
    <div class="btns">
      <button @click="signIn">
        <fa icon="user" />
      </button>
    </div>
  </header>
</template>

<!-- ここから追加 -->
<script>
import firebase from 'firebase'
import { auth } from '../main'

export default {
  // ここから追加
  methods: {
    signIn () {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
      .then((result) => {
        alert('Hello, '+result.user.displayName+'!')
      })
    },
    signOut () {
      if (window.confirm('Are You Sure to Sign Out?')) {
        auth.signOut()
        .then(() => {
          alert('You Safely Signed Out.')
          this.$router.push('/'),
          location.reload()
        })
      }
    }
  }
  // ここまで追加
}
</script>
<!-- ここまで追加 -->

<style lang="stylus" scoped>
header
  position fixed
  top 0
  width 100%
  text-align center
  padding 10px
  h1
    width fit-content
    margin 0 auto
    font-size 1.4rem
  .btns
    position absolute
    top 10px
    right 30px
    cursor pointer
    img
      width 100%
</style>