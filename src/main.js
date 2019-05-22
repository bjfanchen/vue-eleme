// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import axios from 'axios'
import App from './App'
// import router from './router'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

import 'common/stylus/index.styl' // 加载自定义样式

Vue.use(VueRouter)
Vue.config.productionTip = false

// 定义路由，每个路由映射一个组件，组件通过import已经引入
const routes = [
  {path: '/', redirect: '/goods'}, // 重定向，配置默认路由
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
]

// 创建router实例，然后传`routes`配置
const router = new VueRouter({
  mode: 'history', // 设置HTML5 history模式，避免url中多一个#
  linkActiveClass: 'active', // 配置router-link链接激活时使用的CSS类名，默认值是router-link-active
  routes
})

// 创建和挂载根实例
/* eslint-disable no-new */
new Vue({
  el: '#app', // #app是index.html中的
  router,
  components: { App },
  template: '<App/>'
})
