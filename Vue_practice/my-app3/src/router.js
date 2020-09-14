import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネントを読み込む
// import Home from '@/views/Home'
// import Product from '@/views/Product'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)
// VueRouterインスタンスを生成する
const router = new VueRouter({
  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    // {
    //   path: '/',
    //   component: Home
    // },
    // {
    //   path: '/product',
    //   component: Product
    // },
    {
      path: '/page1',
      component: page1
    },
    {
      path: '/page2',
      component: page2
    }
  ]
})
// 生成したVueRouterインスタンスをエクスポート
export default router