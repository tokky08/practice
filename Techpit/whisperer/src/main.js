import Vue from 'vue'
import App from './App.vue'
import router from './router'

// ここから追加
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

// ここまで追加


// ここから追加
import { firestorePlugin } from 'vuefire'          
import firebase from 'firebase'     
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({                
  apiKey: "AIzaSyAfMA08l4R2Jao7kf1M6o-3miz6w6PdEks",
  authDomain: "whisperer-tokky08.firebaseapp.com",
  projectId: "whisperer-tokky08",
  storageBucket: "whisperer-tokky08.appspot.com",
  messagingSenderId: "95410133035",
  appId: "1:95410133035:web:07feca304c95c0104ef26e"
})

export const db = firebase.firestore()
export const auth = firebase.auth()
// ここまで追加

