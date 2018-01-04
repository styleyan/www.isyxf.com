/**
 * 首页路由
 */

const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['../../views/index/index.vue'], resolve),
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
    component: resolve => require(['../../views/post/router-view.vue'], resolve),
    children: [
      {
        name: 'post-index',
        path: ':url',
        component: resolve => require(['../../views/post/article/index.vue'], resolve),
      },
    ],
  },
  {
    path: '/series',
    name: 'series',
    component: resolve => require(['../../views/series/index.vue'], resolve),
  },
]

export default routes
