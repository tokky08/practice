<!-- Header.vue -->
<template>
  <header>
    <router-link to="/">
      <h1>whisp.</h1>
    </router-link>
    <!-- ここから追加 -->
    <div v-if="currentUser" class="btns">
      <p>v-if</p>
      <p>{{currentUser.uid}}</p>
      <router-link :to="'/user/'+currentUser.uid">
        <button :style="'background-image: url('+currentUser.photoURL+')'"></button>
      </router-link>
      <button>
        <fa icon="sign-out-alt" @click="signOut" />
      </button>
    </div>
    <div v-else class="btns">
      <button>
        <fa icon="user" @click="signIn" />
      </button>
    </div>
    <!-- ここまで追加 -->
  </header>
</template>

<!-- ここから追加 -->
<script>
import firebase from 'firebase'
import { auth } from '../main'
import { db } from '../main'

export default {
  // ここから追加
  data () {
    return {
      currentUser: {}
    }
  },
  created () {
    alert('Hello, '+JSON.stringify(this.currentUser)+'!')
    auth.onAuthStateChanged(user => {
      this.currentUser = user
      // alert('Hello, '+this.currentUser+'!')
    })
  },
　// ここまで追加

  // ここから追加
  methods: {
    signIn () {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
      .then((result) => {
        this.$router.push('/user/'+result.user.uid) 
        alert('Hello, '+result.user.displayName+'!')
        this.createUser(result.user)
      })
    },
    createUser (user) {
      db.collection('users').doc(user.uid).set({
        'name': user.displayName,
        'photoURL': user.photoURL,
        'email':user.email
      }, { merge: true })
    },
    signOut () {
      if (window.confirm('Are You Sure to Sign Out?')) {
        auth.signOut()
        .then(() => {
          alert('You Safely Signed Out.')
          this.$router.push('/')
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