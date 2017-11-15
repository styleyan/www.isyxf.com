/**
 * 列表路由
 */

const routes = [
  {
    path: '/list',
    name: 'list',
    component: resolve => require(['../../views/list/Index.vue'], resolve),
  },
]

export default routes
