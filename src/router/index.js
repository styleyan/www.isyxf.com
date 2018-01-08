import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes,
  // 滚动到顶部
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})
