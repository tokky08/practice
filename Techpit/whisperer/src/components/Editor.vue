<!-- Editor.vue -->

<template>
  <li class="item">
    <div class="user-box">
      <div class="avatar" :style="'background-image: url('+currentUser.photoURL+')'"></div>
      <p class="user-name">{{currentUser.displayName}}</p>
    </div>
    <div class="editor">
      <textarea placeholder="new whisper" v-model="newWhisper" @keypress.enter="createWhisper"> 
      </textarea>
      <p class="message">Press Enter to Whisper</p>
    </div>
  </li>
</template>

<script>
import { db } from '../main'

export default {
  props: ['currentUser'],
  data () {
    return {
      newWhisper: ''
    }
  },
  methods: {
    createWhisper () {
      const date = new Date()
      db.collection('whispers').add({
        'content': this.newWhisper,
        'date': date,
        'uid': this.$props.currentUser.uid
      })
      .then(
        this.newWhisper = ''
      )
    }
  }
}
</script>

<style lang="stylus">
.item
  list-style none
  border-top 1px solid #eee
  padding 5px 15px
  display flex
  flex-wrap no-wrap
  justify-content flex-start
  position relative
  .editor
    position relative
    width 100%
    textarea
      background transparent
      resize none
      height 80px
      width 96%
      border none
      padding 10px 2%
      font-size .9rem
      font-weight lighter
      &:focus
        outline none
    .message
      opacity 0  
      position absolute
      bottom 5px
      right 10px
      transition .2s
      font-size .8rem
    &:hover
      .message
        opacity 1	
</style>
