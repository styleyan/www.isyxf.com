/**
 * 首页路由
 */

const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['../../views/index/Index.vue'], resolve),
  },
  {
    path: '/archive',
    name: 'archive',
    component: resolve => require(['../../views/archive/index.vue'], resolve),
  },
  {
    path: '/link',
    name: 'link',
    component: resolve => require(['../../views/link/index.vue'], resolve),
  },
  {
    path: '/post',
    name: 'post',
    component: resolve => require(['../../views/post/index.vue'], resolve),
  },
]

export default routes
